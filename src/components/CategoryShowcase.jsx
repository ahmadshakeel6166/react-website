import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CATEGORY_CARDS = [
  {
    id: 'women',
    title: 'Women Pret',
    tagline: 'Effortless Silk & Linen Silhouettes',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85',
    itemCount: '8 Styles'
  },
  {
    id: 'men',
    title: 'Men Atelier',
    tagline: 'Tailored Blazers & Everyday Heavyweights',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85',
    itemCount: '6 Styles'
  },
  {
    id: 'luxury-pret',
    title: 'Haute Festive',
    tagline: 'Hand-Worked Zardozi & Raw Silk',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85',
    itemCount: '4 Couture Pieces'
  },
  {
    id: 'kids',
    title: 'Mini Élan',
    tagline: 'Gentle Festive Wear for Little Icons',
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=85',
    itemCount: '4 Styles'
  }
];

export const CategoryShowcase = ({ onSelectCategory }) => {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-neutral-200">
        <div>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-elan-gold">
            Curated Universes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-elan-black mt-1 font-normal">
            Signature Collections
          </h2>
        </div>
        <p className="text-sm text-neutral-500 max-w-md mt-2 sm:mt-0">
          From breathable everyday linens to opulent heritage embroidery, discover pieces designed to endure beyond the season.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORY_CARDS.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="group relative h-[440px] rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
          >
            {/* Background Image with Zoom */}
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Gradient Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 group-hover:from-black/90 transition-colors duration-300" />

            {/* Top pill */}
            <div className="absolute top-4 left-4 z-10">
              <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                {cat.itemCount}
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col justify-end text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-white group-hover:text-elan-goldLight transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 font-light tracking-wide line-clamp-1">
                    {cat.tagline}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-elan-gold text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
