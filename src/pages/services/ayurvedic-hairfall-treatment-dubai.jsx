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

export default function AyurvedicHairfallTreatmentPage() {
  const categoryName = 'Ayurveda';
  const subcategoryName = 'Ayurvedic Hairfall Treatment';

  // Get content from data file
  const content = getSubcategoryContent('ayurveda-dubai', 'ayurvedic-hairfall-treatment');

  return (
    <Layout>
      <Head>
  <title>Ayurvedic Hair Fall Treatment in Dubai – Safe & Natural</title>
  <meta name="description" content="Control hair fall naturally with Ayurvedic treatments in Dubai. Herbal remedies, scalp therapies, and personalized care help restore healthy, strong hair." />
  <meta name="keywords" content="Ayurvedic Hair Fall Treatment Dubai, Hair Loss Treatment Ayurveda Dubai, Natural Hair Regrowth Dubai, Herbal Hair Care Dubai, Ayurvedic Hair Therapy Dubai, Hair Strengthening Treatments Dubai, Hair Fall Solutions Dubai, Ayurveda for Hair Loss, Ayurvedic Scalp Treatment Dubai, Hair Growth Oils Dubai, Best Ayurvedic Hair Treatment, Personalized Hair Care Dubai" />
   <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "@id": "https://ramacarepolyclinic.ae/services/ayurvedic-hairfall-treatment-dubai#procedure",
              name: "Ayurvedic Hairfall Treatment in Dubai",
              alternateName: "Herbal Hair Loss Therapy",
              url: "https://ramacarepolyclinic.ae/services/ayurvedic-hairfall-treatment-dubai",
              mainEntityOfPage:
                "https://ramacarepolyclinic.ae/services/ayurvedic-hairfall-treatment-dubai",
              description:
                "Ayurvedic Hairfall Treatment in Dubai at RamaCare Polyclinic provides traditional Ayurvedic protocols, herbal therapies, and personalized care to reduce hair fall, nourish scalp health, and promote natural hair regrowth, administered by experienced practitioners.",
              procedureType: "Ayurvedic medical treatment",
              bodyLocation: "Scalp and hair follicles",
              howPerformed:
                "Hairfall treatment begins with a detailed consultation and scalp assessment, followed by personalized herbal protocols, medicated oil applications, and dietary and wellness guidance tailored to individual hair concerns.",
              preparation:
                "Initial evaluation of scalp condition and medical & lifestyle history is done prior to customizing the Ayurvedic hairfall treatment plan.",
              followup:
                "Regular follow-up consultations are recommended to monitor progress and adjust therapy protocols for optimal results.",
              indication: [
                "Excessive hair fall",
                "Thinning hair",
                "Weak or dull hair",
                "Dry or itchy scalp",
              ],
              possibleComplication:
                "Mild scalp sensitivity or temporary itching may occur during early stages of herbal treatment.",
              provider: {
                "@type": "MedicalBusiness",
                name: "RamaCare Polyclinic - Ayurvedic & Hair Wellness Department",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Jumeirah Terrace Building, Ground Floor",
                  addressLocality: "Jumeirah 1",
                  addressRegion: "Dubai",
                  postalCode: "393558",
                  addressCountry: "AE",
                },
                telephone: "+971 56 659 7878",
                areaServed: {
                  "@type": "City",
                  name: "Dubai",
                },
                priceRange: "$$",
              },
            }),
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

