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

export default function SpecializedHypertensionManagementPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Specialized Hypertension Management';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'specialized-hypertension-management');

  return (
    <Layout>
      <Head>
  <title>Specialised Hypertension Treatment in Dubai | Blood Pressure Care</title>
  <meta name="description" content="Get specialised hypertension treatment in Dubai with expert doctors, accurate diagnosis, and personalised care plans to safely control high blood pressure long term." />
  <meta name="keywords" content="Hypertension treatment in Dubai, High blood pressure treatment in Dubai, Hypertension specialist Dubai, Blood pressure doctor Dubai, Hypertension clinic Dubai, Chronic hypertension management in Dubai, Cardiovascular risk management in Dubai, Hypertension diagnosis and care in Dubai, Lifestyle management for high blood pressure, Hypertension medication Dubai, 24-hour blood pressure monitoring in Dubai" />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalCondition",
      "@id": "https://ramacarepolyclinic.ae/services/specialized-hypertension-management#condition",
      "name": "Hypertension",
      "alternateName": "High Blood Pressure",
      "url": "https://ramacarepolyclinic.ae/services/specialized-hypertension-management",
      "description": "Hypertension (high blood pressure) is a common chronic condition where the force of blood against the artery walls is consistently too high, increasing the risk of heart disease and stroke if not properly managed.",
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": "Specialized Hypertension Management",
        "description": "Comprehensive hypertension care involving clinical evaluation, blood pressure monitoring, lifestyle modification support, personalized medication plans, and ongoing follow-up to control blood pressure and reduce cardiovascular risk."
      }
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://ramacarepolyclinic.ae/services/specialized-hypertension-management#procedure",
      "name": "Specialized Hypertension Management in Dubai",
      "alternateName": "High Blood Pressure Diagnosis & Care",
      "url": "https://ramacarepolyclinic.ae/services/specialized-hypertension-management",
      "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/specialized-hypertension-management",
      "description": "Expert diagnosis and management of hypertension in Dubai, including detailed clinical assessment, ambulatory or in-clinic blood pressure measurement, personalized treatment plans, lifestyle and dietary counseling, and regular monitoring to achieve blood pressure goals.",
      "procedureType": "Diagnostic and therapeutic care for hypertension",
      "howPerformed": "Hypertension management begins with blood pressure measurement and clinical assessment, followed by tailored lifestyle advice, medication adjustments if needed, and regular follow-up for control and risk assessment.",
      "preparation": "No special preparation is required beyond sharing accurate blood pressure records and medical history with the clinician.",
      "followup": "Ongoing monitoring with regular visits is recommended to track blood pressure control and adjust treatment.",
      "indication": [
        "Consistently elevated systolic or diastolic blood pressure",
        "Family history of hypertension",
        "Associated cardiovascular risk factors",
        "Symptoms like headache or dizziness (if present)"
      ],
      "provider": {
        "@type": "MedicalBusiness",
        "name": "RamaCare Polyclinic – Hypertension & General Health Care",
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
