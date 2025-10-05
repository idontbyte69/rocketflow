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
      case 'student-portal':
        return <AcademicCapIcon className="w-8 h-8" />;
      case 'virtual-assistant':
        return <ChatBubbleLeftRightIcon className="w-8 h-8" />;
      case 'lms-platform':
        return <BookOpenIcon className="w-8 h-8" />;
      case 'mobile-learning':
        return <DevicePhoneMobileIcon className="w-8 h-8" />;
      case 'admin-automation':
        return <CogIcon className="w-8 h-8" />;
      case 'virtual-classroom':
        return <ComputerDesktopIcon className="w-8 h-8" />;
      default:
        return <AcademicCapIcon className="w-8 h-8" />;
    }
  };

  const educationSolutions = [
    {
      id: 'student-portal',
      title: 'AI-Powered Student Portal',
      description: 'Intelligent student management systems with automated enrollment, grade tracking, and personalized learning paths',
      icon: AcademicCapIcon,
      color: 'from-blue-400 to-primary-500',
      features: ['Automated enrollment', 'Grade management', 'Learning analytics', 'Parent communication']
    },
    {
      id: 'virtual-assistant',
      title: 'Educational Chatbots',
      description: '24/7 AI assistants to answer student queries, provide course information, and guide through admission processes',
      icon: ChatBubbleLeftRightIcon,
      color: 'from-primary-400 to-primary-600',
      features: ['Instant query resolution', 'Course guidance', 'Admission support', 'Multi-language support']
    },
    {
      id: 'lms-platform',
      title: 'Learning Management System',
      description: 'Comprehensive digital learning platforms with video streaming, assignment management, and progress tracking',
      icon: BookOpenIcon,
      color: 'from-secondary-400 to-secondary-600',
      features: ['Video lectures', 'Assignment tracking', 'Quiz systems', 'Progress analytics']
    },
    {
      id: 'mobile-learning',
      title: 'Mobile Learning Apps',
      description: 'Engaging mobile applications for students to access courses, submit assignments, and connect with peers',
      icon: DevicePhoneMobileIcon,
      color: 'from-primary-500 to-primary-700',
      features: ['Offline learning', 'Interactive content', 'Peer collaboration', 'Push notifications']
    },
    {
      id: 'admin-automation',
      title: 'Administrative Automation',
      description: 'Streamlined administrative processes including fee management, attendance tracking, and report generation',
      icon: CogIcon,
      color: 'from-primary-dark to-gray-700',
      features: ['Fee management', 'Attendance tracking', 'Report generation', 'Staff management']
    },
    {
      id: 'virtual-classroom',
      title: 'Virtual Classroom Solutions',
      description: 'Interactive online learning environments with live streaming, screen sharing, and collaborative tools',
      icon: ComputerDesktopIcon,
      color: 'from-secondary-500 to-secondary-700',
      features: ['Live streaming', 'Screen sharing', 'Interactive whiteboards', 'Recording capabilities']
    }
  ];

  const educationBenefits = [
    {
      title: 'Enhanced Student Experience',
      description: 'Provide 24/7 support and personalized learning experiences that adapt to individual student needs',
      icon: StarIcon,
      metrics: '95% student satisfaction increase'
    },
    {
      title: 'Operational Efficiency',
      description: 'Automate administrative tasks, reduce manual workload, and streamline institutional processes',
      icon: BoltIcon,
      metrics: '60% reduction in admin tasks'
    },
    {
      title: 'Improved Communication',
      description: 'Bridge the gap between students, parents, and faculty with instant communication channels',
      icon: ChatBubbleOvalLeftIcon,
      metrics: '80% faster response times'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Gain valuable insights into student performance, learning patterns, and institutional effectiveness',
      icon: ChartBarIcon,
      metrics: '40% improvement in outcomes'
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
      challenge: 'Manual enrollment processes causing delays and errors',
      solution: 'Implemented AI-powered student portal with automated enrollment',
      result: '70% reduction in enrollment time and 95% accuracy improvement',
      icon: BuildingLibraryIcon
    },
    {
      title: 'International School Chain',
      challenge: 'Poor communication between parents, students, and teachers',
      solution: 'Developed mobile app with real-time updates and messaging',
      result: '85% increase in parent engagement and satisfaction',
      icon: AcademicCapIcon
    },
    {
      title: 'Online Learning Platform',
      challenge: 'Low student engagement in virtual classes',
      solution: 'Created interactive virtual classroom with gamification',
      result: '120% increase in completion rates and student participation',
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
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <ShinyText className="bg-gradient-to-r from-primary-dark via-primary to-secondary bg-clip-text text-black">
                  Transforming Education with Technology
                </ShinyText>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Empower educational institutions with cutting-edge digital solutions that enhance learning experiences, 
                streamline operations, and drive student success in the digital age.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-dark">500+</div>
                  <div className="text-sm text-gray-600">Institutions Served</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-secondary-50 to-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-dark">95%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </Button>
                <Button className="border border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  View Case Studies
                </Button>
              </div>
            </div>
            
            {/* Right Column - Video */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-2xl">
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
              Trusted by Educational Leaders Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join the growing community of institutions that have transformed their educational experience
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
              <div className="text-gray-400 text-sm mt-1">Across 50+ Countries</div>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  1M+
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-lg">Students Impacted</div>
              <div className="text-gray-400 text-sm mt-1">And Growing Daily</div>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  95%
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

      {/* Education Solutions Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Educational Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From student management to virtual classrooms, we provide end-to-end technology solutions 
              tailored specifically for educational institutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-Powered Student Portal */}
            <Card
              className={`p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                hoveredSolution === 'student-portal' ? 'shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('student-portal')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white mb-4">
                <AcademicCapIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Student Portal</h3>
              <p className="text-gray-600 mb-4">Intelligent student management systems with automated enrollment, grade tracking, and personalized learning paths</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Automated enrollment
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Grade management
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Learning analytics
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Parent communication
                </div>
              </div>
            </Card>

            {/* Educational Chatbots */}
            <Card
              className={`p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                hoveredSolution === 'virtual-assistant' ? 'shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('virtual-assistant')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white mb-4">
                <ChatBubbleLeftRightIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Educational Chatbots</h3>
              <p className="text-gray-600 mb-4">24/7 AI assistants to answer student queries, provide course information, and guide through admission processes</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Instant query resolution
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Course guidance
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Admission support
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Multi-language support
                </div>
              </div>
            </Card>

            {/* Learning Management System */}
            <Card
              className={`p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                hoveredSolution === 'lms-platform' ? 'shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('lms-platform')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center text-white mb-4">
                <BookOpenIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Learning Management System</h3>
              <p className="text-gray-600 mb-4">Comprehensive digital learning platforms with video streaming, assignment management, and progress tracking</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Video lectures
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Assignment tracking
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Quiz systems
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Progress analytics
                </div>
              </div>
            </Card>

            {/* Mobile Learning Apps */}
            <Card
              className={`p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                hoveredSolution === 'mobile-learning' ? 'shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('mobile-learning')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white mb-4">
                <DevicePhoneMobileIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Learning Apps</h3>
              <p className="text-gray-600 mb-4">Engaging mobile applications for students to access courses, submit assignments, and connect with peers</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Offline learning
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Interactive content
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Peer collaboration
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Push notifications
                </div>
              </div>
            </Card>

            {/* Administrative Automation */}
            <Card
              className={`p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                hoveredSolution === 'admin-automation' ? 'shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('admin-automation')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white mb-4">
                <CogIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Administrative Automation</h3>
              <p className="text-gray-600 mb-4">Streamlined administrative processes including fee management, attendance tracking, and report generation</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Fee management
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Attendance tracking
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Report generation
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Staff management
                </div>
              </div>
            </Card>

            {/* Virtual Classroom Solutions */}
            <Card
              className={`p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                hoveredSolution === 'virtual-classroom' ? 'shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredSolution('virtual-classroom')}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center text-white mb-4">
                <ComputerDesktopIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Virtual Classroom Solutions</h3>
              <p className="text-gray-600 mb-4">Interactive online learning environments with live streaming, screen sharing, and collaborative tools</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Live streaming
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Screen sharing
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Interactive whiteboards
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Recording capabilities
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Educational Institutions Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions deliver measurable improvements in student outcomes, operational efficiency, 
              and institutional growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationBenefits.map((benefit, index) => (
              <Card
                key={index}
                className={`p-8 rounded-xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 ${
                  hoveredBenefit === index ? 'shadow-2xl transform scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 mb-4">{benefit.description}</p>
                    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-3">
                      <span className="text-sm font-semibold text-primary-dark">{benefit.metrics}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Institution Types Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We Serve All Types of Educational Institutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traditional universities to modern online academies, our solutions adapt to your unique needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutionTypes.map((type, index) => (
              <Card
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 text-center hover:border-primary"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-primary-100 to-secondary-100 flex items-center justify-center">
                  <type.icon className="w-6 h-6 text-primary-dark" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case Studies Section */}
      <Section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Success Stories from Educational Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped educational institutions transform their operations and improve student outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <study.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-red-600">Challenge: </span>
                    <span className="text-gray-600">{study.challenge}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-600">Solution: </span>
                    <span className="text-gray-600">{study.solution}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-green-600">Result: </span>
                    <span className="text-gray-600">{study.result}</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from educational leaders who have transformed their institutions with our solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold mr-4">
                  DR
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Dr. Sarah Mitchell</div>
                  <div className="text-sm text-gray-600">Dean, Metro University</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The AI-powered student portal has revolutionized our enrollment process. What used to take weeks now happens in days, with 95% accuracy improvement."
              </p>
              <div className="flex text-secondary mt-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </Card>
            
            <Card className="p-8 rounded-xl bg-gradient-to-br from-secondary-50 to-primary-50 border border-secondary-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center text-white font-bold mr-4">
                  MP
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Mark Peterson</div>
                  <div className="text-sm text-gray-600">Principal, International School</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Parent engagement has increased by 85% since implementing the mobile communication platform. It's been a game-changer for our school community."
              </p>
              <div className="flex text-secondary mt-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-r from-primary-dark to-primary">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Educational Institution?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join hundreds of educational institutions that have already transformed their operations 
              and enhanced student experiences with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule a Demo
              </Button>
              <Button className="border border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300">
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