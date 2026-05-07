import React from 'react';

const CostAndResults = ({ content }) => {
  if (!content) return null;

  // Default titles
  const costTitle = content.costTitle || 'Treatment Cost in Dubai';
  const resultsTitle = content.resultsTitle || 'Results & Outcomes';

  return (
    <section id="cost-and-results" className="w-full bg-white py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Cost Section */}
          <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#E5E7EB]">
            <h3 className="text-lg md:text-xl font-bold text-[#1F2937] mb-4">{costTitle}</h3>
            <p className="text-sm text-[#6B7280] mb-4">The cost varies depending on:</p>
            <ul className="space-y-2 mb-6">
              {content.costFactors?.map((factor, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#2D5F3F] mt-1">•</span>
                  <span className="text-sm text-[#4B5563]">{factor}</span>
                </li>
              ))}
            </ul>
            {content.recommendation && (
              <div className="bg-[#ECFDF5] rounded-xl p-4 border border-[#D1FAE5]">
                <p className="text-sm font-semibold text-[#065F46] mb-2">💡 Average Recommendation:</p>
                <p className="text-sm text-[#065F46]">{content.recommendation}</p>
              </div>
            )}
            <p className="text-sm text-[#6B7280] mt-4 italic">{content.costNote}</p>
          </div>

          {/* Results Section */}
          <div className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#E5E7EB]">
            <h3 className="text-lg md:text-xl font-bold text-[#1F2937] mb-4">{resultsTitle}</h3>
            <p className="text-sm text-[#6B7280] mb-4">Patient-Observed Improvements</p>
            <div className="space-y-4">
              {content.results?.map((result, index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-[#E5E7EB]">
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
            </div>
            
            {content.resultsNote && (
              <p className="text-sm text-[#6B7280] mt-4 italic">{content.resultsNote}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostAndResults;
