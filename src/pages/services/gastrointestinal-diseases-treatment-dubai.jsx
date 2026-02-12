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

export default function GastrointestinalDiseasesTreatmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Gastrointestinal Diseases Treatment';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'gastrointestinal-diseases-treatment');

  return (
    <Layout>
      <Head>
  <title>Gastrointestinal Treatment in Dubai | Digestive Health Care</title>
  <meta name="description" content="Receive expert gastrointestinal treatment in Dubai for stomach, intestinal, and digestive issues. Personalized care, modern diagnostics, and effective solutions for lasting health." />
  <meta name="keywords" content="Gastrointestinal treatment in Dubai, Digestive health Dubai, Stomach problem treatment in Dubai, Intestinal disorders in Dubai, Gut health care Dubai, Gastroenterologist Dubai, Digestive disorder solutions Dubai, Ayurvedic digestive treatment in Dubai, Gastroscopy Dubai, Gastro prevention Dubai, DHA licensed gastro clinic in Dubai, IBS treatment Dubai" />
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

