"use client";

import React, { useRef, useState } from "react";
import { Navbar, Footer, Button, Card, Section, Container } from ".";

export default function HotelandResort() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Services with SVG icons (black)
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
    { q: "How long does integration take?", a: "Integration is quick and typically takes less than 48 hours." },
    { q: "Is my customer data secure?", a: "Yes! We follow strict security protocols and data encryption." },
    { q: "Can this system handle multiple branches?", a: "Absolutely, our platform supports multi-location operations." },
  ];

  const caseStudies = [
    { title: "Hotel X", stat: "25%", desc: "Increased bookings after using our automation.", cta: "Read Full Story" },
    { title: "Restaurant Y", stat: "40%", desc: "Reduced no-shows with automatic confirmations.", cta: "Read Full Story" },
    { title: "Resort Z", stat: "30%", desc: "Boosted customer satisfaction through engagement campaigns.", cta: "Read Full Story" },
  ];

  const integrations = [
    { name: "POS Provider", logo: "/logo.png", description: "Seamless point-of-sale integration." },
    { name: "Payment Gateway", logo: "/logo.png", description: "Secure and fast payment processing." },
    { name: "CRM System", logo: "/logo.png", description: "Manage your customer relationships efficiently." },
  ];

  // Video Controls
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) { videoRef.current.play(); setIsPlaying(true); } 
    else { videoRef.current.pause(); setIsPlaying(false); }
  };
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 text-gray-800">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full my-14 bg-white text-black">
        <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-1 flex flex-col justify-start text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Automate Your <span className="text-[#dc2626]">Hospitality</span> Business
            </h1>
            <p className="text-gray-700 mb-8 text-lg md:text-xl leading-relaxed max-w-lg">
              Smart solutions for restaurants, hotels, and resorts — from automated calls to booking management.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" className="bg-[#F87171] text-white transition-all duration-300">Request Demo</Button>
              <Button variant="secondary" size="lg" className="border-[#F87171] text-[#dc2626] transition-all duration-300">Learn More</Button>
            </div>
          </div>

          <div className="flex-1 w-full md:w-auto mt-8 md:mt-0 relative">
            <video ref={videoRef} className="w-full h-full object-cover rounded-2xl cursor-pointer"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              autoPlay muted={isMuted} loop playsInline onClick={togglePlay} />
            <div className="absolute inset-0 bg-gradient-to-br pointer-events-none rounded-2xl" />
            <button onClick={toggleMute} className="absolute bottom-5 left-5 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition">
              {isMuted ? "🔇" : "🔊"}
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-16">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Button className="bg-[#F87171] text-white hover:bg-[#dc2626] transition-all">Learn More</Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
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

      {/* CASE STUDIES */}
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

      <Footer />
    </div>
  );
}
