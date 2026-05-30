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

export default function generalphysiciandubaiCategoryPage() {
  const content = getCategoryContent('general-physician');
  const gpSEOContent = [
    "Your health is in good hands with our expert general physicians in Dubai at RamaCare Polyclinic. Our primary care department in Jumeirah 1 is dedicated to providing comprehensive medical services for patients of all ages. Whether you need a routine checkup, management of a chronic condition, or treatment for an acute illness, our DHA-licensed doctors are here to provide personalized and compassionate care.",
    {
      type: "heading",
      text: "Comprehensive Primary Healthcare in Jumeirah 1"
    },
    "We focus on preventive medicine and early diagnosis to help you maintain optimal health. Our physicians take the time to listen to your concerns and develop effective treatment plans.",
    {
      type: "list",
      items: [
        "Routine Health Checkups: Comprehensive assessments for overall well-being.",
        "Chronic Disease Management: Expert care for hypertension, diabetes, and more.",
        "Acute Illness Treatment: Fast and effective care for infections, fevers, and minor injuries.",
        "Vaccinations & Immunizations: Protecting you and your family from preventable diseases.",
        "Health Counseling: Expert advice on nutrition, lifestyle, and stress management."
      ]
    },
    "At RamaCare, we believe in building long-term relationships with our patients based on trust and professional excellence. Our polyclinic is equipped with modern diagnostic tools to ensure accurate assessments and the best possible outcomes. Experience high-quality primary healthcare in Dubai with RamaCare Polyclinic. Book your consultation today."
  ];

  return (
    <Layout>
      <Head>
  <title>General Physician Treatment for Everyday Health Care</title>
  <meta name="description" content="General physician treatment covers routine checkups, diagnosis, and care for common illnesses, infections, and chronic conditions with medical guidance." />
  <meta name="keywords" content="General physician treatment, General physician care, Primary care doctor, Family medicine treatment, Routine health checkup, Diagnosis and treatment clinic, Chronic disease management, Common illness treatment, Preventive health care, Medical consultation services" />
  
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://ramacarepolyclinic.ae/services/general-physician-dubai/#medicalclinic",
  "name": "General Physician Treatment in Dubai",
  "url": "https://ramacarepolyclinic.ae/services/general-physician-dubai",
  "description": "Advanced General Physician Treatment in Jumeirah 1, Dubai. DHA-licensed general physicians offering diagnosis, chronic disease management, preventive care, health checkups, and same-day medical consultations.",
  "medicalSpecialty": "General Practice",
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
    "name": "General Physician Services",
    "itemListElement": [
      { "@type": "MedicalProcedure", "name": "Gastrointestinal Disorders Management" },
      { "@type": "MedicalProcedure", "name": "Allergy Assessment & Management" },
      { "@type": "MedicalProcedure", "name": "Minor Injury Care & Wound Stitching" },
      { "@type": "MedicalProcedure", "name": "Acute Infection Treatment" },
      { "@type": "MedicalProcedure", "name": "Diabetes Mellitus Management" },
      { "@type": "MedicalProcedure", "name": "Hypertension Management" },
      { "@type": "MedicalProcedure", "name": "Thyroid Dysfunction Management" },
      { "@type": "MedicalProcedure", "name": "Asthma & COPD Care" },
      { "@type": "MedicalProcedure", "name": "Routine Health Check-ups" },
      { "@type": "MedicalProcedure", "name": "Comprehensive Physical Examination" }
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
        category="general-physician" 
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
      <SEOContentSection title="Expert General Physician Services in Dubai" content={gpSEOContent} />
    </Layout>
  );
}

