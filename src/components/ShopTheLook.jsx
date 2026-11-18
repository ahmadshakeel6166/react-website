import React, { useState } from 'react';
import { LOOKBOOK_PINS, PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { ShoppingBag, ArrowRight, X, Sparkles } from 'lucide-react';

export const ShopTheLook = ({ onQuickView }) => {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();

  const look = LOOKBOOK_PINS[0];

  const handleHotspotClick = (spot) => {
    if (activeHotspot?.productId === spot.productId) {
      setActiveHotspot(null);
    } else {
      const product = PRODUCTS.find(p => p.id === spot.productId);
      setActiveHotspot({ ...spot, product });
    }
  };

  const handleQuickAddSpot = (product) => {
    if (product) {
      addToCart(product, product.sizes[0], product.colors?.[0] || null, 1);
      setActiveHotspot(null);
    }
  };

  return (
    <section id="lookbook" className="py-16 sm:py-24 bg-[#f4efe8]/70 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-elan-gold/15 text-elan-goldDark text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles size={12} />
            <span>Interactive Editorial</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-elan-black font-normal">
            Shop The Atelier Look
          </h2>
          <p className="text-neutral-500 text-sm mt-2 font-light">
            Click on the pulsating markers to discover and style each handcrafted garment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Lookbook Canvas with Hotspots */}
          <div className="lg:col-span-8 relative rounded-sm overflow-hidden shadow-2xl bg-black">
            <img
              src={look.image}
              alt={look.title}
              className="w-full h-[580px] sm:h-[680px] object-cover object-center filter brightness-[0.92]"
            />

            {/* Hotspots */}
            {look.hotspots.map((spot, i) => (
              <div
                key={i}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                style={{ top: spot.top, left: spot.left }}
              >
                <button
                  onClick={() => handleHotspotClick(spot)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-elan-gold text-white flex items-center justify-center font-bold text-xs pulse-hotspot shadow-lg cursor-pointer transition-transform hover:scale-125 ${
                    activeHotspot?.productId === spot.productId ? 'ring-4 ring-white scale-110' : ''
                  }`}
                  aria-label={`Inspect ${spot.title}`}
                >
                  +
                </button>
              </div>
            ))}

            {/* Floating Popover on Mobile/Desktop */}
            {activeHotspot && activeHotspot.product && (
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm z-30 bg-white/95 backdrop-blur-md p-4 rounded-sm shadow-2xl border border-neutral-200 animate-slide-up">
                <div className="flex items-start justify-between pb-2 border-b border-neutral-100">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-elan-gold">
                    Tagged In Editorial
                  </span>
                  <button
                    onClick={() => setActiveHotspot(null)}
                    className="text-neutral-400 hover:text-black"
                  >
                    <X size={15} />
                  </button>
                </div>

                <div className="flex gap-3 mt-3">
                  <img
                    src={activeHotspot.product.images[0]}
                    alt={activeHotspot.product.name}
                    className="w-16 h-20 object-cover rounded-sm bg-neutral-100"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-sm font-medium text-elan-black line-clamp-1">
                        {activeHotspot.product.name}
                      </h4>
                      <p className="text-xs font-semibold text-neutral-800 mt-0.5">
                        {formatPrice(activeHotspot.product.price)}
                      </p>
                    </div>

                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => handleQuickAddSpot(activeHotspot.product)}
                        className="flex-1 py-1.5 px-2 bg-elan-dark hover:bg-elan-gold text-white text-[10px] font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-1"
                      >
                        <ShoppingBag size={11} />
                        <span>Add</span>
                      </button>
                      <button
                        onClick={() => {
                          onQuickView(activeHotspot.product);
                          setActiveHotspot(null);
                        }}
                        className="py-1.5 px-2 border border-neutral-300 hover:border-black text-[10px] font-semibold rounded-sm transition-colors"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Editorial Story & Details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-sm border border-neutral-200/80 shadow-sm space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-elan-gold">
                  Editorial Story
                </span>
                <h3 className="font-serif text-2xl text-elan-black font-medium mt-1">
                  Resort Silhouettes & Gentle Drapes
                </h3>
              </div>

              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
                Captured during the golden hour of the Riviera, this look pairs our French linen relaxed shirt with structured high-waist pleated gabardine trousers. A testament to balanced relaxed tailoring.
              </p>

              <div className="space-y-3 pt-4 border-t border-neutral-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                  Pieces in this look:
                </h4>
                {look.hotspots.map((h, i) => {
                  const prod = PRODUCTS.find(p => p.id === h.productId);
                  if (!prod) return null;
                  return (
                    <div
                      key={i}
                      onClick={() => onQuickView(prod)}
                      className="p-3 bg-neutral-50 hover:bg-neutral-100 rounded-sm cursor-pointer transition-colors flex items-center justify-between"
                    >
                      <div>
                        <p className="text-xs font-medium text-elan-black">{prod.name}</p>
                        <p className="text-xs text-neutral-500">{formatPrice(prod.price)}</p>
                      </div>
                      <ArrowRight size={14} className="text-neutral-400" />
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <a
                  href="#catalog-section"
                  className="block text-center py-3 border border-elan-black text-elan-black hover:bg-elan-black hover:text-white text-xs font-medium uppercase tracking-[0.16em] rounded-sm transition-colors"
                >
                  Explore Complete Lookbook
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
