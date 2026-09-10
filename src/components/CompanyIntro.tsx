import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Building2, Users, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

interface CompanyIntroProps {
  onViewConstructionServices: () => void;
  onViewManpowerServices: () => void;
}

export const CompanyIntro: React.FC<CompanyIntroProps> = ({
  onViewConstructionServices,
  onViewManpowerServices
}) => {
  return (
    <section id="about-intro" className="py-20 bg-[#0e1017] border-t border-b border-[#d4af37]/15 relative">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.06),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f3d068] text-xs font-bold tracking-widest uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>COMPANY INTRODUCTION</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-['Montserrat'] mb-3">
            {COMPANY_INFO.name}
          </h2>

          <p className="text-lg sm:text-xl font-bold text-[#d4af37] font-['Montserrat'] tracking-wide mb-6">
            Your Trusted Construction &amp; Workforce Partner
          </p>

          <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed text-center sm:text-justify max-w-2xl mx-auto">
            <p>
              <strong className="text-white">{COMPANY_INFO.name}</strong> is a professional construction contracting and manpower supply company based in Naogaon, Bangladesh.
            </p>
            <p>
              We provide reliable construction services and skilled manpower for different types of construction projects.
            </p>
            <p>
              Whether you need a complete construction contractor or experienced workers for your project, our team is ready to support your requirements with professionalism, responsibility and quality workmanship.
            </p>
          </div>
        </div>

        {/* Two Large Core Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Construction Contractor */}
          <div
            id="intro-card-construction"
            className="group relative rounded-2xl bg-gradient-to-b from-[#181b24] to-[#12141c] border border-[#d4af37]/30 p-8 hover:border-[#d4af37] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.2)] flex flex-col justify-between overflow-hidden"
          >
            {/* Top gold line accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#b8860b]"></div>
            
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Building2 className="w-7 h-7 text-[#fce089]" />
              </div>

              <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase">
                CORE PILLAR 01
              </span>

              <h3 className="text-2xl font-black text-white uppercase tracking-tight font-['Montserrat'] mt-1 mb-3">
                CONSTRUCTION CONTRACTOR
              </h3>

              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Complete construction work according to project requirements. We handle RCC structures, brick masonry, shuttering, and full civil execution with dedicated supervision.
              </p>

              <ul className="space-y-2.5 mb-8 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                  <span>Structural civil contracting from foundation up</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                  <span>Residential, commercial &amp; industrial work</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                  <span>Strict quality control and drawing execution</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onViewConstructionServices}
              id="intro-btn-construction-services"
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#b8860b] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-105 transition-all duration-200 cursor-pointer"
            >
              <span>VIEW CONSTRUCTION SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Manpower Supply */}
          <div
            id="intro-card-manpower"
            className="group relative rounded-2xl bg-gradient-to-b from-[#181b24] to-[#12141c] border border-white/10 p-8 hover:border-[#d4af37] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.2)] flex flex-col justify-between overflow-hidden"
          >
            {/* Top gold line accent on hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>

            <div>
              <div className="w-14 h-14 rounded-xl bg-[#22c55e]/15 border border-[#22c55e]/40 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Users className="w-7 h-7 text-[#4ade80]" />
              </div>

              <span className="text-xs font-bold text-[#4ade80] tracking-widest uppercase">
                CORE PILLAR 02
              </span>

              <h3 className="text-2xl font-black text-white uppercase tracking-tight font-['Montserrat'] mt-1 mb-3">
                MANPOWER SUPPLY
              </h3>

              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Skilled and experienced manpower for construction projects. Rapid dispatch of vetted trade masters and helpers across Bangladesh on flexible terms.
              </p>

              <ul className="space-y-2.5 mb-8 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4ade80]" />
                  <span>Rod mistri, raj mistri, carpenters &amp; welders</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4ade80]" />
                  <span>Trained site foremen &amp; dependable helpers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4ade80]" />
                  <span>Custom crew sizes tailored to project pace</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onViewManpowerServices}
              id="intro-btn-manpower-services"
              className="w-full py-4 px-6 rounded-xl bg-[#1e222d] text-white font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 border border-[#d4af37]/40 hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all duration-200 cursor-pointer"
            >
              <span>VIEW MANPOWER SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
