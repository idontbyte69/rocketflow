'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container } from '.';
import Link from 'next/link';
import {
  ChatBubbleLeftRightIcon,
  BoltIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CameraIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  ShoppingBagIcon,
  PaperAirplaneIcon,
  BuildingOfficeIcon,
  TicketIcon,
  SparklesIcon,
  ShoppingCartIcon,
  ComputerDesktopIcon,
  PlayIcon,
  GlobeAsiaAustraliaIcon,
  VideoCameraIcon,
  QrCodeIcon,
  CalendarIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { 
  FaFacebook, 
  FaFacebookMessenger, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin, 
  FaReddit, 
  FaMedium, 
  FaWordpress, 
  FaBlogger, 
  FaGoogle 
} from 'react-icons/fa';

export default function LandingPage() {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredSector, setHoveredSector] = useState(null);
  const [activeChannel, setActiveChannel] = useState('facebook');
  const [activeDashboard, setActiveDashboard] = useState(0);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useState(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // 640px is sm breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate dashboards
  useState(() => {
    const interval = setInterval(() => {
      setActiveDashboard((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const dashboards = [
    {
      id: 0,
      title: "Sales Analytics",
      stats: [
        { label: "Total Revenue", value: "$48,857", color: "from-blue-500 to-blue-600" },
        { label: "Orders Today", value: "25,852", color: "from-green-500 to-green-600" },
        { label: "Conversion", value: "87%", color: "from-purple-500 to-purple-600" }
      ],
      chart: [60, 80, 45, 90, 70, 100]
    },
    {
      id: 1,
      title: "Engagement Metrics",
      stats: [
        { label: "Total Reach", value: "125K", color: "from-pink-500 to-pink-600" },
        { label: "Engagement", value: "+45%", color: "from-orange-500 to-orange-600" },
        { label: "Click Rate", value: "12.5%", color: "from-cyan-500 to-cyan-600" }
      ],
      chart: [70, 55, 85, 65, 90, 75]
    },
    {
      id: 2,
      title: "Customer Activity",
      stats: [
        { label: "Active Users", value: "3,138", color: "from-indigo-500 to-indigo-600" },
        { label: "New Users", value: "635+", color: "from-teal-500 to-teal-600" },
        { label: "Retention", value: "99.9%", color: "from-emerald-500 to-emerald-600" }
      ],
      chart: [50, 75, 60, 85, 55, 95]
    }
  ];

  const channels = {
    facebook: {
      id: 'facebook',
      name: 'Facebook',
      icon: '📘',
      title: 'Automate Comment, Like & Posting',
      description: 'Managing Facebook for business is time consuming and it needs dedication to gain and maintain customers. Rocket Flow was born due to these main reasons.',
      features: [
        'Automated comment on Facebook Pages & Groups',
        'Scheduled Facebook posting with text, links, images & video',
        'Instantly reply to page\'s comments',
        'Automated like to comments',
        'Engage to your audiences 24/7'
      ],
      image: '/channel_facebook.webp',
      video: null
    },
    messenger: {
      id: 'messenger',
      name: 'Messenger',
      icon: '💬',
      title: 'Smart & Interactive Chatbot',
      description: 'As of 2022, there are 138.1 million people use Facebook Messenger, and it is one of the most popular mobile app in the world. Make your presence known there!',
      features: [
        'Design the chatbot with ease using our "Visual Flow Builder"',
        'Persistent Menu',
        'Engage with your customers 24/7',
        'Collect leads instantly'
      ],
      image: '/channel_messenger.webp',
      video: null
    },
    instagram: {
      id: 'instagram',
      name: 'Instagram',
      icon: '📷',
      title: 'Instagram',
      description: 'Rocket Flow is the easiest and most powerful platform to automate your Instagram DM and marketing for more sales and better customer support.',
      features: [
        'Manage DMs within Rocket Flow app.',
        'Create AI Instagram chatbot with our amazing "Visual Builder"',
        'Persistent Menu',
        'Connect with your audiences 24/7',
        'Collect leads instantly'
      ],
      image: '/channel_instagram.webp',
      video: null
    },
    sms: {
      id: 'sms',
      name: 'SMS',
      icon: '📱',
      title: 'SMS Marketing',
      description: '85% of customers prefer to receive a text message over a call or email, and SMS messages have a whopping 98% open rate! Rocket Flow is your omnichannel!',
      features: [
        'Send bulk SMS',
        'Rocket Flow is integrated with multiple SMS API provider (Twilio, Plivo, Nexmo and a lot more..)',
        'Get more personalized with your audiences'
      ],
      image: null,
      video: '/channel_sms.webm'
    },
    email: {
      id: 'email',
      name: 'Email',
      icon: '✉️',
      title: 'Mass Email Marketing',
      description: 'There are 3.9 billion daily email users. This number is expected to climb to 4.3 billion by 2023. 46 percent of all email opened are on mobile devices!',
      features: [
        'Send bulk Emails',
        'We have integrated multiple Email API provider (Sendgrid, Mailgun, Madrill & SMTP)',
        'Connect your 3rd party email marketing tools such as MailChimp, Activecampaign and a lot more...'
      ],
      image: '/channel_email.webp',
      video: null
    }
  };

  // Function to render service icon
  const renderServiceIcon = (service) => {
    switch (service.id) {
      case 'multi-channel':
        return <ChatBubbleLeftRightIcon className="w-8 h-8" />;
      case 'auto-reply':
        return <BoltIcon className="w-8 h-8" />;
      case 'industry-solutions':
        return <GlobeAltIcon className="w-8 h-8" />;
      case 'engagement':
        return <DevicePhoneMobileIcon className="w-8 h-8" />;
      default:
        return <ChatBubbleLeftRightIcon className="w-8 h-8" />;
    }
  };

  const services = [
    {
      id: 'multi-channel',
      title: 'Multi-Channel Marketing',
      description: 'Automated campaigns across Facebook, Messenger, Instagram, SMS, and Email to reach your audience everywhere',
      icon: ChatBubbleLeftRightIcon,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'auto-reply',
      title: 'Automated Workflows',
      description: 'Pre-built workflows for growing followers, collecting emails, responding to comments, and sending automated DMs',
      icon: BoltIcon,
      color: 'from-gray-700 to-gray-900'
    },
    {
      id: 'industry-solutions',
      title: 'Industry-Specific Solutions',
      description: 'Customized marketing automation for 12+ industries including photography, education, hospitality, e-commerce, and more',
      icon: GlobeAltIcon,
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 'engagement',
      title: 'Customer Engagement',
      description: 'Intelligent tools to boost engagement, request follows, collect leads, and convert audiences into valued customers',
      icon: DevicePhoneMobileIcon,
      color: 'from-gray-800 to-black'
    }
  ];

  const sectors = [
    { name: 'Corporate Office', icon: BuildingOfficeIcon, color: 'bg-gradient-to-br from-blue-50 to-blue-100' },
    { name: 'E-commerce', icon: ShoppingCartIcon, color: 'bg-gradient-to-br from-gray-100 to-gray-200' },
    { name: 'Education', icon: AcademicCapIcon, color: 'bg-gradient-to-br from-blue-100 to-blue-200' },
    { name: 'Event Management', icon: SparklesIcon, color: 'bg-gradient-to-br from-gray-50 to-gray-100' },
    { name: 'Gadget Shops', icon: ComputerDesktopIcon, color: 'bg-gradient-to-br from-blue-50 to-blue-100' },
    { name: 'Hotels & Resorts', icon: BuildingOffice2Icon, color: 'bg-gradient-to-br from-gray-100 to-blue-50' },
    { name: 'Organic Products', icon: ShoppingBagIcon, color: 'bg-gradient-to-br from-blue-100 to-gray-100' },
    { name: 'Photography', icon: CameraIcon, color: 'bg-gradient-to-br from-gray-50 to-blue-50' },
    { name: 'Restaurants', icon: ShoppingBagIcon, color: 'bg-gradient-to-br from-blue-50 to-gray-100' },
    { name: 'Salon & Parlor', icon: SparklesIcon, color: 'bg-gradient-to-br from-gray-100 to-blue-100' },
    { name: 'Study Abroad', icon: PaperAirplaneIcon, color: 'bg-gradient-to-br from-blue-100 to-blue-50' },
    { name: 'Travel Booking', icon: TicketIcon, color: 'bg-gradient-to-br from-gray-50 to-gray-100' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-50 to-white text-gray-900 overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center pt-20 sm:pt-20 pb-8 sm:pb-16" padding="md">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            {/* Left Side - Text and Buttons */}
            <div className="text-center sm:text-left flex flex-col justify-center px-4 sm:px-0">
              {/* Badge - Mobile Only */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-4 sm:mb-6 mx-auto sm:mx-0 w-fit">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-xs sm:text-sm font-semibold text-blue-600">Welcome to RocketFlow</span>
              </div>

              <div className="mb-5 sm:mb-6 lg:mb-8">
                <h1 className="text-[2rem] leading-[2.5rem] sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 lg:mb-6">
                  <span className="text-gray-900">One Solution To{' '}</span>
                  <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 bg-clip-text text-transparent">Optimize</span>
                  <br className="hidden sm:block" />
                  <span className="text-gray-900"> Your </span>
                  <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 bg-clip-text text-transparent">Social Media</span>
                </h1>
                <p className="text-sm leading-relaxed sm:text-base lg:text-xl text-gray-600 max-w-xl mx-auto sm:mx-0">
                  Level up your campaigns, business, marketing and social reach using our 
                  cutting-edge features and ultimately turn your audiences into valued customers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start mb-5 sm:mb-0">
                <Link href="/tutorial" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all py-3 sm:py-3 text-sm sm:text-base font-semibold rounded-xl">
                    <PlayIcon className="w-5 h-5 text-white" />
                    How It Works
                  </Button>
                </Link>
                
                <Link href="/pricing" className="w-full sm:w-auto">
                  <button className="w-full px-6 py-3 bg-white text-blue-600 font-semibold hover:bg-blue-50 border-2 border-blue-600 rounded-xl transition-all hover:shadow-md text-sm sm:text-base">
                    Try It For Free →
                  </button>
                </Link>
              </div>

              {/* Quick Stats - Redesigned for mobile */}
              <div className="mt-6 sm:mt-8 lg:mt-12 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 bg-white sm:bg-transparent p-4 sm:p-0 rounded-2xl sm:rounded-none shadow-md sm:shadow-none border sm:border-0 border-blue-100">
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">635+</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 mt-0.5 sm:mt-1">Active Users</div>
                </div>
                <div className="text-center sm:text-left border-l border-r sm:border-0 border-blue-100">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">55+</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 mt-0.5 sm:mt-1">Countries</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">99.9%</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 mt-0.5 sm:mt-1">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Side - Rotating Dashboard Cards */}
            <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-center lg:justify-start lg:pl-12 mt-8 lg:mt-0 overflow-hidden lg:overflow-visible">
              {/* Circular rotating container */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background decorative circles */}
                <div className="absolute top-1/2 left-1/2 lg:top-[55%] lg:left-[55%] transform -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[360px] lg:w-[500px] h-[240px] sm:h-[360px] lg:h-[500px] border border-blue-100 rounded-full opacity-20"></div>
                <div className="absolute top-1/2 left-1/2 lg:top-[55%] lg:left-[55%] transform -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] lg:w-[420px] h-[200px] sm:h-[300px] lg:h-[420px] border border-blue-200 rounded-full opacity-30"></div>

                {/* Rotating Dashboard Cards */}
                {dashboards.map((dashboard, index) => {
                  const rotation = (index - activeDashboard) * 120; // 120 degrees apart
                  const isActive = index === activeDashboard;
                  const radius = typeof window !== 'undefined' 
                    ? (window.innerWidth < 640 ? 70 : window.innerWidth < 1024 ? 100 : 140)
                    : 140;
                  const angle = (rotation * Math.PI) / 180;
                  const x = Math.sin(angle) * radius;
                  const y = -Math.cos(angle) * radius;
                  
                  // Use centered position on mobile, offset position on desktop
                  const topPosition = typeof window !== 'undefined' 
                    ? (window.innerWidth < 1024 ? '50%' : '55%')
                    : '55%';
                  const leftPosition = typeof window !== 'undefined' 
                    ? (window.innerWidth < 1024 ? '50%' : '55%')
                    : '55%';

                  return (
                    <div
                      key={dashboard.id}
                      className={`absolute transition-all duration-1000 ease-in-out ${
                        isActive ? 'scale-100 opacity-100 z-20' : 'scale-75 opacity-40 z-10'
                      }`}
                      style={{
                        top: topPosition,
                        left: leftPosition,
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) ${
                          isActive ? 'scale(1)' : 'scale(0.75)'
                        }`,
                      }}
                    >
                      <div className={`bg-gradient-to-br from-white to-blue-50 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 w-64 sm:w-80 lg:w-96 border border-blue-100 sm:border-2 ${
                        isActive ? 'border-blue-300' : 'border-blue-100'
                      }`}>
                        {/* Dashboard Header */}
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">{dashboard.title}</h3>
                          <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                          {dashboard.stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                              <span className="text-xs sm:text-sm text-gray-600">{stat.label}</span>
                              <div className={`text-base sm:text-lg font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                {stat.value}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Mini Chart */}
                        <div className="border-t border-gray-200 pt-3 sm:pt-4">
                          <div className="flex items-end justify-between h-12 sm:h-16 gap-0.5 sm:gap-1">
                            {dashboard.chart.map((height, idx) => (
                              <div
                                key={idx}
                                className={`flex-1 bg-gradient-to-t ${dashboard.stats[0].color} rounded-t-lg transition-all duration-500`}
                                style={{ height: `${height}%` }}
                              ></div>
                            ))}
                          </div>
                          <div className="text-[10px] sm:text-xs text-gray-500 text-center mt-2">Activity Trend</div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Navigation Dots */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {dashboards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveDashboard(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeDashboard
                          ? 'bg-blue-600 w-8'
                          : 'bg-blue-200 hover:bg-blue-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Side Cards */}
              <div className="absolute top-0 -right-35 w-40 bg-white rounded-2xl shadow-xl p-3 border border-blue-100 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Messages</div>
                    <div className="text-sm font-bold text-gray-900">12.5K</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-40 bg-white rounded-2xl shadow-xl p-3 border border-blue-100 animate-float animation-delay-2000">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <BoltIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Growth</div>
                    <div className="text-sm font-bold text-gray-900">+45%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Integration Section */}
      <Section className="py-20 relative overflow-hidden" padding="lg">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <Container className="relative z-10">
          {/* Integration Logos */}
          <div className="border-t border-gray-200 pt-16">
            <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-12 font-semibold">Seamlessly Integrated With</p>
            
            {/* Integration Hub - Centered Design with Rope-like Connections */}
            <div className="relative max-w-5xl mx-auto h-[550px] flex items-center justify-center">
              {/* Rope-like Connection Network using SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                {/* Main rope connecting all platforms in a circular flow */}
                {/* Outer circular rope binding all platforms */}
                <path 
                  d="M 20% 12% Q 10% 30%, 8% 50% T 20% 88% Q 50% 95%, 80% 88% T 92% 50% Q 90% 30%, 80% 12% Q 50% 5%, 20% 12%" 
                  stroke="url(#ropeGradient)" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeDasharray="12,6" 
                  className="opacity-30"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))' }}
                />
                
                {/* Inner connection ropes from center to each platform */}
                {/* Top Left - Facebook */}
                <path d="M 50% 50% Q 35% 30%, 20% 12%" stroke="url(#blueGradient)" strokeWidth="3" fill="none" strokeDasharray="8,4" className="animate-pulse opacity-70" />
                <path d="M 50% 50% Q 37% 32%, 20% 12%" stroke="url(#blueGradient)" strokeWidth="1.5" fill="none" strokeDasharray="4,2" className="animate-pulse opacity-40" style={{ animationDelay: '0.2s' }} />
                
                {/* Top Right - Instagram */}
                <path d="M 50% 50% Q 65% 30%, 80% 12%" stroke="url(#pinkGradient)" strokeWidth="3" fill="none" strokeDasharray="8,4" className="animate-pulse opacity-70" style={{ animationDelay: '0.3s' }} />
                <path d="M 50% 50% Q 63% 32%, 80% 12%" stroke="url(#pinkGradient)" strokeWidth="1.5" fill="none" strokeDasharray="4,2" className="animate-pulse opacity-40" style={{ animationDelay: '0.5s' }} />
                
                {/* Middle Left - Messenger */}
                <path d="M 50% 50% Q 25% 50%, 8% 50%" stroke="url(#blueGradient)" strokeWidth="3" fill="none" strokeDasharray="8,4" className="animate-pulse opacity-70" style={{ animationDelay: '0.6s' }} />
                <path d="M 50% 50% Q 27% 48%, 8% 50%" stroke="url(#blueGradient)" strokeWidth="1.5" fill="none" strokeDasharray="4,2" className="animate-pulse opacity-40" style={{ animationDelay: '0.8s' }} />
                
                {/* Middle Right - LinkedIn */}
                <path d="M 50% 50% Q 75% 50%, 92% 50%" stroke="url(#linkedinGradient)" strokeWidth="3" fill="none" strokeDasharray="8,4" className="animate-pulse opacity-70" style={{ animationDelay: '0.9s' }} />
                <path d="M 50% 50% Q 73% 48%, 92% 50%" stroke="url(#linkedinGradient)" strokeWidth="1.5" fill="none" strokeDasharray="4,2" className="animate-pulse opacity-40" style={{ animationDelay: '1.1s' }} />
                
                {/* Bottom Left - WordPress */}
                <path d="M 50% 50% Q 35% 70%, 20% 88%" stroke="url(#wpGradient)" strokeWidth="3" fill="none" strokeDasharray="8,4" className="animate-pulse opacity-70" style={{ animationDelay: '1.2s' }} />
                <path d="M 50% 50% Q 37% 68%, 20% 88%" stroke="url(#wpGradient)" strokeWidth="1.5" fill="none" strokeDasharray="4,2" className="animate-pulse opacity-40" style={{ animationDelay: '1.4s' }} />
                
                {/* Bottom Right - Google */}
                <path d="M 50% 50% Q 65% 70%, 80% 88%" stroke="url(#googleGradient)" strokeWidth="3" fill="none" strokeDasharray="8,4" className="animate-pulse opacity-70" style={{ animationDelay: '1.5s' }} />
                <path d="M 50% 50% Q 63% 68%, 80% 88%" stroke="url(#googleGradient)" strokeWidth="1.5" fill="none" strokeDasharray="4,2" className="animate-pulse opacity-40" style={{ animationDelay: '1.7s' }} />
                
                {/* Connecting lines between adjacent platforms (rope network) */}
                {/* Facebook to Instagram */}
                <path d="M 20% 12% Q 50% 5%, 80% 12%" stroke="url(#connectionGradient)" strokeWidth="2.5" fill="none" strokeDasharray="6,3" className="opacity-25" />
                
                {/* Instagram to LinkedIn */}
                <path d="M 80% 12% Q 95% 30%, 92% 50%" stroke="url(#connectionGradient)" strokeWidth="2.5" fill="none" strokeDasharray="6,3" className="opacity-25" />
                
                {/* LinkedIn to Google */}
                <path d="M 92% 50% Q 90% 70%, 80% 88%" stroke="url(#connectionGradient)" strokeWidth="2.5" fill="none" strokeDasharray="6,3" className="opacity-25" />
                
                {/* Google to WordPress */}
                <path d="M 80% 88% Q 50% 95%, 20% 88%" stroke="url(#connectionGradient)" strokeWidth="2.5" fill="none" strokeDasharray="6,3" className="opacity-25" />
                
                {/* WordPress to Messenger */}
                <path d="M 20% 88% Q 5% 70%, 8% 50%" stroke="url(#connectionGradient)" strokeWidth="2.5" fill="none" strokeDasharray="6,3" className="opacity-25" />
                
                {/* Messenger to Facebook */}
                <path d="M 8% 50% Q 10% 30%, 20% 12%" stroke="url(#connectionGradient)" strokeWidth="2.5" fill="none" strokeDasharray="6,3" className="opacity-25" />
                
                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="blueGradient" x1="50%" y1="50%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="pinkGradient" x1="50%" y1="50%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="linkedinGradient" x1="50%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#0a66c2" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#0a66c2" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#0a66c2" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="wpGradient" x1="50%" y1="50%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#21759b" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#21759b" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#21759b" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="googleGradient" x1="50%" y1="50%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ea4335" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#ea4335" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ea4335" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="ropeGradient">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="25%" stopColor="#ec4899" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#0a66c2" stopOpacity="0.6" />
                    <stop offset="75%" stopColor="#21759b" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="connectionGradient">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Decorative rings around center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-blue-200 rounded-full opacity-20"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-blue-300 border-dashed rounded-full opacity-10 animate-spin" style={{ animationDuration: '30s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-100 rounded-full opacity-10"></div>

              {/* Center - RocketFlow Logo with wave effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  {/* Multiple glowing rings with different animations */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full blur-xl opacity-30" style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
                  
                  {/* Logo container with unique border */}
                  <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-full p-10 shadow-2xl border-4 border-blue-300">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100/50 to-transparent"></div>
                    <img src="/logo.png" alt="RocketFlow" className="w-36 h-36 object-contain relative z-10" />
                  </div>
                  
                  {/* Rotating orbital ring */}
                  <div className="absolute inset-0 border-2 border-blue-400 border-dashed rounded-full animate-spin opacity-40" style={{ animationDuration: '25s' }}>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>

              {/* Platform Icons with unique card design */}
              
              {/* Top Left - Facebook */}
              <div className="absolute top-[8%] left-[12%] z-10 group">
                <div className="relative">
                  {/* Glowing effect on hover */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                  
                  {/* Hexagon-style card */}
                  <div className="relative bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 border-2 border-blue-100 group-hover:border-blue-400 hover:-translate-y-2">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-blue-100 rounded-bl-2xl"></div>
                    <FaFacebook className="w-10 h-10 text-blue-600 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                </div>
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs font-bold text-blue-600 bg-white px-3 py-1.5 rounded-full shadow-lg border border-blue-200">Facebook</span>
                </div>
              </div>

              {/* Top Right - Instagram */}
              <div className="absolute top-[8%] right-[12%] z-10 group">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 border-2 border-pink-100 group-hover:border-pink-400 hover:-translate-y-2">
                    <div className="absolute top-0 left-0 w-8 h-8 bg-pink-100 rounded-br-2xl"></div>
                    <FaInstagram className="w-10 h-10 text-pink-600 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                </div>
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs font-bold text-pink-600 bg-white px-3 py-1.5 rounded-full shadow-lg border border-pink-200">Instagram</span>
                </div>
              </div>

              {/* Middle Left - Messenger */}
              <div className="absolute top-1/2 left-[2%] transform -translate-y-1/2 z-10 group">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 border-2 border-blue-100 group-hover:border-blue-400 hover:-translate-x-2">
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-100 rounded-tl-2xl"></div>
                    <FaFacebookMessenger className="w-10 h-10 text-blue-600 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                </div>
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs font-bold text-blue-600 bg-white px-3 py-1.5 rounded-full shadow-lg border border-blue-200">Messenger</span>
                </div>
              </div>

              {/* Middle Right - LinkedIn */}
              <div className="absolute top-1/2 right-[2%] transform -translate-y-1/2 z-10 group">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 border-2 border-blue-100 group-hover:border-blue-600 hover:translate-x-2">
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-blue-100 rounded-tr-2xl"></div>
                    <FaLinkedin className="w-10 h-10 text-blue-700 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                </div>
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs font-bold text-blue-700 bg-white px-3 py-1.5 rounded-full shadow-lg border border-blue-200">LinkedIn</span>
                </div>
              </div>

              {/* Bottom Left - WordPress */}
              <div className="absolute bottom-[8%] left-[12%] z-10 group">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 border-2 border-blue-100 group-hover:border-blue-500 hover:translate-y-2">
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-100 rounded-tl-2xl"></div>
                    <FaWordpress className="w-10 h-10 text-blue-700 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                </div>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs font-bold text-blue-700 bg-white px-3 py-1.5 rounded-full shadow-lg border border-blue-200">WordPress</span>
                </div>
              </div>

              {/* Bottom Right - Google */}
              <div className="absolute bottom-[8%] right-[12%] z-10 group">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-400 to-red-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 border-2 border-red-100 group-hover:border-red-400 hover:translate-y-2">
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-red-100 rounded-tr-2xl"></div>
                    <FaGoogle className="w-10 h-10 text-red-600 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                </div>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs font-bold text-red-600 bg-white px-3 py-1.5 rounded-full shadow-lg border border-red-200">Google</span>
                </div>
              </div>

              {/* Floating particles with wave motion */}
              <div className="absolute top-[25%] left-[28%] w-3 h-3 bg-blue-400 rounded-full" style={{ animation: 'float 4s ease-in-out infinite' }}></div>
              <div className="absolute top-[65%] right-[22%] w-2 h-2 bg-pink-400 rounded-full" style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '1s' }}></div>
              <div className="absolute bottom-[35%] left-[18%] w-2.5 h-2.5 bg-blue-300 rounded-full" style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '2s' }}></div>
              <div className="absolute top-[40%] right-[30%] w-2 h-2 bg-blue-500 rounded-full" style={{ animation: 'float 4.5s ease-in-out infinite', animationDelay: '0.5s' }}></div>
            </div>

            {/* Integration description with enhanced styling */}
            <div className="text-center mt-20">
              <div className="max-w-3xl mx-auto">
                <div className="relative inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-10"></div>
                  <p className="relative text-gray-700 text-lg font-medium leading-relaxed bg-white px-6 py-3 rounded-lg">
                    <span className="text-blue-600 font-bold">Powerful Integration Hub:</span> Connect with all major platforms seamlessly. 
                    RocketFlow serves as your central automation command center, linking your favorite social media and business tools 
                    for a <span className="text-blue-600 font-semibold">unified experience</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      

      {/* Services Section */}
      <Section id="services" className="">
        <Container>
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Multi-Channel Marketing Card */}
            <Card
              className="group relative h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200"
              onMouseEnter={() => setHoveredService('multi-channel')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg bg-blue-600 flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <ChatBubbleLeftRightIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Multi-Channel Marketing</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">Automated campaigns across Facebook, Messenger, Instagram, SMS, and Email to reach your audience everywhere</p>
            </Card>

            {/* Automated Workflows Card */}
            <Card
              className="group relative h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300"
              onMouseEnter={() => setHoveredService('auto-reply')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg bg-gray-800 flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <BoltIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Automated Workflows</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">Pre-built workflows for growing followers, collecting emails, responding to comments, and sending automated DMs</p>
            </Card>

            {/* Industry-Specific Solutions Card */}
            <Card
              className="group relative h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200"
              onMouseEnter={() => setHoveredService('industry-solutions')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg bg-blue-600 flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <GlobeAltIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Industry-Specific Solutions</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">Customized marketing automation for 12+ industries including photography, education, hospitality, e-commerce, and more</p>
            </Card>

            {/* Customer Engagement Card */}
            <Card
              className="group relative h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300"
              onMouseEnter={() => setHoveredService('engagement')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg bg-gray-800 flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <DevicePhoneMobileIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Customer Engagement</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">Intelligent tools to boost engagement, request follows, collect leads, and convert audiences into valued customers</p>
            </Card>
          </div>
        </Container>
      </Section>
{/* Reach Your Audiences Section */}
      <Section id="channels" className="py-8 sm:py-10 lg:py-12">
        <Container>
          <div className="text-center mb-6 sm:mb-8 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-gray-900">
              <span className="text-blue-600">📡</span> Reach Your Audiences <span className="text-blue-600">With Ease</span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Specialized tools to achieve <span className="text-blue-600 font-semibold">greater heights</span> for your business.
            </p>
          </div>

          {/* Channel Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
            {Object.values(channels).map((channel) => (
              <button
                key={channel.id}
                onClick={() => setActiveChannel(channel.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeChannel === channel.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                    : 'bg-white text-blue-600 hover:bg-blue-50 border border-blue-600 sm:border-2 hover:border-blue-700'
                }`}
              >
                {channel.icon} {channel.name}
              </button>
            ))}
          </div>

          {/* Channel Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center max-w-5xl mx-auto px-4">
            {/* Left Side - Phone Mockup with Real Images */}
            <div className="relative flex justify-center order-2 md:order-1">
              <div className="relative w-full max-w-[280px] sm:max-w-xs mx-auto">
                {/* iPhone Frame */}
                <div className="relative bg-black rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2 shadow-xl">
                  <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden">
                    {/* Notch */}
                    <div className="relative h-5 sm:h-6 bg-black">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-4 sm:h-5 bg-black rounded-b-2xl"></div>
                    </div>
                    
                    {/* Content - Using Real Images/Videos */}
                    <div className="relative h-[480px] sm:h-[570px] w-full bg-white flex items-center justify-center overflow-hidden">
                      {activeChannel === 'facebook' && channels.facebook.image && (
                        <img 
                          src={channels.facebook.image} 
                          alt="Facebook Automation"
                          className="w-full h-full object-cover"
                        />
                      )}
                      
                      {activeChannel === 'messenger' && channels.messenger.image && (
                        <img 
                          src={channels.messenger.image} 
                          alt="Messenger Chatbot"
                          className="w-full h-full object-cover"
                        />
                      )}
                      
                      {activeChannel === 'instagram' && channels.instagram.image && (
                        <img 
                          src={channels.instagram.image} 
                          alt="Instagram Marketing"
                          className="w-full h-full object-cover"
                        />
                      )}
                      
                      {activeChannel === 'sms' && channels.sms.video && (
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={channels.sms.video} type="video/webm" />
                        </video>
                      )}
                      
                      {activeChannel === 'email' && channels.email.image && (
                        <img 
                          src={channels.email.image} 
                          alt="Email Marketing"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 md:order-2">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">
                <span className="text-blue-600">»</span> {channels[activeChannel].title}
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                {channels[activeChannel].description}
              </p>
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                {channels[activeChannel].features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5 text-sm">⊗</span>
                    <span className="text-gray-600 text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-blue-600 font-semibold flex items-center justify-center gap-2 transition-all text-sm border-2 border-blue-600 rounded-lg hover:bg-blue-50 hover:shadow-md">
                Try It Now <span>›</span>
              </button>
            </div>
          </div>
        </Container>
      </Section>
      {/* More Features Section */}
      <Section className="">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Content */}
            <div className="pl-0 md:pl-8 lg:pl-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                <span className="text-blue-600">»</span> Provide More In Less Time
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Rocket Flow has the most complete features for Facebook, Messenger, Instagram 
                and other marketing platforms that can outrun any other 3rd party tools existing today.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Highly Interactive</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Human-like Conversation</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Increase Engagement</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Increase Sales</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Automate Customer Support</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Collect Leads</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Sell Products</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Automate Restaurant Food Order</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Setup Chatbots Available 24/7</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-gray-700">Never Miss a Single Message</span>
                </div>
              </div>
            </div>

            {/* Right Side - Video/Image */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative h-[565px] w-[300px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-gray-100 p-8">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full rounded-2xl shadow-lg"
                  >
                    <source src="/order_sample.webm" type="video/webm" />
                  </video>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-gray-800 rounded-full opacity-20 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sell Online Section */}
      

      {/* Target Sectors Section */}
      <Section id="industries" className="">
        <Container>
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Industries We <span className="text-blue-600">Serve</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for diverse business sectors
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 px-4">
            {sectors.map((sector, index) => (
              <div
                key={sector.name}
                className="group relative"
                onMouseEnter={() => setHoveredSector(sector.name)}
                onMouseLeave={() => setHoveredSector(null)}
              >
                {sector.name === 'Education' ? (
                  <a href="/education" className="block">
                    <div className={`relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mx-auto mb-2 sm:mb-3 text-blue-600">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>
                ) : sector.name === 'Photography' ? (
                  <Link href="/photography" className="block">
                    <div className={`relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 sm:hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mx-auto mb-2 sm:mb-3 text-gray-800">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </Link>
                ) : sector.name === 'Study Abroad' ? (
                  <a href="/study-abroad" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-blue-600">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>
                ) : sector.name === 'Hotels & Resorts' ? (
                  <a href="/hotel-and-resort" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-gray-700">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>

                ) : sector.name === 'Organic Products' ? (
                  <a href="/organic-products" className="block">

                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-blue-600">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>

                  </a>
                ) : sector.name === 'Travel Booking' ? (
                  <a href="/travel-booking" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-gray-700">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>
                ) : sector.name === 'Corporate Office' ? (
                  <a href="/corporate-office" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-blue-600">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>
                ) : sector.name === 'Gadget Shops' ? (
                  <a href="/gadget-shop" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-blue-600">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>


                ) : sector.name === 'Salon & Parlor' ? (
                  <a href="/salon" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-gray-700">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>

                ) : sector.name === 'E-commerce' ? (
                  <a href="/ecommerce" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-gray-700">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>
                ) : sector.name === 'Restaurants' ? (
                  <a href="/restaurants" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-blue-600">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                    <div className="text-center">
                      <div className="w-8 h-8 mx-auto mb-3 text-gray-700">
                        <sector.icon className="w-full h-full" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-800">{sector.name}</h3>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Social Media Integration Section */}

      {/* All Amazing Features Section */}
      <Section className="pb-8 sm:pb-12">
        <Container>
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
              <span className="text-blue-600">»</span> All Amazing Features We Provide
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Take a quick peek on our major features which we are so proud of. Try us for 
              free and find out why Rocket Flow is the right choice for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 px-4">
            {[
              { name: 'eCommerce Platform', icon: ShoppingCartIcon },
              { name: 'Facebook Page Marketing', icon: ChatBubbleLeftRightIcon },
              { name: 'Facebook Live Video', icon: VideoCameraIcon },
              { name: 'Messenger Chatbot', icon: ChatBubbleLeftRightIcon },
              { name: 'Messenger Marketing', icon: ChatBubbleLeftRightIcon },
              { name: 'Instagram Direct', icon: CameraIcon },
              { name: 'Instagram Chatbot', icon: CameraIcon },
              { name: 'QR Code Food Ordering', icon: QrCodeIcon },
              { name: 'Reservations/Bookings', icon: CalendarIcon },
              { name: 'Other Social Media Marketing', icon: GlobeAltIcon },
              { name: 'SMS Marketing', icon: DevicePhoneMobileIcon },
              { name: 'Email Marketing', icon: EnvelopeIcon }
            ].slice(0, (isMobile && !showAllFeatures) ? 4 : undefined).map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white border-2 border-blue-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <feature.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {feature.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Explore All Button - Only visible on mobile */}
          <div className="text-center mt-6 sm:mt-8 sm:hidden">
            <button
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg flex items-center gap-2 mx-auto text-sm"
            >
              {showAllFeatures ? (
                <>
                  Show Less <span className="text-lg">↑</span>
                </>
              ) : (
                <>
                  Explore All Features <span className="text-lg">↓</span>
                </>
              )}
            </button>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="pt-12 pb-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <Container size="lg" className="relative z-10">
          <div className="text-center">
            {/* Glass Card */}
            <div className="relative backdrop-blur-xl bg-white/80 border-2 border-blue-200 rounded-3xl p-12 shadow-2xl hover:bg-white/90 hover:border-blue-300 transition-all duration-500">
              {/* Glass Shine Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/30 to-transparent opacity-50"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">
                  Start Your 1 Week Free Trial Today!
                </h2>
                <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Try Rocket Flow for 1 Week - no commitment, no credit card needed and risk-free. 
                  Get the feel of our powerful software and decide which package is suitable for 
                  you and your brand.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link href="/get-started">
                    <Button size="lg" className="px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-2 border-blue-600 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-lg hover:shadow-xl">
                      Get Started Now
                    </Button>
                  </Link>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex gap-3">
                      <button className="px-5 py-3 bg-white text-gray-900 border-2 border-blue-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all font-semibold hover:shadow-lg">
                        Month
                      </button>
                      <button className="px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all flex items-center gap-2 font-bold shadow-lg hover:shadow-xl">
                        Year <span className="text-xs bg-white text-blue-600 px-2 py-1 rounded-full font-bold">15% Off</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              <span className="text-blue-600">»</span> Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We have prepared all the guides and documentations to efficiently use our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-4">
                <details className="group bg-white border-2 border-blue-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-md transition-all">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                    <span className="text-blue-600">⊙</span> Is it safe and legal?
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm pl-6">
                    Using our platform is absolutely safe and legal! We're just leveraging on the 
                    open APIs of different Social Networking sites, nothing that breaks the rules.
                  </p>
                </details>

                <details className="group bg-white border-2 border-blue-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-md transition-all">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                    <span className="text-blue-600">⊙</span> I am a beginner on this stuffs, can I learn this easy?
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm pl-6">
                    Absolutely! Our platform is designed to be user-friendly and intuitive. We provide 
                    comprehensive guides and tutorials to help you get started quickly.
                  </p>
                </details>

                <details className="group bg-white border-2 border-blue-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-md transition-all">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                    <span className="text-blue-600">⊙</span> Is there a dashboard available?
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm pl-6">
                    Yes! We have a powerful, intuitive dashboard where you can manage all your campaigns, 
                    view analytics, and control all aspects of your marketing automation.
                  </p>
                </details>

                <details className="group bg-white border-2 border-blue-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-md transition-all">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                    <span className="text-blue-600">⊙</span> Can I unsubscribe anytime? How about refunds?
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm pl-6">
                    Yes, you can cancel your subscription at any time. We also offer refunds within a 
                    certain period if you're not satisfied with our service.
                  </p>
                </details>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-3xl p-8 shadow-xl border-2 border-blue-200">
                  <div className="text-center">
                    <div className="text-6xl mb-4">❓</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Need More Help?</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Check out our comprehensive documentation and guides
                    </p>
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-md hover:shadow-lg">
                      View Documentation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
