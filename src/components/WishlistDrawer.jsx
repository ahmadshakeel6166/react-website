import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { X, Trash2, Heart, ShoppingBag, ArrowRight } from 'lucide-react';

export const WishlistDrawer = ({ onQuickView }) => {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();

  if (!isWishlistOpen) return null;

  const handleMoveToCart = (product) => {
    addToCart(product, product.sizes[0], product.colors?.[0] || null, 1);
    removeFromWishlist(product.id);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-fade-in border-l border-neutral-200">
          
          {/* Header */}
          <div className="p-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/60">
            <div className="flex items-center gap-2">
              <Heart size={18} className="text-rose-600 fill-rose-600" />
              <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-elan-black">
                Saved Wishlist
              </h2>
              <span className="text-xs bg-rose-50 text-rose-700 px-2 py-0.5 rounded-full font-bold">
                {wishlist.length}
              </span>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 text-neutral-400 hover:text-black rounded-full hover:bg-neutral-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Wishlist Items List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-neutral-100">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-4">
                <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center mb-4">
                  <Heart size={28} />
                </div>
                <h3 className="font-serif text-lg text-elan-black mb-1">Your wishlist is empty</h3>
                <p className="text-xs text-neutral-500 max-w-xs mb-6">
                  Save your favorite silhouettes and bespoke pieces here to revisit anytime.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-2.5 bg-elan-dark text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-elan-gold transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              wishlist.map((item) => (
                <div key={item.id} className="py-4 flex gap-4 first:pt-0 last:pb-0">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-20 h-24 object-cover object-center rounded-sm bg-neutral-100 border border-neutral-200 flex-shrink-0 cursor-pointer"
                    onClick={() => {
                      setIsWishlistOpen(false);
                      onQuickView(item);
                    }}
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4
                          onClick={() => {
                            setIsWishlistOpen(false);
                            onQuickView(item);
                          }}
                          className="font-serif text-sm font-medium text-elan-black hover:text-elan-gold transition-colors cursor-pointer line-clamp-1"
                        >
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromWishlist(item.id)}
                          className="text-neutral-400 hover:text-rose-600 transition-colors p-0.5 ml-2"
                          title="Remove from wishlist"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <p className="text-xs font-semibold text-neutral-900 mt-1">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    <button
                      onClick={() => handleMoveToCart(item)}
                      className="mt-3 w-full py-2 bg-elan-dark hover:bg-elan-gold text-white text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <ShoppingBag size={13} />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlist.length > 0 && (
            <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between">
              <button
                onClick={clearWishlist}
                className="text-xs text-rose-600 hover:underline font-medium"
              >
                Clear all saved items
              </button>
              <button
                onClick={() => {
                  wishlist.forEach(item => {
                    addToCart(item, item.sizes[0], item.colors?.[0] || null, 1);
                  });
                  clearWishlist();
                  setIsWishlistOpen(false);
                }}
                className="px-4 py-2 bg-elan-gold text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-elan-goldDark transition-colors"
              >
                Move all to bag
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
