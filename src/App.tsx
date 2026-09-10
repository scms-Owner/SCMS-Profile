import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CompanyIntro } from './components/CompanyIntro';
import { ServicesSection } from './components/ServicesSection';
import { ContractingSection } from './components/ContractingSection';
import { ManpowerSection } from './components/ManpowerSection';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProjectPortfolio } from './components/ProjectPortfolio';
import { ProjectGallery } from './components/ProjectGallery';
import { AboutSection } from './components/AboutSection';
import { CallToAction } from './components/CallToAction';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Smooth scroll and active section observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'services',
        'contracting',
        'manpower',
        'projects',
        'gallery',
        'why-us',
        'contact'
      ];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e5e7eb] flex flex-col font-['Plus_Jakarta_Sans']">
      {/* Sticky Header with Direct Contact Button */}
      <Header
        activeSection={activeSection}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onHireConstructionClick={() => handleNavigateSection('contact')}
          onRequestManpowerClick={() => handleNavigateSection('contact')}
        />

        {/* 2. Company Introduction */}
        <CompanyIntro
          onViewConstructionServices={() => handleNavigateSection('contracting')}
          onViewManpowerServices={() => handleNavigateSection('manpower')}
        />

        {/* 3. Core Services (8 Cards with Learn More & Direct Contact) */}
        <ServicesSection
          onRequestService={() => handleNavigateSection('contact')}
        />

        {/* 4. Construction Contracting (Dedicated Civil Section) */}
        <ContractingSection
          onDiscussProjectClick={() => handleNavigateSection('contact')}
        />

        {/* 5. Manpower Supply (10 Worker Categories) */}
        <ManpowerSection
          onRequestWorkforce={() => handleNavigateSection('contact')}
        />

        {/* 6. How It Works (4 Steps) */}
        <HowItWorks />

        {/* 7. Why Choose Us (9 Pillars) */}
        <WhyChooseUs />

        {/* 8. Project Portfolio (Filters & Details Modal) */}
        <ProjectPortfolio
          onEnquireProject={() => handleNavigateSection('contact')}
        />

        {/* 9. Project Gallery (Real Photography Showcase) */}
        <ProjectGallery />

        {/* 10. About Us (Mission, Vision, Proprietor) */}
        <AboutSection />

        {/* 11. Large Direct Action Banner */}
        <CallToAction
          onContactClick={() => handleNavigateSection('contact')}
        />

        {/* 12. Direct Contact Section: Phone, Email, WhatsApp - No Forms */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
      />

      {/* Floating WhatsApp Quick Button */}
      <FloatingWhatsApp />

      {/* Mobile Ergonomic Bottom Quick Bar (Call, WhatsApp, Email) */}
      <MobileQuickBar
        onContactClick={() => handleNavigateSection('contact')}
      />
    </div>
  );
}
