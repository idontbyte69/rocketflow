'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container } from '.';
import Link from 'next/link';
import {
  ChatBubbleLeftRightIcon,
  BoltIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CameraIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  ShoppingBagIcon,
  PaperAirplaneIcon,
  BuildingOfficeIcon,
  TicketIcon,
  SparklesIcon,
  ShoppingCartIcon,
  ComputerDesktopIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

export default function LandingPage() {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredSector, setHoveredSector] = useState(null);

  // Function to render service icon
  const renderServiceIcon = (service) => {
    switch (service.id) {
      case 'chatbot':
        return <ChatBubbleLeftRightIcon className="w-8 h-8" />;
      case 'auto-reply':
        return <BoltIcon className="w-8 h-8" />;
      case 'websites':
        return <GlobeAltIcon className="w-8 h-8" />;
      case 'mobile-apps':
        return <DevicePhoneMobileIcon className="w-8 h-8" />;
      default:
        return <ChatBubbleLeftRightIcon className="w-8 h-8" />;
    }
  };

  const services = [
    {
      id: 'chatbot',
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI to engage your customers 24/7 with automated responses',
      icon: ChatBubbleLeftRightIcon,
      color: 'from-primary to-primary-600'
    },
    {
      id: 'auto-reply',
      title: 'Auto Reply Systems',
      description: 'Automated response systems for seamless customer communication across all platforms',
      icon: BoltIcon,
      color: 'from-secondary to-secondary-600'
    },
    {
      id: 'websites',
      title: 'Website Development',
      description: 'Modern, responsive websites tailored to your business needs and brand identity',
      icon: GlobeAltIcon,
      color: 'from-primary-dark to-gray-700'
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile solutions to reach your customers anywhere',
      icon: DevicePhoneMobileIcon,
      color: 'from-primary-500 to-secondary-500'
    }
  ];

  const sectors = [
    { name: 'Photography', icon: CameraIcon, color: 'bg-gradient-to-br from-primary-50 to-primary-100' },
    { name: 'Education', icon: AcademicCapIcon, color: 'bg-gradient-to-br from-secondary-50 to-secondary-100' },
    { name: 'Hotels & Resorts', icon: BuildingOffice2Icon, color: 'bg-gradient-to-br from-primary-100 to-secondary-100' },
    { name: 'Restaurants', icon: ShoppingBagIcon, color: 'bg-gradient-to-br from-secondary-100 to-primary-100' },
    { name: 'Study Abroad', icon: PaperAirplaneIcon, color: 'bg-gradient-to-br from-primary-50 to-secondary-50' },
    { name: 'Corporate Office', icon: BuildingOfficeIcon, color: 'bg-gradient-to-br from-gray-100 to-primary-50' },
    { name: 'Travel Booking', icon: TicketIcon, color: 'bg-gradient-to-br from-secondary-50 to-primary-100' },
    { name: 'Event Management', icon: SparklesIcon, color: 'bg-gradient-to-br from-primary-100 to-secondary-50' },
    { name: 'Salon & Parlor', icon: SparklesIcon, color: 'bg-gradient-to-br from-primary-50 to-primary-100' },
    { name: 'E-commerce', icon: ShoppingCartIcon, color: 'bg-gradient-to-br from-secondary-100 to-secondary-50' },
    { name: 'Organic Products', icon: ShoppingBagIcon, color: 'bg-gradient-to-br from-secondary-50 to-secondary-100' },
    { name: 'Gadget Shops', icon: ComputerDesktopIcon, color: 'bg-gradient-to-br from-primary-100 to-primary-50' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <Section background="gradient" className="min-h-screen flex items-center justify-center pt-16">
        <Container>
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-800 leading-tight mb-6">
                One Solution To{' '}
                <span className="text-primary">Optimize</span>{' '}
                Your<br />
                <span className="text-primary">Social Media</span>
              </h1>
              <div className="mt-6 text-xl sm:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
                Level up your campaigns, business, marketing and social reach using our 
                cutting-edge features and ultimately turn your audiences into a valued customers.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <Button size="lg" className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary-600 hover:to-secondary-600">
                <PlayIcon className="w-5 h-5 text-white" />
                How It Works
              </Button>
              
              <div className="flex items-center gap-2 text-gray-600">
                <span>Or</span>
                <button className="text-primary font-semibold hover:text-primary-600 transition-colors">
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
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Chatbots Card */}
            <Card
              className="group relative"
              onMouseEnter={() => setHoveredService('chatbot')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white mb-4">
                <ChatBubbleLeftRightIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">AI Chatbots</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Intelligent conversational AI to engage your customers 24/7 with automated responses</p>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>

            {/* Auto Reply Systems Card */}
            <Card
              className="group relative"
              onMouseEnter={() => setHoveredService('auto-reply')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center text-white mb-4">
                <BoltIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Auto Reply Systems</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Automated response systems for seamless customer communication across all platforms</p>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>

            {/* Website Development Card */}
            <Card
              className="group relative"
              onMouseEnter={() => setHoveredService('websites')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white mb-4">
                <GlobeAltIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Website Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Modern, responsive websites tailored to your business needs and brand identity</p>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>

            {/* Mobile Applications Card */}
            <Card
              className="group relative"
              onMouseEnter={() => setHoveredService('mobile-apps')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white mb-4">
                <DevicePhoneMobileIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Mobile Applications</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Native and cross-platform mobile solutions to reach your customers anywhere</p>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Target Sectors Section */}
      <Section id="industries" background="gray">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
              Industries We <span className="text-primary">Serve</span>
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
                {sector.name === 'Education' ? (
                  <a href="/education" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>
                ) : sector.name === 'Photography' ? (
                  <Link href="/photography" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </Link>
                ) : sector.name === 'Study Abroad' ? (
                  <a href="/study-abroad" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>
                ) : sector.name === 'Hotels & Resorts' ? (
                  <a href="/hotel-and-resort" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>
                ) : sector.name === 'Travel Booking' ? (
                  <a href="/travel-booking" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>
                ) : sector.name === 'Event Management' ? (
                  <a href="/event" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>
                ) : sector.name === 'Photography' ? (
                  <a href="/photography" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>
                ): (
                  <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-white transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                    <div className="text-center">
                      <div className="w-8 h-8 mx-auto mb-3 text-primary-dark">
                        <sector.icon className="w-full h-full" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-700">{sector.name}</h3>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <Container size="lg">
          <div className="text-center">
            <Card padding="lg" className="bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-100" hover={false}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who've accelerated their growth with our digital solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary-600 hover:to-secondary-600">
                  Start Your Project
                </Button>
                <Button variant="secondary" size="lg" className="border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white">
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
