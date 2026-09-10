import React from 'react';
import { CONTRACTING_SERVICES_LIST, COMPANY_INFO } from '../data/companyData';
import { Building2, CheckSquare, ArrowRight, ShieldAlert, PhoneCall, Ruler, FileCheck } from 'lucide-react';
import { Tilt3D } from './Tilt3D';

interface ContractingSectionProps {
  onDiscussProjectClick: () => void;
}

export const ContractingSection: React.FC<ContractingSectionProps> = ({ onDiscussProjectClick }) => {
  return (
    <section id="contracting" className="py-24 bg-[#0e1017] border-t border-b border-[#d4af37]/20 relative overflow-hidden">
      {/* Background Architectural Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 500 500" className="w-full h-full stroke-[#d4af37] fill-none" strokeWidth="1">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="500" height="500" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Philosophy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#fce089] text-xs font-bold tracking-widest uppercase mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>WE TAKE CONSTRUCTION CONTRACTS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight font-['Montserrat'] leading-tight mb-6">
              FROM PLAN TO COMPLETION, <br />
              <span className="gold-gradient-text">
                WE TAKE RESPONSIBILITY.
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              We undertake construction work contracts according to project requirements. With seasoned site foremen, skilled master tradesmen, and strict supervisory oversight, we manage civil execution with high reliability.
            </p>

            {/* Crucial Disclaimer as requested in user prompt */}
            <div className="p-4 rounded-xl bg-[#171a23] border-l-4 border-[#d4af37] text-xs sm:text-sm text-gray-300 leading-relaxed mb-8 flex items-start gap-3 shadow-md">
              <ShieldAlert className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-1">Tailored Scope &amp; Availability:</strong>
                All listed civil services are customizable and discussed according to your specific architectural drawings, site location, timeline, and structural requirements.
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onDiscussProjectClick}
                id="btn-discuss-project"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#b8860b] text-black font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:brightness-110 active:scale-98 transition-all cursor-pointer font-['Montserrat']"
              >
                <span>DISCUSS YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phones[0].raw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#171a24] text-gray-200 border border-white/10 hover:border-[#d4af37]/50 text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#d4af37]" />
                <span>DIRECT CALL</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contracting Services Breakdown Card with 3D Tilt */}
          <div className="lg:col-span-6">
            <Tilt3D maxTilt={6} scale={1.02}>
              <div className="rounded-2xl bg-gradient-to-b from-[#181c29] to-[#0f1118] border border-[#d4af37]/40 p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.8)] relative overflow-hidden">
                {/* 3D Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fce089] to-transparent"></div>

                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div>
                    <h3 className="text-xl font-black text-white font-['Montserrat']">
                      Civil Contracting Scope
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Available for discussion based on project specifications
                    </p>
                  </div>
                  <span className="text-[11px] font-black px-2.5 py-1 rounded bg-[#d4af37]/15 text-[#f3d068] border border-[#d4af37]/40 font-mono shadow-sm">
                    SCMS CIVIL
                  </span>
                </div>

                {/* Service List Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {CONTRACTING_SERVICES_LIST.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#131620] border border-white/10 hover:border-[#d4af37]/50 transition-colors group shadow-sm"
                    >
                      <div className="w-6 h-6 rounded-md bg-[#d4af37]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4af37]/30 transition-colors border border-[#d4af37]/30">
                        <CheckSquare className="w-3.5 h-3.5 text-[#fce089]" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-200 group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quality & Safety Bar */}
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-gray-400 gap-3">
                  <div className="flex items-center gap-1.5">
                    <Ruler className="w-4 h-4 text-[#d4af37]" />
                    <span>Precision Engineering Drawings</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-[#d4af37]" />
                    <span>Transparent Material &amp; Labor Contracts</span>
                  </div>
                </div>
              </div>
            </Tilt3D>
          </div>
        </div>
      </div>
    </section>
  );
};
