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

export default function AyurvedicDietPlanPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Ayurvedic Diet Plan';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'ayurvedic-diet-plan');

  return (
    <Layout>
      <Head>
  <title>Ayurvedic Diet Plan in Dubai | Personalized Meal Guidance</title>
  <meta name="description" content="Follow a personalized Ayurvedic diet plan in Dubai to balance your doshas, support digestion, boost immunity, and maintain a healthy weight naturally and safely." />
  <meta name="keywords" content="Ayurvedic diet plan Dubai, Dosha-based diet Dubai, Ayurvedic meal plan Dubai, Personalized diet plan Dubai, Ayurvedic nutrition Dubai, Weight Management Ayurveda Dubai, Digestive Health Ayurveda Dubai, Immunity-boosting diet in Dubai, Healthy eating Ayurveda Dubai, Ayurveda lifestyle Dubai, Herbal diet recommendations in Dubai, Ayurvedic food types in Dubai" />
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

