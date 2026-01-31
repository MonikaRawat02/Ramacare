import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Sparkles, 
  Leaf, 
  Activity, 
  Stethoscope, 
  X, 
  Phone, 
  Calendar, 
  ChevronDown,
  Shield,
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
  const router = useRouter();
  
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
        .dropdown-animate { animation: slideDown 0.2s ease-out; }
        .dropdown-container { transition: opacity 0.2s ease-out, transform 0.2s ease-out; }
        .dropdown-bridge { height: 8px; position: absolute; top: 100%; left: 0; right: 0; z-index: 9998; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .modal-overlay { animation: fadeIn 0.3s ease-out; }
        .modal-content { animation: slideUp 0.3s ease-out; }
      `}</style>
      
      <header className={`bg-white shadow-sm transition-all duration-300 overflow-visible ${isScrolled ? 'shadow-lg sticky top-0 z-50' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16 py-1">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 flex items-center justify-center rounded flex-shrink-0">
                <img
                  src="/images/Logo.png"
                  alt="Ayurveda Dubai"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-semibold text-gray-900">Ramacare Polyclinic</h1>
                <div className="flex items-center space-x-1">
                  <Shield className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-gray-600" />
                  <span className="text-[9px] sm:text-[10px] text-gray-600">DHA Licensed</span>
                </div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-1.5 xl:space-x-2 flex-nowrap overflow-visible">
              <Link href="/" className="text-gray-700 hover:text-[#1a5f3f] transition-colors text-xs whitespace-nowrap flex-shrink-0">
                About
              </Link>
              
              {treatmentCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="relative flex-shrink-0" onMouseEnter={() => handleDropdownEnter(index)} onMouseLeave={handleDropdownLeave}>
                    <div className="flex items-center cursor-pointer">
                      <Link href={`/services/${category.slug}`} className="text-gray-600 hover:text-[#1a5f3f] transition-colors text-xs whitespace-nowrap">
                        {category.name}
                      </Link>
                      <div className="ml-0.5 pointer-events-none">
                        <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-200 flex-shrink-0 text-gray-600 ${openDropdown === index ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                    
                    {openDropdown === index && <div className="dropdown-bridge" onMouseEnter={() => handleDropdownEnter(index)} onMouseLeave={handleDropdownLeave} />}
                    
                    {openDropdown === index && (
                      <div className="absolute top-full left-0 pt-2 w-56 z-[9999]" onMouseEnter={() => handleDropdownEnter(index)} onMouseLeave={handleDropdownLeave}>
                        <div className="bg-white rounded-md shadow-xl border border-gray-200 py-2 dropdown-animate dropdown-container">
                          <div className="px-3 py-1.5 border-b border-gray-100">
                            <div className="flex items-center gap-1.5">
                              <IconComponent className="w-3 h-3 text-[#1a5f3f]" />
                              <span className="text-[11px] font-semibold text-gray-900">{category.name}</span>
                            </div>
                          </div>
                          <div className="max-h-96 overflow-y-auto scrollbar-hide">
                            {category.subcategories.map((subcategory, subIndex) => (
                              <Link key={subIndex} href={`/services/${subcategory.slug}`} className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#1a5f3f] transition-colors duration-150">
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
              
              <a href="/#testimonials" onClick={handleTestimonialsClick} className="text-gray-700 hover:text-[#1a5f3f] transition-colors cursor-pointer text-xs whitespace-nowrap flex-shrink-0">
                Testimonials
              </a>
              {/* <a href="/#gallery" onClick={handleGalleryClick} className="text-gray-700 hover:text-[#1a5f3f] transition-colors cursor-pointer text-xs whitespace-nowrap flex-shrink-0">
                Gallery
              </a> */}
            </nav>

            <div className="hidden lg:flex items-center space-x-2">
              <button onClick={handleCallNow} className="flex items-center space-x-1 border-2 border-[#1a5f3f] text-[#1a5f3f] rounded-md hover:bg-[#1a5f3f] hover:text-white transition-colors px-2.5 py-1 text-xs">
                <Phone className="w-3.5 h-3.5" />
                <span className="font-medium text-xs">Call Now</span>
              </button>
              <button onClick={handleBookAppointment} className="bg-[#1a5f3f] text-white rounded-md hover:bg-[#154a32] transition-colors font-medium px-3 py-1 text-xs whitespace-nowrap">
                Book Appointment
              </button>
            </div>

            <button className="lg:hidden p-1.5 text-gray-700 hover:text-[#1a5f3f] transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden pb-3 border-t border-gray-200 animate-in slide-in-from-top-2 duration-300">
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
                        <div className="ml-4 mt-2 bg-gray-50 rounded-md p-2 border border-gray-200">
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
            <BeginYourHealingJourneySection isModal={true} onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;