import React from 'react';
import { Hero } from './Hero';
import { CompanyIntro } from './CompanyIntro';
import { ServicesSection } from './ServicesSection';
import { ContractingSection } from './ContractingSection';
import { ManpowerSection } from './ManpowerSection';
import { HowItWorks } from './HowItWorks';
import { WhyChooseUs } from './WhyChooseUs';
import { ProjectPortfolio } from './ProjectPortfolio';
import { ProjectGallery } from './ProjectGallery';
import { AboutSection } from './AboutSection';
import { CallToAction } from './CallToAction';
import { ContactSection } from './ContactSection';

interface Props { page: string; navigate: (id:string)=>void; }

const Shell: React.FC<{children:React.ReactNode}> = ({children}) => (
  <main className="flex-1 page-enter">{children}</main>
);

export const PublicPages: React.FC<Props> = ({page,navigate}) => {
  if (page === 'about') return <Shell><AboutSection /><CompanyIntro onViewConstructionServices={()=>navigate('services')} onViewManpowerServices={()=>navigate('services')} /></Shell>;
  if (page === 'services') return <Shell>
    <ServicesSection onRequestService={()=>navigate('contact')} />
    <ContractingSection onDiscussProjectClick={()=>navigate('contact')} />
    <ManpowerSection onRequestWorkforce={()=>navigate('contact')} />
    <HowItWorks />
    <WhyChooseUs />
    <CallToAction onContactClick={()=>navigate('contact')} />
  </Shell>;
  if (page === 'projects') return <Shell><ProjectPortfolio onEnquireProject={()=>navigate('contact')} /><ProjectGallery /></Shell>;
  if (page === 'contact') return <Shell><ContactSection /></Shell>;
  return <Shell>
    <Hero onHireConstructionClick={()=>navigate('contact')} onRequestManpowerClick={()=>navigate('contact')} />
    <CompanyIntro onViewConstructionServices={()=>navigate('services')} onViewManpowerServices={()=>navigate('services')} />
    <ServicesSection onRequestService={()=>navigate('services')} />
    <ProjectPortfolio onEnquireProject={()=>navigate('contact')} />
    <CallToAction onContactClick={()=>navigate('contact')} />
  </Shell>;
};
