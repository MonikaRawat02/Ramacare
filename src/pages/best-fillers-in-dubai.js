import React from 'react';
import Head from 'next/head';
import HeroSection from '../../components/LandingHeroSection';
import PromoBanner from '../../components/LandingPromoBanner';
import StatsSection from '../../components/StatsSection';
import OfferSection from '../../components/OfferSection';
// import FloatingChat from '@/components/FloatingChat';
import PricingSection from '../../components/PricingSection';
import WhyUsSection from '../../components/WhyUsSection';
import TreatmentsSection from '../../components/LandingTreatmentsSection';
import ResultsSection from '../../components/ResultsSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import RiskFreeSection from '../../components/RiskFreeSection';
import FAQSection from '../../components/LandingFAQSection';
import ConsultationSection from '../../components/ConsultationSection';
import Footer from '../../components/LandingFooter';
import DiscountModal from '../../components/DiscountModal';

export default function BestFillersInDubai() {
  return (
    <>
      <Head>
        <title>Best Fillers in Dubai | Premium Dermal Fillers Treatment</title>
        <meta name="description" content="Discover the best dermal fillers in Dubai at Rama Care Polyclinic. Premium non-surgical cosmetic treatments for natural-looking results. Book your consultation today." />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/best-fillers-in-dubai" />
        <link rel="icon" type="image/png" href="/images/Logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <div className="font-sans">
        <PromoBanner />
        <DiscountModal />
        <HeroSection />
        <StatsSection />
        <OfferSection/>
        {/* <FloatingChat /> */}
            <PricingSection />
             <WhyUsSection />
              <TreatmentsSection />
              <ResultsSection />
              <TestimonialsSection />
              <RiskFreeSection />
              <FAQSection />
              <ConsultationSection />
              <Footer />
      </div>
    </>
  );
}
