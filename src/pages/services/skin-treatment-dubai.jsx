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
import SkinTreatmentAdditionalContent from '../../../components/SkinTreatmentAdditionalContent';
import { getSubcategoryContent } from '../../data/subcategoryContent';


export default function SkinTreatmentPage() {
  const categoryName = 'Aesthetic Dermatology';
  const subcategoryName = 'Skin Treatment';

  // Get content from data file
  const content = getSubcategoryContent('aesthetic-dermatology-dubai', 'skin-treatment');

  const navItems = [
    { id: 'treatment-info', label: 'Treatment Info' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'why-choose-ramacare', label: 'Why Choose Us' },
    { id: 'professional-benefits', label: 'Professional Care' },
    { id: 'when-to-consider', label: 'When to Treat' },
    { id: 'skin-conditions', label: 'Conditions' },
    { id: 'our-doctors', label: 'Our Doctors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'book-now', label: 'Book Now' }
  ];

  return (
    <Layout>
        <Head>
        <meta name="description" content="Looking for Skin Treatment in Dubai? RamaCare Polyclinic offers expert Skin Treatment with experienced doctors. Book your consultation today." key="description" />
        <title key="title">Skin Treatment in Dubai | RamaCare Polyclinic</title>
      
      
        
    </Head>
      <TreatmentHero 
        categoryName={categoryName}
        subcategoryName={subcategoryName}
        description={content?.hero?.description}
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
      <SkinTreatmentAdditionalContent content={content} />
       <PatientTestimonials content={content?.testimonials} />
        <DoctorsSection content={content?.doctors} />
    
    <PaymentInsurance content={content?.paymentInsurance} />
      <FAQSection content={content?.faq}
      
      />
      <BookConsultation content={content?.bookConsultation} />
    </Layout>
  );
}
