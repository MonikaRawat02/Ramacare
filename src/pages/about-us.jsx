import Layout from "../../components/Layout";
import Head from "next/head";
import AboutAyurvedaSection from "../../components/AboutAyurvedaSection";
import WhyAyurvedaDubaiSection from "../../components/WhyAyurvedaDubaiSection";
import ExpertsSection from "../../components/ExpertsSection";
import BeginYourHealingJourneySection from "../../components/BeginYourHealingJourneySection";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function About() {
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, type: 'success', message: '' });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000);
  };

  const handleBookAppointment = () => {
    setIsModalOpen(true);
    showToast('Opening appointment booking...', 'success');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Custom content for About Us page
  const aboutContent = {
    badge: 'About RamaCare Polyclinic',
    title: 'Authentic Healing Within a Modern Polyclinic',
    description: 'RamaCare Polyclinic is a premier DHA-licensed healthcare facility in Jumeirah 1, Dubai, offering comprehensive medical services with a perfect blend of traditional healing and modern medicine.',
    paragraphs: [
      'RamaCare Polyclinic blends traditional healing principles with modern medical science to provide comprehensive, family-centered healthcare in Dubai. Our multidisciplinary team of DHA-licensed physicians, therapists, and specialists brings decades of experience and compassionate care to every consultation.',
    'We offer a full range of services, including general medicine, dermatology, aesthetic treatments, dental care, physiotherapy, Ayurveda, pain management, and body wellness therapies — all under one roof.',
    'Rather than treating symptoms alone, we focus on identifying root causes, designing personalized treatment plans, and supporting sustainable health outcomes. Every treatment follows strict safety protocols, transparent diagnosis, and advanced medical standards within our Jumeirah 1 facility.'
  ],
    stats: [
      { number: '15+', label: 'Years of Excellence' },
      { number: '500+', label: 'Happy Patients' },
      { number: '30+', label: 'Expert Doctors' },
      { number: '98%', label: 'Satisfaction Rate' }
    ],
    ctaText: 'Meet Our Experts',
    image: '/images/about.jpg',
    imageAlt: 'RamaCare Polyclinic facility',
    overlayCard: {
      number: '15+',
      smallText: 'Years of Excellence',
      boldText: 'Trusted Healthcare in Dubai'
    }
  };

  const whyContent = {
    badge: 'Polyclinic in Dubai',
    title: 'How We Work at RamaCare Polyclinic',
    description: 'Dubai\'s fast-paced, high-stress environment — combined with extreme heat, irregular schedules, and sedentary work routines — creates unique health challenges.',
    paragraphs: [
      'Dubai\'s fast-paced environment creates unique health challenges. Our approach addresses these modern wellness needs while maintaining the highest standards of medical care. We understand that each patient is different, which is why we take time to listen, understand, and create customized treatment plans.'
    ],
    benefits: [
       {
      icon: 'Droplets',
      title: "Caring. Collaborative. Committed.",
      description: "At RamaCare Polyclinic, a trusted polyclinic in Dubai located in Jumeirah 1, our way of working is built around quality care, transparency, and patient satisfaction. Every service we provide reflects our commitment to modern healthcare standards and personalized treatment."
    },
    {
      icon: 'Brain',
      title: "Patient-First Care Philosophy",
      description: "As a leading polyclinic in Dubai, we believe every patient deserves respectful, compassionate, and individualized care. At RamaCare, we take time to understand your health concerns, medical history, and personal goals—ensuring you receive treatment that is both effective and comfortable. You are always treated as a person, never just a file or appointment number."
    },
    {
      icon: 'Sparkles',
      title: "Expertise-Led, Team-Based Treatment",
      description: "What sets RamaCare apart as a reliable polyclinic in Dubai is our collaborative medical approach. Our experienced doctors and specialists work together across multiple departments, including Ayurveda, physiotherapy, dermatology, dental care, and general medicine. This team-based coordination allows us to create personalized, result-driven treatment plans under one roof."
    },
    {
      icon: 'Activity',
      title: "Evidence-Based and Holistic Healthcare",
      description: "At our polyclinic in Dubai, we combine proven medical science with holistic wellness practices to deliver balanced healthcare solutions. Whether you visit us for preventive care, pain management, facial aesthetics, or chronic condition support, we apply evidence-based treatments while considering your overall well-being and long-term health."
    }
    ],
    image: '/images/why.jpeg',
    imageAlt: 'Professional healthcare team',
    ctaCard: {
      title: 'Perfect for Dubai Professionals',
      description: 'Flexible appointment scheduling available to working professionals to fit your busy lifestyle.'
    },
    bottomSection: {
      title: 'Premium Wellness Centre at a Trusted Polyclinic in Dubai',
      description: 'Our Premium Wellness Centre in Jumeirah 1 operates within a trusted polyclinic in Dubai, delivering natural, holistic healthcare in a professional clinical environment. We specialize in Panchakarma detox programs, chronic pain relief, stress management, and complete mind-body balance. Our DHA-licensed doctors provide personalized consultations and treatment plans tailored to individual health needs. Patients visiting our polyclinic in Dubai benefit from safe, hygienic therapies delivered under strict medical supervision. Whether you are seeking preventive care, detoxification, or long-term wellness solutions, our centre offers trusted, effective treatments designed to restore health, vitality, and overall well-being.'
    }
  };

  const expertsContent = {
    badge: 'Our Medical Team',
    title: 'Meet Our DHA-Licensed Experts',
    description: 'Highly qualified doctors with decades of combined experience, committed to your healing journey with expertise, compassion, and personalized care.',
    stats: [
      { value: '30+', label: 'Expert Doctors' },
      { value: '37+', label: 'Years of Combined Experience' },
      { value: '500+', label: 'Successful Treatments' },
      { value: '4.9', label: 'Average Rating' }
    ],
    ctaSection: {
      title: 'Take the First Step Toward Better Health',
      description: 'Connect with our DHA-licensed specialists at RamaCare Polyclinic, a leading Polyclinic in Dubai, and receive expert guidance tailored specifically to you.',
      primaryButton: 'Book Consultation Now',
      secondaryButton: 'View Our Team'
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <Layout>
      <Head>
        <title>About RamaCare Polyclinic Dubai | Trusted Healthcare Provider</title>
        <meta name="description" content="Learn about RamaCare Polyclinic Dubai, a trusted DHA-licensed healthcare facility in Jumeirah 1 offering comprehensive medical services with 15+ years of excellence."/>
        <meta name="keywords" content="RamaCare Polyclinic Dubai, About RamaCare, Healthcare Dubai, Medical clinic Jumeirah, DHA licensed doctors, About us healthcare Dubai" />
        <link rel="canonical" href="https://ramacarepolyclinic.ae/about-us" />
      </Head>
      
      {/* Hero Section - Custom for About Us */}
      <section className="relative bg-gradient-to-br from-[#1a5f3f] via-[#2d5f3f] to-[#1a5f3f] text-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-medium">
                About RamaCare Polyclinic
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-white leading-tight mb-6">
              Your Trusted <span className="text-[#d4a574]">Healthcare</span> Partner in Dubai
            </h1>
            <p className="text-lg sm:text-xl text-white leading-relaxed max-w-3xl mx-auto">
              Delivering comprehensive medical care with compassion, expertise, and 15+ years of excellence in Jumeirah 1
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <AboutAyurvedaSection content={aboutContent} />
      <WhyAyurvedaDubaiSection content={whyContent} />
      <ExpertsSection content={expertsContent} onBookAppointment={handleBookAppointment} />

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 modal-overlay animate-fadeIn" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)' }} onClick={handleCloseModal}>
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl modal-content scrollbar-hide transform animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={handleCloseModal} 
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <BeginYourHealingJourneySection 
              isModal={true} 
              onClose={handleCloseModal} 
              onSubmissionSuccess={() => {
                handleCloseModal();
                showToast('Appointment booked successfully!', 'success');
              }}
              onSubmissionError={() => {
                showToast('Failed to book appointment. Please try again.', 'error');
              }}
            />
          </div>
        </div>
      )}

      {/* Toast Notifications */}
      {toast.show && (
        <div className="fixed top-6 right-6 z-[10000]" style={{ animation: 'toastSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <div className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl border backdrop-blur-sm transition-all ${
            toast.type === 'success' 
              ? 'bg-emerald-600/95 border-emerald-500 text-white' 
              : 'bg-red-600/95 border-red-500 text-white'
          }`}>
            {toast.type === 'success' ? (
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
            ) : (
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            )}
            <span className="font-medium text-sm tracking-wide">{toast.message}</span>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes toastSlideIn {
          from { transform: translateX(120%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </Layout>
  );
}