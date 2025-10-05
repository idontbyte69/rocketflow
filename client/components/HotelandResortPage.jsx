"use client";

import React, { useRef, useState } from "react";
import {
  Navbar,
  Footer,
  Button,
  Card,
  Section,
  Container,
} from "../../components";

export default function HotelsResortsPage() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const features = [
    { icon: "🏊", title: "Infinity Pool", desc: "Relax with ocean views and luxurious poolside service." },
    { icon: "🍽️", title: "Fine Dining", desc: "Taste exquisite local and international cuisines." },
    { icon: "🧘", title: "Spa & Wellness", desc: "Rejuvenate your body and mind with world-class treatments." },
    { icon: "🚗", title: "Free Parking", desc: "Secure and convenient on-site parking for all guests." },
  ];

  const rooms = [
    { img: "https://i.ibb.co/Y7YJkYm4/the-anam-J9-O3-Wc-J5-N74-unsplash.jpg", name: "Deluxe Ocean Suite", price: "$199/night", desc: "Spacious suite with private balcony and ocean view." },
    { img: "https://i.ibb.co/DPBDt8H9/sasha-kaunas-TAg-GZWz6-Qg8-unsplash.jpg", name: "Luxury King Room", price: "$149/night", desc: "Elegant room with king-sized bed and breakfast included." },
    { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", name: "Garden Villa", price: "$259/night", desc: "Private villa surrounded by tropical gardens." },
  ];

  const testimonials = [
    { name: "Sarah, USA", text: "An unforgettable stay! Everything was perfect from check-in to checkout.", rating: 5 },
    { name: "David, UK", text: "Amazing hospitality and breathtaking views — we’ll be back soon!", rating: 5 },
    { name: "Aisha, UAE", text: "Loved the spa experience and gourmet dining!", rating: 4 },
  ];

  const caseStudies = [
    { title: "Hotel X", stat: "25%", desc: "Increased bookings after using our automation.", cta: "Read Full Story" },
    { title: "Restaurant Y", stat: "40%", desc: "Reduced no-shows with automatic confirmations.", cta: "Read Full Story" },
    { title: "Resort Z", stat: "30%", desc: "Boosted customer satisfaction through engagement campaigns.", cta: "Read Full Story" },
  ];

  const integrations = [
    { name: "POS Provider", logo: "https://i.ibb.co/2FqGvHR/pos-logo.png", description: "Seamless point-of-sale integration." },
    { name: "Payment Gateway", logo: "https://i.ibb.co/yQvQ6VZ/payment-logo.png", description: "Secure and fast payment processing." },
    { name: "CRM System", logo: "https://i.ibb.co/HhXxF8H/crm-logo.png", description: "Manage your customer relationships efficiently." },
  ];

  const awards = [
    { name: "Best Hotel Automation 2024", logo: "https://i.ibb.co/z8k2RZ1/award1.png" },
    { name: "Security Certified", logo: "https://i.ibb.co/3N0L2pF/award2.png" },
    { name: "Top Hospitality Software", logo: "https://i.ibb.co/Bz6NhLZ/award3.png" },
  ];

  const faqs = [
    { q: "How long does integration take?", a: "Integration is quick and typically takes less than 48 hours." },
    { q: "Is my customer data secure?", a: "Yes! We follow strict security protocols and data encryption." },
    { q: "Can this system handle multiple branches?", a: "Absolutely, our platform supports multi-location operations." },
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

      {/* 🌅 HERO SECTION WITH VIDEO & GLASS EFFECT */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden text-black bg-white">
        <div className="relative z-10 container mx-auto flex justify-center px-6">
          <div className="flex w-full max-w-8xl rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white/10 backdrop-blur-md">
            {/* LEFT SIDE CONTENT */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                Automate Your <span className="text-[#dc2626]">Hospitality</span> Business
              </h1>
              <p className="text-gray-700 mb-8 text-lg md:text-xl leading-relaxed max-w-lg">
                Smart solutions for restaurants, hotels, and resorts — from automated calls to booking management.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-[#F87171] text-white transition-all duration-300">
                  Request Demo
                </Button>
                <Button variant="secondary" size="lg" className="border-[#F87171] text-[#dc2626] transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE VIDEO */}
            <div className="flex-1 relative px-5 py-8">
              <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-2xl cursor-pointer"
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                onClick={togglePlay}
              />
              <div className="absolute inset-0 bg-gradient-to-br pointer-events-none rounded-2xl" />

              {/* Mute/Unmute Button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-5 left-5 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
              >
                {isMuted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5L6 9H2v6h4l5 4V5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9l6 6M21 9l-6 6" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5L6 9H2v6h4l5 4V5z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 🏨 ABOUT SECTION */}
      <Section background="white">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img src="https://i.ibb.co/Y7YJkYm4/the-anam-J9-O3-Wc-J5-N74-unsplash.jpg" alt="Resort" className="rounded-2xl shadow-lg md:w-1/2 cursor-pointer" />
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Automation</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our platform helps restaurants, hotels, and resorts save time, reduce no-shows, and engage customers effortlessly.
              </p>
              <Button className="bg-[#F87171] text-white">About Us</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 💻 FEATURES / SERVICES */}
      <Section background="gradient">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <Card key={idx} padding="md" className="text-center">
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ❓ FAQ SECTION */}
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

      {/* 📈 CASE STUDIES SECTION */}
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
                <Button className="bg-[#F87171] text-white">{c.cta}</Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 🤝 PARTNERS / INTEGRATIONS */}
      <Section background="gradient">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-4">Partners & Integrations</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We collaborate with top industry providers to bring you seamless integrations and best-in-class services.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {integrations.map((i, idx) => (
              <div key={idx} className="relative flex flex-col items-center cursor-pointer bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
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

      {/* 📢 CTA BANNER / STICKY FOOTER */}
      <div className="fixed bottom-0 left-0 w-full bg-[#F87171] text-white py-4 px-6 shadow-xl flex justify-between items-center z-50">
        <p className="font-semibold text-lg">Ready to boost your bookings?</p>
        <Button className="bg-white text-[#F87171]">Book a Demo</Button>
      </div>

      <Footer />
    </div>
  );
}
