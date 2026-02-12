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
