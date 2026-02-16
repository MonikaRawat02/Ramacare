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

export default function DryNeedlingPage() {
  const categoryName = 'Physiotherapy';
  const subcategoryName = 'Dry Needling';

  // Get content from data file
  const content = getSubcategoryContent('physiotherapy-dubai', 'dry-needling');

 return (
   <Layout>
    <Head>
  <title>Dry Needling Therapy in Dubai for Muscle Pain Relief</title>
  <meta name="description" content="Dry needling therapy in Dubai helps reduce muscle pain, release trigger points, and improve movement. Safe, evidence-based care provided by licensed physiotherapists." />
  <meta name="keywords" content="Dry needling therapy in Dubai, Dry needling treatment Dubai, Dry needling Dubai price, Trigger point therapy Dubai, Physiotherapy dry needling Dubai, Muscle pain treatment Dubai, Sports injury physiotherapy Dubai, Dry needling near me, Pain relief physiotherapy Dubai" />
</Head>

     <TreatmentHero 
       categoryName={categoryName}
       subcategoryName={subcategoryName}
       hero={content?.hero}
     />
     <QuickNavigation />
     <DoctorsSection content={content?.doctors} />
<<<<<<< HEAD
     {/* <CertificationsSection content={content?.certifications} /> */}
=======
     <CertificationsSection content={content?.certifications} />
>>>>>>> 2c7edfb39c375a6293572c92f566a1df55be84c5
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
