import React, { useState } from 'react';

const OurFacilitySection = ({ content }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  // Default gallery images if no content provided
  const defaultTopGalleryImages = [
    {
      id: 1,
      src: '/images/h1.png',
      alt: 'Reception AreaModern reception area at a trusted Polyclinic in Dubai with a clean, welcoming environment for patient care.'
    },
    {
      id: 2,
      src: '/images/h2.png',
      alt: 'Advanced treatment room inside a Polyclinic in Dubai equipped with modern medical technology and hygienic facilities.'
    },
    {
      id: 3,
      src: '/images/h3.png',
      alt: 'Doctor consultation room at a Polyclinic in Dubai offering personalized healthcare in a comfortable clinical setting.'
    }
  ];

  const defaultBottomGalleryImages = [
    {
      id: 4,
      src: '/images/h4.png',
      alt: 'Clinic waiting area'
    },
    {
      id: 5,
      src: '/images/h5.png',    
      alt: 'Ayurvedic oil treatment'
    },
    {
      id: 6,
      src: '/images/h6.png',
      alt: 'Relaxing treatment room'
    }
  ];

  const defaultTrustBadges = [
    {
      id: 1,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'DHA Certified',
      subtitle: 'Fully licensed and regulated facility'
    },
    {
      id: 2,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Premium Hygiene',
      subtitle: 'International medical standards'
    },
    {
      id: 3,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Prime Location',
      subtitle: 'Heart of Jumeirah 1, Dubai'
    }
  ];

  // Use content props if provided, otherwise use defaults
  const badge = content?.badge || 'Our Facility';
  const title = content?.title || 'Experience Premium Ayurvedic Care';
  const description = content?.description || 'Step into our world-class facility where traditional healing meets modern luxury and medical excellence.';
  const topGalleryImages = content?.topGalleryImages || defaultTopGalleryImages;
  const bottomGalleryImages = content?.bottomGalleryImages || defaultBottomGalleryImages;
  const trustBadges = content?.trustBadges || defaultTrustBadges;

  return (
    <section id="gallery" className="relative w-full bg-white py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-3">
          <div 
            className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm"
            // style={{ 
            //   backgroundColor: '#D1FAE5',
            //   color: '#065F46'
            // }}
          >
            {badge}
          </div>
        </div>

        {/* Heading */}
        <h2 
          className="text-center font-bold mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          style={{ 
            color: '#1F2937',
            lineHeight: '1.2'
          }}
        >
          {title}
        </h2>

        {/* Description */}
        <p 
          className="text-center mb-8 md:mb-12 max-w-3xl mx-auto text-xs sm:text-sm"
          style={{ 
            color: '#6B7280',
            lineHeight: '1.6'
          }}
        >
          {description}
        </p>

        {/* Top Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 mb-4" style={{ gap: '16px' }}>
          {topGalleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden group cursor-pointer"
              style={{ 
                borderRadius: '16px',
                height: '220px'
              }}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Gradient Overlay on Hover */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  hoveredImage === image.id ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 50%)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 mb-8" style={{ gap: '16px' }}>
          {bottomGalleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden group cursor-pointer"
              style={{ 
                borderRadius: '16px',
                height: '200px'
              }}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Gradient Overlay on Hover */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  hoveredImage === image.id ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 50%)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '16px', marginTop: '32px' }}>
          {trustBadges.map((badge) => (
            <div
              key={badge.id}
              className="flex flex-col items-center text-center"
              style={{
                padding: '24px 20px',
                borderRadius: '16px',
                backgroundColor: '#FAF8F5'
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center mb-3"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#047857'
                }}
              >
                <div className="text-white">
                  {React.cloneElement(badge.icon, { className: 'w-5 h-5' })}
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-bold mb-1.5 text-base"
                style={{
                  color: '#1F2937'
                }}
              >
                {badge.title}
              </h3>

              {/* Subtitle */}
              <p
                className="text-xs"
                style={{
                  color: '#6B7280'
                }}
              >
                {badge.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFacilitySection;