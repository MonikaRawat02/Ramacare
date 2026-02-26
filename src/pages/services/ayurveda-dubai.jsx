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

export default function AyurvedaCategoryPage() {
  const content = getCategoryContent('ayurveda');

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
  "@type": "MedicalBusiness",
  "@id": "https://ramacarepolyclinic.ae/services/ayurveda-dubai/#medicalbusiness",
  "name": "Ayurveda Treatment in Dubai",
  "url": "https://ramacarepolyclinic.ae/services/ayurveda-dubai",
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
        "@type": "MedicalProcedure",
        "name": "Panchakarma Treatment"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Chronic Pain Relief Therapy"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Stress & Sleep Balance Therapy"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Women's Wellness Program"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Digestive & Weight Balance Program"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Ayurvedic Hairfall Treatment"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Skin Diseases Treatment"
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
    </Layout>
  );
}

