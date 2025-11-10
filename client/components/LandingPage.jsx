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
      <Section className="min-h-screen flex items-center justify-center pt-20 pb-16" padding="md">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text and Buttons */}
            <div className="text-left flex flex-col justify-center">
              <div className="mb-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  <span className="text-gray-900">One Solution To{' '}</span>
                  <span className="text-blue-600">Optimize</span>
                  <br />
                  <span className="text-gray-900">Your</span>{' '}
                  <span className="text-blue-600">Social Media</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 font-light max-w-xl leading-relaxed">
                  Level up your campaigns, business, marketing and social reach using our 
                  cutting-edge features and ultimately turn your audiences into valued customers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link href="/tutorial">
                  <Button size="lg" className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all">
                    <PlayIcon className="w-5 h-5 text-white" />
                    How It Works
                  </Button>
                </Link>
                
                <Link href="/pricing">
                  <button className="px-6 py-3 bg-white text-blue-600 font-semibold hover:bg-blue-50 border-2 border-blue-600 rounded-lg transition-all hover:shadow-md">
                    Try It For Free →
                  </button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600">635+</div>
                  <div className="text-sm text-gray-600 mt-1">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">55+</div>
                  <div className="text-sm text-gray-600 mt-1">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">99.9%</div>
                  <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Side - Rotating Dashboard Cards */}
            <div className="relative h-[600px] flex items-center justify-start pl-12">
              {/* Circular rotating container */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background decorative circles */}
                <div className="absolute top-[55%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-blue-100 rounded-full opacity-20"></div>
                <div className="absolute top-[55%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border-2 border-blue-200 rounded-full opacity-30"></div>

                {/* Rotating Dashboard Cards */}
                {dashboards.map((dashboard, index) => {
                  const rotation = (index - activeDashboard) * 120; // 120 degrees apart
                  const isActive = index === activeDashboard;
                  const radius = 140;
                  const angle = (rotation * Math.PI) / 180;
                  const x = Math.sin(angle) * radius;
                  const y = -Math.cos(angle) * radius;

                  return (
                    <div
                      key={dashboard.id}
                      className={`absolute transition-all duration-1000 ease-in-out ${
                        isActive ? 'scale-100 opacity-100 z-20' : 'scale-75 opacity-40 z-10'
                      }`}
                      style={{
                        top: '55%',
                        left: '55%',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) ${
                          isActive ? 'scale(1)' : 'scale(0.75)'
                        }`,
                      }}
                    >
                      <div className={`bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 w-96 border-2 ${
                        isActive ? 'border-blue-300' : 'border-blue-100'
                      }`}>
                        {/* Dashboard Header */}
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-gray-900">{dashboard.title}</h3>
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="space-y-3 mb-4">
                          {dashboard.stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">{stat.label}</span>
                              <div className={`text-lg font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                {stat.value}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Mini Chart */}
                        <div className="border-t border-gray-200 pt-4">
                          <div className="flex items-end justify-between h-16 gap-1">
                            {dashboard.chart.map((height, idx) => (
                              <div
                                key={idx}
                                className={`flex-1 bg-gradient-to-t ${dashboard.stats[0].color} rounded-t-lg transition-all duration-500`}
                                style={{ height: `${height}%` }}
                              ></div>
                            ))}
                          </div>
                          <div className="text-xs text-gray-500 text-center mt-2">Activity Trend</div>
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

      {/* Stats Section */}
      <Section className="py-20 relative overflow-hidden" padding="lg">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <Container className="relative z-10">
          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Stat 1 */}
            <div className="text-center group">
              <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-300 hover:-translate-y-2">
                <div className="text-6xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">635+</div>
                <div className="text-gray-600 text-sm font-semibold uppercase tracking-widest">Active Users</div>
              </div>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center group">
              <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-300 hover:-translate-y-2">
                <div className="text-6xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">55+</div>
                <div className="text-gray-600 text-sm font-semibold uppercase tracking-widest">Countries</div>
              </div>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center group">
              <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-300 hover:-translate-y-2">
                <div className="text-6xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">99.9%</div>
                <div className="text-gray-600 text-sm font-semibold uppercase tracking-widest">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mb-14">
            <p className="text-gray-700 text-xl font-medium max-w-3xl mx-auto leading-relaxed">
              Trusted by businesses worldwide to drive customer engagement, inspire brand loyalty, and accelerate growth
            </p>
          </div>
            
          {/* Integration Logos */}
          <div className="border-t border-gray-200 pt-10">
            <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-8 font-semibold">Seamlessly Integrated With</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center justify-center bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100">
                <FaFacebook className="w-7 h-7 text-blue-600" />
              </div>
              <div className="flex items-center justify-center bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100">
                <FaFacebookMessenger className="w-7 h-7 text-blue-600" />
              </div>
              <div className="flex items-center justify-center bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100">
                <FaInstagram className="w-7 h-7 text-pink-600" />
              </div>
              <div className="flex items-center justify-center bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100">
                <FaWordpress className="w-7 h-7 text-blue-700" />
              </div>
              <div className="flex items-center justify-center bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100">
                <FaGoogle className="w-7 h-7 text-red-600" />
              </div>
              <div className="flex items-center justify-center bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100">
                <FaLinkedin className="w-7 h-7 text-blue-700" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      

      {/* Services Section */}
      <Section id="services" className="">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Multi-Channel Marketing Card */}
            <Card
              className="group relative h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200"
              onMouseEnter={() => setHoveredService('multi-channel')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-16 h-16 rounded-lg bg-blue-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <ChatBubbleLeftRightIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Multi-Channel Marketing</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">Automated campaigns across Facebook, Messenger, Instagram, SMS, and Email to reach your audience everywhere</p>
            </Card>

            {/* Automated Workflows Card */}
            <Card
              className="group relative h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300"
              onMouseEnter={() => setHoveredService('auto-reply')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <BoltIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Automated Workflows</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">Pre-built workflows for growing followers, collecting emails, responding to comments, and sending automated DMs</p>
            </Card>

            {/* Industry-Specific Solutions Card */}
            <Card
              className="group relative h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200"
              onMouseEnter={() => setHoveredService('industry-solutions')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-16 h-16 rounded-lg bg-blue-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <GlobeAltIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Industry-Specific Solutions</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">Customized marketing automation for 12+ industries including photography, education, hospitality, e-commerce, and more</p>
            </Card>

            {/* Customer Engagement Card */}
            <Card
              className="group relative h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300"
              onMouseEnter={() => setHoveredService('engagement')}
              onMouseLeave={() => setHoveredService(null)}
              padding="lg"
            >
              <div className="w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <DevicePhoneMobileIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Customer Engagement</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">Intelligent tools to boost engagement, request follows, collect leads, and convert audiences into valued customers</p>
            </Card>
          </div>
        </Container>
      </Section>
{/* Reach Your Audiences Section */}
      <Section id="channels" className="py-12">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900">
              <span className="text-blue-600">📡</span> Reach Your Audiences <span className="text-blue-600">With Ease</span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Specialized tools to achieve <span className="text-blue-600 font-semibold">greater heights</span> for your business.
            </p>
          </div>

          {/* Channel Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {Object.values(channels).map((channel) => (
              <button
                key={channel.id}
                onClick={() => setActiveChannel(channel.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeChannel === channel.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                    : 'bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-600 hover:border-blue-700'
                }`}
              >
                {channel.icon} {channel.name}
              </button>
            ))}
          </div>

          {/* Channel Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            {/* Left Side - Phone Mockup with Real Images */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-xs">
                {/* iPhone Frame */}
                <div className="relative bg-black rounded-[2.5rem] p-2 shadow-xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    {/* Notch */}
                    <div className="relative h-6 bg-black">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl"></div>
                    </div>
                    
                    {/* Content - Using Real Images/Videos */}
                    <div className="relative h-[570px] w-[305px] bg-white flex items-center justify-center overflow-hidden">
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
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
                <span className="text-blue-600">»</span> {channels[activeChannel].title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {channels[activeChannel].description}
              </p>
              <ul className="space-y-2 mb-6">
                {channels[activeChannel].features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5 text-sm">⊗</span>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="px-5 py-2.5 bg-white text-blue-600 font-semibold flex items-center gap-2 transition-all text-sm border-2 border-blue-600 rounded-lg hover:bg-blue-50 hover:shadow-md">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
              Industries We <span className="text-blue-600">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for diverse business sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={sector.name}
                className="group relative"
                onMouseEnter={() => setHoveredSector(sector.name)}
                onMouseLeave={() => setHoveredSector(null)}
              >
                {sector.name === 'Education' ? (
                  <a href="/education" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-blue-600">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800">{sector.name}</h3>
                      </div>
                    </div>
                  </a>
                ) : sector.name === 'Photography' ? (
                  <Link href="/photography" className="block">
                    <div className={`relative p-6 rounded-2xl ${sector.color} shadow-md border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-3 text-gray-800">
                          <sector.icon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800">{sector.name}</h3>
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
      <Section className="pb-12">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              <span className="text-blue-600">»</span> All Amazing Features We Provide
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a quick peek on our major features which we are so proud of. Try us for 
              free and find out why Rocket Flow is the right choice for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white border-2 border-blue-100 rounded-2xl p-6 hover:border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {feature.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
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
