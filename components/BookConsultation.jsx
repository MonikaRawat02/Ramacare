import React, { useState } from 'react';

const BookConsultation = ({ content }) => {
  // Default content
  const defaultContent = {
    badge: 'Start Your Journey',
    title: 'Book Your Free Consultation Today',
    description: 'Take the first step towards natural hair restoration. Our DHA-licensed Ayurvedic doctors are ready to help.',
    getInTouchTitle: 'Get In Touch',
    requestAppointmentTitle: 'Request Appointment',
    submitButtonText: 'Confirm Free Consultation',
    contactInfo: {
      phone: '+971 04 286 2006',
      whatsapp: '971566597878',
      email: 'query@ramacarepolyclinic.com',
      address: {
        line1: 'Jumeirah 1 ground floor,',
        line2: 'Jumeirah Terrace Building, 393558, Dubai'
      }
    },
    clinicHours: {
      weekdays: 'Saturday - Thursday:',
      weekdaysTime: '9:00 AM - 9:00 PM',
      friday: 'Friday:',
      fridayTime: '2:00 PM - 9:00 PM'
    },
    statCards: [
      {
        title: 'DHA Licensed',
        description: 'Certified Healthcare Facility'
      },
      {
        title: 'Experienced Team',
        description: '15+ Years Combined'
      },
      {
        title: '2,500+ Patients',
        description: 'Successfully Treated'
      },
      {
        title: '4.9/5 Rating',
        description: '500+ Verified Reviews'
      }
    ]
  };

  // Use provided content or defaults
  const badge = content?.badge || defaultContent.badge;
  const title = content?.title || defaultContent.title;
  const description = content?.description || defaultContent.description;
  const getInTouchTitle = content?.getInTouchTitle || defaultContent.getInTouchTitle;
  const requestAppointmentTitle = content?.requestAppointmentTitle || defaultContent.requestAppointmentTitle;
  const submitButtonText = content?.submitButtonText || defaultContent.submitButtonText;
  const contactInfo = content?.contactInfo || defaultContent.contactInfo;
  const clinicHours = content?.clinicHours || defaultContent.clinicHours;
  const statCards = content?.statCards || defaultContent.statCards;
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    concern: '',
    additionalInfo: '',
    preferredDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="book-now" className="w-full bg-[#E8E3D8] py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-block mb-3 ">
          
              <span className="bg-[#FAFAF9] text-[#3d5f4a] px-4 py-2 rounded-full font-medium text-sm">{badge}</span>
         
          </div>
          <h2 className="md:text-xl lg:text-2xl font-bold text-[#1F2937] text-center mb-3">
            {title}
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Contact & Booking Form Section */}
        <div className="mt-6 md:mt-8">

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* LEFT COLUMN - Contact Information */}
            <div>
              {/* Get In Touch Card */}
              <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm mb-4">
                <h3 className="text-sm md:text-base font-semibold bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] bg-clip-text text-transparent mb-4">{getInTouchTitle}</h3>
                
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-gray-900 mb-0.5">Call Us</p>
                      <p className="text-[10px] md:text-xs text-gray-600">{contactInfo.phone}</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-gray-900 mb-0.5">WhatsApp</p>
                      <p className="text-[10px] md:text-xs text-gray-600">{contactInfo.whatsapp}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-gray-900 mb-0.5">Email</p>
                      <p className="text-[10px] md:text-xs text-gray-600">{contactInfo.email}</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-gray-900 mb-0.5">Clinic Address</p>
                      <p className="text-[10px] md:text-xs text-gray-900 mb-0.5">{contactInfo.address.line1}</p>
                      <p className="text-[10px] text-gray-600">{contactInfo.address.line2}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clinic Hours Card */}
              <div className="bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-xl p-4 md:p-5 text-white">
                <h3 className="text-sm md:text-base font-semibold mb-3">Clinic Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] md:text-xs">{clinicHours.weekdays}</span>
                    <span className="text-[10px] md:text-xs font-medium">{clinicHours.weekdaysTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] md:text-xs">{clinicHours.friday}</span>
                    <span className="text-[10px] md:text-xs font-medium">{clinicHours.fridayTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Appointment Form */}
            <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm">
              <h3 className="text-sm md:text-base font-semibold bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] bg-clip-text text-transparent mb-4">{requestAppointmentTitle}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                {/* Full Name & Phone Number - Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] md:text-xs font-medium text-gray-900 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-[10px] md:text-xs focus:border-[#047857] focus:outline-none transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-medium text-gray-900 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 XX XXX XXXX"
                      required
                      className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-[10px] md:text-xs focus:border-[#047857] focus:outline-none transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[10px] md:text-xs font-medium text-gray-900 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-[10px] md:text-xs focus:border-[#047857] focus:outline-none transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                  />
                </div>

                {/* Primary Concern */}
                <div>
                  <label className="block text-[10px] md:text-xs font-medium text-gray-900 mb-1.5">
                    Primary Concern
                  </label>
                  <select
                    name="concern"
                    value={formData.concern}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-[10px] md:text-xs focus:border-[#047857] focus:outline-none transition-all duration-300 bg-white text-gray-900"
                  >
                    <option value="">Select your concern</option>
                    <option value="hair-loss">Hair Loss</option>
                    <option value="thinning">Hair Thinning</option>
                    <option value="baldness">Baldness</option>
                    <option value="scalp-issues">Scalp Issues</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-[10px] md:text-xs font-medium text-gray-900 mb-1.5">
                    Additional Information
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us more about your condition, duration, previous treatments tried, etc."
                    className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-[10px] md:text-xs focus:border-[#047857] focus:outline-none transition-all duration-300 resize-none bg-white text-gray-900 placeholder-gray-500"
                  />
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-[10px] md:text-xs font-medium text-gray-900 mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      placeholder="dd-mm-yyyy"
                      className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-[10px] md:text-xs focus:border-[#047857] focus:outline-none transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                    />
                    <svg className="absolute right-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2D5F3F] to-[#3A7B51] text-white py-2.5 px-4 rounded-lg text-xs md:text-sm font-medium flex items-center justify-center gap-2 hover:from-[#244D32] hover:to-[#2D5F3F] transition-all duration-300 mt-4"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{submitButtonText}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* STAT CARDS Grid - After Form */}
          <div className="mt-8 md:mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {statCards.map((card, index) => (
                <div key={index} className="bg-white rounded-xl p-4 md:p-5 shadow-sm text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#2D5F3F] to-[#3A7B51] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-xs md:text-sm font-bold text-gray-900 mb-1">{card.title}</h4>
                  <p className="text-[10px] md:text-xs text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;

