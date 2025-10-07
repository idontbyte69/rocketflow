'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container } from '.';
import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  BuildingOfficeIcon,
  UsersIcon,
  CalendarIcon,
  DocumentTextIcon,
  BriefcaseIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  CogIcon,
  BoltIcon,
  ShieldCheckIcon,
  ClockIcon,
  PresentationChartLineIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';

export default function CorporateOfficePage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);

  const solutions = [
    {
      id: 'bulk-sms',
      title: 'Enterprise SMS Solutions',
      description: 'Professional bulk SMS platform for internal communications, client updates, meeting reminders, and corporate announcements with enterprise-grade reliability.',
      icon: DevicePhoneMobileIcon,
      gradient: 'from-blue-500 via-indigo-600 to-purple-700',
      features: ['Employee notifications', 'Client communications', 'Meeting alerts', 'Emergency broadcasts'],
      stats: { value: '99.9%', label: 'Uptime SLA' }
    },
    {
      id: 'auto-chat',
      title: 'AI Corporate Assistant',
      description: 'Intelligent chatbot for HR queries, IT support, policy information, and employee self-service portal with seamless integration to your systems.',
      icon: ChatBubbleLeftRightIcon,
      gradient: 'from-indigo-500 via-purple-600 to-pink-700',
      features: ['HR assistance', 'IT helpdesk', 'Policy queries', 'Onboarding support'],
      stats: { value: '80%', label: 'Query Resolution' }
    },
    {
      id: 'auto-mail',
      title: 'Automated Email Management',
      description: 'Smart email automation for internal memos, client proposals, meeting schedules, and professional correspondence with template management.',
      icon: EnvelopeIcon,
      gradient: 'from-purple-500 via-pink-600 to-rose-700',
      features: ['Auto-responses', 'Template library', 'Schedule emails', 'Follow-up tracking'],
      stats: { value: '5x', label: 'Faster Communication' }
    },
    {
      id: 'ai-website',
      title: 'Corporate AI Portal',
      description: 'AI-powered corporate website with intelligent navigation, personalized content delivery, and advanced analytics for better stakeholder engagement.',
      icon: ComputerDesktopIcon,
      gradient: 'from-cyan-500 via-blue-600 to-indigo-700',
      features: ['Smart navigation', 'Content personalization', 'Analytics dashboard', 'Multi-language'],
      stats: { value: '250%', label: 'Engagement Boost' }
    },
    {
      id: 'workflow-automation',
      title: 'Workflow Automation',
      description: 'Streamline business processes with intelligent automation for approvals, document routing, task assignments, and progress tracking.',
      icon: CogIcon,
      gradient: 'from-blue-600 via-cyan-600 to-teal-700',
      features: ['Approval workflows', 'Document routing', 'Task automation', 'Integration APIs'],
      stats: { value: '70%', label: 'Time Saved' }
    },
    {
      id: 'analytics',
      title: 'Business Intelligence & Analytics',
      description: 'Advanced analytics and reporting tools to track KPIs, monitor performance, and make data-driven decisions with real-time dashboards.',
      icon: ChartBarIcon,
      gradient: 'from-violet-500 via-purple-600 to-fuchsia-700',
      features: ['Real-time dashboards', 'Custom reports', 'Predictive analytics', 'Data visualization'],
      stats: { value: '10x', label: 'Faster Insights' }
    }
  ];

  const benefits = [
    {
      icon: BriefcaseIcon,
      title: 'Professional Excellence',
      description: 'Elevate your corporate image with enterprise-grade communication tools',
      metric: '95% client satisfaction',
      color: 'blue'
    },
    {
      icon: BoltIcon,
      title: 'Operational Efficiency',
      description: 'Reduce manual tasks by 70% with intelligent automation',
      metric: '10hrs saved/week',
      color: 'indigo'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance with industry standards',
      metric: 'ISO 27001 certified',
      color: 'purple'
    },
    {
      icon: UsersIcon,
      title: 'Team Collaboration',
      description: 'Seamless communication across departments and locations',
      metric: '3x better coordination',
      color: 'violet'
    }
  ];

  const features = [
    {
      title: 'Internal Communications',
      description: 'Streamlined messaging for employees across all departments',
      icon: ChatBubbleLeftRightIcon,
      stats: ['Instant notifications', '99.9% uptime', 'Multi-channel delivery']
    },
    {
      title: 'Client Management',
      description: 'Professional communication tools for client relationships',
      icon: UsersIcon,
      stats: ['Automated follow-ups', 'CRM integration', 'Response tracking']
    },
    {
      title: 'Meeting Management',
      description: 'AI-powered scheduling and reminder systems',
      icon: CalendarIcon,
      stats: ['Smart scheduling', 'Auto-reminders', 'Calendar sync']
    },
    {
      title: 'Document Automation',
      description: 'Intelligent document generation and management',
      icon: DocumentTextIcon,
      stats: ['Template library', 'E-signatures', 'Version control']
    }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'Manual employee communication and scattered information systems',
      solution: 'Implemented AI chatbot for HR and IT support with automated SMS notifications',
      results: ['85% reduction in support tickets', '50% faster onboarding', '$200K annual savings'],
      logo: 'TC'
    },
    {
      company: 'Global Finance Ltd',
      industry: 'Financial Services',
      challenge: 'Inefficient client communication and compliance tracking',
      solution: 'Deployed automated email system with compliance monitoring and bulk SMS alerts',
      results: ['99% compliance rate', '60% faster client response', '40% cost reduction'],
      logo: 'GF'
    }
  ];

  const stats = [
    { number: '500+', label: 'Corporate Clients', icon: BuildingOfficeIcon },
    { number: '1M+', label: 'Messages/Month', icon: DevicePhoneMobileIcon },
    { number: '99.9%', label: 'System Uptime', icon: ShieldCheckIcon },
    { number: '24/7', label: 'Enterprise Support', icon: ClockIcon }
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
                <BuildingOfficeIcon className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-900 font-semibold text-sm">Enterprise-Grade Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="text-gray-900">Empower Your</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Corporate Office
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your corporate communications with AI-powered automation, intelligent chatbots, 
                and enterprise-grade messaging solutions designed for modern businesses.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">ISO Certified</div>
                    <div className="text-sm text-gray-600">Enterprise security</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BoltIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">70% Efficiency</div>
                    <div className="text-sm text-gray-600">Time savings</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <UsersIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">500+ Clients</div>
                    <div className="text-sm text-gray-600">Trusted globally</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">24/7 Support</div>
                    <div className="text-sm text-gray-600">Always available</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                  Request Demo
                </Button>
                <Button className="border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-600 hover:text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                  View Pricing
                </Button>
              </div>
            </div>

            {/* Right Visual - Professional Dashboard Preview */}
            <div className="relative">
              <div className="relative">
                {/* Dashboard Cards Stack */}
                <div className="space-y-4">
                  {/* Top Card - Analytics */}
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-2xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-sm opacity-80 mb-1">Monthly Communications</div>
                        <div className="text-4xl font-bold">1.2M+</div>
                      </div>
                      <div className="w-16 h-16 bg-black bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <ChartBarIcon className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-white bg-opacity-20 rounded-full h-2">
                        <div className="bg-white rounded-full h-2 w-3/4"></div>
                      </div>
                      <span className="text-sm font-semibold">+24%</span>
                    </div>
                  </div>

                  {/* Middle Cards - Side by Side */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-indigo-100 transform hover:scale-105 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                        <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">98%</div>
                      <div className="text-sm text-gray-600">Response Rate</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-purple-100 transform hover:scale-105 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                        <ClockIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">2.5min</div>
                      <div className="text-sm text-gray-600">Avg Response</div>
                    </div>
                  </div>

                  {/* Bottom Card - Activity */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-blue-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                        AI
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">AI Assistant Active</div>
                        <div className="text-sm text-gray-600">Handling 45 queries now</div>
                      </div>
                      <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                        Live
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold text-sm transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  🏢 Enterprise Ready
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Showcase - Interactive Tabs */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Suite for
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Modern Offices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your corporate office needs in one powerful platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                  activeFeature === index
                    ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-indigo-300 shadow-xl scale-105'
                    : 'bg-white border-gray-200 hover:border-indigo-200 hover:shadow-lg'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      <span className="text-gray-700">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Solutions Grid */}
      <Section className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise Solutions
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Built for Scale</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered tools designed for corporate excellence and operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={solution.id}
                className={`relative p-8 rounded-3xl bg-white border-2 shadow-xl hover:shadow-2xl transition-all duration-500 transform overflow-hidden group ${
                  hoveredService === solution.id 
                    ? 'border-indigo-300 scale-105 -translate-y-2' 
                    : 'border-gray-200 hover:border-indigo-200'
                }`}
                onMouseEnter={() => setHoveredService(solution.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Stats Badge */}
                <div className="absolute top-6 right-6 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                  {solution.stats.value}
                </div>

                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                  {solution.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 relative z-10">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className={`w-2 h-2 bg-gradient-to-r ${solution.gradient} rounded-full flex-shrink-0`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-6 pt-6 border-t border-gray-100 relative z-10">
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{solution.stats.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Leading Corporations
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Trust Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join Fortune 500 companies leveraging our enterprise solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-${benefit.color}-500 to-${benefit.color}-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                <div className={`inline-block px-4 py-2 bg-${benefit.color}-100 text-${benefit.color}-700 rounded-full text-sm font-bold`}>
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-100 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories from
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real corporations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-indigo-100"
              >
                {/* Company Header */}
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {study.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{study.company}</h3>
                    <div className="text-indigo-600 font-semibold">{study.industry}</div>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-bold text-gray-900 uppercase text-sm tracking-wider">Challenge</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="font-bold text-gray-900 uppercase text-sm tracking-wider">Solution</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-bold text-gray-900 uppercase text-sm tracking-wider">Results</span>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                        <div className="text-2xl">✓</div>
                        <span className="text-gray-900 font-semibold">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 relative overflow-hidden">
        {/* Animated Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 border-4 border-white transform rotate-45 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-white transform -rotate-12 animate-pulse animation-delay-2000"></div>
          </div>
        </div>

        <Container className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-8">
              <BriefcaseIcon className="w-6 h-6 text-black mr-2" />
              <span className="text-black font-semibold">Enterprise Solutions Available</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Transform Your Corporate
              <br />
              Communication Today
            </h2>
            
            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-12 leading-relaxed">
              Join 500+ corporations already saving 70% of time with our AI-powered solutions.
              Get started with a personalized demo.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button className="bg-white text-indigo-700 hover:bg-gray-100 px-12 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                Schedule Enterprise Demo
              </Button>
              <Button className="border-3 border-white text-white hover:bg-white hover:text-indigo-700 px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm bg-white bg-opacity-10">
                Contact Sales Team
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-white text-opacity-90">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-6 h-6" />
                <span>Enterprise-grade security</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-6 h-6" />
                <span>24/7 dedicated support</span>
              </div>
              <div className="flex items-center gap-2">
                <BoltIcon className="w-6 h-6" />
                <span>Quick implementation</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
