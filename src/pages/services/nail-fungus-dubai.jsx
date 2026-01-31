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

export default function NailFungusPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Nail Fungus';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/nail-fungus');

  return (
    <Layout>
      <Head>
  <title>Nail Fungus Treatment in Dubai for Healthy Nails</title>
  <meta name="description" content="Nail fungus treatment in Dubai effectively clears fungal infections, restores nail health, and prevents recurrence using safe, doctor-supervised care." />
  <meta name="keywords" content="Nail fungus treatment Dubai, Fungal nail infection Dubai, Toenail fungus treatment, Fingernail fungus removal, Medical nail care Dubai, Laser nail fungus treatment, Anti-fungal therapy Dubai, Professional nail treatment, Healthy nails Dubai, Nail infection treatment" />
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
