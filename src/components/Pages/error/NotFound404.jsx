"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function NotFound404() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r h-180 from-black via-gray-900 to-gray-900 text-white flex items-center justify-center overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-10"
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* 404 Neon Text with Glitch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          <img src="https://themejunction.net/html/tekmino/demo/assets/images/404/error.webp" alt="404 Not Found" className="w-200 h-90 mx-auto" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Oooop! Page not found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed"
        >
          The curve. Whether you're looking to streamline operations, enhance
          customer experiences, or explore new market opportunities, our
          tailored solutions.
        </motion.p>

        {/* Back to Home Button */}
        <motion.button
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-yellow-400 text-black px-8 py-4  rounded-full font-bold flex items-center gap-3 mx-auto hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
        >
          Go Back to Home
          <FaArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}
