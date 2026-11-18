import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const FREE_SHIPPING_THRESHOLD = 5000;
const STANDARD_SHIPPING_FEE = 250;
const GIFT_WRAP_FEE = 300;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('elan_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [isGiftWrap, setIsGiftWrap] = useState(false);
  const [orderNote, setOrderNote] = useState('');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('elan_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addToCart = (product, size, color, qty = 1) => {
    const selectedSize = size || product.sizes[0];
    const selectedColor = color ? color.name : (product.colors && product.colors[0] ? product.colors[0].name : 'Default');
    const itemKey = `${product.id}-${selectedSize}-${selectedColor}`;

    setCart(prev => {
      const index = prev.findIndex(item => item.itemKey === itemKey);
      if (index > -1) {
        const next = [...prev];
        next[index] = {
          ...next[index],
          qty: next[index].qty + qty
        };
        return next;
      } else {
        return [
          ...prev,
          {
            itemKey,
            id: product.id,
            name: product.name,
            subtitle: product.subtitle,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.images[0],
            selectedSize,
            selectedColor,
            colorHex: color?.hex || product.colors?.[0]?.hex || '#111',
            qty
          }
        ];
      }
    });

    showToast(`Added ${product.name} (${selectedSize}) to bag`);
    setIsCartOpen(true);
  };

  const removeFromCart = (itemKey) => {
    setCart(prev => prev.filter(item => item.itemKey !== itemKey));
  };

  const updateQty = (itemKey, delta) => {
    setCart(prev =>
      prev
        .map(item => {
          if (item.itemKey === itemKey) {
            const nextQty = item.qty + delta;
            return nextQty > 0 ? { ...item, qty: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedPromo(null);
    setIsGiftWrap(false);
  };

  const applyPromoCode = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'ELAN10') {
      setAppliedPromo({ code: clean, discountPercent: 10, label: '10% New Guest Privilege' });
      showToast('10% VIP Discount Applied!');
      return { success: true, message: '10% Discount applied!' };
    } else if (clean === 'VIP20') {
      setAppliedPromo({ code: clean, discountPercent: 20, label: '20% Élan Club Privilege' });
      showToast('20% Élan Club Privilege Applied!');
      return { success: true, message: '20% Discount applied!' };
    } else if (clean === 'EID500') {
      setAppliedPromo({ code: clean, discountFixed: 500, label: 'Rs. 500 Festive Courtesy' });
      showToast('Rs. 500 Festive Courtesy Applied!');
      return { success: true, message: 'Rs. 500 Discount applied!' };
    } else {
      return { success: false, message: 'Invalid or expired code. Try ELAN10 or VIP20' };
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    showToast('Promo code removed');
  };

  // Calculations
  const totalItemsCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  let discountAmount = 0;
  if (appliedPromo) {
    if (appliedPromo.discountPercent) {
      discountAmount = Math.round((subtotal * appliedPromo.discountPercent) / 100);
    } else if (appliedPromo.discountFixed) {
      discountAmount = Math.min(subtotal, appliedPromo.discountFixed);
    }
  }

  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0;
  const shippingFee = subtotal === 0 ? 0 : (isFreeShipping ? 0 : STANDARD_SHIPPING_FEE);
  const giftWrapFee = isGiftWrap ? GIFT_WRAP_FEE : 0;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee + giftWrapFee);
  const progressToFreeShipping = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        totalItemsCount,
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
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        isCartOpen,
        setIsCartOpen,
        toastMessage,
        showToast,
        promoCode,
        setPromoCode,
        appliedPromo,
        applyPromoCode,
        removePromoCode,
        orderNote,
        setOrderNote,
        isCheckoutOpen,
        setIsCheckoutOpen,
        orderSuccess,
        setOrderSuccess
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
