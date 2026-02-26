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

export default function GumDiseaseTreatmentPage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Gum Disease Treatment';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'gum-disease-treatment');

  return (
    <Layout>
      <Head>
  <title>Gum Disease Treatment in Dubai | Healthy Gums Care</title>
  <meta name="description" content="Protect your oral health with expert gum disease treatment in Dubai. Safe, effective solutions by licensed dentists to prevent gum infection and maintain healthy gums." />
  <meta name="keywords" content="Gum disease treatment Dubai, Periodontitis treatment Dubai, Gum infection treatment, Gum care Dubai, Gum disease dentist Dubai, Periodontal therapy Dubai, Gum inflammation treatment, Oral health Dubai, Healthy gums Dubai, dental clinic for gums, Gum treatment near me in Dubai, Professional gum care" />
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Gum Disease Treatment in Dubai",
  "alternateName": "Periodontal Disease Treatment",
  "url": "https://ramacarepolyclinic.ae/services/gum-disease-treatment-dubai",
  "description": "Gum disease treatment in Dubai at RamaCare Polyclinic offers comprehensive periodontal care by DHA-licensed dentists to treat gingivitis and periodontitis, restore gum health, and prevent tooth loss.",
  "procedureType": "Periodontal dental procedure",
  "bodyLocation": "Gums and supporting structures",
  "howPerformed": "Gum disease treatment includes professional scaling & root planing to remove plaque and tartar below the gumline, antimicrobial therapy, and periodontal maintenance guided by dental specialists.",
  "preparation": "Oral examination and periodontal assessment are performed before treatment. X-rays may be taken to assess bone levels.",
  "followup": "Routine periodontal check-ups and hygiene maintenance are recommended to sustain healthy gums.",
  "indication": [
    "Gingivitis",
    "Early periodontitis",
    "Advanced periodontitis",
    "Bleeding or swollen gums",
    "Persistent bad breath due to gum disease"
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
    "priceRange": "$$"
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
