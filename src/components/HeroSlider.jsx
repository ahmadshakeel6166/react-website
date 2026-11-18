import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/products';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

export const HeroSlider = ({ onCtaClick }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = HERO_SLIDES[current];

  return (
    <section 
      className="relative h-[80vh] min-h-[580px] max-h-[820px] bg-neutral-900 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images */}
      {HERO_SLIDES.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transform transition-transform duration-[7000ms]`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center filter brightness-[0.78]"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl text-white pt-10">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5 animate-fade-in">
            <Sparkles size={13} className="text-elan-gold" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-200">
              {slide.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.12] mb-5 text-white drop-shadow-sm">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed mb-8 max-w-lg">
            {slide.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onCtaClick(slide.category)}
              className="px-8 py-3.5 bg-white text-elan-black hover:bg-elan-gold hover:text-white font-medium text-xs uppercase tracking-[0.16em] transition-all duration-300 shadow-lg flex items-center gap-2 rounded-sm group"
            >
              <span>{slide.ctaPrimary}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#lookbook"
              className="px-7 py-3.5 border border-white/50 text-white hover:border-white hover:bg-white/10 font-medium text-xs uppercase tracking-[0.16em] transition-all duration-300 backdrop-blur-sm rounded-sm"
            >
              {slide.ctaSecondary}
            </a>
          </div>

        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-20 flex items-center space-x-3">
        <button
          onClick={() => setCurrent((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="w-10 h-10 rounded-full border border-white/30 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => setCurrent((current + 1) % HERO_SLIDES.length)}
          className="w-10 h-10 rounded-full border border-white/30 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Pagination Line Indicators */}
      <div className="absolute bottom-8 left-6 sm:left-12 z-20 flex items-center space-x-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 transition-all duration-500 rounded-full ${
              idx === current ? 'w-10 bg-elan-gold' : 'w-3 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
