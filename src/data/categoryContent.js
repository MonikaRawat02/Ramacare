// Category-specific content for category pages
// These pages use the same UI structure as homepage but with category-specific content

export const categoryContent = {
  'ayurveda': {
    hero: {
      badge: 'DHA-Licensed Premier Ayurveda Centre',
      titleLine1: 'Premium Ayurveda Treatment ',
      titleHighlight: ' & Panchakarma',
      titleLine2:' in Jumeirah 1',
      // title: 'Premium Ayurveda Treatment –& Panchakarma in Jumeirah 1',
      subtitle: 'Discover authentic Ayurveda Treatment for detoxification, pain relief, stress management, digestive wellness, and complete body-mind rejuvenation.',
      description: 'Dubai\'s premier Ayurveda centre offering authentic classical treatments, DHA-licensed practitioners, and personalized wellness plans in the heart of Jumeirah 1.',
      ctaText: 'Book Free Consultation',
      backgroundImage: '/images/a1.jpg',
      stats: [
        { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Patients' },
    { number: '98%', label: 'Success Rate' },
    { number: '40+', label: 'Treatments' }
      ],
      features: [
        'Classical Panchakarma & Herbal Therapies',
        'DHA-Licensed Ayurvedic Experts',
        'Personalized Wellness Programs',
        'Luxury Facility in Jumeirah 1'
      ],
      whatsappText: 'WhatsApp Now',
      location: 'Heart of Jumeirah 1, Dubai',
      timing: 'Same Day Appointments'
    },
    whyChooseUs: {
      badge: 'Why Choose Us',
      title: 'Dubai\'s Trusted Ayurveda Treatment Centre',
      description: 'At RamaCare Polyclinic, we provide authentic Ayurveda Treatment that blends traditional healing with modern medical standards. Our approach addresses the root cause of health issues, supporting physical vitality, mental clarity, and emotional balance.',
      cards: [
        {
          title: 'Authentic Ayurvedic Therapies',
          description: 'Time-tested Panchakarma and specialized treatments rooted in classical Ayurveda.'
        },
        {
          title: 'DHA-Licensed Practitioners',
          description: 'Experienced doctors ensuring safe and effective care.'
        },
        {
          title: 'Personalized Treatment Plans',
          description: ' Customized protocols based on your unique body constitution (dosha) and health goals.'
        },
        {
          title: 'Premium Facility',
          description: 'Serene, hygienic, and equipped with state-of-the-art treatment rooms.'
        },
        {
          title: 'Holistic Healing',
          description: 'Integrated care for body, mind, and emotional wellness.'
        },
        {
          title: 'Proven Results',
          description: 'Hundreds of patients achieving long-term relief and wellness.'
        }
      ]
    },
    about: {
      badge: 'About Our Ayurveda Department',
      title: 'Authentic Healing Within a Modern Polyclinic',
      description: 'Ayurveda, meaning "science of life," is a 5,000-year-old holistic healing system from India that focuses on balancing the body, mind, and spirit through natural therapies, diet, and lifestyle modifications.',
      paragraphs: [
        'Our Ayurveda department at RamaCare Polyclinic brings the timeless wisdom of classical Indian medicine to the heart of Dubai\'s premium healthcare landscape. Operating within a fully equipped multi-specialty polyclinic in Jumeirah 1, we offer the perfect blend of traditional authenticity and modern medical standards.' ,
        'Led by experienced, DHA-licensed Ayurvedic physicians with advanced qualifications (BAMS/MD), our multicultural team specializes in Ayurveda Treatments for detoxification, chronic pain relief, stress management, digestive wellness, and women\'s hormonal health. Each treatment plan is customized to your unique constitution (dosha) and health goals.' ,
        'We maintain the highest standards of hygiene and safety while honoring authentic Panchakarma protocols and classical therapies. Whether you\'re seeking deep detox, pain relief, or holistic rejuvenation, our approach combines ancient healing wisdom with the comfort and credibility of a premium modern medical facility .'
      ],
      stats: [
        { number: '12+', label: 'Treatment Types' },
        { number: '500+', label: ' Happy Patients' },
        { number: '98%', label: 'Satisfaction Rate' }
      ],
      ctaText: 'Book Your Ayurveda Treatment Consultation Today',
      image: '/images/a2.jpg',
      imageAlt: 'Ayurvedic medicine bottle',
      overlayCard: {
        number: '15+',
        smallText: 'Years of Excellence',
        boldText: 'Trusted Ayurvedic Care'
      }
    },
    treatments: {
      heading: 'Personalized Treatments for Modern Health Challenges',
      subtitle: 'Explore our wide range of Ayurveda Treatments designed to restore balance, improve vitality, and promote long-term wellness. Select a treatment below to discover how authentic Ayurveda can transform your health and wellbeing in Dubai.',
      treatments: [
        {
          id: 1,  
          title: 'Panchakarma Treatment',
          slug: 'panchakarma-treatment',
          fullSlug: '/services/panchakarma-treatment-dubai/',
          icon: 'Sparkles',
          subtitle: 'Authentic Ayurveda Treatment for Detox & Rejuvenation',
          duration: '7–21 Days',
          badgeColor: 'violet',
          benefits: [
            'Restores balance through classical Panchakarma therapies',
            'Removes accumulated toxins',
            'Enhances physical and mental well-being',
          ],
          idealFor: 'Anyone looking for deep cleansing and revitalization',
          image: '/images/panchakarma.jpg',
          alt: 'Panchakarma treatment using traditional Ayurvedic therapies to detoxify the body and restore balance.'
        },
        {
          id: 2,
          title: 'Analysis of Individual Constitution',
          slug: 'analysis-of-individual-constitution',
          fullSlug: '/services/analysis-of-individual-dubai/',
          icon: 'Sparkles',
          subtitle: 'Ayurveda Treatment for Personalized Care',
          duration: '7–21 Days',
          badgeColor: 'cyan',
          benefits: [
            'Detailed dosha analysis to determine body constitution',
            'Tailored treatment and diet recommendations',
            'Maximizes the effectiveness of all Ayurveda Treatments',
          ],
          idealFor: 'Anyone new to Ayurveda,Individuals seeking customized wellness plans',
          image: '/images/analysis.jpg',
          alt: 'Individual health analysis conducted by a specialist to understand patient needs and plan personalized treatment.'
        },
       
        {
          id: 3,
          title: 'Ayurvedic Hairfall Treatment',
          slug: 'ayurvedic-hairfall-treatment',
          fullSlug: '/services/ayurvedic-hairfall-treatment-dubai/',
          icon: 'Sparkles',
          subtitle: 'Ayurveda Treatment for Hair Health',
          duration: '7–21 Days',
          badgeColor: 'teal',
          benefits: [
            'Strengthens hair follicles naturally',
            'Reduces hairfall and premature graying',
            'Nourishes the scalp with herbal therapies',
            'Patients with hair thinning or hair loss',
          ],
          idealFor: 'Patients experiencing hair thinning or hair loss',
           image: '/images/hairfall1.jpg',
          alt: 'Ayurvedic hair fall treatment focused on natural therapies to strengthen hair roots and reduce hair loss.'
        },
        {
          id: 4,
          title: 'Skin Diseases Treatment',
          slug: 'skin-diseases-treatment',
          fullSlug: '/services/skin-diseases-treatment-dubai/',
          icon: 'Sparkles',
          subtitle: 'Ayurveda Treatment for Skin Health',
          duration: '7–21 Days',
          badgeColor: 'pink',
          benefits: [
            'Treats eczema, acne, pigmentation, and other skin conditions',
            'Improves skin texture and radiance naturally',
            'Uses herbal medicines and detox therapies',
          ],
          idealFor: 'Individuals with chronic or recurring skin issues',
           image: '/images/skin1.jpg',
          alt: 'Skin disease treatment in Ayurveda utilizes natural therapies to support healing and promote long-term skin health.'
        },
       
      ],
      consultationCTA: {
        heading: 'Not Sure Which Treatment is Right for You?',
        subtext: 'Explore the perfect therapy with expert Ayurveda in Dubai. Schedule a free consultation for personalized recommendations and a treatment plan tailored to your unique needs.',
        buttonText: 'Get Free Consultation',
        backgroundColor: 'bg-[#1E5A3C]',
        buttonColor: 'bg-[#C9A547]'
      }
    },
    experts: {
      badge: 'Expert Medical Team',

      title: 'Meet Our DHA-Licensed\nAyurvedic Physicians',
      description: 'Highly qualified doctors with decades of combined experience, committed to your healing journey with expertise, compassion, and authentic Ayurvedic care.',
      stats: [
        { value: '30+', label: 'Expert Doctors' },
    { value: '37+', label: 'Years of Combined Experience' },
    { value: '500+', label: 'Successful Treatments' },
    { value: '4.9', label: 'Average Rating' }
      ],
      ctaSection: {
        title: 'Ready to Meet Your Ayurvedic Physician?',
        description: 'Schedule a personalized consultation with our expert doctors to begin your healing journey.',
        primaryButton: 'Book Consultation Now',
        secondaryButton: 'View All Doctors'
      },
      doctors: [
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
          languages: ['English'],
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
          languages: ['English'],
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
          languages: ['English'],
          quote: 'A healthy smile is the foundation of confidence and overall well-being. My focus is on providing comfortable, high-quality dental care for every patient.',
          testimonial: {
            text: 'Dr. Anan made my dental visit completely stress-free. Very professional and caring.',
            author: 'Patient Feedback',
            location: 'Dubai'
          }
        }
      ]
    },
    whyDubai: {
      badge: 'Ayurveda in Dubai',
      title: 'Why Ayurveda Treatment is Essential for Dubai Lifestyle?',
      description: 'Dubai\'s fast-paced, high-stress environment — combined with extreme heat, irregular schedules, and sedentary work routines — creates unique health challenges. Many residents experience digestive issues, hormonal imbalance, chronic stress, sleep disturbances, and low energy levels. \n\n Ayurveda Treatment provides a holistic solution by addressing the root causes of these modern health concerns. Through personalized detox programs, dosha balancing, herbal therapies, and lifestyle guidance, Ayurveda restores your body\'s natural equilibrium and supports long-term wellness rather than temporary relief.',
      benefits: [
        {
          icon: 'Droplets',
          title: 'Combat Heat & Dehydration',
          description: 'Cooling therapies and Pitta-balancing treatments counteract Dubai\'s intense climate. \n\n Restores hydration and maintains internal body balance'
        },
        {
          icon: 'Brain',
          title: 'Reduce Stress & Anxiety',
          description: 'Shirodhara and herbal adaptogens to calm the mind.\n\n Supports emotional balance, focus, and relaxation.'
        },
        {
          icon: 'Sparkles',
          title: 'Detoxify & Rejuvenate',
          description: 'Panchakarma therapies eliminate accumulated toxins from food, environment, and lifestyle . \n\n Promotes complete body renewal and vitality'
        },
        {
          icon: 'Activity',
          title: 'Restore Digestive Health',
          description: 'Strengthens Agni (digestive fire) disrupted by irregular eating and sedentary habits, Improves metabolism, nutrient absorption, and gut function'
        },
        {
          icon: 'Sparkles',
          title: 'Meditation & Wellness for Professionals',
          description: 'Integrates mindfulness and relaxation practices with Ayurveda Treatment, Enhances productivity, reduces stress, and improves sleep quality'
        },
        
      ],
      image: '/images/a3.jpg',
      imageAlt: 'Ayurvedic treatment in Dubai',
      ctaCard: {
        title: 'Flexible Appointments:',
        description: 'Evening and weekend schedules are available to fit the busy lifestyle of Dubai residents, making authentic Ayurveda Treatment accessible and convenient.'
      },
      bottomSection: {
        title: 'Premium Ayurveda Centre in Jumeirah 1, Dubai',
        description: 'As a leading Ayurveda Treatment clinic in Dubai, RamaCare Polyclinic specializes in Panchakarma detox, chronic pain management, stress relief, and holistic wellness. Our DHA-licensed Ayurvedic practitioners combine centuries-old Ayurvedic wisdom with modern healthcare standards to deliver natural, effective solutions for today’s health challenges. \n\n Whether you are looking for a personalized Ayurvedic consultation, a comprehensive detox program, or specialized women’s wellness care, our Jumeirah 1 clinic offers the perfect fusion of traditional therapies and premium medical excellence. Experience authentic Ayurveda Treatments in a comfortable, safe, and modern setting designed for long-term health and rejuvenation.'
      }
    },
    programs: {
      badge: 'Signature Programs',
      heading: 'Curated Healing Journeys',
      subtitle: 'Immersive Ayurveda Treatment programs are designed for transformative health results and lasting wellness.',
      disclaimer: ' All Ayurveda Treatment programs are customized based on your initial consultation, dosha analysis, and individual health concerns. Duration and therapies may vary according to your unique wellness goals.',
      programs: [
        {
          id: 1,
          title: 'Deep Panchakarma Detox',
          duration: '7–14 Days',
          backgroundColor: 'bg-white',
          topSectionColor: 'bg-emerald-50',
          durationColor: 'bg-emerald-100',
          durationTextColor: 'text-emerald-700',
          icon: 'sparkle',
          benefits: [
            'Comprehensive elimination of toxins at the cellular level',
            'Boosts immunity and strengthens digestive fire (Agni)',
            'Enhances mental clarity, focus, and sustained energy',
            'Promotes radiant skin and overall vitality'
          ]
        },
        {
          id: 2,
          title: 'Chronic Pain Relief Program',
          duration: '10–21 Days',
          backgroundColor: 'bg-white',
          topSectionColor: 'bg-rose-50',
          durationColor: 'bg-rose-100',
          durationTextColor: 'text-rose-700',
          icon: 'heart',
          benefits: [
            'Targeted relief for arthritis, back pain, and joint stiffness',
            'Reduces inflammation with herbal therapies and therapeutic oils',
            'Supports long-term pain management and mobility improvement'
          ]
        },
        {
          id: 3,
          title: 'Stress & Sleep Balance Therapy',
          duration: '7–14 Days',
          backgroundColor: 'bg-white',
          topSectionColor: 'bg-indigo-50',
          durationColor: 'bg-indigo-100',
          durationTextColor: 'text-indigo-700',
          icon: 'moon',
          benefits: [
            'Calms nervous system through Shirodhara and Ayurvedic therapies',
            'Reduces anxiety and insomnia with natural herbal support',
            'Includes lifestyle guidance, meditation, and stress-reduction strategies'
          ]
        },
        {
          id: 4,
          title: 'Women\'s Wellness Program',
          duration: '14–28 Days',
          backgroundColor: 'bg-white',
          topSectionColor: 'bg-fuchsia-50',
          durationColor: 'bg-fuchsia-100',
          durationTextColor: 'text-fuchsia-700',
          icon: 'user',
          benefits: [
            'Hormonal balance for PCOS, fertility & menopause',
            'Regulates menstrual cycles and restores vitality naturally',
            'Personalized nutrition plans and herbal therapies for women’s health'
          ]
        },
        {
          id: 5,
          title: 'Digestive & Weight Balance Program',
          duration: '14–21 Days',
          backgroundColor: 'bg-white',
          topSectionColor: 'bg-amber-50',
          durationColor: 'bg-amber-100',
          durationTextColor: 'text-amber-700',
          icon: 'scale',
          benefits: [
            'Metabolic reset and healthy weight management',
            'Gut healing for IBS, bloating & inflammation',
            'Sustainable dietary and lifestyle modifications for long-term wellness'
          ]
        },
        {
          id: 6,
          title: 'Full Rejuvenation Therapy',
          duration: '21–28 Days',
          backgroundColor: 'bg-white',
          topSectionColor: 'bg-violet-50',
          durationColor: 'bg-violet-100',
          durationTextColor: 'text-violet-700',
          icon: 'users',
          benefits: [
            'Complete renewal of body and mind',
            'Anti-aging support and enhanced vitality',
            'Preventive wellness strategies for longevity and optimal health'
          ]
        }
      ]
    },
    successStories: {
      badge: 'Patient Success Stories',
      title: 'Real Results From Real People',
      subtitle: 'Hear directly from our patients about their transformative Ayurvedic healing journeys in Dubai.',
      stats: [
        {
      id: 1,
      number: '4.9/5',
      label1: 'Average Rating',
      label2: 'Google Reviews',
      target: 4.9,
      showStars: true
    },
    {
      id: 2,
      number: '500+',
      label1: 'Patient Reviews',
      label2: 'Verified Testimonials',
      target: 500
    },
    {
      id: 3,
      number: '94%',
      label1: 'Success Rate',
      label2: 'Patient Satisfaction',
      target: 94
    },
    {
      id: 4,
      number: '2,500+',
      label1: 'Patients Treated',
      label2: 'Since 2008',
      target: 2500
    }
      ],
      ctaSection: {
        title: 'Ready to write your success story?',
        description: 'Join thousands of satisfied patients who have transformed their health with authentic Ayurvedic treatments in Dubai.',
        buttonText: 'Start your journey today'
      },
    },
    faq: {
      title: 'Frequently Asked Questions – Ayurveda in Dubai',
      description: 'Everything you need to know about our authentic Ayurvedic treatments and services in Dubai.',
      faqs: [
        {
          id: 1,
          question: 'What is Ayurveda Treatment and how does it work?',
          answer: 'Ayurveda Treatment is a holistic healing system that restores balance to body, mind, and spirit through detox, dosha analysis, herbal therapies, diet, and lifestyle guidance for long-term wellness.'
        },
        {
          id: 2,
          question: 'Are Ayurveda Treatments safe for everyone?',
          answer: 'Yes, Ayurveda Treatments are natural and safe when administered by DHA-licensed practitioners. Treatments are customized according to individual constitution, health conditions, and lifestyle for effective, risk-free healing.'
        },
        {
          id: 3,
          question: 'How long does an Ayurveda Treatment program take?',
          answer: 'The duration of an Ayurveda Treatment varies depending on the therapy and health goals. Programs range from 7 to 28 days, with personalized schedules for detox, pain relief, or rejuvenation.'
        },
        {
          id: 4,
          question: 'Can Ayurveda Treatment help with chronic pain?',
          answer: 'Yes, specialized Ayurveda Treatments using Panchakarma, herbal oils, and joint therapies provide long-term relief from arthritis, back pain, and joint discomfort, enhancing mobility and overall quality of life.'
        },
        {
          id: 5,
          question: 'Is Ayurveda Treatment effective for stress and sleep issues?',
          answer: 'Absolutely. Ayurveda Treatments like Shirodhara, herbal therapies, and lifestyle guidance reduce anxiety, calm the nervous system, and improve sleep quality, promoting mental clarity and emotional balance naturally.'
        },
        {
          id: 6,
          question: 'Can Ayurveda help with digestive health problems?',
          answer: 'Yes, Ayurveda Treatments strengthen Agni (digestive fire), improve gut function, reduce bloating, acidity, and IBS symptoms, and promote natural metabolism through personalized diet, herbal therapies, and lifestyle adjustments.'
        },
        {
          id: 7,
          question: 'Are Ayurveda Treatments suitable for women’s health issues?',
          answer: 'Yes, specialized Ayurveda Treatments support hormonal balance, PCOS management, menstrual cycle regulation, fertility, and menopause care, using natural therapies and personalized diet plans to restore women’s wellness effectively.'
        },
        {
          id: 8,
          question: 'How is Panchakarma Detox performed in Ayurveda Treatment?',
          answer: 'Panchakarma Detox in Ayurveda Treatment involves a series of therapies including herbal massages, oil treatments, and detoxification techniques, designed to eliminate toxins, rejuvenate the body, and restore vitality naturally.'
        },
        {
          id: 9,
          question: 'Can Ayurveda Treatment help with hair and skin problems?',
          answer: 'Yes, Ayurveda Treatments target hairfall, scalp health, acne, pigmentation, and other skin conditions using herbal oils, therapies, and dietary guidance, promoting healthy hair and radiant skin naturally.'
        },
        {
          id: 10,
          question: 'How personalized is the Ayurveda Treatment at your clinic?',
          answer: 'Every Ayurveda Treatment is fully personalized based on dosha analysis, lifestyle, and health goals, ensuring each therapy, diet, and detox program is tailored for optimal results and long-term wellness.'
        },
        {
          id: 11,
          question: 'Can I combine Ayurveda Treatment with modern medicine?',
          answer: 'Yes, Ayurveda Treatments can safely complement modern medicine. Our DHA-licensed practitioners provide guidance to integrate therapies, herbal remedies, and lifestyle changes without interfering with ongoing medical treatments.'
        },
        {
          id: 12,
          question: 'How soon can I see results from Ayurveda Treatment?',
          answer: 'Results vary depending on the therapy and individual health conditions. Many patients notice improved digestion, energy, and stress relief within the first week, with long-term benefits over the full program.'
        },
        {
          id: 13,
          question: ' What makes your Ayurveda Treatment in Dubai different?',
          answer: 'Our clinic offers authentic Ayurveda Treatments delivered by DHA-licensed experts, combining classical Panchakarma protocols, herbal therapies, and modern hygiene standards, personalized for each patient in a premium Dubai facility.'
        },
        {
          id: 14,
          question: 'Are Ayurveda Treatments covered by insurance in Dubai?',
          answer: 'Coverage depends on your insurance provider. While some plans include wellness therapies, most Ayurveda Treatments are considered complementary care. Our clinic can provide invoices and documentation for insurance purposes.'
        },
        {
          id: 15,
          question: 'How do I book a consultation for Ayurveda Treatment?',
          answer: 'Booking a consultation is easy. Contact us via WhatsApp or online form, schedule a personalized appointment, and receive expert guidance for choosing the most suitable Ayurveda Treatment for your health goals.'
        }
      ]
    },
booking: {
      title: 'Begin Your Healing Journey Today.',
      description: ' Schedule your personalized consultation with our Ayurveda experts in Dubai. Same-day appointments available.',
      expectationTitle: 'What to Expect',
  steps: [
    {
      title: 'Comprehensive Assessment',
      description: '60-minute consultation including pulse diagnosis and dosha analysis.'
    },
    {
      title: 'Personalized Plan',
      description: 'Custom treatment protocol tailored to your unique condition.'
    },
    {
      title: 'Treatment Journey',
      description: 'Begin authentic Ayurvedic therapies with ongoing support and adjustments.'
    }
  ],
      offerTitle: 'Limited Time Offer',
  offerDescription: 'Book your first consultation this month and receive:',
  offers: [
    'Free dosha analysis report',
    'Complimentary wellness guidebook',
    '15% off your first treatment package'
  ],

  contactTitle: 'Prefer to Talk?',
  contactMethods: {
    call: {
      label: 'Call Us',
      value: '(+971) 04 286 2006'
    },
    whatsapp: {
      label: 'WhatsApp',
      value: '(+971) 56 659 7878'
    },
        hours: {
      label: 'Open Hours',
      value: [
        'Sun-Thu: 10:00 AM – 10:00 PM',
        'Fri: 10:00 AM – 8:00 PM'
      ]
       }
      }
    },
    facility: {
  badge: 'Our Ayurveda Facility',
  title: 'Authentic Ayurvedic Healing Centre',
  description:
    'Experience traditional Ayurvedic care in our serene Dubai Ayurveda facility, designed with natural elements, advanced diagnostic support, and a calming, healing-focused environment.',

  topGalleryImages: [
    {
      id: 1,
      src: '/images/ay1.png',
      alt: 'Ayurvedic treatment focused on natural healing and holistic wellness.'
    },
    {
      id: 2,
      src: '/images/ay2.png',
      alt: 'Ayurvedic consultation based on traditional health assessment methods.'
    },
    {
      id: 3,
      src: '/images/ay3.png',
      alt: 'Ayurvedic therapy using herbal oils for relaxation and healing.'
    }
  ],

  bottomGalleryImages: [
    {
      id: 4,
      src: '/images/ay4.png',
      alt: 'Ayurvedic treatment room designed for calm and natural therapies.'
    },
    {
      id: 5,
      src: '/images/ay5.png',
      alt: 'Ayurvedic healing approach supporting long-term health balance.'
    },
    {
      id: 6,
      src: '/images/ay6.png',
      alt: 'Personalized Ayurvedic care tailored to individual health needs.'
    }
  ],

  trustBadges: [
    {
      id: 1,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: 'DHA Licensed',
      subtitle: 'Certified Ayurvedic practitioners'
    },
    {
      id: 2,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Authentic Therapies',
      subtitle: 'Traditional treatments & herbal care'
    },
    {
      id: 3,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: 'Prime Location',
      subtitle: 'Jumeirah 1, Dubai'
    }
  ]
}

  },

  'aesthetic-dermatology': {
    hero: {
      badge: 'DHA-Licensed Aesthetic Dermatology',
      titleLine1: 'Premium Aesthetic ',
     titleHighlight: 'Dermatology',
      titleLine2:'  in Dubai',
      // title: 'Premium –Aesthetic Dermatology  in Dubai',
      subtitle: 'Transform your skin with cutting-edge treatments and expert care',
      description: 'Advanced skin treatments, anti-aging solutions, laser therapies, and personalized dermatology care—provided under one roof for healthier, radiant skin.Your Trusted Destination for Aesthetic Dermatology in Dubai At RamaCare Polyclinic, healthy, glowing skin mirrors overall well-being and confidence. Conveniently located in Jumeirah 1, Dubai, our clinic combines medical expertise, advanced technology, and personalized care to deliver safe, practical, and evidence-based aesthetic dermatology in Dubai. Our DHA-licensed dermatologists have years of clinical experience and a compassionate approach to every consultation. From acne and pigmentation treatments to advanced anti-aging and laser procedures, each treatment plan is carefully customized to fit your skin type, lifestyle, and aesthetic goals—ensuring natural-looking, long-term results.',
      ctaText: 'Book Your Consultation',
       backgroundImage: '/images/aesth.jpg',
       backgroundAlt: 'Aesthetic Dermatology Treatment focused on skin rejuvenation, anti-aging solutions, and personalized care.',
      stats: [
         { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Patients' },
    { number: '98%', label: 'Success Rate' },
    { number: '40+', label: 'Treatments' }
      ],
      features: [
        'DHA-Licensed Dermatologists',
        'Advanced Laser Technology',
        'Personalized Skin & Hair Solutions',
        'Prime Jumeirah 1 Location'
      ],
      whatsappText: 'WhatsApp Now',
      location: 'Heart of Jumeirah 1, Dubai',
      timing: 'Same Day Appointments'
    },
    whyChooseUs: {
      badge: 'Why Choose Us',
      title: 'Dubai\'s Leading Aesthetic Dermatology Clinic',
      description: 'Experience the best in Aesthetic Dermatology in Dubai at our clinic, where advanced technology meets expert care. Our team of skilled dermatologists provides personalized treatments tailored to your skin type and goals, from laser therapy to anti-aging and skin rejuvenation. Located in the heart of Dubai, we combine world-class techniques with a comfortable, patient-focused environment. Choosing us ensures safe, effective, and visible results, making us a trusted destination for anyone seeking top-tier aesthetic dermatology services in Dubai. Your skin deserves the expertise and innovation we provide.',
      cards: [
        {
          title: 'DHA-Licensed Dermatologists',
          description: 'All treatments are performed by certified DHA-licensed dermatologists with extensive experience in aesthetic and medical dermatology.'
        },
        {
          title: 'Advanced Laser Technology',
          description: 'State-of-the-art laser equipment and cutting-edge technology for safe, effective, and precise aesthetic treatments.'
        },
        {
          title: 'Personalized Treatment Plans',
          description: 'Each treatment plan is customized based on your skin type, hair condition, body goals, and aesthetic preferences.'
        },
        {
          title: 'Premium Jumeirah 1 Facility',
          description: 'A modern, sterile, and comfortable clinic environment designed for your safety, privacy, and optimal treatment experience.'
        },
        {
          title: 'Natural-Looking Results',
          description: 'We focus on enhancing your natural beauty with subtle, long-lasting results that look authentic and age gracefully.'
        },
        {
          title: 'Comprehensive Care',
          description: 'From skin and hair treatments to body contouring, we offer complete aesthetic solutions under one roof.'
        }
      ]
    },
    about: {
      badge: 'About Aesthetic Dermatology',
      title: 'Advanced Skin & Beauty Solutions',
      description: 'Aesthetic dermatology combines medical expertise with cosmetic artistry to enhance your natural beauty, treat skin conditions, and restore a youthful appearance through non-invasive and minimally invasive procedures.',
      paragraphs: [
        'Aesthetic dermatology combines medical expertise with cosmetic artistry to enhance your natural beauty, treat skin conditions, and restore a youthful appearance through non-invasive and minimally invasive procedures.',
        'At RamaCare Polyclinic, our DHA-licensed dermatologists provide comprehensive aesthetic solutions, including advanced laser treatments, skin rejuvenation, hair restoration, PRP therapy, and body contouring services, all tailored to your individual needs.',
        'We use cutting-edge technology and evidence-based treatments to deliver natural-looking, long-lasting results that not only enhance your confidence but also support your overall skin, hair, and body health. Our focus on personalized care and innovative procedures ensures every patient enjoys safe, effective, and satisfying outcomes.'
      ],
      stats: [
        { number: '15+', label: 'Years Experience' },
        { number: '1,000+', label: 'Satisfied Patients' },
        { number: '98%', label: 'Satisfaction Rate' }
      ],
      ctaText: 'Meet Our Dermatologists',
      image: '/images/aesthetic.png',
      imageAlt: 'Aesthetic dermatology treatment',
      overlayCard: {
        number: '15+',
        smallText: 'Years of Experience',
        boldText: 'Expert Dermatology Care'
      }
    },
    experts: {
      badge: 'Expert Medical Team',
      title: 'Meet Our DHA-Licensed\nDermatologists',
      description: 'Highly qualified dermatologists with extensive experience in aesthetic and medical dermatology, committed to enhancing your natural beauty and skin health.',
      stats: [
       { value: '30+', label: 'Expert Doctors' },
    { value: '37+', label: 'Years of Combined Experience' },
    { value: '500+', label: 'Successful Treatments' },
    { value: '4.9', label: 'Average Rating' }
      ],
      ctaSection: {
        title: 'Ready to Meet Your Dermatologist?',
        description: 'Schedule a personalized consultation with our expert dermatologists to begin your aesthetic journey.',
        primaryButton: 'Book Consultation Now',
        secondaryButton: 'View All Dermatologists'
      },
      doctors: [
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
          languages: ['English'],
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
          languages: ['English'],
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
          languages: ['English'],
          quote: 'A healthy smile is the foundation of confidence and overall well-being. My focus is on providing comfortable, high-quality dental care for every patient.',
          testimonial: {
            text: 'Dr. Anan made my dental visit completely stress-free. Very professional and caring.',
            author: 'Patient Feedback',
            location: 'Dubai'
          }
        }
      ]
    },
    whyDubai: {
      badge: 'Why Aesthetic Dermatology in Dubai',
      title: 'Why Choose Aesthetic Dermatology in Dubai?',
      description: `Holistic Skin, Hair, and Body Care for Modern Lifestyles\n\nDubai's fast-paced lifestyle, sun exposure, and environmental stressors can take a toll on your skin, hair, and overall appearance. Many residents face premature aging, pigmentation, hair thinning, acne, and uneven skin texture.\n\n Aesthetic dermatology offers personalized solutions that go beyond temporary fixes. Through advanced treatments, cutting-edge technology, and tailored care, you can restore, rejuvenate, and maintain your natural beauty, supporting long-term skin, hair, and body health.`,
      benefits: [
        {
          icon: 'Sparkles',
          title: 'Revitalize Your Skin',
          description: 'Treat wrinkles, fine lines, pigmentation, and acne scars with advanced anti-aging therapies and skin rejuvenation treatments for a radiant, youthful complexion.'
        },
        {
          icon: 'Scissors',
          title: 'Restore Hair Health',
          description: 'Combat hair thinning, hair loss, and scalp issues with PRP therapy, hair restoration, and nourishing treatments designed to strengthen hair and promote regrowth.'
        },
        {
          icon: 'Zap',
          title: 'Precision Laser Treatments',
          description: 'Experience safe, non-invasive laser solutions for hair removal, skin resurfacing, pigmentation correction, and scar reduction for smooth, flawless results.'
        },
        {
          icon: 'Target',
          title: 'Body Contouring & Sculpting',
          description: 'Enhance your physique with non-surgical body shaping, fat reduction, and skin tightening treatments, improving body confidence and contour.Personalized for Dubai Residents: All aesthetic dermatology treatments are customized according to your skin type, hair condition, and body goals, ensuring safe, effective, and long-lasting results tailored to the demands of Dubai’s lifestyle.'
        }
      ],
      image: '/images/p5.jpg',
      imageAlt: 'Aesthetic dermatology treatment in Dubai',
      ctaCard: {
        title: 'Expert Aesthetic Care in Jumeirah 1',
        description: 'Book a consultation with our DHA-licensed dermatologists for personalized beauty and skin health solutions tailored to Dubai\'s unique environment.'
      },
      bottomSection: {
        title: 'Premium Aesthetic Dermatology Clinic in Jumeirah 1, Dubai',
        description: 'We offer advanced skin care, hair restoration, laser treatments, and body sculpting in Dubai. Our DHA-licensed dermatologists and aesthetic specialists provide expert, personalized, and non-invasive solutions for a range of beauty and skin concerns.\n\n Visit our Jumeirah 1 clinic in Dubai for skin rejuvenation, hair restoration, laser treatments, or body contouring. We use the latest technology and offer personalized care to help you achieve great results.'
      }
    },
    programs: {
      badge: 'Signature Aesthetic Dermatology Programs',
      heading: 'Aesthetic Treatment Programs',
      subtitle: 'Curated Beauty & Wellness Journeys Immersive treatment programs designed for radiant skin, healthy hair, and body confidence Experience personalized aesthetic treatments that rejuvenate your skin, hair, and body. Each program is tailored to your needs and designed to deliver transformative results with lasting beauty and wellness.',
      disclaimer: 'All aesthetic dermatology programs are customized based on your consultation, skin type, hair condition, and body goals, ensuring safe, effective, and lasting results.',
      programs: [
        {
          id: 1,
          title: 'Advanced Skin Rejuvenation',
          duration: '7 to 14 Days',
          backgroundColor: 'bg-white',
          topSectionColor: 'bg-pink-50',
          durationColor: 'bg-pink-100',
          durationTextColor: 'text-pink-700',
          icon: 'sparkle',
          benefits: [
            
            'Anti-aging treatments to reduce wrinkles and fine lines',
            'Restore Glow and Youthful Radiance',
            'Treatment for acne, pigmentation, scars, and sun damage',
            'Skin brightening and hydration for a natural, youthful glow'
          ]
        },
        {
          id: 2,
          title: 'Hair Restoration & Therapy',
          duration: '7 to 14 Days',
          backgroundColor: 'bg-white',
          topSectionColor: 'bg-cyan-50',
          durationColor: 'bg-cyan-100',
          durationTextColor: 'text-cyan-700',
          icon: 'activity',
          benefits: [
            'Strengthen Hair, Prevent Hair Loss',
            'Solutions for hair thinning, hair loss, and scalp health',
            'Improves hair strength, shine, and volume',
            'PRP therapy, hair regrowth treatments, and nourishment'
          ]
        },
        {
          id: 3,
          title: 'Laser Skin & Hair Treatments',
          duration: '3 to 7 Days',
          backgroundColor: 'bg-white',
          topSectionColor: 'bg-teal-50',
          durationColor: 'bg-teal-100',
          durationTextColor: 'text-teal-700',
          icon: 'zap',
          benefits: [
            'Precision Dermatology Solutions',
            'Laser hair removal for smooth, long-lasting results',
            'Skin resurfacing for pigmentation, scars, and uneven texture',
            'Safe, clinically approved procedures for all skin types'
          ]
        },
        {
          id: 4 ,
          title: 'Body Contouring & Sculpting',
          duration: '7 to 14 Days',
          backgroundColor: 'bg-white',
          topSectionColor: 'bg-orange-50',
          durationColor: 'bg-orange-100',
          durationTextColor: 'text-orange-700',
          icon: 'zap',
          benefits: [
            'Enhance Body Shape and Confidence',
            'Non-surgical body sculpting and fat reduction',
            'Skin tightening and cellulite treatments for smoother contours',
            'Enhances overall body aesthetics and confidence'
          ]
        },
        {
          id: 5 ,
          title: 'Anti-Aging & Full Rejuvenation',
          duration: '14 to 21 Days',
          backgroundColor: 'bg-white',
          topSectionColor: 'bg-purple-50',
          durationColor: 'bg-purple-100',
          durationTextColor: 'text-purple-700',
          icon: 'sparkle',
          benefits: [
            'Comprehensive Skin and Body Renewal',
            'Holistic anti-aging treatments for skin, hair, and body',
            'Vitality enhancement and improved energy levels',
            'Preventive aesthetic strategies for long-term results'
          ]
        }
      ]
    },
    treatments: {
      heading: 'Aesthetic Dermatology Services in Dubai',
      subtitle: 'Personalized Treatments for Radiant Skin, Healthy Hair, and Body ConfidenceExperience advanced aesthetic dermatology at RamaCare Polyclinic, designed to meet the unique skincare and cosmetic needs of Dubai residents. Select a service below to explore how we can help you look and feel your best:',
      treatments: [
        {
          id: 1,
          title: 'Skin Treatment',
          slug: 'skin-treatment',
          fullSlug: '/services/skin-treatment-dubai/',
          icon: 'Sparkles',
          subtitle: 'Customized Care for Healthy, Glowing Skin',
          duration: '60-90 Mins',
          badgeColor: 'purple',
          benefits: [
            'Anti-aging therapies to reduce wrinkles and fine lines',
            'Treatment for acne, pigmentation, scars, and sun damage',
            'Brightening and rejuvenation for a youthful complexion',
          ],
          idealFor: 'Dubai residents are exposed to the sun and environmental stress, Individuals seeking natural, long-lasting skin improvements',
          image: '/images/p1.png'
        },
        {
          id: 2,
          title: 'Hair Treatment',
          slug: 'hair-treatment',
          fullSlug: '/services/hair-treatment-dubai/',
          icon: 'Scissors',
          subtitle: 'Restore Strength, Shine, and Volume',
          duration: '45-60 Mins',
          badgeColor: 'purple',
          benefits: [
            'Solutions for hair thinning, hair loss, and scalp health',
            'Advanced PRP therapy, hair regrowth treatments, and nourishment',
            'Improves hair texture and overall scalp condition',
          ],
          idealFor: 'Patients experiencing stress-related or hereditary hair loss, Those looking for non-surgical hair restoration solutions',
          image: '/images/p2.png'
        },
        {
          id: 3,
          title: 'Laser Treatment',
          slug: 'laser-treatment',
          fullSlug: '/services/laser-treatment-dubai/',
          icon: 'Zap',
          subtitle: ' Precision Skin and Hair Solutions',
          duration: '30-60 Mins',
          badgeColor: 'purple',
          benefits: [
            'Laser hair removal for smooth, long-lasting results',
            'Skin resurfacing for pigmentation, scars, and texture improvement',
            'Safe, clinically approved procedures for all skin types',
          ],
          idealFor: 'Individuals seeking non-invasive, high-precision treatments,Dubai residents want fast and effective aesthetic solutions',
          image: '/images/p3.png'
        },
        {
          id: 4,
          title: 'Body Shaping Service ',
          slug: 'body-shaping',
          fullSlug: '/services/body-shaping-dubai/',
          icon: 'Target',
          subtitle: 'Contour and Rejuvenate Your Body',
          duration: '45-90 Mins',
          badgeColor: 'orange',
          benefits: [
            'Non-surgical body sculpting and fat reduction',
            'Cellulite treatment and skin tightening for smoother contours.',
            'Enhances overall body confidence and aesthetics',
          ],
          idealFor: 'Individuals looking for body contouring without surgery, Those aiming for a toned and sculpted appearance',
          image: '/images/p4.png'
        },
        
      ],
      consultationCTA: {
        heading: 'Not Sure Which Treatment is Right for You?',
        subtext: 'Wondering which aesthetic dermatology treatment will best suit your skin, hair, or body goals? Schedule a free consultation with our expert dermatologists and receive personalized recommendations tailored to your unique needs. We assess your concerns carefully and guide you toward safe, effective, and natural-looking results.',
        buttonText: 'Get Free Consultation',
        backgroundColor: 'bg-[#1E5A3C]',
        buttonColor: 'bg-[#C9A547]'
      }
    },
    successStories: {
      badge: 'Patient Success Stories',
      title: 'Real Results From Real People',
      subtitle: 'Hear directly from our patients about their transformative aesthetic dermatology journeys in Dubai.',
      stats: [
       {
      id: 1,
      number: '4.9/5',
      label1: 'Average Rating',
      label2: 'Google Reviews',
      target: 4.9,
      showStars: true
    },
    {
      id: 2,
      number: '500+',
      label1: 'Patient Reviews',
      label2: 'Verified Testimonials',
      target: 500
    },
    {
      id: 3,
      number: '94%',
      label1: 'Success Rate',
      label2: 'Patient Satisfaction',
      target: 94
    },
    {
      id: 4,
      number: '2,500+',
      label1: 'Patients Treated',
      label2: 'Since 2008',
      target: 2500
    }
      ],
      ctaSection: {
        title: 'Ready to transform your skin?',
        description: 'Join hundreds of satisfied patients who have achieved radiant, healthy skin with our advanced aesthetic dermatology treatments in Dubai.',
        buttonText: 'Start your journey today'
      }
    },
    booking: {
      title: 'Book Your Aesthetic Dermatology Consultation',
      description: 'Schedule your personalized aesthetic dermatology consultation with our DHA-licensed specialists at RamaCare Polyclinic in Dubai.',
      expectationTitle: 'What to Expect During Your Consultation',
      steps: [
        {
          title: 'Comprehensive Skin Analysis',
          description: 'Detailed assessment of your skin type, concerns, and aesthetic goals using advanced diagnostic tools.'
        },
        {
          title: 'Personalized Treatment Plan',
          description: 'Customized aesthetic solutions tailored to your specific needs, skin type, and desired outcomes.'
        },
        {
          title: 'Professional Guidance',
          description: 'Expert advice on treatment options, expected results, and aftercare instructions.'
        }
      ],
      offerTitle: 'Special Consultation Offer',
      offerDescription: 'Book your first consultation and receive:',
      offers: [
        'Complimentary skin analysis worth AED 200',
        'Free skincare consultation guide',
        '10% discount on your first aesthetic treatment'
      ],
      contactTitle: 'Need Help Booking?',
      contactMethods: {
        call: {
          label: 'Call Us',
          value: '(+971) 04 286 2006'
        },
        whatsapp: {
          label: 'WhatsApp',
          value: '(+971) 56 659 7878'
        },
        hours: {
          label: 'Opening Hours',
          value: 'Sat-Thu: 10:00 AM - 10:00 PM<br />Fri: 10:00 AM - 8:00 PM'
        }
      }
    },
    faq: {
      title: 'Frequently Asked Questions – Aesthetic Dermatology in Dubai',
      description: 'Everything you need to know about our advanced aesthetic dermatology treatments and services in Dubai.',
      faqs: [
        {
          id: 1,
          question: 'What is aesthetic dermatology?',
          answer: 'Aesthetic dermatology focuses on improving skin, hair, and body appearance using medically approved treatments like lasers, injectables, and facials while maintaining long-term skin health and safety.'
        },
        {
          id: 2,
          question: 'Why choose aesthetic dermatology in Dubai?',
          answer: 'Dubai offers advanced technology, DHA-licensed dermatologists, and international treatment standards, making aesthetic dermatology in Dubai safe, effective, and trusted for visible, natural-looking results.'
        },
        {
          id: 3,
          question: 'Are aesthetic dermatology treatments safe?',
          answer: 'Yes, when performed by DHA-licensed dermatologists using evidence-based procedures, aesthetic dermatology treatments are safe, minimally invasive, and customized to suit individual skin types and concerns.'
        },
        {
          id: 4,
          question: 'Which skin problems can aesthetic dermatology treat?',
          answer: 'Aesthetic dermatology treats acne, scars, pigmentation, wrinkles, dull skin, uneven tone, and aging signs through advanced medical and cosmetic procedures tailored to each patient.'
        },
        {
          id: 5,
          question: 'How long do aesthetic dermatology results last?',
          answer: 'Results depend on treatment type and lifestyle. Laser and injectables offer long-lasting benefits, while maintenance sessions and proper skincare help sustain healthy, youthful skin over time.'
        },
        {
          id: 6,
          question: ' Is laser treatment suitable for all skin types?',
          answer: 'Yes, modern laser technology is designed for all skin tones. Dermatologists adjust settings after skin assessment to ensure safe, effective laser treatments with minimal risk.'
        },
        {
          id: 7,
          question: 'What is the downtime after aesthetic treatments?',
          answer: 'Most aesthetic dermatology treatments involve little to no downtime. Mild redness or swelling may occur but usually resolves quickly, allowing return to daily activities.'
        },
        {
          id: 8,
          question: 'Are aesthetic treatments painful?',
          answer: 'Most procedures are well-tolerated. Dermatologists use cooling systems or topical anesthesia to minimize discomfort and ensure a comfortable treatment experience.'
        },
        {
          id: 9,
          question: 'Can aesthetic dermatology help with hair loss?',
          answer: 'Yes, treatments like PRP therapy, mesotherapy, and scalp treatments help reduce hair fall, improve scalp health, and stimulate natural hair regrowth safely.'
        },
        {
          id: 10,
          question: 'At what age should aesthetic dermatology treatments start?',
          answer: 'Preventive aesthetic treatments can start in the mid-20s, while corrective procedures are suitable later, depending on skin condition, goals, and the dermatologist recommendations.'
        },
        {
          id: 11,
          question: 'Are aesthetic dermatology treatments permanent?',
          answer: 'Some treatments offer long-term improvement, but aging and lifestyle factors continue. Maintenance sessions and proper skincare help prolong results and maintain skin health.'
        },
        {
          id: 12,
          question: 'How many sessions are required for laser hair removal?',
          answer: 'Typically, 6–8 laser hair removal sessions are recommended for optimal, long-lasting results, depending on hair type, skin tone, and treatment area.'
        },
        {
          id: 13,
          question: 'Can multiple aesthetic treatments be combined?',
          answer: 'Yes, dermatologists often combine treatments like facials, lasers, and injectables for comprehensive results, ensuring safety and enhanced overall skin improvement.'
        },
        {
          id: 14,
          question: 'Is aesthetic dermatology suitable for sensitive skin?',
          answer: 'Absolutely. Treatments are customized after skin analysis, ensuring gentle, safe options for sensitive skin while minimizing irritation and maximizing results.'
        },
        {
          id: 15,
          question: 'How do I choose the right aesthetic dermatology clinic in Dubai?',
          answer: 'Choose a clinic with DHA-licensed dermatologists, modern technology, transparent pricing, strong patient reviews, and personalized treatment plans focused on long-term skin health.'
        }
      ]
    },
    booking: {
      title: 'Begin Your Aesthetic Transformation Today',
      description: 'Schedule your personalized consultation with our expert dermatologists. Same-day appointments are available for your convenience.',
      expectationTitle: 'What to Expect During Your Consultation',
      steps: [
        {
      title: 'Comprehensive Assessment',
      description: '60-minute consultation including a detailed skin analysis and discussion of your aesthetic goals.'
    },
    {
      title: 'Personalized Treatment Plan',
      description: 'Custom treatment protocol designed specifically for your skin, hair, or body concerns.'
    },
    {
      title: 'Treatment Journey',
      description: 'Begin your chosen therapies with ongoing guidance and adjustments for optimal results.'
    }
      ],
      offerTitle: 'Limited Time Offer',
  offerDescription: 'Book your first consultation this month and enjoy:',
  offers: [
    'Complimentary skin or hair analysis report',
    'Free beauty and wellness guide',
    '15% off your first treatment package'
  ],
      contactTitle: 'Prefer to Talk?',
  contactMethods: {
    call: {
      label: 'Call Us',
      value: '(+971) 04 286 2006'
    },
    whatsapp: {
      label: 'WhatsApp',
      value: '(+971) 56 659 7878'
    },
    hours: {
      label: 'Open Hours',
      value: [
        'Sun-Thu: 10:00 AM – 10:00 PM',
        'Fri: 10:00 AM – 8:00 PM'
      ]
       }
      }
    },
    facility: {
  badge: 'Our Aesthetic Facility',
  title: 'State-of-the-Art Aesthetic Dermatology Clinic',
  description: 'Experience advanced aesthetic treatments in our premium Dubai facility equipped with cutting-edge technology and luxurious amenities.',
  topGalleryImages: [
    {
      id: 1,
      src: '/images/1.png',
      alt: 'Modern dermatology treatment room'
    },
    {
      id: 2,
      src: '/images/2.png',
      alt: 'Advanced laser equipment'
    },
    {
      id: 3,
      src: '/images/3.png',
      alt: 'Luxury consultation area'
    }
  ],
  bottomGalleryImages: [
    {
      id: 4,
      src: '/images/4.png',
      alt: 'Reception and waiting area'
    },
    {
      id: 5,
      src: '/images/5.png',
      alt: 'Skin analysis technology'
    },
    {
      id: 6,
      src: '/images/6.png',
      alt: 'Post-treatment recovery lounge'
    }
  ],
  trustBadges: [
    {
      id: 1,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'DHA Certified',
      subtitle: 'Licensed dermatology clinic'
    },
    {
      id: 2,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Advanced Technology',
      subtitle: 'Latest aesthetic devices'
    },
    {
      id: 3,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Premium Location',
      subtitle: 'Jumeirah 1, Dubai'
    }
  ]
}
  },

  'dental': {
    hero: {
      badge: 'DHA-Licensed dental Clinic',
       titleLine1: 'Dental Treatment in Dubai  ',
      titleHighlight: ' Healthy, Beautiful',
      titleLine2:' Smiles',
      // title: 'dental Treatment in Dubai – Comprehensive Care for Healthy and Beautiful Smiles',
      subtitle: 'Comprehensive dental solutions, advanced treatments, and personalized care — all under one roof for your oral health and radiant smile.',
      description: 'Achieve a confident, beautiful smile with dental veneers—a modern cosmetic dental solution designed to correct stains, chips, gaps, and uneven teeth. Our expert dentists use advanced techniques and high-quality materials to create natural-looking veneers that enhance your smile while preserving your natural teeth.',
      ctaText: 'Book Free Consultation',
      backgroundImage: '/images/d1.jpg',
      stats: [
         { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Patients' },
    { number: '98%', label: 'Success Rate' },
    { number: '40+', label: 'Treatments' }
      ],
      features: [
        'DHA-Licensed Dentists',
        'Advanced Cosmetic Procedures',
        'Natural-Looking Results',
        'Prime Jumeirah 1 Location'
      ],
      whatsappText: 'WhatsApp Now',
      location: 'Heart of Jumeirah 1, Dubai',
      timing: 'Same Day Appointments'
    },
    whyChooseUs: {
      badge: 'Why Choose Us',
      title: 'Dubai\'s Premier Dental Care Centre',
      description: 'At RamaCare Polyclinic, we redefine dental care in Dubai. Here’s why patients trust us for their dental treatment:',
      cards: [
        {
          title: 'Advanced dental Treatments',
          description: 'We combine evidence-based techniques with the latest dental technology for safe, effective procedures.'
        },
        {
          title: 'Holistic Oral Care',
          description: 'Our approach focuses not only on teeth but also on overall oral health and long-term wellness.'
        },
        {
          title: 'Modern Facilities',
          description: 'Comfortable, hygienic, and equipped with cutting-edge dental equipment for a seamless experience.'
        },
        {
          title: 'Patient Satisfaction',
          description: 'Personalized care, transparent communication, and continuous follow-ups ensure your comfort and confidence.'
        },
        {
          title: 'DHA-licensed dentists',
          description: 'with extensive clinical expertise '
        },
        {
          title: 'Personalized dental treatment plans',
          description: 'tailored to each patient '
        },
        {
          title: 'Premium Jumeirah 1 facility',
          description: 'offering a family-friendly environment '
        },
        {
          title: 'Cutting-edge dental technology',
          description: 'for accurate diagnostics and effective treatments'
        },
        {
          title: 'Comprehensive care',
          description: 'spanning preventive, cosmetic, and surgical dentistry'
        },
      ]
    },
    about: {
      badge: 'About Our Dental Department',
      title: 'Complete Oral Health Solutions',
      description: 'Our dental services encompass preventive care, cosmetic dentistry, restorative treatments, and oral surgery, ensuring your smile is healthy, beautiful, and functional for years to come.',
      paragraphs: [
        'Our dental Department delivers advanced oral healthcare within a modern, multi-specialty polyclinic in the heart of Jumeirah 1, Dubai. We combine clinical expertise, cutting-edge dental technology, and a patient-first approach to provide safe, comfortable, and high-quality dental care for all ages.',
        'Led by DHA-licensed dentists with extensive clinical experience, our skilled team offers a full spectrum of services, including preventive dentistry, cosmetic smile enhancement, restorative treatments, orthodontics, and minor oral surgical procedures. Each treatment plan is personalized to meet your dental needs, lifestyle, and long-term oral health goals.',
        'We adhere to strict international sterilization and hygiene protocols, using modern equipment and minimally invasive techniques to ensure precision, comfort, and lasting results. Whether you need routine dental care, smile enhancement, or advanced restorative solutions, our dental Department provides trusted care with the professionalism and comfort of a premium medical facility.'
      ],
      stats: [
        { number: '15+', label: ' Advanced dental Treatments' },
        { number: '1,000+', label: ' Happy dental Patients' },
        { number: '99%', label: ' Patient Satisfaction' }
      ],
      ctaText: 'Meet Our Dentists',
      image: '/images/d4.jpg',
      imageAlt: 'dental care services',
      overlayCard: {
        number: '15+',
        smallText: 'Years of Experience',
        boldText: 'Trusted dental Care'
      }
    },
   treatments: {
  heading: 'Dental Treatments',
  subtitle: 'Advanced Oral Care for Healthy, Confident Smiles',
  treatments: [
    {
      id: 1,
      title: 'Composite Veneers',
      slug: 'composite-veneers',
      fullSlug: '/services/composite-veneers-dubai/',
      icon: 'Sparkles',
      subtitle: 'Quick Smile Enhancement',
      duration: '45-60 Mins',
      badgeColor: 'purple',
      benefits: [
        ' Improves tooth shape and color',
        ' Minimally invasive cosmetic solution',
        ' Immediate visible results',
        ' Natural-looking smile enhancement'
      ],
      idealFor:
        ' Patients with chipped, discolored, or uneven teeth seeking fast cosmetic improvement.',
      image: '/images/comp.jpg',
      alt: 'dental Treatment provided in a clean and modern clinical environment.'
    },
    {
      id: 2,
      title: 'Dental Veneers',
      slug: 'dental-veneers',
      fullSlug: '/services/dental-veneers-dubai/',
      icon: 'Sparkles',
      subtitle: 'Long-Lasting Smile Makeover',
      duration: '60-90 Mins',
      badgeColor: 'purple',
      benefits: [
        ' Covers stains, gaps, and minor misalignment',
        ' Strong and stain-resistant',
        ' Enhances smile symmetry',
        ' Durable aesthetic results'
      ],
      idealFor:
        ' Individuals looking for a complete smile transformation with long-term results.',
      image: '/images/dentalveeners.jpg',
      alt: 'dental Treatment performed by an experienced dentist using advanced equipment.'
    },
    {
      id: 3,
      title: 'Root Canal Treatment',
      slug: 'root-canal-treatment',
      fullSlug: '/services/root-canal-treatment-dubai/',
      icon: 'Scissors',
      subtitle: 'Pain Relief & Tooth Preservation',
      duration: '45-60 Mins',
      badgeColor: 'purple',
      benefits: [
        ' Eliminates tooth infection and pain',
        ' Saves natural tooth',
        ' Prevents extraction',
        ' Restores chewing comfort'
      ],
      idealFor:
        ' Patients suffering from tooth infection, deep decay, or severe sensitivity.',
      image: '/images/rootcanal.jpg',
      alt: 'Patient receiving safe and comfortable dental Treatment.'
    },
    {
      id: 4,
      title: 'Snap On Smile',
      slug: 'snap-on-smile',
      fullSlug: '/services/snap-on-smile-dubai/',
      icon: 'Sparkles',
      subtitle: 'Instant Smile Solution',
      duration: '30-45 Mins',
      badgeColor: 'purple',
      benefits: [
        ' Non-invasive cosmetic solution',
        ' Covers gaps, stains, and missing teeth',
        ' Removable and comfortable',
        ' Immediate smile improvement'
      ],
      idealFor:
        ' Patients seeking a temporary or non-invasive cosmetic smile enhancement.',
      image: '/images/snap-on-smile.jpg',
      alt: 'dental Treatment room designed for hygiene, safety, and patient comfort.'
    },
    {
      id: 5,
      title: 'Teeth Bleaching',
      slug: 'teeth-bleaching',
      fullSlug: '/services/teeth-bleaching-dubai/',
      icon: 'Zap',
      subtitle: 'Brighten Your Smile',
      duration: '30-60 Mins',
      badgeColor: 'purple',
      benefits: [
        ' Removes stains and discoloration',
        ' Enhances smile brightness',
        ' Safe and effective whitening',
        ' Boosts confidence'
      ],
      idealFor:
        ' Individuals with stained or dull teeth seeking a brighter smile.',
      image: '/images/teeth-bleaching.jpg',
      alt: 'Comprehensive dental Treatment focused on long-term oral health care.'
    },
    {
      id: 6,
      title: 'Teeth Dentures',
      slug: 'teeth-dentures',
      fullSlug: '/services/teeth-dentures-dubai/',
      icon: 'Target',
      subtitle: 'Reliable Tooth Replacement',
      duration: '45-90 Mins',
      badgeColor: 'orange',
      benefits: [
        ' Replaces missing teeth',
        ' Restores facial structure',
        ' Improves eating and speech',
        ' Custom-fit for comfort'
      ],
      idealFor:
        ' Patients with partial or complete tooth loss.',
      image: '/images/teethdentures.jpg',
      alt: 'Personalized dental Treatment consultation for accurate diagnosis and planning.'
    },
    {
      id: 7,
      title: 'Tooth Composite Restoration',
      slug: 'tooth-composite-restoration',
      fullSlug: '/services/teeth-composite-restoration-dubai/',
      icon: 'Sparkles',
      subtitle: 'Repair & Protect Teeth',
      duration: '30-45 Mins',
      badgeColor: 'purple',
      benefits: [
        ' Repairs cavities and cracks',
        ' Matches natural tooth color',
        ' Preserves tooth structure',
        ' Quick and effective restoration'
      ],
      idealFor:
        ' Patients with cavities, chipped, or damaged teeth.',
      image: '/images/composite.jpg',
      alt: 'Painless dental Treatment using modern dental techniques.'
    },
    {
      id: 8,
      title: 'Braces (Metal & Ceramic)',
      slug: 'braces-metal-ceramic',
      fullSlug: '/services/braces-metal-ceramic-dubai/',
      icon: 'Target',
      subtitle: 'Teeth Alignment & Bite Correction',
      duration: '45-90 Mins',
      badgeColor: 'orange',
      benefits: [
        ' Corrects misaligned teeth',
        ' Improves bite and jaw balance',
        ' Enhances smile aesthetics',
        ' Long-term orthodontic stability'
      ],
      idealFor:
        ' Children, teenagers, and adults with alignment or bite issues.',
      image: '/images/braces.jpg',
      alt: 'Routine dental Treatment carried out with professional care.'
    },
    {
      id: 9,
      title: 'Dental Crown Bridge',
      slug: 'dental-crown-bridge',
      fullSlug: '/services/dental-crown-bridges-dubai/',
      icon: 'Target',
      subtitle: 'Strong Tooth Restoration',
      duration: '45-90 Mins',
      badgeColor: 'orange',
      benefits: [
        ' Restores damaged or missing teeth',
        ' Improves chewing function',
        ' Maintains facial structure',
        ' Durable and natural-looking'
      ],
      idealFor:
        ' Patients with broken, weakened, or missing teeth.',
      image: '/images/dental-crown.jpg',
      alt: 'Cosmetic and restorative dental Treatment for smile improvement.'
    },
    {
      id: 10,
      title: 'Gum Disease Treatment',
      slug: 'gum-disease-treatment',
      fullSlug: '/services/gum-disease-treatment-dubai/', 
      icon: 'Target',
      subtitle: 'Healthy Gums, Strong Teeth',
      duration: '45-90 Mins',
      badgeColor: 'orange',
      benefits: [
        ' Treats gum infection and inflammation',
        ' Prevents tooth loss',
        ' Improves gum strength',
        ' Restores oral health'
      ],
      idealFor:
        ' Patients with bleeding gums, swelling, or chronic bad breath.',
      image: '/images/gum-disease.jpg',
      alt: 'High-quality dental Treatment ensuring patient safety and effective results.'
    }
  ],
  consultationCTA: {
    heading: 'Not Sure Which Treatment is Right for You?',
    subtext: 'Choosing the right dental care can be confusing with so many options available. At RamaCare Polyclinic, we help you make the best choice for your oral health. Schedule a free consultation with our expert dentists to get personalized recommendations on Dental Treatment in Dubai.',
    buttonText: 'Get Free Consultation',
    backgroundColor: 'bg-[#1E5A3C]',
    buttonColor: 'bg-[#C9A547]'
  }
},
    experts: {
      badge: 'Expert Medical Team',
      title: 'Meet Our DHA-Licensed\nDentists',
      description: 'Highly qualified dentists with extensive experience in cosmetic and restorative dentistry, committed to creating beautiful, healthy smiles.',
      stats: [
       { value: '30+', label: 'Expert Doctors' },
    { value: '37+', label: 'Years of Combined Experience' },
    { value: '500+', label: 'Successful Treatments' },
    { value: '4.9', label: 'Average Rating' }
      ],
      ctaSection: {
        title: 'Ready to Meet Your Dentist?',
        description: 'Schedule a personalized consultation with our expert dentists to begin your smile transformation.',
        primaryButton: 'Book Consultation Now',
        secondaryButton: 'View All Dentists'
      },
      doctors: [
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
          languages: ['English'],
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
          languages: ['English'],
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
          languages: ['English'],
          quote: 'A healthy smile is the foundation of confidence and overall well-being. My focus is on providing comfortable, high-quality dental care for every patient.',
          testimonial: {
            text: 'Dr. Anan made my dental visit completely stress-free. Very professional and caring.',
            author: 'Patient Feedback',
            location: 'Dubai'
          }
        }
      ]
    },
    whyDubai: {
      badge: 'Dental Treatment',
      title: 'Why Dental Care is Important for Dubai’s Fast-Paced Lifestyle ?',
      description: 'Dubai’s dynamic, high-paced environment — with long work hours, extreme heat, and irregular routines — often leads to oral health challenges. Residents may experience tooth sensitivity, gum problems, bad breath, and jaw discomfort due to stress, diet, and passive rituals. At RamaCare Polyclinic, we provide comprehensive dental care that goes beyond treating symptoms. Our holistic approach focuses on prevention, restoration, and cosmetic enhancement to ensure lasting oral health and confident smiles.',
      benefits: [
        {
          icon: 'Smile',
          title: 'Prevent Tooth Decay & Gum Disease',
          description: 'Regular check-ups, professional cleanings, and preventive care help protect your teeth and gums from decay, cavities, and periodontal issues.'
        },
        {
          icon: 'Shield',
          title: 'Reduce Stress & Jaw Tension',
          description: 'dental stress from grinding or clenching can cause jaw pain. Our customized night guards, bite alignment, and relaxation therapies help reduce discomfort and prevent long-term damage.'
        },
        {
          icon: 'Star',
          title: 'Restore Oral Health',
          description: 'Restorative dentistry, including fillings, crowns, and implants, addresses missing or damaged teeth, restoring function, aesthetics, and oral confidence.'
        },
        {
          icon: 'CheckCircle',
          title: 'Enhance Your Smile',
          description: 'Cosmetic treatments like teeth whitening, veneers, and smile design improve the appearance of your teeth, boosting confidence for personal and professional interactions.'
        },
        {
          icon: 'Star',
          title: 'Pediatric & Family dental Care',
          description: 'Gentle, effective care for children ensures healthy dental habits from an early age, preventing future complications and fostering lifelong oral wellness.'
        },
        {
          icon: 'CheckCircle',
          title: 'Flexible Appointments for Busy Professionals',
          description: 'We offer evening and weekend appointments, making it easy for Dubai professionals to maintain oral health without disrupting their work schedules.'
        },
      ],
      image: '/images/d2.jpg',
      imageAlt: 'dental care in Dubai',
      ctaCard: {
        title: 'Expert dental Care in Jumeirah 1',
        description: 'Book a consultation with our DHA-licensed dentists for personalized smile transformation and oral health solutions.'
      },
      bottomSection: {
        title: 'Premium dental Care Centre in Jumeirah 1, Dubai',
        description: 'We offer comprehensive dental services including cosmetic dentistry, restorative treatments, orthodontics, and preventive care in Dubai. Our DHA-licensed dentists use advanced technology and premium materials to deliver natural-looking, long-lasting results. Visit our Jumeirah 1 clinic for teeth whitening, veneers, dental implants, or routine check-ups. We provide personalized care to help you achieve a healthy, beautiful smile.'
      }
    },
    programs: {
      badge: 'Dental Care Programs',
      heading: 'Comprehensive Dental Treatment Programs',
      subtitle: 'Complete dental care programs designed to restore and maintain your oral health with expert care.',
      disclaimer: 'All programs are customized based on your oral health assessment and treatment needs. Duration and procedures may vary.',
      programs: [
        {
          id: 1,
          title: 'Smile Makeover Program',
          duration: '2–4 Months',
          backgroundColor: 'bg-white',
          topSectionColor: 'bg-blue-50',
          durationColor: 'bg-blue-100',
          durationTextColor: 'text-blue-700',
          icon: 'smile',
          benefits: [
            'Teeth whitening and cosmetic procedures',
            'Veneers and dental bonding',
            'Complete smile transformation'
          ]
        },
        {
          id: 2,
          title: 'Orthodontic Treatment',
          duration: '12–24 Months',
          backgroundColor: 'bg-white',
          topSectionColor: 'bg-teal-50',
          durationColor: 'bg-teal-100',
          durationTextColor: 'text-teal-700',
          icon: 'target',
          benefits: [
            'Teeth alignment and bite correction',
            'Traditional and clear aligners',
            'Improved oral function and aesthetics'
          ]
        },
        {
          id: 3,
          title: 'Complete Oral Health',
          duration: 'Ongoing',
          backgroundColor: 'bg-white',
          topSectionColor: 'bg-purple-50',
          durationColor: 'bg-purple-100',
          durationTextColor: 'text-purple-700',
          icon: 'stethoscope',
          benefits: [
            'Regular cleanings and check-ups',
            'Preventive care and maintenance',
            'Comprehensive oral health management'
          ]
        }
      ]
    },
    successStories: {
      badge: 'Patient Success Stories',
      title: 'Real Results From Real People',
      subtitle: 'Hear directly from our patients about their smile transformation journeys in Dubai.',
      stats: [
      {
      id: 1,
      number: '4.9/5',
      label1: 'Average Rating',
      label2: 'Google Reviews',
      target: 4.9,
      showStars: true
    },
    {
      id: 2,
      number: '500+',
      label1: 'Patient Reviews',
      label2: 'Verified Testimonials',
      target: 500
    },
    {
      id: 3,
      number: '94%',
      label1: 'Success Rate',
      label2: 'Patient Satisfaction',
      target: 94
    },
    {
      id: 4,
      number: '2,500+',
      label1: 'Patients Treated',
      label2: 'Since 2008',
      target: 2500
    }
      ],
      ctaSection: {
        title: 'Ready to transform your smile?',
        description: 'Join thousands of satisfied patients who have achieved beautiful, confident smiles with our expert dental care in Dubai.',
        buttonText: 'Start your journey today'
      }
    },
  
    faq: {
      title: 'Frequently Asked Questions (FAQs)',
      description: null,
      faqs: [
        {
          id: 1,
          question: 'What types of dental treatment are available at RamaCare Polyclinic?',
          answer:
            'We offer a comprehensive range of dental treatments including preventive care, cosmetic dentistry, orthodontics, dental surgery, dental implants in Dubai, and teeth whitening. Every treatment is personalized to meet your oral health needs.'
        },
        {
          id: 2,
          question: 'How do I book an appointment for dental treatment?',
          answer:
            'Booking is simple. You can schedule your visit online, call our Jumeirah 1 clinic, or walk in. Our staff will guide you through consultation, treatment options, and follow-up care.'
        },
        {
          id: 3,
          question: 'Are your dentists certified and experienced?',
          answer:
            'Yes, all our dentists are DHA-licensed dentists with extensive clinical expertise in general, cosmetic, and surgical dentistry, ensuring safe and effective care.'
        },
        {
          id: 4,
          question: 'What cosmetic dentistry services do you provide?',
          answer:
            'We offer veneers, Snap-On Smile, teeth whitening in Dubai, smile design, and bonding. These procedures improve aesthetics and restore confidence while maintaining oral health.'
        },
        {
          id: 5,
          question: 'Is dental surgery at RamaCare safe?',
          answer:
            'Absolutely. All surgical procedures, including wisdom tooth extraction and implants, follow strict safety protocols, use advanced technology, and include post-treatment monitoring for patient comfort.'
        },
        {
          id: 6,
          question: 'Do you offer orthodontic solutions for adults and children?',
          answer:
            'Yes, we provide braces (metal and ceramic) and invisible aligners. Our orthodontic treatments are tailored to each patient for effective teeth alignment and bite correction.'
        },
        {
          id: 7,
          question: 'How long does teeth whitening last?',
          answer:
            'With proper care and maintenance, results from teeth whitening in Dubai can last from several months to a few years. Regular dental hygiene and check-ups prolong the effect.'
        },
        {
          id: 8,
          question: 'Are dental implants painful?',
          answer:
            'We ensure minimal discomfort through local anesthesia and advanced techniques. Post-procedure pain is manageable and temporary, with proper aftercare provided.'
        },
        {
          id: 9,
          question: 'Can I get a customized dental plan?',
          answer:
            'Yes. Every patient receives a personalized dental plan that addresses preventive, cosmetic, and restorative needs, ensuring long-term oral health and aesthetic results.'
        },
        {
          id: 10,
          question: 'What is included in preventive dental care?',
          answer:
            'Preventive care includes oral hygiene check-ups, scaling and polishing, gum health evaluation, cavity detection, and guidance for daily oral care.'
        },
        {
          id: 11,
          question: 'Do you provide emergency dental care?',
          answer:
            'Yes, our clinic accommodates dental emergencies such as toothache, broken teeth, or sudden gum issues with prompt and professional care.'
        },
        {
          id: 12,
          question: 'Is it safe to combine cosmetic treatments with orthodontics?',
          answer:
            'Yes, our DHA-licensed dentists carefully plan treatments to ensure cosmetic procedures like veneers or teeth whitening complement orthodontic care effectively.'
        },
        {
          id: 13,
          question: 'How often should I visit for routine dental check-ups?',
          answer:
            'We recommend at least twice-yearly check-ups for children and adults. Regular visits prevent issues, maintain oral hygiene, and allow early intervention when needed.'
        },
        {
          id: 14,
          question: 'Are your treatments suitable for all ages?',
          answer:
            'Yes, our dental services cater to children, adults, and seniors, with treatments customized according to age, oral health, and cosmetic goals.'
        },
        {
          id: 15,
          question: 'Do you provide long-term guidance for oral health?',
          answer:
            'Absolutely. Beyond treatment, we educate patients on proper brushing, flossing, dietary considerations, and follow-ups to ensure lasting oral health and radiant smiles.'
        }
      ]
    }    ,
      booking: {
      title: 'Begin Your Dental Care Journey Today',
      description: 'Schedule your personalized consultation with our expert dentists. Same-day appointments are available to help you start your journey toward a healthier, brighter smile.',
      expectationTitle: 'What to Expect',
     steps: [
    {
      title: 'Comprehensive Assessment',
      description: 'A 60-minute consultation including a thorough oral health evaluation and review of your dental history to understand your needs.'
    },
    {
      title: 'Personalized Plan',
      description: 'Receive a custom treatment protocol tailored to your unique dental concerns, ensuring the most effective and comfortable care.'
    },
    {
      title: 'Treatment Journey',
      description: 'Begin your recommended therapies with ongoing support and adjustments, so your dental care is precise, safe, and stress-free.'
    }
  ],
     offerTitle: 'Limited Time Offer',
  offerDescription: 'Book your first consultation this month and enjoy:',
  offers: [
    'Free oral health assessment report',
    'Complimentary dental wellness guidebook',
    '15% off your first treatment package'
  ],
      contactTitle: 'Prefer to Talk?',
  contactMethods: {
    call: {
      label: 'Call Us',
      value: '(+971) 04 286 2006'
    },
    whatsapp: {
      label: 'WhatsApp',
      value: '(+971) 56 659 7878'
    },
    hours: {
      label: 'Open Hours',
      value: [
        'Sun-Thu: 10:00 AM – 10:00 PM',
        'Fri: 10:00 AM – 8:00 PM'
      ]
       }
      }
    },

    facility: {
  badge: 'Our dental Facility',
  title: 'State-of-the-Art dental Clinic',
  description:
    'Receive comprehensive dental care in our modern Dubai dental clinic equipped with advanced technology, premium sterilization standards, and patient-centric comfort.',
  topGalleryImages: [
    {
      id: 1,
      src: '/images/d5.png',
      alt: 'Modern dental treatment room'
    },
    {
      id: 2,
      src: '/images/d6.png',
      alt: 'Advanced dental equipment and chair'
    },
    {
      id: 3,
      src: '/images/d7.png',
      alt: 'dental consultation and diagnosis area'
    }
  ],
  bottomGalleryImages: [
    {
      id: 4,
      src: '/images/d8.png',
      alt: 'dental reception and waiting lounge'
    },
    {
      id: 5,
      src: '/images/d9.png',
      alt: 'Sterilization and hygiene room'
    },
    {
      id: 6,
      src: '/images/d10.png',
      alt: 'Post-treatment dental care area'
    }
  ],
  trustBadges: [
    {
      id: 1,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: 'DHA Certified',
      subtitle: 'Licensed dental clinic'
    },
    {
      id: 2,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Advanced Dentistry',
      subtitle: 'Digital X-rays & modern tools'
    },
    {
      id: 3,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: 'Prime Location',
      subtitle: 'Jumeirah 1, Dubai'
    }
  ]
}
  },

  'physiotherapy': {
    hero: {
      badge: 'DHA-Licensed Premier Physiotherapy Centre',
       titleLine1: 'Advanced Physiotherapy ',
      titleHighlight: ' & Rehabilitation',
      titleLine2:' in Jumeirah 1',
      // title: 'Advanced Physiotherapy– & Rehabilitation in Jumeirah 1',
      subtitle: 'Evidence-based Physiotherapy Treatment for pain relief, injury recovery, posture modification, and full functional restoration—created for modern lifestyles in Dubai.',
      description: 'Evidence-based Physiotherapy Treatment for pain relief, injury recovery, posture modification, and full functional restoration—created for modern lifestyles in Dubai.',
      ctaText:  'Book Free Consultation',
       backgroundImage: '/images/phy3.jpg',
       backgroundAlt: 'Physiotherapy Treatment focused on pain relief and improved body mobility.',
      stats: [
        { number: '15+', label: 'Years Experience' },
        { number: '5,00+', label: 'Happy Patients' },
        { number: '98%', label: 'Recovery Success Rate' },
        { number: '4.8/5', label: 'Patient Rating' }
      ],
      features: [
        'DHA-Licensed Physiotherapists',
        'Personalised Rehabilitation Programs',
        'Advanced Therapy Equipment',
        'Premium Jumeirah 1 Location'
      ],
      whatsappText: 'WhatsApp Now',
      location: 'Heart of Jumeirah 1, Dubai',
      timing: 'Same-Day Appointments Available'
    },
    whyChooseUs: {
      badge: 'Why Choose Us',
      title: 'Dubai\'s Trusted Physiotherapy Centre',
      description: 'At our clinic, we provide world-class Physiotherapy in Dubai designed to help you recover faster, improve mobility, and enhance overall quality of life. Our team of licensed specialists combines extensive clinical expertise with personalized rehabilitation strategies to ensure each patient achieves optimal outcomes.',
      cards: [
        {
          title: 'Evidence-Based Physiotherapy',
          description: 'Modern rehabilitation techniques are supported by clinical research and proven recovery outcomes.'
        },
        {
          title: 'DHA-Licensed Physiotherapists',
          description: 'Certified professionals with extensive experience in musculoskeletal and functional rehabilitation.'
        },
        {
          title: 'Personalised Treatment Plans',
          description: 'Customised therapy protocols based on injury type, movement analysis, and recovery goals.'
        },
        {
          title: 'Premium Jumeirah 1 Facility',
          description: 'State-of-the-art physiotherapy clinic with advanced equipment and hygienic medical standards.'
        },
        {
          title: 'Functional Recovery Focus',
          description: 'Treatment plans are designed to restore mobility, strength, posture, and daily performance.'
        },
        {
          title: 'High Patient Satisfaction',
          description: 'Consistently high recovery rates and positive patient feedback across diverse conditions.'
        }
      ]
    },
    about: {
      badge: 'About Our Physiotherapy Department',
      title: 'Advanced Rehabilitation Within a Modern Polyclinic',
      description: 'Physiotherapy uses evidence-based techniques to restore function, reduce pain, and improve quality of life through exercise, manual therapy, and specialized treatments tailored to your needs.',
      paragraphs: [
        'Our Physiotherapy Department delivers comprehensive rehabilitation care within a fully equipped multi-speciality polyclinic in Jumeirah 1. We combine advanced physiotherapy techniques with modern diagnostic assessments to ensure safe, effective recovery.',
        'Led by experienced DHA-licensed physiotherapists, our team specialises in pain management, post-injury rehabilitation, postural correction, pelvic floor therapy, and functional movement restoration. Every treatment plan is tailored to your condition, lifestyle, and recovery objectives.',
        'We maintain strict medical hygiene standards while delivering patient-focused physiotherapy designed for long-term results—not temporary relief.'
      ],
      stats: [
        { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Patients' },
    { number: '98%', label: 'Success Rate' },
    { number: '40+', label: 'Treatments' }
      ],
      ctaText: 'Meet Our Physiotherapists',
      image: '/images/ph-top.jpg',
      imageAlt: 'Patient receiving safe and effective Physiotherapy Treatment for recovery.',
      overlayCard: {
        number: '15+',
        smallText: 'Years of Excellence',
        boldText: 'Trusted Physiotherapy Care'
      }
    },
    treatments: {
      heading: 'Personalised Treatments for Modern Health Challenges',
      subtitle: 'Select a treatment below to explore how expert Physiotherapy Treatment can restore your mobility and quality of life.',
      consultationCTA: {
        heading: 'Ready to Move Better?',
        subtext: 'Book your physiotherapy consultation today and start your journey to pain-free movement and improved function.',
        buttonText: 'Consult Our Physiotherapists',
        backgroundColor: 'bg-blue-600',
        buttonColor: 'bg-white hover:bg-gray-100 text-blue-600'
      },
      treatments: [
        {
          id: 1,
          title: 'Ultrasound Therapy',
          slug: 'hair-treatment',
          fullSlug: '/services/ultrasound-therapy-dubai/',
          icon: 'Scissors',
          subtitle: 'Restore Strength, Shine, and Volume',
          duration: '45-60 Mins',
          badgeColor: 'purple',
          benefits: [
            'Solutions for hair thinning, hair loss, and scalp health',
            'Advanced PRP therapy, hair regrowth treatments, and nourishment',
            'Improves hair texture and overall scalp condition',
          ],
          idealFor: 'Patients experiencing stress-related or hereditary hair loss, Those looking for non-surgical hair restoration solutions',
          image: '/images/ultrasound.jpg',
           alt: 'Ultrasound Therapy in Dubai performed in a modern clinic to support pain relief and muscle recovery.'
        },
        {
          id: 2,
          title: 'Electrotherapy',
          slug: 'laser-treatment',
          fullSlug: '/services/electrotherapy-dubai/',
          icon: 'Zap',
          subtitle: ' Precision Skin and Hair Solutions',
          duration: '30-60 Mins',
          badgeColor: 'purple',
          benefits: [
            'Laser hair removal for smooth, long-lasting results',
            'Skin resurfacing for pigmentation, scars, and texture improvement',
            'Safe, clinically approved procedures for all skin types',
          ],
          idealFor: 'Individuals seeking non-invasive, high-precision treatments,Dubai residents want fast and effective aesthetic solutions',
          image: '/images/electro-therepy.jpg',
          alt: 'Electrotherapy in Dubai performed in a professional physiotherapy clinic for pain relief and muscle recovery.'
        },
        {
          id: 3,
          title: 'Pelvic Floor Therapy ',
          slug: 'body-shaping',
          fullSlug: '/services/pelvic-floor-therapy-dubai/',
          icon: 'Target',
          subtitle: 'Contour and Rejuvenate Your Body',
          duration: '45-90 Mins',
          badgeColor: 'orange',
          benefits: [
            'Non-surgical body sculpting and fat reduction',
            'Cellulite treatment and skin tightening for smoother contours.',
            'Enhances overall body confidence and aesthetics',
          ],
          idealFor: 'Individuals looking for body contouring without surgery, Those aiming for a toned and sculpted appearance',
          image: '/images/pelvic.jpg',
          alt: 'Pelvic Floor Therapy in Dubai delivered in a private clinic to improve core stability and pelvic health.'
        },
        {
  id: 4,
  title: 'Scoliosis Treatment',
  slug: 'scoliosis-treatment',
  fullSlug: '/services/scoliosis-treatment-dubai/',
  icon: 'Activity',
  subtitle: 'Postural Correction & Spine Alignment',
  duration: '60-90 Mins',
  badgeColor: 'blue',
  benefits: [
    'Improves spinal alignment and posture',
    'Reduces back pain and muscle imbalance',
    'Enhances mobility and functional movement',
    'Prevents progression of spinal curvature'
  ],
  idealFor:
    'Children, adolescents, and adults diagnosed with scoliosis, individuals experiencing postural imbalance or chronic back pain',
  image: '/images/scoliosis.jpg',
  alt: 'Scoliosis Treatment in Dubai provided through specialized physiotherapy to improve spinal alignment and posture.'
},
{
  id: 5,
  title: 'Functional Exercise Therapy',
  slug: 'functional-exercises',
  fullSlug: '/services/functional-exercises-dubai/',
  icon: 'TrendingUp',
  subtitle: 'Restore Natural Movement & Strength',
  duration: '45-75 Mins',
  badgeColor: 'green',
  benefits: [
    'Improves balance, flexibility, and coordination',
    'Strengthens muscles used in daily activities',
    'Enhances mobility and injury prevention',
    'Supports faster recovery and long-term function'
  ],
  idealFor:
    'Patients recovering from injury or surgery, athletes, elderly individuals, and those aiming to improve daily movement efficiency',
  image: '/images/functional excercise.jpg',
  alt: 'Functional Exercises in Dubai performed under professional guidance to improve strength, balance, and daily movement.'
},
{
  id: 6,
  title: 'Dry Needling Therapy',
  slug: 'dry-needling',
  fullSlug: '/services/dry-needling-dubai/',
  icon: 'Crosshair',
  subtitle: 'Targeted Pain & Muscle Release',
  duration: '30-45 Mins',
  badgeColor: 'red',
  benefits: [
    'Relieves muscle tightness and trigger points',
    'Reduces pain and inflammation',
    'Improves blood circulation and muscle activation',
    'Accelerates recovery and mobility'
  ],
  idealFor:
    'Patients with muscle knots, sports injuries, chronic pain, or restricted movement seeking fast and effective relief',
  image: '/images/dry needling.jpg',
  alt: 'Dry Needling Therapy in Dubai performed by a trained physiotherapist to relieve muscle pain and improve mobility.'
}   
      ],
       consultationCTA: {
        heading: 'Not Sure Which Treatment is Right for You?',
        subtext: 'Book a free consultation with our expert team for personalized guidance. Discover the most suitable Physiotherapy in Dubai plan for your needs and start your journey toward faster recovery, improved mobility, and better health.',
        buttonText: 'Get Free Consultation',
        backgroundColor: 'bg-[#1E5A3C]',
        buttonColor: 'bg-[#C9A547]'
      }
    },
    experts: {
      badge: 'Expert Medical Team',
      title: 'Meet Our DHA-Licensed\nPhysiotherapists',
      description: 'Highly qualified professionals committed to restoring movement, reducing pain, and improving long-term function.',
      stats: [
        { value: '30+', label: 'Expert Doctors' },
    { value: '37+', label: 'Years of Combined Experience' },
    { value: '500+', label: 'Successful Treatments' },
    { value: '4.9', label: 'Average Rating' }
      ],
      ctaSection: {
        title: 'Ready to Meet Your Physiotherapist?',
        description: 'Schedule a personalized consultation with our expert therapists to begin your recovery journey.',
        primaryButton: 'Book Consultation Now',
        secondaryButton: 'View All Therapists'
      },
      doctors: [
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
          languages: ['English'],
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
          languages: ['English'],
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
          languages: ['English'],
          quote: 'A healthy smile is the foundation of confidence and overall well-being. My focus is on providing comfortable, high-quality dental care for every patient.',
          testimonial: {
            text: 'Dr. Anan made my dental visit completely stress-free. Very professional and caring.',
            author: 'Patient Feedback',
            location: 'Dubai'
          }
        }
      ]
    },
    whyDubai: {
      badge: 'Physiotherapy in Dubai',
      title: 'Why Physiotherapy Is Essential for the Dubai Lifestyle',
      description: 'Dubai’s modern lifestyle often involves long working hours, extended time spent driving, high stress levels, and limited physical activity. Over time, these factors can lead to chronic pain, stiffness, poor posture, reduced mobility, and recurring injuries. Physiotherapy Treatment plays a vital role in addressing these concerns by focusing on the root causes rather than just temporary symptom relief.',
      paragraphs: [
        'Dubai\'s modern lifestyle often involves long working hours, extended time spent driving, high stress levels, and limited physical activity. Over time, these factors can lead to chronic pain, stiffness, poor posture, reduced mobility, and recurring injuries. Physiotherapy Treatment plays a vital role in addressing these concerns by focusing on the root causes rather than just temporary symptom relief.',
        'Through personalised corrective exercises, manual therapy, and evidence-based pain management techniques, physiotherapy helps relieve neck, shoulder, and lower back discomfort commonly associated with desk-based work. It restores strength, flexibility, and joint stability while improving overall movement patterns. Physiotherapy Treatment also helps prevent future injuries by correcting muscular imbalances and faulty posture early, allowing you to move with confidence in daily life, sports, and professional activities.',
        'To support Dubai\'s busy professionals, flexible appointment options—including evening and weekend slots—ensure consistent care without disrupting your routine.'
      ],
      benefits: [
        {
          icon: 'Activity',
          title: 'Relieve Workplace Pain',
          description: 'Target neck, shoulder, and lower back strain.'
        },
        {
          icon: 'Target',
          title: 'Restore Movement & Strength',
          description: 'Improve flexibility and muscle balance.'
        },
        {
          icon: 'Heart',
          title: 'Prevent Injuries',
          description: 'Correct faulty movement patterns early.'
        },
        {
          icon: 'Clock',
          title: 'Enhance Daily Performance',
          description: 'Move confidently at work, sports, and home. \n\n Flexible appointment slots including evenings and weekends.'
        }
      ],
      image: '/images/phy2.jpg',
      imageAlt: 'Physiotherapy Treatment room equipped for rehabilitation and exercise therapy.',
      ctaCard: {
        title: 'Expert Physiotherapy Care in Jumeirah 1',
        description: 'Book a consultation with our DHA-licensed physiotherapists for personalized rehabilitation and pain relief solutions.'
      },
      bottomSection: {
        title: 'Premium Physiotherapy Centre in Jumeirah 1, Dubai',
        description: 'As a trusted physiotherapy clinic in Jumeirah 1, we provide advanced Physiotherapy Treatment for pain relief, rehabilitation, and functional recovery. Our DHA-licensed therapists deliver personalised care in a premium medical setting, helping patients return to active, pain-free lives safely and effectively.'
      }
    },
    successStories: {
      badge: 'Patient Success Stories',
      title: 'Real Recovery. Real Results.',
      subtitle: 'Patients experience measurable improvement through structured Physiotherapy Treatment.',
      stats: [
       {
      id: 1,
      number: '4.9/5',
      label1: 'Average Rating',
      label2: 'Google Reviews',
      target: 4.9,
      showStars: true
    },
    {
      id: 2,
      number: '500+',
      label1: 'Patient Reviews',
      label2: 'Verified Testimonials',
      target: 500
    },
    {
      id: 3,
      number: '94%',
      label1: 'Success Rate',
      label2: 'Patient Satisfaction',
      target: 94
    },
    {
      id: 4,
      number: '2,500+',
      label1: 'Patients Treated',
      label2: 'Since 2008',
      target: 2500
    }
      ],
      ctaSection: {
        title: 'Ready to start your recovery?',
        description: 'Join thousands of satisfied patients who have regained mobility and returned to an active lifestyle with our expert physiotherapy in Dubai.',
        buttonText: 'Start your journey today'
      },
    },
    faq: {
      title: 'Frequently Asked Questions – Physiotherapy Treatment',
      description: 'Everything you need to know about our expert physiotherapy and rehabilitation services in Dubai.',
      faqs: [
        {
          id: 1,
          question: 'What is Physiotherapy Treatment and how does it work?',
          answer: 'Physiotherapy Treatment uses movement therapy, manual techniques, and clinical exercises to relieve pain, restore mobility, improve strength, and support long-term physical recovery.'
        },
        {
          id: 2,
          question: 'Who should consider Physiotherapy Treatment in Dubai?',
          answer: ' Physiotherapy Treatment is ideal for individuals with back pain, neck stiffness, sports injuries, post-surgery recovery needs, posture problems, or movement limitations.'
        },
        {
          id: 3,
          question: 'How many Physiotherapy Treatment sessions are usually required?',
          answer: 'The number of Physiotherapy Treatment sessions depends on your condition, severity, and recovery goals. Acute issues may improve quickly, while chronic conditions require structured programs.'
        },
        {
          id: 4,
          question: 'Is Physiotherapy Treatment safe for chronic pain conditions?',
          answer: 'Yes, Physiotherapy Treatment is a safe, evidence-based approach that focuses on reducing pain, improving movement, and preventing future injuries without medication.'
        },
        {
          id: 5,
          question: 'What conditions can be treated with Physiotherapy Treatment?',
          answer: 'Physiotherapy Treatment helps manage joint pain, muscle injuries, postural imbalances, sports injuries, pelvic floor dysfunction, scoliosis, and post-operative rehabilitation.'
        },
        {
          id: 6,
          question: ' Does Physiotherapy Treatment help with posture correction?',
          answer: 'Yes, Physiotherapy Treatment addresses poor posture by strengthening weak muscles, improving flexibility, and correcting faulty movement patterns caused by sedentary lifestyles.'
        },
        {
          id: 7,
          question: 'Is Physiotherapy Treatment effective after surgery?',
          answer: ' Physiotherapy Treatment plays a crucial role in post-surgical recovery by improving mobility, reducing stiffness, restoring strength, and preventing complications safely.'
        },
        {
          id: 8,
          question: 'Can Physiotherapy Treatment prevent future injuries?',
          answer: 'Yes, Physiotherapy Treatment helps identify movement dysfunctions early, improves muscle balance, and reduces the risk of recurring or new injuries.'
        },
        {
          id: 9,
          question: 'What is the difference between physiotherapy and pain medication?',
          answer: ' Physiotherapy Treatment targets the root cause of pain through movement correction, while medication only provides temporary symptom relief without functional improvement.'
        },
        {
          id: 10,
          question: 'Is Physiotherapy Treatment suitable for office workers?',
          answer: 'Physiotherapy Treatment is highly beneficial for office workers suffering from neck pain, lower back pain, shoulder stiffness, and posture-related discomfort.'
        },
        {
          id: 11,
          question: 'How long does a Physiotherapy Treatment session last?',
          answer: 'A typical Physiotherapy Treatment session lasts between 30 and 60 minutes, depending on the treatment plan and clinical assessment.'
        },
        {
          id: 12,
          question: 'Can athletes benefit from Physiotherapy Treatment?',
          answer: 'Yes, Physiotherapy Treatment improves performance, speeds up injury recovery, enhances flexibility, and supports injury prevention for recreational and professional athletes.'
        },
        {
          id: 13,
          question: 'Is Physiotherapy Treatment painful?',
          answer: ' Physiotherapy Treatment is generally comfortable. Some techniques may cause mild discomfort initially, but therapy is always adjusted to the patients tolerance.'
        },
        {
          id: 14,
          question: 'Do I need a doctor’s referral for Physiotherapy Treatment?',
          answer: ' In most cases, you can directly book Physiotherapy Treatment without a referral, although referrals are accepted when available.'
        },
        {
          id: 15,
          question: 'How soon can I see results from Physiotherapy Treatment?',
          answer: 'Many patients notice improvement within a few sessions of Physiotherapy Treatment, while lasting recovery depends on consistency and personalized care plans.'
        }
      ]
    },

       booking: {
      title: 'Begin Your Healing Journey Today',
      description: 'Schedule your personalized Physiotherapy consultation with our expert team. Same-day appointments are available to start your recovery and improve mobility, strength, and overall well-being.',
       expectationTitle: 'What to Expect',
  steps: [
    {
      title: 'Comprehensive Assessment',
      description: 'A 60-minute consultation including movement analysis, posture evaluation, and personalized condition assessment.'
    },
    {
      title: 'Personalized Plan',
      description: 'Receive a custom Physiotherapy program tailored to your needs, goals, and recovery timeline.'
    },
    {
      title: 'Treatment Journey',
      description: 'Begin your therapy with ongoing support, adjustments, and progress tracking to ensure safe and effective results.'
    }
  ],
      offerTitle: 'Limited Time Offer',
  offerDescription: 'Book your first consultation this month and receive:',
  offers: [
    'Free movement assessment report',
    'Complimentary wellness guidebook',
    '15% off your first Physiotherapy treatment package'
  ],

  contactTitle: 'Prefer to Talk?',
  contactMethods: {
    call: {
      label: 'Call Us',
      value: '(+971) 04 286 2006'
    },
    whatsapp: {
      label: 'WhatsApp',
      value: '(+971) 56 659 7878'
    },
    hours: {
      label: 'Open Hours',
      value: [
        'Sun-Thu: 10:00 AM – 10:00 PM',
        'Fri: 10:00 AM – 8:00 PM'
      ]
       }
      }
    },
    facility: {
  badge: 'Our Physiotherapy Facility',
  title: 'Advanced Physiotherapy & Rehabilitation Centre',
  description:
    'Recover, restore, and strengthen your body in our modern Dubai physiotherapy clinic equipped with advanced rehabilitation technology, evidence-based therapy techniques, and patient-focused care.',
  topGalleryImages: [
    {
      id: 1,
      src: '/images/ph1.png',
      alt: 'Personalized Physiotherapy Treatment designed for injury recovery and strength'
    },
    {
      id: 2,
      src: '/images/ph2.png',
      alt: 'Physiotherapy Treatment supporting joint flexibility and muscle rehabilitation'
    },
    {
      id: 3,
      src: '/images/ph3.png',
      alt: 'Advanced Physiotherapy Treatment for posture correction and movement improvement.'
    }
  ],
  bottomGalleryImages: [
    {
      id: 4,
      src: '/images/ph4.png',
      alt: '“Physiotherapy Treatment session focused on long-term physical wellness.'
    },
    {
      id: 5,
      src: '/images/ph5.png',
      alt: 'Professional Physiotherapy Treatment for sports injury and muscle pain relief'
    },
    {
      id: 6,
      src: '/images/ph6.png',
      alt: 'Physiotherapy Treatment aimed at restoring movement and daily function.'
    }
  ],
  trustBadges: [
    {
      id: 1,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: 'DHA Licensed',
      subtitle: 'Certified physiotherapists'
    },
    {
      id: 2,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      title: 'Advanced Rehabilitation',
      subtitle: 'Modern physiotherapy & recovery tools'
    },
    {
      id: 3,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: 'Prime Location',
      subtitle: 'Jumeirah 1, Dubai'
    }
  ]
}


  },

  'general-physician': {
    hero: {
      badge: 'DHA-Licensed General Medicine',
        titleLine1: 'Advanced General Physician ',
      titleHighlight: 'Treatment',
      titleLine2:' in Jumeirah 1',
      // title: 'Advanced General Physician Treatment –in Jumeirah 1',
      subtitle: 'General physicians in Jumeirah 1 offering comprehensive General Physician Treatment in Dubai, including accurate diagnosis, effective treatment for common and chronic conditions, preventive health checkups, and continuous primary care for all age groups.',
      description: 'Dubai\'s trusted general medicine practice offering comprehensive healthcare, preventive medicine, chronic disease management, and acute care with DHA-licensed physicians and personalized treatment plans.',
      ctaText: 'Book Your Consultation',
      backgroundImage: '/images/gp.jpg',
       backgroundAlt: 'General physician consulting a patient in a modern clinic, friendly interaction, clean medical environment, professional healthcare setting, realistic lighting, no text in image',
      stats: [
         { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Patients' },
    { number: '98%', label: 'Success Rate' },
    { number: '40+', label: 'Treatments' }
      ],
      features: [
        ' DHA-Licensed General Physicians',
        ' Comprehensive Primary Care Solutions',
        'Premium Jumeirah 1 Location',
        ' Same-Day Medical Consultations'
      ],
      whatsappText: 'WhatsApp Now',
      location: 'Heart of Jumeirah 1, Dubai',
      timing: 'Same Day Appointments'
    },
    whyChooseUs: {
  badge: 'Why Choose Us',
  title: 'Dubai’s Trusted General Physician Clinic',
  description: 'At our clinic, we provide exceptional care with a patient-first approach. As a leading provider of healthcare services, our team of experienced General Physicians in Dubai ensures that every visit is met with professionalism, empathy, and accurate medical attention. Whether you are seeking routine check-ups or treatment for acute illnesses, we are dedicated to delivering consistent, reliable care in a comfortable clinical environment.',

  cards: [
    {
      title: 'Comprehensive Primary Healthcare',
      description: ' From diagnosing common illnesses and infections to managing chronic medical conditions, our General Physicians in Dubai provide precise assessments and effective treatments. '
    },
    {
      title: 'DHA-Licensed Medical Doctors',
      description: 'All our doctors are fully licensed by the Dubai Health Authority (DHA), bringing extensive experience across various medical specialties. '
    },
    {
      title: 'Personalized Treatment Plans',
      description: 'We understand that every patient is unique. Our General Physicians in Dubai create personalized treatment plans based on individual medical history, lifestyle, and long-term health goals. '
    },
    {
      title: 'Premium Jumeirah 1 Facility',
      description: 'Located in Jumeirah 1, our modern polyclinic combines state-of-the-art medical infrastructure with advanced diagnostic and treatment capabilities. '
    },
    {
      title: 'Preventive & Long-Term Care',
      description: ' Our General Physicians in Dubai focus on early detection, preventive screenings, and long-term health management, helping patients maintain optimal health and reduce the risk of serious medical conditions.'
    },
    {
      title: 'High Patient Trust & Satisfaction',
      description: 'Our commitment to excellent patient care has earned us the trust of individuals and families across Dubai. '
    }
  ]
},
    about: {
      badge: 'About Our General Physician Department',
      title: 'Complete Medical Care Within a Modern Polyclinic',
      description: 'Our General Physician department provides first-contact medical care within a fully equipped multi-specialty polyclinic in Jumeirah 1. We serve as your primary healthcare partner for diagnosis, treatment, and preventive care.',
      paragraphs: [
    'Our General Physician department provides first-contact medical care within a fully equipped multi-specialty polyclinic in Jumeirah 1. We serve as your primary healthcare partner for diagnosis, treatment, and preventive care.',
    'Led by DHA-licensed general physicians, our team manages acute illnesses, chronic conditions, lifestyle-related disorders, and routine health concerns. Every consultation includes a thorough evaluation to ensure accurate diagnosis and appropriate treatment planning.',
    'We follow international medical protocols, strict hygiene standards, and ethical healthcare practices to deliver safe, effective, and compassionate care.'
      ],
     stats: [
    { number: '1,200+', label: 'Patients Treated' },
    { number: '98%', label: 'Patient Satisfaction' },
    { number: '20+', label: 'Medical Services' }
     ],
     ctaText: 'Meet Our Physicians',
      image: '/images/gp2.jpg',
       imageAlt: 'General physician performing a routine health checkup using a stethoscope, calm clinical room, patient-focused care, realistic medical photography, no text',
       overlayCard: {
    number: '1,200+',
    smallText: 'Patients Treated',
    boldText: 'Trusted Primary Care'
  }
    },
    treatments: {
  heading: 'Personalized Medical Care for Everyday Health Needs',
  subtitle: 'Select a service below to learn how our General Physician Treatment supports accurate diagnosis, effective treatment, and long-term preventive healthcare for individuals and families in Dubai.',
  treatments: [
    {
      id: 1,
      title: 'Gastrointestinal Disorders Management',
      slug: 'gastrointestinal-disorders',
      fullSlug: '/services/gastrointestinal-disorders-dubai/',
      icon: 'Activity',
      subtitle: 'Relief from Digestive & Gut-Related Conditions',
      duration: null,
      badgeColor: 'purple',
      benefits: [
        'Diagnosis and treatment of acidity, gastritis, IBS, and constipation',
        'Targeted medication and dietary guidance',
        'Improved digestion and nutrient absorption',
        'Long-term prevention of recurring digestive issues'
      ],
      idealFor: 'Abdominal pain, bloating, acid reflux, constipation, diarrhea',
      image: '/images/gastro.jpg',
       alt: 'General physician consulting a patient about gastrointestinal disorders in a modern clinic, calm and professional environment, realistic medical photography, no text in image'
    },
    {
      id: 2,
      title: 'Allergy Assessment & Management',
      slug: 'allergy-management',
      fullSlug: '/services/management-of-allergy-dubai/',
      icon: 'Shield',
      subtitle: 'Identify Triggers and Control Symptoms',
      duration: null,
      badgeColor: 'purple',
      benefits: [
        'Accurate identification of allergic conditions',
        'Medical management of skin, food, and respiratory allergies',
        'Reduced frequency and severity of allergic reactions',
        'Preventive care and lifestyle recommendations'
      ],
      idealFor: 'Skin rashes, sneezing, sinus issues, food allergies, seasonal allergies',
      image: '/images/allergy.jpg',
       alt: 'Doctor assessing allergy symptoms during a patient consultation, clean clinical setting, caring interaction, realistic healthcare scene, no text'
    },
    {
      id: 3,
      title: 'Wound Stitching Services',
      slug: 'wound-stitching',
      fullSlug: '/services/wound-stitching-services-dubai/',
      icon: 'Scissors',
      subtitle: 'Safe and Professional Wound Closure',
      duration: null,
      badgeColor: 'orange',
      benefits: [
        'Clean and sterile wound management',
        'Proper suturing to promote faster healing',
        'Reduced infection and scarring risk',
        'Follow-up care and dressing guidance'
      ],
      idealFor: 'Cuts, deep wounds, and accidental injuries requiring stitches',
      image: '/images/wound.jpg',
       alt: 'General physician performing wound stitching using sterile instruments, focused medical care, hygienic clinic environment, no text in image'
    },
    {
      id: 4,
      title: 'Minor Injury Care',
      slug: 'minor-injury-care',
      fullSlug: '/services/minor-injury-care-dubai/',
      icon: 'Plus',
      subtitle: 'Immediate Care for Everyday Injuries',
      duration: null,
      badgeColor: 'orange',
      benefits: [
        'Prompt evaluation and pain management',
        'Treatment for sprains, strains, bruises, minor fractures',
        'Reduced swelling and faster recovery',
        'Guidance to prevent complications'
      ],
      idealFor: 'Sports injuries, workplace injuries, minor accidents',
      image: '/images/minor-injury.jpg',
       alt: 'Doctor treating a minor injury with bandaging in a primary care clinic, patient comfort focused, realistic medical setting, no text'
    },
    {
      id: 5,
      title: 'Acute Infection Treatment',
      slug: 'acute-infection-treatment',
      fullSlug: '/services/treatment-of-acute-infections-dubai/',
      icon: 'Thermometer',
      subtitle: 'Fast Relief from Infections and Illness',
      duration: null,
      badgeColor: 'purple',
      benefits: [
        'Accurate diagnosis of bacterial and viral infections',
        'Appropriate antibiotic or antiviral therapy',
        'Fever control and symptom relief',
        'Monitoring to prevent complications'
      ],
      idealFor: 'Fever, flu, throat infections, urinary infections, viral illnesses',
      image: '/images/acute-infection.jpg',
       alt: 'General physician diagnosing acute infection during a clinic visit, professional and attentive care, clean medical environment, no text'
    },
    {
      id: 6,
      title: 'Dyslipidemia Diagnosis & Treatment',
      slug: 'dyslipidemia-treatment',
      fullSlug: '/services/dyslipidemia-diagnosis-and-treatment/',
      icon: 'BarChart',
      subtitle: 'Cholesterol & Lipid Level Management',
      duration: null,
      badgeColor: 'purple',
      benefits: [
        'Comprehensive lipid profile assessment',
        'Medication and lifestyle-based cholesterol control',
        'Reduced cardiovascular risk',
        'Ongoing monitoring and preventive care'
      ],
      idealFor: 'High cholesterol, heart disease risk, metabolic conditions',
      image: '/images/dyslipidemia.jpg',
       alt: 'Doctor reviewing cholesterol test results with a patient, modern clinic interior, preventive healthcare focus, no text in image'
    },
    {
      id: 7,
      title: 'Personalized Slimming Programs',
      slug: 'slimming-programs',
      fullSlug: '/services/personalized-slimming-programs/',
      icon: 'Target',
      subtitle: 'Medically Guided Weight Management',
      duration: null,
      badgeColor: 'orange',
      benefits: [
        'Safe and sustainable weight loss planning',
        'Metabolic and lifestyle assessment',
        'Dietary guidance and medical supervision',
        'Improved energy, metabolism, and overall health'
      ],
      idealFor: 'Weight gain, obesity, metabolic syndrome, lifestyle disorders',
      image: '/images/slim.jpg',
       alt: 'Physician discussing personalized slimming and weight management plan with a patient, supportive clinical environment, no text'
    },
    {
      id: 8,
      title: 'Thyroid Dysfunction Management',
      slug: 'thyroid-management',
      fullSlug: '/services/thyroid-dysfunction-solutions-dubai/',
      icon: 'Activity',
      subtitle: 'Balanced Hormonal Health Care',
      duration: null,
      badgeColor: 'purple',
      benefits: [
        'Diagnosis of hypothyroidism and hyperthyroidism',
        'Medication adjustment and monitoring',
        'Symptom relief including fatigue and weight changes',
        'Long-term hormonal balance support'
      ],
      idealFor: 'Thyroid imbalance, fatigue, weight fluctuation, and hormonal issues',
      image: '/images/thyroid.jpg',
       alt: 'Doctor explaining thyroid health and treatment options during consultation, calm clinic atmosphere, realistic medical photography, no tex'
    },
    {
      id: 9,
      title: 'Asthma & COPD Care',
      slug: 'asthma-copd-care',
      fullSlug: '/services/asthma-and-copd-expertise-dubai/',
      icon: 'Wind',
      subtitle: 'Respiratory Health & Breathing Support',
      duration: null,
      badgeColor: 'purple',
      benefits: [
        'Accurate respiratory assessment',
        'Medication management and inhaler guidance',
        'Improved lung function and breathing control',
        'Prevention of flare-ups and complications'
      ],
      idealFor: 'Asthma, COPD, chronic cough, breathing difficulty',
      image: '/images/asthma.jpg',
       alt: 'Physician evaluating respiratory health using medical equipment, patient-centered care, clean clinic setting, no text in image'
    },
    {
      id: 10,
      title: 'Diabetes Mellitus Management',
      slug: 'diabetes-management',
      fullSlug: '/services/diabetes-mellitus-care-dubai/',
      icon: 'Droplets',
      subtitle: 'Comprehensive Blood Sugar Control',
      duration: null,
      badgeColor: 'purple',
      benefits: [
        'Personalized diabetes care plans',
        'Medication and lifestyle management',
        'Prevention of diabetes-related complications',
        'Regular monitoring and patient education'
      ],
      idealFor: 'Type 1 and Type 2 diabetes, prediabetes, metabolic disorders',
      image: '/images/diabetes.jpg',
       alt: 'Doctor monitoring blood sugar levels and advising a patient on diabetes care, professional clinic environment, no text'
    },
    {
      id: 11,
      title: 'Hypertension Management',
      slug: 'hypertension-management',
      fullSlug: '/services/specialized-hypertension-management/',
      icon: 'Heart',
      subtitle: 'Advanced Blood Pressure Control',
      duration: null,
      badgeColor: 'purple',
      benefits: [
        'Accurate blood pressure assessment',
        'Medication optimization and lifestyle guidance',
        'Reduced risk of heart and kidney complications',
        'Long-term cardiovascular protection'
      ],
      idealFor: 'High blood pressure, cardiac risk, stress-related hypertension',
      image: '/images/hypertension.jpg',
      alt: 'General physician measuring blood pressure and discussing hypertension management, modern clinical setting, no text in image'
    },
    {
      id: 12,
      title: 'Routine Health Check-ups',
      slug: 'routine-health-checkups',
      fullSlug: '/services/routine-check-ups-dubai/',
      icon: 'Clipboard',
      subtitle: 'Preventive Care for Long-Term Wellness',
      duration: null,
      badgeColor: 'orange',
      benefits: [
        'Early detection of medical conditions',
        'Comprehensive health screening',
        'Personalized preventive recommendations',
        'Peace of mind through regular monitoring'
      ],
      idealFor: 'Annual exams, corporate health checks, preventive care',
      image: '/images/check-up.jpg',
      alt: 'General physician performing a routine health check-up in a clean and organized clinic, preventive care focus, no text'
    },
    {
      id: 13,
      title: 'Comprehensive Physical Examinations',
      slug: 'physical-examinations',
      fullSlug: '/services/comprehensive-physical-examinations-dubai/',
      icon: 'UserCheck',
      subtitle: 'Complete Medical Evaluation',
      duration: null,
      badgeColor: 'orange',
      benefits: [
        'Thorough head-to-toe medical assessment',
        'Identification of hidden health risks',
        'Baseline health documentation',
        'Guidance for maintaining optimal health'
      ],
      idealFor: 'Pre-employment exams, insurance medicals, routine evaluations',
      image: '/images/physical-examination.jpg',
      alt: 'Doctor conducting a comprehensive physical examination in a professional medical clinic, patient comfort focused, no text in image'
    }
  ],
   consultationCTA: {
        heading: 'Not Sure Which Treatment is Right for You?',
        subtext: 'Get expert guidance at RamaCare Polyclinic, a trusted Polyclinic in Dubai. Book your FREE consultation today and receive a personalized treatment plan tailored to your needs.',
        buttonText: 'Get Free Consultation',
        backgroundColor: 'bg-[#1E5A3C]',
        buttonColor: 'bg-[#C9A547]'
      }
},
programs: {
  badge: 'Health Programs',
  heading: 'Signature Care Programs',
  subtitle: 'Structured Medical Care Plans',
  disclaimer: 'All programs are customized based on your health assessment, medical history, and wellness goals. Duration and follow-ups may vary.',
  programs: [
    {
      id: 1,
      title: 'Chronic Disease Management Program',
      duration: 'Ongoing Care',
      backgroundColor: 'bg-white',
      topSectionColor: 'bg-red-50',
      durationColor: 'bg-red-100',
      durationTextColor: 'text-red-700',
      icon: 'Heart',
      benefits: [
        'Personalized treatment plans for diabetes and hypertension',
        'Regular monitoring and medication adjustment',
        'Lifestyle and dietary counseling'
      ]
    },
    {
      id: 2,
      title: 'Preventive Health Program',
      duration: 'Annual Plan',
      backgroundColor: 'bg-white',
      topSectionColor: 'bg-emerald-50',
      durationColor: 'bg-emerald-100',
      durationTextColor: 'text-emerald-700',
      icon: 'Stethoscope',
      benefits: [
        'Comprehensive health screening',
        'Early disease detection',
        'Personalized prevention strategies'
      ]
    },
    {
      id: 3,
      title: 'Acute Illness Care Program',
      duration: 'Same-Day Treatment',
      backgroundColor: 'bg-white',
      topSectionColor: 'bg-yellow-50',
      durationColor: 'bg-yellow-100',
      durationTextColor: 'text-yellow-700',
      icon: 'Activity',
      benefits: [
        'Fast diagnosis and treatment',
        'Medication and follow-up care',
        'Referral support if required'
      ]
    },
    {
      id: 4,
      title: 'Executive Health Program',
      duration: 'Customized Plans',
      backgroundColor: 'bg-white',
      topSectionColor: 'bg-pink-50',
      durationColor: 'bg-pink-100',
      durationTextColor: 'text-pink-700',
      icon: 'Calendar',
      benefits: [
        'Complete health evaluation',
        'Stress and lifestyle risk assessment',
        'Time-efficient consultations'
      ]
    }
  ]
},
    experts: {
      badge: 'Expert Medical Team',
      title: 'Meet Our DHA-Licensed General Physicians',
      description: 'Experienced doctors dedicated to providing accurate diagnosis, compassionate care, and long-term health guidance.',
      stats: [
       { value: '30+', label: 'Expert Doctors' },
    { value: '37+', label: 'Years of Combined Experience' },
    { value: '500+', label: 'Successful Treatments' },
    { value: '4.9', label: 'Average Rating' }
      ],
      ctaSection: {
        title: 'Ready to Meet Your Physician?',
        description: 'Schedule a personalized consultation with our expert physicians to begin your healthcare journey.',
        primaryButton: 'Book Consultation Now',
        secondaryButton: 'View All Physicians'
      },
       doctors: [
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
          languages: ['English'],
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
          languages: ['English'],
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
          languages: ['English'],
          quote: 'A healthy smile is the foundation of confidence and overall well-being. My focus is on providing comfortable, high-quality dental care for every patient.',
          testimonial: {
            text: 'Dr. Anan made my dental visit completely stress-free. Very professional and caring.',
            author: 'Patient Feedback',
            location: 'Dubai'
          }
        }
      ]
    },
    whyDubai: {
      badge: 'General Physician Care in Dubai',
      title: 'Why Primary Healthcare Is Essential for Dubai’s Lifestyle',
      description: 'Dubai offers world-class primary healthcare with DHA-licensed physicians, modern diagnostic facilities, and comprehensive medical services for all your health needs.',
      benefits: [
        {
          icon: 'Stethoscope',
          title: null,
          description: 'Busy schedules, work-related stress, irregular routines, and climate changes often impact overall health. General physicians play a critical role in early diagnosis, preventive care, and long-term disease management.'
        },
        {
          icon: 'Shield',
          title: null,
          description: 'ERegular medical consultations help prevent complications, reduce hospital visits, and maintain optimal health through timely intervention and lifestyle guidance.'
        },
        {
          icon: 'Heart',
          title: null,
          description: 'Manage everyday health concerns , Prevent chronic disease complications , Ensure early diagnosis and treatment , Maintain long-term wellness'
        },
        {
          icon: 'Users',
          title: null,
          description: 'Flexible appointment scheduling, including evenings and weekends.'
        }
      ],
      image: '/images/gp1.jpg',
      imageAlt: 'General physician performing a routine health checkup using a stethoscope, calm clinical room, patient-focused care, realistic medical photography, no text',
      ctaCard: {
        title: 'Expert Primary Care in Jumeirah 1',
        description: 'Book a consultation with our DHA-licensed physicians for comprehensive healthcare and preventive medicine.'
      },
      bottomSection: {
        title: 'Premium General Physician Clinic in Jumeirah 1, Dubai',
        description: 'As a trusted general physician clinic in Dubai, we provide comprehensive primary healthcare for individuals and families. Our DHA-licensed doctors deliver evidence-based medical care in a premium clinical environment. Whether you need treatment for acute illness, chronic disease management, or preventive health checkups, our Jumeirah 1 clinic ensures reliable, professional medical support.'
      }
    },
    successStories: {
      badge: 'Patient Success Stories',
      title: 'Real Results From Real People',
      subtitle: 'Hear directly from our patients about their healthcare journeys in Dubai.',
      stats: [
       {
      id: 1,
      number: '4.9/5',
      label1: 'Average Rating',
      label2: 'Google Reviews',
      target: 4.9,
      showStars: true
    },
    {
      id: 2,
      number: '500+',
      label1: 'Patient Reviews',
      label2: 'Verified Testimonials',
      target: 500
    },
    {
      id: 3,
      number: '94%',
      label1: 'Success Rate',
      label2: 'Patient Satisfaction',
      target: 94
    },
    {
      id: 4,
      number: '2,500+',
      label1: 'Patients Treated',
      label2: 'Since 2008',
      target: 2500
    }
      ],
      ctaSection: {
        title: 'Ready to prioritize your health?',
        description: 'Join thousands of satisfied patients who trust us with their family\'s healthcare needs in Dubai.',
        buttonText: 'Start your journey today'
      },
    },
  
  faq: {
  title: 'Frequently Asked Questions – General Medicine in Dubai',
  description: 'Everything you need to know about our comprehensive general medicine and primary healthcare services in Dubai.',
  faqs: [
    {
      id: 1,
      question: 'What does a general physician treat?',
      answer: 'A general physician diagnoses and manages acute illnesses, chronic diseases, infections, lifestyle conditions, and preventive health needs through comprehensive medical evaluation and ongoing care.'
    },
    {
      id: 2,
      question: 'When should I visit a general physician?',
      answer: 'You should consult a general physician for fever, fatigue, pain, infections, chronic disease monitoring, routine check-ups, or when symptoms are unclear and require medical assessment.'
    },
    {
      id: 3,
      question: 'Is a general physician suitable for long-term health management?',
      answer: 'Yes, general physicians provide continuous care for chronic conditions like diabetes, hypertension, asthma, and thyroid disorders with regular monitoring and personalized treatment plans.'
    },
    {
      id: 4,
      question: 'Do I need a referral to see a general physician in Dubai?',
      answer: 'No, you can directly book an appointment with a general physician in Dubai without a referral for consultations, diagnosis, or preventive health assessments.'
    },
    {
      id: 5,
      question: 'What tests can a general physician recommend?',
      answer: 'General physicians may order blood tests, urine tests, imaging, ECGs, and other diagnostic investigations based on symptoms and clinical evaluation.'
    },
    {
      id: 6,
      question: 'Can a general physician manage diabetes and hypertension?',
      answer: 'Yes, general physicians specialize in managing diabetes and high blood pressure through medication, lifestyle counseling, regular follow-ups, and complication prevention strategies.'
    },
    {
      id: 7,
      question: 'Are general physician treatments covered by insurance?',
      answer: 'Most health insurance plans in Dubai cover general physician consultations and treatments. Coverage depends on your policy and provider network.'
    },
    {
      id: 8,
      question: 'Can a general physician treat stomach and digestive problems?',
      answer: 'Yes, general physicians effectively manage digestive issues such as acidity, gastritis, constipation, IBS, bloating, and gastrointestinal infections.'
    },
    {
      id: 9,
      question: 'Do general physicians treat respiratory conditions?',
      answer: 'General physicians diagnose and manage asthma, COPD, allergies, infections, and chronic cough while providing long-term respiratory health guidance.'
    },
    {
      id: 10,
      question: 'Can I visit a general physician for preventive health check-ups?',
      answer: 'Absolutely. General physicians perform routine health screenings, annual check-ups, and risk assessments to detect medical conditions early and maintain long-term wellness.'
    },
    {
      id: 11,
      question: 'What lifestyle advice does a general physician provide?',
      answer: 'General physicians offer guidance on nutrition, weight management, exercise, stress control, sleep habits, and preventive care to improve overall health outcomes.'
    },
    {
      id: 12,
      question: 'Are minor injuries treated by a general physician?',
      answer: 'Yes, general physicians treat minor injuries, including cuts, sprains, bruises, and wounds, and provide stitching, dressings, and follow-up care when needed.'
    },
    {
      id: 13,
      question: 'How long does a general physician consultation take?',
      answer: 'A typical consultation lasts 15–30 minutes, depending on your health concern, medical history, and required examination or treatment planning.'
    },
    {
      id: 14,
      question: 'Is a general physician suitable for elderly care?',
      answer: 'Yes, general physicians provide comprehensive care for elderly patients, including chronic disease management, medication review, preventive care, and regular monitoring.'
    },
    {
      id: 15,
      question: 'How do I book a general physician appointment in Jumeirah 1?',
      answer: 'You can book a general physician appointment by phone, WhatsApp, or online scheduling for same-day or flexible consultation slots in Jumeirah 1, Dubai.'
    }
  ]
    },

    booking: {
      title: 'Begin Your Journey to Better Health',
      description: 'Take the first step toward improved health by scheduling a consultation with an experienced General Physician in Dubai. We provide patient-focused, evidence-based medical care tailored to your specific health concerns. Same-day appointments are available for urgent medical needs.',
        expectationTitle: 'What to Expect',
  steps: [
    {
      title: 'Comprehensive Medical Assessment',
      description: 'Your consultation begins with a detailed health evaluation. Our General Physicians in Dubai conduct a thorough physical examination, review your medical history, assess vital signs, and recommend necessary laboratory tests or diagnostic screenings to ensure accurate diagnosis.'
    },
    {
      title: 'Personalized Treatment Plan',
      description: 'Based on your condition, we develop a customized treatment plan focused on fast relief and long-term wellness. Whether it’s managing infections, chronic conditions, or preventive care, our approach ensures safe and effective treatment.'
    },
    {
      title: 'Ongoing Care & Follow-Up',
      description: 'Your health journey doesn’t end after one visit. We provide continuous monitoring, follow-up consultations, and treatment adjustments to support sustainable recovery and preventive care.'
    }
  ],
      offerTitle: 'Limited Time Offer',
  offerDescription: 'Book your first consultation with our trusted General Physicians in Dubai this month and receive:',
  offers: [
    'Complimentary health screening consultation',
    'Free basic wellness guide',
    '15% off your first consultation'
  ],
      contactTitle: 'Need Help ?',
      contactMethods: {
        call: {
          label: 'Call Us',
          value: '(+971) 04 286 2006'
        },
        whatsapp: {
          label: 'WhatsApp',
          value: '(+971) 56 659 7878'
        },
        hours: {
      label: 'Open Hours',
      value: [
        'Sun-Thu: 10:00 AM – 10:00 PM',
        'Fri: 10:00 AM – 8:00 PM'
      ]
       }
      }
    },

    facility: {
  badge: 'Our General Physician Facility',
  title: 'Comprehensive General Medicine & Family Care Clinic',
  description:
    'Receive trusted primary healthcare at our modern Dubai general physician clinic, offering preventive care, accurate diagnosis, and personalized treatment for individuals and families in a comfortable, patient-focused environment.',
  topGalleryImages: [
    {
      id: 1,
      src: '/images/gp-1.png',
      alt: 'General physician conducting a physical examination in a hygienic clinical setting, patient comfort focused, realistic medical environment, no text'
    },
    {
      id: 2,
      src: '/images/gp-2.png',
      alt: 'General physician providing preventive healthcare advice to a patient, calm and professional clinic environment, realistic photography, no text'
    },
    {
      id: 3,
      src: '/images/gp-3.png',    
      alt: '“Interior of a general physician clinic room with examination bed and medical equipment, clean and minimal design, professional healthcare setting, no tex'
    }
  ],
  bottomGalleryImages: [
    {
      id: 4,
      src: '/images/gp-4.png',
      alt: 'General physician listening attentively to patient health concerns, warm and reassuring clinical environment, realistic healthcare scene, no text'
    },
    {
      id: 5,
      src: '/images/gp-5.png',  
      alt: 'General physician providing primary care treatment in a modern clinic, patient-centered approach, soft lighting, no text in image'
    },
    {
      id: 6,
      src: '/images/gp-6.png',
      alt: 'General physician conducting a follow-up consultation to monitor patient recovery, clean clinic interior, professional healthcare atmosphere, no text'
    }
  ],
  trustBadges: [
    {
      id: 1,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: 'DHA Licensed',
      subtitle: 'Certified general physicians'
    },
    {
      id: 2,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
      title: 'Comprehensive Care',
      subtitle: 'Preventive, diagnostic & primary treatment'
    },
    {
      id: 3,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: 'Prime Location',
      subtitle: 'Jumeirah 1, Dubai'
    }
  ]
}

  },

  'facial': {
    hero: {
      badge: 'DHA-Licensed Premier Facial Centre',
       titleLine1: 'Premium Facial ',
      titleHighlight: 'Treatments',
      titleLine2:' in Jumeirah 1',
      // title: 'Premium Facial Treatments– in Jumeirah 1',
      subtitle: 'Advanced skincare solutions for rejuvenation, hydration, anti-aging & radiant complexion',
      description: 'Dubai\'s premier facial treatment centre offering advanced facials, PRP therapy, and rejuvenation treatments with DHA-licensed specialists and premium skincare products.',
      ctaText: 'Book Free Consultation',
       backgroundImage: '/images/facial-treat.jpg',
       backgroundAlt: 'General physician consulting a patient in a modern clinic, friendly interaction, clean medical environment, professional healthcare setting, realistic lighting, no text in image',
      stats: [
         { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Patients' },
    { number: '98%', label: 'Success Rate' },
    { number: '40+', label: 'Treatments' }
      ],
      features: [
        'DHA-Licensed Expert Doctors',
        'Premium Jumeirah 1 Location',
        ' Personalized Skincare Plans',
        'Signature Facial Treatments'
      ],
      whatsappText: 'WhatsApp Now',
      location: 'Heart of Jumeirah 1, Dubai',
      timing: 'Same Day Appointments'
    },
    whyChooseUs: {
  badge: 'Why Choose Us',
  title: "Dubai's Premier Facial Centre",
  description: 'Experience luxurious Facial Treatments in Dubai where advanced medical expertise meets personalized skincare in a refined, comfortable, and results-driven environment designed to enhance your natural beauty and long-term skin health.',

  cards: [
    {
      title: 'Clinically Proven Treatments',
      description: 'State-of-the-art facial procedures backed by scientific research, advanced dermatological technology, and extensive clinical experience to ensure safe, effective, and visibly transformative skin results.'
    },
    {
      title: 'DHA-Licensed Practitioners',
      description: 'Qualified DHA-licensed aesthetic specialists delivering safe, precise, and highly effective treatments with strict hygiene standards, professional assessment, and patient-focused care at every step.'
    },
    {
      title: 'Customized Skincare Plans',
      description: 'Tailored treatment protocols carefully designed according to your unique skin type, specific concerns, lifestyle factors, and desired aesthetic outcomes for long-lasting, natural-looking results.'
    },
    {
      title: 'Premium Jumeirah 1 Facility',
      description: 'Modern clinic located in Jumeirah 1 featuring relaxing ambience, private consultation rooms, advanced skincare technology, and a welcoming atmosphere that prioritizes comfort and confidentiality.'
    },
    {
      title: 'Holistic Skin Health',
      description: 'Comprehensive approach addressing hydration, texture, pigmentation, early signs of aging, acne concerns, and overall skin vitality to promote balanced, radiant, and healthy-looking skin.'
    },
    {
      title: 'High Client Satisfaction',
      description: 'Proven results supported by glowing reviews, repeat visits, and trust from hundreds of satisfied clients who choose our expert Facial Treatments in Dubai for consistent quality and visible improvement.'
    }
  ]
},

    about: {
      badge: 'About Our Facial Department',
      title: 'Expert Skincare Solutions in a Modern Clinic',
      description: 'Our facial treatments combine advanced technology with premium skincare products to cleanse, exfoliate, hydrate, and rejuvenate your skin, revealing a more youthful and radiant complexion.',
      paragraphs: [
        'Our facial treatment department combines clinically proven techniques with luxurious care in the heart of Dubai. Operating within a fully equipped clinic in Jumeirah 1, we deliver personalized facial treatments for hydration, anti-aging, skin rejuvenation, and targeted problem-solving.',
        'Led by DHA-licensed aesthetic physicians, our expert team specializes in PRP facials, HydraFacial, Golden Elixir Facial, Oxygeneo Illuminate, and Exosomes Facial. Each plan is customized to your unique skin type and goals.',
        'We maintain the highest standards of hygiene and safety while using advanced devices and premium skincare products. Whether you want immediate glow, long-term skin rejuvenation, or anti-aging results, our approach merges expert care with luxury comfort.'
      ],
      stats: [
        { number: '12+', label: 'Treatment Types' },
        { number: '500+', label: ' Happy Clients' },
        { number: '98%', label: 'Satisfaction Rate' }
      ],
      ctaText: 'Meet Our Facial Department',
      image: '/images/facial.jpg',
      imageAlt: 'Facial treatment',
      overlayCard: {
        number: '15+',
        smallText: ' Years of Excellence',
        boldText: 'Trusted Skincare Care'
      }
    },
    treatments: {
      heading: 'Personalized Skincare Solutions for Modern Skin Challenges',
      subtitle: ' Select a facial below to discover how our treatments can transform your skin.',
      treatments: [
        {
          id: 1,
          title: 'Signature Hydra Facial',
          slug: 'hydra-facial',
          fullSlug: '/services/signature-hydra-facial-dubai/',
          icon: 'Sparkles',
          subtitle: 'Deep Hydration & Skin Renewal',
          duration: '45-60 Minutes',
          badgeColor: 'purple',
          benefits: [
            'Intensive cleansing and exfoliation',
            'Hydration boost for dull or dry skin',
            'Reduces fine lines and improves texture',
            'Enhances skin radiance and glow',
          ],
          idealFor: 'Anyone seeking instant skin revitalization or dullness correction',
          image: '/images/hydra.jpg'
        },
        {
          id: 2,
          title: 'PRP Facial',
          slug: 'prp-facial',
          fullSlug: '/services/face-prp-in-dubai/',
          icon: 'Scissors',
          subtitle: 'Regenerative Skin Therapy',
          duration: '60 Minutes',
          badgeColor: 'purple',
          benefits: [
            'Stimulates collagen production naturally',
            'Improves elasticity and reduces fine lines',
            'Enhances skin tone and texture',
          ],
          idealFor: 'Aging skin, scars, or uneven texture',
          image: '/images/faceprp.jpg'
        },
        {
          id: 3,
          title: 'Golden Elixir Facial',
          slug: 'golden-facial',
          fullSlug: '/services/golden-elixir-facial-dubai/',
          icon: 'Zap',
          subtitle: ' Luxury Radiance Treatment',
          duration: '60 Minutes',
          badgeColor: 'purple',
          benefits: [
            'Antioxidant-rich for anti-aging',
            'Improves skin luminosity and smoothness',
            'Soothes and nourishes stressed skin',
          ],
          idealFor: 'Dull or tired skin, special occasions',
          image: '/images/golden.jpg'
        },
        {
          id: 4,
          title: 'Oxygeneo Illuminate Facial ',
          slug: 'oxygeneo-facial',
          fullSlug: '/services/oxygeneo-illuminate-facial-dubai/',
          icon: 'Target',
          subtitle: 'Exfoliate, Oxygenate & Nourish',
          duration: '45-60 Minutes',
          badgeColor: 'orange',
          benefits: [
            'Gentle exfoliation and nutrient infusion',
            'Oxygenates and revitalizes skin cells',
            'Smoother, brighter, and hydrated complexion',
          ],
          idealFor: 'Sensitive, dehydrated, or tired skin',
          image: '/images/oxegeneo.jpg'
        },
        {
          id: 5,
          title: 'Exosomes Facial  ',
          slug: 'exosomes-facial',
          fullSlug: '/services/exosomes-facial-dubai/',
          icon: 'Target',
          subtitle: 'Next-Generation Skin Rejuvenation',
          duration: '60 Minutes',
          badgeColor: 'orange',
          benefits: [
            'GBoosts skin regeneration and collagen',
            'Reduces fine lines and improves firmness',
            'Enhances overall skin health and glow',
          ],
          idealFor: 'Advanced anti-aging and rejuvenation',
          image: '/images/exosomes.jpg'
        },
      ],
       consultationCTA: {
        heading: 'Not Sure Which Treatment is Right for You?',
        subtext: 'Unsure which Facial Treatments are best suited for your skin type and specific concerns? Schedule a free consultation with our expert skincare specialists for personalized guidance and a customized treatment plan tailored to your needs.',
        buttonText: 'Get Free Consultation',
        backgroundColor: 'bg-[#1E5A3C]',
        buttonColor: 'bg-[#C9A547]'
      }
    },
    experts: {
      badge: 'Expert Medical Team',
      title: 'Meet Our Expert Facial Specialists',
      description: 'Highly qualified DHA-licensed aesthetic physicians with years of experience delivering safe, effective, and personalized facial treatments in Dubai.',
      stats: [
        
       { value: '30+', label: 'Expert Doctors' },
    { value: '37+', label: 'Years of Combined Experience' },
    { value: '500+', label: 'Successful Treatments' },
    { value: '4.9', label: 'Average Rating' }
      ],
      ctaSection: {
        title: 'Ready to Meet Your Aesthetician?',
        description: 'Schedule a personalized consultation with our expert aestheticians to begin your facial treatment journey.',
        primaryButton: 'Book Consultation Now',
        secondaryButton: 'View All Aestheticians'
      },
      doctors: [
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
          languages: ['English'],
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
          languages: ['English'],
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
          languages: ['English'],
          quote: 'A healthy smile is the foundation of confidence and overall well-being. My focus is on providing comfortable, high-quality dental care for every patient.',
          testimonial: {
            text: 'Dr. Anan made my dental visit completely stress-free. Very professional and caring.',
            author: 'Patient Feedback',
            location: 'Dubai'
          }
        }
      ]
    },
    whyDubai: {
      badge: 'Why Facial Treatments in Dubai',
      title: 'Why Choose Facial Treatments in Dubai?',
      description: 'Dubai is a global beauty destination offering the latest facial technologies, internationally trained specialists, and luxury treatments for all your skincare needs.',
      benefits: [
        {
          icon: 'Sparkles',
          title: 'Advanced Facial Technology',
          description: 'Cutting-edge treatments including PRP therapy, chemical peels, and anti-aging facials for visible results.'
        },
        {
          icon: 'Star',
          title: 'Premium Skincare Products',
          description: 'High-quality, clinically-tested products from trusted brands for safe and effective treatments.'
        },
        {
          icon: 'Heart',
          title: 'Personalized Skin Care',
          description: 'Customized facial treatments tailored to your skin type, concerns, and aesthetic goals.'
        },
        {
          icon: 'Shield',
          title: 'DHA-Licensed Aestheticians',
          description: 'Certified, experienced professionals ensuring safe, professional, and luxurious treatment experiences.'
        }
      ],
      image: '/images/f1.jpg',
      imageAlt: 'Facial treatment in Dubai',
      ctaCard: {
        title: 'Expert Facial Care in Jumeirah 1',
        description: 'Book a consultation with our DHA-licensed aestheticians for personalized facial treatments and skincare solutions.'
      },
      bottomSection: {
        title: 'Premium Facial Centre in Jumeirah 1, Dubai',
        description:' Our DHA-licensed specialists provide clinically proven facial treatments with visible results. Whether it’s HydraFacial, PRP, or advanced anti-aging therapies, our Jumeirah 1 clinic combines medical precision with luxury care for safe and effective skin rejuvenation.'
      }
    },
    programs: {
      badge: 'Facial Programs',
      heading: 'Luxury Facial Treatment Programs',
      subtitle: 'Premium facial programs designed to rejuvenate, restore, and maintain radiant, healthy skin.',
      disclaimer: 'All programs are customized based on your skin type, concerns, and aesthetic goals. Treatment frequency and duration may vary.',
      programs: [
        {
          id: 1,
          title: 'Anti-Aging Facial Series',
          duration: '6–12 Sessions',
          backgroundColor: 'bg-white',
          topSectionColor: 'bg-pink-50',
          durationColor: 'bg-pink-100',
          durationTextColor: 'text-pink-700',
          icon: 'sparkle',
          benefits: [
            'Wrinkle and fine line reduction',
            'Skin firmness and elasticity improvement',
            'Long-term anti-aging results'
          ]
        },
        {
          id: 2,
          title: 'PRP Facial Therapy',
          duration: '4–6 Sessions',
          backgroundColor: 'bg-white',
          topSectionColor: 'bg-purple-50',
          durationColor: 'bg-purple-100',
          durationTextColor: 'text-purple-700',
          icon: 'activity',
          benefits: [
            'Natural skin regeneration',
            'Collagen production boost',
            'Improved skin texture and tone'
          ]
        },
        {
          id: 3,
          title: 'Complete Skin Care',
          duration: 'Monthly',
          backgroundColor: 'bg-white',
          topSectionColor: 'bg-blue-50',
          durationColor: 'bg-blue-100',
          durationTextColor: 'text-blue-700',
          icon: 'smile',
          benefits: [
            'Regular deep cleansing facials',
            'Hydration and nourishment',
            'Maintained skin health and radiance'
          ]
        },
        {
          id: 4,
          title: 'Full Facial Rejuvenation & Glow Reset',
          duration: '3 Months',
          backgroundColor: 'bg-white',
          topSectionColor: 'bg-emerald-50',
          durationColor: 'bg-emerald-100',
          durationTextColor: 'text-emerald-700',
          icon: 'sparkle',
          description:
            'A comprehensive 3-month transformation designed to restore youthful contours, smooth fine lines, and deliver luminous, glass-like skin. This signature program combines advanced injectables with medical-grade skin therapies to create visible yet natural refinement.',
          includes: [
            'Up to 50 Units Botox',
            'Up to 1 ml Premium Dermal Filler',
            '3 Skin Booster Sessions',
            '2 Hydrafacial Treatments',
            '2 Medical-Grade Chemical Peels',
            '2 IV + Vitamin C Infusions'
          ],
          price: 'Starting from AED 15,999'
        }
      ]
    },
    successStories: {
      badge: 'Patient Success Stories',
      title: 'Real Results From Real People',
      subtitle: 'Hear from clients who experienced transformation through our facial treatments.',
      stats: [
       {
      id: 1,
      number: '4.9/5',
      label1: 'Average Rating',
      label2: 'Google Reviews',
      target: 4.9,
      showStars: true
    },
    {
      id: 2,
      number: '500+',
      label1: 'Patient Reviews',
      label2: 'Verified Testimonials',
      target: 500
    },
    {
      id: 3,
      number: '94%',
      label1: 'Success Rate',
      label2: 'Patient Satisfaction',
      target: 94
    },
    {
      id: 4,
      number: '2,500+',
      label1: 'Patients Treated',
      label2: 'Since 2008',
      target: 2500
    }
      ],
      ctaSection: {
        title: 'Ready to transform your skin?',
        description: 'Join thousands of satisfied clients who have achieved radiant, healthy skin with our luxury facial treatments in Dubai.',
        buttonText: 'Start your journey today'
      },
    },
    faq: {
      title: 'FAQs – Facial Treatments',
      description: 'Everything you need to know about our luxury facial treatments and skincare services in Dubai.',
      faqs: [
        {
          id: 1,
          question: 'What is the best facial treatment for dull skin in Dubai?',
          answer: 'Our Signature HydraFacial deeply cleanses, hydrates, and exfoliates dull skin, providing instant glow and refreshed texture with minimal downtime.'
        },
        {
          id: 2,
          question: 'How often should I get a facial?',
          answer: ' For optimal results, facials can be scheduled every 4–6 weeks depending on skin type, concerns, and treatment plan recommendations.'
        },
        {
          id: 3,
          question: 'Are facial treatments safe for sensitive skin?',
          answer: 'Yes, all treatments are customized by DHA-licensed specialists to ensure safety and minimize irritation, even for sensitive or reactive skin types.'
        },
        {
          id: 4,
          question: 'Do facial treatments help with anti-aging?',
          answer: 'Yes. PRP, Exosomes, and HydraFacial treatments stimulate collagen, reduce fine lines, and improve elasticity for younger-looking skin.'
        },
        {
          id: 5,
          question: 'How long does a facial session last?',
          answer: 'Facial sessions typically last 45–60 minutes, depending on the treatment type and your personalized protocol.'
        },
        {
          id: 6,
          question: 'Can facials treat pigmentation and sun damage?',
          answer: 'Yes, targeted treatments like PRP and Oxygeneo Illuminate help reduce pigmentation, sun spots, and uneven skin tone over multiple sessions.'
        },
        {
          id: 7,
          question: 'Is there downtime after a facial?',
          answer: 'Most facial treatments are non-invasive, allowing you to resume normal activities immediately. Some advanced therapies may have mild redness.'
        },
        {
          id: 8,
          question: 'Which facial is suitable for acne-prone skin?',
          answer: 'HydraFacial and Oxygeneo facials are ideal, combining gentle exfoliation, deep cleansing, and hydration without irritation.'
        },
        {
          id: 9,
          question: 'Can men get facial treatments?',
          answer: 'Absolutely. Our treatments are suitable for both men and women, addressing hydration, aging, and skin clarity concerns.'
        },
        {
          id: 10,
          question: 'Are facials painful?',
          answer: 'No, facial treatments are relaxing and comfortable. PRP injections are minimally invasive and well-tolerated.'
        },
        {
          id: 11,
          question: 'What results can I expect after one facial?',
          answer: ' Immediate hydration, smoother texture, reduced dullness, and noticeable radiance. Long-term treatments enhance anti-aging effects.'
        },
        {
          id: 12,
          question: 'Can facials be combined with other skincare treatments?',
          answer: 'Yes, facials can complement laser therapy, peels, and home-care routines for better overall results.'
        },
        {
          id: 13,
          question: 'How should I prepare for my facial session?',
          answer: ' Avoid heavy makeup and sun exposure on the day of your treatment. Your specialist will provide detailed pre-care instructions.'
        },
        {
          id: 14,
          question: 'Are facials suitable during pregnancy?',
          answer: '  Many facials are safe; however, treatments with PRP or certain active ingredients may be avoided. Always consult your specialist.'
        },
        {
          id: 15,
          question: 'How do I book a facial appointment?',
          answer: '  You can book online, call our clinic, or use WhatsApp for instant scheduling. Flexible evening and weekend slots available.'
        },
      ]
    },
     booking: {
      title: 'Begin Your Skin Care Journey Today',
      description: 'Schedule your personalized consultation with our skincare experts. Same-day appointments are available for your convenience.',
       expectationTitle: 'What to Expect',
  steps: [
    {
      title: 'Comprehensive Skin Assessment',
      description: 'A detailed consultation including professional skin analysis to evaluate your skin type, concerns, and treatment goals.'
    },
    {
      title: 'Personalized Treatment Plan',
      description: 'A customized facial treatment protocol tailored to your specific skin condition, lifestyle, and desired results.'
    },
    {
      title: 'Treatment Journey',
      description: 'Begin advanced Facial Treatments with continuous guidance, progress monitoring, and adjustments to ensure optimal, long-lasting results.'
    }
  ],

      offerTitle: 'Limited Time Offer',
  offerDescription: 'Book your first consultation this month and receive:',
  offers: [
    'Complimentary professional skin analysis report',
    'Free skincare guide for healthy, glowing skin',
    '15% off your first facial treatment package'
  ],

  contactTitle: 'Prefer to Talk?',
  contactMethods: {
    call: {
      label: 'Call Us',
      value: '(+971) 04 286 2006'
    },
    whatsapp: {
      label: 'WhatsApp',
      value: '(+971) 56 659 7878'
    },
       hours: {
      label: 'Open Hours',
      value: [
        'Sun-Thu: 10:00 AM – 10:00 PM',
        'Fri: 10:00 AM – 8:00 PM'
      ]
       }
      }
    },
  facility: {
  badge: 'Our Facial Treatment Facility',
  title: 'Advanced Facial & Aesthetic Skin Care Clinic',
  description:
    'Experience professional facial treatments in our modern Dubai aesthetic clinic, designed for safe, effective, and personalized skin care. We combine advanced technology with expert dermatological care to rejuvenate, nourish, and protect your skin.',
  topGalleryImages: [
    {
      id: 1,
      src: '/images/fa1.png',
      alt: 'Facial treatment room with advanced aesthetic equipment, clean and calming environment, professional skin care setup, realistic clinic interior, no text'
    },
    {
      id: 2,
      src: '/images/fa2.png',
      alt: 'Aesthetic specialist performing professional facial treatment for skin rejuvenation, patient relaxed, modern clinic setting, soft lighting, no text'
    },
    {
      id: 3,
      src: '/images/fa3.png',
      alt: 'Interior of facial treatment clinic with treatment bed and skincare devices, minimal and hygienic design, professional aesthetic environment, no text'
    }
  ],
  bottomGalleryImages: [
    {
      id: 4,
      src: '/images/fa4.png',
      alt: 'Facial treatment consultation focused on skin analysis and personalized care, modern aesthetic clinic, calm professional atmosphere, no text'
    },
    {
      id: 5,
      src: '/images/fa5.png',     
      alt: 'Advanced facial skin treatment session for hydration and glow, patient comfort focused, realistic skincare clinic environment, no text'
    },
    {
      id: 6,
      src: '/images/fa6.png',
      alt: 'Post-facial skincare procedure performed by aesthetic professional, clean clinic interior, soothing and professional environment, no text'
    }
  ],
  trustBadges: [
    {
      id: 1,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: 'DHA Licensed',
      subtitle: 'Certified aesthetic specialists'
    },
    {
      id: 2,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
      title: 'Advanced Facial Care',
      subtitle: 'Modern skin rejuvenation technology'
    },
    {
      id: 3,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: 'Prime Location',
      subtitle: 'Jumeirah 1, Dubai'
    }
  ]
}
  }
};

// Helper function to get category content
export const getCategoryContent = (categorySlug) => {
  return categoryContent[categorySlug] || null;
};

// Helper function to get all categories
export const getAllCategories = () => {
  return Object.keys(categoryContent);
};
