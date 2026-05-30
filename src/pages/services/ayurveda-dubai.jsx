import Layout from "../../../components/Layout";
import Head from "next/head";
import HeroSection from "../../../components/HeroSection";
import WhyChooseUsSection from "../../../components/WhyChooseUsSection";
import AboutAyurvedaSection from "../../../components/AboutAyurvedaSection";
import TreatmentSection from "../../../components/TreatmentSection";
import ProgramsSection from "../../../components/ProgramsSection";
import ExpertsSection from "../../../components/ExpertsSection";
import PatientTestimonials from "../../../components/PatientTestimonials";
import WhyAyurvedaDubaiSection from "../../../components/WhyAyurvedaDubaiSection";
import FAQSection from "../../../components/FAQSection";
// import OurFacilitySection from "../../../components/OurFacilitySection";
import BeginYourHealingJourneySection from "../../../components/BeginYourHealingJourneySection";
import SEOContentSection from "../../../components/SEOContentSection";
import { getCategoryContent } from "../../data/categoryContent";

export default function AyurvedaCategoryPage() {
  const content = getCategoryContent('ayurveda');
  const ayurvedaSEOContent = [
    "Experience the profound healing power of traditional Ayurveda in Dubai at RamaCare Polyclinic. Our Ayurveda department is dedicated to restoring balance and harmony to your mind, body, and spirit through authentic therapies and personalized wellness plans. Led by experienced Ayurvedic doctors, we provide a holistic alternative for those seeking natural health solutions in Jumeirah 1.",
    {
      type: "heading",
      text: "Authentic Ayurvedic Therapies in Jumeirah 1"
    },
    "Our clinic offers a wide range of classical Ayurvedic treatments, each tailored to your unique body constitution (Dosha). We focus on identifying the root cause of health issues rather than just managing symptoms.",
    {
      type: "list",
      items: [
        "Panchakarma: Deep detoxification and rejuvenation programs.",
        "Abhyanga: Therapeutic herbal oil massages for relaxation and pain relief.",
        "Shirodhara: Specialized head therapy for stress, sleep, and mental clarity.",
        "Ayurvedic Diet & Lifestyle: Personalized nutrition plans based on your body type.",
        "Chronic Condition Management: Natural support for digestive issues, joint pain, and more."
      ]
    },
    "At RamaCare, we blend the wisdom of ancient traditions with modern medical standards to ensure a safe and effective healing journey. Whether you are looking to detoxify, manage stress, or address a specific health concern, our team is here to guide you toward lasting wellness. Discover authentic Ayurveda in Dubai with us."
  ];

  return (
    <Layout>
      <Head>
  <title>Ayurveda Treatment in Dubai | Best Ayurvedic Clinic & Care</title>
  <meta name="description" content="Restore health naturally with Ayurveda treatment in Dubai. Personalized herbal therapies, Panchakarma, and holistic care by certified Ayurvedic doctors for wellness." />
  <meta name="keywords" content="Ayurveda treatment Dubai, Ayurvedic clinic Dubai, Ayurvedic doctor in Dubai, Panchakarma treatment in Dubai, Herbal therapy Dubai, Holistic health Dubai, Ayurvedic massage Dubai, Traditional Ayurveda Dubai, Ayurveda wellness Dubai, Dosha balancing treatment, Ayurveda Hospital Dubai, Natural healing Dubai" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#medicalclinic",
  "name": "Ayurveda Treatment in Dubai",
  "url": "https://ramacarepolyclinic.ae/services/ayurveda-dubai",
  "image": "https://ramacarepolyclinic.ae/images/ayurveda.png",
  "description": "Premium Ayurveda treatment and Panchakarma in Jumeirah 1, Dubai. Authentic detox therapies, chronic pain relief, stress management, digestive wellness, and holistic healing by DHA-licensed Ayurvedic practitioners.",
  "medicalSpecialty": "Ayurvedic Medicine",
  "parentOrganization": {
    "@type": "MedicalOrganization",
    "@id": "https://ramacarepolyclinic.ae/#organization",
    "name": "RamaCare Polyclinic"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jumeirah 1, Ground Floor, Jumeirah Terrace Building",
    "addressLocality": "Dubai",
    "postalCode": "393558",
    "addressCountry": "AE"
  },
  "telephone": "+971566597878",
  "areaServed": {
    "@type": "City",
    "name": "Dubai"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Ayurveda Treatments",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "MedicalProcedure",
          "name": "Panchakarma Treatment"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "MedicalProcedure",
          "name": "Chronic Pain Relief Therapy"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "MedicalProcedure",
          "name": "Stress & Sleep Balance Therapy"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "MedicalProcedure",
          "name": "Women's Wellness Program"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "MedicalProcedure",
          "name": "Digestive & Weight Balance Program"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "MedicalProcedure",
          "name": "Ayurvedic Hairfall Treatment"
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "MedicalProcedure",
          "name": "Skin Diseases Treatment"
        }
      }
    ]
  }
}`
  }}
/>
</Head>

      <HeroSection content={content?.hero} />
      <WhyChooseUsSection content={content?.whyChooseUs} />
      <AboutAyurvedaSection content={content?.about} />
      <TreatmentSection 
        category="ayurveda" 
        content={{
          ...content?.treatments,
          consultationHeading: content?.treatments?.consultationCTA?.heading,
          consultationSubtext: content?.treatments?.consultationCTA?.subtext,
          consultationButtonText: content?.treatments?.consultationCTA?.buttonText,
          consultationBgColor: content?.treatments?.consultationCTA?.backgroundColor,
          consultationButtonColor: content?.treatments?.consultationCTA?.buttonColor
        }} 
      />
      <ProgramsSection content={content?.programs} />
      <ExpertsSection content={content?.experts} />
      <PatientTestimonials content={content?.successStories} />
      <WhyAyurvedaDubaiSection content={content?.whyDubai} />
      <FAQSection content={content?.faq} />
       {/* <OurFacilitySection content={content?.facility} /> */}
      <BeginYourHealingJourneySection content={content?.booking} />
      <SEOContentSection title="Authentic Ayurveda Treatment in Dubai" content={ayurvedaSEOContent} />
    </Layout>
  );
}

