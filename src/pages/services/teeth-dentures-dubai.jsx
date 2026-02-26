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

export default function TeethDenturesPage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Teeth Dentures';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'teeth-dentures');

  return (
    <Layout>
      <Head>
  <title>Teeth Dentures in Dubai | Natural & Comfortable Solutions</title>
  <meta name="description" content="Restore your smile with teeth dentures in Dubai. Choose from full, partial, or implant-supported options designed for comfort, natural appearance, and long-lasting results." />
  <meta name="keywords" content="Teeth dentures Dubai, Dentures Dubai, Full dentures Dubai, Partial dentures Dubai, Implant-supported dentures Dubai, Removable dentures Dubai, Affordable dentures Dubai, DHA-licensed dentist in Dubai, dental prosthetics Dubai, Smile restoration Dubai, Comfortable dentures Dubai, Natural-looking dentures in Dubai" />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Teeth Dentures in Dubai",
  "alternateName": "Dental Dentures Prosthetic Solution",
  "url": "https://ramacarepolyclinic.ae/services/teeth-dentures-dubai",
  "description": "Teeth dentures in Dubai at RamaCare Polyclinic provides custom-made dental prosthetics to replace missing teeth and restore smile function and aesthetics, performed by experienced DHA-licensed dental professionals.",
  "procedureType": "Dental prosthetic procedure",
  "bodyLocation": "Mouth",
  "howPerformed": "Dentures are created with custom impressions of the mouth and fitted to replace missing teeth and restore chewing function and smile aesthetics. Adjustments may be provided for comfort and fit.",
  "preparation": "Oral assessment and diagnostic impressions are taken before creation of dentures to ensure precise fit and comfort.",
  "followup": "Routine check-ups are recommended to ensure proper denture fit, function, and oral hygiene.",
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
    "priceRange": "$$"
  },
  "indication": [
    "Missing teeth",
    "Improved chewing function",
    "Smile aesthetics restoration."
  ],
  "possibleComplication": "Initial adjustment period and oral discomfort may occur as patients adapt to wearing dentures."
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
