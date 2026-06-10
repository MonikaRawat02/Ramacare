import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Zap, 
  Activity, 
  HeartPulse, 
  Sparkles, 
  Clock, 
  Plus, 
  Minus,
  Target,
  Stethoscope,
  Users,
  Award
} from 'lucide-react';

const DetailedServiceContent = ({ content }) => {
  const [expandedSections, setExpandedSections] = useState({});

  if (!content || content.length === 0) return null;

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getIcon = (type, index) => {
    const iconClass = "w-6 h-6 text-[#1a5f3f]";
    switch (type) {
      case 'why-choose': return <ShieldCheck className={iconClass} />;
      case 'suitability': return <Users className={iconClass} />;
      case 'early-intervention': return <Clock className={iconClass} />;
      case 'process': return <Stethoscope className={iconClass} />;
      case 'comparison': return <Award className={iconClass} />;
      default: return <CheckCircle2 className={iconClass} />;
    }
  };

  const renderSection = (section, index) => {
    const isEven = index % 2 === 0;
    const isExpanded = expandedSections[index];
    switch (section.type) {
      case 'why-choose':
      case 'process':
      case 'comparison':
        return (
          <section key={index} className={`py-20 ${isEven ? 'bg-white' : 'bg-gray-50/50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a5f3f]/10 rounded-full text-[#1a5f3f] text-sm font-bold mb-6 uppercase tracking-wider">
                    {getIcon(section.type, 0)}
                    {section.type.replace('-', ' ')}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {section.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#1a5f3f]/20 transition-all duration-300">
                        <div className="w-6 h-6 bg-[#1a5f3f] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-semibold leading-snug">
                          {typeof item === 'string' ? item : item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-[#1a5f3f]/20 to-[#c9a961]/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <div className="relative aspect-[4/3] bg-white rounded-[2rem] border border-gray-100 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-12 text-center">
                      <div className="w-20 h-20 bg-[#1a5f3f]/10 rounded-3xl flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        {getIcon(section.type, 0)}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h4>
                      <p className="text-gray-500 italic leading-relaxed">
                        {section.footerText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case 'suitability':
      case 'early-intervention':
      case 'checklist':
        return (
          <section key={index} className={`py-12 ${isEven ? 'bg-white' : 'bg-gray-50/50'}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`bg-white rounded-[2.5rem] border border-gray-100 shadow-lg overflow-hidden transition-all duration-500 ${isExpanded ? 'ring-2 ring-[#1a5f3f]/20' : ''}`}>
                <button 
                  onClick={() => toggleSection(index)}
                  className="w-full flex items-center justify-between p-8 md:p-10 text-left hover:bg-gray-50/50 transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-[#1a5f3f]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      {getIcon(section.type, 0)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{section.title}</h3>
                      <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
                        Click to {isExpanded ? 'collapse' : 'read more'}
                      </p>
                    </div>
                  </div>
                  <div className={`w-10 h-10 rounded-full border-2 border-gray-100 flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-[#1a5f3f] border-[#1a5f3f] text-white rotate-180' : 'text-gray-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 md:px-10 pb-10 border-t border-gray-50 pt-8">
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {section.description}
                    </p>
                    {section.subtitle && (
                      <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#c9a961] rounded-full"></span>
                        {section.subtitle}
                      </h4>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-gray-50/50 rounded-xl border border-transparent hover:border-[#1a5f3f]/10 transition-all">
                          <CheckCircle2 className="w-5 h-5 text-[#1a5f3f] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{typeof item === 'string' ? item : item.title}</span>
                        </div>
                      ))}
                    </div>
                    {section.footerText && (
                      <div className="mt-10 p-6 bg-[#1a5f3f]/5 rounded-2xl border-l-4 border-[#1a5f3f] italic text-gray-700 leading-relaxed">
                        {section.footerText}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="detailed-service-content overflow-hidden">
      {content.map((section, index) => renderSection(section, index))}
    </div>
  );
};

export default DetailedServiceContent;
