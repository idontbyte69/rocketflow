"use client";
import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Container from "./ui/Container";
import Section from "./ui/Section";
import Card from "./ui/Card";

const OrgaProPage = () => {
  const services = [
    {
      title: "24/7 Instant Reply",
      description: "Round-the-clock customer support with immediate response times",
      icon: "🔄",
    },
    {
      title: "Comment-to-Inbox Transfer",
      description: "Seamlessly convert social media comments into direct conversations",
      icon: "💬",
    },
    {
      title: "Automated Delivery Information",
      description: "Instant updates about product launches, sales, and special offers",
      icon: "📅",
    },
    {
      title: "Location Share",
      description: "Easy sharing of store locations and delivery points",
      icon: "📍",
    },
    {
      title: "Smart Human Transfer",
      description: "Intelligent routing to the right customer service representative",
      icon: "🤝",
    },
    {
      title: "Contact Collection",
      description: "Efficient gathering and management of customer contact information",
      icon: "📋",
    },
    {
      title: "VIP Assistance",
      description: "Premium support for our valued customers",
      icon: "👑",
    },
    {
      title: "Comment Sensor & Feedback",
      description: "Advanced monitoring and response to customer feedback",
      icon: "📊",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="py-16 bg-gradient-to-r from-red-50 via-red-100 to-red-50">
        <Container className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Premium Organic Products
            </h1>
            <p className="text-lg text-gray-800">
              Our new automation service ensures clients receive instant responses, preventing delays and improving satisfaction. 
              This keeps clients engaged and allows them to enjoy fresh food without waiting.
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-red-200 rounded-lg transform rotate-3 transition-transform duration-300 hover:rotate-0"></div>
            <img
              src="https://www.sigmatest.org/wp-content/uploads/2019/08/organic-food-in-ahmedabad.jpg"
              alt="Organic Products"
              className="rounded-lg shadow-xl w-full h-auto relative z-10 transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section className="bg-green-50 py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Digital Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 border-2 border-green-200 hover:border-green-400 transition-colors duration-300 bg-white hover:bg-green-50 h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="text-4xl mb-4 text-gray-700">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Social Media Section */}
      <Section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-8">
            Connect With Us
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            Find us on all major social platforms for instant support and updates
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {["Facebook", "Instagram", "E-commerce", "Messenger", "WhatsApp"].map(
              (platform, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow h-full flex items-center justify-center"
                >
                  <p className="font-semibold text-gray-800">{platform}</p>
                </div>
              )
            )}
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
};

export default OrgaProPage;