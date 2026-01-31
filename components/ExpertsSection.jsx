import React, { useEffect, useRef, useState } from 'react';

const ExpertsSection = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Use content props or defaults
  const badge = content?.badge || 'Expert Medical Team';
  const title = content?.title || 'Meet Our DHA-Licensed Ayurvedic Physicians';
  const description = content?.description || 'Highly qualified doctors with decades of combined experience, committed to your healing journey with expertise, compassion, and authentic Ayurvedic care.';
  const stats = content?.stats || [
    { value: '3', label: 'Expert Physicians' },
    { value: '37+', label: 'Years Combined Experience' },
    { value: '500+', label: 'Successful Treatments' },
    { value: '4.9', label: 'Average Rating' }
  ];
  const ctaSection = content?.ctaSection || {
    title: 'Ready to Consult Our Expert Physician?',
    description: 'Schedule a one-on-one consultation with our DHA-licensed doctors for personalized care.',
    primaryButton: 'Book Consultation Now',
    secondaryButton: 'View All Doctors'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const doctors = content?.doctors || [
     {
          id: 1,
          name: 'Jeena Mathew',
          firstName: 'Jeena',
           image: '/images/Jeena Mathew.jpeg',
          qualifications: 'BPT, MPT (Physiotherapy)',
          rating: 4.9,
          specialization: 'Musculoskeletal Physiotherapy',
          experience: '8+ Years Experience',
          expertise: [
            'Specialized in the treatment of musculoskeletal disorders',
            'Expertise in pain management, mobility restoration & rehabilitation',
            'Successfully treated 600+ patients with personalized physiotherapy programs'
          ],
          languages: ['English','Arabic'],
          quote: 'Movement is medicine. Through precise assessment and individualized therapy, my goal is to help patients regain strength, confidence, and pain-free mobility.',
          testimonial: {
            text: 'Jeena’s physiotherapy sessions helped me recover from long-standing shoulder pain. Very professional and extremely effective.',
            author: 'Patient Feedback',
            location: 'Dubai'
          }
        },
        {
          id: 2,
          name: 'Dr. Shamna Keloth Meethal',
          firstName: 'Dr. Shamna Keloth',
           image: '/images/Dr Shamna Keloth Meethal.jpeg',
          qualifications: 'BAMS (Ayurveda Practitioner)',
          rating: 4.8,
          specialization: 'General Ayurveda & Preventive Care',
          experience: '11+ Years Experience | DHA Licensed',
          expertise: [
            'Comprehensive clinical expertise in classical Ayurvedic treatments',
            'Strong focus on preventive healthcare & lifestyle correction',
            'Successfully treated 800+ patients with personalized Ayurvedic protocols'
          ],
          languages: ['English', 'Arabic'],
          quote: 'Ayurveda is not just a system of medicine, but a way of life. By understanding the individual and treating the root cause, lasting health can be achieved.',
          testimonial: {
            text: 'Dr. Shamna’s treatment approach was thorough and effective. I felt genuine improvement and long-term relief.',
            author: 'Patient Feedback',
            location: 'Sharjah'
          }
        },
        {
          id: 3,
          name: 'Dr. Anan',
          firstName: 'Dr. Anan',
           image: '/images/Dr Anan.jpeg',
          qualifications: 'BDS (General Dentist)',
          rating: 5.0,
          specialization: 'General Dentistry',
          experience: '5+ Years Experience',
          expertise: [
            'Comprehensive care in preventive and restorative dentistry',
            'Expertise in routine dental procedures and oral health maintenance',
            'Successfully treated 500+ patients with a gentle, patient-focused approach'
          ],
          languages: ['English', 'Arabic'],
          quote: 'A healthy smile is the foundation of confidence and overall well-being. My focus is on providing comfortable, high-quality dental care for every patient.',
          testimonial: {
            text: 'Dr. Anan made my dental visit completely stress-free. Very professional and caring.',
            author: 'Patient Feedback',
            location: 'Dubai'
          }
        }
  ];

  const renderStars = (rating, size = 'w-3 h-3') => {
    return [1, 2, 3, 4, 5].map((star) => {
      const isFull = star <= Math.floor(rating);
      const isHalf = !isFull && star === Math.ceil(rating) && rating % 1 >= 0.5;
      
      if (isHalf) {
        return (
          <div key={star} className={`relative ${size}`}>
            <svg className={`${size} text-gray-300 absolute inset-0`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className={`${size} text-yellow-400 absolute inset-0`} fill="currentColor" viewBox="0 0 20 20" style={{ clipPath: 'inset(0 50% 0 0)' }}>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        );
      }
      
      return (
        <svg key={star} className={`${size} ${isFull ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    });
  };

  return (
    <section 
      id="experts" 
      ref={sectionRef}
      className="relative w-full bg-white py-8 sm:py-10 lg:py-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
              <span className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm">{badge}</span>
           

          {/* Main Heading */}
          {/* text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight max-w-4xl */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold   py-2 text-[#111827] leading-tight max-w-full xl:max-w-6xl">

            {title.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>

          {/* Supporting Paragraph */}
          <p className={`text-xs sm:text-sm md:text-base text-[#4B5563] leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {description}
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
              {/* Image Container - Image at top with overlay */}
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden rounded-t-xl">
                
                {/* 🔥 REPLACE THIS ENTIRE SECTION WITH YOUR IMAGE 🔥 */}
                {doctor.image ? (
                  // ✅ THIS IS THE ACTUAL IMAGE CODE - USE THIS
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover object-[50%_15%]"
                  />
                ) :  (
                  // ❌ THIS IS THE PLACEHOLDER - IT WILL BE REMOVED WHEN YOU ADD IMAGES
                  <div className="w-full h-full bg-gradient-to-br from-teal-100 to-blue-200 flex items-center justify-center">
                    <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
                {/* Dark Overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>

                {/* DHA Licensed Badge - Top right on image */}
                <div className="absolute top-2 right-2 bg-[#F5E6D3] rounded-full px-2.5 py-1 shadow-md z-10">
                  <span className="text-[10px] font-semibold text-[#4A4A4A]">DHA Licensed</span>
                </div>

                {/* Star Rating - Top left of overlay */}
                <div className="absolute bottom-14 left-4 flex items-center space-x-0.5 z-10">
                  {renderStars(doctor.rating, 'w-3 h-3')}
                  <span className="text-white text-xs font-semibold ml-1.5">{doctor.rating}</span>
                </div>

                {/* Doctor Name - On overlay */}
                <h3 className="absolute bottom-9 left-4 right-4 text-lg sm:text-xl font-bold text-white z-10">
                  {doctor.name}
                </h3>

                {/* Qualifications - On overlay */}
                <p className="absolute bottom-3 left-4 right-4 text-xs text-white z-10">
                  {doctor.qualifications}
                </p>
              </div>

              {/* Card Body - Content below image */}
              <div className="p-4 sm:p-5">

                {/* Specialization Section */}
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[10px] font-medium text-[#6B7280] uppercase tracking-wide">Specialization</span>
                  </div>
                  <p className="text-sm font-semibold text-[#111111] mb-2">
                    {doctor.specialization}
                  </p>
                  <div className="inline-block bg-gray-200 text-[#111111] px-2.5 py-0.5 rounded-full text-xs font-medium">
                    {doctor.experience}
                  </div>
                </div>

                {/* Key Expertise Section */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-[#111111] mb-2">Key Expertise</h4>
                  <ul className="space-y-1.5">
                    {doctor.expertise.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <svg className="w-1.5 h-1.5 text-green-700 mt-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="4" />
                        </svg>
                        <span className="text-xs text-[#4B5563] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {doctor.languages.map((language, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full text-[10px] font-medium">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Doctor Philosophy Quote */}
                <div className="mb-4 p-3 bg-[#F5F0E8] rounded-lg border-l-4 border-[#C9A24D] relative">
                  <svg className="absolute top-1.5 left-1.5 w-6 h-6 text-[#C9A24D] opacity-60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-xs text-[#4B5563] italic leading-relaxed pl-8 pr-6">
                    {doctor.quote}
                  </p>
                  <svg className="absolute bottom-1.5 right-1.5 w-6 h-6 text-[#C9A24D] opacity-60" fill="currentColor" viewBox="0 0 24 24" style={{ transform: 'scaleX(-1) scaleY(-1)' }}>
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                {/* Patient Testimonial Card */}
                <div className="mb-4 p-3 bg-white border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-0.5 mb-2">
                    {renderStars(5, 'w-3 h-3')}
                  </div>
                  <p className="text-xs text-[#4B5563] italic leading-relaxed mb-2">
                    &ldquo;{doctor.testimonial.text}&rdquo;
                  </p>
                  <p className="text-[10px] text-[#6B7280]">
                    &mdash; {doctor.testimonial.author}, {doctor.testimonial.location}
                  </p>
                </div>

                {/* Primary CTA Button */}
                <button
  onClick={() =>
    document.getElementById("appointment")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="
    w-full bg-gradient-to-r from-[#1b5e3f] via-[#2d7a56] to-[#1b5e3f]  text-white
    px-4 py-2.5 rounded-lg
    font-semibold text-sm
    transition-colors duration-200
    hover:bg-[#134e3a]
  "
>
  Book with {doctor.firstName}
</button>

              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10 lg:mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-4 sm:p-5 shadow-lg text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1b5e3f] mb-1.5">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[#4B5563] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <div className="bg-gradient-to-r from-[#1b5e3f] via-[#2d7a56] to-[#1b5e3f] rounded-2xl p-6 sm:p-8 lg:p-10 text-center shadow-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              {ctaSection.title}
            </h2>
            <p className="text-sm sm:text-base text-white/90 mb-6 max-w-2xl mx-auto">
              {ctaSection.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button onClick={() =>document.getElementById("appointment")?.scrollIntoView({behavior: "smooth", })}className="bg-[#C9A24D] text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-md">
                {ctaSection.primaryButton}
              </button>
              <button onClick={() =>document.getElementById("experts")?.scrollIntoView({behavior: "smooth", })}className="bg-white border-2 border-[#1b5e3f] text-[#1b5e3f] px-6 py-2.5 rounded-full font-semibold text-sm shadow-md">
                {ctaSection.secondaryButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
