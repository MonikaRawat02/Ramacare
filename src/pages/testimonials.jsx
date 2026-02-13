import Layout from "../../components/Layout";
import Script from "next/script";
import Head from "next/head";
import PatientTestimonials from "../../components/PatientTestimonials";

export default function TestimonialsPage() {
  // Content for the testimonials page - you can add more testimonials here
  const testimonialsContent = {
    badge: 'Patient Success Stories',
    title: 'Real Success Stories from Dubai Patients',
    subtitle: 'Browse through all verified testimonials from patients who received trusted, doctor-led care at our DHA-licensed clinic in Dubai',
    showSeeAllButton: false, // Hide "See All" button on testimonials page
    showStatsSection: false, // Hide rating/stats section on testimonials page
    testimonials: [
      {
      id: 1,
      videoUrl: '/Videos/testimonial-1.mp4',
      thumbnail: '/images/Thumb-1.jpeg'
    },
    {
      id: 2,
      videoUrl: '/Videos/testimonial-2.mp4',
      // thumbnail: '/images/patient-success-2.jpg'  // ✅ Custom image
    },
    {
      id: 3,
      videoUrl: '/Videos/testimonial-3.mp4'
      // No thumbnail = shows video's natural frame
    },
    {
      id: 4,
      videoUrl: '/Videos/testimonial-4.mp4'
      // No thumbnail = shows video's natural frame
    },
    {
      id: 5,
      videoUrl: '/Videos/testimonial-5.mp4',
      thumbnail: '/images/Thumb-5.jpeg'  // ✅ Custom image
    },
    {
      id: 6,
      videoUrl: '/Videos/testimonial-6.mp4'
      // No thumbnail = shows video's natural frame
    }
      // Add more testimonials here:
      // {
      //   id: 7,
      //   videoUrl: '/Videos/testimonial-7.mp4',
      //   thumbnail: '/images/patient-success-7.jpg'
      // },
      // {
      //   id: 8,
      //   videoUrl: '/Videos/testimonial-8.mp4'
      // },
    ],
    // Stats section removed as per user request
  };

  return (
    <Layout>
      <Head>
        <title>Patient Testimonials | RamaCare Polyclinic Dubai</title>
        <meta name="description" content="Read verified patient testimonials and success stories from RamaCare Polyclinic Dubai. Real experiences from patients who received trusted medical care."/>
        <meta name="keywords" content="patient testimonials Dubai, medical clinic reviews, RamaCare patient stories, verified testimonials, healthcare success stories" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-G2WWSZYF7W"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-G2WWSZYF7W');
        `}
      </Script>
      
      <div className="w-full">
        <PatientTestimonials content={testimonialsContent} />
      </div>
    </Layout>
  );
}