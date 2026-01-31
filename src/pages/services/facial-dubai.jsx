import Layout from "../../../components/Layout";
import Head from "next/head";
import HeroSection from "../../../components/HeroSection";
import WhyChooseUsSection from "../../../components/WhyChooseUsSection";
import AboutAyurvedaSection from "../../../components/AboutAyurvedaSection";
import TreatmentSection from "../../../components/TreatmentSection";
import ProgramsSection from "../../../components/ProgramsSection";
import ExpertsSection from "../../../components/ExpertsSection";
import VideoTestimonials from "../../../components/VideoTestimonials";
import WhyAyurvedaDubaiSection from "../../../components/WhyAyurvedaDubaiSection";
import FAQSection from "../../../components/FAQSection";
// import OurFacilitySection from "../../../components/OurFacilitySection";
import BeginYourHealingJourneySection from "../../../components/BeginYourHealingJourneySection";
import { getCategoryContent } from "../../data/categoryContent";

export default function FacialCategoryPage() {
  const content = getCategoryContent('facial');

  return (
    <Layout>
      <Head>
  <title>Facial Treatments in Dubai | Expert Skin Care Clinic</title>
  <meta name="description" content="Professional facial treatments in Dubai offering safe, personalized care for acne, pigmentation, aging, and dull skin, delivered by experienced skin specialists you can trust." />
  <meta name="keywords" content="facial treatments in Dubai, skin care clinic Dubai, advanced facial treatment Dubai, acne facial treatment Dubai, anti-aging facial Dubai, pigmentation treatment Dubai, medical facial Dubai, professional skin treatment Dubai, dermatology facial Dubai" />
</Head>

      <HeroSection content={content?.hero} />
      <WhyChooseUsSection content={content?.whyChooseUs} />
      <AboutAyurvedaSection content={content?.about} />
      <TreatmentSection category="facial" content={content?.treatments} />
      <ProgramsSection content={content?.programs} />
      <ExpertsSection content={content?.experts} />
      <VideoTestimonials content={content?.successStories} />
      <WhyAyurvedaDubaiSection content={content?.whyDubai} />
      <FAQSection content={content?.faq} />
       {/* <OurFacilitySection content={content?.facility} /> */}
      <BeginYourHealingJourneySection />
    </Layout>
  );
}

