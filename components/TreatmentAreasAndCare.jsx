import React from 'react';

const TreatmentAreasAndCare = ({ content, sectionId = 'treatment-areas-care' }) => {
  if (!content) return null;

  // Helper to render HTML content with styled links
  const renderHTMLContent = (html, className = 'text-sm text-[#6B7280] leading-relaxed') => {
    if (!html) return null;
    
    const hasHTML = /<[^>]*>/.test(html);
    
    if (hasHTML) {
      return (
        <div className={className}>
          <div dangerouslySetInnerHTML={{ 
            __html: html.replace(
              /<a\s/gi, 
              '<a class="font-semibold text-[#2D5F3F] hover:text-[#407D54] transition-colors duration-200" '
            ) 
          }} />
        </div>
      );
    }
    
    return <p className={className}>{html}</p>;
  };

  return (
    <section id={sectionId} className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Treatment Areas */}
        {content.treatmentAreas && (
          <div className="mb-12 md:mb-16 bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] py-12 md:py-16 px-4 md:px-8 rounded-2xl">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2937] text-center mb-2 md:mb-3">
              {content.treatmentAreas.title}
            </h2>
            {content.treatmentAreas.subtitle && (
              <h3 className="text-lg md:text-xl font-semibold text-[#2D5F3F] text-center mb-4 md:mb-6">
                {content.treatmentAreas.subtitle}
              </h3>
            )}
            {content.treatmentAreas.intro && renderHTMLContent(content.treatmentAreas.intro, 'text-sm md:text-base text-[#4B5563] leading-relaxed text-center max-w-4xl mx-auto mb-8 md:mb-10')}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1280px] mx-auto">
              {content.treatmentAreas.areas.map((area, index) => (
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
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-[#1F2937] mb-3 group-hover:text-[#2D5F3F] transition-colors duration-300">
                    {area.title}
                  </h3>
                  {renderHTMLContent(area.description, 'text-sm text-[#6B7280] leading-relaxed')}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Before & After Care */}
        {content.beforeAfterCare && (
          <div className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F2937] text-center mb-4 md:mb-6">
              {content.beforeAfterCare.title}
            </h2>
            {content.beforeAfterCare.intro && renderHTMLContent(content.beforeAfterCare.intro, 'text-sm md:text-base text-[#4B5563] leading-relaxed text-center max-w-4xl mx-auto mb-8 md:mb-10')}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Before Treatment */}
              {content.beforeAfterCare.before && (
                <div className="bg-gradient-to-br from-[#EFF6FF] to-white rounded-xl p-6 md:p-8 border-2 border-[#3B82F6]/20">
                  <div className="flex items-center gap-3 mb-4">
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
                      {content.beforeAfterCare.before.title}
                    </h3>
                  </div>
                  {content.beforeAfterCare.before.subtitle && renderHTMLContent(content.beforeAfterCare.before.subtitle, 'text-sm text-[#6B7280] leading-relaxed mb-4')}
                  {content.beforeAfterCare.before.heading && (
                    <h4 className="text-base font-semibold text-[#1F2937] mb-3">
                      {content.beforeAfterCare.before.heading}
                    </h4>
                  )}
                  <ul className="space-y-3">
                    {content.beforeAfterCare.before.items.map((item, index) => (
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
                  {content.beforeAfterCare.before.conclusion && renderHTMLContent(content.beforeAfterCare.before.conclusion, 'text-sm text-[#1E40AF] leading-relaxed mt-4 font-medium')}
                </div>
              )}

              {/* After Treatment */}
              {content.beforeAfterCare.after && (
                <div className="bg-gradient-to-br from-[#ECFDF5] to-white rounded-xl p-6 md:p-8 border-2 border-[#2D5F3F]/20">
                  <div className="flex items-center gap-3 mb-4">
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
                      {content.beforeAfterCare.after.title}
                    </h3>
                  </div>
                  {content.beforeAfterCare.after.subtitle && renderHTMLContent(content.beforeAfterCare.after.subtitle, 'text-sm text-[#6B7280] leading-relaxed mb-4')}
                  {content.beforeAfterCare.after.heading && (
                    <h4 className="text-base font-semibold text-[#1F2937] mb-3">
                      {content.beforeAfterCare.after.heading}
                    </h4>
                  )}
                  <ul className="space-y-3">
                    {content.beforeAfterCare.after.items.map((item, index) => (
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
                  {content.beforeAfterCare.after.conclusion && renderHTMLContent(content.beforeAfterCare.after.conclusion, 'text-sm text-[#047857] leading-relaxed mt-4 font-medium')}
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default TreatmentAreasAndCare;
