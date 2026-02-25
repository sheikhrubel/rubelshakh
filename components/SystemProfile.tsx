
import React, { useState, useEffect, useRef } from 'react';

interface SystemProfileProps {
  isLightMode: boolean;
}

const SystemProfile: React.FC<SystemProfileProps> = ({ isLightMode }) => {
  const [hexData, setHexData] = useState<string[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scanProgress, setScanProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Updated Profile Image URL
  const profileImageUrl = "https://i.ibb.co/TBhQBszm/rubel.jpg";

  useEffect(() => {
    const generateHex = () => {
      const chars = '0123456789ABCDEF';
      return Array.from({ length: 15 }, () => 
        Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * 16)]).join('')
      );
    };
    setHexData(generateHex());
    const interval = setInterval(() => setHexData(generateHex()), 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let frame: number;
    const animate = (time: number) => {
      const progress = (time % 4000) / 4000;
      setScanProgress(progress);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const isMobile = window.innerWidth < 768;
    const rect = containerRef.current.getBoundingClientRect();
    const multiplier = isMobile ? 5 : 15;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * multiplier;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -multiplier;
    setMousePos({ x, y });
  };

  const resetMouse = () => setMousePos({ x: 0, y: 0 });

  return (
    <div className="max-w-5xl">
      <style>{`
        @keyframes scrollHex { 0% { transform: translateY(0); } 100% { transform: translateY(-20px); } }
        @keyframes pulseBracket { 0%, 100% { transform: scale(1); opacity: 0.3; } 50% { transform: scale(1.05); opacity: 0.8; } }
        @keyframes waveform { 0%, 100% { height: 4px; } 50% { height: 12px; } }
        @keyframes glitch { 0% { clip-path: inset(80% 0 0 0); transform: translate(-2px, 2px); } 5% { clip-path: inset(10% 0 85% 0); transform: translate(2px, -2px); } 10% { clip-path: inset(80% 0 0 0); transform: translate(0); } 100% { clip-path: inset(80% 0 0 0); transform: translate(0); } }
        @keyframes biometricMesh { 0%, 100% { opacity: 0; transform: scale(1); } 50% { opacity: 0.15; transform: scale(1.02); } }
        @keyframes verticalScan { 0% { top: 0%; opacity: 0; } 5% { opacity: 1; } 95% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
      `}</style>

      <div className="flex items-center space-x-4 mb-10 sm:mb-12">
        <h2 className={`mono text-xl sm:text-2xl font-bold tracking-tighter transition-colors ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
          02_SYSTEM_PROFILE
        </h2>
        <div className={`flex-1 h-px transition-colors ${isLightMode ? 'bg-slate-200' : 'bg-emerald-900/30'}`}></div>
      </div>

      <div className="grid md:grid-cols-12 gap-10 items-start">
        <div 
          className="md:col-span-5 relative group"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetMouse}
          style={{ perspective: '1200px' }}
        >
          {/* Waveform Header Animation */}
          <div className="absolute -top-10 left-0 w-full flex items-end justify-center space-x-0.5 h-8 opacity-40 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-0.5 rounded-full ${isLightMode ? 'bg-emerald-400' : 'bg-emerald-500'}`}
                style={{ animation: `waveform ${0.3 + Math.random()}s ease-in-out infinite`, animationDelay: `${i * 0.03}s` }}
              />
            ))}
          </div>

          {/* Side Hex Data - Hidden on mobile to prevent overflow */}
          <div className="absolute -left-14 top-0 bottom-0 w-10 hidden lg:flex flex-col items-center overflow-hidden pointer-events-none opacity-20">
            <div className="mono text-[8px] space-y-2 animate-[scrollHex_1.5s_linear_infinite]" style={{ color: isLightMode ? '#059669' : '#34d399' }}>
              {hexData.map((hex, i) => <div key={i}>{hex}</div>)}
            </div>
          </div>

          <div 
            className={`relative aspect-[4/5] overflow-hidden border transition-all duration-300 shadow-2xl ${
              isLightMode ? 'bg-white border-slate-200' : 'bg-neutral-950 border-white/10'
            }`}
            style={{ 
              transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            <img 
              src={profileImageUrl} 
              alt="Md Rubel Shakh"
              className={`w-full h-full object-cover transition-all duration-1000 ${
                isLightMode ? 'opacity-95' : 'opacity-70 grayscale group-hover:grayscale-0'
              }`}
            />

            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 animate-[biometricMesh_8s_infinite]" 
                 style={{ 
                   backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)',
                   backgroundSize: '20px 20px'
                 }}>
            </div>

            <div className="absolute inset-0 pointer-events-none z-30">
              <div className="absolute left-0 w-full h-px bg-emerald-400 shadow-[0_0_15px_#10b981] animate-[verticalScan_4s_linear_infinite]"></div>
              
              <div className={`absolute bottom-0 left-0 w-full p-4 sm:p-6 backdrop-blur-xl border-t transition-all ${
                isLightMode ? 'bg-white/95 border-slate-200 shadow-lg' : 'bg-black/90 border-white/10'
              }`}>
                <div className={`mono text-[8px] sm:text-[9px] mb-1 tracking-[0.3em] font-bold ${isLightMode ? 'text-emerald-700' : 'text-emerald-400'}`}>
                  IDENTIFIED_SPECIALIST
                </div>
                <div className="flex items-center justify-between">
                  <div className={`mono text-lg sm:text-xl font-bold tracking-tight ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                    RUBEL_SHAKH<span className="opacity-40">.L3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glitch Overlay with the correct image */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none animate-[glitch_7s_infinite_2s]">
                <img src={profileImageUrl} className="w-full h-full object-cover mix-blend-screen" alt="glitch" />
            </div>
          </div>
        </div>

        <div className="md:col-span-7 space-y-6 sm:space-y-8">
          <div className={`p-6 sm:p-8 border rounded-sm transition-all shadow-sm ${
            isLightMode ? 'bg-white border-slate-200' : 'bg-neutral-900/30 border-white/5'
          }`}>
            <p className={`text-lg sm:text-xl md:text-2xl leading-relaxed transition-colors mono font-medium ${isLightMode ? 'text-slate-600' : 'text-gray-300'}`}>
              Experienced Technical Support Specialist with 10+ years' expertise in resolving complex IT issues and managing large-scale infrastructure. Specialist in O365, Intune, and Enterprise Networking architectures.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className={`border p-5 sm:p-6 rounded-sm ${isLightMode ? 'bg-white border-emerald-200' : 'bg-emerald-950/10 border-emerald-900/20'}`}>
              <h3 className={`mono text-[10px] font-bold mb-4 tracking-[0.4em] uppercase ${isLightMode ? 'text-emerald-700' : 'text-emerald-500'}`}>
                CORE_DIRECTIVES
              </h3>
              <ul className="space-y-4 text-[10px] sm:text-[11px] mono text-gray-500">
                {[
                  { h: 'FAST_RESPONSE', p: 'SLA-driven resolution.' },
                  { h: 'DATA_INTEGRITY', p: 'Zero data loss goal.' },
                  { h: 'SYSTEM_AUDITING', p: 'Compliance adherence.' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className={`${isLightMode ? 'text-emerald-600' : 'text-emerald-500'} mr-3 font-bold`}>[0{i+1}]</span>
                    <div>
                      <span className={`block font-bold mb-0.5 ${isLightMode ? 'text-slate-800' : 'text-gray-300'}`}>{item.h}</span>
                      <span className="opacity-80 leading-snug">{item.p}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`border p-5 sm:p-6 rounded-sm ${isLightMode ? 'bg-white border-emerald-200' : 'bg-emerald-950/10 border-emerald-900/20'}`}>
              <h3 className={`mono text-[10px] font-bold mb-4 tracking-[0.4em] uppercase ${isLightMode ? 'text-emerald-700' : 'text-emerald-500'}`}>
                INFRA_TELEMETRY
              </h3>
              <div className="space-y-5">
                {[ { label: 'TRIAGE', pct: '95%' }, { label: 'KNOWLEDGE', pct: '90%' }, { label: 'HARDWARE', pct: '88%' } ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between mono text-[10px] text-gray-500 mb-1.5">
                      <span className="font-bold">{stat.label}</span>
                      <span className="text-emerald-500 font-bold">{stat.pct}</span>
                    </div>
                    <div className={`h-1.5 rounded-full overflow-hidden ${isLightMode ? 'bg-slate-100' : 'bg-black'}`}>
                      <div className="h-full bg-emerald-500 opacity-70" style={{ width: stat.pct }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemProfile;
