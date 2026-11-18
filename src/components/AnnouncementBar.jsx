import React, { useState, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { ChevronRight, Phone, Globe, Sparkles } from 'lucide-react';

const ANNOUNCEMENTS = [
  'Complimentary Nationwide Express Shipping on orders over Rs. 5,000',
  'Exclusive: Atelier Haute Couture Spring/Summer 2026 Collection is now live',
  'Use privilege code ELAN10 for 10% off your first purchase',
  'Same-day doorstep delivery available in Lahore, Karachi & Islamabad'
];

export const AnnouncementBar = ({ onOpenTracking }) => {
  const [index, setIndex] = useState(0);
  const { currency, setCurrency, currencies } = useCurrency();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-elan-dark text-white text-xs border-b border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        
        {/* Left helper info */}
        <div className="hidden md:flex items-center space-x-4 text-neutral-300">
          <button 
            onClick={onOpenTracking} 
            className="hover:text-elan-gold transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Sparkles size={13} className="text-elan-gold" />
            <span>Track Your Order</span>
          </button>
          <span className="text-neutral-600">|</span>
          <a href="tel:+923000000000" className="hover:text-elan-gold transition-colors flex items-center gap-1">
            <Phone size={13} />
            <span>VIP Concierge: +92 (42) 111-3526-00</span>
          </a>
        </div>

        {/* Center rotating ticker */}
        <div className="flex-1 text-center py-0.5 overflow-hidden">
          <p className="inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-500 ease-in-out">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-elan-gold animate-ping"></span>
            {ANNOUNCEMENTS[index]}
          </p>
        </div>

        {/* Right currency & language */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center gap-1 text-neutral-300">
            <Globe size={13} className="text-elan-gold" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent text-xs font-semibold text-neutral-200 hover:text-elan-gold focus:outline-none cursor-pointer pr-1"
            >
              {currencies.map(c => (
                <option key={c} value={c} className="bg-neutral-900 text-white">
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>
    </div>
  );
};
