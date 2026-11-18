import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { X, Trash2, Plus, Minus, ShoppingBag, Gift, Tag, ArrowRight, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQty,
    clearCart,
    subtotal,
    discountAmount,
    shippingFee,
    isFreeShipping,
    giftWrapFee,
    isGiftWrap,
    setIsGiftWrap,
    finalTotal,
    progressToFreeShipping,
    remainingForFreeShipping,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    orderNote,
    setOrderNote,
    setIsCheckoutOpen
  } = useCart();

  const { formatPrice } = useCurrency();
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [showNoteField, setShowNoteField] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    if (!promoInput.trim()) return;
    const res = applyPromoCode(promoInput);
    if (!res.success) {
      setPromoError(res.message);
    } else {
      setPromoInput('');
    }
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-fade-in border-l border-neutral-200">
          
          {/* Header */}
          <div className="p-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/60">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} className="text-elan-gold" />
              <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-elan-black">
                Your Shopping Bag
              </h2>
              <span className="text-xs bg-elan-gold/20 text-elan-goldDark px-2 py-0.5 rounded-full font-bold">
                {cart.reduce((a, b) => a + b.qty, 0)}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-neutral-400 hover:text-black rounded-full hover:bg-neutral-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="p-4 bg-amber-50/60 border-b border-amber-100 text-xs">
            {isFreeShipping ? (
              <div className="flex items-center gap-2 text-emerald-800 font-medium">
                <Truck size={15} className="text-emerald-600 flex-shrink-0" />
                <span>🎉 <strong>Complimentary Express Delivery</strong> unlocked for this order!</span>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between text-neutral-700 font-medium mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Truck size={14} className="text-elan-gold" />
                    <span>Add <strong>{formatPrice(remainingForFreeShipping)}</strong> more for <strong>Free Delivery</strong></span>
                  </span>
                  <span className="text-neutral-500 font-semibold">{progressToFreeShipping}%</span>
                </div>
                <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-elan-gold h-full transition-all duration-500 rounded-full"
                    style={{ width: `${progressToFreeShipping}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-neutral-100">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-4">
                <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mb-4">
                  <ShoppingBag size={28} />
                </div>
                <h3 className="font-serif text-lg text-elan-black mb-1">Your bag is currently empty</h3>
                <p className="text-xs text-neutral-500 max-w-xs mb-6">
                  Explore our luxury ready-to-wear, festive pret, and contemporary classics.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-elan-dark text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-elan-gold transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.itemKey} className="py-4 flex gap-4 first:pt-0 last:pb-0">
                  {/* Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover object-center rounded-sm bg-neutral-100 border border-neutral-200 flex-shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif text-sm font-medium text-elan-black line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.itemKey)}
                          className="text-neutral-400 hover:text-rose-600 transition-colors p-0.5 ml-2"
                          title="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      {/* Options */}
                      <div className="flex items-center gap-2 mt-1 text-[11px] text-neutral-500">
                        <span className="bg-neutral-100 px-1.5 py-0.5 rounded font-medium text-neutral-700">
                          Size: {item.selectedSize}
                        </span>
                        {item.selectedColor && (
                          <span className="flex items-center gap-1 bg-neutral-100 px-1.5 py-0.5 rounded text-neutral-700 font-medium">
                            <span
                              className="w-2 h-2 rounded-full border border-black/10"
                              style={{ backgroundColor: item.colorHex }}
                            />
                            {item.selectedColor}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Price & Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-neutral-300 rounded-sm">
                        <button
                          onClick={() => updateQty(item.itemKey, -1)}
                          className="px-2 py-0.5 text-xs text-neutral-600 hover:bg-neutral-100"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-neutral-800">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.itemKey, 1)}
                          className="px-2 py-0.5 text-xs text-neutral-600 hover:bg-neutral-100"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-bold text-elan-black">
                          {formatPrice(item.price * item.qty)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Controls & Summary */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-neutral-200 bg-neutral-50/80 space-y-4">
              
              {/* Promo Code Accordion/Input */}
              <div>
                {appliedPromo ? (
                  <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-sm text-xs text-emerald-800">
                    <div className="flex items-center gap-1.5">
                      <Tag size={13} className="text-emerald-600" />
                      <span>Code <strong>{appliedPromo.code}</strong> applied ({appliedPromo.label})</span>
                    </div>
                    <button
                      onClick={removePromoCode}
                      className="text-rose-600 hover:underline font-semibold text-[11px]"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Privilege code (e.g. ELAN10)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="flex-1 px-3 py-1.5 text-xs border border-neutral-300 rounded-sm uppercase tracking-wider focus:outline-none focus:border-elan-gold"
                    />
                    <button
                      type="submit"
                      className="px-4 py-1.5 bg-neutral-800 hover:bg-black text-white text-xs font-semibold rounded-sm transition-colors uppercase tracking-wider"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {promoError && (
                  <p className="text-[11px] text-rose-600 mt-1">{promoError}</p>
                )}
                {/* Promo suggestions */}
                {!appliedPromo && (
                  <div className="flex items-center gap-2 mt-1.5 text-[10px] text-neutral-500">
                    <span>Try:</span>
                    <button
                      onClick={() => {
                        setPromoInput('ELAN10');
                        applyPromoCode('ELAN10');
                      }}
                      className="underline hover:text-elan-gold font-medium"
                    >
                      ELAN10 (-10%)
                    </button>
                    <span>•</span>
                    <button
                      onClick={() => {
                        setPromoInput('VIP20');
                        applyPromoCode('VIP20');
                      }}
                      className="underline hover:text-elan-gold font-medium"
                    >
                      VIP20 (-20%)
                    </button>
                  </div>
                )}
              </div>

              {/* Gift Wrap Checkbox */}
              <label className="flex items-center gap-2.5 text-xs text-neutral-700 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={isGiftWrap}
                  onChange={(e) => setIsGiftWrap(e.target.checked)}
                  className="accent-elan-gold rounded"
                />
                <Gift size={14} className="text-elan-gold" />
                <span>Bespoke Gold-Embossed Gift Box (+{formatPrice(300)})</span>
              </label>

              {/* Order Calculations */}
              <div className="space-y-1.5 text-xs pt-2 border-t border-neutral-200">
                <div className="flex justify-between text-neutral-600">
                  <span>Bag Subtotal</span>
                  <span className="font-medium text-neutral-900">{formatPrice(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>VIP Privilege Savings</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-neutral-600">
                  <span>Nationwide Courier</span>
                  <span>{isFreeShipping ? <strong className="text-emerald-700">Free</strong> : formatPrice(shippingFee)}</span>
                </div>
                {isGiftWrap && (
                  <div className="flex justify-between text-neutral-600">
                    <span>Atelier Gift Packaging</span>
                    <span>{formatPrice(giftWrapFee)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-serif font-bold text-elan-black pt-2 border-t border-neutral-200">
                  <span>Grand Total</span>
                  <span>{formatPrice(finalTotal)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleProceedCheckout}
                className="w-full py-3.5 bg-elan-dark hover:bg-elan-gold text-white font-medium text-xs uppercase tracking-[0.18em] rounded-sm transition-colors shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 uppercase tracking-widest pt-1">
                <ShieldCheck size={12} className="text-emerald-600" />
                <span>256-Bit Encrypted Secure Checkout</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
