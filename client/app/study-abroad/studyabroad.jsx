'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container } from '../../components';

export default function StudyAbroadPage() {
  const [hoveredService, setHoveredService] = useState(null);

  const studyAbroadServices = [
    {
      id: 'auto-chat-reply',
      title: 'Auto Chat Reply',
      description: 'Instantly respond to student inquiries 24/7 with intelligent automated chat responses for admissions, visa queries, and course information.',
      icon: '💬',
      features: ['24/7 instant responses', 'Multi-language support', 'Admission query handling', 'Visa information automation'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'bulk-sms',
      title: 'Bulk SMS Service',
      description: 'Send targeted SMS campaigns to prospective students for application deadlines, scholarship alerts, and important updates.',
      icon: '📱',
      features: ['Mass SMS campaigns', 'Personalized messages', 'Delivery tracking', 'Scheduled messaging'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-chatbot',
      title: 'AI-Powered Chatbot',
      description: 'Intelligent chatbot that understands complex student queries about courses, universities, and admission processes.',
      icon: '🤖',
      features: ['Natural language processing', 'Course recommendations', 'University matching', 'Application guidance'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'ai-integration',
      title: 'AI Integration Suite',
      description: 'Complete AI solutions including document verification, application scoring, and predictive analytics for student success.',
      icon: '🧠',
      features: ['Document verification', 'Application scoring', 'Success prediction', 'Risk assessment'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'lead-management',
      title: 'Lead Management System',
      description: 'Comprehensive CRM system to track student inquiries from initial contact to successful enrollment.',
      icon: '📊',
      features: ['Lead tracking', 'Follow-up automation', 'Conversion analytics', 'Pipeline management'],
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 'social-media-automation',
      title: 'Social Media Automation',
      description: 'Automated social media posting and engagement to attract international students and build brand presence.',
      icon: '📢',
      features: ['Automated posting', 'Engagement tracking', 'Content scheduling', 'Multi-platform support'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const benefits = [
    {
      title: 'Increase Student Enrollment',
      description: 'Our automated systems help you engage with more prospective students and convert leads into enrollments.',
      icon: '📈',
      stat: '40% increase in conversion rates'
    },
    {
      title: 'Reduce Response Time',
      description: 'Instant automated responses ensure no student inquiry goes unanswered, improving satisfaction.',
      icon: '⚡',
      stat: 'Under 30 seconds response time'
    },
    {
      title: 'Save Operational Costs',
      description: 'Automate repetitive tasks and reduce manual workload for your counseling team.',
      icon: '💰',
      stat: 'Up to 60% cost reduction'
    },
    {
      title: 'Global Reach',
      description: 'Multi-language support and 24/7 availability to serve students across different time zones.',
      icon: '🌍',
      stat: '55+ countries supported'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We understand your specific needs and current challenges in student recruitment and management.'
    },
    {
      step: '02',
      title: 'Custom Solution Design',
      description: 'Our team designs a tailored solution that fits your business model and student demographics.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Seamless integration with your existing systems with minimal disruption to operations.'
    },
    {
      step: '04',
      title: 'Training & Support',
      description: 'Comprehensive training for your team and ongoing support to ensure optimal performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Section background="gradient" className="min-h-screen flex items-center justify-center pt-16">
        <Container>
          <div className="text-center">
            <div className="mb-8">
              <div className="text-6xl mb-6">✈️</div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-6">
                Digital Solutions for{' '}
                <span className="text-coral-500">Study Abroad</span>{' '}
                Companies
              </h1>
              <div className="mt-6 text-xl sm:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
                Empower your study abroad consultancy with AI-driven automation, 
                intelligent chatbots, and comprehensive digital tools to attract, 
                engage, and successfully enroll international students.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <Button size="lg" className="flex items-center gap-2">
                <span className="text-white">🚀</span>
                Get Started Today
              </Button>
              
              <Button variant="secondary" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
              Why Choose <span className="text-coral-500">RocketFlow</span> for Your Study Abroad Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your study abroad consultancy with our proven digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center" padding="lg">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{benefit.description}</p>
                <div className="text-coral-500 font-bold text-lg">{benefit.stat}</div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
              Our <span className="text-coral-500">Specialized Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored for study abroad companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studyAbroadServices.map((service, index) => (
              <Card
                key={service.id}
                className="group relative"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                padding="lg"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-coral-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
              Our <span className="text-coral-500">Implementation Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to transform your study abroad business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-coral-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-x-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <Container size="lg">
          <div className="text-center">
            <Card padding="lg" className="bg-gradient-to-r from-coral-50 to-blue-50 border-coral-100" hover={false}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                Ready to Transform Your Study Abroad Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join leading study abroad consultancies who have increased their enrollment 
                rates and reduced operational costs with our digital solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Start Free Trial
                </Button>
                <Button variant="secondary" size="lg">
                  Request Demo
                </Button>
              </div>
              
              <div className="mt-8 text-sm text-gray-500">
                ✓ No setup fees ✓ 30-day free trial ✓ 24/7 support ✓ Custom integration
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}