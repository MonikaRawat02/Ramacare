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

export default function BodyShapingPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Body Shaping';

  // Get content from data file
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'body-shaping');

  return (
    <Layout>
      <Head>
  <title>Body Shaping in Dubai | Expert Non-Surgical Body Sculpting</title>
  <meta name="description" content="Achieve your ideal body with expert body shaping in Dubai—safe, non-surgical treatments for fat reduction, contouring, and toning with personalized care." />
  <meta name="keywords" content="Body shaping in Dubai, Body sculpting Dubai, Body contouring Dubai, Non-surgical body shaping in Dubai, Fat reduction Dubai, Slimming treatments in Dubai, Muscle toning in Dubai, Safe body contouring in Dubai, Personalized body treatment Dubai, Cellulite treatment Dubai, Medical body shaping in Dubai, DHA licensed body clinic" />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Body Shaping in Dubai",
  "alternateName": "Non-Surgical Body Contouring in Dubai",
  "url": "https://ramacarepolyclinic.ae/services/body-shaping-dubai",
  "description": "Safe and non-surgical body shaping in Dubai at RamaCare Polyclinic. Advanced FDA-approved technologies for fat reduction, skin tightening, cellulite reduction, and natural body contouring with minimal downtime.",
  "procedureType": "Non-invasive aesthetic procedure",
  "bodyLocation": [
    "Abdomen",
    "Thighs",
    "Arms",
    "Flanks",
    "Hips",
    "Back",
    "Chin"
  ],
  "howPerformed": "Body shaping is performed using advanced non-invasive technologies that target fat cells, improve skin firmness, and enhance natural body contours without surgery or anesthesia.",
  "preparation": "No special preparation required. Patients undergo consultation and body assessment before starting treatment.",
  "followup": "Follow-up sessions and lifestyle guidance are recommended to maintain long-lasting contouring results.",
  "provider": {
    "@type": "MedicalBusiness",
    "name": "RamaCare Polyclinic",
    "image": "https://ramacarepolyclinic.ae/wp-content/uploads/body-shaping-dubai.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jumeirah Terrace Building, Ground Floor",
      "addressLocality": "Jumeirah 1",
      "addressRegion": "Dubai",
      "postalCode": "393558",
      "addressCountry": "AE"
    },
    "telephone": "+971 56 659 7878",
    "priceRange": "$$",
    "medicalSpecialty": "Aesthetic Medicine",
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    }
  }
}`
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

