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

export default function SkinTighteningPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Skin Tightening Treatment';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment/skin-tightening');

  return (
    <Layout>
      <Head>
  <title>Skin Tightening Treatment in Dubai for Firmer Youthful Skin</title>
  <meta name="description" content="Skin tightening treatment in Dubai helps improve skin firmness and elasticity using safe, non-invasive technologies under expert medical supervision." />
  <meta name="keywords" content="Skin tightening treatment in Dubai, Non-surgical skin tightening in Dubai, Laser skin tightening Dubai, Facial skin tightening in Dubai, Body skin tightening in Dubai, Anti-aging skin treatment Dubai, Skin firming treatment, Skin laxity treatment Dubai, Advanced skin tightening therapy, Best skin tightening treatment in Dubai, Skin rejuvenation Dubai, Skin tightening treatment in Dubai price, Skin tightening treatment in dubai cost, Best skin tightening treatment in dubai, Skin tightening treatment in dubai for face, Laser skin tightening dubai, Skin tightening treatments for face, Best skin tightening treatments for face, Skin Laser Treatment price in Dubai" />
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
