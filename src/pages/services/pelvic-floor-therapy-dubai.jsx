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

export default function PelvicFloorTherapyPage() {
  const categoryName = 'Physiotherapy';
  const subcategoryName = 'Pelvic Floor Therapy';

  // Get content from data file
  const content = getSubcategoryContent('physiotherapy-dubai', 'pelvic-floor-therapy');

  return (
    <Layout>
      <Head>
  <title>Pelvic Floor Therapy in Dubai for Strength and Recovery</title>
  <meta name="description" content="Pelvic floor therapy in Dubai helps improve bladder control, core strength, and recovery after childbirth or surgery through safe, guided physiotherapy care." />
  <meta name="keywords" content="Pelvic floor therapy in Dubai, Pelvic floor physiotherapy Dubai, Pelvic floor treatment Dubai, Women’s health physiotherapy Dubai, Postnatal pelvic floor therapy, Pelvic floor exercises Dubai, Urinary incontinence treatment Dubai, Pelvic pain physiotherapy, Core strengthening physiotherapy, Rehabilitation physiotherapy Dubai" />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "https://ramacarepolyclinic.ae/services/pelvic-floor-therapy-dubai#procedure",
  "name": "Pelvic Floor Therapy in Dubai",
  "alternateName": "Pelvic Floor Physiotherapy Treatment",
  "url": "https://ramacarepolyclinic.ae/services/pelvic-floor-therapy-dubai",
  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/pelvic-floor-therapy-dubai",
  "description": "Pelvic Floor Therapy in Dubai at RamaCare Polyclinic offers specialized physiotherapy for pelvic support muscles to improve continence, pelvic pain, postpartum recovery, and core stability, provided by experienced physiotherapists.",
  "procedureType": "Physical therapy",
  "bodyLocation": "Pelvic floor muscles",
  "howPerformed": "Pelvic floor therapy is performed through targeted exercise regimens, manual techniques, biofeedback, and functional training designed to strengthen, relax, or coordinate pelvic floor muscles based on individual needs.",
  "preparation": "No special preparation is required. Patients may be advised to wear comfortable clothing to allow easy access for assessment and therapy.",
  "followup": "Follow-up sessions and progress assessments are recommended to ensure optimal results and ongoing muscle function improvements.",
  "indication": [
    "Urinary incontinence",
    "Pelvic pain",
    "Postpartum pelvic recovery",
    "Pelvic floor muscle weakness",
    "Core stability and support"
  ],
  "possibleComplication": "Temporary muscle soreness or discomfort may occur after therapy sessions.",
  "provider": {
    "@type": "MedicalBusiness",
    "name": "RamaCare Polyclinic – Physiotherapy Department",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jumeirah Terrace Building, Ground Floor",
      "addressLocality": "Jumeirah 1",
      "addressRegion": "Dubai",
      "postalCode": "393558",
      "addressCountry": "AE"
    },
    "telephone": "+971 56 659 7878",
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    },
    "priceRange": "$$"
  }
}
    `,
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
