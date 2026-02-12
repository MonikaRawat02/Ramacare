import React, { useEffect, useRef, useState } from 'react';

const WhyChooseUsSection = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  // Use content props or defaults
  const badge = content?.badge || 'Why Choose RamaCare Polyclinic';
  const title = content?.title || 'Dubai\'s Premier Polyclinic for Holistic & Modern Healthcare';
  const description = content?.description || `RamaCare Polyclinic is a trusted, DHA-licensed polyclinic in Dubai, delivering high-quality healthcare with a personalized and compassionate approach. Conveniently located in Jumeirah 1, we combine experienced medical specialists, advanced diagnostic technology, and patient-first care to ensure accurate diagnosis and effective treatment outcomes.

 Whether you're visiting for routine check-ups, specialized medical care, aesthetic treatments, or long-term wellness support, our multidisciplinary team is committed to guiding you toward better health, confidence, and overall quality of life.`;
  const cards = content?.cards || [
    {
      title: 'Complete & Compassionate Medical Care',
      description: 'At RamaCare Polyclinic, we provide high-quality, patient-centered healthcare designed to support your long-term well-being. As a leading Polyclinic in Dubai, our focus is on safe, effective, and result-driven treatments for individuals and families.'
    },
    {
      title: 'DHA-Licensed Expert Doctors',
      description: 'Our experienced DHA-licensed doctors and specialists deliver treatments with precision, care, and strict clinical standards, ensuring your health is always in safe hands.'
    },
    {
      title: 'Personalized Treatment Plans',
      description: 'We understand that every patient is different. That’s why we create customized treatment plans tailored to your medical history, lifestyle, and health goals — providing care that truly meets your needs.'
    },
    {
      title: 'Premium Jumeirah 1 Location',
      description: 'Conveniently located in Jumeirah 1, our modern facility provides a clean, comfortable, and welcoming environment, designed with a focus on patient comfort, privacy, and safety.'
    },
    {
      title: 'Holistic Wellness Approach',
      description: 'We go beyond treating symptoms by supporting overall wellness, stress management, and healthier lifestyle choices for lasting results.'
    },
    {
      title: 'Trusted by Families Across Dubai',
      description: 'Our transparent communication, ethical practices, and consistent outcomes make us a preferred Polyclinic in Dubai for quality healthcare you can trust.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Google Font Import for Inter */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" 
        rel="stylesheet" 
      />

      <section ref={sectionRef} className="relative w-full bg-[#F9FAFB] overflow-hidden font-inter">
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className={`flex flex-col items-center text-center space-y-4 mb-12 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Badge */}
            <div className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm">
              {badge}
            </div>

            {/* Main Heading - Bold, not extrabold */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight max-w-4xl">
              {title}
            </h2>

            {/* Description Text - Normal weight */}
           <p  className="text-left mb-12 lg:mb-14 max-w-3xl mx-auto"
            style={{ 
              color: '#6B7280',
              fontSize: '16px',
              lineHeight: '1.6',
              fontWeight: 400
            }}
          >
  {description}
</p>

          </div>

          {/* Feature Cards Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div 
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative bg-[#E8E3D8] rounded-2xl p-8 flex flex-col transition-all duration-500 ease-out cursor-pointer overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${
                  hoveredCard === index ? 'scale-105 shadow-2xl' : 'shadow-md'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 0.1}s` : '0s'
                }}
              >
                {/* Green Overlay on Hover */}
                <div 
                  className={`absolute inset-0 bg-[#2d5f3f] transition-all duration-500 ease-out ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    borderRadius: '1rem'
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Badge */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${
                    hoveredCard === index 
                      ? 'bg-[#C9A24D] scale-110' 
                      : 'bg-white'
                  }`}>
                    <svg className={`w-6 h-6 transition-colors duration-500 ${
                      hoveredCard === index ? 'text-white' : 'text-[#0A3D2E]'
                    }`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.08 11.42L12 5.5l-5.08 5.92c-.35.41-.35 1.05 0 1.46.35.41.92.41 1.27 0L12 8.5l3.81 4.38c.35.41.92.41 1.27 0 .35-.41.35-1.05 0-1.46z"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                    hoveredCard === index ? 'text-white' : 'text-[#111827]'
                  }`}>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed font-normal transition-colors duration-500 ${
                    hoveredCard === index ? 'text-[#E5E7EB]' : 'text-[#6B7280]'
                  }`}>
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          * {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          }
        `}</style>
      </section>
    </>
  );
};

export default WhyChooseUsSection;