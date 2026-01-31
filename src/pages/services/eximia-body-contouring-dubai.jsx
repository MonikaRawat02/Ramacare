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

export default function BodyShapingPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Eximia Body Contouring';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'body-shaping/eximia-body-contouring');

  return (
    <Layout>
      <Head>
  <title>Eximia Body Contouring in Dubai for Slim and Toned Body</title>
  <meta name="description" content="Eximia body contouring in Dubai helps reduce fat, tighten skin, and sculpt your body safely using advanced non-invasive technology under expert care." />
  <meta name="keywords" content="Eximia body contouring Dubai, Non-surgical body sculpting Dubai, Fat reduction treatment Dubai, Skin tightening Dubai, Body slimming treatment Dubai, Professional body contouring, Non-invasive fat removal, Toned body treatment Dubai, Body shaping therapy, Expert body contouring clinic" />
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
