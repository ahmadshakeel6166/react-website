import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';
import { Heart, Eye, ShoppingBag, Star, Check } from 'lucide-react';

export const ProductCard = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null);
  const [showQuickSizes, setShowQuickSizes] = useState(false);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { formatPrice } = useCurrency();

  const isLiked = isInWishlist(product.id);
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleQuickAdd = (size) => {
    addToCart(product, size, selectedColor, 1);
    setShowQuickSizes(false);
  };

  return (
    <article
      className="group relative flex flex-col bg-white rounded-sm border border-neutral-200/70 hover:border-elan-gold/40 hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowQuickSizes(false);
      }}
    >
      {/* Product Image Frame */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 cursor-pointer">
        {/* Main Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          onClick={() => onQuickView(product)}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85';
          }}
          className={`h-full w-full object-cover object-center transition-all duration-700 ease-out ${
            isHovered && product.images[1] ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />

        {/* Secondary Angle Image (On Hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} angle`}
            loading="lazy"
            onClick={() => onQuickView(product)}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = product.images[0];
            }}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 ease-out ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100 pointer-events-none'
            }`}
          />
        )}

        {/* Floating Badges (Top Left) */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.tag && (
            <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-elan-dark text-white shadow-sm">
              {product.tag}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-elan-rose text-white shadow-sm">
              -{discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button (Top Right) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
            isLiked
              ? 'bg-rose-50 text-rose-600 scale-110'
              : 'bg-white/90 text-neutral-600 hover:text-rose-600 hover:bg-white'
          }`}
          aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
        </button>

        {/* Urgency Stock Left Pill (Bottom Left of Image) */}
        {product.stockLeft && product.stockLeft <= 4 && (
          <div className="absolute bottom-3 left-3 z-10">
            <span className="text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded-full bg-amber-500/90 text-white backdrop-blur-sm shadow-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              Only {product.stockLeft} left
            </span>
          </div>
        )}

        {/* Quick Actions Hover Overlay Bar (Bottom of Image) */}
        <div
          className={`absolute inset-x-3 bottom-3 z-20 flex flex-col gap-1.5 transition-all duration-300 transform ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
          }`}
        >
          {showQuickSizes ? (
            /* Quick Size Selector Bar */
            <div className="bg-white/95 backdrop-blur-md p-2 rounded-sm shadow-lg border border-neutral-200 animate-slide-up">
              <div className="flex items-center justify-between mb-1.5 px-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">
                  Select Size
                </span>
                <button
                  onClick={() => setShowQuickSizes(false)}
                  className="text-[11px] text-neutral-400 hover:text-black"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-5 gap-1">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => handleQuickAdd(sz)}
                    className="py-1 text-[11px] font-semibold border border-neutral-300 hover:border-elan-dark hover:bg-elan-dark hover:text-white rounded transition-colors"
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Normal Quick Action Buttons */
            <div className="flex gap-1.5">
              <button
                onClick={() => setShowQuickSizes(true)}
                className="flex-1 py-2.5 px-3 bg-elan-dark hover:bg-elan-gold text-white text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-md flex items-center justify-center gap-1.5"
              >
                <ShoppingBag size={13} />
                <span>Quick Add</span>
              </button>
              <button
                onClick={() => onQuickView(product)}
                className="py-2.5 px-3 bg-white/95 hover:bg-white text-neutral-900 text-[11px] font-semibold rounded-sm transition-colors shadow-md flex items-center justify-center"
                title="Quick Look"
              >
                <Eye size={14} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-1.5">
            <span className="uppercase tracking-widest text-[10px] font-medium text-elan-gold">
              {product.collection || product.category}
            </span>
            <div className="flex items-center gap-1 text-neutral-600">
              <Star size={12} className="fill-amber-400 text-amber-400" />
              <span className="text-[11px] font-medium">{product.rating}</span>
              <span className="text-[10px] text-neutral-400">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif text-base font-medium text-elan-black hover:text-elan-gold transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Subtitle / Fabric brief */}
          <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1 font-light">
            {product.subtitle}
          </p>
        </div>

        {/* Pricing & Swatches */}
        <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between">
          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold text-elan-black">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-neutral-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Color Swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5">
              {product.colors.slice(0, 3).map((col) => {
                const isSelected = selectedColor?.name === col.name;
                return (
                  <button
                    key={col.name}
                    onClick={() => setSelectedColor(col)}
                    className={`w-3.5 h-3.5 rounded-full border transition-transform ${
                      isSelected
                        ? 'scale-125 ring-1 ring-elan-gold ring-offset-1 border-white'
                        : 'border-neutral-300 hover:scale-110'
                    }`}
                    style={{ backgroundColor: col.hex }}
                    title={col.name}
                  />
                );
              })}
              {product.colors.length > 3 && (
                <span className="text-[10px] text-neutral-400">
                  +{product.colors.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
