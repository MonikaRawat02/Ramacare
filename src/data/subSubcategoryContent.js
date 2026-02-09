/**
 * Sub-Subcategory Content Data
 * 
 * This file contains content for nested sub-subcategories (files inside sub-category folders)
 * Example: skin-treatment/skin-boosters.jsx, skin-treatment/derma-roller.jsx, etc.
 * 
 * This keeps the main subcategoryContent.js file manageable as you add more nested subcategories.
 */

import { devNull } from "os";

export const subSubcategoryContent = {
  // ============================================
  // SKIN TREATMENT SUB-CATEGORIES
  // ============================================
  
  'aesthetic-dermatology-dubai-skin-treatment-skin-boosters': {
    hero: {
      subtitle: 'Deep Hydration & Natural Skin Rejuvenation',
      description: 'Restore your skin’s natural glow and hydration with Skin Booster Treatment in Dubai at ramacare polyclinic. This advanced injectable treatment deeply nourishes the skin from within, improving texture, elasticity, and overall skin quality for a fresh, youthful appearance.',
      rating: '4.9/5 Rating (300+ Reviews)',
      stats: [
        { id: 1, number: '92%', label: 'Patient Satisfaction' },
        { id: 2, number: '800+', label: 'Treatments Completed' },
        { id: 3, number: '15+', label: 'Years Experience' }
      ],
      ctaButtons: {
        primary: { text: 'Book Consultation', icon: 'calendar', link: '#book-consultation' },
        secondary: { text: 'WhatsApp', phone: '+971 XX XXX XXXX', icon: 'whatsapp' }
      },
      features: ['DHA-Licensed Aesthetic Specialists', 'Safe, Non-Surgical Skin Enhancement', 'Personalized Skin Booster Care in Dubai',' Improves skin hydration and elasticity'],
        image: {
          src: '/images/skinbooster.jpg',
          alt: 'Skin booster treatment in Dubai performed by specialists to deeply hydrate the skin and improve texture and radiance.'
        },
      medicalNotice: {
              text: 'Safety & Medical Disclaimer: Results may vary based on individual skin condition and treatment plan. All Skin Booster Treatment in Dubai procedures at ramacarepolyclinic follow DHA-approved medical protocols and strict safety standards.',
              show: true
            }
    },
   doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Skin Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed Ayurvedic doctors specializes in treating chronic and cosmetic skin concerns through holistic, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
    overview: {
      title: 'Understanding Skin Boosters in Dubai',
        problemIntro: {
          title: 'The Problem: Dehydrated & Dull Skin',
          description:
            'Many people struggle with dehydrated skin that topical products cannot fully treat. Environmental exposure, aging, and lifestyle factors worsen skin texture and radiance over time.'
        },
      
     solutionIntro: {
  title: 'Our Solution: Skin Boosters Treatment in Dubai',
  description:
    'Our Skin Boosters Treatment in Dubai is an advanced injectable therapy designed to deeply hydrate, rejuvenate, and improve overall skin quality.'
},
     
    leftCards: [
  {
    "id": 1,
    "title": "What Is Skin Booster Treatment?",
    "description": "Skin Booster Treatment in Dubai is a minimally invasive aesthetic procedure that delivers hyaluronic acid and skin-nourishing ingredients directly into the skin. Unlike fillers, it improves overall skin quality rather than adding volume."
  },
  {
    "id": 2,
    "title": "Who Is Skin Booster Treatment For?",
    "description": "This treatment is ideal for individuals who experience:",
    "listItems": [
      "Dry, dehydrated, or dull skin",
      "Fine lines and early signs of aging",
      "Uneven skin texture or roughness",
      "Loss of skin elasticity and glow",
      "Tired-looking skin due to stress or sun exposure"
    ]
  },
  {
    "id": 3,
    "title": "Treatment Results",
    "description": "Regular sessions help maintain healthy, hydrated, and youthful-looking skin."
  }
],
  rootCauses: [
  {
    id: 1,
    title: 'Lack of Skin Hydration ',
    description:
      'Dehydrated skin looks dull, rough, and tired, with reduced elasticity and radiance.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Fine Lines & Early Aging ',
    description:
      'Loss of moisture and collagen causes fine lines, creases, and uneven skin texture.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'
  },
  {
    id: 3,
    title: 'Uneven Skin Tone',
    description:
      'Sun exposure, pollution, and aging lead to pigmentation and a lack of skin clarity.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'
  },
  {
    id: 4,
    title: 'Reduced Skin Elasticity',
    description:
      'Aging slows natural collagen production, making skin appear loose and lifeless.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'
  }
],

      quickFacts: [
        { label: 'Treatment Type', value: 'Injectable' },
        { label: 'Recovery Time', value: 'Minimal' },
        { label: 'Results', value: 'Long-lasting' }
      ],
     approachCards: [
  {
    id: 1,
    title: 'Deep Skin Hydration',
    description:
      'Infuses hyaluronic acid into the skin to restore moisture from within.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Improves Skin Texture & Glow',
    description:
      'Enhances smoothness, brightness, and natural radiance.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Reduces Fine Lines',
    description:
      'Softens early signs of aging by improving skin elasticity and firmness.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Natural, Subtle Results',
    description:
      'Provides refreshed, healthy-looking skin without altering facial features.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Safe & Long-Lasting Benefits',
    description:
      'Minimal downtime with gradual, long-lasting improvement in skin quality.',
    hasLearnMore: false,
    expandedContent: null
  }
]
    },
    healingJourney: {
      title: 'Your Skin Booster Journey',
      description: 'A step-by-step, patient-friendly approach for hydrated, glowing skin. ',
    steps: [
  {
    id: 1,
    number: '01',
    title: 'Initial Skin Consultation',
    duration: null,
    description: 'Detailed skin analysis and concern assessment.',
    keyActivities: [
      'Detailed skin analysis and concern assessment',
      'Review of medical history and lifestyle factors',
      'Selection of the right skin booster based on skin needs'
    ],
    side: 'right'
  },
  {
    id: 2,
    number: '02',
    title: 'Personalized Treatment Planning',
    duration: null,
    description: 'Customized skin booster protocol and treatment mapping.',
    keyActivities: [
      'Customized skin booster protocol',
      'Area mapping (face, neck, under-eyes, hands)',
      'Explanation of expected results and number of sessions'
    ],
    side: 'left'
  },
  {
    id: 3,
    number: '03',
    title: 'Skin Preparation',
    duration: null,
    description: 'Preparing the skin safely and comfortably before treatment.',
    keyActivities: [
      'Gentle cleansing and disinfection',
      'Application of numbing cream for comfort',
      'Final skin evaluation before treatment'
    ],
    side: 'right'
  },
  {
    id: 4,
    number: '04',
    title: 'Skin Booster Application',
    duration: null,
    description: 'Delivery of skin boosters using precise techniques.',
    keyActivities: [
      'Micro-injections or the mesotherapy technique',
      'Even distribution of hyaluronic acid–based boosters',
      'Focus on hydration, glow, and skin texture improvement'
    ],
    side: 'left'
  },
  {
    id: 5,
    number: '05',
    title: 'Post-Treatment Care',
    duration: null,
    description: 'Immediate aftercare and skin recovery support.',
    keyActivities: [
      'Soothing serum or calming mask application',
      'Immediate aftercare instructions',
      'Guidance on skincare, sun protection, and hydration'
    ],
    side: 'right'
  },
  {
    id: 6,
    number: '06',
    title: 'Follow-Up & Maintenance',
    duration: null,
    description: 'Ongoing evaluation and long-term skin health planning.',
    keyActivities: [
      'Progress evaluation after each session',
      'Additional sessions scheduled if needed',
      'Maintenance plan for long-lasting skin health'
    ],
    side: 'left'
  }
]

      },
    benefits: {
      title: 'Clinically-Observed Benefits',
      description: 'Evidence-based results from our comprehensive Skin Booster treatment.',
      comparisonTitle: 'Skin Booster Treatment vs. Traditional Facials',
      comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
      comparisonHeaders: {
        feature: 'Aspect',
        ourTreatment: 'Skin Booster Treatment',
        traditional: 'Traditional Facial'
      },
      benefits: [
        {
          id: 1,
          title: '  Improved skin hydration and glow',
          percentage: 89,
          description: null
        },
        {
          id: 2,
          title: ' Smoother texture and refined pores',
          percentage: 92,
          description: null
        },
        {
          id: 3,
          title: ' Reduced fine lines and skin roughness',
          percentage: 87,
          description: null
        },
        {
          id: 4,
          title: 'Enhanced elasticity and firmness',
          percentage: 95,
          description:null
        },
        {
          id: 5,
          title: 'Natural, refreshed appearance',
          percentage: 85,
          description: null
        },
      
      ],
      comparisonData: [
        {
          feature: 'Depth of Action',
          ayurvedic: 'Works within the skin layers',
          conventional: 'Works on skin surface'
        },
        {
          feature: 'Hydration',
          ayurvedic: 'Long-lasting deep hydration',
          conventional: 'Temporary hydration'
        },
        {
          feature: 'Anti-Aging Benefit',
          ayurvedic: 'Improves elasticity and fine lines',
          conventional: 'Limited anti-aging results'
        },
        {
          feature: 'Results Duration',
          ayurvedic: 'Long-term improvement',
          conventional: 'Short-term glow'
        },
        {
          feature: 'Medical Supervision',
          ayurvedic: 'Doctor-led aesthetic procedure',
          conventional: 'Non-medical skincare'
        },
      ]
    },
  pricing: {
  title: 'Transparent Pricing & Customized Treatment Packages',
  description:
    'Our skin booster in Dubai treatments are tailored to your skin type, concerns, and hydration needs, ensuring safe, natural-looking, and long-lasting skin improvement under medical supervision.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'Best for mild dehydration & early skin dullness',
      duration: '6 sessions over 3 months',
      features: [
        'Initial skin analysis and hydration assessment',
        '6 Skin Booster treatment sessions',
        'Deep hydration and nutrient infusion',
        'Customized skincare recommendations',
        'Home care and sun-protection guidance'
      ],
      pricing: 'Starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'Ideal for dull skin, fine lines & uneven texture',
      duration: '12 sessions over 4 months',
      features: [
        'Comprehensive skin evaluation',
        '12 Skin Booster sessions with enhanced formulations',
        'Collagen-stimulating boosters',
        'Personalized skincare and lifestyle guidance',
        'Monthly skin progress monitoring'
      ],
      pricing: 'Starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete skin rejuvenation & long-term glow program',
      duration: '24 sessions over 6 months',
      features: [
        'All Advanced Package benefits',
        'Intensive hydration and anti-aging boosters',
        'Specialized skin rejuvenation treatments',
        'Stress and lifestyle impact management',
        'Quarterly skin health reviews',
        'Long-term skin maintenance support'
      ],
      pricing: 'Starts from AED XXX',
      isPopular: false
    }
  ]
},
    faq: {
  title: 'Frequently Asked Questions About Skin Booster Treatment in Dubai',
  description: null,
  faqs: [
    {
      id: 1,
      question: 'What is Skin Booster Treatment in Dubai?',
      answer: 'Skin Booster Treatment in Dubai is a minimally invasive aesthetic procedure that injects hyaluronic acid into the skin to improve hydration, elasticity, texture, and overall skin quality naturally.'
    },
    {
      id: 2,
      question: 'Who is suitable for Skin Booster Treatment in Dubai?',
      answer: 'Anyone with dry, dull, or aging skin can benefit from Skin Booster Treatment in Dubai, especially those experiencing fine lines, loss of glow, uneven texture, or early signs of aging.'
    },
    {
      id: 3,
      question: 'How does Skin Booster Treatment in Dubai work?',
      answer: 'Skin Booster Treatment in Dubai works by delivering hyaluronic acid directly into the skin, deeply hydrating tissues, stimulating collagen production, and improving skin smoothness and elasticity over time.'
    },
    {
      id: 4,
      question: 'Is Skin Booster Treatment in Dubai safe?',
      answer: 'Yes, Skin Booster Treatment in Dubai is safe when performed by trained medical professionals, using approved products under DHA guidelines, with minimal risk and high patient satisfaction.'
    },
    {
      id: 5,
      question: 'How long does a Skin Booster session take?',
      answer: 'A typical Skin Booster Treatment in Dubai session takes about 30 to 45 minutes, including consultation, skin preparation, precise injections, and post-treatment care guidance.'
    },
    {
      id: 6,
      question: 'How many Skin Booster sessions are required?',
      answer: 'Most patients require 2–3 sessions of Skin Booster Treatment in Dubai, spaced a few weeks apart, depending on skin condition, hydration levels, and desired long-term rejuvenation results.'
    },
    {
      id: 7,
      question: 'When will I see results from Skin Booster Treatment in Dubai?',
      answer: 'Initial glow appears within a few days after Skin Booster Treatment in Dubai, with improved hydration, texture, and elasticity becoming more visible over the following weeks.'
    },
    {
      id: 8,
      question: 'Does Skin Booster Treatment in Dubai reduce fine lines?',
      answer: 'Yes, Skin Booster Treatment in Dubai helps soften fine lines by improving skin hydration and elasticity, giving the skin a smoother, plumper, and more youthful appearance.'
    },
    {
      id: 9,
      question: 'Is there any downtime after Skin Booster Treatment in Dubai?',
      answer: 'There is minimal downtime after Skin Booster Treatment in Dubai. Mild redness or small injection marks may appear but usually resolve within 24–48 hours.'
    },
    {
      id: 10,
      question: 'Can Skin Booster Treatment in Dubai be combined with other treatments?',
      answer: 'Yes, Skin Booster Treatment in Dubai can be safely combined with facials, PRP, or laser treatments to enhance overall skin rejuvenation and achieve more comprehensive aesthetic results.'
    },
    {
      id: 11,
      question: 'Is Skin Booster Treatment in Dubai painful?',
      answer: 'Skin Booster Treatment in Dubai involves minimal discomfort. A numbing cream is usually applied beforehand to ensure patient comfort during the procedure.'
    },
    {
      id: 12,
      question: 'Can men undergo Skin Booster Treatment in Dubai?',
      answer: 'Yes, Skin Booster Treatment in Dubai is suitable for both men and women who want healthier, hydrated skin and improved texture without dramatic or artificial-looking results.'
    },
    {
      id: 13,
      question: 'Which areas can be treated with Skin Booster Treatment in Dubai?',
      answer: 'Skin Booster Treatment in Dubai is commonly used on the face, neck, under-eye area, and hands to improve hydration, texture, and overall skin quality.'
    },
    {
      id: 14,
      question: 'How long do Skin Booster results last?',
      answer: 'Results from Skin Booster Treatment in Dubai typically last 6–9 months, depending on skin type, lifestyle, and maintenance sessions recommended by your doctor.'
    },
    {
      id: 15,
      question: 'How can I book Skin Booster Treatment in Dubai at Ramacare Polyclinic?',
      answer: 'You can book Skin Booster Treatment in Dubai at ramacarepolyclinic by calling the clinic, visiting the website, or scheduling an online consultation with our aesthetic specialists.'
    }
  ],
      resources: [
          {
            id: 1,
            text: 'Skin Boosters',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-boosters-dubai'
          },
          {
            id: 2,
            text: 'Derma Roller',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/derma-roller-dubai'
          },
          {
            id: 3,
            text: 'Skin Tightening',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/skin-tightening-dubai'
          },
          {
            id: 4,
            text: 'Microdermabrasion',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/microdermabrasion-dubai'
          },
          {
            id: 5,
            text: 'Skin Allergy',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-allergy-dubai'
          },
          {
            id: 6,
            text: 'Botox Hyperhidrosis',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/botox-hyperhidrosis-dubai'
          },
          {
            id: 7,
            text: 'Carboxy Therapy',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/carboxy-therapy-dubai'
          },
          {
            id: 8,
            text: 'Electrolysis',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/electrolysis-dubai'
          },
            {
            id: 9,
            text: 'Fillers',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/fillers-in-dubai'
          },
            {
            id: 10,
            text: 'Facial',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/facial'
          },
            {
            id: 11,
            text: 'HIFU',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hifu-dubai'
          },
            {
            id: 12,
            text: 'Face PRP',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/face-prp-in-dubai'
          },
            {
            id: 13,
            text: 'Botox',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/botox-dubai'
          },
            {
            id: 14,
            text: 'Mesotherapy',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mesotherapy-dubai'
          },
            {
            id: 15,
            text: 'Pigmentation',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/pigmentation-dubai'
          },
            {
            id: 16,
            text: 'Dark Circle',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/dark-circle-dubai'
          }
      ]
    },
    bookConsultation: {
      badge: 'Start Your Journey',
      title: 'Book Skin Booster Treatment in Dubai Today',
      description: 'Refresh, hydrate, and rejuvenate your skin with Skin Booster Treatment in Dubai at ramacarepolyclinic, trusted for safe, natural, and doctor-led aesthetic care.',
      getInTouchTitle: 'Get In Touch',
      requestAppointmentTitle: 'Request Appointment',
      submitButtonText: 'Confirm Consultation',
      contactInfo: {
        phone: '+971 XX XXX XXXX',
        whatsapp: 'Chat with us instantly',
        email: 'info@ramacare.com',
        address: { line1: 'Dubai Healthcare City', line2: 'Building X, Floor X, Dubai, UAE' }
      },
      clinicHours: {
        weekdays: 'Saturday - Thursday:',
        weekdaysTime: '9:00 AM - 9:00 PM',
        friday: 'Friday:',
        fridayTime: '2:00 PM - 9:00 PM'
      },
      statCards: [
        { title: 'DHA Licensed', description: 'Certified Facility' },
        { title: 'Experienced Team', description: '15+ Years' },
        { title: '800+ Treatments', description: 'Completed' },
        { title: '4.9/5 Rating', description: 'Patient Reviews' }
      ]
    }
  },

  'aesthetic-dermatology-dubai-skin-treatment-derma-roller': {
    hero: {
      subtitle: 'Natural Skin Repair for Smoother, Healthier Skin',
      description: 'Restore your skin’s natural texture and glow with Derma Roller Treatment in Dubai at ramacarepolyclinic. This minimally invasive treatment stimulates collagen production, helping improve acne scars, fine lines, and uneven skin tone naturally.',
      rating: '4.8/5 Rating (400+ Reviews)',
      stats: [
        { id: 1, number: '91%', label: 'Patient Satisfaction' },
        { id: 2, number: '1000+', label: 'Treatments Completed' },
        { id: 3, number: '15+', label: 'Years Experience' }
      ],
      ctaButtons: {
        primary: { text: 'Book Consultation', icon: 'calendar', link: '#book-consultation' },
        secondary: { text: 'WhatsApp', phone: '+971 XX XXX XXXX', icon: 'whatsapp' }
      },
      features: [' DHA-Licensed Aesthetic Specialists', 'Safe, Non-Surgical Skin Rejuvenation', 'Personalized Derma Roller Care in Dubai'],
        image: {
          src: '/images/derma.jpg',
          alt: 'Derma roller treatment in Dubai performed by specialists to stimulate collagen production and improve skin texture.'
        },
      medicalNotice: { text: 'Safety & Medical Disclaimer: Results may vary depending on skin type and treatment adherence. All Derma Roller Treatment in Dubai procedures at ramacarepolyclinic follow DHA-approved medical and safety protocols.', show: true }
    },
     doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Skin Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed Ayurvedic doctors specializes in treating chronic and cosmetic skin concerns through holistic, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
    overview: {
      title: 'Understanding Skin Boosters in Dubai',
        problemIntro: {
          title: 'The Problem: Skin & Hair Concerns',
          description:
            'Many people struggle with scars, texture irregularities, or aging signs that topical skincare cannot fully correct.'
        },
      
     solutionIntro: {
  title: 'Our Solution: Derma Roller in Dubai',
  description:
    'Our Derma Roller in Dubai treatment uses microneedling technology to naturally stimulate skin and hair regeneration.'
},
     leftCards: [
  {
    id: 1,
    title: 'What Is Derma Roller Treatment?',
    description:
      'Derma Roller Treatment in Dubai is a skin rejuvenation procedure that uses a medical-grade roller with fine needles to create controlled micro-injuries on the skin. This triggers natural healing and collagen production.'
  },
  {
    id: 2,
    title: 'Who Should Consider Derma Roller Treatment?',
    description: `
Acne scars or post-acne marks
Uneven skin texture or enlarged pores
Fine lines and early aging signs
Mild pigmentation or dull skin
Sun-damaged or tired-looking skin

Consistent sessions help achieve smoother, firmer, and healthier skin.
`
  },
  {
    id: 3,
    title: 'Trusted Derma Roller Care You Can Depend On',
    description: `
Improves acne scars and pigmentation
Reduces fine lines and enlarged pores
Boosts collagen and skin renewal
Enhances absorption of skincare serums
Suitable for most skin types
`
  }
],
rootCauses: [
  {
    id: 1,
    title: 'Acne Scars & Uneven Texture ',
    description:
      'Acne scars, open pores, and rough skin texture affect overall skin appearance and confidence.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Fine Lines & Wrinkles ',
    description:
      'Aging and collagen loss lead to fine lines, wrinkles, and dull-looking skin.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'
  },
  {
    id: 3,
    title: 'Hair Thinning & Slow Growth',
    description:
      'Poor scalp circulation and weak follicles result in hair thinning and reduced hair density.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'
  },
  {
    id: 4,
    title: 'Uneven Skin Tone',
    description:
      'Pigmentation, stretch marks, and sun damage create patchy, tired-looking skin.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  }
],
      quickFacts: [
        { label: 'Treatment Type', value: 'Microneedling' },
        { label: 'Recovery Time', value: '24-48 hours' },
        { label: 'Sessions', value: '3-6 recommended' }
      ],
     approachCards: [
  {
    id: 1,
    title: 'Boosts Collagen Production',
    description:
      'Creates micro-channels in the skin, triggering natural collagen and elastin production.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Improves Acne Scars & Texture',
    description:
      'Reduces scars, minimizes pores, and smooths uneven skin texture.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Enhances Hair Growth',
    description:
      'Stimulates the scalp, improves blood circulation, and strengthens hair follicles.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Improves Product Absorption',
    description:
      'Enhances penetration of serums and active ingredients for better results.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Safe & Minimal Downtime',
    description:
      'Performed by professionals with quick recovery and visible improvement over time.',
    hasLearnMore: false,
    expandedContent: null
  }
]
    },
  healingJourney: {
  title: 'Your Derma Roller Journey: Step by Step',
  description:
    'A safe, structured, and doctor-guided approach to achieve a healthier scalp and improved hair growth with derma roller treatment.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Scalp Assessment (45–60 min)',
      duration: 'Week 1',
      description:
        'A detailed evaluation to understand hair fall pattern, scalp health, and suitability for derma roller therapy.',
      keyActivities: [
        'Medical history review',
        'Hair fall and scalp examination',
        'Root strength and density assessment',
        'Lifestyle and nutrition discussion',
        'Personalized derma roller treatment plan'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Scalp Preparation Phase',
      duration: 'Weeks 1–2',
      description:
        'Preparing the scalp to respond better to derma roller treatment by improving circulation and scalp condition.',
      keyActivities: [
        'Scalp cleansing guidance',
        'Oil or serum recommendations',
        'Nutritional and lifestyle advice',
        'Pre-treatment care instructions'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Active Derma Roller Treatment Phase',
      duration: 'Weeks 3–12',
      description:
        'The main phase where derma roller sessions stimulate hair follicles and enhance absorption of growth-supporting solutions.',
      keyActivities: [
        'Weekly or bi-weekly derma roller sessions',
        'Controlled micro-needling by trained professionals',
        'Application of growth serums or actives',
        'Monitoring hair fall reduction and regrowth',
        'Adjustments based on response'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Maintenance & Follow-Up Phase',
      duration: 'Months 4–6',
      description:
        'Focused on sustaining results and supporting long-term hair health.',
      keyActivities: [
        'Monthly follow-up visits',
        'Maintenance derma roller sessions (if needed)',
        'Home-care routine guidance',
        'Ongoing diet and lifestyle support'
      ],
      side: 'left'
    }
  ]
},
     benefits: {
      title: 'Clinically-Observed Benefits',
      description: 'Evidence-based results from our comprehensive Skin Booster treatment.',
      comparisonTitle: 'Derma Roller Treatment vs. Regular Facials',
      comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
      comparisonHeaders: {
        feature: 'Aspect',
        ourTreatment: 'Derma Roller Treatment',
        traditional: 'Regular Facial'
      },
      benefits: [
        {
          id: 1,
          title: ' Reduction in acne scars and marks',
          percentage: 89,
          description: null
        },
        {
          id: 2,
          title: 'Improved skin texture and smoothness',
          percentage: 92,
          description: null
        },
        {
          id: 3,
          title: ' Reduced fine lines and pore size',
          percentage: 87,
          description: null
        },
        {
          id: 4,
          title: 'Enhanced skin firmness and glow',
          percentage: 95,
          description:null
        },
        {
          id: 5,
          title: 'Natural and gradual skin rejuvenation',
          percentage: 85,
          description: null
        },
      
      ],
       comparisonData: [
        {
          feature: 'Depth of Action',
          ayurvedic: 'Works within the skin layers',
          conventional: 'Surface-level care'
        },
        {
          feature: 'Collagen Stimulation',
          ayurvedic: 'Yes, actively boosts collagen',
          conventional: 'No collagen stimulation'
        },
        {
          feature: 'Results',
          ayurvedic: 'Long-term texture improvement',
          conventional: 'Temporary glow'
        },
        {
          feature: 'Medical Supervision',
          ayurvedic: 'Doctor-guided treatment',
          conventional: 'Non-medical skincare'
        },
        {
          feature: 'Target Concerns',
          ayurvedic: 'Scars, lines, texture',
          conventional: 'Basic cleansing and hydration'
        },
      ]
    },
 pricing: {
  title: 'Transparent Pricing & Customized Treatment Packages',
  description:
    'Our derma roller treatments in Dubai are carefully customized to suit your skin type, concerns, and skin-repair goals. Each plan is doctor-supervised to ensure safe, natural-looking, and long-lasting skin improvement with gradual visible results.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'Best for mild acne scars, uneven texture & early skin concerns',
      duration: '6 sessions over 3 months',
      features: [
        'Initial skin analysis and suitability assessment',
        '6 Derma Roller treatment sessions',
        'Controlled micro-needling for skin renewal',
        'Basic collagen stimulation support',
        'Personalized skincare and home-care guidance'
      ],
      pricing: 'Starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'Ideal for acne scars, fine lines & enlarged pores',
      duration: '12 sessions over 4 months',
      features: [
        'Comprehensive skin evaluation',
        '12 Derma Roller sessions with advanced protocols',
        'Enhanced collagen and elastin stimulation',
        'Targeted treatment for scars and texture irregularities',
        'Monthly skin progress monitoring',
        'Customized skincare and lifestyle guidance'
      ],
      pricing: 'Starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete skin repair & long-term skin rejuvenation program',
      duration: '24 sessions over 6 months',
      features: [
        'All Advanced Package benefits',
        'Intensive Derma Roller treatments for deeper scars',
        'Advanced skin-repair and rejuvenation support',
        'Stress and lifestyle impact management',
        'Quarterly skin health reviews',
        'Long-term skin maintenance support'
      ],
      pricing: 'Starts from AED XXX',
      isPopular: false
    }
  ]
},
   faq: {
  title: 'Frequently Asked Questions About Derma Roller Treatment in Dubai',
  description: null,
  faqs: [
    {
      id: 1,
      question: 'What is Derma Roller Treatment in Dubai?',
      answer: 'Derma Roller Treatment in Dubai is a minimally invasive skin rejuvenation procedure using fine medical needles to stimulate collagen, improve texture, reduce scars, and enhance overall skin quality naturally.'
    },
    {
      id: 2,
      question: 'Who is an ideal candidate for Derma Roller Treatment in Dubai?',
      answer: 'Derma Roller Treatment in Dubai is ideal for people with acne scars, enlarged pores, fine lines, uneven skin tone, or dull skin seeking natural improvement without surgery or long downtime.'
    },
    {
      id: 3,
      question: 'How does Derma Roller Treatment in Dubai work?',
      answer: 'Derma Roller Treatment in Dubai creates micro-channels in the skin, triggering natural healing, collagen production, and better absorption of active serums for gradual, long-lasting skin renewal.'
    },
    {
      id: 4,
      question: 'Is Derma Roller Treatment in Dubai safe?',
      answer: 'Yes, Derma Roller Treatment in Dubai is safe when performed by trained medical professionals using sterile equipment and DHA-approved protocols, minimizing risks and ensuring consistent, controlled results.'
    },
    {
      id: 5,
      question: 'Is Derma Roller Treatment in Dubai painful?',
      answer: 'Derma Roller Treatment in Dubai causes mild discomfort only. A numbing cream is applied before the procedure, making the treatment well-tolerated and comfortable for most patients.'
    },
    {
      id: 6,
      question: 'How long does a Derma Roller session take?',
      answer: 'A typical Derma Roller Treatment in Dubai session lasts 30 to 45 minutes, including skin preparation, the procedure itself, and post-treatment care instructions.'
    },
    {
      id: 7,
      question: 'How many Derma Roller sessions are required?',
      answer: 'Most patients need 3–6 sessions of Derma Roller Treatment in Dubai, spaced a few weeks apart, depending on skin condition, severity of concerns, and desired improvement.'
    },
    {
      id: 8,
      question: 'When will I see results from Derma Roller Treatment in Dubai?',
      answer: 'Visible improvements from Derma Roller Treatment in Dubai usually appear after a few weeks, as collagen production increases and skin texture, tone, and smoothness gradually improve.'
    },
    {
      id: 9,
      question: 'Does Derma Roller Treatment in Dubai help acne scars?',
      answer: 'Yes, Derma Roller Treatment in Dubai is effective for reducing acne scars by breaking scar tissue and stimulating new collagen, leading to smoother and more even-looking skin.'
    },
    {
      id: 10,
      question: 'Is there downtime after Derma Roller Treatment in Dubai?',
      answer: 'Downtime after Derma Roller Treatment in Dubai is minimal. Mild redness or sensitivity may occur but usually subsides within 24 to 48 hours.'
    },
    {
      id: 11,
      question: 'Can Derma Roller Treatment in Dubai be combined with other treatments?',
      answer: 'Derma Roller Treatment in Dubai can be combined with PRP, skin boosters, or medical facials to enhance results and support deeper skin repair and rejuvenation.'
    },
    {
      id: 12,
      question: 'Is Derma Roller Treatment in Dubai suitable for sensitive skin?',
      answer: 'Derma Roller Treatment in Dubai can be adjusted for sensitive skin after proper assessment, ensuring needle depth and technique are customized for safety and comfort.'
    },
    {
      id: 13,
      question: 'Can men undergo Derma Roller Treatment in Dubai?',
      answer: 'Yes, Derma Roller Treatment in Dubai is suitable for both men and women looking to improve skin texture, reduce scars, and achieve healthier-looking skin naturally.'
    },
    {
      id: 14,
      question: 'How long do results from Derma Roller Treatment in Dubai last?',
      answer: 'Results from Derma Roller Treatment in Dubai can last several months, especially with proper skincare, sun protection, and maintenance sessions as recommended by your doctor.'
    },
    {
      id: 15,
      question: 'Where can I get Derma Roller Treatment in Dubai?',
      answer: 'You can receive Derma Roller Treatment in Dubai at ramacarepolyclinic, where experienced medical professionals provide personalized, safe, and effective skin rejuvenation care.'
    }
  ],
      resources: [
         {
            id: 1,
            text: 'Skin Boosters',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-boosters-dubai'
          },
          {
            id: 2,
            text: 'Derma Roller',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/derma-roller-dubai'
          },
          {
            id: 3,
            text: 'Skin Tightening',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/skin-tightening-dubai'
          },
          {
            id: 4,
            text: 'Microdermabrasion',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/microdermabrasion-dubai'
          },
          {
            id: 5,
            text: 'Skin Allergy',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-allergy-dubai'
          },
          {
            id: 6,
            text: 'Botox Hyperhidrosis',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/botox-hyperhidrosis-dubai'
          },
          {
            id: 7,
            text: 'Carboxy Therapy',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/carboxy-therapy-dubai'
          },
          {
            id: 8,
            text: 'Electrolysis',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/electrolysis-dubai'
          },
            {
            id: 9,
            text: 'Fillers',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/fillers-in-dubai'
          },
            {
            id: 10,
            text: 'Facial',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/facial'
          },
            {
            id: 11,
            text: 'HIFU',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hifu-dubai'
          },
            {
            id: 12,
            text: 'Face PRP',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/face-prp-in-dubai'
          },
            {
            id: 13,
            text: 'Botox',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/botox-dubai'
          },
            {
            id: 14,
            text: 'Mesotherapy',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mesotherapy-dubai'
          },
            {
            id: 15,
            text: 'Pigmentation',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/pigmentation-dubai'
          },
             {
            id: 16,
            text: 'Dark Circle',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/dark-circle-dubai'
          }
      ]
    },
    bookConsultation: {
      badge: 'Start Your Journey',
      title: 'Book Derma Roller Treatment in Dubai Today',
      description: 'Improve skin texture, reduce scars, and restore confidence with Derma Roller Treatment in Dubai at ramacarepolyclinic, trusted for safe, effective, and doctor-led skin rejuvenation.',
      getInTouchTitle: 'Get In Touch',
      requestAppointmentTitle: 'Request Appointment',
      submitButtonText: 'Confirm Consultation',
      contactInfo: {
        phone: '+971 XX XXX XXXX',
        whatsapp: 'Chat with us instantly',
        email: 'info@ramacare.com',
        address: { line1: 'Dubai Healthcare City', line2: 'Building X, Floor X, Dubai, UAE' }
      },
      clinicHours: {
        weekdays: 'Saturday - Thursday:',
        weekdaysTime: '9:00 AM - 9:00 PM',
        friday: 'Friday:',
        fridayTime: '2:00 PM - 9:00 PM'
      },
      statCards: [
        { title: 'DHA Licensed', description: 'Certified Facility' },
        { title: 'Experienced Team', description: '15+ Years' },
        { title: '1000+ Treatments', description: 'Completed' },
        { title: '4.8/5 Rating', description: 'Patient Reviews' }
      ]
    }
  },

  'aesthetic-dermatology-dubai-skin-treatment-skin-tightening': {
    hero: {
      subtitle: 'Advanced Non-Surgical Care for Firmer, Youthful Skin',
      description: 'Loose or sagging skin is a natural part of aging, weight changes, and collagen loss. At ramacare polyclinic, we provide advanced Skin Tightening Treatment in Dubai to restore firmness, improve elasticity, and enhance your natural facial and body contours—without surgery.',
      rating: '4.9/5 Rating (500+ Reviews)',
      stats: [
        { id: 1, number: '94%', label: 'Patient Satisfaction' },
        { id: 2, number: '1200+', label: 'Treatments Completed' },
        { id: 3, number: '15+', label: 'Years Experience' }
      ],
      ctaButtons: {
        primary: { text: 'Book Consultation', icon: 'calendar', link: '#book-consultation' },
        secondary: { text: 'WhatsApp', phone: '+971 XX XXX XXXX', icon: 'whatsapp' }
      },
      features: ['DHA-Licensed Medical Aesthetic Clinic', ' Experienced Aesthetic Doctors & Therapists', 'Safe & Effective Skin Tightening Treatment in Dubai'],
        image: {
          src: '/images/skin-tightening.jpg',
          alt: 'Skin tightening treatment is performed by specialists to improve skin firmness and restore a youthful appearance.'
        },
      medicalNotice: { text: 'Results may vary. DHA-approved facility.', show: true }
    },
     doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Skin Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed Ayurvedic doctors specializes in treating chronic and cosmetic skin concerns through holistic, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
    overview: {
     title: 'Understanding Skin Tightening Treatment',
        problemIntro: {
          title: 'The Problem: Loose & Aging Skin',
          description:
            'Many people delay treatment due to fear of surgery, downtime, or unnatural results.'
        },
      solutionIntro: {
  title: 'Our Solution: Skin Tightening in Dubai',
  description:
    'Our Skin Tightening in Dubai treatments are designed to lift, firm, and rejuvenate the skin without surgery.'
},
   leftCards: [
  {
    id: 1,
    title: 'What Is Skin Tightening Treatment?',
    description:
      'Skin Tightening Treatment in Dubai uses advanced technologies such as radiofrequency or energy-based systems to stimulate collagen and elastin production, helping skin become firmer, smoother, and more lifted over time.'
  },
  {
    id: 2,
    title: 'Who Needs Skin Tightening Treatment?',
    sections: [
      {
        heading: 'This treatment is recommended for individuals experiencing:',
        items: [
          'Mild to moderate skin sagging',
          'Loss of facial firmness or jawline definition',
          'Loose skin on neck, arms, abdomen, or thighs',
          'Early signs of aging',
          'Post-weight loss skin laxity'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Trusted Skin Tightening Care You Can Depend On',
    listItems: [
      'Detailed skin assessment',
      'Personalized skin tightening plans',
      'Non-surgical, pain-minimal treatments',
      'Suitable for face & body areas',
      'Safe for adults of different skin types'
    ]
  }
],
  rootCauses: [
  {
    id: 1,
    title: 'Loss of Skin Firmness ',
    description:
      'Aging and collagen loss cause sagging skin on the face, neck, arms, and abdomen.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Fine Lines & Wrinkles ',
    description:
      'Reduced elasticity leads to wrinkles, creases, and tired-looking skin.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  },
  {
    id: 3,
    title: 'Post-Weight Loss Sagging',
    description:
      'Rapid weight loss can leave excess loose skin that affects body contour.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  },
  {
    id: 4,
    title: 'Environmental Damage ',
    description:
      'Sun exposure and pollution accelerate skin aging and loss of tone.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  }
],
      quickFacts: [
        { label: 'Treatment Type', value: 'Non-invasive' },
        { label: 'Recovery Time', value: 'None' },
        { label: 'Results', value: 'Gradual improvement' }
      ],
    approachCards: [
  {
    id: 1,
    title: 'Advanced Non-Surgical Technology',
    description:
      'Uses radiofrequency or ultrasound energy to stimulate collagen production.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Firms & Lifts the Skin',
    description:
      'Improves elasticity and tightens loose skin for a youthful appearance.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Reduces Wrinkles & Fine Lines',
    description:
      'Smooths skin texture and enhances facial and body contours.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Safe & Comfortable Procedure',
    description:
      'Non-invasive treatment with minimal discomfort and no downtime.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Long-Lasting Results',
    description:
      'Delivers gradual, natural-looking firmness and improved skin tone over time.',
    hasLearnMore: false,
    expandedContent: null
  }
]
    },
   healingJourney: {
  title: 'Your Healing Journey: Step by Step',
  description:
    'Our skin tightening in Dubai program follows a transparent, structured approach designed to deliver visible results while ensuring comfort, safety, and long-term skin health. Each phase is carefully planned to support your body’s natural healing and rejuvenation process.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation (60 Minutes)',
      duration: 'Week 1',
      description:
        'Your journey begins with a detailed one-on-one consultation to understand your skin concerns, lifestyle, and overall health.',
      keyActivities: [
        'In-depth health questionnaire',
        'Prakriti (body constitution) analysis',
        'Pulse diagnosis (Nadi Pariksha)',
        'Skin and scalp examination',
        'Personalized skin tightening treatment plan'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Detoxification Phase',
      duration: 'Weeks 1–2',
      description:
        'Before active treatment, we gently prepare your body by removing toxins (Ama) that can affect skin elasticity and healing.',
      keyActivities: [
        'Targeted dietary guidance',
        'Ayurvedic herbal support',
        'Oil pulling (if required)',
        'Lifestyle and routine adjustments'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Active Treatment Phase',
      duration: 'Weeks 3–12',
      description:
        'This is the core phase of your skin tightening in Dubai program, where visible improvements begin to appear.',
      keyActivities: [
        '2–3 therapy sessions per week',
        'Therapies such as Shirodhara, head massage, and herbal applications',
        'Guided home-care routine',
        'Regular progress monitoring',
        'Treatment plan adjustments based on results'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Maintenance & Follow-Up',
      duration: 'Months 4–12',
      description:
        'To sustain and enhance results, we focus on long-term care and prevention.',
      keyActivities: [
        'Monthly follow-up consultations',
        'Seasonal maintenance treatments',
        'Lifestyle and skincare guidance',
        'Continuous expert support'
      ],
      side: 'left'
    }
  ]
},
     benefits: {
        title: 'Clinically Observed Benefits',
        description: 'Evidence-based results from our crown and bridge treatment procedures.',
        comparisonTitle: 'Skin Tightening Treatment vs. Conventional Cosmetic Procedures',
        comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Skin Tightening Treatment in Dubai',
          traditional: 'Conventional Cosmetic Procedures'
        },
        benefits: [
          {
            id: 1,
            title: 'Improved skin firmness',
            percentage: 98,
            description: null
          },
          {
            id: 2,
            title: ' Better elasticity and texture',
            percentage: 97,
            description: null
          },
          {
            id: 3,
            title: 'Lifted facial and body contours',
            percentage: 95,
            description: null
          },
          {
            id: 4,
            title: ' Reduced fine lines',
            percentage: 92,
            description: null
          },
          {
            id: 5,
            title: 'Enhanced confidence and skin quality',
            percentage: 96,
            description: null
          },
         
        ],
        comparisonData: [
          {
            feature: 'Approach',
            ayurvedic: 'Stimulates natural collagen',
            conventional: 'Surgically alters skin'
          },
          {
            feature: 'Invasiveness',
            ayurvedic: 'Non-surgical',
            conventional: 'Invasive'
          },
          {
            feature: 'Downtime',
            ayurvedic: 'Minimal or none',
            conventional: 'Long recovery'
          },
          {
            feature: 'Results',
            ayurvedic: 'Gradual, natural improvement',
            conventional: 'Immediate but surgical'
          },
           {
            feature: 'Safety',
            ayurvedic: 'Medically guided & controlled',
            conventional: 'Higher procedural risk'
          },
           {
            feature: 'Long-Term Care',
            ayurvedic: 'Maintains skin health',
            conventional: 'Often a one-time procedure'
          }
        ]
      },
  pricing: {
  title: 'Transparent Pricing & Customized Treatment Packages',
  description:
    'Our Skin Tightening in Dubai treatments are carefully customized based on your skin condition, laxity level, and rejuvenation goals. Each plan is doctor-supervised to ensure safe, natural-looking, and long-lasting firming results.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'Best for mild skin laxity & early loss of firmness',
      duration: '6 sessions over 3 months',
      features: [
        'Initial skin tightening assessment and analysis',
        '6 Skin Tightening in Dubai treatment sessions',
        'Gentle firming and collagen-boosting stimulation',
        'Customized skincare recommendations',
        'Home care and sun-protection guidance'
      ],
      pricing: 'Starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'Ideal for sagging skin, fine lines & reduced elasticity',
      duration: '12 sessions over 4 months',
      features: [
        'Comprehensive skin evaluation',
        '12 Skin Tightening sessions with advanced technology',
        'Deep collagen and elastin stimulation',
        'Personalized skincare and lifestyle guidance',
        'Monthly skin progress monitoring'
      ],
      pricing: 'Starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete skin firming & long-term lifting program',
      duration: '24 sessions over 6 months',
      features: [
        'All Advanced Package benefits',
        'Intensive skin tightening and lifting treatments',
        'Advanced anti-aging and rejuvenation therapies',
        'Stress and lifestyle impact management',
        'Quarterly skin health and firmness reviews',
        'Long-term skin maintenance support'
      ],
      pricing: 'Starts from AED XXX',
      isPopular: false
    }
  ]
},
    faq: {
  title: 'Frequently Asked Questions About Skin Tightening Treatment in Dubai',
  description: 'Skin Tightening Treatment in Dubai',
  faqs: [
    {
      id: 1,
      question: 'What is Skin Tightening Treatment in Dubai?',
      answer:
        'Skin Tightening Treatment in Dubai is a non-surgical aesthetic procedure that stimulates collagen production to firm sagging skin, improve elasticity, and enhance natural facial or body contours safely.'
    },
    {
      id: 2,
      question: 'Who is suitable for Skin Tightening Treatment in Dubai?',
      answer:
        'Skin Tightening Treatment in Dubai is suitable for adults with mild to moderate skin laxity, early aging signs, or post-weight loss sagging, seeking non-invasive and natural-looking skin improvement.'
    },
    {
      id: 3,
      question: 'How does Skin Tightening Treatment in Dubai work?',
      answer:
        'Skin Tightening Treatment in Dubai uses energy-based technology to heat deeper skin layers, activating collagen and elastin production, resulting in gradual tightening and smoother skin texture.'
    },
    {
      id: 4,
      question: 'Is Skin Tightening Treatment in Dubai safe?',
      answer:
        'Yes, Skin Tightening Treatment in Dubai is safe when performed by qualified professionals following DHA-approved medical protocols, ensuring controlled treatment, patient comfort, and minimal risk.'
    },
    {
      id: 5,
      question: 'Is Skin Tightening Treatment in Dubai painful?',
      answer:
        'Skin Tightening Treatment in Dubai is generally comfortable. Patients may feel mild warmth or tingling, but the procedure is well-tolerated without anesthesia or significant discomfort.'
    },
    {
      id: 6,
      question: 'How many sessions of Skin Tightening Treatment in Dubai are needed?',
      answer:
        'Most patients require 3 to 6 Skin Tightening Treatment in Dubai sessions, depending on skin condition, treatment area, and desired firmness improvement, as recommended after consultation.'
    },
    {
      id: 7,
      question: 'When will I see results from Skin Tightening Treatment in Dubai?',
      answer:
        'Results from Skin Tightening Treatment in Dubai appear gradually over several weeks as collagen rebuilds, with continued improvement after each session and proper skin care.'
    },
    {
      id: 8,
      question: 'Does Skin Tightening Treatment in Dubai require downtime?',
      answer:
        'Skin Tightening Treatment in Dubai requires little to no downtime. Patients can return to daily activities immediately, with mild redness resolving within a few hours.'
    },
    {
      id: 9,
      question: 'Can Skin Tightening Treatment in Dubai be done on the face?',
      answer:
        'Yes, Skin Tightening Treatment in Dubai is commonly performed on the face, jawline, neck, and forehead to improve firmness and redefine facial contours naturally.'
    },
    {
      id: 10,
      question: 'Is Skin Tightening Treatment in Dubai effective for body areas?',
      answer:
        'Skin Tightening Treatment in Dubai is effective for arms, abdomen, thighs, and other body areas where mild skin laxity or loss of firmness is present.'
    },
    {
      id: 11,
      question: 'Are the results of Skin Tightening Treatment in Dubai permanent?',
      answer:
        'Results from Skin Tightening Treatment in Dubai are long-lasting but not permanent. Maintenance sessions and healthy lifestyle habits help sustain skin firmness over time.'
    },
    {
      id: 12,
      question: 'Can Skin Tightening Treatment in Dubai be combined with other treatments?',
      answer:
        'Yes, Skin Tightening Treatment in Dubai can be combined with facials, skin boosters, or PRP treatments to enhance overall skin rejuvenation and improve results.'
    },
    {
      id: 13,
      question: 'Is Skin Tightening Treatment in Dubai suitable for all skin types?',
      answer:
        'Skin Tightening Treatment in Dubai is suitable for most skin types and tones, with treatment settings adjusted to ensure safety and effective outcomes for each patient.'
    },
    {
      id: 14,
      question: 'How long does a Skin Tightening Treatment in Dubai session take?',
      answer:
        'A Skin Tightening Treatment in Dubai session typically takes 30 to 60 minutes, depending on the treatment area and personalized skin tightening plan.'
    },
    {
      id: 15,
      question: 'Where can I get Skin Tightening Treatment in Dubai?',
      answer:
        'You can receive Skin Tightening Treatment in Dubai at ramacarepolyclinic, offering expert medical care, advanced technology, and personalized treatment plans for safe skin drawing.'
    }
  ],
      resources: [
         {
            id: 1,
            text: 'Skin Boosters',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-boosters-dubai'
          },
          {
            id: 2,
            text: 'Derma Roller',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/derma-roller-dubai'
          },
          {
            id: 3,
            text: 'Skin Tightening',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/skin-tightening-dubai'
          },
          {
            id: 4,
            text: 'Microdermabrasion',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/microdermabrasion-dubai'
          },
          {
            id: 5,
            text: 'Skin Allergy',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-allergy-dubai'
          },
          {
            id: 6,
            text: 'Botox Hyperhidrosis',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/botox-hyperhidrosis-dubai'
          },
          {
            id: 7,
            text: 'Carboxy Therapy',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/carboxy-therapy-dubai'
          },
          {
            id: 8,
            text: 'Electrolysis',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/electrolysis-dubai'
          },
            {
            id: 9,
            text: 'Fillers',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/fillers-in-dubai'
          },
            {
            id: 10,
            text: 'Facial',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/facial'
          },
            {
            id: 11,
            text: 'HIFU',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hifu-dubai'
          },
            {
            id: 12,
            text: 'Face PRP',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/face-prp-in-dubai'
          },
            {
            id: 13,
            text: 'Botox',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/botox-dubai'
          },
            {
            id: 14,
            text: 'Mesotherapy',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mesotherapy-dubai'
          },
            {
            id: 15,
            text: 'Pigmentation',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/pigmentation-dubai'
          },
             {
            id: 16,
            text: 'Dark Circle',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/dark-circle-dubai'
          }
      ]
    },
    bookConsultation: {
      badge: 'Start Your Journey',
      title: 'Book Skin Tightening Treatment in Dubai Today',
      description: 'Restore firmness, improve skin quality, and age gracefully with expert non-surgical care at ramacarepolyclinic.',
      getInTouchTitle: 'Get In Touch',
      requestAppointmentTitle: 'Request Appointment',
      submitButtonText: 'Confirm Consultation',
      contactInfo: {
        phone: '+971 XX XXX XXXX',
        whatsapp: 'Chat with us instantly',
        email: 'info@ramacare.com',
        address: { line1: 'Dubai Healthcare City', line2: 'Building X, Floor X, Dubai, UAE' }
      },
      clinicHours: {
        weekdays: 'Saturday - Thursday:',
        weekdaysTime: '9:00 AM - 9:00 PM',
        friday: 'Friday:',
        fridayTime: '2:00 PM - 9:00 PM'
      },
      statCards: [
        { title: 'DHA Licensed', description: 'Certified Facility' },
        { title: 'Experienced Team', description: '15+ Years' },
        { title: '1200+ Treatments', description: 'Completed' },
        { title: '4.9/5 Rating', description: 'Patient Reviews' }
      ]
    }
  },

  'aesthetic-dermatology-dubai-skin-treatment-microdermabrasion': {
   hero: {
            subtitle: 'Gentle Skin Resurfacing for a Brighter, Smoother Glow',
            description: 'Dull skin, uneven texture, and clogged pores can make your skin look tired. At ramacarepolyclinic, we offer professional Microdermabrasion in Dubai to gently exfoliate dead skin cells, refresh your complexion, and restore a healthy, natural glow—without harsh chemicals or downtime.',
            rating: '4.9/5 Rating (500+ Reviews)',
            stats: [
              {
                id: 1,
                number: '94%',
                label: 'Patient Satisfaction'
              },
              {
                id: 2,
                number: '2500+',
                label: 'Hair Patients Treated'
              },
              {
                id: 3,
                number: '15+',
                label: 'Years of Experience'
              }
            ],
            ctaButtons: {
              primary: {
                text: 'Book Free Consultation',
                icon: 'calendar',
                link: '#book-consultation'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 XX XXX XXXX',
                icon: 'whatsapp'
              }
            },
            features: [
              '  DHA-Licensed Aesthetic Clinic',
              ' Experienced Skin Specialists',
              'Safe & Effective Microdermabrasion in Dubai'
            ],
            image: {
          src: '/images/skinbooster.jpg',
          alt: 'Skin booster treatment in Dubai performed by specialists to deeply hydrate the skin and improve texture and radiance.'
        },
            medicalNotice: {
              text: 'Safety & Medical Disclaimer: Results may vary depending on individual skin condition and care routine. All Microdermabrasion in Dubai at ramacare polyclinic follows DHA-approved medical and safety standards.',
              show: true
            }
          },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Skin Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed Ayurvedic doctors specializes in treating chronic and cosmetic skin concerns through holistic, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Microdermabrasion',
        problemIntro: {
          title: 'The Problem: Dull Skin & Uneven Texture',
          description: 'Many people struggle with dull skin but avoid treatments, fearing irritation or downtime.'
        },
       solutionIntro: {
  title: 'Our Solution: Microdermabrasion in Dubai',
  description:
    'Our Microdermabrasion in Dubai is a gentle, non-invasive exfoliation treatment designed to refresh and rejuvenate your skin.'
},
       leftCards: [
  {
    id: 1,
    title: 'What Is Microdermabrasion?',
    description:
      'Microdermabrasion in Dubai is a non-invasive skin treatment that uses controlled exfoliation to remove dead skin cells, unclog pores, and stimulate skin renewal, revealing smoother and brighter skin.'
  },
  {
    id: 2,
    title: 'Who Can Benefit from Microdermabrasion?',
    description: 'This treatment is ideal for individuals with:',
    listItems: [
      'Dull or uneven skin tone',
      'Rough skin texture',
      'Mild acne marks',
      'Enlarged pores',
      'Fine lines and early aging signs'
    ]
  },
  {
    id: 3,
    title: 'Trusted Microdermabrasion Care You Can Depend On',
    listItems: [
      'Medical-grade exfoliation systems',
      'Customized treatment plans',
      'Gentle and non-invasive procedure',
      'Suitable for most skin types',
      'Performed by trained professionals',
      'Healthy, glowing skin—not aggressive treatments'
    ]
  }
],
     rootCauses: [
  {
    id: 1,
    title: 'Dead Skin Cell Build-Up ',
    description:
      'Accumulation of dead skin cells makes the skin look dull, rough, and uneven.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Fine Lines & Early Aging ',
    description:
      'Sun exposure and aging cause fine lines and loss of natural skin smoothness.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  },
  {
    id: 3,
    title: 'Enlarged Pores & Blackheads ',
    description:
      'Clogged pores lead to blackheads, whiteheads, and uneven skin texture.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  },
  {
    id: 4,
    title: 'Uneven Skin Tone ',
    description:
      'Pigmentation, mild scars, and tanning can make the complexion look patchy and tired.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  }
],
        quickFacts: [
          { label: 'Treatment Type', value: 'Non-invasive' },
          { label: 'Anesthesia', value: 'Not required' },
          { label: 'Recovery Time', value: 'Immediate' },
          { label: 'Side Effects', value: 'Minimal to none' }
        ],
      approachCards: [
  {
    id: 1,
    title: 'Deep Exfoliation',
    description:
      'Removes dead skin cells to reveal smoother, brighter, and healthier-looking skin.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Improves Skin Texture & Tone',
    description:
      'Helps reduce fine lines, mild pigmentation, and surface irregularities.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Unclogs Pores',
    description:
      'Minimizes blackheads and whiteheads while improving pore appearance.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Boosts Skin Renewal',
    description:
      'Stimulates natural cell turnover and enhances product absorption.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Quick, Safe & No Downtime',
    description:
      'Suitable for all skin types with immediate glow and minimal recovery time.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
     healingJourney: {
  title: 'Your Skin Rejuvenation Journey: Step by Step',
  description:
    'Our microdermabrasion in Dubai treatment follows a structured, transparent approach designed to deliver safe, visible skin rejuvenation with maximum comfort. Each stage is guided by experienced skincare professionals to suit different skin types and concerns.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Week 1: Initial Skin Consultation (60 Minutes)',
      duration: 'Week 1',
      description:
        'Your journey begins with a detailed skin consultation to determine whether microdermabrasion in Dubai is suitable for your skin goals.',
      keyActivities: [
        'Skin concern discussion and medical history review',
        'Skin type and sensitivity assessment',
        'Texture, pigmentation, and pore analysis',
        'Evaluation of acne scars, fine lines, and dullness',
        'Creation of a customized microdermabrasion treatment plan'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Weeks 1–2: Skin Preparation Phase',
      duration: 'Weeks 1–2',
      description:
        'Before starting active sessions, your skin is gently prepared to enhance the effectiveness of microdermabrasion treatment in Dubai.',
      keyActivities: [
        'Mild exfoliation and cleansing guidance',
        'Hydration and sun-protection recommendations',
        'Temporary avoidance of harsh skincare products',
        'Lifestyle and skincare routine adjustments'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Weeks 3–12: Active Microdermabrasion Sessions',
      duration: 'Weeks 3–12',
      description:
        'This phase includes regular microdermabrasion sessions in Dubai to remove dead skin cells and support natural skin renewal.',
      keyActivities: [
        '2–4 sessions per month, based on skin condition',
        'Professional exfoliation using advanced microdermabrasion technology',
        'Removal of dead skin, blackheads, and surface pigmentation',
        'Improvement in skin texture, tone, and radiance',
        'Ongoing progress tracking and treatment adjustments'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Months 4–12: Maintenance & Follow-Up Care',
      duration: 'Months 4–12',
      description:
        'Maintenance sessions help support skin health after completing your microdermabrasion in Dubai treatment plan.',
      keyActivities: [
        'Monthly or seasonal maintenance sessions',
        'Regular skin assessments',
        'Personalized skincare recommendations',
        'Ongoing professional guidance'
      ],
      side: 'left'
    }
  ]
},

      benefits: {
        title: 'Clinically Observed Benefits',
        description: 'Based on 15+ years of providing skin treatment in Dubai.',
        benefits: [
          {
            id: 1,
            title: ' Brighter, smoother skin',
            percentage: 91,
            description: null
          },
          {
            id: 2,
            title: ' Improved texture and tone ',
            percentage: 88,
            description: null
          },
          {
            id: 3,
            title: ' Reduced dullness',
            percentage: 95,
            description: 'Enhanced skin moisture and suppleness'
          },
          {
            id: 4,
            title: ' Refined pores',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: 'Healthy natural glow',
            percentage: 93,
            description: null
          }
        ],
        comparisonTitle: 'Skin Treatment vs Conventional Skincare',
        comparisonDescription: 'Compare our professional skin treatment approach with conventional skincare methods',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Professional Skin Treatment',
          traditional: 'Conventional Skincare'
        },
        comparisonData: [
          {
            feature: 'Treatment Method	',
            ayurvedic: 'Combines internal support, lifestyle guidance, and topical care.',
            conventional: 'Mainly topical products or procedures'
          },
          {
            feature: 'Results',
            ayurvedic: 'Gradual improvement with longer-lasting outcomes.',
            conventional: 'Faster results, but often temporary'
          },
          {
            feature: 'Ingredients & Products',
            ayurvedic: 'Uses carefully selected, skin-friendly formulations.',
            conventional: 'Often relies on chemical-based formulations'
          },
          {
            feature: 'Side Effects',
            ayurvedic: 'Generally minimal when professionally supervised.',
            conventional: 'Possible irritation, dryness, or sensitivity'
          },
          {
            feature: 'Skin Care Scope',
            ayurvedic: 'Looks at overall skin balance and function.',
            conventional: 'Targets specific skin issues only.'
          },
          {
            feature: 'Long-Term Safety',
            ayurvedic: 'Suitable for extended skin care plans.',
            conventional: 'Limited for prolonged or repeated use'
          }
        ]
      },
    pricing: {
  title: 'Transparent Pricing & Customized Treatment Packages',
  description:
    'Our Microdermabrasion in Dubai treatments are thoughtfully customized based on your skin type, sensitivity, and renewal goals. Every plan is doctor-supervised to ensure safe exfoliation, visible brightness, and long-lasting skin clarity.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'Best for dull skin & uneven texture',
      duration: '6 sessions over 3 months',
      features: [
        'Initial skin assessment and sensitivity evaluation',
        '6 Microdermabrasion in Dubai treatment sessions',
        'Gentle exfoliation to remove dead skin cells',
        'Pore cleansing and skin-smoothing care',
        'Customized skincare and aftercare guidance'
      ],
      pricing: 'Starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'Ideal for pigmentation, fine lines & rough skin texture',
      duration: '12 sessions over 4 months',
      features: [
        'Comprehensive skin evaluation',
        '12 Microdermabrasion sessions with advanced exfoliation techniques',
        'Improved cell turnover and skin renewal support',
        'Personalized skincare and lifestyle recommendations',
        'Monthly skin progress monitoring'
      ],
      pricing: 'Starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete skin resurfacing & long-term glow program',
      duration: '24 sessions over 6 months',
      features: [
        'All Advanced Package benefits',
        'Intensive microdermabrasion for deeper skin refinement',
        'Enhanced brightness and texture correction treatments',
        'Stress and lifestyle impact management',
        'Quarterly skin health and glow reviews',
        'Long-term skin maintenance support'
      ],
      pricing: 'Starts from AED XXX',
      isPopular: false
    }
  ]
},
    faq: {
  title: "Frequently Asked Questions About Microdermabrasion in Dubai",
  description: "Microdermabrasion in Dubai",
  faqs: [
    {
      id: 1,
      question: "What is Microdermabrasion in Dubai?",
      answer: "Microdermabrasion in Dubai is a non-invasive skin treatment that gently removes dead skin cells, improves texture, unclogs pores, and promotes a brighter, smoother complexion with no downtime and safety."
    },
    {
      id: 2,
      question: "Who is suitable for Microdermabrasion in Dubai?",
      answer: "Microdermabrasion in Dubai is suitable for people with dull skin, uneven tone, mild acne marks, enlarged pores, or early aging who want safe, regular skin maintenance without aggressive procedures or treatments."
    },
    {
      id: 3,
      question: "How does Microdermabrasion in Dubai work?",
      answer: "During microdermabrasion in Dubai, a handheld device exfoliates skin under professional control, stimulating natural renewal, improving circulation, and allowing skincare products to absorb better after treatment sessions safely, effectively, and comfortably."
    },
    {
      id: 4,
      question: "Is Microdermabrasion in Dubai safe?",
      answer: "Microdermabrasion in Dubai is safe when performed by trained professionals using medical-grade equipment, following hygiene protocols, ensuring minimal irritation, controlled exfoliation, and consistent results for most skin types."
    },
    {
      id: 5,
      question: "Is Microdermabrasion in Dubai painful?",
      answer: "Microdermabrasion in Dubai is generally painless; patients may feel mild scratching or vibration sensations, but the procedure is comfortable, quick, and does not require anesthesia or recovery time afterward."
    },
    {
      id: 6,
      question: "How long does Microdermabrasion in Dubai take?",
      answer: "A microdermabrasion in Dubai session usually lasts thirty to forty-five minutes, including cleansing, exfoliation, and soothing application, making it easy to fit into busy schedules without stress or downtime."
    },
    {
      id: 7,
      question: "When will I see results from Microdermabrasion in Dubai?",
      answer: "Many patients notice immediate smoothness after microdermabrasion in Dubai, with brighter tone developing over multiple sessions as skin renewal improves texture clarity and overall healthy appearance gradually with continued care."
    },
    {
      id: 8,
      question: "Does Microdermabrasion in Dubai help acne marks?",
      answer: "Microdermabrasion in Dubai can help reduce mild acne marks, pigmentation, and fine lines by removing surface buildup, encouraging cell turnover, and improving skin smoothness with regular treatments over time naturally."
    },
    {
      id: 9,
      question: "Is there downtime after Microdermabrasion in Dubai?",
      answer: "Microdermabrasion in Dubai requires no downtime; patients can return to normal activities immediately while following basic aftercare like sun protection, gentle cleansing, and proper skin hydration for the best lasting results."
    },
    {
      id: 10,
      question: "Can Microdermabrasion in Dubai be combined with other treatments?",
      answer: "Microdermabrasion in Dubai can be combined with facials, skin boosters, or chemical peels, depending on skin goals, to enhance glow, improve texture, and support long term skin health safely and professionally."
    },
    {
      id: 11,
      question: "Is Microdermabrasion in Dubai suitable for sensitive skin?",
      answer: "Microdermabrasion in Dubai is suitable for most skin types; however, a consultation helps customize exfoliation depth, ensuring safety, effectiveness, and comfort for sensitive or reactive skin conditions and individual needs."
    },
    {
      id: 12,
      question: "How long do Microdermabrasion in Dubai results last?",
      answer: "Microdermabrasion in Dubai results last longer with regular sessions, proper skincare, sun protection, and healthy habits supporting continuous skin renewal and maintaining a fresh, even complexion over extended time periods."
    },
    {
      id: 13,
      question: "Is Microdermabrasion in Dubai suitable for men?",
      answer: "Microdermabrasion in Dubai is appropriate for both men and women seeking simple, effective skin maintenance, improved texture, and a refreshed appearance without invasive cosmetic procedures or surgical treatments or downtime."
    },
    {
      id: 14,
      question: "How often should I get Microdermabrasion in Dubai?",
      answer: "Doctors recommend microdermabrasion in Dubai every three to four weeks, depending on skin condition, goals, and response to treatment, ensuring gradual improvement and skin safety with consistent professional monitoring and support."
    },
    {
      id: 15,
      question: "Where can I get Microdermabrasion in Dubai?",
      answer: "At ramacarepolyclinic, microdermabrasion in Dubai is performed by trained professionals using advanced equipment, personalized care, and strict safety standards to deliver reliable, comfortable, and visible skin results with patient-focused expertise."
    }
  ],
         resources: [
         {
            id: 1,
            text: 'Skin Boosters',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-boosters-dubai'
          },
          {
            id: 2,
            text: 'Derma Roller',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/derma-roller-dubai'
          },
          {
            id: 3,
            text: 'Skin Tightening',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/skin-tightening-dubai'
          },
          {
            id: 4,
            text: 'Microdermabrasion',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/microdermabrasion-dubai'
          },
          {
            id: 5,
            text: 'Skin Allergy',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-allergy-dubai'
          },
          {
            id: 6,
            text: 'Botox Hyperhidrosis',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/botox-hyperhidrosis-dubai'
          },
          {
            id: 7,
            text: 'Carboxy Therapy',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/carboxy-therapy-dubai'
          },
          {
            id: 8,
            text: 'Electrolysis',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/electrolysis-dubai'
          },
            {
            id: 9,
            text: 'Fillers',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/fillers-in-dubai'
          },
            {
            id: 10,
            text: 'Facial',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/facial'
          },
            {
            id: 11,
            text: 'HIFU',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hifu-dubai'
          },
            {
            id: 12,
            text: 'Face PRP',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/face-prp-in-dubai'
          },
            {
            id: 13,
            text: 'Botox',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/botox-dubai'
          },
            {
            id: 14,
            text: 'Mesotherapy',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mesotherapy-dubai'
          },
            {
            id: 15,
            text: 'Pigmentation',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/pigmentation-dubai'
          },
             {
            id: 16,
            text: 'Dark Circle',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/dark-circle-dubai'
          }
      ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment & Insurance',
        insuranceTitle: 'Insurance Support',
        paymentOptions: [
          'Cash, Credit & Debit Cards Accepted',
          ' Flexible Payment Plans Available',
          '0% Interest Installments (T&C Apply)'
        ],
        insuranceOptions: [
          'Accepted by select providers',
          'Detailed invoices for claims',
          ' Documentation assistance'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Microdermabrasion in Dubai Today',
        description: 'Refresh your skin, restore your glow, and enjoy healthier-looking skin with expert care at ramacarepolyclinic.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '1,200+ Patients',
            description: 'Successfully Treated'
          },
          {
            title: '4.8/5 Rating',
            description: 'Patient Reviews'
          }
      ]
    }
  },

  'aesthetic-dermatology-dubai-skin-treatment-mesotherapy': {
     hero: {
            subtitle: 'Revitalize Skin & Hair ',
            description: 'Hair thinning, dull skin, pigmentation, and early aging often begin beneath the surface. At Rama Care Polyclinic, we offer Mesotherapy in Dubai to nourish skin and hair at a cellular level, restoring strength, glow, and vitality naturally under medical supervision.',
            rating: '4.9/5 Rating (500+ Reviews)',
            stats: [
              {
                id: 1,
                number: '94%',
                label: 'Patient Satisfaction'
              },
              {
                id: 2,
                number: '2500+',
                label: 'Hair Patients Treated'
              },
              {
                id: 3,
                number: '15+',
                label: 'Years of Experience'
              }
            ],
            ctaButtons: {
              primary: {
                text: 'Book Your Mesotherapy Consultation',
                icon: 'calendar',
                link: '#book-consultation'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 XX XXX XXXX',
                icon: 'whatsapp'
              }
            },
            features: [
              '  DHA-Licensed Multispecialty Polyclinic',
              ' Experienced Doctors & Aesthetic Specialists',
              'Safe, Clinically Approved Mesotherapy Protocols'
            ],
            image: {
          src: '/images/meso.jpg',
          alt: 'Mesotherapy treatment performed by specialists to nourish the skin and promote rejuvenation.'
        },
            medicalNotice: {
              text: 'Safety & Medical Disclaimer: Results may vary based on age, lifestyle, and individual response. All Mesotherapy treatments at Rama Care Polyclinic follow DHA-approved safety and medical protocols.',
              show: true
            }
          },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Skin Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed Ayurvedic doctors specializes in treating chronic and cosmetic skin concerns through holistic, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Mesotherapy in Dubai',
        problemIntro: {
          title: 'The Problem: Why Skin & Hair Issues Persist',
          description: 'Many skin and hair concerns begin below the surface, where topical products cannot reach effectively. Without proper nutrient delivery and circulation, the skin and scalp struggle to repair and regenerate.'
        },
        solutionIntro: {
          title: 'Our Solution: Mesotherapy in Dubai',
          description: 'Our mesotherapy treatment in Dubai targets the root cause of skin and hair concerns by delivering essential nutrients directly into the skin or scalp for faster and more effective results.'
        },
      leftCards: [
  {
    id: 1,
    title: 'What Is Mesotherapy?',
    description:
      'Mesotherapy in Dubai is a minimally invasive treatment that delivers vitamins, minerals, amino acids, and growth-supporting ingredients directly into the skin or scalp. This targeted nourishment improves skin quality and strengthens hair from the root.'
  },
  {
    id: 2,
    title: 'Who Is Mesotherapy For?',
    description: 'Mesotherapy is suitable for individuals experiencing:',
    listItems: [
      'Hair thinning or excessive hair fall',
      'Dull, dehydrated, or tired-looking skin',
      'Fine lines and early aging signs',
      'Pigmentation and uneven skin tone',
      'Weak hair roots and reduced hair density',
      'A professional consultation helps determine whether skin mesotherapy or hair mesotherapy is most suitable'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description:
      'Each session typically takes 30–45 minutes, depending on the area treated. Results improve gradually with multiple sessions.'
  }
],
     rootCauses: [
  {
    id: 1,
    title: 'Nutrient Deficiency at the Cellular Level',
    description:
      'Lack of essential vitamins, minerals, and amino acids leads to dull skin, pigmentation, fine lines, and excessive hair fall.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Poor Blood Circulation',
    description:
      'Reduced circulation limits oxygen supply, resulting in dark circles, uneven skin tone, slow healing, and weak hair follicles.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  },
  {
    id: 3,
    title: 'Collagen Loss & Premature Aging',
    description:
      'With age and environmental exposure, collagen production decreases, causing wrinkles, skin laxity, and loss of firmness.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  },
  {
    id: 4,
    title: 'Hair Thinning & Weak Roots',
    description:
      'Stress, hormonal changes, and nutritional imbalance contribute to hair thinning and reduced hair density.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 5,
    title: 'Environmental & Lifestyle Stress',
    description:
      'Pollution, sun damage, poor diet, and stress accelerate skin aging and scalp damage.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  }
],
     quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical injectable therapy' },
  { label: 'Anesthesia', value: 'Not usually required' },
  { label: 'Downtime', value: 'Minimal' },
  { label: 'Results', value: 'Progressive and natural' }
],
        approachCards: [
  {
    id: 1,
    title: 'Direct Nutrient Infusion',
    description:
      'Mesotherapy delivers a customized blend of vitamins, minerals, amino acids, and growth factors exactly where your skin or hair needs them.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Enhanced Circulation & Oxygen Supply',
    description:
      'Improves blood flow to support healthier skin cells and stronger hair follicles.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Skin Rejuvenation & Anti-Aging Support',
    description:
      'Stimulates collagen and elastin production, improving skin texture, hydration, tone, and elasticity.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Hair Growth & Follicle Strengthening',
    description:
      'Reduces hair fall, strengthens roots, and promotes natural hair regrowth.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Personalized Treatment Approach',
    description:
      'Each mesotherapy in Dubai session is tailored to your specific skin or hair condition for safe, effective, and visible results.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
   healingJourney: {
  title: 'Your Personalized Skin & Hair Rejuvenation Journey',
  description:
    'Our mesotherapy in Dubai treatment follows a safe, structured, and results-driven approach designed to improve skin quality, hair health, and overall appearance. Each stage is carefully planned by experienced medical professionals to ensure comfort, safety, and visible improvement.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Week 1: Initial Consultation & Assessment (60 Minutes)',
      duration: 'Week 1',
      description:
        'Your journey begins with a detailed consultation to determine whether mesotherapy in Dubai is suitable for your skin or hair concerns.',
      keyActivities: [
        'Discussion of treatment goals and expectations',
        'Medical history review and skin or scalp assessment',
        'Evaluation of concerns such as hair fall, pigmentation, dull skin, fine lines, or dark circles',
        'Identification of treatment areas',
        'Creation of a customized mesotherapy treatment plan in Dubai'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Weeks 1–2: Preparation Phase',
      duration: 'Weeks 1–2',
      description:
        'Proper preparation enhances the effectiveness of mesotherapy treatment in Dubai and ensures a smooth treatment experience.',
      keyActivities: [
        'Cleansing and hydration guidance',
        'Temporary avoidance of harsh skincare or hair products',
        'Lifestyle and nutritional recommendations',
        'Pre-treatment safety checks'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Weeks 3–12: Active Mesotherapy Sessions',
      duration: 'Weeks 3–12',
      description:
        'This phase includes regular mesotherapy sessions in Dubai, where a combination of vitamins, minerals, amino acids, and growth-supporting ingredients are delivered directly into the skin or scalp.',
      keyActivities: [
        '1–2 sessions per week, based on condition and treatment area',
        'Micro-injections administered by trained professionals',
        'Improved circulation and nutrient absorption',
        'Support for skin rejuvenation or hair growth',
        'Continuous progress monitoring and plan adjustments'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Months 4–12: Maintenance & Follow-Up Care',
      duration: 'Months 4–12',
      description:
        'Maintenance sessions help support the improvements achieved through mesotherapy in Dubai and maintain healthy skin or hair over time.',
      keyActivities: [
        'Periodic maintenance treatments',
        'Regular skin or scalp assessments',
        'Personalized home-care guidance',
        'Ongoing professional support'
      ],
      side: 'left'
    }
  ]
},

      benefits: {
        title: 'Clinically Observed Benefits',
        description: 'Based on 15+ years of providing skin treatment in Dubai.',
        benefits: [
          {
            id: 1,
            title: ' Reduced hair fall',
            percentage: 91,
            description: null
          },
          {
            id: 2,
            title: 'Stronger hair roots',
            percentage: 88,
            description: null
          },
          {
            id: 3,
            title: '  Improved skin hydration',
            percentage: 95,
            description: null
          },
          {
            id: 4,
            title: ' Brighter complexion',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: 'Better scalp circulation',
            percentage: 93,
            description: null
          },
           {
            id: 6,
            title: ' Healthier skin texture',
            percentage: 93,
            description: null
          }
        ],
        comparisonTitle: 'Mesotherapy vs. Topical Treatments',
        comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Mesotherapy',
          traditional: 'Topical Products'
        },
        comparisonData: [
         {
    feature: 'Depth of Action',
    ayurvedic: 'Works in deeper layers',
    conventional: 'Surface-level'
  },
  {
    feature: 'Nutrient Delivery',
    ayurvedic: 'Direct and targeted',
    conventional: 'Limited absorption'
  },
  {
    feature: 'Hair & Skin Repair',
    ayurvedic: 'Yes',
    conventional: 'Temporary support'
  },
  {
    feature: 'Results',
    ayurvedic: 'Long-term improvement',
    conventional: 'Short-term effect'
  },
  {
    feature: 'Medical Supervision',
    ayurvedic: 'Yes',
    conventional: 'No'
  }
        ]
      },
    pricing: {
  title: 'Transparent Pricing & Treatment Packages',
  description:
    'Customized mesotherapy packages based on your specific skin or hair concerns, treatment goals, and clinical assessment by our doctors.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For mild hair fall or basic skin rejuvenation',
      duration: '6 sessions over 3 months',
      features: [
        'Initial skin or scalp assessment',
        '6 mesotherapy sessions with nutrient-rich injections',
        'Targeted treatment for hair roots or skin hydration',
        'Basic lifestyle and aftercare guidance'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For moderate hair fall, thinning hair, or visible skin concerns',
      duration: '12 sessions over 4 months',
      features: [
        'Comprehensive skin or scalp analysis',
        '12 mesotherapy treatment sessions',
        'Customized vitamin, amino acid, and growth-support formulas',
        'Scalp circulation or skin rejuvenation focus',
        'Diet and lifestyle consultation',
        'Monthly progress monitoring'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete skin or hair rejuvenation program',
      duration: '24 sessions over 6 months',
      features: [
        'All Advanced Package benefits',
        'Intensive mesotherapy treatment protocol',
        'Combination support for hair regrowth or skin repair',
        'Advanced scalp or skin nourishment techniques',
        'Stress management and lifestyle support',
        'Quarterly clinical reviews',
        'Long-term maintenance guidance'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
   faq: {
  title: "Frequently Asked Questions About Mesotherapy in Dubai",
  description: "Mesotherapy Treatment in Dubai",
  faqs: [
    {
      id: 1,
      question: "What is Mesotherapy in Dubai?",
      answer: "Mesotherapy in Dubai is a minimally invasive procedure where vitamins, minerals, and active ingredients are injected into the skin or scalp to improve hydration, hair growth, and overall skin health."
    },
    {
      id: 2,
      question: "Who is a suitable candidate for Mesotherapy?",
      answer: "Mesotherapy is ideal for men and women with hair thinning, hair fall, dull skin, pigmentation, early aging signs, or dehydrated skin, after a professional consultation and personalized assessment."
    },
    {
      id: 3,
      question: "How does Mesotherapy work?",
      answer: "Mesotherapy delivers a customized blend of nutrients into targeted areas to stimulate blood circulation, collagen production, and cell regeneration, resulting in healthier hair, firmer skin, and a rejuvenated appearance."
    },
    {
      id: 4,
      question: "Is Mesotherapy safe?",
      answer: "Yes, Mesotherapy is safe when performed by qualified doctors using sterile techniques, approved formulations, and personalized treatment plans tailored to individual skin or scalp conditions."
    },
    {
      id: 5,
      question: "How many sessions are needed?",
      answer: "Treatment sessions depend on concern severity, but most patients require 6–12 sessions spaced over several weeks to achieve optimal, visible, and long-lasting results for skin or hair."
    },
    {
      id: 6,
      question: "Does Mesotherapy hurt?",
      answer: "Mesotherapy involves mild discomfort only. Fine needles and gentle techniques are used, and numbing creams may be applied to ensure patient comfort during the procedure."
    },
    {
      id: 7,
      question: "What concerns can Mesotherapy treat?",
      answer: "Mesotherapy in Dubai treats hair fall, hair thinning, dandruff, pigmentation, acne scars, dull skin, fine lines, dehydration, and early aging signs with targeted nutrient infusion."
    },
    {
      id: 8,
      question: "How long does a session take?",
      answer: "A typical Mesotherapy session lasts 30–45 minutes, depending on the treatment area, severity of concern, and the customized formulation used for skin or hair rejuvenation."
    },
    {
      id: 9,
      question: "Is there downtime after Mesotherapy?",
      answer: "Downtime is minimal. Patients may notice mild redness, swelling, or tiny bumps at injection sites, which usually subside within a few hours to a day."
    },
    {
      id: 10,
      question: "When will I see results?",
      answer: "Most patients notice gradual improvement after 3–4 sessions. Full benefits, including better hydration, skin texture, and hair growth, are typically visible after the complete treatment course."
    },
    {
      id: 11,
      question: "Can Mesotherapy be combined with other treatments?",
      answer: "Yes, Mesotherapy can be safely combined with PRP, laser treatments, chemical peels, or other skin and hair procedures to enhance results, based on medical guidance and treatment goals."
    },
    {
      id: 12,
      question: "Is Mesotherapy suitable for all skin and hair types?",
      answer: "Yes, Mesotherapy is suitable for most skin and hair types. Formulations are customized for sensitive, oily, dry, or aging skin, as well as different hair textures and conditions."
    },
    {
      id: 13,
      question: "Are the results permanent?",
      answer: "Mesotherapy results are long-lasting but not permanent. Maintenance sessions and a healthy lifestyle help sustain improvements and prevent recurrence of skin or hair issues."
    },
    {
      id: 14,
      question: "What precautions should I follow after Mesotherapy?",
      answer: "After treatment, avoid heavy workouts, direct sun exposure, saunas, and harsh skincare products for 24–48 hours. Use recommended creams and follow your doctor’s post-care instructions."
    },
    {
      id: 15,
      question: "Why choose Rama Care Polyclinic for Mesotherapy in Dubai?",
      answer: "Rama Care Polyclinic offers doctor-led, personalized Mesotherapy in Dubai using safe, approved protocols. Patients receive natural results, comfort, and long-term guidance for skin and hair health."
    }
  ],
         resources: [
         {
            id: 1,
            text: 'Skin Boosters',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-boosters-dubai'
          },
          {
            id: 2,
            text: 'Derma Roller',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/derma-roller-dubai'
          },
          {
            id: 3,
            text: 'Skin Tightening',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/skin-tightening-dubai'
          },
          {
            id: 4,
            text: 'Microdermabrasion',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/microdermabrasion-dubai'
          },
          {
            id: 5,
            text: 'Skin Allergy',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-allergy-dubai'
          },
          {
            id: 6,
            text: 'Botox Hyperhidrosis',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/botox-hyperhidrosis-dubai'
          },
          {
            id: 7,
            text: 'Carboxy Therapy',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/carboxy-therapy-dubai'
          },
          {
            id: 8,
            text: 'Electrolysis',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/electrolysis-dubai'
          },
            {
            id: 9,
            text: 'Fillers',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/fillers-in-dubai'
          },
            {
            id: 10,
            text: 'Facial',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/facial'
          },
            {
            id: 11,
            text: 'HIFU',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hifu-dubai'
          },
            {
            id: 12,
            text: 'Face PRP',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/face-prp-in-dubai'
          },
            {
            id: 13,
            text: 'Botox',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/botox-dubai'
          },
            {
            id: 14,
            text: 'Mesotherapy',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mesotherapy-dubai'
          },
            {
            id: 15,
            text: 'Pigmentation',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/pigmentation-dubai'
          },
             {
            id: 16,
            text: 'Dark Circle',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/dark-circle-dubai'
          }
      ]
      },
    
      paymentInsurance: {
        paymentTitle: 'Payment & Insurance',
        insuranceTitle: 'Insurance Support',
        paymentOptions: [
          'Cash, Credit & Debit Cards Accepted',
          ' Flexible Payment Plans Available',
          '0% Interest Installments (T&C Apply)'
        ],
        insuranceOptions: [
          'Accepted by select providers',
          'Detailed invoices for claims',
          ' Documentation assistance'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Mesotherapy in Dubai Today',
        description: 'Restore your skin’s glow and strengthen your hair naturally with Mesotherapy in Dubai at Rama Care Polyclinic—safe, personalized, and medically guided care.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '1,200+ Patients',
            description: 'Successfully Treated'
          },
          {
            title: '4.8/5 Rating',
            description: 'Patient Reviews'
          }
      ]
    }
  },
  'aesthetic-dermatology-dubai-skin-treatment-skin-allergy': {
     hero: {
            subtitle: 'Expert Care for Itching, Rashes & Sensitive Skin Relief',
            description: 'Skin allergies can cause itching, redness, rashes, and discomfort, which can significantly impact daily life. At ramacarepolyclinic, we provide medically guided Skin Allergy Treatment in Dubai to identify triggers, control symptoms, and protect long-term skin health safely and effectively.',
            rating: '4.9/5 Rating (500+ Reviews)',
            stats: [
              {
                id: 1,
                number: '94%',
                label: 'Patient Satisfaction'
              },
              {
                id: 2,
                number: '2500+',
                label: 'Hair Patients Treated'
              },
              {
                id: 3,
                number: '15+',
                label: 'Years of Experience'
              }
            ],
            ctaButtons: {
              primary: {
                text: 'Book Free Consultation',
                icon: 'calendar',
                link: '#book-consultation'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 XX XXX XXXX',
                icon: 'whatsapp'
              }
            },
            features: [
              ' DHA-Licensed Multispecialty Polyclinic',
              ' Experienced Internal Medicine & Skin Specialists',
              'Comprehensive Skin Allergy Treatment in Dubai'
            ],
            image: {
          src: '/images/skin-allergy.jpg',
          alt: 'Skin allergy treatment in Dubai provided by specialists to relieve irritation and restore healthy skin.'
        },
            medicalNotice: {
              text: 'Safety & Medical Disclaimer: Results may vary depending on the type, severity, and adherence to the allergy. All Skin Allergy Treatment in Dubai at ramacarepolyclinic follows DHA-approved medical protocols and safety standards.',
              show: true
            }
          },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Skin Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed Ayurvedic doctors specializes in treating chronic and cosmetic skin concerns through holistic, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Skin Allergy Treatment',
        problemIntro: {
          title: 'The Problem: Skin Allergies & Sensitivity',
          description: 'Many people live with ongoing skin allergies without knowing the exact cause.'
        },
        solutionIntro: {
  title: 'Our Solution: Skin Allergy Treatment in Dubai',
  description:
    'Our Skin Allergy Treatment in Dubai focuses on identifying triggers and providing long-term relief rather than temporary suppression.'
},
       leftCards: [
  {
    id: 1,
    title: 'What Is a Skin Allergy?',
    description:
      'Skin allergy occurs when the immune system reacts to certain substances like food, cosmetics, dust, metals, medications, or environmental factors. This reaction can cause rashes, itching, swelling, or dryness.'
  },
  {
    id: 2,
    title: 'Who Needs Skin Allergy Treatment?',
    description: 'Skin Allergy Treatment in Dubai is recommended for individuals experiencing:',
    listItems: [
      'Persistent itching or redness',
      'Recurrent skin rashes or hives',
      'Dry, inflamed, or peeling skin',
      'Sudden skin reactions to products or foods',
      'Allergy flare-ups due to weather or stress',
      'Early diagnosis helps prevent chronic skin issues'
    ]
  },
  {
    id: 3,
    title: 'Trusted Skin Allergy Care You Can Depend On',
    listItems: [
      'Accurate diagnosis of skin allergies',
      'Personalized allergy treatment plans',
      'Safe medications and skin care guidance',
      'Adult and elderly-friendly care',
      'Long-term allergy management support'
    ]
  }
],
      rootCauses: [
  {
    id: 1,
    title: 'Recurring Rashes & Itching',
    description:
      'Allergic reactions often cause redness, itching, hives, and rashes that disturb daily comfort and sleep.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Dry, Inflamed Skin',
    description:
      'Skin allergies can lead to dryness, scaling, swelling, and a burning sensation.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  },
  {
    id: 3,
    title: 'Environmental & Food Triggers',
    description:
      'Dust, pollution, cosmetics, certain foods, and weather changes can trigger allergic flare-ups.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  },
  {
    id: 4,
    title: 'Stress & Immune Imbalance',
    description:
      'Stress weakens the immune response, increasing the frequency and severity of skin allergies.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'      
  }
],
        quickFacts: [
          { label: 'Treatment Type', value: 'Non-invasive' },
          { label: 'Anesthesia', value: 'Not required' },
          { label: 'Recovery Time', value: 'Immediate' },
          { label: 'Side Effects', value: 'Minimal to none' }
        ],
       approachCards: [
  {
    id: 1,
    title: 'Accurate Diagnosis & Allergy Testing',
    description:
      'Identifies the root cause of allergic reactions to prevent repeated flare-ups.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Personalized Medical Treatment',
    description:
      'Customized treatment plans reduce inflammation, itching, and redness safely and effectively.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Skin Barrier Repair',
    description:
      'Therapies strengthen the skin’s natural barrier, improving hydration and resilience.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Lifestyle & Trigger Management',
    description:
      'Guidance on skincare routines, diet, and environmental control to minimize allergic reactions.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Long-Term Relief & Prevention',
    description:
      'Helps control symptoms, prevents recurrence, and restores healthy, comfortable skin.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
     healingJourney: {
  title: 'Your Path to Relief: Step-by-Step Care',
  description:
    'Our skin allergy treatment in Dubai follows a structured and transparent approach to identify triggers, relieve symptoms, and support long-term skin health. Each stage is carefully planned by experienced dermatology professionals to ensure safe, effective, and personalized care.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Week 1: Initial Skin Allergy Consultation (60 Minutes)',
      duration: 'Week 1',
      description:
        'Your treatment journey begins with a comprehensive consultation to understand the cause, severity, and pattern of your skin allergy.',
      keyActivities: [
        'Detailed medical and allergy history review',
        'Assessment of current symptoms and flare-ups',
        'Skin examination to identify allergic reactions',
        'Evaluation of lifestyle, diet, and environmental triggers',
        'Creation of a personalized skin allergy treatment plan in Dubai'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Weeks 1–2: Allergy Identification & Skin Calming Phase',
      duration: 'Weeks 1–2',
      description:
        'This phase focuses on calming active allergic reactions and identifying possible allergens responsible for skin sensitivity.',
      keyActivities: [
        'Trigger identification and avoidance guidance',
        'Soothing topical treatments or medications (if required)',
        'Gentle skincare routine recommendations',
        'Dietary and lifestyle modifications to reduce flare-ups'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Weeks 3–12: Active Skin Allergy Treatment Phase',
      duration: 'Weeks 3–12',
      description:
        'During this stage, active skin allergy treatment in Dubai is provided to control itching, redness, and recurring reactions.',
      keyActivities: [
        'Regular follow-up sessions based on condition severity',
        'Prescription or non-prescription therapies as advised',
        'Monitoring of symptom improvement',
        'Adjustments to treatment and skincare plans',
        'Patient education on flare-up prevention'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Months 4–12: Maintenance & Follow-Up Care',
      duration: 'Months 4–12',
      description:
        'The maintenance phase focuses on preventing recurrence and maintaining healthy, balanced skin.',
      keyActivities: [
        'Periodic dermatology check-ups',
        'Long-term skincare and allergy-management guidance',
        'Seasonal care recommendations',
        'Ongoing professional support'
      ],
      side: 'left'
    }
  ]
},

      benefits: {
        title: 'Clinically Observed Benefits',
        description: 'Based on 15+ years of providing skin treatment in Dubai.',
        benefits: [
          {
            id: 1,
            title: 'Reduced itching and redness',
            percentage: 91,
            description: null
          },
          {
            id: 2,
            title: ' Faster skin healing',
            percentage: 88,
            description: null
          },
          {
            id: 3,
            title: ' Fewer allergy flare-ups',
            percentage: 95,
            description: 'Enhanced skin moisture and suppleness'
          },
          {
            id: 4,
            title: ' Improved skin comfort',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: ' Better quality of life',
            percentage: 93,
            description: null
          }
        ],
        comparisonTitle: 'Skin Allergy Treatment vs. Self-Medication',
        comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Skin Allergy Treatment in Dubai',
          traditional: 'Self-Medication'
        },
        comparisonData: [
          {
            feature: 'Diagnosis	',
            ayurvedic: 'Medical evaluation',
            conventional: 'Guess-based'
          },
          {
            feature: 'Treatment',
            ayurvedic: 'Targeted and safe',
            conventional: 'Temporary relie'
          },
          {
            feature: 'Side Effects',
            ayurvedic: 'Monitored and minimal',
            conventional: 'Higher risk'
          },
          {
            feature: 'Long-Term Control',
            ayurvedic: 'Yes',
            conventional: 'No'
          },
          {
            feature: 'Trigger Identification',
            ayurvedic: 'Yes',
            conventional: 'No'
          },
          {
            feature: 'Safety',
            ayurvedic: 'Doctor-guided',
            conventional: 'Uncontrolled use'
          }
        ]
      },
    pricing: {
  title: 'Transparent Pricing & Customized Treatment Packages',
  description:
    'Our Skin Allergy treatment in Dubai is carefully customized based on your allergy type, skin sensitivity, triggers, and overall health condition. Each plan is doctor-supervised to ensure safe relief, long-term control, and healthier skin recovery.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'Best for mild skin allergies & first-time symptoms',
      duration: 'Initial consultation + short-term care plan',
      features: [
        'Detailed skin examination by a general physician/dermatologist',
        'Allergy history review and trigger identification',
        'Basic allergy management plan',
        'Prescription medications (if required)',
        'Skincare and lifestyle guidance to reduce flare-ups'
      ],
      pricing: 'Starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'Ideal for recurrent rashes, itching & chronic skin allergies',
      duration: 'Follow-up care over 1–2 months',
      features: [
        'Comprehensive skin allergy assessment',
        'Identification of possible allergens (environmental, food, contact)',
        'Customized treatment plan for symptom control',
        'Anti-allergy medications and topical care',
        'Diet and daily routine recommendations',
        'Regular progress monitoring'
      ],
      pricing: 'Starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete skin allergy management & long-term prevention',
      duration: 'Extended care over 3–6 months',
      features: [
        'All Advanced Package benefits',
        'Detailed evaluation for chronic or recurring skin allergies',
        'Long-term allergy control plan',
        'Immune-supportive care and preventive guidance',
        'Stress and lifestyle impact management',
        'Periodic skin health reviews',
        'Ongoing medical support to prevent recurrence'
      ],
      pricing: 'Starts from AED XXX',
      isPopular: false
    }
  ]
},
    faq: {
  title: "Frequently Asked Questions About Skin Allergy Treatment in Dubai",
  description: "Skin Allergy Treatment in Dubai",
  faqs: [
    {
      id: 1,
      question: "What is Skin Allergy Treatment in Dubai?",
      answer: "Skin Allergy Treatment in Dubai focuses on identifying allergy triggers and providing medical treatment to relieve itching, redness, rashes, and prevent recurring skin reactions safely and effectively in the long term."
    },
    {
      id: 2,
      question: "Who should consider Skin Allergy Treatment in Dubai?",
      answer: "Skin Allergy Treatment in Dubai is suitable for individuals experiencing frequent itching rashes, hives, dryness, or sudden skin reactions caused by food, cosmetics, dust, medications, or environmental allergens."
    },
    {
      id: 3,
      question: "How is Skin Allergy Treatment in Dubai diagnosed?",
      answer: "Skin Allergy Treatment in Dubai begins with a detailed medical history, skin examination, and diagnostic tests if needed to identify triggers and ensure accurate, safe, and targeted treatment planning."
    },
    {
      id: 4,
      question: "Is Skin Allergy Treatment in Dubai safe?",
      answer: "Yes, Skin Allergy Treatment in Dubai is safe when managed by qualified doctors using DHA-approved protocols, prescribed medications, and monitored care to minimize side effects and complications."
    },
    {
      id: 5,
      question: "Can Skin Allergy Treatment in Dubai cure allergies permanently?",
      answer: "Skin Allergy Treatment in Dubai helps control symptoms and prevent flare-ups, though some allergies are chronic. Proper management reduces frequency and severity and improves long-term skin comfort."
    },
    {
      id: 6,
      question: "How long does Skin Allergy Treatment in Dubai take?",
      answer: "The duration of Skin Allergy Treatment in Dubai depends on allergy type, severity, and response to treatment, with some patients improving quickly while others need ongoing management support."
    },
    {
      id: 7,
      question: "Does Skin Allergy Treatment in Dubai require hospital admission?",
      answer: "Skin Allergy Treatment in Dubai is usually outpatient-based, and most cases are managed through consultations, medications, and follow-ups without requiring hospital admission or extended medical stays."
    },
    {
      id: 8,
      question: "Can Skin Allergy Treatment in Dubai help chronic itching?",
      answer: "Yes, Skin Allergy Treatment in Dubai is effective for chronic itching by addressing underlying causes, calming inflammation, and providing skin care guidance to reduce repeated irritation."
    },
    {
      id: 9,
      question: "Are lifestyle changes part of Skin Allergy Treatment in Dubai?",
      answer: "Skin Allergy Treatment in Dubai includes lifestyle and skincare guidance such as avoiding triggers, choosing gentle products, managing stress, and maintaining healthy routines for long term relief."
    },
    {
      id: 10,
      question: "Is Skin Allergy Treatment in Dubai suitable for sensitive skin?",
      answer: "Skin Allergy Treatment in Dubai is suitable for sensitive skin as treatment plans are customized using mild medications and safe topical solutions under medical supervision."
    },
    {
      id: 11,
      question: "Can children and elderly patients get Skin Allergy Treatment in Dubai?",
      answer: "Skin Allergy Treatment in Dubai is safe for adults and elderly patients. Treatment plans are adjusted carefully to age, health condition, and allergy severity for optimal safety."
    },
    {
      id: 12,
      question: "Does Skin Allergy Treatment in Dubai prevent future flare-ups?",
      answer: "Skin Allergy Treatment in Dubai helps prevent future flare-ups by identifying triggers, providing preventive guidance, and monitoring skin response through regular medical follow-ups."
    },
    {
      id: 13,
      question: "Can Skin Allergy Treatment in Dubai be combined with dermatology care?",
      answer: "Skin Allergy Treatment in Dubai can be combined with dermatology services to manage associated skin conditions like eczema, infections, or pigmentation issues safely and effectively."
    },
    {
      id: 14,
      question: "When should I see a doctor for Skin Allergy Treatment in Dubai?",
      answer: "You should seek Skin Allergy Treatment in Dubai if skin reactions persist, worsen, recur frequently, or interfere with daily comfort, sleep, confidence, or quality of life."
    },
    {
      id: 15,
      question: "Where can I get Skin Allergy Treatment in Dubai?",
      answer: "You can receive Skin Allergy Treatment in Dubai at ramacarepolyclinic where experienced doctors provide accurate diagnosis, personalized care, and long term allergy management support."
    }
  ],
         resources: [
         {
            id: 1,
            text: 'Skin Boosters',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-boosters-dubai'
          },
          {
            id: 2,
            text: 'Derma Roller',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/derma-roller-dubai'
          },
          {
            id: 3,
            text: 'Skin Tightening',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/skin-tightening-dubai'
          },
          {
            id: 4,
            text: 'Microdermabrasion',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/microdermabrasion-dubai'
          },
          {
            id: 5,
            text: 'Skin Allergy',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-allergy-dubai'
          },
          {
            id: 6,
            text: 'Botox Hyperhidrosis',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/botox-hyperhidrosis-dubai'
          },
          {
            id: 7,
            text: 'Carboxy Therapy',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/carboxy-therapy-dubai'
          },
          {
            id: 8,
            text: 'Electrolysis',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/electrolysis-dubai'
          },
            {
            id: 9,
            text: 'Fillers',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/fillers-in-dubai'
          },
            {
            id: 10,
            text: 'Facial',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/facial'
          },
            {
            id: 11,
            text: 'HIFU',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hifu-dubai'
          },
            {
            id: 12,
            text: 'Face PRP',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/face-prp-in-dubai'
          },
            {
            id: 13,
            text: 'Botox',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/botox-dubai'
          },
            {
            id: 14,
            text: 'Mesotherapy',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mesotherapy-dubai'
          },
            {
            id: 15,
            text: 'Pigmentation',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/pigmentation-dubai'
          },
             {
            id: 16,
            text: 'Dark Circle',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/dark-circle-dubai'
          }
      ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
        subtitle: 'Verified testimonials from patients who achieved healthy, radiant skin',
        stats: [
          {
            id: 1,
            number: '4.8/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.8
          },
          {
            id: 2,
            number: '1,200+',
            label1: 'Patients Treated',
            label2: 'Success Stories',
            target: 1200
          },
          {
            id: 3,
            number: '96%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 96
          },
          {
            id: 4,
            number: '15+',
            label1: 'Years Experience',
            label2: 'In Dubai',
            target: 15
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment & Insurance',
        insuranceTitle: 'Insurance Support',
        paymentOptions: [
          'Cash, Credit & Debit Cards Accepted',
          ' Flexible Payment Plans Available',
          '0% Interest Installments (T&C Apply)'
        ],
        insuranceOptions: [
          'Accepted by select providers',
          'Detailed invoices for claims',
          ' Documentation assistance'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Skin Allergy Treatment in Dubai Today',
        description: 'Get relief from itching, rashes, and recurring skin allergies with trusted medical care at ramacarepolyclinic.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '1,200+ Patients',
            description: 'Successfully Treated'
          },
          {
            title: '4.8/5 Rating',
            description: 'Patient Reviews'
          }
      ]
    }
  },

 'aesthetic-dermatology-dubai-skin-treatment-botox-hyperhidrosis': {
        hero: {
            subtitle: 'Effective, Safe, and Clinically Proven Treatment',
            description: 'Excessive sweating (hyperhidrosis) can affect daily life, confidence, and comfort. At Rama Care Polyclinic, we offer Botox Hyperhidrosis treatment in Dubai to reduce sweat in the underarms, palms, or feet safely and effectively.',
            rating: '4.9/5 Rating (500+ Reviews)',
            stats: [
              {
                id: 1,
                number: '94%',
                label: 'Patient Satisfaction'
              },
              {
                id: 2,
                number: '2500+',
                label: 'Hair Patients Treated'
              },
              {
                id: 3,
                number: '15+',
                label: 'Years of Experience'
              }
            ],
            ctaButtons: {
              primary: {
                text: 'Book Your Botox Hyperhidrosis Consultation',
                icon: 'calendar',
                link: '#book-consultation'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 XX XXX XXXX',
                icon: 'whatsapp'
              }
            },
            features: [
              ' DHA-Licensed Multispecialty Polyclinic',
              'Experienced Doctors & Certified Botox Specialists',
              'Advanced, Minimally Invasive Procedure'
            ],
            image: {
          src: '/images/botox-hyper.jpg',
          alt: 'Botox hyperhidrosis treatment in Dubai performed by specialists to reduce excessive sweating safely and effectively.'
        },
            medicalNotice: {
              text: 'Safety & Medical Disclaimer: Results vary depending on sweat severity, area treated, and individual response. All procedures are performed at DHA-licensed clinics using approved Botox formulations and protocols.',
              show: true
            }
          },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Skin Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed Ayurvedic doctors specializes in treating chronic and cosmetic skin concerns through holistic, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Botox Hyperhidrosis in Dubai',
        problemIntro: {
          title: 'The Problem: Excessive Sweating (Hyperhidrosis)',
          description: ' Excessive sweating can interfere with daily life, work, and social activities. Many patients delay treatment due to misconceptions about injections or fear of side effects.'
        },
        solutionIntro: {
  title: 'Our Solution: Botox Hyperhidrosis in Dubai',
  description:
    'Our Botox Hyperhidrosis in Dubai offers a safe, FDA-approved, and highly effective treatment for excessive sweating.'
},
       leftCards: [
  {
    id: 1,
    title: 'What Is Botox Hyperhidrosis?',
    description: 'Botox Hyperhidrosis is a non-surgical treatment that uses botulinum toxin injections to block overactive sweat glands. It effectively reduces excessive sweating in targeted areas without affecting normal body functions.'
  },
  {
    id: 2,
    title: 'Who Needs Botox Hyperhidrosis?',
    description: 'This treatment is suitable for individuals experiencing:',
    listItems: [
      'Excessive underarm sweating',
      'Sweaty palms or feet',
      'Embarrassment or social anxiety due to sweating',
      'Inadequate results from antiperspirants or medications'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description: 'Treatment typically takes 30–60 minutes. Results start showing within 2–5 days, lasting up to 6–8 months depending on individual response.'
  }
],
      rootCauses: [
  {
    id: 1,
    title: 'Excessive Underarm Sweating',
    description:
      'Uncontrolled sweating occurs even without heat or physical activity, causing discomfort, odor, and embarrassment.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Palms & Feet Sweating',
    description:
      'Sweaty hands and feet interfere with daily activities, social interactions, and work confidence.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  },
  {
    id: 3,
    title: 'Clothing Stains & Skin Irritation',
    description:
      'Constant moisture leads to visible sweat marks, rashes, and recurring skin infections.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  },
  {
    id: 4,
    title: 'Stress-Triggered Sweating',   
    description:
      'Anxiety and stress further activate sweat glands, worsening hyperhidrosis symptoms.',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  }
],
        quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical Botox injection' },
  { label: 'Anesthesia', value: 'Optional topical numbing' },
  { label: 'Downtime', value: 'Minimal to none' },
  { label: 'Results', value: 'Gradual, long-lasting sweat reduction' }
],
      approachCards: [
  {
    id: 1,
    title: 'Blocks Sweat Gland Activity',
    description:
      'Botox temporarily stops nerve signals that activate sweat glands, significantly reducing sweating.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Quick & Minimally Invasive',
    description:
      'Simple injection procedure with minimal discomfort and no downtime.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Long-Lasting Sweat Control',
    description:
      'Results typically last 6–9 months, keeping treated areas dry and comfortable.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Effective for Multiple Areas',
    description:
      'Ideal for underarms, palms, soles, and forehead sweating.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Improves Confidence & Comfort',
    description:
      'Eliminates sweat-related anxiety, odor, and skin irritation for a better quality of life.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
      healingJourney: {
        title: 'Your Skin Healing Journey: Step by Step',
        description: 'A transparent, structured approach to deliver safe and lasting skin improvement.',
       steps: [
  {
    id: 1,
    number: '01',
    title: 'Step 1 – Consultation & Assessment',
    duration: null,
    description: null,
    keyActivities: [
      'Evaluate sweating areas and severity',
      'Medical history and contraindication check',
      'Personalized treatment plan'
    ],
    side: 'right'
  },
  {
    id: 2,
    number: '02',
    title: 'Step 2 – Preparation',
    duration: null,
    description: null,
    keyActivities: [
      'Clean and mark target areas',
      'Apply topical numbing cream if needed'
    ],
    side: 'left'
  },
  {
    id: 3,
    number: '03',
    title: 'Step 3 – Botox Injection',
    duration: null,
    description: null,
    keyActivities: [
      'Precise injection into sweat glands',
      'Targeted treatment to reduce overactivity',
      'Procedure duration: 20–40 minutes'
    ],
    side: 'right'
  },
  {
    id: 4,
    number: '04',
    title: 'Step 4 – Post-Treatment Care',
    duration: null,
    description: null,
    keyActivities: [
      'Avoid strenuous activity for 24 hours',
      'Follow specific skin care instructions',
      'Schedule follow-up for assessment and maintenance'
    ],
    side: 'left'
  },
  {
    id: 5,
    number: '05',
    title: 'Result:',
    duration: null,
    description: ' Long-lasting sweat reduction, minimal discomfort, and renewed confidence in daily and social activities',
    keyActivities: [],
    side: 'right'
  }
]
      },
      benefits: {
        title: 'Clinically Observed Benefits',
        description: 'Based on 15+ years of providing skin treatment in Dubai.',
        benefits: [
          {
            id: 1,
            title: ' Significant reduction of underarm, palm, and foot sweating',
            percentage: 91,
            description: null
          },
          {
            id: 2,
            title: ' Minimal downtime and fast procedure ',
            percentage: 88,
            description: null
          },
          {
            id: 3,
            title: 'Improved Hydration',
            percentage: 95,
            description: 'Safe, effective, and FDA-approved'
          },
          {
            id: 4,
            title: 'Improved quality of life and confidence',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: 'Non-surgical and minimally invasive',
            percentage: 93,
            description: null
          },
        
        ],
        comparisonTitle: 'Botox Hyperhidrosis vs. Conventional Sweat Control',
        comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Botox Hyperhidrosis Treatment',
          traditional: 'Conventional Sweat Control'
        },
        comparisonData: [
          {
    feature: 'Approach',
    ayurvedic:
      'Targets sweat glands directly by blocking nerve signals using Botox hyperhidrosis injections',
    conventional:
      'Manages symptoms with antiperspirants or medications'
  },
  {
    feature: 'Ingredients',
    ayurvedic:
      'Medical-grade botulinum toxin used in Botox hyperhidrosis',
    conventional:
      'Chemical-based antiperspirants or oral drugs'
  },
  {
    feature: 'Side Effects',
    ayurvedic:
      'Minimal and temporary when administered by trained professionals',
    conventional:
      'Possible skin irritation, rashes, or systemic side effects'
  },
  {
    feature: 'Results',
    ayurvedic:
      'Effective sweat reduction lasting 4–6 months',
    conventional:
      'Short-term relief requiring daily or frequent use'
  },
  {
    feature: 'Treatment Scope',
    ayurvedic:
      'Suitable for underarms, palms, soles, and face',
    conventional:
      'Mostly limited to underarm application'
  },
  {
    feature: 'Long-Term Management',
    ayurvedic:
      'Periodic sessions of Botox hyperhidrosis maintain dryness and comfort',
    conventional:
      'Ongoing daily dependency with inconsistent results'
  }
        ]
      },
  pricing: {
  title: 'Transparent Pricing & Treatment Packages',
  description:
    'Customized packages for safe, effective, and visible skin brightening based on your skin tone, concern, and treatment goals using laser bleaching in Dubai.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For mild pigmentation & uneven skin tone',
      duration: '4 sessions over 2 months',
      features: [
        'Detailed skin assessment & pigmentation analysis',
        '4 laser bleaching sessions',
        'Gentle exfoliation & skin preparation',
        'Soothing post-laser care',
        'Home care guidance for skin protection'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For moderate pigmentation & tanning correction',
      duration: '6 sessions over 3 months',
      features: [
        'Comprehensive skin evaluation',
        '6 advanced laser bleaching sessions',
        'Targeted treatment for dark patches',
        'Medical-grade calming masks',
        'Personalized skincare routine',
        'Monthly progress monitoring'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete skin brightening & tone correction program',
      duration: '10 sessions over 5 months',
      features: [
        'All Advanced Package benefits',
        'Combination laser techniques for deeper pigmentation',
        'Specialized brightening & rejuvenation therapies',
        'Long-term pigmentation prevention plan',
        'Quarterly skin reviews',
        'Ongoing dermatology support'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
   faq: {
  title: 'Frequently Asked Questions (FAQs) – Botox Hyperhidrosis in Dubai',
  description: null,
  faqs: [
    {
      id: 1,
      question: 'What is Botox Hyperhidrosis in Dubai?',
      answer:
        'Botox Hyperhidrosis uses targeted botulinum toxin injections to block overactive sweat glands, reducing excessive underarm, palm, or foot sweating safely and effectively.'
    },
    {
      id: 2,
      question: 'How long does the treatment take?',
      answer:
        'A typical Botox Hyperhidrosis session takes 30–60 minutes, including preparation and injections, allowing patients to resume daily activities immediately after treatment.'
    },
    {
      id: 3,
      question: 'Is Botox Hyperhidrosis painful?',
      answer:
        'Most patients feel mild pinprick sensations. Topical numbing cream is applied for comfort, making the procedure virtually painless.'
    },
    {
      id: 4,
      question: 'How soon will I see results?',
      answer:
        'Sweat reduction typically starts within 2–5 days, with maximum effect visible around 1–2 weeks post-treatment.'
    },
    {
      id: 5,
      question: 'How long do results last?',
      answer:
        'Results last 6–8 months on average. Follow-up sessions maintain long-term sweat reduction and comfort.'
    },
    {
      id: 6,
      question: 'Are there side effects?',
      answer:
        'Side effects are minimal and may include temporary redness or mild swelling at injection sites. Serious side effects are extremely rare.'
    },
    {
      id: 7,
      question: 'Who is an ideal candidate?',
      answer:
        'Individuals suffering from excessive underarm, palm, or foot sweating, experiencing social or daily discomfort, and seeking a non-surgical solution.'
    },
    {
      id: 8,
      question: 'Can Botox for hyperhidrosis be done on multiple areas?',
      answer:
        'Yes, treatment can target underarms, palms, and feet based on severity and patient needs, all under professional supervision.'
    },
    {
      id: 9,
      question: 'Will Botox affect normal sweating?',
      answer:
        'Botox specifically targets overactive sweat glands while preserving normal perspiration elsewhere in the body.'
    },
    {
      id: 10,
      question: 'Is anesthesia required?',
      answer:
        'Usually, only a topical numbing cream is applied. General anesthesia is not needed.'
    },
    {
      id: 11,
      question: 'How many sessions are needed?',
      answer:
        'Most patients achieve results with a single session. Follow-ups are scheduled as needed to maintain effectiveness.'
    },
    {
      id: 12,
      question: 'Can Botox for hyperhidrosis be combined with other treatments?',
      answer:
        'Yes, it can be combined with cosmetic or dermatological treatments if recommended by your doctor.'
    },
    {
      id: 13,
      question: 'Is the procedure safe for all ages?',
      answer:
        'It is safe for adults. Children or teenagers require special medical consultation.'
    },
    {
      id: 14,
      question: 'How much does Botox Hyperhidrosis cost in Dubai?',
      answer:
        'Pricing depends on the treated area and severity. Rama Care Polyclinic provides transparent costs without hidden charges.'
    },
    {
      id: 15,
      question: 'Why choose Rama Care Polyclinic for Botox Hyperhidrosis in Dubai?',
      answer:
        'We offer DHA-licensed doctors, certified Botox specialists, personalized care, advanced protocols, and proven, safe, long-lasting results.'
    }
  ],
        resources: [
           {
            id: 1,
            text: 'Skin Boosters',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-boosters-dubai'
          },
          {
            id: 2,
            text: 'Derma Roller',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/derma-roller-dubai'
          },
          {
            id: 3,
            text: 'Skin Tightening',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/skin-tightening-dubai'
          },
          {
            id: 4,
            text: 'Microdermabrasion',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/microdermabrasion-dubai'
          },
          {
            id: 5,
            text: 'Skin Allergy',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-allergy-dubai'
          },
          {
            id: 6,
            text: 'Botox Hyperhidrosis',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/botox-hyperhidrosis-dubai'
          },
          {
            id: 7,
            text: 'Carboxy Therapy',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/carboxy-therapy-dubai'
          },
          {
            id: 8,
            text: 'Electrolysis',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/electrolysis-dubai'
          },
            {
            id: 9,
            text: 'Fillers',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/fillers-in-dubai'
          },
            {
            id: 10,
            text: 'Facial',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/facial'
          },
            {
            id: 11,
            text: 'HIFU',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hifu-dubai'
          },
            {
            id: 12,
            text: 'Face PRP',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/face-prp-in-dubai'
          },
            {
            id: 13,
            text: 'Botox',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/botox-dubai'
          },
            {
            id: 14,
            text: 'Mesotherapy',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mesotherapy-dubai'
          },
            {
            id: 15,
            text: 'Pigmentation',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/pigmentation-dubai'
          },
             {
            id: 16,
            text: 'Dark Circle',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/dark-circle-dubai'
          }
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
        subtitle: 'Verified testimonials from patients who achieved healthy, radiant skin',
        stats: [
          {
            id: 1,
            number: '4.8/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.8
          },
          {
            id: 2,
            number: '1,200+',
            label1: 'Patients Treated',
            label2: 'Success Stories',
            target: 1200
          },
          {
            id: 3,
            number: '96%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 96
          },
          {
            id: 4,
            number: '15+',
            label1: 'Years Experience',
            label2: 'In Dubai',
            target: 15
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment & Insurance',
        insuranceTitle: 'Insurance Support',
        paymentOptions: [
          'Cash, Credit & Debit Cards Accepted',
          ' Flexible Payment Plans Available',
          '0% Interest Installments (T&C Apply)'
        ],
        insuranceOptions: [
          'Accepted by select providers',
          'Detailed invoices for claims',
          ' Documentation assistance'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Your Free Skin Consultation Today',
        description: 'Take the first step towards healthy, radiant skin. Our DHA-licensed dermatologists are ready to help you achieve your skin goals.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '1,200+ Patients',
            description: 'Successfully Treated'
          },
          {
            title: '4.8/5 Rating',
            description: 'Patient Reviews'
          }
      ]
    }
  },

  'aesthetic-dermatology-dubai-skin-treatment-carboxy-therapy': {
     hero: {
            subtitle: 'Advanced Skin & Body Rejuvenation with Medical Precision',
            description: 'Dull skin, dark circles, stretch marks, and uneven texture can affect confidence. At ramacarepolyclinic, we offer medically supervised Carboxy Therapy in Dubai to improve skin oxygenation, boost circulation, and support natural collagen production for healthier, refreshed skin.',
            rating: '4.9/5 Rating (500+ Reviews)',
            stats: [
              {
                id: 1,
                number: '94%',
                label: 'Patient Satisfaction'
              },
              {
                id: 2,
                number: '2500+',
                label: 'Hair Patients Treated'
              },
              {
                id: 3,
                number: '15+',
                label: 'Years of Experience'
              }
            ],
            ctaButtons: {
              primary: {
                text: 'Book Free Consultation',
                icon: 'calendar',
                link: '#book-consultation'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 XX XXX XXXX',
                icon: 'whatsapp'
              }
            },
            features: [
              'DHA-Licensed Aesthetic Clinic',
              ' Experienced Medical Aesthetic Specialists',
              'Safe & Effective Carboxy Therapy in Dubai'
            ],
            image: {
          src: '/images/carboxy.jpg',
          alt: 'Carboxy therapy in Dubai performed by specialists to improve skin texture, circulation, and overall rejuvenation'
        },
            medicalNotice: {
              text: 'Safety & Medical Disclaimer: Results may vary depending on skin condition and treatment plan. All Carboxy Therapy in Dubai at ramacarepolyclinic follows DHA-approved medical protocols and safety standards.',
              show: true
            }
          },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Skin Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed Ayurvedic doctors specializes in treating chronic and cosmetic skin concerns through holistic, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Carboxy Therapy',
        problemIntro: {
          title: 'The Problem: Skin & Body Concerns',
          description: 'Many patients seek visible improvement without surgery or downtime.'
        },
        solutionIntro: {
  title: 'Our Solution: Carboxy Therapy in Dubai',
  description:
    'Our Carboxy Therapy in Dubai is a non-surgical treatment that uses controlled carbon dioxide infusion to improve circulation and skin rejuvenation.'
},
       leftCards: [
  {
    id: 1,
    title: 'What Is Carboxy Therapy?',
    description:
      'Carboxy Therapy is a non-surgical aesthetic treatment that uses controlled medical carbon dioxide to increase blood flow, improve oxygen supply, and stimulate collagen, helping skin repair and rejuvenate naturally.'
  },
  {
    id: 2,
    title: 'Who Is Carboxy Therapy Suitable For?',
    description: 'Carboxy Therapy in Dubai is recommended for individuals with:',
    listItems: [
      'Dark circles under the eyes',
      'Dull or tired-looking skin',
      'Stretch marks or scars',
      'Uneven skin tone',
      'Early signs of aging',
      'It can be used alone or as part of a combination skin program'
    ]
  },
  {
    id: 3,
    title: 'Trusted Carboxy Therapy Care You Can Depend On',
    description: '',
    listItems: [
      'Doctor-led treatment approach',
      'Medical-grade carbon dioxide delivery',
      'Personalized treatment planning',
      'Suitable for face and body areas',
      'Strict safety and hygiene protocols'
    ]
  }
],
      rootCauses: [
  {
    id: 1,
    title: 'Boosts Blood Circulation',
    description:
      'Increases oxygen flow to treated areas, promoting healthier, brighter, and more youthful skin.',
    severity: null,
    severityColor: null
  },
  {
    id: 2,
    title: 'Reduces Cellulite & Fat',
    description:
      'Helps break down fat cells and smooth uneven skin texture for a firmer appearance.',
    severity: null,
    severityColor: null
  },
  {
    id: 3,
    title: 'Treats Dark Circles',
    description:
      'Improves under-eye circulation, reducing pigmentation and puffiness naturally.',
    severity: null,
    severityColor: null
  },
  {
    id: 4,
    title: 'Stimulates Collagen Production',
    description:
      'Enhances skin elasticity, reduces stretch marks, and improves overall firmness.',
    severity: null,
    severityColor: null
  },
  {
    id: 5,
    title: 'Safe & Effective Results',
    description:
      'Minimally invasive with little downtime, delivering visible and long-lasting improvements.',
    severity: null,
    severityColor: null
  }
],
        quickFacts: [
          { label: 'Treatment Type', value: 'Non-invasive' },
          { label: 'Anesthesia', value: 'Not required' },
          { label: 'Recovery Time', value: 'Immediate' },
          { label: 'Side Effects', value: 'Minimal to none' }
        ],
     approachCards: [
  {
    id: 1,
    title: 'Boosts Blood Circulation',
    description:
      'Increases oxygen flow to treated areas, promoting healthier, brighter, and more youthful skin.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Reduces Cellulite & Fat',
    description:
      'Helps break down fat cells and smooth uneven skin texture for a firmer appearance.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Treats Dark Circles',
    description:
      'Improves under-eye circulation, reducing pigmentation and puffiness naturally.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Stimulates Collagen Production',
    description:
      'Enhances skin elasticity, reduces stretch marks, and improves overall firmness.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Safe & Effective Results',
    description:
      'Minimally invasive with little downtime, delivering visible and long-lasting improvements.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
     healingJourney: {
  title: 'Your Skin & Body Rejuvenation Journey: Step by Step',
  description:
    'Our carboxy therapy in Dubai follows a safe, structured, and results-oriented approach to improve skin texture, circulation, and overall appearance. Each stage is carefully designed by experienced aesthetic professionals to ensure comfort, effectiveness, and visible improvement.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Week 1: Initial Consultation & Assessment (60 Minutes)',
      duration: 'Week 1',
      description:
        'Your journey begins with a detailed consultation to determine whether carboxy therapy in Dubai is suitable for your skin or body concerns.',
      keyActivities: [
        'Discussion of treatment goals and expectations',
        'Medical history and skin assessment',
        'Evaluation of concerns such as dark circles, stretch marks, cellulite, or dull skin',
        'Identification of treatment areas',
        'Creation of a customized carboxy therapy treatment plan in Dubai'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Weeks 1–2: Skin Preparation Phase',
      duration: 'Weeks 1–2',
      description:
        'Proper preparation helps enhance the effectiveness of carboxy therapy treatment in Dubai and ensures a smoother treatment experience.',
      keyActivities: [
        'Skin cleansing and hydration guidance',
        'Temporary avoidance of harsh skincare products',
        'Lifestyle and post-treatment care instructions',
        'Pre-treatment safety checks'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Weeks 3–12: Active Carboxy Therapy Sessions',
      duration: 'Weeks 3–12',
      description:
        'This phase includes regular carboxy therapy sessions in Dubai, where controlled carbon dioxide is applied to stimulate blood circulation and collagen production.',
      keyActivities: [
        '1–2 sessions per week, depending on treatment area',
        'Application of medical-grade carbon dioxide',
        'Improved oxygen delivery to tissues',
        'Support for skin tightening, brightness, and texture improvement',
        'Progress monitoring and session adjustments'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Months 4–12: Maintenance & Follow-Up Care',
      duration: 'Months 4–12',
      description:
        'Maintenance sessions help support ongoing improvements achieved through carboxy therapy in Dubai.',
      keyActivities: [
        'Periodic maintenance treatments',
        'Regular skin and body assessments',
        'Personalized skincare and lifestyle guidance',
        'Continued professional follow-up'
      ],
      side: 'left'
    }
  ]
},

      benefits: {
        title: 'Clinically Observed Benefits',
        description: 'Based on 15+ years of providing skin treatment in Dubai.',
        benefits: [
          {
            id: 1,
            title: 'Improved blood circulation',
            percentage: 91,
            description: null
          },
          {
            id: 2,
            title: '  Brighter and healthier skin ',
            percentage: 88,
            description: null
          },
          {
            id: 3,
            title: 'Reduced dark circles',
            percentage: 95,
            description: 'Enhanced skin moisture and suppleness'
          },
          {
            id: 4,
            title: ' Improved skin texture',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: ' Natural collagen stimulation',
            percentage: 93,
            description: null
          },
        ],
        comparisonTitle: 'Carboxy Therapy in Dubai vs. Conventional Skin Treatments',
        comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Carboxy Therapy in Dubai',
          traditional: 'Conventional Skin Treatments'
        },
        comparisonData: [
          {
            feature: 'Approach	',
            ayurvedic: 'Improves oxygenation and circulation',
            conventional: 'Surface-level correction'
          },
          {
            feature: 'Invasiveness',
            ayurvedic: 'Non-surgical',
            conventional: 'Often aggressive'
          },
          {
            feature: 'Downtime',
            ayurvedic: 'Minimal',
            conventional: 'Variable'
          },
          {
            feature: 'Results',
            ayurvedic: 'Gradual and natural',
            conventional: 'Temporary'
          },
          {
            feature: 'Suitability',
            ayurvedic: 'Face and body areas',
            conventional: 'Limited areas'
          },
          {
            feature: 'Long-Term Benefit',
            ayurvedic: 'Supports skin health',
            conventional: 'Limited for prolonged or repeated use'
          }
        ]
      },
    pricing: {
  title: 'Transparent Pricing & Customized Treatment Packages',
  description:
    'Our Carboxy Therapy treatments are carefully customized based on your skin concern, treatment area, and desired results. Each plan is doctor-supervised to ensure safe, effective, and natural-looking improvement.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'Best for mild skin concerns & first-time Carboxy Therapy patients',
      duration: '6 sessions over 3 months',
      features: [
        'Initial skin assessment and concern evaluation',
        '6 Carboxy Therapy treatment sessions',
        'Improved oxygenation and blood circulation support',
        'Targeted treatment for dull skin, dark circles, or mild fat deposits',
        'Post-treatment care and lifestyle guidance'
      ],
      pricing: 'Starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'Ideal for skin rejuvenation, dark circles & localized fat reduction',
      duration: '12 sessions over 4 months',
      features: [
        'Comprehensive skin and body assessment',
        '12 Carboxy Therapy sessions with optimized protocols',
        'Enhanced collagen stimulation',
        'Targeted fat breakdown and skin tightening support',
        'Personalized skincare and aftercare guidance',
        'Monthly progress monitoring'
      ],
      pricing: 'Starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete skin revitalization & long-term results program',
      duration: '24 sessions over 6 months',
      features: [
        'All Advanced Package benefits',
        'Intensive Carboxy Therapy sessions for stubborn areas',
        'Advanced skin rejuvenation and tightening support',
        'Circulation and oxygenation enhancement treatments',
        'Stress and lifestyle impact management',
        'Quarterly skin health and results review',
        'Long-term maintenance guidance'
      ],
      pricing: 'Starts from AED XXX',
      isPopular: false
    }
  ]
},
    faq: {
  title: "Frequently Asked Questions About Carboxy Therapy in Dubai",
  description: "Carboxy Therapy in Dubai",
  faqs: [
    {
      id: 1,
      question: "What is Carboxy Therapy in Dubai?",
      answer: "Carboxy Therapy in Dubai is a non-surgical treatment using medical carbon dioxide to improve blood circulation, boost oxygenation, and naturally enhance skin texture and tone safely."
    },
    {
      id: 2,
      question: "Is Carboxy Therapy safe for the skin?",
      answer: "Yes, Carboxy Therapy is clinically safe when performed by trained professionals. At ramacarepolyclinic, treatments follow DHA-approved protocols, ensuring patient safety, hygiene, and comfort."
    },
    {
      id: 3,
      question: "Who is an ideal candidate for Carboxy Therapy?",
      answer: "Carboxy Therapy suits people with dark circles, dull skin, stretch marks, mild aging signs, or poor circulation seeking non-invasive skin rejuvenation without surgery or downtime."
    },
    {
      id: 4,
      question: "How does Carboxy Therapy work?",
      answer: "Carboxy Therapy works by injecting controlled carbon dioxide, encouraging blood flow, increasing oxygen supply, stimulating collagen production, and supporting the skin’s natural healing process."
    },
    {
      id: 5,
      question: "How many Carboxy Therapy sessions are needed?",
      answer: "The number of Carboxy Therapy sessions depends on skin concerns and the treatment area. Most patients notice improvement after 4–6 sessions, with gradual and natural-looking results."
    },
    {
      id: 6,
      question: "Does Carboxy Therapy hurt?",
      answer: "Carboxy Therapy causes mild discomfort or pressure during treatment, which is temporary. Most patients find sessions tolerable, with minimal post-treatment sensitivity or redness."
    },
    {
      id: 7,
      question: "Is there downtime after Carboxy Therapy?",
      answer: "Carboxy Therapy in Dubai involves minimal downtime. Patients can usually resume daily activities immediately, making it ideal for busy lifestyles and working professionals."
    },
    {
      id: 8,
      question: "Can Carboxy Therapy treat dark circles?",
      answer: "Yes, Carboxy Therapy is effective for dark circles by improving blood circulation and oxygen supply, helping brighten under-eye skin and reduce pigmentation naturally over time."
    },
    {
      id: 9,
      question: "Can Carboxy Therapy be used on the body?",
      answer: "Carboxy Therapy can treat both face and body areas, including stretch marks, scars, cellulite-prone zones, and areas with poor circulation or uneven skin texture."
    },
    {
      id: 10,
      question: "How long do Carboxy Therapy results last?",
      answer: "Results from Carboxy Therapy are gradual and long-lasting with proper maintenance. Follow-up sessions and healthy skincare habits help sustain improved skin quality."
    },
    {
      id: 11,
      question: "Is Carboxy Therapy suitable for all skin types?",
      answer: "Carboxy Therapy is generally suitable for most skin types. A consultation at ramacarepolyclinic ensures personalized assessment and safe treatment planning."
    },
    {
      id: 12,
      question: "Are there any side effects of Carboxy Therapy?",
      answer: "Side effects are mild and temporary, including slight redness, swelling, or warmth at treatment sites, usually resolving within a few hours after the session."
    },
    {
      id: 13,
      question: "Can Carboxy Therapy be combined with other treatments?",
      answer: "Yes, Carboxy Therapy can be combined with facials, PRP, or skin boosters for enhanced results, based on individual skin goals and doctor recommendations."
    },
    {
      id: 14,
      question: "When will I see results from Carboxy Therapy?",
      answer: "Some patients notice improved skin brightness after initial sessions. Optimal results typically appear gradually after completing the recommended Carboxy Therapy treatment plan."
    },
    {
      id: 15,
      question: "Where can I get Carboxy Therapy in Dubai?",
      answer: "You can receive safe and effective Carboxy Therapy in Dubai at ramacarepolyclinic, offering doctor-led care, personalized plans, and advanced aesthetic treatment standards."
    }
  ],
        resources: [
          {
            id: 1,
            text: 'Skin Boosters',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-boosters-dubai'
          },
          {
            id: 2,
            text: 'Derma Roller',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/derma-roller-dubai'
          },
          {
            id: 3,
            text: 'Skin Tightening',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/skin-tightening-dubai'
          },
          {
            id: 4,
            text: 'Microdermabrasion',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/microdermabrasion-dubai'
          },
          {
            id: 5,
            text: 'Skin Allergy',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-allergy-dubai'
          },
          {
            id: 6,
            text: 'Botox Hyperhidrosis',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/botox-hyperhidrosis-dubai'
          },
          {
            id: 7,
            text: 'Carboxy Therapy',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/carboxy-therapy-dubai'
          },
          {
            id: 8,
            text: 'Electrolysis',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/electrolysis-dubai'
          },
            {
            id: 9,
            text: 'Fillers',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/fillers-in-dubai'
          },
            {
            id: 10,
            text: 'Facial',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/facial'
          },
            {
            id: 11,
            text: 'HIFU',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hifu-dubai'
          },
            {
            id: 12,
            text: 'Face PRP',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/face-prp-in-dubai'
          },
            {
            id: 13,
            text: 'Botox',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/botox-dubai'
          },
            {
            id: 14,
            text: 'Mesotherapy',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mesotherapy-dubai'
          },
            {
            id: 15,
            text: 'Pigmentation',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/pigmentation-dubai'
          },
             {
            id: 16,
            text: 'Dark Circle',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/dark-circle-dubai'
          }
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
        subtitle: 'Verified testimonials from patients who achieved healthy, radiant skin',
        stats: [
          {
            id: 1,
            number: '4.8/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.8
          },
          {
            id: 2,
            number: '1,200+',
            label1: 'Patients Treated',
            label2: 'Success Stories',
            target: 1200
          },
          {
            id: 3,
            number: '96%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 96
          },
          {
            id: 4,
            number: '15+',
            label1: 'Years Experience',
            label2: 'In Dubai',
            target: 15
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment & Insurance',
        insuranceTitle: 'Insurance Support',
        paymentOptions: [
          'Cash, Credit & Debit Cards Accepted',
          ' Flexible Payment Plans Available',
          '0% Interest Installments (T&C Apply)'
        ],
        insuranceOptions: [
          'Accepted by select providers',
          'Detailed invoices for claims',
          ' Documentation assistance'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Carboxy Therapy in Dubai Today',
        description: 'Restore skin vitality and confidence with expert Carboxy Therapy at ramacarepolyclinic—your trusted destination for safe, effective aesthetic care in Dubai.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '1,200+ Patients',
            description: 'Successfully Treated'
          },
          {
            title: '4.8/5 Rating',
            description: 'Patient Reviews'
          }
      ]
    }
  },

  'aesthetic-dermatology-dubai-skin-treatment-electrolysis': {
    hero: {
            subtitle: 'Permanent Hair Removal with Medical Precision',
            description: 'Unwanted hair can affect confidence and comfort, especially when temporary methods fail. At ramacare polyclinic, we provide Electrolysis in Dubai, a medically approved and permanent hair removal treatment suitable for all skin types and hair colors.',
            rating: '4.9/5 Rating (500+ Reviews)',
            stats: [
              {
                id: 1,
                number: '94%',
                label: 'Patient Satisfaction'
              },
              {
                id: 2,
                number: '2500+',
                label: 'Hair Patients Treated'
              },
              {
                id: 3,
                number: '15+',
                label: 'Years of Experience'
              }
            ],
            ctaButtons: {
              primary: {
                text: 'Book Free Consultation',
                icon: 'calendar',
                link: '#book-consultation'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 XX XXX XXXX',
                icon: 'whatsapp'
              }
            },
            features: [
              ' DHA-Licensed Multispecialty Polyclinic',
              'Trained & Experienced Skin Specialists',
              'Safe, Permanent Hair Removal Solution'
            ],
              image: {
          src: '/images/electrolysis1.jpg',
          alt: 'Electrolysis treatment performed by specialists to permanently remove unwanted hair safely and effectively.'
        },
            medicalNotice: {
              text: 'Safety & Medical Disclaimer:Results may vary depending on hair growth cycle and individual response. All Electrolysis treatments at ramacarepolyclinic follow DHA-approved medical and safety protocols.',
              show: true
            }
          },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Skin Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed Ayurvedic doctors specializes in treating chronic and cosmetic skin concerns through holistic, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Electrolysis Treatment',
        problemIntro: {
          title: 'The Problem: Permanent Unwanted Hair',
          description: 'Many hair removal methods provide temporary results and may cause irritation, ingrown hairs, or regrowth.'
        },
        solutionIntro: {
  title: 'Our Solution: Electrolysis in Dubai',
  description:
    'Our Electrolysis in Dubai provides a safe, FDA-approved, and permanent hair removal solution for all skin and hair types.'
},
      leftCards: [
  {
    id: 1,
    title: 'What Is Electrolysis?',
    description:
      'Electrolysis is a permanent hair removal treatment that uses controlled electrical energy to destroy individual hair follicles at the root. Once treated, the follicle can no longer produce hair, making it a long-term solution. Unlike lasers, Electrolysis in Dubai works on all hair colors, including white, grey, and blonde hair.'
  },
  {
    id: 2,
    title: 'Who Needs Electrolysis Treatment?',
    description: 'Electrolysis is recommended for individuals who experience:',
    listItems: [
      'Unwanted facial or body hair',
      'Hormonal hair growth issues',
      'Ingrown hairs',
      'Light or grey hair not suitable for laser',
      'Sensitive skin prone to irritation',
      'Consistent sessions help achieve smooth, hair-free skin safely'
    ]
  },
  {
    id: 3,
    title: 'Trusted Electrolysis Care You Can Depend On',
    description: '',
    listItems: [
      'FDA-recognized permanent hair removal method',
      'Suitable for face and body',
      'Effective for light, grey, or fine hair',
      'Doctor-supervised treatment',
      'Safe for sensitive skin areas'
    ]
  }
],
     rootCauses: [
  {
    id: 1,
    title: 'Permanent Hair Removal',
    description:
      'Destroys individual hair follicles at the root, preventing regrowth permanently.',
    severity: null,
    severityColor: null
  },
  {
    id: 2,
    title: 'Effective for All Hair Types',
    description:
      'Ideal for light, grey, blonde, and fine hair, where laser treatments may not work.',
    severity: null,
    severityColor: null
  },
  {
    id: 3,
    title: 'Precise & Targeted Treatment',
    description:
      'Treats individual hairs with accuracy, making it perfect for small areas like the face, chin, upper lip, and eyebrows.',
    severity: null,
    severityColor: null
  },
  {
    id: 4,
    title: 'Safe & Skin-Friendly',
    description:
      'Performed by trained professionals with minimal discomfort and low risk of skin damage.',
    severity: null,
    severityColor: null
  },
  {
    id: 5,
    title: 'Long-Term Smooth Results',
    description:
      'Delivers smooth, clear skin with lasting results and improved confidence.',
    severity: null,
    severityColor: null
  }
],
        quickFacts: [
          { label: 'Treatment Type', value: 'Non-invasive' },
          { label: 'Anesthesia', value: 'Not required' },
          { label: 'Recovery Time', value: 'Immediate' },
          { label: 'Side Effects', value: 'Minimal to none' }
        ],
     approachCards: [
  {
    id: 1,
    title: 'Permanent Hair Removal',
    description:
      'Destroys individual hair follicles at the root, preventing regrowth permanently.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Effective for All Hair Types',
    description:
      'Ideal for light, grey, blonde, and fine hair, where laser treatments may not work.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Precise & Targeted Treatment',
    description:
      'Treats individual hairs with accuracy, making it perfect for small areas like the face, chin, upper lip, and eyebrows.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Safe & Skin-Friendly',
    description:
      'Performed by trained professionals with minimal discomfort and low risk of skin damage.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Long-Term Smooth Results',
    description:
      'Delivers smooth, clear skin with lasting results and improved confidence.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
     healingJourney: {
  title: 'Your Hair Removal Journey: Step by Step',
  description: 'Structured, doctor-guided approach to ensure safe, effective, and permanent hair removal with Electrolysis in Dubai.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Skin Assessment',
      duration: 'Week 1',
      description: 'Comprehensive evaluation of hair type, density, and skin sensitivity to create a personalized electrolysis plan.',
      keyActivities: [
        'Medical history review',
        'Skin and hair mapping',
        'Discussion of goals and expectations',
        'Personalized session plan creation'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Preparation & Trial Session',
      duration: 'Weeks 1–4',
      description: 'Initial trial treatment to ensure comfort and suitability while preparing the skin for the full electrolysis course.',
      keyActivities: [
        'Test on a small area',
        'Topical numbing if needed',
        'Observation of skin response',
        'Patient guidance for aftercare'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Active Electrolysis Treatment Phase',
      duration: 'Weeks 5–12',
      description: 'Regular electrolysis sessions targeting individual hair follicles for permanent hair removal.',
      keyActivities: [
        '1–3 sessions per week depending on the area',
        'Precision follicle treatment with controlled electrical current',
        'Post-session care including soothing creams',
        'Progress monitoring and plan adjustments'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Maintenance & Follow-up',
      duration: 'Months 4–6',
      description: 'Sustaining results with follow-up treatments and long-term care guidance to maintain smooth, hair-free skin.',
      keyActivities: [
        'Periodic check-ins',
        'Additional touch-up sessions if needed',
        'Skin health and care advice',
        'Long-term hair management support'
      ],
      side: 'left'
    },
    {
      id: 5,
      number: '05',
      title: 'Result',
      duration: null,
      description: 'Permanent hair reduction, smoother skin, minimized ingrown hairs, and enhanced confidence with Electrolysis in Dubai performed under medical supervision.',
      keyActivities: [],
      side: 'right'
    }
  ]
},
      benefits: {
        title: 'Clinically Observed Benefits',
        description: 'Based on 15+ years of providing skin treatment in Dubai.',
        benefits: [
          {
            id: 1,
            title: ' Permanent hair removal',
            percentage: 91,
            description: null
          },
          {
            id: 2,
            title: ' Smooth, irritation-free skin',
            percentage: 88,
            description: null
          },
          {
            id: 3,
            title: 'Effective for light and grey hair',
            percentage: 95,
            description: 'Enhanced skin moisture and suppleness'
          },
          {
            id: 4,
            title: ' Reduced ingrown hairs',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: 'Improved skin confidence',
            percentage: 93,
            description: null
          },
        ],
        comparisonTitle: 'Electrolysis vs. Conventional Hair Removal Methods',
        comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Electrolysis',
          traditional: 'Conventional Methods'
        },
        comparisonData: [
          {
            feature: 'Hair Removal	',
            ayurvedic: 'Permanent follicle destruction',
            conventional: 'Temporary hair removal'
          },
          {
            feature: 'Hair Color Suitability',
            ayurvedic: 'All hair colors',
            conventional: 'Limited effectiveness'
          },
          {
            feature: 'Skin Type',
            ayurvedic: 'Safe for all skin types',
            conventional: 'May cause irritation'
          },
          {
            feature: 'Precision',
            ayurvedic: 'Treats individual follicles',
            conventional: 'Surface-level removal'
          },
          {
            feature: 'Results',
            ayurvedic: 'Permanent over time',
            conventional: 'Hair regrowth expected'
          },
          {
            feature: 'Medical Supervision',
            ayurvedic: 'Doctor-guided',
            conventional: 'Often non-medical'
          }
        ]
      },
    pricing: {
  title: 'Transparent Pricing & Electrolysis Treatment Packages',
  description:
    'Our electrolysis packages in Dubai are customized based on hair density, treatment area, and individual needs. Every plan ensures safe, effective, and long-lasting hair removal results.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For small areas with mild hair growth',
      duration: '6 sessions over 3 months',
      features: [
        'Initial skin and hair assessment',
        'Targeted electrolysis treatment for selected areas',
        'Post-treatment care instructions',
        'Follow-up guidance for optimal results'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false,
      cta: '👉 Get Consultation'
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For moderate hair growth or larger areas',
      duration: '12 sessions over 4 months',
      features: [
        'Comprehensive hair and skin evaluation',
        'Electrolysis treatment for multiple areas',
        'Pain management and skin soothing techniques',
        'Personalized aftercare and follow-up monitoring'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true,
      cta: '👉 Get Consultation'
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'For extensive hair growth or full-body coverage',
      duration: '24 sessions over 6 months',
      features: [
        'Complete consultation and assessment',
        'Full electrolysis treatment program for large areas',
        'Advanced pain control and skin protection',
        'Regular progress review and maintenance plan',
        'Lifetime hair management advice'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false,
      cta: '👉 Get Consultation'
    }
  ]
},
   faq: {
  title: 'Frequently Asked Questions – Electrolysis in Dubai',
  description: null,
  faqs: [
    {
      id: 1,
      question: 'What is electrolysis hair removal?',
      answer:
        'Electrolysis is a professional hair removal method that uses electrical currents to destroy individual hair follicles, providing permanent results for unwanted facial or body hair.'
    },
    {
      id: 2,
      question: 'Is electrolysis safe for all skin types?',
      answer:
        'Yes, electrolysis is safe for all skin types and hair colors. It works by targeting hair follicles directly without harming surrounding skin when performed by a trained specialist.'
    },
    {
      id: 3,
      question: 'How long does an electrolysis session take?',
      answer:
        'Sessions usually last 15 to 60 minutes, depending on the treatment area and hair density. Multiple sessions are required for complete and permanent hair removal.'
    },
    {
      id: 4,
      question: 'Is electrolysis painful?',
      answer:
        'Patients may feel mild discomfort or tingling during treatment, but it is generally well-tolerated. Topical anesthetics can be applied to sensitive areas.'
    },
    {
      id: 5,
      question: 'How many electrolysis sessions are required?',
      answer:
        'The number of sessions varies by hair thickness, density, and growth cycles. Typically, 6–12 sessions are needed for small areas, while larger areas may require more.'
    },
    {
      id: 6,
      question: 'Can electrolysis remove grey or light-colored hair?',
      answer:
        'Yes, unlike laser hair removal, electrolysis works on all hair colors, including grey, blonde, or white hair, because it targets the follicle directly rather than the pigment.'
    },
    {
      id: 7,
      question: 'Are the results of electrolysis permanent?',
      answer:
        'Electrolysis permanently destroys hair follicles. While occasional maintenance may be needed for new growth, treated hairs typically do not return once the follicles are destroyed.'
    },
    {
      id: 8,
      question: 'What areas can be treated with electrolysis?',
      answer:
        'Electrolysis can be used on the face, eyebrows, upper lip, chin, underarms, arms, legs, bikini line, and other body areas where unwanted hair appears.'
    },
    {
      id: 9,
      question: 'How should I prepare for an electrolysis session?',
      answer:
        'Avoid waxing, plucking, or bleaching for several weeks before treatment. Cleanse the area and follow any instructions provided by your electrolysis specialist.'
    },
    {
      id: 10,
      question: 'What is the aftercare for electrolysis?',
      answer:
        'After treatment, keep the area clean, avoid sun exposure, refrain from makeup or harsh creams, and use soothing gels if needed to reduce redness or irritation.'
    },
    {
      id: 11,
      question: 'Can electrolysis be combined with other hair removal methods?',
      answer:
        'Yes, electrolysis can be combined with shaving or laser for optimal results, but it should not follow waxing or plucking, as follicles must remain intact for treatment.'
    },
    {
      id: 12,
      question: 'Are there any side effects of electrolysis?',
      answer:
        'Mild redness, swelling, or tenderness may occur immediately after treatment. These typically subside within a few hours to a day with proper care.'
    },
    {
      id: 13,
      question: 'Is electrolysis safe during pregnancy?',
      answer:
        'Electrolysis is generally not recommended during pregnancy as a precaution. Consult your healthcare provider before beginning any hair removal treatments.'
    },
    {
      id: 14,
      question: 'How soon will I see results?',
      answer:
        'Some hair is removed immediately during sessions, but complete results are achieved gradually over multiple sessions as follicles are permanently destroyed.'
    },
    {
      id: 15,
      question: 'Why choose electrolysis in Dubai at Rama Care Polyclinic?',
      answer:
        'Rama Care Polyclinic offers certified electrolysis specialists, DHA-licensed safety protocols, personalized treatment plans, and permanent hair removal solutions with professional care in Dubai.'
    }
  ],
        resources: [
          {
            id: 1,
            text: 'Skin Boosters',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-boosters-dubai'
          },
          {
            id: 2,
            text: 'Derma Roller',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/derma-roller-dubai'
          },
          {
            id: 3,
            text: 'Skin Tightening',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/skin-tightening-dubai'
          },
          {
            id: 4,
            text: 'Microdermabrasion',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/microdermabrasion-dubai'
          },
          {
            id: 5,
            text: 'Skin Allergy',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-allergy-dubai'
          },
          {
            id: 6,
            text: 'Botox Hyperhidrosis',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/botox-hyperhidrosis-dubai'
          },
          {
            id: 7,
            text: 'Carboxy Therapy',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/carboxy-therapy-dubai'
          },
          {
            id: 8,
            text: 'Electrolysis',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/electrolysis-dubai'
          },
            {
            id: 9,
            text: 'Fillers',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/fillers-in-dubai'
          },
            {
            id: 10,
            text: 'Facial',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/facial'
          },
            {
            id: 11,
            text: 'HIFU',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hifu-dubai'
          },
            {
            id: 12,
            text: 'Face PRP',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/face-prp-in-dubai'
          },
            {
            id: 13,
            text: 'Botox',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/botox-dubai'
          },
            {
            id: 14,
            text: 'Mesotherapy',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mesotherapy-dubai'
          },
            {
            id: 15,
            text: 'Pigmentation',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/pigmentation-dubai'
          },
             {
            id: 16,
            text: 'Dark Circle',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/dark-circle-dubai'
          }
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
       subtitle: 'Verified testimonials from patients who achieved healthy, radiant skin',
        stats: [
          {
            id: 1,
            number: '4.8/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.8
          },
          {
            id: 2,
            number: '1,200+',
            label1: 'Patients Treated',
            label2: 'Success Stories',
            target: 1200
          },
          {
            id: 3,
            number: '96%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 96
          },
          {
            id: 4,
            number: '15+',
            label1: 'Years Experience',
            label2: 'In Dubai',
            target: 15
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment & Insurance',
        insuranceTitle: 'Insurance Support',
        paymentOptions: [
          'Cash, Credit & Debit Cards Accepted',
          ' Flexible Payment Plans Available',
          '0% Interest Installments (T&C Apply)'
        ],
        insuranceOptions: [
          'Accepted by select providers',
          'Detailed invoices for claims',
          ' Documentation assistance'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Electrolysis in Dubai Today',
        description: 'Choose a permanent solution for unwanted hair with Electrolysis in Dubai at ramacarepolyclinic, where medical expertise meets patient-focused care.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '1,200+ Patients',
            description: 'Successfully Treated'
          },
          {
            title: '4.8/5 Rating',
            description: 'Patient Reviews'
          }
      ]
    }
  },

   'aesthetic-dermatology-dubai-skin-treatment-fillers': {
        hero: {
            subtitle: 'Natural Facial Volume Restoration with Medical Expertise',
            description: 'Aging, stress, and volume loss can change facial contours over time. At ramacarepolyclinic, we provide Fillers in Dubai to restore facial volume, smooth lines, and enhance natural features—without surgery or long downtime.',
            rating: '4.9/5 Rating (500+ Reviews)',
            stats: [
              {
                id: 1,
                number: '94%',
                label: 'Patient Satisfaction'
              },
              {
                id: 2,
                number: '2500+',
                label: 'Hair Patients Treated'
              },
              {
                id: 3,
                number: '15+',
                label: 'Years of Experience'
              }
            ],
            ctaButtons: {
              primary: {
                text: 'Book Free Consultation',
                icon: 'calendar',
                link: '#book-consultation'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 XX XXX XXXX',
                icon: 'whatsapp'
              }
            },
            features: [
              ' DHA-Licensed Multispecialty Polyclinic',
              ' Experienced Aesthetic Doctors',
              'Safe, Non-Surgical Facial Enhancement'
            ],
            image: {
          src: '/images/filler.jpg',
          alt: 'Fillers in Dubai performed by specialists to restore facial volume and enhance natural facial contours.'
        },
            medicalNotice: {
              text: 'Safety & Medical Disclaimer: Results may vary depending on individual anatomy, product selection, and lifestyle. All filler treatments at ramacarepolyclinic follow DHA-approved medical and safety protocols.',
              show: true
            }
          },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Skin Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed Ayurvedic doctors specializes in treating chronic and cosmetic skin concerns through holistic, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Fillers',
        problemIntro: {
          title: 'Causes of Facial Volume Loss and Wrinkles',
          description: 'ume loss, repeated facial expressions, sun exposure, and aging lead to fine lines, folds, and flattened facial contours. Untreated, these changes make the face look tired or aged.'
        },
        solutionIntro: {
          title: 'Our Solution: Fillers in Dubai at ramacarepolyclinic',
          description: 'Targeted Volume Restoration , Dermal fillers restore natural volume, smooth lines, and enhance facial contours while maintaining balanced, subtle results.Patient-Centered Approach'
        },
      leftCards: [
  {
    id: 1,
    title: 'What Is It?',
    description:
      'A non-surgical, medically supervised treatment that restores facial volume, smooths lines, and enhances natural contours. Dermal fillers rejuvenate cheeks, lips, nasolabial folds, and other areas.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description:
      'Adults experiencing: Loss of facial volume, deepening folds or wrinkles, thinning lips or hollow cheeks, desire for subtle, non-surgical facial enhancement.'
  },
  {
    id: 3,
    title: 'Duration',
    description:
      'Immediate visible results. Full effect within 1–2 weeks. Effects last 6–18 months depending on filler type, area treated, and lifestyle.'
  },
  {
    id: 4,
    title: 'Trusted Dermal Filler Care You Can Depend On',
    description: '',
    listItems: [
      'DHA-approved dermal fillers',
      'Doctor-led aesthetic treatments',
      'Natural-looking, balanced results',
      'Personalized facial assessment',
      'High safety and hygiene standards'
    ]
  }
],
       rootCauses: [
  {
    id: 1,
    title: 'Forehead Lines',
    description: 'Result from repeated raising of eyebrows and facial expressions',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  },
  {
    id: 2,
    title: 'Frown Lines',
    description: 'Deepening due to constant brow movements',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  },
  {
    id: 3,
    title: 'Crow’s Feet',
    description: 'Fine lines around the eyes from smiling and squinting',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  },
  {
    id: 4,
    title: 'Loss of Facial Volume',
    description: 'Leads to hollow cheeks, thin lips, sagging appearance',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'   
  } 
],
      quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical injection' },
  { label: 'Anesthesia', value: 'Not required (topical optional)' },
  { label: 'Recovery Time', value: 'Minimal, usually immediate' },
  { label: 'Side Effects', value: 'Temporary redness, swelling, or mild bruising' }
],
        approachCards: [
  {
    id: 1,
    title: 'Comprehensive facial assessment',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Customized filler selection and dosage',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Precise, doctor-administered injections',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'FDA/DHA-approved filler products',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Post-treatment guidance and follow-up',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 6,
    title: 'Result',
    description:
      'Restored facial volume, smoother lines, natural contours, youthful and refreshed appearance, enhanced confidence.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
     healingJourney: {
  title: 'Your Dermal Fillers Journey',
  description: '',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Facial Assessment',
      duration: '',
      description:
        'Understanding facial structure, wrinkle patterns, and patient goals.',
      keyActivities: [
        'Facial analysis and volume mapping',
        'Discussion of patient expectations',
        'Personalized filler selection and plan'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Personalized Treatment Planning',
      duration: '',
      description:
        'Selection of appropriate filler type, dosage, and injection technique.',
      keyActivities: [
        'Choosing FDA/DHA-approved filler products',
        'Planning precise injection areas',
        'Preparing skin for treatment'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Filler Treatment Session',
      duration: '',
      description:
        'Precise, doctor-administered injections for target areas like cheeks, lips, nasolabial folds, or jawline.',
      keyActivities: [
        'Gentle, precise injections',
        'Maintaining natural facial expressions',
        'Immediate post-treatment guidance'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Follow-Up & Aftercare Support',
      duration: '',
      description:
        'Monitoring results, minor adjustments if needed, and post-treatment guidance to maintain natural outcomes.',
      keyActivities: [
        'Check wrinkle smoothing and volume restoration',
        'Post-treatment care instructions',
        'Recommendations for long-term facial health'
      ],
      side: 'left'
    }
  ]
},
      benefits: {
        title: 'Clinically Observed Benefits',
        description: 'Based on 15+ years of providing skin treatment in Dubai.',
        benefits: [
          {
            id: 1,
            title: ' Restored facial volume',
            percentage: 91,
            description: null
          },
          {
            id: 2,
            title: ' Smoother fine lines and folds ',
            percentage: 88,
            description: null
          },
          {
            id: 3,
            title: 'Enhanced facial contours',
            percentage: 95,
            description: null
          },
          {
            id: 4,
            title: ' Natural, refreshed appearance',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: ' Improved confidence',
            percentage: 93,
            description: null
          },
        ],
        comparisonTitle: 'Fillers vs. Conventional Anti-Aging Treatments',
        comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Dermal Fillers',
          traditional: 'Conventional Treatments'
        },
        comparisonData: [
          {
            feature: 'Results	',
            ayurvedic: 'Immediate volume restoration',
            conventional: 'Gradual improvement'
          },
          {
            feature: 'Invasiveness',
            ayurvedic: 'Non-surgical',
            conventional: 'May involve surgery'
          },
          {
            feature: 'Downtime',
            ayurvedic: 'Minimal',
            conventional: 'Often longer recovery'
          },
          {
            feature: 'Precision',
            ayurvedic: 'Targeted facial enhancement',
            conventional: 'General skin care'
          },
          {
            feature: 'Longevity',
            ayurvedic: 'Months to over a year',
            conventional: 'Short-term effects'
          },
          {
            feature: 'Customization',
            ayurvedic: 'Highly personalized',
            conventional: 'Limited flexibility'
          }
        ]
      },
    pricing: {
  title: 'Transparent Pricing & Customized Filler Packages',
  description:
    'Filler treatments at ramacarepolyclinic are customized based on treatment area, filler type, and your aesthetic goals. Choose the package that suits your needs and desired results.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For mild volume loss or fine lines',
      duration: '1–2 areas treatment, 1 session per month',
      features: [
        'Initial facial assessment',
        'Targeted filler injections in selected areas',
        'Post-treatment guidance and follow-up'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For moderate volume loss or multiple areas',
      duration: '2–3 sessions over 3 months',
      features: [
        'Comprehensive facial analysis',
        'Filler injections in multiple areas (cheeks, lips, nasolabial folds)',
        'Personalized dosage planning',
        'Post-treatment follow-ups and minor adjustments',
        'Lifestyle and skin care guidance'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete facial rejuvenation program',
      duration: '4–6 sessions over 6 months',
      features: [
        'All Advanced Package benefits',
        'Full-face filler coverage',
        'Long-term maintenance and planning',
        'Personalized skin and wellness guidance',
        'Quarterly check-ins for sustained results'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
     faq: {
  title: 'Frequently Asked Questions About Fillers in Dubai',
  description: 'Dermal Fillers Treatment in Dubai',
  faqs: [
    {
      id: 1,
      question: 'What are dermal fillers used for?',
      answer:
        'Dermal fillers are used to restore lost facial volume, smooth wrinkles, enhance lips, define contours, and refresh appearance naturally under expert medical supervision at ramacarepolyclinic in Dubai.'
    },
    {
      id: 2,
      question: 'Are fillers in Dubai safe?',
      answer:
        'Yes, fillers in Dubai are safe when performed by DHA-licensed doctors using approved products. At ramacarepolyclinic, treatments follow strict safety, hygiene, and medical protocols.'
    },
    {
      id: 3,
      question: 'How long do dermal fillers last?',
      answer:
        'The results of fillers usually last between six months and eighteen months, depending on filler type, treatment area, metabolism, and aftercare following treatment.'
    },
    {
      id: 4,
      question: 'Is the filler treatment painful?',
      answer:
        'Fillers cause minimal discomfort. Most products contain numbing agents, and doctors may apply topical anesthesia to ensure a comfortable and gentle treatment experience.'
    },
    {
      id: 5,
      question: 'How long does a filler session take?',
      answer:
        'A filler session typically takes 30 to 45 minutes, including consultation, facial assessment, treatment, and post-procedure guidance from the specialist.'
    },
    {
      id: 6,
      question: 'Will my face look natural after fillers?',
      answer:
        'Yes, when done correctly, fillers enhance facial features subtly. At ramacarepolyclinic, doctors focus on balance and natural-looking results, avoiding overfilled appearances.'
    },
    {
      id: 7,
      question: 'Is there downtime after filler treatment?',
      answer:
        'Most patients resume daily activities immediately. Mild swelling or redness may occur but usually settles within a few days without affecting routine life.'
    },
    {
      id: 8,
      question: 'Who is an ideal candidate for fillers in Dubai?',
      answer:
        'Adults experiencing volume loss, fine lines, or facial asymmetry, and seeking non-surgical enhancement, are suitable candidates after proper medical evaluation.'
    },
    {
      id: 9,
      question: 'Can fillers be combined with other treatments?',
      answer:
        'Yes, fillers are often combined with Botox or skin treatments for comprehensive facial rejuvenation, depending on individual goals and doctor recommendations.'
    },
    {
      id: 10,
      question: 'Are fillers reversible if I don’t like the results?',
      answer:
        'Hyaluronic acid fillers can be adjusted or dissolved safely if required, providing flexibility and reassurance for patients seeking controlled aesthetic outcomes.'
    },
    {
      id: 11,
      question: 'What areas can be treated with fillers?',
      answer:
        'Common areas include lips, cheeks, jawline, chin, under-eyes, nasolabial folds, and marionette lines, depending on facial structure and concerns.'
    },
    {
      id: 12,
      question: 'How soon will I see results after fillers?',
      answer:
        'Results are visible immediately after treatment, with the final appearance improving as swelling settles within a few days.'
    },
    {
      id: 13,
      question: 'Do fillers help with aging signs?',
      answer:
        'Yes, fillers reduce wrinkles, restore volume, and improve facial contours, helping patients achieve a refreshed and youthful appearance without surgery.'
    },
    {
      id: 14,
      question: 'How should I prepare for filler treatment?',
      answer:
        'Avoid blood-thinning medications, alcohol, and heavy exercise before treatment. Follow all pre-treatment instructions provided during consultation for best results.'
    },
    {
      id: 15,
      question: 'Why choose ramacarepolyclinic for fillers in Dubai?',
      answer:
        'ramacarepolyclinic offers DHA-licensed doctors, personalized treatment plans, approved fillers, and a patient-first approach focused on safety, trust, and natural results.'
    }
  ],
        resources: [
          {
            id: 1,
            text: 'Skin Boosters',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-boosters-dubai'
          },
          {
            id: 2,
            text: 'Derma Roller',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/derma-roller-dubai'
          },
          {
            id: 3,
            text: 'Skin Tightening',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/skin-tightening-dubai'
          },
          {
            id: 4,
            text: 'Microdermabrasion',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/microdermabrasion-dubai'
          },
          {
            id: 5,
            text: 'Skin Allergy',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-allergy-dubai'
          },
          {
            id: 6,
            text: 'Botox Hyperhidrosis',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/botox-hyperhidrosis-dubai'
          },
          {
            id: 7,
            text: 'Carboxy Therapy',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/carboxy-therapy-dubai'
          },
          {
            id: 8,
            text: 'Electrolysis',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/electrolysis-dubai'
          },
            {
            id: 9,
            text: 'Fillers',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/fillers-in-dubai'
          },
            {
            id: 10,
            text: 'Facial',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/facial'
          },
            {
            id: 11,
            text: 'HIFU',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hifu-dubai'
          },
            {
            id: 12,
            text: 'Face PRP',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/face-prp-in-dubai'
          },
            {
            id: 13,
            text: 'Botox',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/botox-dubai'
          },
            {
            id: 14,
            text: 'Mesotherapy',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mesotherapy-dubai'
          },
            {
            id: 15,
            text: 'Pigmentation',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/pigmentation-dubai'
          },
             {
            id: 16,
            text: 'Dark Circle',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/dark-circle-dubai'
          }
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
        subtitle: 'Verified testimonials from patients who achieved healthy, radiant skin',
        stats: [
          {
            id: 1,
            number: '4.8/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.8
          },
          {
            id: 2,
            number: '1,200+',
            label1: 'Patients Treated',
            label2: 'Success Stories',
            target: 1200
          },
          {
            id: 3,
            number: '96%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 96
          },
          {
            id: 4,
            number: '15+',
            label1: 'Years Experience',
            label2: 'In Dubai',
            target: 15
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment & Insurance',
        insuranceTitle: 'Insurance Support',
        paymentOptions: [
          'Cash, Credit & Debit Cards Accepted',
          ' Flexible Payment Plans Available',
          '0% Interest Installments (T&C Apply)'
        ],
        insuranceOptions: [
          'Accepted by select providers',
          'Detailed invoices for claims',
          ' Documentation assistance'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Fillers in Dubai Today',
        description: 'Enhance your natural beauty with Fillers in Dubai at ramacarepolyclinic, where expert care meets subtle, confident, and safe results.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '1,200+ Patients',
            description: 'Successfully Treated'
          },
          {
            title: '4.8/5 Rating',
            description: 'Patient Reviews'
          }
      ]
    }
  },
'aesthetic-dermatology-dubai-skin-treatment-facial': {
        hero: {
            subtitle: 'Rejuvenate Your Skin with Expert Facial Care',
            description: 'Facial skin requires consistent care to maintain a youthful, radiant appearance. At ramacarepolyclinic, we provide Facial Treatments in Dubai to cleanse, hydrate, and rejuvenate your skin while targeting pigmentation, fine lines, and dullness.',
            rating: '4.9/5 Rating (500+ Reviews)',
            stats: [
              {
                id: 1,
                number: '94%',
                label: 'Patient Satisfaction'
              },
              {
                id: 2,
                number: '2500+',
                label: 'Hair Patients Treated'
              },
              {
                id: 3,
                number: '15+',
                label: 'Years of Experience'
              }
            ],
            ctaButtons: {
              primary: {
                text: 'Book Free Consultation',
                icon: 'calendar',
                link: '#book-consultation'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 XX XXX XXXX',
                icon: 'whatsapp'
              }
            },
            features: [
              'DHA-Licensed Multispecialty Polyclinic',
              ' Experienced Dermatologists & Aesthetic Experts',
              ' Safe, Customized Facial Treatments'
            ],
            image: {
          src: '/images/facialt1.jpg',
          alt: 'Facial treatments in Dubai performed by specialists to cleanse, rejuvenate, and enhance overall skin health.'
        },
            medicalNotice: {
              text: 'Safety & Medical Disclaimer:Results may vary depending on skin type, concern, and treatment method. All Facial Treatments at ramacarepolyclinic follow DHA-approved medical protocols and safety standards.',
              show: true
            }
          },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Skin Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed Ayurvedic doctors specializes in treating chronic and cosmetic skin concerns through holistic, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Facial Treatments',
        problemIntro: {
          title: 'Common Skin Concerns',
          description: 'Facial skin can become dull, dehydrated, or show early signs of aging due to sun exposure, lifestyle, or stress. Untreated concerns may worsen over time, affecting overall appearance.'
        },
        solutionIntro: {
          title: 'Our Solution: Facial Treatments in Dubai at ramacarepolyclinic',
          description: ' Targeted Skin Rejuvenation : We provide treatments tailored to your skin type and concerns, including hydrating facials, anti-aging therapies, chemical peels, and laser options.Patient-Centered Approach :-'
        },
  leftCards: [
  {
    id: 1,
    title: 'What Is It?',
    description: 'Facial Treatments in Dubai are personalized skin care procedures that combine cleansing, exfoliation, hydration, and specialized therapies to improve skin texture, tone, and overall facial radiance.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description: 'Adults seeking:',
    listItems: [
      'Hydration and skin nourishment',
      'Reduction of fine lines and wrinkles',
      'Treatment for pigmentation or dullness',
      'Acne and post-acne marks improvement',
      'Overall skin rejuvenation and youthful glow'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description: 'Sessions last 45–90 minutes, depending on the type of facial. Noticeable results appear after the first session, with optimal outcomes after 4–6 sessions.'
  }
],
  rootCauses: [
  {
    id: 1,
    title: 'Fine Lines & Wrinkles',
    description: 'Caused by aging, repeated facial movements, or sun damage',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'   
  },
  {
    id: 2,
    title: 'Pigmentation & Dark Spots',
    description: 'Sun, acne, or hormonal changes create uneven skin tone',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'    
  },
  {
    id: 3,
    title: 'Dull Skin',
    description: 'Poor hydration, stress, or environmental factors reduce radiance',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'        
  },
  {
    id: 4,
    title: 'Acne & Post-Acne Marks',
    description: 'Active acne and scars affect smoothness and texture',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'        
  },
  {
    id: 5,
    title: 'Dehydration & Sensitivity',
    description: 'Lack of moisture causes dryness, redness, and irritation',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'          
  }
],
  quickFacts: [
  { label: 'Treatment Type', value: 'Non-invasive, doctor-supervised' },
  { label: 'Anesthesia', value: 'Not required' },
  { label: 'Recovery Time', value: 'Immediate, minimal downtime' },
  { label: 'Side Effects', value: 'Temporary redness or mild irritation' }
],

     approachCards: [
  {
    id: 1,
    title: 'Comprehensive facial assessment',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Personalized facial plan',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Safe, doctor-administered procedures',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Post-treatment care and guidance',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Result',
    description: 'Smoother, radiant skin with reduced pigmentation, fine lines, and improved overall skin health.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },

 healingJourney: {
  title: 'Your Facial Treatment Journey',
  description: '',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Skin Assessment',
      duration: '',
      description: 'Comprehensive evaluation of skin type, concerns, and goals.',
      keyActivities: [
        'Skin analysis and hydration check',
        'Identification of pigmentation, acne, or wrinkles',
        'Customized facial treatment plan'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Personalized Treatment Planning',
      duration: '',
      description: 'Selection of appropriate facial therapy based on individual skin needs.',
      keyActivities: [
        'Decide the number of sessions',
        'Prepare skin for treatment',
        'Discuss expected outcomes'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Treatment Session',
      duration: '',
      description: 'Gentle, precise application of facial therapy by trained doctors.',
      keyActivities: [
        'Cleansing, exfoliation, and hydration',
        'Application of targeted therapies (laser, peels, PRP, masks)',
        'Immediate post-treatment care'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Follow-Up & Aftercare Support',
      duration: '',
      description: 'Monitor progress, provide skincare guidance, and plan future sessions for maintenance.',
      keyActivities: [
        'Assess skin improvement',
        'Recommend home care and sunscreen',
        'Schedule follow-up sessions as needed'
      ],
      side: 'left'
    }
  ]
},
      benefits: {
        title: 'Clinically Observed Benefits',
        description: 'Based on 15+ years of providing skin treatment in Dubai.',
        benefits: [
          {
            id: 1,
            title: 'Brighter, more radiant skin',
            percentage: 91,
            description: null
          },
          {
            id: 2,
            title: ' Smoother texture and reduced fine lines',
            percentage: 88,
            description: null
          },
          {
            id: 3,
            title: ' Improved hydration and elasticity',
            percentage: 95,
            description: null
          },
          {
            id: 4,
            title: ' Reduced pigmentation and dullness',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: ' Boosted confidence and youthful appearance',
            percentage: 93,
            description: null
          },
        ],
        comparisonTitle: 'Facial Treatments vs. Conventional Skincare',
        comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Facial Treatments',
          traditional: 'Conventional Treatments'
        },
        comparisonData: [
          {
            feature: 'Results	',
            ayurvedic: 'Visible after 1–2 sessions',
            conventional: 'Gradual, may take month'
          },
         {
    feature: 'Invasiveness',
    ayurvedic: 'Non-surgical, supervised',
    conventional: 'At-home products only'
  },
  {
    feature: 'Downtime',
    ayurvedic: 'Minimal',
    conventional: 'None, slower effects'
  },
  {
    feature: 'Precision',
    ayurvedic: 'Targeted to skin concerns',
    conventional: 'General care'
  },
  {
    feature: 'Longevity',
    ayurvedic: 'Lasting improvement with maintenance',
    conventional: 'Temporary, limited'
  },
  {
    feature: 'Customization',
    ayurvedic: 'Tailored to skin type and concern',
    conventional: 'Standard products, not personalized'
  }
        ]
      },
 pricing: {
  title: 'Transparent Pricing & Customized Facial Treatment Packages',
  description:
    'Facial Treatments at ramacarepolyclinic are tailored to your skin type, concerns, and aesthetic goals. Choose the package that fits your needs and desired results.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For mild skin concerns and basic rejuvenation',
      duration: '1–2 sessions over 1 month',
      features: [
        'Initial skin assessment',
        'Basic facial therapy (hydration, cleansing, exfoliation)',
        'Post-treatment care guidance',
        'Follow-up consultation'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For moderate skin concerns, pigmentation, or early aging signs',
      duration: '2–4 sessions over 3 months',
      features: [
        'Comprehensive skin evaluation',
        'Targeted facial treatments (peels, hydration, anti-aging)',
        'Personalized treatment planning',
        'Follow-up adjustments and guidance',
        'Skincare and lifestyle recommendations'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete facial rejuvenation and skin restoration program',
      duration: '4–6 sessions over 6 months',
      features: [
        'All Advanced Package benefits',
        'Specialized therapies for pigmentation, fine lines, and hydration',
        'Long-term skin maintenance plan',
        'Quarterly check-ins to sustain results',
        'Personalized wellness guidance'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},

 faq: {
  title: 'Frequently Asked Questions About Facial Treatments in Dubai',
  description: 'Facial Treatments in Dubai',
  faqs: [
    {
      id: 1,
      question: 'What are Facial Treatments in Dubai?',
      answer: 'Facial Treatments in Dubai are doctor-led, non-invasive procedures designed to cleanse, hydrate, and rejuvenate the skin while targeting fine lines, pigmentation, acne, and dullness for a youthful glow.'
    },
    {
      id: 2,
      question: 'Who can benefit from Facial Treatments in Dubai?',
      answer: 'Anyone seeking smoother, brighter skin, reduction in pigmentation, fine lines, or acne scars can benefit from Facial Treatments in Dubai tailored to individual skin type and concerns.'
    },
    {
      id: 3,
      question: 'How long does a Facial Treatment in Dubai take?',
      answer: 'Facial Treatments in Dubai typically last 45–90 minutes, depending on the type of treatment, skin condition, and therapy, ensuring thorough care without disrupting your daily schedule.'
    },
    {
      id: 4,
      question: 'Are Facial Treatments in Dubai safe?',
      answer: 'Yes. Facial Treatments in Dubai at ramacarepolyclinic are performed by DHA-licensed doctors using approved products and techniques, ensuring safe, effective, and natural skin rejuvenation.'
    },
    {
      id: 5,
      question: 'How many sessions of Facial Treatments in Dubai are needed?',
      answer: 'Depending on skin concerns, 3–6 sessions of Facial Treatments in Dubai may be recommended to achieve optimal hydration, radiance, and anti-aging results under professional guidance.'
    },
    {
      id: 6,
      question: 'What are the side effects of Facial Treatments in Dubai?',
      answer: 'Side effects are usually mild and temporary, such as redness or slight irritation. Facial Treatments in Dubai are carefully monitored for safe and predictable outcomes.'
    },
    {
      id: 7,
      question: 'Can Facial Treatments in Dubai help with pigmentation?',
      answer: 'Yes. Facial Treatments in Dubai target pigmentation, sun spots, and uneven skin tone using specialized therapies like chemical peels, laser, or PRP, restoring smooth, even-toned skin.'
    },
    {
      id: 8,
      question: 'Can Facial Treatments in Dubai improve fine lines and wrinkles?',
      answer: 'Absolutely. Facial Treatments in Dubai include anti-aging therapies, hydration, and collagen-boosting treatments to reduce fine lines, wrinkles, and early signs of facial aging.'
    },
    {
      id: 9,
      question: 'Are Facial Treatments in Dubai suitable for all skin types?',
      answer: 'Yes. Facial Treatments in Dubai are customized for oily, dry, combination, and sensitive skin types, ensuring safe, effective, and natural rejuvenation for every patient.'
    },
    {
      id: 10,
      question: 'Is there any downtime after Facial Treatments in Dubai?',
      answer: 'Minimal downtime is required. Most patients can resume daily activities immediately. Temporary redness or mild irritation may occur, which resolves within hours after Facial Treatments in Dubai.'
    },
    {
      id: 11,
      question: 'Can Facial Treatments in Dubai help with acne scars?',
      answer: 'Yes. Facial Treatments in Dubai include specialized acne therapies and post-acne scar treatments to improve skin texture, reduce marks, and promote smoother, clearer skin.'
    },
    {
      id: 12,
      question: 'How often should I get Facial Treatments in Dubai?',
      answer: 'For optimal results, Facial Treatments in Dubai are recommended once every 3–4 weeks initially, with maintenance sessions every 6–8 weeks based on skin type and goals.'
    },
    {
      id: 13,
      question: 'Can Facial Treatments in Dubai be combined with other treatments?',
      answer: 'Yes. Facial Treatments in Dubai can be safely combined with Botox, fillers, PRP, or laser therapies for enhanced anti-aging and skin rejuvenation results.'
    },
    {
      id: 14,
      question: 'When will I see results from Facial Treatments in Dubai?',
      answer: 'Visible improvements appear after the first session, including smoother, hydrated, and radiant skin. Optimal results are typically achieved after 3–6 sessions of Facial Treatments in Dubai.'
    },
    {
      id: 15,
      question: 'How do I book Facial Treatments in Dubai at ramacarepolyclinic?',
      answer: 'Booking Facial Treatments in Dubai is easy. Contact ramacarepolyclinic via phone or online to schedule a consultation and create a customized skin rejuvenation plan.'
    }
  ],
        resources: [
          {
            id: 1,
            text: 'Skin Boosters',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-boosters-dubai'
          },
          {
            id: 2,
            text: 'Derma Roller',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/derma-roller-dubai'
          },
          {
            id: 3,
            text: 'Skin Tightening',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/skin-tightening-dubai'
          },
          {
            id: 4,
            text: 'Microdermabrasion',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/microdermabrasion-dubai'
          },
          {
            id: 5,
            text: 'Skin Allergy',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-allergy-dubai'
          },
          {
            id: 6,
            text: 'Botox Hyperhidrosis',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/botox-hyperhidrosis-dubai'
          },
          {
            id: 7,
            text: 'Carboxy Therapy',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/carboxy-therapy-dubai'
          },
          {
            id: 8,
            text: 'Electrolysis',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/electrolysis-dubai'
          },
            {
            id: 9,
            text: 'Fillers',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/fillers-in-dubai'
          },
            {
            id: 10,
            text: 'Facial',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/facial'
          },
            {
            id: 11,
            text: 'HIFU',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hifu-dubai'
          },
            {
            id: 12,
            text: 'Face PRP',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/face-prp-in-dubai'
          },
            {
            id: 13,
            text: 'Botox',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/botox-dubai'
          },
            {
            id: 14,
            text: 'Mesotherapy',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mesotherapy-dubai'
          },
            {
            id: 15,
            text: 'Pigmentation',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/pigmentation-dubai'
          },
             {
            id: 16,
            text: 'Dark Circle',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/dark-circle-dubai'
          }
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
       subtitle: 'Verified testimonials from patients who achieved healthy, radiant skin',
       
        stats: [
          {
            id: 1,
            number: '4.8/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.8
          },
          {
            id: 2,
            number: '1,200+',
            label1: 'Patients Treated',
            label2: 'Success Stories',
            target: 1200
          },
          {
            id: 3,
            number: '96%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 96
          },
          {
            id: 4,
            number: '15+',
            label1: 'Years Experience',
            label2: 'In Dubai',
            target: 15
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment & Insurance',
        insuranceTitle: 'Insurance Support',
        paymentOptions: [
          'Cash, Credit & Debit Cards Accepted',
          ' Flexible Payment Plans Available',
          '0% Interest Installments (T&C Apply)'
        ],
        insuranceOptions: [
          'Accepted by select providers',
          'Detailed invoices for claims',
          ' Documentation assistance'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Facial Treatments in Dubai Today',
        description: 'Restore your skin’s natural radiance and health with Facial Treatments in Dubai at ramacarepolyclinic, where expertise meets safe, effective, and personalized care.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '1,200+ Patients',
            description: 'Successfully Treated'
          },
          {
            title: '4.8/5 Rating',
            description: 'Patient Reviews'
          }
      ]
    }
  },
  
   'aesthetic-dermatology-dubai-skin-treatment-hifu': {
        hero: {
            subtitle: 'Non-Surgical Skin Lifting & Tightening with Advanced Technology',
            description: 'Aging, sun exposure, and lifestyle factors gradually reduce skin firmness and elasticity. At ramacarepolyclinic, we offer HIFU in Dubai, a non-surgical ultrasound-based treatment that lifts sagging skin, improves firmness, and restores natural facial contours by stimulating collagen production.',
            rating: '4.9/5 Rating (500+ Reviews)',
            stats: [
              {
                id: 1,
                number: '94%',
                label: 'Patient Satisfaction'
              },
              {
                id: 2,
                number: '2500+',
                label: 'Hair Patients Treated'
              },
              {
                id: 3,
                number: '15+',
                label: 'Years of Experience'
              }
            ],
            ctaButtons: {
              primary: {
                text: 'Book Free Consultation',
                icon: 'calendar',
                link: '#book-consultation'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 XX XXX XXXX',
                icon: 'whatsapp'
              }
            },
            features: [
              ' DHA-Licensed Multispecialty Polyclinic',
              '  Experienced Aesthetic Doctors',
              'Safe, FDA-Approved HIFU Treatments'
            ],
            image: {
          src: '/images/hifu1.jpg',
          alt: 'HIFU in Dubai performed by specialists to tighten skin and improve facial contour without surgery.'
        },
            medicalNotice: {
              text: 'Safety & Medical Disclaimer: Results may vary based on age, skin type, and collagen response. All HIFU treatments at ramacarepolyclinic follow DHA-approved medical protocols and safety standards.',
              show: true
            }
          },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Skin Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed Ayurvedic doctors specializes in treating chronic and cosmetic skin concerns through holistic, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding HIFU',
        problemIntro: {
          title: 'Common Skin Aging Concerns',
          description: 'As collagen levels decline, skin loses firmness and elasticity. Many individuals want visible lifting without surgery or long recovery periods.'
        },
        solutionIntro: {
          title: 'Our Solution: HIFU in Dubai at ramacarepolyclinic',
          description: 'HIFU targets deeper skin layers without damaging the surface, stimulating collagen and tightening skin naturally over time.Patient-Centered Approach Includes:'
        },
     leftCards: [
  {
    id: 1,
    title: 'What Is HIFU?',
    description:
      'HIFU (High-Intensity Focused Ultrasound) is a non-surgical skin tightening treatment that delivers focused ultrasound energy into deeper skin layers. This energy stimulates collagen production, lifting and tightening sagging skin while improving texture and elasticity. HIFU in Dubai is widely trusted for natural-looking skin rejuvenation without surgery.'
  },
  {
    id: 2,
    title: 'Who Can Benefit from HIFU?',
    description:
      'HIFU is recommended for adults experiencing:',
    listItems: [
      'Mild to moderate facial sagging',
      'Early signs of aging',
      'Loss of jawline definition',
      'Loose skin on face or neck',
      'Fine lines and wrinkles',
      'Preference for non-surgical skin lifting'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description:
      'Each session lasts 45–90 minutes, depending on the treatment area. Visible lifting appears gradually over 2–3 months, with optimal results seen at 3–6 months.'
  },
  {
    id: 4,
    title: 'Trusted HIFU Care You Can Depend On',
    description: '',
    listItems: [
      'Doctor-led HIFU treatments',
      'Non-invasive and precise skin tightening',
      'Natural collagen stimulation',
      'Suitable for face, neck, and jawline',
      'Minimal downtime with gradual, natural results'
    ]
  }
],
      rootCauses: [
  {
    id: 1,
    title: 'Sagging Skin',
    description: 'Drooping cheeks, jawline, and neck',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'   
  },
  {
    id: 2,
    title: 'Fine Lines & Wrinkles',
    description: 'Aging, sun exposure, and facial movement',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'      
  },
  {
    id: 3,
    title: 'Loss of Facial Contours',
    description: 'Reduced jawline and cheek definition',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'      
  },
  {
    id: 4,
    title: 'Skin Laxity',
    description: 'Loose or crepey skin',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'        
  },
  {
    id: 5,
    title: 'Early Aging',
    description: 'Stress, sun damage, lifestyle factors',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'        
  }
],
      quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical injection' },
  { label: 'Anesthesia', value: 'Not required (topical optional)' },
  { label: 'Recovery Time', value: 'Minimal, usually immediate' },
  { label: 'Side Effects', value: 'Temporary redness, swelling, or mild bruising' }
],
       approachCards: [
  {
    id: 1,
    title: 'Detailed facial and skin assessment',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Personalized HIFU treatment planning',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Doctor-administered precision therapy',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Continuous safety monitoring',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Post-treatment guidance',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 6,
    title: 'Result',
    description:
      'Lifted, firmer skin, improved elasticity, restored facial contours, and natural rejuvenation—without surgery.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
     healingJourney: {
  title: 'Your Dermal Fillers Journey',
  description: '',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Facial Assessment',
      duration: '',
      description:
        'Understanding facial structure, wrinkle patterns, and patient goals.',
      keyActivities: [
        'Facial analysis and volume mapping',
        'Discussion of patient expectations',
        'Personalized filler selection and plan'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Personalized Treatment Planning',
      duration: '',
      description:
        'Selection of appropriate filler type, dosage, and injection technique.',
      keyActivities: [
        'Choosing FDA/DHA-approved filler products',
        'Planning precise injection areas',
        'Preparing skin for treatment'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Filler Treatment Session',
      duration: '',
      description:
        'Precise, doctor-administered injections for target areas like cheeks, lips, nasolabial folds, or jawline.',
      keyActivities: [
        'Gentle, precise injections',
        'Maintaining natural facial expressions',
        'Immediate post-treatment guidance'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Follow-Up & Aftercare Support',
      duration: '',
      description:
        'Monitoring results, minor adjustments if needed, and post-treatment guidance to maintain natural outcomes.',
      keyActivities: [
        'Check wrinkle smoothing and volume restoration',
        'Post-treatment care instructions',
        'Recommendations for long-term facial health'
      ],
      side: 'left'
    }
  ]
},
      benefits: {
        title: 'Clinically Observed Benefits',
        description: 'Based on 15+ years of providing skin treatment in Dubai.',
        benefits: [
          {
            id: 1,
            title: ' Non-surgical skin lifting',
            percentage: 91,
            description: null
          },
          {
            id: 2,
            title: '  Improved firmness and elasticity ',
            percentage: 88,
            description: null
          },
          {
            id: 3,
            title: ' Reduced sagging and wrinkles',
            percentage: 95,
            description: null
          },
          {
            id: 4,
            title: 'Enhanced facial contours',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: 'Youthful, refreshed appearance',
            percentage: 93,
            description: null
          },
        ],
        comparisonTitle: 'HIFU vs. Conventional Skin Tightening Treatments',
        comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'HIFU',
          traditional: 'Conventional Treatments'
        },
        comparisonData: [
          {
            feature: 'Results	',
            ayurvedic: 'Gradual, natural lifting',
            conventional: 'Surgical or temporary'
          },
          {
            feature: 'Invasiveness',
            ayurvedic: 'Non-surgical',
            conventional: 'Surgery or injectables'
          },
          {
            feature: 'Downtime',
            ayurvedic: 'Minimal',
            conventional: 'Recovery often required'
          },
          {
            feature: 'Precision',
            ayurvedic: 'Targets deep tissue layers',
            conventional: 'Surface-level treatment'
          },
          {
            feature: 'Longevity',
            ayurvedic: '6–12 months with maintenance',
            conventional: 'Short or permanent'
          },
          {
            feature: 'Safety',
            ayurvedic: 'Doctor-administered, FDA-approved',
            conventional: 'Varies'
          }
        ]
      },
  pricing: {
  title: 'Transparent Pricing & Treatment Packages',
  description:
    'Our HIFU in Dubai packages are customized based on your skin condition, treatment area, and lifting goals, ensuring safe, effective, and visibly natural results under medical supervision.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For mild to moderate skin laxity & early signs of aging',
      duration: '6 sessions over 3 months',
      features: [
        'Initial consultation and skin assessment',
        '6 HIFU treatment sessions',
        'Targeted ultrasound energy for skin tightening',
        'Basic diet and lifestyle guidance to support skin health',
        'Home care recommendations'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For visible sagging, fine lines & facial contour improvement',
      duration: '12 sessions over 4 months',
      features: [
        'Detailed skin analysis and lifting assessment',
        '12 HIFU sessions with advanced protocols',
        'Customized treatment planning for face or body areas',
        'Diet and lifestyle consultation for collagen support',
        'Monthly progress monitoring'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete lifting, firming & long-term rejuvenation program',
      duration: '24 sessions over 6 months',
      features: [
        'All Advanced Package benefits',
        'Intensive HIFU treatment protocol',
        'Targeted skin tightening for face, neck, or body',
        'Support for collagen regeneration and skin firmness',
        'Stress and wellness guidance',
        'Quarterly progress reviews',
        'Long-term skin maintenance care'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
  faq: {
  title: 'Frequently Asked Questions (FAQs) – HIFU Treatment in Dubai',
  description: null,
  faqs: [
    {
      id: 1,
      question: 'What is HIFU treatment in Dubai?',
      answer:
        'HIFU (High-Intensity Focused Ultrasound) is a non-invasive skin tightening procedure that stimulates collagen production to lift, firm, and rejuvenate the face and neck safely.'
    },
    {
      id: 2,
      question: 'Is HIFU safe for the skin?',
      answer:
        'Yes, HIFU is clinically approved and safe when performed by certified specialists. It targets deeper skin layers without damaging the surface, ensuring a controlled, effective treatment.'
    },
    {
      id: 3,
      question: 'Who is an ideal candidate for HIFU?',
      answer:
        'HIFU suits individuals with mild to moderate skin laxity, fine lines, sagging cheeks, or early signs of aging. A consultation determines suitability and treatment plan.'
    },
    {
      id: 4,
      question: 'How long does a HIFU session take?',
      answer:
        'A HIFU session typically lasts 45–90 minutes depending on the treatment area and desired results. Small areas may take less time, while full face and neck take longer.'
    },
    {
      id: 5,
      question: 'Is HIFU painful?',
      answer:
        'Most patients feel mild tingling or warmth during treatment. Topical anesthetics or numbing gels can be used for comfort. Discomfort is minimal and temporary.'
    },
    {
      id: 6,
      question: 'When will I see results after HIFU?',
      answer:
        'Some lifting and tightening may be visible immediately, but optimal results appear gradually over 2–3 months as collagen production increases.'
    },
    {
      id: 7,
      question: 'How many HIFU sessions are required?',
      answer:
        'Typically, 1–2 sessions are sufficient for noticeable improvement. Additional sessions may be recommended for more extensive lifting or maintenance.'
    },
    {
      id: 8,
      question: 'How long do HIFU results last?',
      answer:
        'Results generally last 12–18 months, depending on age, skin condition, and lifestyle. Periodic maintenance sessions help sustain long-term effects.'
    },
    {
      id: 9,
      question: 'Can HIFU replace a facelift?',
      answer:
        'HIFU provides non-surgical lifting and tightening, suitable for mild to moderate sagging. It is not a substitute for surgical facelifts but offers noticeable improvement without downtime.'
    },
    {
      id: 10,
      question: 'Are there any side effects of HIFU?',
      answer:
        'Mild redness, swelling, or tingling may occur after treatment but usually resolves within a few hours. Rarely, minor bruising may appear in sensitive areas.'
    },
    {
      id: 11,
      question: 'Is there downtime after HIFU treatment?',
      answer:
        'No significant downtime is required. Patients can resume normal activities immediately, making it an ideal non-invasive procedure for busy lifestyles.'
    },
    {
      id: 12,
      question: 'Can HIFU treat the neck and décolletage?',
      answer:
        'Yes, HIFU can be applied to the neck, jawline, and upper chest to improve skin firmness and reduce sagging in these areas.'
    },
    {
      id: 13,
      question: 'Can HIFU be combined with other treatments?',
      answer:
        'Yes, HIFU can be safely combined with injectables, chemical peels, or PRP to enhance overall facial rejuvenation under professional guidance.'
    },
    {
      id: 14,
      question: 'How much does HIFU cost in Dubai?',
      answer:
        'HIFU cost in Dubai varies based on treatment area, number of sessions, and device used. Packages at certified clinics ensure transparent pricing without hidden fees.'
    },
    {
      id: 15,
      question: 'Why choose Rama Care Polyclinic for HIFU in Dubai?',
      answer:
        'Rama Care Polyclinic offers DHA-licensed specialists, advanced HIFU devices, personalized treatment plans, and professional medical supervision to ensure safe, effective, and natural-looking results.'
    }
  ],
        resources: [
          {
            id: 1,
            text: 'Skin Boosters',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-boosters-dubai'
          },
          {
            id: 2,
            text: 'Derma Roller',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/derma-roller-dubai'
          },
          {
            id: 3,
            text: 'Skin Tightening',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/skin-tightening-dubai'
          },
          {
            id: 4,
            text: 'Microdermabrasion',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/microdermabrasion-dubai'
          },
          {
            id: 5,
            text: 'Skin Allergy',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-allergy-dubai'
          },
          {
            id: 6,
            text: 'Botox Hyperhidrosis',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/botox-hyperhidrosis-dubai'
          },
          {
            id: 7,
            text: 'Carboxy Therapy',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/carboxy-therapy-dubai'
          },
          {
            id: 8,
            text: 'Electrolysis',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/electrolysis-dubai'
          },
            {
            id: 9,
            text: 'Fillers',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/fillers-in-dubai'
          },
            {
            id: 10,
            text: 'Facial',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/facial'
          },
            {
            id: 11,
            text: 'HIFU',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hifu-dubai'
          },
            {
            id: 12,
            text: 'Face PRP',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/face-prp-in-dubai'
          },
            {
            id: 13,
            text: 'Botox',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/botox-dubai'
          },
            {
            id: 14,
            text: 'Mesotherapy',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mesotherapy-dubai'
          },
            {
            id: 15,
            text: 'Pigmentation',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/pigmentation-dubai'
          },
             {
            id: 16,
            text: 'Dark Circle',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/dark-circle-dubai'
          }
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
        subtitle: 'Verified testimonials from patients who achieved healthy, radiant skin',
       
        stats: [
          {
            id: 1,
            number: '4.8/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.8
          },
          {
            id: 2,
            number: '1,200+',
            label1: 'Patients Treated',
            label2: 'Success Stories',
            target: 1200
          },
          {
            id: 3,
            number: '96%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 96
          },
          {
            id: 4,
            number: '15+',
            label1: 'Years Experience',
            label2: 'In Dubai',
            target: 15
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment & Insurance',
        insuranceTitle: 'Insurance Support',
        paymentOptions: [
          'Cash, Credit & Debit Cards Accepted',
          ' Flexible Payment Plans Available',
          '0% Interest Installments (T&C Apply)'
        ],
        insuranceOptions: [
          'Accepted by select providers',
          'Detailed invoices for claims',
          ' Documentation assistance'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book HIFU in Dubai Today',
        description: 'Achieve firmer, lifted, and youthful skin with HIFU in Dubai at ramacarepolyclinic, where advanced technology meets expert, personalized care.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '1,200+ Patients',
            description: 'Successfully Treated'
          },
          {
            title: '4.8/5 Rating',
            description: 'Patient Reviews'
          }
      ]
    }
  },


  'aesthetic-dermatology-dubai-skin-treatment-botox': {
        hero: {
            subtitle: 'Safe, Natural-Looking Wrinkle Reduction with Medical Expertise',
            description: 'Fine lines and facial wrinkles often develop due to aging, stress, and repeated facial expressions. At ramacarepolyclinic, we offer Botox in Dubai to gently relax targeted facial muscles, helping you achieve a smoother, refreshed appearance without surgery.',
            rating: '4.9/5 Rating (500+ Reviews)',
            stats: [
              {
                id: 1,
                number: '94%',
                label: 'Patient Satisfaction'
              },
              {
                id: 2,
                number: '2500+',
                label: 'Hair Patients Treated'
              },
              {
                id: 3,
                number: '15+',
                label: 'Years of Experience'
              }
            ],
            ctaButtons: {
              primary: {
                text: 'Book Free Consultation',
                icon: 'calendar',
                link: '#book-consultation'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 XX XXX XXXX',
                icon: 'whatsapp'
              }
            },
            features: [
              '  DHA-Licensed Multispecialty Polyclinic',
              '  Experienced Aesthetic Doctors',
              ' FDA-Approved Botox Treatments'
            ],
            image: {
          src: '/images/filler.jpg',
          alt: 'Botox treatment performed by specialists to reduce fine lines and wrinkles for a smoother, youthful appearance.'
        },
            medicalNotice: {
              text: 'Safety & Medical Disclaimer: Results may vary depending on muscle activity and individual response. All Botox treatments at ramacarepolyclinic follow DHA-approved medical protocols and safety standards.',
              show: true
            }
          },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Skin Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed Ayurvedic doctors specializes in treating chronic and cosmetic skin concerns through holistic, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Botox Treatment',
        problemIntro: {
          title: 'The Problem: Signs of Aging and Facial Concerns',
          description: 'Repeated muscle movement leads to wrinkles that deepen over time. Many people want visible improvement without altering natural expressions.'
        },
        solutionIntro: {
  title: 'Our Solution: Botox in Dubai',
  description:
    'Our Botox in Dubai offers a safe, effective, and minimally invasive way to reduce signs of aging and rejuvenate your appearance.'
},
    leftCards: [
  {
    id: 1,
    title: 'What Is Botox?',
    description:
      'Botox is a purified protein used to temporarily relax specific facial muscles that cause wrinkles. It helps soften lines on the forehead, around the eyes, and between the eyebrows while maintaining a natural look. Botox in Dubai is widely trusted for safe, non-surgical facial rejuvenation.'
  },
  {
    id: 2,
    title: 'Who Can Benefit from Botox?',
    description:
      'Botox is recommended for individuals who experience:',
    listItems: [
      'Forehead lines and frown lines',
      'Crow’s feet around the eyes',
      'Early signs of facial aging',
      'Facial muscle tension',
      'Desire for non-invasive aesthetic improvement'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description:
      'A professional consultation ensures the treatment suits your facial structure and goals.'
  },
  {
    id: 4,
    title: 'Trusted Botox Care You Can Depend On',
    description: '',
    listItems: [
      'Doctor-led Botox injections',
      'Natural facial expressions preserved',
      'Customized treatment planning',
      'High safety and hygiene standards',
      'Minimal downtime'
    ]
  }
],
   rootCauses: [
  {
    id: 1,
    title: 'Smooths Fine Lines & Wrinkles',
    description:
      'Relaxes facial muscles to reduce dynamic wrinkles for a youthful, refreshed look.',
    severity: null,
    severityColor: null
  },
  {
    id: 2,
    title: 'Prevents Future Wrinkles',
    description:
      'Regular treatments prevent the formation of new lines by controlling overactive muscle movement.',
    severity: null,
    severityColor: null
  },
  {
    id: 3,
    title: 'Quick & Comfortable Procedure',
    description:
      'Non-surgical injections with minimal discomfort and virtually no downtime, allowing you to resume daily activities immediately.',
    severity: null,
    severityColor: null
  },
  {
    id: 4,
    title: 'Customized Treatment Plans',
    description:
      'Tailored according to your facial structure, skin type, and desired results for natural-looking outcomes.',
    severity: null,
    severityColor: null
  },
  {
    id: 5,
    title: 'Long-Lasting Results',
    description:
      'Reduces visible wrinkles, improves facial symmetry, and enhances confidence with smooth, rejuvenated skin.',
    severity: null,
    severityColor: null
  }
],
      quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical injection' },
  { label: 'Anesthesia', value: 'Not required (topical optional)' },
  { label: 'Recovery Time', value: 'Minimal, usually immediate' },
  { label: 'Side Effects', value: 'Temporary redness, swelling, or mild bruising' }
],
      approachCards: [
  {
    id: 1,
    title: 'Smooths Fine Lines & Wrinkles',
    description:
      'Relaxes facial muscles to reduce dynamic wrinkles for a youthful, refreshed look.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Prevents Future Wrinkles',
    description:
      'Regular treatments prevent the formation of new lines by controlling overactive muscle movement.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Quick & Comfortable Procedure',
    description:
      'Non-surgical injections with minimal discomfort and virtually no downtime, allowing you to resume daily activities immediately.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Customized Treatment Plans',
    description:
      'Tailored according to your facial structure, skin type, and desired results for natural-looking outcomes.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Long-Lasting Results',
    description:
      'Reduces visible wrinkles, improves facial symmetry, and enhances confidence with smooth, rejuvenated skin.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
    healingJourney: {
  title: 'Your Botox Journey: Step by Step',
  description: 'Structured, transparent approach to ensure optimal results, natural-looking outcomes, and patient comfort.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation (60 min)',
      duration: 'Day 1',
      description: 'Comprehensive facial assessment to understand wrinkle patterns, muscle activity, and aesthetic goals.',
      keyActivities: [
        'Facial analysis and wrinkle mapping',
        'Skin type evaluation',
        'Discussion of patient goals and expectations',
        'Personalized Botox treatment plan creation'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Preparation & Pre-Treatment Guidance',
      duration: 'Day 2',
      description: 'Preparing skin for safe and effective Botox injection.',
      keyActivities: [
        'Guidance on avoiding alcohol or blood-thinning medications',
        'Instructions for minimal exercise or sun exposure before treatment',
        'Optional topical numbing application for comfort'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Botox Injection Session',
      duration: 'Day 3–7',
      description: 'Precise, doctor-administered injections targeting specific facial muscles to reduce wrinkles and fine lines.',
      keyActivities: [
        'Targeted injections in the forehead, frown lines, crow’s feet, or other areas',
        'Gentle technique to maintain natural expressions',
        'Immediate post-treatment guidance for best results'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Follow-Up & Monitoring',
      duration: 'Weeks 2–6',
      description: 'Ensure optimal outcomes and address any concerns.',
      keyActivities: [
        'Assessment of wrinkle reduction and facial symmetry',
        'Minor adjustments if necessary',
        'Recommendations for skin care and lifestyle support'
      ],
      side: 'left'
    },
    {
      id: 5,
      number: '05',
      title: 'Maintenance & Long-Term Planning',
      duration: 'Months 3–6',
      description: 'Sustaining results and planning future Botox sessions for ongoing facial rejuvenation.',
      keyActivities: [
        'Periodic check-ins for optimal wrinkle management',
        'Customized treatment intervals based on muscle activity',
        'Guidance for long-term skin health and appearance'
      ],
      side: 'right'
    }
  ]
},
      benefits: {
        title: 'Clinically Observed Benefits',
        description: 'Based on 15+ years of providing skin treatment in Dubai.',
        benefits: [
          {
            id: 1,
            title: ' Reduced fine lines and wrinkles',
            percentage: 91,
            description: null
          },
          {
            id: 2,
            title: 'Natural facial expressions',
            percentage: 88,
            description: null
          },
          {
            id: 3,
            title: ' Smoother skin texture',
            percentage: 95,
            description: null
          },
          {
            id: 4,
            title: 'Refreshed, youthful appearance',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: ' Improved self-confidence',
            percentage: 93,
            description: null
          },
        ],
        comparisonTitle: 'Botox vs. Conventional Anti-Aging Treatments',
        comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Botox',
          traditional: 'Conventional Treatments'
        },
        comparisonData: [
          {
            feature: 'Treatment Type	',
            ayurvedic: 'Non-surgical injections',
            conventional: 'Creams or surgery'
          },
          {
            feature: 'Results',
            ayurvedic: 'Visible within days',
            conventional: 'Gradual or invasive'
          },
          {
            feature: 'Downtime',
            ayurvedic: 'Minimal',
            conventional: 'May require recovery'
          },
          {
            feature: 'Precision',
            ayurvedic: 'Targets specific muscles',
            conventional: 'General skin care'
          },
          {
            feature: 'Longevity',
            ayurvedic: '3–6 months',
            conventional: 'Short or permanent'
          },
          {
            feature: 'Safety',
            ayurvedic: 'Doctor-administered',
            conventional: 'Varies'
          }
        ]
      },
   pricing: {
  title: 'Transparent Pricing & Customized Botox Packages',
  description:
    'Botox treatments at ramacare polylinic are personalized based on the treatment area, number of units, and your aesthetic goals. Choose the package that fits your needs and desired results.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For mild to moderate wrinkles',
      duration: '1–2 areas treatment, 1 session per month',
      features: [
        'Initial facial assessment',
        'Targeted Botox injection in selected areas',
        'Post-treatment care and guidance',
        'Follow-up consultation for optimal results'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For moderate to deep wrinkles or multiple areas',
      duration: '2–3 sessions over 3 months',
      features: [
        'Comprehensive facial analysis',
        'Botox injections in multiple areas (forehead, frown lines, crow’s feet)',
        'Personalized dosage planning',
        'Post-treatment follow-ups and adjustments',
        'Lifestyle and skin care guidance'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete facial rejuvenation program',
      duration: '4–6 sessions over 6 months',
      features: [
        'All Advanced Package benefits',
        'Full-face Botox coverage',
        'Maintenance and long-term wrinkle management plan',
        'Personalized skin and wellness guidance',
        'Quarterly check-ins to sustain results'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
 faq: {
  title: 'Frequently Asked Questions About Botox in Dubai',
  description: 'Botox Treatment in Dubai',
  faqs: [
    {
      id: 1,
      question: 'What is Botox in Dubai?',
      answer: 'Botox in Dubai is a medical aesthetic treatment that relaxes targeted facial muscles to reduce wrinkles, fine lines, and expression marks, creating a smoother, refreshed appearance without surgery or downtime.'
    },
    {
      id: 2,
      question: 'Who is an ideal candidate for Botox in Dubai?',
      answer: 'Botox in Dubai is suitable for adults with forehead lines, frown lines, crow’s feet, or early aging signs who want natural-looking wrinkle reduction under medical supervision.'
    },
    {
      id: 3,
      question: 'How does Botox in Dubai work?',
      answer: 'Botox in Dubai works by temporarily relaxing overactive facial muscles, preventing repetitive movements that cause wrinkles while allowing the skin to appear smoother and more youthful naturally.'
    },
    {
      id: 4,
      question: 'Is Botox in Dubai safe?',
      answer: 'Yes, Botox in Dubai is safe when administered by trained DHA-licensed doctors using authentic FDA-approved products and following strict medical safety protocols and hygiene standards.'
    },
    {
      id: 5,
      question: 'Does Botox in Dubai look natural?',
      answer: 'When performed correctly, Botox in Dubai provides natural results by softening wrinkles while preserving facial expressions, avoiding a frozen or artificial appearance.'
    },
    {
      id: 6,
      question: 'Is Botox in Dubai painful?',
      answer: 'Botox in Dubai involves minimal discomfort; injections are quick and well-tolerated. Most patients experience only mild pinching sensations without needing anesthesia.'
    },
    {
      id: 7,
      question: 'How long does a Botox in Dubai session take?',
      answer: 'A Botox in Dubai session typically takes fifteen to thirty minutes, including consultation assessment, injections, and brief aftercare guidance, making it convenient for busy schedules.'
    },
    {
      id: 8,
      question: 'When will I see results from Botox in Dubai?',
      answer: 'Results from Botox in Dubai usually start appearing within three to five days, with full results visible in about ten to fourteen days after treatment.'
    },
    {
      id: 9,
      question: 'How long do Botox in Dubai results last?',
      answer: 'Botox in Dubai results generally last three to six months, depending on muscle activity, lifestyle, and individual response, with maintenance sessions recommended for lasting benefits.'
    },
    {
      id: 10,
      question: 'Is there downtime after Botox in Dubai?',
      answer: 'Botox in Dubai requires minimal downtime; patients can resume normal activities immediately while following simple aftercare instructions provided by the doctor.'
    },
    {
      id: 11,
      question: 'Can Botox in Dubai be used for preventive aging?',
      answer: 'Yes, Botox in Dubai is commonly used as a preventive treatment to reduce muscle movement, early slowing wrinkle formation, and maintain youthful skin longer.'
    },
    {
      id: 12,
      question: 'Are there side effects of Botox in Dubai?',
      answer: 'Side effects of Botox in Dubai are usually mild, such as temporary redness, swelling, or bruising at the injection site, and resolve quickly under proper medical care.'
    },
    {
      id: 13,
      question: 'Can men get Botox in Dubai?',
      answer: 'Botox in Dubai is suitable for both men and women seeking wrinkle reduction, facial rejuvenation, and a refreshed appearance while maintaining masculine or feminine facial features.'
    },
    {
      id: 14,
      question: 'How often should I repeat Botox in Dubai?',
      answer: 'Most patients repeat Botox in Dubai every three to six months based on the doctor\'s recommendations, muscle strength, and desired wrinkle control results.'
    },
    {
      id: 15,
      question: 'Where can I get safe Botox in Dubai?',
      answer: 'You can receive safe Botox in Dubai at ramacarepolyclinic, where experienced medical professionals provide personalized treatments focused on natural results and patient safety.'
    }
  ],
        resources: [
          {
            id: 1,
            text: 'Skin Boosters',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-boosters-dubai'
          },
          {
            id: 2,
            text: 'Derma Roller',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/derma-roller-dubai'
          },
          {
            id: 3,
            text: 'Skin Tightening',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/skin-tightening-dubai'
          },
          {
            id: 4,
            text: 'Microdermabrasion',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/microdermabrasion-dubai'
          },
          {
            id: 5,
            text: 'Skin Allergy',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-allergy-dubai'
          },
          {
            id: 6,
            text: 'Botox Hyperhidrosis',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/botox-hyperhidrosis-dubai'
          },
          {
            id: 7,
            text: 'Carboxy Therapy',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/carboxy-therapy-dubai'
          },
          {
            id: 8,
            text: 'Electrolysis',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/electrolysis-dubai'
          },
            {
            id: 9,
            text: 'Fillers',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/fillers-in-dubai'
          },
            {
            id: 10,
            text: 'Facial',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/facial'
          },
            {
            id: 11,
            text: 'HIFU',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hifu-dubai'
          },
            {
            id: 12,
            text: 'Face PRP',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/face-prp-in-dubai'
          },
            {
            id: 13,
            text: 'Botox',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/botox-dubai'
          },
            {
            id: 14,
            text: 'Mesotherapy',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mesotherapy-dubai'
          },
            {
            id: 15,
            text: 'Pigmentation',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/pigmentation-dubai'
          },
             {
            id: 16,
            text: 'Dark Circle',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/dark-circle-dubai'
          }
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
       subtitle: 'Verified testimonials from patients who achieved healthy, radiant skin',
        stats: [
          {
            id: 1,
            number: '4.8/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.8
          },
          {
            id: 2,
            number: '1,200+',
            label1: 'Patients Treated',
            label2: 'Success Stories',
            target: 1200
          },
          {
            id: 3,
            number: '96%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 96
          },
          {
            id: 4,
            number: '15+',
            label1: 'Years Experience',
            label2: 'In Dubai',
            target: 15
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment & Insurance',
        insuranceTitle: 'Insurance Support',
        paymentOptions: [
          'Cash, Credit & Debit Cards Accepted',
          ' Flexible Payment Plans Available',
          '0% Interest Installments (T&C Apply)'
        ],
        insuranceOptions: [
          'Accepted by select providers',
          'Detailed invoices for claims',
          ' Documentation assistance'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Botox in Dubai Today',
        description: 'Refresh your look with Botox in Dubai at ramacarepolyclinic, where medical expertise meets natural, confident results.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '1,200+ Patients',
            description: 'Successfully Treated'
          },
          {
            title: '4.8/5 Rating',
            description: 'Patient Reviews'
          }
      ]
    }
  },

  'aesthetic-dermatology-dubai-skin-treatment-pigmentation': {
        hero: {
            subtitle: 'Advanced Solutions for Uneven Skin Tone with Medical Expertise',
            description: 'Uneven skin tone, dark spots, and hyperpigmentation can occur due to sun exposure, aging, hormones, or skin conditions. At ramacarepolyclinic, we provide Pigmentation Treatment in Dubai to restore clear, radiant, and even-toned skin safely and effectively.',
            rating: '4.9/5 Rating (500+ Reviews)',
            stats: [
              {
                id: 1,
                number: '94%',
                label: 'Patient Satisfaction'
              },
              {
                id: 2,
                number: '2500+',
                label: 'Hair Patients Treated'
              },
              {
                id: 3,
                number: '15+',
                label: 'Years of Experience'
              }
            ],
            ctaButtons: {
              primary: {
                text: 'Book Free Consultation',
                icon: 'calendar',
                link: '#book-consultation'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 XX XXX XXXX',
                icon: 'whatsapp'
              }
            },
            features: [
              ' DHA-Licensed Multispecialty Polyclinic',
              ' Experienced Dermatologists & Aesthetic Doctors',
              ' Safe, Clinically-Proven Pigmentation Treatments'
            ],
           image: {
          src: '/images/pig.jpg',
          alt: 'Pigmentation treatment performed by specialists to reduce dark spots and achieve a more even skin tone.'
        },
            medicalNotice: {
              text: 'Safety & Medical Disclaimer: Results may vary depending on muscle activity and individual response. All Botox treatments at ramacarepolyclinic follow DHA-approved medical protocols and safety standards.',
              show: true
            }
          },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Skin Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed Ayurvedic doctors specializes in treating chronic and cosmetic skin concerns through holistic, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Pigmentation Treatment',
        problemIntro: {
          title: 'Causes of Pigmentation',
          description: 'Hyperpigmentation develops due to sun damage, hormonal changes, aging, inflammation, or certain medications. Untreated, it can worsen over time, affecting skin tone and confidence.'
        },
        solutionIntro: {
          title: 'Our Solution: Pigmentation Treatment in Dubai at ramacarepolyclinic',
          description: 'Targeted Pigmentation Correction, Our treatments focus on safely reducing pigmentation, restoring even skin tone, and enhancing radiance while maintaining natural skin texture.Patient-Centered Approach'
        },
    leftCards: [
  {
    id: 1,
    title: 'What Is It?',
    description: 'Pigmentation Treatment in Dubai involves medically guided therapies—like laser treatment, chemical peels, or topical solutions—to reduce dark spots, melasma, and uneven skin tone for a natural, glowing complexion.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description: 'Individuals experiencing:',
    listItems: [
      'Sunspots or age spots',
      'Melasma or hormonal pigmentation',
      'Post-inflammatory hyperpigmentation',
      'Uneven skin tone or dark patches',
      'Desire for a safe, non-invasive skin rejuvenation'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description: 'Visible improvement typically occurs after 2–4 sessions. Full results may take 6–12 weeks, depending on skin type, pigmentation severity, and chosen treatment method.'
  },
  {
    id: 4,
    title: 'Trusted Pigmentation Care You Can Depend On',
    description: '',
    listItems: [
      'Doctor-led pigmentation evaluation',
      'Safe and targeted treatment plans',
      'Advanced lasers and topical therapies',
      'Personalized skin assessment',
      'Minimal downtime and high safety standards'
    ]
  }
],
    rootCauses: [
  {
    id: 1,
    title: 'Sunspots',
    description: 'Caused by UV exposure, more visible on face and hands',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'   
  },
  {
    id: 2,
    title: 'Melasma',
    description: 'Hormonal pigmentation, often appearing on cheeks and forehead',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'      
  },
  {
    id: 3,
    title: 'Post-Inflammatory Marks',
    description: 'Dark patches after acne, eczema, or injury',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'          
  },
  {
    id: 4,
    title: 'Uneven Skin Tone',
    description: 'Discoloration or dullness across the face',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'        
  },
  {
    id: 5,
    title: 'Aging & Lifestyle',
    description: 'Stress, pollution, and sun exposure worsen pigmentation',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'        
  }
],
     quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical / laser / topical therapy' },
  { label: 'Anesthesia', value: 'Not required (topical optional)' },
  { label: 'Recovery Time', value: 'Minimal, may have mild redness' },
  { label: 'Side Effects', value: 'Temporary redness, mild peeling, rare irritation' }
],
       approachCards: [
  {
    id: 1,
    title: 'Comprehensive skin assessment',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Personalized treatment plan',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Choice of laser, chemical peels, or topical therapy',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Gentle, precise medical administration',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Post-treatment care and guidance',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 6,
    title: 'Result',
    description: 'Clearer, more even-toned skin, reduced dark spots, rejuvenated complexion, and improved confidence.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
  healingJourney: {
  title: 'Your Pigmentation Treatment Journey',
  description: '',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Skin Assessment',
      duration: '',
      description: 'Detailed evaluation of pigmentation type, skin tone, and patient goals.',
      keyActivities: [
        'Skin analysis and mapping of dark spots',
        'Discussion of treatment expectations',
        'Personalized plan creation'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Personalized Treatment Planning',
      duration: '',
      description: 'Selection of treatment type and method—laser therapy, chemical peel, or topical regimen.',
      keyActivities: [
        'Choosing safe, DHA-approved modalities',
        'Determining the number of sessions',
        'Preparing skin for treatment'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Pigmentation Treatment Session',
      duration: '',
      description: 'Precise application of selected treatment to target pigmentation areas.',
      keyActivities: [
        'Laser or peel therapy with medical supervision',
        'Gentle, controlled application',
        'Immediate post-treatment guidance'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Follow-Up & Aftercare Support',
      duration: '',
      description: 'Monitoring results, minor adjustments if needed, and advice for skin maintenance.',
      keyActivities: [
        'Assess improvement in pigmentation',
        'Recommend sun protection and topical care',
        'Plan for additional sessions if required'
      ],
      side: 'left'
    }
  ]
},
      benefits: {
        title: 'Clinically Observed Benefits',
        description: 'Based on 15+ years of providing skin treatment in Dubai.',
        benefits: [
          {
            id: 1,
            title: '  Reduced dark spots and pigmentation',
            percentage: 91,
            description: null
          },
          {
            id: 2,
            title: 'Even, radiant skin tone',
            percentage: 88,
            description: null
          },
          {
            id: 3,
            title: 'Refreshed and youthful appearance',
            percentage: 95,
            description: null
          },
          {
            id: 4,
            title: ' Non-invasive and safe',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: 'Boosted confidence',
            percentage: 93,
            description: null
          },
        ],
        comparisonTitle: 'Pigmentation Treatment vs. Conventional Skin Care',
        comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Pigmentation Treatment',
          traditional: 'Conventional Treatments'
        },
        comparisonData: [
          {
            feature: 'Results	',
            ayurvedic: 'Visible after few sessions',
            conventional: 'Gradual, often limited effect'
          },
          {
            feature: 'Invasiveness',
            ayurvedic: 'Non-surgical, targeted',
            conventional: 'Creams only, less effective'
          },
          {
            feature: 'Downtime',
            ayurvedic: 'Minimal',
            conventional: 'Usually none but slow results'
          },
          {
            feature: 'Precision',
            ayurvedic: 'Targets affected areas',
            conventional: 'General skin care'
          },
          {
            feature: 'Longevity',
            ayurvedic: 'Long-lasting with follow-up',
            conventional: 'Temporary improvements'
          },
          {
            feature: 'Customization',
            ayurvedic: 'Highly personalized',
            conventional: 'Limited flexibility'
          }
        ]
      },
  pricing: {
  title: 'Transparent Pricing & Customized Pigmentation Packages',
  description:
    'Pigmentation treatments at ramacare polyclinic are personalized based on pigmentation severity, skin type, and aesthetic goals. Choose the package that best fits your needs and desired results.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For mild pigmentation or uneven tone',
      duration: '1–2 areas treatment, 1 session per month',
      features: [
        'Initial skin assessment',
        'Targeted topical or laser therapy',
        'Post-treatment guidance and follow-up'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For moderate pigmentation or multiple areas',
      duration: '2–3 sessions over 3 months',
      features: [
        'Comprehensive skin evaluation',
        'Targeted laser or chemical peel therapy',
        'Personalized treatment planning',
        'Follow-up consultations and adjustments',
        'Lifestyle and sun protection guidance'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete pigmentation correction program',
      duration: '4–6 sessions over 6 months',
      features: [
        'All Advanced Package benefits',
        'Full-face treatment coverage',
        'Long-term pigmentation management plan',
        'Personalized skin and wellness guidance',
        'Quarterly check-ins to sustain results'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
 faq: {
  title: 'Frequently Asked Questions About Pigmentation Treatment in Dubai',
  description: 'Pigmentation Treatment in Dubai',
  faqs: [
    {
      id: 1,
      question: 'What is Pigmentation Treatment in Dubai?',
      answer: 'Pigmentation Treatment in Dubai reduces dark spots, uneven skin tone, and sun damage using safe, doctor-led therapies like laser treatment, chemical peels, and topical solutions for radiant, even skin.'
    },
    {
      id: 2,
      question: 'Who can benefit from Pigmentation Treatment in Dubai?',
      answer: 'Adults with sunspots, melasma, post-inflammatory pigmentation, or uneven skin tone can benefit from Pigmentation Treatment in Dubai to restore a clear, bright, and youthful complexion safely.'
    },
    {
      id: 3,
      question: 'How long does Pigmentation Treatment in Dubai take?',
      answer: 'Treatment sessions for Pigmentation Treatment in Dubai usually last 30–60 minutes, with noticeable improvement after 2–4 sessions. Complete results may take 6–12 weeks depending on pigmentation severity.'
    },
    {
      id: 4,
      question: 'Is Pigmentation Treatment in Dubai safe?',
      answer: 'Yes. Pigmentation Treatment in Dubai at ramacarepolyclinic is performed by experienced doctors using DHA-approved equipment and products, ensuring safety, minimal side effects, and natural-looking results for all skin types.'
    },
    {
      id: 5,
      question: 'Are Pigmentation Treatment results permanent?',
      answer: 'Results of Pigmentation Treatment in Dubai are long-lasting with proper sun protection and skincare. Maintenance sessions may be recommended to sustain an even and radiant skin tone.'
    },
    {
      id: 6,
      question: 'Does Pigmentation Treatment in Dubai hurt?',
      answer: 'Most patients experience minimal discomfort during Pigmentation Treatment in Dubai. Topical numbing can be applied if needed, ensuring the procedure is gentle, safe, and well-tolerated.'
    },
    {
      id: 7,
      question: 'How many sessions of Pigmentation Treatment in Dubai are needed?',
      answer: 'Typically, 2–6 sessions of Pigmentation Treatment in Dubai are required, depending on pigmentation type, skin sensitivity, and the chosen method, personalized after a detailed consultation.'
    },
    {
      id: 8,
      question: 'What are the side effects of Pigmentation Treatment in Dubai?',
      answer: 'Side effects are usually mild and temporary, such as slight redness, peeling, or tenderness. Pigmentation Treatment in Dubai at ramacarepolyclinic is monitored to minimize discomfort.'
    },
    {
      id: 9,
      question: 'Can Pigmentation Treatment in Dubai treat melasma?',
      answer: 'Yes. Pigmentation Treatment in Dubai effectively treats melasma using a combination of laser, chemical peel, and topical therapies tailored for hormonal or sun-induced pigmentation.'
    },
    {
      id: 10,
      question: 'How should I prepare for Pigmentation Treatment in Dubai?',
      answer: 'Avoid sun exposure, tanning, and certain skincare products before Pigmentation Treatment in Dubai. Your doctor will provide detailed pre-treatment guidance to ensure safe, effective results.'
    },
    {
      id: 11,
      question: 'Can Pigmentation Treatment in Dubai be combined with other skin therapies?',
      answer: 'Yes. Pigmentation Treatment in Dubai can safely be combined with Botox, fillers, or skin rejuvenation treatments for overall improved skin tone, texture, and radiance.'
    },
    {
      id: 12,
      question: 'When will I see results from Pigmentation Treatment in Dubai?',
      answer: 'Initial results from Pigmentation Treatment in Dubai are visible after 1–2 sessions. Full correction and even skin tone typically appear within 6–12 weeks, depending on skin type.'
    },
    {
      id: 13,
      question: 'Is Pigmentation Treatment in Dubai suitable for all skin types?',
      answer: 'Yes. Pigmentation Treatment in Dubai at ramacarepolyclinic is tailored for all skin types and tones, ensuring safety, effectiveness, and natural results without over-lightening or irritation.'
    },
    {
      id: 14,
      question: 'Can Pigmentation Treatment in Dubai help with post-acne dark spots?',
      answer: 'Absolutely. Pigmentation Treatment in Dubai targets post-inflammatory hyperpigmentation caused by acne, reducing dark marks and restoring a smoother, more even complexion.'
    },
    {
      id: 15,
      question: 'How do I book Pigmentation Treatment in Dubai at ramacarepolyclinic?',
      answer: 'Booking Pigmentation Treatment in Dubai is simple. Contact ramacarepolyclinic via phone or online to schedule a consultation, discuss your goals, and create a personalized treatment plan.'
    }
  ],
        resources: [
          {
            id: 1,
            text: 'Skin Boosters',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-boosters-dubai'
          },
          {
            id: 2,
            text: 'Derma Roller',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/derma-roller-dubai'
          },
          {
            id: 3,
            text: 'Skin Tightening',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/skin-tightening-dubai'
          },
          {
            id: 4,
            text: 'Microdermabrasion',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/microdermabrasion-dubai'
          },
          {
            id: 5,
            text: 'Skin Allergy',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-allergy-dubai'
          },
          {
            id: 6,
            text: 'Botox Hyperhidrosis',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/botox-hyperhidrosis-dubai'
          },
          {
            id: 7,
            text: 'Carboxy Therapy',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/carboxy-therapy-dubai'
          },
          {
            id: 8,
            text: 'Electrolysis',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/electrolysis-dubai'
          },
            {
            id: 9,
            text: 'Fillers',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/fillers-in-dubai'
          },
            {
            id: 10,
            text: 'Facial',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/facial'
          },
            {
            id: 11,
            text: 'HIFU',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hifu-dubai'
          },
            {
            id: 12,
            text: 'Face PRP',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/face-prp-in-dubai'
          },
            {
            id: 13,
            text: 'Botox',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/botox-dubai'
          },
            {
            id: 14,
            text: 'Mesotherapy',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mesotherapy-dubai'
          },
            {
            id: 15,
            text: 'Pigmentation',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/pigmentation-dubai'
          },
             {
            id: 16,
            text: 'Dark Circle',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/dark-circle-dubai'
          }
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
       subtitle: 'Verified testimonials from patients who achieved healthy, radiant skin',
        stats: [
          {
            id: 1,
            number: '4.8/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.8
          },
          {
            id: 2,
            number: '1,200+',
            label1: 'Patients Treated',
            label2: 'Success Stories',
            target: 1200
          },
          {
            id: 3,
            number: '96%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 96
          },
          {
            id: 4,
            number: '15+',
            label1: 'Years Experience',
            label2: 'In Dubai',
            target: 15
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment & Insurance',
        insuranceTitle: 'Insurance Support',
        paymentOptions: [
          'Cash, Credit & Debit Cards Accepted',
          ' Flexible Payment Plans Available',
          '0% Interest Installments (T&C Apply)'
        ],
        insuranceOptions: [
          'Accepted by select providers',
          'Detailed invoices for claims',
          ' Documentation assistance'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Pigmentation Treatment in Dubai Today',
        description: 'Restore clear, even-toned skin with Pigmentation Treatment in Dubai at ramacarepolyclinic, where medical expertise meets safe, effective, and natural results.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '1,200+ Patients',
            description: 'Successfully Treated'
          },
          {
            title: '4.8/5 Rating',
            description: 'Patient Reviews'
          }
      ]
    }
  },

  'aesthetic-dermatology-dubai-skin-treatment-dark-circle': {
        hero: {
            subtitle: 'Safe & Effective Solutions for Under-Eye Dark Circles with Medical Expertise',
            description: 'Dark circles under the eyes can develop due to genetics, aging, fatigue, stress, or lifestyle factors. At ramacarepolyclinic, we provide Dark Circle Treatment in Dubai to restore brightness, reduce under-eye pigmentation, and achieve a refreshed, youthful appearance.',
            rating: '4.9/5 Rating (500+ Reviews)',
            stats: [
              {
                id: 1,
                number: '94%',
                label: 'Patient Satisfaction'
              },
              {
                id: 2,
                number: '2500+',
                label: 'Hair Patients Treated'
              },
              {
                id: 3,
                number: '15+',
                label: 'Years of Experience'
              }
            ],
            ctaButtons: {
              primary: {
                text: 'Book Free Consultation',
                icon: 'calendar',
                link: '#book-consultation'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 XX XXX XXXX',
                icon: 'whatsapp'
              }
            },
            features: [
              ' DHA-Licensed Multispecialty Polyclinic',
              ' Experienced Dermatologists & Aesthetic Doctors',
              ' Clinically-Proven Dark Circle Treatments'
            ],
            image: {
          src: '/images/dark.jpg',
          alt: 'Dark circle treatment performed by specialists to reduce under-eye pigmentation and refresh the appearance.'
        },
            medicalNotice: {
              text: 'Safety & Medical Disclaimer: Results may vary depending on muscle activity and individual response. All Botox treatments at ramacarepolyclinic follow DHA-approved medical protocols and safety standards.',
              show: true
            }
          },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Skin Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed Ayurvedic doctors specializes in treating chronic and cosmetic skin concerns through holistic, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Dark Circle Treatment',
        problemIntro: {
          title: 'Causes of Dark Circles',
          description: 'Dark circles can arise from thin under-eye skin, blood vessel visibility, pigmentation, volume loss, or lifestyle factors. Untreated dark circles may worsen over time, affecting facial harmony.'
        },
        solutionIntro: {
          title: 'Our Solution: Dark Circle Treatment in Dubai at ramacarepolyclinic',
          description: ' Our treatments focus on reducing pigmentation, restoring volume, and improving skin quality for refreshed, youthful eyes. Patient-Centered Approach:'
        },
   leftCards: [
  {
    id: 1,
    title: 'What Is It?',
    description: 'Dark Circle Treatment in Dubai involves medically supervised therapies such as dermal fillers, PRP, lasers, or topical treatments to reduce pigmentation, improve under-eye volume, and refresh the eye area naturally.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description: 'Individuals experiencing:',
    listItems: [
      'Genetic or hereditary dark circles',
      'Aging-related hollowness or under-eye bags',
      'Pigmentation or hyperpigmentation under the eyes',
      'Tired-looking eyes despite sufficient rest',
      'Desire for a non-surgical, safe solution'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description: 'Results are visible within 1–2 sessions for fillers or PRP. Laser or topical treatments may require 3–6 sessions. Full improvement typically appears within 4–8 weeks, depending on the method and skin type.'
  },
  {
    id: 4,
    title: 'Trusted Dark Circle Care You Can Depend On',
    description: '',
    listItems: [
      'Doctor-led evaluation and treatment',
      'Safe, FDA/DHA-approved procedures',
      'Personalized under-eye care plans',
      'Natural-looking, balanced results',
      'Minimal downtime'
    ]
  }
],
   rootCauses: [
  {
    id: 1,
    title: 'Under-Eye Pigmentation',
    description: 'Genetic or sun-induced pigmentation causing dark discoloration',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'   
  },
  {
    id: 2,
    title: 'Volume Loss / Hollowing',
    description: 'Aging or fat loss leads to shadowing under the eyes',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'          
  },
  {
    id: 3,
    title: 'Blood Vessel Visibility',
    description: 'Thin skin shows underlying veins as dark circles',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'          
  },
  {
    id: 4,
    title: 'Lifestyle & Fatigue',
    description: 'Lack of sleep, stress, or dehydration intensifies dark circles',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'          
  },
  {
    id: 5,
    title: 'Aging & Skin Changes',
    description: 'Collagen loss and thin skin worsen under-eye darkness',
    severity: 'Medium',
    severityColor: 'bg-[#FEF3C7] text-[#92400E]'          
  }
],
    quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical / laser/injection / topical' },
  { label: 'Anesthesia', value: 'Not required (topical optional)' },
  { label: 'Recovery Time', value: 'Minimal, usually 24–48 hours' },
  { label: 'Side Effects', value: 'Mild swelling, redness, and temporary bruising' }
],
      approachCards: [
  {
    id: 1,
    title: 'Comprehensive under-eye assessment',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Personalized treatment plan (fillers, PRP, laser, or topical therapy)',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Gentle, precise medical administration',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Post-treatment care and guidance',
    description: '',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Result',
    description: 'Reduced dark circles, smoother under-eye skin, improved facial harmony, refreshed appearance, and boosted confidence.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
  healingJourney: {
  title: 'Your Dark Circle Treatment Journey',
  description: '',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Under-Eye Assessment',
      duration: '',
      description: 'Detailed evaluation of pigmentation, volume loss, and under-eye skin health.',
      keyActivities: [
        'Skin and under-eye analysis',
        'Discussion of treatment goals and expectations',
        'Personalized plan creation'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Personalized Treatment Planning',
      duration: '',
      description: 'Selection of filler type, PRP, laser, or topical treatment, depending on cause.',
      keyActivities: [
        'Determining the number of sessions',
        'Preparing under-eye skin for treatment',
        'Safety and comfort planning'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Treatment Session',
      duration: '',
      description: 'Precise application of chosen therapy to the under-eye area.',
      keyActivities: [
        'Filler or PRP injections under medical supervision',
        'Laser or topical therapy applied accurately',
        'Immediate post-treatment care guidance'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Follow-Up & Aftercare Support',
      duration: '',
      description: 'Monitoring results, addressing any concerns, and planning maintenance if needed.',
      keyActivities: [
        'Assess improvement in pigmentation or volume',
        'Recommend sun protection and gentle skincare',
        'Schedule follow-up sessions as necessary'
      ],
      side: 'left'
    }
  ]
},
      benefits: {
        title: 'Clinically Observed Benefits',
        description: 'Based on 15+ years of providing skin treatment in Dubai.',
        benefits: [
          {
            id: 1,
            title: '  Reduced under-eye pigmentation',
            percentage: 91,
            description: null
          },
          {
            id: 2,
            title: 'Restored volume and under-eye fullness',
            percentage: 88,
            description: null
          },
          {
            id: 3,
            title: 'Smoother, youthful skin texture',
            percentage: 95,
            description: null
          },
          {
            id: 4,
            title: 'Natural, refreshed appearance',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: ' Increased confidence',
            percentage: 93,
            description: null
          },
        ],
        comparisonTitle: 'Pigmentation Treatment vs. Conventional Skin Care',
        comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Dark Circle Treatment',
          traditional: 'Conventional Treatments'
        },
        comparisonData: [
          {
            feature: 'Results	',
            ayurvedic: 'Visible after 1–3 sessions',
            conventional: 'Creams or home remedies, gradual, limited effect'
          },
          {
            feature: 'Invasiveness',
            ayurvedic: 'Non-surgical, targeted',
            conventional: 'Topical only, minimal effect'
          },
          {
            feature: 'Downtime',
            ayurvedic: 'Minimal',
            conventional: 'None, but slower results'
          },
          {
            feature: 'Precision',
            ayurvedic: 'Targets pigmentation and volume loss',
            conventional: 'General application'
          },
          {
            feature: 'Longevity',
            ayurvedic: 'Long-lasting with follow-up',
            conventional: 'Temporary improvement'
          },
          {
            feature: 'Customization',
            ayurvedic: 'Highly personalized',
            conventional: 'Limited flexibility'
          }
        ]
      },
 pricing: {
  title: 'Transparent Pricing & Customized Dark Circle Packages',
  description:
    'Dark Circle treatments at ramacarepolyclinic are personalized based on under-eye concern, severity, and aesthetic goals. Choose the package that fits your needs and desired results.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For mild under-eye darkness or early pigmentation',
      duration: '1–2 sessions over 1 month',
      features: [
        'Initial under-eye assessment',
        'Targeted topical or injection therapy',
        'Post-treatment care guidance',
        'Follow-up consultation'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package ⭐ Most Popular Choice',
      subtitle: 'For moderate dark circles or pigmentation with volume loss',
      duration: '2–3 sessions over 3 months',
      features: [
        'Comprehensive under-eye evaluation',
        'PRP, fillers, or laser therapy as needed',
        'Personalized treatment planning',
        'Follow-up adjustments and guidance',
        'Lifestyle and skincare advice'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete under-eye rejuvenation program',
      duration: '4–6 sessions over 6 months',
      features: [
        'All Advanced Package benefits',
        'Full under-eye volume restoration',
        'Long-term maintenance and skin care plan',
        'Quarterly check-ins to sustain results',
        'Personalized wellness and lifestyle guidance'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},

 faq: {
  title: 'Frequently Asked Questions About Dark Circle Treatment in Dubai',
  description: 'Dark Circle Treatment in Dubai',
  faqs: [
    {
      id: 1,
      question: 'What is Dark Circle Treatment in Dubai?',
      answer: 'Dark Circle Treatment in Dubai reduces under-eye darkness, pigmentation, and hollowness using safe, doctor-led therapies like fillers, PRP, or laser, restoring bright, refreshed, and youthful eyes naturally.'
    },
    {
      id: 2,
      question: 'Who can benefit from Dark Circle Treatment in Dubai?',
      answer: 'Individuals with hereditary dark circles, aging-related under-eye volume loss, pigmentation, or tired-looking eyes can benefit from Dark Circle Treatment in Dubai for a refreshed and rejuvenated appearance.'
    },
    {
      id: 3,
      question: 'How long does Dark Circle Treatment in Dubai take?',
      answer: 'Treatment sessions for Dark Circle Treatment in Dubai usually last 30–60 minutes, with visible results within a few days for fillers and PRP, and 3–6 weeks for laser or topical therapies.'
    },
    {
      id: 4,
      question: 'Is Dark Circle Treatment in Dubai safe?',
      answer: 'Yes, Dark Circle Treatment in Dubai at ramacarepolyclinic is performed by experienced doctors using DHA-approved techniques, ensuring safety, minimal downtime, and natural, balanced under-eye rejuvenation results.'
    },
    {
      id: 5,
      question: 'Are the results of Dark Circle Treatment in Dubai permanent?',
      answer: 'Results are long-lasting with proper maintenance and skincare. Follow-up sessions may be recommended to sustain a bright, smooth, and youthful under-eye appearance after Dark Circle Treatment in Dubai.'
    },
    {
      id: 6,
      question: 'Does Dark Circle Treatment in Dubai hurt?',
      answer: 'Most patients experience minimal discomfort during Dark Circle Treatment in Dubai. Topical numbing can be applied if needed, ensuring the procedure is gentle, safe, and comfortable.'
    },
    {
      id: 7,
      question: 'How many sessions of Dark Circle Treatment in Dubai are needed?',
      answer: 'Depending on pigmentation, volume loss, and method, 1–6 sessions of Dark Circle Treatment in Dubai may be required. Your doctor personalizes the plan during the consultation.'
    },
    {
      id: 8,
      question: 'What are the side effects of Dark Circle Treatment in Dubai?',
      answer: 'Side effects are usually mild and temporary, such as slight redness, swelling, or bruising. Dark Circle Treatment in Dubai at ramacarepolyclinic is monitored for safe and predictable outcomes.'
    },
    {
      id: 9,
      question: 'Can Dark Circle Treatment in Dubai treat under-eye hollows?',
      answer: 'Yes. Dark Circle Treatment in Dubai restores under-eye volume using dermal fillers or PRP to reduce shadowing, improving skin smoothness and overall youthful appearance.'
    },
    {
      id: 10,
      question: 'How should I prepare for Dark Circle Treatment in Dubai?',
      answer: 'Avoid alcohol, blood-thinning medications, and excessive sun exposure before Dark Circle Treatment in Dubai. Your doctor provides personalized pre-treatment instructions for safe, effective results.'
    },
    {
      id: 11,
      question: 'Can Dark Circle Treatment in Dubai be combined with other facial treatments?',
      answer: 'Yes. Dark Circle Treatment in Dubai can be safely combined with fillers, Botox, PRP, or skin rejuvenation treatments for comprehensive facial enhancement and under-eye brightening.'
    },
    {
      id: 12,
      question: 'When will I see results from Dark Circle Treatment in Dubai?',
      answer: 'Visible improvement is seen within 1–2 sessions for fillers or PRP. Laser and topical treatments typically show results within 3–6 weeks after consistent sessions.'
    },
    {
      id: 13,
      question: 'Is Dark Circle Treatment in Dubai suitable for all skin types?',
      answer: 'Yes. Dark Circle Treatment in Dubai at ramacarepolyclinic is customized for all skin tones and types, ensuring safety, effectiveness, and natural under-eye brightening without irritation.'
    },
    {
      id: 14,
      question: 'Can Dark Circle Treatment in Dubai help with pigmentation under the eyes?',
      answer: 'Absolutely. Dark Circle Treatment in Dubai targets hyperpigmentation, sun damage, or melasma under the eyes using lasers, topical therapies, or PRP for smooth, bright, and even-toned skin.'
    },
    {
      id: 15,
      question: 'How do I book Dark Circle Treatment in Dubai at ramacarepolyclinic?',
      answer: 'Booking Dark Circle Treatment in Dubai is simple. Contact ramacarepolyclinic via phone or online to schedule a consultation and create a personalized under-eye treatment plan.'
    }
  ],
        resources: [
          {
            id: 1,
            text: 'Skin Boosters',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-boosters-dubai'
          },
          {
            id: 2,
            text: 'Derma Roller',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/derma-roller-dubai'
          },
          {
            id: 3,
            text: 'Skin Tightening',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/skin-tightening-dubai'
          },
          {
            id: 4,
            text: 'Microdermabrasion',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/microdermabrasion-dubai'
          },
          {
            id: 5,
            text: 'Skin Allergy',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/skin-allergy-dubai'
          },
          {
            id: 6,
            text: 'Botox Hyperhidrosis',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/botox-hyperhidrosis-dubai'
          },
          {
            id: 7,
            text: 'Carboxy Therapy',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/carboxy-therapy-dubai'
          },
          {
            id: 8,
            text: 'Electrolysis',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/electrolysis-dubai'
          },
            {
            id: 9,
            text: 'Fillers',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/fillers-in-dubai'
          },
            {
            id: 10,
            text: 'Facial',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/facial'
          },
            {
            id: 11,
            text: 'HIFU',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hifu-dubai'
          },
            {
            id: 12,
            text: 'Face PRP',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/face-prp-in-dubai'
          },
            {
            id: 13,
            text: 'Botox',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/botox-dubai'
          },
            {
            id: 14,
            text: 'Mesotherapy',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mesotherapy-dubai'
          },
            {
            id: 15,
            text: 'Pigmentation',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/pigmentation-dubai'
          },
             {
            id: 16,
            text: 'Dark Circle',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/dark-circle-dubai'
          }
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
        subtitle: 'Verified testimonials from patients who achieved healthy, radiant skin',
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '1,200+ Patients',
            description: 'Successfully Treated'
          },
          {
            title: '4.8/5 Rating',
            description: 'Patient Reviews'
          }
      ]
    }
  },

   'aesthetic-dermatology-dubai-hair-treatment-hair-loss': {
      hero: {
        subtitle: 'Advanced, Personalized Solutions for Stronger, Healthier Hair',
        description: 'Hair loss can affect confidence, appearance, and emotional well-being. At ramacarepolyclinic, we provide Hair Loss Treatment in Dubai designed to address the root cause of hair fall, stimulate regrowth, and improve overall scalp health with medically guided care.',
        rating: '4.9/5 Rating (500+ Reviews)',
        stats: [
          {
            id: 1,
            number: '94%',
            label: 'Patient Satisfaction'
          },
          {
            id: 2,
            number: '2500+',
            label: 'Hair Patients Treated'
          },
          {
            id: 3,
            number: '15+',
            label: 'Clinical Experience'
          }
        ],
        ctaButtons: {
          primary: {
            text: 'Book Free Hair Consultation',
             icon: 'calendar',
                link: '#book-now'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 56 659 7878',
                icon: 'whatsapp'
          }
        },
        features: [
          ' DHA-Licensed Multispecialty Polyclinic',
          'Experienced Doctors & Trichology Experts',
          'Safe, Proven & Non-Surgical Hair Treatments'
        ],
        image: {
          src: '/images/hairs.jpg',
          alt: 'Hair loss treatment in Dubai provided by specialists to reduce hair fall and support healthy hair regrowth.'
        },
        medicalNotice: {
          text: 'Safety & Medical Disclaimer: Results may vary based on individual condition and treatment response. All Hair Loss Treatments at ramacarepolyclinic follow DHA-approved medical standards and safety protocols.',
          show: true
        }
      },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Hair Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed doctors and hair specialists focuses on long-term hair and scalp health through personalized, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Standards'
          },
          {
            id: 3,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 4,
            title: ' Certified Medical Practitioners',
            subtitle: null
          }
        ]
      },
      overview: {
        title: 'Understanding Hair Loss Treatment in Dubai',
        problemIntro: {
          title: 'Common Causes of Hair Loss',
          description: 'Hair loss rarely has a single cause. It often results from a combination of internal and external factors.'
        },
        solutionIntro: {
          title: 'Our Solution: Hair Loss Treatment in Dubai at ramacarepolyclinic',
          description: 'Root-Cause–Focused Care: We focus on treating the underlying reason for hair loss, not just the symptoms. Patient-Centered Approach Includes:'
        },
        leftCards: [
  {
    id: 1,
    title: 'What Is Hair Loss Treatment?',
    description: 'Hair Loss Treatment in Dubai involves medically supervised therapies that reduce hair fall, strengthen follicles, improve scalp circulation, and promote natural hair regrowth. Treatments are customized based on the cause, severity, and individual hair goals.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description: 'Hair loss treatment is suitable for men and women experiencing:',
    listItems: [
      'Excessive daily hair fall',
      'Hair thinning or widening part',
      'Receding hairline',
      'Patchy hair loss',
      'Stress-related or hormonal hair fall',
      'Weak, brittle, or slow-growing hair'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description: 'Initial improvement may be noticed within 4–8 weeks. Visible regrowth usually appears after 3–4 months, with optimal results achieved over 6–12 months, depending on severity and consistency.'
  }
],
       rootCauses: [
  {
    id: 1,
    title: 'Hormonal Imbalance',
    description: 'Affects the hair growth cycle, especially in androgenetic alopecia',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Stress & Lifestyle',
    description: 'Triggers excessive shedding and weakens follicles',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 3,
    title: 'Nutritional Deficiency',
    description: 'Lack of essential vitamins impacts hair strength',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 4,
    title: 'Poor Scalp Health',
    description: 'Blocked follicles and reduced circulation slow growth',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 5,
    title: 'Genetics & Aging',
    description: 'Gradual thinning and reduced hair density over time',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  }
],
     quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical / minimally invasive' },
  { label: 'Anesthesia', value: 'Not required (topical if needed)' },
  { label: 'Recovery Time', value: 'Immediate' },
  { label: 'Side Effects', value: 'Minimal to none' }
],

       approachCards: [
  {
    id: 1,
    title: 'Detailed scalp and hair analysis',
    description: null,
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Medical history and lifestyle evaluation',
    description: null,
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Customized treatment plan',
    description: null,
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Advanced therapies for regrowth and strengthening',
    description: null,
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Continuous monitoring and adjustments',
    description: null,
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 6,
    title: 'Result',
    description: 'Reduced hair fall, improved density, stronger roots, healthier scalp, and visible regrowth over time.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
      healingJourney: {
  title: 'Your Hair Restoration Journey: Step by Step',
  description: '',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Hair Assessment',
      duration: '',
      description: 'Comprehensive evaluation of hair loss pattern and scalp condition.',
      keyActivities: [
        'Hair and scalp analysis',
        'Medical and lifestyle review',
        'Identifying underlying causes',
        'Goal-setting discussion'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Personalized Treatment Planning',
      duration: '',
      description: 'Designing a plan tailored to your hair needs.',
      keyActivities: [
        'Selection of suitable therapies',
        'Treatment timeline planning',
        'Home-care and nutrition guidance'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Active Treatment Phase',
      duration: '',
      description: 'Targeted therapies to reduce hair fall and stimulate regrowth.',
      keyActivities: [
        'Regular in-clinic sessions',
        'Scalp stimulation and nourishment',
        'Progress tracking'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Maintenance & Follow-Up',
      duration: '',
      description: 'Sustaining results and long-term hair health.',
      keyActivities: [
        'Periodic reviews',
        'Adjustments as needed',
        'Preventive care planning'
      ],
      side: 'left'
    }
  ]
},
      benefits: {
        title: 'Clinically-Observed Benefits',
        description: 'Based on years of providing hair treatment in Dubai.',
        benefits: [
          {
            id: 1,
            title: ' Reduced hair fall',
            percentage: 92,
            description: null
          },
          {
            id: 2,
            title: ' Improved hair density',
            percentage: 88,
            description: null
          },
          {
            id: 3,
            title: ' Stronger hair roots',
            percentage: 90,
            description: null
          },
          {
            id: 4,
            title: ' Healthier scalp environment ',
            percentage: 89,
            description: null
          },
          {
            id: 5,
            title: ' Enhanced confidence',
            percentage: 85,
            description: null
          }
        ],
        comparisonTitle: 'Hair Loss Treatment vs. Conventional Solutions',
        comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Hair Loss Treatment',
          traditional: 'Conventional Solutions'
        },
        comparisonData: [
          {
            feature: ' Approach',
            ayurvedic: 'Root-cause focused',
            conventional: 'OSurface-level'
          },
          {
            feature: 'Customization',
            ayurvedic: 'Highly personalized',
            conventional: 'One-size-fits-all'
          },
          {
            feature: 'Results',
            ayurvedic: 'Progressive & long-term',
            conventional: 'Temporary'
          },
          {
            feature: 'Safety',
            ayurvedic: 'Doctor-supervised',
            conventional: 'Varies'
          },
           {
            feature: 'Downtime',
            ayurvedic: 'Minimal',
            conventional: 'Minimal'
          }
        ]
      },
     pricing: {
  title: 'Transparent Pricing & Customized Hair Loss Packages',
  description:
    'Hair Loss Treatment at ramacarepolyclinic is personalized based on hair loss severity, scalp condition, and long-term hair restoration goals. Our structured packages ensure clear expectations, medical supervision, and progressive results.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For mild to moderate hair fall',
      duration: '6 sessions over 3 months',
      features: [
        'Initial hair & scalp assessment',
        'Root-strengthening hair therapy sessions',
        'Scalp nourishment treatments',
        'Basic nutrition & lifestyle guidance',
        'Home-care routine support'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For moderate to severe hair loss & thinning',
      duration: '12 sessions over 4 months',
      features: [
        'Comprehensive scalp and hair analysis',
        'Advanced hair regrowth therapies',
        'Follicle stimulation treatments',
        'Customized nutrition and lifestyle plan',
        'Monthly progress monitoring and adjustments'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete hair restoration & long-term care',
      duration: '24 sessions over 6 months',
      features: [
        'All Advanced Package benefits',
        'Intensive hair regrowth and strengthening therapies',
        'Scalp detox and rejuvenation treatments',
        'Stress and lifestyle impact management',
        'Quarterly hair health reviews',
        'Long-term maintenance guidance'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
     faq: {
  title: 'Frequently Asked Questions About Hair Loss Treatment in Dubai',
  description: 'Hair Loss Treatment in Dubai',
  faqs: [
    {
      id: 1,
      question: 'What causes hair loss, and when should I seek treatment?',
      answer: 'Hair loss may result from genetics, stress, hormonal imbalance, nutrition deficiency, or scalp conditions. Early consultation improves results by addressing root causes before follicles weaken permanently.'
    },
    {
      id: 2,
      question: 'Is Hair Loss Treatment in Dubai safe at ramacarepolyclinic?',
      answer: 'Yes. Hair Loss Treatment in Dubai at ramacarepolyclinic is doctor-supervised, uses clinically approved methods, and follows strict DHA safety and hygiene protocols.'
    },
    {
      id: 3,
      question: 'Who is an ideal candidate for Hair Loss Treatment in Dubai?',
      answer: 'Men and women experiencing hair thinning, excessive shedding, receding hairline, patchy loss, or stress-related hair fall can benefit after a professional scalp assessment.'
    },
    {
      id: 4,
      question: 'How long does it take to see results from hair loss treatment?',
      answer: 'Initial reduction in hair fall may appear within 4–6 weeks. Visible regrowth and improved density usually develop over 3–6 months with consistent treatment.'
    },
    {
      id: 5,
      question: 'Are hair loss treatments painful?',
      answer: 'Most hair loss treatments are minimally invasive or non-invasive. Mild discomfort may occur, but procedures are generally well tolerated and require no anesthesia.'
    },
    {
      id: 6,
      question: 'Does Hair Loss Treatment in Dubai have side effects?',
      answer: 'Side effects are usually mild and temporary, such as slight redness or scalp sensitivity. Treatments are customized to reduce risks and suit individual scalp conditions.'
    },
    {
      id: 7,
      question: 'Is Hair Loss Treatment suitable for both men and women?',
      answer: 'Yes. Hair Loss Treatment in Dubai is effective for both men and women, with customized plans addressing gender-specific hair loss patterns and underlying causes.'
    },
    {
      id: 8,
      question: 'Can hair loss be reversed completely?',
      answer: 'Results depend on hair loss severity and cause. Early-stage hair loss responds better, while advanced loss can be managed, slowed, and visually improved.'
    },
    {
      id: 9,
      question: 'How many sessions are required for Hair Loss Treatment in Dubai?',
      answer: 'Session numbers vary based on severity and treatment type. Most patients require multiple sessions over several months for optimal and lasting results.'
    },
    {
      id: 10,
      question: 'Will I need maintenance sessions after treatment?',
      answer: 'Yes. Maintenance sessions and proper home care help sustain results, strengthen hair follicles, and prevent future hair loss progression.'
    },
    {
      id: 11,
      question: 'Can lifestyle and diet affect hair loss treatment results?',
      answer: 'Absolutely. Nutrition, stress levels, sleep, and lifestyle habits strongly influence hair health and treatment effectiveness. Guidance is provided during consultation.'
    },
    {
      id: 12,
      question: 'Is there downtime after hair loss treatment sessions?',
      answer: 'No major downtime is required. Patients can resume daily activities immediately, making Hair Loss Treatment in Dubai suitable for busy lifestyles.'
    },
    {
      id: 13,
      question: 'How is Hair Loss Treatment customized at ramacarepolyclinic?',
      answer: 'Treatment plans are personalized using scalp analysis, medical history, hair loss pattern evaluation, and long-term goals for safe and effective results.'
    },
    {
      id: 14,
      question: 'Does hair loss treatment work for stress-related hair fall?',
      answer: 'Yes. Treatments combined with stress management and lifestyle guidance effectively control stress-induced hair fall and support healthy regrowth.'
    },
    {
      id: 15,
      question: 'Why choose ramacarepolyclinic for Hair Loss Treatment in Dubai?',
      answer: 'ramacarepolyclinic offers doctor-led care, personalized treatment plans, advanced techniques, and patient-focused support for safe, natural, and sustainable hair restoration results.'
    }
  ],
        resources: [
          {
            id: 1,
            text: 'Hair Loss',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/hair-loss-dubai'
          },
          {
            id: 2,
            text: 'Hair Growth',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/hair-growth-dubai'
          },
          {
            id: 3,
            text: 'Hair PRP',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/hair-prp-dubai'
          },
          {
            id: 4,
            text: 'Hair Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hair-removal-dubai'
          },
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
        subtitle: 'Verified testimonials from patients who restored their hair',
       
        stats: [
          {
            id: 1,
            number: '4.9/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.9
          },
          {
            id: 2,
            number: '800+',
            label1: 'Patients Treated',
            label2: 'Success Stories',
            target: 800
          },
          {
            id: 3,
            number: '92%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 92
          },
          {
            id: 4,
            number: '85%',
            label1: 'Success Rate',
            label2: 'Hair Regrowth',
            target: 85
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment Options',
        insuranceTitle: 'Insurance & Reimbursement',
        paymentOptions: [
          'Cash, Credit & Debit Cards',
          ' Flexible Payment Plans',
          '0% Installments (T&C Apply)'
        ],
        insuranceOptions: [
          'Claim invoices',
          'Documentation assistance'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Hair Loss Treatment in Dubai Today',
        description: 'Take the first step toward healthier, fuller hair with Hair Loss Treatment in Dubai at ramacarepolyclinic—where medical expertise meets personalized, natural results.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '2,500+ Patients',
            description: 'Successfully Treated'
          },
          {
            title: '4.9/5 Rating',
            description: '500+ Verified Reviews'
          }
        ]
      }
    },

    'aesthetic-dermatology-dubai-hair-treatment-hair-growth': {
      hero: {
        subtitle: 'Stimulating Natural Hair Regrowth with Medical Expertise',
        description: 'Hair thinning and slow hair growth can affect confidence and overall appearance. At ramacarepolyclinic, we offer Hair Growth Treatment in Dubai designed to stimulate dormant follicles, strengthen existing hair, and promote healthier, thicker regrowth—safely and naturally.',
        rating: '4.9/5 Rating (500+ Reviews)',
        stats: [
          {
            id: 1,
            number: '94%',
            label: 'Patient Satisfaction'
          },
          {
            id: 2,
            number: '2500+',
            label: 'Hair Patients Treated'
          },
          {
            id: 3,
            number: '15+',
            label: 'Clinical Experience'
          }
        ],
        ctaButtons: {
          primary: {
            text: 'Book Free Hair Consultation',
             icon: 'calendar',
                link: '#book-now'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 56 659 7878',
                icon: 'whatsapp'
          }
        },
        features: [
          ' DHA-Licensed Multispecialty Polyclinic',
          ' Experienced Doctors & Trichology Support',
          'Safe, Personalized Hair Growth Solutions'
        ],
        image: {
          src: '/images/hair-growth.jpg',
          alt: 'Hair growth treatment provided by specialists to stimulate hair follicles and promote healthy, natural hair regrowth.'
        },
        medicalNotice: {
          text: 'Safety and Medical Disclaimer: Results may vary based on individual scalp condition, hair cycle, and adherence to treatment plans. All Hair Growth Treatment in Dubai at ramacarepolyclinic follows DHA-approved medical protocols.',
          show: true
        }
      },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Hair Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed doctors and hair specialists focuses on long-term hair and scalp health through personalized, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Standards'
          },
          {
            id: 3,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 4,
            title: ' Certified Medical Practitioners',
            subtitle: null
          }
        ]
      },
      overview: {
        title: 'Understanding Hair Growth Treatment in Dubai',
        problemIntro: {
          title: 'Why Hair Growth Slows Down',
          description: 'Hair growth slows when follicles weaken due to poor circulation, nutritional deficiencies, stress, hormonal imbalance, or scalp conditions. Without intervention, hair may become thinner and less dense over time.'
        },
        solutionIntro: {
  title: 'Our Solution: Hair Growth Treatment in Dubai',
  description:
    'Our Hair Growth Treatment in Dubai focuses on restoring hair health naturally by targeting the root cause of hair loss.'
},
       leftCards: [
  {
    id: 1,
    title: 'What Is Hair Growth Treatment?',
    description:
      'Hair Growth Treatment in Dubai is a medically guided approach that focuses on activating hair follicles, improving scalp health, and supporting the natural hair growth cycle. Treatments are selected based on individual needs and long-term goals.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description: 'Hair growth treatment is suitable for individuals experiencing:',
    listItems: [
      'Slow hair growth',
      'Hair thinning or reduced density',
      'Weak or brittle hair',
      'Post-hair fall recovery phase',
      'Stress or lifestyle-related hair concerns'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description:
      'Initial improvements in hair texture and reduced breakage may appear within 4–6 weeks. Visible hair growth and density improvement typically develop over 3–6 months, depending on consistency and severity.'
  }
],
      rootCauses: [
  {
    id: 1,
    title: 'Dosha Balancing Therapy',
    description:
      'Balances Pitta, Vata, and Kapha to reduce scalp inflammation and strengthen hair follicles.',
    severity: null,
    severityColor: null
  },
  {
    id: 2,
    title: 'Internal Detoxification',
    description:
      'Eliminates Ama (toxins) from the body to promote nutrient-rich blood flow to the scalp.',
    severity: null,
    severityColor: null
  },
  {
    id: 3,
    title: 'Herbal Hair Therapies',
    description:
      'Medicated oils, herbal serums, and natural treatments nourish the scalp, stimulate growth, and prevent breakage.',
    severity: null,
    severityColor: null
  },
  {
    id: 4,
    title: 'Diet & Lifestyle Correction',
    description:
      'Personalized diet plans and lifestyle adjustments support healthy hair growth and prevent future hair loss.',
    severity: null,
    severityColor: null
  },
  {
    id: 5,
    title: 'Stress & Hormonal Support',
    description:
      'Calms the nervous system, reduces stress-related hair fall, and balances hormones for thicker, healthier hair.',
    severity: null,
    severityColor: null
  }
],
      quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical, minimally invasive' },
  { label: 'Anesthesia', value: 'Not required' },
  { label: 'Recovery Time', value: 'Immediate' },
  { label: 'Side Effects', value: 'Minimal to none' }
],
    approachCards: [
  {
    id: 1,
    title: 'Dosha Balancing Therapy',
    description:
      'Balances Pitta, Vata, and Kapha to reduce scalp inflammation and strengthen hair follicles.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Internal Detoxification',
    description:
      'Eliminates Ama (toxins) from the body to promote nutrient-rich blood flow to the scalp.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Herbal Hair Therapies',
    description:
      'Medicated oils, herbal serums, and natural treatments nourish the scalp, stimulate growth, and prevent breakage.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Diet & Lifestyle Correction',
    description:
      'Personalized diet plans and lifestyle adjustments support healthy hair growth and prevent future hair loss.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Stress & Hormonal Support',
    description:
      'Calms the nervous system, reduces stress-related hair fall, and balances hormones for thicker, healthier hair.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
    healingJourney: {
  title: 'Your Journey to Stronger, Healthier Hair',
  description:
    'Our hair growth treatment in Dubai follows a structured, transparent, and results-focused approach designed to address hair fall, thinning, and weak hair roots. Each stage is carefully planned by experienced hair specialists to promote natural, long-lasting hair growth.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Week 1: Initial Hair & Scalp Consultation (60 Minutes)',
      duration: 'Week 1',
      description:
        'Your treatment journey begins with a detailed consultation to identify the root causes of hair loss and determine the most effective hair growth treatment in Dubai for your needs.',
      keyActivities: [
        'Detailed medical and lifestyle history review',
        'Hair fall pattern and scalp condition assessment',
        'Evaluation of hormonal, nutritional, or stress-related factors',
        'Hair density and follicle health analysis',
        'Creation of a personalized hair growth treatment plan in Dubai'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Weeks 1–2: Scalp Preparation & Strengthening Phase',
      duration: 'Weeks 1–2',
      description:
        'This phase focuses on improving scalp health and preparing hair follicles to respond effectively to active treatments.',
      keyActivities: [
        'Scalp cleansing and detox therapies (if required)',
        'Customized hair care and nutrition guidance',
        'Lifestyle and stress-management recommendations',
        'Pre-treatment safety checks'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Weeks 3–12: Active Hair Growth Treatment Phase',
      duration: 'Weeks 3–12',
      description:
        'During this phase, advanced hair growth treatment in Dubai techniques are used to stimulate follicles and reduce hair fall.',
      keyActivities: [
        'Regular treatment sessions based on severity',
        'Therapies such as PRP, mesotherapy, or growth-stimulating procedures (as advised)',
        'Improved blood circulation to the scalp',
        'Monitoring of hair fall reduction and new hair growth',
        'Treatment plan adjustments as needed'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Months 4–12: Maintenance & Follow-Up Care',
      duration: 'Months 4–12',
      description:
        'Maintenance care helps sustain the results achieved through your hair growth treatment in Dubai.',
      keyActivities: [
        'Periodic follow-up consultations',
        'Maintenance sessions are recommended',
        'Ongoing hair care and lifestyle guidance',
        'Professional monitoring of hair health'
      ],
      side: 'left'
    }
  ]
},

      benefits: {
        title: 'Clinically-Observed Benefits',
        description: 'Based on years of providing hair treatment in Dubai.',
        benefits: [
          {
            id: 1,
            title: ' Improved hair thickness and density',
            percentage: 92,
            description: null
          },
          {
            id: 2,
            title: 'Stronger hair roots',
            percentage: 88,
            description: null
          },
          {
            id: 3,
            title: 'Healthier scalp environment',
            percentage: 90,
            description: null
          },
          {
            id: 4,
            title: 'Reduced breakage',
            percentage: 89,
            description: null
          },
          {
            id: 5,
            title: ' Enhanced confidence',
            percentage: 85,
            description: null
          }
        ],
        comparisonTitle: 'Hair Growth Treatment vs. Conventional Hair Care',
        comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Hair Growth Treatment',
          traditional: 'Conventional Hair Care'
        },
        comparisonData: [
  {
    feature: 'Focus',
    ayurvedic: 'Stimulates follicles and scalp health',
    conventional: 'Surface-level hair care'
  },
  {
    feature: 'Approach',
    ayurvedic: 'Medical, personalized',
    conventional: 'General products'
  },
  {
    feature: 'Results',
    ayurvedic: 'Gradual, sustainable growth',
    conventional: 'Temporary cosmetic improvement'
  },
  {
    feature: 'Monitoring',
    ayurvedic: 'Doctor-led follow-ups',
    conventional: 'No clinical monitoring'
  },
  {
    feature: 'Long-Term Benefit',
    ayurvedic: 'Supports the natural hair cycle',
    conventional: 'Limited effectiveness'
  }
        ]
      },
   pricing: {
  title: 'Transparent Pricing & Customized Hair Loss Packages',
  description:
    'Hair Loss Treatment at ramacare polyclinic is personalized based on hair loss severity, scalp condition, and long-term hair restoration goals. Our structured packages ensure medical supervision, clear expectations, and progressive, visible results.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For mild to moderate hair fall',
      duration: '6 sessions over 3 months',
      features: [
        'Initial hair and scalp assessment',
        'Root-strengthening hair therapy sessions',
        'Scalp nourishment treatments',
        'Basic nutrition and lifestyle guidance',
        'Home-care routine support'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For moderate to severe hair loss and thinning',
      duration: '12 sessions over 4 months',
      features: [
        'Comprehensive scalp and hair analysis',
        'Advanced hair regrowth therapies',
        'Follicle stimulation treatments',
        'Customized nutrition and lifestyle plan',
        'Monthly progress monitoring and adjustments'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete hair restoration and long-term care',
      duration: '24 sessions over 6 months',
      features: [
        'All Advanced Package benefits',
        'Intensive hair regrowth and strengthening therapies',
        'Scalp detox and rejuvenation treatments',
        'Stress and lifestyle impact management',
        'Quarterly hair health reviews',
        'Long-term maintenance guidance'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
 faq: {
  title: 'Frequently Asked Questions About Hair Growth Treatment in Dubai',
  description: null,
  faqs: [
    {
      id: 1,
      question: 'What is Hair Growth Treatment in Dubai?',
      answer:
        'Hair Growth Treatment in Dubai is a doctor-guided approach that stimulates hair follicles, improves scalp health, and supports natural hair regrowth using safe, non-surgical, clinically approved techniques.'
    },
    {
      id: 2,
      question: 'Who is suitable for hair growth treatment?',
      answer:
        'Hair growth treatment suits individuals experiencing slow hair growth, thinning hair, weak roots, post-hair fall recovery, or stress-related hair concerns, following a professional scalp assessment.'
    },
    {
      id: 3,
      question: 'How does hair growth treatment work?',
      answer:
        'Hair growth treatment works by activating dormant follicles, improving blood circulation, nourishing the scalp, and strengthening roots to support the natural hair growth cycle.'
    },
    {
      id: 4,
      question: 'Is Hair Growth Treatment safe?',
      answer:
        'Yes, Hair Growth Treatment in Dubai is safe when performed under medical supervision using DHA-approved protocols, personalized treatment plans, and clinically tested methods.'
    },
    {
      id: 5,
      question: 'When will I see results from hair growth treatment?',
      answer:
        'Initial improvements like reduced breakage may appear within 4–6 weeks, while visible hair growth and improved density usually develop gradually over 3–6 months.'
    },
    {
      id: 6,
      question: 'Is hair growth treatment painful?',
      answer:
        'Hair growth treatment is generally comfortable and minimally invasive. Most patients experience little to no discomfort, with no need for anesthesia or recovery downtime.'
    },
    {
      id: 7,
      question: 'Does hair growth treatment require downtime?',
      answer:
        'No, Hair Growth Treatment in Dubai requires no downtime. Patients can resume daily activities immediately after sessions, making it convenient for busy lifestyles.'
    },
    {
      id: 8,
      question: 'How many sessions are needed for hair growth?',
      answer:
        'The number of sessions depends on hair condition, scalp health, and treatment goals. Mild cases may need fewer sessions, while advanced concerns require longer treatment plans.'
    },
    {
      id: 9,
      question: 'Can hair growth treatment stop hair thinning?',
      answer:
        'Hair growth treatment helps slow hair thinning by strengthening roots, improving scalp health, and addressing underlying causes, supporting healthier, thicker hair over time.'
    },
    {
      id: 10,
      question: 'Is hair growth treatment suitable for men and women?',
      answer:
        'Yes, Hair Growth Treatment in Dubai is suitable for both men and women experiencing hair thinning, reduced density, or slow hair growth due to various causes.'
    },
    {
      id: 11,
      question: 'How is hair growth treatment different from hair care products?',
      answer:
        'Hair growth treatment targets follicles and scalp health medically, while conventional hair care products offer surface-level cosmetic benefits without addressing root causes.'
    },
    {
      id: 12,
      question: 'Are results from hair growth treatment permanent?',
      answer:
        'Results are long-lasting with proper maintenance, follow-up care, and lifestyle guidance. Consistency and adherence to medical advice play a key role in sustaining outcomes.'
    },
    {
      id: 13,
      question: 'What causes slow hair growth?',
      answer:
        'Slow hair growth can result from poor circulation, nutritional deficiencies, hormonal imbalance, stress, scalp conditions, or weakened hair follicles over time.'
    },
    {
      id: 14,
      question: 'Is a consultation required before hair growth treatment?',
      answer:
        'Yes, a professional consultation is essential to assess scalp condition, identify growth-inhibiting factors, and create a personalized hair growth treatment plan.'
    },
    {
      id: 15,
      question: 'Why choose ramacarepolyclinic for Hair Growth Treatment in Dubai?',
      answer:
        'Ramacarepolyclinic offers doctor-led, personalized hair growth treatments with DHA-approved protocols, expert trichology support, and a focus on safe, natural, long-term results.'
    }
  ],
        resources: [
           {
            id: 1,
            text: 'Hair Loss',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/hair-loss-dubai'
          },
          {
            id: 2,
            text: 'Hair Growth',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/hair-growth-dubai'
          },
          {
            id: 3,
            text: 'Hair PRP',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/hair-prp-dubai'
          },
          {
            id: 4,
            text: 'Hair Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hair-removal-dubai'
          },
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
       subtitle: 'Verified testimonials from patients who restored their hair',
        stats: [
          {
            id: 1,
            number: '4.9/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.9
          },
          {
            id: 2,
            number: '800+',
            label1: 'Patients Treated',
            label2: 'Success Stories',
            target: 800
          },
          {
            id: 3,
            number: '92%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 92
          },
          {
            id: 4,
            number: '85%',
            label1: 'Success Rate',
            label2: 'Hair Regrowth',
            target: 85
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment Options',
        insuranceTitle: 'Insurance & Reimbursement',
        paymentOptions: [
          'Cash, Credit & Debit Cards',
          ' Flexible Payment Plans',
          '0% Installments (T&C Apply)'
        ],
        insuranceOptions: [
          'Claim invoices',
          'Documentation assistance'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Hair Growth Treatment in Dubai Today',
        description: 'Restore healthier, fuller hair with Hair Growth Treatment in Dubai at ramacarepolyclinic, where expert care meets natural, sustainable results.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '2,500+ Patients',
            description: 'Successfully Treated'
          },
          {
            title: '4.9/5 Rating',
            description: '500+ Verified Reviews'
          }
        ]
      }
    },

       'aesthetic-dermatology-dubai-hair-treatment-hair-prp': {
      hero: {
        subtitle: 'Natural Hair Restoration Backed by Medical Expertise',
        description: 'Hair thinning and excessive hair fall can affect both confidence and appearance. At ramacarepolyclinic, we offer Hair PRP in Dubai as a clinically guided, natural solution to strengthen hair roots, reduce hair fall, and stimulate healthier regrowth using your body’s own healing properties.',
        rating: '4.9/5 Rating (500+ Reviews)',
        stats: [
          {
            id: 1,
            number: '94%',
            label: 'Patient Satisfaction'
          },
          {
            id: 2,
            number: '2500+',
            label: 'Hair Patients Treated'
          },
          {
            id: 3,
            number: '15+',
            label: 'Clinical Experience'
          }
        ],
        ctaButtons: {
          primary: {
            text: 'Book Free Hair Consultation',
             icon: 'calendar',
                link: '#book-now'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 56 659 7878',
                icon: 'whatsapp'
          }
        },
        features: [
          'DHA-Licensed Multispecialty Polyclinic',
          ' Experienced Doctors & Trichology Support',
          ' Safe, Personalized Hair PRP Treatments'
        ],
        image: {
          src: '/images/hair-prp1.jpg',
          alt: 'Hair PRP treatment in Dubai performed by specialists to stimulate hair growth and strengthen hair follicles.'
        },
        medicalNotice: {
          text: 'Safety and Medical Disclaimer: Results may vary based on individual hair cycle, scalp condition, and treatment adherence. All Hair PRP in Dubai at ramacarepolyclinic follows DHA-approved medical protocols.',
          show: true
        }
      },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Hair Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed doctors and hair specialists focuses on long-term hair and scalp health through personalized, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Standards'
          },
          {
            id: 3,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 4,
            title: ' Certified Medical Practitioners',
            subtitle: null
          }
        ]
      },
      overview: {
        title: 'Understanding Hair PRP in Dubai',
       problemIntro: {
  title: 'Problems:Why Hair Loss Continues',
  description: 'Hair fall and thinning often start at the follicle level, where poor circulation, weak growth signals, and internal factors prevent healthy hair regrowth. Topical products alone are usually not enough to address these deeper causes.'
},
solutionIntro: {
  title: 'Our Solution: Hair PRP in Dubai',
  description: 'Our hair PRP treatment focuses on strengthening hair follicles and stimulating natural hair growth using your body’s own platelet-rich plasma.'
},
      leftCards: [
  {
    id: 1,
    title: 'What Is Hair PRP Treatment?',
    description:
      'Hair PRP (Platelet-Rich Plasma) treatment involves using a concentrated form of your own blood plasma, rich in growth factors, to stimulate hair follicles and improve scalp health. In Hair PRP in Dubai, the plasma is carefully prepared and injected into targeted scalp areas to promote stronger, thicker, and healthier hair growth over time.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description: 'Hair PRP treatment is suitable for individuals experiencing:',
    listItems: [
      'Early-stage hair thinning',
      'Excessive hair fall',
      'Weak or thinning hair strands',
      'Post-hair fall recovery',
      'Stress or hormone-related hair concerns'
    ]
  },
  {
    id: 3,
    title: 'Duration & Results',
    description:
      'Initial reduction in hair fall may be noticed within 4–6 weeks. Visible improvement in hair density and strength usually develops over 3–6 months, depending on individual response and consistency.'
  }
],
rootCauses: [
  {
    id: 1,
    title: 'Weak Hair Follicles',
    description: 'Reduced growth factors and poor scalp nourishment lead to thinning hair and excessive shedding.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Poor Scalp Blood Circulation',
    description: 'Limited blood flow restricts oxygen and nutrient supply to hair roots, slowing growth.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 3,
    title: 'Hormonal & Genetic Factors',
    description: 'Conditions such as androgenetic alopecia affect the hair growth cycle and cause progressive hair loss.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 4,
    title: 'Stress & Lifestyle Imbalance',
    description: 'Stress, lack of sleep, and poor nutrition contribute to hair fall and reduced hair density.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 5,
    title: 'Delayed Healing & Regrowth',
    description: 'A weakened scalp environment slows follicle repair and new hair formation.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  }
],

      quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical, minimally invasive' },
  { label: 'Anesthesia', value: 'Not required' },
  { label: 'Recovery Time', value: 'Immediate' },
  { label: 'Side Effects', value: 'Minimal to none' }
],
     approachCards: [
  {
    id: 1,
    title: 'Growth Factor Activation',
    description: 'PRP contains powerful growth factors that activate dormant hair follicles and extend the hair growth phase.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Improved Scalp Circulation',
    description: 'PRP enhances blood flow to the scalp, ensuring better oxygen and nutrient delivery to hair roots.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Natural Hair Regrowth Support',
    description: 'Stimulates new hair growth while improving the thickness and strength of existing hair.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Reduced Hair Fall',
    description: 'Strengthens hair roots and slows further hair loss over time.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Personalized PRP Treatment Plan',
    description: 'Each hair PRP session is customized based on hair loss severity, scalp condition, and individual goals.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
    healingJourney: {
  title: 'Your Journey to Stronger, Healthier Hair Growth',
  description:
    'Our hair PRP in Dubai follows a safe, structured, and evidence-based approach to reduce hair fall, strengthen hair follicles, and stimulate natural hair regrowth. Each stage is carefully managed by experienced medical professionals to ensure effective and comfortable treatment.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Week 1: Initial Hair & Scalp Consultation (60 Minutes)',
      duration: 'Week 1',
      description:
        'Your journey begins with a detailed consultation to determine whether hair PRP in Dubai is suitable for your hair loss condition and goals.',
      keyActivities: [
        'Detailed medical history and hair loss pattern assessment',
        'Scalp and follicle examination',
        'Evaluation of genetic, hormonal, or lifestyle factors',
        'Hair density and thinning analysis',
        'Creation of a personalized hair PRP treatment plan in Dubai'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Weeks 1–2: Preparation Phase',
      duration: 'Weeks 1–2',
      description:
        'This phase focuses on optimizing scalp health to improve the effectiveness of hair PRP treatment in Dubai.',
      keyActivities: [
        'Scalp cleansing and care guidance',
        'Nutritional and lifestyle recommendations',
        'Temporary avoidance of certain medications (as advised)',
        'Pre-treatment safety checks'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Weeks 3–12: Active Hair PRP Sessions',
      duration: 'Weeks 3–12',
      description:
        'During this phase, advanced hair PRP sessions in Dubai are performed using your own platelet-rich plasma to stimulate hair follicles.',
      keyActivities: [
        '1 session every 3–4 weeks, as recommended',
        'Blood draw and PRP preparation under sterile conditions',
        'PRP micro-injections into targeted scalp areas',
        'Stimulation of hair follicles and scalp circulation',
        'Monitoring of hair fall reduction and regrowth progress'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Months 4–12: Maintenance & Follow-Up Care',
      duration: 'Months 4–12',
      description:
        'Maintenance sessions help support continued hair growth after completing your hair PRP in Dubai treatment plan.',
      keyActivities: [
        'Periodic follow-up consultations',
        'Maintenance PRP sessions if required',
        'Ongoing hair care and nutrition guidance',
        'Professional monitoring of scalp and hair health'
      ],
      side: 'left'
    }
  ]
},

      benefits: {
        title: 'Clinically-Observed Benefits',
        description: 'Based on years of providing hair treatment in Dubai.',
        benefits: [
          {
            id: 1,
            title: ' Reduced hair fall',
            percentage: 92,
            description: null
          },
          {
            id: 2,
            title: ' Improved hair thickness and density',
            percentage: 88,
            description: null
          },
          {
            id: 3,
            title: 'Stronger hair roots',
            percentage: 90,
            description: null
          },
          {
            id: 4,
            title: ' Healthier scalp environment',
            percentage: 89,
            description: null
          },
          {
            id: 5,
            title: ' Increased confidence',
            percentage: 85,
            description: null
          }
        ],
        comparisonTitle: 'Hair PRP vs. Conventional Hair Care',
        comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Hair PRP Treatment',
          traditional: 'Conventional Hair Care'
        },
        comparisonData: [
  {
    feature: 'Focus',
    ayurvedic: 'Follicle stimulation & scalp repair',
    conventional: 'Surface-level hair care'
  },
  {
    feature: 'Approach',
    ayurvedic: 'Medical, personalized',
    conventional: 'General products'
  },
  {
    feature: 'Results',
    ayurvedic: 'Gradual, long-term improvement',
    conventional: 'Temporary cosmetic effects'
  },
  {
    feature: 'Monitoring',
    ayurvedic: 'Doctor-led follow-ups',
    conventional: 'No clinical supervision'
  },
  {
    feature: 'Long-Term Benefit',
    ayurvedic: 'Supports the natural hair cycle',
    conventional: 'Limited effectiveness'
  }
        ]
      },
  pricing: {
  title: 'Transparent Pricing & Customized Hair PRP Packages',
  description:
    'Hair PRP treatment at ramacarepolyclinic is personalized based on hair loss severity, scalp condition, and individual treatment goals. Our structured packages ensure medical supervision, clear expectations, and progressive results.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For early-stage hair fall & thinning',
      duration: '4 sessions over 3 months',
      features: [
        'Initial hair and scalp assessment',
        'PRP preparation using medical-grade protocols',
        'Targeted PRP scalp application',
        'Hair root strengthening support',
        'Basic nutrition and lifestyle guidance',
        'Home-care routine recommendations'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For moderate hair loss & reduced density',
      duration: '6 sessions over 4 months',
      features: [
        'Comprehensive scalp and hair analysis',
        'Advanced PRP therapy sessions',
        'Follicle stimulation and scalp rejuvenation',
        'Customized nutrition and lifestyle plan',
        'Monthly progress monitoring and adjustments'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete hair restoration & long-term maintenance',
      duration: '8–10 sessions over 6 months',
      features: [
        'All Advanced Package benefits',
        'Intensive PRP-based hair regrowth therapy',
        'Scalp detox and revitalization treatments',
        'Stress and lifestyle impact management',
        'Quarterly hair health reviews',
        'Long-term maintenance guidance'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
faq: {
  title: 'Frequently Asked Questions – Hair PRP in Dubai',
  description: null,
  faqs: [
    {
      id: 1,
      question: 'What is Hair PRP treatment in Dubai?',
      answer:
        'Hair PRP in Dubai uses your own platelet-rich plasma to stimulate hair follicles, improve scalp health, reduce hair fall, and support natural hair regrowth under medical supervision.'
    },
    {
      id: 2,
      question: 'How does Hair PRP work for hair loss?',
      answer:
        'Hair PRP releases growth factors that activate dormant follicles, improve blood circulation, strengthen hair roots, and support the natural hair growth cycle over multiple treatment sessions.'
    },
    {
      id: 3,
      question: 'Who is an ideal candidate for Hair PRP in Dubai?',
      answer:
        'Hair PRP suits men and women with early to moderate hair loss, thinning hair, weak roots, or post-hair fall recovery, after proper scalp and medical evaluation.'
    },
    {
      id: 4,
      question: 'Is Hair PRP treatment safe?',
      answer:
        'Yes, Hair PRP in Dubai is safe because it uses your own blood, follows DHA-approved protocols, and is performed by trained medical professionals in a clinical setting.'
    },
    {
      id: 5,
      question: 'How many Hair PRP sessions are required?',
      answer:
        'Most patients need 4 to 8 sessions, depending on hair loss severity, scalp condition, and treatment goals. Your doctor will customize the session plan accordingly.'
    },
    {
      id: 6,
      question: 'When can I see results from Hair PRP?',
      answer:
        'Reduced hair fall may appear within 4–6 weeks. Visible improvement in hair thickness and density usually develops gradually over 3–6 months with consistent sessions.'
    },
    {
      id: 7,
      question: 'Is Hair PRP painful?',
      answer:
        'Hair PRP involves minimal discomfort. A mild prickling sensation may be felt during injections, but the procedure is generally well-tolerated without anesthesia.'
    },
    {
      id: 8,
      question: 'Is there any downtime after Hair PRP treatment?',
      answer:
        'No downtime is required. You can resume normal activities immediately after Hair PRP, with only minor scalp redness or tenderness that resolves quickly.'
    },
    {
      id: 9,
      question: 'Are there any side effects of Hair PRP?',
      answer:
        'Side effects are minimal and temporary, including slight redness, swelling, or tenderness at injection sites, which usually settle within a few hours.'
    },
    {
      id: 10,
      question: 'Can Hair PRP be combined with other hair treatments?',
      answer:
        'Yes, Hair PRP in Dubai is often combined with medical therapies, topical treatments, or nutritional guidance to enhance results and support long-term hair restoration.'
    },
    {
      id: 11,
      question: 'How long do Hair PRP results last?',
      answer:
        'Results can last several months to years with maintenance sessions, proper hair care, and lifestyle management, as hair growth depends on ongoing scalp health.'
    },
    {
      id: 12,
      question: 'Is Hair PRP suitable for women?',
      answer:
        'Yes, Hair PRP is effective for women experiencing hair thinning, postpartum hair loss, or stress-related shedding, offering a safe, non-surgical solution.'
    },
    {
      id: 13,
      question: 'How long does a Hair PRP session take?',
      answer:
        'A typical Hair PRP session takes about 45–60 minutes, including blood collection, PRP preparation, and scalp application by a qualified medical professional.'
    },
    {
      id: 14,
      question: 'How much does Hair PRP cost in Dubai?',
      answer:
        'The cost of Hair PRP in Dubai varies based on the number of sessions required, treatment plan, and clinic expertise. A consultation provides exact pricing details.'
    },
    {
      id: 15,
      question: 'Why choose ramacarepolyclinic for Hair PRP in Dubai?',
      answer:
        'ramacarepolyclinic offers doctor-led Hair PRP treatments, personalized plans, DHA-approved protocols, and a patient-focused approach for safe, natural, and reliable hair regrowth.'
    }
  ],
        resources: [
           {
            id: 1,
            text: 'Hair Loss',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/hair-loss-dubai'
          },
          {
            id: 2,
            text: 'Hair Growth',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/hair-growth-dubai'
          },
          {
            id: 3,
            text: 'Hair PRP',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/hair-prp-dubai'
          },
          {
            id: 4,
            text: 'Hair Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hair-removal-dubai'
          },
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
        subtitle: 'Verified testimonials from patients who restored their hair',
        
        stats: [
          {
            id: 1,
            number: '4.9/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.9
          },
          {
            id: 2,
            number: '800+',
            label1: 'Patients Treated',
            label2: 'Success Stories',
            target: 800
          },
          {
            id: 3,
            number: '92%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 92
          },
          {
            id: 4,
            number: '85%',
            label1: 'Success Rate',
            label2: 'Hair Regrowth',
            target: 85
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment Options',
        insuranceTitle: 'Insurance & Reimbursement',
        paymentOptions: [
          'Cash, Credit & Debit Cards',
          ' Flexible Payment Plans',
          '0% Installments (T&C Apply)'
        ],
        insuranceOptions: [
          'Claim invoices',
          'Documentation assistance'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Hair PRP in Dubai Today',
        description: 'Restore stronger, healthier hair naturally with Hair PRP in Dubai at ramacarepolyclinic, where medical expertise meets personalized care.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '2,500+ Patients',
            description: 'Successfully Treated'
          },
          {
            title: '4.9/5 Rating',
            description: '500+ Verified Reviews'
          }
        ]
      }
    },

     'aesthetic-dermatology-dubai-hair-treatment-hair-removal': {
      hero: {
        subtitle: 'Safe, Effective & Long-Lasting Hair Reduction with Medical Care',
        description: 'Unwanted hair can affect comfort, confidence, and daily routines. At ramacarepolyclinic, we provide Hair Removal in Dubai using medically approved techniques that reduce unwanted hair safely, gently, and effectively—while protecting your skin’s health.',
        rating: '4.9/5 Rating (500+ Reviews)',
        stats: [
          {
            id: 1,
            number: '94%',
            label: 'Patient Satisfaction'
          },
          {
            id: 2,
            number: '2500+',
            label: 'Hair Patients Treated'
          },
          {
            id: 3,
            number: '15+',
            label: 'Clinical Experience'
          }
        ],
        ctaButtons: {
          primary: {
            text: 'Book Free Hair Consultation',
             icon: 'calendar',
                link: '#book-now'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 56 659 7878',
                icon: 'whatsapp'
          }
        },
        features: [
          ' DHA-Licensed Multispecialty Polyclinic',
          ' Experienced Doctors & Certified Aesthetic Team',
          'Safe, Advanced Hair Removal Technologies'
        ],
       image: {
          src: '/images/hair-removal.jpg',
          alt: 'Hair removal in Dubai provided by specialists for smooth, long-lasting, and safe results.'
        },
        medicalNotice: {
          text: 'Safety and Medical Disclaimer: Results may vary based on individual hair type, skin tone, and treatment consistency. All Hair Removal in Dubai treatments at ramacarepolyclinic follow DHA-approved medical and safety protocols.',
          show: true
        }
      },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Hair Treatment Specialists in Dubai',
        description: 'Our team of DHA-licensed doctors and hair specialists focuses on long-term hair and scalp health through personalized, evidence-based care.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Standards'
          },
          {
            id: 3,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 4,
            title: ' Certified Medical Practitioners',
            subtitle: null
          }
        ]
      },
      overview: {
        title: 'Understanding Hair Removal in Dubai',
        problemIntro: {
          title: 'The Problem: Unwanted Hair & Skin Concerns',
          description: 'Hair growth is influenced by genetics, hormones, and skin type. Temporary methods like shaving or waxing often cause irritation, ingrown hairs, and fast regrowth.'
        },
       solutionIntro: {
  title: 'Our Solution: Hair Removal Treatment in Dubai',
  description:
    'Our Hair Removal Treatment in Dubai offers safe, effective, and long-lasting solutions tailored for all skin types.'
},
       leftCards: [
  {
    id: 1,
    title: 'What Is Hair Removal?',
    description:
      'Hair Removal in Dubai is a professional medical-aesthetic treatment designed to reduce unwanted hair growth from the face and body. Treatments are selected based on hair thickness, skin tone, and treatment goals to ensure safe and long-lasting results.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description: 'Hair removal treatment is suitable for individuals with:',
    listItems: [
      'Excess or unwanted body hair',
      'Facial hair concerns',
      'Ingrown hair problems',
      'Sensitive skin reactions to shaving or waxing',
      'Desire for smoother, long-term results'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description:
      'Sessions typically last 15–60 minutes, depending on the treatment area. Noticeable reduction appears gradually over multiple sessions as hair growth cycles are targeted.'
  }
],
     rootCauses: [
  {
    id: 1,
    title: 'Advanced Laser Therapy',
    description:
      'Targets hair follicles precisely to reduce hair growth permanently, leaving skin smooth and clear.',
    severity: null,
    severityColor: null
  },
  {
    id: 2,
    title: 'Gentle Hair Removal Techniques',
    description:
      'Combines modern technology with soothing treatments to prevent irritation, redness, or ingrown hairs.',
    severity: null,
    severityColor: null
  },
  {
    id: 3,
    title: 'Customized Treatment Plans',
    description:
      'Personalized approaches based on hair type, skin sensitivity, and target areas for optimal results.',
    severity: null,
    severityColor: null
  },
  {
    id: 4,
    title: 'Holistic Skin Care',
    description:
      'Supports the skin post-treatment with natural healing therapies, calming inflammation, and promoting healthy texture.',
    severity: null,
    severityColor: null
  },
  {
    id: 5,
    title: 'Long-Term Results',
    description:
      'Reduces hair regrowth, improves skin health, and boosts confidence for lasting smoothness.',
    severity: null,
    severityColor: null
  }
],
       quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical, minimally invasive' },
  { label: 'Anesthesia', value: 'Not required' },
  { label: 'Recovery Time', value: 'Immediate' },
  { label: 'Side Effects', value: 'Mild redness or sensitivity (temporary)' }
],
      approachCards: [
  {
    id: 1,
    title: 'Advanced Laser Therapy',
    description:
      'Targets hair follicles precisely to reduce hair growth permanently, leaving skin smooth and clear.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Gentle Hair Removal Techniques',
    description:
      'Combines modern technology with soothing treatments to prevent irritation, redness, or ingrown hairs.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Customized Treatment Plans',
    description:
      'Personalized approaches based on hair type, skin sensitivity, and target areas for optimal results.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Holistic Skin Care',
    description:
      'Supports the skin post-treatment with natural healing therapies, calming inflammation, and promoting healthy texture.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Long-Term Results',
    description:
      'Reduces hair regrowth, improves skin health, and boosts confidence for lasting smoothness.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
     healingJourney: {
  title: 'Your Hair Removal Journey: Step by Step',
  description:
    'Structured, doctor-guided approach to ensure safe, effective, and permanent hair removal with Electrolysis in Dubai.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Skin Assessment',
      duration: 'Week 1',
      description:
        'Comprehensive evaluation of hair type, density, and skin sensitivity to create a personalized electrolysis plan.',
      keyActivities: [
        'Medical history review',
        'Skin and hair mapping',
        'Discussion of goals and expectations',
        'Personalized session plan creation'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Preparation & Trial Session',
      duration: 'Weeks 1–4',
      description:
        'Initial trial treatment to ensure comfort and suitability, preparing the skin for the full electrolysis course.',
      keyActivities: [
        'Test treatment on a small area',
        'Topical numbing if needed',
        'Observation of skin response',
        'Patient guidance for aftercare'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Active Electrolysis Treatment Phase',
      duration: 'Weeks 5–12',
      description:
        'Regular sessions targeting individual hair follicles for permanent hair removal.',
      keyActivities: [
        '1–3 sessions per week depending on the area',
        'Precision follicle treatment with controlled electrical current',
        'Post-session care with soothing creams',
        'Progress monitoring and plan adjustments'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Maintenance & Follow-up',
      duration: 'Months 4–6',
      description:
        'Follow-up treatments and long-term care guidance to sustain smooth, hair-free skin.',
      keyActivities: [
        'Periodic check-ins',
        'Additional touch-up sessions if needed',
        'Skin health and care advice',
        'Long-term hair management support'
      ],
      side: 'left'
    }
  ]
},
      benefits: {
        title: 'Clinically-Observed Benefits',
        description: 'Based on years of providing hair treatment in Dubai.',
        benefits: [
          {
            id: 1,
            title: 'Reduced hair growth over time',
            percentage: 92,
            description: null
          },
          {
            id: 2,
            title: ' Smoother skin texture',
            percentage: 88,
            description: null
          },
          {
            id: 3,
            title: 'Fewer ingrown hairs',
            percentage: 90,
            description: null
          },
          {
            id: 4,
            title: 'Reduced skin irritation',
            percentage: 89,
            description: null
          },
          {
            id: 5,
            title: ' Improved confidence and comfort',
            percentage: 85,
            description: null
          }
        ],
        comparisonTitle: 'Hair Removal vs. Conventional Methods',
        comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Medical Hair Removal',
          traditional: 'Regular Hair Products'
        },
        comparisonData: [
          {
    feature: 'Results',
    ayurvedic: 'Long-term reduction',
    conventional: 'Temporary'
  },
  {
    feature: 'Skin Impact',
    ayurvedic: 'Gentle, controlled',
    conventional: 'Irritation common'
  },
  {
    feature: 'Regrowth',
    ayurvedic: 'Slower, finer hair',
    conventional: 'Fast regrowth'
  },
  {
    feature: 'Precision',
    ayurvedic: 'Targets hair follicles',
    conventional: 'Surface-level'
  },
  {
    feature: 'Monitoring',
    ayurvedic: 'Doctor-supervised',
    conventional: 'No medical oversight'
  }
        ]
      },
    pricing: {
  title: 'Transparent Pricing & Customized Hair Removal Packages',
  description:
    'Hair Removal at ramacarepolyclinic is personalized based on the treatment area, hair density, skin type, and desired results. Our structured packages ensure medical supervision, safety, and clear expectations at every stage.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For light to moderate unwanted hair',
      duration: '6 sessions over 3 months',
      features: [
        'Initial skin & hair assessment',
        'Hair removal sessions for selected areas',
        'Skin-soothing and protection care',
        'Basic post-treatment guidance',
        'Home-care routine support'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For moderate to dense hair growth',
      duration: '10–12 sessions over 4–5 months',
      features: [
        'Detailed skin and hair analysis',
        'Hair removal for multiple areas',
        'Customized energy and session planning',
        'Ingrown hair reduction support',
        'Regular progress monitoring'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete hair reduction & long-term maintenance',
      duration: '14–18 sessions over 6–9 months',
      features: [
        'All Advanced Package benefits',
        'Full-body or extended-area hair removal',
        'Advanced skin-calming and protection care',
        'Long-term maintenance planning',
        'Quarterly follow-up reviews'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
 faq: {
  title: 'Frequently Asked Questions – Hair Removal in Dubai',
  description: null,
  faqs: [
    {
      id: 1,
      question: 'What is hair removal treatment in Dubai?',
      answer:
        'Hair Removal in Dubai involves medically guided techniques that safely reduce unwanted hair by targeting hair follicles, delivering smoother skin with long-lasting results under professional supervision.'
    },
    {
      id: 2,
      question: 'Is hair removal treatment safe for all skin types?',
      answer:
        'Yes, Hair Removal in Dubai at ramacarepolyclinic is customized for different skin tones and hair types, ensuring safe, controlled treatment with minimal risk when performed by trained professionals.'
    },
    {
      id: 3,
      question: 'How many sessions are required for effective hair removal?',
      answer:
        'Most patients need multiple sessions because hair grows in cycles. Typically, 6–10 sessions are recommended for noticeable, long-term hair reduction, depending on hair density and treatment area.'
    },
    {
      id: 4,
      question: 'Does hair removal treatment cause pain?',
      answer:
        'Hair Removal in Dubai is generally well tolerated. Patients may feel mild warmth or tingling, but discomfort is minimal and temporary, with advanced systems designed to improve comfort.'
    },
    {
      id: 5,
      question: 'What areas of the body can be treated?',
      answer:
        'Hair Removal in Dubai can treat the face, underarms, arms, legs, bikini area, back, chest, and other areas where unwanted hair growth affects comfort or confidence.'
    },
    {
      id: 6,
      question: 'Is there any downtime after hair removal treatment?',
      answer:
        'There is usually no downtime. Most patients resume daily activities immediately after Hair Removal in Dubai, with only mild redness that typically settles within a few hours.'
    },
    {
      id: 7,
      question: 'When will I see results after hair removal?',
      answer:
        'Initial hair reduction may be visible after the first few sessions. Progressive reduction and finer regrowth usually appear over several weeks with consistent treatment sessions.'
    },
    {
      id: 8,
      question: 'Can hair removal permanently remove hair?',
      answer:
        'Hair Removal in Dubai provides long-term hair reduction, not instant permanent removal. Treated hair grows back finer and lighter, with maintenance sessions helping sustain smooth results.'
    },
    {
      id: 9,
      question: 'Is hair removal suitable for sensitive skin?',
      answer:
        'Yes, treatments are adjusted for sensitive skin. At ramacarepolyclinic, parameters are carefully selected to minimize irritation while achieving effective hair reduction safely.'
    },
    {
      id: 10,
      question: 'Are there any side effects of hair removal treatment?',
      answer:
        'Side effects are minimal and temporary, including mild redness or warmth. Serious complications are rare when Hair Removal in Dubai is performed under medical supervision.'
    },
    {
      id: 11,
      question: 'How should I prepare for hair removal treatment?',
      answer:
        'Patients are usually advised to shave the area before sessions, avoid sun exposure, and stop waxing or threading prior to Hair Removal in Dubai for optimal results.'
    },
    {
      id: 12,
      question: 'Can men undergo hair removal treatment?',
      answer:
        'Yes, Hair Removal in Dubai is suitable for both men and women. Men commonly seek treatment for back, chest, neck, and beard-line hair reduction.'
    },
    {
      id: 13,
      question: 'Is hair removal effective for hormonal hair growth?',
      answer:
        'Hair Removal in Dubai can reduce unwanted hair caused by hormonal imbalance, but results vary. Medical evaluation helps combine treatment with appropriate long-term management strategies.'
    },
    {
      id: 14,
      question: 'How long do hair removal results last?',
      answer:
        'Results are long-lasting with proper session completion. Periodic maintenance sessions help sustain smooth skin and manage any new hair growth over time.'
    },
    {
      id: 15,
      question: 'Why choose ramacarepolyclinic for hair removal in Dubai?',
      answer:
        'ramacarepolyclinic offers doctor-led Hair Removal in Dubai with personalized plans, modern technology, and DHA-approved safety protocols for reliable, comfortable, and effective care.'
    }
  ],
        resources: [
           {
            id: 1,
            text: 'Hair Loss',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/hair-loss-dubai'
          },
          {
            id: 2,
            text: 'Hair Growth',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/hair-growth-dubai'
          },
          {
            id: 3,
            text: 'Hair PRP',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/hair-prp-dubai'
          },
          {
            id: 4,
            text: 'Hair Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/hair-removal-dubai'
          },
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
        subtitle: 'Verified testimonials from patients who restored their hair',
        stats: [
          {
            id: 1,
            number: '4.9/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.9
          },
          {
            id: 2,
            number: '800+',
            label1: 'Patients Treated',
            label2: 'Success Stories',
            target: 800
          },
          {
            id: 3,
            number: '92%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 92
          },
          {
            id: 4,
            number: '85%',
            label1: 'Success Rate',
            label2: 'Hair Regrowth',
            target: 85
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment Options',
        insuranceTitle: 'Insurance & Reimbursement',
        paymentOptions: [
          'Cash, Credit & Debit Cards',
          ' Flexible Payment Plans',
          '0% Installments (T&C Apply)'
        ],
        insuranceOptions: [
          'Claim invoices',
          'Documentation assistance'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Hair Removal in Dubai Today',
        description: 'njoy smoother, clearer skin with Hair Removal in Dubai at ramacarepolyclinic, where medical expertise meets comfort-focused, personalized care.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '2,500+ Patients',
            description: 'Successfully Treated'
          },
          {
            title: '4.9/5 Rating',
            description: '500+ Verified Reviews'
          }
        ]
      }
    },
  

     'aesthetic-dermatology-dubai-laser-treatment-spider-veins-laser-treatment': {
      hero: {
        subtitle: 'Safe, Non-Surgical Solution for Clearer Skin',
        description: 'Spider veins are small, visible veins that often appear on the legs or face. While usually harmless, they can affect confidence and comfort. At ramacarepolyclinic, we offer Spider Veins Laser Treatment designed to safely reduce visible veins and improve skin appearance—without surgery or downtime.',
        rating: '4.9/5 Rating (500+ Reviews)',
        stats: [
          {
            id: 1,
            number: '95%',
            label: 'Patient Satisfaction'
          },
          {
            id: 2,
            number: '6000+',
            label: 'Laser Sessions Performed'
          },
          {
            id: 3,
            number: '15+',
            label: 'Years of Experience'
          }
        ],
        ctaButtons: {
          primary: {
            text: ' Book Your Free Laser Consultation',
             icon: 'calendar',
                link: '#book-now'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 56 659 7878',
                icon: 'whatsapp'
          }
        },
        features: [
          ' DHA-Licensed Multispecialty Polyclinic',
          ' Experienced Doctors & Certified Laser Specialists',
           'Advanced, Clinically Approved Laser Technology',
        ],
       image: {
          src: '/images/spider.jpg',
          alt: 'Spider veins laser treatment performed by specialists to reduce visible veins and improve skin appearance'
        },
        medicalNotice: {
          text: 'Safety & Medical Disclaimer: Results may vary based on individual skin type, vein size, and response to treatment. All Spider Veins Laser Treatment procedures at ramacarepolyclinic follow DHA-approved medical and safety protocols.',
          show: true
        }
      },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Laser Treatment Specialists in Dubai',
        description: 'DHA-licensed dermatologists with extensive experience in advanced laser technology and aesthetic treatments.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Spider Veins Laser Treatment',
        problemIntro: {
          title: 'The Problem: Understanding Spider Veins',
          description: 'Spider veins can form due to genetics, prolonged standing, hormonal changes, pregnancy, aging, or sun exposure. Without treatment, they may become more noticeable over time.'
        },
        solutionIntro: {
  title: 'Our Solution: Spider Veins Laser Treatment in Dubai',
  description:
    'Our Spider Veins Laser Treatment in Dubai provides a safe, effective, and minimally invasive solution to eliminate visible veins and restore smooth skin.'
},
       leftCards: [
  {
    id: 1,
    title: 'What Is Spider Veins Laser Treatment?',
    description: 'Spider Veins Laser Treatment is a medical aesthetic procedure that uses focused laser energy to target and close visible spider veins. Over time, the treated veins fade and are naturally absorbed by the body.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description: 'Spider Veins Laser Treatment is suitable for individuals with:',
    listItems: [
      'Visible red, blue, or purple spider veins',
      'Spider veins on legs or face',
      'Cosmetic concerns related to vein appearance',
      'Mild leg heaviness or discomfort',
      'Preference for non-surgical treatment'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description: 'Each session typically lasts 20–45 minutes, depending on the size and number of veins treated. Multiple sessions may be required for optimal and long-lasting results.'
  }
],
     rootCauses: [
  {
    id: 1,
    title: 'Advanced Laser Technology',
    description:
      'Targets spider veins precisely without harming surrounding skin, promoting vein closure and natural absorption.',
    severity: null,
    severityColor: null
  },
  {
    id: 2,
    title: 'Quick & Comfortable Sessions',
    description:
      'Non-invasive procedures with minimal discomfort, allowing you to resume daily activities immediately.',
    severity: null,
    severityColor: null
  },
  {
    id: 3,
    title: 'Personalized Treatment Plans',
    description:
      'Customized based on the size, location, and severity of veins for optimal results.',
    severity: null,
    severityColor: null
  },
  {
    id: 4,
    title: 'Improved Circulation & Skin Health',
    description:
      'Laser therapy strengthens vein walls, improves blood flow, and enhances overall skin appearance.',
    severity: null,
    severityColor: null
  },
  {
    id: 5,
    title: 'Long-Term Results',
    description:
      'Reduces the appearance of spider veins permanently, boosts confidence, and improves the aesthetic of your legs and skin.',
    severity: null,
    severityColor: null
  }
],
        quickFacts: [
          { label: 'Treatment Type', value: 'Non-invasive' },
          { label: 'Anesthesia', value: 'Not required' },
          { label: 'Downtime', value: 'Minimal to none' },
          { label: 'Sessions Required', value: '4–8 (depends on concern)' },
          { label: 'Results', value: 'Progressive & long-lasting' },
          { label: 'Safety', value: 'DHA-approved & FDA-certified' }
        ],
       approachCards: [
  {
    id: 1,
    title: 'Advanced Laser Technology',
    description:
      'Targets spider veins precisely without harming surrounding skin, promoting vein closure and natural absorption.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Quick & Comfortable Sessions',
    description:
      'Non-invasive procedures with minimal discomfort, allowing you to resume daily activities immediately.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Personalized Treatment Plans',
    description:
      'Customized based on the size, location, and severity of veins for optimal results.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Improved Circulation & Skin Health',
    description:
      'Laser therapy strengthens vein walls, improves blood flow, and enhances overall skin appearance.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Long-Term Results',
    description:
      'Reduces the appearance of spider veins permanently, boosts confidence, and improves the aesthetic of your legs and skin.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
     healingJourney: {
  title: 'Your Spider Veins Laser Journey: Step by Step',
  description: 'A transparent, medically guided approach to ensure safety, comfort, and visible vein reduction',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Vein Assessment (30–45 min)',
      duration: 'Week 1',
      description: 'A detailed evaluation to understand vein severity, skin type, medical history, and suitability for laser treatment.',
      keyActivities: [
        'Medical history review',
        'Visual and clinical vein assessment',
        'Skin type evaluation',
        'Treatment area mapping',
        'Personalized laser treatment plan creation'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Preparation Phase',
      duration: 'Weeks 1–2',
      description: 'Preparing the skin and veins for optimal laser response and safe treatment delivery.',
      keyActivities: [
        'Skin conditioning guidance',
        'Sun-exposure precautions',
        'Lifestyle and circulation advice',
        'Patch testing (if required)',
        'Pre-treatment care instructions'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Active Laser Treatment Phase',
      duration: 'Weeks 3–8',
      description: 'Targeted laser sessions to reduce visible spider veins and improve skin appearance gradually.',
      keyActivities: [
        'Scheduled laser sessions',
        'Precision treatment of affected veins',
        'Cooling and skin-protection care',
        'Monitoring skin response',
        'Session-based adjustments'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Recovery, Monitoring & Maintenance',
      duration: 'Months 3–6',
      description: 'Supporting skin healing, monitoring progress, and maintaining long-term results.',
      keyActivities: [
        'Follow-up assessments',
        'Skin recovery guidance',
        'Circulation and lifestyle support',
        'Maintenance session planning',
        'Long-term vein prevention advice'
      ],
      side: 'left'
    }
  ]
},
      benefits: {
        title: 'Clinically-Observed Benefits',
        description: 'Evidence-based results from our advanced laser treatments.',
        comparisonTitle: 'Spider Veins Laser Treatment vs. Conventional Methods',
        comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Laser Treatment',
          traditional: 'Creams / Home Remedies'
        },
        benefits: [
          {
            id: 1,
            title: 'Reduced appearance of spider veins',
            percentage: 90,
            description: null
          },
          {
            id: 2,
            title: 'Improved skin tone and clarity',
            percentage: 92,
            description: null
          },
          {
            id: 3,
            title: 'Non-surgical and safe',
            percentage: 88,
            description: null
          },
          {
            id: 4,
            title: ' Minimal discomfort',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: 'Enhanced confidence',
            percentage: 94,
            description: null
          }
        ],
        comparisonData: [
         {
  feature: 'Results',
  ayurvedic: 'Visible vein reduction',
  conventional: 'Temporary or minimal'
},
{
  feature: 'Precision',
  ayurvedic: 'Targets affected veins',
  conventional: 'Surface-level'
},
{
  feature: 'Safety',
  ayurvedic: 'Doctor-supervised',
  conventional: 'No medical monitoring'
},
{
  feature: 'Downtime',
  ayurvedic: 'Minimal',
  conventional: 'Not effective'
},
{
  feature: 'Long-Term Benefit',
  ayurvedic: 'Gradual fading of veins',
  conventional: 'Limited improvement'
}

        ]
      },
      pricing: {
  title: 'Transparent Pricing & Customized Spider Veins Laser Packages',
  description: 'Spider Veins Laser Treatment at ramacarepolyclinic is personalized based on vein severity, treatment area, skin type, and treatment goals. Our structured packages ensure medical supervision, safety, and visible improvement with every session.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For mild spider veins',
      duration: '4–6 sessions over 2–3 months',
      features: [
        'Initial skin and vein assessment',
        'Targeted laser treatment for visible spider veins',
        'Gentle skin protection and cooling care',
        'Basic post-treatment guidance',
        'Home-care support instructions'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For moderate spider veins and wider coverage',
      duration: '8–10 sessions over 3–4 months',
      features: [
        'Detailed vein and skin analysis',
        'Advanced laser therapy for multiple areas',
        'Customized energy and session planning',
        'Skin-calming and recovery support',
        'Regular progress monitoring'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete vein clearance & long-term maintenance',
      duration: '12–14 sessions over 5–6 months',
      features: [
        'All Advanced Package benefits',
        'Intensive laser treatment for stubborn veins',
        'Extended-area or multiple-zone treatment',
        'Long-term skin health and vein prevention guidance',
        'Quarterly follow-up and maintenance planning'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
     faq: {
  title: 'Frequently Asked Questions (FAQs) – Skin Veins Laser Treatment in Dubai',
  description: null,
  faqs: [
    {
      id: 1,
      question: 'What is skin vein laser treatment?',
      answer:
        'Skin veins laser treatment in Dubai uses advanced laser technology to target and remove spider veins, broken capillaries, and visible veins safely, improving skin appearance and comfort.'
    },
    {
      id: 2,
      question: 'Is the procedure safe?',
      answer:
        'Yes, when performed by DHA-licensed dermatologists, skin veins laser treatment is safe, non-invasive, and minimally uncomfortable, using clinically approved equipment and protocols.'
    },
    {
      id: 3,
      question: 'Who is an ideal candidate?',
      answer:
        'Individuals with visible spider veins, thread veins, or minor vascular lesions on the face, legs, or body can benefit after a professional skin assessment.'
    },
    {
      id: 4,
      question: 'How long does each session take?',
      answer:
        'Treatment sessions typically last 20–45 minutes depending on the number and size of veins, the treated area, and individual skin response.'
    },
    {
      id: 5,
      question: 'How many sessions are required?',
      answer:
        'Most patients need 2–4 sessions spaced 4–6 weeks apart, depending on vein severity, skin type, and area coverage.'
    },
    {
      id: 6,
      question: 'Is the treatment painful?',
      answer:
        'Discomfort is minimal. Patients may feel slight stinging or warmth during laser pulses, and topical numbing creams can be applied if needed.'
    },
    {
      id: 7,
      question: 'Are there any side effects?',
      answer:
        'Temporary redness, mild swelling, or minor bruising may occur but usually resolves within a few days with proper post-treatment care.'
    },
    {
      id: 8,
      question: 'Can the treatment remove all veins permanently?',
      answer:
        'Laser treatment can permanently reduce or eliminate most visible veins, though new veins may develop over time due to genetics or lifestyle factors.'
    },
    {
      id: 9,
      question: 'Is downtime required?',
      answer:
        'Downtime is minimal. Patients can resume daily activities immediately, though avoiding sun exposure and heavy exercise for a few days is recommended.'
    },
    {
      id: 10,
      question: 'Can the procedure be done on all skin types?',
      answer:
        'Yes, modern laser technology allows treatment for most skin types, with laser settings customized by a dermatologist for safety and effectiveness.'
    },
    {
      id: 11,
      question: 'Are results immediately visible?',
      answer:
        'Some improvement may be seen after the first session, but full results develop gradually over weeks as veins fade and the skin heals.'
    },
    {
      id: 12,
      question: 'Can the treatment be combined with other procedures?',
      answer:
        'Yes, skin veins laser treatment can be safely combined with facials, chemical peels, or other laser skin therapies when advised by your dermatologist.'
    },
    {
      id: 13,
      question: 'How should I care for my skin after treatment?',
      answer:
        'Patients should use sunscreen, avoid prolonged sun exposure, and follow all aftercare instructions provided by the dermatologist for optimal healing.'
    },
    {
      id: 14,
      question: 'Is the treatment suitable for leg veins?',
      answer:
        'Yes, small spider veins on the legs can be treated effectively, while larger varicose veins may require additional medical evaluation.'
    },
    {
      id: 15,
      question: 'Where can I get skin veins laser treatment in Dubai?',
      answer:
        'You can receive professional skin veins laser treatment in Dubai at DHA-licensed clinics like Rama Care Polyclinic with experienced dermatologists and advanced equipment.'
    }
  ],
        resources: [
           {
            id: 1,
            text: 'Spider Veins Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/spider-veins-laser-treatment'
          },
          {
            id: 2,
            text: 'Carbon Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/carbon-laser-dubai'
          },
          {
            id: 3,
            text: 'Fractional CO2 Laser',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/fractional-co2-laser-dubai'
          },
          {
            id: 4,
            text: 'Laser Rejuvenation',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/laser-rejuvenation-dubai'
          },
          {
            id: 5,
            text: 'Laser Bleaching',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/laser-bleaching-dubai'
          },
          {
            id: 6,
            text: 'Birthmarks Removal',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/birthmark-removal-dubai'
          },
          {
            id: 7,
            text: 'Female Genital Rejuvenation',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/female-genital-rejuvenation-dubai'
          },
          {
            id: 8,
            text: 'Scars Removal',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/scars-removal-dubai'
          },
          {
            id: 9,
            text: 'Mole Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mole-removal-dubai'
          },
            {
            id: 10,
            text: 'Tattoo Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/tattoo-removal-dubai'
          },
            {
            id: 11,
            text: 'Nail Fungus',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/nail-fungus-dubai'
          },
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
       subtitle: 'Verified testimonials from patients who achieved excellent laser treatment results',
        testimonials: [
         {
      id: 1,
      videoUrl: '/videos/testimonial-1.mp4'
    },
    {
      id: 2,
      videoUrl: '/videos/testimonial-2.mp4'
    },
    {
      id: 3,
      videoUrl: '/videos/testimonial-3.mp4'
    },
    {
      id: 4,
      videoUrl: '/videos/testimonial-4.mp4'
    },
    {
      id: 5,
      videoUrl: '/videos/testimonial-5.mp4'
    },
    {
      id: 6,
      videoUrl: '/videos/testimonial-6.mp4'
    }
        ],
        stats: [
          {
            id: 1,
            number: '4.9/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.9
          },
          {
            id: 2,
            number: '2,500+',
            label1: 'Laser Sessions',
            label2: 'Completed',
            target: 2500
          },
          {
            id: 3,
            number: '97%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 97
          },
          {
            id: 4,
            number: '95%',
            label1: 'Success Rate',
            label2: 'Hair Removal',
            target: 95
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment Options',
        insuranceTitle: 'Insurance & Reimbursement',
        paymentOptions: [
          'Cash, Credit/Debit Cards accepted',
          'Flexible payment plans available',
          '0% interest installments (conditions apply)'
        ],
        insuranceOptions: [
          'Accepted by select insurance providers',
          'Detailed invoices provided for claims',
          'Assistance with documentation'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Spider Veins Laser Treatment in Dubai Today',
        description: 'Achieve clearer, healthier-looking skin with Spider Veins Laser Treatment at ramacarepolyclinic, where expert medical care meets personalized, non-surgical solutions.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '2,500+ Sessions',
            description: 'Completed'
          },
          {
            title: '4.9/5 Rating',
            description: 'Patient Reviews'
          }
        ]
      }
    },

  'aesthetic-dermatology-dubai-laser-treatment-carbon-laser-treatment': {

    hero: {
      subtitle: 'Clearer, Brighter Skin with Advanced Medical Care',
      description: 'Restore your skin’s natural glow and hydration with Skin Booster Treatment in Dubai at ramacare polyclinic. This advanced injectable treatment deeply nourishes the skin from within, improving texture, elasticity, and overall skin quality for a fresh, youthful appearance.',
      rating: '4.9/5 Rating (300+ Reviews)',
      stats: [
        { id: 1, number: '92%', label: 'Patient Satisfaction' },
        { id: 2, number: '800+', label: 'Treatments Completed' },
        { id: 3, number: '15+', label: 'Years Experience' }
      ],
      ctaButtons: {
        primary: { text: 'Book Consultation', icon: 'calendar', link: '#book-consultation' },
        secondary: { text: 'WhatsApp', phone: '+971 XX XXX XXXX', icon: 'whatsapp' }
      },
      features: [' DHA-Licensed Multispecialty Polyclinic', 'Experienced Doctors & Certified Aesthetic Team', 'Safe, Clinically Approved Laser Technology'],
       image: {
          src: '/images/carbon.jpg',
          alt: 'Carbon laser treatment performed by specialists to rejuvenate the skin, reduce pigmentation, and improve texture.'
        },
      medicalNotice: {
              text: 'Safety & Medical Disclaimer: Results may vary based on individual skin condition and treatment plan. All Skin Booster Treatment in Dubai procedures at ramacarepolyclinic follow DHA-approved medical protocols and strict safety standards.',
              show: true
            }
    },
    doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Laser Treatment Specialists in Dubai',
        description: 'DHA-licensed dermatologists with extensive experience in advanced laser technology and aesthetic treatments.',
        doctors: [
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
        ]
      },
    certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
    overview: {
      title: 'Understanding Carbon Laser Treatment in Dubai',
        problemIntro: {
          title: 'The Problem: Skin Imperfections',
          description:
            'Many people struggle with dehydrated skin that topical products cannot fully treat. Environmental exposure, aging, and lifestyle factors worsen skin texture and radiance over time.'
        },
     
       solutionIntro: {
  title: 'Our Solution: Carbon Laser Treatment in Dubai',
  description:
    'Our Carbon Laser Treatment in Dubai is a non-invasive, effective solution for smoother, brighter, and rejuvenated skin.'
},
     
    leftCards: [
  {
    "id": 1,
    "title": "What Is Carbon Laser Treatment?",
    "description": "Carbon Laser Treatment in Dubai is a non-invasive skin rejuvenation procedure that uses a medical carbon solution and laser energy to deeply cleanse pores, reduce oil, improve acne, and brighten the skin. It is often called a “Hollywood Peel.”"
  },
  {
    "id": 2,
    "title": "Who Is It For?",
    "description": "Carbon laser treatment is suitable for individuals with:",
    "listItems": [
      "Oily or acne-prone skin",
      "Enlarged or clogged pores",
      "Dull, uneven skin tone",
      "Blackheads and whiteheads",
      "Mild pigmentation and acne marks"
    ]
  },
  {
    "id": 3,
    "title": "Trusted Skin Care You Can Depend On",
    "description": "",
     "listItems": [
      " Doctor-supervised aesthetic treatments",
      " Personalized plans based on skin type and concern",
      "Focus on skin clarity, texture, and glow",
      "Medical-grade laser technology",
      " Quick sessions with visible, gradual results"
    ]
  }
],
  rootCauses: [
  {
    id: 1,
    title: 'Advanced Carbon Laser Technology',
    description:
      'Removes dead skin cells, impurities, and pigmentation while stimulating collagen production for healthier skin.',
    severity: null,
    severityColor: null
  },
  {
    id: 2,
    title: 'Deep Pore Cleansing',
    description:
      'Targets clogged pores, reduces oiliness, and minimizes acne breakouts for a clearer complexion.',
    severity: null,
    severityColor: null
  },
  {
    id: 3,
    title: 'Skin Rejuvenation',
    description:
      'Reduces fine lines, smooths rough texture, and improves overall skin tone and radiance.',
    severity: null,
    severityColor: null
  },
  {
    id: 4,
    title: 'Safe & Comfortable Procedure',
    description:
      'Non-invasive treatment with minimal downtime, suitable for all skin types.',
    severity: null,
    severityColor: null
  },
  {
    id: 5,
    title: 'Long-Lasting Results',
    description:
      'Enhances skin glow, clarity, and firmness, providing youthful, revitalized skin for the long term.',
    severity: null,
    severityColor: null
  }
],
      quickFacts: [
        { label: 'Treatment Type', value: 'Non-surgical, non-invasive' },
        { label:  'Anesthesia', value: ' Not required' },
        { label:  'Recovery Time', value: ' Immediate' },
        { label: '  Side Effects', value:  ' Mild redness (temporary)' }
      ],
     
     approachCards: [
  {
    id: 1,
    title: 'Advanced Carbon Laser Technology',
    description:
      'Removes dead skin cells, impurities, and pigmentation while stimulating collagen production for healthier skin.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Deep Pore Cleansing',
    description:
      'Targets clogged pores, reduces oiliness, and minimizes acne breakouts for a clearer complexion.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Skin Rejuvenation',
    description:
      'Reduces fine lines, smooths rough texture, and improves overall skin tone and radiance.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Safe & Comfortable Procedure',
    description:
      'Non-invasive treatment with minimal downtime, suitable for all skin types.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Long-Lasting Results',
    description:
      'Enhances skin glow, clarity, and firmness, providing youthful, revitalized skin for the long term.',
    hasLearnMore: false,
    expandedContent: null
  }
]
    },
   healingJourney: {
  title: 'Your Journey to Clearer, Radiant Skin',
  description:
    'Our carbon laser treatment in Dubai follows a safe, structured, and results-driven approach to improve skin texture, reduce pigmentation, acne scars, and rejuvenate the skin. Each phase is carefully planned by experienced dermatology professionals to ensure comfort, safety, and visible results.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Week 1: Initial Skin Consultation (60 Minutes)',
      duration: 'Week 1',
      description:
        'Your treatment journey begins with a detailed consultation to determine whether carbon laser treatment in Dubai is suitable for your skin type and concerns.',
      keyActivities: [
        'Review of medical history and current skincare routine',
        'Assessment of skin concerns such as acne scars, pigmentation, and dullness',
        'Skin type and sensitivity evaluation',
        'Creation of a customized carbon laser treatment plan in Dubai'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Weeks 1–2: Skin Preparation Phase',
      duration: 'Weeks 1–2',
      description:
        'Proper skin preparation ensures maximum results and reduces the risk of side effects during carbon laser treatment in Dubai.',
      keyActivities: [
        'Deep cleansing and exfoliation guidance',
        'Temporary avoidance of harsh skincare products or retinoids',
        'Hydration and sun protection recommendations',
        'Pre-treatment safety checks'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Weeks 3–12: Active Carbon Laser Sessions',
      duration: 'Weeks 3–12',
      description:
        'This phase includes regular carbon laser sessions in Dubai to remove dead skin cells, reduce pigmentation, and improve overall skin texture.',
      keyActivities: [
        '1–2 sessions every 2–4 weeks, based on skin condition',
        'Application of carbon lotion followed by laser treatment',
        'Stimulation of collagen production and improved skin elasticity',
        'Reduction of acne, pigmentation, and dullness',
        'Monitoring of skin response and adjustments to the treatment plan'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Months 4–12: Maintenance & Follow-Up Care',
      duration: 'Months 4–12',
      description:
        'Maintenance sessions help preserve the improvements achieved through carbon laser treatment in Dubai.',
      keyActivities: [
        'Periodic follow-up consultations',
        'Maintenance laser sessions are recommended',
        'Ongoing skincare guidance for lasting results',
        'Professional monitoring of skin health'
      ],
      side: 'left'
    }
  ]
},
    benefits: {
      title: 'Clinically-Observed Benefits',
      description: '',
      comparisonTitle: 'Carbon Laser Treatment vs. Conventional Facials',
      comparisonDescription: 'Understanding the Difference Before Choosing Your Care',
      comparisonHeaders: {
        feature: 'Aspect',
        ourTreatment: 'Carbon Laser Treatment',
        traditional: 'Regular Facials'
      },
      benefits: [
        {
          id: 1,
          title: '   Reduced acne and oiliness',
          percentage: 89,
          description: null
        },
        {
          id: 2,
          title: ' Minimized pores',
          percentage: 92,
          description: null
        },
        {
          id: 3,
          title: ' Brighter, more even skin tone',
          percentage: 87,
          description: null
        },
        {
          id: 4,
          title: ' Smoother skin texture',
          percentage: 95,
          description:null
        },
        {
          id: 5,
          title: ' Improved skin confidence',
          percentage: 85,
          description: null
        },
     
      ],
      comparisonData: [
        {
          feature: 'Depth of Treatment',
          ayurvedic: 'Deep pore cleansing',
          conventional: 'Surface-level care'
        },
        {
          feature: 'Results',
          ayurvedic: 'Long-lasting improvement',
          conventional: 'Short-term glow'
        },
        {
          feature: 'Oil Control',
          ayurvedic: 'Effectively reduces oil',
          conventional: 'Temporary control'
        },
        {
          feature: 'Technology',
          ayurvedic: 'Medical laser-based',
          conventional: 'Manual techniques'
        },
        {
          feature: 'Monitoring',
          ayurvedic: 'Doctor-supervised',
          conventional: 'No clinical oversight'
        },
      ]
    },
  pricing: {
  title: 'Transparent Pricing & Carbon Laser Treatment Packages',
  description:
    'Our carbon laser treatment packages are specifically designed to address common skin concerns, including acne, pigmentation, enlarged pores, excess oil, and dull skin. Each package is customized based on your skin condition and treatment goals, ensuring safe and visible results.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For Mild Skin Concerns & First-Time Treatments',
      duration: '6 sessions over 3 months',
      features: [
        'Initial skin consultation and assessment',
        '6 carbon laser treatment sessions',
        'Deep pore cleansing and exfoliation',
        'Oil control and skin brightening support',
        'Post-treatment skincare guidance'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For Moderate Acne, Pigmentation & Uneven Skin Tone',
      duration: '12 sessions over 4 months',
      features: [
        'Detailed skin analysis and treatment planning',
        '12 carbon laser treatment sessions',
        'Targeted therapy for acne scars, pigmentation, and enlarged pores',
        'Pre- and post-treatment skincare recommendations',
        'Monthly progress monitoring'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete Skin Rejuvenation & Glow Program',
      duration: '24 sessions over 6 months',
      features: [
        'All benefits of the Advanced Package',
        'Combination carbon laser and skin rejuvenation therapies',
        'Advanced treatment for stubborn pigmentation and acne scars',
        'Personalized skincare and anti-aging protocol',
        'Quarterly skin reviews and long-term care guidance'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
    faq: {
  title: 'Carbon Laser Treatment in Dubai – Patient Guide',
  description: null,
  faqs: [
    {
      id: 1,
      question: ' What is Carbon Laser Treatment in Dubai?',
      answer: ' Carbon Laser Treatment in Dubai is a non-invasive laser facial that deeply cleanses pores, controls oil, reduces acne, and improves skin tone using medical-grade carbon solution and laser technology.'
    },
    {
      id: 2,
      question: ' Is Carbon Laser Treatment safe for all skin types?',
      answer: ' Yes, Carbon Laser Treatment is generally safe for most skin types when performed under medical supervision. A consultation ensures suitability based on skin condition, sensitivity, and treatment goals.'
    },
    {
      id: 3,
      question: ' How does Carbon Laser Treatment help with acne?',
      answer: 'Carbon Laser Treatment targets acne-causing bacteria, reduces excess oil production, and unclogs pores, helping to control breakouts and improve overall skin clarity over multiple sessions.'
    },
    {
      id: 4,
      question: 'How many Carbon Laser sessions are required for visible results?',
      answer: 'Most patients notice instant freshness after one session, while optimal results for acne, pores, and oil control usually require 2–4 sessions, depending on individual skin concerns.'
    },
    {
      id: 5,
      question: 'Does Carbon Laser Treatment reduce enlarged pores?',
      answer: 'Yes, Carbon Laser Treatment deeply cleanses pores and tightens them by reducing oil and debris, resulting in smoother skin texture and visibly minimized pores over time.'
    },
    {
      id: 6,
      question: ' Is there any downtime after Carbon Laser Treatment?',
      answer: ' No, Carbon Laser Treatment involves minimal to no downtime. Patients can return to daily activities immediately, with only mild temporary redness in some cases.'
    },
    {
      id: 7,
      question: 'Is Carbon Laser Treatment painful?',
      answer: ' Carbon Laser Treatment is generally comfortable. Patients may feel mild warmth or tingling during the procedure, but anesthesia is not required due to its non-invasive nature.'
    },

    {
      id: 8,
      question: 'Can Carbon Laser Treatment brighten dull skin?',
      answer: ' Yes, Carbon Laser Treatment gently exfoliates dead skin cells, removes impurities, and boosts skin clarity, resulting in a brighter, more even complexion with a healthy glow.'
    },

    {
      id: 9,
      question: ' Is Carbon Laser Treatment suitable for men?',
      answer: ' Absolutely. Carbon Laser Treatment is suitable for both men and women, especially those with oily skin, acne, enlarged pores, or dull complexion seeking clearer skin.'
    },
    {
      id: 10,
      question: 'How long does one Carbon Laser session take?',
      answer: ' Each Carbon Laser Treatment session typically lasts between 30 to 45 minutes, making it a convenient option for individuals seeking effective skin rejuvenation without lengthy procedures.'
 },
    {
      id: 11,
      question: ' Can Carbon Laser Treatment help with pigmentation?',
      answer: ' Carbon Laser Treatment can improve mild pigmentation and uneven skin tone by exfoliating the skin and promoting clarity, though deeper pigmentation may require additional treatments.'
 },
    {
      id: 12,
      question: 'What should I avoid after Carbon Laser Treatment?',
      answer: ' After Carbon Laser Treatment, avoid excessive sun exposure, harsh skincare products, and heat treatments. Follow doctor-recommended skincare and sunscreen use for best results.'
  },
   
   
    {
      id: 13,
      question: 'How soon can I see results after Carbon Laser Treatment?',
      answer: 'Many patients notice immediate smoothness and freshness. Improvements in oil control, acne reduction, and pore size become more visible over the following weeks.'
  },
    {
      id: 14,
      question: ' Is Carbon Laser Treatment better than regular facials?',
      answer: ' Yes, Carbon Laser Treatment works deeper than regular facials, offering long-lasting results through medical-grade laser technology rather than surface-level manual cleansing.'
 },
    {
      id: 15,
      question: 'Why choose ramacarepolyclinic for Carbon Laser Treatment in Dubai?',
      answer: ' Ramacarepolyclinic offers DHA-approved Carbon Laser Treatment in Dubai with doctor supervision, advanced technology, personalized care plans, and a strong focus on skin safety.'
  }
  ],
      resources: [
          {
            id: 1,
            text: 'Spider Veins Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/spider-veins-laser-treatment'
          },
          {
            id: 2,
            text: 'Carbon Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/carbon-laser-dubai'
          },
          {
            id: 3,
            text: 'Fractional CO2 Laser',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/fractional-co2-laser-dubai'
          },
          {
            id: 4,
            text: 'Laser Rejuvenation',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/laser-rejuvenation-dubai'
          },
          {
            id: 5,
            text: 'Laser Bleaching',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/laser-bleaching-dubai'
          },
          {
            id: 6,
            text: 'Birthmarks Removal',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/birthmark-removal-dubai'
          },
          {
            id: 7,
            text: 'Female Genital Rejuvenation',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/female-genital-rejuvenation-dubai'
          },
          {
            id: 8,
            text: 'Scars Removal',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/scars-removal-dubai'
          },
          {
            id: 9,
            text: 'Mole Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mole-removal-dubai'
          },
            {
            id: 10,
            text: 'Tattoo Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/tattoo-removal-dubai'
          },
            {
            id: 11,
            text: 'Nail Fungus',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/nail-fungus-dubai'
          },
      ]
    },
    bookConsultation: {
      badge: 'Start Your Journey',
      title: 'Book Skin Booster Treatment in Dubai Today',
      description: 'Refresh, hydrate, and rejuvenate your skin with Skin Booster Treatment in Dubai at ramacarepolyclinic, trusted for safe, natural, and doctor-led aesthetic care.',
      getInTouchTitle: 'Get In Touch',
      requestAppointmentTitle: 'Request Appointment',
      submitButtonText: 'Confirm Consultation',
      contactInfo: {
        phone: '+971 XX XXX XXXX',
        whatsapp: 'Chat with us instantly',
        email: 'info@ramacare.com',
        address: { line1: 'Dubai Healthcare City', line2: 'Building X, Floor X, Dubai, UAE' }
      },
      clinicHours: {
        weekdays: 'Saturday - Thursday:',
        weekdaysTime: '9:00 AM - 9:00 PM',
        friday: 'Friday:',
        fridayTime: '2:00 PM - 9:00 PM'
      },
      statCards: [
        { title: 'DHA Licensed', description: 'Certified Facility' },
        { title: 'Experienced Team', description: '15+ Years' },
        { title: '800+ Treatments', description: 'Completed' },
        { title: '4.9/5 Rating', description: 'Patient Reviews' }
      ]
    }

  },
  'aesthetic-dermatology-dubai-laser-treatment-fractional-co2-laser': {
  hero: {
        subtitle: 'Advanced Skin Resurfacing for Smoother, Clearer Skin',
        description: 'Scars, wrinkles, uneven texture, and sun damage can make skin look tired and aged. At ramacarepolyclinic, we offer Fractional CO₂ Laser Treatment in Dubai to renew damaged skin, improve texture, and stimulate natural collagen—under expert medical supervision.',
        rating: '4.9/5 Rating (500+ Reviews)',
        stats: [
          {
            id: 1,
            number: '95%',
            label: 'Patient Satisfaction'
          },
          {
            id: 2,
            number: '6000+',
            label: 'Laser Sessions Performed'
          },
          {
            id: 3,
            number: '15+',
            label: 'Years of Experience'
          }
        ],
        ctaButtons: {
          primary: {
            text: ' Book Your Free Laser Consultation',
             icon: 'calendar',
                link: '#book-now'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 56 659 7878',
                icon: 'whatsapp'
          }
        },
        features: [
          ' DHA-Licensed Multispecialty Polyclinic',
          '  Experienced Doctors & Certified Laser Specialists',
           ' Safe, Clinically Approved Fractional Laser Technology',
         
        ],
        image: {
          src: '/images/fractional.jpg',
          alt: 'Fractional CO2 laser treatment in Dubai is performed by specialists to resurface skin, reduce scars, and improve texture.'
        },
        medicalNotice: {
          text: 'Safety & Medical Disclaimer: Results vary depending on skin type, scar depth, and post-treatment care. All Fractional CO₂ Laser Treatment in Dubai at ramacarepolyclinic follows DHA-approved safety protocols and medical guidelines.',
          show: true
        }
      },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Laser Treatment Specialists in Dubai',
        description: 'DHA-licensed dermatologists with extensive experience in advanced laser technology and aesthetic treatments.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Fractional CO₂ Laser Treatment in Dubai',
        problemIntro: {
          title: 'Why Skin Develops Scars, Wrinkles, and Texture Issues',
          description: 'Acne, sun exposure, aging, and collagen loss can damage the deeper layers of the skin. Creams and facials often fail to treat these deeper concerns, leaving scars and wrinkles unchanged.'
    },
        solutionIntro: {
          title: 'How Fractional CO₂ Laser Treatment in Dubai Works',
          description: 'At ramacarepolyclinic, Fractional CO₂ Laser Treatment focuses on controlled skin renewal while protecting surrounding healthy tissue.'
  },
        leftCards: [
          {
            id: 1,
            title: 'What Is Fractional CO₂ Laser Treatment?',
            description: 'Fractional CO₂ Laser Treatment in Dubai is an advanced skin resurfacing procedure that creates controlled micro-channels in the skin to remove damaged tissue and stimulate collagen production. This process helps improve scars, wrinkles, pigmentation, and overall skin texture.'
          },
          {
            id: 2,
            title: 'Who is it for?',
            description: 'Fractional CO₂ Laser Treatment is suitable for individuals with:',
            listItems: [
              'Acne scars or surgical scars',
              'Fine lines and wrinkles',
              'Uneven skin texture',
              'Sun-damaged skin',
              'Enlarged pores',
              'Pigmentation concerns'

            ]
          },
           {
            id: 3,
            title: 'Duration',
            description: 'Treatment sessions usually take 30–60 minutes, depending on the area treated. Healing occurs gradually, with visible improvement continuing over several weeks as new collagen forms.'
            },
           {
            id: 4,
            title: 'Why Patients Choose Fractional CO₂ Laser Treatment in Dubai',
            description: 'Patients trust ramacarepolyclinic for Fractional CO₂ Laser Treatment because we combine medical expertise with advanced technology and honest treatment planning. Every procedure is customized for safety, comfort, and lasting results.',
            listItems: [
              'Acne scars or surgical scars',
              'Fine lines and wrinkles',
              'Uneven skin texture',
              'Sun-damaged skin',
              'Enlarged pores',
              'Pigmentation concerns'

            ]
          },
        ],
        rootCauses: [
          {
            id: 1,
            title: 'Unwanted Hair with Frequent Regrowth',
            description: 'Shaving, waxing, and salon lasers offer temporary results, leading to repeated regrowth and skin irritation.',
            severity: 'High',
            severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
          },
          {
            id: 2,
            title: 'Pigmentation & Uneven Skin Tone',
            description: 'Sun exposure, hormonal changes, and aging can cause dark spots that topical products fail to correct.',
            severity: 'Medium',
            severityColor: 'bg-[#FED7AA] text-[#9A3412]'
          },
          {
            id: 3,
            title: 'Acne Scars & Skin Texture Issues',
            description: 'Deep scars and uneven skin texture often remain untreated with surface-level procedures.',
            severity: 'Medium',
            severityColor: 'bg-[#FED7AA] text-[#9A3412]'
          },
          {
            id: 4,
            title: 'Sensitive Skin Reactions',
            description: ' Incorrect laser settings can cause redness, burns, or hyperpigmentation—especially on darker or sensitive skin types.',
            severity: 'Low',
            severityColor: 'bg-[#FEF3C7] text-[#92400E]'
          },
          {
            id: 5,
            title: 'Lack of Medical Customization',
            description: ' One-size-fits-all laser treatments do not consider individual skin type, concerns, or medical history.',
            severity: 'Low',
            severityColor: 'bg-[#FEF3C7] text-[#92400E]'
          }
        ],
        quickFacts: [
          { label: 'Treatment Type', value: 'Laser-based skin resurfacing' },
          { label: 'Anesthesia', value: ' Topical numbing cream' },
          { label: 'Downtime', value: 'Few days to one week (varies)' },
          { label: 'Results', value: 'Progressive & long-lasting' },
         
        ],
        approachCards: [
          {
            id: 1,
            title: 'Acne Scars – High',
            description: ' Breaks down scar tissue and stimulates collagen remodeling.',
            hasLearnMore: false,
            expandedContent: null
          },
          {
            id: 2,
            title: 'Wrinkles & Fine Lines – High',
            description: '  Improves skin firmness and smoothness by boosting collagen.',
            hasLearnMore: false,
            expandedContent: null
          },
          {
            id: 3,
            title: 'Uneven Skin Texture – High',
            description: ' Resurfaces damaged skin for a smoother appearance.',
            hasLearnMore: false,
            expandedContent: null
          },
          {
            id: 4,
            title: 'Pigmentation & Sun Damage – Medium',
            description: '  Reduces discoloration and improves skin tone.',
            hasLearnMore: false,
            expandedContent: null
          },
          {
            id: 5,
            title: 'Enlarged Pores – Medium',
            description: ' Refines skin texture and pore appearance over time.',
            hasLearnMore: false,
            expandedContent: null
          },
             {
            id: 6,
            title: 'Result',
            description: '   Smoother skin, improved texture, reduced scars and wrinkles, firmer appearance, and healthier-looking skin.CZ',
            hasLearnMore: false,
            expandedContent: null
          },
        ]
      },
      healingJourney: {
        title: 'Your Skin Renewal Journey: Step by Step',
        description: 'A structured, doctor-guided approach designed to deliver safe and effective results with Fractional CO₂ Laser Treatment in Dubai.',
        steps: [
          {
            id: 1,
            number: '01',
            title: 'Initial Consultation & Skin Assessment',
            duration: 'Day 1',
            description: 'null',
            keyActivities: [
              'Detailed skin evaluation',
              'Scar depth and texture analysis',
              'Medical history review',
              'Personalized treatment plan'

            ],
            side: 'right'
          },
          {
            id: 2,
            number: '02',
            title: 'Skin Preparation Phase',
            duration: 'Week 1',
            description: '',
            keyActivities: [
              'Pre-treatment skincare guidance',
                'Sun protection advice',
                'Topical numbing application'
            ],
            side: 'left'
          },
          {
            id: 3,
            number: '03',
            title: ' Active Fractional CO₂ Laser Treatment',
            duration: 'Weeks 2-24',
            description: '',
            keyActivities: [
              'Controlled laser delivery',
              'Targeted treatment areas',
              'Skin cooling and calming care',
              'Procedure performed under medical supervision'
            ],
            side: 'right'
          },
          {
            id: 4,
            number: '02',
            title: 'Healing, Recovery & Maintenance',
            duration: 'Week 1',
            description: '',
            keyActivities: [
              'Post-treatment skincare plan',
                'Healing and collagen remodeling phase',
                'Follow-up assessments',
                'Maintenance treatments, if required'
            ],
            side: 'left'
          },
          {
            id: 5,
            number: '02',
            title: 'Result',
            duration: 'Week 1',
            description: ' Gradual skin renewal with visible reduction in scars, smoother texture, improved tone, and firmer skin over time.',
            keyActivities: [
              'Post-treatment skincare plan',
                'Healing and collagen remodeling phase',
                'Follow-up assessments',
                'Maintenance treatments, if required'
            ],
            side: 'left'
          }
        ]
      },
      benefits: {
        title: 'Fractional CO₂ Laser Treatment vs. Conventional Skin Treatments',
        description: '',
        comparisonTitle: 'Laser Treatment vs Conventional Methods',
        comparisonDescription: 'Compare our advanced laser approach with conventional hair removal and skin treatment methods',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Fractional CO₂ Laser',
          traditional: 'Regular Facials'
        },
        benefits: [
          {
            id: 1,
            title: ' Reduced acne scars',
            percentage: 90,
            description: 'null'
          },
          {
            id: 2,
            title: 'Smoother skin texture',
            percentage: 92,
            description: 'null'
          },
          {
            id: 3,
            title: 'Improved skin firmness',
            percentage: 88,
            description: 'null'
          },
          {
            id: 4,
            title: ' Softer fine lines and wrinkles',
            percentage: 85,
            description: ' '
          },
          {
            id: 5,
            title: 'More even skin tone',
            percentage: 94,
            description: ''
          }
        ],
        comparisonData: [
          {
            feature: 'Depth of Treatment',
            ayurvedic: 'Deep skin resurfacing',
            conventional: 'Surface-level care'
          },
          {
            feature: 'Collagen Stimulation',
            ayurvedic: 'Strong',
            conventional: 'Minimal'
          },
          {
            feature: 'Results',
            ayurvedic: 'Long-term improvement',
            conventional: 'Temporary glow'
          },
          {
            feature: 'Technology',
            ayurvedic: 'Medical laser-based',
            conventional: 'Manual techniques'
          },
          {
            feature: 'Medical Supervision',
            ayurvedic: 'Yes',
            conventional: 'No'
          }
        ]
      },
     pricing: {
  title: 'Transparent Pricing & Fractional CO₂ Laser Treatment Packages in Dubai',
  description:
    'Our fractional CO₂ laser treatment in Dubai packages are designed to address deep skin concerns such as acne scars, pigmentation, fine lines, wrinkles, and uneven skin texture. Each package is personalized to your skin condition and treatment goals, ensuring safe, effective, and visible skin resurfacing results.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For Mild Scarring & Early Skin Texture Concerns',
      duration: '3 sessions over 3 months',
      features: [
        'Initial dermatology consultation and skin assessment',
        '3 fractional CO₂ laser treatment sessions in Dubai',
        'Targeted laser resurfacing for texture improvement',
        'Post-laser soothing and recovery guidance',
        'Personalized skincare recommendations'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For Moderate Acne Scars, Pigmentation & Wrinkles',
      duration: '5 sessions over 5 months',
      features: [
        'Comprehensive skin analysis and treatment planning',
        '5 fractional CO₂ laser treatment sessions in Dubai',
        'Deep resurfacing for acne scars and pigmentation',
        'Pre- and post-treatment care protocol',
        'Monthly progress monitoring and plan adjustments'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete Skin Resurfacing & Anti-Aging Program',
      duration: '7 sessions over 7 months',
      features: [
        'All the benefits of the Advanced Package',
        'Advanced CO₂ laser resurfacing for deep scars and wrinkles',
        'Combination therapies for enhanced collagen stimulation',
        'Personalized anti-aging and skin-repair plan',
        'Quarterly skin reviews and long-term skin care guidance'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
      faq: {
        title: 'Frequently Asked Questions',
        description: 'Fractional CO₂ Laser Treatment in Dubai – Patient Information',
        faqs: [
          {
            id: 1,
            question: ' What is Fractional CO₂ Laser Treatment in Dubai?',
            answer: ' Fractional CO₂ Laser Treatment in Dubai is an advanced skin resurfacing procedure that improves scars, wrinkles, and texture by stimulating collagen through controlled laser energy under medical supervision.'
   },
          {
            id: 2,
            question: 'Is Fractional CO₂ Laser Treatment safe?',
            answer: ' Yes, Fractional CO₂ Laser Treatment is safe when performed by trained doctors using approved technology. A consultation at ramacarepolyclinic ensures suitability and minimizes risks.'
  },
          {
            id: 3,
            question: 'Who is an ideal candidate for Fractional CO₂ Laser Treatment?',
           },
          {
            id: 4,
            question: 'How many sessions are required for visible results?',
            answer: ' Most patients need one to three sessions, depending on scar depth and skin condition. Results improve gradually as collagen rebuilds over several weeks.'
  },
          {
            id: 5,
            question: 'Is Fractional CO₂ Laser Treatment painful?',
            answer: 'The procedure is generally well tolerated. A topical numbing cream is applied before treatment to reduce discomfort during the laser session.'
  },
          {
            id: 6,
            question: ' What is the downtime after Fractional CO₂ Laser Treatment?',
            answer: ' Downtime usually ranges from a few days to one week. Redness and mild peeling are common and gradually subside as skin heals.'
    },
          {
            id: 7,
            question: ' Can Fractional CO₂ Laser Treatment remove acne scars completely?',
            answer: ' While it significantly improves acne scars, complete removal depends on scar depth and skin response. Multiple sessions may be recommended for best results.'
   },
          {
            id: 8,
            question: ' How soon will I see results after treatment?',
            answer: ' Initial improvement appears once healing begins. Skin texture and firmness continue to improve over several weeks as new collagen forms.'
  },
          {
            id: 9,
            question: ' Is Fractional CO₂ Laser Treatment suitable for all skin types?',
            answer: ' It is suitable for many skin types, but darker skin tones require careful assessment. A doctor consultation helps customize treatment safely.'
      },
          {
            id: 10,
            question: 'Can Fractional CO₂ Laser Treatment reduce wrinkles?',
            answer: ' Yes, the treatment softens fine lines and wrinkles by stimulating collagen production, improving skin firmness and overall smoothness.'
    },
          {
            id: 11,
            question: ' What areas can be treated with Fractional CO₂ Laser?',
            answer: ' Common areas include the face, neck, hands, and areas affected by scars or uneven texture, depending on individual needs and assessment.'
   },
          {
            id: 12,
            question: 'How should I prepare for Fractional CO₂ Laser Treatment?',
            answer: ' Preparation includes avoiding sun exposure, stopping certain skincare products, and following pre-treatment instructions provided by your doctor.'
   },
          {
            id: 13,
            question: 'What aftercare is required following treatment?',
            answer: ' Post-treatment care includes gentle skincare, sun protection, moisturization, and avoiding harsh products to support proper healing and results.'
         },
          {
            id: 14,
            question: 'Is Fractional CO₂ Laser Treatment better than chemical peels?',
            answer: ' Fractional CO₂ Laser Treatment works deeper than chemical peels, offering longer-lasting improvement for scars, wrinkles, and texture concerns.'
   },
          {
            id: 15,
            question: ' Why choose ramacarepolyclinic for Fractional CO₂ Laser Treatment in Dubai?',
            answer: 'ramacarepolyclinic provides doctor-led Fractional CO₂ Laser Treatment in Dubai with personalized care, advanced technology, and strict safety standards.'
 }
        ],
        resources: [
           {
            id: 1,
            text: 'Spider Veins Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/spider-veins-laser-treatment'
          },
          {
            id: 2,
            text: 'Carbon Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/carbon-laser-dubai'
          },
          {
            id: 3,
            text: 'Fractional CO2 Laser',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/fractional-co2-laser-dubai'
          },
          {
            id: 4,
            text: 'Laser Rejuvenation',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/laser-rejuvenation-dubai'
          },
          {
            id: 5,
            text: 'Laser Bleaching',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/laser-bleaching-dubai'
          },
          {
            id: 6,
            text: 'Birthmarks Removal',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/birthmark-removal-dubai'
          },
          {
            id: 7,
            text: 'Female Genital Rejuvenation',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/female-genital-rejuvenation-dubai'
          },
          {
            id: 8,
            text: 'Scars Removal',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/scars-removal-dubai'
          },
          {
            id: 9,
            text: 'Mole Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mole-removal-dubai'
          },
            {
            id: 10,
            text: 'Tattoo Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/tattoo-removal-dubai'
          },
            {
            id: 11,
            text: 'Nail Fungus',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/nail-fungus-dubai'
          },
        ]
      },
      // testimonials: {
      //   title: 'Real Success Stories from Dubai Patients',
      //   description: 'Verified testimonials from patients who achieved excellent laser treatment results',
      //   filters: [
      //     { id: 'all', label: 'All Stories' },
      //     { id: 'hair-removal', label: 'Hair Removal' },
      //     { id: 'skin-rejuvenation', label: 'Skin Rejuvenation' },
      //     { id: 'pigmentation', label: 'Pigmentation' }
      //   ],
      //   testimonials: [
      //     {
      //       id: 1,
      //       name: 'Noor H.',
      //       age: 29,
      //       location: 'Dubai Marina',
      //       rating: 5,
      //       testimonial: "Laser hair removal has been life-changing. No more shaving or waxing, and my skin is so smooth. The process was comfortable and the results are amazing.",
      //       condition: 'Unwanted body hair',
      //       duration: '8 sessions',
      //       result: '95% hair reduction, smooth skin',
      //       category: 'hair-removal',
      //       date: 'Treated in March 2024'
      //     },
      //     {
      //       id: 2,
      //       name: 'Omar F.',
      //       age: 41,
      //       location: 'JBR',
      //       rating: 5,
      //       testimonial: "The skin rejuvenation laser treatments have transformed my skin. Fine lines are reduced and my skin looks years younger. Highly professional service.",
      //       condition: 'Aging skin, fine lines',
      //       duration: '5 sessions',
      //       result: 'Improved texture, reduced fine lines',
      //       category: 'skin-rejuvenation',
      //       date: 'Treated in February 2024'
      //     },
      //     {
      //       id: 3,
      //       name: 'Aisha K.',
      //       age: 34,
      //       location: 'Downtown Dubai',
      //       rating: 5,
      //       testimonial: "My pigmentation issues are completely resolved. The laser treatment was precise and effective. The team was knowledgeable and caring throughout.",
      //       condition: 'Hyperpigmentation',
      //       duration: '6 sessions',
      //       result: 'Clear, even-toned skin',
      //       category: 'pigmentation',
      //       date: 'Treated in April 2024'
      //     }
      //   ],
      //   stats: [
      //     {
      //       id: 1,
      //       number: '4.9/5',
      //       label1: 'Average Rating',
      //       label2: 'Patient Reviews',
      //       target: 4.9
      //     },
      //     {
      //       id: 2,
      //       number: '2,500+',
      //       label1: 'Laser Sessions',
      //       label2: 'Completed',
      //       target: 2500
      //     },
      //     {
      //       id: 3,
      //       number: '97%',
      //       label1: 'Satisfaction Rate',
      //       label2: 'Happy Patients',
      //       target: 97
      //     },
      //     {
      //       id: 4,
      //       number: '95%',
      //       label1: 'Success Rate',
      //       label2: 'Hair Removal',
      //       target: 95
      //     }
      //   ]
      // },
      paymentInsurance: {
        paymentTitle: 'Payment Options',
        insuranceTitle: 'Insurance & Reimbursement',
        paymentOptions: [
          'Cash, Credit/Debit Cards accepted',
          'Flexible payment plans available',
          '0% interest installments (conditions apply)'
        ],
        insuranceOptions: [
          'Accepted by select insurance providers',
          'Detailed invoices provided for claims',
          'Assistance with documentation'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Fractional CO₂ Laser Treatment in Dubai Today',
        description: 'Restore smoother, firmer, and healthier-looking skin with Fractional CO₂ Laser Treatment in Dubai at ramacarepolyclinic, where medical expertise meets advanced aesthetic care.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '2,500+ Sessions',
            description: 'Completed'
          },
          {
            title: '4.9/5 Rating',
            description: 'Patient Reviews'
          }
        ]
      }
    },

      'aesthetic-dermatology-dubai-laser-treatment-female-genital-rejuvenation': {
      hero: {
        subtitle: 'Restore Comfort, Confidence, and Intimate Wellness',
        description: 'Changes due to childbirth, aging, hormonal shifts, or lifestyle factors can affect intimate comfort, appearance, and confidence. At ramacarepolyclinic, we offer Female Genital Rejuvenation in Dubai using safe, non-surgical medical solutions designed to improve comfort, tone, and overall intimate well-being—discreetly and professionally.',
        rating: '4.9/5 Rating (500+ Reviews)',
        stats: [
          {
            id: 1,
            number: '95%',
            label: 'Patient Satisfaction'
          },
          {
            id: 2,
            number: '6000+',
            label: 'Laser Sessions Performed'
          },
          {
            id: 3,
            number: '15+',
            label: 'Years of Experience'
          }
        ],
        ctaButtons: {
          primary: {
            text: ' Book Your Free Laser Consultation',
             icon: 'calendar',
                link: '#book-now'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 56 659 7878',
                icon: 'whatsapp'
          }
        },
        features: [
          'DHA-Licensed Multispecialty Polyclinic',
          ' Experienced Doctors & Certified Aesthetic Specialists',
           'Safe, Clinically Approved Technology',
        ],
        image: {
          src: '/images/female-gene.jpg',
          alt: 'Female genital rejuvenation in Dubai is performed by specialists to restore firmness, improve appearance, and enhance overall comfort.'
        },
        medicalNotice: {
          text: 'Safety & Medical Disclaimer: Results vary depending on individual anatomy, health status, and treatment adherence. All Female Genital Rejuvenation in Dubai treatments at ramacarepolyclinic follow DHA-approved medical and safety protocols.',
          show: true
        }
      },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Laser Treatment Specialists in Dubai',
        description: 'DHA-licensed dermatologists with extensive experience in advanced laser technology and aesthetic treatments.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Female Genital Rejuvenation in Dubai',
        problemIntro: {
          title: 'Root Causes Affecting Female Intimate Health',
          description: 'Many concerns related to the female genitalia in Dubai are not just surface-level issues. They often stem from internal imbalances that affect comfort, hygiene, immunity, and overall intimate wellness.',
        },
        solutionIntro: {
          title: 'Ayurvedic Care for Female Genital Health in Dubai',
          description: 'Our holistic Ayurvedic approach to female genital in Dubai focuses on correcting the root cause of imbalance rather than offering temporary symptom relief. Treatments are safe, natural, and personalized to each individual, ensuring optimal results and long-term benefits.',
        },
       leftCards: [
  {
    id: 1,
    title: 'What Is Female Genital Rejuvenation?',
    description:
      'Female Genital Rejuvenation in Dubai refers to non-surgical medical treatments designed to improve vaginal tone, hydration, elasticity, and external appearance. These treatments support intimate comfort and help restore tissue health using advanced, clinically approved technology.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description: 'Female Genital Rejuvenation may be suitable for women experiencing:',
    listItems: [
      'Vaginal laxity after childbirth',
      'Dryness or discomfort',
      'Reduced sensitivity',
      'Mild urinary leakage',
      'Changes due to aging or hormonal imbalance',
      'Aesthetic concerns affecting confidence'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description:
      'Treatment sessions usually take 20–40 minutes. Many women notice gradual improvement over a series of sessions, with no interruption to daily routines.'
  }
],
      rootCauses: [
  {
    id: 1,
    title: 'Pitta Dosha Aggravation',
    description: 'Excess internal heat can lead to irritation, burning sensation, inflammation, recurrent infections, redness, and sensitivity in the female genital area.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Vata Imbalance',
    description: 'Causes dryness, discomfort, itching, reduced natural lubrication, and increased sensitivity, often worsening with stress or hormonal changes.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 3,
    title: 'Kapha Imbalance',
    description: 'Leads to excess discharge, moisture imbalance, sluggish healing, and higher risk of fungal or bacterial overgrowth.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 4,
    title: 'Ama Accumulation (Toxins)',
    description: 'Digestive toxins weaken immunity and disrupt the natural balance of the female genital system, slowing healing and increasing recurrence of issues.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 5,
    title: 'Stress & Hormonal Imbalance',
    description: 'Triggers irregular cycles, recurrent infections, pH imbalance, discomfort, and overall decline in intimate health.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  }
],
       quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical intimate rejuvenation' },
  { label: 'Anesthesia', value: 'Not required' },
  { label: 'Downtime', value: 'None' },
  { label: 'Results', value: 'Gradual and natural' }
],
       approachCards: [
  {
    id: 1,
    title: 'Dosha Balancing Therapy',
    description: 'Restores balance between Pitta, Vata, and Kapha to reduce irritation, dryness, inflammation, and recurrence of intimate health concerns.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Internal Detoxification',
    description: 'Eliminates Ama (toxins) through gentle herbal medicines and cleansing therapies to strengthen immunity and improve healing.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Herbal Intimate Care Therapies',
    description: 'Uses carefully selected Ayurvedic herbs, medicated oils, and formulations to soothe, protect, and rejuvenate the female genital area.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Diet & Lifestyle Correction',
    description: 'Personalized dietary guidance and daily routine recommendations to support hormonal balance, digestion, and long-term intimate wellness.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Stress Management & Hormonal Support',
    description: 'Calms the nervous system, improves gut health, balances hormones, and supports natural regeneration of female genital tissues.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },

      healingJourney: {
  title: 'Your Intimate Wellness Journey: Step by Step',
  description:
    'A respectful, doctor-guided approach to ensure safe and effective Female Genital Rejuvenation in Dubai.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Assessment',
      duration: null,
      description: null,
      keyActivities: [
        'Private discussion of concerns and goals',
        'Medical and gynecological history review',
        'Tissue and wellness assessment',
        'Personalized treatment planning'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Treatment Preparation',
      duration: null,
      description: null,
      keyActivities: [
        'Pre-treatment guidance',
        'Comfort-focused preparation',
        'Explanation of procedure and expectations'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Active Rejuvenation Treatment',
      duration: null,
      description: null,
      keyActivities: [
        'Controlled energy delivery using approved technology',
        'Gentle, precise treatment',
        'Continuous medical monitoring'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Aftercare & Maintenance',
      duration: null,
      description: null,
      keyActivities: [
        'Post-treatment care guidance',
        'Lifestyle and wellness advice',
        'Follow-up assessments if needed'
      ],
      side: 'left'
    },
    {
      id: 5,
      number: 'Result',
      title: 'Result',
      duration: null,
      description:
        'Improved intimate comfort, better tissue tone, enhanced confidence, and long-term wellness.',
      keyActivities: null,
      side: 'right'
    }
  ]
},
      benefits: {
        title: 'Clinically-Observed Benefits',
        description: 'Evidence-based results from our advanced laser treatments.',
        comparisonTitle: 'Female Genital Rejuvenation vs. Surgical Options',
        comparisonDescription: 'Compare our advanced laser approach with conventional hair removal and skin treatment methods',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Female Genital Rejuvenation',
          traditional: 'Surgical Procedures'
        },
        benefits: [
          {
            id: 1,
            title: ' Improved vaginal tightness',
            percentage: 90,
            description: null
          },
          {
            id: 2,
            title: ' Reduced dryness and discomfort',
            percentage: 92,
            description: null
          },
          {
            id: 3,
            title: 'Enhanced intimate confidence',
            percentage: 88,
            description:null
          },
          {
            id: 4,
            title: 'No downtime or surgery',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: 'Safe, doctor-supervised care',
            percentage: 94,
            description: null
          }
        ],
        comparisonData: [
  {
    feature: 'Invasiveness',
    ayurvedic: 'Non-surgical',
    conventional: 'Surgical'
  },
  {
    feature: 'Downtime',
    ayurvedic: 'None',
    conventional: 'Extended recovery'
  },
  {
    feature: 'Comfort',
    ayurvedic: 'Minimal discomfort',
    conventional: 'Post-surgical pain'
  },
  {
    feature: 'Results',
    ayurvedic: 'Gradual, natural',
    conventional: 'Immediate but invasive'
  },
  {
    feature: 'Medical Risk',
    ayurvedic: 'Low',
    conventional: 'Higher'
  }
        ]
      },
      pricing: {
  title: 'Transparent Pricing & Treatment Packages',
  description:
    'Customized packages for Female Genital Rejuvenation in Dubai, based on individual concerns, treatment goals, and medical assessment',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For mild concerns & preventive care',
      duration: '2 sessions over 1 month',
      features: [
        'Private doctor consultation',
        'Intimate health assessment',
        '2 Female Genital Rejuvenation treatment sessions',
        'Basic aftercare and hygiene guidance',
        'Progress evaluation'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For moderate intimate concerns',
      duration: '4 sessions over 2–3 months',
      features: [
        'Detailed medical consultation',
        'Personalized treatment planning',
        '4 Female Genital Rejuvenation treatment sessions',
        'Customized aftercare support',
        'Lifestyle and wellness guidance',
        'Regular progress monitoring'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Comprehensive intimate wellness program',
      duration: '6–8 sessions over 3–4 months',
      features: [
        'Comprehensive doctor-led evaluation',
        'Advanced Female Genital Rejuvenation treatment sessions',
        'Enhanced tissue rejuvenation approach',
        'Confidential long-term care plan',
        'Dedicated follow-ups and medical support'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
     faq: {
  title: 'Frequently Asked Questions – Female Genital Rejuvenation in Dubai',
  description: null,
  faqs: [
    {
      id: 1,
      question: 'What is Female Genital Rejuvenation in Dubai?',
      answer:
        'Female Genital Rejuvenation in Dubai is a non-surgical medical treatment that improves intimate comfort, tone, and appearance using safe, clinically approved technology under doctor supervision.'
    },
    {
      id: 2,
      question: 'Who is an ideal candidate for this treatment?',
      answer:
        'Women experiencing laxity, dryness, discomfort, or changes after childbirth, aging, or hormonal shifts may benefit from Female Genital Rejuvenation following a professional consultation.'
    },
    {
      id: 3,
      question: 'Is Female Genital Rejuvenation safe?',
      answer:
        'Yes, when performed at ramacarepolyclinic, Female Genital Rejuvenation in Dubai follows DHA-approved protocols with doctor-led care, ensuring safety, comfort, and confidentiality.'
    },
    {
      id: 4,
      question: 'Does the procedure cause pain?',
      answer:
        'The treatment is generally comfortable. Most patients feel mild warmth or tingling, with no significant pain or anesthesia required during Female Genital Rejuvenation sessions.'
    },
    {
      id: 5,
      question: 'How long does each session take?',
      answer:
        'A typical Female Genital Rejuvenation session takes 30–45 minutes, allowing patients to return to daily activities immediately after treatment without downtime.'
    },
    {
      id: 6,
      question: 'How many sessions are usually required?',
      answer:
        'Most women need 2–6 sessions of Female Genital Rejuvenation in Dubai, depending on individual concerns, goals, and medical assessment by the treating doctor.'
    },
    {
      id: 7,
      question: 'When can I see results?',
      answer:
        'Many patients notice improved comfort and tone within a few weeks, with gradual enhancement over multiple Female Genital Rejuvenation sessions.'
    },
    {
      id: 8,
      question: 'Is there any downtime after treatment?',
      answer:
        'There is minimal to no downtime. Patients can resume normal routines the same day, following simple aftercare instructions provided by the medical team.'
    },
    {
      id: 9,
      question: 'Is this treatment suitable after childbirth?',
      answer:
        'Yes, Female Genital Rejuvenation in Dubai is commonly chosen by women after childbirth to support tissue tightening, comfort, and intimate wellness, following medical clearance.'
    },
    {
      id: 10,
      question: 'Are results permanent?',
      answer:
        'Results are long-lasting but not permanent. Natural aging continues, and maintenance sessions may be recommended to sustain the benefits of Female Genital Rejuvenation.'
    },
    {
      id: 11,
      question: 'Is the treatment confidential?',
      answer:
        'Absolutely. ramacarepolyclinic ensures complete privacy, discreet consultations, and confidential aftercare throughout your Female Genital Rejuvenation journey.'
    },
    {
      id: 12,
      question: 'Can this treatment improve dryness and discomfort?',
      answer:
        'Yes, Female Genital Rejuvenation stimulates tissue renewal, improving hydration, elasticity, and comfort for women experiencing intimate dryness or sensitivity.'
    },
    {
      id: 13,
      question: 'Are there any side effects?',
      answer:
        'Side effects are rare and mild, such as temporary warmth or slight redness, which usually resolve quickly after Female Genital Rejuvenation sessions.'
    },
    {
      id: 14,
      question: 'How do I prepare for the treatment?',
      answer:
        'Preparation is minimal. Your doctor will review medical history, perform an assessment, and provide simple guidelines before starting Female Genital Rejuvenation in Dubai.'
    },
    {
      id: 15,
      question: 'Why choose ramacarepolyclinic for this treatment?',
      answer:
        'ramacarepolyclinic offers doctor-led Female Genital Rejuvenation in Dubai, advanced technology, personalized care plans, and a respectful, patient-focused clinical environment.'
    }
  ],
        resources: [
         {
            id: 1,
            text: 'Spider Veins Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/spider-veins-laser-treatment'
          },
          {
            id: 2,
            text: 'Carbon Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/carbon-laser-dubai'
          },
          {
            id: 3,
            text: 'Fractional CO2 Laser',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/fractional-co2-laser-dubai'
          },
          {
            id: 4,
            text: 'Laser Rejuvenation',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/laser-rejuvenation-dubai'
          },
          {
            id: 5,
            text: 'Laser Bleaching',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/laser-bleaching-dubai'
          },
          {
            id: 6,
            text: 'Birthmarks Removal',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/birthmark-removal-dubai'
          },
          {
            id: 7,
            text: 'Female Genital Rejuvenation',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/female-genital-rejuvenation-dubai'
          },
          {
            id: 8,
            text: 'Scars Removal',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/scars-removal-dubai'
          },
          {
            id: 9,
            text: 'Mole Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mole-removal-dubai'
          },
            {
            id: 10,
            text: 'Tattoo Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/tattoo-removal-dubai'
          },
            {
            id: 11,
            text: 'Nail Fungus',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/nail-fungus-dubai'
          },
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
        subtitle: 'Verified testimonials from patients who achieved excellent laser treatment results',
       
        stats: [
          {
            id: 1,
            number: '4.9/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.9
          },
          {
            id: 2,
            number: '2,500+',
            label1: 'Laser Sessions',
            label2: 'Completed',
            target: 2500
          },
          {
            id: 3,
            number: '97%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 97
          },
          {
            id: 4,
            number: '95%',
            label1: 'Success Rate',
            label2: 'Hair Removal',
            target: 95
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment Options',
        insuranceTitle: 'Insurance & Reimbursement',
        paymentOptions: [
          'Cash, Credit/Debit Cards accepted',
          'Flexible payment plans available',
          '0% interest installments (conditions apply)'
        ],
        insuranceOptions: [
          'Accepted by select insurance providers',
          'Detailed invoices provided for claims',
          'Assistance with documentation'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Female Genital Rejuvenation in Dubai Today',
        description: 'Restore comfort, confidence, and intimate wellness with Female Genital Rejuvenation in Dubai at ramacarepolyclinic, where medical expertise meets compassionate women’s care.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '2,500+ Sessions',
            description: 'Completed'
          },
          {
            title: '4.9/5 Rating',
            description: 'Patient Reviews'
          }
        ]
      }
    },

    'aesthetic-dermatology-dubai-laser-treatment-mole-removal': {
      hero: {
        subtitle: 'Safe, Effective Solutions for Clearer, Healthier Skin',
        description: 'Moles can vary in size, color, and location, and while most are harmless, some may cause discomfort or cosmetic concern. At ramacarepolyclinic, we provide Mole Removal in Dubai using safe, medically supervised techniques to restore skin appearance and confidence naturally.',
        rating: '4.9/5 Rating (500+ Reviews)',
        stats: [
          {
            id: 1,
            number: '95%',
            label: 'Patient Satisfaction'
          },
          {
            id: 2,
            number: '6000+',
            label: 'Laser Sessions Performed'
          },
          {
            id: 3,
            number: '15+',
            label: 'Years of Experience'
          }
        ],
        ctaButtons: {
          primary: {
            text: ' Book Your Free Laser Consultation',
             icon: 'calendar',
                link: '#book-now'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 56 659 7878',
                icon: 'whatsapp'
          }
        },
        features: [
          'DHA-Licensed Multispecialty Polyclinic',
          '  Experienced Doctors & Certified Dermatology Team',
           ' Advanced, Clinically Approved Mole Removal Treatments',
        ],
        image: {
          src: '/images/mole-re.jpg',
          alt: 'Mole removal in Dubai performed by specialists using safe and precise techniques to improve skin appearance.'
        },
        medicalNotice: {
          text: 'Safety & Medical Disclaimer: Results vary depending on mole type, skin condition, and adherence to aftercare. All Mole Removal in Dubai treatments at ramacarepolyclinic follow DHA-approved safety and medical protocols.',
          show: true
        }
      },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Laser Treatment Specialists in Dubai',
        description: 'DHA-licensed dermatologists with extensive experience in advanced laser technology and aesthetic treatments.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Mole Removal in Dubai',
       problemIntro: {
  title: 'The Problem: Understanding the Root Causes of Skin Lesions and Moles',
  description: 'Concerns that lead people to seek mole removal in Dubai often go beyond appearance. Moles and pigmented skin lesions can be influenced by internal imbalances, environmental factors, and skin health conditions.'
},
solutionIntro: {
  title: 'Our Solution: Safe & Holistic Mole Removal in Dubai',
  description: 'Our approach to mole removal in Dubai focuses on safety, skin health, and long-term results. We combine medical evaluation with holistic care to address both visible moles and underlying skin balance.'
},
       leftCards: [
  {
    id: 1,
    title: 'What Is Mole Removal?',
    description:
      'Mole Removal in Dubai is a medical procedure designed to remove unwanted or potentially problematic moles. Methods include laser treatment, surgical excision, or radiofrequency removal, depending on mole size, type, and location.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description: 'Mole removal is suitable for individuals with:',
    listItems: [
      'Raised or dark moles',
      'Irritated or itchy moles',
      'Moles affecting appearance',
      'Changing or irregular moles',
      'Discomfort from friction or clothing'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description:
      'Treatment duration varies depending on mole size and technique. Most sessions take 20–45 minutes, with some larger moles requiring more than one visit.'
  }
],
     rootCauses: [
  {
    id: 1,
    title: 'Pitta Dosha Aggravation ',
    description: 'Excess internal heat may increase pigmentation, dark moles, redness, inflammation, and changes in mole appearance.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Vata Imbalance ',
    description: 'Can cause dryness, rough skin texture, uneven healing, and premature skin aging around moles.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 3,
    title: 'Kapha Imbalance ',
    description: 'Leads to raised, thickened, or slow-growing moles due to excess tissue buildup and sluggish skin metabolism.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 4,
    title: 'Ama Accumulation (Toxins) ',
    description: 'Digestive toxins can impair skin detoxification, leading to delayed healing and recurrent skin concerns after mole treatment.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 5,
    title: 'Stress & Hormonal Imbalance ',
    description: 'May trigger changes in skin pigmentation, enlargement of existing moles, or formation of new moles.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  }
],
     quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical or minor surgical' },
  { label: 'Anesthesia', value: 'Topical or local, depending on technique' },
  { label: 'Recovery Time', value: 'Minimal' },
  { label: 'Side Effects', value: 'Temporary redness or mild swelling' }
],
       approachCards: [
  {
    id: 1,
    title: 'Skin & Mole Assessment',
    description: 'Each mole is carefully examined to determine its type, depth, and suitability for treatment, ensuring safe and effective removal.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Targeted Mole Removal Techniques',
    description: 'Advanced and precise methods are used to remove unwanted moles while minimizing scarring and supporting natural skin healing.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Internal Detoxification Support',
    description: 'Herbal formulations help reduce toxin buildup and support faster skin recovery after mole removal.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Skin Healing & Rejuvenation Therapies',
    description: 'Natural topical applications and medicated oils promote smooth healing, reduce pigmentation, and improve overall skin texture.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Lifestyle & Skin Care Guidance',
    description: 'Personalized advice helps prevent recurrence, supports skin health, and maintains long-lasting results after mole removal in Dubai.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
     healingJourney: {
  title: 'Your Mole Removal Journey: Step by Step',
  description: null,
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Assessment',
      duration: null,
      description: null,
      keyActivities: [
        'Mole evaluation and type identification',
        'Skin and medical history review',
        'Personalized mole removal plan'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Treatment Preparation',
      duration: null,
      description: null,
      keyActivities: [
        'Pre-treatment skin cleansing',
        'Anesthesia application if needed',
        'Procedure explanation and expectations'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Active Treatment',
      duration: null,
      description: null,
      keyActivities: [
        'Laser, excision, or radiofrequency removal',
        'Careful protection of the surrounding skin',
        'Continuous medical monitoring'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Recovery & Follow-Up',
      duration: null,
      description: null,
      keyActivities: [
        'Post-procedure care guidance',
        'Scar management and healing monitoring',
        'Follow-up consultation for optimal results'
      ],
      side: 'left'
    }
  ]
},
      benefits: {
        title: 'Clinically-Observed Benefits',
        description: 'Evidence-based results from our advanced laser treatments.',
        comparisonTitle: 'Mole Removal vs. Home Remedies',
        comparisonDescription: 'Compare our advanced laser approach with conventional hair removal and skin treatment methods',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Mole Removal in Dubai',
          traditional: 'Home Remedies'
        },
        benefits: [
          {
            id: 1,
            title: 'Reduced mole visibility or complete removal',
            percentage: 90,
            description: null
          },
          {
            id: 2,
            title: 'Minimal scarring and smooth skin',
            percentage: 92,
            description: null
          },
          {
            id: 3,
            title: ' Improved aesthetic appearance',
            percentage: 88,
            description:null
          },
          {
            id: 4,
            title: ' Safe, doctor-supervised procedure',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: 'Boosted confidence and comfort',
            percentage: 94,
            description: null
          }
        ],
        comparisonData: [
  {
    feature: 'Safety',
    ayurvedic: 'Doctor-led and medically supervised',
    conventional: 'Unsafe, unpredictable'
  },
  {
    feature: 'Results',
    ayurvedic: 'Precise, long-lasting',
    conventional: 'Risk of infection or scarring'
  },
  {
    feature: 'Technology',
    ayurvedic: 'Advanced medical lasers or excision',
    conventional: 'Manual or natural methods'
  },
  {
    feature: 'Healing',
    ayurvedic: 'Monitored recovery',
    conventional: 'Poorly managed, risk of complications'
  }
        ]
      },
     pricing: {
  title: 'Transparent Pricing & Treatment Packages',
  description:
    'Customized mole removal in Dubai packages based on mole size, location, and your skin type. Each plan focuses on safe, effective, and minimally invasive treatment with clear outcomes.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For small, simple moles',
      duration: '1 session',
      features: [
        'Initial skin and mole assessment',
        'Doctor-supervised mole removal procedure',
        'Local anesthesia for pain-free treatment',
        'Post-procedure care guidance',
        'Follow-up check-up'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false,
      cta: '👉 Get Consultation'
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For moderate-sized or multiple moles',
      duration: '1–2 sessions',
      features: [
        'Comprehensive skin and mole evaluation',
        'Digital imaging for accurate mole mapping',
        'Precision removal using advanced techniques',
        'Minimal scarring approach',
        'Post-treatment care and monitoring',
        'Follow-up for complete healing'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true,
      cta: '👉 Get Consultation'
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'For large, complex, or multiple facial/body moles',
      duration: '2–3 sessions',
      features: [
        'All Advanced Package benefits',
        'Expert dermatological assessment and planning',
        'Laser-assisted or surgical mole removal for optimal results',
        'Scar management and skin regeneration care',
        'Quarterly skin reviews and long-term follow-up'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false,
      cta: '👉 Get Consultation'
    }
  ]
},
   faq: {
  title: 'Frequently Asked Questions – Mole Removal in Dubai',
  description: null,
  faqs: [
    {
      id: 1,
      question: 'What is mole removal?',
      answer:
        'Mole removal is a medical or cosmetic procedure used to safely eliminate unwanted or abnormal moles from the skin using laser, surgical, or advanced dermatology techniques.'
    },
    {
      id: 2,
      question: 'Is mole removal safe?',
      answer:
        'Mole removal is safe when performed by qualified dermatologists using approved techniques after proper skin and mole assessment to minimize risks and ensure healthy healing.'
    },
    {
      id: 3,
      question: 'Who is a good candidate for mole removal?',
      answer:
        'Individuals with cosmetic concerns, irritation, frequent bleeding, or changes in mole color, size, or shape may be suitable candidates after professional evaluation.'
    },
    {
      id: 4,
      question: 'Does mole removal hurt?',
      answer:
        'Mole removal is usually painless as local anesthesia or numbing methods are used, with only mild discomfort experienced during or after the procedure.'
    },
    {
      id: 5,
      question: 'How long does a mole removal procedure take?',
      answer:
        'Most mole removal procedures take between 15 and 30 minutes, depending on the mole’s size, depth, and removal technique used.'
    },
    {
      id: 6,
      question: 'Will mole removal leave a scar?',
      answer:
        'Scarring is minimal with modern mole removal methods, especially when aftercare instructions are followed properly, and treatment is done by experienced specialists.'
    },
    {
      id: 7,
      question: 'How many sessions are required for mole removal?',
      answer:
        'Most moles are removed in a single session, though larger or deeper moles may require additional treatment based on clinical evaluation.'
    },
    {
      id: 8,
      question: 'Is mole removal permanent?',
      answer:
        'Mole removal is generally permanent, but recurrence depends on mole type, removal method, and individual skin healing response.'
    },
    {
      id: 9,
      question: 'What is the recovery time after mole removal?',
      answer:
        'Recovery is usually quick, with most patients resuming normal activities within one to two days following proper wound care instructions.'
    },
    {
      id: 10,
      question: 'Are there any side effects of mole removal?',
      answer:
        'Temporary redness, swelling, or mild scabbing may occur but typically resolve quickly with proper aftercare and medical guidance.'
    },
    {
      id: 11,
      question: 'Can all types of moles be removed?',
      answer:
        'Most benign moles can be removed safely, but suspicious or abnormal moles require medical evaluation before deciding on the appropriate treatment approach.'
    },
    {
      id: 12,
      question: 'Is mole removal suitable for sensitive skin?',
      answer:
        'Yes, mole removal can be safely performed on sensitive skin using gentle techniques tailored to skin type and individual tolerance.'
    },
    {
      id: 13,
      question: 'What aftercare is needed following mole removal?',
      answer:
        'Aftercare includes keeping the area clean, avoiding sun exposure, applying prescribed ointments, and following specialist instructions for proper healing.'
    },
    {
      id: 14,
      question: 'Can mole removal be done for cosmetic reasons?',
      answer:
        'Yes, many people choose mole removal purely for cosmetic improvement to achieve clearer, smoother, and more even-toned skin.'
    },
    {
      id: 15,
      question: 'When should I consult a doctor about a mole?',
      answer:
        'You should consult a doctor if a mole changes in size, color, shape, bleeds, causes pain, or appears suddenly on the skin.'
    }
  ],
        resources: [
        {
            id: 1,
            text: 'Spider Veins Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/spider-veins-laser-treatment'
          },
          {
            id: 2,
            text: 'Carbon Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/carbon-laser-dubai'
          },
          {
            id: 3,
            text: 'Fractional CO2 Laser',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/fractional-co2-laser-dubai'
          },
          {
            id: 4,
            text: 'Laser Rejuvenation',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/laser-rejuvenation-dubai'
          },
          {
            id: 5,
            text: 'Laser Bleaching',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/laser-bleaching-dubai'
          },
          {
            id: 6,
            text: 'Birthmarks Removal',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/birthmark-removal-dubai'
          },
          {
            id: 7,
            text: 'Female Genital Rejuvenation',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/female-genital-rejuvenation-dubai'
          },
          {
            id: 8,
            text: 'Scars Removal',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/scars-removal-dubai'
          },
          {
            id: 9,
            text: 'Mole Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mole-removal-dubai'
          },
            {
            id: 10,
            text: 'Tattoo Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/tattoo-removal-dubai'
          },
            {
            id: 11,
            text: 'Nail Fungus',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/nail-fungus-dubai'
          },
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
        description: 'Verified testimonials from patients who achieved excellent laser treatment results',
       
        stats: [
          {
            id: 1,
            number: '4.9/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.9
          },
          {
            id: 2,
            number: '2,500+',
            label1: 'Laser Sessions',
            label2: 'Completed',
            target: 2500
          },
          {
            id: 3,
            number: '97%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 97
          },
          {
            id: 4,
            number: '95%',
            label1: 'Success Rate',
            label2: 'Hair Removal',
            target: 95
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment Options',
        insuranceTitle: 'Insurance & Reimbursement',
        paymentOptions: [
          'Cash, Credit/Debit Cards accepted',
          'Flexible payment plans available',
          '0% interest installments (conditions apply)'
        ],
        insuranceOptions: [
          'Accepted by select insurance providers',
          'Detailed invoices provided for claims',
          'Assistance with documentation'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Mole Removal in Dubai Today',
        description: 'Achieve clearer, healthier-looking skin with Mole Removal in Dubai at ramacarepolyclinic, where medical expertise meets patient-focused, safe, and natural skin care.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '2,500+ Sessions',
            description: 'Completed'
          },
          {
            title: '4.9/5 Rating',
            description: 'Patient Reviews'
          }
        ]
      }
    },

      'aesthetic-dermatology-dubai-laser-treatment-nail-fungus': {
      hero: {
        subtitle: 'Restore Healthy, Strong Nails with Expert Care',
        description: 'Nail fungus can cause thickened, discolored, brittle, or painful nails, affecting both appearance and confidence. At ramacarepolyclinic, we provide Nail Fungus Treatment in Dubai using safe, medically supervised solutions designed to eliminate infection and restore healthy nails.',
        rating: '4.9/5 Rating (500+ Reviews)',
        stats: [
          {
            id: 1,
            number: '95%',
            label: 'Patient Satisfaction'
          },
          {
            id: 2,
            number: '6000+',
            label: 'Laser Sessions Performed'
          },
          {
            id: 3,
            number: '15+',
            label: 'Years of Experience'
          }
        ],
        ctaButtons: {
          primary: {
            text: ' Book Your Free Laser Consultation',
             icon: 'calendar',
                link: '#book-now'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 56 659 7878',
                icon: 'whatsapp'
          }
        },
        features: [
          'DHA-Licensed Multispecialty Polyclinic',
          '   Experienced Doctors & Certified Dermatology Team',
           'Advanced, Clinically Approved Treatments',
        ],
        image: {
          src: '/images/nail-fungus.jpg',
          alt: 'Nail fungus treatment in Dubai provided by specialists to restore healthy nails and prevent infection recurrence.'
        },
        medicalNotice: {
          text: 'Safety & Medical Disclaimer: Results vary depending on nail condition, infection severity, and adherence to aftercare. All Nail Fungus Treatment in Dubai at ramacarepolyclinic follows DHA-approved medical protocols and safety guidelines.',
          show: true
        }
      },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Laser Treatment Specialists in Dubai',
        description: 'DHA-licensed dermatologists with extensive experience in advanced laser technology and aesthetic treatments.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Nail Fungus Treatment in Dubai',
       problemIntro: {
  title: 'The Problem: Understanding the Root Causes of Nail Fungus',
  description: 'Issues related to nail fungus in Dubai are common due to heat, humidity, closed footwear, and lifestyle factors. Nail fungal infections often start small but can worsen if the root cause is not addressed properly.'
},
solutionIntro: {
  title: 'Our Solution: Comprehensive Treatment for Nail Fungus in Dubai',
  description: 'Our holistic approach to treating nail fungus in Dubai focuses on eliminating the infection while strengthening nail health and immunity to prevent recurrence.'
},
      leftCards: [
  {
    id: 1,
    title: 'What Is Nail Fungus Treatment?',
    description:
      'Nail Fungus Treatment in Dubai is a medical procedure aimed at eliminating fungal infection from nails. Treatments may include laser therapy, topical medications, or oral antifungal solutions, depending on severity and nail type.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description: 'Nail Fungus Treatment is suitable for people with:',
    listItems: [
      'Thickened or brittle nails',
      'Discolored nails (yellow, white, brown)',
      'Pain or discomfort around the nail',
      'Nails lifting from the nail bed',
      'Persistent fungal infections'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description:
      'Treatment sessions typically last 20–45 minutes for laser or topical application. Multiple sessions are usually required depending on infection severity and nail growth rate.'
  }
],
     rootCauses: [
  {
    id: 1,
    title: 'Pitta Dosha Aggravation ',
    description: 'Excess internal heat creates an environment where fungal infections thrive, leading to nail discoloration, burning sensation, inflammation, and discomfort.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Vata Imbalance ',
    description: 'Causes dryness, brittle nails, cracking, and slow nail growth, making nails more vulnerable to fungal infection.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 3,
    title: 'Kapha Imbalance ',
    description: 'Results in thickened nails, moisture retention, nail bed debris, and slow healing, which can worsen fungal growth.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 4,
    title: 'Ama Accumulation (Toxins) ',
    description: 'Poor digestion and toxin buildup weaken immunity, allowing fungal infections to persist and recur.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 5,
    title: 'Stress & Immune Imbalance ',
    description: 'Chronic stress lowers immune response, increasing the risk of recurrent nail fungus in Dubai.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  }
],
     quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical, medical nail therapy' },
  { label: 'Anesthesia', value: 'Not required' },
  { label: 'Recovery Time', value: 'Minimal' },
  { label: 'Side Effects', value: 'Temporary redness or mild irritation' }
],
      approachCards: [
  {
    id: 1,
    title: 'Accurate Nail & Infection Assessment',
    description: 'Detailed examination of affected nails to identify the severity, spread, and underlying causes of the fungal infection.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Targeted Antifungal Therapies',
    description: 'Natural and medical-grade antifungal treatments are used to eliminate fungus safely and effectively.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Internal Detoxification & Immune Support',
    description: 'Herbal formulations help remove toxins, improve digestion, and boost immunity for faster and lasting recovery.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Nail Repair & Strengthening Care',
    description: 'Therapies and topical applications support healthy nail regrowth, reduce discoloration, and restore nail texture.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Lifestyle & Foot Care Guidance',
    description: 'Personalized advice on hygiene, footwear, moisture control, and daily habits to prevent reinfection after treatment.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
    healingJourney: {
  title: 'Your Nail Health Journey: Step by Step',
  description: null,
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Assessment',
      duration: null,
      description: null,
      keyActivities: [
        'Detailed nail examination and fungal testing',
        'Review of medical history and lifestyle factors',
        'Personalized treatment plan creation'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Treatment Preparation',
      duration: null,
      description: null,
      keyActivities: [
        'Nail cleaning and preparation',
        'Explanation of treatment method and aftercare',
        'Comfort-focused guidance'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Active Treatment',
      duration: null,
      description: null,
      keyActivities: [
        'Laser, topical, or oral antifungal application',
        'Targeted therapy for infected nails',
        'Continuous monitoring by medical staff'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Follow-Up & Maintenance',
      duration: null,
      description: null,
      keyActivities: [
        'Post-treatment care guidance',
        'Monitoring nail growth and infection clearance',
        'Optional maintenance sessions for long-term health'
      ],
      side: 'left'
    }
  ]
},
      benefits: {
        title: 'Clinically-Observed Benefits',
        description: 'Evidence-based results from our advanced laser treatments.',
        comparisonTitle: 'Nail Fungus Treatment vs. Home Remedies',
        comparisonDescription: 'Compare our advanced laser approach with conventional hair removal and skin treatment methods',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Nail Fungus Treatment in Dubai',
          traditional: 'Home Remedies'
        },
        benefits: [
          {
            id: 1,
            title: ' Eliminates fungal infection',
            percentage: 90,
            description: null
          },
          {
            id: 2,
            title: 'Restores nail thickness and strength',
            percentage: 92,
            description: null
          },
          {
            id: 3,
            title: 'Improves nail color and appearance',
            percentage: 88,
            description:null
          },
          {
            id: 4,
            title: 'Safe, doctor-supervised treatment',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: 'Enhances nail health and confidence',
            percentage: 94,
            description: null
          }
        ],
        comparisonData: [
 {
  feature: 'Safety',
  ayurvedic: 'Doctor-supervised, medical-grade',
  conventional: 'Unreliable, risk of irritation'
},
{
  feature: 'Effectiveness',
  ayurvedic: 'Clinically proven, long-lasting',
  conventional: 'Often temporary or ineffective'
},
{
  feature: 'Technology',
  ayurvedic: 'Laser, topical, or oral medications',
  conventional: 'Natural products or DIY treatments'
},
{
  feature: 'Recovery',
  ayurvedic: 'Monitored healing, gradual improvement',
  conventional: 'Poorly controlled, slow recovery'
}

        ]
      },
    pricing: {
  title: 'Transparent Pricing & Treatment Packages',
  description:
    'Customized packages for Nail Fungus Treatment in Dubai, based on infection severity, nail condition, and individual treatment goals.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For mild nail fungus infections',
      duration: '2–3 sessions over 1–2 months',
      features: [
        'Initial doctor consultation & nail assessment',
        'Fungal infection evaluation and diagnosis',
        '2–3 targeted Nail Fungus Treatment in Dubai sessions',
        'Basic post-treatment nail care guidance',
        'Progress monitoring'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For moderate or persistent nail fungus',
      duration: '4–6 sessions over 2–3 months',
      features: [
        'Detailed dermatology consultation',
        'Comprehensive nail and fungal analysis',
        '4–6 laser, topical, or oral antifungal treatment sessions',
        'Customized post-treatment care plan',
        'Lifestyle and hygiene guidance',
        'Regular progress tracking'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'For severe or long-standing nail fungus',
      duration: '6–10 sessions over 3–6 months',
      features: [
        'Comprehensive doctor-led evaluation',
        'Advanced laser or combined antifungal treatment sessions',
        'Intensive nail restoration and health plan',
        'Enhanced post-treatment care and follow-ups',
        'Long-term maintenance support'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
    faq: {
  title: 'Frequently Asked Questions – Nail Fungus Treatment in Dubai',
  description: null,
  faqs: [
    {
      id: 1,
      question: 'What is Nail Fungus Treatment in Dubai?',
      answer:
        'Nail Fungus Treatment in Dubai is a doctor-supervised procedure that eliminates fungal infection, restores nail health, and strengthens nails, improving appearance, comfort, and long-term overall nail and skin health.'
    },
    {
      id: 2,
      question: 'How does Nail Fungus affect nail health?',
      answer:
        'Fungal infections weaken nails, cause discoloration, brittleness, and thickening. Effective Nail Fungus Treatment in Dubai restores nail structure, prevents infection spread, and promotes healthy, strong, and aesthetically improved nails.'
    },
    {
      id: 3,
      question: 'Who should get Nail Fungus Treatment?',
      answer:
        'Anyone with discolored, brittle, thick, or painful nails should seek Nail Fungus Treatment in Dubai to restore nail health, prevent worsening infection, and maintain overall foot and hand hygiene.'
    },
    {
      id: 4,
      question: 'Is Nail Fungus Treatment safe?',
      answer:
        'Yes, when performed at ramacarepolyclinic, Nail Fungus Treatment in Dubai is safe, DHA-approved, and doctor-supervised, ensuring effective infection removal while protecting surrounding nail tissue and promoting healthy nail regeneration.'
    },
    {
      id: 5,
      question: 'How long does a treatment session take?',
      answer:
        'Most Nail Fungus Treatment in Dubai sessions last 20–45 minutes depending on nail severity. The process is quick, safe, and supports healthy nail regrowth under professional supervision.'
    },
    {
      id: 6,
      question: 'How many sessions are required?',
      answer:
        'Treatment depends on infection severity. Mild cases may need 2–3 sessions, while severe nail fungus may require 6–10 sessions for complete nail health restoration and fungus elimination.'
    },
    {
      id: 7,
      question: 'Can Nail Fungus Treatment improve nail appearance?',
      answer:
        'Yes, doctor-supervised Nail Fungus Treatment in Dubai gradually restores natural nail color, smoothness, thickness, and overall nail health while eliminating fungal infection and improving hand and foot aesthetics.'
    },
    {
      id: 8,
      question: 'Is there any pain or discomfort during treatment?',
      answer:
        'Most patients experience minimal discomfort. Nail Fungus Treatment in Dubai is gentle, with targeted laser or topical therapies designed to maintain nail health and comfort throughout the procedure.'
    },
    {
      id: 9,
      question: 'How soon can I see results?',
      answer:
        'Visible improvement in nail health usually occurs within a few weeks, with full recovery and stronger, healthier nails over multiple Nail Fungus Treatment in Dubai sessions.'
    },
    {
      id: 10,
      question: 'Are there side effects?',
      answer:
        'Side effects are rare and usually mild, such as temporary redness or sensitivity. Medical supervision ensures Nail Fungus Treatment in Dubai maintains safety and optimal nail health.'
    },
    {
      id: 11,
      question: 'Can this treatment prevent recurrence?',
      answer:
        'Yes, following the full Nail Fungus Treatment in Dubai plan and post-treatment nail care routine significantly reduces recurrence, supporting long-term nail health and hygiene.'
    },
    {
      id: 12,
      question: 'How do I prepare for the treatment?',
      answer:
        'Patients should clean nails, avoid polish, and follow medical advice. Proper preparation ensures effective Nail Fungus Treatment in Dubai and promotes nail health during and after the procedure.'
    },
    {
      id: 13,
      question: 'Can it treat both fingernails and toenails?',
      answer:
        'Yes, Nail Fungus Treatment in Dubai effectively treats both fingernails and toenails, restoring nail health, appearance, and strength regardless of the affected location.'
    },
    {
      id: 14,
      question: 'How is this better than home remedies?',
      answer:
        'Unlike home remedies, Nail Fungus Treatment in Dubai is clinically proven, doctor-supervised, and uses advanced technology to eliminate infection while restoring nail health safely and effectively.'
    },
    {
      id: 15,
      question: 'Why choose ramacarepolyclinic for Nail Fungus Treatment?',
      answer:
        'ramacarepolyclinic offers expert, DHA-approved, and personalized Nail Fungus Treatment in Dubai, focusing on safe infection removal, nail health restoration, and long-term prevention for stronger, healthier nails.'
    }
  ],
        resources: [
         {
            id: 1,
            text: 'Spider Veins Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/spider-veins-laser-treatment'
          },
          {
            id: 2,
            text: 'Carbon Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/carbon-laser-dubai'
          },
          {
            id: 3,
            text: 'Fractional CO2 Laser',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/fractional-co2-laser-dubai'
          },
          {
            id: 4,
            text: 'Laser Rejuvenation',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/laser-rejuvenation-dubai'
          },
          {
            id: 5,
            text: 'Laser Bleaching',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/laser-bleaching-dubai'
          },
          {
            id: 6,
            text: 'Birthmarks Removal',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/birthmark-removal-dubai'
          },
          {
            id: 7,
            text: 'Female Genital Rejuvenation',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/female-genital-rejuvenation-dubai'
          },
          {
            id: 8,
            text: 'Scars Removal',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/scars-removal-dubai'
          },
          {
            id: 9,
            text: 'Mole Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mole-removal-dubai'
          },
            {
            id: 10,
            text: 'Tattoo Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/tattoo-removal-dubai'
          },
            {
            id: 11,
            text: 'Nail Fungus',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/nail-fungus-dubai'
          },
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
        description: 'Verified testimonials from patients who achieved excellent laser treatment results',
       
        stats: [
          {
            id: 1,
            number: '4.9/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.9
          },
          {
            id: 2,
            number: '2,500+',
            label1: 'Laser Sessions',
            label2: 'Completed',
            target: 2500
          },
          {
            id: 3,
            number: '97%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 97
          },
          {
            id: 4,
            number: '95%',
            label1: 'Success Rate',
            label2: 'Hair Removal',
            target: 95
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment Options',
        insuranceTitle: 'Insurance & Reimbursement',
        paymentOptions: [
          'Cash, Credit/Debit Cards accepted',
          'Flexible payment plans available',
          '0% interest installments (conditions apply)'
        ],
        insuranceOptions: [
          'Accepted by select insurance providers',
          'Detailed invoices provided for claims',
          'Assistance with documentation'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Nail Fungus Treatment in Dubai Today',
        description: 'Restore strong, healthy, and beautiful nails with Nail Fungus Treatment in Dubai at ramacarepolyclinic, where medical expertise meets patient-focused care.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '2,500+ Sessions',
            description: 'Completed'
          },
          {
            title: '4.9/5 Rating',
            description: 'Patient Reviews'
          }
        ]
      }
    },
  
       'aesthetic-dermatology-dubai-laser-treatment-laser-rejuvenation': {
      hero: {
        subtitle: 'Restore Brighter, Smoother, Healthier-Looking Skin',
        description: 'Fine lines, uneven tone, pigmentation, and dull skin can make you look older than you feel. At ramacarepolyclinic, we offer Laser Rejuvenation in Dubai to refresh tired skin, improve texture, and enhance natural radiance—safely and effectively under medical supervision.',
        rating: '4.9/5 Rating (500+ Reviews)',
        stats: [
          {
            id: 1,
            number: '95%',
            label: 'Patient Satisfaction'
          },
          {
            id: 2,
            number: '6000+',
            label: 'Laser Sessions Performed'
          },
          {
            id: 3,
            number: '15+',
            label: 'Years of Experience'
          }
        ],
        ctaButtons: {
          primary: {
            text: ' Book Your Free Laser Consultation',
             icon: 'calendar',
                link: '#book-now'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 56 659 7878',
                icon: 'whatsapp'
          }
        },
        features: [
          'DHA-Licensed Multispecialty Polyclinic',
          ' Experienced Doctors & Certified Laser Specialists',
           'Safe, Clinically Approved Laser Technology',
        ],
        image: {
          src: '/images/rejuvenation.jpg',
          alt: 'Laser rejuvenation in Dubai performed by specialists to restore skin radiance, reduce fine lines, and improve overall skin texture.'
        },
        medicalNotice: {
          text: 'Safety & Medical Disclaimer: Results vary depending on nail condition, infection severity, and adherence to aftercare. All Nail Fungus Treatment in Dubai at ramacarepolyclinic follows DHA-approved medical protocols and safety guidelines.',
          show: true
        }
      },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Laser Treatment Specialists in Dubai',
        description: 'DHA-licensed dermatologists with extensive experience in advanced laser technology and aesthetic treatments.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Laser Rejuvenation in Dubai',
        problemIntro: {
          title: 'Why Skin Loses Its Glow Over Time',
          description: 'Aging, sun exposure, pollution, and reduced collagen production can cause uneven tone, texture changes, and loss of firmness. Topical products often cannot reach deeper skin layers to create lasting improvement.'
        },
        solutionIntro: {
          title: 'Our Solution – Laser Rejuvenation in Dubai',
          description: ' At Rama Care Polyclinic, we use advanced laser technology to stimulate skin repair naturally. Treatments target:'
        },
     leftCards: [
  {
    id: 1,
    title: 'What Is Laser Rejuvenation?',
    description:
      'Laser Rejuvenation in Dubai is a non-invasive, medical-grade skin treatment that stimulates collagen production, improves texture, reduces pigmentation, and softens fine lines. It refreshes tired skin for a youthful, natural glow.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description: 'Laser Rejuvenation is ideal for individuals experiencing:',
    listItems: [
      'Dull or uneven skin tone',
      'Fine lines and early wrinkles',
      'Mild sun damage or pigmentation',
      'Enlarged pores',
      'Rough or tired-looking skin'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description:
      'Each session lasts 30–45 minutes, depending on the treatment area. Visible improvement develops gradually over 3–6 weeks. Recommended sessions: 3–6 for optimal results.'
  }
],
      rootCauses: [
  {
    id: 1,
    title: 'Uneven Skin Tone',
    description: 'Laser energy improves clarity and balances pigmentation.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Fine Lines & Early Wrinkles',
    description: 'Stimulates collagen to soften lines and improve firmness.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 3,
    title: 'Dull Skin Texture',
    description: 'Promotes smoother, refreshed-looking skin.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 4,
    title: 'Sun Damage & Pigmentation',
    description: 'Reduces visible sun-related skin changes.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 5,
    title: 'Enlarged Pores',
    description: 'Refines skin texture for a more even appearance.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  }
],
   quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical laser treatment' },
  { label: 'Anesthesia', value: 'Not usually required' },
  { label: 'Downtime', value: 'Minimal to none' },
  { label: 'Results', value: 'Progressive and natural-looking' }
],
      approachCards: [
  {
    id: 1,
    title: 'Collagen Stimulation & Skin Renewal',
    description:
      'Advanced laser energy activates fibroblasts, promoting collagen and elastin production for firmer, tighter, and smoother skin.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Pigmentation & Tone Correction',
    description:
      'Laser light targets melanin and uneven pigmentation, reducing dark spots, sun damage, and post-acne marks.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Texture Improvement',
    description:
      'Laser treatments refine enlarged pores, smooth rough patches, and enhance overall skin clarity.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Minimal Downtime & Safe Procedure',
    description:
      'Doctor-supervised sessions ensure maximum safety, comfort, and gradual visible improvement with minimal disruption to daily life.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Lifestyle & Aftercare Guidance',
    description:
      'Post-treatment care advice and skin maintenance recommendations to prolong results and support overall skin health.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 6,
    title: 'Result',
    description:
      'Brighter, firmer, smoother, and youthful skin with enhanced tone, reduced wrinkles, and natural radiance through Laser Rejuvenation in Dubai.',
    hasLearnMore: false,
    expandedContent: null
  }
]

      },
   healingJourney: {
  title: 'Your Skin Rejuvenation Journey: Step by Step',
  description: 'A structured, doctor-guided approach to ensure safe and effective results with Laser Rejuvenation in Dubai.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Skin Assessment',
      duration: null,
      description: null,
      keyActivities: [
        'Detailed skin analysis',
        'Identification of concerns and goals',
        'Medical history review',
        'Personalized laser treatment plan'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Skin Preparation Phase',
      duration: null,
      description: null,
      keyActivities: [
        'Pre-treatment skincare guidance',
        'Sun protection advice',
        'Skin cleansing and preparation'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Active Laser Rejuvenation Treatment',
      duration: null,
      description: null,
      keyActivities: [
        'Controlled laser energy delivery',
        'Targeted treatment areas',
        'Cooling and calming skin care',
        'Continuous medical monitoring'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Recovery & Maintenance',
      duration: null,
      description: null,
      keyActivities: [
        'Post-treatment skincare routine',
        'Lifestyle and sun-care guidance',
        'Follow-up assessments',
        'Maintenance sessions, if needed'
      ],
      side: 'left'
    }
  ]
},
      benefits: {
        title: 'Clinically-Observed Benefits',
        description: 'Evidence-based results from our advanced laser treatments.',
        comparisonTitle: 'Laser Rejuvenation vs. Regular Facials',
        comparisonDescription: 'Compare our advanced laser approach with conventional hair removal and skin treatment methods',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Laser Rejuvenation',
          traditional: 'Regular Facials'
        },
        benefits: [
          {
            id: 1,
            title: 'Brighter and clearer skin',
            percentage: 90,
            description: null
          },
          {
            id: 2,
            title: 'Improved skin texture',
            percentage: 92,
            description: null
          },
          {
            id: 3,
            title: 'Softer fine lines',
            percentage: 88,
            description:null
          },
          {
            id: 4,
            title: ' More even skin tone',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: 'Refreshed, healthy glow',
            percentage: 94,
            description: null
          }
        ],
        comparisonData: [
{
  feature: 'Depth of Treatment',
  ayurvedic: 'Works on deeper skin layers',
  conventional: 'Surface-level care'
},
{
  feature: 'Collagen Stimulation',
  ayurvedic: 'Yes',
  conventional: 'No'
},
{
  feature: 'Results',
  ayurvedic: 'Long-term improvement',
  conventional: 'Short-term glow'
},
{
  feature: 'Technology',
  ayurvedic: 'Medical laser-based',
  conventional: 'Manual techniques'
},
{
  feature: 'Medical Supervision',
  ayurvedic: 'Yes',
  conventional: 'No'
}
        ]
      },
   pricing: {
  title: 'Transparent Pricing & Customized Packages',
  description:
    'Laser Rejuvenation at ramacare polyclinic is customized based on skin condition, treatment area, and number of sessions required. All treatments include medical supervision and aftercare support.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For mild skin dullness, uneven tone & early signs of aging',
      duration: '6 sessions over 3 months',
      features: [
        'Initial skin consultation and analysis',
        '6 Laser Rejuvenation treatment sessions',
        'Gentle laser resurfacing to improve tone and texture',
        'Customized skincare recommendations',
        'Home care and sun-protection guidance'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For pigmentation, fine lines & visible texture concerns',
      duration: '12 sessions over 4 months',
      features: [
        'Comprehensive skin evaluation and treatment planning',
        '12 Laser Rejuvenation sessions using advanced protocols',
        'Collagen-stimulating laser therapy',
        'Personalized skincare and lifestyle consultation',
        'Monthly skin progress monitoring'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete skin renewal & long-term rejuvenation program',
      duration: '24 sessions over 6 months',
      features: [
        'All Advanced Package benefits',
        'Intensive Laser Rejuvenation treatments for deeper skin renewal',
        'Specialized treatments targeting pigmentation, texture, and fine lines',
        'Stress and lifestyle impact management for skin health',
        'Quarterly skin health reviews',
        'Long-term skin maintenance support'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
   faq: {
  title: 'Frequently Asked Questions – Laser Rejuvenation in Dubai',
  description: 'Laser Rejuvenation in Dubai – What Patients Need to Know',
  faqs: [
    {
      id: 1,
      question: 'What is Laser Rejuvenation in Dubai?',
      answer: 'Laser Rejuvenation in Dubai is a non-surgical skin treatment that uses controlled laser energy to improve skin tone, texture, and firmness by stimulating natural collagen production.'
    },
    {
      id: 2,
      question: 'Is Laser Rejuvenation safe for the skin?',
      answer: 'Yes, Laser Rejuvenation is safe when performed by trained doctors using approved technology. At ramacarepolyclinic, treatments are doctor-supervised for maximum safety.'
    },
    {
      id: 3,
      question: 'Who is an ideal candidate for Laser Rejuvenation?',
      answer: 'Individuals with dull skin, fine lines, uneven tone, mild pigmentation, or early signs of aging are suitable candidates after a professional skin assessment.'
    },
    {
      id: 4,
      question: 'How many Laser Rejuvenation sessions are required?',
      answer: 'Most patients need 3–6 sessions, depending on skin condition and goals. Improvements appear gradually as collagen production increases over time.'
    },
    {
      id: 5,
      question: 'Is Laser Rejuvenation painful?',
      answer: 'Laser Rejuvenation is generally comfortable. Patients may feel mild warmth or tingling during treatment, but anesthesia is usually not required.'
    },
    {
      id: 6,
      question: 'What is the downtime after Laser Rejuvenation?',
      answer: 'Downtime is minimal. Some patients experience mild redness for a few hours, allowing a quick return to daily activities.'
    },
    {
      id: 7,
      question: 'Can Laser Rejuvenation reduce pigmentation?',
      answer: 'Yes, Laser Rejuvenation helps reduce mild pigmentation and sun damage by breaking down pigment and improving overall skin clarity.'
    },
    {
      id: 8,
      question: 'Does Laser Rejuvenation help with fine lines?',
      answer: 'Laser Rejuvenation stimulates collagen production, which helps soften fine lines and improve skin firmness over several weeks.'
    },
    {
      id: 9,
      question: 'Is Laser Rejuvenation suitable for all skin types?',
      answer: 'Laser Rejuvenation suits many skin types. A consultation is important to select the right laser settings, especially for sensitive or darker skin tones.'
    },
    {
      id: 10,
      question: 'How long does one Laser Rejuvenation session take?',
      answer: 'Each Laser Rejuvenation session usually lasts between 30 and 45 minutes, depending on the treatment area and skin condition.'
    },
    {
      id: 11,
      question: 'When will I see results after Laser Rejuvenation?',
      answer: 'Initial skin freshness is often noticeable quickly, while improvements in texture and tone continue to develop over several weeks.'
    },
    {
      id: 12,
      question: 'Can Laser Rejuvenation be combined with other treatments?',
      answer: 'Yes, Laser Rejuvenation can be combined with other aesthetic treatments if advised by your doctor to enhance overall skin results.'
    },
    {
      id: 13,
      question: 'What should I avoid after Laser Rejuvenation?',
      answer: 'Avoid direct sun exposure, harsh skincare products, and heat treatments. Use sunscreen and follow aftercare advice for best results.'
    },
    {
      id: 14,
      question: 'Is Laser Rejuvenation better than regular facials?',
      answer: 'Laser Rejuvenation works deeper than regular facials, providing longer-lasting improvements rather than short-term surface-level glow.'
    },
    {
      id: 15,
      question: 'Why choose ramacarepolyclinic for Laser Rejuvenation in Dubai?',
      answer: 'ramacarepolyclinic offers doctor-led Laser Rejuvenation in Dubai using advanced technology, personalized plans, and strict safety protocols.'
    }
  ],
        resources: [
         {
            id: 1,
            text: 'Spider Veins Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/spider-veins-laser-treatment'
          },
          {
            id: 2,
            text: 'Carbon Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/carbon-laser-dubai'
          },
          {
            id: 3,
            text: 'Fractional CO2 Laser',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/fractional-co2-laser-dubai'
          },
          {
            id: 4,
            text: 'Laser Rejuvenation',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/laser-rejuvenation-dubai'
          },
          {
            id: 5,
            text: 'Laser Bleaching',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/laser-bleaching-dubai'
          },
          {
            id: 6,
            text: 'Birthmarks Removal',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/birthmark-removal-dubai'
          },
          {
            id: 7,
            text: 'Female Genital Rejuvenation',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/female-genital-rejuvenation-dubai'
          },
          {
            id: 8,
            text: 'Scars Removal',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/scars-removal-dubai'
          },
          {
            id: 9,
            text: 'Mole Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mole-removal-dubai'
          },
            {
            id: 10,
            text: 'Tattoo Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/tattoo-removal-dubai'
          },
            {
            id: 11,
            text: 'Nail Fungus',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/nail-fungus-dubai'
          },
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
       subtitle: 'Verified testimonials from patients who achieved excellent laser treatment results',
        stats: [
          {
            id: 1,
            number: '4.9/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.9
          },
          {
            id: 2,
            number: '2,500+',
            label1: 'Laser Sessions',
            label2: 'Completed',
            target: 2500
          },
          {
            id: 3,
            number: '97%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 97
          },
          {
            id: 4,
            number: '95%',
            label1: 'Success Rate',
            label2: 'Hair Removal',
            target: 95
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment Options',
        insuranceTitle: 'Insurance & Reimbursement',
        paymentOptions: [
          'Cash, Credit/Debit Cards accepted',
          'Flexible payment plans available',
          '0% interest installments (conditions apply)'
        ],
        insuranceOptions: [
          'Accepted by select insurance providers',
          'Detailed invoices provided for claims',
          'Assistance with documentation'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Laser Rejuvenation in Dubai Today',
        description: 'Reveal brighter, smoother, and healthier-looking skin with Laser Rejuvenation in Dubai at ramacare polyclinic, where medical expertise meets advanced aesthetic care.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '2,500+ Sessions',
            description: 'Completed'
          },
          {
            title: '4.9/5 Rating',
            description: 'Patient Reviews'
          }
        ]
      }
    },

       'aesthetic-dermatology-dubai-laser-treatment-laser-bleaching': {
      hero: {
        subtitle: 'Brighter, Even-Toned Skin with Advanced Medical Care',
        description: 'Uneven skin tone, pigmentation, and dark patches can affect how confident you feel in your skin. At ramacare polyclinic, we offer Laser Bleaching for Skin in Dubai to gently reduce pigmentation, brighten the skin, and improve overall tone—safely and effectively under medical supervision.',
        rating: '4.9/5 Rating (500+ Reviews)',
        stats: [
          {
            id: 1,
            number: '95%',
            label: 'Patient Satisfaction'
          },
          {
            id: 2,
            number: '6000+',
            label: 'Laser Sessions Performed'
          },
          {
            id: 3,
            number: '15+',
            label: 'Years of Experience'
          }
        ],
        ctaButtons: {
          primary: {
            text: '  Book Your Laser Bleaching Consultation',
             icon: 'calendar',
                link: '#book-now'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 56 659 7878',
                icon: 'whatsapp'
          }
        },
        features: [
          ' DHA-Licensed Multispecialty Polyclinic',
          ' Experienced Doctors & Certified Laser Specialists',
           'Safe, Clinically Approved Laser Technology',
        ],
         image: {
          src: '/images/laser-bleach.jpg',
          alt: 'Laser bleaching in Dubai performed by specialists to reduce pigmentation and achieve a brighter, even skin tone.'
        },
        medicalNotice: {
          text: 'Safety & Medical Disclaimer:Results may vary based on skin type, pigmentation depth, and aftercare compliance. All Laser Bleaching for Skin in Dubai treatments at ramacarepolyclinic follow DHA-approved medical and safety protocols.',
          show: true
        }
      },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Laser Treatment Specialists in Dubai',
        description: 'DHA-licensed dermatologists with extensive experience in advanced laser technology and aesthetic treatments.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Laser Bleaching for Skin in Dubai',
       problemIntro: {
  title: 'The Problem: Causes of Skin Darkening and Uneven Tone',
  description: 'Many people seek laser bleaching in Dubai due to skin darkening caused by lifestyle, environmental exposure, and internal skin imbalances. Hyperpigmentation can affect intimate areas, underarms, knees, elbows, or facial skin, impacting confidence and comfort.'
},
solutionIntro: {
  title: 'Our Solution: Advanced & Safe Laser Bleaching in Dubai',
  description: 'Our approach to laser bleaching in Dubai focuses on safe pigment reduction, even skin tone, and long-term skin health. Treatments are performed using medically approved technology under professional supervision.'
},
     leftCards: [
  {
    id: 1,
    title: 'What Is Laser Bleaching for Skin?',
    description:
      'Laser Bleaching for Skin in Dubai is a non-invasive laser procedure that targets excess melanin responsible for dark pigmentation. Controlled laser energy breaks down pigment safely, helping restore a more even and brighter skin tone.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description: 'Laser Bleaching for Skin is suitable for individuals with:',
    listItems: [
      'Uneven skin tone',
      'Dark patches or tanning',
      'Pigmentation on the face or body',
      'Underarm or intimate area darkness',
      'Sun-induced skin discoloration'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description:
      'Each session typically lasts 20–40 minutes, depending on the area treated. Visible improvement appears gradually over multiple sessions as pigmentation reduces safely.'
  }
],
    rootCauses: [
  {
    id: 1,
    title: 'Excess Melanin Production ',
    description: 'Overproduction of melanin leads to dark patches, uneven tone, and persistent pigmentation.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Friction & Hair Removal Methods ',
    description: 'Frequent shaving, waxing, or tight clothing can cause irritation and gradual darkening of sensitive skin areas.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 3,
    title: 'Hormonal Changes ',
    description: 'Hormonal fluctuations during puberty, pregnancy, or medical conditions can trigger pigmentation issues.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 4,
    title: 'Sun & Heat Exposure ',
    description: 'Dubai’s strong sun and heat can worsen pigmentation if skin is not adequately protected.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 5,
    title: 'Delayed Skin Renewal ',
    description: 'Slow cell turnover prevents pigmented skin from shedding naturally, making discoloration long-lasting.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  }
],
   quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical laser treatment' },
  { label: 'Anesthesia', value: 'Not required' },
  { label: 'Downtime', value: 'Minimal to none' },
  { label: 'Results', value: 'Gradual and natural-looking' }
],
       approachCards: [
  {
    id: 1,
    title: 'Skin & Pigmentation Assessment',
    description: 'A detailed evaluation helps identify skin type, pigmentation depth, and suitability for laser bleaching.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Targeted Laser Bleaching Treatment',
    description: 'Advanced laser technology safely breaks down excess melanin without damaging surrounding skin.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Skin Brightening & Rejuvenation Care',
    description: 'Post-laser therapies support faster healing, improve texture, and enhance natural skin brightness.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Personalized Aftercare Guidance',
    description: 'Customized skincare and sun protection advice help maintain results and prevent re-pigmentation.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Long-Term Skin Maintenance Support',
    description: 'Ongoing follow-up ensures sustained improvement after laser bleaching in Dubai.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },

  healingJourney: {
  title: 'Your Skin Brightening Journey: Step by Step',
  description: 'A structured, doctor-guided approach to ensure safe and effective Laser Bleaching for Skin in Dubai.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Skin Assessment',
      duration: null,
      description: null,
      keyActivities: [
        'Detailed skin evaluation',
        'Pigmentation and tone analysis',
        'Medical history review',
        'Personalized laser plan creation'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Skin Preparation Phase',
      duration: null,
      description: null,
      keyActivities: [
        'Pre-treatment skincare advice',
        'Sun protection guidance',
        'Skin cleansing and preparation'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Active Laser Bleaching Treatment',
      duration: null,
      description: null,
      keyActivities: [
        'Controlled laser energy delivery',
        'Targeted pigmentation treatment',
        'Skin cooling and calming care',
        'Continuous medical monitoring'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Recovery & Maintenance',
      duration: null,
      description: null,
      keyActivities: [
        'Post-treatment skincare routine',
        'Sun-care and lifestyle guidance',
        'Follow-up reviews',
        'Maintenance sessions, if advised'
      ],
      side: 'left'
    },
    {
      id: 5,
      number: '05',
      title: 'Result',
      duration: null,
      description: 'Gradual skin lightening, improved tone uniformity, reduced pigmentation, and healthier-looking skin.',
      keyActivities: [],
      side: 'right'
    }
  ]
},
      benefits: {
        title: 'Clinically-Observed Benefits',
        description: 'Evidence-based results from our advanced laser treatments.',
        comparisonTitle: 'Laser Bleaching for Skin vs. Topical Treatments',
        comparisonDescription: 'Compare our advanced laser approach with conventional hair removal and skin treatment methods',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Laser Bleaching for Skin',
          traditional: 'Creams & Home Remedies'
        },
        benefits: [
          {
            id: 1,
            title: ' Brighter, more even skin tone',
            percentage: 90,
            description: null
          },
          {
            id: 2,
            title: 'Reduced pigmentation and tanning',
            percentage: 92,
            description: null
          },
          {
            id: 3,
            title: ' Improved skin clarity',
            percentage: 88,
            description:null
          },
          {
            id: 4,
            title: ' Minimal downtime',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: ' Boosted skin confidence',
            percentage: 94,
            description: null
          }
        ],
        comparisonData: [
 {
    feature: 'Depth of Treatment',
    ayurvedic: 'Targets pigment at deeper levels',
    conventional: 'Surface-level only'
  },
  {
    feature: 'Results',
    ayurvedic: 'Visible and long-lasting',
    conventional: 'Often temporary'
  },
  {
    feature: 'Safety',
    ayurvedic: 'Doctor-supervised',
    conventional: 'Self-applied'
  },
  {
    feature: 'Technology',
    ayurvedic: 'Medical laser-based',
    conventional: 'Chemical formulations'
  },
  {
    feature: 'Downtime',
    ayurvedic: 'Minimal',
    conventional: 'Varies'
  }
        ]
      },
    pricing: {
  title: 'Transparent Pricing & Customized Packages',
  description:
    'Laser Bleaching for Skin at ramacarepolyclinic is customized based on treatment area, pigmentation severity, and the number of sessions required. All plans include medical supervision and aftercare support.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For mild nail fungus infections',
      duration: '2–3 sessions over 1–2 months',
      features: [
        'Initial doctor consultation & nail assessment',
        'Fungal infection evaluation and diagnosis',
        '2–3 targeted Nail Fungus Treatment in Dubai sessions',
        'Basic post-treatment nail care guidance',
        'Progress monitoring'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For moderate or persistent nail fungus',
      duration: '4–6 sessions over 2–3 months',
      features: [
        'Detailed dermatology consultation',
        'Comprehensive nail and fungal analysis',
        '4–6 laser, topical, or oral antifungal treatment sessions',
        'Customized post-treatment care plan',
        'Lifestyle and hygiene guidance',
        'Regular progress tracking'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'For severe or long-standing nail fungus',
      duration: '6–10 sessions over 3–6 months',
      features: [
        'Comprehensive doctor-led evaluation',
        'Advanced laser or combined antifungal treatment sessions',
        'Intensive nail restoration and health plan',
        'Enhanced post-treatment care and follow-ups',
        'Long-term maintenance support'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
  faq: {
  title: 'Frequently Asked Questions – Laser Bleaching for Skin in Dubai',
  description: 'Laser Bleaching for Skin in Dubai – Common Patient Questions',
  faqs: [
    {
      id: 1,
      question: 'What is Laser Bleaching for Skin in Dubai?',
      answer: 'Laser Bleaching for Skin in Dubai is a non-invasive laser treatment that reduces excess pigmentation and dark patches by safely targeting melanin to improve overall skin tone.'
    },
    {
      id: 2,
      question: 'Is Laser Bleaching for Skin safe?',
      answer: 'Yes, Laser Bleaching is safe when performed under medical supervision using approved laser technology. At ramacarepolyclinic, treatments follow strict DHA safety protocols.'
    },
    {
      id: 3,
      question: 'Who is a good candidate for Laser Bleaching?',
      answer: 'People with uneven skin tone, tanning, pigmentation, or darkened areas such as underarms or intimate zones may benefit after a proper skin assessment.'
    },
    {
      id: 4,
      question: 'How many Laser Bleaching sessions are required?',
      answer: 'Most patients require 3–6 sessions, depending on pigmentation depth, treatment area, and individual skin response, for visible and lasting improvement.'
    },
    {
      id: 5,
      question: 'Is Laser Bleaching painful?',
      answer: 'Laser Bleaching is generally comfortable. Patients may feel mild warmth or tingling, but the procedure does not usually require anesthesia.'
    },
    {
      id: 6,
      question: 'What is the downtime after Laser Bleaching for Skin?',
      answer: 'There is minimal to no downtime. Mild redness may occur temporarily, allowing patients to resume daily activities quickly.'
    },
    {
      id: 7,
      question: 'Can Laser Bleaching remove pigmentation completely?',
      answer: 'Laser Bleaching significantly reduces pigmentation, but results depend on skin type, cause of pigmentation, and adherence to aftercare advice.'
    },
    {
      id: 8,
      question: 'Is Laser Bleaching suitable for sensitive skin?',
      answer: 'Yes, with proper evaluation. Doctors adjust laser settings based on skin sensitivity to ensure safe and effective treatment.'
    },
    {
      id: 9,
      question: 'Can Laser Bleaching be done on private body areas?',
      answer: 'Yes, Laser Bleaching can safely treat underarms, inner thighs, knees, elbows, and intimate areas under professional medical care.'
    },
    {
      id: 10,
      question: 'How long does one Laser Bleaching session take?',
      answer: 'Each session typically lasts between 20 and 40 minutes, depending on the treatment area and pigmentation severity.'
    },
    {
      id: 11,
      question: 'When will I see results after Laser Bleaching?',
      answer: 'Gradual improvement is seen over weeks. Skin tone becomes brighter and more even as pigmentation reduces with each session.'
    },
    {
      id: 12,
      question: 'What should I avoid after Laser Bleaching treatment?',
      answer: 'Avoid sun exposure, friction, harsh products, and heat treatments. Use sunscreen and follow doctor-recommended skincare instructions.'
    },
    {
      id: 13,
      question: 'Is Laser Bleaching better than creams?',
      answer: 'Yes, Laser Bleaching works deeper than topical creams, offering more effective and longer-lasting results for pigmentation concerns.'
    },
    {
      id: 14,
      question: 'Can Laser Bleaching be combined with other treatments?',
      answer: 'Laser Bleaching may be combined with other skin treatments if advised by your doctor for enhanced overall skin results.'
    },
    {
      id: 15,
      question: 'Why choose ramacarepolyclinic for Laser Bleaching for Skin in Dubai?',
      answer: 'ramacarepolyclinic offers doctor-led Laser Bleaching for Skin in Dubai with advanced technology, personalized plans, and a strong focus on safety.'
    }
  ],
        resources: [
         {
            id: 1,
            text: 'Spider Veins Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/spider-veins-laser-treatment'
          },
          {
            id: 2,
            text: 'Carbon Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/carbon-laser-dubai'
          },
          {
            id: 3,
            text: 'Fractional CO2 Laser',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/fractional-co2-laser-dubai'
          },
          {
            id: 4,
            text: 'Laser Rejuvenation',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/laser-rejuvenation-dubai'
          },
          {
            id: 5,
            text: 'Laser Bleaching',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/laser-bleaching-dubai'
          },
          {
            id: 6,
            text: 'Birthmarks Removal',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/birthmark-removal-dubai'
          },
          {
            id: 7,
            text: 'Female Genital Rejuvenation',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/female-genital-rejuvenation-dubai'
          },
          {
            id: 8,
            text: 'Scars Removal',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/scars-removal-dubai'
          },
          {
            id: 9,
            text: 'Mole Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mole-removal-dubai'
          },
            {
            id: 10,
            text: 'Tattoo Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/tattoo-removal-dubai'
          },
            {
            id: 11,
            text: 'Nail Fungus',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/nail-fungus-dubai'
          },
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
        description: 'Verified testimonials from patients who achieved excellent laser treatment results',
        stats: [
          {
            id: 1,
            number: '4.9/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.9
          },
          {
            id: 2,
            number: '2,500+',
            label1: 'Laser Sessions',
            label2: 'Completed',
            target: 2500
          },
          {
            id: 3,
            number: '97%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 97
          },
          {
            id: 4,
            number: '95%',
            label1: 'Success Rate',
            label2: 'Hair Removal',
            target: 95
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment Options',
        insuranceTitle: 'Insurance & Reimbursement',
        paymentOptions: [
          'Cash, Credit/Debit Cards accepted',
          'Flexible payment plans available',
          '0% interest installments (conditions apply)'
        ],
        insuranceOptions: [
          'Accepted by select insurance providers',
          'Detailed invoices provided for claims',
          'Assistance with documentation'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Laser Bleaching for Skin in Dubai Today',
        description: 'Achieve brighter, more even-toned skin with Laser Bleaching for Skin in Dubai at ramacarepolyclinic, where medical expertise meets advanced aesthetic care.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '2,500+ Sessions',
            description: 'Completed'
          },
          {
            title: '4.9/5 Rating',
            description: 'Patient Reviews'
          }
        ]
      }
    },

      'aesthetic-dermatology-dubai-laser-treatment-birthmark-removal': {
      hero: {
        subtitle: 'Safe, Effective Solutions for Clearer, Even-Toned Skin',
        description: 'Birthmarks can vary in size, color, and location. While many are harmless, some people choose removal for cosmetic reasons or due to irritation and discomfort. At ramacarepolyclinic, we offer Birthmark Removal in Dubai using medically approved techniques tailored to your skin type and birthmark characteristics.',
        rating: '4.9/5 Rating (500+ Reviews)',
        stats: [
          {
            id: 1,
            number: '95%',
            label: 'Patient Satisfaction'
          },
          {
            id: 2,
            number: '6000+',
            label: 'Laser Sessions Performed'
          },
          {
            id: 3,
            number: '15+',
            label: 'Years of Experience'
          }
        ],
        ctaButtons: {
          primary: {
            text: ' Book Your Birthmark Removal Consultation',
             icon: 'calendar',
                link: '#book-now'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 56 659 7878',
                icon: 'whatsapp'
          }
        },
        features: [
          ' DHA-Licensed Multispecialty Polyclinic',
          ' Experienced Doctors & Certified Laser Specialists',
           ' Advanced, Clinically Approved Treatment Options',
        ],
         image: {
          src: '/images/birthmark1.jpg',
          alt: 'Birthmark removal in Dubai performed using advanced laser treatment by specialists to reduce pigmentation and improve skin appearance safely.'
        },
        medicalNotice: {
          text: 'Safety & Medical Disclaimer:Results vary depending on the type, depth, and skin response of the birthmark. All Birthmark Removal in Dubai treatments at ramacarepolyclinic follow DHA-approved medical and safety protocols.',
          show: true
        }
      },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Laser Treatment Specialists in Dubai',
        description: 'DHA-licensed dermatologists with extensive experience in advanced laser technology and aesthetic treatments.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Birthmark Removal in Dubai',
        problemIntro: {
  title: 'The Problem: Understanding Birthmarks and Why Treatment May Be Needed',
  description: 'Birthmarks are common skin markings present from birth or developing shortly afterward. While many are harmless, some people seek birthmark removal for cosmetic reasons, skin comfort, or changes in color, size, or texture over time.'
},
solutionIntro: {
  title: 'Our Solution: Safe & Effective Birthmark Removal Approach',
  description: 'Our birthmark removal treatments focus on safety, precision, and skin health. Each plan is personalized to the type, depth, and location of the birthmark to ensure the best possible outcome.'
},
    leftCards: [
  {
    id: 1,
    title: 'What Is Birthmark Removal?',
    description:
      'Birthmark Removal in Dubai involves medical procedures designed to reduce or remove visible birthmarks from the skin. Depending on the type, size, and depth, treatments may include laser therapy or other dermatological methods.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description: 'Birthmark removal may be suitable for individuals with:',
    listItems: [
      'Pigmented birthmarks (brown or dark patches)',
      'Vascular birthmarks (red or pink marks)',
      'Raised or textured birthmarks',
      'Birthmarks causing irritation or cosmetic concern'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description:
      'Treatment duration varies depending on the birthmark type and size. Sessions usually last 20–45 minutes, with multiple sessions sometimes required for gradual improvement.'
  }
],
  rootCauses: [
  {
    id: 1,
    title: 'Pigmentation Imbalance ',
    description: 'Excess melanin or abnormal blood vessel formation can cause dark, red, or unevenly colored birthmarks that become more noticeable with age.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Skin Tissue Imbalance ',
    description: 'Certain birthmarks involve thickened or raised skin, leading to uneven texture and cosmetic concern.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 3,
    title: 'Circulation & Healing Issues ',
    description: 'Poor blood circulation or slow skin regeneration can affect how birthmarks respond to natural fading or treatment.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 4,
    title: 'Hormonal Changes ',
    description: 'Hormonal shifts during growth, puberty, or pregnancy may cause birthmarks to darken or enlarge.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 5,
    title: 'Sun Exposure & Environmental Factors ',
    description: 'Prolonged sun exposure can intensify pigmentation and make birthmarks more prominent over time.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  }
],
  quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical dermatological procedure' },
  { label: 'Anesthesia', value: 'Usually not required' },
  { label: 'Downtime', value: 'Minimal to mild' },
  { label: 'Results', value: 'Gradual and long-term' }
],
      approachCards: [
  {
    id: 1,
    title: 'Detailed Skin & Birthmark Assessment',
    description: 'Every birthmark is carefully examined to determine its nature and suitability for treatment, ensuring a safe and informed approach.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Targeted Birthmark Removal Techniques',
    description: 'Advanced and minimally invasive methods are used to reduce or remove birthmarks while minimizing scarring and skin damage.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Skin Healing & Regeneration Support',
    description: 'Post-treatment care promotes healthy skin renewal, improves texture, and reduces pigmentation irregularities.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Personalized Aftercare & Skin Protection',
    description: 'Guidance on sun protection, skincare, and lifestyle habits helps maintain results and prevent discoloration.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Long-Term Monitoring & Support',
    description: 'Follow-up care ensures proper healing and long-lasting results after birthmark removal.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },

  healingJourney: {
  title: 'Your Birthmark Removal Journey: Step by Step',
  description: 'A structured, doctor-guided approach to ensure safe and effective Birthmark Removal in Dubai.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Skin Assessment',
      duration: null,
      description: null,
      keyActivities: [
        'Birthmark evaluation',
        'Skin type and depth analysis',
        'Medical history review',
        'Personalized treatment planning'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Treatment Preparation',
      duration: null,
      description: null,
      keyActivities: [
        'Skin cleansing',
        'Pre-treatment guidance',
        'Patch testing if required'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Active Birthmark Removal Treatment',
      duration: null,
      description: null,
      keyActivities: [
        'Controlled laser or medical technique',
        'Targeted treatment area',
        'Skin cooling and calming care',
        'Continuous medical monitoring'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Recovery & Follow-Up Care',
      duration: null,
      description: null,
      keyActivities: [
        'Post-treatment skincare advice',
        'Healing monitoring',
        'Follow-up sessions if needed'
      ],
      side: 'left'
    },
    {
      id: 5,
      number: '05',
      title: 'Result',
      duration: null,
      description:
        'Gradual fading or removal of the birthmark with improved skin appearance and confidence.',
      keyActivities: [],
      side: 'right'
    }
  ]
},
      benefits: {
        title: 'Clinically-Observed Benefits',
        description: 'Evidence-based results from our advanced laser treatments.',
        comparisonTitle: 'Birthmark Removal vs. Cosmetic Cover-Ups',
        comparisonDescription: 'Compare our advanced laser approach with conventional birthmark removal and skin treatment methods',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Birthmark Removal',
          traditional: 'Makeup & Concealers'
        },
        benefits: [
          {
            id: 1,
            title: ' Reduced birthmark visibility',
            percentage: 90,
            description: null
          },
          {
            id: 2,
            title: ' Improved skin tone and texture',
            percentage: 92,
            description: null
          },
          {
            id: 3,
            title: 'Minimal downtime',
            percentage: 88,
            description:null
          },
          {
            id: 4,
            title: 'Safe, doctor-supervised care',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: ' Enhanced self-confidence',
            percentage: 94,
            description: null
          }
        ],
        comparisonData: [
  {
    feature: 'Effectiveness',
    ayurvedic: 'Treats the source',
    conventional: 'Temporary coverage'
  },
  {
    feature: 'Results',
    ayurvedic: 'Long-term improvement',
    conventional: 'Short-term'
  },
  {
    feature: 'Medical Supervision',
    ayurvedic: 'Yes',
    conventional: 'No'
  },
  {
    feature: 'Skin Health',
    ayurvedic: 'Preserved',
    conventional: 'May clog pores'
  },
  {
    feature: 'Confidence',
    ayurvedic: 'Lasting',
    conventional: 'Temporary'
  }
        ]
      },
   pricing: {
  title: 'Transparent Pricing & Treatment Packages',
  description:
    'Customized packages for Birthmark Removal in Dubai, based on birthmark type, size, depth, and your individual treatment goals',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For small or superficial birthmarks',
      duration: '2–3 sessions over 1–2 months',
      features: [
        'Initial doctor consultation & skin assessment',
        'Birthmark type and depth evaluation',
        'Targeted Birthmark Removal in Dubai treatment sessions',
        'Basic post-treatment skincare guidance',
        'Healing and progress monitoring'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For medium-sized or pigmented birthmarks',
      duration: '4–6 sessions over 2–3 months',
      features: [
        'Detailed dermatology consultation',
        'Advanced skin and pigment analysis',
        'Multiple Birthmark Removal in Dubai, laser or medical treatment sessions',
        'Customized post-treatment skincare plan',
        'Sun-care and lifestyle guidance',
        'Regular progress tracking'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'For large, deep, or complex birthmarks',
      duration: '6–10 sessions over 3–6 months',
      features: [
        'Comprehensive doctor-led evaluation',
        'Advanced laser or combined Birthmark Removal in Dubai approach',
        'Multiple precision treatment sessions',
        'Enhanced skin healing and recovery care',
        'Personalized long-term maintenance plan',
        'Dedicated follow-up and dermatology support'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
  faq: {
  title: 'Frequently Asked Questions (FAQs) – Birthmark Removal in Dubai',
  description: 'Birthmark Removal in Dubai – Patient Guide',
  faqs: [
    {
      id: 1,
      question: 'What is Birthmark Removal in Dubai?',
      answer:
        "Birthmark Removal in Dubai is a medical procedure that reduces or removes visible birthmarks using laser or dermatological techniques under doctor's supervision for safe, gradual, and natural-looking skin improvement."
    },
    {
      id: 2,
      question: 'Is Birthmark Removal safe for all skin types?',
      answer:
        'Yes, Birthmark Removal is generally safe for most skin types when performed by qualified doctors using approved technology. A consultation helps determine the safest approach for your skin.'
    },
    {
      id: 3,
      question: 'What types of birthmarks can be treated?',
      answer:
        'Pigmented, vascular, flat, and raised birthmarks can often be treated. The treatment method depends on the birthmark’s color, depth, size, and location.'
    },
    {
      id: 4,
      question: 'How many sessions are required for Birthmark Removal in Dubai?',
      answer:
        'The number of sessions varies. Small or superficial birthmarks may need fewer sessions, while deeper or larger birthmarks may require multiple treatments.'
    },
    {
      id: 5,
      question: 'Is Birthmark Removal painful?',
      answer:
        'Birthmark Removal is usually well tolerated. Patients may feel mild warmth or tingling, but discomfort is minimal, and anesthesia is rarely required.'
    },
    {
      id: 6,
      question: 'Is there downtime after Birthmark Removal treatment?',
      answer:
        'Downtime is minimal. Mild redness or swelling may occur temporarily, allowing most patients to return to daily activities quickly.'
    },
    {
      id: 7,
      question: 'Can birthmarks be removed completely?',
      answer:
        'Some birthmarks can be fully removed, while others may significantly fade. Results depend on the type, depth, and individual skin response of the birthmark.'
    },
    {
      id: 8,
      question: 'At what age can Birthmark Removal be done?',
      answer:
        "Birthmark Removal can be performed at different ages, depending on the type of birthmark. A doctor's consultation is essential to determine timing."
    },
    {
      id: 9,
      question: 'Are laser treatments used for Birthmark Removal in Dubai?',
      answer:
        'Yes, laser technology is commonly used for Birthmark Removal in Dubai to target pigmentation or blood vessels precisely while protecting surrounding skin.'
    },
    {
      id: 10,
      question: 'How long does one Birthmark Removal session take?',
      answer:
        'Each session typically lasts between 20 and 45 minutes, depending on the size and complexity of the birthmark being treated.'
    },
    {
      id: 11,
      question: 'What should I avoid after Birthmark Removal?',
      answer:
        'Avoid sun exposure, scratching the treated area, and harsh skincare products. Follow doctor-recommended aftercare instructions for proper healing.'
    },
    {
      id: 12,
      question: 'Are the results of Birthmark Removal permanent?',
      answer:
        'Results are long-lasting in most cases. However, some birthmarks may require maintenance sessions depending on skin type and pigmentation behavior.'
    },
    {
      id: 13,
      question: 'Is Birthmark Removal better than cosmetic cover-ups?',
      answer:
        'Yes, Birthmark Removal treats the underlying cause rather than masking it, offering long-term improvement compared to temporary cosmetic solutions.'
    },
    {
      id: 14,
      question: 'Can Birthmark Removal be combined with other skin treatments?',
      answer:
        'Yes, Birthmark Removal may be combined with other dermatological treatments if advised by your doctor to enhance overall skin appearance.'
    },
    {
      id: 15,
      question: 'Why choose ramacarepolyclinic for Birthmark Removal in Dubai?',
      answer:
        'ramacarepolyclinic offers doctor-led Birthmark Removal in Dubai with advanced technology, personalized care plans, and strict adherence to safety protocols.'
    }
  ],
        resources: [
         {
            id: 1,
            text: 'Spider Veins Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/spider-veins-laser-treatment'
          },
          {
            id: 2,
            text: 'Carbon Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/carbon-laser-dubai'
          },
          {
            id: 3,
            text: 'Fractional CO2 Laser',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/fractional-co2-laser-dubai'
          },
          {
            id: 4,
            text: 'Laser Rejuvenation',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/laser-rejuvenation-dubai'
          },
          {
            id: 5,
            text: 'Laser Bleaching',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/laser-bleaching-dubai'
          },
          {
            id: 6,
            text: 'Birthmarks Removal',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/birthmark-removal-dubai'
          },
          {
            id: 7,
            text: 'Female Genital Rejuvenation',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/female-genital-rejuvenation-dubai'
          },
          {
            id: 8,
            text: 'Scars Removal',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/scars-removal-dubai'
          },
          {
            id: 9,
            text: 'Mole Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mole-removal-dubai'
          },
            {
            id: 10,
            text: 'Tattoo Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/tattoo-removal-dubai'
          },
            {
            id: 11,
            text: 'Nail Fungus',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/nail-fungus-dubai'
          },
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
        description: 'Verified testimonials from patients who achieved excellent laser treatment results',
        // filters: [
        //   { id: 'all', label: 'All Stories' },
        //   { id: 'hair-removal', label: 'Hair Removal' },
        //   { id: 'skin-rejuvenation', label: 'Skin Rejuvenation' },
        //   { id: 'pigmentation', label: 'Pigmentation' }
        // ],
        // testimonials: [
        //   {
        //     id: 1,
        //     name: 'Noor H.',
        //     age: 29,
        //     location: 'Dubai Marina',
        //     rating: 5,
        //     testimonial: "Laser hair removal has been life-changing. No more shaving or waxing, and my skin is so smooth. The process was comfortable and the results are amazing.",
        //     condition: 'Unwanted body hair',
        //     duration: '8 sessions',
        //     result: '95% hair reduction, smooth skin',
        //     category: 'hair-removal',
        //     date: 'Treated in March 2024'
        //   },
        //   {
        //     id: 2,
        //     name: 'Omar F.',
        //     age: 41,
        //     location: 'JBR',
        //     rating: 5,
        //     testimonial: "The skin rejuvenation laser treatments have transformed my skin. Fine lines are reduced and my skin looks years younger. Highly professional service.",
        //     condition: 'Aging skin, fine lines',
        //     duration: '5 sessions',
        //     result: 'Improved texture, reduced fine lines',
        //     category: 'skin-rejuvenation',
        //     date: 'Treated in February 2024'
        //   },
        //   {
        //     id: 3,
        //     name: 'Aisha K.',
        //     age: 34,
        //     location: 'Downtown Dubai',
        //     rating: 5,
        //     testimonial: "My pigmentation issues are completely resolved. The laser treatment was precise and effective. The team was knowledgeable and caring throughout.",
        //     condition: 'Hyperpigmentation',
        //     duration: '6 sessions',
        //     result: 'Clear, even-toned skin',
        //     category: 'pigmentation',
        //     date: 'Treated in April 2024'
        //   }
        // ],
        stats: [
          {
            id: 1,
            number: '4.9/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.9
          },
          {
            id: 2,
            number: '2,500+',
            label1: 'Laser Sessions',
            label2: 'Completed',
            target: 2500
          },
          {
            id: 3,
            number: '97%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 97
          },
          {
            id: 4,
            number: '95%',
            label1: 'Success Rate',
            label2: 'Hair Removal',
            target: 95
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment Options',
        insuranceTitle: 'Insurance & Reimbursement',
        paymentOptions: [
          'Cash, Credit/Debit Cards accepted',
          'Flexible payment plans available',
          '0% interest installments (conditions apply)'
        ],
        insuranceOptions: [
          'Accepted by select insurance providers',
          'Detailed invoices provided for claims',
          'Assistance with documentation'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Birthmark Removal in Dubai Today',
        description: 'Achieve clearer, more even-looking skin with Birthmark Removal in Dubai at ramacarepolyclinic, where medical expertise meets compassionate, patient-focused care.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '2,500+ Sessions',
            description: 'Completed'
          },
          {
            title: '4.9/5 Rating',
            description: 'Patient Reviews'
          }
        ]
      }
    },

     'aesthetic-dermatology-dubai-laser-treatment-scars-removal': {
      hero: {
        subtitle: 'Restore Smoother, Clearer Skin with Medical Expertise You Can Trust',
        description: 'Scars can remain long after an injury, acne, surgery, or burn has healed—and they can affect both appearance and confidence. At ramacarepolyclinic, we offer Scars Removal in Dubai using safe, medically supervised treatments designed to improve skin texture, tone, and overall appearance naturally and gradually.',
        rating: '4.9/5 Rating (500+ Reviews)',
        stats: [
          {
            id: 1,
            number: '95%',
            label: 'Patient Satisfaction'
          },
          {
            id: 2,
            number: '6000+',
            label: 'Laser Sessions Performed'
          },
          {
            id: 3,
            number: '15+',
            label: 'Years of Experience'
          }
        ],
        ctaButtons: {
          primary: {
            text: 'Book Your Scar Removal Consultation',
             icon: 'calendar',
                link: '#book-now'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 56 659 7878',
                icon: 'whatsapp'
          }
        },
        features: [
          '  DHA-Licensed Multispecialty Polyclinic',
          'Experienced Doctors & Certified Aesthetic Team',
           ' Advanced, Clinically Approved Scar Treatments',
        ],
         image: {
          src: '/images/scars.jpg',
          alt: 'Scars removal in Dubai performed by specialists using advanced treatments to reduce scar appearance and improve skin texture.'
        },
        medicalNotice: {
          text: 'Safety & Medical Disclaimer:Results vary based on scar type, skin condition, and adherence to aftercare. All Scars Removal in Dubai treatments at ramacarepolyclinic follow DHA-approved safety protocols.',
          show: true
        }
      },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Laser Treatment Specialists in Dubai',
        description: 'DHA-licensed dermatologists with extensive experience in advanced laser technology and aesthetic treatments.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Scars Removal in Dubai',
       problemIntro: {
  title: 'The Problem: Why Scars Develop and Persist',
  description: 'Concerns related to scars in Dubai are common due to acne, injuries, surgeries, burns, and environmental factors such as heat and sun exposure. Scars may fade over time, but many remain visible without proper treatment and care.'
},
solutionIntro: {
  title: 'Our Solution: Advanced & Holistic Care for Scars in Dubai',
  description: 'Our treatment approach for scars in Dubai focuses on improving skin texture, reducing scar visibility, and supporting healthy skin regeneration.'
},
    leftCards: [
  {
    id: 1,
    title: 'What Is Scars Removal Treatment?',
    description:
      'Scars Removal in Dubai is a medical skin treatment that reduces the appearance of scars by improving collagen production and skin regeneration. Depending on scar type, treatments may include laser therapy, resurfacing, or combination approaches.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description: 'Scar removal treatments are suitable for people with:',
    listItems: [
      'Acne scars',
      'Surgical scars',
      'Injury or trauma scars',
      'Stretch marks',
      'Uneven skin texture or pigmentation'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description:
      'Each session typically lasts 30–60 minutes. Results develop gradually as the skin heals and renews over multiple sessions.'
  }
],
  rootCauses: [
  {
    id: 1,
    title: 'Pitta Dosha Aggravation ',
    description: 'Excess internal heat can worsen inflammation, pigmentation, redness, and thickened scar tissue, making scars more noticeable.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Vata Imbalance ',
    description: 'Leads to dryness, uneven skin texture, poor collagen formation, and delayed skin healing, contributing to rough or indented scars.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 3,
    title: 'Kapha Imbalance ',
    description: 'Causes excess tissue buildup, resulting in raised, thick, or keloid-type scars with slow natural resolution.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 4,
    title: 'Ama Accumulation (Toxins) ',
    description: 'Digestive toxins interfere with skin repair and regeneration, slowing scar healing and causing discoloration.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 5,
    title: 'Stress & Hormonal Imbalance ',
    description: 'Can delay wound healing and worsen the appearance of scars in Dubai, especially acne-related scars.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  }
],
 quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical, medical aesthetic' },
  { label: 'Anesthesia', value: 'Topical (if required)' },
  { label: 'Recovery Time', value: 'Minimal to moderate (depends on treatment)' },
  { label: 'Side Effects', value: 'Temporary redness or mild swelling' }
],
      approachCards: [
  {
    id: 1,
    title: 'Detailed Skin & Scar Assessment',
    description: 'Each scar is carefully evaluated based on its type, depth, and cause to create a personalized treatment plan.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Targeted Scar Reduction Therapies',
    description: 'Advanced treatments help soften scar tissue, improve collagen production, and reduce pigmentation and uneven texture.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Internal Detoxification Support',
    description: 'Herbal support and gentle cleansing help remove toxins and enhance the skin’s natural healing capacity.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Skin Rejuvenation & Healing Care',
    description: 'Topical applications, oils, and therapies nourish the skin, improve elasticity, and promote smoother skin.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Lifestyle & Skin Care Guidance',
    description: 'Personalized recommendations help protect the skin, prevent worsening of scars, and maintain long-term results.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },

  healingJourney: {
  title: 'Your Skin Recovery Journey: Step by Step',
  description: null,
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Skin Assessment',
      duration: '30–45 min',
      description: null,
      keyActivities: [
        'Scar type and depth evaluation',
        'Skin analysis and medical history review',
        'Personalized Scars Removal plan creation'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Skin Preparation Phase',
      duration: 'Weeks 1–2',
      description: null,
      keyActivities: [
        'Medical-grade cleansing',
        'Pre-treatment skincare guidance',
        'Sun protection advice'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Active Treatment Phase',
      duration: 'Weeks 2–12',
      description: null,
      keyActivities: [
        'Laser or resurfacing sessions',
        'Sessions spaced 3–4 weeks apart',
        'Post-treatment calming and healing care'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Healing & Maintenance Phase',
      duration: 'Months 3–6',
      description: null,
      keyActivities: [
        'Skin regeneration monitoring',
        'Maintenance sessions, if required',
        'Home skincare and lifestyle guidance'
      ],
      side: 'left'
    },
    {
      id: 5,
      number: '05',
      title: 'Result',
      duration: null,
      description:
        'Smoother skin, softer scars, improved texture, and a more even skin tone.',
      keyActivities: [],
      side: 'right'
    }
  ]
},
      benefits: {
        title: 'Clinically-Observed Benefits',
        description: 'Evidence-based results from our advanced laser treatments.',
        comparisonTitle: 'Scars Removal vs. Topical Creams',
        comparisonDescription: 'Compare our advanced laser approach with conventional scar removal and skin treatment methods',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Scars Removal in Dubai',
          traditional: 'Scar Creams'
        },
        benefits: [
          {
            id: 1,
            title: ' Reduced scar visibility',
            percentage: 90,
            description: null
          },
          {
            id: 2,
            title: 'Improved skin texture',
            percentage: 92,
            description: null
          },
          {
            id: 3,
            title: 'Even skin tone',
            percentage: 88,
            description:null
          },
          {
            id: 4,
            title: ' Boosted collagen production',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: 'Increased skin confidence',
            percentage: 94,
            description: null
          }
        ],
        comparisonData: [
{
    feature: 'Depth of Treatment',
    ayurvedic: 'Reaches deeper skin layers',
    conventional: 'Surface-level only'
  },
  {
    feature: 'Results',
    ayurvedic: 'Gradual, visible improvement',
    conventional: 'Limited results'
  },
  {
    feature: 'Technology',
    ayurvedic: 'Medical-grade treatments',
    conventional: 'Cosmetic products'
  },
  {
    feature: 'Supervision',
    ayurvedic: 'Doctor-led',
    conventional: 'Self-applied'
  }
        ]
      },
  pricing: {
  title: 'Transparent Pricing & Treatment Packages',
  description:
    'Customized packages for scar removal in Dubai, based on scar type, size, depth, and individual treatment goals',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For mild or superficial scars',
      duration: '2–3 sessions over 1–2 months',
      features: [
        'Initial doctor consultation & scar assessment',
        'Skin type and scar depth evaluation',
        'Targeted Scars Removal in Dubai treatment sessions',
        'Basic post-treatment skincare guidance',
        'Healing and progress monitoring'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For moderate or multiple scars',
      duration: '4–6 sessions over 2–3 months',
      features: [
        'Detailed dermatology consultation',
        'Advanced skin and scar analysis',
        'Multiple Scars Removal in Dubai, laser or resurfacing sessions',
        'Customized post-treatment skincare plan',
        'Sun-care and lifestyle guidance',
        'Regular progress tracking'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'For deep, old, or complex scars',
      duration: '6–10 sessions over 3–6 months',
      features: [
        'Comprehensive doctor-led evaluation',
        'Advanced laser or combined Scars Removal in Dubai treatment approach',
        'Multiple precision treatment sessions',
        'Enhanced skin healing and recovery care',
        'Personalized long-term maintenance plan',
        'Dedicated follow-up and dermatology support'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
  faq: {
  title: 'Frequently Asked Questions – Scars Removal in Dubai',
  description: 'Scars Removal in Dubai – Patient Guide',
  faqs: [
    {
      id: 1,
      question: 'What is Scars Removal in Dubai?',
      answer:
        'Scars Removal in Dubai is a medically supervised treatment that improves skin health, reduces scar visibility, and restores a smoother texture using advanced lasers or dermatological techniques safely.'
    },
    {
      id: 2,
      question: 'How does Scars Removal improve skin health?',
      answer:
        'By stimulating collagen production, Scars Removal in Dubai enhances skin regeneration, restores healthy texture, reduces pigmentation, and improves overall skin health, tone, and resilience over multiple sessions.'
    },
    {
      id: 3,
      question: 'Who is a suitable candidate for Scar Removal?',
      answer:
        'Individuals with acne scars, surgical scars, trauma marks, or pigmented scars seeking improved skin health, texture, and appearance are ideal candidates after a professional medical assessment.'
    },
    {
      id: 4,
      question: 'Is Scars Removal safe for all skin types?',
      answer:
        'Yes, Scars Removal in Dubai is safe for most skin types when performed by experienced doctors at ramacarepolyclinic, using DHA-approved technology to ensure skin health and minimal risk.'
    },
    {
      id: 5,
      question: 'Does the procedure hurt?',
      answer:
        'Scars Removal is generally comfortable. Patients may experience mild warmth or tingling, but medical supervision ensures minimal discomfort and preserves skin health during treatment.'
    },
    {
      id: 6,
      question: 'How many sessions are needed for effective results?',
      answer:
        'The number of sessions varies by scar type and severity. Most patients require 3–6 sessions to restore optimal skin health and achieve visible, lasting improvement.'
    },
    {
      id: 7,
      question: 'How long does each Scars Removal session last?',
      answer:
        'Sessions typically last 30–60 minutes, depending on scar size and depth. This timeframe ensures careful treatment while maintaining overall skin health and minimizing stress on tissue.'
    },
    {
      id: 8,
      question: 'Is there any downtime after treatment?',
      answer:
        'Downtime is minimal. Temporary redness or mild swelling may occur, but patients can resume daily activities, supporting continuous skin health and proper healing post-treatment.'
    },
    {
      id: 9,
      question: 'Can Scars Removal treat old or deep scars?',
      answer:
        'Yes, advanced laser techniques at ramacarepolyclinic can gradually improve old or deep scars while promoting healthy skin regeneration and restoring overall skin health.'
    },
    {
      id: 10,
      question: 'Are results permanent?',
      answer:
        'Results are long-lasting when proper post-treatment care is followed. Maintaining skin health with sun protection and skincare ensures the benefits of Scars Removal persist over time.'
    },
    {
      id: 11,
      question: 'How does Scars Removal differ from creams or home remedies?',
      answer:
        'Unlike topical products, Scars Removal in Dubai treats the skin at deeper levels, improving collagen, texture, and overall skin health rather than offering temporary surface results.'
    },
    {
      id: 12,
      question: 'Can Scars Removal improve skin tone and texture?',
      answer:
        'Yes, treatments reduce uneven texture, pigmentation, and scar visibility while enhancing skin health, elasticity, and smoothness for a rejuvenated and balanced appearance.'
    },
    {
      id: 13,
      question: 'Are there side effects?',
      answer:
        'Side effects are rare and mild, such as temporary redness or warmth. Medical supervision ensures these effects are controlled, keeping skin health a priority throughout treatment.'
    },
    {
      id: 14,
      question: 'How should I prepare my skin before treatment?',
      answer:
        'Skin should be clean and free of irritation. Doctors may provide guidance on moisturizing, avoiding harsh products, and protecting skin to support overall skin health before Scars Removal.'
    },
    {
      id: 15,
      question: 'Why choose ramacarepolyclinic for Scars Removal in Dubai?',
      answer:
        'ramacarepolyclinic offers doctor-led, personalized Scars Removal in Dubai, combining advanced technology with a focus on skin health, safety, and gradual, natural-looking improvement.'
    }
  ],
        resources: [
         {
            id: 1,
            text: 'Spider Veins Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/spider-veins-laser-treatment'
          },
          {
            id: 2,
            text: 'Carbon Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/carbon-laser-dubai'
          },
          {
            id: 3,
            text: 'Fractional CO2 Laser',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/fractional-co2-laser-dubai'
          },
          {
            id: 4,
            text: 'Laser Rejuvenation',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/laser-rejuvenation-dubai'
          },
          {
            id: 5,
            text: 'Laser Bleaching',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/laser-bleaching-dubai'
          },
          {
            id: 6,
            text: 'Birthmarks Removal',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/birthmark-removal-dubai'
          },
          {
            id: 7,
            text: 'Female Genital Rejuvenation',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/female-genital-rejuvenation-dubai'
          },
          {
            id: 8,
            text: 'Scars Removal',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/scars-removal-dubai'
          },
          {
            id: 9,
            text: 'Mole Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mole-removal-dubai'
          },
            {
            id: 10,
            text: 'Tattoo Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/tattoo-removal-dubai'
          },
            {
            id: 11,
            text: 'Nail Fungus',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/nail-fungus-dubai'
          },
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
        description: 'Verified testimonials from patients who achieved excellent laser treatment results',
       
        stats: [
          {
            id: 1,
            number: '4.9/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.9
          },
          {
            id: 2,
            number: '2,500+',
            label1: 'Laser Sessions',
            label2: 'Completed',
            target: 2500
          },
          {
            id: 3,
            number: '97%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 97
          },
          {
            id: 4,
            number: '95%',
            label1: 'Success Rate',
            label2: 'Hair Removal',
            target: 95
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment Options',
        insuranceTitle: 'Insurance & Reimbursement',
        paymentOptions: [
          'Cash, Credit/Debit Cards accepted',
          'Flexible payment plans available',
          '0% interest installments (conditions apply)'
        ],
        insuranceOptions: [
          'Accepted by select insurance providers',
          'Detailed invoices provided for claims',
          'Assistance with documentation'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Scars Removal in Dubai Today',
        description: 'Reveal smoother, healthier-looking skin with Scars Removal in Dubai at ramacarepolyclinic, where medical expertise meets patient-focused aesthetic care.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '2,500+ Sessions',
            description: 'Completed'
          },
          {
            title: '4.9/5 Rating',
            description: 'Patient Reviews'
          }
        ]
      }
    },

     'aesthetic-dermatology-dubai-laser-treatment-tattoo-removal': {
      hero: {
        subtitle: 'Clear Unwanted Ink Safely, Effectively & Naturally',
        description: 'Tattoos that no longer reflect who you are can affect confidence and comfort. At Rama Care Polyclinic, we provide Tattoo Removal in Dubai using advanced laser technology to safely fade and remove unwanted tattoos with minimal skin damage and medical supervision.',
        rating: '4.9/5 Rating (500+ Reviews)',
        stats: [
          {
            id: 1,
            number: '95%',
            label: 'Patient Satisfaction'
          },
          {
            id: 2,
            number: '6000+',
            label: 'Laser Sessions Performed'
          },
          {
            id: 3,
            number: '15+',
            label: 'Years of Experience'
          }
        ],
        ctaButtons: {
          primary: {
            text: ' Book Your Tattoo Removal Consultation',
             icon: 'calendar',
                link: '#book-now'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 56 659 7878',
                icon: 'whatsapp'
          }
        },
        features: [
          ' DHA-Licensed Multispecialty Polyclinic',
          'Experienced Doctors & Certified Laser Specialists',
           'Advanced, Clinically Approved Laser Technology',
        ],
        image: {
          src: '/images/tattoo.jpg',
          alt: 'Tattoo removal in Dubai performed by specialists using advanced laser technology to safely fade unwanted tattoos.'
        },
        medicalNotice: {
          text: 'Safety & Medical Disclaimer: Results vary depending on tattoo color, skin type, and immune response. All Tattoo Removal in Dubai procedures at Rama Care Polyclinic follow DHA-approved safety and medical protocols.',
          show: true
        }
      },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Laser Treatment Specialists in Dubai',
        description: 'DHA-licensed dermatologists with extensive experience in advanced laser technology and aesthetic treatments.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'AYUSH Certified',
            subtitle: 'Ministry of Ayurveda'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management'
          },
          {
            id: 4,
            title: 'NABH Accredited',
            subtitle: 'Healthcare Standards'
          },
          {
            id: 5,
            title: 'Member NAMA',
            subtitle: 'National Association'
          }
        ]
      },
      overview: {
        title: 'Understanding Tattoo Removal in Dubai',
        problemIntro: {
          title: 'Why Tattoo Removal Can Be Challenging',
          description: 'Tattoo ink sits deep in the skin, making it difficult to remove with creams or home methods. Improper removal can lead to scarring, pigmentation, or incomplete fading.'
        },
        solutionIntro: {
          title: 'Advanced Tattoo Removal in Dubai',
          description: 'At Rama Care Polyclinic, tattoo removal in Dubai is performed using advanced, medically approved laser technology designed to safely break down tattoo ink while protecting surrounding skin.'
        },
   leftCards: [
  {
    id: 1,
    title: 'What Is Tattoo Removal?',
    description:
      'Tattoo Removal in Dubai is a non-surgical laser procedure that breaks down tattoo ink particles beneath the skin. The body’s natural immune system then gradually clears the ink over multiple sessions, leaving the skin clearer over time.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description: 'Tattoo Removal is suitable for individuals who want to remove or fade:',
    listItems: [
      'Old or unwanted tattoos',
      'Poor-quality or faded tattoos',
      'Name or relationship tattoos',
      'Cosmetic or makeup tattoos',
      'Tattoos before cover-up procedures'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description:
      'Each session usually takes 20–40 minutes, depending on tattoo size, color, and depth. Fading occurs gradually between sessions.'
  }
],
rootCauses: [
  {
    id: 1,
    title: 'Unwanted or Outdated Tattoos',
    description:
      'Many people regret tattoos due to changes in personal style, relationships, or career requirements, making the tattoo no longer relevant or desired.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Dark or Stubborn Ink',
    description:
      'Deep black, blue, or multi-colored inks penetrate deeper skin layers, making tattoos difficult to fade with home remedies or non-medical treatments.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 3,
    title: 'Patchy Fading from Previous Treatments',
    description:
      'Incomplete or improper tattoo removal attempts can leave uneven fading, shadowing, or blurred tattoo outlines.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 4,
    title: 'Skin Discoloration & Texture Changes',
    description:
      'Older tattoos or poor-quality ink can cause pigmentation changes, scarring, or uneven skin texture around the tattoo area.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 5,
    title: 'Fear of Scarring or Skin Damage',
    description:
      'Many patients delay treatment due to concerns about pain, burns, permanent scars, or unnatural skin appearance after removal.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  }
],
 quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical laser treatment' },
  { label: 'Anesthesia', value: 'Topical numbing if required' },
  { label: 'Downtime', value: 'Minimal' },
  { label: 'Results', value: 'Progressive tattoo fading' }
],
       approachCards: [
  {
    id: 1,
    title: 'Targeted Laser Technology',
    description:
      'Laser energy breaks tattoo ink into tiny particles that are naturally removed by the body’s immune system over time.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Safe for Different Ink Colors',
    description:
      'Specialized laser settings target black, colored, and stubborn inks with precision for gradual, even fading.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Minimal Skin Damage',
    description:
      'Doctor-supervised treatment minimizes the risk of scarring, burns, and pigmentation changes.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Customized Treatment Planning',
    description:
      'Each tattoo removal plan is based on tattoo size, ink depth, color, skin type, and individual healing response.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Aftercare & Skin Healing Support',
    description:
      'Post-treatment care guidance helps promote faster healing, reduce sensitivity, and support healthy skin regeneration.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 6,
    title: 'Result',
    description:
      'Progressive tattoo fading, clearer skin, minimal scarring risk, and natural-looking skin restoration with safe and effective tattoo removal in Dubai.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },

 healingJourney: {
  title: 'Your Tattoo Removal Journey: Step by Step',
  description:
    'A structured, doctor-guided approach for safe and effective tattoo removal.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Tattoo Assessment',
      duration: null,
      description: null,
      keyActivities: [
        'Tattoo size, color, and depth analysis',
        'Skin type evaluation',
        'Medical history review',
        'Session estimate and treatment plan'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Skin Preparation',
      duration: null,
      description: null,
      keyActivities: [
        'Cleansing and numbing if needed',
        'Laser safety precautions',
        'Skin protection measures'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Laser Tattoo Removal Session',
      duration: null,
      description: null,
      keyActivities: [
        'Controlled laser pulses target ink',
        'Cooling and comfort care',
        'Continuous medical monitoring'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Healing & Follow-Up',
      duration: null,
      description: null,
      keyActivities: [
        'Post-treatment skincare guidance',
        'Healing and fading period',
        'Scheduled follow-up sessions'
      ],
      side: 'left'
    },
    {
      id: 5,
      number: '05',
      title: 'Result',
      duration: null,
      description:
        'Safe, progressive tattoo fading with healthy skin recovery.',
      keyActivities: [],
      side: 'right'
    }
  ]
},
      benefits: {
        title: 'Clinically-Observed Benefits',
        description: 'Evidence-based results from our advanced laser treatments.',
        comparisonTitle: 'Laser Tattoo Removal vs. Other Methods',
        comparisonDescription: 'Compare our advanced laser approach with conventional scar removal and skin treatment methods',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Laser Tattoo Removal',
          traditional: 'Creams / Home Methods'
        },
        benefits: [
          {
            id: 1,
            title: '  Safe ink breakdown',
            percentage: 90,
            description: null
          },
          {
            id: 2,
            title: ' Reduced tattoo visibility',
            percentage: 92,
            description: null
          },
          {
            id: 3,
            title: 'Minimal skin damage',
            percentage: 88,
            description:null
          },
          {
            id: 4,
            title: 'Low scarring risk',
            percentage: 85,
            description: null
          },
          {
            id: 5,
            title: ' Improved skin confidence',
            percentage: 94,
            description: null
          }
        ],
        comparisonData: [
{
  feature: 'Depth of Treatment',
  ayurvedic: 'Targets deep ink',
  conventional: 'Surface only'
},
{
  feature: 'Effectiveness',
  ayurvedic: 'Clinically proven',
  conventional: 'Limited results'
},
{
  feature: 'Skin Safety',
  ayurvedic: 'Doctor-supervised',
  conventional: 'High risk'
},
{
  feature: 'Scarring Risk',
  ayurvedic: 'Minimal',
  conventional: 'High'
},
{
  feature: 'Results',
  ayurvedic: 'Gradual & natural',
  conventional: 'Unpredictable'
}

        ]
      },
  pricing: {
  title: 'Transparent Pricing & Customized Packages',
  description:
    'Tattoo Removal at Rama Care Polyclinic is customized based on tattoo size, color, depth, and number of sessions required. All treatments include medical supervision and aftercare guidance.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For mild or superficial scars',
      duration: '2–3 sessions over 1–2 months',
      features: [
        'Initial doctor consultation & scar assessment',
        'Skin type and scar depth evaluation',
        'Targeted Scars Removal in Dubai treatment sessions',
        'Basic post-treatment skincare guidance',
        'Healing and progress monitoring'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For moderate or multiple scars',
      duration: '4–6 sessions over 2–3 months',
      features: [
        'Detailed dermatology consultation',
        'Advanced skin and scar analysis',
        'Multiple Scars Removal in Dubai, laser or resurfacing sessions',
        'Customized post-treatment skincare plan',
        'Sun-care and lifestyle guidance',
        'Regular progress tracking'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'For deep, old, or complex scars',
      duration: '6–10 sessions over 3–6 months',
      features: [
        'Comprehensive doctor-led evaluation',
        'Advanced laser or combined Scars Removal in Dubai treatment approach',
        'Multiple precision treatment sessions',
        'Enhanced skin healing and recovery care',
        'Personalized long-term maintenance plan',
        'Dedicated follow-up and dermatology support'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
 faq: {
  title: 'Frequently Asked Questions (FAQs)',
  description: 'Tattoo Removal in Dubai – What Patients Need to Know',
  faqs: [
    {
      id: 1,
      question: 'What is Tattoo Removal in Dubai?',
      answer:
        'It is a laser-based treatment that breaks down tattoo ink so the body can naturally eliminate it over time.'
    },
    {
      id: 2,
      question: 'Is tattoo removal safe?',
      answer:
        'Yes, when performed by trained doctors using approved laser systems.'
    },
    {
      id: 3,
      question: 'How many sessions are needed?',
      answer:
        'Most tattoos require 4–8 sessions, depending on size, color, and depth.'
    },
    {
      id: 4,
      question: 'Does tattoo removal hurt?',
      answer:
        'Mild discomfort is possible. Topical numbing helps improve comfort.'
    },
    {
      id: 5,
      question: 'Is there downtime after treatment?',
      answer:
        'Minimal downtime. Mild redness or swelling may occur temporarily.'
    },
    {
      id: 6,
      question: 'Can all tattoo colors be removed?',
      answer:
        'Dark colors respond best. Colored tattoos may need more sessions.'
    },
    {
      id: 7,
      question: 'Will tattoo removal cause scars?',
      answer:
        'When done correctly, scarring risk is minimal.'
    },
    {
      id: 8,
      question: 'How long does one session take?',
      answer:
        'Usually 20–40 minutes, depending on tattoo size.'
    },
    {
      id: 9,
      question: 'When will I see results?',
      answer:
        'Fading is gradual and becomes noticeable after a few sessions.'
    },
    {
      id: 10,
      question: 'Can tattoos be completely removed?',
      answer:
        'Many tattoos can be significantly faded or fully removed.'
    },
    {
      id: 11,
      question: 'Can I remove a tattoo for cover-up?',
      answer:
        'Yes, laser fading is commonly done before cover-up tattoos.'
    },
    {
      id: 12,
      question: 'Is tattoo removal suitable for all skin types?',
      answer:
        'Yes, with proper laser settings and medical assessment.'
    },
    {
      id: 13,
      question: 'What should I avoid after treatment?',
      answer:
        'Avoid sun exposure, picking the area, and heat for a few days.'
    },
    {
      id: 14,
      question: 'Is laser tattoo removal better than creams?',
      answer:
        'Yes, laser treatment is clinically proven and safer.'
    },
    {
      id: 15,
      question: 'Why choose Rama Care Polyclinic for Tattoo Removal in Dubai?',
      answer:
        'Doctor-led care, advanced lasers, personalized plans, and strict safety standards.'
    }
  ],
        resources: [
         {
            id: 1,
            text: 'Spider Veins Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/spider-veins-laser-treatment'
          },
          {
            id: 2,
            text: 'Carbon Laser Treatment',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/carbon-laser-dubai'
          },
          {
            id: 3,
            text: 'Fractional CO2 Laser',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/fractional-co2-laser-dubai'
          },
          {
            id: 4,
            text: 'Laser Rejuvenation',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/laser-rejuvenation-dubai'
          },
          {
            id: 5,
            text: 'Laser Bleaching',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/laser-bleaching-dubai'
          },
          {
            id: 6,
            text: 'Birthmarks Removal',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/birthmark-removal-dubai'
          },
          {
            id: 7,
            text: 'Female Genital Rejuvenation',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/female-genital-rejuvenation-dubai'
          },
          {
            id: 8,
            text: 'Scars Removal',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/scars-removal-dubai'
          },
          {
            id: 9,
            text: 'Mole Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/mole-removal-dubai'
          },
            {
            id: 10,
            text: 'Tattoo Removal',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/tattoo-removal-dubai'
          },
            {
            id: 11,
            text: 'Nail Fungus',
            bgColor: 'bg-[#F5F3FF]',
            link: '/services/nail-fungus-dubai'
          },
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
        description: 'Verified testimonials from patients who achieved excellent laser treatment results',
        stats: [
          {
            id: 1,
            number: '4.9/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.9
          },
          {
            id: 2,
            number: '2,500+',
            label1: 'Laser Sessions',
            label2: 'Completed',
            target: 2500
          },
          {
            id: 3,
            number: '97%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 97
          },
          {
            id: 4,
            number: '95%',
            label1: 'Success Rate',
            label2: 'Hair Removal',
            target: 95
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment Options',
        insuranceTitle: 'Insurance & Reimbursement',
        paymentOptions: [
          'Cash, Credit/Debit Cards accepted',
          'Flexible payment plans available',
          '0% interest installments (conditions apply)'
        ],
        insuranceOptions: [
          'Accepted by select insurance providers',
          'Detailed invoices provided for claims',
          'Assistance with documentation'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Tattoo Removal in Dubai Today',
        description: 'Remove unwanted ink safely and confidently with Tattoo Removal in Dubai at Rama Care Polyclinic, where medical expertise meets advanced laser care.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '15+ Years Combined'
          },
          {
            title: '2,500+ Sessions',
            description: 'Completed'
          },
          {
            title: '4.9/5 Rating',
            description: 'Patient Reviews'
          }
        ]
      }
    },

     'aesthetic-dermatology-dubai-body-shaping-eximia-body-contouring': {
      hero: {
        subtitle: 'Sculpt, Tone & Redefine Your Body Naturally',
        description: 'Stubborn fat, loose skin, and uneven body contours can be frustrating, even with diet and exercise. At Rama Care Polyclinic, we offer Eximia Body Contouring in Dubai, a non-invasive solution designed to reduce fat, tighten skin, and improve body shape safely under medical supervision.',
        rating: '4.9/5 Rating (400+ Reviews)',
        stats: [
          {
            id: 1,
            number: '93%',
            label: 'Patient Satisfaction'
          },
          {
            id: 2,
            number: '4500+',
            label: 'Body Shaping Sessions Performed'
          },
          {
            id: 3,
            number: '15+',
            label: 'Years of Clinical Experience'
          }
        ],
        ctaButtons: {
          primary: {
            text: 'Book Your Eximia Body Contouring Consultation',
             icon: 'calendar',
                link: '#book-now'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 56 659 7878',
                icon: 'whatsapp'
          }
        },
        features: [
          'DHA-Licensed Multispecialty Polyclinic',
          ' Experienced Doctors & Certified Body Contouring Specialists',
          'Safe, Clinically Approved Eximia Technology',
        ],
        image: {
          src: '/images/eximia.jpg',
          alt: 'Eximia body contouring in Dubai performed by specialists to reduce fat and improve body shape safely.'
        },
        medicalNotice: {
          text: 'Safety & Medical Disclaimer: Results may vary based on body type, lifestyle, and treatment consistency. All Eximia Body Contouring in Dubai procedures at Rama Care Polyclinic follow DHA-approved medical and safety protocols.',
          show: true
        }
      },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Body Shaping Specialists in Dubai',
        description: 'DHA-licensed specialists with extensive experience in non-invasive body contouring and shaping technologies.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'FDA-Approved Equipment',
            subtitle: 'Medical Grade Technologies'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Standards'
          },
          {
            id: 4,
            title: 'Certified Body Contouring Specialists',
            subtitle: null
          }
        ]
      },
      overview: {
        title: 'Understanding Eximia Body Contouring in Dubai',
        problemIntro: {
          title: 'Body Shaping Challenges',
          description: 'Stubborn fat deposits, cellulite, and loss of skin firmness often remain resistant to diet and exercise, affecting body confidence and silhouette.'
        },
        solutionIntro: {
          title: 'Our Solution - Eximia Body Contouring',
          description: 'At Rama Care Polyclinic, Eximia body contouring in Dubai offers a non-invasive, advanced solution to reshape the body, reduce stubborn fat, and improve skin firmness without surgery or downtime.'
        },
      leftCards: [
  {
    id: 1,
    title: 'What Is Eximia Body Contouring?',
    description:
      'Eximia Body Contouring in Dubai is a non-surgical treatment that combines radiofrequency, ultrasound, vacuum massage, and mechanical stimulation. This advanced technology helps break down fat cells, tighten skin, improve circulation, and smooth cellulite.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description: 'Eximia Body Contouring is suitable for individuals with:',
    listItems: [
      'Localized stubborn fat',
      'Loose or sagging skin',
      'Cellulite concerns',
      'Post-weight loss body laxity',
      'Body shaping and toning goals'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description:
      'Each session typically lasts 30–60 minutes, depending on the treatment area. Results improve gradually over multiple sessions.'
  },
  {
    id: 4,
    title: 'Why Patients Choose Eximia Body Contouring in Dubai',
    description:
      'Patients choose Rama Care Polyclinic for Eximia Body Contouring in Dubai because we combine medical expertise, advanced technology, and honest treatment planning focused on safe, realistic body transformation.'
  }
],
     rootCauses: [
  {
    id: 1,
    title: 'Localized Fat Pockets',
    description:
      'Fat accumulation in areas like the abdomen, thighs, arms, and flanks that do not respond to workouts or dieting.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Cellulite Appearance',
    description:
      'Poor circulation and fibrous tissue cause uneven, dimpled skin texture.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 3,
    title: 'Loss of Skin Firmness',
    description:
      'Reduced collagen and elastin lead to sagging skin and a lack of tone.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 4,
    title: 'Poor Blood & Lymphatic Circulation',
    description:
      'Toxin buildup and fluid retention slow fat metabolism and body sculpting results.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 5,
    title: 'Post-Weight Loss Body Irregularities',
    description:
      'Uneven contours after weight loss affect the overall body shape.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  }
],
       quickFacts: [
  { label: 'Treatment Type', value: 'Non-surgical body contouring' },
  { label: 'Anesthesia', value: 'Not required' },
  { label: 'Downtime', value: 'None' },
  { label: 'Results', value: 'Gradual and natural-looking' }
],
      approachCards: [
  {
    id: 1,
    title: 'Targeted Fat Reduction',
    description:
      'Advanced radiofrequency and ultrasound technology help break down localized fat deposits and reshape body contours safely and effectively.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 2,
    title: 'Cellulite Reduction & Skin Smoothing',
    description:
      'Improves blood circulation and connective tissue structure to visibly reduce cellulite and uneven skin texture.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 3,
    title: 'Skin Tightening & Firming',
    description:
      'Stimulates natural collagen and elastin production, resulting in tighter, more toned, and smoother skin.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 4,
    title: 'Lymphatic Drainage & Detoxification',
    description:
      'Enhances lymphatic flow to reduce fluid retention, eliminate toxins, and support long-term body sculpting results.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 5,
    title: 'Non-Invasive & Comfortable Treatment',
    description:
      'No surgery, no anesthesia, and no downtime—sessions are painless, safe, and suitable for busy lifestyles.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 6,
    title: 'Personalized Treatment Plans',
    description:
      'Customized protocols based on body type, problem areas, and individual body goals under expert medical supervision.',
    hasLearnMore: false,
    expandedContent: null
  },
  {
    id: 7,
    title: 'Result:',
    description:
      'A slimmer, sculpted, and firmer body with reduced fat, smoother skin, and improved confidence through Eximia body contouring in Dubai.',
    hasLearnMore: false,
    expandedContent: null
  }
]
      },
    healingJourney: {
  title: 'Your Body Contouring Journey: Step by Step',
  description: 'A structured, doctor-guided approach ensures safe and effective results.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Initial Consultation & Body Assessment',
      duration: null,
      description: null,
      keyActivities: [
        'Body analysis and measurements',
        'Identification of problem areas',
        'Medical history review',
        'Personalized Eximia treatment plan'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Preparation Phase',
      duration: null,
      description: null,
      keyActivities: [
        'Skin cleansing and preparation',
        'Comfort and safety setup',
        'Treatment area marking'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Active Eximia Body Contouring Session',
      duration: null,
      description: null,
      keyActivities: [
        'Controlled Eximia energy application',
        'Fat stimulation and skin tightening',
        'Continuous medical monitoring'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Post-Treatment Care & Maintenance',
      duration: null,
      description: null,
      keyActivities: [
        'Hydration and lifestyle guidance',
        'Follow-up assessments',
        'Maintenance sessions if required'
      ],
      side: 'left'
    },
    {
      id: 5,
      number: '05',
      title: 'Result',
      duration: null,
      description:
        'Gradual body reshaping, improved firmness, smoother skin, and long-lasting contour enhancement.',
      keyActivities: [],
      side: 'right'
    }
  ]
},
      benefits: {
        title: 'Clinically-Observed Benefits',
        description: 'Evidence-based results from our body shaping treatments.',
        benefits: [
          {
            id: 1,
            title: ' Non-surgical fat reduction',
            percentage: 30,
            description: null
          },
          {
            id: 2,
            title: ' Improved skin tightness',
            percentage: 90,
            description: null
          },
          {
            id: 3,
            title: ' Reduced cellulite appearance',
            percentage: 85,
            description: null
          },
          {
            id: 4,
            title: 'Better circulation',
            percentage: 90,
            description: null
          },
          {
            id: 5,
            title: ' Enhanced body confidence',
            percentage: 90,
            description: null
          }
        ],
        comparisonTitle: 'Eximia Body Contouring vs. Traditional Methods',
        comparisonDescription: 'Compare our non-invasive body shaping approach with surgical body contouring methods',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'Eximia Body Contouring',
          traditional: 'Diet & Exercis'
        },
        comparisonData: [
           {
    feature: 'Targeted Fat Reduction',
    ayurvedic: 'Yes',
    conventional: 'Limited'
  },
  {
    feature: 'Skin Tightening',
    ayurvedic: 'Yes',
    conventional: 'Minimal'
  },
  {
    feature: 'Cellulite Improvement',
    ayurvedic: 'Yes',
    conventional: 'No'
  },
  {
    feature: 'Downtime',
    ayurvedic: 'None',
    conventional: 'Not applicable'
  },
  {
    feature: 'Medical Supervision',
    ayurvedic: 'Yes',
    conventional: 'No'
  }
        ]
      },
    pricing: {
  title: 'Transparent Pricing & Eximia Body Contouring Packages',
  description:
    'Our Eximia body contouring packages are designed to reduce stubborn fat, improve skin tone, and enhance body shape without surgery. Each package is customized based on your body goals, target areas, and treatment needs to deliver visible and long-lasting results.',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For Mild Fat Reduction & Body Toning',
      duration: '6 sessions over 3 months',
      features: [
        'Initial body assessment and consultation',
        '6 Eximia body contouring sessions',
        'Targeted treatment for localized fat deposits',
        'Skin tightening and texture improvement support',
        'Post-treatment care and lifestyle guidance'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For Moderate Fat Reduction & Body Sculpting',
      duration: '12 sessions over 4 months',
      features: [
        'Comprehensive body analysis and treatment planning',
        '12 Eximia body contouring sessions',
        'Multi-technology approach for fat reduction and muscle toning',
        'Pre- and post-treatment guidance',
        'Monthly progress monitoring and adjustments'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete Body Transformation Program',
      duration: '24 sessions over 6 months',
      features: [
        'All the benefits of the Advanced Package',
        'Advanced Eximia body contouring for multiple body areas',
        'Enhanced skin tightening and cellulite reduction protocols',
        'Personalized diet, fitness, and lifestyle recommendations',
        'Quarterly body reviews and long-term body wellness support'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
    faq: {
  title: 'Frequently Asked Questions – Eximia Body Contouring in Dubai',
  description: null,
  faqs: [
    {
      id: 1,
      question: 'What is Eximia Body Contouring in Dubai?',
      answer:
        'Eximia Body Contouring in Dubai is a non-surgical treatment that uses radiofrequency, ultrasound, and vacuum therapy to reduce fat, tighten skin, and improve body shape safely.'
    },
    {
      id: 2,
      question: 'Is Eximia Body Contouring safe?',
      answer:
        'Yes, Eximia Body Contouring is safe when performed under medical supervision using clinically approved technology, as done at Rama Care Polyclinic following strict DHA safety protocols.'
    },
    {
      id: 3,
      question: 'Does Eximia Body Contouring help reduce fat?',
      answer:
        'Eximia Body Contouring helps break down stubborn fat cells and improves lymphatic drainage, making it effective for localized fat reduction that does not respond to diet or exercise.'
    },
    {
      id: 4,
      question: 'Can Eximia Body Contouring tighten loose skin?',
      answer:
        'Yes, Eximia stimulates collagen production, which helps tighten loose or sagging skin and improves overall firmness with gradual, natural-looking results over multiple sessions.'
    },
    {
      id: 5,
      question: 'Is Eximia Body Contouring painful?',
      answer:
        'Eximia Body Contouring is generally painless. Most patients experience a warm, massaging sensation during treatment, making it a comfortable alternative to surgical body contouring procedures.'
    },
    {
      id: 6,
      question: 'How many Eximia Body Contouring sessions are required?',
      answer:
        'Most patients require 6–10 sessions, depending on body goals, treatment area, and individual response. Results improve progressively with consistent sessions and healthy lifestyle habits.'
    },
    {
      id: 7,
      question: 'How long does one Eximia session take?',
      answer:
        'Each Eximia Body Contouring session usually lasts between 30 and 60 minutes, depending on the size and number of areas being treated during the appointment.'
    },
    {
      id: 8,
      question: 'Is there any downtime after Eximia Body Contouring?',
      answer:
        'No downtime is required after Eximia Body Contouring. Patients can return to daily activities immediately, making it ideal for busy lifestyles in Dubai.'
    },
    {
      id: 9,
      question: 'Which areas can be treated with Eximia Body Contouring?',
      answer:
        'Eximia Body Contouring can treat the abdomen, thighs, arms, hips, flanks, back, and other areas with stubborn fat or skin laxity.'
    },
    {
      id: 10,
      question: 'When will I see results from Eximia Body Contouring?',
      answer:
        'Some improvement may be noticed after a few sessions, while visible body contouring results develop gradually over several weeks as fat reduction and skin tightening progress.'
    },
    {
      id: 11,
      question: 'Is Eximia Body Contouring suitable for everyone?',
      answer:
        'Eximia is suitable for most adults with localized fat or mild skin laxity. A medical consultation is necessary to ensure it is appropriate for your body condition.'
    },
    {
      id: 12,
      question: 'Can Eximia Body Contouring replace weight loss?',
      answer:
        'No, Eximia Body Contouring is not a weight-loss treatment. It is designed to reshape and tone specific areas, complementing a healthy diet and exercise routine.'
    },
    {
      id: 13,
      question: 'How long do Eximia Body Contouring results last?',
      answer:
        'Results can be long-lasting when combined with a balanced lifestyle. Maintenance sessions may be recommended to preserve skin firmness and body contour improvements.'
    },
    {
      id: 14,
      question: 'What is the cost of Eximia Body Contouring in Dubai?',
      answer:
        'Eximia Body Contouring cost in Dubai varies based on treatment area and number of sessions. Rama Care Polyclinic offers transparent pricing with customized treatment packages.'
    },
    {
      id: 15,
      question: 'Why choose Rama Care Polyclinic for Eximia Body Contouring in Dubai?',
      answer:
        'Rama Care Polyclinic offers doctor-supervised Eximia Body Contouring in Dubai using advanced technology, personalized care, and a strong focus on safety and natural results.'
    }
  ],
        resources: [
          {
            id: 1,
            text: 'Eximia Body Contouring',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/eximia-body-contouring-dubai'
          },
          {
            id: 2,
            text: 'IV Drip',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/iv-drip-dubai'
          },
          {
            id: 3,
            text: 'Body Shaping',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/body-shaping-dubai'
          },
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
        subtitle: 'Verified testimonials from patients who achieved their body shaping goals',
        stats: [
          {
            id: 1,
            number: '4.8/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.8
          },
          {
            id: 2,
            number: '600+',
            label1: 'Patients Treated',
            label2: 'Success Stories',
            target: 600
          },
          {
            id: 3,
            number: '94%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 94
          },
          {
            id: 4,
            number: '85%',
            label1: 'Success Rate',
            label2: 'Fat Reduction',
            target: 85
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment Options',
        insuranceTitle: 'Insurance & Reimbursement',
        paymentOptions: [
          'Cash, Credit/Debit Cards accepted',
          'Flexible payment plans available',
          '0% interest installments (conditions apply)'
        ],
        insuranceOptions: [
          'Accepted by select insurance providers',
          'Detailed invoices provided for claims',
          'Assistance with documentation'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book Eximia Body Contouring in Dubai Today',
        description: 'Redefine your body shape safely and naturally with Eximia Body Contouring in Dubai at Rama Care Polyclinic, where medical expertise meets advanced body sculpting care.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '12+ Years Combined'
          },
          {
            title: '600+ Patients',
            description: 'Successfully Treated'
          },
          {
            title: '4.8/5 Rating',
            description: 'Patient Reviews'
          }
        ]
      }
    },

     'aesthetic-dermatology-dubai-body-shaping-iv-drip': {
      hero: {
        subtitle: 'Restore Energy, Hydration & Wellness with Medical Care',
        description: 'Fatigue, dehydration, low immunity, and nutrient deficiencies can impact your daily life. At ramacarepolyclinic, we offer IV Drip Therapy in Dubai to replenish essential nutrients quickly and safely. Our IV Drip Dubai Therapy is personalized to support hydration, immunity, energy, and overall wellness—without downtime.',
        rating: '4.9/5 Rating (400+ Reviews)',
        stats: [
          {
            id: 1,
            number: '93%',
            label: 'Patient Satisfaction'
          },
          {
            id: 2,
            number: '4500+',
            label: 'Body Shaping Sessions Performed'
          },
          {
            id: 3,
            number: '15+',
            label: 'Years of Clinical Experience'
          }
        ],
        ctaButtons: {
          primary: {
            text: 'Book Free Body Shaping Consultation',
             icon: 'calendar',
                link: '#book-now'
              },
              secondary: {
                text: 'WhatsApp',
                phone: '+971 56 659 7878',
                icon: 'whatsapp'
          }
        },
        features: [
          'DHA-Licensed Multispecialty Polyclinic',
          'Doctor-Supervised IV Treatments',
          'Safe, Sterile & Clinically Approved Protocols',
        ],
        image: {
          src: '/images/iv-drip.jpg',
          alt: 'IV drip in Dubai administered by medical professionals to support hydration, immunity, and overall wellness.'
        },
        medicalNotice: {
          text: 'Safety & Medical Disclaimer: Results may vary depending on individual health conditions and lifestyle. All IV Drip Dubai Therapy at ramacarepolyclinic follows DHA-approved medical and safety guidelines.',
          show: true
        }
      },
      doctors: {
        badge: 'Medical Expertise',
        title: 'Meet Our Body Shaping Specialists in Dubai',
        description: 'DHA-licensed specialists with extensive experience in non-invasive body contouring and shaping technologies.',
        doctors: [
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
        ]
      },
      certifications: {
        title: 'Certifications & Accreditations',
        certifications: [
          {
            id: 1,
            title: 'DHA Licensed',
            subtitle: 'Dubai Health Authority'
          },
          {
            id: 2,
            title: 'FDA-Approved Equipment',
            subtitle: 'Medical Grade Technologies'
          },
          {
            id: 3,
            title: 'ISO 9001:2015',
            subtitle: 'Quality Standards'
          },
          {
            id: 4,
            title: 'Certified Body Contouring Specialists',
            subtitle: null
          }
        ]
      },
      overview: {
        title: 'Understanding IV Drip Therapy in Dubai',
        problemIntro: {
          title: 'Why Your Body Feels Depleted',
          description: 'Busy schedules, stress, inadequate nutrition, and dehydration can reduce nutrient levels in the body. Oral supplements may not absorb efficiently, delaying recovery and wellness.'
        },
        solutionIntro: {
          title: 'How IV Drip Dubai Therapy Helps',
          description: 'At ramacarepolyclinic, IV Drip Therapy focuses on restoring balance from within by delivering essential nutrients directly to your cells.'
        },
       leftCards: [
  {
    id: 1,
    title: 'What Is IV Drip Therapy?',
    description: 'IV Drip Therapy in Dubai is a medical wellness treatment that delivers vitamins, minerals, antioxidants, and fluids directly into the bloodstream. This ensures faster absorption and more effective results compared to oral supplements.'
  },
  {
    id: 2,
    title: 'Who Is It For?',
    description: 'IV Drip Dubai Therapy is suitable for individuals experiencing:',
    listItems: [
      'Dehydration or fatigue',
      'Low immunity or frequent illness',
      'Stress and burnout',
      'Travel exhaustion or jet lag',
      'Dull skin or low energy levels'
    ]
  },
  {
    id: 3,
    title: 'Duration',
    description: 'Each IV Drip session usually takes 30–45 minutes. Many patients feel refreshed immediately, with improved energy and hydration after the session.'
  },
  {
    id: 4,
    title: 'Who Chooses IV Drip Therapy in Dubai?',
    description: 'Why Patients Choose IV Drip Therapy in Dubai at ramacarepolyclinic:',
    listItems: [
      'DHA-licensed doctors and trained medical staff',
      'Personalized IV Drip Dubai Therapy plans',
      'High safety and hygiene standards',
      'Comfortable, relaxing treatment experience',
      'Focus on long-term wellness and prevention'
    ]
  }
],
       rootCauses: [
  {
    id: 1,
    title: 'Dehydration',
    description: 'Rapid fluid replacement improves hydration and cellular function.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 2,
    title: 'Low Energy & Fatigue',
    description: 'Nutrient infusion supports metabolism and energy production.',
    severity: 'High',
    severityColor: 'bg-[#FEE2E2] text-[#991B1B]'
  },
  {
    id: 3,
    title: 'Weak Immunity',
    description: 'Vitamins and antioxidants help strengthen the immune response.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 4,
    title: 'Stress & Recovery',
    description: 'Supports physical recovery and reduces oxidative stress.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  },
  {
    id: 5,
    title: 'Skin Dullness',
    description: 'Improves circulation and nutrient delivery for healthier skin.',
    severity: 'Medium',
    severityColor: 'bg-[#FED7AA] text-[#9A3412]'
  }
],
        quickFacts: [
          { label: 'Treatment Type', value: 'Non-surgical & non-invasive' },
          { label: 'Anesthesia', value: 'Not required' },
          { label: 'Downtime', value: 'Minimal to none' },
          { label: 'Sessions Required', value: '4–8 (varies by area)' },
          { label: 'Target Areas', value: 'Abdomen, thighs, arms, flanks, hips, back, chin' },
          { label: 'Safety', value: 'DHA-approved & FDA-certified' },
        ],
        approachCards: [
          {
            id: 1,
            title: 'Result:',
            description: '  Improved hydration, better energy levels, enhanced immunity, and overall body rejuvenation—safely and effectively.',
            hasLearnMore: false,
            expandedContent: null
           },
        ]
      },
    healingJourney: {
  title: 'Your Personalized Wellness & Rehydration Journey',
  description:
    'Our IV drip in Dubai treatment follows a safe, structured, and results-driven approach to restore hydration, boost immunity, and improve overall wellness. Each stage is carefully managed by experienced medical professionals to ensure comfort, effectiveness, and long-lasting benefits.',
  steps: [
    {
      id: 1,
      number: '01',
      title: 'Week 1: Initial Consultation & Health Assessment (30–60 Minutes)',
      duration: 'Week 1',
      description:
        'Your journey begins with a detailed consultation to understand your health status and select the most suitable IV drip in Dubai for your needs.',
      keyActivities: [
        'Medical history review and current health assessment',
        'Discussion of wellness goals such as hydration, immunity, energy boost, or detoxification',
        'Identification of nutritional deficiencies',
        'Creation of a personalized IV drip treatment plan in Dubai'
      ],
      side: 'right'
    },
    {
      id: 2,
      number: '02',
      title: 'Weeks 1–2: Preparation Phase',
      duration: 'Weeks 1–2',
      description:
        'Proper preparation helps your body respond optimally to IV drip treatment in Dubai.',
      keyActivities: [
        'Guidance on hydration before and after therapy',
        'Recommendations on diet and supplement intake',
        'Temporary avoidance of alcohol or certain medications (if required)',
        'Pre-treatment safety checks and vital signs assessment'
      ],
      side: 'left'
    },
    {
      id: 3,
      number: '03',
      title: 'Weeks 3–12: Active IV Drip Sessions',
      duration: 'Weeks 3–12',
      description:
        'During this phase, tailored IV drip sessions in Dubai deliver essential vitamins, minerals, and fluids directly into your bloodstream for maximum absorption.',
      keyActivities: [
        '1–3 sessions per week, depending on health goals',
        'Administration of medical-grade IV fluids with vitamins, antioxidants, or electrolytes',
        'Monitoring for comfort and response during the session',
        'Adjustment of therapy based on individual progress'
      ],
      side: 'right'
    },
    {
      id: 4,
      number: '04',
      title: 'Months 4–12: Maintenance & Follow-Up Care',
      duration: 'Months 4–12',
      description:
        'Maintenance sessions help sustain the benefits achieved through IV drip treatment in Dubai.',
      keyActivities: [
        'Periodic follow-up consultations',
        'Customized maintenance IV drip sessions if recommended',
        'Ongoing wellness guidance for hydration, energy, and immunity',
        'Professional monitoring of overall health'
      ],
      side: 'left'
    }
  ]
},
      benefits: {
        title: 'Clinically-Observed Benefits',
        description: 'Evidence-based results from our body shaping treatments.',
        benefits: [
          {
            id: 1,
            title: ' Improved hydration',
            percentage: 30,
            description: null
          },
          {
            id: 2,
            title: ' Increased energy levels',
            percentage: 90,
            description: null
          },
          {
            id: 3,
            title: 'Stronger immunity',
            percentage: 85,
            description: null
          },
          {
            id: 4,
            title: 'Better recovery from stress',
            percentage: 90,
            description: null
          },
          {
            id: 5,
            title: ' Enhanced overall well-being',
            percentage: 90,
            description: null
          }
        ],
        comparisonTitle: 'IV Drip Therapy vs Oral Supplements',
        comparisonDescription: 'Compare our non-invasive body shaping approach with surgical body contouring methods',
        comparisonHeaders: {
          feature: 'Aspect',
          ourTreatment: 'IV Drip Therapy',
          traditional: 'Oral Supplements'
        },
        comparisonData: [
          {
    feature: 'Absorption',
    ayurvedic: 'Direct & immediate',
    conventional: 'Limited by digestion'
  },
  {
    feature: 'Results',
    ayurvedic: 'Faster and effective',
    conventional: 'Slower'
  },
  {
    feature: 'Customization',
    ayurvedic: 'Doctor-formulated',
    conventional: 'Standard doses'
  },
  {
    feature: 'Medical Supervision',
    ayurvedic: 'Yes',
    conventional: 'No'
  }
        ]
      },
     pricing: {
  title: 'Transparent Pricing & IV Drip Therapy Packages',
  description: 'Customized packages for IV Drip Therapy in Dubai, based on your nutrient needs, health condition, and wellness goals',
  packages: [
    {
      id: 1,
      title: 'Essential Package',
      subtitle: 'For hydration & basic wellness support',
      duration: '1–3 sessions over 1–2 weeks',
      features: [
        'Initial doctor consultation and health screening',
        'Hydration-focused IV Drip Therapy in Dubai',
        'Essential vitamins and electrolytes infusion',
        'Medical supervision during treatment',
        'Basic aftercare and wellness guidance'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    },
    {
      id: 2,
      title: 'Advanced Package',
      subtitle: 'For energy, immunity & recovery',
      duration: '4–6 sessions over 1–2 months',
      features: [
        'Detailed medical assessment',
        'Customized IV Drip Therapy in Dubai formulations',
        'Immunity and energy-boosting nutrients',
        'Doctor-monitored IV sessions',
        'Post-treatment care and progress evaluation'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium Package',
      subtitle: 'Complete wellness & revitalization program',
      duration: '8–10 sessions over 2–3 months',
      features: [
        'Comprehensive doctor-led health evaluation',
        'Advanced IV Drip Therapy in Dubai blends',
        'Skin, immunity, and recovery-focused drips',
        'Personalized wellness and lifestyle guidance',
        'Ongoing medical supervision and follow-ups'
      ],
      pricing: 'Pricing starts from AED XXX',
      isPopular: false
    }
  ]
},
     faq: {
  title: 'Frequently Asked Questions – IV Drip Therapy in Dubai',
  description: null,
  faqs: [
    {
      id: 1,
      question: 'What is IV Drip Therapy in Dubai?',
      answer: 'IV Drip Therapy in Dubai delivers vitamins, minerals, and fluids directly into the bloodstream, ensuring faster absorption, improved hydration, boosted immunity, and overall wellness under medical supervision.'
    },
    {
      id: 2,
      question: 'Is IV Drip Therapy safe?',
      answer: 'Yes, IV Drip Therapy is safe when administered by qualified doctors. At ramacarepolyclinic, all treatments follow DHA-approved protocols and strict hygiene standards.'
    },
    {
      id: 3,
      question: 'Who can benefit from IV Drip Dubai Therapy?',
      answer: 'IV Drip Dubai Therapy benefits adults with fatigue, dehydration, low immunity, stress, travel exhaustion, or nutrient deficiencies, after a proper medical evaluation.'
    },
    {
      id: 4,
      question: 'How long does an IV Drip session take?',
      answer: 'An IV Drip session usually lasts 30–45 minutes. Patients can relax comfortably during treatment and resume normal activities immediately afterward.'
    },
    {
      id: 5,
      question: 'Are there any side effects of IV Drip Therapy?',
      answer: 'Side effects are minimal and rare, such as mild discomfort at the injection site. Serious reactions are uncommon when therapy is doctor-supervised.'
    },
    {
      id: 6,
      question: 'How quickly will I feel results after IV Drip Therapy?',
      answer: 'Many patients feel refreshed and energized immediately after IV Drip Therapy, while others notice gradual improvement in energy, hydration, and wellness over days.'
    },
    {
      id: 7,
      question: 'How many IV Drip sessions are required?',
      answer: 'The number of IV Drip sessions depends on your health goals, nutrient levels, and medical condition. Your doctor will recommend a personalized plan.'
    },
    {
      id: 8,
      question: 'Is IV Drip Therapy better than oral supplements?',
      answer: 'Yes, IV Drip Therapy bypasses digestion, allowing nearly 100% nutrient absorption, making it more effective than oral supplements for faster results.'
    },
    {
      id: 9,
      question: 'Can IV Drip Therapy boost immunity?',
      answer: 'IV Drip Therapy supports immunity by delivering vitamins and antioxidants directly into the bloodstream, helping the body fight stress, fatigue, and illness.'
    },
    {
      id: 10,
      question: 'Is IV Drip Dubai Therapy suitable for skin health?',
      answer: 'Yes, IV Drip Dubai Therapy can improve skin hydration, glow, and overall health by nourishing skin cells from within using essential nutrients.'
    },
    {
      id: 11,
      question: 'Can I return to work after IV Drip Therapy?',
      answer: 'Yes, there is no downtime. Most patients return to work or daily activities immediately after IV Drip Therapy without restrictions.'
    },
    {
      id: 12,
      question: 'Is IV Drip Therapy suitable for athletes or active individuals?',
      answer: 'IV Drip Therapy helps athletes and active individuals with hydration, muscle recovery, energy support, and faster post-workout recovery.'
    },
    {
      id: 13,
      question: 'How is IV Drip Therapy customized at ramacarepolyclinic?',
      answer: 'At ramacarepolyclinic, IV Drip Therapy is customized based on medical history, health goals, nutrient needs, and doctor assessment.'
    },
    {
      id: 14,
      question: 'Does IV Drip Therapy help with stress and fatigue?',
      answer: 'Yes, IV Drip Therapy helps reduce stress and fatigue by replenishing essential nutrients that support energy production and nervous system balance.'
    },
    {
      id: 15,
      question: 'How do I book IV Drip Therapy in Dubai?',
      answer: 'You can book IV Drip Therapy in Dubai by scheduling a consultation at ramacarepolyclinic, where doctors assess your needs and create a personalized plan.'
    }
  ],
        resources: [
          {
            id: 1,
            text: 'Eximia Body Contouring',
            bgColor: 'bg-[#ECFDF5]',
            link: '/services/eximia-body-contouring-dubai'
          },
          {
            id: 2,
            text: 'IV Drip',
            bgColor: 'bg-[#EFF6FF]',
            link: '/services/iv-drip-dubai'
          },
          {
            id: 3,
            text: 'Body Shaping',
            bgColor: 'bg-[#FEF2F2]',
            link: '/services/body-shaping-dubai'
          },
        ]
      },
      testimonials: {
        title: 'Real Success Stories from Dubai Patients',
        subtitle: 'Verified testimonials from patients who achieved their body shaping goals',
        stats: [
          {
            id: 1,
            number: '4.8/5',
            label1: 'Average Rating',
            label2: 'Patient Reviews',
            target: 4.8
          },
          {
            id: 2,
            number: '600+',
            label1: 'Patients Treated',
            label2: 'Success Stories',
            target: 600
          },
          {
            id: 3,
            number: '94%',
            label1: 'Satisfaction Rate',
            label2: 'Happy Patients',
            target: 94
          },
          {
            id: 4,
            number: '85%',
            label1: 'Success Rate',
            label2: 'Fat Reduction',
            target: 85
          }
        ]
      },
      paymentInsurance: {
        paymentTitle: 'Payment Options',
        insuranceTitle: 'Insurance & Reimbursement',
        paymentOptions: [
          'Cash, Credit/Debit Cards accepted',
          'Flexible payment plans available',
          '0% interest installments (conditions apply)'
        ],
        insuranceOptions: [
          'Accepted by select insurance providers',
          'Detailed invoices provided for claims',
          'Assistance with documentation'
        ]
      },
      bookConsultation: {
        badge: 'Start Your Journey',
        title: 'Book IV Drip Therapy in Dubai Today',
        description: 'Rehydrate, recharge, and restore your body with IV Drip Therapy in Dubai at ramacarepolyclinic, where medical expertise meets personalized wellness care.',
        getInTouchTitle: 'Get In Touch',
        requestAppointmentTitle: 'Request Appointment',
        submitButtonText: 'Confirm Free Consultation',
         contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
        clinicHours: {
          weekdays: 'Saturday - Thursday:',
          weekdaysTime: '9:00 AM - 9:00 PM',
          friday: 'Friday:',
          fridayTime: '2:00 PM - 9:00 PM'
        },
        statCards: [
          {
            title: 'DHA Licensed',
            description: 'Certified Healthcare Facility'
          },
          {
            title: 'Experienced Team',
            description: '12+ Years Combined'
          },
          {
            title: '600+ Patients',
            description: 'Successfully Treated'
          },
          {
            title: '4.8/5 Rating',
            description: 'Patient Reviews'
          }
        ]
      }
    },
  

  // Add your sub-subcategory entries here
  // Format: 'category-subcategory-subsubcategory': { ... }
  
  // Example structure (DO NOT UNCOMMENT - just for reference):
  /*
  'aesthetic-dermatology-dubai-skin-treatment-skin-boosters': {
    hero: { ... },
    doctors: { ... },
    // ... all other sections
  },
  */
};
