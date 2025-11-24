"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GiDiamondTrophy } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutTekmino() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // Animate counters
  useEffect(() => {
    const duration = 2000;
    const steps = 60;

    const timer1 = setInterval(() => {
      setCount1((prev) => (prev < 20 ? prev + 1 : 20));
    }, duration / 20 / steps);

    const timer2 = setInterval(() => {
      setCount2((prev) => (prev < 3000 ? prev + 100 : 3000));
    }, duration / 30 / steps);

    const timer3 = setInterval(() => {
      setCount3((prev) => (prev < 98 ? prev + 3 : 98));
    }, duration / 98 / steps);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-gray-900 text-white overflow-hidden relative">
      
      {/* Background Wave */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="url(#wave)"
            strokeWidth="3"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,165.3C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7C1440,96,1440,64,1440,32L1440,320L0,320Z"
          />
          <defs>
            <linearGradient id="wave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#fcd34d" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image + Badges */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl w-80 h-96 lg:w-96 lg:h-[500px]">
                <img
                  src="https://themejunction.net/html/tekmino/demo/assets/images/about/about-img-1.webp"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 20+ Years Badge */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -left-4 -bottom-6 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black p-4 rounded-2xl shadow-xl transform rotate-[-8deg]"
              >
                <p className="text-3xl font-black">
                  20<span className="text-xl">+</span>
                </p>
                <p className="text-xs font-bold mt-1 leading-tight">
                  Years of Excellence in IT
                  <br />
                  Solutions Company.
                </p>
              </motion.div>

              {/* Founder Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-20 left-1/2 -translate-x-1/2 bg-gray-800 p-4 rounded-2xl shadow-xl flex items-center gap-3 w-64"
              >
                <img
                  src="https://themejunction.net/html/tekmino/demo/assets/images/testimonial/client-1.webp"
                  alt="Client"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-bold text-sm">Burdee Nicolas</p>
                  <p className="text-xs text-gray-400">Co. Founder</p>
                </div>
                <img
                  src="https://themejunction.net/html/tekmino/demo/assets/images/about/signature.webp"
                  alt="Signature"
                  className="w-25 sm:w-57 md:w-20 lg:w-20 h-auto object-contain"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Text + Stats + Badge */}
          <div className="space-y-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-sm lg:text-base text-yellow-400 font-medium tracking-wider uppercase mb-2">
                [ ABOUT TEKMINO ]
              </p>
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                Delivering Solution That
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                  Drive Our Innovation & Fast Success.
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-xl"
            >
              We are a team of passionate tech experts delivering innovative IT
              solutions tailored to help businesses grow, adapt, and thrive in a
              digital. Stay ahead of the competition.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-8 text-center lg:text-left"
            >
              <div>
                <p className="text-5xl font-black text-yellow-400">
                  {count2 > 999 ? `${(count2 / 1000).toFixed(1)}K` : count2}
                  <span className="text-3xl">+</span>
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Successful Projects.
                </p>
              </div>
              <div>
                <p className="text-5xl font-black text-yellow-400">
                  {count3}
                  <span className="text-3xl">+</span>
                </p>
                <p className="text-sm text-gray-400 mt-1">IT Professionals.</p>
              </div>
            </motion.div>

            {/* CTA + Rotating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
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

              {/* Infinite Rotating Badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative w-28 h-28"
              >
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="circle"
                      d="M50,10 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80"
                    />
                  </defs>
                  <text fill="#facc15" fontSize="12" fontWeight="bold">
                    <textPath href="#circle" startOffset="5%">
                      AWARD WINNING AGENCY • SINCE 2019 •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl">
                    <GiDiamondTrophy className="w-8 h-8 text-black" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
