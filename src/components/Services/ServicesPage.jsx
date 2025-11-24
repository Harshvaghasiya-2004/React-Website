"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiOutlineHome, HiOutlineChevronRight } from "react-icons/hi2";

export default function ServicesPage() {
  return (
    <>
      {/* Main Wrapper */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden flex flex-col items-center justify-start pb-40">
        {/* Wave Background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 960"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {Array.from({ length: 30 }).map((_, i) => (
              <path
                key={i}
                d={`M0,${i * 32} Q360,${i * 32 + 80},720,${i * 32} T1440,${
                  i * 32
                } L1440,960 L0,960 Z`}
                fill="none"
              />
            ))}
          </svg>
        </div>

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center mt-32 md:mt-40"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Services
          </h1>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-gray-300 text-sm"
          >
            <HiOutlineHome className="w-4 h-4 text-orange-300" />
            <span className="hover:text-white transition">Home</span>
            <HiOutlineChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Services</span>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
