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

export default function PelvicFloorTherapyPage() {
  const categoryName = 'Physiotherapy';
  const subcategoryName = 'Pelvic Floor Therapy';

  // Get content from data file
  const content = getSubcategoryContent('physiotherapy-dubai', 'pelvic-floor-therapy');

  return (
    <Layout>
      <Head>
  <title>Pelvic Floor Therapy in Dubai for Strength and Recovery</title>
  <meta name="description" content="Pelvic floor therapy in Dubai helps improve bladder control, core strength, and recovery after childbirth or surgery through safe, guided physiotherapy care." />
  <meta name="keywords" content="Pelvic floor therapy in Dubai, Pelvic floor physiotherapy Dubai, Pelvic floor treatment Dubai, Women’s health physiotherapy Dubai, Postnatal pelvic floor therapy, Pelvic floor exercises Dubai, Urinary incontinence treatment Dubai, Pelvic pain physiotherapy, Core strengthening physiotherapy, Rehabilitation physiotherapy Dubai" />
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
