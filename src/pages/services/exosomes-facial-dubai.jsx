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

export default function ExosomesFacialDubaiPage() {
  const categoryName = 'Facial';
  const subcategoryName = 'Exosomes Facial ';

   // Get content from data file
    const content = getSubcategoryContent('facial-dubai', 'exosomes-facial');

  return (
    <Layout>
      <Head>
  <title>Exosomes Facial Dubai – Advanced Skin Rejuvenation</title>
  <meta name="description" content="Exosomes Facial in Dubai is performed by specialists to repair skin, boost collagen, reduce fine lines, and restore a youthful, radiant appearance safely." />
  <meta name="keywords" content="Exosomes Facial Dubai, Skin rejuvenation Dubai, Anti-aging facial in Dubai, Collagen-boosting facial, Advanced facial treatment, Youthful skin therapy in Dubai, Professional facial Din ubai, Fine lines reduction in Dubai, Skin repair treatment, Cosmetic facial in Dubai" />
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
