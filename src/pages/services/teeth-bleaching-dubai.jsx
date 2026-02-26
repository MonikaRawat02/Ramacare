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

export default function TeethBleachingPage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Teeth Bleaching';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'teeth-bleaching');

  return (
    <Layout>
       <Head>
    {/* title + meta */}
    {/* paste script here */}
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Teeth Bleaching in Dubai",
  "alternateName": "Cosmetic Tooth Whitening Treatment",
  "url": "https://ramacarepolyclinic.ae/services/teeth-bleaching-dubai",
  "description": "Teeth bleaching in Dubai at RamaCare Polyclinic offers professional cosmetic tooth whitening to brighten and enhance your smile using safe, clinically approved methods performed by DHA-licensed dental experts.",
  "procedureType": "Cosmetic dental procedure",
  "bodyLocation": "Teeth",
  "howPerformed": "Teeth bleaching is performed using professional whitening agents applied by a dental specialist to safely lighten the color of teeth and reduce stains caused by food, beverage, smoking, or aging.",
  "preparation": "Comprehensive oral exam is conducted before treatment. Patients are advised to brush and floss prior to the session.",
  "followup": "Routine dental hygiene and regular check-ups are recommended to maintain bleaching results.",
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
    "Teeth discoloration",
    "Surface stains",
    "Yellowed or dull teeth"
  ],
  "possibleComplication": "Temporary sensitivity may occur in some patients."
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
