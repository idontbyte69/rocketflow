'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container, ShinyText } from '.';
import {
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  DevicePhoneMobileIcon,
  CogIcon,
  ComputerDesktopIcon,
  StarIcon,
  BoltIcon,
  ChatBubbleOvalLeftIcon,
  ChartBarIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  BriefcaseIcon,
  LanguageIcon
} from '@heroicons/react/24/outline';

export default function EducationPage() {
  const [hoveredSolution, setHoveredSolution] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  // Function to render education solution icon
  const renderSolutionIcon = (solutionId) => {
    switch (solutionId) {
      case 'seo-services':
        return <AcademicCapIcon className="w-8 h-8" />;
      case 'social-media':
        return <ChatBubbleLeftRightIcon className="w-8 h-8" />;
      case 'content-marketing':
        return <BookOpenIcon className="w-8 h-8" />;
      case 'ppc-campaigns':
        return <DevicePhoneMobileIcon className="w-8 h-8" />;
      case 'email-marketing':
        return <CogIcon className="w-8 h-8" />;
      case 'website-optimization':
        return <ComputerDesktopIcon className="w-8 h-8" />;
      default:
        return <AcademicCapIcon className="w-8 h-8" />;
    }
  };

  const educationSolutions = [
    {
      id: 'seo-services',
      title: 'Education SEO Services',
      description: "Boost your institution's visibility with targeted SEO strategies to attract prospective students and increase enrollments",
      icon: AcademicCapIcon,
      color: 'from-blue-400 to-primary-500',
      features: ['Keyword optimization', 'Local SEO for campuses', 'Content marketing', 'Ranking improvement']
    },
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      description: "Engage with students and parents through strategic social media campaigns that highlight your institution's unique value",
      icon: ChatBubbleLeftRightIcon,
      color: 'from-primary-400 to-primary-600',
      features: ['Platform management', 'Content creation', 'Community building', 'Paid campaigns']
    },
    {
      id: 'content-marketing',
      title: 'Educational Content Marketing',
      description: 'Develop compelling content that positions your institution as a thought leader and attracts potential students',
      icon: BookOpenIcon,
      color: 'from-secondary-400 to-secondary-600',
      features: ['Blog management', 'Video marketing', 'Newsletters', 'Success stories']
    },
    {
      id: 'ppc-campaigns',
      title: 'PPC & Digital Advertising',
      description: 'Target prospective students and parents with precision using data-driven paid advertising campaigns',
      icon: DevicePhoneMobileIcon,
      color: 'from-primary-500 to-primary-700',
      features: ['Google Ads', 'Social media ads', 'Retargeting', 'Analytics tracking']
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing Automation',
      description: 'Nurture prospective students through personalized email sequences that guide them through the enrollment journey',
      icon: CogIcon,
      color: 'from-primary-dark to-gray-700',
      features: ['Drip campaigns', 'Segmentation', 'A/B testing', 'Conversion tracking']
    },
    {
      id: 'website-optimization',
      title: 'Website Design & Optimization',
      description: 'Create engaging, mobile-friendly websites that convert visitors into applicants with clear enrollment pathways',
      icon: ComputerDesktopIcon,
      color: 'from-secondary-500 to-secondary-700',
      features: ['UX optimization', 'Conversion focus', 'Mobile responsiveness', 'Landing pages']
    }
  ];

  const educationBenefits = [
    {
      title: 'Increased Enrollment',
      description: "Attract more qualified applicants through targeted digital marketing campaigns that showcase your institution's value",
      icon: StarIcon,
      metrics: '45% increase in applications'
    },
    {
      title: 'Enhanced Brand Recognition',
      description: "Build a strong digital presence that elevates your institution's reputation and recognition in the education sector",
      icon: BoltIcon,
      metrics: '70% boost in brand awareness'
    },
    {
      title: 'Improved Student Engagement',
      description: 'Connect with prospective and current students through multichannel marketing that resonates with their needs',
      icon: ChatBubbleOvalLeftIcon,
      metrics: '85% higher engagement rates'
    },
    {
      title: 'Data-Driven Marketing ROI',
      description: "Measure and optimize marketing efforts with advanced analytics to maximize your institution's marketing investment",
      icon: ChartBarIcon,
      metrics: '3x return on marketing spend'
    }
  ];

  const institutionTypes = [
    { name: 'Universities', icon: BuildingLibraryIcon, description: 'Comprehensive solutions for higher education institutions' },
    { name: 'Schools', icon: AcademicCapIcon, description: 'K-12 educational management and learning platforms' },
    { name: 'Colleges', icon: BuildingOfficeIcon, description: 'Specialized programs and vocational training systems' },
    { name: 'Online Academies', icon: GlobeAltIcon, description: 'Digital-first learning platforms and virtual classrooms' },
    { name: 'Training Centers', icon: BriefcaseIcon, description: 'Professional development and skill-building programs' },
    { name: 'Language Schools', icon: LanguageIcon, description: 'Interactive language learning and assessment tools' }
  ];

  const caseStudies = [
    {
      title: 'Metro University',
      challenge: 'Declining application rates and low brand visibility online',
      solution: 'Implemented comprehensive SEO and content marketing strategy',
      result: '78% increase in organic search traffic and 45% more applications',
      icon: BuildingLibraryIcon
    },
    {
      title: 'International School Chain',
      challenge: 'Poor social media presence and limited parent engagement',
      solution: 'Developed targeted social media campaigns and parent outreach',
      result: '85% increase in social engagement and 40% growth in inquiries',
      icon: AcademicCapIcon
    },
    {
      title: 'Online Learning Academy',
      challenge: 'High cost per acquisition and inefficient ad spend',
      solution: 'Optimized PPC campaigns with advanced targeting and analytics',
      result: '65% reduction in cost per lead and 120% increase in conversions',
      icon: ComputerDesktopIcon
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
            <div className="order-1 text-center">
              <div className="animate-fadeIn">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <ShinyText className="bg-gradient-to-r from-primary-dark via-primary to-secondary text-black">
                    Digital Marketing for Education
                  </ShinyText>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed mx-auto max-w-3xl">
                  Empower educational institutions with cutting-edge digital marketing strategies that boost enrollment, 
                  enhance brand recognition, and connect with prospective students in the digital age.
                </p>
              </div>
              
              {/* Key Stats - Enhanced with animations */}
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
                <div className="text-center p-5 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-primary-dark">45%</div>
                  <div className="text-sm text-gray-600">Enrollment Boost</div>
                </div>
                <div className="text-center p-5 bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-primary-dark">3x</div>
                  <div className="text-sm text-gray-600">Marketing ROI</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl">
                  Get Started Today
                </Button>
                <Button className="border border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl">
                  View Case Studies
                </Button>
              </div>
            </div>
            
            {/* Right Column - Video - Now appears after text on mobile */}
            <div className="order-2">
              <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,112,184,0.3)]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/MZnyjXSUX3Q"
                  title="Educational Technology Solutions"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video Caption */}
              <p className="text-center text-sm text-gray-500 mt-4">
                See how our solutions transform educational institutions
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
              Digital Marketing Impact for Education
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join the growing community of institutions that have transformed their enrollment numbers through strategic digital marketing
            </p>
          </div>
          
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-lg">Educational Institutions</div>
              <div className="text-gray-400 text-sm mt-1">Successful Marketing Campaigns</div>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  45%
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-lg">Average Increase</div>
              <div className="text-gray-400 text-sm mt-1">In Enrollment Applications</div>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  3x
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-lg">ROI Average</div>
              <div className="text-gray-400 text-sm mt-1">On Marketing Investment</div>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  70%
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-lg">Brand Awareness</div>
              <div className="text-gray-400 text-sm mt-1">Increase For Clients</div>
            </div>
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Google Partner</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Meta Business Partner</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Marketing Excellence Award</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Education Solutions Section */}
      <Section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center mb-16 relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 left-1/4 w-20 h-20 rounded-full bg-primary-50 filter blur-xl opacity-70"></div>
            <div className="absolute -top-6 right-1/3 w-12 h-12 rounded-full bg-secondary-50 filter blur-lg opacity-70"></div>
            
            <h2 className="relative text-4xl font-bold text-gray-900 mb-6 inline-block">
              <span className="bg-gradient-to-r from-primary to-secondary text-black">Strategic</span> Digital Marketing Services
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From SEO to social media marketing, we provide comprehensive digital marketing solutions 
              tailored specifically for educational institutions to increase enrollment and brand awareness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* Background decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-radial from-primary-50 to-transparent opacity-30 rounded-full"></div>
            {/* AI-Powered Student Portal */}
            <Card
              className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'student-portal' ? 'shadow-2xl border-blue-200 bg-blue-50/30' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('student-portal')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative flex justify-center">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-blue-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <AcademicCapIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">AI-Powered Student Portal</h3>
              <p className="text-gray-600 mb-6 text-lg text-center">Intelligent student management systems with automated enrollment, grade tracking, and personalized learning paths</p>
              <div className="space-y-3 flex flex-col w-full px-4">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-blue-700 transition-colors">Automated enrollment</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-blue-700 transition-colors">Grade management</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-blue-700 transition-colors">Learning analytics</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-blue-700 transition-colors">Parent communication</span>
                </div>
              </div>
            </Card>

            {/* Educational Chatbots */}
            <Card
              className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'virtual-assistant' ? 'shadow-2xl border-red-200 bg-red-50/30' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('virtual-assistant')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative flex justify-center">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-red-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <ChatBubbleLeftRightIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Educational Chatbots</h3>
              <p className="text-gray-600 mb-6 text-lg text-center">24/7 AI assistants to answer student queries, provide course information, and guide through admission processes</p>
              <div className="space-y-3 flex flex-col w-full px-4">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-red-700 transition-colors">Instant query resolution</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-red-700 transition-colors">Course guidance</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-red-700 transition-colors">Admission support</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-red-700 transition-colors">Multi-language support</span>
                </div>
              </div>
            </Card>

            {/* Learning Management System */}
            <Card
              className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'lms-platform' ? 'shadow-2xl border-yellow-200 bg-yellow-50/30' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('lms-platform')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative flex justify-center">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-yellow-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <BookOpenIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Learning Management System</h3>
              <p className="text-gray-600 mb-6 text-lg text-center">Comprehensive digital learning platforms with video streaming, assignment management, and progress tracking</p>
              <div className="space-y-3 flex flex-col w-full px-4">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-yellow-700 transition-colors">Video lectures</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-yellow-700 transition-colors">Assignment tracking</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-yellow-700 transition-colors">Quiz systems</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-yellow-700 transition-colors">Progress analytics</span>
                </div>
              </div>
            </Card>

            {/* Mobile Learning Apps */}
            <Card
              className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'mobile-learning' ? 'shadow-2xl border-green-200 bg-green-50/30' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('mobile-learning')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative flex justify-center">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-green-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <DevicePhoneMobileIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Mobile Learning Apps</h3>
              <p className="text-gray-600 mb-6 text-lg text-center">Engaging mobile applications for students to access courses, submit assignments, and connect with peers</p>
              <div className="space-y-3 flex flex-col w-full px-4">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-green-700 transition-colors">Offline learning</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-green-700 transition-colors">Interactive content</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-green-700 transition-colors">Peer collaboration</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-green-700 transition-colors">Push notifications</span>
                </div>
              </div>
            </Card>

            {/* Administrative Automation */}
            <Card
              className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'admin-automation' ? 'shadow-2xl border-purple-200 bg-purple-50/30' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('admin-automation')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative flex justify-center">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-purple-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <CogIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Administrative Automation</h3>
              <p className="text-gray-600 mb-6 text-lg text-center">Streamlined administrative processes including fee management, attendance tracking, and report generation</p>
              <div className="space-y-3 flex flex-col w-full px-4">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-purple-700 transition-colors">Fee management</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-purple-700 transition-colors">Attendance tracking</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-purple-700 transition-colors">Report generation</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-purple-700 transition-colors">Staff management</span>
                </div>
              </div>
            </Card>

            {/* Virtual Classroom Solutions */}
            <Card
              className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'virtual-classroom' ? 'shadow-2xl border-indigo-200 bg-indigo-50/30' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('virtual-classroom')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative flex justify-center">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-indigo-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <ComputerDesktopIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Virtual Classroom Solutions</h3>
              <p className="text-gray-600 mb-6 text-lg text-center">Interactive online learning environments with live streaming, screen sharing, and collaborative tools</p>
              <div className="space-y-3 flex flex-col w-full px-4">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-indigo-700 transition-colors">Live streaming</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-indigo-700 transition-colors">Screen sharing</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-indigo-700 transition-colors">Interactive whiteboards</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-indigo-700 transition-colors">Recording capabilities</span>
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
              Why Educational Institutions 
              <span className="bg-gradient-to-r from-primary to-secondary text-black"> Choose Our Marketing</span>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our digital marketing strategies deliver measurable improvements in enrollment, brand awareness, 
              and institutional growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationBenefits.map((benefit, index) => (
              <Card
                key={index}
                className={`p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 transform ${
                  hoveredBenefit === index ? 'shadow-2xl border-primary-100 scale-[1.03]' : 'hover:-translate-y-2'
                }`}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg mb-4">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 mb-5 text-lg">{benefit.description}</p>
                    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-4 shadow-inner mx-auto">
                      <span className="text-base font-bold text-primary-dark flex justify-center items-center">
                        <span className="w-3 h-3 bg-secondary rounded-full mr-2"></span>
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

      {/* Institution Types Section */}
      <Section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
              We Serve All Types of 
              <span className="bg-gradient-to-r from-primary to-secondary text-black"> Educational Institutions</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traditional universities to modern online academies, our marketing strategies are tailored to your specific audience and enrollment goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {institutionTypes.map((type, index) => (
              <Card
                key={index}
                className="p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 text-center hover:border-primary transform hover:-translate-y-2 bg-white"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center shadow-md">
                  <type.icon className="w-8 h-8 text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.name}</h3>
                <p className="text-gray-600">{type.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case Studies Section */}
      <Section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-radial from-secondary-100 to-transparent opacity-60 rounded-full"></div>
        <div className="absolute -left-10 top-10 w-40 h-40 bg-gradient-radial from-primary-100 to-transparent opacity-50 rounded-full"></div>
        
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
              Marketing Success Stories from 
              <span className="bg-gradient-to-r from-primary to-secondary text-black"> Educational Leaders</span>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped educational institutions transform their digital presence and boost enrollment through strategic marketing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                  <study.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">{study.title}</h3>
                <div className="space-y-5">
                  <div className="bg-red-50 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="font-bold text-red-700">Challenge</span>
                    </div>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="font-bold text-blue-700">Solution</span>
                    </div>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="font-bold text-green-700">Result</span>
                    </div>
                    <p className="text-gray-700">{study.result}</p>
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
              What Our Marketing 
              <span className="bg-gradient-to-r from-primary to-secondary text-black"> Clients Say</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from educational leaders who have transformed their enrollment and brand visibility with our marketing strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-primary-100 to-transparent opacity-50 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-radial from-secondary-100 to-transparent opacity-30 rounded-full"></div>
              
              <div className="relative">
                <div className="flex flex-col items-center mb-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-black font-bold text-xl shadow-md mb-3">
                    SM
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">Dr. Sarah Mitchell</div>
                    <div className="text-gray-600">Dean, Metro University</div>
                  </div>
                </div>
                <div className="relative text-center">
                  <div className="text-4xl text-primary-500 absolute -top-5 left-0 opacity-40">"</div>
                  <p className="text-gray-700 italic text-lg relative z-10 mb-5 px-6">
                    Their SEO and content marketing strategy transformed our online presence. Our organic search traffic increased by 78% and applications are up 45% compared to last year.
                  </p>
                  <div className="text-4xl text-primary-500 absolute bottom-0 right-0 opacity-40">"</div>
                </div>
                <div className="flex justify-center text-secondary mt-4">
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
                <div className="flex flex-col items-center mb-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-black font-bold text-xl shadow-md mb-3">
                    MP
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">Mark Peterson</div>
                    <div className="text-gray-600">Principal, International School</div>
                  </div>
                </div>
                <div className="relative text-center">
                  <div className="text-4xl text-secondary-500 absolute -top-5 left-0 opacity-40">"</div>
                  <p className="text-gray-700 italic text-lg relative z-10 mb-5 px-6">
                    Their social media strategy transformed our outreach efforts. We've seen an 85% increase in engagement and a 40% growth in enrollment inquiries from targeted campaigns.
                  </p>
                  <div className="text-4xl text-secondary-500 absolute bottom-0 right-0 opacity-40">"</div>
                </div>
                <div className="flex justify-center text-secondary mt-4">
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
          <div className="text-center text-Text">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fadeIn">
              Ready to Boost Your Institution's Enrollment?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of educational institutions that have already transformed their digital presence 
              and increased enrollment numbers with our strategic marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-primary-dark hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg">
                Get Marketing Analysis
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-primary-dark px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 text-lg">
                View Marketing Packages
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}