import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/companyData';
import { Send, MessageSquareText, FileSpreadsheet, PlayCircle, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Send className="w-6 h-6 text-[#fce089]" />;
      case 1:
        return <MessageSquareText className="w-6 h-6 text-[#fce089]" />;
      case 2:
        return <FileSpreadsheet className="w-6 h-6 text-[#fce089]" />;
      case 3:
        return <PlayCircle className="w-6 h-6 text-[#fce089]" />;
      default:
        return <Send className="w-6 h-6 text-[#fce089]" />;
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-[#0e1017] border-t border-b border-[#d4af37]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase bg-[#d4af37]/10 px-3.5 py-1 rounded-full border border-[#d4af37]/30 inline-block mb-3">
            CLEAR &amp; TRANSPARENT WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight font-['Montserrat'] mb-4">
            HOW IT WORKS
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-normal">
            A straightforward, responsible 4-step process to deploy construction expertise and skilled labor.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fce089] to-[#aa7c11] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4-Step Process Grid with Connecting Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={step.step}
              id={`step-${step.step}`}
              className="group relative bg-[#13151e] rounded-2xl border border-white/10 p-6 flex flex-col justify-between hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.12)]"
            >
              {/* Step Number Watermark */}
              <div className="absolute top-4 right-4 text-4xl font-black font-['Montserrat'] text-white/5 group-hover:text-[#d4af37]/20 transition-colors">
                {step.step}
              </div>

              <div>
                {/* Step Icon Header */}
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getStepIcon(index)}
                </div>

                <div className="text-xs font-bold text-[#d4af37] tracking-widest uppercase mb-1">
                  STEP {step.step}
                </div>

                <h3 className="text-lg font-extrabold text-white font-['Montserrat'] uppercase tracking-tight mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                <span>Phase {index + 1} of 4</span>
                <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
