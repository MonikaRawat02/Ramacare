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

export default function GastrointestinalDisordersPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Gastrointestinal Disorders';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'gastrointestinal-disorders');

  return (
    <Layout>
      <Head>
  <title>Gastrointestinal Disorders Treatment in Dubai Care</title>
  <meta name="description" content="Gastrointestinal disorders treatment in Dubai offers expert care for acidity, IBS, constipation, ulcers, and digestive issues with accurate diagnosis and guidance." />
  <meta name="keywords" content="Gastrointestinal disorders treatment in Dubai, Digestive disorders treatment in Dubai, Stomach problem treatment in Dubai, IBS treatment Dubai, Acidity and gas treatment in Dubai, Gut Health Clinic Dubai, Digestive health care Dubai, Gastrointestinal care Dubai, Ayurvedic digestive treatment in Dubai, Chronic digestive disorder treatment" />
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
