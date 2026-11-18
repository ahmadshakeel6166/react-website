import React, { useState, useEffect } from 'react';
import { X, Sparkles, Check, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { applyPromoCode } = useCart();

  useEffect(() => {
    const hasSeen = localStorage.getItem('elan_vip_newsletter_dismissed');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('elan_vip_newsletter_dismissed', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setIsSubscribed(true);
    localStorage.setItem('elan_vip_newsletter_dismissed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative w-full max-w-lg bg-white rounded-sm overflow-hidden shadow-2xl z-10 border border-neutral-200 animate-scale-up">
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 text-neutral-400 hover:text-black p-1"
        >
          <X size={20} />
        </button>

        <div className="p-8 sm:p-10 text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-amber-50 text-elan-gold flex items-center justify-center mb-4">
            <Sparkles size={22} />
          </div>

          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-elan-gold block mb-1">
            Exclusive Atelier Privilege
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-elan-black font-normal mb-2">
            Enjoy 10% Off Your First Acquisition
          </h3>
          <p className="text-xs text-neutral-500 max-w-sm mx-auto mb-6">
            Join the Élan Inner Circle for private runway previews, seasonal edits, and bespoke styling consultations.
          </p>

          {isSubscribed ? (
            <div className="bg-amber-50/80 border border-amber-200 rounded-sm p-4 text-xs text-neutral-800 space-y-2">
              <p className="font-semibold text-emerald-800">Welcome to the Élan Inner Circle.</p>
              <p>Your privilege code:</p>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 border border-neutral-300 rounded font-mono font-bold text-sm tracking-wider">
                <span>ELAN10</span>
              </div>
              <div>
                <button
                  onClick={() => {
                    applyPromoCode('ELAN10');
                    handleClose();
                  }}
                  className="mt-2 text-xs text-elan-gold hover:underline font-semibold"
                >
                  Apply code to my shopping bag now →
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 text-xs border border-neutral-300 rounded-sm focus:outline-none focus:border-elan-gold"
              />
              <button
                type="submit"
                className="w-full py-3.5 bg-elan-dark hover:bg-elan-gold text-white font-medium text-xs uppercase tracking-[0.18em] rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Claim Privilege Code</span>
                <ArrowRight size={14} />
              </button>
              <p className="text-[10px] text-neutral-400">
                You may unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
