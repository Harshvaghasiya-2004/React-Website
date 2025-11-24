'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';

const steps = [
  {
    number: '01.',
    title: 'Deep Discovery & Planning',
    desc: 'Every great solution starts understanding. We take the time to learn about your business, challenges, and goals.',
  },
  {
    number: '02.',
    title: 'Development & Implement',
    desc: 'Every great solution starts understanding. We take the time to learn about your business, challenges, and goals.',
  },
  {
    number: '03.',
    title: 'Optimization & Support',
    desc: 'Every great solution starts understanding. We take the time to learn about your business, challenges, and goals.',
  },
];

export default function ProcessSection() {
  const [lineWidth, setLineWidth] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setLineWidth(100), 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section className="py-20 lg:py-32 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm lg:text-base text-yellow-400 font-medium tracking-wider uppercase mb-4">
            [ OUR WORKING PROCESS ]
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Transform Your Business
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
              in 3 Simple Steps.
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div ref={containerRef} className="relative">
          {/* Animated Dotted Line */}
          <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent overflow-hidden">
            <motion.div
              className="h-full bg-repeat-x"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='2' viewBox='0 0 10 2' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23facc15'/%3E%3C/svg%3E")`,
                backgroundSize: '10px 2px',
              }}
              initial={{ width: 0 }}
              animate={{ width: isInView ? `${lineWidth}%` : 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  transition: { duration: 0.3 },
                }}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-800 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300 cursor-pointer"
              >
                {/* Floating Number Badge */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center shadow-xl font-bold text-black text-lg"
                >
                  {step.number}
                </motion.div>

                {/* Content */}
                <div className="mt-10 space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                  <button className="flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-yellow-400 transition-colors">
                    Learn More
                    <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
