"use client"

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container, ShinyText } from '.';
import {
  ChatBubbleLeftRightIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function SalonPage() {
  const services = [
    {
      id: 'virtual-receptionist',
      title: '24/7 Virtual Receptionist',
      description: 'Never miss a client inquiry with round-the-clock professional responses.',
      icon: ChatBubbleLeftRightIcon,
      impacts: [
        '• Capture every lead, 24/7',
        '• Instant, professional responses',
        '• Free staff from repetitive queries'
      ]
    },
    {
      id: 'client-segmentation',
      title: 'Smart Client Segmentation',
      description: 'Intelligent client organization and personalized communication system.',
      icon: UserGroupIcon,
      impacts: [
        '• Automatically tag clients',
        '• Target promotions effectively',
        '• Personalize all communication'
      ]
    },
    {
      id: 'loyalty-engagement',
      title: 'Automated Loyalty & Re-engagement',
      description: 'Build lasting relationships and boost client retention.',
      icon: ArrowPathIcon,
      impacts: [
        '• Increase repeat business',
        '• Make clients feel valued',
        '• Win back lost clients'
      ]
    },
    {
      id: 'bridal-inquiries',
      title: 'Seamless Bridal Inquiries',
      description: 'Specialized system for high-value bridal service bookings.',
      icon: ChatBubbleOvalLeftIcon,
      impacts: [
        '• Never miss a high-value booking',
        '• Professional process impresses clients',
        '• Automatically collect event details'
      ]
    },
    {
      id: 'appointment-reminders',
      title: 'Appointment Reminders',
      description: 'Automated system to ensure clients never miss appointments.',
      icon: CalendarIcon,
      impacts: [
        '• Reduce no-shows significantly',
        '• Eliminate manual reminder calls',
        '• Reliable daily schedule view'
      ]
    },
    {
      id: 'targeted-promos',
      title: 'Targeted Promotions',
      description: 'Strategic promotion system to maximize salon occupancy.',
      icon: GlobeAltIcon,
      impacts: [
        '• Fill slow days with offers',
        '• Capitalize on festival demand',
        '• Drive immediate footfall'
      ]
    },
    {
      id: 'ai-receptionist',
      title: 'AI-Powered Receptionist',
      description: 'Intelligent automated responses for seamless customer service.',
      icon: ChatBubbleLeftRightIcon,
      impacts: [
        '• 24/7 instant customer service',
        '• Accurate information anytime',
        '• Staff focus on in-salon work'
      ]
    },
    {
      id: 'business-analytics',
      title: 'Business Analytics',
      description: 'Data-driven insights for salon growth and optimization.',
      icon: CurrencyDollarIcon,
      impacts: [
        '• Data-driven business decisions',
        '• Identify popular services',
        '• Optimize marketing spend'
      ]
    },
    {
      id: 'unified-communication',
      title: 'Unified Communication',
      description: 'Centralized client communication and booking management.',
      icon: DevicePhoneMobileIcon,
      impacts: [
        '• All client history in one place',
        '• Prevent double-bookings',
        '• Run a smooth, modern operation'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900">
      <Navbar />

      <Section className="pt-24 pb-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <ShinyText className="bg-gradient-to-r from-primary to-secondary text-black">Salon & Parlor Solutions</ShinyText>
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl">
                Tailored tools for salons: instant replies, bookings, broadcasting, contact capture and smooth bot-to-human handoffs — all designed to keep your calendar full.
              </p>

              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg">Get Started</Button>
                <Button className="border border-primary-dark text-primary-dark px-6 py-3 rounded-lg">Contact Sales</Button>
              </div>
            </div>

            <div>
              <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,112,184,0.3)]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Salon & Parlor Solutions"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video Caption */}
              <p className="text-center text-sm text-gray-500 mt-4">
                See how our solutions streamline your salon operations
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Salon Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-3">The features we offer to salons and parlors to automate communication, bookings and promotions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* Background decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-radial from-primary-50 to-transparent opacity-30 rounded-full"></div>
            
            {services.map((s, index) => (
              <Card
                key={s.id}
                className="p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group h-[550px] flex flex-col"
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-secondary-50/0 group-hover:from-primary-50/30 group-hover:to-secondary-50/30 transition-all duration-500"></div>
                
                {/* Icon Section */}
                <div className="relative flex justify-center mb-6">
                  <div className="absolute -top-3 -left-3 w-24 h-24 bg-primary-100 rounded-full opacity-30 filter blur-xl group-hover:opacity-50 transition-opacity"></div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <s.icon className="h-8 w-8 text-black" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="flex-shrink-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-primary-dark transition-colors line-clamp-2 min-h-[4rem]">{s.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg text-center group-hover:text-gray-700 transition-colors line-clamp-3 min-h-[4.5rem]">{s.description}</p>
                  </div>
                  
                  {/* Benefits Section */}
                  <div className="space-y-3 flex flex-col w-full px-4 mb-6 flex-grow">
                    {s.impacts.map((impact, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700 group/item transition-all duration-300 hover:translate-x-1">
                        <span className="w-3 h-3 bg-primary rounded-full mr-3 group-hover/item:scale-125 transition-transform flex-shrink-0"></span>
                        <span className="group-hover/item:text-primary-dark transition-colors">{impact.replace('• ', '')}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg group-hover:shadow-xl relative overflow-hidden mt-auto">
                    <span className="relative z-10">Learn More</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Solutions Table Section */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
              Salon Business
              <span className="bg-gradient-to-r from-primary to-secondary text-black"> Solutions</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we solve common salon business challenges
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
              <thead className="bg-coral-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Category</th>
                  <th className="px-6 py-4 text-left font-bold">Problem</th>
                  <th className="px-6 py-4 text-left font-bold">Rocket Flow Solution</th>
                  <th className="px-6 py-4 text-left font-bold">Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <ChatBubbleLeftRightIcon className="w-6 h-6 text-coral-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Appointments</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Costly client no-shows & last-minute cancellations</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-600">Automated SMS Appointment Reminders with Confirmation</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-600">Dramatically reduces no-shows, secures revenue</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <UserGroupIcon className="w-6 h-6 text-purple-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Client Management</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Repetitive inquiries about price and services</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-600">24/7 AI Receptionist & Instant Service Menu Delivery</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-600">Saves hours of staff time daily</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <StarIcon className="w-6 h-6 text-yellow-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Client Loyalty</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Low rate of repeat business</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-600">Automated Re-engagement & Birthday Campaigns</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-600">Increases client retention & lifetime value</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <GlobeAltIcon className="w-6 h-6 text-blue-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Marketing</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Empty slots during weekdays or off-seasons</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-600">Targeted Slow Day & Festival Offer Broadcasts</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-600">Fills the appointment book, boosts revenue</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <CurrencyDollarIcon className="w-6 h-6 text-green-500" />
                      <div>
                        <p className="font-semibold text-gray-900">High-Value Bookings</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Disorganized handling of bridal inquiries</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-600">Automated Bridal Inquiry Forms & Package Delivery</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-600">Professional process, more high-ticket bookings</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <ArrowPathIcon className="w-6 h-6 text-indigo-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Operations</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Manual time-consuming reminder calls</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-600">Fully Automated Communication Workflows</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-600">Frees up staff and improves efficiency</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
              What Our 
              <span className="bg-gradient-to-r from-primary to-secondary text-black"> Clients Say</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from salon owners who have transformed their businesses with our digital solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-primary-100 to-transparent opacity-50 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-radial from-secondary-100 to-transparent opacity-30 rounded-full"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-black font-bold text-xl mr-5 shadow-md">
                    JB
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">Jessica Brown</div>
                    <div className="text-gray-600">Owner, Glamour Studio</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="text-4xl text-primary-500 absolute -top-5 -left-2 opacity-40">"</div>
                  <p className="text-gray-700 italic text-lg relative z-10 mb-5 pl-4">
                    The automated booking and client communication system has transformed our salon. We've reduced no-shows by 75% and increased our repeat bookings significantly. The time saved on admin work is incredible!
                  </p>
                  <div className="text-4xl text-primary-500 absolute bottom-0 right-0 opacity-40">"</div>
                </div>
                <div className="flex text-secondary mt-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 fill-current text-yellow-500" />
                  ))}
                </div>
              </div>
            </Card>
            
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-secondary-50 to-primary-50 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-secondary-100 to-transparent opacity-50 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-radial from-primary-100 to-transparent opacity-30 rounded-full"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-black font-bold text-xl mr-5 shadow-md">
                    DM
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">David Martinez</div>
                    <div className="text-gray-600">Director, Style Hub Chain</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="text-4xl text-secondary-500 absolute -top-5 -left-2 opacity-40">"</div>
                  <p className="text-gray-700 italic text-lg relative z-10 mb-5 pl-4">
                    Managing multiple salon locations became effortless with this system. The broadcast messaging and centralized booking platform helped us grow our customer base by 40% in just six months.
                  </p>
                  <div className="text-4xl text-secondary-500 absolute bottom-0 right-0 opacity-40">"</div>
                </div>
                <div className="flex text-secondary mt-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 fill-current text-yellow-500" />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--coral-500) 0%, var(--primary-600) 50%, var(--coral-600) 100%)' }}>
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Main Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-coral-500/40 via-primary-600/30 to-coral-600/50"></div>
          
          {/* Animated Blobs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-coral-200/30 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-300/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-coral-300/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          
          {/* Additional Decorative Elements */}
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(251, 91, 105, 0.2) 100%)',
            mixBlendMode: 'overlay' 
          }}></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Highlight Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <div className="w-5 h-5 rounded-full bg-coral-400 animate-pulse mr-2"></div>
              <span className="text-white font-semibold">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                Salon Business Today
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-12 leading-relaxed">
              Join 500+ salons already using our platform to automate bookings,
              <br />reduce no-shows by 75%, and boost customer engagement
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white hover:bg-opacity-95 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                <span className="text-coral-500">Get Started Free</span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl group">
                <span className="group-hover:text-coral-500">Schedule Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white text-opacity-90">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-coral-400/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-coral-400/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span>Setup in 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-coral-400/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>24/7 Support</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">75%</div>
                <div className="text-white text-opacity-90">Reduced No-Shows</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">40%</div>
                <div className="text-white text-opacity-90">More Bookings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white text-opacity-90">Happy Salons</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
