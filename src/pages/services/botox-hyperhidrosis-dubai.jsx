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

export default function BotoxHyperhidrosisPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Botox Hyperhidrosis';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/botox-hyperhidrosis');

  return (
    <Layout>
      <Head>
  <title>Botox Hyperhidrosis in Dubai for Excessive Sweating</title>
  <meta name="description" content="Botox hyperhidrosis in Dubai helps manage excessive sweating safely by reducing underarm, palm, and foot sweating under expert medical care." />
  <meta name="keywords" content="Botox hyperhidrosis in Dubai, Excessive sweating treatment Dubai, Hyperhidrosis treatment Dubai, Botox for sweating Dubai, Underarm sweating treatment, Palmar hyperhidrosis treatment, Non-surgical sweating control, Medical hyperhidrosis care, Sweat reduction treatment Dubai" />
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
