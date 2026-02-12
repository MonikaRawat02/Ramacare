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

export default function FractionalCo2LaserPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Fractional CO2 Laser';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/fractional-co2-laser');

  return (
    <Layout>
      <Head>
  <title>Fractional CO2 Laser in Dubai for Skin Resurfacing</title>
  <meta name="description" content="Fractional CO2 laser in Dubai improves skin texture, reduces scars, fine lines, and pigmentation, delivering smoother, youthful skin under expert care." />
  <meta name="keywords" content="Fractional CO2 laser Dubai, Skin resurfacing Dubai, Scar removal treatment Dubai, Acne scar treatment Dubai, Fine lines reduction Dubai, Pigmentation treatment Dubai, Non-surgical skin rejuvenation, Laser skin treatment Dubai, Professional CO2 laser therapy, Anti-aging skin treatment" />
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
