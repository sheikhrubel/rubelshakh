
import React, { useState, useEffect } from 'react';

interface HeroProps {
  isLightMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isLightMode }) => {
  const [text, setText] = useState('');
  const fullText = "Infrastructure Specialist dedicated to building resilient systems and delivering world-class IT support operations.";
  const accentColor = 'emerald';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl w-full">
      <div className="flex flex-col space-y-6">
        <div className={`inline-block px-3 py-1 border mono text-xs uppercase tracking-widest animate-pulse transition-all ${
          isLightMode 
            ? `bg-emerald-50 border-emerald-200 text-emerald-700` 
            : `bg-emerald-500/10 border-emerald-500/30 text-emerald-400`
        }`}>
          CONNECTION_ESTABLISHED: RUBEL_SHAKH
        </div>
        
        <h1 className={`text-5xl md:text-7xl font-bold tracking-tighter transition-colors ${
          isLightMode ? 'text-slate-900' : 'text-white'
        }`}>
          Rubel <span className={isLightMode ? 'text-emerald-600' : 'text-emerald-500'}>Shakh</span>
        </h1>
        
        <div className={`flex items-center space-x-3 mono text-lg md:text-xl font-medium transition-colors ${
          isLightMode ? 'text-emerald-700' : 'text-emerald-400'
        }`}>
          <span className="opacity-50">{'>'}</span>
          <span>IT Service Delivery Analyst | Infrastructure Specialist</span>
        </div>

        <div className={`border p-8 rounded-sm relative overflow-hidden backdrop-blur-sm min-h-[120px] transition-all shadow-sm ${
          isLightMode ? 'bg-white border-slate-200' : 'bg-neutral-900/50 border-white/5'
        }`}>
          <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full transition-all ${
            isLightMode ? 'bg-emerald-500/10' : 'bg-emerald-500/5'
          }`}></div>
          <p className={`text-lg md:text-xl leading-relaxed relative z-10 transition-all mono ${isLightMode ? 'text-slate-600' : 'text-gray-400'}`}>
            {text}<span className={`inline-block w-2 h-5 ml-1 animate-pulse ${
              isLightMode ? 'bg-emerald-600' : 'bg-emerald-50'
            }`}></span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
          {[
            { label: 'EXPERIENCE', val: '10+ YEARS' },
            { label: 'CERTIFICATIONS', val: '6+ BADGES' },
            { label: 'AVAILABILITY', val: '24/7' },
            { label: 'SLA_RATING', val: '99.9%' },
          ].map((stat, idx) => (
            <div key={idx} className={`border-l-2 pl-4 py-2 transition-all ${
              isLightMode 
                ? `border-emerald-200` 
                : `border-emerald-500/30`
            }`}>
              <div className="mono text-[10px] text-gray-500 mb-1">{stat.label}</div>
              <div className={`mono text-lg font-bold transition-colors ${isLightMode ? 'text-slate-800' : 'text-gray-200'}`}>
                {stat.val}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
