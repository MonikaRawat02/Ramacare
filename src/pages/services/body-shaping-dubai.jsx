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

export default function BodyShapingPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Body Shaping';

  // Get content from data file
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'body-shaping');

  return (
    <Layout>
      <Head>
  <title>Body Shaping in Dubai | Expert Non-Surgical Body Sculpting</title>
  <meta name="description" content="Achieve your ideal body with expert body shaping in Dubai—safe, non-surgical treatments for fat reduction, contouring, and toning with personalized care." />
  <meta name="keywords" content="Body shaping in Dubai, Body sculpting Dubai, Body contouring Dubai, Non-surgical body shaping in Dubai, Fat reduction Dubai, Slimming treatments in Dubai, Muscle toning in Dubai, Safe body contouring in Dubai, Personalized body treatment Dubai, Cellulite treatment Dubai, Medical body shaping in Dubai, DHA licensed body clinic" />
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

