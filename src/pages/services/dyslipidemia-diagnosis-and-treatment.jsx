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

export default function DyslipidemiaDiagnosisandTreatmentPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Dyslipidemia Diagnosis and Treatment';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'dyslipidemia-diagnosis-and-treatment');

  return (
    <Layout>
      <Head>
  <title>Dyslipidemia Diagnosis and Treatment for Healthy Cholesterol</title>
  <meta name="description" content="Dyslipidemia diagnosis and treatment focused on managing cholesterol levels, reducing heart disease risk, and supporting long-term cardiovascular health safely." />
  <meta name="keywords" content="Dyslipidemia diagnosis and treatment, High cholesterol treatment, Lipid profile test, Cholesterol management, Dyslipidemia care, Heart health treatment, High LDL cholesterol, Triglyceride management, Preventive cardiac care" />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalCondition",
      "@id": "https://ramacarepolyclinic.ae/services/dyslipidemia-diagnosis-and-treatment#condition",
      "name": "Dyslipidemia",
      "alternateName": "Abnormal Blood Lipid Levels",
      "url": "https://ramacarepolyclinic.ae/services/dyslipidemia-diagnosis-and-treatment",
      "description": "Dyslipidemia is a medical condition characterized by abnormal levels of lipids (such as high LDL cholesterol, low HDL cholesterol, or elevated triglycerides) in the blood, which can increase the risk of cardiovascular disease if unmanaged.",
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": "Dyslipidemia Diagnosis and Treatment",
        "description": "Comprehensive dyslipidemia diagnosis and treatment including lipid profile testing, personalized treatment plans, lifestyle guidance, and medication when needed to help maintain healthy cholesterol levels and reduce cardiovascular risks."
      }
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://ramacarepolyclinic.ae/services/dyslipidemia-diagnosis-and-treatment#procedure",
      "name": "Dyslipidemia Diagnosis and Treatment in Dubai",
      "alternateName": "Cholesterol & Lipid Management",
      "url": "https://ramacarepolyclinic.ae/services/dyslipidemia-diagnosis-and-treatment",
      "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/dyslipidemia-diagnosis-and-treatment",
      "description": "Expert diagnosis and treatment of dyslipidemia in Dubai, involving detailed consultation, lipid profile testing, personalized medical therapy, lifestyle counselling, and regular monitoring to manage cholesterol and triglyceride levels effectively.",
      "procedureType": "Diagnostic and therapeutic care for abnormal lipids",
      "howPerformed": "The service includes clinical assessment, advanced lipid profile testing, evaluation of cardiovascular risk, lifestyle recommendations, and tailored medical treatment plans.",
      "preparation": "No special preparation is needed beyond fasting for lipid blood tests as instructed by clinicians.",
      "followup": "Regular follow-up visits and monitoring of lipid levels to ensure treatment effectiveness and modify plans if needed.",
      "indication": [
        "High LDL (“bad”) cholesterol",
        "Low HDL (“good”) cholesterol",
        "Elevated triglycerides",
        "Genetic predisposition to abnormal lipid profiles",
        "Cardiovascular risk due to abnormal lipid levels"
      ],
      "provider": {
        "@type": "MedicalBusiness",
        "name": "RamaCare Polyclinic – Lipid & General Health Care",
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
