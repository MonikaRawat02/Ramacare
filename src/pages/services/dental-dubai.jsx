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

export default function dentaldubaiCategoryPage() {
  const content = getCategoryContent('dental');

  return (
    <Layout>
      <Head>
  <title>Best dental Clinic in Dubai | Expert Dentists & Care</title>
  <meta name="description" content="Receive expert dental care at the best dental clinic in Dubai. Safe, personalized treatments for teeth whitening, veneers, implants, braces, and smile makeovers." />
  <meta name="keywords" content="Best dental clinic in Dubai, Dentist in Dubai, dental treatment in Dubai, Cosmetic dentistry Dubai, Teeth whitening in Dubai, dental veneers Dubai, dental implants Dubai, Braces treatment in Dubai, Smile makeover Dubai, Family dentistry Dubai, DHA-licensed dentist in Dubai, Top dentist Dubai" />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://ramacarepolyclinic.ae/services/dental-dubai/#medicalbusiness",
  "name": "Dental Clinic in Dubai",
  "url": "https://ramacarepolyclinic.ae/services/dental-dubai",
  "description": "DHA-licensed dental clinic in Jumeirah 1, Dubai offering cosmetic dentistry, root canal treatment, braces, veneers, teeth whitening, and comprehensive oral healthcare.",
  "medicalSpecialty": "Dentistry",
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
    "name": "Dental Treatments",
    "itemListElement": [
      {
        "@type": "MedicalProcedure",
        "name": "Composite Veneers"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dental Veneers"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Root Canal Treatment"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Teeth Whitening"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dental Crown & Bridge"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Braces (Metal & Ceramic)"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Gum Disease Treatment"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dental Dentures"
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
        category="dental" 
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

