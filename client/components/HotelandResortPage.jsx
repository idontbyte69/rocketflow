"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaBriefcase,
  FaEnvelope,
  FaSms,
  FaBullhorn,
  FaBell,
  FaCog,
  FaHandshake,
  FaChartPie,
} from "react-icons/fa";

import { Navbar, Footer, Button, Card, Section, Container, ProvideMoreSection } from ".";

export default function HotelandResort() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l3 3 3-3" />
        </svg>
      ),
      title: "SEO Optimization",
      desc: "Improve your website ranking on search engines and attract more guests organically.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 17l10 5 10-5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Brand & Reputation",
      desc: "Enhance your hotel/resort brand identity and manage online reviews.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8v10H3V8" />
        </svg>
      ),
      title: "Email Marketing",
      desc: "Send promotional offers, seasonal deals, and personalized emails to your guests.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
      title: "SMS Campaigns",
      desc: "Reach your guests directly via SMS for special promotions and updates.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A2 2 0 0121 9.618v4.764a2 2 0 01-1.447 1.894L15 14M4 6h7v12H4V6z" />
        </svg>
      ),
      title: "Social Media Marketing",
      desc: "Boost engagement and bookings through Instagram, Facebook, and TikTok campaigns.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Booking & Revenue Strategy",
      desc: "Smart pricing, packages, and loyalty programs to increase reservations and revenue.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z" />
        </svg>
      ),
      title: "Operational Efficiency",
      desc: "Automate check-ins, guest management, and staff workflows to save time and costs.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h10M7 16h10" />
        </svg>
      ),
      title: "Customer Engagement",
      desc: "Build long-term relationships with personalized offers, loyalty programs, and feedback.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6h6v6H9z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18" />
        </svg>
      ),
      title: "Analytics & Insights",
      desc: "Track website, social media, and booking data to make informed business decisions.",
    },
  ];

  const faqs = [
    {
      q: "How long does integration take?",
      a: "Integration is quick and typically takes less than 48 hours.",
    },
    {
      q: "Is my customer data secure?",
      a: "Yes! We follow strict security protocols and data encryption.",
    },
    {
      q: "Can this system handle multiple branches?",
      a: "Absolutely, our platform supports multi-location operations.",
    },
  ];

  const caseStudies = [
    {
      title: "Hotel X",
      stat: "25%",
      desc: "Increased bookings after using our automation.",
      cta: "Read Full Story",
    },
    {
      title: "Restaurant Y",
      stat: "40%",
      desc: "Reduced no-shows with automatic confirmations.",
      cta: "Read Full Story",
    },
    {
      title: "Resort Z",
      stat: "30%",
      desc: "Boosted customer satisfaction through engagement campaigns.",
      cta: "Read Full Story",
    },
  ];

  const integrations = [
    {
      name: "POS Provider",
      logo: "/logo.png",
      description: "Seamless point-of-sale integration.",
    },
    {
      name: "Payment Gateway",
      logo: "/logo.png",
      description: "Secure and fast payment processing.",
    },
    {
      name: "CRM System",
      logo: "/logo.png",
      description: "Manage your customer relationships efficiently.",
    },
  ];

  // Video Controls
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 text-gray-800">
      <Navbar />

      {/* HERO SECTION */}
<section className="relative w-full pt-24 pb-16 bg-white text-gray-900 overflow-hidden">
  <Container>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Column - Content */}
      <motion.div
        className="order-1 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-[#F87171]">
            Grow Your Travel Agency
          </span>{" "}
          Faster
        </h1>
        <p className="text-gray-700 mb-8 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto lg:mx-0">
          We provide tools, marketing solutions, and growth strategies to
          help travel agencies increase bookings, boost revenue, and
          delight their customers.
        </p>

        {/* Key Stats */}
        <div className="grid grid-cols-2 gap-6 mb-8 max-w-lg mx-auto lg:mx-0">
          <div className="text-center p-6 bg-[#FEE2E2] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-[#dc2626] mb-2">35%</div>
            <div className="text-sm text-gray-600 font-medium">Bookings Growth</div>
          </div>
          <div className="text-center p-6 bg-[#FEE2E2] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-[#dc2626] mb-2">50%</div>
            <div className="text-sm text-gray-600 font-medium">Revenue Boost</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-lg mx-auto lg:mx-0">
          <Button className="bg-[#F87171] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#dc2626] shadow-md flex-1 sm:flex-none">
            Get Started Today
          </Button>
          <Button className="border border-[#F87171] text-[#dc2626] hover:bg-[#F87171] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md flex-1 sm:flex-none">
            View Case Studies
          </Button>
        </div>
      </motion.div>

      {/* Right Column - Video */}
      <motion.div
        className="order-2 relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-md transform hover:scale-[1.02] transition-all duration-500"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/MZnyjXSUX3Q"
          title="Travel Agency Solutions"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Video Caption */}
        <p className="text-center text-sm text-gray-500 mt-4 absolute bottom-[-2.5rem] w-full">
          See how our solutions boost agency growth
        </p>
      </motion.div>
    </div>
  </Container>
</section>


      {/* ≡ƒôè TRUSTED STATS SECTION */}
      <Section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Hotels & Resorts Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading hospitality businesses rely on our automation and
              marketing solutions to increase bookings, reduce no-shows, and
              enhance guest experience.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", title: "Hotels & Resorts", subtitle: "Globally Enhanced" },
              { number: "50K+", title: "Guests Assisted", subtitle: "Seamless Stays Daily" },
              { number: "95%", title: "Satisfaction Rate", subtitle: "Happy Guests" },
              { number: "24/7", title: "Support Available", subtitle: "Round-the-Clock Assistance" },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="relative">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-gray-300 text-lg">{stat.title}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.subtitle}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-8 text-gray-400">
              {["ISO Certified", "Secure Payments", "Award Winning Service"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ≡ƒÅ¿ ABOUT SECTION */}
      <Section background="white">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src="/logo.png"
              alt="Resort"
              className="rounded-2xl shadow-lg md:w-1/2 cursor-pointer"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Automation</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our platform helps restaurants, hotels, and resorts save time,
                reduce no-shows, and engage customers effortlessly.
              </p>
              <Button className="bg-[#F87171] text-white">About Us</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ≡ƒÆ╗ SERVICES SECTION */}
      {/* <section className="bg-white py-16">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Button className="bg-[#F87171] text-white hover:bg-[#dc2626] transition-all">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section> */}
      {/* SERVICES */}
      <section className="bg-white py-16">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card key={i} animationDelay={i * 0.1}>
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Button className="bg-[#F87171] text-white hover:bg-[#dc2626] transition-all">Learn More</Button>
              </Card>
            ))}
          </div>
        </Container>
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
                <tr className="bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 text-white">
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
                {/* Bookings & Revenue */}
                <tr className="hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 transition-all duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">Bookings & Revenue</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">High dependency on OTAs & lost direct leads</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">24/7 Booking Assistant & Direct Booking Links</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-green-600 leading-relaxed font-bold">Increased direct bookings & revenue</p>
                  </td>
                </tr>

                {/* Guest Experience */}
                <tr className="hover:bg-gradient-to-r hover:from-pink-50 hover:to-red-50 transition-all duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">Guest Experience</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Generic, reactive communication</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Automated Guest Journey (Pre to Post-stay)</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-green-600 leading-relaxed font-bold">Enhanced guest satisfaction & loyalty</p>
                  </td>
                </tr>

                {/* Operational Efficiency */}
                <tr className="hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 transition-all duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">Operational Efficiency</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Staff overwhelmed by repetitive questions</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">AI-Powered Virtual Concierge & FAQ Automation</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-green-600 leading-relaxed font-bold">70% of common queries automated</p>
                  </td>
                </tr>

                {/* Marketing & Sales */}
                <tr className="hover:bg-gradient-to-r hover:from-pink-50 hover:to-red-50 transition-all duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">Marketing & Sales</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Low conversion on generic promotions</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Smart Segmentation & Targeted Campaigns</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-green-600 leading-relaxed font-bold">Higher occupancy & ROI</p>
                  </td>
                </tr>

                {/* Ancillary Revenue */}
                <tr className="hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 transition-all duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">Ancillary Revenue</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Missed upsell opportunities</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Automated Pre-arrival Service Booking Messages</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-green-600 leading-relaxed font-bold">Increased spa, dining & activity revenue</p>
                  </td>
                </tr>

                {/* Guest Loyalty */}
                <tr className="hover:bg-gradient-to-r hover:from-pink-50 hover:to-red-50 transition-all duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">Guest Loyalty</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Low rate of repeat business & reviews</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">Automated Post-stay Feedback & Offer System</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-green-600 leading-relaxed font-bold">More positive reviews & repeat guests</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ≡ƒôê CASE STUDIES SECTION */}
      <Section background="white">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-10">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((c, i) => (
              <Card key={i} padding="md" className="flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-xl mb-2">{c.title}</h3>
                  <p className="text-3xl font-bold text-[#F87171] mb-2">{c.stat}</p>
                  <p className="text-gray-600 mb-4">{c.desc}</p>
                </div>
                <Button className="bg-[#F87171] text-white hover:bg-[#dc2626] transition-all">{c.cta}</Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ≡ƒñ¥ PARTNERS / INTEGRATIONS */}
      <Section background="gradient">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-4">Partners & Integrations</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We collaborate with top industry providers to bring you seamless integrations and best-in-class services.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {integrations.map((i, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center cursor-pointer bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <img src={i.logo} alt={i.name} className="h-16 object-contain mb-2" />
                <p className="text-gray-800 font-medium text-sm text-center">{i.name}</p>
                <span className="absolute bottom-full mb-2 px-3 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity text-center w-max max-w-xs">
                  {i.description}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button className="bg-[#F87171] text-white hover:bg-[#dc2626] transition-all">
              Become a Partner
            </Button>
          </div>
        </Container>
      </Section>


      <Footer />
    </div>
  );
}
