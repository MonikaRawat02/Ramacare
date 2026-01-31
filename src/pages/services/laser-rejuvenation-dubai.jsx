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

export default function LaserRejuvenationPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Laser Rejuvenation';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/laser-rejuvenation');

  return (
    <Layout>
      <Head>
  <title>Laser Rejuvenation in Dubai for Youthful, Radiant Skin</title>
  <meta name="description" content="Laser rejuvenation in Dubai helps reduce wrinkles, fine lines, and pigmentation while improving skin texture and glow through safe, expert care." />
  <meta name="keywords" content="Laser rejuvenation in Dubai, Skin rejuvenation Dubai, Anti-aging laser treatment Dubai, Wrinkle reduction Dubai, Fine lines treatment Dubai, Pigmentation correction Dubai, Facial laser therapy Dubai, Non-surgical skin rejuvenation, Professional laser skin treatment, Youthful skin treatment Dubai" />
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
