"use client";

import { useState } from "react";
import {
  Navbar,
  Footer,
  Button,
  Card,
  Section,
  Container,
  ProvideMoreSection,
} from ".";
import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
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
  ComputerDesktopIcon,
  GlobeAltIcon,
  TicketIcon,
  MapIcon,
} from "@heroicons/react/24/outline";

export default function TravelBookingPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);

  // Travel Solutions
  // Travel Solutions (Rocket Flow for Travel Booking Companies)
  const solutions = [
    {
      id: "instant-inquiry",
      title: "Instant Tour Inquiry Handling",
      description:
        "Automatically respond to customer inquiries with brochures, itineraries, and pricing via social media or website forms, even after hours.",
      icon: GlobeAltIcon,
      gradient: "from-blue-500 via-indigo-600 to-purple-700",
      features: [
        "Auto-reply with brochures",
        "Instant lead qualification",
        "24/7 response",
      ],
      stats: { value: "100%", label: "No Missed Leads" },
    },
    {
      id: "traveler-segmentation",
      title: "Smart Traveler Segmentation",
      description:
        "Organize leads automatically by destination interest, travel type, and booking stage to personalize follow-ups and campaigns.",
      icon: UsersIcon,
      gradient: "from-indigo-500 via-purple-600 to-pink-700",
      features: [
        "Destination tags",
        "Travel type classification",
        "Funnel stage tracking",
      ],
      stats: { value: "5x", label: "Targeted Marketing Efficiency" },
    },
    {
      id: "nurturing-predeparture",
      title: "Automated Nurturing & Pre-Departure",
      description:
        "Guide clients from inquiry to departure with automated emails and SMS sequences, including pre-travel checklists and reminders.",
      icon: CalendarIcon,
      gradient: "from-purple-500 via-pink-600 to-rose-700",
      features: [
        "Lead nurturing sequences",
        "Pre-departure reminders",
        "Post-booking follow-ups",
      ],
      stats: { value: "95%", label: "Booking Conversion Rate" },
    },
    {
      id: "custom-visa",
      title: "Custom Tour & Visa Automation",
      description:
        "Collect client information for custom tours and visa processing automatically and notify relevant agents instantly.",
      icon: BriefcaseIcon,
      gradient: "from-cyan-500 via-blue-600 to-indigo-700",
      features: [
        "Custom tour forms",
        "Visa document collection",
        "Automated confirmations",
      ],
      stats: { value: "90%", label: "Operational Efficiency" },
    },
    {
      id: "payments-reminders",
      title: "Automated Payments & Reminders",
      description:
        "Send automated payment reminders, flight alerts, and visa updates via SMS and email to reduce manual follow-ups.",
      icon: CurrencyDollarIcon,
      gradient: "from-blue-600 via-cyan-600 to-teal-700",
      features: [
        "Payment reminders",
        "Flight & visa alerts",
        "Timely notifications",
      ],
      stats: { value: "85%", label: "Faster Payments" },
    },
    {
      id: "targeted-campaigns",
      title: "Targeted Campaigns & Offers",
      description:
        "Send personalized offers, last-minute deals, and promotions to relevant travelers using smart segmentation and analytics.",
      icon: ChartBarIcon,
      gradient: "from-violet-500 via-purple-600 to-fuchsia-700",
      features: [
        "Segmented campaigns",
        "Last-minute deal blasts",
        "Marketing insights",
      ],
      stats: { value: "4x", label: "Booking Rate Increase" },
    },
    {
      id: "ai-travel-desk",
      title: "24/7 AI-Powered Travel Desk",
      description:
        "Provide instant answers to common travel questions, freeing agents to focus on complex itineraries and closing sales.",
      icon: CogIcon,
      gradient: "from-indigo-500 via-blue-600 to-cyan-700",
      features: [
        "AI-powered FAQs",
        "Round-the-clock assistance",
        "Consistent info",
      ],
      stats: { value: "99%", label: "Customer Satisfaction" },
    },
    {
      id: "communication-hub",
      title: "Unified Traveler Communication Hub",
      description:
        "Manage all traveler interactions—from initial inquiry to post-trip feedback—in one organized dashboard.",
      icon: ComputerDesktopIcon,
      gradient: "from-pink-500 via-red-600 to-orange-700",
      features: [
        "Complete client history",
        "Team collaboration",
        "Professional service consistency",
      ],
      stats: { value: "100%", label: "Operational Control" },
    },
  ];

  // Benefits
  const benefits = [
    {
      icon: GlobeAltIcon,
      title: "Global Coverage",
      description: "Book flights, hotels, and tours worldwide",
      metric: "200+ Countries",
      color: "blue",
    },
    {
      icon: BoltIcon,
      title: "Fast Booking",
      description: "Instant confirmation and easy payments",
      metric: "5min average booking",
      color: "indigo",
    },
    {
      icon: ShieldCheckIcon,
      title: "Safe & Secure",
      description: "Protected payments and verified providers",
      metric: "Trusted by millions",
      color: "purple",
    },
    {
      icon: UsersIcon,
      title: "Customer Support",
      description: "24/7 travel assistance and helpdesk",
      metric: "Always available",
      color: "violet",
    },
  ];

  // Features
  const features = [
    {
      title: "Flight Search & Booking",
      description: "Quickly find and book flights at the best prices",
      icon: GlobeAltIcon,
      stats: ["Instant confirmation", "Price alerts", "Multi-airline options"],
    },
    {
      title: "Hotel & Stay Management",
      description: "Seamless hotel bookings for any budget",
      icon: BuildingOfficeIcon,
      stats: ["Verified listings", "Flexible dates", "Special offers"],
    },
    {
      title: "Tour Packages & Itineraries",
      description: "Curated travel experiences for any traveler",
      icon: TicketIcon,
      stats: ["All-inclusive", "Local guides", "Customizable plans"],
    },
    {
      title: "Travel Assistance & Insurance",
      description: "24/7 support and trip protection services",
      icon: ShieldCheckIcon,
      stats: ["Emergency support", "Insurance coverage", "Travel tips"],
    },
  ];

  // Travel Case Studies
  const caseStudies = [
    {
      company: "Adventure Travels",
      industry: "Tour Operator",
      challenge: "High manual booking load and customer queries",
      solution: "Integrated AI travel assistant and automated booking system",
      results: [
        "50% faster booking",
        "Reduced customer wait time",
        "Increased repeat customers",
      ],
      logo: "AT",
    },
    {
      company: "Global Trips",
      industry: "Online Travel Agency",
      challenge: "Inconsistent booking confirmations and travel advice",
      solution:
        "Implemented automated confirmations and real-time travel insights",
      results: [
        "99% booking accuracy",
        "24/7 support implemented",
        "Customer satisfaction +30%",
      ],
      logo: "GT",
    },
  ];

  const stats = [
    { number: "1M+", label: "Trips Booked", icon: TicketIcon },
    { number: "500K+", label: "Hotels Listed", icon: BuildingOfficeIcon },
    { number: "99.9%", label: "Booking Success", icon: ShieldCheckIcon },
    { number: "24/7", label: "Travel Support", icon: ClockIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <Section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 border-4 border-blue-200 transform rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-indigo-200 transform -rotate-12"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 border-4 border-purple-200 transform rotate-12"></div>
          </div>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6 border border-blue-200">
                <GlobeAltIcon className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-900 font-semibold text-sm">
                  World-Class Travel Booking
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="text-gray-900">Plan Your</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Next Adventure
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Book flights, hotels, tours, and travel experiences worldwide
                with AI-powered automation and instant confirmations.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      Secure Payments
                    </div>
                    <div className="text-sm text-gray-600">
                      Trusted globally
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BoltIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Fast Booking</div>
                    <div className="text-sm text-gray-600">
                      Instant confirmations
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <UsersIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      Millions Served
                    </div>
                    <div className="text-sm text-gray-600">
                      Happy travelers worldwide
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">24/7 Support</div>
                    <div className="text-sm text-gray-600">
                      Always available
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                  Book Now
                </Button>
                <Button className="border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-600 hover:text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                  Explore Packages
                </Button>
              </div>
            </div>

            {/* Right visual placeholder (reuse same Card stack as original) */}
            <div className="relative">
              <div className="relative">
                <div className="space-y-4">
                  <Card
                    animationDelay={0}
                    className="!bg-gradient-to-br !from-blue-600 !to-indigo-700 !text-white"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-sm opacity-80 mb-1">
                          Trips This Month
                        </div>
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
                  </Card>
                  <div className="grid grid-cols-2 gap-4">
                    <Card
                      animationDelay={0.1}
                      className="border-2 border-indigo-100"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                        <UsersIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        98%
                      </div>
                      <div className="text-sm text-gray-600">
                        Traveler Satisfaction
                      </div>
                    </Card>
                    <Card
                      animationDelay={0.15}
                      className="border-2 border-purple-100"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                        <ClockIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        2min
                      </div>
                      <div className="text-sm text-gray-600">
                        Avg Booking Time
                      </div>
                    </Card>
                  </div>
                  <Card
                    animationDelay={0.2}
                    className="border-2 border-blue-100"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                        AI
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">
                          AI Travel Assistant Active
                        </div>
                        <div className="text-sm text-gray-600">
                          Helping 45 travelers now
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                        Live
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="absolute -top-8 -right-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold text-sm transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  ✈️ Ready for Travel
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Continue Features, Solutions, Benefits, Case Studies, CTA sections exactly same structure but replace content with travel-related content */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Suite for
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Travelers
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything a traveler needs in one powerful platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className={`cursor-pointer transition-all duration-300 border-2 ${
                  activeFeature === index
                    ? "bg-gradient-to-br from-blue-50 to-indigo-50 border-indigo-300 scale-105"
                    : "border-gray-200 hover:border-indigo-200"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      <span className="text-gray-700">{stat}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Travel Solutions
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                For Every Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered travel tools for smooth and hassle-free trips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={solution.id}
                className={`relative p-8 rounded-3xl bg-white border-2 shadow-xl hover:shadow-2xl transition-all duration-500 transform overflow-hidden group ${
                  hoveredService === solution.id
                    ? "border-indigo-300 scale-105 -translate-y-2"
                    : "border-gray-200 hover:border-indigo-200"
                }`}
                onMouseEnter={() => setHoveredService(solution.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="absolute top-6 right-6 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                  {solution.stats.value}
                </div>

                <div
                  className={`relative w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                  {solution.description}
                </p>

                <div className="space-y-3 relative z-10">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${solution.gradient} rounded-full flex-shrink-0`}
                      ></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 relative z-10">
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {solution.stats.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <ProvideMoreSection />

      {/* Benefits & Stats */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Travelers
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Love Us
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Millions trust us for hassle-free bookings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                animationDelay={index * 0.1}
                className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br from-${benefit.color}-500 to-${benefit.color}-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div
                  className={`inline-block px-4 py-2 bg-${benefit.color}-100 text-${benefit.color}-700 rounded-full text-sm font-bold`}
                >
                  {benefit.metric}
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <ProvideMoreSection />

      <Footer />
    </div>
  );
}
