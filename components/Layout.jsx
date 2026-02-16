import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import PromoBanner from './PromoBanner';
import Footer from './Footer';

const Layout = ({ children }) => {
  const router = useRouter();
  const isServicesRoute = router.pathname.startsWith('/services');
  const excludedCategoryRoutes = new Set([
    '/services/ayurveda-dubai',
    '/services/dental-dubai',
    '/services/physiotherapy-dubai',
    '/services/general-physician-dubai',
    '/services/aesthetic-dermatology-dubai',
    '/services/facial-dubai',
  ]);
  const isSubcategoryRoute = isServicesRoute && !excludedCategoryRoutes.has(router.pathname);
  const fontStyle = { fontFamily: "'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif" };
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>RamaCare Polyclinic Dubai | Trusted Polyclinic in Dubai</title>
        <meta name="description" content=" RamaCare Polyclinic Dubai provides multi-specialty medical care with experienced doctors, modern diagnostics, and patient-focused treatment in a DHA-licensed clinic."/>
        <link rel="icon" href="/images/Logo.png" />
      </Head>
      <Header />
      <PromoBanner />
      <main className="flex-grow" style={isSubcategoryRoute ? fontStyle : undefined}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
