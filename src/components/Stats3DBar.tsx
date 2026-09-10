import React from 'react';
import { Award, Users, Building2, Clock, ShieldCheck } from 'lucide-react';
import { Tilt3D } from './Tilt3D';

export const Stats3DBar: React.FC = () => {
  const stats = [
    {
      value: '10+',
      label: 'YEARS EXPERIENCE',
      sublabel: 'Serving Industry Since 2016',
      icon: Award,
      badge: 'ESTD 2016'
    },
    {
      value: '500+',
      label: 'VETTED WORKFORCE',
      sublabel: 'Rod Mistri, Mason & Welders',
      icon: Users,
      badge: 'SKILLED CREW'
    },
    {
      value: '100+',
      label: 'COMPLETED PROJECTS',
      sublabel: 'Residential, Commercial & Civil',
      icon: Building2,
      badge: '100% QUALITY'
    },
    {
      value: '24/7',
      label: 'RAPID MOBILIZATION',
      sublabel: 'On-Demand Site Support',
      icon: Clock,
      badge: 'BANGLADESH'
    }
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Tilt3D key={idx} maxTilt={9} scale={1.03}>
              <div className="relative rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#191d29] via-[#12141c] to-[#0d0e14] border border-[#d4af37]/35 shadow-[0_15px_35px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.15)] group overflow-hidden">
                {/* 3D Top Beveled Light Strip */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fce089] to-transparent opacity-75 group-hover:opacity-100 transition-opacity"></div>
                
                {/* 3D Background Watermark Icon */}
                <div className="absolute -right-3 -bottom-3 text-white/[0.03] group-hover:text-[#d4af37]/[0.08] transition-colors pointer-events-none">
                  <Icon className="w-24 h-24 stroke-[1]" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37]/25 to-[#aa7c11]/10 border border-[#d4af37]/50 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-[#fce089]" />
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black tracking-widest uppercase bg-[#0b0c10]/80 border border-[#d4af37]/40 text-[#fce089] shadow-inner font-mono">
                      {stat.badge}
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-black font-['Montserrat'] tracking-tight gold-metallic-text mb-1">
                    {stat.value}
                  </div>

                  <div className="text-xs sm:text-sm font-extrabold text-white tracking-wider font-['Montserrat'] uppercase">
                    {stat.label}
                  </div>

                  <div className="text-[11px] text-gray-400 font-medium mt-1">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            </Tilt3D>
          );
        })}
      </div>
    </section>
  );
};
