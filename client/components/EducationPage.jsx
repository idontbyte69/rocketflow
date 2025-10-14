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
      title: 'Education-Focused SEO',
      description: "Dominate search results for education-related keywords with specialized SEO strategies designed for academic institutions",
      icon: AcademicCapIcon,
      color: 'from-blue-400 to-primary-500',
      features: ['Program-specific keywords', 'Local campus visibility', 'Academic reputation building', 'Competitor analysis']
    },
    {
      id: 'social-media',
      title: 'Student Recruitment Campaigns',
      description: "Connect with prospective students where they spend time online with targeted campaigns that showcase your institution's unique culture",
      icon: ChatBubbleLeftRightIcon,
      color: 'from-primary-400 to-primary-600',
      features: ['Platform-specific strategies', 'Influencer partnerships', 'Student testimonials', 'Engagement analytics']
    },
    {
      id: 'content-marketing',
      title: 'Thought Leadership Content',
      description: 'Establish your institution as an authority with compelling content that addresses education trends and student concerns',
      icon: BookOpenIcon,
      color: 'from-secondary-400 to-secondary-600',
      features: ['Faculty expertise spotlights', 'Student success stories', 'Research highlights', 'Industry partnerships']
    },
    {
      id: 'ppc-campaigns',
      title: 'Enrollment-Focused Advertising',
      description: 'Drive applications with precisely targeted advertising that reaches potential students at key decision-making moments',
      icon: DevicePhoneMobileIcon,
      color: 'from-primary-500 to-primary-700',
      features: ['Program-specific campaigns', 'Application deadline pushes', 'Scholarship promotions', 'Virtual tour signups']
    },
    {
      id: 'email-marketing',
      title: 'Student Journey Nurturing',
      description: 'Guide prospects from interest to enrollment with sophisticated email sequences tailored to each stage of the decision process',
      icon: CogIcon,
      color: 'from-primary-dark to-gray-700',
      features: ['Prospect segmentation', 'Application reminders', 'Department-specific content', 'Event invitations']
    },
    {
      id: 'website-optimization',
      title: 'Conversion-Optimized Web Design',
      description: "Transform your institution's website into an enrollment-generating machine with strategic design and user experience",
      icon: ComputerDesktopIcon,
      color: 'from-secondary-500 to-secondary-700',
      features: ['Program finder tools', 'Virtual tour integration', 'Application streamlining', 'Mobile-first design']
    }
  ];

  const educationBenefits = [
    {
      title: 'Higher Quality Applications',
      description: "Attract students who are the right fit for your programs through precisely targeted campaigns and messaging",
      icon: StarIcon,
      metrics: '52% increase in qualified leads'
    },
    {
      title: 'Competitive Differentiation',
      description: "Stand out in a crowded educational marketplace with distinctive positioning and compelling value propositions",
      icon: BoltIcon,
      metrics: '83% improved brand perception'
    },
    {
      title: 'Lower Cost Per Enrollment',
      description: 'Optimize your recruitment funnel with data-driven strategies that reduce acquisition costs while improving quality',
      icon: ChatBubbleOvalLeftIcon,
      metrics: '37% reduction in cost per student'
    },
    {
      title: 'Measurable Marketing Impact',
      description: "Track every stage of the student journey from first click to enrollment with comprehensive attribution modeling",
      icon: ChartBarIcon,
      metrics: '4.2x verified marketing ROI'
    }
  ];

  const institutionTypes = [
    { name: 'Universities', icon: BuildingLibraryIcon, description: 'Research-driven marketing highlighting academic excellence and outcomes' },
    { name: 'Schools', icon: AcademicCapIcon, description: 'Parent-focused campaigns emphasizing student success and facilities' },
    { name: 'Colleges', icon: BuildingOfficeIcon, description: 'Program-specific marketing highlighting career outcomes and ROI' },
    { name: 'Online Academies', icon: GlobeAltIcon, description: 'Conversion-optimized digital strategies for virtual learning programs' },
    { name: 'Training Centers', icon: BriefcaseIcon, description: 'Industry-aligned campaigns focused on skills development and placement' },
    { name: 'Language Schools', icon: LanguageIcon, description: 'Global targeting strategies with multilingual content and cultural appeal' }
  ];

  const caseStudies = [
    {
      title: 'Westside University',
      challenge: 'Graduate program applications declining despite strong academic reputation',
      solution: 'Program-specific SEO and targeted thought leadership content campaign',
      result: '94% increase in qualified application starts and 67% rise in enrollment yield',
      icon: BuildingLibraryIcon
    },
    {
      title: 'Global Education Network',
      challenge: 'Low international student recruitment despite extensive program offerings',
      solution: 'Geo-targeted social campaigns with multilingual content and cultural adaptation',
      result: '112% increase in international applications and 79% improvement in enrollment diversity',
      icon: AcademicCapIcon
    },
    {
      title: 'Technical Career Institute',
      challenge: 'Strong competition from larger institutions despite excellent job placement rates',
      solution: 'Data-driven remarketing campaign highlighting employment outcomes and ROI',
      result: '73% reduction in cost per enrollment and 156% increase in high-value program applications',
      icon: ComputerDesktopIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-24 pb-16 bg-gradient-to-br from-coral-50 via-orange-50 to-red-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content - Order fixed for mobile */}
            <div className="order-1 text-center">
              <div className="animate-fadeIn">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <ShinyText className="bg-gradient-to-r from-primary-dark via-primary to-secondary text-black">
                    Strategic Education Marketing
                  </ShinyText>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed mx-auto max-w-3xl">
                  Transform your institution's digital presence with data-driven marketing strategies designed to increase 
                  enrollments, elevate your brand, and create meaningful connections with prospective students.
                </p>
              </div>
              
              {/* Key Stats - Enhanced with animations */}
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
                <div className="text-center p-5 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-primary-dark">58%</div>
                  <div className="text-sm text-gray-600">Application Growth</div>
                </div>
                <div className="text-center p-5 bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-primary-dark">4.2x</div>
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
              Measurable Results That Matter
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our data-driven education marketing strategies deliver quantifiable outcomes for institutions of all sizes
            </p>
          </div>
          
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  650+
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-lg">Education Clients</div>
              <div className="text-gray-400 text-sm mt-1">Across 5 Continents</div>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  58%
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-lg">Application Growth</div>
              <div className="text-gray-400 text-sm mt-1">Year-Over-Year Average</div>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  4.2x
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-lg">Marketing ROI</div>
              <div className="text-gray-400 text-sm mt-1">Verified Returns</div>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  42%
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-lg">Lower Cost</div>
              <div className="text-gray-400 text-sm mt-1">Per Qualified Applicant</div>
            </div>
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Google Premier Partner</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Meta Certified Agency</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Education Marketing Awards</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">HubSpot Diamond Partner</span>
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
              <span className="bg-gradient-to-r from-primary to-secondary text-black">Results-Driven</span> Marketing Solutions
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our specialized marketing strategies help educational institutions stand out in a competitive landscape, 
              with a measurable focus on enrollment growth, student engagement, and institutional reputation.
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
                    <benefit.icon className="w-8 h-8 text-black" />
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
              Custom Marketing For Each 
              <span className="bg-gradient-to-r from-primary to-secondary text-black"> Education Sector</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each educational sector has unique audiences, challenges, and opportunities. Our marketing strategies are precisely tailored to your institution's specific context and goals.
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
      {/* Provide More Section */}
      <ProvideMoreSection />
      {/* Complete Solution Overview Section */}
      <Section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
              Marketing Success Stories from 
              <span className="bg-gradient-to-r from-primary to-secondary text-black"> Educational Leaders</span>
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped educational institutions transform their digital prese nce and boost enrollment through strategic marketing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                  <study.icon className="w-10 h-10 text-black" />
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
                    The department-specific SEO campaigns were transformative. Our MBA program saw a 92% increase in qualified applicants, while our specialized engineering programs achieved an 83% boost in conversion rates from site visits to applications.
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
                    The multilingual student journey campaigns completely revitalized our international recruitment. We've reduced cost per enrollment by 42% while increasing international student diversity by 76% across our five campuses.
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
              Transform Your Enrollment Pipeline
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Get a customized marketing strategy that focuses on your institution's unique strengths and addresses 
              your specific enrollment challenges with proven, data-backed solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-primary-dark hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg">
                Request Enrollment Analysis
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-primary-dark px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 text-lg">
                Explore Marketing Solutions
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}