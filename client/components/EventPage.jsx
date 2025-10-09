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
  StarIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export default function EventPage() {
  const [hoveredSolution, setHoveredSolution] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredAutomation, setHoveredAutomation] = useState(null);

  const automationServices = [
    {
      id: 'instant-inquiry',
      title: 'Instant Inquiry Management',
      description: 'Comprehensive management system for all event types',
      icon: InboxIcon,
      features: [
        'Impress potential high-value clients with immediate, professional responses',
        'Capture and qualify leads before your competitors can',
        'Automatically filter and direct inquiries to the right team member'
      ]
    },
    {
      id: 'smart-segmentation',
      title: 'Smart Lead & Attendee Segmentation',
      description: 'Intelligent audience segmentation and management',
      icon: UserGroupIcon,
      features: [
        'Clean pipeline for sales team and organized lists for marketing',
        'Understand your audience for better event planning',
        'Send highly relevant communication to every contact'
      ]
    },
    {
      id: 'automated-journeys',
      title: 'Automated Client & Attendee Journeys',
      description: 'Seamless automation for client and attendee communication',
      icon: ArrowPathRoundedSquareIcon,
      features: [
        'Nurture high-value leads to increase booking rates',
        'Build excitement and ensure smooth attendee experience',
        'Automate 90% of pre-event communication'
      ]
    },
    {
      id: 'registration',
      title: 'Seamless Registration System',
      description: 'Streamlined client briefing and ticket registration process',
      icon: TicketIcon,
      features: [
        'Collect detailed client requirements structurally',
        'Automate ticket sales and delivery',
        'Reduce manual data entry and administrative work'
      ]
    },
    {
      id: 'consultation',
      title: 'Automated Consultation & Reminders',
      description: 'Smart consultation management and reminder system',
      icon: ClockIcon,
      features: [
        'Reduce no-shows for important client consultations',
        'Keep attendees informed and excited',
        'Ensure timely payments from clients'
      ]
    },
    {
      id: 'promotion',
      title: 'Targeted Event Promotion',
      description: 'Strategic promotion system for maximum impact',
      icon: MegaphoneIcon,
      features: [
        'Sell more tickets with relevant marketing',
        'Maximize attendance and revenue',
        'Create urgency with timely offers'
      ]
    },
    {
      id: 'ai-desk',
      title: '24/7 AI Information Desk',
      description: 'Round-the-clock AI-powered event support',
      icon: SparklesIcon,
      features: [
        'Provide instant answers and reduce support load',
        'Improve client and attendee experience',
        'Free up team for complex planning'
      ]
    },
    {
      id: 'analytics',
      title: 'Event ROI & Analytics',
      description: 'Comprehensive event analytics and ROI tracking',
      icon: ChartBarIcon,
      features: [
        'Make data-driven decisions for future events',
        'Optimize marketing budget for highest ROI',
        'Understand core business strengths'
      ]
    },
    {
      id: 'unified-comms',
      title: 'Unified Communication Center',
      description: 'Centralized communication management system',
      icon: ChatBubbleBottomCenterTextIcon,
      features: [
        'Single, organized view of all communications',
        'Seamless team coordination',
        'Professional and scalable operation'
      ]
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
      id: 'social-inbox',
      title: 'Unified Social Inbox',
      description: "Manage all your client communications from Facebook, Instagram, WhatsApp, and other platforms in one centralized dashboard",
      icon: ChatBubbleBottomCenterTextIcon,
      color: 'from-blue-400 to-primary-500',
      features: ['Multi-platform integration', 'Automated message routing', 'Priority inbox sorting', 'Quick response templates']
    },
    {
      id: 'auto-response',
      title: 'Smart Auto-Response',
      description: "AI-powered automated responses that handle common event inquiries across all messaging platforms 24/7",
      icon: SparklesIcon,
      color: 'from-primary-400 to-primary-600',
      features: ['Context-aware replies', 'Multi-language support', 'Custom response rules', 'Sentiment analysis']
    },
    {
      id: 'inquiry-management',
      title: 'Inquiry Management',
      description: 'Automatically categorize and route client inquiries to the right team members based on event type and requirements',
      icon: InboxIcon,
      color: 'from-secondary-400 to-secondary-600',
      features: ['Smart categorization', 'Team assignment', 'Follow-up automation', 'Performance tracking']
    },
    {
      id: 'client-engagement',
      title: 'Client Engagement Hub',
      description: 'Maintain consistent client communication across all channels with automated updates and follow-ups',
      icon: UserGroupIcon,
      color: 'from-primary-500 to-primary-700',
      features: ['Scheduled updates', 'Event milestones', 'Feedback collection', 'Client portal access']
    },
    {
      id: 'social-monitoring',
      title: 'Social Media Monitoring',
      description: 'Monitor and respond to event-related mentions, comments, and messages across all social platforms',
      icon: MegaphoneIcon,
      color: 'from-primary-dark to-gray-700',
      features: ['Real-time alerts', 'Sentiment tracking', 'Competitor analysis', 'Engagement metrics']
    },
    {
      id: 'workflow-automation',
      title: 'Workflow Automation',
      description: "Streamline your event management process with automated workflows for client communications",
      icon: ArrowPathRoundedSquareIcon,
      color: 'from-secondary-500 to-secondary-700',
      features: ['Custom workflows', 'Task automation', 'Integration with CRM', 'Performance analytics']
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
                src="https://www.youtube.com/embed/m8qrcnM6cW4?si=GutyEwDLV8uo34k-" 
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

      {/* Automation Services Section */}
      <Section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Smart Event Management Features
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Revolutionize your event management with our comprehensive automation solutions
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {automationServices.map((service) => (
              <Card
                key={service.id}
                onMouseEnter={() => setHoveredAutomation(service.id)}
                onMouseLeave={() => setHoveredAutomation(null)}
                className={`relative overflow-hidden transition-all duration-500 transform hover:scale-105 h-full ${
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

      {/* Service Impact Table Section */}
      <Section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <ShinyText className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              Complete Solution Overview
            </ShinyText>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Transform Every Challenge into <span className="text-red-500">Growth Opportunity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              See how RocketFlow solves the biggest challenges facing event managers in today's dynamic market
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-xl">
            <table className="w-full bg-white">
              <thead className="bg-red-500">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-white">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-white">Problem</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-white">Rocket Flow Solution</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-white">Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="transform transition-all duration-300 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                        <InboxIcon className="w-5 h-5 text-red-600" />
                      </div>
                      <span className="text-base font-semibold text-gray-900 group-hover:text-red-600">Lead Management</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Drowning in "Price?" DMs & inquiries</td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Instant Inquiry Response & Brochure Delivery</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">
                      <CheckCircleIcon className="w-4 h-4 mr-1" />
                      Saves hours per week
                    </span>
                  </td>
                </tr>
                <tr className="transform transition-all duration-300 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <UserGroupIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-base font-semibold text-gray-900 group-hover:text-blue-600">Client Conversion</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Leads "ghosting" after getting prices</td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Automated Nurturing & Follow-Up Sequences</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">
                      <ChartBarIcon className="w-4 h-4 mr-1" />
                      Higher booking rates
                    </span>
                  </td>
                </tr>
                <tr className="transform transition-all duration-300 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <SparklesIcon className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-base font-semibold text-gray-900 group-hover:text-purple-600">Client Experience</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Inconsistent communication & manual work</td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Automated Client Workflow from Booking to Delivery</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">
                      <StarIcon className="w-4 h-4 mr-1" />
                      Professional service
                    </span>
                  </td>
                </tr>
                <tr className="transform transition-all duration-300 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <CurrencyDollarIcon className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-base font-semibold text-gray-900 group-hover:text-green-600">Financials</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Awkwardly chasing late payments</td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Automated Payment Reminders</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">
                      <CurrencyDollarIcon className="w-4 h-4 mr-1" />
                      Improved cash flow
                    </span>
                  </td>
                </tr>
                <tr className="transform transition-all duration-300 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <ClockIcon className="w-5 h-5 text-orange-600" />
                      </div>
                      <span className="text-base font-semibold text-gray-900 group-hover:text-orange-600">Scheduling</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Client no-shows for sessions</td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Automated SMS & Email Session Reminders</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      Reduced no-shows
                    </span>
                  </td>
                </tr>
                <tr className="transform transition-all duration-300 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                        <MegaphoneIcon className="w-5 h-5 text-pink-600" />
                      </div>
                      <span className="text-base font-semibold text-gray-900 group-hover:text-pink-600">Marketing & Growth</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Difficulty booking during off-seasons</td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Targeted Mini-Session & Offer Campaigns</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">
                      <RocketLaunchIcon className="w-4 h-4 mr-1" />
                      Accelerated growth
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-16">
            <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-8 border border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Revolutionize Your Event Management</h3>
              <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                From lead management to client experience, RocketFlow automates your entire event business workflow,
                letting you focus on creating unforgettable experiences.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 justify-center">
                  <SparklesIcon className="w-6 h-6 text-red-600" />
                  <span className="font-semibold text-gray-800">Save 20+ hours/week</span>
                </div>
                <div className="flex items-center space-x-3 justify-center">
                  <ChartBarIcon className="w-6 h-6 text-red-600" />
                  <span className="font-semibold text-gray-800">Increase bookings by 40%</span>
                </div>
                <div className="flex items-center space-x-3 justify-center">
                  <RocketLaunchIcon className="w-6 h-6 text-red-600" />
                  <span className="font-semibold text-gray-800">Scale your business</span>
                </div>
              </div>
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
                className={`relative overflow-hidden transition-all duration-300 h-full ${
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

      {/* Benefits Summary Section */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Benefits Summary
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              How Rocket Flow Transforms Your Event Management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventBenefits.map((benefit, index) => (
              <Card
                key={index}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
                className={`text-center transition-all duration-300 h-full transform hover:shadow-lg ${
                  hoveredBenefit === index ? '-translate-y-2' : ''
                }`}
              >
                <div className="p-8">
                  <div className="rounded-full w-16 h-16 mx-auto bg-gradient-to-br from-red-50 to-primary-50 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="mt-4 text-base text-gray-600 leading-relaxed">{benefit.description}</p>
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
              What Our Clients Say
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-primary rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from event organizers who have created unforgettable experiences with our solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-red-50 to-primary-50 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden h-full">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-red-100 to-transparent opacity-50 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-radial from-primary-100 to-transparent opacity-30 rounded-full"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-primary flex items-center justify-center text-white font-bold text-xl mr-5 shadow-md">
                    MA
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">Morshed Alam</div>
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
            
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-red-50 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden h-full">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-primary-100 to-transparent opacity-50 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-radial from-red-100 to-transparent opacity-30 rounded-full"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-red-500 flex items-center justify-center text-white font-bold text-xl mr-5 shadow-md">
                    MR
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">Md Real</div>
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