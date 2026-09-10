import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/companyData';
import { GalleryItem } from '../types';
import {
  Building2,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Tag,
  Layers,
  Hammer,
  Wrench,
  HardHat,
  ShieldCheck,
  Award,
  Camera
} from 'lucide-react';

export const ProjectGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Construction Work':
      case 'Construction Sites':
        return <Building2 className="w-8 h-8 text-[#fce089]" />;
      case 'Rod Binding':
      case 'Steel Fixing':
        return <Layers className="w-8 h-8 text-[#fce089]" />;
      case 'Shuttering':
        return <Hammer className="w-8 h-8 text-[#fce089]" />;
      case 'Concrete Work':
        return <Wrench className="w-8 h-8 text-[#fce089]" />;
      case 'Manpower Team':
        return <HardHat className="w-8 h-8 text-[#fce089]" />;
      case 'Completed Work':
        return <ShieldCheck className="w-8 h-8 text-[#fce089]" />;
      default:
        return <Building2 className="w-8 h-8 text-[#fce089]" />;
    }
  };

  const categories = [
    'All',
    'Construction Work',
    'Rod Binding',
    'Steel Fixing',
    'Shuttering',
    'Concrete Work',
    'Manpower Team',
    'Construction Sites',
    'Completed Work'
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  };

  return (
    <section id="gallery" className="py-24 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#fce089] text-xs font-bold tracking-widest uppercase mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>VISUAL DOCUMENTATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight font-['Montserrat'] mb-4">
            OUR WORK IN ACTION
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-normal">
            Real photographic documentation from rebar fabrication yards, concrete pouring, shuttering decks, and on-site craftsmen.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fce089] to-[#aa7c11] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#b8860b] text-black shadow-md'
                  : 'bg-[#14161f] text-gray-300 border border-white/10 hover:border-[#d4af37]/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technical Vector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-[#181b26] via-[#11131a] to-[#0a0c12] border border-[#d4af37]/35 hover:border-[#d4af37] shadow-xl hover:shadow-[0_15px_30px_rgba(212,175,55,0.2)] transition-all duration-300 p-5 flex flex-col justify-between"
            >
              {/* Subtle Blueprint Grid */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }}
              ></div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#fce089] uppercase tracking-wider px-2.5 py-1 rounded bg-[#d4af37]/20 border border-[#d4af37]/40 inline-block font-mono">
                  {item.category}
                </span>
                <div className="w-8 h-8 rounded-lg bg-black/60 border border-[#d4af37]/40 flex items-center justify-center text-[#fce089] group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Central Vector Icon */}
              <div className="relative z-10 flex items-center justify-center my-auto">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af37]/25 to-black/70 border-2 border-[#d4af37]/60 flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.7)] group-hover:scale-110 group-hover:border-[#fce089] transition-all duration-300">
                  {getCategoryIcon(item.category)}
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-base font-extrabold text-white font-['Montserrat'] line-clamp-1 mb-1 group-hover:text-[#fce089] transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  {item.location ? (
                    <p className="flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3 text-[#d4af37] flex-shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </p>
                  ) : (
                    <span>Bangladesh Division</span>
                  )}
                  <span className="text-[#4ade80] text-[10px] font-mono font-bold flex-shrink-0">
                    SCMS VERIFIED
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Detail Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-fadeIn">
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 text-white hover:bg-[#d4af37] hover:text-black transition-colors z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white border border-white/20 hover:bg-[#d4af37] hover:text-black hover:border-transparent transition-all z-10"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white border border-white/20 hover:bg-[#d4af37] hover:text-black hover:border-transparent transition-all z-10"
            aria-label="Next item"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Detail Card Container */}
          <div className="max-w-lg w-full bg-gradient-to-b from-[#181b24] to-[#0c0d12] border-2 border-[#d4af37]/50 rounded-2xl p-6 sm:p-8 text-center shadow-2xl relative">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[#d4af37]/20 border-2 border-[#d4af37]/60 flex items-center justify-center shadow-lg">
              {getCategoryIcon(filteredItems[lightboxIndex].category)}
            </div>

            <span className="text-xs font-bold text-[#d4af37] tracking-wider uppercase font-mono px-3 py-1 rounded bg-[#d4af37]/15 border border-[#d4af37]/30 inline-block">
              {filteredItems[lightboxIndex].category}
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Montserrat'] mt-3">
              {filteredItems[lightboxIndex].title}
            </h3>

            {filteredItems[lightboxIndex].location && (
              <p className="text-sm text-gray-300 flex items-center justify-center gap-1.5 mt-2">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span>{filteredItems[lightboxIndex].location}</span>
              </p>
            )}

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span>ESTD 2016</span>
              <span className="text-[#fce089] font-bold">
                SPEC RECORD {lightboxIndex + 1} OF {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
