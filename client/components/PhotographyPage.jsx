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
  StarIcon
} from '@heroicons/react/24/outline';

export default function PhotographyPage() {
  const services = [
    {
      id: 'bulk-sms',
      title: 'Bulk SMS Campaigns',
      description: 'Send targeted promotional and booking messages to customers with high deliverability and scheduling options.',
      icon: DevicePhoneMobileIcon,
      features: ['Scheduled blasts', 'Personalized templates', 'Delivery reporting']
    },
    {
      id: 'auto-reply',
      title: 'Auto Reply & Chatbot',
      description: 'Automate enquiries from clients via WhatsApp, SMS or website chat so you never miss a booking.',
      icon: ChatBubbleLeftRightIcon,
      features: ['Instant replies', 'Booking flows', 'FAQ automation']
    },
    {
      id: 'domain-hosting',
      title: 'Domain & Hosting',
      description: 'Reliable domain registration and hosting to keep your portfolio sites fast and always online.',
      icon: ComputerDesktopIcon,
      features: ['One-click deploy', 'SSL certificates', '99.9% uptime']
    },
    {
      id: 'portfolio-site',
      title: 'Portfolio Websites',
      description: 'Beautiful, responsive portfolio sites that highlight your work and make it easy for clients to book.',
      icon: GlobeAltIcon,
      features: ['Fast galleries', 'Contact & booking forms', 'Mobile-first design']
    },
    {
      id: 'workflow',
      title: 'Shooting & Delivery Workflows',
      description: 'Streamline shoots, client approvals and digital delivery so you can focus on creating.',
      icon: BoltIcon,
      features: ['Client portals', 'Auto deliverables', 'Revision tracking']
    },
    {
      id: 'branding',
      title: 'Branding & Social Kits',
      description: 'On-brand templates, social-ready assets, and campaign toolkits to grow your presence.',
      icon: CameraIcon,
      features: ['Social templates', 'Content calendars', 'Ad creatives']
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
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Services for Photographers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-3">Everything you need to manage bookings, deliveries, and marketing — designed for photography studios and freelancers.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.id} className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-4">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600 mb-4">{s.description}</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-4">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
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
      <Section className="py-20 bg-gradient-to-r from-primary-dark via-primary to-secondary text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">Ready to streamline your photography business?</h2>
            <p className="max-w-2xl mx-auto mb-6 text-black">Book a demo and see how our tools reduce manual work, speed up client delivery, and help you sell more.</p>
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
