import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileQuickBar } from './components/MobileQuickBar';
import { AdminPanel } from './components/AdminPanel';
import { PublicPages } from './components/PublicPages';
import { loadRemoteSiteData } from './lib/siteData';

const routeFromHash = () => {
  const hash = window.location.hash.replace(/^#\/?/, '').split('?')[0];
  if (hash.startsWith('admin')) return 'admin';
  return hash || 'home';
};

export default function App() {
  const [route,setRoute] = useState(routeFromHash);
  const [,setSiteDataVersion] = useState(0);
  useEffect(() => {
    const onHash = () => { setRoute(routeFromHash()); window.scrollTo({top:0,behavior:'smooth'}); };
    window.addEventListener('hashchange',onHash);
    loadRemoteSiteData().then(() => setSiteDataVersion(v=>v+1));
    return () => window.removeEventListener('hashchange',onHash);
  },[]);
  const navigate = (id:string) => {
    const map:Record<string,string> = {home:'home',about:'about','about-intro':'about',services:'services',contracting:'services',manpower:'services','why-us':'services',projects:'projects',gallery:'projects',contact:'contact'};
    const target=map[id] || id;
    window.location.hash = target === 'home' ? '/' : `/${target}`;
  };
  if (route === 'admin') return <AdminPanel />;
  const active = route === 'home' ? 'home' : route === 'about' ? 'about-intro' : route === 'services' ? 'services' : route === 'projects' ? 'projects' : 'contact';
  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e5e7eb] flex flex-col font-['Plus_Jakarta_Sans']">
      <Header activeSection={active} onNavigateSection={navigate} />
      <PublicPages page={route} navigate={navigate} />
      <Footer onNavigateSection={navigate} />
      <FloatingWhatsApp />
      <MobileQuickBar onContactClick={()=>navigate('contact')} />
    </div>
  );
}
