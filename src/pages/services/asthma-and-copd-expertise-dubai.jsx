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

export default function AsthmaandCOPDExpertisePage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Asthma and COPD Expertise';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'asthma-and-copd-expertise');

  return (
    <Layout>
      <Head>
  <title>Asthma and COPD Specialist in Dubai for Expert Lung Care</title>
  <meta name="description" content="Consult an experienced asthma and COPD specialist in Dubai for accurate diagnosis, inhaler management, and long-term lung care tailored to your condition." />
  <meta name="keywords" content="Asthma and COPD specialist in Dubai, Asthma treatment Dubai, COPD treatment in Dubai, Lung care specialist Dubai, Respiratory clinic Dubai, Pulmonologist in Dubai, Chronic asthma management Dubai, COPD breathing treatment in Dubai, Adult asthma specialist in Dubai, Inhaler therapy Dubai, Chronic lung disease treatment in Dubai, Respiratory health care in Dubai" />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalCondition",
      "@id": "https://ramacarepolyclinic.ae/services/asthma-and-copd-expertise-dubai#condition",
      "name": "Asthma and COPD",
      "alternateName": "Chronic Respiratory Conditions",
      "url": "https://ramacarepolyclinic.ae/services/asthma-and-copd-expertise-dubai",
      "description": "Asthma and chronic obstructive pulmonary disease (COPD) are chronic respiratory conditions affecting the airways and lungs. Asthma causes airway inflammation and episodic symptoms such as wheezing, cough and breathlessness, while COPD involves airflow limitation often associated with smoking and long-term exposure to lung irritants. :contentReference[oaicite:0]{index=0}",
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": "Asthma and COPD Management",
        "description": "Clinical evaluation, lung function testing, personalized therapy plans including inhalers, medications, lifestyle support, and ongoing monitoring to help manage symptoms and improve respiratory health."
      }
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://ramacarepolyclinic.ae/services/asthma-and-copd-expertise-dubai#procedure",
      "name": "Asthma and COPD Expertise in Dubai",
      "alternateName": "Respiratory Care & Pulmonary Expertise",
      "url": "https://ramacarepolyclinic.ae/services/asthma-and-copd-expertise-dubai",
      "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/asthma-and-copd-expertise-dubai",
      "description": "Professional medical services for diagnosis and management of asthma and chronic obstructive pulmonary disease (COPD) in Dubai, including assessment of respiratory symptoms, pulmonary function evaluation, tailored treatment plans, and education on long-term control strategies. :contentReference[oaicite:1]{index=1}",
      "procedureType": "Diagnostic and therapeutic respiratory care",
      "howPerformed": "Treatment begins with a clinical assessment of symptoms and medical history, followed by lung function tests such as spirometry where indicated. Personalized management plans may include medications, inhaler therapy, trigger avoidance guidance, and follow-up clinical monitoring. :contentReference[oaicite:2]{index=2}",
      "preparation": "Patients should share detailed symptom history, current treatments, and any test results with clinicians prior to assessment.",
      "followup": "Regular follow-up visits and lung function monitoring are recommended to track control and adjust treatment as needed.",
      "indication": [
        "Wheezing",
        "Shortness of breath",
        "Chronic cough",
        "Chest tightness",
        "History of respiratory triggers"
      ],
      "provider": {
        "@type": "MedicalBusiness",
        "name": "RamaCare Polyclinic – Respiratory & General Health Care",
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
