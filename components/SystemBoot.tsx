
import React, { useState, useEffect } from 'react';

interface SystemBootProps {
  onComplete: () => void;
}

const SystemBoot: React.FC<SystemBootProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [phase, setPhase] = useState<'kernel' | 'decrypt' | 'ready'>('kernel');
  const [decryptedText, setDecryptedText] = useState('');
  const targetText = "RUBEL_SHAKH_PORTFOLIO";

  const kernelMessages = [
    "[ OK ] Guest session handshake successful.",
    "[ LOAD ] Rubel_Shakh_Core_Experience.pkg ... 100%",
    "[ LOAD ] Technical_Skills_Database.bin ... OK",
    "[ LOAD ] Infrastructure_Visualizer_Module ... OK",
    "[ INFO ] Establishing secure connection to DHAKA_DC...",
    "[ INFO ] Optimizing viewport for Infrastructure Specialist view.",
    "[ AUTH ] Visitor credentials accepted. Level: GUEST_ACCESS.",
    "[ SYNC ] Synchronizing 10+ years of career telemetry...",
    "[ LOAD ] Incident_Log_History.db ... 100%",
    "[ LOAD ] Service_Delivery_Protocols ... OK",
    "[ INFO ] Pre-loading knowledge base assets...",
    "[ INFO ] Systems nominal. Preparing professional environment."
  ];

  useEffect(() => {
    let i = 0;
    const logInterval = setInterval(() => {
      if (i < kernelMessages.length) {
        setLogs(prev => [...prev, kernelMessages[i]]);
        i++;
      } else {
        clearInterval(logInterval);
        setTimeout(() => setPhase('decrypt'), 400);
      }
    }, 100);

    return () => clearInterval(logInterval);
  }, []);

  useEffect(() => {
    if (phase === 'decrypt') {
      let iteration = 0;
      const decryptInterval = setInterval(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_.-";
        setDecryptedText(
          targetText
            .split("")
            .map((char, index) => {
              if (index < iteration) return char;
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("")
        );

        iteration += 1/3;
        if (iteration >= targetText.length) {
          clearInterval(decryptInterval);
          setTimeout(() => setPhase('ready'), 600);
        }
      }, 25);
      return () => clearInterval(decryptInterval);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'ready') {
      const timer = setTimeout(() => {
        onComplete();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#020202] flex flex-col items-center justify-center overflow-hidden p-6">
      <div className="absolute top-10 left-10 hidden md:block mono text-[10px] text-emerald-500/20 uppercase tracking-[0.4em]">
        Rubel Shakh // Portfolio System v2.5
      </div>
      <div className="absolute top-10 right-10 hidden md:block mono text-[10px] text-emerald-500/20 uppercase tracking-[0.4em]">
        Status: Auth_Guest_OK
      </div>

      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative w-full max-w-2xl">
        {phase === 'kernel' && (
          <div className="h-[350px] sm:h-[400px] flex flex-col justify-end">
            <div className="space-y-1.5 mono text-[10px] sm:text-xs text-emerald-500/60 overflow-hidden">
              {logs.map((log, i) => (
                <div key={i} className="animate-in slide-in-from-bottom-2 duration-300 truncate border-l-2 border-transparent hover:border-emerald-500/30 pl-2">
                  <span className="text-emerald-500/30">{">>"}</span> {log}
                </div>
              ))}
              <div className="w-1.5 h-3 sm:w-2 sm:h-4 bg-emerald-500/40 animate-pulse inline-block align-middle ml-1"></div>
            </div>
          </div>
        )}

        {phase === 'decrypt' && (
          <div className="flex flex-col items-center justify-center space-y-10 animate-in zoom-in-95 duration-500">
            <div className="relative">
               <div className="w-20 h-20 sm:w-24 sm:h-24 border border-emerald-500/20 rounded-full flex items-center justify-center">
                  <div className="absolute inset-0 border-t border-emerald-400 animate-[spin_3s_linear_infinite] rounded-full"></div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-500/5 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
               </div>
            </div>
            <div className="text-center w-full">
              <div className="mono text-[8px] sm:text-[10px] text-emerald-500/40 mb-3 tracking-[0.6em] uppercase font-bold">Initializing Environment</div>
              <div className="mono text-lg sm:text-2xl md:text-3xl font-bold text-white tracking-widest break-all">
                {decryptedText}
              </div>
            </div>
          </div>
        )}

        {phase === 'ready' && (
          <div className="flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in-110 duration-1000">
            <div className="text-center">
              <div className="mono text-[10px] sm:text-xs text-emerald-500 mb-4 tracking-[0.8em] uppercase opacity-60">System Ready</div>
              <div className="mono text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-[0.05em] relative">
                <span className="relative z-10 whitespace-nowrap">WELCOME_GUEST</span>
                <div className="absolute inset-x-0 -bottom-2 h-1 bg-emerald-500 shadow-[0_0_20px_#10b981]"></div>
              </div>
            </div>
            <div className="mono text-[9px] sm:text-xs text-emerald-500/50 uppercase tracking-widest text-center animate-pulse">
              Command center online // enjoy the tour
            </div>
          </div>
        )}
      </div>

      <button 
        onClick={onComplete}
        className="fixed bottom-10 right-1/2 translate-x-1/2 sm:right-10 sm:translate-x-0 mono text-[9px] text-emerald-500/40 hover:text-emerald-500 transition-all border border-emerald-500/20 px-5 py-2 hover:bg-emerald-500/5 backdrop-blur-sm tracking-[0.3em] uppercase"
      >
        Skip System Intro [ESC]
      </button>

      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] opacity-20"></div>
    </div>
  );
};

export default SystemBoot;
