import React, { useEffect, useRef, useState } from 'react';
import { 
  Droplets, Brain, Sparkles, Activity, Heart, Shield, Zap, 
  Target, Scissors, Stethoscope, Smile, Users, Calendar, 
  Pill, Star, CheckCircle, TrendingUp, Clock
} from 'lucide-react';

const WhyAyurvedaDubaiSection = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Icon mapping for string-based icon names
  const iconMap = {
    'Droplets': Droplets,
    'Brain': Brain,
    'Sparkles': Sparkles,
    'Activity': Activity,
    'Heart': Heart,
    'Shield': Shield,
    'Zap': Zap,
    'Target': Target,
    'Scissors': Scissors,
    'Stethoscope': Stethoscope,
    'Smile': Smile,
    'Users': Users,
    'Calendar': Calendar,
    'Pill': Pill,
    'Star': Star,
    'CheckCircle': CheckCircle,
    'TrendingUp': TrendingUp,
    'Clock': Clock,
  };

  // Use content props or defaults
  const badge = content?.badge || 'Polyclinic in Dubai';
  const title = content?.title || 'How We Work at RamaCare Polyclinic';
  const description = content?.description || 'Dubai\'s fast-paced, high-stress environment — combined with extreme heat, irregular schedules, and sedentary work routines — creates unique health challenges.';
  // Support paragraphs array or split description by \n\n for paragraph breaks
  const paragraphs = content?.paragraphs || (description.includes('\n\n') ? description.split('\n\n') : description.split('\n').filter(p => p.trim()));

  // Default benefits
  const defaultBenefits = [
    {
      icon: 'Droplets',
      title: "Caring. Collaborative. Committed.",
      description: "At RamaCare Polyclinic, a trusted polyclinic in Dubai located in Jumeirah 1, our way of working is built around quality care, transparency, and patient satisfaction. Every service we provide reflects our commitment to modern healthcare standards and personalized treatment."
    },
    {
      icon: 'Brain',
      title: "Patient-First Care Philosophy",
      description: "As a leading polyclinic in Dubai, we believe every patient deserves respectful, compassionate, and individualized care. At RamaCare, we take time to understand your health concerns, medical history, and personal goals—ensuring you receive treatment that is both effective and comfortable. You are always treated as a person, never just a file or appointment number."
    },
    {
      icon: 'Sparkles',
      title: "Expertise-Led, Team-Based Treatment",
      description: "What sets RamaCare apart as a reliable polyclinic in Dubai is our collaborative medical approach. Our experienced doctors and specialists work together across multiple departments, including Ayurveda, physiotherapy, dermatology, dental care, and general medicine. This team-based coordination allows us to create personalized, result-driven treatment plans under one roof."
    },
    {
      icon: 'Activity',
      title: "Evidence-Based and Holistic Healthcare",
      description: "At our polyclinic in Dubai, we combine proven medical science with holistic wellness practices to deliver balanced healthcare solutions. Whether you visit us for preventive care, pain management, facial aesthetics, or chronic condition support, we apply evidence-based treatments while considering your overall well-being and long-term health."
    }
  ];

  // Use content benefits if provided, otherwise use defaults
  const benefits = content?.benefits || defaultBenefits;
  const imagePath = content?.image || '/images/why.jpeg';
  const imageAlt = content?.imageAlt || 'Professional wellness treatment';
  const ctaCard = content?.ctaCard || {
    title: 'Perfect for Dubai Professionals',
    description: 'Flexible appointment scheduling available to working professionals to fit your busy lifestyle.'
  };
  const bottomSection = content?.bottomSection || {
    title: 'Premium Wellness Centre at a Trusted Polyclinic in Dubai',
    description: 'Our Premium Wellness Centre in Jumeirah 1 operates within a trusted polyclinic in Dubai, delivering natural, holistic healthcare in a professional clinical environment. We specialize in Panchakarma detox programs, chronic pain relief, stress management, and complete mind-body balance. Our DHA-licensed doctors provide personalized consultations and treatment plans tailored to individual health needs. Patients visiting our polyclinic in Dubai benefit from safe, hygienic therapies delivered under strict medical supervision. Whether you are seeking preventive care, detoxification, or long-term wellness solutions, our centre offers trusted, effective treatments designed to restore health, vitality, and overall well-being.'
  };
  // Support paragraphs array for bottomSection or split by \n\n
  const bottomParagraphs = bottomSection?.paragraphs || (bottomSection?.description?.includes('\n\n') 
    ? bottomSection.description.split('\n\n') 
    : (bottomSection?.description ? [bottomSection.description] : []));
  const iconBgColor = content?.iconBgColor || 'bg-[#ECFDF5]';
  const iconHoverBgColor = content?.iconHoverBgColor || 'bg-[#D1FAE5]';
  const iconColor = content?.iconColor || 'text-[#2d7a56]';
  const ctaCardBgColor = content?.ctaCardBgColor || 'bg-[#2d7a56]/95';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  // Helper function to get icon component
  const getIconComponent = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent || Sparkles; // Fallback icon
  };

  return (
    <>
      {/* ONLY FONT CHANGED - Now using Segoe UI to match screenshot */}
      <section 
        ref={sectionRef}
        className="bg-white py-12 sm:py-16 lg:py-20 overflow-hidden"
        aria-labelledby="why-ayurveda-heading"
        style={{ fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Main Content Grid */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            
            {/* Left Column - Content */}
            <div className="w-full min-w-0 lg:pt-4">
              {/* Small Label - matches screenshot exactly */}
              <div className="flex justify-left mb-3">
               <p className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm">
  {badge}
</p>
              </div>
              
              {/* Main Heading - exact font sizing from screenshot */}
              <h2 
                id="why-ayurveda-heading"
                
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight max-w-4xl"
               
              >
                {title}
              </h2>
              
              {/* Introduction Paragraphs - exact spacing and font from screenshot */}
              {paragraphs.map((paragraph, index) => (
                paragraph.trim() && (
                  <p 
                    key={index}
                    className="text-sm sm:text-[15px] md:text-base text-[#4A4A4A] leading-[1.7] mb-5 break-words"
                    style={{ fontWeight: 400 }}
                  >
                    {paragraph.trim()}
                  </p>
                )
              ))}
              
              {/* Benefits List - matching screenshot layout */}
              <ul role="list" aria-label="Benefits" className="space-y-5 sm:space-y-6 mt-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = getIconComponent(benefit.icon);
                  return (
                    <li
                      key={index}
                      role="listitem"
                      className={`flex items-start gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-1 group min-w-0 ${
                        isVisible 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-8'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Icon Container - exact styling from screenshot */}
                      <div 
                        className={`w-10 h-10 sm:w-11 sm:h-11 ${iconBgColor} rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D1FAE5]`}
                      >
                        <IconComponent size={20} className={iconColor} strokeWidth={2.5} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0 pt-0.5">
                        <h3 className="text-base sm:text-[17px] md:text-lg font-bold text-[#1A1A1A] mb-2 tracking-tight group-hover:text-[#3D5A4A] transition-colors break-words" style={{ fontWeight: 700 }}>
                          {benefit.title}
                        </h3>
                        <p className="text-sm sm:text-[15px] md:text-base text-[#4A4A4A] leading-[1.7] break-words" style={{ fontWeight: 400 }}>
                          {benefit.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            
            {/* Right Column - Image with CTA Card - Matches left column height */}
            <div className="relative w-full min-w-0 h-full">
              <div className="relative h-full min-h-[500px] lg:min-h-full rounded-2xl overflow-hidden shadow-2xl group w-full">
                {/* Image fills entire available height */}
                <img
                  src={imagePath}
                  alt={imageAlt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800';
                  }}
                />
                
                {/* Floating CTA Card - exact styling from screenshot */}
                <div className={`absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 ${ctaCardBgColor} backdrop-blur-md rounded-xl p-4 sm:p-5 shadow-2xl transition-all duration-300 hover:bg-opacity-100 hover:-translate-y-1 hover:shadow-3xl`}>
                  <h3 className="text-sm sm:text-base md:text-[17px] font-bold text-white mb-2 leading-snug break-words" >
                    {ctaCard.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed break-words" style={{ fontWeight: 400 }}>
                    {ctaCard.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Premium Center Section - exact styling from screenshot */}
          {bottomSection && (
            <div className={`bg-[#F8F9FA] rounded-xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100 transition-all duration-1000 w-full ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '400ms' }}>
              <h3 className="text-xl sm:text-2xl md:text-[28px]  text-[#1A1A1A] text-center mb-4 sm:mb-5 tracking-tight break-words" >
                {bottomSection.title}
              </h3>
              {bottomParagraphs.map((paragraph, index) => (
                paragraph.trim() && (
                  <p 
                    key={index}
                    className="text-sm sm:text-[15px] md:text-base text-[#4A4A4A] leading-[1.7]  justify-left max-w-5xl mx-auto break-words mb-4"
                    style={{ fontWeight: 400 }}
                  >
                    {paragraph.trim()}
                  </p>
                )
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default WhyAyurvedaDubaiSection;