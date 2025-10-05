'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container, ShinyText } from '.';
import {
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  StarIcon,
  BoltIcon,
  ChatBubbleOvalLeftIcon,
  ChartBarIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';

export default function StudyAbroad() {
  const [hoveredSolution, setHoveredSolution] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  // Function to render study abroad service icon
  const renderSolutionIcon = (solutionId) => {
    switch (solutionId) {
      case 'auto-mail':
        return <EnvelopeIcon className="w-8 h-8" />;
      case 'chat-reply':
        return <ChatBubbleLeftRightIcon className="w-8 h-8" />;
      case 'sms-notifications':
        return <DevicePhoneMobileIcon className="w-8 h-8" />;
      case 'ai-integration':
        return <GlobeAltIcon className="w-8 h-8" />;
      case 'document-automation':
        return <DocumentTextIcon className="w-8 h-8" />;
      case 'application-tracking':
        return <ClipboardDocumentCheckIcon className="w-8 h-8" />;
      default:
        return <PaperAirplaneIcon className="w-8 h-8" />;
    }
  };

  const studyAbroadSolutions = [
    {
      id: 'auto-mail',
      title: 'Automated Email Responses',
      description: 'Intelligent email automation system that sends personalized responses to student inquiries based on their specific questions and requirements',
      icon: EnvelopeIcon,
      color: 'from-blue-400 to-primary-500',
      features: ['Personalized replies', 'Document attachments', 'Follow-up scheduling', 'Multi-language support']
    },
    {
      id: 'chat-reply',
      title: 'AI Chat Assistant',
      description: '24/7 conversational AI to engage with prospective students, answer FAQs about universities, courses, and application procedures',
      icon: ChatBubbleLeftRightIcon,
      color: 'from-primary-400 to-primary-600',
      features: ['Instant responses', 'Course recommendations', 'University matching', 'Visa information']
    },
    {
      id: 'sms-notifications',
      title: 'SMS Notification System',
      description: 'Automated text messaging service to keep students updated on application status, deadlines, and important announcements',
      icon: DevicePhoneMobileIcon,
      color: 'from-secondary-400 to-secondary-600',
      features: ['Application alerts', 'Interview reminders', 'Deadline notifications', 'Document requests']
    },
    {
      id: 'ai-integration',
      title: 'AI Integration Platform',
      description: 'Comprehensive AI solutions that integrate with your existing systems to provide intelligent assistance throughout the student journey',
      icon: GlobeAltIcon,
      color: 'from-primary-500 to-primary-700',
      features: ['Profile matching', 'Scholarship recommendations', 'Career path analysis', 'Success prediction']
    },
    {
      id: 'document-automation',
      title: 'Document Processing System',
      description: 'Automated document verification and processing system that speeds up application reviews and reduces manual workload',
      icon: DocumentTextIcon,
      color: 'from-primary-dark to-gray-700',
      features: ['Document validation', 'Auto-categorization', 'Missing document alerts', 'Digital signature']
    },
    {
      id: 'application-tracking',
      title: 'Application Tracking Portal',
      description: 'Comprehensive portal for students to track their application progress, upload documents, and communicate with consultants',
      icon: ClipboardDocumentCheckIcon,
      color: 'from-secondary-500 to-secondary-700',
      features: ['Real-time status updates', 'Document upload', 'Milestone tracking', 'In-app messaging']
    }
  ];

  const studyAbroadBenefits = [
    {
      title: 'Enhanced Student Experience',
      description: 'Provide 24/7 support and personalized guidance throughout the entire application process',
      icon: StarIcon,
      metrics: '95% increase in student satisfaction'
    },
    {
      title: 'Operational Efficiency',
      description: 'Automate repetitive tasks, reduce manual workload, and streamline application processing',
      icon: BoltIcon,
      metrics: '60% reduction in processing time'
    },
    {
      title: 'Improved Communication',
      description: 'Keep students informed at every stage with automatic updates and instant responses',
      icon: ChatBubbleOvalLeftIcon,
      metrics: '80% faster response times'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Gain valuable insights into student preferences, application trends, and success rates',
      icon: ChartBarIcon,
      metrics: '40% improvement in placement success'
    }
  ];

  const serviceCategories = [
    { name: 'Universities', icon: BuildingLibraryIcon, description: 'Connect with top universities worldwide' },
    { name: 'Undergraduate Programs', icon: AcademicCapIcon, description: 'Bachelor degree applications and placements' },
    { name: 'Graduate Programs', icon: UserGroupIcon, description: 'Master and PhD program applications' },
    { name: 'Language Schools', icon: GlobeAltIcon, description: 'Language courses and certification programs' },
    { name: 'Visa Services', icon: DocumentTextIcon, description: 'Comprehensive visa application assistance' },
    { name: 'Accommodation', icon: BuildingLibraryIcon, description: 'Student housing and accommodation services' }
  ];

  const successStories = [
    {
      title: 'International Study Group',
      challenge: 'Manual email responses causing delays and losing potential students',
      solution: 'Implemented AI-powered auto-reply system with personalized responses',
      result: '70% faster response time and 45% increase in application conversions',
      icon: EnvelopeIcon
    },
    {
      title: 'Global Education Consultants',
      challenge: 'Limited communication channels with international students',
      solution: 'Deployed multi-channel communication system with SMS and chat support',
      result: '85% increase in student engagement and satisfaction',
      icon: ChatBubbleLeftRightIcon
    },
    {
      title: 'Overseas Education Network',
      challenge: 'Complex document management causing application delays',
      solution: 'Implemented document automation system with AI verification',
      result: '60% reduction in processing time and 90% accuracy improvement',
      icon: DocumentTextIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content - Order fixed for mobile */}
            <div className="order-1">
              <div className="animate-fadeIn">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <ShinyText className="text-red-600 bg-clip-text">
                    Study Abroad Made Simple
                  </ShinyText>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  Empower your study abroad consultancy with cutting-edge digital solutions that enhance student experiences, 
                  streamline operations, and increase successful placements.
                </p>
              </div>
              
              {/* Key Stats - Enhanced with animations */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-5 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-primary-dark">2000+</div>
                  <div className="text-sm text-gray-600">Students Placed</div>
                </div>
                <div className="text-center p-5 bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-primary-dark">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl">
                  Get Started Today
                </Button>
                <Button className="border border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl">
                  View Success Stories
                </Button>
              </div>
            </div>
            
            {/* Right Column - Video - Now appears after text on mobile */}
            <div className="order-2">
              <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,112,184,0.3)]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Study Abroad Services"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video Caption */}
              <p className="text-center text-sm text-gray-500 mt-4">
                See how our solutions transform study abroad consultancies
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Enhanced Statistics Section with Better Vibe */}
      <Section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Study Abroad Experts Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join the growing community of consultancies that have transformed their services with our digital solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  100+
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-lg">Consultancies</div>
              <div className="text-gray-400 text-sm mt-1">Across 30+ Countries</div>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  10K+
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-lg">Students Assisted</div>
              <div className="text-gray-400 text-sm mt-1">And Growing Daily</div>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-lg">Satisfaction Rate</div>
              <div className="text-gray-400 text-sm mt-1">Client Happiness Score</div>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>

                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-lg">Support Available</div>
              <div className="text-gray-400 text-sm mt-1">Round-the-Clock Care</div>
            </div>
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Award Winning</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Study Abroad Solutions Section */}
      <Section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center mb-16 relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 left-1/4 w-20 h-20 rounded-full bg-primary-50 filter blur-xl opacity-70"></div>
            <div className="absolute -top-6 right-1/3 w-12 h-12 rounded-full bg-secondary-50 filter blur-lg opacity-70"></div>
            
            <h2 className="relative text-4xl font-bold text-gray-900 mb-6 inline-block">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Comprehensive</span> Study Abroad Solutions
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From automated communications to AI-powered application tracking, we provide end-to-end technology solutions 
              tailored specifically for study abroad consultancies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* Background decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-radial from-primary-50 to-transparent opacity-30 rounded-full"></div>
            {/* Automated Email Responses */}
            <Card
              className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'auto-mail' ? 'shadow-2xl border-blue-200 bg-blue-50/30' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('auto-mail')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-blue-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <EnvelopeIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Email Responses</h3>
              <p className="text-gray-600 mb-6 text-lg">Intelligent email automation system that sends personalized responses to student inquiries based on their specific questions and requirements</p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-blue-700 transition-colors">Personalized replies</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-blue-700 transition-colors">Document attachments</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-blue-700 transition-colors">Follow-up scheduling</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-blue-700 transition-colors">Multi-language support</span>
                </div>
              </div>
            </Card>

            {/* AI Chat Assistant */}
            <Card
              className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'chat-reply' ? 'shadow-2xl border-red-200 bg-red-50/30' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('chat-reply')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-red-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <ChatBubbleLeftRightIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Chat Assistant</h3>
              <p className="text-gray-600 mb-6 text-lg">24/7 conversational AI to engage with prospective students, answer FAQs about universities, courses, and application procedures</p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-red-700 transition-colors">Instant responses</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-red-700 transition-colors">Course recommendations</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-red-700 transition-colors">University matching</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-red-700 transition-colors">Visa information</span>
                </div>
              </div>
            </Card>

            {/* SMS Notification System */}
            <Card
              className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'sms-notifications' ? 'shadow-2xl border-yellow-200 bg-yellow-50/30' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('sms-notifications')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-yellow-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <DevicePhoneMobileIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SMS Notification System</h3>
              <p className="text-gray-600 mb-6 text-lg">Automated text messaging service to keep students updated on application status, deadlines, and important announcements</p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-yellow-700 transition-colors">Application alerts</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-yellow-700 transition-colors">Interview reminders</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-yellow-700 transition-colors">Deadline notifications</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-yellow-700 transition-colors">Document requests</span>
                </div>
              </div>
            </Card>

            {/* AI Integration Platform */}
            <Card
              className={`p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                hoveredSolution === 'ai-integration' ? 'shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('ai-integration')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white mb-4">
                <GlobeAltIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Integration Platform</h3>
              <p className="text-gray-600 mb-4">Comprehensive AI solutions that integrate with your existing systems to provide intelligent assistance throughout the student journey</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Profile matching
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Scholarship recommendations
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Career path analysis
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Success prediction
                </div>
              </div>
            </Card>

            {/* Document Processing System */}
            <Card
              className={`p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                hoveredSolution === 'document-automation' ? 'shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('document-automation')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white mb-4">
                <DocumentTextIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Document Processing System</h3>
              <p className="text-gray-600 mb-4">Automated document verification and processing system that speeds up application reviews and reduces manual workload</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Document validation
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Auto-categorization
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Missing document alerts
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Digital signature
                </div>
              </div>
            </Card>

            {/* Application Tracking Portal */}
            <Card
              className={`p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                hoveredSolution === 'application-tracking' ? 'shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('application-tracking')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center text-white mb-4">
                <ClipboardDocumentCheckIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Application Tracking Portal</h3>
              <p className="text-gray-600 mb-4">Comprehensive portal for students to track their application progress, upload documents, and communicate with consultants</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Real-time status updates
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Document upload
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Milestone tracking
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  In-app messaging
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100 rounded-full opacity-50 transform translate-x-1/2 -translate-y-1/2 filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-secondary-100 rounded-full opacity-40 transform -translate-x-1/2 translate-y-1/2 filter blur-3xl"></div>
        
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
              Why Study Abroad Consultancies 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Choose Us</span>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions deliver measurable improvements in student placements, operational efficiency, 
              and consultancy growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studyAbroadBenefits.map((benefit, index) => (
              <Card
                key={index}
                className={`p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 transform ${
                  hoveredBenefit === index ? 'shadow-2xl border-primary-100 scale-[1.03]' : 'hover:-translate-y-2'
                }`}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg mx-auto md:mx-0">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">{benefit.title}</h3>
                    <p className="text-gray-600 mb-5 text-lg text-center md:text-left">{benefit.description}</p>
                    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-4 shadow-inner">
                      <span className="text-base font-bold text-indigo-700 flex justify-center md:justify-start items-center">
                        <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                        {benefit.metrics}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Service Categories Section */}
      <Section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
              We Support All Types of 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Study Programs</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From undergraduate degrees to language courses, our solutions adapt to your specific service offerings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 text-center hover:border-primary transform hover:-translate-y-2 bg-white"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center shadow-md">
                  <category.icon className="w-8 h-8 text-indigo-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Success Stories Section */}
      <Section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-radial from-secondary-100 to-transparent opacity-60 rounded-full"></div>
        <div className="absolute -left-10 top-10 w-40 h-40 bg-gradient-radial from-primary-100 to-transparent opacity-50 rounded-full"></div>
        
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
              Success Stories from 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Industry Leaders</span>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped study abroad consultancies transform their operations and improve student outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                  <story.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">{story.title}</h3>
                <div className="space-y-5">
                  <div className="bg-red-50 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="font-bold text-red-700">Challenge</span>
                    </div>
                    <p className="text-gray-700">{story.challenge}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="font-bold text-blue-700">Solution</span>
                    </div>
                    <p className="text-gray-700">{story.solution}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="font-bold text-green-700">Result</span>
                    </div>
                    <p className="text-gray-700">{story.result}</p>
                  </div>
                </div>
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
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Clients Say</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from study abroad consultants who have transformed their businesses with our solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-primary-100 to-transparent opacity-50 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-radial from-secondary-100 to-transparent opacity-30 rounded-full"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl mr-5 shadow-md">
                    JD
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">John Davis</div>
                    <div className="text-gray-600">Director, Global Study Solutions</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="text-4xl text-primary-500 absolute -top-5 -left-2 opacity-40">"</div>
                  <p className="text-gray-700 italic text-lg relative z-10 mb-5 pl-4">
                    The automated email and chatbot system has completely transformed our response time. We're now able to engage with students 24/7, resulting in a 45% increase in successful applications.
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
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white font-bold text-xl mr-5 shadow-md">
                    AP
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">Anna Peterson</div>
                    <div className="text-gray-600">CEO, Study Abroad Connect</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="text-4xl text-secondary-500 absolute -top-5 -left-2 opacity-40">"</div>
                  <p className="text-gray-700 italic text-lg relative z-10 mb-5 pl-4">
                    The document processing system has cut our application processing time by 60%. We can now handle twice as many applications with the same team size, and with greater accuracy.
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
      <Section className="py-24 bg-gradient-to-r from-primary-dark via-primary to-secondary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-6 h-6 bg-white rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 left-1/4 w-4 h-4 bg-white rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-white rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-white rounded-full opacity-20 animate-pulse"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="text-center text-">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fadeIn">
              Ready to Transform Your Study Abroad Consultancy?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of study abroad consultancies that have already transformed their operations 
              and enhanced student experiences with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-indigo-700 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg">
                Schedule a Demo
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-indigo-700 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 text-lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}