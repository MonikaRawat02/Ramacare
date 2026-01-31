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

export default function FemaleGenitalRejuvenationPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Female Genital Rejuvenation';

  // Get content from data file - nested path
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'laser-treatment/female-genital-rejuvenation');

  return (
    <Layout>
      <Head>
  <title>Female Genital Rejuvenation for Comfort and Confidence</title>
  <meta name="description" content="Female genital rejuvenation restores vaginal health, tightness, and comfort using safe, minimally invasive treatments under expert medical supervision." />
  <meta name="keywords" content="Female genital rejuvenation, Vaginal tightening treatment, Non-surgical genital rejuvenation, Vaginal health therapy, Intimate wellness treatment, Minimally invasive vaginal care, Vaginal laxity treatment, Medical genital rejuvenation, Women’s intimate care, Expert genital treatment" />
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
