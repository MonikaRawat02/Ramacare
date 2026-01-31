import React from 'react';

const TreatmentBenefits = ({ content }) => {
  const defaultBenefits = [
    {
      id: 1,
      title: 'Hair Regrowth',
      percentage: 85,
      description: 'Significant improvement in hair density and thickness'
    },
    {
      id: 2,
      title: 'Reduced Hair Fall',
      percentage: 92,
      description: 'Noticeable decrease in daily hair shedding'
    },
    {
      id: 3,
      title: 'Scalp Health',
      percentage: 88,
      description: 'Improved scalp condition and reduced dandruff'
    },
    {
      id: 4,
      title: 'Hair Strength',
      percentage: 79,
      description: 'Stronger hair strands with reduced breakage'
    },
    {
      id: 5,
      title: 'Natural Shine',
      percentage: 83,
      description: 'Restored natural luster and shine to hair'
    },
    {
      id: 6,
      title: 'Long-term Results',
      percentage: 90,
      description: 'Sustained improvements without side effects'
    }
  ];

  const defaultComparisonData = [
    {
      feature: 'Approach',
      ayurvedic: 'Treats root cause (dosha imbalance)',
      conventional: 'Treats symptoms'
    },
    {
      feature: 'Ingredients',
      ayurvedic: '100% natural herbs & oils',
      conventional: 'Synthetic chemicals'
    },
    {
      feature: 'Side Effects',
      ayurvedic: 'Minimal to none',
      conventional: 'Possible (dryness, irritation)'
    },
    {
      feature: 'Results',
      ayurvedic: 'Gradual, sustainable (3-6 months)',
      conventional: 'Quick but temporary'
    },
    {
      feature: 'Holistic Care',
      ayurvedic: 'Includes diet, lifestyle, stress management',
      conventional: 'Limited to topical application'
    },
    {
      feature: 'Long-term',
      ayurvedic: 'Prevents recurrence',
      conventional: 'May require ongoing use'
    }
  ];

  // Use provided content or defaults
  const sectionTitle = content?.title || 'Clinically-Observed Benefits';
  const sectionDescription = content?.description || 'Evidence-based results from our comprehensive, personalized treatment approach.';
  const benefits = content?.benefits || defaultBenefits;
  const comparisonData = content?.comparisonData || defaultComparisonData;
  const comparisonTitle = content?.comparisonTitle || 'Ayurvedic vs. Conventional Hairfall Treatment';
  const comparisonDescription = content?.comparisonDescription || null;
  
  // Customizable column headers
  const columnHeaders = content?.comparisonHeaders || {
    feature: 'Aspect',
    ourTreatment: 'Ayurvedic Treatment',
    traditional: 'Conventional Treatment'
  };

  return (
    <section id="benefits" className="w-full bg-white py-8 md:py-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-3">
         
            <span className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm">Treatment Benefits</span>
        
        </div>

        {/* Section Heading */}
        <h2 className="md:text-xl lg:text-2xl font-bold text-[#1F2937] text-center mb-3">
          {sectionTitle}
        </h2>

        {/* Section Description */}
        <p className="text-sm md:text-base text-[#6B7280] text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in-up animation-delay-200">
          {sectionDescription}
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-[#FAF8F5] rounded-xl p-3 md:p-4 shadow-sm hover:shadow-xl hover:scale-[1.02] hover:border hover:border-[#047857]/20 border border-transparent transition-all duration-300 cursor-pointer group"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-2 mb-2">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xs md:text-sm font-semibold text-[#1F2937] mb-1 group-hover:bg-gradient-to-r group-hover:from-[#2D5F3F] group-hover:to-[#3A7B51] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-[#6B7280]">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] md:text-xs font-semibold text-[#6B7280] group-hover:bg-gradient-to-r group-hover:from-[#2D5F3F] group-hover:to-[#3A7B51] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {benefit.percentage}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] rounded-full transition-all duration-1000 ease-out group-hover:from-[#3A7B51] group-hover:to-[#2D5F3F] group-hover:shadow-sm"
                    style={{ width: `${benefit.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-6 md:mt-8">
          <h3 className="md:text-xl lg:text-2xl font-bold text-[#1F2937] text-center mb-3">
            {comparisonTitle}
          </h3>
          {comparisonDescription && (
            <p className="text-sm md:text-base text-[#6B7280] text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in-up animation-delay-200">
              {comparisonDescription}
            </p>
          )}
          
          <div className="bg-[#FAF8F5] rounded-xl p-3 md:p-4 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#E5E7EB]">
                    <th className="text-left py-3 px-3 md:px-4 text-[10px] md:text-xs font-bold text-[#111111] w-1/4">
                      {columnHeaders.feature}
                    </th>
                    <th className="text-left py-3 px-3 md:px-4 text-[10px] md:text-xs font-bold text-[#047857] w-[37.5%]">
                      {columnHeaders.ourTreatment}
                    </th>
                    <th className="text-left py-3 px-3 md:px-4 text-[10px] md:text-xs font-bold text-[#4B5563] w-[37.5%]">
                      {columnHeaders.traditional}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#E5E7EB] last:border-b-0 hover:bg-[#F3F4F6] transition-colors duration-200"
                    >
                      <td className="py-3 px-3 md:px-4 text-[10px] md:text-xs text-[#1F2937] font-bold align-top">
                        {row.feature}
                      </td>
                      <td className="py-3 px-3 md:px-4 align-top">
                        <div className="flex items-start gap-2">
                          <svg
                            className="w-3.5 h-3.5 text-[#047857] flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-[10px] md:text-xs text-[#374151] font-medium">
                            {row.ayurvedic}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-3 md:px-4 text-[10px] md:text-xs text-[#6B7280] align-top">
                        {row.conventional}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentBenefits;

