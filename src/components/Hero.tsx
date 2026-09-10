import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { CompanyLogoSeal } from './CompanyLogoSeal';
import { Logo } from './Logo';
import { Tilt3D } from './Tilt3D';
import { Shield, HardHat, Award, MessageSquare, ArrowRight, CheckCircle2, PhoneCall, Building2, UserCheck } from 'lucide-react';

interface HeroProps {
  onHireConstructionClick: () => void;
  onRequestManpowerClick: () => void;
  onExploreProjectsClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onHireConstructionClick,
  onRequestManpowerClick,
  onExploreProjectsClick
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden isometric-grid"
    >
      {/* 3D Architectural Blueprint Geometric Background (Zero external images) */}
      <div className="absolute inset-0 z-0 bg-[#07080b]">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.08]" 
          style={{
            backgroundImage: `linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        ></div>

        {/* 3D Depth Radial Gradients & Metallic Glows */}
        <div className="absolute inset-0 bg-radial from-[#181c28]/70 via-[#0a0c12]/90 to-[#07080b]"></div>
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-[#d4af37]/12 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#d4af37]/8 rounded-full blur-[140px] pointer-events-none"></div>

        {/* Structural Blueprint Accent Lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 max-w-3xl">
            {/* Trust Badge with company seal */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6 animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1f2a]/90 border border-[#d4af37]/50 shadow-[0_4px_20px_rgba(212,175,55,0.2)] backdrop-blur-md">
                <CompanyLogoSeal size={20} theme="gold" />
                <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[#fce089] uppercase font-['Montserrat']">
                  ESTD 2016 • SOHANUR CONSTRUCTION
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/50 text-[#fce089] text-[11px] sm:text-xs font-bold tracking-wider shadow-sm">
                <span>⭐ 10+ YEARS • 100+ COMPLETED SITES</span>
              </div>
            </div>

            {/* Hero Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white font-['Montserrat'] uppercase leading-[1.08] mb-5">
              BUILDING THE FUTURE <br />
              <span className="gold-metallic-text">
                WITH TRUST &amp; QUALITY
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-2xl font-bold text-gray-200 tracking-wide mb-4 font-['Montserrat']">
              Professional Construction Contracting &amp; Skilled Manpower Supply Solutions Across Bangladesh.
            </p>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-normal max-w-3xl mb-8">
              From complete building construction contracts to reliable skilled trade workforce supply,{' '}
              <strong className="text-white font-semibold">{COMPANY_INFO.name}</strong> delivers dependable engineering,
              transparent management, and quality workmanship for residential, commercial and industrial projects.
            </p>

            {/* CTA Buttons Row with 3D Depth */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
              {/* Primary Button */}
              <button
                onClick={onHireConstructionClick}
                id="hero-btn-hire-construction"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#b8860b] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_12px_28px_-5px_rgba(212,175,55,0.45)] hover:shadow-[0_16px_35px_-5px_rgba(212,175,55,0.65)] hover:brightness-110 active:scale-[0.98] transition-all duration-200 cursor-pointer text-center font-['Montserrat']"
              >
                <span>HIRE US FOR CONSTRUCTION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary Button */}
              <button
                onClick={onRequestManpowerClick}
                id="hero-btn-request-manpower"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#141722] text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-[#d4af37]/45 hover:bg-[#1f2433] hover:border-[#d4af37] active:scale-[0.98] transition-all duration-200 cursor-pointer text-center shadow-lg font-['Montserrat']"
              >
                <HardHat className="w-4 h-4 text-[#d4af37]" />
                <span>REQUEST MANPOWER</span>
              </button>

              {/* Third Button: Explore Projects */}
              <a
                href="#projects"
                onClick={(e) => {
                  if (onExploreProjectsClick) {
                    e.preventDefault();
                    onExploreProjectsClick();
                  }
                }}
                id="hero-btn-explore-projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-[#1a1d28] text-[#fce089] font-bold text-xs sm:text-sm tracking-wider uppercase border border-[#d4af37]/50 hover:bg-[#d4af37] hover:text-black active:scale-[0.98] transition-all duration-200 shadow-md text-center font-['Montserrat']"
              >
                <Building2 className="w-4 h-4" />
                <span>EXPLORE PROJECTS</span>
              </a>

              {/* Fourth Button: WhatsApp Direct */}
              <a
                href={COMPANY_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-btn-chat-whatsapp"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-[#122e1b] text-[#4ade80] font-bold text-xs sm:text-sm tracking-wider uppercase border border-[#22c55e]/50 hover:bg-[#183e25] hover:border-[#4ade80] active:scale-[0.98] transition-all duration-200 shadow-md text-center font-['Montserrat']"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP</span>
              </a>
            </div>

            {/* Quick Confidence Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span className="text-xs text-gray-300 font-medium">Naogaon &amp; Nationwide</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span className="text-xs text-gray-300 font-medium">500+ Vetted Tradesmen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span className="text-xs text-gray-300 font-medium">Direct Site Supervision</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span className="text-xs text-gray-300 font-medium">100% Quality Assurance</span>
              </div>
            </div>
          </div>

          {/* Hero Right Column: 3D Interactive Executive Emblem with Official Logo */}
          <div className="lg:col-span-4 flex justify-center items-center mt-8 lg:mt-0">
            <Tilt3D maxTilt={10} scale={1.03} className="w-full max-w-sm">
              <div className="relative w-full rounded-3xl bg-gradient-to-br from-[#1c202d]/95 via-[#131620]/95 to-[#090b10]/95 border-2 border-[#d4af37]/50 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.18)] backdrop-blur-xl p-6 sm:p-7 text-center group transition-all duration-300 hover:border-[#d4af37] overflow-hidden">
                {/* Top gold accent line */}
                <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-[#fce089] to-transparent"></div>

                {/* Company Official Logo Centerpiece with 3D Bevel */}
                <div className="relative mx-auto rounded-3xl p-3 bg-gradient-to-b from-[#d4af37] via-[#aa7c11] to-[#12141c] shadow-2xl max-w-[180px] sm:max-w-[200px] overflow-hidden mb-5 group-hover:scale-[1.03] transition-transform duration-300">
                  <div className="w-full aspect-square rounded-2xl bg-[#090b10] p-4 flex flex-col items-center justify-center border border-[#d4af37]/40 shadow-inner relative">
                    <Logo variant="compact" size={110} />
                    
                    {/* Floating 3D Verified Badge */}
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#08090d]/95 border border-[#d4af37] flex items-center gap-1 shadow-xl backdrop-blur-md">
                      <CheckCircle2 className="w-3 h-3 text-[#d4af37]" />
                      <span className="text-[9px] font-black text-[#fce089] uppercase tracking-wider font-mono">ESTD 2016</span>
                    </div>
                  </div>
                </div>

                {/* Proprietor Name & Credentials */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/35 text-[#fce089] text-[10px] font-black tracking-widest uppercase mb-2">
                    <UserCheck className="w-3 h-3 text-[#d4af37]" />
                    <span>FOUNDER &amp; PROPRIETOR</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-white font-['Montserrat'] tracking-wide">
                    MD. SOHANUR ROHOMAN SOHAN
                  </h3>
                  <p className="text-xs text-[#d4af37] font-semibold mt-1 uppercase tracking-wider">
                    SOHANUR CONSTRUCTION &amp; MANPOWER SOLUTION
                  </p>

                  <div className="mt-3 py-2 px-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-around text-center">
                    <div>
                      <div className="text-xs font-black text-[#fce089] font-mono">10+</div>
                      <div className="text-[9px] text-gray-400 uppercase">Years Exp</div>
                    </div>
                    <div className="w-px h-6 bg-white/10"></div>
                    <div>
                      <div className="text-xs font-black text-[#fce089] font-mono">100+</div>
                      <div className="text-[9px] text-gray-400 uppercase">Projects</div>
                    </div>
                    <div className="w-px h-6 bg-white/10"></div>
                    <div>
                      <div className="text-xs font-black text-[#fce089] font-mono">250+</div>
                      <div className="text-[9px] text-gray-400 uppercase">Workers</div>
                    </div>
                  </div>

                  {/* Verification Status */}
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-center gap-1.5 text-[11px] text-[#fce089] font-semibold">
                    <Shield className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Government Registered Contractor</span>
                  </div>

                  {/* Direct Contact Button */}
                  <div className="mt-4 flex gap-2">
                    <a
                      href={`tel:${COMPANY_INFO.phones[0].raw}`}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#b8860b] text-black font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md hover:brightness-105 transition-all"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>কল করুন</span>
                    </a>
                    <a
                      href={COMPANY_INFO.whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-[#14301d] text-[#4ade80] border border-[#22c55e]/50 font-bold text-xs flex items-center justify-center gap-1 shadow-md hover:bg-[#1a4228] transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>হোয়াটসঅ্যাপ</span>
                    </a>
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
