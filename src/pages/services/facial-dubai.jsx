import Layout from "../../../components/Layout";
import Head from "next/head";
import HeroSection from "../../../components/HeroSection";
import WhyChooseUsSection from "../../../components/WhyChooseUsSection";
import AboutAyurvedaSection from "../../../components/AboutAyurvedaSection";
import TreatmentSection from "../../../components/TreatmentSection";
import ProgramsSection from "../../../components/ProgramsSection";
import ExpertsSection from "../../../components/ExpertsSection";
import VideoTestimonials from "../../../components/VideoTestimonials";
import WhyAyurvedaDubaiSection from "../../../components/WhyAyurvedaDubaiSection";
import FAQSection from "../../../components/FAQSection";
// import OurFacilitySection from "../../../components/OurFacilitySection";
import BeginYourHealingJourneySection from "../../../components/BeginYourHealingJourneySection";
import { getCategoryContent } from "../../data/categoryContent";

export default function FacialCategoryPage() {
  const content = getCategoryContent('facial');

  return (
    <Layout>
      <Head>
  <title>Facial Treatments in Dubai | Expert Skin Care Clinic</title>
  <meta name="description" content="Professional facial treatments in Dubai offering safe, personalized care for acne, pigmentation, aging, and dull skin, delivered by experienced skin specialists you can trust." />
  <meta name="keywords" content="facial treatments in Dubai, skin care clinic Dubai, advanced facial treatment Dubai, acne facial treatment Dubai, anti-aging facial Dubai, pigmentation treatment Dubai, medical facial Dubai, professional skin treatment Dubai, dermatology facial Dubai" />
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://ramacarepolyclinic.ae/services/facial-dubai/#medicalbusiness",
  "name": "Facial Treatments in Dubai",
  "url": "https://ramacarepolyclinic.ae/services/facial-dubai",
  "description": "Premium facial treatments in Jumeirah 1, Dubai including HydraFacial, PRP facial, anti-aging therapy, skin rejuvenation, pigmentation treatment, and personalized skincare plans by DHA-licensed aesthetic specialists.",
  "medicalSpecialty": "Aesthetic Dermatology",
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
    "name": "Facial Treatments",
    "itemListElement": [
      { "@type": "MedicalProcedure", "name": "Signature Hydra Facial" },
      { "@type": "MedicalProcedure", "name": "PRP Facial Therapy" },
      { "@type": "MedicalProcedure", "name": "Golden Elixir Facial" },
      { "@type": "MedicalProcedure", "name": "Oxygeneo Illuminate Facial" },
      { "@type": "MedicalProcedure", "name": "Exosomes Facial" }
    ]
  }
}
`
  }}
/>
</Head>

      <HeroSection content={content?.hero} />
      <WhyChooseUsSection content={content?.whyChooseUs} />
      <AboutAyurvedaSection content={content?.about} />
      <TreatmentSection 
        category="facial" 
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
      <VideoTestimonials content={content?.successStories} />
      <WhyAyurvedaDubaiSection content={content?.whyDubai} />
      <FAQSection content={content?.faq} />
       {/* <OurFacilitySection content={content?.facility} /> */}
       <BeginYourHealingJourneySection content={content?.booking} />
    </Layout>
  );
}

