"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaLaptopCode, FaCloud, FaPuzzlePiece, FaGlobe, FaLock } from "react-icons/fa6";

const tabs = [
  {
    id: 1,
    title: "Managed IT Services",
    icon: <FaLaptopCode className="text-2xl" />,
    desc: "Enhance business efficiency with proactive technology support, ensuring seamless operations.",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/services/h3-service-img-2.jpg",
  },
  {
    id: 2,
    title: "Cloud Computing",
    icon: <FaCloud className="text-2xl" />,
    desc: "Secure cloud migration and scalable hosting solutions for all your modern applications, with robust security and cost-effective scaling.",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/services/h3-service-img-3.webp",
  },
  {
    id: 3,
    title: "Software Development",
    icon: <FaPuzzlePiece className="text-2xl" />,
    desc: "Custom-built applications tailored to your business process and automation requirements, delivering innovative solutions that drive growth.",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/services/h3-service-img-4.webp",
  },
  {
    id: 4,
    title: "Network Infrastructure",
    icon: <FaGlobe className="text-2xl" />,
    desc: "Strong, secure, and scalable networking solutions for growing businesses, ensuring reliable connectivity and future-proof architecture.",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/services/h3-service-img-4.webp",
  },
  {
    id: 5,
    title: "Data Backup",
    icon: <FaLock className="text-2xl" />,
    desc: "Advanced backup & recovery strategies to protect your business-critical data, with automated, encrypted solutions for peace of mind.",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/services/h3-service-img-6.webp",
  },
];

export default function ServicesPage() {
  const [active, setActive] = useState(1);

  const activeTab = tabs.find((t) => t.id === active);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const tabVariants = {
    hover: { scale: 1.05, y: -2 },
    tap: { scale: 0.98 },
  };

  return (
    <section className="bg-gray-900 text-white px-4 py-16 lg:py-24 overflow-hidden relative">
      {/* Subtle Background Gradient/Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/50 to-gray-900/80 pointer-events-none" />

      {/* Explore Badge */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/70 backdrop-blur-sm text-yellow-400 rounded-full text-sm font-medium mb-6 border border-gray-700 hover:border-yellow-400 transition-all duration-300 shadow-lg"
      >
        <motion.span
          className="w-2 h-2 bg-yellow-400 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        Explore Services
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl md:text-5xl lg:text-6xl font-black max-w-2xl leading-tight mb-8"
      >
        Reliable IT Solution for<br />Better & Smarter.
      </motion.h1>

      {/* CTA Button */}
      <motion.button
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(251, 191, 36, 0.3)" }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-full shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 mb-14"
      >
        Explore More
        <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
      </motion.button>

      {/* TAB NAV */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
        className="mt-14 bg-gray-800/70 backdrop-blur-sm border border-gray-700 hover:border-yellow-400 transition-all duration-300 rounded-xl p-2 flex flex-wrap gap-2 justify-center"
      >
        <AnimatePresence>
          {tabs.map((t) => (
            <motion.button
              key={t.id}
              onClick={() => setActive(t.id)}
              variants={tabVariants}
              whileHover="hover"
              whileTap="tap"
              initial={false}
              className={`px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 min-w-[160px] justify-center ${
                active === t.id
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 shadow-md shadow-yellow-500/25"
                  : "text-gray-300 hover:bg-gray-700 hover:text-yellow-400 border border-transparent hover:border-yellow-400"
              }`}
            >
              <span className="text-xs font-mono">{String(t.id).padStart(2, "0")}</span>
              <span>{t.title}</span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CONTENT + IMAGE */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        className="mt-10 bg-gray-800/70 backdrop-blur-sm border border-gray-700 hover:border-yellow-400 transition-all duration-300 rounded-xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 overflow-hidden w-full"
      >
        <AnimatePresence mode="wait">
          {/* LEFT CONTENT */}
          <motion.div
            key={`content-${activeTab.id}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 flex items-center justify-center text-2xl font-bold shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300"
            >
              {activeTab.icon}
            </motion.div>

            <motion.h3
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white hover:text-yellow-300 transition-colors duration-300"
            >
              {activeTab.title}
            </motion.h3>

            <motion.p
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-base leading-relaxed"
            >
              {activeTab.desc}
            </motion.p>

            <motion.button
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ gap: "1rem", scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold transition-all duration-300 text-sm"
            >
              Learn More
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            key={`img-${activeTab.id}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative rounded-xl overflow-hidden border border-gray-700/50 shadow-xl shadow-gray-900/50 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300"
          >
            <motion.img
              src={activeTab.img}
              alt={activeTab.title}
              className="w-full h-[300px] md:h-[400px] object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}