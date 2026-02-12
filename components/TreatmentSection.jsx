import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { 
  Sparkles, Scissors, Zap, Target, Heart, Activity, Stethoscope, 
  Smile, Droplets, Brain, Shield, Pill, Users, Calendar, 
  PlusCircle, Thermometer, BarChart, ClipboardList, UserCheck, Wind , TrendingUp,
  Crosshair, CheckCircle2,
} from 'lucide-react';

const TreatmentSection = ({ category, content }) => {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Default treatments (Ayurveda - for homepage)
  const defaultTreatments = [
    {
    id: 1,
    title: 'Aesthetic Dermatology',
    slug: 'aesthetic-dermatology-dubai',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69C12 2.69 7 7.69 7 12.69c0 3.31 2.69 6 6 6s6-2.69 6-6c0-5-5-10-7-10z" />
      </svg>
    ),
    subtitle: 'Advanced Care for Skin & Hair Health',
    duration: '30–90 Minutes',
    badgeColor: 'purple',
    benefits: [
      'Anti-aging therapies to reduce wrinkles and fine lines',
      'Treatment for acne, pigmentation, scars, and sun damage',
      'Brightening and rejuvenation for a youthful complexion',
      
    ],
    idealFor: 'Dubai residents exposed to sun, pollution, and environmental stress , Individuals seeking safe, long-lasting aesthetic dermatology solutions',
    image: '/images/aesthetic.png',
    alt: 'Advanced aesthetic dermatology treatment room designed for safe, modern skin care procedures.'
  },
  {
    id: 2,
    title: 'Dental  Treatment',
    slug: 'dental-dubai',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    subtitle: 'Complete Care for Strong Teeth & a Confident Smile',
    duration: '30–120 Minutes',
    badgeColor: 'blue',
    benefits: [
      'Preventive, restorative, and cosmetic dental treatments under one roof',
      'Solutions for cavities, gum disease, sensitivity, and tooth pain',
      'Smile enhancement with whitening, veneers, crowns, and alignment care',
     
    ],
    idealFor: 'Individuals needing routine dental check-ups and oral health maintenance , Patients looking to restore function, comfort, and smile aesthetics',
    image: '/images/dental.png',
    alt: 'Modern dental clinic interior offering advanced dental in Dubai with a clean and comfortable environment.'
  },
  {
    id: 3,
    title: 'Ayurveda Treatment',
    slug: 'ayurveda-dubai',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    subtitle: 'Holistic Healing for Mind & Body Balance',
    duration: '7–21 Days',
    badgeColor: 'teal',
    benefits: [
      'Root-cause treatment for chronic health concerns',
      'Natural therapies to improve immunity, digestion, and energy levels',
      'Stress relief, detoxification, and overall body balance',
    ],
    idealFor: 'Individuals seeking natural, chemical-free healing solutions , Patients looking for long-term wellness through traditional Ayurvedic care',
    image: '/images/ayurveda.png',
    alt: 'Ayurveda consultation focused on holistic health assessment and natural healing methods'
  },
  {
    id: 4,
    title: 'Physiotherapy Treatment ',
    slug: 'physiotherapy-dubai',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    subtitle: ' Restoring Movement, Strength & Comfort',
    duration: '45–60 Minutes',
    badgeColor: 'orange',
    benefits: [
      'Pain management for neck, back, joint, and sports injuries',
      'Improves mobility, flexibility, and muscle strength',
      'Post-surgery and injury rehabilitation for faster recovery',
    ],
    idealFor: 'Individuals with chronic pain, stiffness, or mobility issues , Patients recovering from injuries, surgeries, or posture-related problems',
    image: '/images/physio.png',
    alt: 'Physiotherapy session focused on pain relief, mobility improvement, and physical rehabilitation.'
  },
  {
    id: 5,
    title: 'General Physician Treatment',
    slug: 'general-physician-dubai',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    subtitle: 'Complete Primary Care for Everyday Health',
    duration: '20–30 Minutes',
    badgeColor: 'green',
    benefits: [
      'Management of chronic conditions like diabetes, hypertension, and asthma',
      'Preventive health checkups, vaccinations, and lifestyle guidance',
      'Comprehensive diagnosis and treatment for common illnesses and infections',
      
    ],
    idealFor: 'Individuals seeking reliable primary healthcare for acute or chronic concerns , Patients needing routine health monitoring, medical advice, or referrals',
    image: '/images/genral.png',
    alt: 'General physician consultation providing primary healthcare, diagnosis, and preventive care.'
  },
  {
    id: 6,
    title: 'Facial Treatments',
    slug: 'facial-dubai',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    subtitle: 'Advanced Care for Radiant, Healthy Skin',
    duration: '45–75 Minutes',
    badgeColor: 'pink',
    benefits: [
      'Deep cleansing, hydration, and nourishment for glowing skin',
      'Treatment for acne, pigmentation, dullness, and uneven texture',
      'Anti-aging facials to reduce fine lines, wrinkles, and skin fatigue',
      
    ],
    idealFor: 'Dubai residents exposed to sun, pollution, and daily environmental stress , Individuals seeking safe, effective, and long-lasting facial treatments',
    image: '/images/facial.png',
    alt: 'Facial treatment designed to cleanse, nourish, and rejuvenate the skin in a professional clinic.'
  },
  ];

  // Icon mapping for string-based icon names
  const iconMap = {
    'Sparkles': Sparkles,
    'Scissors': Scissors,
    'Zap': Zap,
    'Target': Target,
    'Heart': Heart,
    'Activity': Activity,
    'Stethoscope': Stethoscope,
    'Smile': Smile,
    'Droplets': Droplets,
    'Brain': Brain,
    'Shield': Shield,
    'Pill': Pill,
    'Users': Users,
    'Calendar': Calendar,
    'Plus': PlusCircle,
    'Thermometer': Thermometer,
    'BarChart': BarChart,
    'Wind': Wind,
    'TrendingUp': TrendingUp,
    'Crosshair': Crosshair,
    'Clipboard': ClipboardList,
    'UserCheck': UserCheck   
  };

  // Helper function to get icon component
  const getIconComponent = (icon) => {
    if (typeof icon === 'string') {
      const IconComponent = iconMap[icon];
      if (IconComponent) {
        return <IconComponent className="w-6 h-6" />;
      }
      // Fallback for emoji or unknown string icons
      return <span className="text-2xl">{icon}</span>;
    }
    // If it's already a React component, return as is
    return icon;
  };

  // Use content props if provided, otherwise use defaults
  const badge = content?.badge || 'Comprehensive Polyclinic Solutions';
  const heading = content?.heading || 'Integrated Health & Wellness';
  const subtitle = content?.subtitle || 'Select a treatment below to discover how Polyclinic can transform your health and wellbeing in Dubai.';
  const treatmentsList = content?.treatments || defaultTreatments;
  
  const [selectedTreatmentId, setSelectedTreatmentId] = useState(treatmentsList.length > 0 ? treatmentsList[0].id : null);
  const selectedTreatment = treatmentsList.find(t => t.id === selectedTreatmentId) || treatmentsList[0];

  const handleTreatmentClick = (treatmentId, slug) => {
    setSelectedTreatmentId(treatmentId);
  };

  const handleLearnMore = () => {
    if (selectedTreatment.fullSlug) {
      router.push(selectedTreatment.fullSlug);
    } else if (category && category !== 'all') {
      const categorySlug = category.replace(/\s+/g, '-').toLowerCase();
      router.push(`/services/${categorySlug}-dubai/${selectedTreatment.slug}`);
    } else {
      const slugWithDubai = selectedTreatment.slug.endsWith('-dubai') 
        ? selectedTreatment.slug 
        : `${selectedTreatment.slug}-dubai`;
      router.push(`/services/${slugWithDubai}`);
    }
  };

  const handleConsultationClick = () => {
    const section = document.getElementById('book-consultation');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
        rel="stylesheet" 
      />

      <section id="treatments" className="relative w-full bg-white py-12 md:py-16 overflow-hidden font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content - Centered */}
          <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
            {/* Pill Label */}
            <div className="inline-block mb-3 sm:mb-4">
              <span className="bg-[#E8E3D8] text-[#1E5A3C] px-4 py-2 rounded-full font-medium text-sm flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {badge}
              </span>
            </div>
            
            {/* Large Bold Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#111827] leading-tight max-w-4xl mb-4">
              {heading.includes('\n') ? (
                <>
                  {heading.split('\n')[0]}<br />
                  {heading.split('\n')[1]}
                </>
              ) : (
                heading
              )}
            </h2>

            {/* Subtitle Text */}
            <p className="text-[15px] text-[#6B7280] leading-relaxed font-normal max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Treatment Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-4 mb-10 md:mb-12">
            {treatmentsList.map((treatment) => {
              const isSelected = treatment.id === selectedTreatmentId;
              const isHovered = hoveredCard === treatment.id;
              return (
                <div
                  key={treatment.id}
                  onClick={() => handleTreatmentClick(treatment.id, treatment.slug)}
                  onMouseEnter={() => setHoveredCard(treatment.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`
                    relative rounded-2xl p-5 cursor-pointer
                    transition-all duration-200
                    ${isSelected 
                      ? 'bg-[#1E5A3C] border-2 border-[#C9A547] shadow-lg text-white'
                      : isHovered
                        ? 'bg-white border-2 border-[#C9A547] shadow-md'
                        : 'bg-white border-2 border-[#E5E7EB] shadow-sm hover:shadow-md'
                    }
                  `}
                >
                  {/* Icon Container */}
                  <div className={`
                    w-14 h-14 rounded-xl
                    flex items-center justify-center mb-3.5 mx-auto
                    transition-all duration-200
                    ${isSelected 
                      ? 'bg-[#C9A547]' 
                      : isHovered
                        ? 'bg-[#1E5A3C]'
                        : 'bg-[#F5F3EE]'
                    }
                  `}>
                    <div className={`transition-colors duration-200 ${
                      isSelected || isHovered ? 'text-white' : 'text-[#1E5A3C]'
                    }`}>
                      {getIconComponent(treatment.icon)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`
                    text-center text-sm font-semibold leading-tight
                    transition-colors duration-200
                    ${isSelected 
                      ? 'text-white' 
                      : isHovered
                        ? 'text-[#111827]'
                        : 'text-[#111827]'
                    }
                  `}>
                    {treatment.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Detailed Treatment Preview Panel */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[450px] bg-gray-100 overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
                <Image 
                  src={selectedTreatment.image || 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'}
                  alt={selectedTreatment.alt || `${selectedTreatment.title} - ${selectedTreatment.subtitle}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10"></div>
                
                {/* Duration Badge - Dynamic Color Based on Treatment */}
                {/* <div className={`absolute top-4 left-4 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                  selectedTreatment.badgeColor === 'teal' 
                    ? 'bg-[#14B8A6]' 
                    : selectedTreatment.badgeColor === 'pink'
                    ? 'bg-gradient-to-r from-[#EC4899] to-[#DB2777]'
                    : selectedTreatment.badgeColor === 'purple'
                    ? 'bg-gradient-to-r from-[#9333EA] to-[#7C3AED]'
                    : selectedTreatment.badgeColor === 'orange'
                    ? 'bg-gradient-to-r from-[#F97316] to-[#EA580C]'
                    : selectedTreatment.badgeColor === 'blue'
                    ? 'bg-gradient-to-r from-[#3B82F6] to-[#2563EB]'
                    : selectedTreatment.badgeColor === 'green'
                    ? 'bg-gradient-to-r from-[#10B981] to-[#059669]'
                    : 'bg-[#14B8A6]'
                }`}>
                  {selectedTreatment.duration}
                </div> */}
              </div>

              {/* Right Side - Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-2">
                  {selectedTreatment.title}
                </h3>

                {/* Subtitle */}
                <p className="text-base text-[#6B7280] mb-6 font-normal">
                  {selectedTreatment.subtitle}
                </p>

                {/* Treatment Benefits Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#111827] mb-4">
                    Treatment Benefits
                  </h4>
                  <ul className="space-y-3">
                    {selectedTreatment.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        {/* CircleCheckBig icon with gradient background */}
                        <div className="w-6 h-6 bg-gradient-to-br from-[#1b5e3f] to-[#c9a961] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                            <path d="m9 11 3 3L22 4"></path>
                          </svg>
                        </div>
                        <span className="text-[#4B5563] text-[15px] font-normal leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For Section - Fully rounded box */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#111827] mb-3">
                    Ideal For:
                  </h4>
                  <div className="bg-[#FFFBF5] border-l-4 border-[#C9A547] rounded-xl p-4">
                    <p className="text-[#4B5563] text-[15px] leading-relaxed font-normal">
                      {selectedTreatment.idealFor}
                    </p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => window.open('https://wa.me/971566597878', '_blank')}
                    className="flex items-center justify-center bg-[#1E5A3C] text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#16472F] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-95"
                  >
                    <span>Book This Treatment</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  <button
                    onClick={handleLearnMore}
                    className="flex items-center justify-center bg-white border-2 border-[#1E5A3C] text-[#1E5A3C] px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#1E5A3C] hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation CTA Block */}
          <div className="mt-12">
            <div 
              className="rounded-2xl shadow-lg py-10 px-8 text-center transition-all duration-300 hover:shadow-xl bg-[#1E5A3C]"
            >
              {/* Heading */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Not Sure Which Treatment is Right for You?
              </h3>

              {/* Subtext */}
              <p className="text-sm md:text-base text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed font-normal">
               Get expert guidance at RamaCare Polyclinic, a trusted Polyclinic in Dubai.Book your FREE consultation today and receive a personalized treatment plan tailored to your needs.
              </p>

              {/* CTA Button */}
              <button
                onClick={handleConsultationClick}
                className="inline-flex items-center justify-center bg-[#C9A547] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-md hover:shadow-lg hover:bg-[#B8944A] transition-all duration-300"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          * {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          }
        `}</style>
      </section>
    </>
  );
};

export default TreatmentSection;