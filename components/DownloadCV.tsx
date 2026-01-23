
import React from 'react';

interface DownloadCVProps {
  isLightMode: boolean;
}

const DownloadCV: React.FC<DownloadCVProps> = ({ isLightMode }) => {
  return (
    <div className="fixed bottom-6 right-6 z-[80] flex flex-col items-end pointer-events-none group">
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        .data-node-glow {
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
        }
        .data-node-glow:hover {
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.4);
        }
      `}</style>
      
      {/* Tooltip / Label revealed on hover */}
      <div className={`mb-3 mr-1 px-3 py-1.5 mono text-[9px] font-bold tracking-widest border transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ${
        isLightMode 
          ? 'bg-white border-slate-200 text-slate-800 shadow-lg' 
          : 'bg-black border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
      }`}>
        DOWNLOAD_RESUME_LATEST
      </div>

      <a 
        href="https://drive.google.com/file/d/1SsK52LUgxga9O5IRIHAeW8FGn1b6o4fJ/view?usp=drivesdk" 
        download="Md_Rubel_Shakh_Resume.pdf"
        className={`pointer-events-auto relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 transition-all duration-500 rounded-sm border data-node-glow hover:scale-110 active:scale-95 ${
          isLightMode 
            ? 'bg-white border-slate-200 text-slate-600' 
            : 'bg-neutral-950 border-emerald-500/30 text-emerald-500'
        }`}
      >
        {/* Connection Pulse Animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full rounded-sm border border-emerald-500/40 animate-[pulse-ring_2s_infinite]"></div>
        </div>

        {/* Status Indicator Dot */}
        <div className="absolute top-1 right-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="mono text-[7px] font-black tracking-tighter uppercase opacity-60">CV.PDF</span>
        </div>

        {/* Scanline overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-sm">
          <div className="w-full h-1 bg-emerald-500/10 absolute top-0 animate-[scanline_4s_linear_infinite]"></div>
        </div>
      </a>

      {/* Unique Detail: Label on the side */}
      <div className={`mt-2 mr-2 mono text-[8px] font-bold tracking-[0.3em] uppercase transition-colors opacity-40 group-hover:opacity-100 ${
        isLightMode ? 'text-slate-400' : 'text-emerald-900'
      }`}>
        Data_Archive_Lvl_03
      </div>
    </div>
  );
};

export default DownloadCV;
