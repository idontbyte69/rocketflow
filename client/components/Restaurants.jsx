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
