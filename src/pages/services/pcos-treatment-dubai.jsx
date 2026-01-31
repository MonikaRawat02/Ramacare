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

export default function PCOSTreatmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'PCOS Treatment';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'pcos-treatment');

  return (
    <Layout>
      <Head>
  <title>Ayurvedic PCOS Treatment in Dubai | Hormone Balance Naturally</title>
  <meta name="description" content="Manage PCOS naturally in Dubai with Ayurvedic therapies, Panchakarma detox, herbal remedies, diet, and lifestyle guidance for hormonal balance and fertility support." />
  <meta name="keywords" content="Ayurvedic PCOS treatment Dubai, PCOS management Dubai, Hormone balance Dubai, Panchakarma for PCOS Dubai, Herbal PCOS remedies Dubai, Women’s Health Dubai, PCOS diet and lifestyle in Dubai, Ayurvedic gynecology Dubai, Fertility support Dubai, PCOS therapy Dubai, DHA licensed Ayurvedic doctor in Dubai, Holistic PCOS treatment Dubai" />
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

