
import React from 'react';

interface ActiveServicesProps {
  isHumanMode: boolean;
  isLightMode: boolean;
}

const ActiveServices: React.FC<ActiveServicesProps> = ({ isHumanMode, isLightMode }) => {
  const accentColor = isHumanMode ? 'blue' : 'emerald';

  const groups = [
    {
      title: isHumanMode ? 'Hardware & Workplace' : 'Infrastructure & Data Center',
      items: isHumanMode ? [
        'Advanced Server Repairs',
        'Component Fixes (Memory & CPUs)',
        'Main Circuit Board Replacement',
        'Professional Rack Setup',
        'Physical Device Deployment'
      ] : [
        'Data Center Server Break-Fix',
        'DIMM & CPU Replacement',
        'Motherboard & Parts Replacement',
        'Teradata IntelliFlex Rack Ops',
        'Structured Cabling (L0/L1)'
      ],
      status: isHumanMode ? 'ONLINE' : 'RUNNING'
    },
    {
      title: isHumanMode ? 'Cloud & Team Tools' : 'Cloud & Identity',
      items: ['Email & Office 365', 'Mobile Device Setup', 'Collaborative Sites', 'Secure Logins'],
      status: isHumanMode ? 'SECURE' : 'ACTIVE'
    },
    {
      title: isHumanMode ? 'Safety & Security' : 'Security & Networking',
      items: ['Internet & Wi-Fi', 'Safety Protocols', 'Secure Access', 'Risk Prevention'],
      status: isHumanMode ? 'SHIELDED' : 'SECURE'
    },
    {
      title: isHumanMode ? 'Daily Tech Help' : 'End-User & OS Support',
      items: ['Windows & Mac Expert', 'Mobile Help', 'Team Training', 'Ticket Management'],
      status: isHumanMode ? 'STABLE' : 'STABLE'
    }
  ];

  return (
    <div className="max-w-6xl">
      <div className="flex items-center space-x-4 mb-12">
        <h2 className={`mono text-2xl font-bold tracking-tighter transition-colors ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
          {isHumanMode ? '03_HOW_I_HELP' : '03_ACTIVE_SERVICES'}
        </h2>
        <div className={`flex-1 h-px transition-all ${isLightMode ? 'bg-slate-200' : (isHumanMode ? 'bg-blue-900/30' : 'bg-emerald-900/30')}`}></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups.map((group, idx) => (
          <div key={idx} className={`border rounded p-6 transition-all group shadow-sm ${
            isLightMode 
              ? `bg-white border-slate-200 hover:border-${accentColor}-400` 
              : `bg-neutral-900/50 border-white/5 hover:border-${accentColor}-500/30`
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                isLightMode 
                  ? `bg-${accentColor}-50 border-${accentColor}-100` 
                  : `bg-${accentColor}-500/5 border-${accentColor}-500/20`
              }`}>
                <div className={`w-2 h-2 rounded-full animate-ping ${
                  isHumanMode ? 'bg-blue-500' : (isLightMode ? 'bg-emerald-600' : 'bg-emerald-500')
                }`}></div>
              </div>
              <span className={`mono text-[10px] font-bold px-2 py-0.5 border transition-all ${
                isLightMode 
                  ? `text-${accentColor}-700 bg-${accentColor}-50 border-${accentColor}-200` 
                  : `text-${accentColor}-500 bg-${accentColor}-500/10 border-${accentColor}-500/20`
              }`}>
                {group.status}
              </span>
            </div>
            
            <h3 className={`mono text-sm font-bold mb-4 transition-colors ${isLightMode ? 'text-slate-800' : 'text-gray-100'}`}>
              {group.title}
            </h3>
            
            <div className="space-y-2">
              {group.items.map((item, i) => (
                <div key={i} className={`flex items-center text-xs mono transition-colors ${
                  isLightMode ? 'text-slate-500 group-hover:text-slate-900' : 'text-gray-500 group-hover:text-gray-300'
                }`}>
                  <span className={`${isLightMode ? `text-${accentColor}-400` : `text-${accentColor}-900`} mr-2`}>+</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={`mt-12 border p-6 rounded mono transition-all shadow-sm ${
        isLightMode ? 'bg-white border-slate-200' : (isHumanMode ? 'bg-blue-950/5 border-blue-900/20' : 'bg-emerald-950/5 border-emerald-900/20')
      }`}>
        <div className={`text-[11px] mb-4 tracking-widest font-bold transition-colors ${
          isHumanMode ? 'text-blue-600' : (isLightMode ? 'text-emerald-700' : 'text-emerald-600')
        }`}>
          {isHumanMode ? 'SOFTWARE_FAMILIARITY' : 'DEVELOPMENT_CAPABILITIES'}
        </div>
        <div className="flex flex-wrap gap-4">
          {['ServiceNow', 'ZenDesk', 'Microsoft Teams', 'PowerShell', 'Python', 'SQL', 'HTML/CSS'].map((tech) => (
            <div key={tech} className={`px-3 py-1 bg-black border text-[10px] text-gray-400 transition-all ${
              isLightMode 
                ? 'bg-slate-50 border-slate-200 text-slate-500 font-medium' 
                : (isHumanMode ? 'border-blue-900/50' : 'border-emerald-900/50')
            }`}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveServices;
