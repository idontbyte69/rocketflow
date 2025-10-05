'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container } from '../components';
import Link from 'next/link';

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
np
      {/* Mobile Device Showcase Section */}
      <Section background="white" className="relative overflow-hidden">
        <Container>
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="mb-8">
                <p className="text-coral-500 font-semibold mb-4">
                  Join <span className="text-2xl font-bold">900+</span> users from <span className="text-2xl font-bold">55+</span> countries using RocketFlow to drive customer engagement, inspire brand loyalty, and grow their business.
                </p>
              </div>
              
              {/* Company Logos */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
                <div className="text-2xl font-bold text-gray-400">Google</div>
                <div className="text-2xl font-bold text-gray-400">Commerce</div>
                <div className="text-2xl font-bold text-gray-400">WordPress</div>
                <div className="text-2xl font-bold text-gray-400">PayPal</div>
                <div className="text-2xl font-bold text-gray-400">Stripe</div>
                <div className="text-2xl font-bold text-gray-400">Zapier</div>
                <div className="text-2xl font-bold text-gray-400">RazorPay</div>
                <div className="text-2xl font-bold text-gray-400">MailChimp</div>
                <div className="text-2xl font-bold text-gray-400">ActiveCampaign</div>
                <div className="text-2xl font-bold text-gray-400">SendGrid</div>
                <div className="text-2xl font-bold text-gray-400">Intercom</div>
                <div className="text-2xl font-bold text-gray-400">Klaviyo</div>
              </div>
            </div>

            {/* Right Content - Mobile Device */}
            <div className="lg:w-1/2 relative">
              <div className="relative mx-auto w-80 h-160">
                {/* Phone Frame */}
                <div className="relative w-80 h-160 bg-black rounded-[3rem] p-2">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Phone Screen Content */}
                    <div className="relative h-full bg-gradient-to-br from-gray-50 to-white p-6">
                      {/* Top Navigation */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-3 h-3 bg-coral-500 rounded-full"></div>
                        <div className="text-xs font-semibold text-gray-600">RocketFlow Dashboard</div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      </div>
                      
                      {/* Dashboard Content */}
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-coral-500 rounded text-white text-xs flex items-center justify-center">📊</div>
                            <span className="text-xs font-semibold">Analytics</span>
                          </div>
                          <div className="h-8 bg-gradient-to-r from-coral-100 to-coral-200 rounded"></div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center">💬</div>
                            <span className="text-xs font-semibold">Messages</span>
                          </div>
                          <div className="space-y-1">
                            <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-green-500 rounded text-white text-xs flex items-center justify-center">🎯</div>
                            <span className="text-xs font-semibold">Campaigns</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-6 bg-green-100 rounded"></div>
                            <div className="h-6 bg-yellow-100 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating User Avatars */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-coral-500 rounded-full flex items-center justify-center text-white text-sm">👤</div>
                <div className="absolute top-10 -right-6 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">👤</div>
                <div className="absolute bottom-20 -left-6 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">👤</div>
                <div className="absolute bottom-8 -right-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">👤</div>
                <div className="absolute top-1/2 -right-8 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs">👤</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Reach Your Audiences Section */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
              <span className="text-coral-500">🎯</span> Reach Your Audiences <span className="text-coral-500">With Ease</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized tools to achieve greater insights for your business.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            <button className="bg-red-500 text-white p-4 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center justify-center gap-2">
              📘 Facebook
            </button>
            <button className="bg-blue-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              💬 Messenger
            </button>
            <button className="bg-purple-600 text-white p-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
              📷 Instagram
            </button>
            <button className="bg-green-600 text-white p-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
              📱 SMS
            </button>
            <button className="bg-gray-600 text-white p-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
              ✉️ Email
            </button>
          </div>
        </Container>
      </Section>

      {/* Automate Facebook Section */}
      <Section background="white">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left - Phone with Automate Facebook */}
            <div className="lg:w-1/2">
              <div className="relative mx-auto w-72 h-144">
                <div className="relative w-72 h-144 bg-black rounded-[2.5rem] p-2">
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 rounded-[2rem] overflow-hidden relative">
                    {/* Header */}
                    <div className="text-center py-6 text-white">
                      <h3 className="text-lg font-bold">AUTOMATE</h3>
                      <h3 className="text-lg font-bold">FACEBOOK</h3>
                    </div>
                    
                    {/* Illustration */}
                    <div className="px-6 py-8">
                      <div className="relative">
                        {/* Central Platform */}
                        <div className="w-16 h-16 bg-white rounded-lg mx-auto mb-6 flex items-center justify-center">
                          <span className="text-2xl">💻</span>
                        </div>
                        
                        {/* Connecting Lines and Icons */}
                        <div className="relative">
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                              <span className="text-xs">📊</span>
                            </div>
                          </div>
                          
                          <div className="absolute -left-8 top-4">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                              <span className="text-xs">💬</span>
                            </div>
                          </div>
                          
                          <div className="absolute -right-8 top-4">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                              <span className="text-xs">📱</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Text */}
                    <div className="absolute bottom-6 left-0 right-0 text-center">
                      <Button size="sm" className="bg-white text-purple-600 hover:bg-gray-100">
                        Try It Now →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                » Automate Comment, Like & Posting
              </h3>
              
              <p className="text-gray-600 mb-8">
                Managing Facebook for business is time consuming and it needs dedication to gain and maintain customers. RocketFlow can form data to share more features.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                  <span className="text-gray-700">Automated comment on Facebook Page & Groups</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                  <span className="text-gray-700">Scheduled Facebook posting with text, links, images & video</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                  <span className="text-gray-700">Instantly reply to page's comments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                  <span className="text-gray-700">Automated like to comments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                  <span className="text-gray-700">Engage to live audience 24/7</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-coral-500 hover:bg-coral-600">
                Try It Now →
              </Button>
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
            {sectors.map((sector, index) => {
              const isStudyAbroad = sector.name === 'Study Abroad';
              const sectorContent = (
                <div
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
              );

              return isStudyAbroad ? (
                <Link key={sector.name} href="/study-abroad/studyabroad">
                  {sectorContent}
                </Link>
              ) : (
                <div key={sector.name}>
                  {sectorContent}
                </div>
              );
            })}
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
