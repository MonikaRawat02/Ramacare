import React from 'react';

const ScientificExplanation = ({ content }) => {
  if (!content) return null;

  const hasAdditionalContent = content?.additionalContent;

  // Helper function to render HTML with styled links
  const renderHTML = (html) => {
    if (!html) return null;
    return (
      <span 
        dangerouslySetInnerHTML={{ 
          __html: html.replace(
            /<a\s/gi, 
            '<a style="color: #2D5F3F; font-weight: 600; text-decoration: underline; transition: color 0.2s;" onmouseover="this.style.color=\'#407D54\'" onmouseout="this.style.color=\'#2D5F3F\'" '
          ) 
        }}
      />
    );
  };

  return (
    <section id="scientific-explanation" className="w-full bg-gradient-to-br from-[#F9FAFB] via-white to-[#ECFDF5] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-3">{content.title || 'Why Gut Health Matters in Ayurveda'}</h2>
        </div>

        {/* Scientific Explanation Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#2D5F3F] hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1F2937]">{content.title || 'Why This Matters in Ayurveda'}</h3>
            </div>
            {content.scientificPoints && (
              <>
                <p className="text-sm font-semibold text-[#2D5F3F] mb-4">Key insights:</p>
                <ul className="space-y-3 mb-6">
                  {content.scientificPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 group/item">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#ECFDF5] rounded-full flex items-center justify-center group-hover/item:bg-[#2D5F3F] transition-colors duration-300">
                        <svg className="w-4 h-4 text-[#2D5F3F] group-hover/item:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm text-[#4B5563] leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {content.patientFeelings && (
              <>
                <p className="text-sm font-semibold text-[#2D5F3F] mb-3">This supports:</p>
                <ul className="space-y-3">
                  {content.patientFeelings.map((feeling, index) => (
                    <li key={index} className="flex items-start gap-3 group/item">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#ECFDF5] rounded-full flex items-center justify-center group-hover/item:bg-[#2D5F3F] transition-colors duration-300">
                        <svg className="w-4 h-4 text-[#2D5F3F] group-hover/item:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm text-[#4B5563] leading-relaxed">{feeling}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          
          {/* Ayurvedic Principle */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#2D5F3F] hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1F2937]">AYURVEDIC PRINCIPLE</h3>
            </div>
            {content.ayurvedicPrinciple && (
              <p className="text-sm text-[#6B7280] mb-6 leading-relaxed">{content.ayurvedicPrinciple}</p>
            )}
            {content.ayurvedicBenefits && (
              <>
                <p className="text-sm font-semibold text-[#2D5F3F] mb-3">This includes:</p>
                <ul className="space-y-3">
                  {content.ayurvedicBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 group/item">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#ECFDF5] rounded-full flex items-center justify-center group-hover/item:bg-[#2D5F3F] transition-colors duration-300">
                        <svg className="w-4 h-4 text-[#2D5F3F] group-hover/item:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm text-[#4B5563] leading-relaxed">
                        {renderHTML(benefit)}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Additional Content Section (if provided) */}
        {hasAdditionalContent && (
          <div className="bg-gradient-to-br from-white to-[#F9FAFB] rounded-2xl p-8 shadow-lg border-2 border-[#E5E7EB] hover:border-[#2D5F3F] transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1F2937]">{content.additionalContent.title}</h3>
            </div>
            {content.additionalContent.description && (
              <p className="text-sm text-[#6B7280] mb-6 leading-relaxed">{content.additionalContent.description}</p>
            )}
            {content.additionalContent.symptoms && (
              <ul className="grid md:grid-cols-2 gap-4 mb-6">
                {content.additionalContent.symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-3 group/item bg-white rounded-xl p-4 border border-[#E5E7EB] hover:border-[#2D5F3F] transition-all duration-300 hover:shadow-md">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#ECFDF5] rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-[#2D5F3F] text-sm font-bold">•</span>
                    </span>
                    <span className="text-sm text-[#4B5563] leading-relaxed">{symptom}</span>
                  </li>
                ))}
              </ul>
            )}
            {content.additionalContent.conclusion && (
              <div className="bg-[#ECFDF5] rounded-xl p-6 border border-[#D1FAE5]">
                <p className="text-sm text-[#065F46] leading-relaxed">
                  {renderHTML(content.additionalContent.conclusion)}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ScientificExplanation;
