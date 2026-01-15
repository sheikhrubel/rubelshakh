
import React from 'react';

interface IncidentLogsProps {
  isLightMode: boolean;
}

const IncidentLogs: React.FC<IncidentLogsProps> = ({ isLightMode }) => {
  const accentColor = 'emerald';

  const experiences = [
    {
      company: 'Kontoor Brands – Lee | Wrangler',
      role: 'IT Service Delivery Analyst',
      period: 'Feb 2025 – Present',
      status: 'IN_PROGRESS',
      techTasks: [
        'User account lifecycle management & identity security.',
        'Infrastructure maintenance (Computers, AV, peripherals).',
        'Real-time troubleshooting for network, software, and hardware.',
        'Developing world-class knowledge base documentation.'
      ]
    },
    {
      company: 'Optimizely',
      role: 'Associate Technical Support Engineer',
      period: 'Mar 2024 – Feb 2025',
      status: 'RESOLVED',
      techTasks: [
        'High-quality global support across phone, email, and chat.',
        'Triage and escalation of complex architectural incidents.',
        'Cross-functional collaboration with Infrastructure & Sales.',
        'On-call emergency coverage for mission-critical issues.'
      ]
    },
    {
      company: 'IBM (Teradata IntelliFlex)',
      role: 'Data Center Tech (Project Lead)',
      period: '2022',
      status: 'COMPLETED',
      techTasks: [
        'Server rack setup with complex electrical grounding.',
        'High-density cable management for switches and nodes.',
        'Hardware component replacement (DIMMs, Power Supply).',
        'Liaising with Teradata and IBM GSO teams.'
      ]
    }
  ];

  return (
    <div className="max-w-5xl">
      <div className="flex items-center space-x-4 mb-12">
        <h2 className={`mono text-2xl font-bold tracking-tighter transition-colors ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
          04_INCIDENT_RESOLUTIONS
        </h2>
        <div className={`flex-1 h-px transition-all ${isLightMode ? 'bg-slate-200' : 'bg-emerald-900/30'}`}></div>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className={`relative pl-8 md:pl-12 border-l transition-all group ${
            isLightMode ? 'border-slate-200' : 'border-emerald-900/30'
          }`}>
            <div className={`absolute top-0 left-[-4.5px] w-2 h-2 rounded-full border transition-all ${
              exp.status.includes('PROGRESS')
                ? (isLightMode ? 'bg-emerald-600 border-emerald-800 animate-pulse' : 'bg-emerald-500 border-emerald-900 animate-pulse') 
                : 'bg-gray-400 border-gray-500'
            }`}></div>
            
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <span className={`mono text-[10px] font-bold px-2 py-0.5 border transition-all ${
                isLightMode 
                  ? `text-emerald-700 border-emerald-200 bg-emerald-50` 
                  : `text-emerald-500 border-emerald-900 bg-emerald-950/20`
              }`}>
                {exp.period}
              </span>
              <span className={`mono text-[9px] font-bold px-1.5 py-0.5 rounded-sm transition-all ${
                exp.status.includes('PROGRESS') 
                  ? (isLightMode ? 'bg-emerald-50 text-emerald-600' : 'bg-emerald-900/50 text-emerald-400') 
                  : (isLightMode ? 'bg-slate-100 text-slate-500' : 'bg-gray-900 text-gray-500')
              }`}>{exp.status}</span>
            </div>

            <div className={`border p-6 rounded group-hover:bg-opacity-80 transition-all shadow-sm ${
              isLightMode ? 'bg-white border-slate-200' : 'bg-neutral-900/40 border-white/5'
            }`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className={`mono text-lg font-bold transition-colors ${isLightMode ? 'text-slate-800' : 'text-gray-100'}`}>
                  {exp.company}
                </h3>
                <span className={`mono text-sm font-bold transition-colors ${
                  isLightMode ? 'text-emerald-700' : 'text-emerald-400/80'
                }`}>
                  {exp.role}
                </span>
              </div>
              
              <ul className="space-y-2">
                {exp.techTasks.map((task, i) => (
                  <li key={i} className={`flex items-start text-sm leading-relaxed transition-all mono ${isLightMode ? 'text-slate-600' : 'text-gray-500'}`}>
                    <span className={`mr-2 font-bold ${
                      isLightMode ? 'text-emerald-400' : 'text-emerald-900'
                    }`}>#</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncidentLogs;
