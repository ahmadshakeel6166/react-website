import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';
import { PRODUCTS } from '../data/products';
import { Search, Heart, ShoppingBag, Menu, X, Truck, Sparkles, ChevronDown, ArrowRight } from 'lucide-react';

const TRENDING_SEARCHES = ['French Linen', 'Raw Silk Kurta', 'Denim Jacket', 'Cashmere Coat', 'Kids Set', 'Oxford Shirt'];

export const Navbar = ({ onSelectCategory, onOpenTracking, searchQuery, setSearchQuery, onQuickView, activeCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState('');
  const [showResultsDropdown, setShowResultsDropdown] = useState(false);

  const { totalItemsCount, setIsCartOpen } = useCart();
  const { wishlistCount, setIsWishlistOpen } = useWishlist();
  const { formatPrice } = useCurrency();
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setShowResultsDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'New Arrivals', id: 'all' },
    { label: 'Women Pret', id: 'women' },
    { label: 'Men Atelier', id: 'men' },
    { label: 'Haute Festive', id: 'luxury-pret' },
    { label: 'Mini Élan', id: 'kids' },
    { label: 'Lookbook', href: '#lookbook' }
  ];

  const handleNavClick = (link) => {
    if (link.id) {
      onSelectCategory(link.id);
      const catalogEl = document.getElementById('catalog-section');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (link.href) {
      const el = document.querySelector(link.href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleSearchChange = (val) => {
    setLocalSearch(val);
    setSearchQuery(val);
    setShowResultsDropdown(val.trim().length > 0);
  };

  const handleClearSearch = () => {
    setLocalSearch('');
    setSearchQuery('');
    setShowResultsDropdown(false);
  };

  const handleSelectProduct = (product) => {
    setShowResultsDropdown(false);
    setIsSearchOpen(false);
    if (onQuickView) {
      onQuickView(product);
    }
  };

  const handleViewAllResults = () => {
    setShowResultsDropdown(false);
    setIsSearchOpen(false);
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Live matching results
  const liveResults = localSearch.trim()
    ? PRODUCTS.filter(p => {
        const q = localSearch.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q)
        );
      }).slice(0, 5)
    : [];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-sm border-b border-neutral-200/60 py-3'
            : 'bg-white/95 border-b border-neutral-100 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Mobile Hamburger */}
            <div className="flex items-center lg:hidden gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-1.5 text-neutral-800 hover:text-elan-gold transition-colors"
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>

            {/* Left Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
              {navLinks.map((link) => {
                const isActive = activeCategory === link.id;
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link)}
                    className={`text-[12px] xl:text-[13px] tracking-[0.14em] uppercase font-medium transition-all relative py-1 ${
                      isActive
                        ? 'text-elan-gold font-semibold'
                        : 'text-neutral-700 hover:text-elan-gold'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-elan-gold rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Center Brand Logo */}
            <div className="text-center cursor-pointer flex-shrink-0" onClick={() => handleNavClick({ id: 'all' })}>
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] font-bold uppercase text-elan-black hover:opacity-90 transition-opacity block">
                ÉLAN
              </span>
              <span className="text-[9px] tracking-[0.38em] uppercase text-neutral-400 font-medium block -mt-1">
                Haute Couture & Pret
              </span>
            </div>

            {/* Right: Integrated Search Bar & Action Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3" ref={searchContainerRef}>
              
              {/* Prominent Live Search Bar (Desktop) */}
              <div className="relative hidden md:block w-48 lg:w-64 xl:w-72">
                <div className="relative flex items-center">
                  <Search size={15} className="absolute left-3 text-neutral-400 pointer-events-none" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={localSearch}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    onFocus={() => localSearch.trim() && setShowResultsDropdown(true)}
                    placeholder="Search 22 garments, silk, linen..."
                    className="w-full pl-9 pr-7 py-1.5 text-xs bg-neutral-100/80 hover:bg-neutral-100 focus:bg-white border border-neutral-200/90 focus:border-elan-gold rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-elan-gold text-neutral-800 placeholder-neutral-400"
                  />
                  {localSearch && (
                    <button
                      onClick={handleClearSearch}
                      className="absolute right-2.5 text-neutral-400 hover:text-black p-0.5"
                    >
                      <X size={13} />
                    </button>
                  )}
                </div>

                {/* Live Search Instant Dropdown Preview */}
                {showResultsDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-80 sm:w-96 bg-white rounded-sm shadow-2xl border border-neutral-200 overflow-hidden z-50 animate-slide-up">
                    <div className="p-2.5 bg-neutral-50 border-b border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                      <span>Matching Creations ({liveResults.length})</span>
                      <button onClick={handleViewAllResults} className="text-elan-gold hover:underline font-semibold">
                        View in Catalog →
                      </button>
                    </div>

                    {liveResults.length > 0 ? (
                      <div className="divide-y divide-neutral-100 max-h-80 overflow-y-auto">
                        {liveResults.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => handleSelectProduct(item)}
                            className="p-3 flex items-center gap-3 hover:bg-neutral-50 cursor-pointer transition-colors"
                          >
                            <img
                              src={item.images[0]}
                              alt={item.name}
                              className="w-12 h-14 object-cover rounded-sm bg-neutral-100 border border-neutral-200 flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <span className="text-[9px] uppercase tracking-wider font-semibold text-elan-gold block">
                                {item.collection || item.category}
                              </span>
                              <h5 className="font-serif text-xs font-semibold text-elan-black truncate">
                                {item.name}
                              </h5>
                              <p className="text-[11px] font-bold text-neutral-900 mt-0.5">
                                {formatPrice(item.price)}
                              </p>
                            </div>
                            <ArrowRight size={13} className="text-neutral-400" />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-xs text-neutral-500">
                        <p>No pieces found matching "{localSearch}".</p>
                      </div>
                    )}

                    {/* Trending tags in dropdown */}
                    <div className="p-2.5 bg-neutral-50 border-t border-neutral-100">
                      <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1.5">
                        Trending Searches:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {TRENDING_SEARCHES.map(tag => (
                          <button
                            key={tag}
                            onClick={() => handleSearchChange(tag)}
                            className="text-[10px] px-2 py-0.5 bg-white border border-neutral-200 rounded-full hover:border-elan-gold hover:text-elan-gold transition-colors"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-neutral-700 hover:text-elan-gold md:hidden transition-colors"
                aria-label="Search"
              >
                <Search size={19} />
              </button>

              {/* Track Consignment */}
              <button
                onClick={onOpenTracking}
                title="Track Consignment"
                className="p-2 text-neutral-700 hover:text-elan-gold transition-colors hidden sm:flex items-center gap-1.5 text-xs font-medium"
              >
                <Truck size={18} />
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                title="Wishlist"
                className="p-2 text-neutral-700 hover:text-elan-gold transition-colors relative"
                aria-label="Wishlist"
              >
                <Heart size={19} />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 bg-elan-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 bg-elan-dark text-white hover:bg-elan-gold transition-all duration-300 rounded-full flex items-center gap-2 px-3 sm:px-4 py-2 text-xs font-medium shadow-sm hover:shadow"
                aria-label="Shopping bag"
              >
                <ShoppingBag size={16} />
                <span className="hidden sm:inline font-semibold uppercase tracking-wider text-[11px]">Bag</span>
                <span className="bg-white/20 text-white text-[11px] px-1.5 py-0.5 rounded-full font-bold">
                  {totalItemsCount}
                </span>
              </button>

            </div>

          </div>

          {/* Mobile Expandable Search Bar */}
          {isSearchOpen && (
            <div className="pt-3 pb-1 md:hidden animate-slide-up border-t border-neutral-100 mt-2">
              <div className="relative">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  value={localSearch}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search 22 garments, silk, linen, blazer..."
                  className="w-full pl-9 pr-8 py-2 text-xs bg-neutral-100 rounded-full border border-neutral-200 focus:outline-none focus:bg-white focus:border-elan-gold"
                  autoFocus
                />
                {localSearch && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Quick tags on mobile */}
              <div className="flex items-center gap-1.5 overflow-x-auto pt-2 scrollbar-none text-[10px]">
                {TRENDING_SEARCHES.map(t => (
                  <button
                    key={t}
                    onClick={() => {
                      handleSearchChange(t);
                      handleViewAllResults();
                    }}
                    className="px-2 py-0.5 bg-neutral-100 rounded-full text-neutral-600 whitespace-nowrap"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-2xl z-50 flex flex-col p-6 animate-fade-in">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <div>
                <span className="font-serif text-2xl tracking-[0.2em] font-bold uppercase text-elan-black">
                  ÉLAN
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-neutral-400 block">
                  Couture House
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-neutral-400 hover:text-neutral-900"
              >
                <X size={22} />
              </button>
            </div>

            <div className="py-6 flex flex-col space-y-4 flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="text-left text-base font-medium tracking-wider uppercase text-neutral-800 hover:text-elan-gold py-2 border-b border-neutral-50 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronDown size={16} className="-rotate-90 text-neutral-400" />
                </button>
              ))}

              <div className="pt-6 space-y-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenTracking();
                  }}
                  className="w-full flex items-center gap-3 text-sm text-neutral-700 py-2"
                >
                  <Truck size={18} className="text-elan-gold" />
                  <span>Track Your Consignment</span>
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsWishlistOpen(true);
                  }}
                  className="w-full flex items-center gap-3 text-sm text-neutral-700 py-2"
                >
                  <Heart size={18} className="text-elan-gold" />
                  <span>Wishlist ({wishlistCount})</span>
                </button>
              </div>
            </div>

            <div className="border-t border-neutral-100 pt-4 text-xs text-neutral-500 text-center">
              <p>ÉLAN Atelier Pakistan · Worldwide Shipping</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
