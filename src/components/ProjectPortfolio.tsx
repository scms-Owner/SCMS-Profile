import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/companyData';
import { ProjectItem } from '../types';
import { Tilt3D } from './Tilt3D';
import {
  Building2,
  MapPin,
  Tag,
  ArrowRight,
  CheckCircle,
  X,
  Layers,
  Sparkles,
  Award,
  Calendar,
  ShieldCheck,
  HardHat,
  Compass
} from 'lucide-react';

interface ProjectPortfolioProps {
  onEnquireProject: (projectName: string) => void;
}

export const ProjectPortfolio: React.FC<ProjectPortfolioProps> = ({ onEnquireProject }) => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'CONSTRUCTION' | 'MANPOWER' | 'COMPLETED' | 'ONGOING'>('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters: Array<'ALL' | 'CONSTRUCTION' | 'MANPOWER' | 'COMPLETED' | 'ONGOING'> = [
    'ALL',
    'CONSTRUCTION',
    'MANPOWER',
    'COMPLETED',
    'ONGOING'
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'CONSTRUCTION') return proj.category === 'CONSTRUCTION';
    if (activeFilter === 'MANPOWER') return proj.category === 'MANPOWER';
    if (activeFilter === 'COMPLETED') return proj.status === 'COMPLETED';
    if (activeFilter === 'ONGOING') return proj.status === 'ONGOING';
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-[#0e1017] border-t border-b border-[#d4af37]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase bg-[#d4af37]/10 px-3.5 py-1 rounded-full border border-[#d4af37]/30 inline-block mb-3">
            TRACK RECORD &amp; EXECUTION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight font-['Montserrat'] mb-4">
            OUR PROJECTS
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-normal">
            Showcasing representative civil contracting achievements and skilled manpower deployments across Bangladesh.
          </p>

          {/* Verified Track Record Badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181b26] text-gray-200 text-xs border border-[#d4af37]/30 shadow-md">
            <Award className="w-4 h-4 text-[#fce089]" />
            <span className="font-semibold tracking-wide">Standard-Compliant Civil Structural Contracting &amp; Vetted Field Crews</span>
          </div>

          <div className="w-20 h-1 bg-gradient-to-r from-[#fce089] to-[#aa7c11] mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              id={`filter-btn-${filter.toLowerCase()}`}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#b8860b] text-black shadow-md'
                  : 'bg-[#14161f] text-gray-300 border border-white/10 hover:border-[#d4af37]/40 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Tilt3D key={project.id} maxTilt={7} scale={1.02} className="h-full">
              <div
                id={`project-card-${project.id}`}
                className="group bg-gradient-to-b from-[#171a26] to-[#0f1118] rounded-2xl border border-[#d4af37]/35 hover:border-[#d4af37] overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_45px_rgba(212,175,55,0.2)] h-full"
              >
                {/* 3D Top Accent Line */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#fce089]/60 to-transparent group-hover:via-[#fce089] transition-all"></div>

                {/* 3D Architectural Blueprint Banner (Zero external image dependencies) */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#1b202e] via-[#11141d] to-[#0a0c12] p-4 flex flex-col justify-between border-b border-[#d4af37]/25 group-hover:border-[#d4af37]/60 transition-colors">
                  {/* Subtle Grid Lines */}
                  <div
                    className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)`,
                      backgroundSize: '24px 24px'
                    }}
                  ></div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="px-2.5 py-1 rounded bg-black/85 backdrop-blur-md text-[10px] font-black text-[#fce089] border border-[#d4af37]/40 shadow-sm font-mono">
                      {project.category} • {project.projectType}
                    </div>

                    {/* Status Badge */}
                    <span
                      className={`px-2.5 py-0.5 rounded-md text-[10px] font-black tracking-wider uppercase border backdrop-blur-md shadow-md ${
                        project.status === 'COMPLETED'
                          ? 'bg-emerald-950/85 text-emerald-300 border-emerald-500/50'
                          : 'bg-amber-950/85 text-[#fce089] border-[#d4af37]/50'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Central 3D Vector Building Icon */}
                  <div className="relative z-10 flex items-center justify-center my-auto">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-black/70 border-2 border-[#d4af37]/50 flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.7)] group-hover:scale-110 group-hover:border-[#fce089] transition-all duration-300">
                      <Building2 className="w-8 h-8 text-[#fce089]" />
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-gray-400">
                    <span className="flex items-center gap-1 text-[#fce089]/90">
                      <Compass className="w-3 h-3 text-[#d4af37]" />
                      SOHANUR PROFILE
                    </span>
                    <span className="text-gray-400 font-bold">{project.status}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>

                    <h3 className="text-lg font-black text-white font-['Montserrat'] group-hover:text-[#fce089] transition-colors mb-2 line-clamp-1">
                      {project.name}
                    </h3>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.shortDesc}
                    </p>

                    {/* Services Provided Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.servicesProvided.slice(0, 3).map((svc, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded bg-[#1c202d] text-gray-300 border border-white/10"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    id={`btn-view-project-${project.id}`}
                    className="w-full py-3 px-4 rounded-xl bg-[#1c202d] group-hover:bg-gradient-to-r group-hover:from-[#fce089] group-hover:via-[#d4af37] group-hover:to-[#b8860b] text-gray-200 group-hover:text-black font-black text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 border border-white/10 group-hover:border-transparent cursor-pointer shadow-md font-['Montserrat']"
                  >
                    <span>VIEW PROJECT DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </Tilt3D>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-[#12141c] border border-[#d4af37]/60 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#d4af37]/15 text-[#f3d068] border border-[#d4af37]/30 uppercase">
                    {selectedProject.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 uppercase">
                    {selectedProject.status}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-['Montserrat']">
                  {selectedProject.name}
                </h3>
                <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{selectedProject.location}</span>
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto py-5 space-y-6">
              {/* 3D Blueprint Header Banner */}
              <div className="relative h-44 w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#1b202e] via-[#121520] to-[#0a0c12] p-6 flex flex-col justify-between border border-[#d4af37]/40 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-black/85 border border-[#d4af37]/40 text-[#fce089] text-xs font-mono font-bold">
                    {selectedProject.category} • {selectedProject.projectType}
                  </span>
                  <span className="text-[#fce089] font-mono text-xs font-bold">
                    STATUS: {selectedProject.status}
                  </span>
                </div>

                <div className="flex items-center gap-4 my-auto">
                  <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/20 border border-[#d4af37]/60 flex items-center justify-center shadow-lg">
                    <Building2 className="w-7 h-7 text-[#fce089]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white font-['Montserrat']">
                      {selectedProject.name}
                    </h3>
                    <p className="text-xs text-gray-300 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                      {selectedProject.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono pt-2 border-t border-white/10">
                  <span className="text-[#4ade80] font-bold">STATUS: {selectedProject.status}</span>
                  <span className="text-[#d4af37]">SOHANUR VERIFIED SITE</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                  Project Overview &amp; Specifications
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedProject.fullDesc}
                </p>
              </div>

              {/* Services Provided */}
              <div>
                <h4 className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                  Services Provided
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.servicesProvided.map((svc, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300 bg-[#181b24] p-2 rounded-lg border border-white/5">
                      <CheckCircle className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                      <span>{svc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2.5 rounded-lg bg-[#1a1d26] text-gray-300 text-xs font-bold tracking-wider hover:bg-[#252a37] transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const pName = selectedProject.name;
                  setSelectedProject(null);
                  onEnquireProject(pName);
                }}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#fce089] via-[#d4af37] to-[#b8860b] text-black font-extrabold text-xs tracking-wider uppercase hover:brightness-105 transition-all flex items-center gap-1.5"
              >
                <span>Enquire For Similar Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
