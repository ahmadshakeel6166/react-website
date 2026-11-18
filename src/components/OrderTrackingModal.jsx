import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock, Truck, Package, ShieldCheck, MapPin } from 'lucide-react';

export const OrderTrackingModal = ({ initialOrderId, onClose }) => {
  const [orderQuery, setOrderQuery] = useState(initialOrderId || '');
  const [trackedOrder, setTrackedOrder] = useState(
    initialOrderId
      ? {
          orderId: initialOrderId,
          status: 'In Transit',
          currentStep: 3, // 1: Confirmed, 2: Tailoring/Packing, 3: Dispatched, 4: Delivered
          courier: 'TCS Express Pakistan',
          trackingNumber: 'TCS-' + Math.floor(10000000 + Math.random() * 90000000),
          lastLocation: 'Regional Sorting Hub, Lahore',
          updatedAt: '2 hours ago',
          expectedDelivery: 'Tomorrow by 5:00 PM'
        }
      : null
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (!orderQuery.trim()) return;
    
    // Simulate lookup
    setTrackedOrder({
      orderId: orderQuery.toUpperCase(),
      status: 'In Transit',
      currentStep: 3,
      courier: 'TCS Express Pakistan',
      trackingNumber: 'TCS-98421034',
      lastLocation: 'Central Dispatch Facility, Lahore',
      updatedAt: 'Just now',
      expectedDelivery: 'Within 48 Hours'
    });
  };

  const steps = [
    { title: 'Order Confirmed', desc: 'Payment & concierge review verified', icon: CheckCircle2 },
    { title: 'Atelier Finishing', desc: 'Inspection, steam press & luxury boxing', icon: Package },
    { title: 'Dispatched in Transit', desc: 'Departed sorting hub via air cargo', icon: Truck },
    { title: 'Out for Delivery', desc: 'Assigned to doorstep courier rider', icon: MapPin }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-xl bg-white shadow-2xl rounded-sm overflow-hidden z-10 border border-neutral-200 animate-scale-up p-6 sm:p-8">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-elan-gold block">
                Atelier Logistics
              </span>
              <h2 className="font-serif text-2xl text-elan-black font-medium">
                Track Consignment
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-black p-1"
            >
              <X size={20} />
            </button>
          </div>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="flex gap-2 mb-6">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Enter order reference (e.g. ELN-842102)"
                value={orderQuery}
                onChange={(e) => setOrderQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-neutral-300 rounded-sm focus:outline-none focus:border-elan-gold uppercase tracking-wider"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2 bg-elan-dark hover:bg-elan-gold text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
            >
              Track
            </button>
          </form>

          {/* Tracking Result */}
          {trackedOrder ? (
            <div className="space-y-6">
              {/* Status Banner */}
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-sm p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-elan-goldDark block">
                    Current Consignment Status
                  </span>
                  <p className="font-serif text-lg text-elan-black font-semibold">
                    {trackedOrder.status}
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    Location: {trackedOrder.lastLocation} ({trackedOrder.updatedAt})
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                    Courier Partner
                  </span>
                  <span className="text-xs font-bold text-neutral-800">{trackedOrder.courier}</span>
                  <p className="text-[10px] text-neutral-500">{trackedOrder.trackingNumber}</p>
                </div>
              </div>

              {/* Progress Stepper */}
              <div className="space-y-4 pt-2">
                {steps.map((st, idx) => {
                  const stepNumber = idx + 1;
                  const isDone = stepNumber <= trackedOrder.currentStep;
                  const isCurrent = stepNumber === trackedOrder.currentStep;
                  const Icon = st.icon;

                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                            isDone
                              ? 'bg-elan-gold text-white shadow-sm'
                              : 'bg-neutral-100 text-neutral-400'
                          } ${isCurrent ? 'ring-4 ring-amber-100 animate-pulse' : ''}`}
                        >
                          <Icon size={16} />
                        </div>
                        {idx < steps.length - 1 && (
                          <div
                            className={`w-0.5 h-10 my-1 ${
                              stepNumber < trackedOrder.currentStep ? 'bg-elan-gold' : 'bg-neutral-200'
                            }`}
                          />
                        )}
                      </div>

                      <div className="pt-0.5">
                        <h4 className={`text-xs font-bold ${isDone ? 'text-elan-black' : 'text-neutral-400'}`}>
                          {st.title} {isCurrent && <span className="ml-1 text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-semibold">In Progress</span>}
                        </h4>
                        <p className="text-[11px] text-neutral-500">{st.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-neutral-100 text-[11px] text-neutral-400 text-center">
                <p>Delivery questions? Contact our dedicated concierge 24/7 at concierge@elan.pk</p>
              </div>
            </div>
          ) : (
            <div className="py-8 text-center text-xs text-neutral-500">
              <p>Please enter your 6-digit Order Reference from your email to check real-time courier dispatch progress.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
