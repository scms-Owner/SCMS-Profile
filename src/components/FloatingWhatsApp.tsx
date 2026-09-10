import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MessageSquare, X, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const encodedDefaultMsg = encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage);
  const mainUrl = `https://wa.me/message/Y2CJQ7HLS7STE1?text=${encodedDefaultMsg}`;

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = userMsg.trim()
      ? `Hello SOHANUR CONSTRUCTION & MANPOWER SOLUTION,\n\n${userMsg}\n\nPlease contact me.`
      : COMPANY_INFO.defaultWhatsAppMessage;
    const url = `https://wa.me/message/Y2CJQ7HLS7STE1?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank');
    setIsOpen(false);
    setUserMsg('');
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-2xl bg-[#12141c] border border-[#22c55e]/50 shadow-2xl p-4 text-left animate-fadeIn">
          {/* Card Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#14301d] border border-[#22c55e]/50 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-[#4ade80]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white font-['Montserrat']">
                  SOHANUR CONSTRUCTION
                </h4>
                <span className="text-[10px] text-[#4ade80] flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-ping"></span>
                  Online • WhatsApp Direct
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/10"
              aria-label="Close WhatsApp card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed mb-3">
            Hello! Have a project enquiry or need workers? Message MD. Sohanur Rohoman Sohan directly on WhatsApp.
          </p>

          <form onSubmit={handleCustomSend} className="space-y-2">
            <textarea
              rows={2}
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              placeholder="Type your requirements here (location, work type)..."
              className="w-full px-3 py-2 rounded-lg bg-[#181b24] border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#22c55e] resize-none"
            ></textarea>
            <div className="flex items-center gap-2">
              <button
                type="submit"
                className="flex-1 py-2.5 px-3 rounded-lg bg-[#22c55e] hover:bg-[#16a34a] text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>OPEN CHAT</span>
                <Send className="w-3.5 h-3.5" />
              </button>
              <a
                href={mainUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-lg bg-[#181b24] text-gray-300 hover:text-white text-xs font-semibold border border-white/10"
              >
                Default
              </a>
            </div>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="floating-whatsapp-trigger"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center gap-2.5 pl-3.5 pr-4 py-3 rounded-full bg-gradient-to-r from-[#16a34a] to-[#22c55e] text-white shadow-[0_4px_25px_rgba(34,197,94,0.45)] hover:shadow-[0_6px_30px_rgba(34,197,94,0.65)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#fce089] ring-2 ring-[#0c0d10]"></span>
        </div>
        <span className="text-xs font-extrabold tracking-wider uppercase font-['Montserrat'] hidden sm:inline">
          CHAT ON WHATSAPP
        </span>
      </button>
    </div>
  );
};
