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

export default function dentaldubaiCrownBridgePage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Dental Crown & Bridges';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'dental-crown-bridge');

  return (
    <Layout>
      <Head>
  <title>dental Crown Bridges in Dubai | Durable & Natural Smile</title>
  <meta name="description" content="Restore your smile with dental crown bridges in Dubai. Safe, long-lasting, and natural-looking solutions by licensed dentists for effective tooth replacement." />
  <meta name="keywords" content="dental crown bridges Dubai, Tooth crown Dubai, dental bridge treatment, Porcelain crown Dubai, Metal ceramic crowns, Tooth replacement in Dubai, Cosmetic dental bridges, Long-lasting dental crowns, Licensed dentist in Dubai, Full mouth restoration Dubai, Affordable crown bridges, Natural-looking dental crowns" />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Dental Crown & Bridges in Dubai",
  "alternateName": "Dental Crowns and Dental Bridges Treatment",
  "url": "https://ramacarepolyclinic.ae/services/dental-crown-bridges-dubai",
  "description": "Dental Crown & Bridges in Dubai at RamaCare Polyclinic provide long-lasting solutions to repair damaged teeth with crowns and replace missing teeth with fixed bridges, restoring function and natural smile aesthetics.",
  "procedureType": "Restorative dental procedure",
  "bodyLocation": "Teeth",
  "howPerformed": "Dental crowns are custom-made caps placed over damaged or weakened teeth to restore strength and appearance. Bridges consist of one or more artificial teeth anchored between adjacent crowned teeth to fill gaps left by missing teeth. Both are custom fabricated and fixed permanently in place.",
  "preparation": "Initial dental assessment with X-rays and impressions/digital scans are performed to plan and design the crown or bridge.",
  "followup": "Routine dental hygiene and scheduled follow-ups are advised to monitor restoration integrity and oral health.",
  "indication": [
    "Damaged or decayed teeth requiring strength restoration",
    "Missing teeth replacement",
    "Improved chewing and bite function",
    "Enhanced smile aesthetics"
  ],
  "provider": {
    "@type": "Dentist",
    "name": "RamaCare Polyclinic – Dental Department",
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
