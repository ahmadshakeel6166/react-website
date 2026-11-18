import React from 'react';
import { Truck, ShieldCheck, Sparkles, RotateCcw, Award } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: Truck, text: 'Complimentary Nationwide Delivery Over Rs. 5,000' },
  { icon: Sparkles, text: 'Master Artisan Hand-Embroidery & Bespoke Finishes' },
  { icon: ShieldCheck, text: '100% Certified Mulberry Silk & Pure French Flax Linen' },
  { icon: RotateCcw, text: 'Hassle-Free 14-Day Doorstep Exchange Policy' },
  { icon: Award, text: 'Pakistan’s Premier Luxury Fashion & Couture House' }
];

export const TrustMarquee = () => {
  return (
    <div className="bg-elan-dark border-y border-neutral-800 text-neutral-300 py-3.5 overflow-hidden select-none">
      <div className="flex w-max animate-marquee space-x-12 items-center">
        {[...HIGHLIGHTS, ...HIGHLIGHTS].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center space-x-3 text-xs tracking-[0.16em] uppercase font-medium">
              <Icon size={15} className="text-elan-gold flex-shrink-0" />
              <span className="whitespace-nowrap">{item.text}</span>
              <span className="text-elan-gold/60 text-xs pl-6">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
