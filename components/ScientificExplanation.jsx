import React from 'react';

const ScientificExplanation = ({ content }) => {
  if (!content) return null;

  return (
    <section id="scientific-explanation" className="w-full bg-gradient-to-b from-[#F9FAFB] to-white py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scientific Explanation */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#E5E7EB] hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#1F2937]">SCIENTIFIC EXPLANATION</h3>
            </div>
            <p className="text-sm text-[#6B7280] mb-4">Modern research suggests that Shirodhara influences:</p>
            <ul className="space-y-2 mb-4">
              {content.scientificPoints?.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#2D5F3F] mt-1">✓</span>
                  <span className="text-sm text-[#4B5563]">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#6B7280] mb-3">This explains why patients feel:</p>
            <ul className="space-y-2">
              {content.patientFeelings?.map((feeling, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#2D5F3F] mt-1">✓</span>
                  <span className="text-sm text-[#4B5563]">{feeling}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Ayurvedic Principle */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#E5E7EB] hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#1F2937]">AYURVEDIC PRINCIPLE</h3>
            </div>
            <p className="text-sm text-[#6B7280] mb-4">{content.ayurvedicPrinciple}</p>
            <p className="text-sm text-[#6B7280] mb-3">Shirodhara directly:</p>
            <ul className="space-y-2">
              {content.ayurvedicBenefits?.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#2D5F3F] mt-1">✓</span>
                  <span className="text-sm text-[#4B5563]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScientificExplanation;
