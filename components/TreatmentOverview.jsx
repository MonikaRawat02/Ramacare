import React, { useState } from 'react';
import { Leaf, Target, Clock, Users } from 'lucide-react';

const TreatmentOverview = ({ content, subcategoryName }) => {
  const [activeTab, setActiveTab] = useState('problem');
  const [expandedCard, setExpandedCard] = useState(null);

  const iconMap = {
    Leaf,
    Target,
    Clock,
    Users
  };

  const getIconComponent = (icon, title) => {
    if (typeof icon === 'string' && iconMap[icon]) {
      const IconCmp = iconMap[icon];
      return <IconCmp className="w-6 h-6" />;
    }
    if (icon) {
      return icon;
    }
    const t = title?.toLowerCase() || '';
    if (t.includes('duration')) return <Clock className="w-6 h-6" />;
    if (t.includes('who')) return <Users className="w-6 h-6" />;
    if (t.includes('what')) return <Leaf className="w-6 h-6" />;
    return <Target className="w-6 h-6" />;
  };

  // Default content (fallback if no content prop provided)
  const defaultLeftCards = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'What is it?',
      description: 'A holistic, natural approach to treating hairfall by addressing root causes through dosha balancing, herbal therapies, and lifestyle modifications.'
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Who is it for?',
      description: 'Individuals experiencing excessive shedding, thinning, premature greying, dandruff, or stress-related hairfall. Suitable for both men and women.'
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Duration',
      description: 'Initial improvements in 4-6 weeks. Significant results after 3-4 months. Complete restoration in 6-12 months depending on severity.'
    }
  ];

  const defaultRootCauses = [
    {
      id: 1,
      title: 'Pitta Aggravation',
      description: 'Excess heat in the body travels to scalp, inflaming follicles',
      severity: 'High',
      severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
    },
    {
      id: 2,
      title: 'Vata Imbalance',
      description: 'Causes dryness, poor circulation, and brittleness',
      severity: 'Medium',
      severityColor: 'bg-[#FED7AA] text-[#9A3412]'
    },
    {
      id: 3,
      title: 'Ama Accumulation',
      description: 'Digestive toxins block nutrient absorption to hair roots',
      severity: 'High',
      severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
    },
    {
      id: 4,
      title: 'Stress & Anxiety',
      description: 'Depletes Ojas (vital essence), disrupts hair growth cycles',
      severity: 'Medium',
      severityColor: 'bg-[#FED7AA] text-[#9A3412]'
    },
    {
      id: 5,
      title: 'Poor Diet',
      description: 'Lacking essential nutrients, excessive spicy/sour foods',
      severity: 'Medium',
      severityColor: 'bg-[#FED7AA] text-[#9A3412]'
    }
  ];

  const defaultQuickFacts = [
    { label: 'Treatment Type', value: 'Non-invasive' },
    { label: 'Anesthesia', value: 'Not required' },
    { label: 'Recovery Time', value: 'Immediate' },
    { label: 'Side Effects', value: 'Minimal to none' }
  ];

  const defaultApproachCards = [
    {
      id: 1,
      title: 'Constitutional Assessment',
      description: 'Detailed Prakriti analysis to identify your unique imbalances',
      hasLearnMore: true,
      expandedContent: 'Our expert Ayurvedic physicians conduct a comprehensive analysis of your Prakriti (constitutional type) and Vikriti (current imbalances) to understand the root cause of your hairfall.'
    },
    {
      id: 2,
      title: 'External Therapies',
      description: 'Shirodhara, Shiro Abhyanga, herbal hair packs with medicated oils',
      hasLearnMore: false,
      expandedContent: null
    },
    {
      id: 3,
      title: 'Panchakarma Detox',
      description: 'Deep cleansing to eliminate Ama and reset dosha balance',
      hasLearnMore: true,
      expandedContent: 'Panchakarma treatments help remove accumulated toxins (Ama) from the body, restoring natural dosha balance and promoting healthy hair growth from within.'
    },
    {
      id: 4,
      title: 'Customized Diet Plan',
      description: 'Personalized nutrition to cool Pitta and nourish hair tissue',
      hasLearnMore: true,
      expandedContent: 'Based on your dosha analysis, we create a personalized diet plan that includes Pitta-cooling foods and hair-nourishing nutrients to support healthy hair growth.'
    },
    {
      id: 5,
      title: 'Lifestyle Modifications',
      description: 'Stress management, sleep optimization, daily routines (Dinacharya)',
      hasLearnMore: false,
      expandedContent: null
    }
  ];

  // Use provided content or defaults
  const leftCards = content?.leftCards || defaultLeftCards;
  const rootCauses = content?.rootCauses || defaultRootCauses;
  const quickFacts = content?.quickFacts || defaultQuickFacts;
  const approachCards = content?.approachCards || defaultApproachCards;
  const sectionTitle = content?.title || `Understanding ${subcategoryName || 'Ayurvedic Hairfall Treatment'} in Dubai`;
  
  // Problem tab intro box
  const problemIntro = content?.problemIntro || {
    title: 'Root Causes of Hairfall (Ayurvedic View)',
    description: 'In Ayurveda, hairfall (Khalitya) stems from Pitta dosha imbalance creating excess heat, often aggravated by Vata, weakening hair follicles from the root.'
  };
  
  // Solution tab intro box
  const solutionIntro = content?.solutionIntro || {
    title: 'Our Ayurvedic Approach',
    description: 'We address hairfall comprehensively by restoring dosha balance, eliminating toxins, and nourishing from within using time-tested Ayurvedic principles.'
  };

  return (
    <section id="treatment-info" className="w-full bg-gradient-to-b from-[#F9F7F4] to-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Treatment Overview Badge */}
        <div className="flex mb-3">
          <span className="">
            <span className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm">Treatment Overview</span>  
          </span>
        </div>

        {/* Main Heading */}
        <h2 className=" md:text-xl lg:text-2xl font-bold text-[#1F2937] mb-3 md:mb-6">
          {sectionTitle}
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
          {/* Left Column */}
          <div className="space-y-4 md:space-y-5">
            {/* Info Cards */}
            {leftCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#D1FAE5]"
              >
                <div className="flex items-start gap-3">
                  {/* Icon Container */}
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-lg flex items-center justify-center flex-shrink-0 text-white shadow-md">
                    <div className="w-5 h-5 md:w-6 md:h-6">
                      {getIconComponent(card.icon, card.title)}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-sm md:text-base font-semibold text-[#1F2937] mb-1.5">
                      {card.title}
                    </h3>
                    {card.sections && card.sections.length > 0 ? (
  <div className="space-y-4">
    {card.sections.map((section, sIndex) => (
      <div key={sIndex}>
        <h4 className="text-xs md:text-sm font-semibold text-[#1F2937] mb-1.5">
          {section.heading}
        </h4>

        <ul className="text-xs md:text-sm text-[#1F2937] leading-relaxed space-y-1.5 list-none">
          {section.items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-[#047857] mt-1.5 flex-shrink-0 font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
) : card.listItems && card.listItems.length > 0 ? (
                    
                      <div>
                        {card.description && (
                          <p className="text-xs md:text-sm text-[#1F2937] leading-relaxed mb-2">
                            {card.description}
                          </p>
                        )}
                        <ul className="text-xs md:text-sm text-[#1F2937] leading-relaxed space-y-1.5 list-none">
                          {card.listItems.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-[#047857] mt-1.5 flex-shrink-0 font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p className="text-xs md:text-sm text-[#1F2937] leading-relaxed">
                        {card.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Facts Section */}
            <div className="bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-xl p-4 md:p-5 shadow-lg">
              <h3 className="text-sm md:text-base font-bold text-white mb-3">
                Quick Facts
              </h3>
              <div className="space-y-2.5">
                {quickFacts.map((fact, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-[10px] md:text-xs font-medium text-white/90">
                      {fact.label}
                    </span>
                    <span className="text-[10px] md:text-xs text-white font-semibold">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Tabs */}
            <div className="flex border-b border-[#E5E7EB] mb-4 md:mb-5 bg-gradient-to-r from-[#F5F3F0] to-[#FAF8F5] rounded-t-lg p-1">
              <button
                onClick={() => setActiveTab('problem')}
                className={`relative px-3 md:px-5 py-2 text-xs md:text-sm font-medium transition-all duration-300 rounded-t-lg ${
                  activeTab === 'problem'
                    ? 'bg-white shadow-sm'
                    : 'bg-transparent text-[#6B7280] hover:text-[#1F2937] hover:bg-white/50'
                }`}
              >
                <span className={activeTab === 'problem' ? 'bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] bg-clip-text text-transparent' : ''}>The Problem</span>
                {activeTab === 'problem' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51]"></span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('solution')}
                className={`relative px-3 md:px-5 py-2 text-xs md:text-sm font-medium transition-all duration-300 rounded-t-lg ${
                  activeTab === 'solution'
                    ? 'bg-white shadow-sm'
                    : 'bg-transparent text-[#6B7280] hover:text-[#1F2937] hover:bg-white/50'
                }`}
              >
                <span className={activeTab === 'solution' ? 'bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] bg-clip-text text-transparent' : ''}>Our Solution</span>
                {activeTab === 'solution' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#047857] to-[#059669]"></span>
                )}
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'problem' && (
              <div>
                {/* Root Causes Box */}
                <div className="bg-[#FEF2F2] border border-red-200 rounded-xl p-3 md:p-4 mb-4 shadow-sm">
                  <h3 className="text-sm md:text-base font-bold text-[#7F1D1D] mb-2">
                    {problemIntro.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#7F1D1D]">
                    {problemIntro.description}
                  </p>
                </div>

                {/* Cause Cards */}
                <div className="space-y-3">
                  {rootCauses.map((cause) => (
                    <div
                      key={cause.id}
                      className="bg-white border-l-4 border-[#FF6B6B] rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h4 className="text-xs md:text-sm font-semibold text-[#1F2937] mb-1">
                            {cause.title}
                          </h4>
                          <p className="text-[10px] md:text-xs text-[#1F2937]">
                            {cause.description}
                          </p>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[9px] md:text-[10px] font-medium ${cause.severityColor} whitespace-nowrap shadow-sm`}>
                          {cause.severity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'solution' && (
              <div>
                {/* Intro Box */}
                <div className="bg-gradient-to-br from-[#E8F5F0] to-[#D1FAE5] rounded-xl p-3 md:p-4 mb-4 shadow-sm border border-[#A7F3D0]/30">
                  <h3 className="text-base md:text-lg font-bold bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] bg-clip-text text-transparent mb-2"> 
                    {solutionIntro.title}
                  </h3>
                  <p className="text-xs bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] bg-clip-text text-transparent leading-relaxed">
                    {solutionIntro.description}
                  </p>
                </div>

                {/* Treatment Cards */}
                <div className="space-y-3">
                  {approachCards.map((card) => (
                    <div
                      key={card.id}
                      className={`bg-white border-2 rounded-xl p-3 md:p-4 transition-all duration-300 shadow-sm ${
                        expandedCard === card.id
                          ? 'border-[#10B981] bg-gradient-to-br from-[#F0FDF4] to-white shadow-md'
                          : 'border-[#E5E7EB] hover:border-[#10B981] hover:shadow-md hover:-translate-y-0.5'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {/* Left Border Accent */}
                        <div className="w-0.5 h-full bg-gradient-to-b from-[#2D5F3F] to-[#3A7B51] rounded-full flex-shrink-0"></div>
                        
                        {/* Content */}
                        <div className="">
                          <h4 className="text-xs md:text-sm font-semibold text-[#1F2937] mb-1.5">
                            {card.title}
                          </h4>
                          <p className="text-[10px] md:text-xs text-[#6B7280] mb-2">
                            {card.description}
                          </p>
                          
                          {/* Expanded Content */}
                          {expandedCard === card.id && card.expandedContent && (
                            <div className="mt-2 pt-2 border-t border-[#E5E7EB]">
                              <p className="text-[10px] md:text-xs text-[#1F2937]">
                                {card.expandedContent}
                              </p>
                            </div>
                          )}

                          {/* Learn More Link - Only show if hasLearnMore is true AND expandedContent exists, is not empty, and has meaningful content (at least 30 characters) */}
                          {card.hasLearnMore && card.expandedContent && card.expandedContent.trim().length >= 30 && (
                            <button
                              onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
                              className="flex items-center gap-1.5 text-[10px] md:text-xs font-medium bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] bg-clip-text text-transparent hover:from-[#3A7B51] hover:to-[#2D5F3F] transition-all duration-300 mt-2"
                            >
                              <span>{expandedCard === card.id ? 'Show less' : 'Learn more'}</span>
                              <svg 
                                className={`w-3 h-3 transition-transform ${expandedCard === card.id ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          )}
                        </div>

                        {/* Checkmark Icon */}
                        <div className="absolute top-2 right-2 w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0]  rounded-full flex items-center justify-center  shadow-sm">
                          <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#047857]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentOverview;
