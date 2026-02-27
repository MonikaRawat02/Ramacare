export default function RiskFreeSection() {

  const promises = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Delivering Results You'll Love",
      desc: "If you're not happy with your results, we'll make it right - no questions asked.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
          <path d="M3 3v5h5"/>
        </svg>
      ),
      title: 'Risk-Free Consultation',
      desc: 'Free consultation with no obligation to proceed. Get expert advice with zero commitment.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6"/>
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
        </svg>
      ),
      title: 'Best Price Offer',
      desc: "Found a better price elsewhere? We'll match it and give you an extra 5% off.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      title: 'Aftercare Support',
      desc: "Free 24/7 support for 30 days post-treatment. We're always here when you need us.",
    },
  ];

  return (
    <div className="rf-section" style={{
      fontFamily: "'Inter', sans-serif",
      background: 'linear-gradient(135deg, #fff8f0 0%, #fce8e8 50%, #fff0f0 100%)',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>

      {/* Top gold badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#B8860B',
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: 600,
        padding: '11px 26px',
        borderRadius: '50px',
        marginBottom: '26px',
        letterSpacing: '0.1px',
      }}>
        Your Safety is Our Priority
      </div>

      {/* Heading */}
      <h2 style={{
        fontSize: 'clamp(28px, 3.2vw, 44px)',
        fontWeight: 700,
        color: '#0d0d0d',
        margin: '0 0 12px 0',
        lineHeight: 1.15,
        letterSpacing: '-0.2px',
        textAlign: 'center',
      }}>
        100% Risk-Free Promise
      </h2>

      {/* Subtitle */}
      <p style={{
        fontSize: '14.5px',
        fontWeight: 400,
        color: '#888888',
        margin: '0 0 32px 0',
        textAlign: 'center',
        maxWidth: '620px',
      }}>
        We stand behind our work with unmatched quality and care.
      </p>

      <div className="rf-grid" style={{}}>
        {promises.map((item) => (
          <div
            key={item.title}
            className="rf-card"
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              border: '1px solid #f0e8e0',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(184,134,11,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
            }}
          >

            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#fde8e8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              {item.icon}
            </div>

            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#111111',
                margin: '0 0 6px 0',
                lineHeight: 1.3,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '14px',
                fontWeight: 400,
                color: '#777777',
                margin: 0,
                lineHeight: 1.55,
              }}>
                {item.desc}
              </p>
            </div>

          </div>
        ))}
      </div>

      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        background: '#ffffff',
        border: '1px solid #e5e0d8',
        borderRadius: '50px',
        padding: '14px 32px',
        fontSize: '15px',
        fontWeight: 500,
        color: '#444444',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 8v4l3 3"/>
        </svg>
        DHA Licensed &amp; Insured Clinic – Committed to Your Safety
      </div>

      <style>{`
        .rf-section { padding: 72px 20px; }
        .rf-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          width: 100%;
          max-width: 980px;
          margin-bottom: 36px;
        }
        .rf-card { padding: 22px 24px; }
        .rf-grid .rf-card svg { width: 22px; height: 22px; }
        @media (max-width: 1024px) {
          .rf-grid { gap: 18px; max-width: 900px; }
        }
        @media (max-width: 900px) {
          .rf-grid { grid-template-columns: 1fr; max-width: 720px; }
        }
        @media (max-width: 600px) {
          .rf-section { padding: 60px 15px; }
          .rf-grid { max-width: 600px; }
        }
        @media (max-width: 480px) {
          .rf-section { padding: 50px 12px; }
          .rf-card { padding: 20px 20px; }
        }
      `}</style>

    </div>
  );
}
