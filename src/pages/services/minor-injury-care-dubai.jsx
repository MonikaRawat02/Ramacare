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

export default function MinorInjuryCarePage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Minor Injury Care';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'minor-injury-care');

  return (
    <Layout>
      <Head>
  <title>Minor Injury Care in Dubai | Fast & Expert Medical Help</title>
  <meta name="description" content="Get expert minor injury care in Dubai for cuts, bruises, sprains, and wounds. Quick, safe treatment by experienced doctors with proper aftercare guidance." />
  <meta name="keywords" content="Minor injury care in Dubai, Emergency minor injury treatment, Cuts and bruises treatment in Dubai, Sprains and strains care in Dubai, Wound care Dubai, Accident injury treatment in Dubai, First aid clinic Dubai, Injury management Dubai, Quick medical care in Dubai, Minor trauma care in Dubai, Dubai urgent care clinic, Expert injury care in Dubai" />
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
