'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container, ShinyText, ProvideMoreSection } from '.';
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
      color: 'from-blue-500 to-indigo-600',
      features: ['Personalized replies', 'Document attachments', 'Follow-up scheduling', 'Multi-language support']
    },
    {
      id: 'chat-reply',
      title: 'AI Chat Assistant',
      description: '24/7 conversational AI to engage with prospective students, answer FAQs about universities, courses, and application procedures',
      icon: ChatBubbleLeftRightIcon,
      color: 'from-indigo-500 to-purple-600',
      features: ['Instant responses', 'Course recommendations', 'University matching', 'Visa information']
    },
    {
      id: 'sms-notifications',
      title: 'SMS Notification System',
      description: 'Automated text messaging service to keep students updated on application status, deadlines, and important announcements',
      icon: DevicePhoneMobileIcon,
      color: 'from-purple-500 to-pink-600',
      features: ['Application alerts', 'Interview reminders', 'Deadline notifications', 'Document requests']
    },
    {
      id: 'ai-integration',
      title: 'AI Integration Platform',
      description: 'Comprehensive AI solutions that integrate with your existing systems to provide intelligent assistance throughout the student journey',
      icon: GlobeAltIcon,
      color: 'from-cyan-500 to-blue-600',
      features: ['Profile matching', 'Scholarship recommendations', 'Career path analysis', 'Success prediction']
    },
    {
      id: 'document-automation',
      title: 'Document Processing System',
      description: 'Automated document verification and processing system that speeds up application reviews and reduces manual workload',
      icon: DocumentTextIcon,
      color: 'from-blue-500 to-indigo-600',
      features: ['Document validation', 'Auto-categorization', 'Missing document alerts', 'Digital signature']
    },
    {
      id: 'application-tracking',
      title: 'Application Tracking Portal',
      description: 'Comprehensive portal for students to track their application progress, upload documents, and communicate with consultants',
      icon: ClipboardDocumentCheckIcon,
      color: 'from-indigo-500 to-purple-600',
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section - Corporate & Professional */}
      <Section className="pt-32 pb-24 relative overflow-hidden">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 border-4 border-blue-200 transform rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-indigo-200 transform -rotate-12"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 border-4 border-purple-200 transform rotate-12"></div>
          </div>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6 border border-blue-200">
                <AcademicCapIcon className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-900 font-semibold text-sm">Enterprise-Grade Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="text-gray-900">Streamlining Workflows for</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Study‑Abroad Consultancies
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Empower your study abroad consultancy with AI-powered automation, intelligent chatbots, 
                and enterprise-grade solutions designed to enhance student experiences and streamline operations.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <StarIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">2000+ Students</div>
                    <div className="text-sm text-gray-600">Successfully placed</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BoltIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">98% Success</div>
                    <div className="text-sm text-gray-600">Placement rate</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ChatBubbleOvalLeftIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">24/7 Support</div>
                    <div className="text-sm text-gray-600">Always available</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ChartBarIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">3x Conversion</div>
                    <div className="text-sm text-gray-600">Growth rate</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                  Get Started Today
                </Button>
                <Button className="border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-600 hover:text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                  View Success Stories
                </Button>
              </div>
            </div>

            
            {/* Right Visual - Professional Dashboard Preview */}
            <div className="relative">
              <div className="relative">
                {/* Dashboard Cards Stack */}
                <div className="space-y-4">
                  {/* Top Card - Analytics */}
                  <Card animationDelay={0} className="!bg-gradient-to-br !from-blue-600 !to-indigo-700 !text-white">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-sm opacity-80 mb-1">Student Applications</div>
                        <div className="text-4xl font-bold">2,500+</div>
                      </div>
                      <div className="w-16 h-16 bg-black bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <ChartBarIcon className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-white bg-opacity-20 rounded-full h-2">
                        <div className="bg-white rounded-full h-2 w-4/5"></div>
                      </div>
                      <span className="text-sm font-semibold">+35%</span>
                    </div>
                  </Card>

                  {/* Middle Cards - Side by Side */}
                  <div className="grid grid-cols-2 gap-4">
                    <Card animationDelay={0.1} className="border-2 border-indigo-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                        <UserGroupIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">98%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </Card>
                    <Card animationDelay={0.15} className="border-2 border-purple-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                        <BoltIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">3x</div>
                      <div className="text-sm text-gray-600">Conversion</div>
                    </Card>
                  </div>

                  {/* Bottom Card - Activity */}
                  <Card animationDelay={0.2} className="border-2 border-blue-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                        SA
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-sm">Study Abroad Query</div>
                        <div className="text-xs text-gray-500">2 minutes ago</div>
                      </div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-sm text-gray-700 mb-3">
                      "What are the requirements for UK universities?"
                    </div>
                    <div className="flex gap-2">
                      <div className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">
                        Auto-replied
                      </div>
                      <div className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium">
                        Resolved
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
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
      <Section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16 relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 left-1/4 w-20 h-20 rounded-full bg-blue-50 filter blur-xl opacity-70"></div>
            <div className="absolute -top-6 right-1/3 w-12 h-12 rounded-full bg-indigo-50 filter blur-lg opacity-70"></div>
            
            <div className="inline-flex items-center px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full mb-6 shadow-sm">
              <span className="text-indigo-700 font-semibold text-sm">Our Solutions</span>
            </div>
            
            <h2 className="relative text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Comprehensive
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Study Abroad Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From automated communications to AI-powered application tracking, we provide end-to-end technology solutions 
              tailored specifically for study abroad consultancies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* Background decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-radial from-blue-50 to-transparent opacity-30 rounded-full"></div>
            {/* Automated Email Responses */}
            <Card
              className={`p-8 rounded-2xl border-2 bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'auto-mail' ? 'shadow-2xl border-blue-300 bg-blue-50/50' : 'border-gray-100'
              }`}
              onMouseEnter={() => setHoveredSolution('auto-mail')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-blue-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <EnvelopeIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Email Responses</h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">Intelligent email automation system that sends personalized responses to student inquiries based on their specific questions and requirements</p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  <span className="group-hover:text-blue-700 transition-colors">Personalized replies</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  <span className="group-hover:text-blue-700 transition-colors">Document attachments</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  <span className="group-hover:text-blue-700 transition-colors">Follow-up scheduling</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  <span className="group-hover:text-blue-700 transition-colors">Multi-language support</span>
                </div>
              </div>
            </Card>

            {/* AI Chat Assistant */}
            <Card
              className={`p-8 rounded-2xl border-2 bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'chat-reply' ? 'shadow-2xl border-indigo-300 bg-indigo-50/50' : 'border-gray-100'
              }`}
              onMouseEnter={() => setHoveredSolution('chat-reply')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-indigo-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <ChatBubbleLeftRightIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Chat Assistant</h3>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">24/7 conversational AI to engage with prospective students, answer FAQs about universities, courses, and application procedures</p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  <span className="group-hover:text-indigo-700 transition-colors">Instant responses</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  <span className="group-hover:text-indigo-700 transition-colors">Course recommendations</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  <span className="group-hover:text-indigo-700 transition-colors">University matching</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  <span className="group-hover:text-indigo-700 transition-colors">Visa information</span>
                </div>
              </div>
            </Card>

            {/* SMS Notification System */}
            <Card
              className={`p-8 rounded-2xl border-2 bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'sms-notifications' ? 'shadow-2xl border-purple-300 bg-purple-50/50' : 'border-gray-100'
              }`}
              onMouseEnter={() => setHoveredSolution('sms-notifications')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-purple-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <DevicePhoneMobileIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SMS Notification System</h3>
              <p className="text-gray-600 mb-6 text-lg">Automated text messaging service to keep students updated on application status, deadlines, and important announcements</p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 rounded-full mr-3 group-hover:scale-125 transition-transform bg-gradient-to-r from-purple-500 to-pink-600"></span>
                  <span className="group-hover:text-purple-700 transition-colors">Application alerts</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 rounded-full mr-3 group-hover:scale-125 transition-transform bg-gradient-to-r from-purple-500 to-pink-600"></span>
                  <span className="group-hover:text-purple-700 transition-colors">Interview reminders</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 rounded-full mr-3 group-hover:scale-125 transition-transform bg-gradient-to-r from-purple-500 to-pink-600"></span>
                  <span className="group-hover:text-purple-700 transition-colors">Deadline notifications</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 rounded-full mr-3 group-hover:scale-125 transition-transform bg-gradient-to-r from-purple-500 to-pink-600"></span>
                  <span className="group-hover:text-purple-700 transition-colors">Document requests</span>
                </div>
              </div>
            </Card>

            {/* AI Integration Platform */}
            <Card
              className={`p-6 rounded-xl border-2 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                hoveredSolution === 'ai-integration' ? 'shadow-2xl border-cyan-300 bg-cyan-50/50' : 'border-gray-100'
              }`}
              onMouseEnter={() => setHoveredSolution('ai-integration')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-4">
                <GlobeAltIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Integration Platform</h3>
              <p className="text-gray-600 mb-4">Comprehensive AI solutions that integrate with your existing systems to provide intelligent assistance throughout the student journey</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-cyan-500 to-blue-600"></span>
                  Profile matching
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-cyan-500 to-blue-600"></span>
                  Scholarship recommendations
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-cyan-500 to-blue-600"></span>
                  Career path analysis
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-cyan-500 to-blue-600"></span>
                  Success prediction
                </div>
              </div>
            </Card>

            {/* Document Processing System */}
            <Card
              className={`p-6 rounded-xl border-2 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                hoveredSolution === 'document-automation' ? 'shadow-2xl border-blue-300 bg-blue-50/50' : 'border-gray-100'
              }`}
              onMouseEnter={() => setHoveredSolution('document-automation')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-4">
                <DocumentTextIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Document Processing System</h3>
              <p className="text-gray-600 mb-4">Automated document verification and processing system that speeds up application reviews and reduces manual workload</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-blue-500 to-indigo-600"></span>
                  Document validation
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-blue-500 to-indigo-600"></span>
                  Auto-categorization
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-blue-500 to-indigo-600"></span>
                  Missing document alerts
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-blue-500 to-indigo-600"></span>
                  Digital signature
                </div>
              </div>
            </Card>

            {/* Application Tracking Portal */}
            <Card
              className={`p-6 rounded-xl border-2 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                hoveredSolution === 'application-tracking' ? 'shadow-2xl border-indigo-300 bg-indigo-50/50' : 'border-gray-100'
              }`}
              onMouseEnter={() => setHoveredSolution('application-tracking')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-4">
                <ClipboardDocumentCheckIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Application Tracking Portal</h3>
              <p className="text-gray-600 mb-4">Comprehensive portal for students to track their application progress, upload documents, and communicate with consultants</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-indigo-500 to-purple-600"></span>
                  Real-time status updates
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-indigo-500 to-purple-600"></span>
                  Document upload
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-indigo-500 to-purple-600"></span>
                  Milestone tracking
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-3 bg-gradient-to-r from-indigo-500 to-purple-600"></span>
                  In-app messaging
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="py-24 bg-white relative overflow-hidden">
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 border-4 border-blue-100 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 border-4 border-indigo-100 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <span className="text-blue-700 font-semibold text-sm">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Enterprise Benefits for
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Study Abroad Consultancies
              </span>
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
                className={`p-8 rounded-2xl bg-white border-2 hover:shadow-2xl transition-all duration-500 transform ${
                  hoveredBenefit === index ? 'shadow-2xl border-indigo-200 scale-[1.02]' : 'border-gray-100 hover:-translate-y-1'
                }`}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg mx-auto md:mx-0 flex-shrink-0">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">{benefit.title}</h3>
                    <p className="text-gray-600 mb-5 text-lg text-center md:text-left leading-relaxed">{benefit.description}</p>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4">
                      <span className="text-base font-bold text-indigo-700 flex justify-center md:justify-start items-center">
                        <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-2"></span>
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
      <Section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white border border-indigo-200 rounded-full mb-6 shadow-sm">
              <span className="text-indigo-700 font-semibold text-sm">Our Coverage</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              We Support All Types of
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Study Programs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From undergraduate degrees to language courses, our solutions adapt to your specific service offerings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className="p-6 rounded-2xl border-2 border-gray-100 hover:border-indigo-200 hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2 bg-white"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* BENEFITS SUMMARY TABLE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Benefits Summary
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Problem
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Rocket Flow Solution
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Impact
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* Lead Management */}
                <tr className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">Lead Management</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Too many inquiries to handle manually</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Automated replies & tagging</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-green-600 leading-relaxed font-bold">Faster response, more leads</p>
                  </td>
                </tr>

                {/* Follow-Up */}
                <tr className="hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">Follow-Up</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Students don't reply after the first message</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Multi-channel sequence automation (Messenger, Email, SMS)</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-green-600 leading-relaxed font-bold">Re-engages cold leads</p>
                  </td>
                </tr>

                {/* Campaign Targeting */}
                <tr className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">Campaign Targeting</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Same message to all</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Smart segmentation for multi-channel broadcasts</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-green-600 leading-relaxed font-bold">Higher engagement & reach</p>
                  </td>
                </tr>

                {/* Data Handling */}
                <tr className="hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">Data Handling</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Scattered info across platforms</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Integrated forms & sheets with unified communication logs</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-green-600 leading-relaxed font-bold">Organized lead tracking</p>
                  </td>
                </tr>

                {/* Counselor Productivity */}
                <tr className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">Counselor Productivity</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Repetitive tasks and reminders</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">AI chat assistant & automated Email/SMS alerts</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-green-600 leading-relaxed font-bold">50% less manual work</p>
                  </td>
                </tr>

                {/* Conversion Rate */}
                <tr className="hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">Conversion Rate</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Lost leads in the pipeline</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Smart, multi-channel broadcasting & follow-ups</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-green-600 leading-relaxed font-bold">Up to 3x conversion growth</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

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
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-blue-100 to-transparent opacity-50 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-radial from-indigo-100 to-transparent opacity-30 rounded-full"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mr-5 shadow-md">
                    JD
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">John Davis</div>
                    <div className="text-gray-600">Director, Global Study Solutions</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="text-4xl text-blue-500 absolute -top-5 -left-2 opacity-40">"</div>
                  <p className="text-gray-700 italic text-lg relative z-10 mb-5 pl-4">
                    The automated email and chatbot system has completely transformed our response time. We're now able to engage with students 24/7, resulting in a 45% increase in successful applications.
                  </p>
                  <div className="text-4xl text-blue-500 absolute bottom-0 right-0 opacity-40">"</div>
                </div>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 fill-current text-blue-500" />
                  ))}
                </div>
              </div>
            </Card>
            
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-indigo-100 to-transparent opacity-50 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-radial from-purple-100 to-transparent opacity-30 rounded-full"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl mr-5 shadow-md">
                    AP
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">Anna Peterson</div>
                    <div className="text-gray-600">CEO, Study Abroad Connect</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="text-4xl text-indigo-500 absolute -top-5 -left-2 opacity-40">"</div>
                  <p className="text-gray-700 italic text-lg relative z-10 mb-5 pl-4">
                    The document processing system has cut our application processing time by 60%. We can now handle twice as many applications with the same team size, and with greater accuracy.
                  </p>
                  <div className="text-4xl text-indigo-500 absolute bottom-0 right-0 opacity-40">"</div>
                </div>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 fill-current text-indigo-500" />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
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
          <div className="text-center text-white">
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