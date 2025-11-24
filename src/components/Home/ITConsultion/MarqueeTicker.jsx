'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa6';

const items = [
  'Business',
  'Founders and vision',
  'Growth and impact',
  'Team and values',
  'Innovation and future',
  'Success and impact',
  'Passion and progress',
  'Founders and vision',
  'Growth and impact',
  'Team and values',
  'Innovation and future',
];

export default function MarqueeTicker() {
  return (
    <div className="bg-yellow-400 py-4 overflow-hidden relative">
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          },
        }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((text, i) => (
          <React.Fragment key={i}>
            <span className="text-black font-medium text-sm md:text-base tracking-wider">
              {text}
            </span>
            <FaStar className="w-4 h-4 text-black flex-shrink-0" />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
