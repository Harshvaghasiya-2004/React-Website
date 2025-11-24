import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { FiTwitter, FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";

export default function CTASection() {
  const hoverScale = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  return (
    <section className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 py-12 mt-0">
      {/* Remove white above by ensuring parent has no margin/padding */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT TEXT */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Don't Miss Out
          <br className="hidden md:block" />
          <span className="text-gray-800">the Future!</span>
        </motion.h2>

        {/* INPUT + BUTTON */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
        >
          <input
            type="email"
            placeholder="Enter email here..."
            className="px-5 py-3 rounded-full text-gray-900 placeholder-gray-600 
            focus:outline-none focus:ring-4 focus:ring-gray-900/30 
            flex-1 md:flex-initial shadow-md"
          />

          <motion.button
            {...hoverScale}
            className="bg-gray-900 text-yellow-400 px-6 py-3 rounded-full font-semibold 
            flex items-center gap-2 justify-center shadow-lg"
          >
            Subscribe Now
            <HiArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          <a href="#" className="text-gray-900 hover:text-yellow-400 transition">
            <FiTwitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-900 hover:text-yellow-400 transition">
            <FiLinkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-900 hover:text-yellow-400 transition">
            <FiInstagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-900 hover:text-yellow-400 transition">
            <FiFacebook className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
