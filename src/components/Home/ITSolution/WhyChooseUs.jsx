"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { GiHeadphones, GiSparkles, GiDiamondTrophy } from "react-icons/gi";
import { IoRocketSharp } from "react-icons/io5";

/* Tiny custom useInView – no external lib */
function useInView({ threshold = 0.2, triggerOnce = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return [ref, inView];
}

/* Data */
const cards = [
  {
    Icon: GiDiamondTrophy,
    title: "Proven Track Record",
    desc: "With a portfolio of successful projects and satisfied clients, we have a reputation.",
  },
  {
    Icon: GiSparkles,
    title: "Tailored Solutions",
    desc: "Our services are customized to meet your unique business needs, ensuring solution.",
  },
  {
    Icon: IoRocketSharp,
    title: "Future Technologies",
    desc: "Stay ahead of the competition with AI, cloud computing, and automation solutions.",
    active: true,
  },
  {
    Icon: GiHeadphones,
    title: "24/7 Support",
    desc: "Stay ahead of the competition with AI, cloud computing, and automation solutions.",
  },
];

/* Component */
export default function WhyChooseUs() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const float = {
    y: [0, -8, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <section className="py-20 lg:py-32 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left mb-16"
        >
          <p className="text-sm lg:text-base text-yellow-400 font-medium tracking-wider uppercase mb-4">
            [ WHY CHOOSE US ]
          </p>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Reliable IT Solution, for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                Best Results.
              </span>
            </h2>

            <div className="flex items-center gap-4">
              <p className="text-sm lg:text-base text-gray-400 max-w-xs">
                Our services are customized to meet your unique.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(250, 204, 21, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full font-semibold text-black shadow-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Learn More
                  <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, i) => {
            const Icon = card.Icon;
            const isActive = card.active;

            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  y: -12,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border backdrop-blur-sm transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? "border-yellow-400 shadow-2xl shadow-yellow-400/20"
                      : "border-gray-800 hover:border-yellow-400/30"
                  }`}
              >
                {/* Floating Icon */}
                <motion.div
                  animate={float}
                  className={`absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-xl
                    ${
                      isActive
                        ? "bg-yellow-400"
                        : "bg-gradient-to-br from-yellow-400 to-yellow-300"
                    }`}
                >
                  <Icon
                    className={`w-7 h-7 text-black`}
                  />
                </motion.div>

                {/* Content */}
                <div className="mt-10 space-y-3">
                  <h3
                    className={`text-lg font-bold transition-colors
                    ${
                      isActive
                        ? "text-yellow-400"
                        : "text-white group-hover:text-yellow-400"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
