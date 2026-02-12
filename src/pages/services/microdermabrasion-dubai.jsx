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

export default function MicrodermabrasionPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Microdermabrasion';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/microdermabrasion');

  return (
    <Layout>
      <Head>
  <title>Microdermabrasion in Dubai for Smooth Radiant Skin</title>
  <meta name="description" content="Microdermabrasion in Dubai gently exfoliates the skin to improve texture, reduce dullness, unclog pores, and support a clearer, healthier complexion." />
  <meta name="keywords" content="Microdermabrasion in Dubai, Skin exfoliation treatment Dubai, Microdermabrasion facial Dubai, Skin rejuvenation Dubai, Dead skin removal treatment, Open pores treatment Dubai, Skin texture improvement, Professional facial treatment Dubai, Non-invasive skin treatment, Clear skin therapy Dubai, Microdermabrasion in dubai price, Microdermabrasion in dubai cost, Best microdermabrasion in dubai, Microdermabrasion in dubai offers, Microdermabrasion near me, Microdermabrasion benefits, Microdermabrasion meaning, Microdermabrasion vs HydraFacial" />
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
