import React from 'react';
import { REVIEWS } from '../data/products';
import { Star, CheckCircle, Quote } from 'lucide-react';

export const CustomerReviews = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-elan-gold">
            Voices of Patrons
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-elan-black mt-1 font-normal">
            Refined by Experience
          </h2>
          <p className="text-neutral-500 text-sm mt-2 font-light">
            Read authentic reviews from clients who trust Élan for life’s most celebrated occasions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-neutral-50/70 p-7 rounded-sm border border-neutral-200/80 hover:border-elan-gold/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-neutral-400">{rev.date}</span>
                </div>

                <h4 className="font-serif text-base font-bold text-elan-black mb-2">
                  "{rev.title}"
                </h4>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light mb-4">
                  {rev.comment}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-elan-black">{rev.name}</span>
                    {rev.verified && (
                      <CheckCircle size={13} className="text-emerald-600" title="Verified Buyer" />
                    )}
                  </div>
                  <span className="text-[10px] text-neutral-400 block">{rev.city}</span>
                </div>
                <span className="text-[10px] font-medium text-elan-gold bg-amber-50 px-2 py-0.5 rounded">
                  {rev.item}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
