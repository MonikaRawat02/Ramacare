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

export default function RootCanalTreatmentPage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Root Canal Treatment';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'root-canal-treatment');

  return (
    <Layout>
      <Head>
  <title>Root Canal Treatment in Dubai | Trusted Endodontist Care</title>
  <meta name="description" content="Get safe and effective root canal treatment in Dubai. Skilled endodontists remove infection, relieve pain, and restore your tooth for long-lasting dental health." />
  <meta name="keywords" content="Root canal treatment Dubai, Root canal therapy Dubai, Endodontist Dubai, Painless root canal Dubai, Tooth infection treatment in Dubai, dental clinic Dubai, Emergency root canal Dubai, Tooth restoration in Dubai, Best endodontist in Dubai, DHA-licensed dentist in Dubai, Root canal cost in Dubai, Advanced root canal Dubai" />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Root Canal Treatment in Dubai",
  "alternateName": "Endodontic Root Canal Therapy",
  "url": "https://ramacarepolyclinic.ae/services/root-canal-treatment-dubai",
  "description": "Get safe and effective root canal treatment in Dubai at RamaCare Polyclinic by experienced DHA-licensed dentists. We provide pain-free endodontic therapy to save infected teeth and protect dental health.",
  "procedureType": "Endodontic dental procedure",
  "bodyLocation": "Teeth",
  "howPerformed": "Root canal treatment involves removing infected pulp tissue, disinfecting the canal system, and sealing with dental material to prevent further infection.",
  "preparation": "Comprehensive oral exam, x-rays, and anesthesia assessment are done before treatment to ensure comfort and precision.",
  "followup": "Patients are advised routine dental hygiene, medicated rinse (if recommended), and a follow-up check to monitor healing.",
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
    "Severe tooth decay",
    "Dental pulp infection",
    "Persistent toothache",
    "Swollen gums due to infection"
  ],
  "possibleComplication": "Temporary discomfort or sensitivity may occur after treatment."
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
