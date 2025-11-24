'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from "react-icons/fa6";

export default function HeroMiddle() {
  return (
    <div className="relative w-full max-w-5xl mx-auto my-12 overflow-hidden rounded-3xl">
      {/* -----------  Image  ----------- */}
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop"
        alt="Team working on laptop"
        className="w-full h-auto object-cover"
      />

      {/* -----------  Rotating Badge  ----------- */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-6 right-6 w-28 h-28"
      >
        {/* SVG circle with text path */}
        <svg viewBox="0 0 112 112" className="w-full h-full">
          <defs>
            <path
              id="badgeCircle"
              d="M56,12 A44,44 0 1,1 56,100 A44,44 0 1,1 56,12"
            />
          </defs>

          <text
            fill="#a3e635"
            fontSize="13"
            fontWeight="bold"
            letterSpacing="1"
          >
            <textPath href="#badgeCircle" startOffset="2%">
              AWARD WINNING AGENCY • SINCE 2019 •
            </textPath>
          </text>
        </svg>

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center shadow-xl">
            <FaTrophy className="w-9 h-9 text-black" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}