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

export default function SignatureHydraFacialPage() {
  const categoryName = 'Facial';
  const subcategoryName = 'Signature Hydra Facial ';

   // Get content from data file
    const content = getSubcategoryContent('facial-dubai', 'signature-hydra-facial');

  return (
     <Layout>
      <Head>
  <title>Signature HydraFacial Dubai – Glowing Skin at RamaCare</title>
  <meta name="description" content="Signature HydraFacial in Dubai at RamaCare rejuvenates and hydrates skin, leaving it refreshed, radiant, and healthy under expert supervision." />
  <meta name="keywords" content="Signature HydraFacial Dubai, HydraFacial treatment Dubai, Glowing skin facial in Dubai, Skin rejuvenation Dubai, Hydrating facial treatment, Anti-aging facial in Dubai, Professional facial in Dubai, Deep cleansing facial in Dubai, Radiant skin therapy, RamaCare HydraFacial" />
   <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "@id": "https://ramacarepolyclinic.ae/services/signature-hydra-facial-dubai#procedure",
              "name": "Signature Hydra Facial in Dubai",
              "alternateName": "HydraFacial Skin Treatment",
              "url": "https://ramacarepolyclinic.ae/services/signature-hydra-facial-dubai",
              "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/signature-hydra-facial-dubai",
              "description": "The Signature Hydra Facial is a non-invasive skin rejuvenation treatment that deeply cleanses, exfoliates, extracts impurities, and infuses the skin with hydrating serums to improve texture, hydration, and overall radiance. It is suitable for dry, dull, or sensitive skin and helps reduce fine lines and uneven tone.",
              "procedureType": "Non-invasive dermatological facial treatment",
              "howPerformed": "Performed by skincare specialists, the procedure involves multi-step cleansing, exfoliation, extraction of impurities, and infusion of hydrating and antioxidant serums tailored to the skin’s needs.",
              "preparation": "Minimal preparation is needed; patients should arrive with clean skin and avoid heavy makeup before the session.",
              "followup": "Repeat sessions monthly or as advised by clinicians help maintain hydration, glow, and skin health.",
              "indication": [
                "Dry or dull skin",
                "Uneven skin texture",
                "Fine lines and wrinkles",
                "Pigmentation concerns",
                "Congested pores"
              ],
              "provider": {
                "@type": "MedicalBusiness",
                "name": "RamaCare Polyclinic – Aesthetic & Dermatology Care",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Jumeirah Terrace Building, Ground Floor",
                  "addressLocality": "Jumeirah 1",
                  "addressRegion": "Dubai",
                  "postalCode": "393558",
                  "addressCountry": "AE"
                },
                "telephone": "+971566597878",
                "areaServed": {
                  "@type": "City",
                  "name": "Dubai"
                },
                "priceRange": "$$"
              }
            })
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
