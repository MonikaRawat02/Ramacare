import React, { useState } from 'react';

const BeginYourHealingJourneySection = ({ isModal = false, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    treatment: '',
    preferredDate: '',
    preferredTime: '',
    additionalInfo: '',
    consent: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    if (isModal && onClose) {
      alert('Appointment request submitted successfully!');
      onClose();
    }
  };

  const handleWhatsApp = () => {
    const phone = "971566597878";
    const message = "Hello, I'd like to book an appointment.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  // Generate time slots (9 AM to 8 PM)
  const timeSlots = [];
  for (let hour = 9; hour <= 20; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, '0')}:00`);
    if (hour < 20) {
      timeSlots.push(`${hour.toString().padStart(2, '0')}:30`);
    }
  }

  return (
    <>
      {/* System Fonts - matching Figma design */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        #appointment * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
      
      <section 
        id={isModal ? undefined : "appointment"} 
        className="w-full" 
        style={{ 
          backgroundColor: isModal ? '#FFFFFF' : '#F9FAFB',
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif"
        }}
      >
        {/* Extra anchor so older links to #book-consultation scroll correctly */}
        <div id="book-consultation" className="h-0 w-0 overflow-hidden" aria-hidden="true" />
        
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
          {/* Badge */}
          <div className="flex justify-center mb-3">
            <div 
              className="bg-[#E8E3D8] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm"
              // style={{ 
              //   backgroundColor: '#D1FAE5',
              //   color: '#1b5e3f',
              //   fontSize: '13px',
              //   fontWeight: 500
              // }}
            >
              {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg> */}
              Book Your Appointment
            </div>
          </div>

          {/* Section Heading */}
          <h2 
           className="text-center font-bold mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          style={{ 
            color: '#1F2937',
            lineHeight: '1.2'
          }}
        >
            Begin Your Healing Journey Today
          </h2>

          {/* Section Description */}
          <p 
            className="text-center mb-12 lg:mb-14 max-w-3xl mx-auto"
            style={{ 
              color: '#6B7280',
              fontSize: '16px',
              lineHeight: '1.6',
              fontWeight: 400
            }}
          >
            Schedule your personalized consultation with our expert Ayurvedic physicians. Same-day appointments available.
          </p>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-6 lg:gap-8">
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              {/* What to Expect */}
              <div 
                className="rounded-2xl p-6 lg:p-7 shadow-sm border border-gray-100"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <h3 
                  className="mb-6"
                  style={{ 
                    color: '#000000',
                    fontSize: '18px',
                    fontWeight: 600
                  }}
                >
                  What to Expect
                </h3>
                
                <div className="space-y-5">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div 
                      className="flex-shrink-0 flex items-center justify-center rounded-full font-bold text-white"
                      style={{ 
                        width: '42px',
                        height: '42px',
                        backgroundColor: '#1b5e3f',
                        fontSize: '18px',
                        fontWeight: 700
                      }}
                    >
                      1
                    </div>
                    <div className="pt-0.5">
                      <h4 
                        className="mb-2"
                        style={{ 
                          color: '#000000',
                          fontSize: '16px',
                          fontWeight: 600
                        }}
                      >
                        Comprehensive Assessment
                      </h4>
                      <p 
                        style={{ 
                          color: '#6B7280',
                          fontSize: '14px',
                          lineHeight: '1.6',
                          fontWeight: 400
                        }}
                      >
                        60-minute consultation including pulse diagnosis and dosha analysis.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div 
                      className="flex-shrink-0 flex items-center justify-center rounded-full font-bold text-white"
                      style={{ 
                        width: '42px',
                        height: '42px',
                        backgroundColor: '#1b5e3f',
                        fontSize: '18px',
                        fontWeight: 700
                      }}
                    >
                      2
                    </div>
                    <div className="pt-0.5">
                      <h4 
                        className="mb-2"
                        style={{ 
                          color: '#000000',
                          fontSize: '16px',
                          fontWeight: 600
                        }}
                      >
                        Personalized Plan
                      </h4>
                      <p 
                        style={{ 
                          color: '#6B7280',
                          fontSize: '14px',
                          lineHeight: '1.6',
                          fontWeight: 400
                        }}
                      >
                        Custom treatment protocol tailored to your unique condition.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div 
                      className="flex-shrink-0 flex items-center justify-center rounded-full font-bold text-white"
                      style={{ 
                        width: '42px',
                        height: '42px',
                        backgroundColor: '#1b5e3f',
                        fontSize: '18px',
                        fontWeight: 700
                      }}
                    >
                      3
                    </div>
                    <div className="pt-0.5">
                      <h4 
                        className="mb-2"
                        style={{ 
                          color: '#000000',
                          fontSize: '16px',
                          fontWeight: 600
                        }}
                      >
                        Treatment Journey
                      </h4>
                      <p 
                        style={{ 
                          color: '#6B7280',
                          fontSize: '14px',
                          lineHeight: '1.6',
                          fontWeight: 400
                        }}
                      >
                        Begin authentic therapies with ongoing support and adjustments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Limited Time Offer */}
              <div 
                className="rounded-2xl p-6 shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #1b5e3f 0%, #2d7a56 100%)'
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 
                    className="text-white"
                    style={{ fontSize: '17px', fontWeight: 500 }}
                  >
                    Limited Time Offer
                  </h3>
                </div>
                <p 
                  className="mb-4 text-white"
                  style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.5' }}
                >
                  Book your first consultation this month and receive:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white" style={{ fontSize: '14px', fontWeight: 400 }}>Free dosha analysis report</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white" style={{ fontSize: '14px', fontWeight: 400 }}>Complimentary wellness guidebook</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white" style={{ fontSize: '14px', fontWeight: 400 }}>15% off first treatment package</span>
                  </li>
                </ul>
              </div>

              {/* Prefer to Talk */}
              <div 
                className="rounded-2xl p-6 lg:p-7 shadow-sm border border-gray-100"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <h3 
                  className="mb-5"
                  style={{ 
                    color: '#000000',
                    fontSize: '18px',
                    fontWeight: 500
                  }}
                >
                  Prefer to Talk?
                </h3>
                
                <div className="space-y-4">
                  {/* Call Us */}
                  <div className="flex items-center gap-3.5">
                    <svg 
                      className="flex-shrink-0" 
                      style={{ width: '22px', height: '22px', color: '#6B7280' }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p 
                        style={{ 
                          color: '#000000',
                          fontSize: '14px',
                          fontWeight: 500,
                          marginBottom: '2px'
                        }}
                      >
                        Call Us
                      </p>
                      <p 
                        style={{ 
                          color: '#6B7280',
                          fontSize: '14px',
                          fontWeight: 400
                        }}
                      >
                        (+971) 04 286 2006
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center gap-3.5">
                    <svg 
                      className="flex-shrink-0" 
                      style={{ width: '22px', height: '22px', color: '#6B7280' }}
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <div>
                      <p 
                        style={{ 
                          color: '#000000',
                          fontSize: '14px',
                          fontWeight: 500,
                          marginBottom: '2px'
                        }}
                      >
                        WhatsApp
                      </p>
                      <p 
                        style={{ 
                          color: '#6B7280',
                          fontSize: '14px',
                          fontWeight: 400
                        }}
                      >
                        (+971) 56 659 7878
                      </p>
                    </div>
                  </div>

                  {/* Open Hours */}
                  <div className="flex items-center gap-3.5">
                    <svg 
                      className="flex-shrink-0" 
                      style={{ width: '22px', height: '22px', color: '#6B7280' }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p 
                        style={{ 
                          color: '#000000',
                          fontSize: '14px',
                          fontWeight: 500,
                          marginBottom: '2px'
                        }}
                      >
                        Open Hours
                      </p>
                      <p 
                        style={{ 
                          color: '#6B7280',
                          fontSize: '14px',
                          fontWeight: 400
                        }}
                      >
                        Sun-Thu: 9:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Booking Form */}
            <div 
              className="rounded-2xl p-7 lg:p-8 shadow-sm border border-gray-100"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <h3 
                className="mb-2"
                style={{ 
                  color: '#000000',
                  fontSize: '22px',
                  fontWeight: 600
                }}
              >
                Book Your Consultation
              </h3>
              <p 
                className="mb-7"
                style={{ 
                  color: '#6B7280',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '1.5'
                }}
              >
                Fill in your details and we'll confirm your appointment shortly.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label 
                    className="block mb-2"
                    style={{ 
                      color: '#1F2937',
                      fontSize: '14px',
                      fontWeight: 500
                    }}
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg 
                        className="w-5 h-5" 
                        style={{ color: '#9CA3AF' }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full pl-12 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-gray-50 text-gray-900 placeholder-gray-400"
                      style={{ 
                        height: '50px',
                        borderColor: '#E5E7EB',
                        fontSize: '14px',
                        borderRadius: '10px',
                        fontWeight: 400
                      }}
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label 
                    className="block mb-2"
                    style={{ 
                      color: '#1F2937',
                      fontSize: '14px',
                      fontWeight: 500
                    }}
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg 
                        className="w-5 h-5" 
                        style={{ color: '#9CA3AF' }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(+971) XX XXX XXXX"
                      required
                      className="w-full pl-12 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-gray-50 text-gray-900 placeholder-gray-400"
                      style={{ 
                        height: '50px',
                        borderColor: '#E5E7EB',
                        fontSize: '14px',
                        borderRadius: '10px',
                        fontWeight: 400
                      }}
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label 
                    className="block mb-2"
                    style={{ 
                      color: '#1F2937',
                      fontSize: '14px',
                      fontWeight: 500
                    }}
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg 
                        className="w-5 h-5" 
                        style={{ color: '#9CA3AF' }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full pl-12 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-gray-50 text-gray-900 placeholder-gray-400"
                      style={{ 
                        height: '50px',
                        borderColor: '#E5E7EB',
                        fontSize: '14px',
                        borderRadius: '10px',
                        fontWeight: 400
                      }}
                    />
                  </div>
                </div>

                {/* Treatment of Interest */}
                <div>
                  <label 
                    className="block mb-2"
                    style={{ 
                      color: '#1F2937',
                      fontSize: '14px',
                      fontWeight: 500
                    }}
                  >
                    Treatment of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    required
                    className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-gray-50 text-gray-900"
                    style={{ 
                      height: '50px',
                      borderColor: '#E5E7EB',
                      fontSize: '14px',
                      borderRadius: '10px',
                      fontWeight: 400
                    }}
                  >
                    <option value="">Select your treatment</option>
                    <option value="ayurveda">Ayurveda</option>
                    <option value="aesthetic-dermatology">Aesthetic Dermatology</option>
                    <option value="dental">Dental</option>
                    <option value="physiotherapy">Physiotherapy</option>
                    <option value="general-physician">General Physician</option>
                    <option value="facial">Facial</option>
                  </select>
                </div>

                {/* Date and Time Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Preferred Date */}
                  <div>
                    <label 
                      className="block mb-2"
                      style={{ 
                        color: '#1F2937',
                        fontSize: '14px',
                        fontWeight: 500
                      }}
                    >
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg 
                          className="w-5 h-5" 
                          style={{ color: '#9CA3AF' }}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-gray-50 text-gray-900"
                        style={{ 
                          height: '50px',
                          borderColor: '#E5E7EB',
                          fontSize: '14px',
                          borderRadius: '10px',
                          fontWeight: 400
                        }}
                      />
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label 
                      className="block mb-2"
                      style={{ 
                        color: '#1F2937',
                        fontSize: '14px',
                        fontWeight: 500
                      }}
                    >
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-gray-50 text-gray-900"
                      style={{ 
                        height: '50px',
                        borderColor: '#E5E7EB',
                        fontSize: '14px',
                        borderRadius: '10px',
                        fontWeight: 400
                      }}
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label 
                    className="block mb-2"
                    style={{ 
                      color: '#1F2937',
                      fontSize: '14px',
                      fontWeight: 500
                    }}
                  >
                    Additional Information <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your health concerns or questions..."
                    className="w-full px-4 py-3.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none bg-gray-50 text-gray-900 placeholder-gray-400"
                    style={{ 
                      borderColor: '#E5E7EB',
                      fontSize: '14px',
                      borderRadius: '10px',
                      fontWeight: 400,
                      lineHeight: '1.6'
                    }}
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-0.5 cursor-pointer"
                    style={{ 
                      width: '20px',
                      height: '20px',
                      accentColor: '#f71109ff'
                    }}
                  />
                  <label 
                    style={{ 
                      color: '#4B5563',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      fontWeight: 400
                    }}
                  >
                    Yes, send me appointment confirmations, wellness tips, and special offers via WhatsApp
                  </label>
                </div>

                {/* Buttons */}
                <div className="space-y-4 pt-3">
                  <button
                    type="submit"
                    className="w-full text-white  rounded-lg transition-all hover:bg-emerald-700 shadow-sm hover:shadow-md"
                    style={{ 
                      height: '52px',
                      backgroundColor: '#1b5e3f',
                      fontSize: '16px',
                      borderRadius: '10px',
                      fontWeight: 500
                    }}
                  >
                    Confirm Appointment Request
                  </button>

                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px" style={{ backgroundColor: '#E5E7EB' }}></div>
                    <span style={{ color: '#9CA3AF', fontSize: '14px', fontWeight: 500 }}>or</span>
                    <div className="flex-1 h-px" style={{ backgroundColor: '#E5E7EB' }}></div>
                  </div>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full text-white  rounded-lg transition-all hover:bg-emerald-600 flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md"
                    style={{ 
                      height: '52px',
                      backgroundColor: '#25d366',
                      fontSize: '16px',
                      borderRadius: '10px',
                      fontWeight: 500
                    }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Book via WhatsApp Instantly
                  </button>
                </div>

                {/* Disclaimer */}
                <p 
                  className="text-center pt-3"
                  style={{ 
                    color: '#6B7280',
                    fontSize: '13px',
                    lineHeight: '1.5',
                    fontWeight: 400
                  }}
                >
                  By submitting this form, you agree to our Privacy Policy and Terms of Service. Your information is secure and will never be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BeginYourHealingJourneySection;
