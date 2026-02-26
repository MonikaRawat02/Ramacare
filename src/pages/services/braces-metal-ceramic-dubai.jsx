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

export default function BracesMetalCeramicPage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Braces (Metal & Ceramic)';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'braces-metal-ceramic');

  return (
    <Layout>
      <Head>
  <title>Braces Metal & Ceramic in Dubai | Smile Correction Experts</title>
  <meta name="description" content="Achieve a perfect smile with metal or ceramic braces in Dubai. Safe, effective orthodontic treatment by licensed dentists for all ages, tailored to your needs." />
  <meta name="keywords" content="Braces Dubai, Metal braces Dubai, Ceramic braces Dubai, Orthodontic treatment Dubai, Teeth alignment Dubai, dental braces for adults, Kids braces Dubai, Invisible braces Dubai, Smile correction Dubai, Affordable braces Dubai, Licensed orthodontist in Dubai, Corrective dental braces" />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Braces (Metal & Ceramic) in Dubai",
  "alternateName": "Orthodontic Braces Treatment",
  "url": "https://ramacarepolyclinic.ae/services/braces-metal-ceramic-dubai",
  "description": "Get expert braces treatment (metal & ceramic) in Dubai at RamaCare Polyclinic. Our DHA-licensed dental specialists provide orthodontic care to correct misaligned teeth and bite issues with both traditional metal and ceramic braces.",
  "procedureType": "Orthodontic dental procedure",
  "bodyLocation": "Teeth",
  "howPerformed": "Metal and ceramic braces are fixed to the teeth with brackets and wires to gradually move teeth into proper alignment. Regular adjustments are made to ensure optimal results over the treatment period.",
  "preparation": "An initial orthodontic evaluation including dental scans and alignment assessment is completed before braces placement.",
  "followup": "Patients are advised regular progress check-ups, hygiene guidance, and adjustments until treatment completion.",
  "provider": {
    "@type": "Dentist",
    "name": "RamaCare Polyclinic - Dental Department",
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
  },
  "indication": [
    "Crooked or crowded teeth",
    "Bite alignment issues",
    "Spacing or gaps between teeth",
    "Orthodontic correction needs"
  ],
  "possibleComplication": "Temporary discomfort, soreness, or sensitivity may occur after adjustments."
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
