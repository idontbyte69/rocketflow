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
  HeartIcon,
  ClockIcon,
  InboxIcon,
  InformationCircleIcon,
  MapIcon,
  ArrowPathRoundedSquareIcon,
  UserPlusIcon,
  TrophyIcon,
  ChatBubbleBottomCenterTextIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function EventPage() {
  const [hoveredSolution, setHoveredSolution] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredAutomation, setHoveredAutomation] = useState(null);

  const automationServices = [
    {
      id: 'instant-reply',
      title: '24/7 Instant Reply',
      description: 'Automated response system ensuring immediate engagement with your audience at any time',
      icon: ClockIcon,
      features: ['Round-the-clock availability', 'Customized responses', 'Multi-language support']
    },
    {
      id: 'comment-inbox',
      title: 'Comment-to-Inbox Transfer',
      description: 'Automatically convert social media comments into organized inbox messages for better management',
      icon: InboxIcon,
      features: ['Instant notification', 'Priority sorting', 'Threading support']
    },
    {
      id: 'event-info',
      title: 'Automated Event Information',
      description: 'Provide instant access to event details, schedules, and updates automatically',
      icon: InformationCircleIcon,
      features: ['Schedule updates', 'FAQ automation', 'Custom event alerts']
    },
    {
      id: 'location-share',
      title: 'Location Share',
      description: 'Automated location sharing system with real-time updates and directions',
      icon: MapIcon,
      features: ['Real-time tracking', 'Direction assistance', 'Venue details']
    },
    {
      id: 'smart-transfer',
      title: 'Smart Human Transfer',
      description: 'Intelligent system to seamlessly transfer queries to human agents when needed',
      icon: ArrowPathRoundedSquareIcon,
      features: ['Priority routing', 'Context preservation', 'Seamless handover']
    },
    {
      id: 'contact-collection',
      title: 'Contact Collection',
      description: 'Automated system for gathering and organizing attendee contact information',
      icon: UserPlusIcon,
      features: ['Data validation', 'GDPR compliance', 'Integration ready']
    },
    {
      id: 'vip-assistance',
      title: 'VIP Assistance',
      description: 'Premium automated service handling for VIP guests and special requests',
      icon: TrophyIcon,
      features: ['Priority handling', 'Exclusive access', 'Personalized service']
    },
    {
      id: 'comment-sensor',
      title: 'Comment Sensor & Feedback',
      description: 'Advanced sentiment analysis and automated feedback collection system',
      icon: ChatBubbleBottomCenterTextIcon,
      features: ['Sentiment analysis', 'Automated surveys', 'Real-time insights']
    }
  ];

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
      description: 'Capture every moment with professional event-management and documentation services.',
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <ShinyText>Event Management Excellence</ShinyText>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Create Unforgettable Events
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 mx-auto lg:mx-0">
                From intimate gatherings to large-scale conferences, we provide comprehensive event management solutions that ensure your event's success.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <Button variant="primary" size="lg">Start Planning</Button>
                <Button variant="secondary" size="lg">Learn More</Button>
              </div>
            </div>
            <div className="relative w-full aspect-video mt-8 lg:mt-0">
              <iframe 
                className="w-full h-full rounded-[10px] shadow-lg"
                src="https://www.youtube.com/embed/Co2Ot_nnI-8?si=jC13pPufzp-pr93b" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              />
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

      {/* Automation Services Section */}
      <Section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Automated Event Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Streamline your event management with our cutting-edge automation solutions
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {automationServices.map((service) => (
              <Card
                key={service.id}
                onMouseEnter={() => setHoveredAutomation(service.id)}
                onMouseLeave={() => setHoveredAutomation(null)}
                className={`relative overflow-hidden transition-all duration-500 transform hover:scale-105 ${
                  hoveredAutomation === service.id ? 'shadow-lg' : 'shadow-md'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${
                  (() => {
                    switch(service.id) {
                      case 'instant-reply':
                        return 'from-red-400 to-red-600';
                      case 'comment-inbox':
                        return 'from-rose-400 to-red-500';
                      case 'event-info':
                        return 'from-red-500 to-rose-600';
                      case 'location-share':
                        return 'from-rose-500 to-red-600';
                      case 'smart-transfer':
                        return 'from-red-400 to-rose-500';
                      case 'contact-collection':
                        return 'from-rose-400 to-red-500';
                      case 'vip-assistance':
                        return 'from-red-500 to-rose-600';
                      case 'comment-sensor':
                        return 'from-rose-500 to-red-600';
                      default:
                        return 'from-red-400 to-red-600';
                    }
                  })()
                } opacity-5 hover:opacity-10`} />
                <div className="p-6 relative z-10">
                  <div className="relative">
                    <service.icon className={`w-12 h-12 transition-all duration-500 transform ${
                      hoveredAutomation === service.id ? 'scale-110 text-red-600' : 'text-red-500'
                    }`} />
                    <div className={`absolute inset-0 bg-white rounded-full filter blur opacity-20 transition-opacity duration-500 ${
                      hoveredAutomation === service.id ? 'opacity-40' : 'opacity-0'
                    }`} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 transition-colors duration-300">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, index) => (
                      <li 
                        key={index} 
                        className={`flex items-center text-xs transition-all duration-300 ${
                          hoveredAutomation === service.id ? 'text-gray-800 transform translate-x-1' : 'text-gray-600'
                        }`}
                      >
                        <span className={`mr-2 transition-colors duration-300 ${
                          hoveredAutomation === service.id ? 'text-red-500' : 'text-gray-400'
                        }`}>•</span>
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

      {/* Client Reviews Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
              What Our 
              <span className="bg-gradient-to-r from-red-600 to-primary bg-clip-text text-transparent"> Clients Say</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-primary rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from event organizers who have created unforgettable experiences with our solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-red-50 to-primary-50 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-red-100 to-transparent opacity-50 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-radial from-primary-100 to-transparent opacity-30 rounded-full"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-primary flex items-center justify-center text-white font-bold text-xl mr-5 shadow-md">
                    SK
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">Sarah Kim</div>
                    <div className="text-gray-600">Wedding Planner, Dream Events</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="text-4xl text-red-500 absolute -top-5 -left-2 opacity-40">"</div>
                  <p className="text-gray-700 italic text-lg relative z-10 mb-5 pl-4">
                    The automated event management system has revolutionized how we plan weddings. The seamless coordination and real-time updates have made our events run flawlessly.
                  </p>
                  <div className="text-4xl text-red-500 absolute bottom-0 right-0 opacity-40">"</div>
                </div>
                <div className="flex text-secondary mt-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 fill-current text-yellow-500" />
                  ))}
                </div>
              </div>
            </Card>
            
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-red-50 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-primary-100 to-transparent opacity-50 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-radial from-red-100 to-transparent opacity-30 rounded-full"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-red-500 flex items-center justify-center text-white font-bold text-xl mr-5 shadow-md">
                    MJ
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">Mark Johnson</div>
                    <div className="text-gray-600">Director, Corporate Events Pro</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="text-4xl text-primary absolute -top-5 -left-2 opacity-40">"</div>
                  <p className="text-gray-700 italic text-lg relative z-10 mb-5 pl-4">
                    The platform's automation features have transformed how we handle corporate events. We can now manage twice as many events with better precision and attendee satisfaction.
                  </p>
                  <div className="text-4xl text-primary absolute bottom-0 right-0 opacity-40">"</div>
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