import React, { useEffect, useRef, useState } from 'react';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import BeginYourHealingJourneySection from '../../../components/BeginYourHealingJourneySection';

const DoctorProfilePage = ({ doctor }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, type: 'success', message: '' });
  
  const showToast = (message, type = 'success') => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000);
  };
  const sectionRef = useRef(null);

  // Sample doctor data - in a real scenario this would come from props or API
  const sampleDoctor = {
    id: 1,
    name: 'Dr. John Smith',
    firstName: 'John',
    image: '/images/default-doctor.jpg',
    qualifications: 'MD, PhD (Internal Medicine)',
    rating: 4.9,
    specialization: 'Internal Medicine & Diagnostics',
    experience: '12+ Years Experience | DHA Licensed',
    expertise: [
      'Comprehensive internal medicine and diagnostic services',
      'Chronic disease management and prevention',
      'Successfully treated 700+ patients with evidence-based medicine'
    ],
    languages: ['English'],
    biography: 'Dr. John Smith is a board-certified internist with over 12 years of experience in internal medicine. He specializes in complex diagnostic challenges and chronic disease management. Dr. Smith is passionate about providing compassionate, evidence-based care to his patients.',
    education: [
      'MD from Harvard Medical School',
      'Residency in Internal Medicine at Johns Hopkins Hospital',
      'Fellowship in Advanced Diagnostics at Mayo Clinic'
    ],
    certifications: [
      'Board Certified in Internal Medicine',
      'DHA License #12345',
      'Advanced Cardiac Life Support (ACLS)'
    ]
  };

  const currentDoctor = doctor || sampleDoctor;

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
    <Layout>
      <Head>
        <title>{currentDoctor.name} - Doctor Profile - RamaCare</title>
        <meta name="description" content={`Learn more about ${currentDoctor.name}, ${currentDoctor.specialization} at RamaCare`} />
      </Head>
      
      <main>
        <section 
          id="doctor-profile" 
          ref={sectionRef}
          className="relative w-full bg-[#F9FAFB] py-12 sm:py-16 lg:py-20 overflow-hidden font-sans"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back to all doctors */}
            <div className="mb-8">
              <button 
                onClick={() => window.location.href = '/doctors'}
                className="flex items-center gap-2 text-[#1b5e3f] hover:text-[#2d7a56] font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Doctors
              </button>
            </div>

            {/* Doctor Profile Header */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] mb-12">
              <div className="lg:flex">
                {/* Doctor Image and Info */}
                <div className="lg:w-1/3 p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="relative w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden mx-auto">
                    {currentDoctor.image ? (
                      <Image 
                        src={currentDoctor.image} 
                        alt={currentDoctor.name}
                        fill
                        className="object-cover object-[50%_20%]"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
                        <svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <h1 className="text-2xl font-bold text-[#111827] mb-2">{currentDoctor.name}</h1>
                    <p className="text-lg text-[#6B7280] mb-4">{currentDoctor.qualifications}</p>
                    
                    <div className="flex items-center justify-center gap-1.5 mb-4">
                      {renderStars(currentDoctor.rating, 'w-5 h-5')}
                      <span className="text-[#111827] font-medium ml-1">{currentDoctor.rating}</span>
                    </div>
                    
                    <div className="inline-block bg-[#F9FAFB] text-[#6B7280] px-4 py-2 rounded-full text-sm font-medium mb-4">
                      {currentDoctor.experience}
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {currentDoctor.languages.map((language, idx) => (
                        <span key={idx} className="bg-[#E8E3D8] text-[#3d5f4a] text-xs font-medium px-3 py-1.5 rounded-full">
                          {language}
                        </span>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full bg-gradient-to-r from-[#1b5e3f] via-[#2d7a56] to-[#1b5e3f] text-white px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 hover:shadow-md"
                    >
                      Book Appointment with {currentDoctor.firstName}
                    </button>
                  </div>
                </div>
                
                {/* Doctor Details */}
                <div className="lg:w-2/3 p-8">
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-[#111827] mb-4">About {currentDoctor.firstName}</h2>
                    <p className="text-[#6B7280] leading-relaxed">
                      {currentDoctor.biography}
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-[#111827] mb-4">Specialization</h2>
                    <p className="text-[#6B7280] font-medium mb-2">{currentDoctor.specialization}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-[#111827] mb-4">Key Expertise</h2>
                    <ul className="space-y-3">
                      {currentDoctor.expertise.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#C9A961] mt-2.5 flex-shrink-0"></span>
                          <span className="text-[#6B7280]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-[#111827] mb-4">Education</h2>
                    <ul className="space-y-3">
                      {currentDoctor.education.map((edu, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[#C9A961] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-[#6B7280]">{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold text-[#111827] mb-4">Certifications</h2>
                    <ul className="space-y-3">
                      {currentDoctor.certifications.map((cert, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[#C9A961] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-[#6B7280]">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Related Doctors */}
            <div className="bg-gradient-to-r from-[#1b5e3f] via-[#2d7a56] to-[#1b5e3f] rounded-3xl p-8 sm:p-12 text-center shadow-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
                Need Another Specialist?
              </h2>
              <p className="text-base sm:text-lg text-white/90 font-normal mb-8 max-w-2xl mx-auto">
                Explore our team of expert physicians to find the right specialist for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#C9A961] hover:bg-[#B8984E] text-white px-8 py-3.5 rounded-xl font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Book Consultation Now
                </button>
                <button 
                  onClick={() => window.location.href = '/doctors'}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-3.5 rounded-xl font-medium text-sm transition-all duration-200"
                >
                  View All Doctors
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Appointment Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
            <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="p-6">
                <BeginYourHealingJourneySection 
                  isModal={true} 
                  onClose={() => setIsModalOpen(false)} 
                  onSubmissionSuccess={() => {
                    setIsModalOpen(false);
                    showToast('Appointment booked!', 'success');
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </main>
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-4 right-4 z-[10000] animate-fadeIn">
          <div className={`px-3 py-2 rounded-full text-xs font-medium text-white shadow-md ${toast.type === 'success' ? 'bg-emerald-600' : 'bg-red-600'}`}>
            {toast.message}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default DoctorProfilePage;