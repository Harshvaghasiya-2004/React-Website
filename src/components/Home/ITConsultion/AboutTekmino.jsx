"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  FaHandshake,
  FaTrophy,
  FaUsers,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

const stats = [
  { icon: FaHandshake, value: 10000, label: "Engaged Customers", suffix: "+" },
  { icon: FaTrophy, value: 99, label: "Customer Success Stories", suffix: "%" },
  { icon: FaUsers, value: 80, label: "Team of Professionals", suffix: "+" },
  { icon: FaChartLine, value: 10, label: "More Faster Growth", suffix: "x" },
];

export default function AboutTekmino() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      const intervals = stats.map((stat, i) => {
        const increment = stat.value / 50;
        return setInterval(() => {
          setCounters((prev) => {
            const newCounters = [...prev];
            if (newCounters[i] < stat.value) {
              newCounters[i] = Math.min(newCounters[i] + increment, stat.value);
            }
            return newCounters;
          });
        }, 30);
      });
      return () => intervals.forEach(clearInterval);
    }
  }, [inView, controls]);

  return (
    <div className=" bg-gradient-to-b from-gray-900 to-gray-900 text-white overflow-hidden relative py-24">
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
          className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://themejunction.net/html/tekmino/demo/assets/images/about/h2-about-banner.webp"
                alt="Team collaboration"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-yellow-400 text-sm font-bold tracking-wider"
            >
              [ ABOUT TEKMINO ]
            </motion.p>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Driving Innovation Through AI
              <br />
              and New Technology,
              <br />
              <span className="text-yellow-400">Delivering Tailored.</span>
            </h1>

            {/* Logo + Mission/Vision */}
            <div className="space-y-6">
              {/* Logo */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
                className="w-24 h-24 bg-yellow-400 rounded-2xl flex flex-col items-center justify-center shadow-lg gap-1"
              >
                <img
                  src="https://themejunction.net/html/tekmino/demo/assets/images/logos/logo-icon.webp"
                  alt="Tekmino Logo Icon"
                  className="w-10 h-10"
                />

                <img
                  src="https://themejunction.net/html/tekmino/demo/assets/images/logos/logo-text.webp"
                  alt="Tekmino Logo Text"
                  className="w-14"
                />
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
              >
                <h3 className="text-lg font-bold mb-2">Our Mission</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Revolutionize the way you work the our solutions designed to
                  meet the challenges of today's business landscape
                  revolutionize.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
              >
                <h3 className="text-lg font-bold mb-2">Our Vision</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Revolutionize the way you work the solutions designed to meet
                  unique challenges of today's business landscape revolutionize.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
              >
                Learn More
                <FaArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="mt-24 bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center group-hover:bg-yellow-400 transition-all duration-300">
                    <Icon className="w-8 h-8 text-yellow-400 group-hover:text-black transition-all duration-300" />
                  </div>
                  <motion.div className="text-4xl md:text-5xl font-bold text-yellow-400">
                    {Math.floor(counters[index])}
                    {stat.suffix}
                  </motion.div>
                  <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
