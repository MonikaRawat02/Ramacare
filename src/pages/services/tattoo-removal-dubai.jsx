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

export default function TattooRemovalPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Tattoo Removal';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/tattoo-removal');

  return (
    <Layout>
      <Head>
  <title>Tattoo Removal in Dubai for Safe and Effective Results</title>
  <meta name="description" content="Tattoo removal in Dubai uses advanced laser treatments to safely fade or remove unwanted tattoos, restoring clear, natural-looking skin under expert care." />
  <meta name="keywords" content="Tattoo removal in Dubai, Laser tattoo removal Dubai, Professional tattoo removal, Unwanted tattoo removal, Non-surgical tattoo removal, Safe tattoo fading Dubai, Tattoo lightening treatment, Permanent tattoo removal Dubai, Skin restoration after tattoo, Expert tattoo removal clinic" />
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
