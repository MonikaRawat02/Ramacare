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
import TreatmentAdditionalContent from '../../../components/TreatmentAdditionalContent';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function HairTreatmentPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Hair Treatment';

  // Get content from data file
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'hair-treatment');

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'professional-benefits', label: 'Professional Benefits' },
    { id: 'why-choose', label: 'Why Choose Us' },
    { id: 'causes', label: 'Causes' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' }
  ];

  return (
    <Layout>
      <Head>
  <title key="title">Hair Treatment in Dubai – Stop Hair Fall & Regrow Hair Fast</title>
  <meta name="description" content="Struggling with hair fall or thinning? Get expert hair treatment in Dubai for stronger, healthier hair. Safe, effective care. Book now!" key="description" />
  <meta name="keywords" content="Hair treatment in Dubai, Hair treatment in Jumeirah 1, Hair loss treatment Dubai, Hair restoration Dubai, PRP hair treatment Dubai, Mesotherapy hair treatment Dubai, Hair transplant Dubai, Thinning hair solutions Dubai, Scalp treatment Dubai, Medical hair clinic Dubai, DHA licensed hair clinic, Hair care specialists in Dubai, Advanced hair therapy Dubai" />
  

        
</Head>

      <TreatmentHero 
        categoryName={categoryName}
        subcategoryName={subcategoryName}
        hero={content?.hero}
      />
     <QuickNavigation navItems={navItems} />
    
    
    <TreatmentOverview 
      subcategoryName={subcategoryName}
      content={content?.overview}
    />
      <HealingJourney content={content?.healingJourney} />
      <TreatmentBenefits 
        content={content?.benefits}
      />
       <TreatmentAdditionalContent content={content} />
       <PatientTestimonials content={content?.testimonials} />
       <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq} />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}

