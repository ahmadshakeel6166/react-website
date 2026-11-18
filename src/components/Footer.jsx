import React, { useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export const Footer = ({ onSelectCategory, onOpenTracking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { currency, setCurrency, currencies } = useCurrency();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-elan-dark text-white border-t border-neutral-800">
      {/* Top Banner / Newsletter */}
      <div className="border-b border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-elan-gold">
              The Élan Gazette
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium mt-1">
              Join Our Atelier Inner Circle
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1 max-w-md font-light">
              Receive private salon invitations, new seasonal edits, and bespoke styling previews.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="bg-white/10 px-6 py-3 rounded-sm text-xs text-elan-gold font-medium border border-elan-gold/30">
                ✓ Thank you for subscribing to the Élan Gazette.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex max-w-md w-full">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="bg-neutral-800/90 text-white placeholder-neutral-500 text-xs px-4 py-3 rounded-l-sm border border-neutral-700 focus:outline-none focus:border-elan-gold flex-1"
                />
                <button
                  type="submit"
                  className="bg-elan-gold hover:bg-elan-goldDark text-white px-6 text-xs font-semibold uppercase tracking-wider rounded-r-sm transition-colors flex items-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight size={13} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <span className="font-serif text-3xl tracking-[0.25em] font-bold uppercase block text-white">
            ÉLAN
          </span>
          <span className="text-[10px] tracking-[0.35em] uppercase text-elan-gold block -mt-2">
            Haute Couture & Ready-to-Wear
          </span>
          <p className="text-xs text-neutral-400 leading-relaxed max-w-sm font-light pt-2">
            Renowned for poetic aesthetics, master artisan craftsmanship, and opulent silhouettes. Designed for the modern discerning individual with timeless poise.
          </p>
          <div className="flex items-center space-x-3 pt-2 text-neutral-400">
            <a href="#" className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center hover:text-elan-gold hover:border-elan-gold transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center hover:text-elan-gold hover:border-elan-gold transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.456 5 15.584 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/></svg>
            </a>
          </div>
        </div>

        {/* Collections */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-200 mb-4">
            Collections
          </h4>
          <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
            <li>
              <button onClick={() => onSelectCategory('women')} className="hover:text-elan-gold transition-colors">
                Women's Pret
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('men')} className="hover:text-elan-gold transition-colors">
                Men's Contemporary
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('luxury-pret')} className="hover:text-elan-gold transition-colors">
                Haute Festive Silk
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('kids')} className="hover:text-elan-gold transition-colors">
                Mini Élan (Kids)
              </button>
            </li>
            <li>
              <a href="#lookbook" className="hover:text-elan-gold transition-colors">
                Resort Lookbook
              </a>
            </li>
          </ul>
        </div>

        {/* Client Concierge */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-200 mb-4">
            Client Concierge
          </h4>
          <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
            <li>
              <button onClick={onOpenTracking} className="hover:text-elan-gold transition-colors text-left">
                Track Consignment
              </button>
            </li>
            <li>
              <a href="tel:+923000000000" className="hover:text-elan-gold transition-colors">
                Bespoke Consultations
              </a>
            </li>
            <li>
              <a href="mailto:concierge@elan.pk" className="hover:text-elan-gold transition-colors">
                concierge@elan.pk
              </a>
            </li>
            <li>
              <span className="hover:text-elan-gold transition-colors">
                14-Day Doorstep Exchange
              </span>
            </li>
            <li>
              <span className="hover:text-elan-gold transition-colors">
                International Inquiries
              </span>
            </li>
          </ul>
        </div>

        {/* Boutiques */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-200 mb-4">
            Boutique Locations
          </h4>
          <div className="space-y-3 text-xs text-neutral-400 font-light">
            <div>
              <p className="font-semibold text-neutral-300">Lahore Flagship</p>
              <p className="text-[11px]">M.M. Alam Road, Gulberg III</p>
            </div>
            <div>
              <p className="font-semibold text-neutral-300">Karachi Atelier</p>
              <p className="text-[11px]">Block 4, Clifton</p>
            </div>
            <div>
              <p className="font-semibold text-neutral-300">Islamabad Salon</p>
              <p className="text-[11px]">Beverly Centre, Blue Area</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Currency, Payments & Legal */}
      <div className="border-t border-neutral-800/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} ÉLAN Couture House. All rights reserved.</p>

          {/* Payment Badges */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">Accepted:</span>
            <span className="px-2 py-0.5 rounded bg-neutral-800 text-[10px] text-neutral-300 border border-neutral-700">Cash on Delivery</span>
            <span className="px-2 py-0.5 rounded bg-neutral-800 text-[10px] text-neutral-300 border border-neutral-700">Visa / Mastercard</span>
            <span className="px-2 py-0.5 rounded bg-neutral-800 text-[10px] text-neutral-300 border border-neutral-700">JazzCash</span>
          </div>

          <div className="flex items-center space-x-4 text-[11px]">
            <a href="#" className="hover:text-neutral-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-300">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-300">Care Guide</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
