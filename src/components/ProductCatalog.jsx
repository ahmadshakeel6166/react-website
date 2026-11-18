import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal, X, LayoutGrid, Grid3X3, Grid2X2, ArrowUpDown } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export const ProductCatalog = ({ selectedCategory, setSelectedCategory, onQuickView, searchQuery, setSearchQuery }) => {
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState(40000);
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [gridCols, setGridCols] = useState(4); // 2, 3, 4
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const { formatPrice } = useCurrency();

  const allSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '38R', '40R', '42R'];
  const allTags = ['New Season', 'Bestseller', 'Atelier Edition', 'Haute Pret', 'Kids Festive'];

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Category
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(query);
        const matchSub = p.subtitle.toLowerCase().includes(query);
        const matchDesc = p.description.toLowerCase().includes(query);
        const matchFabric = p.fabric.toLowerCase().includes(query);
        if (!matchName && !matchSub && !matchDesc && !matchFabric) return false;
      }
      // Price
      if (p.price > priceRange) {
        return false;
      }
      // Size
      if (selectedSize !== 'all') {
        if (!p.sizes.includes(selectedSize)) return false;
      }
      // Tag
      if (selectedTag !== 'all') {
        if (p.tag !== selectedTag) return false;
      }
      // In Stock
      if (inStockOnly && p.stockLeft === 0) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return 0; // featured default
    });
  }, [selectedCategory, searchQuery, priceRange, selectedSize, selectedTag, inStockOnly, sortBy]);

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setPriceRange(40000);
    setSelectedSize('all');
    setSelectedTag('all');
    setInStockOnly(false);
    setSortBy('featured');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    searchQuery.trim() !== '' ||
    priceRange < 40000 ||
    selectedSize !== 'all' ||
    selectedTag !== 'all' ||
    inStockOnly;

  return (
    <section id="catalog-section" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-elan-gold">
          The Ready-To-Wear & Couture Edit
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-elan-black mt-1 font-normal">
          Explore Garments
        </h2>
        <p className="text-neutral-500 text-sm mt-2 font-light">
          Impeccably tailored silhouettes made with pure fabrics, designed for effortless elegance.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center overflow-x-auto pb-4 mb-8 scrollbar-none gap-2 sm:gap-3">
        {CATEGORIES.map(cat => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-elan-dark text-white shadow-md'
                  : 'bg-white border border-neutral-200 text-neutral-700 hover:border-elan-gold hover:text-elan-gold'
              }`}
            >
              {cat.name}
              <span className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full ${
                isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-500'
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Filter & Toolbar Row */}
      <div className="bg-white border border-neutral-200 rounded-sm p-4 mb-8 shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by garment, fabric, silk, linen..."
            className="w-full pl-9 pr-8 py-2 text-xs bg-neutral-50 border border-neutral-200 rounded-sm focus:outline-none focus:border-elan-gold focus:bg-white transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black p-0.5"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Filters & Sort Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Quick Tag Pills */}
          <div className="hidden xl:flex items-center gap-1.5 text-xs">
            <span className="text-neutral-400 text-[11px] font-medium uppercase tracking-wider mr-1">Tag:</span>
            {['all', 'New Season', 'Bestseller'].map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-2.5 py-1 text-[11px] rounded-sm transition-colors ${
                  selectedTag === tag
                    ? 'bg-elan-gold text-white font-medium'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {tag === 'all' ? 'All' : tag}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1.5 bg-neutral-50 border border-neutral-200 px-3 py-1.5 rounded-sm">
            <ArrowUpDown size={13} className="text-neutral-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-xs text-neutral-700 focus:outline-none cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>

          {/* Toggle Filter Drawer button */}
          <button
            onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm border text-xs font-medium transition-colors ${
              hasActiveFilters
                ? 'bg-elan-gold/10 border-elan-gold text-elan-goldDark'
                : 'bg-white border-neutral-200 text-neutral-700 hover:border-neutral-400'
            }`}
          >
            <SlidersHorizontal size={13} />
            <span>Filters {hasActiveFilters && '•'}</span>
          </button>

          {/* Grid Layout Switcher (Desktop) */}
          <div className="hidden sm:flex items-center border border-neutral-200 rounded-sm overflow-hidden">
            <button
              onClick={() => setGridCols(2)}
              className={`p-1.5 ${gridCols === 2 ? 'bg-neutral-200 text-black' : 'text-neutral-500 hover:text-black'}`}
              title="2 Columns"
            >
              <Grid2X2 size={16} />
            </button>
            <button
              onClick={() => setGridCols(3)}
              className={`p-1.5 ${gridCols === 3 ? 'bg-neutral-200 text-black' : 'text-neutral-500 hover:text-black'}`}
              title="3 Columns"
            >
              <Grid3X3 size={16} />
            </button>
            <button
              onClick={() => setGridCols(4)}
              className={`p-1.5 ${gridCols === 4 ? 'bg-neutral-200 text-black' : 'text-neutral-500 hover:text-black'}`}
              title="4 Columns"
            >
              <LayoutGrid size={16} />
            </button>
          </div>

        </div>
      </div>

      {/* Expanded Filters Drawer (Inline collapse) */}
      {isFilterDrawerOpen && (
        <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-6 mb-8 animate-slide-up">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200 mb-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800">
              Refine Garments
            </h4>
            {hasActiveFilters && (
              <button
                onClick={resetAllFilters}
                className="text-xs text-rose-600 hover:underline font-medium"
              >
                Reset All Filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Price Range Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-medium text-neutral-700 mb-2">
                <span>Max Price:</span>
                <span className="font-semibold text-elan-black">{formatPrice(priceRange)}</span>
              </div>
              <input
                type="range"
                min="3000"
                max="40000"
                step="500"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-elan-gold cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                <span>{formatPrice(3000)}</span>
                <span>{formatPrice(40000)}</span>
              </div>
            </div>

            {/* Sizes Filter */}
            <div>
              <span className="text-xs font-medium text-neutral-700 mb-2 block">Available Size:</span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setSelectedSize('all')}
                  className={`px-2.5 py-1 text-[11px] rounded border ${
                    selectedSize === 'all'
                      ? 'bg-elan-dark text-white border-elan-dark'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  All
                </button>
                {allSizes.map(sz => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-2.5 py-1 text-[11px] rounded border ${
                      selectedSize === sz
                        ? 'bg-elan-dark text-white border-elan-dark'
                        : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Stock status & Tags */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs font-medium text-neutral-700 mb-2 block">Special Tags:</span>
                <div className="flex flex-wrap gap-1.5">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(selectedTag === tag ? 'all' : tag)}
                      className={`px-2 py-0.5 text-[11px] rounded border ${
                        selectedTag === tag
                          ? 'bg-elan-gold text-white border-elan-gold'
                          : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between">
                <label className="flex items-center gap-2 text-xs text-neutral-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="accent-elan-gold rounded"
                  />
                  <span>Show Ready-to-Ship items only</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Header Count */}
      <div className="flex items-center justify-between mb-6 text-xs text-neutral-500">
        <p>
          Showing <span className="font-semibold text-neutral-900">{filteredProducts.length}</span> luxury pieces
          {searchQuery && <span> matching "<span className="text-elan-black font-medium">{searchQuery}</span>"</span>}
        </p>
        {hasActiveFilters && (
          <button
            onClick={resetAllFilters}
            className="text-neutral-500 hover:text-black underline cursor-pointer"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div
          className={`grid gap-6 ${
            gridCols === 2
              ? 'grid-cols-1 sm:grid-cols-2'
              : gridCols === 3
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }`}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 text-center bg-white rounded-sm border border-neutral-200 p-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 font-serif text-2xl">
            É
          </div>
          <h3 className="font-serif text-xl text-elan-black mb-2">No Matching Creations Found</h3>
          <p className="text-neutral-500 text-xs max-w-md mx-auto mb-6">
            We couldn't find any garments matching your current filter criteria. Try adjusting the price range or clearing your search term.
          </p>
          <button
            onClick={resetAllFilters}
            className="px-6 py-2.5 bg-elan-dark text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-elan-gold transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </section>
  );
};
