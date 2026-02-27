import { useModal } from './ModalContext';
export default function PricingSection() {
const { openModal } = useModal();
  const packages = [
    {
      name: 'Single Area',
      price: 'AED 1,320',
      save: 'Save AED 880',
      popular: false,
      features: [
        { text: '1 Treatment Area', included: true },
        { text: 'Top-Quality FDA-Approved Filler', included: true },
        { text: 'Expert Dermatologist', included: true },
        { text: 'Free Consultation', included: true },
        { text: '1 Follow-up Session', included: true },
        { text: '10% Extra off on other treatments', included: true },
        { text: 'Multiple Areas', included: false },
        { text: 'Priority Booking', included: false },
      ],
    },
    {
      name: 'Full Face Package',
      price: 'AED 2,940',
      save: 'Save AED 1,960',
      popular: true,
      features: [
        { text: '3+ Treatment Areas', included: true },
        { text: 'Top-Quality FDA-Approved Filler', included: true },
        { text: 'Senior Dermatologist', included: true },
        { text: 'Free Consultation worth AE-500', included: true },
        { text: 'Follow-up Sessions', included: true },
        { text: 'Priority Booking', included: true },
        { text: '20% Extra off on other treatments', included: true },
        { text: 'Personalized Treatment Plan', included: true },
      ],
    },
    {
      name: 'Body Filler',
      price: 'AED 5,999',
      save: 'Save AED 9,001',
      popular: false,
      features: [
        { text: 'Unlimited Treatment Areas', included: true },
        { text: 'Top-Quality FDA-Approved Filler', included: true },
        { text: 'Celebrity Dermatologist', included: true },
        { text: 'Unlimited Free Consultation', included: true },
        { text: 'Follow-up Sessions', included: true },
        { text: 'Personalized Treatment Plan', included: true },
        { text: 'VIP Priority Booking', included: true },
        { text: 'Advanced Techniques', included: true },
        { text: '30% Extra off on other treatments', included: true },
      ],
    },
  ];

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      background: '#ffffff',
      width: '100%',
      padding: '70px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>

      {/* Limited Time Pricing badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        border: '1.5px solid #f87171',
        borderRadius: '50px',
        padding: '6px 16px',
        fontSize: '13px',
        fontWeight: 400,
        color: '#f87171',
        background: 'rgba(255,220,220,0.3)',
        marginBottom: '18px',
      }}>
        ⚡ Limited Time Pricing
      </div>

      {/* Heading */}
      <h2 style={{
        fontSize: 'clamp(32px, 4vw, 48px)',
        fontWeight: 600,
        color: '#0d0d0d',
        margin: '0 0 16px 0',
        lineHeight: 1.2,
        letterSpacing: '-0.5px',
        textAlign: 'center',
      }}>
        Choose Your Perfect Package
      </h2>

      {/* Subtitle */}
      <p style={{
        fontSize: '15px',
        fontWeight: 400,
        color: '#666666',
        margin: '0 0 56px 0',
        textAlign: 'center',
        maxWidth: '580px',
        lineHeight: 1.6,
      }}>
        Transparent pricing with no hidden fees. All packages include consultation and follow-ups.
      </p>

      {/* Cards row */}
      <div style={{
        display: 'flex',
        gap: '40px',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: '1600px',
      }}>
        {packages.map((pkg, index) => (
          <div key={pkg.name} style={
            pkg.popular 
              ? {
                  flex: '1 1 320px',
                  maxWidth: '360px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '2px solid #B8860B',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }
              : {
                  flex: '1 1 320px',
                  maxWidth: '360px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '2px solid #B8860B',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }
          }
          onMouseEnter={(e) => {
            if (pkg.popular) {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(184,134,11,0.25)';
            } else {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.12)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
          }}
          >

            {/* Popular banner */}
            {pkg.popular && (
              <div style={{
                background: '#B8860B',
                padding: '8px 20px',
                textAlign: 'center',
                fontSize: '11px',
                fontWeight: 500,
                color: '#ffffff',
                letterSpacing: '1px',
              }}>
                ★ MOST POPULAR
              </div>
            )}

            {/* Card body */}
            <div style={{
              padding: '36px 34px 32px',
              background: '#ffffff',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}>

              {/* Package name */}
              <h3 style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#111111',
                margin: '0 0 12px 0',
              }}>
                {pkg.name}
              </h3>

              {/* Price */}
              <p style={{
                fontSize: '32px',
                fontWeight: 600,
                color: '#B8860B',
                margin: '0 0 6px 0',
                lineHeight: 1,
              }}>
                {pkg.price}
              </p>

              {/* Save */}
              <p style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#22C55E',
                margin: '0 0 24px 0',
              }}>
                {pkg.save}
              </p>

              {/* Features list */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                flex: 1,
                marginBottom: '36px',
              }}>
                {pkg.features.map((feature) => (
                  <div key={feature.text} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: feature.included ? '#333333' : '#bbbbbb',
                  }}>
                    {feature.included ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cccccc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                    )}
                    {feature.text}
                  </div>
                ))}
              </div>

              {/* Book button */}
              <button  onClick={openModal}  style={{
                display: 'block',
                textAlign: 'center',
                padding: '14px 24px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 500,
                textDecoration: 'none',
                cursor: 'pointer',
                background: pkg.popular ? '#B8860B' : '#ffffff',
                color: pkg.popular ? '#ffffff' : '#B8860B',
                border: '1.5px solid #B8860B',
                letterSpacing: '0',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              >
                Book This Package
             </button>

            </div>
          </div>
        ))}
      </div>

      {/* Bottom trust row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '36px',
        fontSize: '13px',
        fontWeight: 400,
        color: '#888888',
        flexWrap: 'wrap',
      }}>
        <span>💳 Flexible payments</span>
        <span style={{ color: '#dddddd' }}>|</span>
        <span>💰 Value for money</span>
        <span style={{ color: '#dddddd' }}>|</span>
        <span>⭐ Results you&apos;ll love</span>
      </div>

      {/* Bottom promo bar */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(255,220,210,0.4)',
        border: '1px solid #f8b4a0',
        borderRadius: '50px',
        padding: '10px 24px',
        fontSize: '13.5px',
        fontWeight: 400,
        color: '#555555',
        marginTop: '18px',
        marginBottom: '40px',
        textAlign: 'center',
      }}>
        🎁 Book today and get FREE Botox worth AED 800 limited time offer only
      </div>
    </div>
  );
}
