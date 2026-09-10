import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, MessageSquare, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

interface CallToActionProps {
  onContactClick: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onContactClick }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0e1017] via-[#141722] to-[#0e1017] border-t border-b border-[#d4af37]/30 relative overflow-hidden">
      {/* Background Gold Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#d4af37]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#fce089] text-xs font-bold tracking-widest uppercase mb-6">
          <ShieldCheck className="w-4 h-4" />
          <span>PROMPT &amp; DEPENDABLE RESPONSE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-['Montserrat'] leading-tight mb-4">
          HAVE A CONSTRUCTION PROJECT? <br />
          <span className="gold-gradient-text">OR NEED RELIABLE MANPOWER?</span>
        </h2>

        <p className="text-base sm:text-xl text-gray-300 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Tell us what you need. No forms required — contact us directly via phone, WhatsApp, or email.
        </p>

        {/* Direct Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          {/* Call Directly */}
          <a
            href={`tel:${COMPANY_INFO.phones[0].raw}`}
            id="cta-call-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#b8860b] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>CALL: {COMPANY_INFO.phones[0].display}</span>
          </a>

          {/* WhatsApp Us */}
          <a
            href={COMPANY_INFO.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp-btn"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#14301d] text-[#4ade80] font-bold text-xs sm:text-sm tracking-wider uppercase border border-[#22c55e]/50 hover:bg-[#1a4427] hover:border-[#4ade80] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>CHAT ON WHATSAPP</span>
          </a>

          {/* Email Us */}
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            id="cta-email-btn"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#1a1d26] text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-[#d4af37]/50 hover:bg-[#252a37] hover:border-[#d4af37] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
          >
            <Mail className="w-4 h-4 text-[#d4af37]" />
            <span>EMAIL DIRECTLY</span>
          </a>

          {/* View Contact Info */}
          <button
            onClick={onContactClick}
            id="cta-view-contact-btn"
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 text-xs sm:text-sm font-bold tracking-wider uppercase border border-white/10 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>CONTACT DETAILS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
