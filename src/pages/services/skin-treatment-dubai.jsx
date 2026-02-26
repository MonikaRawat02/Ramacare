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

export default function SkinTreatmentPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Skin Treatment';

  // Get content from data file
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment');

  return (
    <Layout>
        <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://ramacarepolyclinic.ae/services/skin-treatment-dubai/#medicalbusiness",
  "name": "Skin Treatment in Dubai",
  "url": "https://ramacarepolyclinic.ae/services/skin-treatment-dubai",
  "description": "Advanced skin treatment in Dubai including acne treatment, pigmentation therapy, eczema management, psoriasis care, skin rejuvenation, and holistic dermatology solutions by DHA-licensed specialists in Jumeirah 1.",
  "medicalSpecialty": "Dermatology",
  "parentOrganization": {
    "@type": "MedicalOrganization",
    "@id": "https://ramacarepolyclinic.ae/#organization",
    "name": "RamaCare Polyclinic"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jumeirah 1, Ground Floor, Jumeirah Terrace Building",
    "addressLocality": "Dubai",
    "postalCode": "393558",
    "addressCountry": "AE"
  },
  "telephone": "+971566597878",
  "areaServed": {
    "@type": "City",
    "name": "Dubai"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Skin Treatments",
    "itemListElement": [
      { "@type": "MedicalProcedure", "name": "Acne Treatment" },
      { "@type": "MedicalProcedure", "name": "Pigmentation & Melasma Treatment" },
      { "@type": "MedicalProcedure", "name": "Eczema Management" },
      { "@type": "MedicalProcedure", "name": "Psoriasis Treatment" },
      { "@type": "MedicalProcedure", "name": "Skin Rejuvenation Therapy" }
    ]
  }
}`
        }}
      />
    </Head>
      <TreatmentHero 
        categoryName={categoryName}
        subcategoryName={subcategoryName}
        description={content?.hero?.description}
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
      <FAQSection content={content?.faq}
      
      />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
