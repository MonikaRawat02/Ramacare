import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
// import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import PatientTestimonials from '../../../components/VideoTestimonials';
import DoctorsSection from '../../../components/DoctorsSection';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import { getSubcategoryContent } from '../../data/subcategoryContent';

export default function DiabetesMellitusCarePage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Diabetes Mellitus Care';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'diabetes-mellitus-care');

  return (
    <Layout>
      <Head>
  <title>Diabetes Mellitus Care in Dubai by Experienced Physicians</title>
  <meta name="description" content="Get trusted diabetes mellitus care in Dubai with accurate diagnosis, lifestyle guidance, and ongoing medical support to help you manage blood sugar safely." />
  <meta name="keywords" content="Diabetes mellitus care in Dubai, Diabetes treatment Dubai, Diabetes management clinic Dubai, Type 1 diabetes treatment in Dubai, Type 2 diabetes care in Dubai, Blood sugar control in Dubai, Diabetes doctor in Dubai, Endocrine care Dubai, Chronic diabetes management in Dubai" />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalCondition",
      "@id": "https://ramacarepolyclinic.ae/services/diabetes-mellitus-care-dubai#condition",
      "name": "Diabetes Mellitus",
      "alternateName": "Type 1 & Type 2 Diabetes",
      "url": "https://ramacarepolyclinic.ae/services/diabetes-mellitus-care-dubai",
      "description": "Diabetes mellitus is a chronic metabolic condition characterized by high blood sugar due to impaired insulin production or action. It can lead to complications without proper management.",
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": "Diabetes Mellitus Care",
        "description": "Comprehensive diabetes care including clinical evaluation, glucose monitoring, dietary guidance, medication management, lifestyle modification, and complication prevention strategies."
      }
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://ramacarepolyclinic.ae/services/diabetes-mellitus-care-dubai#procedure",
      "name": "Diabetes Mellitus Care in Dubai",
      "alternateName": "Diabetes Management & Support",
      "url": "https://ramacarepolyclinic.ae/services/diabetes-mellitus-care-dubai",
      "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/diabetes-mellitus-care-dubai",
      "description": "Professional diabetes care services in Dubai including consultation, blood glucose monitoring, medication optimization, diet and lifestyle guidance, and regular follow-up to maintain healthy sugar levels and prevent complications.",
      "procedureType": "Ongoing disease management and monitoring",
      "howPerformed": "Evaluation includes clinical assessment, blood glucose measurements, risk evaluation for complications, personalized diet and exercise guidance, medication review, and ongoing monitoring.",
      "preparation": "Patients should bring current medications, glucose logs, recent lab results, and a record of symptoms to the clinician.",
      "followup": "Regular follow-up visits are recommended to assess glucose control and adjust care plans.",
      "indication": [
        "Elevated blood glucose",
        "Polyuria, polydipsia",
        "Unexplained weight changes",
        "Fatigue",
        "High HbA1c readings"
      ],
      "provider": {
        "@type": "MedicalBusiness",
        "name": "RamaCare Polyclinic – Diabetes & General Health Care",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jumeirah Terrace Building, Ground Floor",
          "addressLocality": "Jumeirah 1",
          "addressRegion": "Dubai",
          "postalCode": "393558",
          "addressCountry": "AE"
        },
        "telephone": "+971566597878",
        "areaServed": {
          "@type": "City",
          "name": "Dubai"
        },
        "priceRange": "$$"
      }
    }
  ]
}
`
  }}
/>
</Head>

      <TreatmentHero 
        categoryName={categoryName}
        subcategoryName={subcategoryName}
        hero={content?.hero}
      />
     <QuickNavigation />
    {/* <CertificationsSection content={content?.certifications} /> */}
    <TreatmentOverview 
      subcategoryName={subcategoryName}
      content={content?.overview}
    />
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    {/* <PricingPackages content={content?.pricing} /> */}
    <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
