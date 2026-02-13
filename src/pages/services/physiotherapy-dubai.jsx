import Layout from "../../../components/Layout";
import Head from "next/head";
import HeroSection from "../../../components/HeroSection";
import WhyChooseUsSection from "../../../components/WhyChooseUsSection";
import AboutAyurvedaSection from "../../../components/AboutAyurvedaSection";
import TreatmentSection from "../../../components/TreatmentSection";
import ProgramsSection from "../../../components/ProgramsSection";
import ExpertsSection from "../../../components/ExpertsSection";
import PatientTestimonials from "../../../components/PatientTestimonials";
import WhyAyurvedaDubaiSection from "../../../components/WhyAyurvedaDubaiSection";
import FAQSection from "../../../components/FAQSection";
// import OurFacilitySection from "../../../components/OurFacilitySection";
import BeginYourHealingJourneySection from "../../../components/BeginYourHealingJourneySection";
import { getCategoryContent } from "../../data/categoryContent";

export default function PhysiotherapyCategoryPage() {
  const content = getCategoryContent('physiotherapy');

  return (
    <Layout>
      <Head>
  <title>Physiotherapy Treatment in Dubai | Trusted Rehab & Pain Care</title>
  <meta name="description" content="Professional physiotherapy treatment in Dubai for pain relief, sports injuries, post-surgery recovery, and rehabilitation with licensed therapists and tailored care." />
  <meta name="keywords" content="Physiotherapy treatment in Dubai, Best physiotherapy clinic in Dubai, Physiotherapy Dubai near me, Sports injury physiotherapy Dubai, Post surgery physiotherapy in Dubai, Rehabilitation center Dubai, Pain relief physiotherapy Dubai, Licensed physiotherapist Dubai, Physiotherapy clinics in Dubai, Manual therapy Dubai, Back pain physiotherapy Dubai" />
</Head>

      <HeroSection content={content?.hero} />
      <WhyChooseUsSection content={content?.whyChooseUs} />
      <AboutAyurvedaSection content={content?.about} />
      <TreatmentSection 
        category="physiotherapy" 
        content={{
          ...content?.treatments,
          consultationHeading: content?.treatments?.consultationCTA?.heading,
          consultationSubtext: content?.treatments?.consultationCTA?.subtext,
        }} 
      />
      <ProgramsSection content={content?.programs} />
      <ExpertsSection content={content?.experts} />
      <PatientTestimonials content={content?.successStories} />
      <WhyAyurvedaDubaiSection content={content?.whyDubai} />
      <FAQSection content={content?.faq} />
       {/* <OurFacilitySection content={content?.facility} /> */}
       <BeginYourHealingJourneySection content={content?.booking} />
    </Layout>
  );
}

