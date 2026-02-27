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

export default function PanchakarmaTreatmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Panchakarma Treatment';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'panchakarma-treatment');

  return (
    <Layout>
      <Head>
  <title>Panchakarma Treatment in Dubai | Ayurvedic Detox & Wellness</title>
  <meta name="description" content="Discover authentic Panchakarma treatment in Dubai for detox, stress relief, immunity boost, and rejuvenation. Affordable pricing, Bur Dubai & Al Nahda centers available." />
  <meta name="keywords" content="Panchakarma treatment in Dubai, Ayurvedic Panchakarma Dubai, Panchakarma treatment cost in Dubai, Panchakarma treatment price list, Panchakarma Bur Dubai, Panchakarma Ayurvedic Centre, Panchakarma Ayurveda centre reviews, Panchakarma Al Nahda, Ayurvedic treatment in Dubai, Panchakarma treatment near me, Body detox Ayurveda Dubai, Stress Relief Ayurveda Dubai" />
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "https://ramacarepolyclinic.ae/services/panchakarma-treatment-dubai#procedure",
  "name": "Panchakarma Treatment in Dubai",
  "alternateName": "Ayurvedic Panchakarma Detox & Rejuvenation",
  "url": "https://ramacarepolyclinic.ae/services/panchakarma-treatment-dubai",
  "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/panchakarma-treatment-dubai",
  "description": "Panchakarma Treatment in Dubai at RamaCare Polyclinic offers traditional Ayurvedic detoxification and rejuvenation therapies designed to cleanse the body, balance doshas, and restore wellness, guided by experienced practitioners.",
  "procedureType": "Ayurvedic detox treatment",
  "bodyLocation": "Whole body",
  "howPerformed": "Panchakarma involves a sequence of Ayurvedic procedures including oleation (oil therapy), sudation (herbal steam therapy), therapeutic purgation, enemas and rejuvenating herbal treatments tailored to individual constitution and detox goals.",
  "preparation": "Patients undergo initial consultation and assessment of body constitution (dosha) before beginning Panchakarma. Preparatory diets and cleansing are recommended.",
  "followup": "Post-therapy guidance and follow-up assessments are recommended to support lasting wellness and monitor outcomes.",
  "indication": [
    "Detoxification",
    "Stress & toxin reduction",
    "Metabolic support",
    "Chronic condition support",
    "Rejuvenation and wellness"
  ],
  "possibleComplication": "Mild temporary fatigue or detox reactions may occur depending on individual response.",
  "provider": {
    "@type": "MedicalBusiness",
    "name": "RamaCare Polyclinic – Ayurvedic & Wellness Department",
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
    "priceRange": "$$$"
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

