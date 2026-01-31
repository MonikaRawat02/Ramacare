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

export default function ManagementofAllergyPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Management of Allergy';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'management-of-allergy');

  return (
    <Layout>
      <Head>
  <title>Management of Allergy in Dubai With Expert Medical Care</title>
  <meta name="description" content="Management of allergy in Dubai provides personalised care for skin, food, respiratory, and seasonal allergies with accurate diagnosis and long-term relief plans." />
  <meta name="keywords" content="Management of allergy in Dubai, Allergy treatment Dubai, Allergy clinic Dubai, Skin allergy treatment Dubai, Respiratory allergy treatment in Dubai, Food allergy management in Dubai, Seasonal allergy care Dubai, Chronic allergy treatment in Dubai, Allergy specialist Dubai, Allergy diagnosis and treatment in Dubai" />
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
