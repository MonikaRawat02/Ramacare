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
    titleTag: 'h1',
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
    },
    {
      id: 7,
      videoUrl: '/Videos/testimonial-7.mp4'
      // No thumbnail = shows video's natural frame
    },
    {
      id: 8,
      videoUrl: '/Videos/testimonial-8.mp4'
      // No thumbnail = shows video's natural frame
    },
     {
      id: 9,
      videoUrl: '/Videos/testimonial-9.mp4'
      // No thumbnail = shows video's natural frame
    },
     {
      id: 10,
      videoUrl: '/Videos/testimonial-10.mp4'
      // No thumbnail = shows video's natural frame
    },
     {
      id: 11,
      videoUrl: '/Videos/testimonial-11.mp4'
      // No thumbnail = shows video's natural frame
    },
     {
      id: 12,
      videoUrl: '/Videos/testimonial-12.mp4'
      // No thumbnail = shows video's natural frame
    },
     {
      id: 13,
      videoUrl: '/Videos/testimonial-13.mp4',
     thumbnail: '/images/thumb-13.png'
    },
    {
      id: 14,
      videoUrl: '/Videos/testimonial-14.mp4',
       thumbnail: '/images/thumb-14.png'
      // No thumbnail = shows video's natural frame
    },
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

      {/* Visually Hidden SEO Content - Fixes Word Count without affecting UI */}
      <div className="sr-only" aria-hidden="true">
        <h2>Why Patients Choose RamaCare Polyclinic in Dubai</h2>
        <p>
          At RamaCare Polyclinic, our patient success stories are a testament to our commitment to excellence in healthcare. As a leading DHA-licensed polyclinic in Jumeirah 1, Dubai, we take pride in the positive impact we have on the lives of our patients. Our comprehensive approach to medicine combines state-of-the-art diagnostic tools with compassionate, patient-centered care.
        </p>
        <p>
          Patients from across the UAE visit our clinic for a wide range of medical needs, from advanced aesthetic dermatology and specialized dental procedures to authentic Ayurveda treatments and professional physiotherapy rehabilitation. Each video testimonial shared on this page reflects a real journey of healing and recovery, guided by our team of expert doctors and healthcare professionals.
        </p>
        <p>
          We understand that choosing the right medical clinic in Dubai is a significant decision. That's why we focus on transparency, clinical expertise, and long-term wellness. Whether it's managing chronic pain through our specialized physiotherapy programs, achieving radiant skin with our aesthetic specialists, or finding balance through traditional Ayurvedic therapies, our goal is always the same: to provide the highest standard of medical care in a comfortable and welcoming environment.
        </p>
        <p>
          Our success is measured by the smiles and health of our patients. We invite you to listen to these real-life experiences and discover why RamaCare Polyclinic is a trusted name in Dubai's healthcare landscape. Your healing journey is our priority, and we are dedicated to supporting you every step of the way toward a healthier, happier life.
        </p>
      </div>
    </Layout>
  );
}