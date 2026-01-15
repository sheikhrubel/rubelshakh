
import React from 'react';

interface CredentialsProps {
  isHumanMode: boolean;
  isLightMode: boolean;
}

const Credentials: React.FC<CredentialsProps> = ({ isHumanMode, isLightMode }) => {
  const accentColor = isHumanMode ? 'blue' : 'emerald';

  const certifications = [
    'Microsoft O365 Administration',
    'SharePoint Administration',
    'Ethical Hacking Essentials (EHE)',
    'CCNA R&S',
    'Python with GUI',
    'Azure Fundamentals',
    'Linux System Admin',
    'Cybersecurity Introduction'
  ];

  return (
    <div className="max-w-6xl">
      <div className="flex items-center space-x-4 mb-12">
        <h2 className={`mono text-2xl font-bold tracking-tighter transition-colors ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
          {isHumanMode ? '06_BADGES_&_CREDITS' : '06_SYSTEM_CREDENTIALS'}
        </h2>
        <div className={`flex-1 h-px transition-all ${isLightMode ? 'bg-slate-200' : (isHumanMode ? 'bg-blue-900/30' : 'bg-emerald-900/30')}`}></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className={`mono text-[10px] tracking-widest uppercase mb-4 transition-colors font-bold ${
            isHumanMode ? 'text-blue-600' : (isLightMode ? 'text-emerald-700' : 'text-emerald-600')
          }`}>
            {isHumanMode ? 'Education History' : 'Academic Background'}
          </div>
          <div className="space-y-4">
            <div className={`border-l-4 p-5 rounded-r transition-all shadow-sm ${
              isLightMode 
                ? `bg-white border-${accentColor}-500 border-y border-r border-slate-100` 
                : 'bg-neutral-900/30 border-emerald-500'
            }`}>
              <div className="flex justify-between items-start mb-2">
                <h4 className={`font-bold transition-colors ${isLightMode ? 'text-slate-800' : 'text-gray-100'}`}>
                  Bachelor of Computer Science & Engineering
                </h4>
                <span className={`mono text-[10px] px-2 py-0.5 transition-all ${
                  isLightMode ? `text-${accentColor}-700 bg-${accentColor}-50` : `text-${accentColor}-500 bg-${accentColor}-500/10`
                }`}>2021</span>
              </div>
              <p className="mono text-xs text-gray-500 mb-2">Lovely Professional University – INDIA</p>
              <div className="flex items-center space-x-2">
                <div className={`w-full h-1 rounded-full overflow-hidden transition-colors ${isLightMode ? 'bg-slate-100' : 'bg-gray-900'}`}>
                  <div className={`h-full transition-all duration-1000 ${
                    isHumanMode ? 'w-[75%] bg-blue-500' : (isLightMode ? 'w-[75%] bg-emerald-600' : 'w-[75%] bg-emerald-500')
                  }`}></div>
                </div>
                <span className="mono text-[10px] text-gray-400">75%</span>
              </div>
            </div>

            <div className={`border-l-4 p-5 rounded-r transition-all shadow-sm ${
              isLightMode 
                ? 'bg-white border-slate-300 border-y border-r border-slate-50' 
                : 'bg-neutral-900/30 border-emerald-900'
            }`}>
              <div className="flex justify-between items-start mb-2">
                <h4 className={`font-bold transition-colors ${isLightMode ? 'text-slate-800' : 'text-gray-100'}`}>
                  Diploma in Computer Engineering
                </h4>
                <span className="mono text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-sm">2014</span>
              </div>
              <p className="mono text-xs text-gray-500">Khulna Polytechnic Institute - BANGLADESH</p>
            </div>
          </div>
        </div>

        <div>
          <div className={`mono text-[10px] tracking-widest uppercase mb-4 transition-colors font-bold ${
            isHumanMode ? 'text-blue-600' : (isLightMode ? 'text-emerald-700' : 'text-emerald-600')
          }`}>
            {isHumanMode ? 'Professional Skills' : 'Verified Certifications'}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className={`flex items-center space-x-3 p-3 border transition-all cursor-default shadow-xs rounded-xs ${
                isLightMode 
                  ? 'bg-white border-slate-100 hover:border-slate-300' 
                  : 'bg-neutral-950 border-emerald-900/10 hover:border-emerald-500/30'
              }`}>
                <svg className={`w-4 h-4 flex-shrink-0 transition-colors ${
                  isHumanMode ? 'text-blue-500' : (isLightMode ? 'text-emerald-600' : 'text-emerald-500')
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className={`mono text-[10px] font-bold uppercase leading-tight transition-colors ${isLightMode ? 'text-slate-600' : 'text-gray-400'}`}>
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
