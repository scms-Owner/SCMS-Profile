import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/companyData';
import { GalleryItem } from '../types';
import { ResponsiveImage } from './ResponsiveImage';
import {
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Tag
} from 'lucide-react';

export const ProjectGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

        {/* Masonry-Style Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer bg-[#12141c] border border-white/10 hover:border-[#d4af37] shadow-xl hover:shadow-[0_15px_30px_rgba(212,175,55,0.2)] transition-all duration-300"
            >
              <ResponsiveImage
                id={`gallery-img-${item.id}`}
                src={item.image}
                alt={item.title}
                layout="gallery"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                containerClassName="w-full h-full absolute inset-0"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12]/95 via-[#0c0d12]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Hover Floating Icon */}
              <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-[#d4af37]/40 flex items-center justify-center text-[#fce089] opacity-0 group-hover:opacity-100 transition-all duration-200">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Image Info at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform">
                <span className="text-[10px] font-bold text-[#fce089] uppercase tracking-wider px-2 py-0.5 rounded bg-[#d4af37]/20 border border-[#d4af37]/40 inline-block mb-1.5">
                  {item.category}
                </span>
                <h3 className="text-base font-extrabold text-white font-['Montserrat'] line-clamp-1 mb-1 group-hover:text-[#fce089] transition-colors">
                  {item.title}
                </h3>
                {item.location && (
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#d4af37]" />
                    <span>{item.location}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Full-Screen Lightbox Modal */}
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
            aria-label="Previous image"
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
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative max-h-[75vh] w-auto rounded-xl overflow-hidden border border-[#d4af37]/40 shadow-2xl">
              <ResponsiveImage
                id={`lightbox-img-${filteredItems[lightboxIndex].id}`}
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                layout="fullscreen"
                priority
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs font-bold text-[#d4af37] tracking-wider uppercase">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-['Montserrat'] mt-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
