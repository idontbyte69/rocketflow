'use client'

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container, ShinyText, ProvideMoreSection } from '.';
import {
  ArrowRightIcon,
  ArrowPathIcon,
  VideoCameraIcon,
  PlayCircleIcon,
  UserCircleIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  PuzzlePieceIcon,
  InboxIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function TutorialPage() {
  const [activeVideo, setActiveVideo] = useState('admin-login');
  const [activeFaq, setActiveFaq] = useState(null);

  const tutorialSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Begin your journey with RocketFlow',
      icon: RocketLaunchIcon,
      videos: [
        {
          id: 'quick-setup',
          title: 'Quick Setup Guide',
          description: 'Set up your RocketFlow account in minutes',
          duration: '5:30',
          videoUrl: 'https://www.youtube.com/embed/your-video-id-1',
          steps: [
            'Create your account',
            'Configure basic settings',
            'Customize your workspace',
            'Add team members'
          ]
        },
        {
          id: 'basic-navigation',
          title: 'Dashboard Navigation',
          description: 'Learn to navigate the RocketFlow interface',
          duration: '4:45',
          videoUrl: 'https://www.youtube.com/embed/your-video-id-2',
          steps: [
            'Understanding the dashboard layout',
            'Using the navigation menu',
            'Accessing key features',
            'Customizing your dashboard view'
          ]
        }
      ]
    },
    {
      id: 'inbox-automation',
      title: 'Inbox Automation',
      description: 'Streamline your communication workflow',
      icon: InboxIcon,
      videos: [
        {
          id: 'auto-replies',
          title: 'Setting Up Auto-Replies',
          description: 'Configure automated responses',
          duration: '6:15',
          videoUrl: 'https://www.youtube.com/embed/your-video-id-3',
          steps: [
            'Access auto-reply settings',
            'Create response templates',
            'Set trigger conditions',
            'Test and activate auto-replies',
            'Monitor performance'
          ]
        },
        {
          id: 'message-routing',
          title: 'Message Routing Rules',
          description: 'Create smart inbox filtering rules',
          duration: '7:30',
          videoUrl: 'https://www.youtube.com/embed/your-video-id-4',
          steps: [
            'Understanding routing logic',
            'Creating filter conditions',
            'Setting up priority rules',
            'Configuring destination folders',
            'Managing rule exceptions'
          ]
        }
      ]
    },
    {
      id: 'advanced-workflows',
      title: 'Advanced Workflows',
      description: 'Create sophisticated automation workflows',
      icon: ArrowPathIcon,
      videos: [
        {
          id: 'workflow-builder',
          title: 'Workflow Builder Tutorial',
          description: 'Learn to create custom workflows',
          duration: '8:45',
          videoUrl: 'https://www.youtube.com/embed/your-video-id-5',
          steps: [
            'Access the workflow builder',
            'Design workflow structure',
            'Add automation triggers',
            'Configure action steps',
            'Test and deploy workflow'
          ]
        },
        {
          id: 'conditional-logic',
          title: 'Conditional Logic',
          description: 'Add logic to your workflows',
          duration: '10:20',
          videoUrl: 'https://www.youtube.com/embed/your-video-id-6',
          steps: [
            'Understanding if-then conditions',
            'Setting up decision points',
            'Creating branching paths',
            'Implementing loop logic',
            'Testing complex workflows'
          ]
        }
      ]
    },
    {
      id: 'analytics',
      title: 'Analytics & Reports',
      description: 'Track and analyze your performance',
      icon: ChartBarIcon,
      videos: [
        {
          id: 'basic-analytics',
          title: 'Basic Analytics Overview',
          description: 'Understanding key metrics',
          duration: '6:30',
          videoUrl: 'https://www.youtube.com/embed/your-video-id-7',
          steps: [
            'Navigate to analytics dashboard',
            'Understand key performance metrics',
            'Analyze trend graphs',
            'Export basic reports',
            'Set up metric alerts'
          ]
        },
        {
          id: 'custom-reports',
          title: 'Custom Report Creation',
          description: 'Build tailored reports',
          duration: '9:15',
          videoUrl: 'https://www.youtube.com/embed/your-video-id-8',
          steps: [
            'Access report builder',
            'Select data sources and metrics',
            'Configure visualization options',
            'Add filters and parameters',
            'Schedule automated reports'
          ]
        }
      ]
    },
    {
      id: 'integrations',
      title: 'Integrations',
      description: 'Connect with your favorite tools',
      icon: PuzzlePieceIcon,
      videos: [
        {
          id: 'zapier-integration',
          title: 'Zapier Integration',
          description: 'Connect with 1000+ apps',
          duration: '7:45',
          videoUrl: 'https://www.youtube.com/embed/your-video-id-9',
          steps: [
            'Create Zapier account',
            'Connect RocketFlow with Zapier',
            'Choose trigger and action apps',
            'Configure integration rules',
            'Test and activate Zap'
          ]
        },
        {
          id: 'api-setup',
          title: 'API Setup Guide',
          description: 'Custom integration setup',
          duration: '11:30',
          videoUrl: 'https://www.youtube.com/embed/your-video-id-10',
          steps: [
            'Generate API credentials',
            'Read API documentation',
            'Test endpoints in Postman',
            'Implement authentication',
            'Monitor API usage'
          ]
        }
      ]
    },
    
  ];

  const faqItems = [
    {
      id: 1,
      question: "How do I connect my Facebook or Instagram account?",
      answer: "To connect your social media accounts, go to Settings > Integrations and click on the social media platform you want to connect. Follow the authentication steps to link your account securely."
    },
    {
      id: 2,
      question: "Can I automate replies to common questions?",
      answer: "Yes! You can set up automated responses in the Auto-Reply section. Create custom rules based on keywords, time of day, or specific customer segments for efficient communication."
    },
    {
      id: 3,
      question: "Is my data safe?",
      answer: "Absolutely. We use industry-standard encryption and security measures to protect your data. All information is stored in secure servers with regular backups and compliance with privacy regulations."
    },
    {
      id: 4,
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start. You can upgrade to a paid plan at any time during or after the trial."
    },
    {
      id: 5,
      question: "How can I customize my landing pages?",
      answer: "Our landing page builder offers drag-and-drop functionality. Access the Page Builder from your dashboard, choose a template, and customize colors, images, and content to match your brand."
    },
    {
      id: 6,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions."
    }
  ];

  const securityTips = [
    {
      title: 'Secure Password Practices',
      description: 'Use strong passwords and enable two-factor authentication',
      icon: ShieldCheckIcon
    },
    {
      title: 'Regular Updates',
      description: 'Keep your admin credentials updated every 90 days',
      icon: ArrowRightIcon
    },
    {
      title: 'Access Management',
      description: 'Learn to manage team member access levels',
      icon: UserCircleIcon
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-red-50 via-white to-gray-50 pt-32 pb-24 relative overflow-hidden">
        <Container>
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-red-100/30 to-red-200/30 blur-3xl transform rotate-12" />
            <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-red-100/30 to-red-200/30 blur-3xl transform -rotate-12" />
          </div>

          <div className="relative text-center">
            <div className="inline-block mb-4 px-6 py-2 bg-red-100/50 backdrop-blur-sm rounded-full">
              <ShinyText className="text-xl font-semibold text-red-400">RocketFlow Tutorials</ShinyText>
            </div>
            
            <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              Master Your Business
              <span className="block mt-2">With Our Tutorial Guide</span>
            </h1>

            <p className="mt-8 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Comprehensive tutorials on admin login and landing page management. 
              <span className="block mt-2 font-medium text-red-400">
                Learn how to effectively manage your RocketFlow dashboard and create stunning landing pages.
              </span>
            </p>

            <div className="mt-12 flex items-center justify-center gap-6">
              <Button variant="white" className="bg-red-400  text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300">
                Get Started
              </Button>
              <Button variant="white-outline" className="border-2 border-red-200 text-red-400 px-8 py-3 rounded-full hover:border-red-300 transition-all duration-300">
                Watch Demo
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-red-400" />
                <span className="text-gray-600">Step by Step Guide</span>
              </div>
              <div className="flex items-center space-x-2">
                <VideoCameraIcon className="w-5 h-5 text-red-400" />
                <span className="text-gray-600">Video Tutorials</span>
              </div>
              <div className="flex items-center space-x-2">
                <DocumentTextIcon className="w-5 h-5 text-red-400" />
                <span className="text-gray-600">Documentation</span>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-red-100/50">
                <div className="text-4xl font-bold text-red-400">50+</div>
                <div className="mt-2 text-sm font-medium text-gray-600">Video Tutorials</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-red-100/50">
                <div className="text-4xl font-bold text-red-400">10k+</div>
                <div className="mt-2 text-sm font-medium text-gray-600">Active Users</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-red-100/50">
                <div className="text-4xl font-bold text-red-400">24/7</div>
                <div className="mt-2 text-sm font-medium text-gray-600">Support Available</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-red-100/50">
                <div className="text-4xl font-bold text-red-400">98%</div>
                <div className="mt-2 text-sm font-medium text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Tutorial Navigation and Content Section */}
      <Section className="py-16 bg-gradient-to-br from-white via-red-50/10 to-gray-50 relative">
        <Container>
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-red-100/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-red-100/20 rounded-full blur-3xl" />
          </div>
          
          <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Section Navigation Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                {tutorialSections.map((section) => (
                  <Card
                    key={section.id}
                    className={`cursor-pointer transition-all duration-300 border backdrop-blur-sm shadow-sm ${
                      activeVideo.startsWith(section.id) 
                        ? 'bg-gradient-to-r from-red-50/90 to-white border-red-500 shadow-red-500/10'
                        : 'bg-white/70 border-gray-100 hover:bg-red-50/50 hover:border-red-200 hover:shadow-md hover:shadow-red-500/5'
                    }`}
                    onClick={() => setActiveVideo(section.videos[0].id)}
                  >
                    <div className="p-4 flex items-center space-x-3">
                      <div className={`rounded-xl p-3 ${
                        activeVideo.startsWith(section.id) 
                          ? 'bg-gradient-to-br from-red-100 to-red-50' 
                          : 'bg-gray-50'
                      }`}>
                        <section.icon className={`w-6 h-6 ${
                          activeVideo.startsWith(section.id) ? 'text-red-600' : 'text-gray-500'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`font-semibold ${
                          activeVideo.startsWith(section.id) ? 'text-red-600' : 'text-gray-900'
                        }`}>
                          {section.title}
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">{section.description}</p>
                      </div>
                    </div>

                    {/* Subsection Videos */}
                    {activeVideo.startsWith(section.id) && (
                      <div className="mt-2 pl-11 pr-4 pb-3 space-y-2">
                        {section.videos.map((video) => (
                          <div
                            key={video.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveVideo(video.id);
                            }}
                            className={`rounded-lg p-2 cursor-pointer ${
                              activeVideo === video.id 
                                ? 'bg-white shadow-sm' 
                                : 'hover:bg-white/50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className={`text-sm ${
                                activeVideo === video.id ? 'text-red-600 font-medium' : 'text-gray-700'
                              }`}>
                                {video.title}
                              </span>
                              <span className="text-xs text-gray-500">
                                {video.duration}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <div className="h-full">
                {/* Video Player */}
                <div className="aspect-video w-full rounded-t-xl overflow-hidden bg-gray-100">
                  <iframe
                    className="w-full h-full"
                    src={tutorialSections
                      .flatMap(section => section.videos)
                      .find(v => v.id === activeVideo)?.videoUrl}
                    title="Tutorial Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Video Content */}
                <div className="p-8">
                  {(() => {
                    const currentVideo = tutorialSections
                      .flatMap(section => section.videos)
                      .find(v => v.id === activeVideo);
                    
                    const currentSection = tutorialSections
                      .find(section => section.videos.some(v => v.id === activeVideo));

                    return (
                      <>
                        <div className="flex items-center space-x-2 text-sm text-red-600 mb-4">
                          <span>{currentSection?.title}</span>
                          <ArrowRightIcon className="w-4 h-4" />
                          <span>{currentVideo?.title}</span>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900">
                          {currentVideo?.title}
                        </h2>
                        <p className="mt-3 text-gray-600 text-lg">
                          {currentVideo?.description}
                        </p>

                        {currentVideo?.steps && (
                          <div className="mt-8">
                            <h3 className="font-semibold text-gray-900 mb-4">Step-by-Step Guide:</h3>
                            <div className="space-y-3">
                              {currentVideo.steps.map((step, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                    <span className="text-sm font-medium text-green-600">{index + 1}</span>
                                  </div>
                                  <span className="text-gray-700">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      {/* Security Tips Section */}
      <Section className="pt-24 pb-24 bg-gradient-to-br from-red-50 via-white to-gray-50 relative">
        <Container>
          {/* Decorative background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-100/30 rounded-full blur-3xl transform -rotate-12" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-100/30 rounded-full blur-3xl transform rotate-12" />
          </div>
          
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-red-100/50 backdrop-blur-sm rounded-full mb-4">
              <span className="text-red-600 font-semibold">Stay Secure</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security Best Practices</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Important security guidelines to keep your admin dashboard protected and secure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityTips.map((tip, index) => (
              <Card 
                key={index} 
                className="p-8 backdrop-blur-sm bg-white/70 border border-gray-100 hover:shadow-xl hover:shadow-red-500/5 hover:border-red-100 transition-all duration-300"
              >
                <div className="rounded-2xl w-16 h-16 bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center mb-6">
                  <tip.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                <div className="mt-6 flex items-center text-red-600 font-medium">
                  <span>Learn more</span>
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="py-24 bg-gradient-to-br from-white via-red-50/10 to-white relative">
        <Container>
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl transform rotate-45" />
            <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl transform -rotate-45" />
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-red-100/50 backdrop-blur-sm rounded-full mb-4">
                <span className="text-red-600 font-semibold">Got Questions?</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find quick answers to common questions about RocketFlow's features and capabilities
              </p>
            </div>
            <div className="space-y-4 relative">
              {faqItems.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-gray-100 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-red-50 transition-colors duration-200"
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    <span className="ml-6 flex-shrink-0">
                      <svg
                        className={`w-6 h-6 text-red-500 transform transition-transform duration-200 ${
                          activeFaq === faq.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-200 ease-in-out ${
                      activeFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Help & Support Section */}
      <Section className="py-24 bg-red-50 relative overflow-hidden">
        <Container>
          <div className="bg-red-400 rounded-3xl px-8 py-20 sm:p-20 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-1/2 -right-1/4 w-96 h-96  rounded-full blur-3xl" />
              <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96  rounded-full blur-3xl" />
            </div>
            
            <div className="relative mx-auto max-w-2xl text-center">
              <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <span className="text-white font-semibold">24/7 Support Available</span>
              </div>
              
              <h2 className="text-4xl font-bold tracking-tight text-white mb-6">Need Additional Help?</h2>
              <p className="mx-auto max-w-xl text-lg leading-8 text-red-50">
                Our expert support team is available around the clock to assist you with any questions about the admin dashboard or landing pages.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button variant="white" className="w-full sm:w-auto bg-white text-red-600 px-8 py-3 rounded-full hover:bg-red-50 transition-all duration-300">
                  <span className="flex items-center justify-center">
                    <UserCircleIcon className="w-5 h-5 mr-2" />
                    Contact Support
                  </span>
                </Button>
                <Button variant="white-outline" className="w-full sm:w-auto border-2 border-white/20 text-white px-8 py-3 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <span className="flex items-center justify-center">
                    <DocumentTextIcon className="w-5 h-5 mr-2" />
                    View Documentation
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Provide More Section */}
      {/* <ProvideMoreSection /> */}

      <Footer />
    </main>
  );
}