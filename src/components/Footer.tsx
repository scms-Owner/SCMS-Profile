import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'manpower', label: 'Manpower Supply' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const serviceLinks = [
    'Construction Contracting',
    'Manpower Supply',
    'Rod & Steel Fixing',
    'Masonry',
    'Carpentry',
    'Welding',
    'Construction Helpers'
  ];

  return (
    <footer className="bg-[#07080b] border-t border-[#d4af37]/25 text-gray-400 pt-16 pb-12 relative overflow-hidden">
      {/* Top Gold Subtle Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <Logo variant="full" className="mb-4" />

            <p className="text-xs sm:text-sm text-[#fce089] font-bold uppercase tracking-wider mb-4 font-['Montserrat']">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
              Premier construction contractor and skilled workforce partner headquartered in Naogaon Sadar, Bangladesh. Dedicated to structural integrity, safety standards, and reliable workforce mobilization.
            </p>

            <div className="p-3.5 rounded-xl bg-[#101218] border border-white/5 text-xs text-gray-300">
              <span className="text-gray-400 block text-[11px]">Proprietor:</span>
              <strong className="text-white text-sm">{COMPANY_INFO.proprietor}</strong>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-['Montserrat'] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigateSection(link.id)}
                    className="hover:text-[#fce089] transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-['Montserrat'] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {serviceLinks.map((svc, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      onNavigateSection('services');
                    }}
                    className="hover:text-[#fce089] transition-colors cursor-pointer text-left"
                  >
                    {svc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-['Montserrat'] mb-4">
              Contact Us
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {COMPANY_INFO.phones.map((p, idx) => (
                    <a
                      key={idx}
                      href={`tel:${p.raw}`}
                      className="block hover:text-[#fce089] transition-colors"
                    >
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#fce089] transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location}</span>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#14301d] text-[#4ade80] border border-[#22c55e]/40 font-bold text-xs tracking-wider uppercase hover:bg-[#1a4427] transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WHATSAPP DIRECT</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="text-center sm:text-left">
            &copy; 2026 <strong className="text-gray-300">{COMPANY_INFO.name}</strong>. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-gray-500 hidden md:inline">
              Proprietor: {COMPANY_INFO.proprietor}
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#12141c] text-gray-300 hover:text-black hover:bg-[#d4af37] border border-white/10 transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
