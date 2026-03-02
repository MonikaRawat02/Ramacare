import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import BeginYourHealingJourneySection from '../../components/BeginYourHealingJourneySection';
import { 
  Sparkles, 
  Leaf, 
  Activity, 
  Stethoscope, 
  ChevronDown, 
  ChevronRight,
  Phone,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  Award,
  Users,
  Shield,
  Star,
  ArrowRight,
  X
} from 'lucide-react';

const ServicesPage = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    if (isBookingModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isBookingModalOpen]);

  // Function to get sub-subcategories for a given subcategory
  // This function dynamically finds all services that belong to a subcategory
  // In a real implementation, this would fetch data from an API or dynamic source
  const getSubSubcategoriesForSubcategory = (subcategorySlug) => {
    // Define a comprehensive mapping of subcategories to their sub-subcategories
    // This mapping can be extended as new services are added
    const subSubcategoriesMap = {
      'skin-treatment-dubai': [
        { name: 'Skin Boosters', slug: 'skin-boosters-dubai' },
        { name: 'Derma Roller', slug: 'derma-roller-dubai' },
        { name: 'Skin Tightening', slug: 'skin-tightening-dubai' },
        { name: 'Microdermabrasion', slug: 'microdermabrasion-dubai' },
        { name: 'Mesotherapy', slug: 'mesotherapy-dubai' },
        { name: 'Skin Allergy', slug: 'skin-allergy-dubai' },
        { name: 'Botox Hyperhidrosis', slug: 'botox-hyperhidrosis-dubai' },
        { name: 'Carboxy Therapy', slug: 'carboxy-therapy-dubai' },
        { name: 'Electrolysis', slug: 'electrolysis-dubai' },
        { name: 'Fillers', slug: 'fillers-in-dubai' },
        { name: 'Facial', slug: 'facial-dubai' },
        { name: 'HIFU', slug: 'hifu-dubai' },
        { name: 'Botox', slug: 'botox-dubai' },
        { name: 'Pigmentation', slug: 'pigmentation-dubai' },
        { name: 'Carbon Laser', slug: 'carbon-laser-dubai' },
        { name: 'Fractional CO2 Laser', slug: 'fractional-co2-laser-dubai' },
        { name: 'Laser Rejuvenation', slug: 'laser-rejuvenation-dubai' },
      ],
      'hair-treatment-dubai': [
        { name: 'Hair Growth', slug: 'hair-growth-dubai' },
        { name: 'Hair Loss', slug: 'hair-loss-dubai' },
        { name: 'Hair PRP', slug: 'hair-prp-dubai' },
        { name: 'Ayurvedic Hairfall', slug: 'ayurvedic-hairfall-treatment-dubai' },
      ],
      'laser-treatment-dubai': [
        { name: 'Carbon Laser', slug: 'carbon-laser-dubai' },
        { name: 'Fractional CO2 Laser', slug: 'fractional-co2-laser-dubai' },
        { name: 'Laser Rejuvenation', slug: 'laser-rejuvenation-dubai' },
        { name: 'Birthmark Removal', slug: 'birthmark-removal-dubai' },
        { name: 'Dark Circle', slug: 'dark-circle-dubai' },
        { name: 'Hair Removal', slug: 'hair-removal-dubai' },
        { name: 'Laser Bleaching', slug: 'laser-bleaching-dubai' },
        { name: 'Mole Removal', slug: 'mole-removal-dubai' },
        { name: 'Nail Fungus', slug: 'nail-fungus-dubai' },
        { name: 'Scars Removal', slug: 'scars-removal-dubai' },
        { name: 'Spider Veins', slug: 'spider-veins-laser-treatment' },
        { name: 'Tattoo Removal', slug: 'tattoo-removal-dubai' },
      ],
      'body-shaping-dubai': [
        { name: 'Eximia Body Contouring', slug: 'eximia-body-contouring-dubai' },
      ],
      'composite-veneers-dubai': [],
      'dental-veneers-dubai': [],
      'root-canal-treatment-dubai': [],
      'snap-on-smile-dubai': [],
      'teeth-bleaching-dubai': [],
      'teeth-dentures-dubai': [],
      'teeth-composite-restoration-dubai': [],
      'braces-metal-ceramic-dubai': [],
      'dental-crown-bridges-dubai': [],
      'teeth-scaling-polishing-dubai': [],
      'gum-disease-treatment-dubai': [],
      'ayurvedic-hairfall-treatment-dubai': [],
      'analysis-of-individual-dubai': [],
      'skin-diseases-treatment-dubai': [],
      'ayurvedic-diet-plan-dubai': [],
      'panchakarma-treatment-dubai': [],
      'gastrointestinal-diseases-treatment-dubai': [],
      'pcos-treatment-dubai': [],
      'ultrasound-therapy-dubai': [],
      'electrotherapy-dubai': [],
      'pelvic-floor-therapy-dubai': [],
      'scoliosis-treatment-dubai': [],
      'functional-exercises-dubai': [],
      'dry-needling-dubai': [],
      'gastrointestinal-disorders-dubai': [],
      'management-of-allergy-dubai': [],
      'wound-stitching-services-dubai': [],
      'minor-injury-care-dubai': [],
      'treatment-of-acute-infections-dubai': [],
      'dyslipidemia-diagnosis-and-treatment': [],
      'personalized-slimming-programs': [
        { name: 'IV Drip', slug: 'iv-drip-dubai' },
      ],
      'thyroid-dysfunction-solutions-dubai': [],
      'asthma-and-copd-expertise-dubai': [],
      'diabetes-mellitus-care-dubai': [],
      'specialized-hypertension-management': [],
      'routine-check-ups-dubai': [],
      'comprehensive-physical-examinations-dubai': [],
      'signature-hydra-facial-dubai': [ ],
      'face-prp-in-dubai': [],
      'golden-elixir-facial-dubai': [],
      'exosomes-facial-dubai': [],
      'oxygeneo-illuminate-facial-dubai': [],
    };

    // For future expansion: If a subcategory is not in the map, return an empty array
    // This allows new subcategories to be added without manual updates to this function
    return subSubcategoriesMap[subcategorySlug] || [];
  };

  // Services data structure with consistent green/golden theme
  const servicesData = [
    {
      id: 1,
      name: 'Aesthetic Dermatology',
      slug: 'aesthetic-dermatology-dubai',
      icon: Sparkles,
      color: '#1a5f3f', // Green theme
      description: 'Advanced skincare and beauty treatments for radiant, healthy skin',
      featured: true,
      subcategories: [
        { name: 'Skin Treatment', slug: 'skin-treatment-dubai', description: 'Advanced skincare solutions for all skin types' },
        { name: 'Hair Treatment', slug: 'hair-treatment-dubai', description: 'Professional hair care and restoration treatments' },
        { name: 'Laser Treatment', slug: 'laser-treatment-dubai', description: 'Precision laser therapies for skin concerns' },
        { name: 'Body Shaping', slug: 'body-shaping-dubai', description: 'Non-invasive body contouring solutions' }
      ]
    },
    {
      id: 2,
      name: 'Dental',
      slug: 'dental-dubai',
      icon: Sparkles,
      color: '#d4a574', // Golden theme
      description: 'Comprehensive dental care for healthy, beautiful smiles',
      featured: true,
      subcategories: [
        { name: 'Composite Veneers', slug: 'composite-veneers-dubai', description: 'Natural-looking smile enhancement' },
        { name: 'Dental Veneers', slug: 'dental-veneers-dubai', description: 'Porcelain veneers for perfect teeth' },
        { name: 'Root Canal Treatment', slug: 'root-canal-treatment-dubai', description: 'Pain-free root canal procedures' },
        { name: 'Snap On Smile', slug: 'snap-on-smile-dubai', description: 'Instant smile transformation' },
        { name: 'Teeth Bleaching', slug: 'teeth-bleaching-dubai', description: 'Professional teeth whitening' },
        { name: 'Teeth Dentures', slug: 'teeth-dentures-dubai', description: 'Custom-fitted dental prosthetics' },
        { name: 'Tooth Composite Restoration', slug: 'teeth-composite-restoration-dubai', description: 'Natural tooth repair solutions' },
        { name: 'Braces (Metal & Ceramic)', slug: 'braces-metal-ceramic-dubai', description: 'Orthodontic alignment solutions' },
        { name: 'Dental Crown Bridges', slug: 'dental-crown-bridges-dubai', description: 'Dental restoration solutions' },
        { name: 'Teeth Scaling & Polishing', slug: 'teeth-scaling-polishing-dubai', description: 'Professional dental cleaning' },
        { name: 'Gum Disease Treatment', slug: 'gum-disease-treatment-dubai', description: 'Comprehensive periodontal care' }
      ]
    },
    {
      id: 3,
      name: 'Ayurveda',
      slug: 'ayurveda-dubai',
      icon: Leaf,
      color: '#1a5f3f', // Green theme
      description: 'Authentic Ayurvedic treatments for holistic wellness',
      featured: true,
      subcategories: [
        { name: 'Ayurvedic Hairfall Treatment', slug: 'ayurvedic-hairfall-treatment-dubai', description: 'Natural hair restoration therapy' },
        { name: 'Analysis Of Individual', slug: 'analysis-of-individual-dubai', description: 'Personalized dosha analysis' },
        { name: 'Skin Diseases Treatment', slug: 'skin-diseases-treatment-dubai', description: 'Ayurvedic skin condition remedies' },
        { name: 'Ayurvedic Diet Plan', slug: 'ayurvedic-diet-plan-dubai', description: 'Personalized nutrition guidance' },
        { name: 'Panchakarma Treatment', slug: 'panchakarma-treatment-dubai', description: 'Traditional detoxification therapy' },
        { name: 'Gastrointestinal Diseases Treatment', slug: 'gastrointestinal-diseases-treatment-dubai', description: 'Digestive health solutions' },
        { name: 'PCOS Treatment', slug: 'pcos-treatment-dubai', description: 'Ayurvedic PCOS management' }
      ]
    },
    {
      id: 4,
      name: 'Physiotherapy',
      slug: 'physiotherapy-dubai',
      icon: Activity,
      color: '#d4a574', // Golden theme
      description: 'Rehabilitation and pain management solutions',
      featured: true,
      subcategories: [
        { name: 'Ultrasound Therapy', slug: 'ultrasound-therapy-dubai', description: 'Deep tissue healing with sound waves' },
        { name: 'Electrotherapy', slug: 'electrotherapy-dubai', description: 'Electrical stimulation for pain relief' },
        { name: 'Pelvic Floor Therapy', slug: 'pelvic-floor-therapy-dubai', description: 'Specialized pelvic health treatment' },
        { name: 'Scoliosis Treatment', slug: 'scoliosis-treatment-dubai', description: 'Spinal curvature correction' },
        { name: 'Functional Exercises', slug: 'functional-exercises-dubai', description: 'Movement-based rehabilitation' },
        { name: 'Dry Needling', slug: 'dry-needling-dubai', description: 'Targeted muscle pain relief' }
      ]
    },
    {
      id: 5,
      name: 'General Physician',
      slug: 'general-physician-dubai',
      icon: Stethoscope,
      color: '#1a5f3f', // Green theme
      description: 'Comprehensive medical care for all health needs',
      featured: true,
      subcategories: [
        { name: 'Gastrointestinal Disorders', slug: 'gastrointestinal-disorders-dubai', description: 'Digestive health management' },
        { name: 'Management of Allergy', slug: 'management-of-allergy-dubai', description: 'Allergy testing and treatment' },
        { name: 'Wound Stitching Services', slug: 'wound-stitching-services-dubai', description: 'Professional wound care' },
        { name: 'Minor Injury Care', slug: 'minor-injury-care-dubai', description: 'Immediate injury treatment' },
        { name: 'Treatment of Acute Infections', slug: 'treatment-of-acute-infections-dubai', description: 'Infection management' },
        { name: 'Dyslipidemia Diagnosis and Treatment', slug: 'dyslipidemia-diagnosis-and-treatment', description: 'Cholesterol management' },
        { name: 'Personalized Slimming Programs', slug: 'personalized-slimming-programs', description: 'Weight management solutions' },
        { name: 'Thyroid Dysfunction Solutions', slug: 'thyroid-dysfunction-solutions-dubai', description: 'Thyroid health management' },
        { name: 'Asthma and COPD Expertise', slug: 'asthma-and-copd-expertise-dubai', description: 'Respiratory care' },
        { name: 'Diabetes Mellitus Care', slug: 'diabetes-mellitus-care-dubai', description: 'Diabetes management' },
        { name: 'Specialized Hypertension Management', slug: 'specialized-hypertension-management', description: 'Blood pressure control' },
        { name: 'Expertise in Routine Check-Ups', slug: 'routine-check-ups-dubai', description: 'Preventive health screenings' },
        { name: 'Comprehensive Physical Examinations', slug: 'comprehensive-physical-examinations-dubai', description: 'Thorough health assessments' }
      ]
    },
    {
      id: 6,
      name: 'Facial',
      slug: 'facial-dubai',
      icon: Sparkles,
      color: '#d4a574', // Golden theme
      description: 'Premium facial treatments for glowing, youthful skin',
      featured: true,
      subcategories: [
        { name: 'Signature Hydra Facial', slug: 'signature-hydra-facial-dubai', description: 'Hydration and rejuvenation treatment' },
        { name: 'Face PRP in Dubai', slug: 'face-prp-in-dubai', description: 'Platelet-rich plasma therapy' },
        { name: 'Golden Elixir Facial', slug: 'golden-elixir-facial-dubai', description: 'Luxury anti-aging treatment' },
        { name: 'Exosomes Facial Dubai', slug: 'exosomes-facial-dubai', description: 'Advanced cellular regeneration' },
        { name: 'Oxygeneo Illuminate Facial', slug: 'oxygeneo-illuminate-facial-dubai', description: 'Oxygen-infused skin brightening' }
      ]
    }
  ];

  // Filter services based on search query
  const filteredServices = servicesData.filter(service => 
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.subcategories.some(sub => 
      sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleBookAppointment = () => {
    // Open the booking modal
    setIsBookingModalOpen(true);
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+971566597878';
  };

  return (
    <div className="force-light">
    <Layout>
      <Head>
        <title>Medical Services in Dubai | All Treatments & Specialties</title>
        <meta name="description" content="Explore all medical services at RamaCare Polyclinic Dubai. Ayurveda, Dental, Dermatology, Physiotherapy, General Physician, and Facial treatments with expert care." />
        <meta name="keywords" content="medical services Dubai, healthcare treatments, Ayurveda Dubai, dental care Dubai, dermatology Dubai, physiotherapy Dubai, general physician Dubai" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/services" />
      </Head>
      <style jsx global>{`
        .force-light {
          --background: #ffffff;
          --foreground: #171717;
          background: #ffffff;
          color: #171717;
        }
        .force-light-text {
          color: #171717 !important;
        }
        .force-light .text-gray-100 {
          color: #f3f4f6 !important;
        }
        .force-light .text-gray-200 {
          color: #e5e7eb !important;
        }
        .force-light .text-gray-400 {
          color: #9ca3af !important;
        }
        .force-light .text-gray-500 {
          color: #6b7280 !important;
        }
        .force-light .text-gray-600 {
          color: #4b5563 !important;
        }
        .force-light .text-gray-900 {
          color: #111827 !important;
        }
        .force-light .bg-white {
          background-color: #ffffff !important;
        }
        .force-light .bg-gray-50 {
          background-color: #f9fafb !important;
        }
        .force-light input,
        .force-light input::placeholder {
          color: #171717 !important;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a5f3f] via-[#2d5f3f] to-[#1a5f3f] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">DHA Licensed & Trusted Healthcare</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-[#d4a574]">Medical Services</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-100">
              Comprehensive healthcare solutions for your wellness journey
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-[#d4a574]">500+</div>
                <div className="text-sm text-gray-200">Happy Patients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-[#d4a574]">15+</div>
                <div className="text-sm text-gray-200">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-[#d4a574]">98%</div>
                <div className="text-sm text-gray-200">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-[#d4a574]">40+</div>
                <div className="text-sm text-gray-200">Treatments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#1a5f3f]/20 focus:border-[#1a5f3f] transition-all force-light-text"
              />
              <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-[#1a5f3f]">Healthcare Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our wide range of medical specialties and treatments, all delivered with expert care and personalized attention
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              const isExpanded = expandedCategory === service.id;
              
              return (
                <div 
                  key={service.id} 
                  className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Service Header */}
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleCategory(service.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: service.color }}
                        >
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1a5f3f] transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                        </div>
                      </div>
                      <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {service.featured && (
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#1a5f3f]/10 text-[#1a5f3f] rounded-full text-xs font-medium mb-4">
                        <Star className="w-3 h-3" />
                        <span>Featured</span>
                      </div>
                    )}

                    {/* Quick Stats */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{service.subcategories.length} Treatments</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>30-90 min</span>
                      </div>
                    </div>

                    {/* Subcategory Preview - Show first 3 subcategories */}
                    <div className="mb-4">
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Popular Treatments:</div>
                      <div className="space-y-1">
                        {service.subcategories.slice(0, 3).map((subcategory, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1a5f3f]"></div>
                            <span>{subcategory.name}</span>
                          </div>
                        ))}
                        {service.subcategories.length > 3 && (
                          <div className="text-xs text-[#1a5f3f] font-medium mt-1">
                            +{service.subcategories.length - 3} more...
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Indicate sub-subcategories availability */}
                    <div className="flex items-center gap-2 text-xs text-[#d4a574] font-medium mb-4">
                      <div className="w-2 h-2 rounded-full bg-[#d4a574]"></div>
                      <span>Multiple specialized treatments available</span>
                    </div>
                  </div>

                  {/* Expanded Subcategories */}
                  <div className={`transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden bg-gray-50`}>
                    <div className="p-6 pt-0">
                      <div className="space-y-3 max-h-96 overflow-y-auto">
                        {service.subcategories.map((subcategory, index) => (
                          <div key={index} className="group/sub">
                            <a
                              href={`/services/${subcategory.slug}`}
                              className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-[#1a5f3f] hover:shadow-md transition-all"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#1a5f3f]"></div>
                                <div>
                                  <div className="font-medium text-gray-900 group-hover/sub:text-[#1a5f3f] transition-colors">
                                    {subcategory.name}
                                  </div>
                                  <div className="text-sm text-gray-600 mt-1">
                                    {subcategory.description}
                                  </div>
                                </div>
                              </div>
                              <ArrowRight className="w-5 h-5 text-gray-400 group-hover/sub:text-[#1a5f3f] group-hover/sub:translate-x-1 transition-all" />
                            </a>
                            
                            {/* Dynamic sub-subcategory preview - show all related services */}
                            <div className="ml-8 pl-4 mt-2 text-xs force-light-text">
                              <div className="flex flex-wrap gap-2">
                                {getSubSubcategoriesForSubcategory(subcategory.slug).map((subSubcategory, subIdx) => (
                                  <a 
                                    key={subIdx}
                                    href={`/services/${subSubcategory.slug}`}
                                    className="inline-flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 rounded-full text-xs hover:bg-[#1a5f3f] hover:text-white transition-colors force-light-text"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4a574]"></div>
                                    {subSubcategory.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <a
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a5f3f] text-white rounded-xl hover:bg-[#154a3f] transition-colors font-medium"
                        >
                          View All {service.name} Services
                          <ArrowRight className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <SearchIcon className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-[#1a5f3f]">RamaCare</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience healthcare excellence with our comprehensive medical services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'DHA Licensed',
                description: 'Fully licensed and regulated by Dubai Health Authority'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Experienced professionals with 15+ years expertise'
              },
              {
                icon: CheckCircle,
                title: 'Proven Results',
                description: '98% success rate with 500+ satisfied patients'
              },
              {
                icon: Award,
                title: 'Premium Care',
                description: 'Luxury facility with state-of-the-art equipment'
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-[#1a5f3f]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-[#1a5f3f]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Appointment CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1a5f3f] to-[#2d5f3f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your <span className="text-[#d4a574]">Wellness Journey</span>?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
              Book your consultation today and experience premium healthcare services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBookAppointment}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#d4a574] text-white rounded-xl hover:bg-[#c19463] transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-6 h-6" />
                Book Free Consultation
              </button>
              <button
                onClick={handleCallNow}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-colors font-medium text-lg border border-white/30"
              >
                <Phone className="w-6 h-6" />
                Call Now: +971 56 659 7878
              </button>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Jumeirah 1, Dubai</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>10:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
            <button 
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <BeginYourHealingJourneySection 
              isModal={true} 
              onClose={() => setIsBookingModalOpen(false)} 
            />
          </div>
        </div>
      )}
    </Layout>
    </div>
  );
};

// Simple search icon component with theme consistency
const SearchIcon = ({ className }) => (
  <svg className={`${className} text-gray-400 force-light-text`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export default ServicesPage;