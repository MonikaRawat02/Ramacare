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

export default function AnalysisOfIndividualTreatmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Analysis-Of-Individual';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'analysis-of-individual');

  return (
    <Layout>
      <Head>
  <title>Individual Analysis in Dubai | Ayurvedic Health Assessment</title>
  <meta name="description" content="Get a personalized analysis of your health in Dubai. Ayurvedic experts assess your dosha, lifestyle, and body constitution to create natural wellness plans." />
  <meta name="keywords" content="Analysis of the individual Dubai, Ayurvedic body analysis Dubai, Dosha assessment Dubai, Personalized Ayurveda Dubai, Ayurvedic consultation in Dubai, Health evaluation in Dubai, Holistic wellness Dubai, Ayurvedic lifestyle guidance, Natural treatment Dubai, Ayurveda expert in Dubai, Individual health assessment, Traditional Ayurveda Dubai" />
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

