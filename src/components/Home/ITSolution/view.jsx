"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaPhone, FaCheck, FaStar } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export default function View() {
  return (
    <div className="bg-gray-900 text-white overflow-hidden relative flex items-center">
      {/* Animated Wave Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ backgroundPosition: "0% 0%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 20% 50%, rgba(250, 204, 21, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 80% 80%, rgba(250, 204, 21, 0.08) 0%, transparent 50%),
                         radial-gradient(circle at 40% 20%, rgba(250, 204, 21, 0.06) 0%, transparent 50%)`,
            backgroundSize: "200% 200%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-900 -z-10" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.p
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="text-yellow-400 text-sm font-bold tracking-widest"
            >
              [ TRANSFORMING IDEAS ]
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Innovative Tech
              <br />
              <span className="text-white">Solutions for</span>
              <br />
              <span className="text-white">Business.</span>
            </motion.h1>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
              >
                Explore Services
                <FaArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.a
                href="tel:+18883338181"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-white hover:text-yellow-400 transition-colors"
              >
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <FaPhone className="w-5 h-5 text-black" />
                </div>
                <span className="font-medium">+1 (888) 333-8181</span>
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 text-sm"
            >
              <span className="flex items-center gap-2">
                <FaCheck className="w-4 h-4 text-yellow-400" />
                Innovate Smarter
              </span>
              <span className="flex items-center gap-2">
                <FaCheck className="w-4 h-4 text-yellow-400" />
                Technology Simplified
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Image + Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://themejunction.net/html/tekmino/demo/assets/images/hero/hero-img.webp"
                alt="Business Professional"
                className="w-auto h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>

            {/* Floating Trust Card (Bouncing Up/Down) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-24 top-80 bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-800 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black">
                  <VscWorkspaceTrusted />
                </div>
                <div>
                  <p className="text-sm font-medium">Trusted by 800+</p>
                  <p className="text-xs text-gray-400">Tech Giants.</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Review Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute -right-4 bottom-20 bg-gray-900 rounded-2xl p-5 border border-gray-800 shadow-xl max-w-xs"
            >
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-2xl font-bold">4.9</p>
              <p className="text-xs text-gray-400">
                Based on 600+ Google Reviews.
              </p>
              <div className="flex -space-x-3 mt-3">
                {[
                  "https://themejunction.net/html/tekmino/demo/assets/images/testimonial/client-1.webp",
                  "https://themejunction.net/html/tekmino/demo/assets/images/testimonial/client-2.webp",
                  "https://themejunction.net/html/tekmino/demo/assets/images/testimonial/client-3.webp",
                  "https://themejunction.net/html/tekmino/demo/assets/images/testimonial/client-4.webp",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Reviewer"
                    className="w-10 h-10 rounded-full border-2 border-black"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-8 flex items-center gap-2 text-gray-500 text-sm"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
          <span>Scroll Down</span>
        </motion.div>
      </div>
    </div>
  );
}
