import { useState } from 'react';

export default function ResultsSection() {
  const [current, setCurrent] = useState(0);

  const results = [
    {
      title: 'Jawline Definition',
      before: '/images/jawline1.jpg',
      after: '/images/jawline2.jpg',
    },
    {
      title: 'Full Face Rejuvenation',
      before: '/images/Full1.jpg',
      after: '/images/Full2.jpg',
    },
    {
      title: 'Lip Enhancement',
      before: '/images/Lip1.jpg',
      after: '/images/Lip2.jpg',
    },
    {
      title: 'Cheek Fillers',
      before: '/images/Cheek1.jpg',
      after: '/images/Cheek2.jpg',
    },
  ];

  const slidesCount = results.length;

  const prev = () => {
    setCurrent((c) => (c - 1 + slidesCount) % slidesCount);
  };

  const next = () => {
    setCurrent((c) => (c + 1) % slidesCount);
  };

  // Touch support for mobile
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = startX - e.touches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next();
      } else if (diff < 0) {
        prev();
      }
      setIsDragging(false);
    }
  };

  const visibleCards = [
    results[current],
    results[(current + 1) % slidesCount],
  ];

  return (
    <section className="flex w-full flex-col items-center bg-[#fce4e4] px-4 py-16 font-sans sm:px-6 md:py-20">
      {/* Heading */}
      <h2 className="px-4 text-center text-[30px] font-bold leading-tight tracking-[-0.03em] text-[#0d0d0d] sm:text-[34px] md:text-[40px] lg:text-[48px]">
        Real Results from Real Patients
      </h2>

      {/* Subtitle */}
      <p className="mt-4 max-w-xl px-4 text-center text-[15px] font-normal text-[#999999] md:text-base">
        See the stunning transformations our patients have achieved
      </p>

      {/* Slider row - arrow + track + arrow */}
      <div className="mt-10 flex w-full max-w-[1400px] items-center gap-5 px-1 sm:px-4 md:gap-6 lg:gap-8">
        {/* Left arrow */}
        <button
          type="button"
          onClick={prev}
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#e0e0e0] bg-white text-[#444444] shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition duration-200 hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] md:h-13 md:w-13 lg:h-[52px] lg:w-[52px]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#444"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Cards */}
        <div className="flex-1">
          <div
            className="flex w-full gap-5 md:gap-7 lg:gap-8"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {visibleCards.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                className={`group flex-1 overflow-hidden rounded-2xl border border-[#B8860B] bg-white shadow-[0_6px_24px_rgba(184,134,11,0.12)] transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(184,134,11,0.18)] ${
                  idx === 1 ? 'hidden md:block' : ''
                }`}
              >
                {/* Before / After images side by side */}
                <div className="grid h-[220px] grid-cols-2 md:h-[240px]">
                  {/* Before */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.before}
                      alt="Before"
                      className="block h-full w-full object-cover"
                    />
                    <div className="absolute left-2.5 top-2.5 rounded-[18px] bg-[rgba(255,255,255,0.92)] px-3 py-[3px] text-[11px] font-semibold text-[#333333]">
                      Before
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.after}
                      alt="After"
                      className="block h-full w-full object-cover"
                    />
                    <div className="absolute right-2.5 top-2.5 rounded-[18px] bg-[#B8860B] px-3 py-[3px] text-[11px] font-semibold text-white">
                      After
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="border-t border-[#f0f0f0] bg-white px-5 py-4 text-center md:px-6 md:py-[18px]">
                  <p className="m-0 text-[15px] font-semibold text-[#111111] md:text-[16px]">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          type="button"
          onClick={next}
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#e0e0e0] bg-white text-[#444444] shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition duration-200 hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] md:h-13 md:w-13 lg:h-[52px] lg:w-[52px]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#444"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="mt-8 flex items-center gap-2.5">
        {Array.from({ length: slidesCount }).map((_, i) => {
          const isActive = i === current;
          return (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`h-2.5 cursor-pointer rounded-full border-none p-0 transition-all duration-300 hover:scale-110 ${
                isActive ? 'w-8 bg-[#B8860B]' : 'w-2.5 bg-[#dddddd]'
              }`}
            />
          );
        })}
      </div>

      {/* Bottom note */}
      <p className="mt-7 text-center text-[13px] font-normal text-[#aaaaaa] md:mt-8 md:text-[14px]">
        ★★★★★ Real results from our patients. Individual results may vary.
      </p>
    </section>
  );
}
