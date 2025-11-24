'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaThumbsUp, 
  FaLightbulb, 
  FaRocket, 
  FaHandshake,
  FaArrowRight 
} from 'react-icons/fa';

const reasons = [
  {
    icon: FaThumbsUp,
    title: "Proven Track Record",
    desc: "With a portfolio of successful projects and satisfied clients, we have a reputation."
  },
  {
    icon: FaLightbulb,
    title: "Tailored Solutions",
    desc: "Our services are customized to meet your unique business needs, ensuring."
  },
  {
    icon: FaRocket,
    title: "Future Technologies",
    desc: "Stay ahead of the competition with AI, cloud computing, and automation solutions."
  },
  {
    icon: FaHandshake,
    title: "24/7 Support",
    desc: "Stay ahead of the competition with AI, cloud computing, and automation solutions."
  }
];

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-900 text-white overflow-hidden relative py-24">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-16"
        >
          <p className="text-yellow-400 text-sm font-bold tracking-wider mb-4">
            [ WHY CHOOSE US ]
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Reliable IT Solution, for<br />
              <span className="text-yellow-400">Best Results.</span>
            </h1>

            <div className="flex items-center gap-4">
              <p className="text-gray-400 text-sm md:text-base max-w-xs">
                Our services are customized to meet your unique.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
              >
                Learn More
                <FaArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  y: -12,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-yellow-400 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  layoutId={`glow-${index}`}
                />

                {/* Icon Circle */}
                <div className="relative z-10 w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-all duration-300">
                  <Icon className="w-8 h-8 text-yellow-400 group-hover:text-black transition-all duration-300" />
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
                  {reason.desc}
                </p>

                {/* Bottom Accent */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-yellow-400 w-0 group-hover:w-full transition-all duration-500"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}