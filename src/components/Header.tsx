import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { MessageSquare, Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onNavigateSection: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigateSection,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about-intro', label: 'ABOUT US' },
    { id: 'services', label: 'SERVICES' },
    { id: 'contracting', label: 'CONTRACTING' },
    { id: 'manpower', label: 'MANPOWER' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'why-us', label: 'WHY US' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(id);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0c10]/95 backdrop-blur-md py-3 shadow-[0_4px_25px_rgba(0,0,0,0.8)] border-b border-[#d4af37]/20'
          : 'bg-gradient-to-b from-[#0a0c10]/90 via-[#0a0c10]/60 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className="group focus:outline-none"
            id="header-logo-link"
          >
            <Logo variant="full" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2" id="desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 text-xs font-bold tracking-wider transition-all duration-200 uppercase rounded-md cursor-pointer ${
                    isActive
                      ? 'text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/30 shadow-[0_0_10px_rgba(212,175,55,0.15)]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* WhatsApp Quick Button */}
            <a
              href={COMPANY_INFO.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#14301d] text-[#4ade80] border border-[#22c55e]/40 hover:bg-[#1a4427] hover:border-[#4ade80] transition-all duration-200 text-xs font-bold tracking-wider shadow-sm"
              title="Chat with MD. Sohanur Rohoman Sohan on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WHATSAPP</span>
            </a>

            {/* Contact Us Primary Button */}
            <button
              onClick={() => onNavigateSection('contact')}
              id="header-contact-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#b8860b] text-black font-extrabold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-105 transition-all duration-200 cursor-pointer active:scale-95"
            >
              <span>CONTACT US</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => onNavigateSection('contact')}
              className="sm:hidden px-2.5 py-1.5 rounded-md bg-[#d4af37] text-black text-[11px] font-bold tracking-wider uppercase"
              id="header-mobile-contact-btn"
            >
              CONTACT
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg bg-[#161820] text-gray-200 border border-white/10 hover:border-[#d4af37]/50 hover:text-[#d4af37] focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="xl:hidden bg-[#0c0e14]/98 border-b border-[#d4af37]/30 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl transition-all"
        >
          <div className="flex flex-col space-y-1.5 max-h-[70vh] overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-bold tracking-wider transition-colors uppercase flex items-center justify-between ${
                    isActive
                      ? 'text-[#d4af37] bg-[#d4af37]/15 border-l-4 border-[#d4af37]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>}
                </button>
              );
            })}

            {/* Mobile Contact Quick Actions */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2">
              <a
                href={COMPANY_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-drawer-whatsapp"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#14301d] text-[#4ade80] border border-[#22c55e]/40 font-bold text-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phones[0].raw}`}
                id="mobile-drawer-call"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#1a202c] text-white border border-white/20 font-bold text-xs"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>CALL DIRECT</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateSection('contact');
              }}
              id="mobile-drawer-contact-submit"
              className="w-full mt-2 py-3.5 rounded-lg bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#b8860b] text-black font-extrabold text-sm tracking-wider uppercase shadow-lg text-center cursor-pointer"
            >
              CONTACT US (PHONE / WHATSAPP / EMAIL)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
