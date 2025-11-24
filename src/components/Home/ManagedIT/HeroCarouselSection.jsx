"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaArrowRight,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa6";

const backgrounds = [
  "https://themejunction.net/html/tekmino/demo/assets/images/slider/h3-slider-img-1.webp",
  "https://themejunction.net/html/tekmino/demo/assets/images/slider/h3-slider-img-2.webp",
  "https://themejunction.net/html/tekmino/demo/assets/images/slider/h3-slider-img-3.webp",
];

const socials = [
  { Icon: FaTwitter, href: "#" },
  { Icon: FaLinkedinIn, href: "#" },
  { Icon: FaInstagram, href: "#" },
  { Icon: FaFacebookF, href: "#" },
];

export default function HeroCarouselSection() {
  const [currentBg, setCurrentBg] = useState(0);
  const [loadedBg, setLoadedBg] = useState(backgrounds[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const img = new Image();
    img.src = backgrounds[currentBg];
    img.onload = () => setLoadedBg(backgrounds[currentBg]);
  }, [currentBg]);

  return (
    <section className="relative overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 -z-10 ">
        <AnimatePresence>
          <motion.div
            key={currentBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={backgrounds[currentBg]}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 flex flex-col justify-between">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Left: Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex lg:flex-col gap-4 order-2 lg:order-1"
          >
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black transition-all"
              >
                <social.Icon className="w-4 h-4" />
              </motion.a>
            ))}
            <span className="hidden lg:block text-xs text-gray-400 rotate-90 origin-left mt-4">
              Follow us
            </span>
          </motion.div>

          {/* Center: Main Content */}
          <div className="flex-1 text-center lg:text-left max-w-3xl order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 bg-yellow-400/20 text-yellow-400 text-xs font-bold rounded-full mb-4">
                Fast & Reliable IT Solution
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                Next IT Solution
                <br />
                For Future
              </h1>
              <p className="mt-4 text-gray-300 text-sm md:text-base">
                Comprehensive IT support, monitoring & digital solution
                maintenance ensure for more smooth.
              </p>

              {/* Explore More Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8"
              >
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 40px rgba(255, 208, 0, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full font-bold text-black shadow-2xl"
                >
                  Explore More
                  <FaArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Empty for balance */}
          <div className="order-3 lg:w-48" />
        </div>

        {/* Bottom Cards + Navigation */}
        <div className="mt-auto">
          {/* Navigation Dots */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex justify-center lg:justify-start items-center gap-4 mb-8"
          >
            {/* LEFT ARROW */}
            <button
              onClick={() =>
                setCurrentBg((prev) =>
                  prev > 0 ? prev - 1 : backgrounds.length - 1
                )
              }
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm 
                          flex items-center justify-center 
                          hover:bg-yellow-400 hover:text-gray-900 
                          transition-all duration-300 group"
            >
              <FaArrowRight className="w-4 h-4 -rotate-180 text-white group-hover:text-gray-900" />
            </button>

            {/* DOTS */}
            <div className="flex items-center gap-3">
              {backgrounds.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentBg(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 
        ${
          i === currentBg
            ? "bg-yellow-400" // highlighted
            : "bg-white/40 hover:bg-white/70"
        }`}
                />
              ))}
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={() =>
                setCurrentBg((prev) =>
                  prev < backgrounds.length - 1 ? prev + 1 : 0
                )
              }
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm 
    flex items-center justify-center 
    hover:bg-yellow-400 hover:text-gray-900 
    transition-all duration-300 group"
            >
              <FaArrowRight className="w-4 h-4 text-white group-hover:text-gray-900" />
            </button>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto lg:mx-0"
          >
            {/* Proven Record */}
            <motion.div
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
              className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-6 rounded-3xl border border-gray-700 hover:border-yellow-400/40 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <FaChartLine className="w-5 h-5 text-black" />
                </div>
                <span className="text-yellow-400 font-bold">Proven Record</span>
              </div>
              <p className="text-sm text-gray-300">
                With a portfolio of successful projects and satisfied clients,
                our track record speaks for itself.
              </p>
            </motion.div>

            {/* Tailored Solutions */}
            <motion.div
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
              className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-6 rounded-3xl border border-gray-700 hover:border-yellow-400/40 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <FaLightbulb className="w-5 h-5 text-black" />
                </div>
                <span className="text-yellow-400 font-bold">
                  Tailored Solutions
                </span>
              </div>
              <p className="text-sm text-gray-300">
                Our services are customized to meet your business needs and
                drive growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
