'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container, ShinyText, ProvideMoreSection } from '.';
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
  LanguageIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  SparklesIcon,
  UserGroupIcon
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
                    Rocket Flow for IELTS Coaching Centers
                  </ShinyText>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed mx-auto max-w-3xl">
                  Revolutionize your IELTS online coaching center with intelligent automation for lead generation, student management, 
                  and operational efficiency. Act as a 24/7 virtual admissions officer and administrator.
                </p>
              </div>
              
              {/* Key Stats - Enhanced with animations */}
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
                <div className="text-center p-5 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-primary-dark">80%</div>
                  <div className="text-sm text-gray-600">FAQs Automated</div>
                </div>
                <div className="text-center p-5 bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-primary-dark">24/7</div>
                  <div className="text-sm text-gray-600">Lead Capture</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl">
                  Start Free Trial
                </Button>
                <Button className="border border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl">
                  Watch Demo
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
              Transform Your IELTS Center Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automate the entire student lifecycle from first inquiry to final enrollment
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  80%
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-lg">FAQs Handled</div>
              <div className="text-gray-400 text-sm mt-1">Automatically by AI</div>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-lg">Lead Capture</div>
              <div className="text-gray-400 text-sm mt-1">Never Miss an Inquiry</div>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  92%
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-lg">Attendance Boost</div>
              <div className="text-gray-400 text-sm mt-1">With Automated Reminders</div>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  3x
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-lg">Higher Conversion</div>
              <div className="text-gray-400 text-sm mt-1">Lead to Enrollment</div>
            </div>
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Multi-Channel Automation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Smart Segmentation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Unified Communication Hub</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">AI-Powered Counselor</span>
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
              <span className="bg-gradient-to-r from-primary to-secondary text-black">9 Powerful Features</span> for IELTS Centers
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Automate every aspect of your student journey from first contact to final enrollment and beyond
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* Background decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-radial from-primary-50 to-transparent opacity-30 rounded-full"></div>
            
            {/* 1. Instant Lead Capture */}
            <Card
              className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'lead-capture' ? 'shadow-2xl border-blue-200 bg-blue-50/30' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('lead-capture')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative flex justify-center">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-blue-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <BoltIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Instant Lead Capture & First Response</h3>
              <p className="text-gray-600 mb-6 text-lg text-center">Auto-reply to social media comments and send course brochures instantly</p>
              <div className="space-y-3 flex flex-col w-full px-4">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-blue-700 transition-colors">Auto-reply to comments</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-blue-700 transition-colors">Deliver brochures automatically</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-blue-700 transition-colors">24/7 lead capture</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-blue-700 transition-colors">Free demo class links</span>
                </div>
              </div>
            </Card>

            {/* 2. Smart Student Segmentation */}
            <Card
              className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'segmentation' ? 'shadow-2xl border-red-200 bg-red-50/30' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('segmentation')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative flex justify-center">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-red-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <ChartBarIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Smart Student Segmentation</h3>
              <p className="text-gray-600 mb-6 text-lg text-center">Automatically tag students based on goals, weaknesses, and urgency</p>
              <div className="space-y-3 flex flex-col w-full px-4">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-red-700 transition-colors">Target score tracking</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-red-700 transition-colors">Module weakness tags</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-red-700 transition-colors">Urgency classification</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-red-700 transition-colors">Status pipeline view</span>
                </div>
              </div>
            </Card>

            {/* 3. Automated Nurturing */}
            <Card
              className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'nurturing' ? 'shadow-2xl border-yellow-200 bg-yellow-50/30' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('nurturing')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative flex justify-center">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-yellow-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <ChatBubbleOvalLeftIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Automated Nurturing & Follow-Up</h3>
              <p className="text-gray-600 mb-6 text-lg text-center">Multi-channel sequences keep prospects engaged until enrollment</p>
              <div className="space-y-3 flex flex-col w-full px-4">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-yellow-700 transition-colors">Email sequences</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-yellow-700 transition-colors">Messenger follow-ups</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-yellow-700 transition-colors">SMS reminders</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-yellow-700 transition-colors">Testimonial videos</span>
                </div>
              </div>
            </Card>

            {/* 4. Seamless Registration */}
            <Card
              className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'registration' ? 'shadow-2xl border-green-200 bg-green-50/30' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('registration')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative flex justify-center">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-green-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <AcademicCapIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Seamless Registration & Onboarding</h3>
              <p className="text-gray-600 mb-6 text-lg text-center">Automate the entire enrollment process from form to confirmation</p>
              <div className="space-y-3 flex flex-col w-full px-4">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-green-700 transition-colors">CRM integration</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-green-700 transition-colors">Team notifications</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-green-700 transition-colors">Auto confirmation emails</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-green-700 transition-colors">Payment details delivery</span>
                </div>
              </div>
            </Card>

            {/* 5. Class & Test Reminders */}
            <Card
              className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'reminders' ? 'shadow-2xl border-purple-200 bg-purple-50/30' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('reminders')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative flex justify-center">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-purple-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <DevicePhoneMobileIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Automated Class & Test Reminders</h3>
              <p className="text-gray-600 mb-6 text-lg text-center">Reduce absenteeism with timely automated reminders</p>
              <div className="space-y-3 flex flex-col w-full px-4">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-purple-700 transition-colors">Class SMS reminders</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-purple-700 transition-colors">Mock test notifications</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-purple-700 transition-colors">Payment reminders</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-purple-700 transition-colors">Zoom link delivery</span>
                </div>
              </div>
            </Card>

            {/* 6. Targeted Batch Promotion */}
            <Card
              className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'promotion' ? 'shadow-2xl border-indigo-200 bg-indigo-50/30' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('promotion')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative flex justify-center">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-indigo-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <BookOpenIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Targeted Batch & Course Promotion</h3>
              <p className="text-gray-600 mb-6 text-lg text-center">Run specific campaigns for different student segments</p>
              <div className="space-y-3 flex flex-col w-full px-4">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-indigo-700 transition-colors">Segment-based campaigns</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-indigo-700 transition-colors">Workshop promotions</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-indigo-700 transition-colors">Last minute prep offers</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-indigo-700 transition-colors">Upsell opportunities</span>
                </div>
              </div>
            </Card>

            {/* 7. AI Admissions Counselor */}
            <Card
              className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'ai-counselor' ? 'shadow-2xl border-pink-200 bg-pink-50/30' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('ai-counselor')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative flex justify-center">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-pink-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <ChatBubbleLeftRightIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">24/7 AI-Powered Admissions Counselor</h3>
              <p className="text-gray-600 mb-6 text-lg text-center">Handle common inquiries automatically, qualify leads intelligently</p>
              <div className="space-y-3 flex flex-col w-full px-4">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-pink-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-pink-700 transition-colors">Course fee queries</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-pink-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-pink-700 transition-colors">Duration & timings</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-pink-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-pink-700 transition-colors">Study materials info</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-pink-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-pink-700 transition-colors">Lead qualification</span>
                </div>
              </div>
            </Card>

            {/* 8. Performance Analytics */}
            <Card
              className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'analytics' ? 'shadow-2xl border-orange-200 bg-orange-50/30' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('analytics')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative flex justify-center">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-orange-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <ChartBarIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Performance Analytics</h3>
              <p className="text-gray-600 mb-6 text-lg text-center">Track and optimize every step of your admissions funnel</p>
              <div className="space-y-3 flex flex-col w-full px-4">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-orange-700 transition-colors">Campaign tracking</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-orange-700 transition-colors">Conversion rates</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-orange-700 transition-colors">Message effectiveness</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-orange-700 transition-colors">ROI optimization</span>
                </div>
              </div>
            </Card>

            {/* 9. Unified Communication Hub */}
            <Card
              className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                hoveredSolution === 'communication-hub' ? 'shadow-2xl border-teal-200 bg-teal-50/30' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('communication-hub')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="relative flex justify-center">
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-teal-100 rounded-full opacity-30 filter blur-xl"></div>
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                  <CogIcon className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Unified Student Communication Hub</h3>
              <p className="text-gray-600 mb-6 text-lg text-center">Manage all conversations in one dashboard with full context</p>
              <div className="space-y-3 flex flex-col w-full px-4">
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-teal-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-teal-700 transition-colors">Single dashboard</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-teal-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-teal-700 transition-colors">Full history view</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-teal-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-teal-700 transition-colors">No lost messages</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 group">
                  <span className="w-3 h-3 bg-teal-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  <span className="group-hover:text-teal-700 transition-colors">Team coordination</span>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
      {/* Provide More Section */}
      <ProvideMoreSection />
      {/* Complete Solution Overview Section */}
      <Section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <ShinyText className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Complete Solution Overview
            </ShinyText>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Transform Every Challenge into <span className="text-primary-500">Growth Opportunity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              See how Rocket Flow solves the biggest challenges facing IELTS coaching centers in today's competitive market
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-xl">
            <table className="w-full bg-white">
              <thead className="bg-red-500 from-primary-600 to-primary-500">
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
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                        <ChatBubbleLeftRightIcon className="w-5 h-5 text-primary-600" />
                      </div>
                      <span className="text-base font-semibold text-gray-900 group-hover:text-primary-600">Lead Management</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">High volume of repetitive inquiries</td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">AI Chat Assistant & Automated First Response</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">
                      <CheckCircleIcon className="w-4 h-4 mr-1" />
                      80% of FAQs handled automatically
                    </span>
                  </td>
                </tr>
                <tr className="transform transition-all duration-300 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <UserGroupIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-base font-semibold text-gray-900 group-hover:text-blue-600">Conversion Rate</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Leads go cold after the first inquiry</td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Multi-channel Nurturing Sequences (Email, SMS)</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">
                      <ChartBarIcon className="w-4 h-4 mr-1" />
                      Higher lead-to-enrollment ratio
                    </span>
                  </td>
                </tr>
                <tr className="transform transition-all duration-300 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <CogIcon className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-base font-semibold text-gray-900 group-hover:text-purple-600">Admin Overload</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Manually sending class/test reminders</td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Automated SMS & Email Reminder System</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">
                      <CheckCircleIcon className="w-4 h-4 mr-1" />
                      Increased attendance, less admin work
                    </span>
                  </td>
                </tr>
                <tr className="transform transition-all duration-300 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <ChartBarIcon className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-base font-semibold text-gray-900 group-hover:text-green-600">Sales & Marketing</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Sending generic offers to everyone</td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Smart Tagging & Segmented Campaigns</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">
                      <RocketLaunchIcon className="w-4 h-4 mr-1" />
                      Higher campaign ROI & upsells
                    </span>
                  </td>
                </tr>
                <tr className="transform transition-all duration-300 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <BookOpenIcon className="w-5 h-5 text-orange-600" />
                      </div>
                      <span className="text-base font-semibold text-gray-900 group-hover:text-orange-600">Data Management</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Manual data entry for new students</td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Automated Form Integration to CRM/Sheets</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">
                      <CheckCircleIcon className="w-4 h-4 mr-1" />
                      Error-free, organized student data
                    </span>
                  </td>
                </tr>
                <tr className="transform transition-all duration-300 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                        <SparklesIcon className="w-5 h-5 text-pink-600" />
                      </div>
                      <span className="text-base font-semibold text-gray-900 group-hover:text-pink-600">Student Experience</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Slow response times & scattered info</td>
                  <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">Unified Communication Hub & Instant Info Delivery</td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">
                      <StarIcon className="w-4 h-4 mr-1" />
                      Professional and seamless student journey
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-16">
            <div className="bg-gradient-to-r from-primary-50 to-white rounded-2xl p-8 border border-primary-100">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Revolutionize Your IELTS Coaching Center</h3>
              <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                From lead management to student experience, Rocket Flow automates your entire coaching workflow,
                letting you focus on what matters most - helping students achieve their dream IELTS scores.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 justify-center">
                  <SparklesIcon className="w-6 h-6 text-primary-600" />
                  <span className="font-semibold text-gray-800">Save 20+ hours/week</span>
                </div>
                <div className="flex items-center space-x-3 justify-center">
                  <ChartBarIcon className="w-6 h-6 text-primary-600" />
                  <span className="font-semibold text-gray-800">Increase enrollments by 40%</span>
                </div>
                <div className="flex items-center space-x-3 justify-center">
                  <RocketLaunchIcon className="w-6 h-6 text-primary-600" />
                  <span className="font-semibold text-gray-800">Scale your coaching center</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
              What IELTS Center 
              <span className="bg-gradient-to-r from-primary to-secondary text-black"> Owners Say</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from coaching center owners who transformed their operations with Rocket Flow
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
                    PR
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">Priya Sharma</div>
                    <div className="text-gray-600">Director, IELTS Excellence Academy</div>
                  </div>
                </div>
                <div className="relative text-center">
                  <div className="text-4xl text-primary-500 absolute -top-5 left-0 opacity-40">"</div>
                  <p className="text-gray-700 italic text-lg relative z-10 mb-5 px-6">
                    Rocket Flow completely automated our student inquiries. We now capture every lead 24/7, and our enrollment rate increased by 67%. The AI chatbot handles 80% of common questions, freeing up our counselors to focus on serious prospects.
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
                    AK
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">Arun Kumar</div>
                    <div className="text-gray-600">Founder, IELTS Pro Institute</div>
                  </div>
                </div>
                <div className="relative text-center">
                  <div className="text-4xl text-secondary-500 absolute -top-5 left-0 opacity-40">"</div>
                  <p className="text-gray-700 italic text-lg relative z-10 mb-5 px-6">
                    The automated reminder system is a game-changer! Our class attendance jumped from 65% to 92%. Students get timely SMS reminders for classes and mock tests. Plus, the segmented campaigns help us upsell advanced workshops to the right students.
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
              Ready to Transform Your IELTS Coaching Center?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of coaching centers that have automated their operations, increased enrollments, 
              and provided exceptional student experiences with Rocket Flow.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-primary-dark hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg">
                Start Free 14-Day Trial
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-primary-dark px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 text-lg">
                Schedule a Demo
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-75">No credit card required • Setup in 5 minutes • Cancel anytime</p>
          </div>
        </Container>
      </Section>


      <Footer />
    </div>
  );
}