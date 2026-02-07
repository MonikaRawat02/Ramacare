import React from 'react';
import Image from 'next/image';

const DoctorsSection = ({ content }) => {
  // Use content props or defaults
  const badge = content?.badge || 'Medical Expertise';
  const title = content?.title || 'Meet Our Ayurvedic Doctors in Dubai';
  const description = content?.description || 'DHA-licensed practitioners with decades of combined experience in authentic Ayurvedic hairfall treatment';
  const doctors = content?.doctors || [
     {
            id: 1,
            name: 'Dr Shamna Keloth Meethal ',
            title: ' Ayurveda Practitioner',
            qualifications: 'Having 11 years of clinical experience.', 
            specializations: 'General Ayurveda & Preventive Care',
            patientsTreated: ' Successfully treated 800+ patients.',
            rating: '4.9/5',
            image: '/images/Dr Shamna Keloth Meethal.jpeg'
          },
          {
            id: 2,
            name: 'Dr Anan',
            title: 'General Dentist',
            qualifications: 'Having 5 years of experience in dentistry.',
            specializations: 'General Dentistry',
            patientsTreated: 'Successfully treated 500+ patients.',
            rating: '4.9/5',
            image: '/images/Dr Anan.jpeg'
          },
          {
            id: 3,
            name: 'Jeena Mathew',
            title: 'Physiotherapist',
            qualifications: 'Having 8 years of clinical experience.',
            specializations: 'Musculoskeletal Physiotherapy',
            patientsTreated: 'Successfully treated 600+ patients.',
            rating: '4.8/5',
            image: '/images/Jeena Mathew.jpeg'
          }
  ];

  return (
    <section id="our-doctors" className="w-full bg-[#F9FAFB] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm">
            {badge}
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2937] text-center mb-3">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-[#6B7280] text-center max-w-3xl mx-auto mb-10 md:mb-12">
          {description}
        </p>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl overflow-hidden shadow-[-2px_0_8px_rgba(0,0,0,0.04),0_2px_10px_rgba(0,0,0,0.06)] hover:shadow-[-3px_0_12px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100 group"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <div className="w-full h-56 md:h-64 bg-gray-200">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-[50%_20%] transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1.5 flex items-center gap-1.5 shadow-md">
                  <svg className="w-4 h-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-semibold text-[#1F2937]">{doctor.rating}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 md:p-6">
                {/* Doctor Name */}
                <h3 className="text-base md:text-lg font-bold text-[#1F2937] mb-1">
                  {doctor.name}
                </h3>

                {/* Doctor Title */}
                <p className="text-sm font-normal text-[#6B7280] mb-4">
                  {doctor.title}
                </p>

                {/* Credentials */}
                <div className="flex items-start gap-2 mb-2.5">
                  <svg className="w-4 h-4 text-[#2D5F3F] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v9M4 9v9a2 2 0 002 2h2M20 9v9a2 2 0 01-2 2h-2" />
                  </svg>
                  <span className="text-sm text-[#6B7280]">{doctor.qualifications}</span>
                </div>

                {/* Specializations */}
                <div className="flex items-start gap-2 mb-2.5">
                  <svg className="w-4 h-4 text-[#2D5F3F] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-[#6B7280]">{doctor.specializations}</span>
                </div>

                {/* Patients Treated */}
                <div className="flex items-start gap-2 mb-5">
                  <svg className="w-4 h-4 text-[#2D5F3F] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-sm text-[#6B7280]">{doctor.patientsTreated}</span>
                </div>

                {/* Book Button */}
                <button 
                  onClick={() => document.getElementById("book-now")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 bg-white border-2 border-[#2D5F3F] text-[#2D5F3F] hover:bg-[#2D5F3F] hover:text-white shadow-sm hover:shadow-md"
                >
                  Book with {doctor.name.split(' ')[1] || doctor.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;