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

export default function PigmentationPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Pigmentation Treatment';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/pigmentation');

  return (
    <Layout>
      <Head>
  <title>Pigmentation Treatment in Dubai for Even Skin Tone</title>
  <meta name="description" content="Pigmentation treatment in Dubai helps reduce dark spots, melasma, and uneven skin tone through safe, doctor-guided dermatology care." />
  <meta name="keywords" content="Pigmentation treatment in Dubai, Dark spots treatment in Dubai, Pigmentation Dubai, Uneven skin tone treatment, Skin discoloration Dubai, Hyperpigmentation treatment, Dermatology treatment Dubai, Skin brightening therapy Dubai" />
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
