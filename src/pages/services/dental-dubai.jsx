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

export default function dentaldubaiCategoryPage() {
  const content = getCategoryContent('dental');

  return (
    <Layout>
      <Head>
  <title>Best dental Clinic in Dubai | Expert Dentists & Care</title>
  <meta name="description" content="Receive expert dental care at the best dental clinic in Dubai. Safe, personalized treatments for teeth whitening, veneers, implants, braces, and smile makeovers." />
  <meta name="keywords" content="Best dental clinic in Dubai, Dentist in Dubai, dental treatment in Dubai, Cosmetic dentistry Dubai, Teeth whitening in Dubai, dental veneers Dubai, dental implants Dubai, Braces treatment in Dubai, Smile makeover Dubai, Family dentistry Dubai, DHA-licensed dentist in Dubai, Top dentist Dubai" />
</Head>

      <HeroSection content={content?.hero} />
      <WhyChooseUsSection content={content?.whyChooseUs} />
      <AboutAyurvedaSection content={content?.about} />
      <TreatmentSection category="dental" content={content?.treatments} />
      <ProgramsSection content={content?.programs} />
      <ExpertsSection content={content?.experts} />
      <PatientTestimonials content={content?.successStories} />
      <WhyAyurvedaDubaiSection content={content?.whyDubai} />
      <FAQSection content={content?.faq} />
       {/* <OurFacilitySection content={content?.facility} /> */}
      <BeginYourHealingJourneySection />
    </Layout>
  );
}

