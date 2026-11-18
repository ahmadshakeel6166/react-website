import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';
import { X, Star, Heart, ShoppingBag, ShieldCheck, Truck, RotateCcw, Ruler, ChevronDown, ChevronUp, Check } from 'lucide-react';

export const QuickViewModal = ({ product, onClose, onOpenSizeGuide, onInstantCheckout }) => {
  if (!product) return null;

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null);
  const [qty, setQty] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('details');

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { formatPrice } = useCurrency();

  const isLiked = isInWishlist(product.id);
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, qty);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, qty);
    onClose();
    if (onInstantCheckout) {
      onInstantCheckout();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="relative w-full max-w-4xl bg-white shadow-2xl rounded-sm overflow-hidden z-10 border border-neutral-200 animate-scale-up">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-neutral-100 flex items-center justify-center text-neutral-500 hover:text-black transition-colors shadow-sm"
          >
            <X size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Image Gallery */}
            <div className="p-6 bg-neutral-50 flex flex-col justify-between">
              {/* Main Image */}
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-neutral-200 mb-3 shadow-inner">
                <img
                  src={product.images[activeImageIdx] || product.images[0]}
                  alt={product.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85';
                  }}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-elan-dark text-white">
                    {product.tag}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="absolute top-3 right-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-elan-rose text-white">
                    -{discountPercent}%
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative w-16 h-20 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all ${
                        activeImageIdx === idx ? 'border-elan-gold scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Purchase Details */}
            <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
              <div>
                {/* Collection & Rating */}
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="uppercase tracking-[0.2em] font-semibold text-elan-gold">
                    {product.collection}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star size={13} className="fill-amber-400 text-amber-400" />
                    <span className="font-semibold text-neutral-800">{product.rating}</span>
                    <span className="text-neutral-400">({product.reviewsCount} verified reviews)</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="font-serif text-2xl sm:text-3xl text-elan-black font-medium leading-tight">
                  {product.name}
                </h2>
                <p className="text-xs text-neutral-500 mt-1 font-light">
                  {product.subtitle}
                </p>

                {/* Price Display */}
                <div className="mt-4 flex items-baseline gap-3 pb-4 border-b border-neutral-100">
                  <span className="text-2xl font-serif font-bold text-elan-black">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-neutral-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                  {discountPercent > 0 && (
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </span>
                  )}
                </div>

                {/* Urgency Callout */}
                {product.stockLeft && product.stockLeft <= 4 && (
                  <div className="my-3 py-1.5 px-3 bg-amber-50 border border-amber-200/80 rounded-sm text-xs text-amber-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                    <span>High demand: Only <strong>{product.stockLeft} handcrafted pieces</strong> remaining in atelier.</span>
                  </div>
                )}

                {/* Color Selector */}
                {product.colors && product.colors.length > 0 && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-neutral-600 font-medium">
                        Color: <strong className="text-elan-black">{selectedColor?.name}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {product.colors.map((col) => {
                        const isSelected = selectedColor?.name === col.name;
                        return (
                          <button
                            key={col.name}
                            onClick={() => setSelectedColor(col)}
                            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-sm border text-xs transition-all ${
                              isSelected
                                ? 'border-elan-gold bg-amber-50/50 ring-1 ring-elan-gold font-medium'
                                : 'border-neutral-200 hover:border-neutral-400'
                            }`}
                          >
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-black/10"
                              style={{ backgroundColor: col.hex }}
                            />
                            <span>{col.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Size Selector */}
                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-neutral-600 font-medium">
                      Select Size: <strong className="text-elan-black">{selectedSize}</strong>
                    </span>
                    <button
                      onClick={onOpenSizeGuide}
                      className="text-elan-gold hover:underline flex items-center gap-1 text-[11px] font-medium"
                    >
                      <Ruler size={13} />
                      <span>Size Guide</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`py-2 text-xs font-semibold rounded-sm border transition-all ${
                          selectedSize === sz
                            ? 'bg-elan-dark text-white border-elan-dark shadow-sm'
                            : 'bg-white border-neutral-200 text-neutral-800 hover:border-black'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Stepper */}
                <div className="mt-5 flex items-center gap-4">
                  <span className="text-xs font-medium text-neutral-600">Quantity:</span>
                  <div className="flex items-center border border-neutral-300 rounded-sm">
                    <button
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="px-3 py-1 text-sm font-bold text-neutral-600 hover:bg-neutral-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 text-xs font-semibold text-neutral-900">{qty}</span>
                    <button
                      onClick={() => setQty(qty + 1)}
                      className="px-3 py-1 text-sm font-bold text-neutral-600 hover:bg-neutral-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Bag & Buy Now Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 py-3.5 bg-elan-dark hover:bg-neutral-800 text-white font-medium text-xs uppercase tracking-[0.15em] rounded-sm transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={15} />
                    <span>Add to Shopping Bag</span>
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="flex-1 py-3.5 bg-elan-gold hover:bg-elan-goldDark text-white font-medium text-xs uppercase tracking-[0.15em] rounded-sm transition-colors shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>Instant Checkout</span>
                  </button>
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`p-3.5 border rounded-sm transition-colors flex items-center justify-center ${
                      isLiked
                        ? 'border-rose-300 text-rose-600 bg-rose-50'
                        : 'border-neutral-300 text-neutral-600 hover:border-black hover:text-black'
                    }`}
                    title={isLiked ? 'In Wishlist' : 'Add to Wishlist'}
                  >
                    <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>

              {/* Accordions */}
              <div className="mt-6 pt-4 border-t border-neutral-200 space-y-2 text-xs">
                {/* Details Tab */}
                <div className="border border-neutral-200 rounded-sm overflow-hidden">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'details' ? '' : 'details')}
                    className="w-full p-2.5 bg-neutral-50 flex items-center justify-between text-neutral-800 font-semibold"
                  >
                    <span>Description & Highlights</span>
                    {openAccordion === 'details' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                  {openAccordion === 'details' && (
                    <div className="p-3 bg-white text-neutral-600 leading-relaxed space-y-2">
                      <p>{product.description}</p>
                      {product.highlights && (
                        <ul className="list-disc list-inside space-y-1 text-neutral-700 pt-1">
                          {product.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>

                {/* Fabric & Care */}
                <div className="border border-neutral-200 rounded-sm overflow-hidden">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'fabric' ? '' : 'fabric')}
                    className="w-full p-2.5 bg-neutral-50 flex items-center justify-between text-neutral-800 font-semibold"
                  >
                    <span>Fabric Composition & Care</span>
                    {openAccordion === 'fabric' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                  {openAccordion === 'fabric' && (
                    <div className="p-3 bg-white text-neutral-600 leading-relaxed space-y-1">
                      <p><strong>Fabric:</strong> {product.fabric}</p>
                      <p><strong>Care Instructions:</strong> {product.care}</p>
                    </div>
                  )}
                </div>

                {/* Shipping & Returns */}
                <div className="border border-neutral-200 rounded-sm overflow-hidden">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
                    className="w-full p-2.5 bg-neutral-50 flex items-center justify-between text-neutral-800 font-semibold"
                  >
                    <span>Complimentary Shipping & 14-Day Returns</span>
                    {openAccordion === 'shipping' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                  {openAccordion === 'shipping' && (
                    <div className="p-3 bg-white text-neutral-600 leading-relaxed space-y-1">
                      <p>• Free express delivery across Pakistan on orders above Rs. 5,000.</p>
                      <p>• Delivery timeline: 2 to 3 business days via TCS / Leopards Courier.</p>
                      <p>• 14 days exchange policy with free courier pickup at your doorstep.</p>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
