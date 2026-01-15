
import React, { useState, useEffect } from 'react';

interface SystemBootProps {
  onComplete: () => void;
}

const SystemBoot: React.FC<SystemBootProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [phase, setPhase] = useState<'kernel' | 'decrypt' | 'ready'>('kernel');
  const [decryptedText, setDecryptedText] = useState('');
  const targetText = "RUBEL_SHAKH_INFRASTRUCTURE";

  const kernelMessages = [
    "[    0.000000] Linux version 5.15.0-generic (gcc version 11.2.0)",
    "[    0.000000] Command line: BOOT_IMAGE=/vmlinuz-portfolio root=UUID=8d56-78b1",
    "[    0.012455] x86/fpu: Supporting XSAVE feature 0x001: 'x87 floating point registers'",
    "[    0.145621] Memory: 16777216K/33554432K available (16384K kernel code)",
    "[    0.552104] smpboot: CPU0: Intel(R) Core(TM) i9-12900K @ 3.20GHz",
    "[    1.002441] Initializing Rubel_Shakh Identity Module...",
    "[    1.254110] Mounting /dev/sda1 as infrastructure root...",
    "[    1.556201] NET: Registered protocol family 2 (IPv4/DHCP)",
    "[    1.890212] Establishing secure tunneling to DHAKA_REGION...",
    "[    2.110254] Loading L3_SPECIALIST_PROTOCOLS...",
    "[    2.445120] SERVICE_START: active_monitoring_service",
    "[    2.678112] SERVICE_START: incident_triage_engine",
    "[    2.990101] SERVICE_START: knowledge_base_v2",
    "[    3.201552] ALL SYSTEMS NOMINAL. PREPARING DECRYPTION."
  ];

  useEffect(() => {
    // Phase 1: Rapid scrolling logs
    let i = 0;
    const logInterval = setInterval(() => {
      if (i < kernelMessages.length) {
        setLogs(prev => [...prev, kernelMessages[i]]);
        i++;
      } else {
        clearInterval(logInterval);
        setTimeout(() => setPhase('decrypt'), 500);
      }
    }, 150);

    return () => clearInterval(logInterval);
  }, []);

  useEffect(() => {
    if (phase === 'decrypt') {
      let iteration = 0;
      const decryptInterval = setInterval(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#@!";
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
          setTimeout(() => setPhase('ready'), 1000);
        }
      }, 30);
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
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Glitchy Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative w-full max-w-2xl px-6">
        {phase === 'kernel' && (
          <div className="h-[400px] flex flex-col justify-end">
            <div className="space-y-1 mono text-[10px] md:text-xs text-emerald-500/80">
              {logs.map((log, i) => (
                <div key={i} className="animate-in slide-in-from-bottom-2 duration-300">
                  {log}
                </div>
              ))}
              <div className="w-2 h-4 bg-emerald-500 animate-pulse inline-block align-middle ml-1"></div>
            </div>
          </div>
        )}

        {phase === 'decrypt' && (
          <div className="flex flex-col items-center justify-center space-y-8 animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 border-2 border-emerald-500 rounded-full flex items-center justify-center relative">
               <div className="absolute inset-0 border-t-2 border-emerald-400 animate-spin rounded-full"></div>
               <div className="w-12 h-12 bg-emerald-500/10 rounded-full animate-pulse flex items-center justify-center">
                 <div className="w-6 h-6 border-2 border-emerald-500 animate-ping"></div>
               </div>
            </div>
            <div className="text-center">
              <div className="mono text-[10px] text-emerald-500/50 mb-2 tracking-[0.5em] uppercase">Decrypting Identity</div>
              <div className="mono text-xl md:text-3xl font-bold text-emerald-400 tracking-tighter">
                {decryptedText}
              </div>
            </div>
          </div>
        )}

        {phase === 'ready' && (
          <div className="flex flex-col items-center justify-center space-y-6 animate-in fade-in zoom-in-110 duration-1000">
            <div className="mono text-4xl md:text-6xl font-black text-white tracking-[0.2em] relative">
              <span className="relative z-10">ACCESS_GRANTED</span>
              <div className="absolute inset-0 blur-xl bg-emerald-500/30"></div>
            </div>
            <div className="mono text-xs text-emerald-500 animate-pulse uppercase tracking-widest">
              Initializing command center interface...
            </div>
            {/* Visual HUD circle expansion */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] border-4 border-emerald-500/20 rounded-full animate-[ping_2s_ease-out_infinite]"></div>
          </div>
        )}
      </div>

      {/* Skip Button */}
      <button 
        onClick={onComplete}
        className="fixed bottom-12 right-12 mono text-[10px] text-emerald-500/30 hover:text-emerald-500 transition-colors border border-emerald-500/20 px-4 py-2 hover:bg-emerald-500/5"
      >
        SKIP_BOOT_SEQUENCE [ESC]
      </button>

      {/* CRT Scanline Overlay specifically for intro */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20"></div>
    </div>
  );
};

export default SystemBoot;
