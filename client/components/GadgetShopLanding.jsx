'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, Footer, Button, Card, Section, Container, ShinyText } from '.';
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CameraIcon,
  SpeakerWaveIcon,
  ClockIcon,
  TvIcon,
  HeartIcon,
  ShoppingCartIcon,
  StarIcon,
  TruckIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  BoltIcon,
  WifiIcon,
  Battery100Icon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  ChartBarSquareIcon,
  MegaphoneIcon,
  Cog6ToothIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';

export default function GadgetShopLanding() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const services = [
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      description: 'Build engaging content and grow your gadget brand on all platforms',
      icon: ChatBubbleLeftRightIcon,
      count: '300% Growth',
      color: 'from-coral-500 to-red-400'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Optimization',
      description: 'Optimize your online store for maximum conversions and sales',
      icon: ComputerDesktopIcon,
      count: '150% Sales Boost',
      color: 'from-blue-500 to-indigo-400'
    },
    {
      id: 'content-creation',
      title: 'Product Photography',
      description: 'Professional product shoots and video content creation',
      icon: CameraIcon,
      count: '500+ Shoots',
      color: 'from-purple-500 to-pink-400'
    },
    {
      id: 'influencer',
      title: 'Influencer Partnerships',
      description: 'Connect with tech influencers and brand ambassadors',
      icon: MegaphoneIcon,
      count: '1000+ Influencers',
      color: 'from-green-500 to-emerald-400'
    },
    {
      id: 'automation',
      title: 'Marketing Automation',
      description: 'Automate email campaigns, inventory alerts, and customer follow-ups',
      icon: Cog6ToothIcon,
      count: '24/7 Automation',
      color: 'from-orange-500 to-amber-400'
    },
    {
      id: 'analytics',
      title: 'Performance Analytics',
      description: 'Track sales, customer behavior, and marketing ROI in real-time',
      icon: PresentationChartLineIcon,
      count: 'Real-time Data',
      color: 'from-teal-500 to-cyan-400'
    }
  ];

  const successStories = [
    {
      id: 1,
      name: 'TechZone Store',
      result: '400% Revenue Growth',
      timeframe: 'In 6 Months',
      image: '/logo-red-bg.jpg',
      rating: 4.9,
      reviews: 'Client Success',
      badge: 'Success Story',
      features: ['Social Media Marketing', 'E-commerce Optimization', 'Influencer Partnerships']
    },
    {
      id: 2,
      name: 'GadgetHub Pro',
      result: '250% Online Sales',
      timeframe: 'In 4 Months',
      image: '/signinlog.png',
      rating: 4.8,
      reviews: 'Client Success',
      badge: 'Featured',
      features: ['Content Creation', 'SEO Optimization', 'Marketing Automation']
    },
    {
      id: 3,
      name: 'ElectroWorld',
      result: '300% Brand Awareness',
      timeframe: 'In 3 Months',
      image: '/logo.png',
      rating: 4.7,
      reviews: 'Client Success',
      badge: 'Trending',
      features: ['Influencer Marketing', 'Video Content', 'Social Media Growth']
    },
    {
      id: 4,
      name: 'MobileMax',
      result: '500% Social Engagement',
      timeframe: 'In 2 Months',
      image: '/iphone15progray.jpg',
      rating: 4.6,
      reviews: 'Client Success',
      badge: 'Rapid Growth',
      features: ['Viral Campaigns', 'Community Building', 'Customer Retention']
    }
  ];

  const features = [
    {
      icon: TruckIcon,
      title: 'Fast Results',
      description: 'See growth within 30 days'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Guaranteed ROI',
      description: 'Money-back guarantee on campaigns'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Transparent Pricing',
      description: 'No hidden fees, clear pricing structure'
    },
    {
      icon: BoltIcon,
      title: '24/7 Support',
      description: 'Dedicated account manager support'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-20 pb-16 bg-gradient-to-br from-coral-50 via-orange-50 to-red-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <ShinyText className="text-coral-600 font-semibold text-sm uppercase tracking-wider">
                  RocketFlow for Gadget Retailers
                </ShinyText>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Grow Your <span className="text-coral-500">Gadget Shop</span> with 
                  <br />
                  Smart <span className="text-coral-500">Marketing</span> Solutions
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your gadget store into a thriving business with our comprehensive marketing strategies, 
                  social media management, and e-commerce optimization services.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="bg-coral-500 hover:bg-coral-600"
                >
                  <ShoppingCartIcon className="w-5 h-5 mr-2 inline-block" />
                   Grow Now
                </Button>
                <Button variant="outline" size="lg" className="border-coral-500 text-coral-600 hover:bg-coral-50">
                  View Our Services
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 bg-coral-100 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span>500+ Gadget Shops Served</span>
                </div>
                <div className="flex items-center space-x-1">
                  <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9</span>
                  <span>(1,200+ Success Stories)</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
                <div className="relative aspect-video">
                  {/* YouTube Embedded Video */}
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/FoK_k-iJiVw?si=RGCxOMd31lAQmmL2&autoplay=1&mute=1&loop=1&playlist=FoK_k-iJiVw&controls=1&modestbranding=1&rel=0"
                    title="RocketFlow Success Stories - Gadget Shop Growth"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  
                  {/* Fallback image overlay for loading state */}
                  <div className="absolute inset-0 bg-gray-900 flex items-center justify-center opacity-0 transition-opacity duration-500 pointer-events-none">
                    <Image 
                      src="/techsho.png" 
                      alt="Success Stories Preview" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* YouTube branding indicator */}
                  <div className="absolute top-4 right-4 z-20 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold shadow-lg">
                    YouTube
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-coral-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-400 rounded-full opacity-20"></div>
              
              {/* Floating feature badges */}
              <div className="absolute top-4 left-4 z-20">
                <div className="bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Client Success
                </div>
              </div>
              <div className="absolute top-16 left-4 z-20">
                <div className="bg-white/90 backdrop-blur-sm text-coral-600 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  TechZone Store
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Bar */}
      <Section className="py-8 bg-gray-50 border-y">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-coral-100 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-coral-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{feature.title}</p>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Categories Section */}
      <Section className="py-20">
        <Container>
          <div className="text-center space-y-4 mb-16">
            <ShinyText className="text-coral-600 font-semibold text-sm uppercase tracking-wider">
              Our Marketing Services
            </ShinyText>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Comprehensive <span className="text-coral-500">Growth Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From social media management to e-commerce optimization, we provide everything your gadget shop needs to thrive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl border-0 ${
                  hoveredCategory === service.id ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCategory(service.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="p-8 text-center space-y-6">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-coral-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-sm font-semibold text-coral-600">
                      {service.count}
                    </p>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-coral-500 text-coral-600 hover:bg-coral-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Products */}
      <Section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center space-y-4 mb-16">
            <ShinyText className="text-coral-600 font-semibold text-sm uppercase tracking-wider">
              Client Success Stories
            </ShinyText>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Proven <span className="text-coral-500">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we've helped gadget retailers achieve remarkable growth and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStories.map((story) => (
              <Card
                key={story.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl overflow-hidden ${
                  hoveredProduct === story.id ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredProduct(story.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative">
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <Image 
                      src={story.image} 
                      alt={story.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {story.badge && (
                    <div className="absolute top-3 left-3 bg-coral-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {story.badge}
                    </div>
                  )}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <HeartIcon className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-coral-600 transition-colors mb-2">
                      {story.name}
                    </h3>
                    <div className="flex items-center space-x-1 mb-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(story.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({story.reviews})</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {story.features.map((feature, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-coral-600">{story.result}</span>
                        <span className="text-sm text-gray-500">{story.timeframe}</span>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-coral-500 hover:bg-coral-600 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ShoppingCartIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-coral-500 text-coral-600 hover:bg-coral-500 hover:text-white">
              View All Success Stories
            </Button>
          </div>
        </Container>
      </Section>

      {/* Tech Specs Section */}
      <Section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <ShinyText className="text-coral-600 font-semibold text-sm uppercase tracking-wider">
                  Why Choose Us
                </ShinyText>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Marketing Excellence <span className="text-coral-500">Guaranteed</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We partner with successful gadget retailers to deliver proven marketing strategies 
                  that drive real growth and measurable results for your business.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: ShieldCheckIcon, title: 'Proven Strategies', desc: 'Marketing methods tested across 500+ gadget stores' },
                  { icon: BoltIcon, title: 'Rapid Implementation', desc: 'Go live with campaigns within 48 hours' },
                  { icon: WifiIcon, title: 'Digital Expertise', desc: 'Complete online presence optimization' },
                  { icon: Battery100Icon, title: 'Sustainable Growth', desc: 'Long-term strategies for lasting success' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-coral-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-coral-500 to-red-500 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <SparklesIcon className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Growth Partnership</h3>
                  </div>
                  <p className="text-coral-100">
                    Partner with RocketFlow for comprehensive marketing solutions that scale your 
                    gadget business to new heights.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Complete marketing strategy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Dedicated account manager</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Performance tracking & reporting</span>
                    </div>
                  </div>
                  <Button variant="secondary" className="bg-white text-coral-600 hover:bg-coral-50">
                    Start Partnership
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-r from-coral-500 to-red-500">
        <Container>
          <div className="text-center text-white space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Grow Your Gadget Business?
            </h2>
            <p className="text-xl text-coral-100 max-w-2xl mx-auto">
              Join hundreds of successful gadget retailers who have transformed their businesses 
              with our proven marketing strategies and growth solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-coral-600 hover:bg-coral-50">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-coral-600">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}