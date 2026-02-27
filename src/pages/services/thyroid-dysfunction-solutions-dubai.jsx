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

export default function ThyroidDysfunctionSolutionsPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Thyroid Dysfunction Solutions';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'thyroid-dysfunction-solutions');

  return (
    <Layout>
      <Head>
  <title>Thyroid Dysfunction Solutions in Dubai | Expert Care</title>
  <meta name="description" content="Get trusted thyroid dysfunction solutions in Dubai with accurate diagnosis and personalised care. Our doctors help manage hypothyroidism and hyperthyroidism safely." />
  <meta name="keywords" content="Thyroid dysfunction solutions in Dubai, Thyroid treatment Dubai, Hypothyroidism treatment in Dubai, Hyperthyroidism treatment Dubai, Thyroid disorder management in Dubai, Thyroid specialist Dubai, Thyroid diagnosis Dubai, Hormonal imbalance treatment in Dubai, Endocrinology clinic Dubai" />
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalCondition",
      "@id": "https://ramacarepolyclinic.ae/services/thyroid-dysfunction-solutions-dubai#condition",
      "name": "Thyroid Dysfunction",
      "alternateName": "Hypothyroidism, Hyperthyroidism & Thyroid Imbalance",
      "url": "https://ramacarepolyclinic.ae/services/thyroid-dysfunction-solutions-dubai",
      "description": "Thyroid dysfunction refers to a range of conditions where the thyroid gland produces too little (hypothyroidism) or too much (hyperthyroidism) hormone, affecting metabolism, energy levels, and overall health. :contentReference[oaicite:1]{index=1}",
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": "Thyroid Dysfunction Treatment",
        "description": "Comprehensive diagnosis and management of thyroid conditions including hormonal assessment, tailored medication, lifestyle guidance, and ongoing clinical monitoring provided by qualified physicians in Dubai. :contentReference[oaicite:2]{index=2}"
      }
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://ramacarepolyclinic.ae/services/thyroid-dysfunction-solutions-dubai#procedure",
      "name": "Thyroid Dysfunction Solutions in Dubai",
      "alternateName": "Thyroid Diagnosis & Management",
      "url": "https://ramacarepolyclinic.ae/services/thyroid-dysfunction-solutions-dubai",
      "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/thyroid-dysfunction-solutions-dubai",
      "description": "Expert thyroid dysfunction diagnosis and treatment services in Dubai including clinical evaluation, advanced thyroid blood testing, personalized therapy plans, lifestyle guidance, and regular monitoring to restore balanced hormone levels and improve wellbeing. :contentReference[oaicite:3]{index=3}",
      "procedureType": "Thyroid disorder evaluation and management",
      "howPerformed": "Initial consultation and symptom review followed by targeted thyroid function tests (TSH, T3, T4), antibody testing, and clinical evaluation; treatment plans include medication management, lifestyle recommendations, or specialist referral as required. :contentReference[oaicite:4]{index=4}",
      "preparation": "No special preparation is required other than following clinician instructions for any blood tests (e.g., fasting if indicated). :contentReference[oaicite:5]{index=5}",
      "followup": "Ongoing follow-up visits and hormone monitoring are recommended to ensure treatment adjustments and symptom improvement. :contentReference[oaicite:6]{index=6}",
      "indication": [
        "Unexplained weight gain or loss",
        "Persistent fatigue or weakness",
        "Irregular heartbeat or palpitations",
        "Sensitivity to heat or cold",
        "Neck swelling (goiter)"
      ],
      "provider": {
        "@type": "MedicalBusiness",
        "name": "RamaCare Polyclinic – Thyroid & General Health Care",
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
