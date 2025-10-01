'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container } from '../components';

export default function Home() {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredSector, setHoveredSector] = useState(null);

  const services = [
    {
      id: 'chatbot',
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI to engage your customers 24/7 with automated responses',
      icon: '🤖',
      color: 'from-coral-400 to-coral-500'
    },
    {
      id: 'auto-reply',
      title: 'Auto Reply Systems',
      description: 'Automated response systems for seamless customer communication across all platforms',
      icon: '⚡',
      color: 'from-blue-400 to-blue-500'
    },
    {
      id: 'websites',
      title: 'Website Development',
      description: 'Modern, responsive websites tailored to your business needs and brand identity',
      icon: '🌐',
      color: 'from-purple-400 to-purple-500'
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile solutions to reach your customers anywhere',
      icon: '📱',
      color: 'from-green-400 to-green-500'
    }
  ];

  const sectors = [
    { name: 'Photography', icon: '📸', color: 'bg-gradient-to-br from-pink-100 to-pink-200' },
    { name: 'Education', icon: '🎓', color: 'bg-gradient-to-br from-blue-100 to-blue-200' },
    { name: 'Hotels & Resorts', icon: '🏨', color: 'bg-gradient-to-br from-emerald-100 to-emerald-200' },
    { name: 'Restaurants', icon: '🍽️', color: 'bg-gradient-to-br from-orange-100 to-orange-200' },
    { name: 'Study Abroad', icon: '✈️', color: 'bg-gradient-to-br from-cyan-100 to-cyan-200' },
    { name: 'Corporate Office', icon: '🏢', color: 'bg-gradient-to-br from-gray-100 to-gray-200' },
    { name: 'Travel Booking', icon: '🎫', color: 'bg-gradient-to-br from-violet-100 to-violet-200' },
    { name: 'Event Management', icon: '🎉', color: 'bg-gradient-to-br from-yellow-100 to-yellow-200' },
    { name: 'Salon & Parlor', icon: '💄', color: 'bg-gradient-to-br from-fuchsia-100 to-fuchsia-200' },
    { name: 'E-commerce', icon: '🛒', color: 'bg-gradient-to-br from-green-100 to-green-200' },
    { name: 'Organic Products', icon: '🌱', color: 'bg-gradient-to-br from-lime-100 to-lime-200' },
    { name: 'Gadget Shops', icon: '📱', color: 'bg-gradient-to-br from-indigo-100 to-indigo-200' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-coral-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <Section background="gradient" className="min-h-screen flex items-center justify-center pt-16">
        <Container>
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-800 leading-tight mb-6">
                One Solution To{' '}
                <span className="text-coral-500">Optimize</span>{' '}
                Your<br />
                <span className="text-coral-500">Social Media</span>
              </h1>
              <div className="mt-6 text-xl sm:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
                Level up your campaigns, business, marketing and social reach using our 
                cutting-edge features and ultimately turn your audiences into a valued customers.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <Button size="lg" className="flex items-center gap-2">
                <span className="text-white">📹</span>
                How It Works
              </Button>
              
              <div className="flex items-center gap-2 text-gray-600">
                <span>Or</span>
                <button className="text-coral-500 font-semibold hover:text-coral-600 transition-colors">
                  Try It For Free →
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section id="services" background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
              Our <span className="text-coral-500">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="group relative"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                padding="lg"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                
                <div className="absolute inset-0 bg-gradient-to-br from-coral-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Target Sectors Section */}
      <Section id="industries" background="gray">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
              Industries We <span className="text-coral-500">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for diverse business sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={sector.name}
                className="group relative"
                onMouseEnter={() => setHoveredSector(sector.name)}
                onMouseLeave={() => setHoveredSector(null)}
              >
                <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                  <div className="text-center">
                    <div className="text-3xl mb-3">{sector.icon}</div>
                    <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-coral-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <Container size="lg">
          <div className="text-center">
            <Card padding="lg" className="bg-gradient-to-r from-coral-50 to-blue-50 border-coral-100" hover={false}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who've accelerated their growth with our digital solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Start Your Project
                </Button>
                <Button variant="secondary" size="lg">
                  Schedule Consultation
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
