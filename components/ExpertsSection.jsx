import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ExpertsSection = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Use content props or defaults
  const badge = content?.badge || 'Expert Medical Team';
  const title = content?.title || 'Meet Our DHA-Licensed Expertise';
  const description = content?.description || 'Highly qualified doctors with decades of combined experience, committed to your healing journey with expertise, compassion, and authentic Ayurvedic care.';
  const stats = content?.stats || [
    { value: '30+', label: 'Expert Doctors' },
    { value: '37+', label: 'Years of Combined Experience' },
    { value: '500+', label: 'Successful Treatments' },
    { value: '4.9', label: 'Average Rating' }
  ];
  const ctaSection = content?.ctaSection || {
    title: 'Take the First Step Toward Better Health',
    description: 'Connect with our DHA-licensed specialists at RamaCare Polyclinic, a leading Polyclinic in Dubai, and receive expert guidance tailored specifically to you.',
    primaryButton: 'Book Consultation Now',
    secondaryButton: 'View Our Team'
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
          isDHALicensed: true,
          expertise: [
            'Specialized in the treatment of musculoskeletal disorders',
            'Expertise in pain management, mobility restoration & rehabilitation',
            'Successfully treated 600+ patients with personalized physiotherapy programs'
          ],
          languages: ['English']
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
          isDHALicensed: true,
          expertise: [
            'Comprehensive clinical expertise in classical Ayurvedic treatments',
            'Strong focus on preventive healthcare & lifestyle correction',
            'Successfully treated 800+ patients with personalized Ayurvedic protocols'
          ],
          languages: ['English']
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
          isDHALicensed: true,
          expertise: [
            'Comprehensive care in preventive and restorative dentistry',
            'Expertise in routine dental procedures and oral health maintenance',
            'Successfully treated 500+ patients with a gentle, patient-focused approach'
          ],
          languages: ['English']
        },
        //   {
        //   id: 4,
        //   name: 'Maria Aisha Bustillos',
        //   firstName: 'Aisha',
        //   image: '/images/Aisha.jpeg',
        //   qualifications: 'Computer Secretarial - Philippines',
        //   rating: 5.0,
        //   specialization: 'Front Desk & Patient Coordination',
        //   experience: 'Professional experience in administrative support and clinic operations',
        //   isDHALicensed: false,
        //   expertise: [
        //     'Managing appointment scheduling and patient inquiries',
        //     'Ensuring smooth day-to-day clinic operations',
        //     'Strong organizational skills and attention to detail',
        //   ],
        //   languages: ['English']
        // },
       {
  id: 5,
  name: 'Hafsina Karadi Kandy',
  firstName: 'Hafsina',
  image: '/images/Hafsina.jpeg',
  qualifications: 'BPT, MPT (Physiotherapy)',
  rating: 5.0,
  specialization: 'Physiotherapy – Musculoskeletal & Rehabilitation',
  experience: 'Physiotherapist with hands-on clinical experience in patient care and rehabilitation programs.',
  isDHALicensed: true,
  expertise: [
    'Patient assessment and personalized rehabilitation programs',
    'Pain management and functional recovery for musculoskeletal conditions',
    'Mobility restoration and post-injury rehabilitation',
    'Compliance with UAE healthcare standards and clinic protocols',
    'Collaborating with multidisciplinary teams for patient recovery'
  ],
  languages: ['English']
},
{
  id: 6,
  name: 'Mildred L. Eugenio',
  firstName: 'Mildred',
  image: '/images/Mildred.jpeg',
  qualifications: 'Bachelor of Science in Nursing – Philippines',
  rating: 5.0,
  specialization: 'Front Desk & Patient Coordination',
  experience: 'Professional experience in administrative support and patient services.',
  isDHALicensed: false,
  expertise: [
    'Managing appointment scheduling and patient inquiries',
    'Ensuring smooth day-to-day clinic operations',
    'Welcoming and assisting patients with professionalism and care',
    'Strong organizational skills and attention to detail',
    'Multitasking and client relations support'
  ],
  languages: ['English']
},
{
  id: 7,
  name: 'Sonita Sinaga',
  firstName: 'Sonita',
  image: '/images/Sonita.jpeg',
  qualifications: 'Licensed & Certified Aesthetic Therapist | NCLC Laser Certified',
  rating: 5.0,
  specialization: 'Skincare, Laser Treatments & Wellness Therapy',
  experience: '14+ years of professional experience ',
  isDHALicensed: true,
  expertise: [
    'Laser hair removal and skin rejuvenation treatments',
    'Advanced facial therapies including HydraFacial and microdermabrasion',
    'Chemical peels and pigmentation correction treatments',
    'PRP, HIFU, and non-invasive skin rejuvenation procedures',
    'Personalized aesthetic treatment planning'
  ],
  languages: ['English']
},

{
  id: 8,
  name: 'Soumya Abraham',
  firstName: 'Soumya',
  image: '/images/Saumya.jpeg',
  qualifications: 'Diploma in General Nursing and Midwifery | BLS Certified ',
  rating: 5.0,
  specialization: 'Dental, Aesthetic & General Nursing',
  experience: '11+ years of professional experience ',
  isDHALicensed: true,
  expertise: [
    'Assisting with dental procedures and aesthetic treatments',
    'Pre- and post-treatment patient care to ensure comfort and optimal healing',
    'Administering medications, IV therapy, and minor surgical assistance',
    'Patient assessments, sterile techniques, and infection control',
    'Emergency care and first aid support',
    'Collaborating with medical and dental teams for holistic patient care'
  ],
  languages: ['English']
},
{
  id: 9,
  name: 'Syamkumar Sasidharan',
  firstName: 'Syamkumar',
  image: '/images/Syam.jpeg',
  qualifications: 'Diploma in Ayurveda Panchakarma Therapy',
  rating: 5.0,
  specialization: 'Ayurvedic Treatments & Holistic Wellness',
  experience: '17+ years of professional experience ',
  isDHALicensed: true,
  expertise: [
    'Delivering traditional Ayurvedic treatments including Abhyanga, Panchakarma, and Shirodhara',
    'Detoxification therapies and personalized lifestyle consultations',
    'Holistic diagnosis and restoration of body imbalances',
    'Stress relief and wellness-focused therapeutic treatments',
    'Specialized therapies including Basti treatments and Nasya',
    'Therapeutic massage techniques including Swedish and Deep Tissue massage'
  ],
  languages: ['English']
},
// {
//   id: 10,
//   name: 'Dr. Fatooie',
//   firstName: 'Dr. Fatooie',
//   image: '/images/Fatooie.jpeg',
//   qualifications: 'MD (Dermatology)',
//   rating: 5.0,
//   specialization: 'Dermatology',
//   experience: '10 years of professional experience ',
//   isDHALicensed: true,
//   expertise: [
//     'Specialized in diagnosis and treatment of skin, hair, and nail disorders',
//     'Expertise in cosmetic dermatology, laser treatments, and skin rejuvenation',
//     'Successfully treated 500+ patients with personalized skincare and treatment plans',
//   ],
//   languages: ['English']
// },
{
  id: 10,
  name: 'Preethi',
  firstName: 'Preethi',
  image: '/images/Preethi.jpeg',
  qualifications: 'Housekeeping',
  rating: 5.0,
  specialization: 'Housekeeping',
  experience: '5+ Years of experience',
  isDHALicensed: false,
  expertise: [
    'Skilled in maintaining cleanliness and hygiene in residential and commercial spaces',
    'Expertise in organizing, cleaning, and managing household tasks efficiently',
    'Known for attention to detail, reliability, and creating a tidy, safe environment',
  ],
  languages: ['English']
},
{
  id: 11,
  name: 'Dr. Sahar Zomorrodi',
  firstName: 'Dr. Sahar',
  image: '/images/Sahar.jpeg',
  qualifications: 'DHA-licensed General Practitioner',
  rating: 5.0,
  specialization: 'General Practitioner',
  experience: '14 Years of experience',
  isDHALicensed: true,
  expertise: [
    'Holds a diploma from the American Aesthetic Academy',
    'Skilled in non-surgical cosmetic procedures, skin rejuvenation, and anti-aging treatments',
    'Committed to delivering safe, personalized, and results-driven care',
  ],
  languages: ['English']
},
{
  id: 12,
  name: 'Dr Mahrokh Fotooei',
  firstName: 'Mahrokh',
  image: '/images/Fatooie.jpeg',
  qualifications: 'DHA-Licensed Dermatology and Aesthetic Specialist',
  rating: 4.9,
  specialization: 'Clinical & Aesthetic Dermatology',
  experience: '6+ Years Experience',
  isDHALicensed: true,
  expertise: [
    'Individualized, evidence-based dermatological care',
    'Specialized in injectables and facial contouring',
    'Expertise in thread lifting and non-surgical skin rejuvenation'
  ],
  languages: ['English']
},
{
  id: 13,
  name: 'Dr Hirbod Gilandoust',
  firstName: 'Hirbod',
  image: '/images/Hirbod.jpeg',
  qualifications: 'DHA-Licensed Dentist',
  rating: 4.8,
  specialization: 'Esthetic Dentistry & Dental Surgery',
  experience: '7+ Years Experience',
  isDHALicensed: true,
  expertise: [
    'Advanced esthetic dental treatments',
    'Dental restorations and prosthetics',
    'Root canal treatments (Endodontics)',
    'Comprehensive dental surgery procedures'
  ],
  languages: ['English']
},
  ];

  const renderStars = (rating, size = 'w-4 h-4') => {
    return [1, 2, 3, 4, 5].map((star) => {
      const isFull = star <= Math.floor(rating);
      const isHalf = !isFull && star === Math.ceil(rating) && rating % 1 >= 0.5;
      
      if (isHalf) {
        return (
          <div key={star} className={`relative ${size}`}>
            <svg className={`${size} text-gray-300 absolute inset-0`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className={`${size} text-[#C9A961] absolute inset-0`} fill="currentColor" viewBox="0 0 20 20" style={{ clipPath: 'inset(0 50% 0 0)' }}>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        );
      }
      
      return (
        <svg key={star} className={`${size} ${isFull ? 'text-[#C9A961]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    });
  };

  return (
    <section 
      id="experts" 
      ref={sectionRef}
      className="relative w-full bg-[#F9FAFB] py-12 sm:py-16 lg:py-20 overflow-hidden font-sans"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block mb-5 lg:mb-6">
           
            <span className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm">{badge}</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight max-w-4xl">
            {title.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>

          <p className='text-[15px] text-[#6B7280] leading-relaxed'>
            {description}
          </p>
        </div>

        {/* Doctor Cards Slider */}
        <div className="relative mb-12">
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <button
              onClick={() => {
                const el = document.getElementById('experts-slider');
                if (!el) return;
                const visible = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
                const step = el.offsetWidth / visible;
                el.scrollBy({ left: -step, behavior: 'smooth' });
              }}
              className="rounded-full bg-white shadow-md border border-gray-200 text-[#1b5e3f] hover:text-white hover:bg-[#1b5e3f] p-2"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center z-10">
            <button
              onClick={() => {
                const el = document.getElementById('experts-slider');
                if (!el) return;
                const visible = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
                const step = el.offsetWidth / visible;
                el.scrollBy({ left: step, behavior: 'smooth' });
              }}
              className="rounded-full bg-white shadow-md border border-gray-200 text-[#1b5e3f] hover:text-white hover:bg-[#1b5e3f] p-2"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div
            id="experts-slider"
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory px-1"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex gap-6 items-stretch">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="snap-start w-full md:w-1/2 lg:w-1/3 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300 flex flex-col">
              {/* Image Container with Overlay - Fixed Height */}
              <div className="relative h-72 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden group flex-shrink-0">
                {doctor.image ? (
                  <Image 
                    src={doctor.image} 
                    alt={doctor.name}
                    fill
                    className="object-cover object-[50%_20%] transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
                    <svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
                          
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
                {/* DHA Licensed Badge */}
                {doctor.isDHALicensed && (
                  <div className="absolute top-4 right-4 bg-[#C9A961] rounded-full px-3 py-1.5 shadow-lg z-10 flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-medium text-white">DHA Licensed</span>
                  </div>
                )}
            
                {/* Bottom Info on Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-3">
                    {renderStars(doctor.rating, 'w-4 h-4')}
                    <span className="text-white text-sm font-medium ml-1">{doctor.rating}</span>
                  </div>
            
                  {/* Doctor Name */}
                  <h3 className="text-xl font-medium text-white mb-1 tracking-tight">
                    {doctor.name}
                  </h3>
            
                  {/* Qualifications */}
                  <p className="text-sm text-white/90 font-normal">
                    {doctor.qualifications}
                  </p>
                </div>
              </div>
            
              {/* Card Body - Flex column with space-between */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Specialization Section - Fixed spacing */}
                <div className="mb-5 pb-5 border-b border-gray-100 flex-shrink-0">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-[#1b5e3f]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">Specialization</span>
                  </div>
                  <p className="text-base font-normal text-[#111827] mb-3 line-clamp-2">
                    {doctor.specialization}
                  </p>
                  <span className="inline-block bg-[#F9FAFB] text-[#6B7280] px-3 py-1.5 rounded-full text-xs font-normal">
                    {doctor.experience}
                  </span>
                </div>
              
                {/* Key Expertise Section - Fixed height container */}
                <div className="mb-5 flex-shrink-0">
                  <h4 className="text-sm font-medium text-[#111827] mb-3">Key Expertise</h4>
                  <ul className="space-y-2.5" style={{ minHeight: '120px' }}>
                    {doctor.expertise.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961] mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-[#6B7280] leading-relaxed line-clamp-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              
                {/* Languages - Fixed spacing */}
                <div className="mb-5 flex-shrink-0">
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map((language, idx) => (
                      <span key={idx} className="text-[#1b5e3f] text-xs font-medium">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              
                {/* CTA Button - Pushed to bottom with mt-auto */}
                <div className="mt-auto">
                  <button
                    onClick={() =>
                      document.getElementById("appointment")?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                    className="w-full bg-gradient-to-r from-[#1b5e3f] via-[#2d7a56] to-[#1b5e3f] text-white px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 hover:shadow-md"
                  >
                    Book with {doctor.firstName}
                  </button>
                </div>
              </div>
            </div>
          ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          #experts-slider {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          #experts-slider::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              <div className="text-4xl sm:text-5xl font-semibold text-[#1b5e3f] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#6B7280] font-normal">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#1b5e3f] via-[#2d7a56] to-[#1b5e3f] rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
            {ctaSection.title}
          </h2>
          <p className="text-base sm:text-lg text-white/90 font-normal mb-8 max-w-2xl mx-auto">
            {ctaSection.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() =>
                document.getElementById("appointment")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="bg-[#C9A961] hover:bg-[#B8984E] text-white px-8 py-3.5 rounded-xl font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {ctaSection.primaryButton}
            </button>
            <button 
              onClick={() => {
                window.location.href = '/doctors';
              }}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-3.5 rounded-xl font-medium text-sm transition-all duration-200"
            >
              {ctaSection.secondaryButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
