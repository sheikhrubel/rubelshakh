
import React from 'react';

interface HeaderProps {
  activeSection: string;
  isLightMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, isLightMode, toggleTheme }) => {
  const accentColor = 'emerald';
  const accentHex = isLightMode ? '#059669' : '#34d399';

  return (
    <header className={`fixed top-0 left-0 w-full h-16 backdrop-blur-md border-b flex items-center justify-between px-6 z-50 transition-all ${
      isLightMode ? 'bg-white/90 border-slate-200 shadow-sm' : 'bg-black/90 border-emerald-900/30'
    }`}>
      <div className="flex items-center space-x-4">
        <div className={`w-8 h-8 flex items-center justify-center border transition-all ${
          isLightMode 
            ? `bg-emerald-50 border-emerald-200` 
            : `bg-emerald-500/10 border-emerald-500/50`
        }`}>
          <span className={`mono font-bold text-lg`} style={{ color: accentHex }}>R</span>
        </div>
        <div>
          <h1 className={`mono text-sm font-bold tracking-tighter transition-colors ${
            isLightMode ? 'text-slate-900' : 'text-gray-100'
          }`}>
            INFRASTRUCTURE: <span style={{ color: accentHex }}>RUBEL_SHAKH</span>
          </h1>
          <p className="text-[10px] text-gray-500 mono leading-none uppercase">
            Service Delivery Analyst | L3 Specialist
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleTheme}
          className={`p-2.5 rounded-full border transition-all flex items-center justify-center relative group ${
            isLightMode 
              ? 'bg-slate-100 border-slate-300 text-slate-600 hover:bg-slate-200 hover:border-emerald-400' 
              : 'bg-neutral-900 border-white/10 text-gray-400 hover:text-white hover:bg-neutral-800 hover:border-emerald-500/50'
          }`}
        >
          {isLightMode ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
            </svg>
          )}
        </button>

        <div className="hidden md:flex items-center space-x-8 mono text-[12px]">
          <div className="flex flex-col items-end">
            <span className="text-gray-500 uppercase text-[9px]">MODULE</span>
            <span className={`font-bold transition-colors`} style={{ color: accentHex }}>{activeSection}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
