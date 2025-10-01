'use client'

import { useState } from "react";

export default function Home() {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredSector, setHoveredSector] = useState(null);

  const services = [
    {
      id: 'chatbot',
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI to engage your customers 24/7',
      icon: '🤖',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'auto-reply',
      title: 'Auto Reply Systems',
      description: 'Automated response systems for seamless customer communication',
      icon: '⚡',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 'websites',
      title: 'Website Development',
      description: 'Modern, responsive websites tailored to your business needs',
      icon: '🌐',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile solutions',
      icon: '📱',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const sectors = [
    { name: 'Photography', icon: '📸', color: 'bg-gradient-to-r from-pink-400 to-rose-600' },
    { name: 'Education', icon: '🎓', color: 'bg-gradient-to-r from-blue-400 to-indigo-600' },
    { name: 'Hotels & Resorts', icon: '🏨', color: 'bg-gradient-to-r from-emerald-400 to-teal-600' },
    { name: 'Restaurants', icon: '🍽️', color: 'bg-gradient-to-r from-orange-400 to-red-600' },
    { name: 'Study Abroad', icon: '✈️', color: 'bg-gradient-to-r from-cyan-400 to-blue-600' },
    { name: 'Corporate Office', icon: '🏢', color: 'bg-gradient-to-r from-gray-400 to-slate-600' },
    { name: 'Travel Booking', icon: '🎫', color: 'bg-gradient-to-r from-violet-400 to-purple-600' },
    { name: 'Event Management', icon: '🎉', color: 'bg-gradient-to-r from-yellow-400 to-orange-600' },
    { name: 'Salon & Parlor', icon: '💄', color: 'bg-gradient-to-r from-fuchsia-400 to-pink-600' },
    { name: 'E-commerce', icon: '🛒', color: 'bg-gradient-to-r from-green-400 to-emerald-600' },
    { name: 'Organic Products', icon: '🌱', color: 'bg-gradient-to-r from-lime-400 to-green-600' },
    { name: 'Gadget Shops', icon: '📱', color: 'bg-gradient-to-r from-indigo-400 to-blue-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              RocketFlow
            </h1>
            <div className="mt-4 text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
              Digital Solutions for Every Industry
            </div>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Empowering businesses across diverse sectors with cutting-edge digital services. 
            From AI-powered chatbots to stunning websites, we transform your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 border border-gray-600 rounded-2xl font-semibold text-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${service.gradient} bg-opacity-10 backdrop-blur-lg border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Sectors Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                <div className={`relative p-6 rounded-2xl ${sector.color} bg-opacity-20 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer`}>
                  <div className="text-center">
                    <div className="text-3xl mb-3">{sector.icon}</div>
                    <h3 className="text-sm font-semibold text-white">{sector.name}</h3>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 rounded-3xl bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-lg border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who've accelerated their growth with our digital solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25">
                Start Your Project
              </button>
              <button className="px-8 py-4 border border-gray-600 rounded-2xl font-semibold text-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            RocketFlow
          </div>
          <p className="text-gray-400 mb-6">
            Empowering businesses with next-generation digital solutions
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
