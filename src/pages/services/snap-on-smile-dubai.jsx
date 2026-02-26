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

export default function SnapOnSmilePage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Snap On Smile';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'snap-on-smile');

  return (
    <Layout>
      <Head>
  <title>Snap-On Smile in Dubai | Affordable Smile Makeover</title>
  <meta name="description" content="Transform your smile with Snap-On Smile in Dubai. Non-invasive, comfortable, and affordable dental solution for a natural-looking, confident smile by skilled dentists." />
  <meta name="keywords" content="Snap-On Smile Dubai, Snap-on teeth Dubai, Temporary veneers Dubai, Smile makeover Dubai, Non-invasive dental veneers Dubai, Affordable Snap-On Smile Dubai, Cosmetic dentistry Dubai, Teeth restoration Dubai, Natural-looking Snap-On Smile Dubai, DHA-licensed dentist in Dubai, Quick smile makeover Dubai, Removable Veneers Dubai" />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Snap-On Smile in Dubai",
  "alternateName": "Non-invasive cosmetic dental smile solution",
  "url": "https://ramacarepolyclinic.ae/services/snap-on-smile-dubai",
  "description": "Snap-On Smile in Dubai at RamaCare Polyclinic offers a quick, non-invasive cosmetic dental solution for a beautiful smile. Performed by experienced DHA-licensed dentists, this removable smile enhancement fits over your existing teeth for instant aesthetic improvement.",
  "procedureType": "Cosmetic dental procedure",
  "bodyLocation": "Teeth",
  "howPerformed": "Snap-On Smile involves custom-fitting a removable dental appliance that clips over the existing teeth to instantly improve appearance without drilling, injections, or dental alteration.",
  "preparation": "No invasive preparation is needed. Custom impressions and smile design are taken before final fitting.",
  "followup": "Patients are advised to maintain oral hygiene and attend routine dental check-ups to ensure fit and comfort.",
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
    "Cosmetic smile enhancement",
    "Instant smile improvement without invasive procedures"
  ],
  "contraindication": "Not recommended for patients with severe gum disease or unstable dentition before dental evaluation."
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
