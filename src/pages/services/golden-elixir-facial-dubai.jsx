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

export default function GoldenElixirFacialPage() {
  const categoryName = 'Facial';
  const subcategoryName = 'Golden Elixir (24K Gold) Facial';

   // Get content from data file
    const content = getSubcategoryContent('facial-dubai', 'golden-elixir-facial');

  return (
     <Layout>
      <Head>
  <title>Golden Elixir (24K Gold) Facial in Dubai – Radiant Skin</title>
  <meta name="description" content="Golden Elixir (24K Gold) Facial in Dubai rejuvenates and nourishes the skin, promoting radiance, hydration, and a youthful, glowing appearance under expert care." />
  <meta name="keywords" content="Golden Elixir 24K Gold Facial in Dubai, 24K Gold facial treatment Dubai, Luxury facial Dubai, Skin rejuvenation Dubai, Hydrating facial treatment Dubai, Anti-aging facial Din ubai, Radiant skin treatment, Professional facial in Dubai, Glowing skin therapy Dubai, Spa facial treatment Dubai" />
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
