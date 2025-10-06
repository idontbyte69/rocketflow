'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container, ShinyText } from '.';
import {
  CalendarIcon,
  UserGroupIcon,
  SparklesIcon,
  MapPinIcon,
  TicketIcon,
  ChartBarIcon,
  MegaphoneIcon,
  CameraIcon,
  BuildingStorefrontIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

export default function EventPage() {
  const [hoveredSolution, setHoveredSolution] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  // Function to render event solution icon
  const renderSolutionIcon = (solutionId) => {
    switch (solutionId) {
      case 'event-planning':
        return <CalendarIcon className="w-8 h-8" />;
      case 'attendee-management':
        return <UserGroupIcon className="w-8 h-8" />;
      case 'event-marketing':
        return <MegaphoneIcon className="w-8 h-8" />;
      case 'venue-management':
        return <MapPinIcon className="w-8 h-8" />;
      case 'ticketing':
        return <TicketIcon className="w-8 h-8" />;
      case 'event-technology':
        return <SparklesIcon className="w-8 h-8" />;
      default:
        return <CalendarIcon className="w-8 h-8" />;
    }
  };

  const eventSolutions = [
    {
      id: 'event-planning',
      title: 'Comprehensive Event Planning',
      description: "Transform your vision into reality with our end-to-end event planning services tailored to your needs",
      icon: CalendarIcon,
      color: 'from-blue-400 to-primary-500',
      features: ['Timeline management', 'Vendor coordination', 'Budget planning', 'Risk assessment']
    },
    {
      id: 'attendee-management',
      title: 'Attendee Experience',
      description: "Create memorable experiences with seamless attendee management and engagement strategies",
      icon: UserGroupIcon,
      color: 'from-primary-400 to-primary-600',
      features: ['Registration system', 'Guest communication', 'Name badge creation', 'Check-in automation']
    },
    {
      id: 'event-marketing',
      title: 'Event Promotion',
      description: 'Maximize attendance with strategic marketing campaigns across multiple channels',
      icon: MegaphoneIcon,
      color: 'from-secondary-400 to-secondary-600',
      features: ['Social media promotion', 'Email campaigns', 'PR outreach', 'Influencer partnerships']
    },
    {
      id: 'venue-management',
      title: 'Venue Selection & Management',
      description: 'Find and manage the perfect venue that matches your event vision and requirements',
      icon: MapPinIcon,
      color: 'from-primary-500 to-primary-700',
      features: ['Location scouting', 'Layout planning', 'AV equipment setup', 'On-site coordination']
    },
    {
      id: 'ticketing',
      title: 'Ticketing Solutions',
      description: 'Streamline your ticket sales and access control with our comprehensive ticketing platform',
      icon: TicketIcon,
      color: 'from-primary-dark to-gray-700',
      features: ['Multiple ticket types', 'Dynamic pricing', 'QR code scanning', 'Real-time analytics']
    },
    {
      id: 'event-technology',
      title: 'Event Technology Integration',
      description: "Enhance your event with cutting-edge technology solutions for better engagement",
      icon: SparklesIcon,
      color: 'from-secondary-500 to-secondary-700',
      features: ['Virtual components', 'Mobile event apps', 'Live streaming', 'Interactive features']
    }
  ];

  const eventBenefits = [
    {
      title: 'Increased Attendance',
      description: 'Our proven marketing strategies help you reach and attract your target audience effectively.',
      icon: ChartBarIcon
    },
    {
      title: 'Memorable Experiences',
      description: 'Create lasting impressions with carefully curated event experiences.',
      icon: HeartIcon
    },
    {
      title: 'Professional Documentation',
      description: 'Capture every moment with professional photography and documentation services.',
      icon: CameraIcon
    },
    {
      title: 'Vendor Management',
      description: 'Access our network of trusted vendors and get the best services for your event.',
      icon: BuildingStorefrontIcon
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-gray-50 to-white pt-32 pb-16">
        <Container>
          <div className="text-center">
            <ShinyText>Event Management Excellence</ShinyText>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Create Unforgettable Events
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              From intimate gatherings to large-scale conferences, we provide comprehensive event management solutions that ensure your event's success.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="primary" size="lg">Start Planning</Button>
              <Button variant="secondary" size="lg">Learn More</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Solutions Grid */}
      <Section className="py-16">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Event Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to plan, execute, and succeed with your events
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {eventSolutions.map((solution) => (
              <Card
                key={solution.id}
                onMouseEnter={() => setHoveredSolution(solution.id)}
                onMouseLeave={() => setHoveredSolution(null)}
                className={`relative overflow-hidden transition-all duration-300 ${
                  hoveredSolution === solution.id ? 'transform -translate-y-2' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-0 transition-opacity duration-300 ${
                  hoveredSolution === solution.id ? 'opacity-5' : ''
                }`} />
                <div className="relative p-6">
                  {renderSolutionIcon(solution.id)}
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{solution.title}</h3>
                  <p className="mt-2 text-gray-600">{solution.description}</p>
                  <ul className="mt-4 space-y-2">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Event Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Experience the difference with our professional event management expertise
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {eventBenefits.map((benefit, index) => (
              <Card
                key={index}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
                className={`text-center transition-all duration-300 ${
                  hoveredBenefit === index ? 'transform -translate-y-2' : ''
                }`}
              >
                <div className="p-6">
                  <benefit.icon className="w-12 h-12 mx-auto text-primary-500" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Call to Action Section */}
      <Section className="py-16">
        <Container>
          <div className="bg-primary-500 rounded-2xl px-6 py-16 sm:p-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white">Ready to Create Your Event?</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
                Let's work together to bring your vision to life. Contact us today to start planning your next successful event.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="white">Contact Us</Button>
                <Button variant="white-outline">View Portfolio</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}