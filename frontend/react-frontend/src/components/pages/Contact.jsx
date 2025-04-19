import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const faqs = [
    {
      question: "How accurate is the crop prediction?",
      answer: "Our crop prediction model has an accuracy of over 90% based on the input parameters provided. The model is continuously trained with new data to improve its accuracy."
    },
    {
      question: "Can I use AgriPredict for commercial farming?",
      answer: "Yes, AgriPredict is designed for both small-scale and commercial farming operations. The recommendations are scalable and can be applied to farms of any size."
    },
    {
      question: "Does the system consider regional climate variations?",
      answer: "Yes, our model takes into account temperature, humidity, and rainfall patterns which vary by region. For the most accurate results, enter the specific environmental conditions of your farm location."
    },
    {
      question: "How often should I test my soil?",
      answer: "We recommend testing your soil at least once a year, ideally before the planting season. If you're rotating crops or experiencing issues with plant growth, more frequent testing may be beneficial."
    },
    {
      question: "Can I get recommendations for organic farming?",
      answer: "Yes, our crop recommendations work for both conventional and organic farming methods. The system focuses on crop suitability based on environmental conditions, which is relevant for all farming approaches."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4 font-serif">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Have questions or feedback? We'd love to hear from you. Fill out the form below or check our FAQ section.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">Send Us a Message</h2>
          
          {formStatus.submitted ? (
            <div className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {formStatus.message}
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-md overflow-hidden">
                <button
                  className="w-full text-left p-4 bg-white hover:bg-gray-50 focus:outline-none flex justify-between items-center"
                  onClick={() => {
                    // Toggle FAQ functionality would go here in a real implementation
                  }}
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Contact Information</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@agripredict.com
              </p>
              <p className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 9876543210
              </p>
              <p className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                123 Agriculture Street, Bangalore, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
