
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

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('HERO');
  const [isHumanMode, setIsHumanMode] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

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

  const toggleMode = () => setIsHumanMode(!isHumanMode);
  const toggleTheme = () => setIsLightMode(!isLightMode);

  return (
    <div className={`min-h-screen flex flex-col transition-all duration-500 ${
      isLightMode ? 'bg-slate-50 text-slate-800' : 'bg-black text-gray-300'
    } ${isHumanMode ? 'selection:bg-blue-500/30' : 'selection:bg-emerald-500/30'}`}>
      
      <Header 
        activeSection={activeSection} 
        isHumanMode={isHumanMode} 
        toggleMode={toggleMode} 
        isLightMode={isLightMode}
        toggleTheme={toggleTheme}
      />
      
      <div className="flex flex-1 relative pt-16">
        <Sidebar activeSection={activeSection} isHumanMode={isHumanMode} isLightMode={isLightMode} />
        
        <main className="flex-1 lg:ml-64 p-4 lg:p-8 space-y-24 pb-32">
          <section id="HERO" className="min-h-[80vh] flex items-center">
            <Hero isHumanMode={isHumanMode} isLightMode={isLightMode} />
          </section>

          <section id="PROFILE">
            <SystemProfile isHumanMode={isHumanMode} isLightMode={isLightMode} />
          </section>

          <section id="SERVICES">
            <ActiveServices isHumanMode={isHumanMode} isLightMode={isLightMode} />
          </section>

          <section id="LOGS">
            <IncidentLogs isHumanMode={isHumanMode} isLightMode={isLightMode} />
          </section>

          <section id="KB">
            <KnowledgeBase isHumanMode={isHumanMode} isLightMode={isLightMode} />
          </section>

          <section id="CREDS">
            <Credentials isHumanMode={isHumanMode} isLightMode={isLightMode} />
          </section>

          <section id="CONTACT">
            <Contact isHumanMode={isHumanMode} isLightMode={isLightMode} />
          </section>
        </main>
      </div>

      <footer className={`fixed bottom-0 left-0 w-full backdrop-blur border-t p-2 text-[10px] mono flex justify-between items-center z-40 transition-colors ${
        isLightMode ? 'bg-white/80 border-slate-200' : 'bg-black/80 border-emerald-900/30'
      }`}>
        <div className="flex items-center space-x-4 px-4">
          <span className={`${isHumanMode ? 'text-blue-500' : (isLightMode ? 'text-emerald-600' : 'text-emerald-400')} animate-pulse`}>
            ● {isHumanMode ? 'READY_TO_HELP' : 'SYSTEM_NORMAL'}
          </span>
          <span className="text-gray-500">UPTIME: 10Y_6M_12D</span>
          <span className="text-gray-500 hidden md:inline">LATENCY: 14MS</span>
        </div>
        <div className="flex items-center space-x-4 px-4">
          <span className="text-gray-500 uppercase">
            {isHumanMode ? 'Human Friendly View' : 'Binary Protocol Active'} | {isLightMode ? 'Light UI' : 'Dark UI'}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default App;
