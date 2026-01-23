
import React from 'react';

interface HeaderProps {
  activeSection: string;
  isLightMode: boolean;
  toggleTheme: () => void;
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ activeSection, isLightMode, toggleTheme, toggleMenu, isMenuOpen }) => {
  const accentHex = isLightMode ? '#059669' : '#34d399';

  const getDisplayLabel = (id: string) => {
    switch (id) {
      case 'HERO': return 'TEAM LEAD';
      case 'PROFILE': return 'PROFILE';
      case 'SERVICES': return 'SERVICES';
      case 'LOGS': return 'INCIDENTS';
      case 'KB': return 'KNOWLEDGE';
      case 'CREDS': return 'SECURITY';
      case 'CONTACT': return 'COMMS';
      default: return id;
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full h-16 backdrop-blur-md border-b flex items-center justify-between px-3 sm:px-6 z-50 transition-all ${
      isLightMode ? 'bg-white/95 border-slate-200 shadow-sm' : 'bg-black/95 border-emerald-900/30'
    }`}>
      {/* Left: Branding */}
      <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
        <div className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border transition-all ${
          isLightMode ? 'bg-emerald-50 border-emerald-200' : 'bg-emerald-500/10 border-emerald-500/50'
        }`}>
          <span className="mono font-bold text-lg" style={{ color: accentHex }}>R</span>
        </div>
        <div className="hidden xs:block overflow-hidden">
          <h1 className={`mono text-[10px] sm:text-xs font-bold tracking-tighter truncate transition-colors ${
            isLightMode ? 'text-slate-900' : 'text-gray-100'
          }`}>
            RUBEL_SHAKH
          </h1>
          <p className="text-[8px] sm:text-[9px] text-gray-500 mono leading-none uppercase truncate">
            Infrastructure Specialist
          </p>
        </div>
      </div>

      {/* Center: Module Indicator (Visible on all device types) */}
      <div className="flex flex-col items-center justify-center px-4 flex-1 min-w-0">
        <span className="text-gray-500 uppercase text-[7px] sm:text-[8px] mono leading-none mb-1 tracking-widest opacity-60">
          ACTIVE_MODULE
        </span>
        <span className="mono text-[10px] sm:text-[11px] font-bold tracking-tighter whitespace-nowrap overflow-hidden text-ellipsis w-full text-center" style={{ color: accentHex }}>
          {getDisplayLabel(activeSection)}
        </span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center space-x-1.5 sm:space-x-3 flex-shrink-0">
        <button 
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className={`p-2 rounded-full border transition-all flex items-center justify-center ${
            isLightMode 
              ? 'bg-slate-100 border-slate-300 text-slate-600 hover:bg-slate-200' 
              : 'bg-neutral-900 border-white/10 text-gray-400 hover:text-white'
          }`}
        >
          {isLightMode ? (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
            </svg>
          )}
        </button>

        <button 
          onClick={toggleMenu}
          className={`lg:hidden p-2 rounded-sm border transition-all flex items-center justify-center ${
            isLightMode ? 'bg-slate-50 border-slate-200 text-slate-600' : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
