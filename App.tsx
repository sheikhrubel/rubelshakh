
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SystemProfile from './components/SystemProfile';
import ActiveServices from './components/ActiveServices';
import IncidentLogs from './components/IncidentLogs';
import KnowledgeBase from './components/KnowledgeBase';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import SystemBoot from './components/SystemBoot';
import DownloadCV from './components/DownloadCV';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('HERO');
  const [isLightMode, setIsLightMode] = useState(false);
  const [isBooting, setIsBooting] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['HERO', 'PROFILE', 'SERVICES', 'LOGS', 'KB', 'CREDS', 'CONTACT'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsLightMode(!isLightMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'HERO', label: '01_TEAM_LEAD' },
    { id: 'PROFILE', label: '02_PROFILE' },
    { id: 'SERVICES', label: '03_SERVICES' },
    { id: 'LOGS', label: '04_INCIDENTS' },
    { id: 'KB', label: '05_KNOWLEDGE' },
    { id: 'CREDS', label: '06_SECURITY' },
    { id: 'CONTACT', label: '07_COMMS' },
  ];

  return (
    <>
      {isBooting && <SystemBoot onComplete={() => setIsBooting(false)} />}
      
      {/* Floating Download Node - Outside transition wrapper for immediate persistent visibility */}
      <DownloadCV isLightMode={isLightMode} />

      <div className={`min-h-screen flex flex-col transition-all duration-1000 ${
        isBooting ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      } ${
        isLightMode ? 'bg-slate-50 text-slate-800' : 'bg-[#0a0a0a] text-gray-300'
      } selection:bg-emerald-500/30 overflow-x-hidden relative`}>
        
        <Header 
          activeSection={activeSection} 
          isLightMode={isLightMode}
          toggleTheme={toggleTheme}
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
        />

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 z-[70] bg-[#0a0a0a] transition-all duration-500 lg:hidden flex flex-col ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
          <div className="flex flex-col items-center justify-center flex-1 space-y-8 p-6 relative">
            <button 
              onClick={toggleMenu}
              className="absolute top-6 right-6 p-4 text-emerald-500"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mono text-[10px] text-emerald-500/50 tracking-[0.5em] mb-4 uppercase">System Navigation</div>
            
            <nav className="flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`mono text-2xl font-bold tracking-tighter transition-all hover:scale-105 ${
                    activeSection === item.id ? 'text-emerald-500' : 'text-white/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="absolute bottom-12 mono text-[8px] text-gray-600 tracking-widest uppercase">
              BUILD_REF: COMMAND_CENTER_V2.5
            </div>
          </div>
        </div>
        
        <div className="flex flex-1 relative pt-16">
          <Sidebar activeSection={activeSection} isLightMode={isLightMode} />
          
          <main className="flex-1 lg:ml-64 px-4 sm:px-6 lg:px-8 space-y-24 pb-32 overflow-hidden">
            <section id="HERO" className="min-h-[80vh] flex items-center">
              <Hero isLightMode={isLightMode} />
            </section>

            <section id="PROFILE">
              <SystemProfile isLightMode={isLightMode} />
            </section>

            <section id="SERVICES">
              <ActiveServices isLightMode={isLightMode} />
            </section>

            <section id="LOGS">
              <IncidentLogs isLightMode={isLightMode} />
            </section>

            <section id="KB">
              <KnowledgeBase isLightMode={isLightMode} />
            </section>

            <section id="CREDS">
              <Credentials isLightMode={isLightMode} />
            </section>

            <section id="CONTACT">
              <Contact isLightMode={isLightMode} />
            </section>
          </main>
        </div>

        <footer className={`fixed bottom-0 left-0 w-full backdrop-blur-md border-t p-2 text-[10px] mono flex justify-between items-center z-40 transition-colors ${
          isLightMode ? 'bg-white/90 border-slate-200' : 'bg-black/90 border-emerald-900/30'
        }`}>
          <div className="flex items-center space-x-4 px-4">
            <span className={`${isLightMode ? 'text-emerald-600' : 'text-emerald-400'} animate-pulse`}>
              ● SYSTEM: OK
            </span>
            <span className="text-gray-500 hidden sm:inline">UPTIME: 10Y_6M</span>
          </div>
          <div className="flex items-center px-4">
            <span className="text-gray-500 uppercase truncate">RUBEL_SHAKH_INFRA</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
