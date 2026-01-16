
import React from 'react';

interface SidebarProps {
  activeSection: string;
  isLightMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, isLightMode }) => {
  const accentColor = 'emerald';

  const navItems = [
    { id: 'HERO', label: '01_TEAM_LEAD', icon: 'M4 6h16M4 12h16M4 18h16' },
    { id: 'PROFILE', label: '02_PROFILE', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'SERVICES', label: '03_SERVICES', icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2' },
    { id: 'LOGS', label: '04_INCIDENTS', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
    { id: 'KB', label: '05_KNOWLEDGE', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { id: 'CREDS', label: '06_SECURITY', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { id: 'CONTACT', label: '07_COMMS', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`hidden lg:block fixed left-0 top-16 w-64 h-[calc(100vh-64px)] border-r p-6 z-40 overflow-y-auto transition-all ${
      isLightMode ? 'bg-white border-slate-200' : 'bg-neutral-950 border-emerald-900/10'
    }`}>
      <div className="space-y-2">
        <div className="mono text-[10px] text-gray-500 mb-4 tracking-widest px-2">
          NAVIGATION_TREE
        </div>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-sm mono text-[11px] transition-all group ${
              activeSection === item.id 
                ? (isLightMode 
                    ? `bg-emerald-50 text-emerald-700 border border-emerald-200` 
                    : `bg-emerald-500/10 text-emerald-400 border border-emerald-500/30`)
                : (isLightMode 
                    ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-50' 
                    : 'text-gray-500 hover:text-gray-300 hover:bg-neutral-900')
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
            </svg>
            <span className="tracking-tighter">{item.label}</span>
          </button>
        ))}
      </div>

      <div className={`mt-12 p-4 border rounded transition-all ${
        isLightMode ? 'border-slate-200 bg-slate-50' : 'border-emerald-900/20 bg-emerald-950/5'
      }`}>
        <div className={`mono text-[9px] mb-2 transition-colors ${
          isLightMode ? 'text-emerald-700' : 'text-emerald-600'
        }`}>
          SYSTEM_TELEMETRY
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-gray-500 mono">CPU_LOAD</span>
            <div className={`w-24 h-1 rounded-full overflow-hidden transition-colors ${isLightMode ? 'bg-slate-200' : 'bg-gray-900'}`}>
              <div className={`h-full transition-all duration-1000 ${
                isLightMode ? 'w-[12%] bg-emerald-600' : 'w-[12%] bg-emerald-500'
              }`}></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-gray-500 mono">MEM_USAGE</span>
            <div className={`w-24 h-1 rounded-full overflow-hidden transition-colors ${isLightMode ? 'bg-slate-200' : 'bg-gray-900'}`}>
              <div className={`h-full transition-all duration-1000 ${
                isLightMode ? 'w-[45%] bg-emerald-600' : 'w-[45%] bg-emerald-500'
              }`}></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-gray-500 mono">SSL_CERT</span>
            <span className={`text-[9px] mono uppercase font-bold transition-colors ${
              isLightMode ? 'text-emerald-700' : 'text-emerald-400'
            }`}>Valid</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
