"use client";

import { useState } from "react";
import {
  Navbar,
  Footer,
  Button,
  Card,
  Section,
  Container,
  ShinyText,
  ProvideMoreSection,
} from ".";
// Heroicons import
import {
  GlobeAltIcon,
  BuildingOfficeIcon,
  TicketIcon,
  MapIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
  ComputerDesktopIcon,
  BoltIcon,
  StarIcon,
  BriefcaseIcon,
  CogIcon,
  CheckCircleIcon,
  SparklesIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

// FontAwesome import
import {
  FaPlane,
  FaHotel,
  FaMapMarkedAlt,
  FaChartLine,
  FaUsers,
  FaSuitcaseRolling,
  FaMoneyCheckAlt,
  FaRocket,
  FaStar,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function TravelBookingPage() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  // Replace travelFeatures with the user's 9 actionable items
  const travelFeatures = [
    {
      id: "instant-inquiry",
      title: "Instant Tour Package Inquiry Handling",
      description:
        "Auto-reply with brochures for keywords (Thailand, Sajek, Umrah) and instant lead qualification.",
      bullets: [
        "Auto-reply with brochures for keywords",
        "Instant lead qualification with follow-up questions",
        "Example: DM details immediately after user comments",
      ],
      icon: FaPlane,
    },
    {
      id: "segmentation",
      title: "Smart Traveler Segmentation",
      description:
        "Automatically tag leads by destination, type, and funnel stage for targeted marketing.",
      bullets: [
        "Destination, trip-type and funnel tagging",
        "Create targeted marketing lists",
        "Analyze travel trends and personalize offers",
      ],
      icon: ChartBarIcon,
    },
    {
      
      id: "nurture",
      title: "Automated Traveler Nurturing & Pre-Departure Communication",
      description:
        "Lead nurturing sequences, pre-departure checklists and timely SMS reminders to improve conversions.",
      bullets: [
        "Lead nurture emails for non-bookers",
        "Pre-departure sequences: checklists, tickets, SMS reminders",
        "Convert inquiries to bookings",
      ],
      icon: RocketLaunchIcon,
    },
    {
      id: "custom-tour-visa",
      title: "Custom Tour & Visa Application Automation",
      description:
        "Collect tour requests and visa documents automatically, notify agents and confirm receipt to clients.",
      bullets: [
        "Collect custom tour requests and docs automatically",
        "Notify agents and confirm receipt",
        "Organize requests for efficiency",
      ],
      icon: GlobeAltIcon,
    },
    {
      id: "payments-reminders",
      title: "Automated Payment & Travel Reminders",
      description:
        "Payment reminders, flight reminders and visa status updates via SMS and email to improve cash flow and reduce anxiety.",
      bullets: [
        "Payment reminders via SMS/email",
        "Flight reminders & visa status updates",
        "Reduce traveler anxiety",
      ],
      icon: FaMoneyCheckAlt,
    },
    {
      id: "targeted-campaigns",
      title: "Targeted Tour & Offer Campaigns",
      description:
        "Segmented campaigns for Eid, Umrah, last-minute deals and other occasions to boost bookings and fill unsold spots.",
      bullets: [
        "Eid / Umrah / last-minute campaign flows",
        "Segmented offers to relevant audiences",
        "Higher ROI on marketing campaigns",
      ],
      icon: BuildingOfficeIcon,
    },
    {
      id: "ai-desk",
      title: "24/7 AI-Powered Travel Desk",
      description:
        "An AI assistant that answers hundreds of common travel questions instantly so agents can focus on complex itineraries.",
      bullets: [
        "Instant answers to common questions",
        "Agents focus on complex itineraries",
        "Consistent and accurate information",
      ],
      icon: UserGroupIcon,
    },
    {
      id: "analytics",
      title: "Business & Marketing Analytics",
      description:
        "Track popular tours, conversion rates and campaign performance to make data-driven decisions.",
      bullets: [
        "Identify popular tours by inquiry volume",
        "Track inquiry → booking conversion",
        "Optimize marketing spend",
      ],
      icon: ChartBarIcon,
    },
    {
      id: "unified-hub",
      title: "Unified Traveler Communication Hub",
      description:
        "Manage the entire traveler conversation — from first comment to post-trip feedback — in one dashboard.",
      bullets: [
        "Complete history of every client interaction",
        "Seamless handover between teams",
        "Deliver consistent professional service",
      ],
      icon: MapIcon,
    },
  ];

  // Summary rows for the solution table (user-provided mapping)
  const summaryRows = [
    { category: "Lead Conversion", problem: "High inquiry volume, low conversion rate", solution: "Instant Response & Automated Nurturing Sequences", impact: "Higher booking rates" },
    { category: "Sales Efficiency", problem: "Agents waste time on repetitive questions", solution: "24/7 AI-Powered Travel Desk & FAQ Automation", impact: "Sales team focuses on hot leads" },
    { category: "Customer Experience", problem: "Lack of pre-travel communication", solution: "Automated Pre-Departure Reminders & Checklists", impact: "Reduced traveler anxiety, higher satisfaction" },
    { category: "Operations", problem: "Manually tracking payments and deadlines", solution: "Automated Payment & Document Reminders", impact: "Improved cash flow, fewer errors" },
    { category: "Marketing", problem: "Low engagement on generic offers", solution: "Smart Segmentation & Targeted Campaigns", impact: "Higher ROI on marketing spend" },
    { category: "Brand Reputation", problem: "Slow response times & scattered info", solution: "Unified Communication Hub & Instant Answers", impact: "Seen as a modern, reliable travel partner" },
  ];

  // Travel Benefits (mirrors Education benefits)
  const travelBenefits = [
    {
      title: "Higher Bookings",
      description:
        "Capture more conversions with optimized flows and targeted promotions.",
      icon: StarIcon,
      metrics: "35% avg. bookings growth",
    },
    {
      title: "Improved Revenue",
      description:
        "Increase average order value with dynamic pricing and upsells.",
      icon: RocketLaunchIcon,
      metrics: "50% avg. revenue lift",
    },
    {
      title: "Better Retention",
      description:
        "Turn one-time travelers into repeat customers with loyalty and personalized offers.",
      icon: UserGroupIcon,
      metrics: "40% repeat customer increase",
    },
    {
      title: "Measurable ROI",
      description:
        "Track every campaign and channel to prove marketing impact and optimize spend.",
      icon: ChartBarIcon,
      metrics: "5x verified marketing ROI",
    },
  ];

  const agencyTypes = [
    {
      name: "Online Travel Agencies",
      icon: BuildingOfficeIcon,
      description: "API-first platforms focused on inventory and conversion.",
    },
    {
      name: "Boutique Tour Operators",
      icon: GlobeAltIcon,
      description:
        "Curated experiences for premium travelers and small groups.",
    },
    {
      name: "Hotel & Resort Chains",
      icon: BuildingOfficeIcon,
      description:
        "Direct booking optimization and loyalty program integrations for properties.",
    },
    {
      name: "Corporate Travel",
      icon: BriefcaseIcon,
      description:
        "Managed travel workflows, invoicing and policy enforcement for corporate clients.",
    },
    {
      name: "Activity Marketplaces",
      icon: TicketIcon,
      description:
        "Day tours, local experiences and add-ons integrated in the booking flow.",
    },
    {
      name: "Destination Management",
      icon: MapIcon,
      description:
        "Localized campaigns and content to attract inbound tourism to specific regions.",
    },
  ];

  const caseStudies = [
    {
      title: "Agency X Growth Story",
      challenge:
        "Low conversion rates on mobile and limited upsell opportunities.",
      solution:
        "Launched a mobile-first booking flow and dynamic package upsells.",
      result: "35% increase in bookings and 22% AOV uplift",
      icon: FaPlane,
    },
    {
      title: "Resort Chain Y",
      challenge: "High reliance on OTAs and low direct bookings.",
      solution:
        "Optimized direct-booking UX, integrated loyalty and bespoke offers.",
      result: "52% rise in direct bookings and improved margins",
      icon: FaHotel,
    },
    {
      title: "Tour Operator Z",
      challenge: "Low repeat customers for adventure packages.",
      solution:
        "Introduced personalized itineraries and post-trip engagement flows.",
      result: "40% increase in repeat bookings and higher NPS",
      icon: FaSuitcaseRolling,
    },
  ];

  const integrations = [
    {
      name: "Global Payment Gateway",
      logo: "/logo.png",
      description: "Secure payments and multi-currency settlement.",
    },
    {
      name: "GDS & Hotel APIs",
      logo: "/logo.png",
      description:
        "Direct access to flight & hotel inventories with live rates.",
    },
    {
      name: "CRM & Marketing",
      logo: "/logo.png",
      description: "Customer lifecycle management and automated campaigns.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />

      {/* HERO */}
      <Section className="pt-24 pb-16 bg-gradient-to-br from-coral-50 via-orange-50 to-red-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div className="order-1 text-center lg:text-left">
              <div className="animate-fadeIn">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <ShinyText className="bg-gradient-to-r from-primary-dark via-primary to-secondary text-black">
                    Rocket Flow for Travel Agencies
                  </ShinyText>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed mx-auto max-w-3xl">
                  Automate bookings, increase revenue, and delight travelers
                  with a unified platform built for modern travel businesses.
                </p>
              </div>

              {/* key stats */}
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto lg:mx-0">
                <div className="text-center p-5 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-primary-dark">
                    35%
                  </div>
                  <div className="text-sm text-gray-600">Bookings Growth</div>
                </div>
                <div className="text-center p-5 bg-gradient-to-br from-secondary-50 to-primary-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-primary-dark">
                    50%
                  </div>
                  <div className="text-sm text-gray-600">Revenue Boost</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl">
                  Start Free Trial
                </Button>
                <Button className="border border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl">
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* RIGHT - video */}
            <div className="order-2">
              <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,112,184,0.3)]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/MZnyjXSUX3Q"
                  title="Travel Solutions Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <p className="text-center text-sm text-gray-500 mt-4">
                See how Rocket Flow transforms travel operations
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* STATS */}
      <Section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Scale Your Travel Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From initial search to completed trip — automate and optimize
              every touchpoint in the traveler journey.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "35%",
                label: "Bookings Growth",
                sub: "Average Increase",
              },
              { number: "50%", label: "Revenue Boost", sub: "Average Growth" },
              {
                number: "40%",
                label: "Customer Retention",
                sub: "Repeat Clients",
              },
              { number: "24/7", label: "Support", sub: "Always Available" },
            ].map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="text-center group"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {s.number}
                </div>
                <div className="text-gray-300 text-lg">{s.label}</div>
                <div className="text-gray-400 text-sm mt-1">{s.sub}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Live Inventory Sync</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Smart Pricing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Unified Communication</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Partner Integrations</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 9 POWERFUL FEATURES */}
      <Section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center mb-16 relative">
            <div className="absolute -top-10 left-1/4 w-20 h-20 rounded-full bg-primary-50 filter blur-xl opacity-70"></div>
            <div className="absolute -top-6 right-1/3 w-12 h-12 rounded-full bg-secondary-50 filter blur-lg opacity-70"></div>

            <h2 className="relative text-4xl font-bold text-gray-900 mb-6 inline-block">
              <span className="bg-gradient-to-r from-primary to-secondary text-black">
                9 Powerful Features
              </span>{" "}
              for Travel & Booking
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything a modern travel business needs to convert, deliver and
              delight — all in one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-radial from-primary-50 to-transparent opacity-30 rounded-full"></div>

            {travelFeatures.map((feature) => (
              <Card
                key={feature.id}
                className={`p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  hoveredFeature === feature.id
                    ? "shadow-2xl border-blue-200 bg-blue-50/30"
                    : ""
                }`}
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="relative flex justify-center">
                  <div
                    className="absolute -top-3 -left-3 w-24 h-24 rounded-full opacity-30 filter blur-xl"
                    style={{ background: "rgba(0,0,0,0.03)" }}
                  ></div>
                  <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-6 shadow-lg relative z-10 p-4">
                    <feature.icon className="w-10 h-10" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg text-center">
                  {feature.description}
                </p>

                <div className="space-y-3 flex flex-col w-full px-4">
                  {feature.bullets.map((b, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm text-gray-700 group"
                    >
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      <span className="group-hover:text-blue-700 transition-colors">
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
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
              Transform Every Travel Challenge into{" "}
              <span className="text-primary-500">Growth Opportunity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Discover how our platform helps travel agencies boost bookings,
              optimize operations, and delight travelers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-xl">
            <table className="w-full bg-white">
              <thead className="bg-red-500 from-primary-600 to-primary-500">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-white">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-white">
                    Problem
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-white">
                    Our Travel Solution
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-white">
                    Impact
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {summaryRows.map((row, idx) => (
                  <tr key={idx} className="transform transition-all duration-300 hover:scale-[1.01] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-md group">
                    <td className="px-6 py-5">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                          <div className="w-3 h-3 rounded-full bg-primary-600"></div>
                        </div>
                        <span className="text-base font-semibold text-gray-900 group-hover:text-primary-600">{row.category}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">{row.problem}</td>
                    <td className="px-6 py-5 text-base text-gray-700 group-hover:text-gray-900">{row.solution}</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 group-hover:bg-green-200">{row.impact}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-16">
            <div className="bg-gradient-to-r from-primary-50 to-white rounded-2xl p-8 border border-primary-100">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Revolutionize Your Travel Business
              </h3>
              <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                From bookings to customer engagement, our platform automates
                your agency workflow, letting you focus on providing
                unforgettable travel experiences.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 justify-center">
                  <FaPlane className="w-6 h-6 text-primary-600" />
                  <span className="font-semibold text-gray-800">
                    Save 15+ hours/week
                  </span>
                </div>
                <div className="flex items-center space-x-3 justify-center">
                  <FaUsers className="w-6 h-6 text-primary-600" />
                  <span className="font-semibold text-gray-800">
                    Increase repeat travelers by 30%
                  </span>
                </div>
                <div className="flex items-center space-x-3 justify-center">
                  <FaRocket className="w-6 h-6 text-primary-600" />
                  <span className="font-semibold text-gray-800">
                    Scale your agency effortlessly
                  </span>
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
        What Travel Agency{" "}
        <span className="bg-gradient-to-r from-primary to-secondary text-black">
          Owners Say
        </span>
        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Hear from agencies that transformed their operations and boosted
        traveler satisfaction.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Testimonial Card 1 */}
      <Card className="p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
        <div className="relative text-center">
          <div className="flex flex-col items-center mb-6 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-black font-bold text-xl shadow-md mb-3">
              AB
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900">
                Alice Brown
              </div>
              <div className="text-gray-600">CEO, Wanderlust Travels</div>
            </div>
          </div>
          <p className="text-gray-700 italic text-lg relative z-10 mb-5 px-6">
            Our booking process is now fully automated. Travelers get instant
            confirmations, and our repeat booking rate has skyrocketed. The
            platform handles 75% of routine inquiries automatically!
          </p>
          <div className="flex justify-center text-secondary mt-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-6 h-6 fill-current text-yellow-500" />
            ))}
          </div>
        </div>
      </Card>

      {/* Testimonial Card 2 */}
      <Card className="p-8 rounded-2xl bg-gradient-to-br from-secondary-50 to-primary-50 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
        <div className="relative text-center">
          <div className="flex flex-col items-center mb-6 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-black font-bold text-xl shadow-md mb-3">
              JS
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900">
                John Smith
              </div>
              <div className="text-gray-600">Founder, GlobeTrotter Agency</div>
            </div>
          </div>
          <p className="text-gray-700 italic text-lg relative z-10 mb-5 px-6">
            With this platform, managing group tours and flight bookings has
            never been easier. Automated notifications and analytics helped
            us reduce errors and improve customer satisfaction by 60%.
          </p>
          <div className="flex justify-center text-secondary mt-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-6 h-6 fill-current text-yellow-500" />
            ))}
          </div>
        </div>
      </Card>
    </div>
  </Container>
</Section>


      {/* CTA Section */}
      <Section className="py-24 bg-gradient-to-r from-primary-dark via-primary to-secondary relative overflow-hidden">
        <Container className="relative z-10">
          <div className="text-center text-Text">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fadeIn">
              Ready to Transform Your Travel Business?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of agencies that have automated bookings, increased
              revenue, and delighted travelers with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-primary-dark hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg">
                Start Free Trial
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-primary-dark px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 text-lg">
                Schedule a Demo
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-75">
              No credit card required • Setup in 5 minutes • Cancel anytime
            </p>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
