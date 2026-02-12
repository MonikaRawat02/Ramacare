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

export default function OxygeneoIlluminateFacialPage() {
  const categoryName = 'Facial';
  const subcategoryName = 'Oxygeneo Illuminate Facial';

   // Get content from data file
    const content = getSubcategoryContent('facial-dubai', 'oxygeneo-illuminate-facial');

  return (
     <Layout>
      <Head>
  <title>OxyGeneo Illuminate Facial in Dubai – Brighten Your Skin</title>
  <meta name="description" content="OxyGeneo Illuminate Facial in Dubai exfoliates, oxygenates, and brightens skin, leaving it smooth, radiant, and refreshed under professional care." />
  <meta name="keywords" content="OxyGeneo Illuminate Facial in Dubai, Skin brightening facial in Dubai, Exfoliating facial treatment, Oxygenating facial in Dubai, Radiant skin therapy Dubai, Professional facial treatment, Skin rejuvenation Dubai, Glow-enhancing facial in Dubai, Anti-aging facial in Dubai, Healthy skin facial in Dubai" />
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
