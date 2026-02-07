import React from 'react';

const ProgramsSection = ({ content }) => {
  // Default programs (Ayurveda - for homepage)
  const defaultPrograms = [
    {
      id: 1,
      title: 'Deep Panchakarma Detox',
      duration: '7-14 Days',
      backgroundColor: 'bg-white',
      topSectionColor: 'bg-[#E8F4ED]',
      durationColor: 'bg-green-100',
      durationTextColor: 'text-green-700',
      icon: 'sparkle',
      benefits: [
        'Complete toxin elimination and cellular rejuvenation',
        'Enhanced immunity and digestive fire (Agni)',
        'Mental clarity and sustained energy levels'
      ]
    },
    {
      id: 2,
      title: 'Chronic Pain Relief Program',
      duration: '10-21 Days',
      backgroundColor: 'bg-white',
      topSectionColor: 'bg-[#FFF5ED]',
      durationColor: 'bg-stone-100',
      durationTextColor: 'text-stone-700',
      icon: 'activity',
      benefits: [
        'Targeted relief for arthritis, back & joint pain',
        'Anti-inflammatory herbal treatments & oil therapies',
        'Long-term pain management strategies'
      ]
    },
    {
      id: 3,
      title: 'Stress & Sleep Balance Therapy',
      duration: '7-14 Days',
      backgroundColor: 'bg-white',
      topSectionColor: 'bg-[#EFF6FF]',
      durationColor: 'bg-blue-100',
      durationTextColor: 'text-blue-700',
      icon: 'moon',
      benefits: [
        'Calming Shirodhara and nervous system regulation',
        'Herbal support for anxiety and insomnia',
        'Lifestyle and meditation guidance'
      ]
    },
    {
      id: 4,
      title: 'Women\'s Wellness Program',
      duration: '14-28 Days',
      backgroundColor: 'bg-white',
      topSectionColor: 'bg-[#FDF2F8]',
      durationColor: 'bg-pink-50',
      durationTextColor: 'text-pink-700',
      icon: 'flower',
      benefits: [
        'Hormonal balance for PCOS, fertility & menopause',
        'Natural cycle regulation and vitality restoration',
        'Personalized nutrition and herbal protocols'
      ]
    },
    {
      id: 5,
      title: 'Digestive & Weight Balance Program',
      duration: '14-21 Days',
      backgroundColor: 'bg-white',
      topSectionColor: 'bg-[#FFF7ED]',
      durationColor: 'bg-orange-50',
      durationTextColor: 'text-orange-700',
      icon: 'scale',
      benefits: [
        'Metabolic reset and healthy weight management',
        'Gut healing for IBS, bloating & inflammation',
        'Sustainable dietary and lifestyle changes'
      ]
    },
    {
      id: 6,
      title: 'Full Rejuvenation Therapy',
      duration: '21-28 Days',
      backgroundColor: 'bg-white',
      topSectionColor: 'bg-[#F5F3FF]',
      durationColor: 'bg-purple-50',
      durationTextColor: 'text-purple-700',
      icon: 'users',
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
  const disclaimer = content?.disclaimer || 'All programs are customized based on your initial consultation, dosha analysis and specific health concerns. Duration and therapies may vary.';

  // Icon mapping
  const iconMap = {
    'sparkle': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 22.5l-.394-1.933a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    'activity': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    'moon': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
    'flower': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313-12.454z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      </svg>
    ),
    'scale': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
    'users': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
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
      return iconMap['sparkle'];
    }
    return icon;
  };

  return (
    <section 
      id="programs" 
      className="relative w-full bg-[#F7F6F1] py-16 overflow-hidden"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Pill Label */}
          <div className="inline-block mb-4">
            <span className="bg-[#E8E3D8] text-[#3d5f4a] px-5 py-2 rounded-full  text-sm tracking-wide">
              {badge}
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[40px] font-bold text-[#111827] leading-tight mb-4 tracking-tight">
            {heading}
          </h2>

          {/* Subtitle */}
          <p className="text-[15px] text-[#6B7280] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {programs.map((program) => (
            <div
              key={program.id}
              className={`${program.backgroundColor || 'bg-white'} rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden border border-gray-100`}
            >
              {/* Top Colored Section with Icon */}
              <div className={`${program.topSectionColor || 'bg-gray-50'} px-6 pt-8 pb-6 flex flex-col items-center`}>
                <div className="text-[#1F2937] mb-4">
                  {renderIcon(program.icon)}
                </div>
                <h3 className="text-[18px] font-semibold text-[#111827] mb-2 text-center leading-snug">
                  {program.title}
                </h3>
                {program.duration && (
                  <div className={`${program.durationColor || 'bg-gray-100'} ${program.durationTextColor || 'text-gray-700'} px-3 py-1 rounded-full text-xs font-medium`}>
                    {program.duration}
                  </div>
                )}
              </div>

              {/* White Bottom Section with Content */}
              <div className="px-6 py-6 flex flex-col flex-grow bg-white">
                {/* Benefits List */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {program.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-[#0F4C3A] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[13px] text-[#4B5563] leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Book Now Button */}
                <div className="mt-auto">
                  <a 
                    href={`https://wa.me/971566597878?text=Hi, I'm interested in the ${encodeURIComponent(program.title)} program. I'd like to know more details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#0F4C3A] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#0a3828] transition-all duration-300 shadow-sm hover:shadow-md text-center"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Box */}
        {disclaimer && (
          <div className="bg-[#FFFBEB] border border-[#FCD34D] rounded-xl p-8 max-w-4xl mx-auto">
            <p className="text-[14px] text-[#4B5563] leading-relaxed text-center">
              <span className="text-[#0F4C3A] font-semibold">Personalized for You:</span>{' '}
              {disclaimer}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramsSection;