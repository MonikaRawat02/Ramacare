import Layout from "../../components/Layout";
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
        <title>RamaCare Polyclinic Dubai | Trusted Polyclinic in Dubai</title>
        <meta name="description" content=" RamaCare Polyclinic Dubai provides multi-specialty medical care with experienced doctors, modern diagnostics, and patient-focused treatment in a DHA-licensed clinic."/>
       <meta name="keywords" content="RamaCare Polyclinic Dubai, Polyclinic in Dubai, Trusted polyclinic in Dubai, Multi-Specialty Clinic Dubai, Medical clinic Dubai, DHA licensed polyclinic, Family healthcare Dubai, Affordable healthcare Dubai, Polyclinic in Jumeirah 1, Medical clinic Jumeirah 1, Best Polyclinic in Jumeirah 1" />
        </Head>
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

