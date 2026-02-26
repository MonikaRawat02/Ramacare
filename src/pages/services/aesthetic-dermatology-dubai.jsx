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
import { getCategoryContent } from "../../data/categoryContent";

export default function AestheticDermatologyCategoryPage() {
  const content = getCategoryContent('aesthetic-dermatology');
  return (
    <Layout>
      <Head>
  <title>Skin Treatment Dubai – Clear & Healthy Skin</title>
  <meta name="description" content="RamaCare offers advanced skin treatment in Dubai with expert dermatologists, safe therapies, and personalized care for acne, pigmentation, anti-aging, and glowing skin." />
  <meta name="keywords" content="Skin Treatment Dubai, Clear skin treatment Dubai, Healthy skin Dubai, Dermatology clinic Dubai, Acne treatment Dubai, Anti-aging skin care Dubai, Skin rejuvenation Dubai, Laser skin treatment Dubai, Pigmentation treatment Dubai, Medical skin clinic Dubai, Personalized skin care Dubai, DHA licensed dermatology clinic" />
   <link rel="canonical" href="https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/" />
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://ramacarepolyclinic.ae/services/aesthetic-dermatology-dubai/#medicalbusiness",
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
    </Layout>
  );
}

