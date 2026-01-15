
import React from 'react';

interface ContactProps {
  isHumanMode: boolean;
  isLightMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isHumanMode, isLightMode }) => {
  const accentColor = isHumanMode ? 'blue' : 'emerald';

  const contactLinks = [
    { 
      label: 'EMAIL', 
      val: 'rubel.cmt09@gmail.com', 
      href: 'mailto:rubel.cmt09@gmail.com',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    { 
      label: 'LINKEDIN', 
      val: 'linkedin.com/in/rubelshakh', 
      href: 'https://www.linkedin.com/in/rubelshakh/',
      icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' 
    },
    { 
      label: isHumanMode ? 'WHATSAPP & CALL' : 'COMMS_CHANNEL', 
      val: '+8801922 617 092', 
      href: 'https://wa.me/8801922617092',
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      badge: 'DIRECT_LINE'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="flex flex-col items-center space-y-8">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center border animate-pulse transition-all ${
          isLightMode 
            ? `bg-${accentColor}-50 border-${accentColor}-200` 
            : `bg-${accentColor}-500/10 border-${accentColor}-500/30`
        }`}>
          <svg className={`w-8 h-8 transition-colors ${
            isHumanMode ? 'text-blue-500' : (isLightMode ? 'text-emerald-600' : 'text-emerald-500')
          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>

        <h2 className={`text-4xl font-bold tracking-tighter transition-colors ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
          {isHumanMode ? 'READY TO ' : 'READY FOR '}
          <span className={`transition-colors ${isHumanMode ? 'text-blue-500' : (isLightMode ? 'text-emerald-600' : 'text-emerald-500')}`}>
            {isHumanMode ? 'COLLABORATE' : 'MISSION_DEPLOYMENT'}
          </span>
        </h2>
        
        <p className={`text-lg max-w-xl transition-all ${
          isHumanMode ? 'font-sans' : 'mono'
        } ${isLightMode ? 'text-slate-600' : 'text-gray-400'}`}>
          {isHumanMode 
            ? "I am looking forward to hearing from you. Let's discuss how I can help your team succeed."
            : 'Available for IT Service Delivery, Infrastructure Management, and Data Center operations.'}
        </p>

        <div className="grid md:grid-cols-3 gap-6 w-full">
          {contactLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`p-6 border transition-all rounded group shadow-xs relative overflow-hidden ${
                isLightMode 
                  ? `bg-white border-slate-100 hover:border-${accentColor}-400 hover:shadow-md` 
                  : `bg-neutral-900 border-white/5 hover:border-${accentColor}-500/50 hover:bg-${accentColor}-950/10`
              }`}
            >
              {link.badge && (
                <div className={`absolute top-0 right-0 mono text-[8px] px-2 py-0.5 font-bold transition-all ${
                  isLightMode ? 'bg-emerald-50 text-emerald-600' : 'bg-emerald-500 text-black'
                }`}>
                  {link.badge}
                </div>
              )}
              
              <div className={`mono text-[10px] text-gray-500 mb-2 transition-colors uppercase tracking-widest font-bold ${
                isHumanMode ? 'group-hover:text-blue-500' : (isLightMode ? 'group-hover:text-emerald-600' : 'group-hover:text-emerald-500')
              }`}>{link.label}</div>
              
              <div className="flex items-center justify-center space-x-2">
                {link.label.includes('WHATSAPP') && (
                   <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                   </svg>
                )}
                <div className={`mono text-sm font-bold transition-colors ${isLightMode ? 'text-slate-800' : 'text-gray-200'}`}>
                  {link.val}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="pt-12 flex flex-col items-center space-y-4">
          <div className="mono text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold">
            {isHumanMode ? 'My Location' : 'Location Data'}
          </div>
          <div className={`flex items-center space-x-2 mono text-sm transition-colors ${isLightMode ? 'text-slate-500' : 'text-gray-400'}`}>
            <svg className={`w-4 h-4 transition-colors ${isLightMode ? 'text-slate-400' : 'text-emerald-900'}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className={isHumanMode ? 'font-sans' : ''}>GA#42, Middle Badda Society, Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
