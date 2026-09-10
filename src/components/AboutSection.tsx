import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { CompanyLogoSeal } from './CompanyLogoSeal';
import { Tilt3D } from './Tilt3D';
import {
  Target,
  Compass,
  Award,
  ShieldCheck,
  UserCheck,
  Building,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Briefcase
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0e1017] border-t border-b border-[#d4af37]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase bg-[#d4af37]/10 px-3.5 py-1 rounded-full border border-[#d4af37]/30 inline-block mb-3">
            ABOUT OUR COMPANY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight font-['Montserrat'] mb-3">
            BUILDING TRUST. <br />
            <span className="gold-gradient-text">DELIVERING QUALITY.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-normal">
            Rooted in technical precision, ethical business conduct, and dedicated manpower leadership.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fce089] to-[#aa7c11] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="bg-[#12141c] rounded-2xl border border-[#d4af37]/30 p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-bl-full pointer-events-none"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-[#fce089]" />
              </div>
              <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase">OUR MISSION</span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight font-['Montserrat'] mt-1 mb-4">
                Mission Statement
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Our mission is to provide reliable construction services and dependable manpower solutions while maintaining professionalism, quality workmanship and responsible project support.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#fce089] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              <span>Dedicated to safety, precision, and verified timelines</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-[#12141c] rounded-2xl border border-white/10 p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-5">
                <Compass className="w-6 h-6 text-[#d4af37]" />
              </div>
              <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase">OUR VISION</span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight font-['Montserrat'] mt-1 mb-4">
                Long-Term Vision
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                To become a trusted construction and manpower solutions partner for clients and construction projects across Bangladesh.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#fce089] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              <span>Expanding workforce networks with institutional reliability</span>
            </div>
          </div>
        </div>

        {/* Commitment, Services & Workforce Pillars with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Tilt3D maxTilt={8} scale={1.02}>
            <div className="h-full bg-gradient-to-b from-[#191c28] to-[#10121a] rounded-2xl border border-[#d4af37]/30 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] group hover:border-[#d4af37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-[#fce089]" />
              </div>
              <h4 className="text-lg font-black text-white font-['Montserrat'] mb-2">Our Commitment</h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                We stand behind every casting, structural rebar connection, and worker deployment. Direct proprietor oversight ensures questions are answered and project pace never slackens.
              </p>
            </div>
          </Tilt3D>

          <Tilt3D maxTilt={8} scale={1.02}>
            <div className="h-full bg-gradient-to-b from-[#191c28] to-[#10121a] rounded-2xl border border-[#d4af37]/30 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] group hover:border-[#d4af37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Building className="w-6 h-6 text-[#fce089]" />
              </div>
              <h4 className="text-lg font-black text-white font-['Montserrat'] mb-2">Our Services</h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                From full turnkey structural civil packages to customized square-foot subcontracts, our civil works adhere strictly to architectural blueprints and structural safety standards.
              </p>
            </div>
          </Tilt3D>

          <Tilt3D maxTilt={8} scale={1.02}>
            <div className="h-full bg-gradient-to-b from-[#191c28] to-[#10121a] rounded-2xl border border-[#d4af37]/30 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] group hover:border-[#d4af37] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <UserCheck className="w-6 h-6 text-[#fce089]" />
              </div>
              <h4 className="text-lg font-black text-white font-['Montserrat'] mb-2">Our Workforce</h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Carefully vetted craftsmen with verified trade experience. We supervise on-site conduct, enforce PPE discipline, and manage attendance so engineers can focus on construction.
              </p>
            </div>
          </Tilt3D>
        </div>

        {/* Executive Proprietor Business Showcase Section */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-[#181b24] via-[#12141c] to-[#0c0d12] border-2 border-[#d4af37]/40 p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.8)] relative overflow-hidden">
            {/* Top gold line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#aa7c11]"></div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Executive Seal / Official Emblem */}
              <div className="w-32 sm:w-44 rounded-2xl bg-gradient-to-b from-[#d4af37] via-[#aa7c11] to-[#12141c] p-2 shadow-2xl flex-shrink-0 text-center relative group">
                <div className="w-full aspect-square rounded-xl bg-[#0b0d13] p-4 flex flex-col items-center justify-center border border-[#d4af37]/40 shadow-inner">
                  <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/50 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <UserCheck className="w-9 h-9 text-[#fce089]" />
                  </div>
                  <CompanyLogoSeal size={28} theme="gold" />
                </div>
                <span className="text-[10px] font-black text-[#d4af37] uppercase tracking-wider mt-2 block">
                  PROPRIETOR
                </span>
                <span className="text-[10px] text-gray-300 block font-mono">
                  ESTD 2016
                </span>
              </div>

              {/* Executive Details */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f3d068] text-xs font-bold tracking-widest uppercase mb-2">
                  <span>EXECUTIVE LEADERSHIP • ESTD 2016</span>
                </div>

                <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">
                  PROPRIETOR
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white font-['Montserrat'] tracking-wide">
                  {COMPANY_INFO.proprietor}
                </h3>

                <p className="text-sm font-bold text-[#d4af37] tracking-wider uppercase font-['Montserrat'] mt-1 mb-3">
                  {COMPANY_INFO.name}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  "Since our inception in 2016, our mission has been simple yet powerful — to build trust and deliver quality through every project we undertake. We believe that every structure we build is more than just concrete and steel — it is a commitment to quality, safety and long-term relationships."
                </p>

                {/* Signature & Corporate Profile CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-t border-b border-white/10 mb-4">
                  <div>
                    <span className="text-xs text-gray-400 block">Sincerely,</span>
                    <span className="text-xl font-serif italic text-[#fce089] font-bold">
                      Sohan...
                    </span>
                  </div>

                  <a
                    href={`tel:${COMPANY_INFO.phones[0].raw}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#aa7c11] text-black text-xs font-black uppercase tracking-wider shadow-md hover:brightness-110 transition-all cursor-pointer font-['Montserrat']"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>সরাসরি কথা বলুন</span>
                  </a>
                </div>

                {/* Direct Contact Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <a
                    href={`tel:${COMPANY_INFO.phones[0].raw}`}
                    className="flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-[#fce089] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#d4af37]" />
                    <span>{COMPANY_INFO.phones[0].display}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-[#fce089] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#d4af37]" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 sm:col-span-2">
                    <MapPin className="w-4 h-4 text-[#d4af37]" />
                    <span>{COMPANY_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
