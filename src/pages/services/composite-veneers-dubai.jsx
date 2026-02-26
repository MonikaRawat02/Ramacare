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

export default function CompositeVeneersPage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Composite Veneers';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'composite-veneers');

  return (
    <Layout>
      <Head>
  <title>Composite Veneers Dubai | Safe & Natural Smile Solutions</title>
  <meta name="description" content="Enhance your smile with composite veneers in Dubai—safe, natural-looking, and durable dental solutions for teeth restoration and cosmetic smile makeovers by expert dentists." />
  <meta name="keywords" content="Composite veneers Dubai, dental veneers Dubai, Cosmetic dentistry Dubai, Smile makeover Dubai, Tooth restoration in Dubai, Affordable veneers Dubai, Same-day veneers Dubai, Composite bonding Dubai, Durable veneers Dubai, Natural-looking veneers Dubai, DHA-licensed dentist in Dubai, Best veneers Dubai" />
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Composite Veneers in Dubai",
  "alternateName": "Cosmetic Composite Dental Veneers",
  "url": "https://ramacarepolyclinic.ae/services/composite-veneers-dubai",
  "description": "Composite veneers in Dubai at RamaCare Polyclinic offer affordable, natural-looking smile enhancement. Performed by DHA-licensed dentists using advanced composite materials for same-day cosmetic smile transformation.",
  "procedureType": "Cosmetic dental procedure",
  "bodyLocation": "Teeth",
  "howPerformed": "Composite veneers are applied by bonding tooth-colored resin directly to the front surface of teeth. The material is sculpted, shaped, and polished for a natural finish.",
  "preparation": "Oral examination, smile analysis, and shade matching are performed before veneer placement.",
  "followup": "Patients are advised regular dental hygiene and follow-up visits to maintain veneer longevity.",
  "duration": "PT2H",
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
    "Chipped or cracked teeth",
    "Gaps between teeth",
    "Stained or discolored teeth",
    "Uneven or misshapen teeth",
    "Minor misalignment"
  ],
  "contraindication": "Not suitable for patients with severe gum disease or significant tooth decay without prior treatment.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500"
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
