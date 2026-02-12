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

export default function AyurvedicHairfallTreatmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Ayurvedic Hairfall Treatment';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'ayurvedic-hairfall-treatment');

  return (
    <Layout>
      <Head>
  <title>Ayurvedic Hair Fall Treatment in Dubai – Safe & Natural</title>
  <meta name="description" content="Control hair fall naturally with Ayurvedic treatments in Dubai. Herbal remedies, scalp therapies, and personalized care help restore healthy, strong hair." />
  <meta name="keywords" content="Ayurvedic Hair Fall Treatment Dubai, Hair Loss Treatment Ayurveda Dubai, Natural Hair Regrowth Dubai, Herbal Hair Care Dubai, Ayurvedic Hair Therapy Dubai, Hair Strengthening Treatments Dubai, Hair Fall Solutions Dubai, Ayurveda for Hair Loss, Ayurvedic Scalp Treatment Dubai, Hair Growth Oils Dubai, Best Ayurvedic Hair Treatment, Personalized Hair Care Dubai" />
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

