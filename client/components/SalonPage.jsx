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
    { id: 'instant-inbox', title: 'Instant Reply (Inbox)', description: 'Automatic, customizable replies to messages arriving in your inbox.', icon: ChatBubbleLeftRightIcon },
    { id: 'instant-comment', title: 'Instant Reply (Comments)', description: 'Auto-respond to social media comments to engage customers quickly.', icon: ChatBubbleOvalLeftIcon },
    { id: 'comment-to-inbox', title: 'Comment → Inbox', description: 'Convert public comments into private inbox conversations automatically.', icon: ArrowPathIcon },
    { id: 'show-offers', title: 'Show Offers', description: 'Highlight promotions and limited-time offers across channels.', icon: GlobeAltIcon },
    { id: 'chat-transfer', title: 'Chatbot → Human', description: 'Seamlessly escalate complex chats from bot to a human agent.', icon: UserGroupIcon },
    { id: 'capture-contact', title: 'Capture Phone & Email', description: 'Automatically capture customer contact details during conversations.', icon: DevicePhoneMobileIcon },
    { id: 'broadcast', title: 'Broadcast Messages', description: 'Send promotions and announcements to your customer lists.', icon: ChatBubbleLeftRightIcon },
    { id: 'help-booking', title: 'Booking Assistance', description: 'Assist customers with appointment booking and confirmations.', icon: CalendarIcon },
    { id: 'pricing', title: 'Pricing Details', description: 'Present service pricing and answer pricing queries instantly.', icon: CurrencyDollarIcon }
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.id} className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-4">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600 mb-4">{s.description}</p>
                <Button className="bg-primary text-white px-4 py-2 rounded-lg">Learn More</Button>
              </Card>
            ))}
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
