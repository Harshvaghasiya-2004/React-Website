"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

export default function ITSolutions() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    { title: "Managed IT Services", highlight: false },
    { title: "Cloud Computing", highlight: true },
    { title: "Cyber Security", highlight: false },
    { title: "Software Develop", highlight: false },
    { title: "Change Manage", highlight: false },
    { title: "IT Consulting", highlight: false },
  ];

  const benefits = [
    {
      icon: FaCheck,
      title: "High Data Security",
      desc: "Flexible Storage Options",
    },
    {
      icon: FaCheck,
      title: "Scalable IT Infrastructure",
      desc: "Compliance and Support",
    },
    { icon: FaCheck, title: "Reduced Costs", desc: "24/7 Cloud Monitoring" },
  ];

  const customerServices = [
    {
      num: "01",
      title: "Increased Customer Satisfaction",
      desc: "By consistent, personalized service, your customers are likely to feel valued & satisfied, which directly...",
    },
    {
      num: "02",
      title: "Improved Operational Efficiency",
      desc: "With our tools and strategies, you can optimize your processes and improve your operational efficiency...",
    },
    {
      num: "03",
      title: "Insights for Continuous Improvement",
      desc: "Our data-driven approach gives you insights into customer behavior, enabling continuous...",
    },
  ];

  return (
    <div className=" bg-gray-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://themejunction.net/html/tekmino/demo/assets/images/services/service-details.webp"
                alt="Team working"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </motion.div>

            {/* Title & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Cloud Computing: Transforming the Future of IT Solution
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Cloud computing involves delivering on-demand computing
                resources — including servers, storage, databases, networking,
                software, analytics, and intelligence — over the internet rather
                than relying on local servers or personal devices. This
                technology enables businesses to scale efficiently, reduce
                costs, and enhance collaboration by providing on-demand access
                to powerful computing resources.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                One of the biggest advantages of cloud computing is flexibility
                and scalability. Cloud computing is categorized into different
                models, including Infrastructure as a Service (IaaS), Platform
                as a Service (PaaS), and Software as a Service (SaaS). Prominent
                providers such as Amazon Web Services (AWS), Microsoft Azure,
                and Google Cloud dominate the market, offering robust solutions
                to meet diverse business needs.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Small Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://themejunction.net/html/tekmino/demo/assets/images/services/service-details-2.webp"
                  alt="Team collaboration"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://themejunction.net/html/tekmino/demo/assets/images/services/service-details-3.webp"
                  alt="Meeting"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            </div>

            {/* Customer Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Range of Customer Services
              </h2>
              <p className="text-gray-400 mb-12 max-w-4xl">
                We are committed to delivering top-notch customer services
                tailored meet your business needs. Our comprehensive range of IT
                solutions ensures seamless operations, enhanced security, and
                optimized performance for businesses of all sizes. From managing
                your IT infrastructure to providing real-time support, we are
                here to help you exceed your customers' expectations every time.
                We help you understand your customers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {customerServices.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    whileHover={{ y: -8 }}
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`relative p-6 rounded-2xl border transition-all duration-300
                      ${
                        hoveredCard === i
                          ? "border-yellow-400 bg-gray-900 shadow-2xl shadow-yellow-400/20"
                          : "border-gray-800 bg-gray-900/50"
                      }`}
                  >
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {service.num}
                    </div>
                    <h3 className="text-xl font-bold mb-3 mt-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Services Menu */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-3xl p-6 border border-gray-800"
            >
              <h3 className="text-lg font-bold mb-6 text-gray-300">
                More services
              </h3>
              <ul className="space-y-3">
                {services.map((service, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 8 }}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-300 cursor-pointer
                      ${
                        service.highlight
                          ? "bg-yellow-400 text-black font-bold"
                          : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      }`}
                  >
                    {service.title}
                    <FaArrowRight
                      className={`w-4 h-4 ${
                        service.highlight ? "text-black" : "text-yellow-400"
                      }`}
                    />
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative overflow-hidden rounded-3xl p-8 
  bg-gradient-to-br from-yellow-500 via-yellow-400 to-orange-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Innovative IT Solutions
              </h3>
              <div className="flex items-center gap-3 mb-6">
                <FaPhone className="w-5 h-5" />
                <a href="tel:+91551890540" className="text-lg hover:underline">
                  +91 551 890-540
                </a>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <FaEnvelope className="w-5 h-5" />
                <a
                  href="mailto:info@company.com"
                  className="text-lg hover:underline"
                >
                  info@company.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaGlobe className="w-5 h-5" />
                <a href="#" className="text-lg hover:underline">
                  www.company.com
                </a>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-8 rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://themejunction.net/html/tekmino/demo/assets/images/services/service-ad.webp"
                  alt="Team member"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
