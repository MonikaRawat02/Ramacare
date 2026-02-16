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

export default function ScoliosisTreatmentPage() {
  const categoryName = 'Physiotherapy';
  const subcategoryName = 'Scoliosis Treatment';

  // Get content from data file
  const content = getSubcategoryContent('physiotherapy-dubai', 'scoliosis');

 return (
   <Layout>
    <Head>
  <title>Scoliosis Treatment in Dubai with Expert Physiotherapy</title>
  <meta name="description" content="Get safe scoliosis treatment in Dubai with assessment led by specialists, personalized physiotherapy plans, posture correction, and long-term spine care." />
  <meta name="keywords" content="Scoliosis treatment in Dubai, Scoliosis physiotherapy Dubai, Spine alignment treatment Dubai, Posture correction therapy Dubai, Back curvature treatment in Dubai, Non-surgical scoliosis treatment, Pediatric scoliosis treatment Dubai, Adult scoliosis management in Dubai, Rehabilitation physiotherapy Dubai, Spine care clinic Dubai" />
</Head>

     <TreatmentHero 
       categoryName={categoryName}
       subcategoryName={subcategoryName}
       hero={content?.hero}
     />
     <QuickNavigation />
     <DoctorsSection content={content?.doctors} />
<<<<<<< HEAD
     {/* <CertificationsSection  /> */}
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
