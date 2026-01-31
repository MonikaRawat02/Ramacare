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

export default function WoundStitchingServicesPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Wound Stitching Services';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'wound-stitching-services');

  return (
    <Layout>
      <Head>
  <title>Wound Stitching Services in Dubai With Skilled Medical Care</title>
  <meta name="description" content="Wound stitching services in Dubai offer safe, timely care for cuts and injuries using sterile techniques, expert doctors, and proper aftercare for faster healing." />
  <meta name="keywords" content="Wound stitching services in Dubai, Emergency wound stitching in Dubai, Cut and laceration treatment in Dubai, Minor injury treatment in Dubai, Stitches removal Dubai, Wound care clinic Dubai, Accident injury treatment in Dubai, First aid and suturing in Dubai, Surgical stitching in Dubai" />
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
