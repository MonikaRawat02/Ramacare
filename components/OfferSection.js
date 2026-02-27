import { useEffect, useState } from 'react';
import { useModal } from './ModalContext';

export default function OfferSection() {
  const [time, setTime] = useState({ hours: 23, minutes: 38, seconds: 42 });
  const [phone, setPhone] = useState('');
  const [callError, setCallError] = useState('');
  const { openModal } = useModal();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  const validPhone = (v) => /^[0-9+\-\s()]{7,}$/.test(v.trim());

  const handleCallMe = () => {
    if (!validPhone(phone)) {
      setCallError('Please enter a valid phone number');
      return;
    }
    setCallError('');
    // Open WhatsApp with the phone number
    const msg = encodeURIComponent(`Hi, I want a callback for the 40% discount on dermal fillers. My number: ${phone}`);
    window.open(`https://wa.me/971542669345?text=${msg}`, '_blank');
  };

  return (
    <div className="py-16 md:py-24 font-inter bg-[#fce4e4] w-full">
      <div className="container mx-auto px-4 flex flex-col items-center">

      {/* Limited Time Offer badge - gray border, clock icon, gray text */}
      <div className="inline-flex items-center gap-[6px] border border-[#B8860B] rounded-full px-[16px] py-[7px] text-[13px] font-normal text-[#B8860B] bg-white/85 mb-[18px]">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        Limited Time Offer
      </div>

      {/* Main heading - medium weight, not heavy bold */}
      <h2 className="text-balance text-[clamp(32px,4vw,56px)] font-semibold text-[#0d0d0d] m-0 mb-[12px] leading-[1.15] tracking-[-0.5px] text-center">
        Up to 40% Off Fillers
      </h2>

      {/* Subtitle - light gray, normal weight */}
      <p className="text-[15px] font-normal text-[#666666] m-0 mb-[36px] text-center">
        Natural results, instant transformation. Book now and save.
      </p>

      {/* Countdown timer */}
      <div className="flex gap-[10px] mb-[34px]">
        {[
          { value: pad(time.hours), label: 'Hours' },
          { value: pad(time.minutes), label: 'Minutes' },
          { value: pad(time.seconds), label: 'Seconds' },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center justify-center bg-white border border-[#e5e7eb] rounded-[10px] w-[86px] h-[76px] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
            <span className="text-[30px] font-semibold text-[#B8860B] leading-none">
              {item.value}
            </span>
            <span className="text-[11px] font-normal text-[#888888] mt-[5px] tracking-[0.2px]">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Claim Your Offer Now button */}
      <button
   onClick={openModal}
  className="inline-flex items-center justify-center bg-[#B8860B] text-white text-[15px] font-medium p-[15px_50px] rounded-[8px] border-none cursor-pointer mb-[56px] tracking-[0.1px]"
>
  Claim Your Offer Now
</button>

      {/* Callback Card */}
      <div className="w-full max-w-[540px] rounded-[16px] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.10)] border border-[1.5px_solid_#B8860B]">

        {/* Gold header */}
        <div className="bg-[#B8860B] p-[32px_40px_26px] flex flex-col items-center text-center">
          {/* Phone icon - transparent white */}
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-[10px]">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 12.09a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.42h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>

          <h3 className="text-[26px] font-medium text-white m-0 mb-[8px] tracking-[-0.2px]">
            Get an Instant Callback
          </h3>
          <p className="text-[14px] font-normal text-white/78 m-0">
            Our expert will call you within 60 seconds
          </p>
        </div>

        {/* White body */}
        <div className="bg-white p-[26px_32px_30px]">

          {/* Why wait box */}
          <div className="flex items-start gap-[9px] bg-[#fff8f2] border border-[#fde0c0] rounded-[8px] p-[12px_15px] mb-[16px] text-[13.5px] text-[#444444] leading-[1.5]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-[2px]">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>
              <strong className="text-[#111111] font-medium">Why wait?</strong> Speak to a specialist now and get all your questions answered instantly.
            </span>
          </div>

          {/* Phone input */}
          <input
            type="tel"
            placeholder="Enter Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-[14px_16px] text-[14px] font-normal text-[#333333] bg-[#f7f7f7] border border-[#dedede] rounded-[8px] outline-none mb-[12px] box-border font-inter"
          />

          {callError ? <div className="text-[#dc2626] text-[12px] mb-[10px]">{callError}</div> : null}

          {/* Call Me Now button */}
          <button 
            onClick={handleCallMe}
            className="w-full p-[15px] bg-[#B8860B] text-white text-[15px] font-medium border-none rounded-[8px] cursor-pointer mb-[22px] font-inter tracking-[0.1px]"
          >
            Call Me Now – It&apos;s Free!
          </button>

          {/* 3 bottom stats */}
          <div className="flex justify-around items-center">
            {[
              { value: '60 sec', label: 'Response Time' },
              { value: '100%', label: 'Free Call' },
              { value: 'No', label: 'Obligation' },
            ].map((item, index, arr) => (
              <div key={item.label} className="flex items-center">
                <div className="flex flex-col items-center gap-[3px]">
                  <span className="text-[15px] font-medium text-[#B8860B]">
                    {item.value}
                  </span>
                  <span className="text-[12px] font-normal text-[#888888]">
                    {item.label}
                  </span>
                </div>
                {index < arr.length - 1 && (
                  <div className="w-[1px] h-[26px] bg-[#eeeeee] ml-[40px]" />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}
