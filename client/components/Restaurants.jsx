"use client";

import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Navbar, Footer } from ".";

export default function Restaurants() {
  const services = [
    {
      icon: "🍽️",
      title: "Boost Bookings",
      desc: "Smart online booking tools to fill more tables every day.",
    },
    {
      icon: "📣",
      title: "Marketing & Branding",
      desc: "Social campaigns and promotions to attract new customers.",
    },
    {
      icon: "🍕",
      title: "Menu Optimization",
      desc: "Focus on dishes that bring highest revenue and customer delight.",
    },
    {
      icon: "💳",
      title: "Online Orders",
      desc: "Seamless delivery & pickup setup to increase revenue.",
    },
    {
      icon: "📊",
      title: "Analytics & Insights",
      desc: "Track sales trends, popular dishes, and customer feedback.",
    },
    {
      icon: "👨‍🍳",
      title: "Staff & Operations",
      desc: "Streamline kitchen & service workflows efficiently.",
    },
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
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 text-gray-800">
      <Navbar />

      {/* HERO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Grow Your <span className="text-[#dc2626]">Restaurant</span>{" "}
              Faster
            </h1>
            <p className="text-gray-700 mb-8 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto lg:mx-0">
              Tools, marketing, and strategies to boost bookings, revenue, and
              customer engagement.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center p-5 bg-[#fca5a5] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-white">40%</div>
                <div className="text-sm text-white">Bookings Growth</div>
              </div>
              <div className="text-center p-5 bg-[#fca5a5] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-white">50%</div>
                <div className="text-sm text-white">Revenue Boost</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-[#dc2626] text-white px-8 py-3 hover:bg-[#b91c1c]">
                Get Started Today
              </Button>
              <Button className="border border-[#dc2626] text-[#dc2626] px-8 py-3 hover:bg-[#dc2626] hover:text-white">
                View Case Studies
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-md transform hover:scale-[1.02] transition-all duration-500"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/MZnyjXSUX3Q"
              title="Restaurant Growth Solutions"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Tilt
                key={i}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable
                glareMaxOpacity={0.15}
                className="rounded-2xl"
              >
                <motion.div
                  className="bg-white shadow-lg p-6 rounded-2xl cursor-pointer flex flex-col justify-between"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 120,
                  }}
                >
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

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
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#dc2626]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#dc2626]/10 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-3">
            Trusted by Restaurants Worldwide
          </h3>
          <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            We’ve helped dozens of restaurants grow revenue and bookings
            effectively with our tailored solutions.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {trustedLogos.map((logo, i) => (
              <motion.div
                key={i}
                className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <motion.img
                  src={logo}
                  alt="Trusted logo"
                  className="h-14 w-auto opacity-80 hover:opacity-100 hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
      Success Stories
    </h2>
    <div className="grid md:grid-cols-3 gap-10">
      {caseStudies.map((c, i) => (
        <Tilt
          key={i}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable
          glareMaxOpacity={0.15}
          className="rounded-3xl"
        >
          <motion.div
            className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer flex flex-col transition-transform duration-300"
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 25px 45px rgba(0,0,0,0.2)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-[#dc2626] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                {c.category}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={c.logo}
                    alt={c.client}
                    className="w-10 h-10 rounded-full border border-[#fca5a5]"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{c.client}</p>
                    <p className="text-sm text-gray-500">{c.role}</p>
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-2">{c.title}</h3>
                <p className="text-gray-600 mb-4">{c.desc}</p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="bg-[#fee2e2] rounded-xl p-4 text-center">
                  <p className="text-2xl font-extrabold text-[#dc2626]">
                    {c.stat}
                  </p>
                  <p className="text-xs font-medium text-[#991b1b]">
                    Improvement
                  </p>
                </div>
                <Button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-4 py-2 rounded-lg">
                  {c.cta}
                </Button>
              </div>
            </div>
          </motion.div>
        </Tilt>
      ))}
    </div>
  </div>
</section>


      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                className="relative flex flex-col justify-between bg-white/10 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md p-6 cursor-pointer transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  backgroundColor: "rgba(255,255,255,0.9)",
                }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
              >
                <h4 className="font-semibold text-lg mb-2">{f.q}</h4>
                <p className="text-gray-600">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
