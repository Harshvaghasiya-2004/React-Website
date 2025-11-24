"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Mevon Lane",
    role: "Co. Founder",
    company: "TechFlow Inc.",
    image:
      "https://themejunction.net/html/tekmino/demo/assets/images/testimonial/client-1.webp",
    text: "Working with Tkmino has been a game-changer for our business. Their team’s professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner. The results we’ve seen after to be our company partnering.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "Nova Systems",
    image:
      "https://themejunction.net/html/tekmino/demo/assets/images/testimonial/client-2.webp",
    text: "Tkmino transformed our legacy systems into a modern, scalable cloud infrastructure. Their expertise in AI and automation saved us months of development time. Highly recommend for any enterprise looking to future-proof their tech stack.",
    rating: 5,
  },
  {
    name: "James Carter",
    role: "CEO",
    company: "GrowthEngine",
    image:
      "https://themejunction.net/html/tekmino/demo/assets/images/testimonial/client-3.webp",
    text: "The level of customization and personal support we received was unmatched. Tkmino didn’t just deliver a product — they delivered a partnership that continues to drive our growth. 10/10 would recommend.",
    rating: 5,
  },
];

export default function ClientsFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className=" bg-gradient-to-b from-gray-900  to-gray-900 text-white overflow-hidden relative py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-10"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Repeating Header Text - Infinite Scroll */}
        <div className="overflow-hidden whitespace-nowrap mb-16">
          <motion.div
            animate={{ x: [0, -100 + "%"] }}
            transition={{
              x: { duration: 20, repeat: Infinity, ease: "linear" },
            }}
            className="inline-block"
          >
            <p className="text-6xl md:text-8xl font-bold text-gray-800 tracking-widest select-none">
              Clients Feedback / Clients Feedback / Clients Feedback / Clients
              Feedback / Clients Feedback/ Clients Feedback/ Clients Feedback
            </p>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Active Avatar + Name */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full mx-auto border-4 border-yellow-400 shadow-xl"
              />
            </motion.div>
            <p className="mt-3 text-lg font-semibold">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-sm text-gray-400">
              {testimonials[currentIndex].role}
            </p>
          </motion.div>

          {/* Testimonial Card */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={goToPrev}
                    className="p-3 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  >
                    <FaArrowLeft className="w-5 h-5" />
                  </motion.button>

                  <div className="flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <FaStar className="w-5 h-5 text-yellow-400" />
                        </motion.div>
                      )
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={goToNext}
                    className="p-3 rounded-full bg-yellow-400 text-black hover:bg-yellow-300 transition-all duration-300"
                  >
                    <FaArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="relative">
                  <FaQuoteLeft className="absolute -top-6 left-0 w-8 h-8 text-yellow-400 opacity-50" />
                  <p className="text-lg md:text-xl leading-relaxed text-gray-300 italic text-center px-8">
                    "{testimonials[currentIndex].text}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.25 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-yellow-400" // active (highlight only)
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
