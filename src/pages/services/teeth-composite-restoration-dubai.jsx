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

export default function TeethCompositeRestorationPage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Teeth Composite Restoration';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'teeth-composite-restoration');

  return (
    <Layout>
      <Head>
  <title>Tooth Composite Restoration | Durable & Natural dental Care</title>
  <meta name="description" content="Restore your teeth with composite restoration for a natural look and long-lasting results. Safe, pain-free dental treatment by licensed dentists for healthy smiles." />
  <meta name="keywords" content="Tooth composite restoration, dental composite filling, Composite bonding treatment, Tooth repair Dubai, Cosmetic dental restoration, Durable tooth restoration, Natural-looking fillings, DHA licensed dentist in Dubai, Smile restoration Dubai, Tooth repair treatment, Affordable composite restoration, dental repair solutions" />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Teeth Composite Restoration in Dubai",
  "alternateName": "Dental Composite Filling & Restoration",
  "url": "https://ramacarepolyclinic.ae/services/teeth-composite-restoration-dubai",
  "description": "Teeth composite restoration in Dubai at RamaCare Polyclinic offers precise dental restoration using composite resin to repair chipped, cracked, decayed, or damaged teeth. Performed by DHA-licensed dentists to restore function and aesthetics.",
  "procedureType": "Restorative dental procedure",
  "bodyLocation": "Teeth",
  "howPerformed": "Composite resin materials are used to fill cavities, repair damaged surfaces, and restore tooth function. The tooth is cleaned, etched, and the composite material is applied, shaped, and cured for a natural finish.",
  "preparation": "Initial oral examination and assessment are done to determine extent of restoration needed.",
  "followup": "Routine dental hygiene and regular check-ups are recommended to ensure long-term restoration success.",
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
    "Tooth decay",
    "Chipped or cracked tooth",
    "Damaged dental surface",
    "Restoring tooth function"
  ],
  "possibleComplication": "Temporary tooth sensitivity or mild discomfort may occur after restoration."
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
