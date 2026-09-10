import React, { useState } from 'react';
import { WORKER_CATEGORIES } from '../data/companyData';
import { WorkerCategory } from '../types';
import { Tilt3D } from './Tilt3D';
import {
  Layers,
  Hammer,
  ShieldCheck,
  Wrench,
  Flame,
  Shield,
  Zap,
  UserCheck,
  ClipboardCheck,
  HardHat,
  ArrowRight,
  Filter,
  CheckCircle
} from 'lucide-react';

interface ManpowerSectionProps {
  onRequestWorkforce: (workerCategoryName: string) => void;
}

export const ManpowerSection: React.FC<ManpowerSectionProps> = ({ onRequestWorkforce }) => {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('ALL');

  const getWorkerIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#fce089]" />;
      case 'Hammer':
        return <Hammer className="w-5 h-5 text-[#fce089]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#fce089]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#fce089]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#fce089]" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#fce089]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#fce089]" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-[#fce089]" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-5 h-5 text-[#fce089]" />;
      case 'HardHat':
        return <HardHat className="w-5 h-5 text-[#fce089]" />;
      default:
        return <HardHat className="w-5 h-5 text-[#fce089]" />;
    }
  };

  const filters = [
    'ALL',
    'Steel & Rebar',
    'Masonry & Carpentry',
    'Welding Specialists',
    'Supervision & Helpers'
  ];

  const filteredWorkers = WORKER_CATEGORIES.filter((worker) => {
    if (selectedCategoryFilter === 'ALL') return true;
    if (selectedCategoryFilter === 'Steel & Rebar') {
      return ['ROD MISTRI', 'STEEL FIXER'].includes(worker.name);
    }
    if (selectedCategoryFilter === 'Masonry & Carpentry') {
      return ['RAJ MISTRI', 'CARPENTER'].includes(worker.name);
    }
    if (selectedCategoryFilter === 'Welding Specialists') {
      return ['MIG WELDER', '6G WELDER', 'GENERAL WELDER'].includes(worker.name);
    }
    if (selectedCategoryFilter === 'Supervision & Helpers') {
      return ['FOREMAN', 'SITE SUPERVISOR', 'CONSTRUCTION HELPER'].includes(worker.name);
    }
    return true;
  });

  return (
    <section id="manpower" className="py-24 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#fce089] text-xs font-bold tracking-widest uppercase mb-3">
            <HardHat className="w-3.5 h-3.5" />
            <span>WORKFORCE MOBILIZATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight font-['Montserrat'] mb-4">
            SKILLED MANPOWER <br className="hidden sm:inline" />
            <span className="gold-gradient-text">WHEN YOU NEED IT.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto">
            We supply skilled and experienced construction manpower according to project requirements and workforce demand across Bangladesh.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#fce089] to-[#aa7c11] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedCategoryFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                selectedCategoryFilter === filter
                  ? 'bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#b8860b] text-black shadow-md'
                  : 'bg-[#14161f] text-gray-300 border border-white/10 hover:border-[#d4af37]/40 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Worker Categories Grid - 10 Trades with 3D Depth */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {filteredWorkers.map((worker) => (
            <Tilt3D key={worker.id} maxTilt={7} scale={1.02} className="h-full">
              <div
                id={`worker-card-${worker.id}`}
                className="group bg-gradient-to-b from-[#171a26] to-[#10121a] rounded-2xl border border-[#d4af37]/35 hover:border-[#d4af37] p-5 flex flex-col justify-between transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.7)] hover:shadow-[0_18px_35px_rgba(212,175,55,0.2)] relative overflow-hidden h-full"
              >
                {/* 3D Top Beveled Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fce089]/60 to-transparent group-hover:via-[#fce089] transition-all"></div>

                <div>
                  {/* 3D Trade Vector Icon Header */}
                  <div className="relative h-32 w-full rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-[#1c202d] via-[#12141c] to-[#0a0c12] p-3 flex flex-col justify-between border border-[#d4af37]/30 group-hover:border-[#d4af37]/70 transition-colors shadow-inner">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-[#08090d]/90 border border-[#d4af37]/50 flex items-center justify-center shadow-md">
                        {getWorkerIcon(worker.iconName)}
                      </div>
                      {worker.bengaliTitle && (
                        <div className="px-2 py-0.5 rounded bg-black/85 text-[10px] font-bold text-[#fce089] border border-[#d4af37]/40 font-mono">
                          {worker.bengaliTitle}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-center my-auto">
                      <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        {getWorkerIcon(worker.iconName)}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[9px] text-gray-400 font-mono">
                      <span className="text-[#4ade80] font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></span>
                        READY
                      </span>
                      <span className="text-[#fce089]/90 font-bold uppercase tracking-wider">
                        TRADE TESTED
                      </span>
                    </div>
                  </div>

                  <div className="text-[10px] font-black text-[#d4af37] uppercase tracking-wider mb-1 font-['Montserrat']">
                    {worker.category}
                  </div>

                  <h3 className="text-base font-black text-white font-['Montserrat'] uppercase mb-2 group-hover:text-[#fce089] transition-colors">
                    {worker.name}
                  </h3>

                  <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-3">
                    {worker.shortDesc}
                  </p>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {worker.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#1d212f] text-gray-300 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Request Workforce Button */}
                <button
                  onClick={() => onRequestWorkforce(worker.name)}
                  id={`btn-request-worker-${worker.id}`}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#1d212f] group-hover:bg-gradient-to-r group-hover:from-[#fce089] group-hover:via-[#d4af37] group-hover:to-[#b8860b] text-gray-200 group-hover:text-black font-black text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 border border-white/10 group-hover:border-transparent transition-all duration-200 cursor-pointer shadow-sm font-['Montserrat']"
                >
                  <span>REQUEST WORKFORCE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Tilt3D>
          ))}
        </div>

        {/* Manpower Dispatch Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-[#141620] border border-[#d4af37]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#22c55e]/15 border border-[#22c55e]/40 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-[#4ade80]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-['Montserrat']">
                Need Multi-Trade Crews or Immediate Mobilization?
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
                We coordinate multi-disciplinary crews with on-site foremen to meet tight concrete casting schedules.
              </p>
            </div>
          </div>
          <button
            onClick={() => onRequestWorkforce('Other / Custom Crew')}
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#b8860b] text-black font-extrabold text-xs tracking-wider uppercase hover:brightness-105 transition-all flex-shrink-0"
          >
            CUSTOM WORKFORCE ENQUIRY
          </button>
        </div>
      </div>
    </section>
  );
};
