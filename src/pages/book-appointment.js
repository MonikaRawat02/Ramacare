import React from 'react';
import Head from 'next/head';
import BeginYourHealingJourneySection from '../../components/BeginYourHealingJourneySection';

const AppointmentPage = () => {
  return (
    <>
      <Head>
        <title>Book Your Appointment | RamaCare Polyclinic</title>
        <meta name="description" content="Schedule your personalized consultation with our DHA-licensed experts at RamaCare Polyclinic, a trusted Polyclinic in Dubai." />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/book-appointment" />
      </Head>
      
      <BeginYourHealingJourneySection />
    </>
  );
};

export default AppointmentPage;