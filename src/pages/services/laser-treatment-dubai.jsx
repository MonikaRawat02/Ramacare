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

export default function LaserTreatmentPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Laser Treatment';

  // Get content from data file
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment');

  return (
    <Layout>
        <Head>
  <title>Laser Treatment in Dubai | Safe & Advanced Laser Clinic</title>
  <meta name="description" content="Experience expert laser treatment in Dubai for hair removal, skin rejuvenation, and pigmentation. Personalized care with safe, advanced technology by licensed specialists." />
  <meta name="keywords" content="Laser treatment in Dubai, Laser clinic Dubai, Laser hair removal Dubai, Skin laser treatment Dubai, Laser pigmentation treatment Dubai, Laser skin rejuvenation Dubai, DHA licensed laser clinic, Advanced laser therapy Dubai, Medical laser clinic Dubai, Safe laser treatment in Dubai, Cosmetic laser treatment Dubai, Pico laser treatment Dubai" />
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

