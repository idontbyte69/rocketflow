"use client"

import { Navbar, Footer, Button, Card, Section, Container, ShinyText } from '.';
import {
  ChatBubbleLeftRightIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CalendarIcon,
  CurrencyDollarIcon
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
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="w-20 h-20 text-primary-dark" />
                </div>
              </div>
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

      <Section className="py-20 bg-gradient-to-r from-primary-dark via-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        <Container className="relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to streamline salon operations?</h2>
            <p className="text-white max-w-2xl mx-auto mb-6">Book a demo and see how instant replies, broadcasts, and booking helpers will save time and increase bookings.</p>
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
