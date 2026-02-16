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

export default function TeethScalingPolishingPage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Teeth Scaling & Polishing';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'teeth-scaling-polishing');

  return (
    <Layout>
      <Head>
  <title>Teeth Scaling & Polishing in Dubai | Professional dental Care</title>
  <meta name="description" content="Maintain healthy teeth with professional scaling and polishing in Dubai. Safe, effective dental cleaning by licensed dentists for a brighter, fresher smile." />
  <meta name="keywords" content="Teeth scaling in Dubai, Teeth Polishing in Dubai, dental cleaning in Dubai, Professional teeth cleaning, Plaque removal Dubai, Tartar removal Dubai, Oral hygiene Dubai, Licensed dentist in Dubai, Routine dental cleaning, Preventive dental care in Dubai, Healthy teeth Dubai, Bright Smile dental Care" />
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
