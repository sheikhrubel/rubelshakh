
import React from 'react';

interface ActiveServicesProps {
  isLightMode: boolean;
}

const ActiveServices: React.FC<ActiveServicesProps> = ({ isLightMode }) => {
  const groups = [
    {
      title: 'Infrastructure & Data Center',
      items: [
        'Data Center Server Break-Fix',
        'DIMM & CPU Replacement',
        'Motherboard & Parts Replacement',
        'Teradata IntelliFlex Rack Ops',
        'Structured Cabling (L0/L1)'
      ],
      status: 'RUNNING'
    },
    {
      title: 'Cloud & Identity',
      items: ['O365 Admin', 'Intune Mobile Mgmt', 'SharePoint Architecture', 'Identity Security'],
      status: 'ACTIVE'
    },
    {
      title: 'Security & Networking',
      items: ['Enterprise VPN Config', 'LAN/WAN Optimization', 'Secure Access Control', 'Cybersecurity Triage'],
      status: 'SECURE'
    },
    {
      title: 'IT Operations & Help',
      items: ['Windows/macOS Expert', 'Ticketing Lifecycle', 'Workflow Automation', 'Documentation Lead'],
      status: 'STABLE'
    }
  ];

  const technicalStack = [
    'Rack installation',
    'Server staging',
    'Structured cabling',
    'Hardware installation',
    'Diagnostics',
    'Troubleshooting',
    'ITSM (ticketing)',
    'SLA/KPI adherence',
    'Documentation (SOPs)',
    'Shift/24x7 operations'
  ];

  return (
    <div className="max-w-6xl">
      <div className="flex items-center space-x-4 mb-12">
        <h2 className={`mono text-2xl font-bold tracking-tighter transition-colors ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
          03_ACTIVE_SERVICES
        </h2>
        <div className={`flex-1 h-px transition-all ${isLightMode ? 'bg-slate-200' : 'bg-emerald-900/30'}`}></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups.map((group, idx) => (
          <div key={idx} className={`border rounded p-6 transition-all group shadow-sm ${
            isLightMode 
              ? `bg-white border-slate-200 hover:border-emerald-400` 
              : `bg-neutral-900/50 border-white/5 hover:border-emerald-500/30`
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                isLightMode 
                  ? `bg-emerald-50 border-emerald-100` 
                  : `bg-emerald-500/5 border-emerald-500/20`
              }`}>
                <div className={`w-2 h-2 rounded-full animate-ping ${
                  isLightMode ? 'bg-emerald-600' : 'bg-emerald-500'
                }`}></div>
              </div>
              <span className={`mono text-[10px] font-bold px-2 py-0.5 border transition-all ${
                isLightMode 
                  ? `text-emerald-700 bg-emerald-50 border-emerald-200` 
                  : `text-emerald-500 bg-emerald-500/10 border-emerald-500/20`
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
                  <span className={`${isLightMode ? `text-emerald-400` : `text-emerald-900`} mr-2`}>+</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={`mt-12 border p-6 rounded mono transition-all shadow-sm ${
        isLightMode ? 'bg-white border-slate-200' : 'bg-emerald-950/5 border-emerald-900/20'
      }`}>
        <div className={`text-[11px] mb-6 tracking-widest font-bold transition-colors ${
          isLightMode ? 'text-emerald-700' : 'text-emerald-600'
        }`}>
          TECHNICAL_STACK // OPS_CAPABILITIES
        </div>
        <div className="flex flex-wrap gap-3">
          {technicalStack.map((tech) => (
            <div key={tech} className={`px-3 py-1.5 border text-[10px] transition-all ${
              isLightMode 
                ? 'bg-slate-50 border-slate-200 text-slate-600 hover:border-emerald-300 hover:text-emerald-700' 
                : 'bg-black border-emerald-900/50 text-gray-400 hover:border-emerald-500/50 hover:text-emerald-400'
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
