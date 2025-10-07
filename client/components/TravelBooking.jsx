"use client";

import React, { useRef, useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container } from ".";
import {
  FaPlane,
  FaMapMarkedAlt,
  FaHotel,
  FaSuitcaseRolling,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function TravelBooking() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const services = [
    {
      icon: <FaPlane className="w-12 h-12 " />,
      title: "Increase Bookings",
      desc: "We help travel agencies increase bookings with smart tools, automated promotions, and easy-to-use booking systems.",
    },
    {
      icon: <FaHotel className="w-12 h-12 " />,
      title: "Boost Revenue",
      desc: "Generate more revenue by offering curated packages, dynamic pricing, and upselling opportunities to your clients.",
    },
    {
      icon: <FaSuitcaseRolling className="w-12 h-12 " />,
      title: "Marketing & Branding",
      desc: "We provide marketing solutions, from social media campaigns to email marketing, tailored for your agency.",
    },
    {
      icon: <FaMapMarkedAlt className="w-12 h-12 " />,
      title: "Customer Engagement",
      desc: "Improve client retention with personalized offers, newsletters, loyalty programs, and customer support tools.",
    },
    {
      icon: <FaUsers className="w-12 h-12 " />,
      title: "Analytics & Insights",
      desc: "Track your performance, understand your customers, and make data-driven decisions to grow your business.",
    },
  ];

  const faqs = [
    {
      q: "How can you help my travel agency grow?",
      a: "We provide tools and services for marketing, customer engagement, and revenue optimization, helping your agency scale efficiently.",
    },
    {
      q: "Do you offer support for implementing your solutions?",
      a: "Yes, our team guides you through setup, onboarding, and ongoing support to ensure smooth operations.",
    },
    {
      q: "Can you help attract more clients?",
      a: "Absolutely! Our marketing strategies, partnerships, and campaigns are designed to bring more clients to your business.",
    },
  ];

  const caseStudies = [
    {
      title: "Agency X Growth Story",
      stat: "+35%",
      desc: "We helped Agency X increase their bookings by 35% through marketing automation and better customer insights.",
      category: "Bookings",
      client: "Agency X",
      role: "Travel Company",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
      icon: "🌍",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      cta: "Read Full Story",
    },
    {
      title: "Revenue Boost Y",
      stat: "+50%",
      desc: "Boosted Agency Y’s revenue by 50% using curated packages, upselling tools, and real-time analytics.",
      category: "Revenue",
      client: "Agency Y",
      role: "Luxury Travel",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      icon: "💼",
      image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
      cta: "Read Full Story",
    },
    {
      title: "Customer Engagement Z",
      stat: "+40%",
      desc: "Increased repeat customers by 40% with personalized loyalty programs and targeted campaigns.",
      category: "Engagement",
      client: "Travel Hub Z",
      role: "Tourism Agency",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      icon: "📈",
      image: "https://picsum.photos/800/450?random=3",
      cta: "Read Full Story",
    },
  ];

  const integrations = [
    {
      name: "Payment Gateway",
      logo: "/logo.png",
      description: "Seamless and secure payment solutions for your clients.",
    },
    {
      name: "Travel API",
      logo: "/logo.png",
      description: "Real-time flight, hotel, and activity data integration.",
    },
    {
      name: "CRM System",
      logo: "/logo.png",
      description: "Manage customers, leads, and analytics efficiently.",
    },
  ];

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
                Grow Your
                <span className="text-[#dc2626]"> Travel Agency</span> Faster
              </h1>
              <p className="text-gray-700 mb-8 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto lg:mx-0">
                We provide tools, marketing solutions, and growth strategies to
                help travel agencies increase bookings, boost revenue, and
                delight their customers.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto lg:mx-0">
                <div className="text-center p-5 bg-[#fca5a5] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-[#fff]">35%</div>
                  <div className="text-sm text-[#fff]">Bookings Growth</div>
                </div>
                <div className="text-center p-5 bg-[#fca5a5] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl font-bold text-[#fff]">50%</div>
                  <div className="text-sm text-[#fff]">Revenue Boost</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-[#3B82F6] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#2563EB] shadow-md">
                  Get Started Today
                </Button>
                <Button className="border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md">
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

      {/* STATS SECTION */}
      <Section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <Container className="relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Growth for Agencies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we help agencies increase bookings, boost revenue, and
              retain customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "35%",
                title: "Bookings Growth",
                subtitle: "Average Increase",
              },
              {
                number: "50%",
                title: "Revenue Boost",
                subtitle: "Average Growth",
              },
              {
                number: "40%",
                title: "Customer Retention",
                subtitle: "Repeat Clients",
              },
              { number: "24/7", title: "Support", subtitle: "We Assist You" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">{stat.title}</div>
                <div className="text-gray-400 text-sm mt-1">
                  {stat.subtitle}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SERVICES SECTION */}
      <Section className="bg-white py-16">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            How We Help Your Agency
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Tilt
                key={i}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.15}
                className="rounded-2xl"
              >
                <motion.div
                  className="bg-white shadow-lg p-6 rounded-2xl cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 120,
                  }}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <Button className="bg-[#F87171] text-white hover:bg-[#dc2626] transition-all">
                    Learn More
                  </Button>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </Container>
      </Section>

      {/* CASE STUDIES */}
      <Section background="white" className="py-20">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {caseStudies.map((c, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-3xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image / Icon Section */}
                <div className="relative h-48 w-full bg-gradient-to-r from-[#fca5a5] to-[#dc2626] flex items-center justify-center">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={c.title}
                      className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
                    />
                  ) : (
                    <div className="text-white text-6xl">{c.icon}</div>
                  )}
                  {c.category && (
                    <span className="absolute top-4 left-4 bg-white text-[#dc2626] text-xs font-semibold px-3 py-1 rounded-full shadow">
                      {c.category}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-bold text-xl md:text-2xl mb-2 text-gray-900">
                      {c.title}
                    </h3>
                    <p className="text-gray-700 mb-3 leading-relaxed">
                      {c.desc}
                    </p>

                    {/* Highlight */}
                    <div className="bg-[#fee2e2] rounded-xl p-4 text-center mb-4">
                      <p className="text-3xl font-extrabold text-[#dc2626]">
                        {c.stat}
                      </p>
                      <p className="text-[#991b1b] text-sm font-medium">
                        Improvement in key metric
                      </p>
                    </div>

                    {/* Client Info */}
                    {c.client && (
                      <div className="flex items-center gap-3">
                        <img
                          src={
                            c.logo ||
                            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                          }
                          alt={c.client}
                          className="w-10 h-10 rounded-full border border-[#fca5a5]"
                        />
                        <div>
                          <p className="font-semibold text-gray-800">
                            {c.client}
                          </p>
                          <p className="text-sm text-gray-500">{c.role}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Button */}
                  <Button className="mt-6 bg-[#dc2626] hover:bg-[#b91c1c] text-white w-full py-3 rounded-lg font-semibold shadow-md transition-all duration-300">
                    {c.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* INTEGRATIONS */}
      <Section background="gradient" className="py-16">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">
            Tools & Integrations
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {integrations.map((i, idx) => (
              <Tilt
                key={idx}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.05}
                className="rounded-xl"
              >
                <motion.div
                  className="relative flex flex-col items-center cursor-pointer bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-md"
                  whileHover={{ scale: 1.05, y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <img
                    src={i.logo}
                    alt={i.name}
                    className="h-16 object-contain mb-2"
                  />
                  <p className="text-black font-medium text-sm text-center">
                    {i.name}
                  </p>
                  <span className="absolute bottom-full mb-2 px-3 py-1 text-xs bg-black text-black rounded opacity-0 group-hover:opacity-100 transition-opacity text-center w-max max-w-xs">
                    {i.description}
                  </span>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ SECTION */}
      <Section background="white" className="py-16">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card
                  padding="md"
                  className="p-6 rounded-xl shadow-lg hover:shadow-xl transition"
                >
                  <h4 className="font-semibold text-lg mb-2">{f.q}</h4>
                  <p className="text-gray-600">{f.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA BANNER */}
      <div className="fixed bottom-0 left-0 w-full bg-[#F87171] text-white py-4 px-6 shadow-xl flex justify-between items-center z-50">
        <p className="font-semibold text-lg">
          Ready to grow your travel agency?
        </p>
        <Button className="bg-white text-[#F87171] hover:bg-gray-100 transition-all">
          Get Started
        </Button>
      </div>

      <Footer />
    </div>
  );
}
