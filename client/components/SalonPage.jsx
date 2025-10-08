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
      <Section className="py-20 bg-gradient-to-r from-primary-dark via-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        <Container className="relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">Ready to streamline your salon business?</h2>
            <p className="max-w-2xl mx-auto mb-6 text-black">Book a demo and see how instant replies, broadcasts, and booking helpers will save time and increase bookings.</p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-white text-primary-dark px-6 py-3 rounded-lg">Schedule a Demo</Button>
              <Button className="border border-white text-white px-6 py-3 rounded-lg">Start Free Trial</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
