import React from 'react';
import { WHY_CHOOSE_ITEMS } from '../data/companyData';
import {
  Users,
  Building,
  ShieldCheck,
  Award,
  Clock,
  CircleDollarSign,
  Layers,
  HeartHandshake,
  CheckCircle2,
  Home
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Users className="w-5 h-5 text-[#fce089]" />;
      case 1:
        return <Building className="w-5 h-5 text-[#fce089]" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-[#fce089]" />;
      case 3:
        return <Award className="w-5 h-5 text-[#fce089]" />;
      case 4:
        return <Clock className="w-5 h-5 text-[#fce089]" />;
      case 5:
        return <CircleDollarSign className="w-5 h-5 text-[#fce089]" />;
      case 6:
        return <Layers className="w-5 h-5 text-[#fce089]" />;
      case 7:
        return <HeartHandshake className="w-5 h-5 text-[#fce089]" />;
      case 8:
        return <Home className="w-5 h-5 text-[#fce089]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#fce089]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#fce089] text-xs font-bold tracking-widest uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>OUR COMPETITIVE ADVANTAGES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight font-['Montserrat'] mb-4">
            WHY CHOOSE SOHANUR CONSTRUCTION?
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-normal">
            Building with integrity, delivering dependable craftsmanship, and ensuring continuous site accountability.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fce089] to-[#aa7c11] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 9 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={index}
              id={`why-card-${index + 1}`}
              className="group bg-[#12141c] rounded-2xl border border-white/10 hover:border-[#d4af37]/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_25px_rgba(212,175,55,0.15)] relative overflow-hidden"
            >
              {/* Gold Top Border Glow */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent group-hover:via-[#d4af37] transition-all"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/35 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(index)}
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37]/60 group-hover:text-[#d4af37] transition-colors" />
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-white font-['Montserrat'] mb-2 group-hover:text-[#fce089] transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center text-[10px] text-[#d4af37] font-semibold tracking-wider uppercase">
                <span>SCMS STANDARD #{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
