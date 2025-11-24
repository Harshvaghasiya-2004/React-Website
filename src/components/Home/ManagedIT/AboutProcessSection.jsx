"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaUsers, FaStar } from "react-icons/fa6";
import { LiaTachometerAltSolid } from "react-icons/lia";

const stats = [
  {
    value: 10,
    suffix: "m",
    label: "Users",
    desc: "Transforming Ideas into Digital Excellence Worldwide",
    icon: FaUsers,
  },
  {
    value: 3,
    suffix: "x",
    label: "Faster",
    desc: "Speed and efficiency improvements across deployments",
    icon: LiaTachometerAltSolid,
  },
];

const steps = [
  {
    number: "01",
    title: "Deep Discovery & Planning",
    desc: "Every great solution starts with understanding. We take the time to learn about your business, challenges, and goals.",
  },
  {
    number: "02",
    title: "Development & Implement",
    desc: "We transform ideas into scalable, high-quality digital solutions tailored to your operations.",
  },
  {
    number: "03",
    title: "Optimization & Support",
    desc: "We continuously upgrade, monitor, and support your solution to ensure long-term performance.",
  },
];

export default function AboutProcessSection() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const rafRef = useRef(null);
  const startRef = useRef(null);

  // Counter Animation (Smooth)
  useEffect(() => {
    const duration = 1800;
    startRef.current = performance.now();

    const animate = (now) => {
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      setCounters(stats.map((stat) => stat.value * eased));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="bg-gray-900 text-white overflow-hidden">
      {/* About Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] lg:aspect-auto rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://themejunction.net/html/tekmino/demo/assets/images/about/h3-about-img.jpg"
                  alt="Team working"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* BADGE */}
              <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 hover:bg-yellow-400/10 transition-all duration-300">
                <div className="flex -space-x-1">
                  {[
                    "https://themejunction.net/html/tekmino/demo/assets/images/testimonial/client-1.webp",
                    "https://themejunction.net/html/tekmino/demo/assets/images/testimonial/client-2.webp",
                    "https://themejunction.net/html/tekmino/demo/assets/images/testimonial/client-3.webp",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Client ${i + 1}`}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover -ml-3 first:ml-0 hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold">More 500+ Clients</p>
                  <p className="text-xs text-yellow-400 flex items-center gap-1">
                    <FaStar className="w-3 h-3" /> 5.0 Review IT Solution
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="inline-block px-4 py-1 bg-yellow-400/20 text-yellow-400 text-xs font-bold rounded-full mb-4">
                About Our Company
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                Providing Tailored IT Solution
                <br />
                Ensuring Seamless Business
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
                  Growth, Success.
                </span>
              </h2>

              <p className="text-gray-300 mb-8 max-w-xl">
                We are dedicated to transforming businesses through innovative
                and tailor-made IT solutions. With a passion for technology and
                a commitment to excellence, we empower your firm from cloud
                computing to AI-driven solutions.
              </p>

              {/* Bullet Points */}
              <div className="space-y-4 mb-8">
                {[
                  "Tailored IT Solutions.",
                  "Future-Ready Infrastructure.",
                  "Industry Expertise.",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-3 h-3 bg-gray-900 rounded-full" />
                    </div>
                    <span className="text-gray-300 group-hover:text-yellow-300 transition-colors duration-300">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Buttons Row */}
              <div className="flex items-center gap-6">
                {/* MAIN BUTTON */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(251, 191, 36, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full font-bold text-gray-900 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300"
                >
                  About Our Company
                  <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>

                {/* FLOATING CIRCLE BUTTON */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="hidden lg:block"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.08,
                      rotate: 360,
                      boxShadow: "0 0 40px rgba(251, 191, 36, 0.7)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-35 h-35 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl font-bold text-gray-900 text-xs tracking-wider overflow-hidden group hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300"
                    aria-label="Know more about us"
                  >
                    <span className="absolute inset-2 border-4 border-gray-900/20 rounded-full" />
                    <span className="absolute text-center px-2 leading-tight">
                      KNOW MORE ABOUT US
                    </span>
                    <FaArrowRight className="absolute w-5 h-5 right-15 bottom-6 transition-all group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-white/20 blur-xl scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  }}
                  className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-10 h-10 text-yellow-400" />
                    <div className="text-5xl font-black text-white">
                      {Math.floor(counters[i])}
                      {stat.suffix}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-yellow-300 transition-colors duration-300">{stat.label}</h3>
                  <p className="text-sm text-gray-300">{stat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="relative py-20 lg:py-32">
        {/* Background Wave */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 600"
            preserveAspectRatio="none"
          >
            <path
              fill="#111827"
              d="M0,100 C300,250 600,50 900,150 C1200,250 1440,100 1440,100 L1440,600 L0,600 Z"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-yellow-400/20 text-yellow-400 text-xs font-bold rounded-full mb-4">
              How We Work
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Transform Your Business
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
                in 3 Simple Steps.
              </span>
            </h2>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="relative bg-gray-800/70 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-yellow-400 hover:bg-gray-800/90 transition-all duration-300 cursor-pointer"
              >
                {/* Number Badge */}
                <div
                  className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg font-bold text-gray-900 text-lg hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300"
                >
                  {step.number}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-3 hover:text-yellow-300 transition-colors duration-300">{step.title}</h3>
                  <p className="text-sm text-gray-300">{step.desc}</p>
                </div>

                {/* Connector Line */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-8 -right-8 w-16 h-px bg-gradient-to-r from-yellow-400 to-transparent opacity-40"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}