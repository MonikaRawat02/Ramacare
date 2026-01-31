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

export default function AestheticDermatologyCategoryPage() {
  const content = getCategoryContent('aesthetic-dermatology');
  return (
    <Layout>
      <Head>
  <title>Skin Treatment Dubai – Clear & Healthy Skin</title>
  <meta name="description" content="RamaCare offers advanced skin treatment in Dubai with expert dermatologists, safe therapies, and personalized care for acne, pigmentation, anti-aging, and glowing skin." />
  <meta name="keywords" content="Skin Treatment Dubai, Clear skin treatment Dubai, Healthy skin Dubai, Dermatology clinic Dubai, Acne treatment Dubai, Anti-aging skin care Dubai, Skin rejuvenation Dubai, Laser skin treatment Dubai, Pigmentation treatment Dubai, Medical skin clinic Dubai, Personalized skin care Dubai, DHA licensed dermatology clinic" />
</Head>

      <HeroSection content={content?.hero} />
      <WhyChooseUsSection content={content?.whyChooseUs} />
      <AboutAyurvedaSection content={content?.about} />
      <TreatmentSection category="aesthetic-dermatology" content={content?.treatments} />
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

