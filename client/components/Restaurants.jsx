"use client";

import { useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container, ProvideMoreSection } from ".";
import {
  ShoppingBagIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  TruckIcon,
  UserGroupIcon,
  ClockIcon,
  SparklesIcon,
  HeartIcon,
  CpuChipIcon,
  CalendarIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline';

export default function Restaurants() {
  const [hoveredService, setHoveredService] = useState(null);

  const solutions = [
    {
      id: 'boost-bookings',
      title: "Boost Bookings",
      description: "Smart online booking tools to fill more tables every day with seamless reservation management.",
      icon: CalendarIcon,
      gradient: 'from-red-400 via-orange-500 to-amber-600',
      features: ['Online reservations', 'Table management', 'Booking confirmations', 'Waitlist system'],
      stats: { value: '40%', label: 'More Bookings' }
    },
    {
      id: 'marketing-branding',
      title: "Marketing & Branding",
      description: "Social campaigns and promotions to attract new customers and build your restaurant brand.",
      icon: SparklesIcon,
      gradient: 'from-orange-400 via-red-500 to-pink-600',
      features: ['Social media campaigns', 'Brand strategy', 'Customer promotions', 'Digital advertising'],
      stats: { value: '24/7', label: 'Marketing' }
    },
    {
      id: 'menu-optimization',
      title: "Menu Optimization",
      description: "Focus on dishes that bring highest revenue and customer delight with data-driven insights.",
      icon: ShoppingBagIcon,
      gradient: 'from-amber-400 via-orange-500 to-red-600',
      features: ['Menu analytics', 'Pricing optimization', 'Popular dishes tracking', 'Revenue insights'],
      stats: { value: '50%', label: 'Revenue Up' }
    },
    {
      id: 'online-orders',
      title: "Online Orders",
      description: "Seamless delivery & pickup setup to increase revenue with integrated ordering systems.",
      icon: TruckIcon,
      gradient: 'from-pink-400 via-red-500 to-orange-600',
      features: ['Delivery integration', 'Pickup orders', 'Order tracking', 'Payment processing'],
      stats: { value: '3x', label: 'Orders' }
    },
    {
      id: 'analytics-insights',
      title: "Analytics & Insights",
      description: "Track sales trends, popular dishes, and customer feedback with comprehensive analytics dashboard.",
      icon: ChartBarIcon,
      gradient: 'from-red-400 via-pink-500 to-purple-600',
      features: ['Sales reports', 'Customer insights', 'Performance tracking', 'Trend analysis'],
      stats: { value: '360°', label: 'View' }
    },
    {
      id: 'staff-operations',
      title: "Staff & Operations",
      description: "Streamline kitchen & service workflows efficiently with smart operational tools.",
      icon: UserGroupIcon,
      gradient: 'from-orange-400 via-amber-500 to-yellow-600',
      features: ['Staff scheduling', 'Kitchen display', 'Order management', 'Performance tracking'],
      stats: { value: '35%', label: 'Efficiency' }
    }
  ];

  const caseStudies = [
    {
      title: "Local Diner Success",
      stat: "+40%",
      desc: "Bookings surged 40% through menu tweaks and social campaigns.",
      category: "Bookings",
      client: "Diner X",
      role: "Family Restaurant",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
      cta: "Read Story",
    },
    {
      title: "Pizzeria Growth",
      stat: "+50%",
      desc: "Revenue increased by 50% with online orders & targeted promotions.",
      category: "Revenue",
      client: "Pizza Y",
      role: "Italian Restaurant",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      cta: "Read Story",
    },
    {
      title: "Cafe Engagement",
      stat: "+35%",
      desc: "Repeat visits up by 35% thanks to loyalty programs.",
      category: "Engagement",
      client: "Cafe Z",
      role: "Coffee Shop",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      cta: "Read Story",
    },
  ];

  const faqs = [
    {
      q: "How do you attract more customers?",
      a: "We implement marketing strategies, optimize menus, and provide online ordering solutions.",
    },
    {
      q: "Do you help with delivery setup?",
      a: "Yes, we integrate delivery platforms and streamline order management.",
    },
    {
      q: "Can you improve our social media presence?",
      a: "Absolutely! Tailored campaigns and content strategies are provided.",
    },
  ];

  const trustedLogos = [
    "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    "https://cdn-icons-png.flaticon.com/512/732/732200.png",
    "https://cdn-icons-png.flaticon.com/512/732/732228.png",
    "https://cdn-icons-png.flaticon.com/512/732/732219.png",
  ];

  const Button = ({ children, className, ...props }) => (
    <button
      {...props}
      className={`rounded-lg font-semibold shadow-md transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <Navbar />

      {/* HERO */}
      <Section className="pt-32 pb-20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
                <HeartIcon className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-red-800 font-semibold text-sm">Restaurant Growth Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Grow Your
                </span>
                <br />
                <span className="text-gray-900">Restaurant Faster</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Tools, marketing, and strategies to boost bookings, revenue, and customer engagement with cutting-edge digital solutions.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-2 border-red-100">
                  <div className="text-3xl font-bold text-red-600">40%</div>
                  <div className="text-xs text-gray-600 mt-1">Bookings Growth</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-2 border-orange-100">
                  <div className="text-3xl font-bold text-orange-600">50%</div>
                  <div className="text-xs text-gray-600 mt-1">Revenue Boost</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border-2 border-amber-100">
                  <div className="text-3xl font-bold text-amber-600">24/7</div>
                  <div className="text-xs text-gray-600 mt-1">Support</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Get Started Today
                </Button>
                <Button className="border-2 border-red-600 text-red-700 hover:bg-red-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                  View Case Studies
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl p-8 shadow-2xl border-4 border-white">
                {/* Feature Cards Floating */}
                <div className="space-y-4">
                  <Card animationDelay={0} className="!bg-white">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <CalendarIcon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">Smart Bookings</div>
                        <div className="text-sm text-gray-600">Online reservations</div>
                      </div>
                      <div className="text-red-600 font-bold">Active</div>
                    </div>
                  </Card>

                  <Card animationDelay={0.1} className="!bg-white">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                        <TruckIcon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">Online Orders</div>
                        <div className="text-sm text-gray-600">152 orders today</div>
                      </div>
                      <div className="text-orange-600 font-bold">+50%</div>
                    </div>
                  </Card>

                  <Card animationDelay={0.2} className="!bg-white">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-red-600 rounded-xl flex items-center justify-center">
                        <ChartBarIcon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">Analytics</div>
                        <div className="text-sm text-gray-600">Real-time insights</div>
                      </div>
                      <div className="text-amber-600 font-bold">Live</div>
                    </div>
                  </Card>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-red-500 to-orange-600 text-white px-6 py-3 rounded-full shadow-xl font-bold transform rotate-12">
                  <div className="text-center">
                    <div className="text-2xl">🍽️</div>
                    <div className="text-xs">Top Rated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Solutions Section */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Digital Solutions for
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"> Restaurants</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to boost bookings, increase revenue, and deliver exceptional customer experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={solution.id}
                className="group relative p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-red-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                animationDelay={index * 100}
                onMouseEnter={() => setHoveredService(solution.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className="relative flex justify-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute top-6 right-6 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {solution.stats.value}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center relative z-10">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed relative z-10">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="space-y-3 relative z-10">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700 group/item">
                      <div className={`w-2 h-2 bg-gradient-to-r ${solution.gradient} rounded-full mr-3 group-hover/item:scale-125 transition-transform`}></div>
                      <span className="group-hover/item:text-red-700 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom label */}
                <div className="mt-6 pt-6 border-t border-gray-100 relative z-10">
                  <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                    Restaurant Solutions
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Provide More Section */}
      <ProvideMoreSection />

      {/* BENEFITS SUMMARY TABLE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Benefits Summary
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Problem
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Rocket Flow Solution
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Impact
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* Revenue & Orders */}
                <tr className="hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">Revenue & Orders</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">High commissions from delivery apps</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Automated Direct Ordering via Messenger</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-green-600 leading-relaxed font-bold">Increased profit margins</p>
                  </td>
                </tr>

                {/* Reservations */}
                <tr className="hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 transition-all duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">Reservations</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Costly no-shows</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Automated SMS Reminders with Confirmation</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-green-600 leading-relaxed font-bold">Slashes no-show rates</p>
                  </td>
                </tr>

                {/* Marketing */}
                <tr className="hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">Marketing</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Empty tables on slow weekdays</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Targeted Midweek Promotions</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-green-600 leading-relaxed font-bold">Drives footfall during off-peak</p>
                  </td>
                </tr>

                {/* Customer Service */}
                <tr className="hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 transition-all duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">Customer Service</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Staff overwhelmed with calls/DMs</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">24/7 AI-Powered Assistant</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-green-600 leading-relaxed font-bold">Frees up staff</p>
                  </td>
                </tr>

                {/* Customer Loyalty */}
                <tr className="hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">Customer Loyalty</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Low rate of repeat visits</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Automated Post-Dining Feedback & Offers</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-green-600 leading-relaxed font-bold">Increases retention & LTV</p>
                  </td>
                </tr>

                {/* High-Value Bookings */}
                <tr className="hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 transition-all duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">High-Value Bookings</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Disorganized party/catering inquiries</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Streamlined Forms for Events</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-green-600 leading-relaxed font-bold">Captures more high-ticket events</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TRUSTED SECTION */}
      <Section className="py-20 bg-gradient-to-br from-red-100 via-orange-50 to-amber-100 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <Container className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by
              <span className="block mt-2 bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                Restaurants Worldwide
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've helped dozens of restaurants grow revenue and bookings effectively with our tailored solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {trustedLogos.map((logo, i) => (
              <Card
                key={i}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border-2 border-gray-100 hover:border-red-200 transform hover:scale-110"
                animationDelay={i * 100}
              >
                <img
                  src={logo}
                  alt="Trusted logo"
                  className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* SUCCESS STORIES */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from restaurants that transformed their business with our solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {caseStudies.map((c, i) => (
              <Card
                key={i}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col border-2 border-gray-100 hover:border-red-200"
                animationDelay={i * 100}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    {c.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={c.logo}
                        alt={c.client}
                        className="w-10 h-10 rounded-full border-2 border-red-200"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">{c.client}</p>
                        <p className="text-sm text-gray-500">{c.role}</p>
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">{c.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{c.desc}</p>
                  </div>

                  <div className="flex justify-between items-center mt-4 gap-4">
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-100 rounded-xl p-4 text-center flex-1">
                      <p className="text-2xl font-extrabold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                        {c.stat}
                      </p>
                      <p className="text-xs font-medium text-gray-600 mt-1">
                        Improvement
                      </p>
                    </div>
                    <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-4 py-2 rounded-xl font-bold shadow-lg transform hover:scale-105 transition-all">
                      {c.cta}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>


      {/* FAQ */}
      <Section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our restaurant growth solutions
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {faqs.map((f, i) => (
              <Card
                key={i}
                className="p-8 bg-white border-2 border-gray-100 hover:border-red-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                animationDelay={i * 100}
              >
                <h4 className="font-bold text-xl mb-4 text-gray-900">{f.q}</h4>
                <p className="text-gray-600 leading-relaxed">{f.a}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
