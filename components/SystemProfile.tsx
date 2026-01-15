
import React, { useState, useEffect } from 'react';

interface SystemProfileProps {
  isHumanMode: boolean;
  isLightMode: boolean;
}

const SystemProfile: React.FC<SystemProfileProps> = ({ isHumanMode, isLightMode }) => {
  const accentColor = isHumanMode ? 'blue' : 'emerald';
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isScanning, setIsScanning] = useState(false);

  // Simulate dynamic coordinates and state changes for the HUD
  useEffect(() => {
    const timer = setInterval(() => {
      setCoords({
        x: Math.floor(Math.random() * 999),
        y: Math.floor(Math.random() * 999)
      });
      setIsScanning(prev => !prev);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-5xl">
      <div className="flex items-center space-x-4 mb-12">
        <h2 className={`mono text-2xl font-bold tracking-tighter transition-colors ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
          {isHumanMode ? '02_WHO_I_AM' : '02_SYSTEM_PROFILE'}
        </h2>
        <div className={`flex-1 h-px transition-colors ${isLightMode ? 'bg-slate-200' : (isHumanMode ? 'bg-blue-900/30' : 'bg-emerald-900/30')}`}></div>
      </div>

      <div className="grid md:grid-cols-12 gap-10 items-start">
        {/* UNIQUE BIOMETRIC PHOTO SECTION */}
        <div className="md:col-span-5 relative group">
          {/* Outer Tactical Frame with Coordinate Marks */}
          <div className={`absolute -inset-6 border opacity-10 transition-all group-hover:opacity-30 rounded-lg pointer-events-none ${
            isHumanMode ? 'border-blue-500' : 'border-emerald-500'
          }`}>
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 bg-black text-[6px] mono text-gray-500 tracking-[0.5em]">TOP_AXIS_ALIGNED</span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 bg-black text-[6px] mono text-gray-500 tracking-[0.5em]">BASE_STABILIZED</span>
          </div>
          
          <div className={`relative aspect-[4/5] overflow-hidden border transition-all shadow-2xl group-hover:shadow-[0_0_50px_rgba(52,211,153,0.15)] ${
            isLightMode ? 'bg-white border-slate-200' : 'bg-neutral-950 border-white/10'
          }`}>
            {/* The Actual Photo - Integrated with Subject Identity */}
            <img 
              src="rubel.jpg" 
              alt="Md Rubel Shakh - Professional Identification"
              className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 ${
                isLightMode ? 'opacity-90' : 'opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80'
              }`}
            />

            {/* HUD Overlay Elements */}
            <div className="absolute inset-0 pointer-events-none z-30">
              {/* Scanline Animation */}
              <div className={`absolute left-0 w-full h-[3px] blur-[2px] animate-[scan_4s_ease-in-out_infinite] ${
                isHumanMode ? 'bg-blue-400 shadow-[0_0_15px_#60a5fa]' : 'bg-emerald-400 shadow-[0_0_15px_#34d399]'
              }`}></div>

              {/* Ocular Tracking Crosshair */}
              <div className={`absolute top-[28%] left-[45%] w-12 h-12 border-2 rounded-full transition-all duration-1000 animate-pulse border-white/20 group-hover:scale-110 group-hover:border-red-500/50`}>
                <div className={`absolute top-1/2 left-0 w-full h-[1px] ${isHumanMode ? 'bg-blue-500/30' : 'bg-emerald-500/30'}`}></div>
                <div className={`absolute left-1/2 top-0 w-[1px] h-full ${isHumanMode ? 'bg-blue-500/30' : 'bg-emerald-500/30'}`}></div>
                <div className="absolute -top-4 left-0 text-[6px] mono text-red-400 tracking-tighter whitespace-nowrap opacity-0 group-hover:opacity-100">TARGET_LOCKED: OCULAR_X</div>
              </div>

              {/* Corner Brackets */}
              <div className={`absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 transition-colors ${isHumanMode ? 'border-blue-500' : 'border-emerald-500'}`}></div>
              <div className={`absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 transition-colors ${isHumanMode ? 'border-blue-500' : 'border-emerald-500'}`}></div>
              <div className={`absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 transition-colors ${isHumanMode ? 'border-blue-500' : 'border-emerald-500'}`}></div>
              <div className={`absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 transition-colors ${isHumanMode ? 'border-blue-500' : 'border-emerald-500'}`}></div>

              {/* Floating Data Readouts */}
              <div className="absolute top-8 left-16 mono text-[7px] space-y-1 opacity-60">
                <div className={isLightMode ? 'text-slate-900' : 'text-white'}>LAT: 23.7941° N</div>
                <div className={isLightMode ? 'text-slate-900' : 'text-white'}>LON: 90.4261° E</div>
                <div className={isLightMode ? 'text-slate-900 font-bold' : 'text-emerald-400 font-bold'}>ALT: 12.4m_MSL</div>
              </div>

              {/* Biometric Neural Signature (Waveform) */}
              <div className="absolute bottom-24 left-6 right-6 h-8 flex items-end justify-center space-x-[2px] opacity-30 group-hover:opacity-60 transition-opacity">
                {[20, 45, 30, 60, 80, 40, 50, 70, 35, 55, 90, 40, 60, 45, 30].map((h, i) => (
                  <div key={i} className={`w-[2px] animate-pulse ${isHumanMode ? 'bg-blue-400' : 'bg-emerald-400'}`} style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}></div>
                ))}
              </div>

              {/* Bottom Identity Plate */}
              <div className={`absolute bottom-0 left-0 w-full p-6 backdrop-blur-xl border-t transition-all ${
                isLightMode 
                  ? 'bg-white/95 border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]' 
                  : 'bg-black/90 border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]'
              }`}>
                <div className={`mono text-[9px] mb-1 tracking-[0.3em] font-bold ${
                  isHumanMode ? 'text-blue-600' : (isLightMode ? 'text-emerald-700' : 'text-emerald-400')
                }`}>
                  {isHumanMode ? 'VERIFIED_USER' : 'SUBJECT_IDENTITY'}
                </div>
                <div className="flex items-center justify-between">
                  <div className={`mono text-xl font-bold tracking-tight ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                    RUBEL_SHAKH<span className="opacity-40">.L3</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="mono text-[8px] text-gray-500">AUTH: PASS</span>
                    <div className={`w-2.5 h-2.5 rounded-full animate-ping ${
                      isHumanMode ? 'bg-blue-500' : 'bg-emerald-500'
                    }`}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glitch Overlay Effect on Hover */}
            <div className={`absolute inset-0 transition-opacity opacity-0 group-hover:opacity-10 pointer-events-none mix-blend-screen bg-gradient-to-tr ${
              isHumanMode ? 'from-blue-900 to-transparent' : 'from-emerald-900 to-transparent'
            }`}></div>
          </div>

          {/* Floating Telemetry Chips */}
          <div className={`absolute -right-8 top-12 p-3 border backdrop-blur-2xl rounded shadow-2xl z-40 transition-all group-hover:translate-x-3 hidden md:block ${
            isLightMode ? 'bg-white/90 border-slate-200' : 'bg-neutral-900/90 border-emerald-500/20'
          }`}>
            <div className="mono text-[8px] text-gray-500 mb-2 font-bold uppercase tracking-widest">BIOMETRIC_SYNC</div>
            <div className={`mono text-[11px] font-bold flex items-center space-x-2 ${
              isHumanMode ? 'text-blue-500' : 'text-emerald-400'
            }`}>
              <svg className="w-3 h-3 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>99.2% MATCH</span>
            </div>
          </div>

          <div className={`absolute -left-10 bottom-24 p-3 border backdrop-blur-2xl rounded shadow-2xl z-40 transition-all group-hover:-translate-x-3 hidden md:block ${
            isLightMode ? 'bg-white/90 border-slate-200' : 'bg-neutral-900/90 border-blue-500/20'
          }`}>
            <div className="mono text-[8px] text-gray-500 mb-1">STRESS_TELEMETRY</div>
            <div className="mono text-[10px] font-bold text-blue-400">NOMINAL_0.02%</div>
          </div>
        </div>

        {/* Narrative Description Section */}
        <div className="md:col-span-7 space-y-8">
          <div className={`p-8 border rounded-sm transition-all shadow-sm relative overflow-hidden group/text ${
            isLightMode ? 'bg-white border-slate-200' : 'bg-neutral-900/30 border-white/5'
          }`}>
             {/* Background Decoration */}
            <div className={`absolute -bottom-10 -right-10 w-64 h-64 rounded-full blur-[100px] opacity-10 transition-all group-hover/text:opacity-20 ${
              isHumanMode ? 'bg-blue-500' : 'bg-emerald-500'
            }`}></div>

            <p className={`text-xl md:text-2xl leading-relaxed transition-colors relative z-10 ${
              isHumanMode ? 'font-sans' : 'mono font-medium'
            } ${isLightMode ? 'text-slate-600' : 'text-gray-300'}`}>
              {isHumanMode 
                ? "With over 10 years of experience, I act as the bridge between complex technology and everyday people. I specialize in building stable digital environments and fixing the technical hurdles that slow down great companies."
                : "Experienced Technical Support Specialist with 10+ years' expertise in resolving complex IT issues and managing large-scale infrastructure. Specialist in O365, Intune, and Networking architectures."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className={`border p-6 rounded-sm transition-all shadow-sm ${
              isLightMode 
                ? `bg-white border-${accentColor}-200` 
                : (isHumanMode ? 'bg-blue-950/10 border-blue-900/20' : 'bg-emerald-950/10 border-emerald-900/20')
            }`}>
              <h3 className={`mono text-xs font-bold mb-5 tracking-[0.4em] uppercase transition-colors ${
                isHumanMode ? 'text-blue-600' : (isLightMode ? 'text-emerald-700' : 'text-emerald-500')
              }`}>
                {isHumanMode ? 'MY_PROMISE' : 'CORE_DIRECTIVES'}
              </h3>
              <ul className={`space-y-4 text-[11px] transition-colors ${
                isHumanMode ? 'font-sans text-slate-600' : 'mono text-gray-500'
              }`}>
                {[
                  { h: 'FAST_RESPONSE', p: 'Fixing critical outages within SLA windows.' },
                  { h: 'DATA_INTEGRITY', p: 'Ensuring zero data loss across infrastructure.' },
                  { h: 'TEAM_ENABLING', p: 'Empowering users through structured documentation.' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className={`${isHumanMode ? 'text-blue-500' : (isLightMode ? 'text-emerald-600' : 'text-emerald-500')} mr-3 font-bold`}>[0{i+1}]</span>
                    <div>
                      <span className={`block font-bold mb-0.5 ${isLightMode ? 'text-slate-800' : 'text-gray-300'}`}>{item.h}</span>
                      <span className="opacity-80">{isHumanMode ? item.p.replace(/RESOLVE|INTEGRITY|OPTIMIZE/g, 'Improvement') : item.p}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`border p-6 rounded-sm transition-all shadow-sm ${
              isLightMode 
                ? `bg-white border-${accentColor}-200` 
                : (isHumanMode ? 'bg-blue-950/10 border-blue-900/20' : 'bg-emerald-950/10 border-emerald-900/20')
            }`}>
              <h3 className={`mono text-xs font-bold mb-5 tracking-[0.4em] uppercase transition-colors ${
                isHumanMode ? 'text-blue-600' : (isLightMode ? 'text-emerald-700' : 'text-emerald-500')
              }`}>
                {isHumanMode ? 'WORK_FOCUS' : 'SYSTEM_TELEMETRY'}
              </h3>
              <div className="space-y-6">
                {[
                  { label: isHumanMode ? 'FIXING_THINGS' : 'INCIDENT_TRIAGE', pct: '95%' },
                  { label: isHumanMode ? 'CLEAR_WRITING' : 'KNOWLEDGE_ENGINEERING', pct: '90%' },
                  { label: isHumanMode ? 'TECH_SETUP' : 'HARDWARE_PROVISIONING', pct: '88%' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between mono text-[10px] text-gray-500 mb-2">
                      <span className="font-bold">{stat.label}</span>
                      <span className={isHumanMode ? 'text-blue-500' : 'text-emerald-500'}>{stat.pct}</span>
                    </div>
                    <div className={`h-1.5 rounded-full overflow-hidden transition-colors ${isLightMode ? 'bg-slate-100' : 'bg-black'}`}>
                      <div className={`h-full transition-all duration-1000 ease-out ${
                        isHumanMode ? 'bg-blue-500' : (isLightMode ? 'bg-emerald-600' : 'bg-emerald-500/70')
                      }`} style={{ width: stat.pct }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          10%, 90% { opacity: 0.8; }
          50% { top: 98%; opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default SystemProfile;
