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

export default function PersonalizedSlimmingProgramsPage() {
  const categoryName = 'General Physician';
  const subcategoryName = 'Personalized Slimming Programs';

  // Get content from data file
  const content = getSubcategoryContent('general-physician-dubai', 'personalized-slimming-programs');

  return (
    <Layout>
      <Head>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalCondition",
      "@id": "https://ramacarepolyclinic.ae/services/personalized-slimming-programs#condition",
      "name": "Overweight and Obesity Management",
      "alternateName": "Weight Management & Slimming Optimization",
      "url": "https://ramacarepolyclinic.ae/services/personalized-slimming-programs",
      "description": "Personalized slimming programs help individuals achieve healthy and sustainable weight loss by combining customized diet, activity plans, and lifestyle modifications based on individual health, metabolism, and weight goals.",
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": "Personalized Slimming Program",
        "description": "Medical weight management and personalized slimming services in Dubai that combine tailored nutritional plans, activity recommendations, lifestyle guidance, and ongoing monitoring by qualified healthcare professionals."
      }
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://ramacarepolyclinic.ae/services/personalized-slimming-programs#procedure",
      "name": "Personalized Slimming Programs in Dubai",
      "alternateName": "Tailored Weight Loss Planning & Support",
      "url": "https://ramacarepolyclinic.ae/services/personalized-slimming-programs",
      "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/personalized-slimming-programs",
      "description": "A personalized slimming program in Dubai that provides customized weight-loss guidance including diet planning, fitness and lifestyle recommendations, and close clinical monitoring to support safe, effective, and long-term results. :contentReference[oaicite:0]{index=0}",
      "procedureType": "Weight management and lifestyle intervention",
      "howPerformed": "After initial assessment and consultation, a tailored plan is developed addressing nutrition, physical activity, and lifestyle changes, followed by regular follow-up visits for monitoring and adjustments. :contentReference[oaicite:1]{index=1}",
      "preparation": "No special preparation other than sharing your medical history, weight goals, and lifestyle information with the clinician. :contentReference[oaicite:2]{index=2}",
      "followup": "Follow-up visits occur weekly or biweekly to track progress and adjust the slimming plan as needed. :contentReference[oaicite:3]{index=3}",
      "indication": [
        "Overweight and obesity management",
        "Stubborn fat reduction",
        "Post-pregnancy weight loss",
        "Lifestyle-related weight gain",
        "Health risk reduction (e.g., diabetes, hypertension)"
      ],
      "provider": {
        "@type": "MedicalBusiness",
        "name": "RamaCare Polyclinic – Weight Management & Wellness Services",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jumeirah Terrace Building, Ground Floor",
          "addressLocality": "Jumeirah 1",
          "addressRegion": "Dubai",
          "postalCode": "393558",
          "addressCountry": "AE"
        },
        "telephone": "+971566597878",
        "areaServed": {
          "@type": "City",
          "name": "Dubai"
        },
        "priceRange": "$$"
      }
    }
  ]
}
`
  }}
/>
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
