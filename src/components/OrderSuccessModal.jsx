import React from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { CheckCircle2, Truck, Package, Download, ArrowRight, Printer, Sparkles } from 'lucide-react';

export const OrderSuccessModal = ({ order, onClose, onTrackOrder }) => {
  if (!order) return null;
  const { formatPrice } = useCurrency();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="relative w-full max-w-2xl bg-white shadow-2xl rounded-sm overflow-hidden z-10 border border-neutral-200 animate-scale-up p-6 sm:p-10 text-center">
          
          {/* Success Icon */}
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner">
            <CheckCircle2 size={36} />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-elan-goldDark text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles size={12} />
            <span>Order Successfully Registered</span>
          </div>

          <h2 className="font-serif text-3xl font-medium text-elan-black mb-1">
            Thank You, {order.customer.firstName}
          </h2>
          <p className="text-xs text-neutral-500 max-w-md mx-auto mb-6">
            Your couture order has been entrusted to our atelier craftsmen. A confirmation dispatch note has been sent to <strong>{order.customer.email}</strong>.
          </p>

          {/* Order Details Card */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-5 text-left mb-6 space-y-3">
            <div className="flex flex-wrap items-center justify-between border-b border-neutral-200 pb-3 gap-2">
              <div>
                <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-wider">
                  Consignment Reference
                </span>
                <span className="font-serif text-lg font-bold text-elan-black">
                  {order.orderId}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-wider">
                  Estimated Delivery
                </span>
                <span className="text-xs font-semibold text-emerald-700">
                  {order.estimatedDelivery}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
              <div>
                <span className="text-neutral-400 font-medium block">Delivery Destination:</span>
                <p className="text-neutral-800 font-medium mt-0.5">
                  {order.customer.address}, {order.customer.city}
                </p>
                <p className="text-neutral-500">{order.customer.phone}</p>
              </div>
              <div>
                <span className="text-neutral-400 font-medium block">Payment Method:</span>
                <p className="text-neutral-800 font-medium mt-0.5 uppercase tracking-wide">
                  {order.paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : order.paymentMethod}
                </p>
                <p className="text-neutral-900 font-bold mt-1">
                  Total Payable: {formatPrice(order.finalTotal)}
                </p>
              </div>
            </div>

            {/* Mini Items Preview */}
            <div className="pt-3 border-t border-neutral-200">
              <span className="text-[11px] font-semibold text-neutral-700 block mb-2">
                Purchased Pieces ({order.items.length}):
              </span>
              <div className="space-y-1.5 max-h-32 overflow-y-auto">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-xs text-neutral-600">
                    <span className="truncate pr-2">
                      {item.qty}x {item.name} ({item.selectedSize})
                    </span>
                    <span className="font-medium text-neutral-900 whitespace-nowrap">
                      {formatPrice(item.price * item.qty)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onTrackOrder(order.orderId)}
              className="flex-1 py-3 px-4 bg-elan-dark hover:bg-elan-gold text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Truck size={15} />
              <span>Track Consignment</span>
            </button>
            <button
              onClick={handlePrint}
              className="py-3 px-4 border border-neutral-300 hover:border-black text-neutral-700 hover:text-black text-xs font-semibold rounded-sm transition-colors flex items-center justify-center gap-1.5"
            >
              <Printer size={15} />
              <span>Print Receipt</span>
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
            >
              Continue Browsing
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
