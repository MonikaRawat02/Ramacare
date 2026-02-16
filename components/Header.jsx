import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { 
  Sparkles, 
  Leaf, 
  Activity, 
  Stethoscope, 
  X, 
  Phone, 
  Calendar, 
  ChevronDown,
  Menu
} from "lucide-react";
import BeginYourHealingJourneySection from './BeginYourHealingJourneySection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, type: 'success', message: '' });
  const router = useRouter();

  const showToast = (message, type = 'success') => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000);
  };
  
  const treatmentCategories = [
    {
      name: 'Aesthetic Dermatology',
      slug: 'aesthetic-dermatology-dubai',
      subcategories: [
        { name: 'Skin Treatment', slug: 'skin-treatment-dubai' },
        { name: 'Hair Treatment', slug: 'hair-treatment-dubai' },
        { name: 'Laser Treatment', slug: 'laser-treatment-dubai' },
        { name: 'Body Shaping', slug: 'body-shaping-dubai' }
      ],
      icon: Sparkles
    },
    {
      name: 'Dental',
      slug: 'dental-dubai',
      subcategories: [
        { name: 'Composite Veneers', slug: 'composite-veneers-dubai' },
        { name: 'Dental Veneers', slug: 'dental-veneers-dubai' },
        { name: 'Root Canal Treatment', slug: 'root-canal-treatment-dubai' },
        { name: 'Snap On Smile', slug: 'snap-on-smile-dubai' },
        { name: 'Teeth Bleaching', slug: 'teeth-bleaching-dubai' },
        { name: 'Teeth Dentures', slug: 'teeth-dentures-dubai' },
        { name: 'Tooth Composite Restoration', slug: 'teeth-composite-restoration-dubai' },
        { name: 'Braces (Metal & Ceramic)', slug: 'braces-metal-ceramic-dubai' },
        { name: 'Dental Crown Bridges', slug: 'dental-crown-bridges-dubai' },
        { name: 'Teeth Scaling & Polishing', slug: 'teeth-scaling-polishing-dubai' },
        { name: 'Gum Disease Treatment', slug: 'gum-disease-treatment-dubai' }
      ],
      icon: Sparkles
    },
    {
      name: 'Ayurveda',
      slug: 'ayurveda-dubai',
      subcategories: [
        { name: 'Ayurvedic Hairfall Treatment', slug: 'ayurvedic-hairfall-treatment-dubai' },
        { name: 'Analysis Of Individual', slug: 'analysis-of-individual-dubai' },
        { name: 'Skin Diseases Treatment', slug: 'skin-diseases-treatment-dubai' },
        { name: 'Ayurvedic Diet Plan', slug: 'ayurvedic-diet-plan-dubai' },
        { name: 'Panchakarma Treatment', slug: 'panchakarma-treatment-dubai' },
        { name: 'Gastrointestinal Diseases Treatment', slug: 'gastrointestinal-diseases-treatment-dubai' },
        { name: 'PCOS Treatment', slug: 'pcos-treatment-dubai' }
      ],
      icon: Leaf
    },
    {
      name: 'Physiotherapy',
      slug: 'physiotherapy-dubai',
      subcategories: [
        { name: 'Ultrasound Therapy', slug: 'ultrasound-therapy-dubai' },
        { name: 'Electrotherapy', slug: 'electrotherapy-dubai' },
        { name: 'Pelvic Floor Therapy', slug: 'pelvic-floor-therapy-dubai' },
        { name: 'Scoliosis Treatment', slug: 'scoliosis-treatment-dubai' },
        { name: 'Functional Exercises', slug: 'functional-exercises-dubai' },
        { name: 'Dry Needling', slug: 'dry-needling-dubai' }
      ],
      icon: Activity
    },
    {
      name: 'General Physician',
      slug: 'general-physician-dubai',
      subcategories: [
        { name: 'Gastrointestinal Disorders', slug: 'gastrointestinal-disorders-dubai' },
        { name: 'Management of Allergy', slug: 'management-of-allergy-dubai' },
        { name: 'Wound Stitching Services', slug: 'wound-stitching-services-dubai' },
        { name: 'Minor Injury Care', slug: 'minor-injury-care-dubai' },
        { name: 'Treatment of Acute Infections', slug: 'treatment-of-acute-infections-dubai' },
        { name: 'Dyslipidemia Diagnosis and Treatment', slug: 'dyslipidemia-diagnosis-and-treatment' },
        { name: 'Personalized Slimming Programs', slug: 'personalized-slimming-programs' },
        { name: 'Thyroid Dysfunction Solutions', slug: 'thyroid-dysfunction-solutions-dubai' },
        { name: 'Asthma and COPD Expertise', slug: 'asthma-and-copd-expertise-dubai' },
        { name: 'Diabetes Mellitus Care', slug: 'diabetes-mellitus-care-dubai' },
        { name: 'Specialized Hypertension Management', slug: 'specialized-hypertension-management' },
        { name: 'Expertise in Routine Check-Ups', slug: 'routine-check-ups-dubai' },
        { name: 'Comprehensive Physical Examinations', slug: 'comprehensive-physical-examinations-dubai' }
      ],
      icon: Stethoscope
    },
    {
      name: 'Facial',
      slug: 'facial-dubai',
      subcategories: [
        { name: 'Signature Hydra Facial', slug: 'signature-hydra-facial-dubai' },
        { name: 'Face PRP in Dubai', slug: 'face-prp-in-dubai' },
        { name: 'Golden Elixir Facial', slug: 'golden-elixir-facial-dubai' },
        { name: 'Exosomes Facial Dubai', slug: 'exosomes-facial-dubai' },
        { name: 'Oxygeneo Illuminate Facial', slug: 'oxygeneo-illuminate-facial-dubai' }
      ],
      icon: Sparkles
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isModalOpen || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isMenuOpen]);

  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  const handleDropdownEnter = (index) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setOpenDropdown(index);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
    setDropdownTimeout(timeout);
  };

  const handleBookAppointment = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleTestimonialsClick = (e) => {
    e.preventDefault();
    const testimonialsSection = document.getElementById('testimonials');
    if (testimonialsSection) {
      const headerOffset = 80;
      const elementPosition = testimonialsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else {
      router.push('/#testimonials');
    }
    setIsMenuOpen(false);
  };

  const handleGalleryClick = (e) => {
    e.preventDefault();
    if (router.pathname === '/') {
      const gallerySection = document.getElementById('gallery');
      if (gallerySection) {
        const headerOffset = 80;
        const elementPosition = gallerySection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      router.push('/#gallery');
    }
    setIsMenuOpen(false);
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+971042862006';
  };

  return (
    <>
      <style jsx global>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes toastSlideIn {
          from { transform: translateX(120%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .dropdown-animate { animation: slideDown 0.2s ease-out; }
        .dropdown-container { transition: opacity 0.2s ease-out, transform 0.2s ease-out; }
        .dropdown-bridge { height: 8px; position: absolute; top: 100%; left: 0; right: 0; z-index: 9998; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        
        /* Custom scrollbar for dropdowns - visible but subtle */
        .dropdown-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .dropdown-scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        .dropdown-scroll::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
        .dropdown-scroll::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
        .dropdown-scroll {
          scrollbar-width: thin;
          scrollbar-color: #c1c1c1 #f1f1f1;
        }
        
        .modal-overlay { animation: fadeIn 0.3s ease-out; }
        .modal-content { animation: slideUp 0.3s ease-out; }

        /* Custom breakpoint for 1024px to show hamburger menu */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .hide-at-1024 {
            display: none !important;
          }
          .show-at-1024 {
            display: flex !important;
          }
        }
      `}</style>
      
      <header className={`bg-white shadow-sm transition-all duration-300 overflow-visible ${isScrolled ? 'shadow-lg sticky top-0 z-50' : ''}`}>
        {toast.show && (
          <div className="fixed top-6 right-6 z-[10000]" style={{ animation: 'toastSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <div className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl border backdrop-blur-sm transition-all ${
              toast.type === 'success' 
                ? 'bg-emerald-600/95 border-emerald-500 text-white' 
                : 'bg-red-600/95 border-red-500 text-white'
            }`}>
              {toast.type === 'success' ? (
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
              ) : (
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
              )}
              <span className="font-medium text-sm tracking-wide">{toast.message}</span>
            </div>
          </div>
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16 py-1">
            <div className="flex items-center space-x-2">
              <Link href="/" className="w-12 h-12 flex items-center justify-center rounded flex-shrink-0 relative">
                <Image
                  src="/images/Logo.png"
                  alt="Ayurveda Dubai"
                  width={40}
                  height={40}
                  className="object-contain cursor-pointer"
                />
              </Link>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-[#1C4942]">RamaCare</h1>
              </div>
            </div>

            {/* Desktop Navigation - Hidden at 1024px, visible at 1280px+ */}
            <nav className="hidden xl:flex items-center space-x-1 xl:space-x-1.5 flex-nowrap overflow-visible hide-at-1024">
              {/* <Link href="/" className="text-gray-700 hover:text-[#1a5f3f] transition-colors text-[11px] xl:text-xs whitespace-nowrap flex-shrink-0 px-1">
                About
              </Link> */}
              
              {treatmentCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="relative flex-shrink-0" onMouseEnter={() => handleDropdownEnter(index)} onMouseLeave={handleDropdownLeave}>
                    <div className="flex items-center cursor-pointer">
                      <Link href={`/services/${category.slug}`} className="text-gray-600 hover:text-[#1a5f3f] transition-colors text-[11px] xl:text-xs whitespace-nowrap px-1">
                        {category.name}
                      </Link>
                      <div className="ml-0.5 pointer-events-none">
                        <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 flex-shrink-0 text-gray-600 ${openDropdown === index ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                    
                    {openDropdown === index && <div className="dropdown-bridge" onMouseEnter={() => handleDropdownEnter(index)} onMouseLeave={handleDropdownLeave} />}
                    
                    {openDropdown === index && (
                      <div className="absolute top-full left-0 pt-2 w-64 z-[9999]" onMouseEnter={() => handleDropdownEnter(index)} onMouseLeave={handleDropdownLeave}>
                        <div className="bg-white rounded-md shadow-xl border border-gray-200 py-2 dropdown-animate dropdown-container">
                          <div className="px-3 py-1.5 border-b border-gray-100">
                            <div className="flex items-center gap-1.5">
                              <IconComponent className="w-3 h-3 text-[#1a5f3f]" />
                              <span className="text-[11px] font-semibold text-gray-900">{category.name}</span>
                            </div>
                          </div>
                          <div className="max-h-[400px] overflow-y-auto dropdown-scroll">
                            {category.subcategories.map((subcategory, subIndex) => (
                              <Link 
                                key={subIndex} 
                                href={`/services/${subcategory.slug}`} 
                                className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#1a5f3f] transition-colors duration-150"
                              >
                                {subcategory.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              
              <a href="/#testimonials" onClick={handleTestimonialsClick} className="text-gray-700 hover:text-[#1a5f3f] transition-colors cursor-pointer text-[11px] xl:text-xs whitespace-nowrap flex-shrink-0 px-1">
                Testimonials
              </a>
              <Link href="/blog" className="text-gray-700 hover:text-[#1a5f3f] transition-colors text-[11px] xl:text-xs whitespace-nowrap flex-shrink-0 px-1">
                Blogs
              </Link>
            </nav>

            {/* Desktop Buttons - Hidden at 1024px, visible at 1280px+ */}
            <div className="hidden xl:flex items-center space-x-1.5 xl:space-x-2 hide-at-1024">
              <button onClick={handleCallNow} className="flex items-center space-x-1 border-2 border-[#1a5f3f] text-[#1a5f3f] rounded-md hover:bg-[#1a5f3f] hover:text-white transition-colors px-2 xl:px-2.5 py-1 text-[11px] xl:text-xs">
                <Phone className="w-3.5 h-3.5" />
                <span className="font-medium">Call Now</span>
              </button>
              <button onClick={handleBookAppointment} className="bg-[#1a5f3f] text-white rounded-md hover:bg-[#154a32] transition-colors font-medium px-2.5 xl:px-3 py-1 text-[11px] xl:text-xs whitespace-nowrap">
                Book Appointment
              </button>
            </div>

            {/* Hamburger Button - Visible below 1280px (including at 1024px) */}
            <button className="xl:hidden p-1.5 text-gray-700 hover:text-[#1a5f3f] transition-colors show-at-1024" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu - Visible below 1280px (including at 1024px) */}
          {isMenuOpen && (
            <div className="xl:hidden pb-3 border-t border-gray-200 animate-in slide-in-from-top-2 duration-300">
              <nav className="flex flex-col space-y-3 mt-3">
                <div className="font-semibold text-gray-800 text-sm mb-1">Treatment Categories</div>
                {treatmentCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={index}>
                      <div className="flex items-center justify-between w-full">
                        <Link href={`/services/${category.slug}`} className={`flex-1 flex items-center gap-2 transition-colors ${index === 0 ? 'text-[#1a5f3f]' : 'text-gray-600 hover:text-[#1a5f3f]'}`} onClick={() => setIsMenuOpen(false)}>
                          <IconComponent className="w-3.5 h-3.5" />
                          <span>{category.name}</span>
                        </Link>
                        <button className="p-1 transition-colors text-gray-600 hover:text-[#1a5f3f]" onClick={() => setOpenMobileDropdown(openMobileDropdown === index ? null : index)}>
                          <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === index ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {openMobileDropdown === index && (
                        <div className="ml-4 mt-2 bg-gray-50 rounded-md p-2 border border-gray-200 max-h-80 overflow-y-auto dropdown-scroll">
                          {category.subcategories.map((subcategory, subIndex) => (
                            <Link key={subIndex} href={`/services/${subcategory.slug}`} className="block px-3 py-2 text-xs text-gray-700 hover:bg-white hover:text-[#1a5f3f] rounded transition-colors" onClick={() => setIsMenuOpen(false)}>
                              {subcategory.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
                
                <div className="font-semibold text-gray-800 text-sm mb-1 pt-2 border-t border-gray-200">Navigation</div>
                <Link href="/" className="text-gray-700 hover:text-[#1a5f3f] transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
                <a href="/#testimonials" onClick={handleTestimonialsClick} className="text-gray-700 hover:text-[#1a5f3f] transition-colors cursor-pointer">Testimonials</a>
                <Link href="/blog" className="text-gray-700 hover:text-[#1a5f3f] transition-colors" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
                
                <div className="flex flex-col space-y-2 pt-2">
                  <button onClick={handleCallNow} className="flex items-center justify-center space-x-1.5 px-3 py-1.5 border-2 border-[#1a5f3f] text-[#1a5f3f] rounded-md hover:bg-[#1a5f3f] hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                    <span className="font-medium text-xs">Call Now</span>
                  </button>
                  <button onClick={handleBookAppointment} className="px-4 py-1.5 bg-[#1a5f3f] text-white rounded-md hover:bg-[#154a32] transition-colors font-medium text-xs">
                    Book Appointment
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 modal-overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={handleCloseModal}>
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl modal-content scrollbar-hide" onClick={(e) => e.stopPropagation()}>
            <button onClick={handleCloseModal} className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors" aria-label="Close modal">
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <BeginYourHealingJourneySection 
              isModal={true} 
              onClose={handleCloseModal} 
              onSubmissionSuccess={() => showToast('Appointment request submitted successfully!', 'success')}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Header;