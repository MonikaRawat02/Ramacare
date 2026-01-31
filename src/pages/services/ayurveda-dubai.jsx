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

export default function AyurvedaCategoryPage() {
  const content = getCategoryContent('ayurveda');

  return (
    <Layout>
      <Head>
  <title>Ayurveda Treatment in Dubai | Best Ayurvedic Clinic & Care</title>
  <meta name="description" content="Restore health naturally with Ayurveda treatment in Dubai. Personalized herbal therapies, Panchakarma, and holistic care by certified Ayurvedic doctors for wellness." />
  <meta name="keywords" content="Ayurveda treatment Dubai, Ayurvedic clinic Dubai, Ayurvedic doctor in Dubai, Panchakarma treatment in Dubai, Herbal therapy Dubai, Holistic health Dubai, Ayurvedic massage Dubai, Traditional Ayurveda Dubai, Ayurveda wellness Dubai, Dosha balancing treatment, Ayurveda Hospital Dubai, Natural healing Dubai" />
</Head>

      <HeroSection content={content?.hero} />
      <WhyChooseUsSection content={content?.whyChooseUs} />
      <AboutAyurvedaSection content={content?.about} />
      <TreatmentSection category="ayurveda" content={content?.treatments} />
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

