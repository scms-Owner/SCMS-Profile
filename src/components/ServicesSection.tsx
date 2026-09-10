import React, { useState } from 'react';
import { CORE_SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';
import { Tilt3D } from './Tilt3D';
import {
  Building2,
  Users,
  Layers,
  Hammer,
  Wrench,
  Flame,
  HardHat,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  X,
  FileText
} from 'lucide-react';

interface ServicesSectionProps {
  onRequestService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onRequestService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#fce089]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#fce089]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#fce089]" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-[#fce089]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#fce089]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#fce089]" />;
      case 'HardHat':
        return <HardHat className="w-6 h-6 text-[#fce089]" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6 text-[#fce089]" />;
      default:
        return <Building2 className="w-6 h-6 text-[#fce089]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase bg-[#d4af37]/10 px-3.5 py-1 rounded-full border border-[#d4af37]/30 inline-block mb-3">
            COMPREHENSIVE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight font-['Montserrat'] mb-4">
            OUR SERVICES
          </h2>
          <p className="text-lg sm:text-xl font-semibold text-gray-300 font-['Montserrat']">
            Professional Construction &amp; Manpower Solutions
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fce089] to-[#aa7c11] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 8 Core Service Cards Grid with 3D Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SERVICES.map((service) => (
            <Tilt3D key={service.id} maxTilt={7} scale={1.02} className="h-full">
              <div
                id={`card-${service.id}`}
                className="group bg-gradient-to-b from-[#161924] to-[#0f1118] rounded-2xl border border-[#d4af37]/35 hover:border-[#d4af37] transition-all duration-300 flex flex-col overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.2)] h-full"
              >
                {/* 3D Top Accent Line */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#fce089]/60 to-transparent group-hover:via-[#fce089] transition-all"></div>

                {/* 3D Modern Icon Banner (Pure Vector Icons & Architectural Styling) */}
                <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-[#191d29] via-[#11131a] to-[#0a0b10] p-4 flex flex-col justify-between border-b border-[#d4af37]/25 group-hover:border-[#d4af37]/60 transition-colors">
                  {/* Subtle Blueprint Grid */}
                  <div
                    className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)`,
                      backgroundSize: '24px 24px'
                    }}
                  ></div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md border border-[#d4af37]/50 text-[10px] font-black tracking-wider text-[#fce089] shadow-md font-mono">
                      {service.number}
                    </div>
                    <div className="px-2 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#fce089] text-[9px] font-black tracking-widest uppercase">
                      PROFESSIONAL
                    </div>
                  </div>

                  {/* Central 3D Vector Icon */}
                  <div className="relative z-10 flex items-center justify-center my-auto">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af37]/25 to-black/70 border-2 border-[#d4af37]/60 flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.7)] group-hover:scale-110 group-hover:border-[#fce089] transition-all duration-300">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-gray-400">
                    <span className="group-hover:text-[#fce089] transition-colors">ESTD 2016</span>
                    <span className="text-[#d4af37]/80 font-bold">SCMS VERIFIED</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black text-white font-['Montserrat'] group-hover:text-[#fce089] transition-colors line-clamp-2 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2 mt-auto">
                    <button
                      onClick={() => setSelectedService(service)}
                      id={`btn-learn-more-${service.id}`}
                      className="py-2.5 px-3 rounded-lg bg-[#1a1e2a] text-gray-200 hover:text-white hover:bg-[#252c3e] text-xs font-bold tracking-wider transition-colors text-center border border-white/10 shadow-sm"
                    >
                      Learn More
                    </button>
                    <button
                      onClick={() => onRequestService(service.title)}
                      id={`btn-request-${service.id}`}
                      className="py-2.5 px-3 rounded-lg bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#b8860b] text-black text-xs font-black tracking-wider uppercase hover:brightness-110 transition-all text-center shadow-md font-['Montserrat']"
                    >
                      Request
                    </button>
                  </div>
                </div>
              </div>
            </Tilt3D>
          ))}
        </div>
      </div>

      {/* Learn More Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#12141c] border border-[#d4af37]/50 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center">
                  {getServiceIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold text-[#d4af37] tracking-wider uppercase">
                    {selectedService.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-['Montserrat']">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto py-5 space-y-5">
              <div className="relative h-32 w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#1b1f2d] via-[#121520] to-[#0a0c12] p-5 flex items-center justify-center border border-[#d4af37]/40 shadow-inner">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/20 border-2 border-[#d4af37]/60 flex items-center justify-center shadow-lg">
                    {getServiceIcon(selectedService.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-[#d4af37] tracking-widest uppercase font-mono">
                      ESTD 2016 • SERVICE #{selectedService.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white font-['Montserrat']">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                  Service Scope &amp; Overview
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                  Key Capabilities &amp; Deliverables
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 rounded-lg bg-[#1c1f28] text-gray-300 text-xs font-bold tracking-wider hover:bg-[#252a37] transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onRequestService(serviceName);
                }}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#b8860b] text-black font-extrabold text-xs tracking-wider uppercase hover:brightness-105 transition-all flex items-center gap-1.5"
              >
                <span>Request This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
