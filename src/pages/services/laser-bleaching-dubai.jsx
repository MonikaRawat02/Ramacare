import Layout from '../../../components/Layout';
import Head from "next/head";
import TreatmentHero from '../../../components/TreatmentHero';
import QuickNavigation from '../../../components/QuickNavigation';
import DoctorsSection from '../../../components/DoctorsSection';
import CertificationsSection from '../../../components/CertificationsSection';
import TreatmentOverview from '../../../components/TreatmentOverview';
import HealingJourney from '../../../components/HealingJourney';
import TreatmentBenefits from '../../../components/TreatmentBenefits';
import PatientTestimonials from '../../../components/VideoTestimonials';
// import PricingPackages from '../../../components/PricingPackages';
import PaymentInsurance from '../../../components/PaymentInsurance';
import FAQSection from '../../../components/Faq';
import BookConsultation from '../../../components/BookConsultation';
import { getSubcategoryContent } from '../../data/subcategoryContent';

export default function LaserBleachingPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Laser Bleaching for Skin';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/laser-bleaching');

  return (
    <Layout>
      <Head>
  <title>Laser Bleaching in Dubai for Brighter and Even Skin</title>
  <meta name="description" content="Laser bleaching in Dubai reduces dark spots, pigmentation, and uneven skin tone, restoring a radiant, smooth complexion under expert medical care." />
  <meta name="keywords" content="Laser bleaching in Dubai, Skin brightening laser Dubai, Pigmentation reduction Dubai, Dark spots treatment Dubai, Facial laser treatment Dubai, Even skin tone treatment, Non-surgical skin brightening, Professional laser therapy Dubai, Skin rejuvenation Dubai, Safe laser skin treatment" />
</Head>

      <TreatmentHero 
        categoryName={categoryName}
        subcategoryName={subcategoryName}
        hero={content?.hero}
      />
      <QuickNavigation />
      <DoctorsSection content={content?.doctors} />
      <CertificationsSection content={content?.certifications} />
      <TreatmentOverview 
        subcategoryName={subcategoryName}
        content={content?.overview}
      />
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
       <PatientTestimonials content={content?.testimonials} />
    {/* <PricingPackages content={content?.pricing} /> */}
    <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
