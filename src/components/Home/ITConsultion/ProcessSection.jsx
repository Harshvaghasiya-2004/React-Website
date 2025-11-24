'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const steps = [
  {
    number: "01",
    title: "Deep Discovery & Planning",
    desc: "Every great solution starts with understanding. We take the time to learn about your business, challenges, and goals.",
  },
  {
    number: "02",
    title: "Development & Implement",
    desc: "We transform ideas into scalable, high-quality digital solutions tailored to your operations.",
  },
  {
    number: "03",
    title: "Optimization & Support",
    desc: "We continuously upgrade, monitor, and support your solution to ensure long-term performance.",
  },
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative bg-gray-900 text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://themejunction.net/html/tekmino/demo/assets/images/process/process-2-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE HEADING */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 text-left"
          >
            <p className="text-xs md:text-sm text-yellow-400 font-medium tracking-widest uppercase mb-3">
              // OUR WORKING PROCESS
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Turning Your Business
              <br />
              Goals Into Seamless
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                Digital IT Solution.
              </span>
            </h2>

            <p className="mt-4 text-sm md:text-base text-gray-300 max-w-md">
              Custom software solutions tailored to your business needs and workflow.
            </p>

            {/* Learn More Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 35px rgba(250, 204, 21, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full font-bold text-black shadow-xl"
              >
                Learn More
                <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE STEPS */}
          <div className="space-y-16 lg:space-y-24 order-2">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.25, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start relative"
              >
                {/* Number Badge */}
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center font-bold text-black text-lg shadow-xl">
                  {step.number}
                </div>

                {/* Step Card */}
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: "0 10px 40px rgba(250, 204, 21, 0.25)",
                    borderColor: "rgba(250, 204, 21, 0.4)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="bg-gray-900/80 backdrop-blur-md p-8 rounded-3xl border border-gray-700 w-full cursor-pointer"
                >
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
