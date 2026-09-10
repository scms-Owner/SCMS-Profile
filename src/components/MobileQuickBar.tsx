import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, MessageSquare, Mail } from 'lucide-react';

interface MobileQuickBarProps {
  onContactClick?: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = () => {
  return (
    <div
      id="mobile-bottom-quick-bar"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0a0c10]/95 backdrop-blur-lg border-t border-[#d4af37]/30 p-2 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phones[0].raw}`}
          id="mobile-quick-call"
          className="min-h-[44px] flex flex-col items-center justify-center rounded-xl bg-[#141720] text-gray-200 border border-white/10 active:bg-white/10 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#fce089]" />
          <span className="text-[10px] font-bold tracking-wider mt-0.5 uppercase">CALL</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={COMPANY_INFO.whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-quick-whatsapp"
          className="min-h-[44px] flex flex-col items-center justify-center rounded-xl bg-[#14301d] text-[#4ade80] border border-[#22c55e]/40 active:brightness-95 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-[10px] font-bold tracking-wider mt-0.5 uppercase">WHATSAPP</span>
        </a>

        {/* Email Button */}
        <a
          href={`mailto:${COMPANY_INFO.email}`}
          id="mobile-quick-email"
          className="min-h-[44px] flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#b8860b] text-black font-extrabold active:brightness-95 transition-all shadow-md"
        >
          <Mail className="w-4 h-4" />
          <span className="text-[10px] font-black tracking-wider mt-0.5 uppercase">EMAIL</span>
        </a>
      </div>
    </div>
  );
};
