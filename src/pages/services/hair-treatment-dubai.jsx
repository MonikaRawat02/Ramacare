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

export default function HairTreatmentPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Hair Treatment';

  // Get content from data file
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'hair-treatment');

  return (
    <Layout>
      <Head>
  <title>Hair Treatment Dubai – Advanced Solutions for Healthy Hair</title>
  <meta name="description" content="RamaCare offers expert hair treatments in Dubai for hair loss, thinning, and scalp care. Restore your hair with trusted specialists today" />
  <meta name="keywords" content="Hair treatment in Dubai, Hair treatment in Jumeirah 1, Hair loss treatment Dubai, Hair restoration Dubai, PRP hair treatment Dubai, Mesotherapy hair treatment Dubai, Hair transplant Dubai, Thinning hair solutions Dubai, Scalp treatment Dubai, Medical hair clinic Dubai, DHA licensed hair clinic, Hair care specialists in Dubai, Advanced hair therapy Dubai" />
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

