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

export default function SkinBoostersPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Skin Boosters';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/skin-boosters');

  return (
    <Layout>
      <Head>
  <title>Skin Boosters in Dubai – Hydrate and Rejuvenate Your Skin</title>
  <meta name="description" content="Skin boosters in Dubai provide deep hydration, improve skin texture, and restore a youthful, radiant glow under professional supervision." />
  <meta name="keywords" content="Skin boosters in Dubai, Skin hydration treatment Dubai, Facial rejuvenation Dubai, Anti-aging skin therapy, Professional skin booster treatment, Radiant skin treatment Dubai, Skin texture improvement, Youthful skin therapy in Dubai, Skin revitalization Dubai, Deep hydration facial Dubai" />
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
