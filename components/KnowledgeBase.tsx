
import React from 'react';

interface KnowledgeBaseProps {
  isLightMode: boolean;
}

const KnowledgeBase: React.FC<KnowledgeBaseProps> = ({ isLightMode }) => {
  const articles = [
    { id: 'KB-001', title: 'Global SaaS Infrastructure Scaling Protocols', tags: ['SaaS', 'Ops'] },
    { id: 'KB-002', title: 'Data Center Rack Thermal Management optimization', tags: ['DC', 'Hardware'] },
    { id: 'KB-003', title: 'Enterprise O365 Migration: Security & Identity', tags: ['Cloud', 'Security'] },
    { id: 'KB-004', title: 'Teradata IntelliFlex Fault-Tolerance Configuration', tags: ['Teradata', 'DC'] },
    { id: 'KB-005', title: 'Cross-Border Networking: VPN & LAN Optimization', tags: ['Networking', 'L3'] },
  ];

  return (
    <div className="max-w-5xl">
      <div className="flex items-center space-x-4 mb-12">
        <h2 className={`mono text-2xl font-bold tracking-tighter transition-colors ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
          05_KNOWLEDGE_BASE
        </h2>
        <div className={`flex-1 h-px transition-all ${isLightMode ? 'bg-slate-200' : 'bg-emerald-900/30'}`}></div>
      </div>

      <div className={`border rounded overflow-hidden transition-all shadow-sm ${
        isLightMode ? 'bg-white border-slate-200' : 'bg-neutral-950 border-emerald-900/20'
      }`}>
        <div className={`border-b p-4 flex items-center justify-between transition-all ${
          isLightMode 
            ? 'bg-slate-50 border-slate-200' 
            : 'bg-emerald-950/20 border-emerald-900/20'
        }`}>
          <div className={`mono text-xs font-bold transition-colors ${
            isLightMode ? 'text-emerald-700' : 'text-emerald-400'
          }`}>
            DOCUMENTATION_REPOSITORY
          </div>
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-red-400 opacity-50"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400 opacity-50"></div>
            <div className="w-2 h-2 rounded-full bg-green-400 opacity-50"></div>
          </div>
        </div>

        <div className={`divide-y transition-all ${isLightMode ? 'divide-slate-100' : 'divide-emerald-900/10'}`}>
          {articles.map((art) => (
            <div key={art.id} className={`p-4 flex items-center justify-between cursor-pointer group transition-all ${
              isLightMode ? 'hover:bg-slate-50' : 'hover:bg-emerald-500/5'
            }`}>
              <div className="flex items-center space-x-4">
                <span className={`mono text-[10px] text-gray-400 transition-colors ${
                  isLightMode ? 'group-hover:text-slate-900' : 'group-hover:text-emerald-500'
                }`}>{art.id}</span>
                <span className={`text-sm font-medium transition-colors ${isLightMode ? 'text-slate-700 group-hover:text-slate-900' : 'text-gray-300 group-hover:text-white'}`}>
                  {art.title}
                </span>
              </div>
              <div className="flex space-x-2">
                {art.tags.map(t => (
                  <span key={t} className={`mono text-[9px] px-1.5 py-0.5 border rounded-sm transition-all ${
                    isLightMode 
                      ? `border-slate-200 text-slate-500 bg-white` 
                      : 'border-emerald-900/30 text-emerald-600'
                  }`}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`p-8 text-center transition-colors ${isLightMode ? 'bg-slate-50' : 'bg-black/40'}`}>
          <p className="mono text-xs text-gray-500 mb-4 uppercase tracking-widest">Documentation Philosophy</p>
          <blockquote className={`text-xl italic font-serif max-w-2xl mx-auto transition-colors ${
            isLightMode ? 'text-emerald-700' : 'text-emerald-400/80'
          }`}>
            "A technical solution without documentation is merely a temporary fix. True infrastructure excellence is defined by knowledge transfer."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
