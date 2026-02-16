'use client';

import React, { useState, useMemo } from 'react';

const FAQSection = ({ content }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const whatsappNumber = "971566597878"; // UAE format
const whatsappMessage = "Hi, I’d like to know more.";
  const openWhatsApp = () => {
  const encodedMessage = encodeURIComponent(whatsappMessage);
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
    "_blank"
  );
};

  const rawFaqs = Array.isArray(content?.faqs) ? content.faqs : [
    {
      question: "What services does your polyclinic in Dubai offer?",
      answer: "Our polyclinic in Dubai provides general medicine, dermatology, dental care, physiotherapy, Ayurveda, aesthetic treatments, preventive health check-ups, and personalized wellness services under one roof."
    },
    {
      question: "Where is RamaCare Polyclinic located in Dubai?",
      answer: "RamaCare Polyclinic is conveniently located in Jumeirah 1, Dubai, offering easy accessibility, modern facilities, and comprehensive healthcare services for individuals and families."
    },
    {
      question: "Are your doctors DHA-licensed?",
      answer: "Yes, all doctors and specialists at our polyclinic in Dubai are DHA-licensed, certified, and experienced, ensuring safe, ethical, and high-quality medical care for every patient."
    },
    {
      question: "How can I book an appointment at your polyclinic?",
      answer: "You can book an appointment through WhatsApp, phone call, online booking form, or by visiting our Jumeirah 1 polyclinic directly during working hours."
    },
    {
      question: "Do you accept health insurance at your polyclinic in Dubai?",
      answer: "Yes, our polyclinic in Dubai accepts most major health insurance providers and offers smooth insurance processing for patient convenience and stress-free healthcare access."
    },
    {
      question: "What makes your polyclinic in Dubai different from others?",
      answer: "We combine multispecialty care, personalized treatment plans, DHA-licensed experts, modern technology, holistic healing options, and transparent pricing to deliver a truly patient-first healthcare experience."
    },
    {
      question: "Do you provide dental treatments at your polyclinic?",
      answer: "Yes, our polyclinic in Dubai offers comprehensive dental services including cleanings, whitening, braces, veneers, root canal treatment, crowns, and cosmetic smile enhancement."
    },
    {
      question: "What skin treatments are available at your polyclinic in Dubai?",
      answer: "Our dermatology department provides acne treatment, pigmentation correction, chemical peels, laser therapy, Botox, fillers, anti-aging facials, and customized skincare solutions."
    },
    {
      question: "Is Ayurveda available at your polyclinic in Dubai?",
      answer: "Yes, we offer authentic Ayurvedic treatments including Panchakarma detox, stress management, chronic pain relief, hormonal balance, digestive wellness, and holistic lifestyle guidance."
    },
    {
      question: "Do you offer physiotherapy services?",
      answer: "Our polyclinic in Dubai provides advanced physiotherapy for back pain, sports injuries, posture correction, joint stiffness, rehabilitation, mobility improvement, and pain management programs."
    },
    {
      question: "Can I visit your polyclinic for routine check-ups?",
      answer: "Yes, we provide routine health check-ups, preventive screenings, vaccinations, and lifestyle assessments to help detect health issues early and maintain long-term wellness."
    },
    {
      question: "Does your polyclinic treat chronic diseases?",
      answer: "Our polyclinic in Dubai specializes in managing chronic conditions such as diabetes, hypertension, thyroid disorders, asthma, and lifestyle diseases with continuous monitoring and personalized care."
    },
    {
      question: "Is your polyclinic suitable for family healthcare?",
      answer: "Yes, we offer family-friendly healthcare services for children, adults, and seniors, ensuring comprehensive medical care for every stage of life."
    },
    {
      question: "What should I expect during my first visit?",
      answer: " Your first visit includes a detailed consultation, medical assessment, necessary diagnostics, and a personalized treatment plan designed to address your health concerns effectively."
    },
    {
      question: "How do you ensure quality care at your polyclinic in Dubai?",
      answer: "We ensure quality care through DHA-licensed practitioners, advanced medical equipment, strict hygiene standards, transparent communication, and a patient-centered approach focused on safety and results."
    }
  ];

  const faqs = useMemo(() => {
    if (!Array.isArray(rawFaqs) || rawFaqs.length === 0) return [];
    
    const seen = new Set();
    const uniqueFaqs = [];
    
    for (const faq of rawFaqs) {
      const identifier = faq.id ? `id-${faq.id}` : `q-${faq.question?.trim()}`;
      
      if (!seen.has(identifier)) {
        seen.add(identifier);
        uniqueFaqs.push(faq);
      }
    }
    
    return uniqueFaqs;
  }, [rawFaqs]);

  const title = content?.title || 'Frequently Asked Questions – RamaCare Polyclinic';
  const description = content?.description || 'Everything you need to know about our treatments and services in Dubai.';

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
      className="relative w-full py-12 lg:py-16"
      style={{ 
        backgroundColor: '#E8E6DF',
        minHeight: 'auto',
        overflow: 'visible'
      }}
    >
      <div 
        className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          width: '100%',
          overflow: 'visible'
        }}
      >
        {/* Badge with hover effect */}
        <div className="flex justify-center mb-3">
          <div 
            className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm"
            style={{ 
              backgroundColor: '#D1FAE5',
              color: '#065F46'
            }}
          >
            Common Questions
          </div>
        </div>

        {/* Heading */}
        <h2 
          className="text-center font-bold mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl"
          style={{ 
            color: '#1F2937',
            lineHeight: '1.2'
          }}
        >
          {title}
        </h2>

        {/* Description */}
        <p 
          className="text-center mb-6 md:mb-8 max-w-2xl mx-auto text-xs sm:text-sm"
          style={{ 
            color: '#6B7280',
            lineHeight: '1.6'
          }}
        >
          {description}
        </p>

        {/* FAQ Accordion */}
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '12px',
            width: '100%'
          }}
        >
          {faqs && faqs.length > 0 ? faqs.map((faq, index) => (
            <div
              key={faq.id ? `faq-${faq.id}` : `faq-${index}-${faq.question?.substring(0, 20)}`}
              className="transition-all duration-300 ease-in-out group"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: hoveredIndex === index ? '2px solid #2D5F3F' : '1px solid #E5E7EB',
                overflow: 'hidden',
                transform: hoveredIndex === index ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hoveredIndex === index 
                  ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 3px rgba(45, 95, 63, 0.1)' 
                  : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient overlay on hover */}
              <div 
                className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(209, 250, 229, 0.3) 0%, rgba(167, 243, 208, 0.1) 100%)',
                  opacity: hoveredIndex === index ? 1 : 0,
                  borderRadius: '12px'
                }}
              />

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="relative w-full flex items-center justify-between text-left transition-all duration-300 ease-in-out"
                style={{
                  padding: '16px 20px',
                  backgroundColor: hoveredIndex === index ? 'rgba(240, 253, 244, 0.5)' : 'transparent'
                }}
              >
                {/* Question number indicator on hover */}
                <div 
                  className="absolute left-0 top-0 bottom-0 transition-all duration-300"
                  style={{
                    width: hoveredIndex === index ? '4px' : '0px',
                    background: 'linear-gradient(180deg, #2D5F3F 0%, #3A7B51 100%)',
                    borderRadius: '0 4px 4px 0'
                  }}
                />

                <h3
                  className="flex-1 pr-3 font-semibold text-sm md:text-base transition-colors duration-300"
                  style={{
                    color: hoveredIndex === index ? '#2D5F3F' : '#1F2937',
                    paddingLeft: hoveredIndex === index ? '12px' : '0px',
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  {faq.question}
                </h3>

                {/* Enhanced Accordion Button with hover effects */}
                <div
                  className="flex-shrink-0 flex items-center justify-center transition-all duration-300 ease-in-out relative"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: hoveredIndex === index || openIndex === index ? '#2D5F3F' : 'rgba(45, 95, 63, 0.1)',
                    transform: hoveredIndex === index ? 'rotate(90deg) scale(1.1)' : openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    boxShadow: hoveredIndex === index 
                      ? '0 4px 6px -1px rgba(45, 95, 63, 0.3), 0 2px 4px -1px rgba(45, 95, 63, 0.2)' 
                      : 'none'
                  }}
                >
                  {/* Pulse effect on hover */}
                  {hoveredIndex === index && (
                    <div 
                      className="absolute inset-0 rounded-full animate-ping"
                      style={{
                        backgroundColor: '#2D5F3F',
                        opacity: 0.4
                      }}
                    />
                  )}

                  {openIndex === index ? (
                    <svg
                      className="text-white transition-all duration-300 ease-in-out relative z-10"
                      style={{ 
                        width: '18px', 
                        height: '18px',
                        transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)'
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M20 12H4"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="transition-all duration-300 ease-in-out relative z-10"
                      style={{ 
                        width: '18px', 
                        height: '18px',
                        color: hoveredIndex === index ? '#FFFFFF' : '#2D5F3F',
                        transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)'
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={{
                  transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out'
                }}
              >
                <div
                  style={{
                    padding: '0 20px 16px 20px',
                    paddingTop: '12px'
                  }}
                >
                  {/* Decorative line */}
                  <div 
                    className="mb-3 transition-all duration-300"
                    style={{
                      height: '2px',
                      background: hoveredIndex === index 
                        ? 'linear-gradient(90deg, #2D5F3F 0%, #3A7B51 50%, transparent 100%)'
                        : 'linear-gradient(90deg, #E5E7EB 0%, transparent 100%)',
                      width: hoveredIndex === index ? '100%' : '60%'
                    }}
                  />

                  <p
                    className="text-xs sm:text-sm transition-colors duration-300"
                    style={{
                      color: hoveredIndex === index ? '#374151' : '#6B7280',
                      lineHeight: '1.7'
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          )) : (
            <div className="text-center py-8 text-sm text-gray-500">
              No FAQs available at the moment.
            </div>
          )}
        </div>

        {/* CTA Card with enhanced hover effects */}
        <div
          className="relative mt-8 text-center transition-all duration-500 group overflow-hidden"
          style={{
            marginTop: '32px',
            padding: '28px 24px',
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E5E7EB'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            e.currentTarget.style.borderColor = '#2D5F3F';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = '#E5E7EB';
          }}
        >
          {/* Animated gradient background on hover */}
          <div 
            className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(209, 250, 229, 0.4) 0%, transparent 70%)',
              opacity: 0
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          />

          <h3
            className="relative font-bold mb-2 text-base md:text-lg transition-colors duration-300"
            style={{
              color: '#1F2937'
            }}
          >
            Still Have Questions?
          </h3>
          <p
            className="relative mb-5 max-w-xl mx-auto text-xs sm:text-sm"
            style={{
              color: '#6B7280',
              lineHeight: '1.6'
            }}
          >
            Our friendly team is here to help. Reach out via WhatsApp or schedule a consultation to discuss your specific health concerns.
          </p>
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-2" style={{ gap: '12px' }}>
            {/* Book Consultation Button with ripple effect */}
            <button  onClick={() =>
    document.getElementById("appointment")?.scrollIntoView({
      behavior: "smooth",
    })
  }
              className="relative transition-all duration-300 ease-in-out text-sm overflow-hidden group/btn"
              style={{
                padding: '10px 20px',
                height: '42px',
                background: 'linear-gradient(135deg, #2D5F3F 0%, #3A7B51 100%)',
                color: '#FFFFFF',
                borderRadius: '8px',
                minWidth: '150px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(45, 95, 63, 0.4), 0 4px 6px -2px rgba(45, 95, 63, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Shine effect on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  transform: 'translateX(-100%)',
                  animation: 'shine 1.5s infinite'
                }}
              />
              <span className="relative z-10">Book Consultation</span>
            </button>

            {/* WhatsApp Button with hover effects */}
            <button onClick={openWhatsApp}
              className="relative transition-all duration-300 ease-in-out text-sm group/whatsapp overflow-hidden"
              style={{
                padding: '10px 20px',
                height: '42px',
                backgroundColor: '#FFFFFF',
                color: '#3A7B51',
                border: '2px solid #3A7B51',
                borderRadius: '8px',
                minWidth: '150px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.backgroundColor = '#3A7B51';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(4, 120, 87, 0.4), 0 4px 6px -2px rgba(4, 120, 87, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#047857';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span className="relative z-10">WhatsApp Us</span>
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;