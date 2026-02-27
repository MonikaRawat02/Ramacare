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

export default function FunctionalExercisesPage() {
  const categoryName = 'Physiotherapy';
  const subcategoryName = 'Functional Excercise';

  // Get content from data file
  const content = getSubcategoryContent('physiotherapy-dubai', 'functional-exercises');

 return (
   <Layout>
    <Head>
  <title>Functional Exercises Dubai for Rehab and Physiotherapy Care</title>
  <meta name="description" content="Functional exercises in Dubai support rehabilitation and physiotherapy by improving strength, balance, and movement through guided programs tailored to daily activities." />
  <meta name="keywords" content="Functional exercises in Dubai, Functional training Dubai, Rehab exercises in Dubai, Physiotherapy exercises in Dubai, Movement therapy Dubai, Post injury rehabilitation in Dubai, Strength and mobility exercises, Core stability training Dubai, Physical therapy Dubai, Functional rehab programs in Dubai" />
    <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "@id": "https://ramacarepolyclinic.ae/services/functional-exercises-dubai#procedure",
        "name": "Functional Exercises in Dubai",
        "alternateName": "Physiotherapy Functional Exercise Program",
        "url": "https://ramacarepolyclinic.ae/services/functional-exercises-dubai",
        "mainEntityOfPage": "https://ramacarepolyclinic.ae/services/functional-exercises-dubai",
        "description": "Functional Exercises in Dubai at RamaCare Polyclinic offers targeted therapeutic exercise programs designed to improve strength, flexibility, balance, and functional mobility as part of comprehensive physiotherapy care.",
        "procedureType": "Physical therapy exercise program",
        "bodyLocation": "Whole body / Musculoskeletal system",
        "howPerformed": "Functional exercises are performed through personalized exercise regimens tailored to the patient’s needs, focusing on improving strength, coordination, balance, and daily functional movement under the guidance of experienced physiotherapists.",
        "preparation": "Patients are advised to wear comfortable clothing suitable for movement and to follow any preparatory guidance provided by the therapist.",
        "followup": "Regular re-assessments and progress tracking sessions are recommended to monitor improvement and update exercise plans.",
        "indication": [
          "Reduced mobility",
          "Muscle weakness",
          "Post-injury or post-surgical rehabilitation",
          "Balance and coordination deficits",
          "Functional strength improvement"
        ],
        "possibleComplication": "Temporary muscle soreness may occur after exercise sessions.",
        "provider": {
          "@type": "MedicalBusiness",
          "name": "RamaCare Polyclinic – Physiotherapy & Rehabilitation Department",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jumeirah Terrace Building, Ground Floor",
            "addressLocality": "Jumeirah 1",
            "addressRegion": "Dubai",
            "postalCode": "393558",
            "addressCountry": "AE"
          },
          "telephone": "+971 56 659 7878",
          "areaServed": {
            "@type": "City",
            "name": "Dubai"
          },
          "priceRange": "$$"
        }
      })
    }}
  />
</Head>

     <TreatmentHero 
       categoryName={categoryName}
       subcategoryName={subcategoryName}
       hero={content?.hero}
     />
     <QuickNavigation />
     <DoctorsSection content={content?.doctors} />
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
    {/* <PricingPackages content={content?.pricing} /> */}
    <PaymentInsurance content={content?.paymentInsurance} />
     <FAQSection content={content?.faq} />
     <BookConsultation content={content?.bookConsultation} />
   </Layout>
  );
}
