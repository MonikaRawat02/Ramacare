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

export default function SnapOnSmilePage() {
  const categoryName = 'Dental';
  const subcategoryName = 'Snap On Smile';

  // Get content from data file
  const content = getSubcategoryContent('dental-dubai', 'snap-on-smile');

  return (
    <Layout>
      <Head>
  <title>Snap-On Smile in Dubai | Affordable Smile Makeover</title>
  <meta name="description" content="Transform your smile with Snap-On Smile in Dubai. Non-invasive, comfortable, and affordable dental solution for a natural-looking, confident smile by skilled dentists." />
  <meta name="keywords" content="Snap-On Smile Dubai, Snap-on teeth Dubai, Temporary veneers Dubai, Smile makeover Dubai, Non-invasive dental veneers Dubai, Affordable Snap-On Smile Dubai, Cosmetic dentistry Dubai, Teeth restoration Dubai, Natural-looking Snap-On Smile Dubai, DHA-licensed dentist in Dubai, Quick smile makeover Dubai, Removable Veneers Dubai" />
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
