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

export default function UltrasoundTherapyPage() {
  const categoryName = 'Physiotherapy';
  const subcategoryName = 'Ultrasound Therapy';

  // Get content from data file
  const content = getSubcategoryContent('physiotherapy-dubai', 'ultrasound-therapy');

  return (
    <Layout>
      <Head>
  <title>Ultrasound Therapy in Dubai | Safe Pain Relief Treatment</title>
  <meta name="description" content="Ultrasound therapy in Dubai helps reduce pain, improve mobility, and speed up healing for muscle and joint conditions with safe, guided physiotherapy care." />
  <meta name="keywords" content="Ultrasound therapy in Dubai, Therapeutic ultrasound Dubai, Ultrasound physiotherapy Dubai, Pain relief ultrasound therapy, Muscle injury treatment in Dubai, Joint pain therapy in Dubai, Sports injury ultrasound therapy, Physiotherapy ultrasound treatment, Rehabilitation therapy Dubai, Non-surgical pain treatment in Dubai" />
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
<<<<<<< HEAD
      <FAQSection content={content?.faq}
       />
=======
      <FAQSection content={content?.faq} />
>>>>>>> 2c7edfb39c375a6293572c92f566a1df55be84c5
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
