"use client"

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container, ShinyText } from '.';
import {
  CameraIcon,
  DevicePhoneMobileIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  BoltIcon,
  ComputerDesktopIcon,
  StarIcon,
  CurrencyDollarIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

export default function PhotographyPage() {
  const services = [
    {
      id: 'instant-inquiry',
      title: 'Instant Inquiry & Brochure Delivery',
      description: 'Automated, professional responses 24/7 with immediate brochure delivery.',
      icon: ChatBubbleLeftRightIcon,
      impacts: [
        '• Impress clients with immediate, professional responses 24/7',
        '• Capture and qualify leads',
        '• Free yourself from constantly answering the same questions'
      ]
    },
    {
      id: 'client-tagging',
      title: 'Smart Client Tagging & Organization',
      description: 'Comprehensive client pipeline management and organization system.',
      icon: GlobeAltIcon,
      impacts: [
        '• A clean, organized view of your entire client pipeline',
        '• Know exactly where every client is in your workflow',
        '• Easily filter and contact specific groups of clients'
      ]
    },
    {
      id: 'automated-workflow',
      title: 'Automated Client Workflow',
      description: 'End-to-end automation from booking to gallery delivery.',
      icon: BoltIcon,
      impacts: [
        '• Provide a high-end, proactive client experience',
        '• Automate your entire communication workflow',
        '• Eliminate the "ghosting" that happens after sending prices'
      ]
    },
    {
      id: 'seamless-booking',
      title: 'Seamless Booking & Information Collection',
      description: 'Professional and thorough booking process automation.',
      icon: ComputerDesktopIcon,
      impacts: [
        '• Collect all necessary client information in an organized way',
        '• Look incredibly professional and thorough',
        '• Save time on administrative back-and-forth'
      ]
    },
    {
      id: 'payment-reminders',
      title: 'Automated Session & Payment Reminders',
      description: 'Smart reminders to reduce no-shows and ensure timely payments.',
      icon: DevicePhoneMobileIcon,
      impacts: [
        '• Drastically reduce client no-shows',
        '• Ensure you get paid on time, every time',
        '• Maintain positive client relationships '
      ]
    },
    {
      id: 'targeted-promos',
      title: 'Targeted Promotions for Mini-Sessions',
      description: 'Strategic promotion system for maximum ROI.',
      icon: CameraIcon,
      impacts: [
        '• Fill your calendar during slower periods',
        '• Generate repeat business from existing clients',
        '• Achieve higher ROI on marketing efforts'
      ]
    },
    {
      id: 'ai-assistant',
      title: '24/7 AI-Powered Studio Assistant',
      description: 'Intelligent automated responses for potential clients.',
      icon: ChatBubbleLeftRightIcon,
      impacts: [
        '• Instant answers for potential clients',
        '• Frees you up for consultations and bookings',
        '• Ensures no lead is left waiting'
      ]
    },
    {
      id: 'analytics',
      title: 'Business Performance Analytics',
      description: 'Data-driven insights for business growth.',
      icon: BoltIcon,
      impacts: [
        '• Know where to focus your marketing efforts',
        '• Make data-driven decisions to grow',
        '• Understand true ROI of your social presence'
      ]
    },
    {
      id: 'unified-hub',
      title: 'Unified Client Communication Hub',
      description: 'Centralized communication management for seamless operations.',
      icon: ChatBubbleLeftRightIcon,
      impacts: [
        '• Single view of all client conversation history',
        '• Never lose track of important details',
        '• Run smoothly during busiest seasons'
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
                <ShinyText className="bg-gradient-to-r from-primary to-secondary text-black">Photography Solutions</ShinyText>
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl">
                Tailored tools and digital services for photographers — from bulk SMS and auto-reply systems to portfolio hosting and booking automation.
                Keep schedules full, clients happy, and galleries looking their best.
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
                  title="Photography Solutions"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video Caption */}
              <p className="text-center text-sm text-gray-500 mt-4">
                Discover how our photography solutions transform your business
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your
              <span className="relative inline-block text-coral-600"> Photography Business
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-coral-500 to-primary rounded-full"></div>
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-3">
              Comprehensive suite of automation tools designed to elevate your photography business. 
              From instant client responses to seamless workflows — everything you need to grow and scale.
            </p>
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
                <div className="absolute inset-0 bg-gradient-to-br from-coral-50/0 to-primary-50/0 group-hover:from-coral-50/30 group-hover:to-primary-50/30 transition-all duration-500"></div>
                
                {/* Icon Section */}
                <div className="relative flex justify-center mb-6">
                  <div className="absolute -top-3 -left-3 w-24 h-24 bg-coral-100 rounded-full opacity-30 filter blur-xl group-hover:opacity-50 transition-opacity"></div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-coral-500 to-primary flex items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <s.icon className="h-8 w-8 text-black" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="flex-shrink-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-coral-600 transition-colors line-clamp-2 min-h-[4rem]">{s.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg text-center group-hover:text-gray-700 transition-colors line-clamp-3 min-h-[4.5rem]">{s.description}</p>
                  </div>
                  
                  {/* Benefits Section */}
                  <div className="space-y-3 flex flex-col w-full px-4 mb-6 flex-grow">
                    {s.impacts.map((impact, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700 group/item transition-all duration-300 hover:translate-x-1">
                        <span className="w-3 h-3 bg-coral-500 rounded-full mr-3 group-hover/item:scale-125 transition-transform flex-shrink-0"></span>
                        <span className="group-hover/item:text-coral-600 transition-colors">{impact.replace('• ', '')}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-coral-500 to-primary text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg group-hover:shadow-xl relative overflow-hidden mt-auto">
                    <span className="relative z-10">Learn More</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-coral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              Photography Business
              <span className="bg-gradient-to-r from-primary to-secondary text-black"> Solutions</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we solve common photography business challenges
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
                        <p className="font-semibold text-gray-900">Lead Management</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Drowning in "Price?" DMs & inquiries</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-600">Instant Inquiry Response & Brochure Delivery</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-600">Saves hours per week, captures more leads</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <CameraIcon className="w-6 h-6 text-purple-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Client Conversion</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Leads "ghosting" after getting prices</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-600">Automated Nurturing & Follow-Up Sequences</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-600">Higher booking rates</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <StarIcon className="w-6 h-6 text-yellow-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Client Experience</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Inconsistent communication & manual work</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-600">Automated Client Workflow from Booking to Delivery</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-600">Professional, high-end client service</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <CurrencyDollarIcon className="w-6 h-6 text-green-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Financials</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Awkwardly chasing late payments</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-600">Automated Payment Reminders</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-600">On-time payments and improved cash flow</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <CalendarIcon className="w-6 h-6 text-blue-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Scheduling</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Client no-shows for sessions</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-600">Automated SMS & Email Session Reminders</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-600">Reduced no-shows, organized schedule</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <GlobeAltIcon className="w-6 h-6 text-indigo-500" />
                      <div>
                        <p className="font-semibold text-gray-900">Marketing & Growth</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Difficulty booking during off-seasons</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-600">Targeted Mini-Session & Offer Campaigns</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-600">Fills calendar and generates repeat business</span>
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
              Hear from photographers who have transformed their businesses with our digital solutions
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
                    SW
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">Sarah Wilson</div>
                    <div className="text-gray-600">Wedding Photographer</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="text-4xl text-primary-500 absolute -top-5 -left-2 opacity-40">"</div>
                  <p className="text-gray-700 italic text-lg relative z-10 mb-5 pl-4">
                    The automated client communication and gallery delivery system has revolutionized my workflow. I'm saving 15+ hours per week on admin tasks, and my clients love the seamless experience.
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
                    MR
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">Michael Rodriguez</div>
                    <div className="text-gray-600">Commercial Photographer</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="text-4xl text-secondary-500 absolute -top-5 -left-2 opacity-40">"</div>
                  <p className="text-gray-700 italic text-lg relative z-10 mb-5 pl-4">
                    Since implementing the bulk SMS and portfolio solutions, my booking rate has increased by 40%. The automated follow-ups and professional online presence have been game-changers.
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
      <Section className="py-24 relative overflow-hidden" style={{ 
        background: 'linear-gradient(135deg, var(--coral-600) 0%, var(--coral-500) 50%, var(--primary) 100%)'
      }}>
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Main Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-coral-500/60 via-primary/50 to-coral-600/70"></div>
          
          {/* Animated Elements */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-coral-200/30 rounded-full blur-3xl animate-blob">
            <div className="absolute inset-0 bg-gradient-to-r from-coral-400 to-coral-500 mix-blend-overlay"></div>
          </div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-coral-200/30 rounded-full blur-3xl animate-blob animation-delay-2000">
            <div className="absolute inset-0 bg-gradient-to-r from-coral-500 to-primary mix-blend-overlay"></div>
          </div>
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-coral-200/30 rounded-full blur-3xl animate-blob animation-delay-4000">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-coral-400 mix-blend-overlay"></div>
          </div>
          
          {/* Camera Lens Effect */}
          <div className="absolute inset-0" style={{ 
            background: 'radial-gradient(circle at center, transparent 30%, rgba(251, 91, 105, 0.2) 70%)',
            mixBlendMode: 'overlay' 
          }}></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Special Offer Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <div className="w-5 h-5 rounded-full bg-white animate-pulse mr-2"></div>
              <span className="text-white font-semibold">Limited Launch Offer</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Capture More
              <br />
              <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                Than Just Moments
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-12 leading-relaxed">
              Join 1000+ photographers who've automated their workflow,
              <br />increased bookings by 40%, and doubled their client satisfaction
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white hover:bg-opacity-95 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                <span className="text-coral-500 hover:text-coral-600">
                  Start Creating
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl group">
                <span className="group-hover:text-coral-500">
                  Watch Demo
                </span>
              </button>
            </div>

            {/* Feature Highlights */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white text-opacity-90">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-coral-400/20 backdrop-blur-sm flex items-center justify-center">
                  <CameraIcon className="w-5 h-5 text-white" />
                </div>
                <span>AI-Powered Workflow</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-coral-400/20 backdrop-blur-sm flex items-center justify-center">
                  <BoltIcon className="w-5 h-5 text-white" />
                </div>
                <span>5x Faster Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-coral-400/20 backdrop-blur-sm flex items-center justify-center">
                  <GlobeAltIcon className="w-5 h-5 text-white" />
                </div>
                <span>Global Client Access</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-coral-400/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-coral-200/20">
                <div className="text-3xl font-bold text-white mb-2">40%</div>
                <div className="text-white text-opacity-90">More Bookings</div>
              </div>
              <div className="bg-coral-400/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-coral-200/20">
                <div className="text-3xl font-bold text-white mb-2">15hrs</div>
                <div className="text-white text-opacity-90">Saved per Week</div>
              </div>
              <div className="bg-coral-400/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-coral-200/20">
                <div className="text-3xl font-bold text-white mb-2">1000+</div>
                <div className="text-white text-opacity-90">Happy Photographers</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
