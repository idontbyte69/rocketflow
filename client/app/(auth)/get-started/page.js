'use client';

import { useState } from 'react';
import { Navbar, Footer, Button, Container, Section } from '@/components';

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <Section className="pt-20 pb-16 bg-gradient-to-br from-coral-50 via-orange-50 to-red-50">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get Started with <span className="text-coral-500">RocketFlow</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of businesses already growing with our automation solutions
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="education">Education Services</option>
                    <option value="hospitality">Hotel & Resort</option>
                    <option value="photography">Photography</option>
                    <option value="events">Event Management</option>
                    <option value="gadgets">Gadget Shop Marketing</option>
                    <option value="study-abroad">Study Abroad</option>
                    <option value="corporate">Corporate Office</option>
                    <option value="organic">Organic Products</option>
                  </select>
                </div>

                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-coral-500 hover:bg-coral-600 text-white"
                >
                  Get Started Today
                </Button>

                <p className="text-center text-sm text-gray-600">
                  By signing up, you agree to our terms of service and privacy policy.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}