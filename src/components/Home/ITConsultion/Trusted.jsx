'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa6';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-black text-white overflow-hidden">
      {/* Wavy Background */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#111827" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,100 C300,300 600,0 900,150 C1200,300 1440,100 1440,100 L1440,800 L0,800 Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 flex flex-col items-center lg:items-start text-center lg:text-left">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            Trusted IT Experts
            <br />
            Delivering Smart
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
              Solutions.
            </span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-6 text-sm md:text-base text-gray-400 max-w-md"
        >
          Team of passionate tech experts delivering innovative IT solutions tailored to help businesses grow.
        </motion.p>

        {/* Floating CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10"
        >
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: '0 0 40px rgba(250, 204, 21, 0.6)',
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full font-bold text-black shadow-2xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore More
              <FaArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-xs text-gray-500 tracking-wider">Scroll Down</span>
        <FaChevronDown className="w-5 h-5 text-gray-500" />
      </motion.div>
    </section>
  );
}
