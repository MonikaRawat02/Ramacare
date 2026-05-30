import Layout from "../../components/Layout";
import Script from "next/script";
import Head from "next/head";
import HeroSection from "../../components/HeroSection";
import WhyChooseUsSection from "../../components/WhyChooseUsSection";
import AboutAyurvedaSection from "../../components/AboutAyurvedaSection";
import TreatmentSection from "../../components/TreatmentSection";
import ProgramsSection from "../../components/ProgramsSection";
import ExpertsSection from "../../components/ExpertsSection";
import PatientTestimonials from "../../components/PatientTestimonials";
import WhyAyurvedaDubaiSection from "../../components/WhyAyurvedaDubaiSection";
import FAQSection from "../../components/FAQSection";
// import OurFacilitySection from "../../components/OurFacilitySection";
import BeginYourHealingJourneySection from "../../components/BeginYourHealingJourneySection";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title> Polyclinic in Dubai | Ayurveda, Physiotherapy & Skin Clinic</title>
       <meta name="description" content=" Looking for a polyclinic in Dubai? RamaCare offers Ayurveda, physiotherapy & skin treatments in Jumeirah with expert doctors. Book your consultation today."/>
       <meta name="keywords" content="RamaCare Polyclinic Dubai, Polyclinic in Dubai, Trusted polyclinic in Dubai, Multi-Specialty Clinic Dubai, Medical clinic Dubai, DHA licensed polyclinic, Family healthcare Dubai, Affordable healthcare Dubai, Polyclinic in Jumeirah 1, Medical clinic Jumeirah 1, Best Polyclinic in Jumeirah 1" />
       <meta name="google-site-verification" content="VRn7pg1rACQOgcGV13YChuu05_Iu__0QVLXrw9dNGCc" /> 
       <meta name="msvalidate.01" content="FB6C6318BA274AFF1EA6E095977EA143" />
       
       <script type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: `{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://ramacarepolyclinic.ae/#organization",
  "name": "RamaCare Polyclinic",
  "url": "https://ramacarepolyclinic.ae/",
  "logo": "https://ramacarepolyclinic.ae/images/Logo.png",
  "image": "https://ramacarepolyclinic.ae/images/Logo.png",
  "description": "DHA-licensed polyclinic in Jumeirah 1, Dubai offering dermatology, dental, physiotherapy, Ayurveda, and general medicine services.",
  "telephone": "+971566597878",
  "email": "query@ramacarepolyclinic.com",
  "priceRange": "$$",
  "openingHours": "Su-Sa 10:00-22:00",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jumeirah 1, Ground Floor, Jumeirah Terrace Building",
    "addressLocality": "Dubai",
    "postalCode": "393558",
    "addressCountry": "AE"
  },
  "areaServed": {
    "@type": "City",
    "name": "Dubai"
  },
  "sameAs": [
    "https://www.facebook.com/RamaCarePolyClinic/",
    "https://www.instagram.com/ramacarepolyclinic/",
    "https://www.linkedin.com/company/ramacarepolyclinics/"
  ],
  "medicalSpecialty": [
    "General Medicine",
    "Dermatology",
    "Dental Care",
    "Physiotherapy",
    "Ayurveda"
  ],
  "foundingDate": "2008",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500"
  }
}`
  }}
  />
        </Head>
       <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-G2WWSZYF7W"
  strategy="afterInteractive"/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-G2WWSZYF7W');
  `}
</Script>
      <HeroSection />
      <WhyChooseUsSection />
      <AboutAyurvedaSection />
      <TreatmentSection />
      <ProgramsSection />
      <ExpertsSection />
      <PatientTestimonials />
      <WhyAyurvedaDubaiSection />
      <FAQSection />
      {/* <OurFacilitySection /> */}
      <BeginYourHealingJourneySection />
    </Layout>
  );
}
