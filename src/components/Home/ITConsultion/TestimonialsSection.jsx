'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";

const testimonials = [
  {
    name: "Eleanor Pena",
    role: "Co-Founder",
    content:
      "When we approached Nexus for help with our technology integration, we were looking for a partner who could not only provide expertise but also deliver tangible results. They did exactly that.",
    avatar: "https://themejunction.net/html/tekmino/demo/assets/images/testimonial/client-1.webp",
  },
  {
    name: "Devon Lane",
    role: "Co-Founder",
    content:
      "Partnering with Nexus has been an absolute game-changer for our company. Their team delivered a tailored IT solution that met our unique business needs.",
    avatar: "https://themejunction.net/html/tekmino/demo/assets/images/testimonial/client-2.webp",
  },
  {
    name: "Cameron Williamson",
    role: "Co-Founder",
    content:
      "Nexus truly exceeded our expectations. From the initial consultation to the final implementation, their team provided excellent service and unwavering support.",
    avatar: "https://themejunction.net/html/tekmino/demo/assets/images/testimonial/client-3.webp",
  }
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  // Auto rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Show next 3 cards in loop (3 total)
  const visible = [
    testimonials[index % testimonials.length],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm text-yellow-400 font-medium tracking-widest uppercase mb-3">
            // SUCCESS STORIES
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Building Success with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
              Client Feedback.
            </span>
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center gap-6 md:gap-8"
            >
              {visible.map((t, i) => (
                <div
                  key={i}
                  className="w-full max-w-sm bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-800 backdrop-blur-sm hover:border-yellow-500/30 transition-all"
                >
                  {/* Avatar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-14 h-14 rounded-full object-cover ring-4 ring-gray-800"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                          <FaQuoteLeft className="w-3 h-3 text-black" />
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg">{t.name}</h4>
                        <p className="text-sm text-gray-400">{t.role}</p>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 leading-relaxed italic">
                    "{t.content}"
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
