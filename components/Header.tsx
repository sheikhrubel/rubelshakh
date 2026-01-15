
import React from 'react';

interface HeaderProps {
  activeSection: string;
  isHumanMode: boolean;
  toggleMode: () => void;
  isLightMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, isHumanMode, toggleMode, isLightMode, toggleTheme }) => {
  const accentColor = isHumanMode ? 'blue' : 'emerald';
  const accentHex = isHumanMode ? (isLightMode ? '#3b82f6' : '#60a5fa') : (isLightMode ? '#059669' : '#34d399');

  return (
    <header className={`fixed top-0 left-0 w-full h-16 backdrop-blur-md border-b flex items-center justify-between px-6 z-50 transition-all ${
      isLightMode ? 'bg-white/90 border-slate-200 shadow-sm' : 'bg-black/90 border-emerald-900/30'
    }`}>
      <div className="flex items-center space-x-4">
        <div className={`w-8 h-8 flex items-center justify-center border transition-all ${
          isLightMode 
            ? `bg-${accentColor}-50 border-${accentColor}-200` 
            : `bg-${accentColor}-500/10 border-${accentColor}-500/50`
        }`}>
          <span className={`mono font-bold text-lg`} style={{ color: accentHex }}>R</span>
        </div>
        <div>
          <h1 className={`mono text-sm font-bold tracking-tighter transition-colors ${
            isLightMode ? 'text-slate-900' : 'text-gray-100'
          }`}>
            {isHumanMode ? 'REPRESENTATIVE' : 'USER'}: <span style={{ color: accentHex }}>RUBEL_SHAKH</span>
          </h1>
          <p className="text-[10px] text-gray-500 mono leading-none uppercase">
            {isHumanMode ? 'Public Profile' : 'AUTH_LEVEL: L3_ADMIN'}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2 md:space-x-6">
        {/* Discoverable Theme Toggle Area */}
        <div className="flex items-center space-x-3">
          <div className="hidden md:flex flex-col items-end mr-1">
            <span className={`mono text-[8px] animate-pulse font-bold tracking-widest ${
              isLightMode ? 'text-emerald-700' : 'text-emerald-400'
            }`}>
              {isLightMode ? 'CLICK_FOR_DARK' : 'CLICK_FOR_LIGHT'}
            </span>
            <span className="mono text-[9px] text-gray-500 uppercase">COLOR_SCHEME</span>
          </div>
          
          <button 
            onClick={toggleTheme}
            className={`p-2.5 rounded-full border transition-all flex items-center justify-center relative group ${
              isLightMode 
                ? 'bg-slate-100 border-slate-300 text-slate-600 hover:bg-slate-200 hover:border-emerald-400' 
                : 'bg-neutral-900 border-white/10 text-gray-400 hover:text-white hover:bg-neutral-800 hover:border-emerald-500/50'
            }`}
          >
            {/* Pulsing indicator for discovery */}
            <span className={`absolute -top-1 -right-1 flex h-2 w-2`}>
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLightMode ? 'bg-emerald-400' : 'bg-emerald-500'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isLightMode ? 'bg-emerald-500' : 'bg-emerald-600'}`}></span>
            </span>

            {isLightMode ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
              </svg>
            )}
            
            {/* Floating Tooltip hint */}
            <div className={`absolute top-full mt-2 hidden group-hover:block mono text-[8px] py-1 px-2 rounded border whitespace-nowrap shadow-xl z-[60] ${
              isLightMode ? 'bg-white border-slate-200 text-slate-900' : 'bg-black border-emerald-900 text-emerald-400'
            }`}>
              TOGGLE_VISUAL_MODE
            </div>
          </button>
        </div>

        <div className="h-6 w-px bg-gray-700/30 hidden md:block mx-1"></div>

        {/* Protocol Switcher */}
        <div className={`flex items-center p-1 rounded-sm border transition-all ${
          isLightMode ? 'bg-slate-100 border-slate-200' : 'bg-neutral-900 border-white/5'
        }`}>
          <button 
            onClick={!isHumanMode ? undefined : toggleMode}
            className={`px-3 py-1 mono text-[10px] rounded-sm transition-all ${
              !isHumanMode 
                ? (isLightMode ? 'bg-emerald-600 text-white font-bold shadow-sm' : 'bg-emerald-500 text-black font-bold') 
                : 'text-gray-500 hover:text-gray-400'
            }`}
          >
            TECH
          </button>
          <button 
            onClick={isHumanMode ? undefined : toggleMode}
            className={`px-3 py-1 mono text-[10px] rounded-sm transition-all ${
              isHumanMode 
                ? (isLightMode ? 'bg-blue-600 text-white font-bold shadow-sm' : 'bg-blue-500 text-white font-bold') 
                : 'text-gray-500 hover:text-gray-400'
            }`}
          >
            HUMAN
          </button>
        </div>

        <div className="hidden xl:flex items-center space-x-8 mono text-[12px]">
          <div className="flex flex-col items-end">
            <span className="text-gray-500 uppercase text-[9px]">{isHumanMode ? 'VIEW_MODE' : 'MODULE_ID'}</span>
            <span className={`font-bold transition-colors`} style={{ color: accentHex }}>{activeSection}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
