
import React, { useState, useEffect, useRef } from 'react';

interface SystemProfileProps {
  isLightMode: boolean;
}

const SystemProfile: React.FC<SystemProfileProps> = ({ isLightMode }) => {
  const [hexData, setHexData] = useState<string[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate random hex strings for the side stream
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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // max 10deg tilt
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setMousePos({ x, y });
  };

  const resetMouse = () => setMousePos({ x: 0, y: 0 });

  return (
    <div className="max-w-5xl">
      <style>{`
        @keyframes scrollHex {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }
        @keyframes pulseBracket {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes waveform {
          0%, 100% { height: 4px; }
          50% { height: 12px; }
        }
        @keyframes glitch {
          0% { clip-path: inset(80% 0 0 0); transform: translate(-2px, 2px); }
          5% { clip-path: inset(10% 0 85% 0); transform: translate(2px, -2px); }
          10% { clip-path: inset(80% 0 0 0); transform: translate(0); }
          100% { clip-path: inset(80% 0 0 0); transform: translate(0); }
        }
        @keyframes dataFlicker {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.2; }
          70% { opacity: 0.9; }
        }
        .perspective-container {
          perspective: 1000px;
        }
      `}</style>

      <div className="flex items-center space-x-4 mb-12">
        <h2 className={`mono text-2xl font-bold tracking-tighter transition-colors ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
          02_SYSTEM_PROFILE
        </h2>
        <div className={`flex-1 h-px transition-colors ${isLightMode ? 'bg-slate-200' : 'bg-emerald-900/30'}`}></div>
      </div>

      <div className="grid md:grid-cols-12 gap-10 items-start">
        {/* Left Side: Animated Profile Column */}
        <div 
          className="md:col-span-5 relative group perspective-container"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetMouse}
        >
          
          {/* Top Waveform Animation */}
          <div className="absolute -top-12 left-0 w-full flex items-end justify-center space-x-0.5 h-10 opacity-40">
            {Array.from({ length: 30 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-0.5 rounded-full ${isLightMode ? 'bg-emerald-400' : 'bg-emerald-500'}`}
                style={{ 
                  animation: `waveform ${0.3 + Math.random()}s ease-in-out infinite`,
                  animationDelay: `${i * 0.03}s`
                }}
              />
            ))}
          </div>

          {/* Left Side Hex Stream with dynamic flicker */}
          <div className="absolute -left-14 top-0 bottom-0 w-10 hidden lg:flex flex-col items-center overflow-hidden pointer-events-none opacity-20">
            <div className="mono text-[8px] space-y-2 animate-[scrollHex_1.5s_linear_infinite]" style={{ color: isLightMode ? '#059669' : '#34d399' }}>
              {hexData.map((hex, i) => (
                <div key={i} style={{ animation: `dataFlicker ${Math.random() * 2 + 1}s infinite` }}>{hex}</div>
              ))}
              {hexData.map((hex, i) => (
                <div key={`dup-${i}`} style={{ animation: `dataFlicker ${Math.random() * 2 + 1}s infinite` }}>{hex}</div>
              ))}
            </div>
          </div>

          {/* Floating Data Tags */}
          <div className="absolute -right-16 top-1/4 hidden lg:block space-y-4 pointer-events-none z-40">
             <div className={`mono text-[7px] p-1 border animate-pulse ${isLightMode ? 'bg-white border-emerald-200 text-emerald-700' : 'bg-black/50 border-emerald-500/30 text-emerald-400'}`}>
                SYSTEM_ID: L3_PRO
             </div>
             <div className={`mono text-[7px] p-1 border animate-pulse delay-500 ${isLightMode ? 'bg-white border-emerald-200 text-emerald-700' : 'bg-black/50 border-emerald-500/30 text-emerald-400'}`}>
                AUTH_LVL: ALPHA
             </div>
          </div>

          {/* Corner Brackets */}
          <div className="absolute -inset-6 pointer-events-none z-20">
            {/* TL */}
            <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 opacity-30 animate-[pulseBracket_3s_ease-in-out_infinite] ${isLightMode ? 'border-emerald-600' : 'border-emerald-500'}`}></div>
            {/* TR */}
            <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 opacity-30 animate-[pulseBracket_3s_ease-in-out_infinite] delay-75 ${isLightMode ? 'border-emerald-600' : 'border-emerald-500'}`}></div>
            {/* BL */}
            <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 opacity-30 animate-[pulseBracket_3s_ease-in-out_infinite] delay-150 ${isLightMode ? 'border-emerald-600' : 'border-emerald-500'}`}></div>
            {/* BR */}
            <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 opacity-30 animate-[pulseBracket_3s_ease-in-out_infinite] delay-200 ${isLightMode ? 'border-emerald-600' : 'border-emerald-500'}`}></div>
          </div>

          {/* Image Container with 3D Tilt */}
          <div 
            className={`relative aspect-[4/5] overflow-hidden border transition-all duration-300 shadow-2xl group-hover:shadow-emerald-500/20 ${
              isLightMode ? 'bg-white border-slate-200' : 'bg-neutral-950 border-white/10'
            }`}
            style={{ 
              transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            <img 
              src="https://media.licdn.com/dms/image/v2/D4E03AQEpdOVXKeNW5A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710825372600?e=1770249600&v=beta&t=ZG7sXkED-HRboSh7LbDdfQTszGNrB0Lg93m5DJc8LKU" 
              alt="Md Rubel Shakh"
              className={`w-full h-full object-cover transition-all duration-1000 ${
                isLightMode ? 'opacity-90' : 'opacity-60 grayscale group-hover:grayscale-0'
              }`}
            />

            {/* Periodic Glitch Effect Layers */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-40 pointer-events-none animate-[glitch_5s_infinite_2s]">
                <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                    className="w-full h-full object-cover grayscale mix-blend-screen"
                />
            </div>

            {/* Matrix Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#34d399 0.5px, transparent 0.5px)', backgroundSize: '12px 12px' }}></div>

            <div className="absolute inset-0 pointer-events-none z-30" style={{ transform: 'translateZ(20px)' }}>
              {/* Scanline */}
              <div className={`absolute left-0 w-full h-[2px] blur-[1px] animate-[scan_6s_ease-in-out_infinite] bg-emerald-400 shadow-[0_0_10px_#34d399]`}></div>

              {/* Advanced Ocular Tracker - follow mouse slightly? */}
              <div 
                className="absolute top-[28%] left-[45%] w-20 h-20 pointer-events-none"
                style={{ transform: `translate(${mousePos.x * 0.5}px, ${-mousePos.y * 0.5}px)` }}
              >
                <div className={`absolute inset-0 border-2 rounded-full opacity-10 animate-pulse border-white`}></div>
                <div className={`absolute inset-0 border border-emerald-500/20 rounded-full scale-125`}></div>
                <div className={`absolute inset-2 border border-dashed rounded-full animate-[rotateRing_12s_linear_infinite] opacity-40 ${isLightMode ? 'border-emerald-600' : 'border-emerald-400'}`}></div>
                <div className={`absolute inset-4 border border-dotted rounded-full animate-[rotateRing_8s_linear_infinite_reverse] opacity-30 ${isLightMode ? 'border-emerald-600' : 'border-emerald-400'}`}></div>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_15px_red]`}></div>
                
                {/* Tracker Crosshairs */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-px h-2 bg-emerald-500/50"></div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-px h-2 bg-emerald-500/50"></div>
                <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-2 h-px bg-emerald-500/50"></div>
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-2 h-px bg-emerald-500/50"></div>
              </div>

              {/* Data Callouts */}
              <div className="absolute top-8 left-16 mono text-[8px] space-y-1 opacity-80" style={{ transform: 'translateZ(30px)' }}>
                <div className={`px-1 rounded-sm ${isLightMode ? 'bg-emerald-50 text-slate-900' : 'bg-black/50 text-white'}`}>LAT: 23.7941° N</div>
                <div className={`px-1 rounded-sm ${isLightMode ? 'bg-emerald-50 text-slate-900' : 'bg-black/50 text-white'}`}>LON: 90.4261° E</div>
                <div className={`pt-2 flex space-x-1.5`}>
                   {Array.from({length: 5}).map((_, i) => (
                     <div key={i} className={`w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse`} style={{animationDelay: `${i*0.15}s`}}></div>
                   ))}
                </div>
              </div>

              {/* Bottom UI Bar */}
              <div className={`absolute bottom-0 left-0 w-full p-6 backdrop-blur-xl border-t transition-all ${
                isLightMode 
                  ? 'bg-white/95 border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]' 
                  : 'bg-black/90 border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]'
              }`}>
                <div className={`mono text-[9px] mb-1.5 tracking-[0.4em] font-bold ${
                  isLightMode ? 'text-emerald-700' : 'text-emerald-400'
                }`}>
                  SPECIALIST_IDENTIFIED
                </div>
                <div className="flex items-center justify-between">
                  <div className={`mono text-2xl font-bold tracking-tight ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                    RUBEL_SHAKH<span className="opacity-30 text-lg">.L3</span>
                  </div>
                  <div className="flex space-x-1.5">
                    {[20, 40, 60, 80, 100].map((delay, i) => (
                       <div key={i} className={`w-2.5 h-2.5 rounded-sm bg-emerald-500 transition-all duration-500`} style={{ opacity: 0.2 + (i * 0.2), animation: `pulseBracket 2s infinite ${delay}ms` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Professional Summary */}
        <div className="md:col-span-7 space-y-8">
          <div className={`p-8 border rounded-sm transition-all shadow-sm relative overflow-hidden group/text ${
            isLightMode ? 'bg-white border-slate-200' : 'bg-neutral-900/30 border-white/5'
          }`}>
            <div className={`absolute top-0 left-0 w-1.5 h-full bg-emerald-500 opacity-0 group-hover/text:opacity-100 transition-opacity duration-500`}></div>
            <p className={`text-xl md:text-2xl leading-relaxed transition-colors relative z-10 mono font-medium ${isLightMode ? 'text-slate-600' : 'text-gray-300'}`}>
              Experienced Technical Support Specialist with 10+ years' expertise in resolving complex IT issues and managing large-scale infrastructure. Specialist in O365, Intune, and Enterprise Networking architectures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className={`border p-6 rounded-sm transition-all shadow-sm group/card hover:scale-[1.02] ${
              isLightMode ? 'bg-white border-emerald-200' : 'bg-emerald-950/10 border-emerald-900/20'
            }`}>
              <h3 className={`mono text-xs font-bold mb-6 tracking-[0.5em] uppercase transition-colors ${
                isLightMode ? 'text-emerald-700' : 'text-emerald-500'
              }`}>
                CORE_DIRECTIVES
              </h3>
              <ul className={`space-y-5 text-[11px] mono text-gray-500`}>
                {[
                  { h: 'FAST_RESPONSE', p: 'Fixing critical outages within strict SLA windows.' },
                  { h: 'DATA_INTEGRITY', p: 'Ensuring zero data loss across multi-cloud infrastructure.' },
                  { h: 'SYSTEM_AUDITING', p: 'Maintaining compliance through structured asset tracking.' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start group/item">
                    <span className={`${isLightMode ? 'text-emerald-600' : 'text-emerald-500'} mr-4 font-bold transition-all group-hover/item:translate-x-1.5`}>[0{i+1}]</span>
                    <div>
                      <span className={`block font-bold mb-1 ${isLightMode ? 'text-slate-800' : 'text-gray-300'}`}>{item.h}</span>
                      <span className="opacity-80 leading-relaxed">{item.p}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`border p-6 rounded-sm transition-all shadow-sm group/telemetry hover:scale-[1.02] ${
              isLightMode ? 'bg-white border-emerald-200' : 'bg-emerald-950/10 border-emerald-900/20'
            }`}>
              <h3 className={`mono text-xs font-bold mb-6 tracking-[0.5em] uppercase transition-colors ${
                isLightMode ? 'text-emerald-700' : 'text-emerald-500'
              }`}>
                INFRA_TELEMETRY
              </h3>
              <div className="space-y-8">
                {[
                  { label: 'INCIDENT_TRIAGE', pct: '95%', color: 'bg-emerald-500' },
                  { label: 'KNOWLEDGE_ENGINEERING', pct: '90%', color: 'bg-emerald-400' },
                  { label: 'HARDWARE_PROVISIONING', pct: '88%', color: 'bg-emerald-300' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between mono text-[11px] text-gray-500 mb-2.5">
                      <span className="font-bold tracking-tighter">{stat.label}</span>
                      <span className="text-emerald-500 font-bold">{stat.pct}</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden transition-colors ${isLightMode ? 'bg-slate-100' : 'bg-black'}`}>
                      <div className={`h-full transition-all duration-[1500ms] ease-out ${
                        isLightMode ? 'bg-emerald-600' : stat.color + '/70'
                      }`} style={{ width: stat.pct }}></div>
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
