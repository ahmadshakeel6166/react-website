import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import confetti from 'canvas-confetti';
import { X, ShieldCheck, Truck, CreditCard, Banknote, Smartphone, Check, Lock, ChevronRight } from 'lucide-react';

const PAKISTAN_CITIES = [
  'Lahore',
  'Karachi',
  'Islamabad',
  'Rawalpindi',
  'Faisalabad',
  'Peshawar',
  'Multan',
  'Sialkot',
  'Gujranwala',
  'Quetta',
  'Hyderabad',
  'Abbottabad',
  'Other / International'
];

export const CheckoutModal = ({ onOrderPlaced }) => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    subtotal,
    discountAmount,
    shippingFee,
    giftWrapFee,
    finalTotal,
    appliedPromo,
    isGiftWrap,
    clearCart
  } = useCart();

  const { formatPrice } = useCurrency();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: 'Lahore',
    postalCode: '',
    shippingMethod: 'standard', // standard, express
    paymentMethod: 'cod', // cod, card, jazzcash
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    jazzCashNumber: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  if (!isCheckoutOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid phone number is required';
    if (!formData.address.trim()) errs.address = 'Street address is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury order processing
    setTimeout(() => {
      const orderId = 'ELN-' + Math.floor(100000 + Math.random() * 900000);
      const orderDetails = {
        orderId,
        items: [...cart],
        customer: formData,
        subtotal,
        discountAmount,
        shippingFee: formData.shippingMethod === 'express' ? shippingFee + 350 : shippingFee,
        giftWrapFee,
        finalTotal: formData.shippingMethod === 'express' ? finalTotal + 350 : finalTotal,
        paymentMethod: formData.paymentMethod,
        date: new Date().toLocaleDateString('en-PK', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        estimatedDelivery: '3 to 4 Business Days'
      };

      // Trigger Confetti explosion
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#c49b66', '#dfbe8f', '#171718', '#ffffff']
        });
      } catch (err) {
        console.log(err);
      }

      clearCart();
      setIsSubmitting(false);
      setIsCheckoutOpen(false);
      if (onOrderPlaced) {
        onOrderPlaced(orderDetails);
      }
    }, 1800);
  };

  const additionalExpressFee = formData.shippingMethod === 'express' ? 350 : 0;
  const computedGrandTotal = finalTotal + additionalExpressFee;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={() => !isSubmitting && setIsCheckoutOpen(false)}
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-6 lg:p-8">
        <div className="relative w-full max-w-5xl bg-white shadow-2xl rounded-sm overflow-hidden z-10 border border-neutral-200 animate-scale-up">
          
          {/* Header */}
          <div className="px-6 py-4 border-b border-neutral-200 bg-neutral-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-serif text-xl tracking-[0.2em] font-bold uppercase text-elan-black">
                ÉLAN
              </span>
              <span className="text-neutral-400">|</span>
              <span className="text-xs uppercase tracking-widest font-semibold text-neutral-600">
                Atelier Concierge Checkout
              </span>
            </div>
            {!isSubmitting && (
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="text-neutral-400 hover:text-black p-1 rounded-full"
              >
                <X size={20} />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Form Steps */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
              
              {/* Step 1: Customer Contact */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-elan-gold text-white text-[10px] flex items-center justify-center font-bold">1</span>
                  <span>Contact Information</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-600 mb-1">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="e.g. Ayesha"
                      className={`w-full px-3 py-2 text-xs border rounded-sm focus:outline-none focus:border-elan-gold ${
                        errors.firstName ? 'border-rose-500 bg-rose-50/50' : 'border-neutral-300'
                      }`}
                    />
                    {errors.firstName && <span className="text-[10px] text-rose-500">{errors.firstName}</span>}
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-600 mb-1">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="e.g. Khan"
                      className={`w-full px-3 py-2 text-xs border rounded-sm focus:outline-none focus:border-elan-gold ${
                        errors.lastName ? 'border-rose-500 bg-rose-50/50' : 'border-neutral-300'
                      }`}
                    />
                    {errors.lastName && <span className="text-[10px] text-rose-500">{errors.lastName}</span>}
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-600 mb-1">Email Address (for Receipt) *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ayesha@example.com"
                      className={`w-full px-3 py-2 text-xs border rounded-sm focus:outline-none focus:border-elan-gold ${
                        errors.email ? 'border-rose-500 bg-rose-50/50' : 'border-neutral-300'
                      }`}
                    />
                    {errors.email && <span className="text-[10px] text-rose-500">{errors.email}</span>}
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-600 mb-1">Mobile Number (Courier Updates) *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+92 300 1234567"
                      className={`w-full px-3 py-2 text-xs border rounded-sm focus:outline-none focus:border-elan-gold ${
                        errors.phone ? 'border-rose-500 bg-rose-50/50' : 'border-neutral-300'
                      }`}
                    />
                    {errors.phone && <span className="text-[10px] text-rose-500">{errors.phone}</span>}
                  </div>
                </div>
              </div>

              {/* Step 2: Shipping Destination */}
              <div className="pt-4 border-t border-neutral-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-elan-gold text-white text-[10px] flex items-center justify-center font-bold">2</span>
                  <span>Delivery Address</span>
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-600 mb-1">Street Address / House No. *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="e.g. House 42, Block L, Phase 5 DHA"
                      className={`w-full px-3 py-2 text-xs border rounded-sm focus:outline-none focus:border-elan-gold ${
                        errors.address ? 'border-rose-500 bg-rose-50/50' : 'border-neutral-300'
                      }`}
                    />
                    {errors.address && <span className="text-[10px] text-rose-500">{errors.address}</span>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-neutral-600 mb-1">City / Region *</label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-sm focus:outline-none focus:border-elan-gold bg-white cursor-pointer"
                      >
                        {PAKISTAN_CITIES.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-neutral-600 mb-1">Postal Code (Optional)</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="54000"
                        className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-sm focus:outline-none focus:border-elan-gold"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Shipping Speed */}
              <div className="pt-4 border-t border-neutral-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-elan-gold text-white text-[10px] flex items-center justify-center font-bold">3</span>
                  <span>Delivery Speed</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`flex items-start p-3 border rounded-sm cursor-pointer transition-colors ${
                      formData.shippingMethod === 'standard'
                        ? 'border-elan-gold bg-amber-50/30 ring-1 ring-elan-gold'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="standard"
                      checked={formData.shippingMethod === 'standard'}
                      onChange={handleInputChange}
                      className="mt-0.5 accent-elan-gold mr-3"
                    />
                    <div>
                      <p className="text-xs font-semibold text-neutral-900">Standard Express Courier</p>
                      <p className="text-[11px] text-neutral-500">2-3 Business Days (TCS / Leopards)</p>
                      <p className="text-xs font-bold text-elan-black mt-1">
                        {shippingFee === 0 ? 'Complimentary' : formatPrice(shippingFee)}
                      </p>
                    </div>
                  </label>

                  <label
                    className={`flex items-start p-3 border rounded-sm cursor-pointer transition-colors ${
                      formData.shippingMethod === 'express'
                        ? 'border-elan-gold bg-amber-50/30 ring-1 ring-elan-gold'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="express"
                      checked={formData.shippingMethod === 'express'}
                      onChange={handleInputChange}
                      className="mt-0.5 accent-elan-gold mr-3"
                    />
                    <div>
                      <p className="text-xs font-semibold text-neutral-900">Priority VIP Dispatch</p>
                      <p className="text-[11px] text-neutral-500">Next-Day Doorstep Courier</p>
                      <p className="text-xs font-bold text-elan-goldDark mt-1">+{formatPrice(350)}</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Step 4: Payment Method */}
              <div className="pt-4 border-t border-neutral-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-elan-gold text-white text-[10px] flex items-center justify-center font-bold">4</span>
                  <span>Payment Preference</span>
                </h3>
                
                <div className="space-y-2.5">
                  {/* COD */}
                  <label
                    className={`flex items-center justify-between p-3 border rounded-sm cursor-pointer transition-colors ${
                      formData.paymentMethod === 'cod'
                        ? 'border-elan-gold bg-amber-50/40 ring-1 ring-elan-gold'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleInputChange}
                        className="accent-elan-gold"
                      />
                      <Banknote size={17} className="text-emerald-700" />
                      <div>
                        <p className="text-xs font-semibold text-neutral-900">Cash on Delivery (COD)</p>
                        <p className="text-[10px] text-neutral-500">Pay cash securely upon receiving your parcel</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      Most Popular
                    </span>
                  </label>

                  {/* Card Payment */}
                  <label
                    className={`flex flex-col p-3 border rounded-sm cursor-pointer transition-colors ${
                      formData.paymentMethod === 'card'
                        ? 'border-elan-gold bg-amber-50/40 ring-1 ring-elan-gold'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleInputChange}
                          className="accent-elan-gold"
                        />
                        <CreditCard size={17} className="text-neutral-700" />
                        <div>
                          <p className="text-xs font-semibold text-neutral-900">Credit or Debit Card</p>
                          <p className="text-[10px] text-neutral-500">Visa, MasterCard, PayPak, UnionPay</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-neutral-400">256-Bit SSL</span>
                    </div>

                    {formData.paymentMethod === 'card' && (
                      <div className="mt-3 pt-3 border-t border-neutral-200 grid grid-cols-2 gap-2 text-xs">
                        <input
                          type="text"
                          placeholder="Card Number (4242 ••••)"
                          value={formData.cardNumber}
                          onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                          className="col-span-2 px-3 py-1.5 border rounded-sm bg-white"
                        />
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={formData.cardExpiry}
                          onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                          className="px-3 py-1.5 border rounded-sm bg-white"
                        />
                        <input
                          type="text"
                          placeholder="CVC"
                          value={formData.cardCvc}
                          onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                          className="px-3 py-1.5 border rounded-sm bg-white"
                        />
                      </div>
                    )}
                  </label>

                  {/* EasyPaisa / JazzCash */}
                  <label
                    className={`flex items-center justify-between p-3 border rounded-sm cursor-pointer transition-colors ${
                      formData.paymentMethod === 'jazzcash'
                        ? 'border-elan-gold bg-amber-50/40 ring-1 ring-elan-gold'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="jazzcash"
                        checked={formData.paymentMethod === 'jazzcash'}
                        onChange={handleInputChange}
                        className="accent-elan-gold"
                      />
                      <Smartphone size={17} className="text-orange-600" />
                      <div>
                        <p className="text-xs font-semibold text-neutral-900">JazzCash / EasyPaisa Mobile Wallet</p>
                        <p className="text-[10px] text-neutral-500">Instant approval via mobile OTP</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-elan-dark hover:bg-elan-gold text-white font-medium text-xs uppercase tracking-[0.2em] rounded-sm transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Transmitting to Atelier...</span>
                  </div>
                ) : (
                  <>
                    <Lock size={14} />
                    <span>Confirm & Place Order ({formatPrice(computedGrandTotal)})</span>
                  </>
                )}
              </button>

            </form>

            {/* Right Column: Order Review Sidebar */}
            <div className="lg:col-span-5 bg-neutral-50 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-neutral-200 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-4 pb-2 border-b border-neutral-200">
                  Order Review ({cart.reduce((a, b) => a + b.qty, 0)} Items)
                </h3>

                {/* Items List */}
                <div className="max-h-60 overflow-y-auto divide-y divide-neutral-200 pr-1">
                  {cart.map((item) => (
                    <div key={item.itemKey} className="py-2.5 flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-14 object-cover rounded-sm bg-neutral-200 border border-neutral-300 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-elan-black truncate">{item.name}</p>
                        <p className="text-[10px] text-neutral-500">
                          Qty: {item.qty} · Size: {item.selectedSize} · {item.selectedColor}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-elan-black">
                        {formatPrice(item.price * item.qty)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 text-xs pt-4 border-t border-neutral-200 mt-4">
                  <div className="flex justify-between text-neutral-600">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-700">
                      <span>Privilege Discount ({appliedPromo?.code})</span>
                      <span>-{formatPrice(discountAmount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-neutral-600">
                    <span>Delivery Fee</span>
                    <span>
                      {shippingFee === 0 && formData.shippingMethod === 'standard' ? (
                        <strong className="text-emerald-700">Complimentary</strong>
                      ) : (
                        formatPrice(shippingFee + additionalExpressFee)
                      )}
                    </span>
                  </div>
                  {isGiftWrap && (
                    <div className="flex justify-between text-neutral-600">
                      <span>Bespoke Gift Packaging</span>
                      <span>{formatPrice(giftWrapFee)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-serif font-bold text-elan-black pt-3 border-t border-neutral-300">
                    <span>Total Due</span>
                    <span>{formatPrice(computedGrandTotal)}</span>
                  </div>
                </div>
              </div>

              {/* Trust Callout */}
              <div className="mt-6 pt-4 border-t border-neutral-200 text-[11px] text-neutral-500 space-y-1.5">
                <p className="flex items-center gap-1.5 text-neutral-700 font-medium">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  <span>Doorstep Inspection on Delivery Guaranteed</span>
                </p>
                <p>Need support? Contact our VIP Concierge via WhatsApp: +92 300 0000000</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
