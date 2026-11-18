import React, { useState } from 'react';
import { CurrencyProvider } from './context/CurrencyContext';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider, useCart } from './context/CartContext';

import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { TrustMarquee } from './components/TrustMarquee';
import { CategoryShowcase } from './components/CategoryShowcase';
import { ProductCatalog } from './components/ProductCatalog';
import { ShopTheLook } from './components/ShopTheLook';
import { CustomerReviews } from './components/CustomerReviews';
import { Footer } from './components/Footer';

import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { OrderTrackingModal } from './components/OrderTrackingModal';
import { NewsletterPopup } from './components/NewsletterPopup';

import { CheckCircle2, ShoppingBag } from 'lucide-react';

const MainApp = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [trackingOrderId, setTrackingOrderId] = useState(null);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const [placedOrder, setPlacedOrder] = useState(null);

  const { toastMessage, setIsCheckoutOpen } = useCart();

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchClick = () => {
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
    const searchInput = document.querySelector('input[placeholder*="Search by garment"]');
    if (searchInput) {
      searchInput.focus();
    }
  };

  const handleOpenTracking = (orderId = null) => {
    setTrackingOrderId(orderId);
    setIsTrackingModalOpen(true);
  };

  const handleOrderPlaced = (orderDetails) => {
    setPlacedOrder(orderDetails);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      {/* Top Announcements */}
      <AnnouncementBar onOpenTracking={() => handleOpenTracking()} />

      {/* Primary Sticky Header */}
      <Navbar
        onSelectCategory={handleSelectCategory}
        onOpenTracking={() => handleOpenTracking()}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onQuickView={(p) => setQuickViewProduct(p)}
        activeCategory={selectedCategory}
      />

      <main className="flex-1">
        {/* Luxury Hero Slider */}
        <HeroSlider onCtaClick={handleSelectCategory} />

        {/* Brand Highlights Ticker */}
        <TrustMarquee />

        {/* Featured Universes */}
        <CategoryShowcase onSelectCategory={handleSelectCategory} />

        {/* Main Product Catalog */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onQuickView={(p) => setQuickViewProduct(p)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Interactive "Shop The Look" Editorial */}
        <ShopTheLook onQuickView={(p) => setQuickViewProduct(p)} />

        {/* Patron Reviews */}
        <CustomerReviews />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenTracking={() => handleOpenTracking()}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer />

      {/* Slide-out Wishlist Drawer */}
      <WishlistDrawer onQuickView={(p) => setQuickViewProduct(p)} />

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
          onInstantCheckout={() => setIsCheckoutOpen(true)}
        />
      )}

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* Checkout Modal */}
      <CheckoutModal onOrderPlaced={handleOrderPlaced} />

      {/* Order Success Modal */}
      {placedOrder && (
        <OrderSuccessModal
          order={placedOrder}
          onClose={() => setPlacedOrder(null)}
          onTrackOrder={(orderId) => {
            setPlacedOrder(null);
            handleOpenTracking(orderId);
          }}
        />
      )}

      {/* Order Tracking Modal */}
      {isTrackingModalOpen && (
        <OrderTrackingModal
          initialOrderId={trackingOrderId}
          onClose={() => {
            setIsTrackingModalOpen(false);
            setTrackingOrderId(null);
          }}
        />
      )}

      {/* VIP Newsletter Modal */}
      <NewsletterPopup />

      {/* Floating Action Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
          <div className="bg-elan-dark text-white px-4 py-3 rounded-sm shadow-2xl flex items-center gap-3 border border-neutral-700 text-xs">
            <CheckCircle2 size={16} className="text-elan-gold flex-shrink-0" />
            <span className="font-medium tracking-wide">{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <CurrencyProvider>
      <WishlistProvider>
        <CartProvider>
          <MainApp />
        </CartProvider>
      </WishlistProvider>
    </CurrencyProvider>
  );
}
