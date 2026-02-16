import React from 'react';

const PricingPackages = ({ content }) => {
  // Default packages (fallback if no content provided)
  const defaultPackages = [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For mild to moderate hairfall',
      duration: '6 sessions over 3 months',
      features: [
        'Initial Prakriti assessment',
        '6 Shiro Abhyanga sessions',
        'Herbal hair pack treatments',
        'Customized diet plan',
        'Home care guidance'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For severe hairfall & restoration',
      duration: '12 sessions over 4 months',
      features: [
        'Comprehensive dosha analysis',
        '12 Shirodhara + massage sessions',
        'Nasya Karma therapy (6 sessions)',
        'Personalized herbal formulations',
        'Diet & lifestyle consultation',
        'Monthly progress monitoring'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete transformation program',
      duration: '24 sessions over 6 months',
      features: [
        'All Advanced Package benefits',
        'Panchakarma detoxification',
        'Specialized scalp treatments',
        'Stress management sessions',
        'Quarterly health reviews',
        'Lifetime wellness support'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ];

  // Use provided content or defaults
  const sectionTitle = content?.title || 'Transparent Pricing & Treatment Packages';
  const sectionDescription = content?.description || 'Customized packages based on your specific condition and treatment goals';
  const packages = content?.packages || defaultPackages;

  const handleConsultation = (packageId) => {
    // Scroll to book consultation section
    const element = document.getElementById('book-now');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="pricing" className="w-full bg-white py-8 md:py-12 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8">
          {/* Badge */}
          <div className="flex justify-center mb-3">
           
              <span className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm">Investment in Your Health</span>
           
          </div>

          {/* Main Heading */}
          <h2 className="md:text-xl lg:text-2xl font-bold text-[#1F2937] text-center mb-3">
            {sectionTitle}
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-[#6B7280] text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in-up animation-delay-200">
            {sectionDescription}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-xl p-4 md:p-6 transition-all duration-300 ${
                pkg.isPopular
                  ? 'border-2 md:border-[3px] border-[#2D5F3F] shadow-lg md:scale-105 z-10 hover:shadow-xl hover:-translate-y-1'
                  : 'border-2 border-[#E5E7EB] shadow-sm hover:border-[#2D5F3F]/50 hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {/* Most Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-0.5 left-0 right-0 bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] text-white py-2 px-4 rounded-t-xl flex items-center justify-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-[10px] md:text-xs font-semibold">Most Popular Choice</span>
                </div>
              )}

              {/* Package Header */}
              <div className={pkg.isPopular ? 'mt-6' : ''}>
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#1F2937] mb-1">
                  {pkg.title}
                </h3>
                <p className="text-xs md:text-sm text-[#6B7280] mb-4">
                  {pkg.subtitle}
                </p>

                {/* Duration Badge */}
                <div className="bg-[#FEF3C7] rounded-lg p-2 md:p-3 flex items-center gap-2 mb-4">
                  <svg className="w-4 h-4 text-[#92400E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[10px] md:text-xs font-semibold text-[#92400E]">
                    {pkg.duration}
                  </span>
                </div>

                {/* Package Includes Section */}
                <div className="mb-4">
                  <h4 className="text-xs md:text-sm font-semibold text-[#1F2937] mb-3">
                    Package Includes:
                  </h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-[#047857] mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-[10px] md:text-xs text-[#4B5563] leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <p className="text-[10px] md:text-xs italic text-[#6B7280] text-center my-4 md:my-6">
                  {pkg.pricing}
                </p>

                {/* CTA Button */}
                <button
                  onClick={() => handleConsultation(pkg.id)}
                  className={`w-full bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] text-white py-2.5 md:py-3 px-4 rounded-lg text-xs md:text-sm font-semibold hover:from-[#244D32] hover:to-[#2D5F3F] transition-all duration-300 ${
                    pkg.isPopular
                      ? 'shadow-md hover:shadow-lg hover:scale-105'
                      : 'hover:scale-[1.02]'
                  }`}
                >
                  Get Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;

