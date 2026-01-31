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

export default function FunctionalExercisesPage() {
  const categoryName = 'Physiotherapy';
  const subcategoryName = 'Functional Excercise';

  // Get content from data file
  const content = getSubcategoryContent('physiotherapy-dubai', 'functional-exercises');

 return (
   <Layout>
    <Head>
  <title>Functional Exercises Dubai for Rehab and Physiotherapy Care</title>
  <meta name="description" content="Functional exercises in Dubai support rehabilitation and physiotherapy by improving strength, balance, and movement through guided programs tailored to daily activities." />
  <meta name="keywords" content="Functional exercises in Dubai, Functional training Dubai, Rehab exercises in Dubai, Physiotherapy exercises in Dubai, Movement therapy Dubai, Post injury rehabilitation in Dubai, Strength and mobility exercises, Core stability training Dubai, Physical therapy Dubai, Functional rehab programs in Dubai" />
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
