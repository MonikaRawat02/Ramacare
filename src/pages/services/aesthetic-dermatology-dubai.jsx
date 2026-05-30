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

export default function AestheticDermatologyCategoryPage() {
  const content = getCategoryContent('aesthetic-dermatology');
  const dermatologySEOContent = [
    "RamaCare Polyclinic is your destination for advanced aesthetic dermatology in Dubai. Our clinic specializes in helping patients achieve healthy, radiant skin through a combination of medical expertise and innovative cosmetic treatments. Our DHA-licensed dermatologists are experts in managing a wide range of skin concerns, from acne and pigmentation to anti-aging and rejuvenation.",
    {
      type: "heading",
      text: "Advanced Skin & Hair Treatments in Jumeirah 1"
    },
    "We offer a comprehensive suite of treatments designed to enhance your natural beauty and boost your confidence. Each procedure is performed in our modern facility using the latest technology and safety standards.",
    {
      type: "list",
      items: [
        "Laser Hair Removal: Long-lasting results for smooth, hair-free skin.",
        "Facial Rejuvenation: Personalized facials and peels for a glowing complexion.",
        "PRP Therapy: Using your body's natural healing power for skin and hair restoration.",
        "Injectables & Fillers: Expertly administered treatments for youthful contours.",
        "Medical Dermatology: Professional management of skin conditions like eczema and psoriasis."
      ]
    },
    "At RamaCare, we understand that every skin type is different. That's why we start every journey with a detailed skin analysis and consultation. Our team will create a personalized care plan that addresses your specific needs and ensures safe, effective results. Experience the best in dermatology care in Dubai at RamaCare Polyclinic."
  ];

  return (
    <Layout>
      <Head>
  <title>Skin Treatment Dubai – Clear & Healthy Skin</title>
  <meta name="description" content="RamaCare offers advanced skin treatment in Dubai with expert dermatologists, safe therapies, and personalized care for acne, pigmentation, anti-aging, and glowing skin." />
  <meta name="keywords" content="Skin Treatment Dubai, Clear skin treatment Dubai, Healthy skin Dubai, Dermatology clinic Dubai, Acne treatment Dubai, Anti-aging skin care Dubai, Skin rejuvenation Dubai, Laser skin treatment Dubai, Pigmentation treatment Dubai, Medical skin clinic Dubai, Personalized skin care Dubai, DHA licensed dermatology clinic" />
   
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/#medicalclinic",
  "name": "Aesthetic Dermatology in Dubai",
  "url": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai",
  "description": "Advanced aesthetic dermatology services in Dubai, including laser hair removal, PRP therapy, skin rejuvenation, and non-surgical cosmetic treatments.",
  "medicalSpecialty": "Dermatology",
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
    "name": "Aesthetic Dermatology Services",
    "itemListElement": [
      {
        "@type": "MedicalProcedure",
        "name": "Laser Hair Removal"
      },
      {
        "@type": "MedicalProcedure",
        "name": "PRP Therapy"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Skin Rejuvenation"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Hair Restoration"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Botox Treatment"
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
        category="aesthetic-dermatology" 
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
      <SEOContentSection title="Aesthetic Dermatology Excellence in Dubai" content={dermatologySEOContent} />
    </Layout>
  );
}

