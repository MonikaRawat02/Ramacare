import React from 'react';

const ProgramsSection = ({ content }) => {
  // Default programs (Ayurveda - for homepage)
  const defaultPrograms = [
    {
      id: 1,
      title: 'Deep Panchakarma Detox',
      backgroundColor: 'bg-white',
      topSectionColor: 'bg-green-50',
      durationColor: 'bg-green-100',
      durationTextColor: 'text-green-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      benefits: [
        'Complete toxin elimination and cellular rejuvenation',
        'Enhanced immunity and digestive fire (Agni)',
        'Mental clarity and sustained energy levels'
      ]
    },
    {
      id: 2,
      title: 'Chronic Pain Relief Program',
      backgroundColor: 'bg-white',
      topSectionColor: 'bg-stone-50',
      durationColor: 'bg-stone-100',
      durationTextColor: 'text-stone-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      benefits: [
        'Targeted relief for arthritis, back & joint pain',
        'Anti-inflammatory herbal treatments & oil therapies',
        'Long-term pain management strategies'
      ]
    },
    {
      id: 3,
      title: 'Stress & Sleep Balance Therapy',
      backgroundColor: 'bg-white',
      topSectionColor: 'bg-blue-50',
      durationColor: 'bg-blue-100',
      durationTextColor: 'text-blue-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      benefits: [
        'Calming Shirodhara and nervous system regulation',
        'Herbal support for anxiety and insomnia',
        'Lifestyle and meditation guidance'
      ]
    },
    {
      id: 4,
      title: 'Women\'s Wellness Program',
      duration: '14–28 Days',
      backgroundColor: 'bg-white',
      topSectionColor: 'bg-pink-50',
      durationColor: 'bg-pink-50',
      durationTextColor: 'text-pink-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8M10 10l4 4M14 10l-4 4" />
        </svg>
      ),
      benefits: [
        'Hormonal balance for PCOS, fertility & menopause',
        'Natural cycle regulation and vitality restoration',
        'Personalized nutrition and herbal protocols'
      ]
    },
    {
      id: 5,
      title: 'Digestive & Weight Balance Program',
      duration: '14–21 Days',
      backgroundColor: 'bg-white',
      topSectionColor: 'bg-orange-50',
      durationColor: 'bg-orange-50',
      durationTextColor: 'text-orange-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm-1 8.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S12.83 9 12 9s-1.5.67-1.5 1.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v2" />
        </svg>
      ),
      benefits: [
        'Metabolic reset and healthy weight management',
        'Gut healing for IBS, bloating & inflammation',
        'Sustainable dietary and lifestyle changes'
      ]
    },
    {
      id: 6,
      title: 'Full Rejuvenation Therapy',
      duration: '21–28 Days',
      backgroundColor: 'bg-white',
      topSectionColor: 'bg-purple-50',
      durationColor: 'bg-purple-50',
      durationTextColor: 'text-purple-700',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      benefits: [
        'Complete body-mind renewal and anti-aging',
        'Vitality enhancement and skin radiance',
        'Preventive wellness and longevity support'
      ]
    }
  ];

  // Use content props if provided, otherwise use defaults
  const badge = content?.badge || 'Signature Programs';
  const heading = content?.heading || 'Curated Healing Journeys';
  const subtitle = content?.subtitle || 'Immersive treatment programs designed for transformative results and lasting wellness.';
  const programs = content?.programs || defaultPrograms;
  const disclaimer = content?.disclaimer || 'All programs are customized based on your initial consultation, dosha analysis, and specific health concerns. Duration and therapies may vary.';

  // Icon mapping for string-based icon names
  const iconMap = {
    'sparkle': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    'heart': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    'moon': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    'user': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    'scale': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    'users': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    'smile': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    'activity': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    'stethoscope': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    'zap': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    'target': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  // Helper function to render icon
  const renderIcon = (icon) => {
    if (typeof icon === 'string') {
      const IconComponent = iconMap[icon.toLowerCase()];
      if (IconComponent) {
        return IconComponent;
      }
      // Default icon if not found
      return iconMap['sparkle'];
    }
    // If icon is a React component, return as is
    return icon;
  };

  return (
    <section 
      id="programs" 
      className="relative w-full bg-[#F7F6F1] py-8 sm:py-10 lg:py-12 overflow-hidden"
      style={{ fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10">
          {/* Pill Label */}
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm">
              {badge}
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight max-w-4xl mb-4">
            {heading}
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-[#4B5563] leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6 sm:mb-8 lg:mb-10">
          {programs.map((program) => (
            <div
              key={program.id}
              className={`${program.backgroundColor || 'bg-white'} rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-[4px] hover:brightness-[1.03] flex flex-col overflow-hidden`}
            >
              {/* Top Colored Section with Icon */}
              <div className={`${program.topSectionColor || program.backgroundColor || 'bg-gray-50'} px-4 sm:px-5 pt-4 sm:pt-5 pb-3 flex flex-col items-center`}>
                <div className="text-[#0A3D2E] mb-3 transition-transform duration-300 hover:scale-105">
                  {renderIcon(program.icon)}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#111111] mb-2 text-center">
                  {program.title}
                </h3>
              </div>

              {/* White Bottom Section with Content */}
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 flex flex-col flex-grow">
                {/* Benefits List */}
                <ul className="space-y-2 mb-4 flex-grow">
                  {program.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-[#0A3D2E] flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[#4B5563] text-[10px] sm:text-xs leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Book Now Button */}
                <div className="mt-auto">
                  <div className="relative group inline-flex w-full">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1b5e3f] via-[#2d7a56] to-[#1b5e3f] opacity-80 blur-[2px] group-hover:opacity-100 transition-opacity duration-300" />
                    <a 
                      href={`https://wa.me/971566597878?text=Hi, I'm interested in the ${encodeURIComponent(program.title)} program. I'd like to know more details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full bg-[#2d7a56] text-white px-4 py-2 rounded-full font-semibold text-xs sm:text-sm hover:bg-[#1b5e3f] transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:shadow-[#2d7a56]/60 text-center block"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Box */}
        {disclaimer && (
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto">
            <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed text-center">
              <span className="text-[#0A3D2E] font-semibold">Personalized for You:</span>{' '}
              {disclaimer}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramsSection;