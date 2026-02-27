import { useEffect, useState } from 'react';
import { useModal } from './ModalContext';

export default function PromoBanner() {
  const [visible, setVisible] = useState(false);
const { openModal } = useModal();
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`promo-bar ${visible ? 'is-visible' : ''}`}>
      <div className="promo-inner">

        <div className="promo-left">
          <p className="promo-title">
            <span className="accent">40% OFF</span> Hair PRP Packages
          </p>
          <p className="promo-sub">Limited Time Offer – Book Now!</p>
        </div>

        <div className="promo-right">

          <a href="https://wa.me/971542669345" className="btn btn-wa">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 12a4 4 0 0 0 8 0"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
            </svg>
            WhatsApp
          </a>

          <a href="tel:+971542669345" className="btn btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 12.09a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.42h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call Now
          </a>
 <button
        className="btn btn-gold"
         onClick={openModal}
      >
        Book Free Consult
      </button>

        </div>
      </div>
      <style jsx>{`
        .promo-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 99999;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          transform: translateY(-100%);
          transition: transform 0.3s ease;
          font-family: 'Inter', sans-serif;
        }
        .promo-bar.is-visible { transform: translateY(0); }

        .promo-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 24px;
          margin: 0 auto;
          max-width: 1140px;
        }
        @media (max-width: 1200px) { .promo-inner { max-width: 960px; } }
        @media (max-width: 1024px) { .promo-inner { max-width: 840px; } }
        @media (max-width: 768px)  { .promo-inner { max-width: 680px; padding: 10px 16px; } }
        @media (max-width: 640px)  { .promo-inner { max-width: 560px; } }

        .promo-left { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
        .promo-title { margin: 0; font-size: 14px; font-weight: 600; color: #111111; line-height: 1.3; }
        .promo-sub { margin: 0; font-size: 12px; font-weight: 400; color: #888888; line-height: 1.3; }
        .accent { color: #B8860B; font-weight: 700; }

        .promo-right { display: flex; align-items: center; gap: 10px; flex-wrap: nowrap; }
        .btn { display: inline-flex; align-items: center; justify-content: center; gap: 7px; height: 36px; padding: 0 14px; border-radius: 6px; font-size: 13px; font-weight: 500; text-decoration: none; white-space: nowrap; border: none; cursor: pointer; }
        .btn-wa { background: #22C55E; color: #ffffff; }
        .btn-gold { background: #B8860B; color: #ffffff; }
        .btn-ghost { background: #ffffff; color: #111111; border: 1.5px solid #e5e7eb; }

        @media (max-width: 900px) {
          .promo-right .btn { height: 34px; padding: 0 12px; }
        }
        @media (max-width: 768px) {
          .promo-inner { flex-direction: column; align-items: stretch; gap: 10px; }
          .promo-right { width: 100%; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; }
          .promo-right .btn { width: 100%; justify-content: center; }
          .promo-title { font-size: 13.5px; }
        }
        @media (max-width: 480px) {
          .promo-right { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
