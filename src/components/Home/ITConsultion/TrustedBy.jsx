"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
  {
    name: "coudc+",
    src: "https://themejunction.net/html/tekmino/demo/assets/images/brands/brand-1.webp",
  },
  {
    name: "flomedia",
    src: "https://themejunction.net/html/tekmino/demo/assets/images/brands/brand-2.webp",
  },
  {
    name: "WEGLOT",
    src: "https://themejunction.net/html/tekmino/demo/assets/images/brands/brand-3.webp",
  },
  {
    name: "Influence@You",
    src: "https://themejunction.net/html/tekmino/demo/assets/images/brands/brand-4.webp",
  },
  {
    name: "TSE",
    src: "https://themejunction.net/html/tekmino/demo/assets/images/brands/brand-5.webp",
  },
  {
    name: "monceau",
    src: "https://themejunction.net/html/tekmino/demo/assets/images/brands/brand-6.webp",
  },
];

export default function TrustedBy() {
  return (
    <div className="bg-gray-900 text-white overflow-hidden relative py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, -100], y: [0, 100] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-10"
        />
        <motion.div
          animate={{ x: [0, 100], y: [0, -100] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-10"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Trusted By Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
            className="inline-block bg-gray-900 text-yellow-400 text-xs md:text-sm font-bold px-6 py-2 rounded-full border border-gray-700"
          >
            Join Over <span className="text-yellow-300">1000+</span> Companies
            with Tekmino Here
          </motion.p>
        </motion.div>

        {/* Infinite Scroll - CONTINUOUS, NO PAUSE, NO CLICK */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -50 + "%"] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
            className="flex gap-8"
            style={{ width: "fit-content" }}
          >
            {Array(4)
              .fill(null)
              .map((_, repeatIndex) => (
                <React.Fragment key={repeatIndex}>
                  {logos.slice(0, 6).map((logo, i) => (
                    <div
                      key={`${repeatIndex}-${i}`}
                      className="flex-shrink-0 pointer-events-none select-none"
                    >
                      <div className="w-32 h-16 md:w-40 md:h-20 bg-gray-900 rounded-2xl border border-gray-800 flex items-center justify-center p-4 transition-all duration-300 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20">
                        <img
                          src={logo.src}
                          alt={logo.name}
                          className="w-full h-full object-contain filter brightness-0 invert"
                          draggable="false"
                        />
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
          </motion.div>
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-24"
        ></motion.div>
      </div>
    </div>
  );
}
