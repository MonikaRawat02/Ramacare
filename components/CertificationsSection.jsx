import React from 'react';

const CertificationsSection = ({ content }) => {
  // Default certifications (fallback if no content provided)
  const defaultCertifications = [
    {
      id: 1,
      title: 'DHA Licensed',
      subtitle: 'Dubai Health Authority'
    },
    {
      id: 2,
      title: 'AYUSH Certified',
      subtitle: 'Ministry of Ayurveda'
    },
    {
      id: 3,
      title: 'ISO 9001:2015',
      subtitle: 'Quality Management'
    },
    {
      id: 4,
      title: 'NABH Accredited',
      subtitle: 'Healthcare Standards'
    },
    {
      id: 5,
      title: 'Member NAMA',
      subtitle: 'National Association'
    }
  ];

  // Use provided content or defaults
  const sectionTitle = content?.title || 'Certifications & Accreditations';
  const certifications = content?.certifications || defaultCertifications;

  return (
    <>
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <h2 className="text-base md:text-lg  text-[#2d5f3f] text-center mb-8 md:mb-10">
            {sectionTitle}
          </h2>

          {/* Certifications Grid - Desktop: 5 columns, Mobile: scroll */}
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex md:grid md:grid-cols-5 gap-4 md:gap-5 justify-start md:justify-center min-w-max md:min-w-0">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex-shrink-0 w-44 md:w-auto bg-[#F5F3EE] rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md cursor-pointer"
                >
                  {/* Icon Container - Award/Ribbon Icon */}
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 text-[#2d5f3f]">       
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      {/* Award ribbon icon */}
                      <circle cx="12" cy="9" r="4" strokeLinecap="round" strokeLinejoin="round" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 13l-3 8 3-1 3 1-1-4" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13l3 8-3-1-3 1 1-4" />
                    </svg>
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-sm font-semibold text-[#1F2937] mb-1.5 leading-tight">
                    {cert.title}
                  </h3>

                  {/* Certification Subtitle */}
                  <p className="text-xs text-[#6B7280] font-normal leading-tight">
                    {cert.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          * {
            font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
          }
          
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>
    </>
  );
};

export default CertificationsSection;
