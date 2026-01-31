import React from 'react';

const PromoBanner = () => {
  return (
    <div className="sticky top-[64px] z-40 -mt-px w-full bg-gradient-to-r from-[#c9a961] to-[#a88c4d] py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <div className="text-white flex-1 min-w-0">
            <p className="text-sm md:text-[15px] font-normal" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
              <span className="font-semibold">Limited Time:</span> Get 15% off your first Panchakarma program + Free consultation
            </p>
          </div>
          <a
            href="https://wa.me/971566597878?text=Hi%20I%20want%20to%20claim%20the%20offer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <button 
              className="px-5 py-2 bg-white text-[#1b5e3f] rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-300 hover:translate-x-[2px] hover:-translate-y-[1px] hover:shadow-sm"
              style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
            >
              Claim Offer
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;