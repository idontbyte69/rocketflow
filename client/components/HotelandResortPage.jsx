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
        <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto lg:mx-0">
          <div className="text-center p-5 bg-[#FEE2E2] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-bold text-[#dc2626]">35%</div>
            <div className="text-sm text-gray-600">Bookings Growth</div>
          </div>
          <div className="text-center p-5 bg-[#FEE2E2] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-bold text-[#dc2626]">50%</div>
            <div className="text-sm text-gray-600">Revenue Boost</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button className="bg-[#F87171] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#dc2626] shadow-md">
            Get Started Today
          </Button>
          <Button className="border border-[#F87171] text-[#dc2626] hover:bg-[#F87171] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md">
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

      {/* Γ¥ô FAQ SECTION */}
      <Section background="gradient">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4 md:w-2/3 mx-auto">
            {faqs.map((f, i) => (
              <Card key={i} padding="md">
                <h4 className="font-semibold text-lg">{f.q}</h4>
                <p className="text-gray-600 mt-2">{f.a}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

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


      {/* ≡ƒôó CTA BANNER */}
      <div className="fixed bottom-0 left-0 w-full bg-[#F87171] text-white py-4 px-6 shadow-xl flex justify-between items-center z-50">
        <p className="font-semibold text-lg">Ready to boost your bookings?</p>
        <Button className="bg-white text-[#F87171] hover:bg-gray-100 transition-all">Book a Demo</Button>
      </div>

      <Footer />
    </div>
  );
}
