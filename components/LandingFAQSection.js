import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Are dermal fillers safe?',
      answer: 'Yes, dermal fillers are very safe when administered by qualified professionals. We only use FDA-approved, premium quality fillers and our board-certified dermatologists have extensive experience. All treatments are performed in our Dubai-licensed clinic following strict safety protocols.',
    },
    {
      question: 'How long do fillers last?',
      answer: 'The longevity of fillers depends on the type used and the treatment area. Generally, lip fillers last 6-12 months, cheek and jawline fillers can last 12-18 months, and some fillers can last up to 2 years. During your consultation, we’ll discuss the best options for your desired results and maintenance schedule.',
    },
    {
      question: 'Do fillers hurt?',
      answer: 'Most patients experience minimal discomfort. We use fillers with built-in numbing agents and can also apply topical anesthetic before treatment. Many patients describe the sensation as a slight pinch or pressure. The procedure is quick, typically taking 15-30 minutes.',
    },
    {
      question: 'How much do fillers cost in Dubai?',
      answer: 'The cost varies depending on the treatment area, amount of filler needed, and type of filler used. Prices typically range from AED 1,500 to AED 5,000 per session. We’re currently offering up to 40% off on select treatments. Contact us for a personalized quote and to discuss our current promotions.',
    },
    {
      question: 'Is there any downtime after treatment?',
      answer: 'Minimal to no downtime is required. You may experience slight swelling or bruising that typically subsides within 24-48 hours. Most patients return to their normal activities immediately. We provide detailed aftercare instructions to ensure optimal results.',
    },
    {
      question: 'When will I see results?',
      answer: 'Results are visible immediately after treatment, though you may experience some swelling initially. The final results become apparent after 1-2 weeks once any swelling has completely subsided. Your results will continue to improve as the filler settles.',
    },
    {
      question: 'Can fillers look natural?',
      answer: 'Absolutely! Our philosophy is to enhance your natural beauty, not change it. Our expert dermatologists specialize in creating subtle, natural-looking results that complement your facial features. We take a conservative approach and can always add more if desired during follow-up appointments.',
    },
    {
      question: 'Are you licensed in Dubai?',
      answer: 'Yes, our clinic is fully licensed and regulated by the Dubai Health Authority (DHA). All our dermatologists are board-certified and have extensive experience in aesthetic treatments. We maintain the highest standards of safety and quality.',
    },
  ];

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  // Keyboard accessibility
  const handleKeyDown = (e, i) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(i);
    }
  };

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      background: '#fce4e4',
      width: '100%',
      padding: '64px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>

      {/* Heading */}
      <h2 className="faq-headline" style={{
        fontSize: 'clamp(26px, 3vw, 44px)',
        fontWeight: 700,
        color: '#0d0d0d',
        margin: '0 0 12px 0',
        lineHeight: 1.15,
        letterSpacing: '-0.2px',
        textAlign: 'center',
      }}>
        Frequently Asked Questions
      </h2>

      {/* Subtitle */}
      <p style={{
        fontSize: '14.5px',
        fontWeight: 400,
        color: '#888888',
        margin: '0 0 36px 0',
        textAlign: 'center',
        maxWidth: '620px',
      }}>
        Everything you need to know about dermal fillers in Dubai
      </p>

      {/* FAQ list */}
      <div style={{
        width: '100%',
        maxWidth: '760px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        {faqs.map((faq, i) => (
          <div
            key={i}
            style={{
              background: '#ffffff',
              borderRadius: '14px',
              border: '1px solid #f1e8cf',
              overflow: 'hidden',
              boxShadow: openIndex === i
                ? '0 8px 22px rgba(184,134,11,0.12)'
                : '0 4px 10px rgba(184,134,11,0.06)',
              transition: 'box-shadow 0.3s ease, transform 0.2s ease',
            }}
            onMouseEnter={e => {
              if (openIndex !== i) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(184,134,11,0.10)';
              }
            }}
            onMouseLeave={e => {
              if (openIndex !== i) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(184,134,11,0.06)';
              }
            }}
          >
            {/* Question row */}
            <button
              onClick={() => toggle(i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              style={{
                width: '100%',
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                gap: '20px',
                fontFamily: "'Inter', sans-serif",
                outline: 'none',
              }}
            >
              <span style={{
                fontSize: '15px',
                fontWeight: 600,
                color: '#222222',
                lineHeight: 1.4,
              }}>
                {faq.question}
              </span>

              {/* Plus / Minus icon */}
              <div style={{
                flexShrink: 0,
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: openIndex === i ? '#B8860B' : '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.25s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => {
                if (openIndex !== i) {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                {openIndex === i ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555555" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                )}
              </div>
            </button>

            {/* Answer — smooth expand/collapse */}
            <div style={{
              maxHeight: openIndex === i ? '500px' : '0px',
              overflow: 'hidden',
              transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}>
              <p style={{
                margin: 0,
                padding: '0 22px 16px',
                fontSize: '14px',
                fontWeight: 400,
                color: '#666666',
                lineHeight: 1.6,
              }}>
                {faq.answer}
              </p>
            </div>

          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1280px) {
          .faq-headline { font-size: 40px; }
        }
        @media (max-width: 1024px) {
          .faq-headline { font-size: 36px; }
        }
        @media (max-width: 768px) {
          .faq-headline { font-size: 30px; }
        }
      `}</style>
    </div>
  );
}
