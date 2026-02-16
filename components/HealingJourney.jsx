'use client';

import React, { useState, useEffect } from 'react';

const HealingJourney = ({ content }) => {
  const [activeStep, setActiveStep] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.timeline-step').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Default steps (fallback if no content provided)
  const defaultSteps = [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation (60 min)',
      duration: 'Step 1',
      description: 'Comprehensive assessment including Prakriti analysis, medical history, dosha evaluation, and scalp examination.',
      keyActivities: [
        'Health questionnaire',
        'Pulse diagnosis (Nadi Pariksha)',
        'Scalp analysis',
        'Personalized plan creation'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Detoxification Phase',
      duration: 'Step 2',
      description: 'Gentle cleansing to remove Ama (toxins) and prepare body for treatment.',
      keyActivities: [
        'Dietary modifications',
        'Herbal supplements',
        'Oil pulling (if needed)',
        'Lifestyle adjustments'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Active Treatment Phase',
      duration: 'Step 3',
      description: 'Intensive Ayurvedic therapies including Shirodhara, herbal applications, and Panchakarma procedures.',
      keyActivities: [
        'Shirodhara therapy',
        'Herbal hair packs',
        'Scalp massages',
        'Medicated oil applications'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Maintenance & Follow-up',
      duration: 'Step 4',
      description: 'Sustaining results with periodic treatments and lifestyle support.',
      keyActivities: [
        'Monthly check-ins',
        'Seasonal treatments',
        'Ongoing support',
        'Long-term wellness'
      ],
      side: 'left'
    }
  ];

  // Use provided content or defaults
  const sectionTitle = content?.title || 'Your Healing Journey: Step by Step';
  const sectionDescription = content?.description || 'Transparent, structured approach to ensure optimal results and patient comfort.';
  const steps = content?.steps || defaultSteps;

  // Icon mapping function
  const getIcon = (stepId) => {
    const icons = [
      <svg key="icon1" className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>,
      <svg key="icon2" className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>,
      <svg key="icon3" className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>,
      <svg key="icon4" className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ];
    return icons[(stepId - 1) % icons.length];
  };

  return (
    <section id="how-it-works" className="w-full bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] py-12 md:py-20 overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-[#3A7B51] to-[#2D5F3F] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-gradient-to-br from-[#2D5F3F]/60 to-[#3A7B51]/60 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Badge with animation */}
        <div className="flex justify-center mb-3">
         
           
            <span className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm">Treatment Process</span>
         
        </div>

        {/* Section Heading with animation */}
        <h2 className="md:text-xl lg:text-2xl font-bold text-[#1F2937] text-center mb-3">
          {sectionTitle}
        </h2>

        {/* Section Description */}
        <p className="text-sm md:text-base text-[#6B7280] text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in-up animation-delay-200">
          {sectionDescription}
        </p>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Gradient Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 top-0 bottom-0 bg-gradient-to-b from-[#2D5F3F] via-[#3A7B51] to-[#2D5F3F] z-0 opacity-30"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 top-0 bottom-0 bg-gradient-to-b from-transparent via-[#3A7B51] to-transparent z-0 animate-pulse"></div>
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-16 relative">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                id={`step-${step.id}`}
                className={`timeline-step relative transition-all duration-700 ${
                  isVisible[`step-${step.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Timeline Circle with glow effect */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-full border-4 border-white shadow-2xl flex items-center justify-center z-20 transition-all duration-500 ${
                  activeStep === step.id ? 'scale-125 shadow-[#3A7B51]/50' : 'scale-100'
                }`}>
                  <span className="text-white font-bold text-sm md:text-base">{step.id}</span>
                  {activeStep === step.id && (
                    <div className="absolute inset-0 rounded-full bg-[#3A7B51] animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Step Content */}
                <div className="pt-8 md:pt-10">
                  {step.side === 'right' ? (
                    // Even index (0, 2): Description on left, Visual on right
                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                      {/* Description Card on left */}
                      <div className="w-full md:w-[45%] md:pr-10 flex justify-end">
                        <div className={`group bg-white border border-[#E5E7EB] rounded-2xl p-5 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 relative w-full overflow-hidden ${
                          activeStep === step.id ? 'transform scale-105 border-[#3A7B51]' : ''
                        }`}>
                          {/* Gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9]/0 to-[#C8E6C9]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                          
                          {/* Decorative corner accent */}
                          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#C8E6C9] to-transparent opacity-30 rounded-bl-full"></div>

                          {/* Duration Badge */}
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] text-white text-xs font-semibold rounded-full mb-3 shadow-md relative z-10">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {step.duration}
                          </div>

                          {/* Step Number Large - Background element */}
                          <div className="absolute top-4 right-4 text-6xl md:text-7xl font-bold text-[#2D5F3F] opacity-5 leading-none pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">{step.number}</div>

                          {/* Title with icon */}
                          <h3 className="text-base md:text-lg font-bold text-[#1F2937] mb-3 relative z-10 flex items-start gap-2">
                            <span className="flex-1">{step.title}</span>
                          </h3>

                          {/* Description */}
                          <p className="text-xs md:text-sm text-[#6B7280] leading-relaxed mb-4 relative z-10">
                            {step.description}
                          </p>

                          {/* Key Activities */}
                          {step.keyActivities && step.keyActivities.length > 0 && (
                            <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-xl p-4 shadow-inner border border-[#F3F4F6] relative z-10 hover:shadow-md transition-shadow duration-300">
                              <h4 className="text-xs md:text-sm font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51]"></div>
                                Key Activities
                              </h4>
                              <ul className="space-y-2">
                                {step.keyActivities.map((activity, idx) => (
                                  <li key={idx} className="flex items-start gap-2 group/item">
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#C8E6C9] to-[#A5D6A7] flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                                      <svg className="w-3 h-3 text-[#2D5F3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                      </svg>
                                    </div>
                                    <span className="text-xs md:text-sm text-[#374151] flex-1">{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                      {/* Visual Card on right */}
                      <div className="w-full md:w-[45%] md:pl-10">
                        <div className={`group bg-gradient-to-br from-white to-[#F9FAFB] rounded-2xl p-8 md:p-10 shadow-xl flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-500 min-h-[240px] relative overflow-hidden ${
                          activeStep === step.id ? 'transform scale-105' : ''
                        }`}>
                          {/* Animated background circles */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#2D5F3F] rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-[#3A7B51] rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
                          </div>

                          {/* Icon Container with enhanced animation */}
                          <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#C8E6C9] to-[#A5D6A7] rounded-full flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-ping"></div>
                            <div className="w-10 h-10 md:w-12 md:h-12 text-[#2D5F3F] relative z-10">
                              {getIcon(step.id)}
                            </div>
                          </div>
                          
                          {/* Step Number with gradient */}
                          <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#2D5F3F] via-[#3A7B51] to-[#2D5F3F] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">{step.number}</span>
                          
                          {/* Progress indicator */}
                          <div className="flex gap-1.5 mt-3">
                            {[...Array(4)].map((_, i) => (
                              <div
                                key={i}
                                className={`h-1 rounded-full transition-all duration-500 ${
                                  i < step.id ? 'w-8 bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51]' : 'w-4 bg-[#E5E7EB]'
                                }`}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Odd index (1, 3): Visual on left, Description on right
                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                      {/* Visual Card on left */}
                      <div className="w-full md:w-[45%] md:pr-10">
                        <div className={`group bg-gradient-to-br from-white to-[#F9FAFB] rounded-2xl p-8 md:p-10 shadow-xl flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-500 min-h-[240px] relative overflow-hidden ${
                          activeStep === step.id ? 'transform scale-105' : ''
                        }`}>
                          {/* Animated background circles */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#2D5F3F] rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-[#3A7B51] rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
                          </div>

                          {/* Icon Container with enhanced animation */}
                          <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#C8E6C9] to-[#A5D6A7] rounded-full flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-ping"></div>
                            <div className="w-10 h-10 md:w-12 md:h-12 text-[#2D5F3F] relative z-10">
                              {getIcon(step.id)}
                            </div>            
                          </div>
                          
                          {/* Step Number with gradient */}
                          <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#2D5F3F] via-[#3A7B51] to-[#2D5F3F] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">{step.number}</span>
                          
                          {/* Progress indicator */}
                          <div className="flex gap-1.5 mt-3">
                            {[...Array(4)].map((_, i) => (
                              <div
                                key={i}
                                className={`h-1 rounded-full transition-all duration-500 ${
                                  i < step.id ? 'w-8 bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51]' : 'w-4 bg-[#E5E7EB]'
                                }`}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Description Card on right */}
                      <div className="w-full md:w-[45%] md:pl-10">
                        <div className={`group bg-white border border-[#E5E7EB] rounded-2xl p-5 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 relative w-full overflow-hidden ${
                          activeStep === step.id ? 'transform scale-105 border-[#3A7B51]' : ''
                        }`}>
                          {/* Gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9]/0 to-[#C8E6C9]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                          
                          {/* Decorative corner accent */}
                          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#C8E6C9] to-transparent opacity-30 rounded-br-full"></div>

                          {/* Duration Badge */}
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] text-white text-xs font-semibold rounded-full mb-3 shadow-md relative z-10">  
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {step.duration}
                          </div>

                          {/* Step Number Large - Background element */}
                          <div className="absolute top-4 left-4 text-6xl md:text-7xl font-bold text-[#2D5F3F] opacity-5 leading-none pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">{step.number}</div>

                          {/* Title */}
                          <h3 className="text-base md:text-lg font-bold text-[#1F2937] mb-3 relative z-10 flex items-start gap-2">
                            <span className="flex-1">{step.title}</span>
                          </h3>

                          {/* Description */}
                          <p className="text-xs md:text-sm text-[#6B7280] leading-relaxed mb-4 relative z-10">
                            {step.description}
                          </p>

                          {/* Key Activities */}
                          {step.keyActivities && step.keyActivities.length > 0 && (
                            <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-xl p-4 shadow-inner border border-[#F3F4F6] relative z-10 hover:shadow-md transition-shadow duration-300">
                              <h4 className="text-xs md:text-sm font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51]"></div>
                                Key Activities
                              </h4>
                              <ul className="space-y-2">
                                {step.keyActivities.map((activity, idx) => (
                                  <li key={idx} className="flex items-start gap-2 group/item">
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#C8E6C9] to-[#A5D6A7] flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                                      <svg className="w-3 h-3 text-[#2D5F3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                      </svg>
                                    </div>
                                    <span className="text-xs md:text-sm text-[#374151] flex-1">{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS animations - Now using global styles */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -20px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(20px, 20px) scale(1.05);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </section>
  );
};

export default HealingJourney;