import React from 'react';

const CostAndResults = ({ content }) => {
  if (!content) return null;

  // Default titles
  const costTitle = content.costTitle || 'Treatment Cost in Dubai';
  const resultsTitle = content.resultsTitle || 'Results & Outcomes';
  const hasAdditionalInfo = content?.additionalInfo;
  const hasRelatedTherapies = content?.relatedTherapies;
  const hasRespiratoryWellness = content?.respiratoryWellness;

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
    <section id="cost-and-results" className="w-full bg-white py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {hasCostSection ? (
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Cost Section */}
            <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#E5E7EB]">
              <h3 className="text-lg md:text-xl font-bold text-[#1F2937] mb-4">{costTitle}</h3>
              {content.costFactors?.length > 0 && (
                <>
                  <p className="text-sm text-[#6B7280] mb-4">The cost varies depending on:</p>
                  <ul className="space-y-2 mb-6">
                    {content.costFactors.map((factor, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#2D5F3F] mt-1">•</span>
                        <span className="text-sm text-[#4B5563]">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {content.recommendation && (
                <div className="bg-[#ECFDF5] rounded-xl p-4 border border-[#D1FAE5]">
                  <p className="text-sm font-semibold text-[#065F46] mb-2">💡 Recommendation:</p>
                  <p className="text-sm text-[#065F46]">{content.recommendation}</p>
                </div>
              )}
              {content.costNote && (
                <p className="text-sm text-[#6B7280] mt-4 italic">{content.costNote}</p>
              )}
            </div>

            {/* Results/Aftercare Section */}
            <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#E5E7EB]">
              <h3 className="text-lg md:text-xl font-bold text-[#1F2937] mb-4">{resultsTitle}</h3>
              {content.resultsDescription && (
                <p className="text-sm text-[#6B7280] mb-4">{content.resultsDescription}</p>
              )}
              {content.resultPoints && (
                <ul className="space-y-2 mb-4">
                  {content.resultPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#2D5F3F] mt-1">✓</span>
                      <span className="text-sm text-[#4B5563]">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {content.results?.map((result, index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-[#E5E7EB] mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-[#1F2937]">{result.label}</span>
                    <span className="text-sm font-bold text-[#2D5F3F]">{result.percentage}%</span>
                  </div>
                  <div className="w-full bg-[#E5E7EB] rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              
              {content.resultsNote && (
                <p className="text-sm text-[#6B7280] mt-4 italic">{content.resultsNote}</p>
              )}
            </div>
          </div>
        ) : (
          /* Only Aftercare Section (no cost info) */
          <div className="mb-6">
            <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#E5E7EB]">
              <h3 className="text-lg md:text-xl font-bold text-[#1F2937] mb-4">{resultsTitle}</h3>
              {content.resultsDescription && (
                <p className="text-sm text-[#6B7280] mb-4">{content.resultsDescription}</p>
              )}
              {content.resultPoints && (
                <ul className="space-y-2 mb-4">
                  {content.resultPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#2D5F3F] mt-1">✓</span>
                      <span className="text-sm text-[#4B5563]">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {content.results?.map((result, index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-[#E5E7EB] mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-[#1F2937]">{result.label}</span>
                    <span className="text-sm font-bold text-[#2D5F3F]">{result.percentage}%</span>
                  </div>
                  <div className="w-full bg-[#E5E7EB] rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${result.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              
              {content.resultsNote && (
                <p className="text-sm text-[#6B7280] mt-4 italic">{content.resultsNote}</p>
              )}
            </div>
          </div>
        )}

        {/* Additional Info Section (Diet & Lifestyle) */}
        {hasAdditionalInfo && (
          <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#E5E7EB] mb-6">
            <h3 className="text-lg md:text-xl font-bold text-[#1F2937] mb-4">{content.additionalInfo.title}</h3>
            {content.additionalInfo.description && (
              <p className="text-sm text-[#6B7280] mb-4">{content.additionalInfo.description}</p>
            )}
            {content.additionalInfo.points && (
              <ul className="grid md:grid-cols-2 gap-2 mb-4">
                {content.additionalInfo.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#2D5F3F] mt-1">•</span>
                    <span className="text-sm text-[#4B5563]">{point}</span>
                  </li>
                ))}
              </ul>
            )}
            {content.additionalInfo.internalLinks && (
              <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
                <p className="text-sm text-[#6B7280] mb-2">Related Services:</p>
                <div className="flex flex-wrap gap-2">
                  {content.additionalInfo.internalLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.link}
                      className="inline-block px-3 py-1 bg-[#ECFDF5] text-[#065F46] text-sm rounded-full hover:bg-[#D1FAE5] transition-colors"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Related Therapies or Respiratory Wellness Section */}
        {(hasRelatedTherapies || hasRespiratoryWellness) && (
          <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#E5E7EB]">
            {/* Respiratory Wellness - Simple Text */}
            {hasRespiratoryWellness && (
              <>
                <h3 className="text-lg md:text-xl font-bold text-[#1F2937] mb-4">{content.respiratoryWellness.title}</h3>
                <div className="text-sm text-[#6B7280] leading-relaxed space-y-4">
                  {content.respiratoryWellness.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{renderHTML(paragraph)}</p>
                  ))}
                </div>
              </>
            )}
            
            {/* Related Therapies - Cards */}
            {hasRelatedTherapies && (
              <>
                <h3 className="text-lg md:text-xl font-bold text-[#1F2937] mb-4">{content.relatedTherapies.title}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {content.relatedTherapies.therapies.map((therapy, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-[#E5E7EB] hover:border-[#2D5F3F] transition-colors">
                      <h4 className="text-sm font-semibold text-[#1F2937] mb-2">{therapy.name}</h4>
                      <p className="text-sm text-[#6B7280]">{therapy.description}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CostAndResults;
