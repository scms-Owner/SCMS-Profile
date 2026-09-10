import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Tilt3D } from './Tilt3D';
import {
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  UserCheck,
  ShieldCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#fce089] text-xs font-bold tracking-widest uppercase mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>DIRECT COMMUNICATION • NO FORMS REQUIRED</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight font-['Montserrat'] mb-4">
            LET'S WORK TOGETHER
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-normal">
            আমাদের সাথে সরাসরি যোগাযোগ করুন। কনস্ট্রাকশন চুক্তি, রড বাইন্ডিং, শাটারিং বা দক্ষ শ্রমিক সরবরাহের জন্য সরাসরি ফোন, হোয়াটসঅ্যাপ বা ইমেইল করুন।
          </p>

          {/* Reassuring No-Form Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full bg-[#181b24] border border-[#d4af37]/40 text-[#fce089] text-xs font-bold shadow-md">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span>কোন ফর্মের প্রয়োজন নেই — সরাসরি কল, হোয়াটসঅ্যাপ অথবা ইমেইল করুন</span>
          </div>

          <div className="w-20 h-1 bg-gradient-to-r from-[#fce089] to-[#aa7c11] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Three Large Direct Contact Cards: Phone, WhatsApp, Email with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: CALL US */}
          <Tilt3D maxTilt={7} scale={1.02} className="h-full">
            <div
              id="contact-card-call"
              className="group bg-gradient-to-b from-[#181c28] to-[#0f1118] rounded-2xl border border-[#d4af37]/35 hover:border-[#d4af37] p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_45px_rgba(212,175,55,0.2)] relative overflow-hidden h-full"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fce089]/60 to-transparent group-hover:via-[#fce089] transition-all"></div>

              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <Phone className="w-7 h-7 text-[#fce089]" />
                </div>

                <span className="text-xs font-black text-[#d4af37] tracking-widest uppercase font-['Montserrat']">
                  DIRECT VOICE LINE
                </span>

                <h3 className="text-2xl font-black text-white font-['Montserrat'] uppercase mt-1 mb-3">
                  ফোন করুন
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  প্রজেক্ট রিকোয়ারমেন্ট, সাইট ভিজিট এবং দ্রুত জনবল সরবরাহের জন্য সরাসরি প্রোপাইটরের সাথে কথা বলুন।
                </p>

                <div className="space-y-3 mb-8">
                  {COMPANY_INFO.phones.map((p, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-[#12151e] border border-white/10 shadow-inner">
                      <div>
                        <span className="text-[11px] text-[#fce089] font-black block font-['Montserrat']">
                          {idx === 0 ? 'হটলাইন ১ (ম্যানেজমেন্ট)' : 'হটলাইন ২ (সাপোর্ট)'}
                        </span>
                        <a
                          href={`tel:${p.raw}`}
                          className="text-base sm:text-lg font-black text-white hover:text-[#fce089] transition-colors"
                        >
                          {p.display}
                        </a>
                      </div>
                      <a
                        href={`tel:${p.raw}`}
                        className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#b8860b] text-black text-xs font-black hover:brightness-110 shadow-sm font-['Montserrat']"
                      >
                        কল করুন
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`tel:${COMPANY_INFO.phones[0].raw}`}
                className="w-full py-3.5 px-4 rounded-xl bg-[#1d212f] text-white hover:bg-[#d4af37] hover:text-black font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 border border-white/10 hover:border-transparent transition-all shadow-md font-['Montserrat']"
              >
                <span>CALL DIRECT NOW</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Tilt3D>

          {/* Card 2: WHATSAPP US */}
          <Tilt3D maxTilt={7} scale={1.02} className="h-full">
            <div
              id="contact-card-whatsapp"
              className="group bg-gradient-to-b from-[#181c28] to-[#0f1118] rounded-2xl border border-[#22c55e]/35 hover:border-[#22c55e] p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_45px_rgba(34,197,94,0.2)] relative overflow-hidden h-full"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#22c55e]/60 to-transparent group-hover:via-[#22c55e] transition-all"></div>

              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#22c55e]/15 border border-[#22c55e]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <MessageSquare className="w-7 h-7 text-[#4ade80]" />
                </div>

                <span className="text-xs font-black text-[#4ade80] tracking-widest uppercase font-['Montserrat']">
                  INSTANT MESSAGING
                </span>

                <h3 className="text-2xl font-black text-white font-['Montserrat'] uppercase mt-1 mb-3">
                  WHATSAPP করুন
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  সাইটের ছবি, ড্রয়িং বা লোকেশন পাঠাতে এবং তাৎক্ষণিক মেসেজে কথা বলতে হোয়াটসঅ্যাপে চ্যাট করুন।
                </p>

                <div className="mb-8 p-3.5 rounded-xl bg-[#102717] border border-[#22c55e]/40 shadow-inner">
                  <span className="text-xs font-black text-[#4ade80] block mb-1 font-['Montserrat']">
                    অফিসিয়াল হোয়াটসঅ্যাপ হটলাইন
                  </span>
                  <span className="text-base sm:text-lg font-black text-white block">
                    {COMPANY_INFO.phones[0].display}
                  </span>
                  <span className="text-[11px] text-gray-300 mt-1 block">
                    তাৎক্ষণিক রেসপন্স ও ২৪/৭ জরুরি যোগাযোগ
                  </span>
                </div>
              </div>

              <a
                href={COMPANY_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#102717] text-[#4ade80] hover:bg-[#22c55e] hover:text-black font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 border border-[#22c55e]/40 hover:border-transparent transition-all shadow-md font-['Montserrat']"
              >
                <span>CHAT ON WHATSAPP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Tilt3D>

          {/* Card 3: EMAIL US */}
          <Tilt3D maxTilt={7} scale={1.02} className="h-full">
            <div
              id="contact-card-email"
              className="group bg-gradient-to-b from-[#181c28] to-[#0f1118] rounded-2xl border border-[#d4af37]/35 hover:border-[#d4af37] p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_45px_rgba(212,175,55,0.2)] relative overflow-hidden h-full"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fce089]/60 to-transparent group-hover:via-[#fce089] transition-all"></div>

              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <Mail className="w-7 h-7 text-[#fce089]" />
                </div>

                <span className="text-xs font-black text-[#d4af37] tracking-widest uppercase font-['Montserrat']">
                  OFFICIAL INBOX
                </span>

                <h3 className="text-2xl font-black text-white font-['Montserrat'] uppercase mt-1 mb-3">
                  ইমেইল পাঠান
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  প্রজেক্ট ড্রয়িং, BOQ, টেন্ডার পেপার বা অফিশিয়াল কাজের বিস্তারিত জানাতে সরাসরি আমাদের মেইল করুন।
                </p>

                <div className="mb-8 p-3.5 rounded-xl bg-[#12151e] border border-white/10 shadow-inner">
                  <span className="text-[11px] text-[#fce089] font-bold block mb-1 font-['Montserrat']">অফিসিয়াল ইমেইল এড্রেস:</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm sm:text-base font-black text-white hover:text-[#fce089] transition-colors break-all block"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-full py-3.5 px-4 rounded-xl bg-[#1d212f] text-white hover:bg-[#d4af37] hover:text-black font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 border border-white/10 hover:border-transparent transition-all shadow-md font-['Montserrat']"
              >
                <span>SEND EMAIL DIRECTLY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Tilt3D>
        </div>

        {/* Company Details & Verified Office Card */}
        <div className="rounded-3xl bg-[#12141c] border border-[#d4af37]/30 p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Official Registration & Office Info */}
            <div>
              <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase">
                HEAD OFFICE &amp; OPERATIONS
              </span>
              <h3 className="text-2xl font-black text-white font-['Montserrat'] uppercase mt-1 mb-2">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-sm font-bold text-[#fce089] mb-4">
                {COMPANY_INFO.tagline}
              </p>

              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 text-xs block">Proprietor:</span>
                    <strong className="text-white text-base">{COMPANY_INFO.proprietor}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 text-xs block">Location:</span>
                    <span className="text-gray-200">{COMPANY_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 text-xs block">Business Hours:</span>
                    <span className="text-gray-200">{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bangladesh Regional Coverage Note */}
            <div className="bg-[#171a24] rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
                <h4 className="text-base font-bold text-white font-['Montserrat']">
                  Nationwide Project Mobilization
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                Headquartered in Naogaon Sadar, we provide civil contracting and manpower mobilization across Rajshahi Division, Bogra, Natore, Joypurhat, and major infrastructure and industrial zones nationwide.
              </p>
              <div className="p-3 rounded-xl bg-[#0f1118] border border-[#d4af37]/20 flex items-center justify-between text-xs text-[#fce089] font-medium">
                <span>Direct Proprietor Hotline:</span>
                <span className="font-bold">{COMPANY_INFO.phones[0].display}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
