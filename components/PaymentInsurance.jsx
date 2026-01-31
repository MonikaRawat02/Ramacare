import React, { useEffect, useRef, useState } from 'react';

const PaymentInsurance = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Default options (fallback if no content provided)
  const defaultPaymentOptions = [
    'Cash, Credit/Debit Cards accepted',
    'Flexible payment plans available',
    '0% interest installments (conditions apply)'
  ];

  const defaultInsuranceOptions = [
    'Accepted by select insurance providers',
    'Detailed invoices provided for claims',
    'Assistance with documentation'
  ];

  // Use provided content or defaults
  const paymentTitle = content?.paymentTitle || 'Payment Options';
  const insuranceTitle = content?.insuranceTitle || 'Insurance & Reimbursement';
  const paymentOptions = content?.paymentOptions || defaultPaymentOptions;
  const insuranceOptions = content?.insuranceOptions || defaultInsuranceOptions;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div ref={sectionRef} className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-5xl mx-auto bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-xl shadow-lg border border-gray-200 p-4 md:p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Payment Options - Left Column */}
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="bg-[#ECFDF5] p-1.5 md:p-2 rounded-lg transition-all duration-200 hover:scale-110 hover:bg-gradient-to-br hover:from-[#D1FAE5] hover:to-[#A7F3D0] group">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-[#047857] group-hover:text-[#059669] transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Payment options icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-sm md:text-base font-bold bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] bg-clip-text text-transparent">
                {paymentTitle}
              </h3>
            </div>

            {/* Feature List */}
            <ul className="space-y-2 md:space-y-3">
              {paymentOptions.map((option, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 md:gap-3 text-[#4B5563] transition-all duration-200 hover:translate-x-1 hover:text-[#1F2937] cursor-pointer group"
                >
                  <div className="bg-[#ECFDF5] rounded-full p-0.5 md:p-1 flex-shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#D1FAE5] group-hover:to-[#A7F3D0]">
                    <svg
                      className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#047857]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[10px] md:text-xs leading-relaxed">{option}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Insurance & Reimbursement - Right Column */}
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="bg-[#ECFDF5] p-1.5 md:p-2 rounded-lg transition-all duration-200 hover:scale-110 hover:bg-gradient-to-br hover:from-[#D1FAE5] hover:to-[#A7F3D0] group">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-[#047857] group-hover:text-[#059669] transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Insurance icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-sm md:text-base font-bold bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] bg-clip-text text-transparent">
                {insuranceTitle}
              </h3>
            </div>

            {/* Feature List */}
            <ul className="space-y-2 md:space-y-3">
              {insuranceOptions.map((option, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 md:gap-3 text-[#4B5563] transition-all duration-200 hover:translate-x-1 hover:text-[#1F2937] cursor-pointer group"
                >
                  <div className="bg-[#ECFDF5] rounded-full p-0.5 md:p-1 flex-shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#D1FAE5] group-hover:to-[#A7F3D0]">
                    <svg
                      className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#047857]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[10px] md:text-xs leading-relaxed">{option}</span>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentInsurance;

