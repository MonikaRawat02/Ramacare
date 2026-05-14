import React from 'react';

const HairRemovalAdditionalInfo = ({ content }) => {
  const defaultContent = {
    treatmentAreas: {
      title: 'Laser Hair Removal Areas We Treat',
      areas: [
        {
          title: 'Facial Laser Hair Removal',
          description: 'Laser treatment for areas such as the upper lip, chin, jawline, cheeks, and sideburns helps reduce unwanted facial hair and improve skin smoothness.'
        },
        {
          title: 'Underarm Laser Hair Removal',
          description: 'Underarm laser treatments help reduce dark shadows, ingrown hairs, and frequent shaving needs while supporting smoother skin.'
        },
        {
          title: 'Bikini & Brazilian Laser Hair Removal',
          description: 'Laser hair reduction for the bikini area provides a long-term alternative to waxing and shaving while helping minimize irritation and ingrown hairs.'
        },
        {
          title: 'Leg & Arm Laser Hair Removal',
          description: 'Laser treatment for larger body areas such as the arms and legs helps support long-lasting hair reduction and smoother skin texture.'
        },
        {
          title: 'Chest & Back Laser Hair Removal',
          description: 'Laser treatments for the chest and back are commonly chosen by individuals seeking convenient long-term body hair reduction.'
        }
      ]
    },
    beforeAfterCare: {
      title: 'Before & After Care for Laser Hair Removal',
      before: {
        title: 'Before Treatment',
        items: [
          'Avoid waxing or threading before sessions',
          'Shave the treatment area if advised',
          'Avoid excessive sun exposure',
          'Inform the specialist about active skin concerns'
        ]
      },
      after: {
        title: 'After Treatment',
        items: [
          'Avoid direct sun exposure temporarily',
          'Use gentle skincare products',
          'Avoid excessive heat or steam for 24–48 hours',
          'Follow post-treatment care instructions carefully'
        ]
      }
    },
    multipleSessions: {
      title: 'Why Are Multiple Laser Hair Removal Sessions Needed?',
      description: 'Hair grows in different growth cycles, and laser treatment is most effective during the active growth phase. Multiple sessions are usually recommended to target hair follicles effectively over time and support long-term hair reduction results.',
      factors: [
        'treatment area',
        'hair thickness',
        'skin tone',
        'hormonal factors',
        'hair growth patterns'
      ]
    },
    medicalEvaluation: {
      title: 'Who May Need Medical Evaluation Before Laser Hair Removal?',
      intro: 'Laser hair removal may not be suitable for everyone. A professional consultation is recommended for individuals who:',
      conditions: [
        'Have active skin infections',
        'Experience certain skin sensitivities',
        'Are pregnant',
        'Have recent sunburn or tanning',
        'Use specific photosensitive medications'
      ],
      conclusion: 'Our specialists perform a detailed assessment before treatment to ensure safety and suitability.'
    }
  };

  const data = content || defaultContent;

  return (
    <section id="hair-removal-info" className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Treatment Areas */}
        <div id="treatment-areas" className="mb-12 md:mb-16 bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] py-12 md:py-16 px-4 md:px-8 rounded-2xl">
          <h2 className="text-xl md:text-2xl font-bold text-[#1F2937] text-center mb-8 md:mb-10">
            {data.treatmentAreas.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1280px] mx-auto">
            {data.treatmentAreas.areas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#2D5F3F]/30 group"
              >
                <div className="w-12 h-12 bg-[#2D5F3F]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#2D5F3F]/20 transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-[#2D5F3F]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-[#1F2937] mb-3 group-hover:text-[#2D5F3F] transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Before & After Care */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#1F2937] text-center mb-8 md:mb-10">
            {data.beforeAfterCare.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Before Treatment */}
            <div className="bg-gradient-to-br from-[#EFF6FF] to-white rounded-xl p-6 md:p-8 border-2 border-[#3B82F6]/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#3B82F6] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#1F2937]">
                  {data.beforeAfterCare.before.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {data.beforeAfterCare.before.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
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
                    <span className="text-sm text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After Treatment */}
            <div className="bg-gradient-to-br from-[#ECFDF5] to-white rounded-xl p-6 md:p-8 border-2 border-[#2D5F3F]/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#2D5F3F] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#1F2937]">
                  {data.beforeAfterCare.after.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {data.beforeAfterCare.after.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#2D5F3F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
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
                    <span className="text-sm text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Multiple Sessions */}
        <div className="mb-12 md:mb-16">
          <div className="bg-gradient-to-br from-[#FEF3C7] to-[#FFFBEB] rounded-2xl p-8 md:p-12 border-2 border-[#F59E0B]/20">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2937] mb-6">
              {data.multipleSessions.title}
            </h2>
            <p className="text-sm md:text-base text-[#374151] leading-relaxed mb-6">
              {data.multipleSessions.description}
            </p>
            <p className="text-sm md:text-base text-[#374151] font-semibold mb-4">
              The number of sessions required may vary depending on:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {data.multipleSessions.factors.map((factor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center shadow-sm border border-[#F59E0B]/20"
                >
                  <span className="text-sm font-medium text-[#92400E]">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Medical Evaluation */}
        <div className="bg-gradient-to-br from-[#FEE2E2] to-[#FFF1F2] rounded-2xl p-8 md:p-12 border-2 border-[#EF4444]/20">
          <h2 className="text-xl md:text-2xl font-bold text-[#1F2937] mb-6">
            {data.medicalEvaluation.title}
          </h2>
          <p className="text-sm md:text-base text-[#374151] leading-relaxed mb-6">
            {data.medicalEvaluation.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {data.medicalEvaluation.conditions.map((condition, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white rounded-lg p-4 border border-[#EF4444]/20"
              >
                <div className="w-6 h-6 bg-[#EF4444] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <span className="text-sm text-[#374151] font-medium">{condition}</span>
              </div>
            ))}
          </div>
          <p className="text-sm md:text-base text-[#374151] leading-relaxed font-medium">
            {data.medicalEvaluation.conclusion}
          </p>
        </div>

      </div>
    </section>
  );
};

export default HairRemovalAdditionalInfo;
