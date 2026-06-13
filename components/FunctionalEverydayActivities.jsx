import React from 'react';

const FunctionalEverydayActivities = ({ content }) => {
  if (!content) return null;
  
  const { title, description, benefits, closingParagraph } = content;
  
  return (
    <section id="everyday-activities" className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">{title}</h2>
          <p className="text-[#6B7280] max-w-3xl mx-auto leading-relaxed">{description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-gradient-to-br from-[#F9FAFB] to-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-[#2D5F3F] rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[#111827] font-medium leading-relaxed">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-[#E8E3D8] bg-opacity-30 border border-[#2D5F3F] border-opacity-20 rounded-xl p-6 md:p-8 text-center">
          <p className="text-[#111827] font-medium leading-relaxed">{closingParagraph}</p>
        </div>
      </div>
    </section>
  );
};

export default FunctionalEverydayActivities;
