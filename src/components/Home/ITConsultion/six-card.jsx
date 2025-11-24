'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaCloud,
  FaShieldAlt,
  FaLightbulb,
  FaCode,
  FaNetworkWired,
  FaArrowRight,
} from 'react-icons/fa';

const services = [
  {
    id: 1,
    Icon: FaLaptopCode,
    title: 'Managed IT Services',
    desc: 'Comprehensive IT management, including monitoring, maintenance, and support to keep your business running smoothly.',
    num: '01.',
    highlight: false,
  },
  {
    id: 2,
    Icon: FaCloud,
    title: 'Cloud Computing',
    desc: 'Scalable cloud-based services, including migration, storage, and security, for enhanced flexibility and efficiency.',
    num: '02.',
    highlight: true,
  },
  {
    id: 3,
    Icon: FaShieldAlt,
    title: 'Cybersecurity Solutions',
    desc: 'Advanced security measures, including firewall protection, threat detection, and compliance solutions, to safeguard your business.',
    num: '03.',
    highlight: false,
  },
  {
    id: 4,
    Icon: FaLightbulb,
    title: 'IT Consulting & Strategy',
    desc: 'Expert guidance to optimize your IT infrastructure, streamline operations, and drive digital transformation.',
    num: '04.',
    highlight: false,
  },
  {
    id: 5,
    Icon: FaCode,
    title: 'Software Development',
    desc: 'Custom software solutions tailored to your business needs, including web and mobile application development.',
    num: '05.',
    highlight: false,
  },
  {
    id: 6,
    Icon: FaNetworkWired,
    title: 'Network Infrastructure',
    desc: 'Designing, implementing, and maintaining secure and high-performance network systems to drive solution.',
    num: '06.',
    highlight: false,
  },
];

export default function SixCard() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-gray-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* ──────── NEW HEADER + CTA ──────── */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-16">
          {/* Left – Title */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-xs md:text-sm text-yellow-400 font-medium tracking-widest uppercase mb-3">
              // EXPLORE SERVICES
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Reliable IT Solution for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400">
                Better & Smarter.
              </span>
            </h2>
          </motion.div>

          {/* Right – CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: '0 0 30px rgba(250, 204, 21, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full font-bold text-black shadow-xl"
            >
              Explore More
              <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
        {/* ────────────────────────────────── */}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.Icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative p-8 rounded-2xl border border-gray-700 backdrop-blur-xl transition-all duration-500 group
                  ${service.highlight ? 'bg-yellow-400' : 'bg-gray-800 hover:bg-gray-700'}
                `}
                style={{
                  transform: hovered === i ? 'translateY(-12px)' : 'translateY(0)',
                  boxShadow: hovered === i
                    ? service.highlight
                      ? '0 25px 50px -12px rgba(250, 204, 21, 0.5)'
                      : '0 25px 50px -12px rgba(0, 0, 0, 0.6)'
                    : '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                }}
              >
                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 bg-gray-900 text-yellow-400 text-sm font-bold px-3 py-1 rounded-full border border-gray-700">
                  {service.num}
                </div>

                {/* Icon */}
                <motion.div
                  animate={{ rotate: hovered === i ? 360 : 0, scale: hovered === i ? 1.2 : 1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                    ${service.highlight ? 'bg-gray-900 text-yellow-400' : 'bg-yellow-400 text-gray-900 group-hover:bg-yellow-500'}
                  `}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>

                <h3
                  className={`text-2xl font-bold mb-3 transition-colors duration-300
                  ${service.highlight ? 'text-gray-900' : 'text-white group-hover:text-yellow-400'}
                `}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed transition-colors duration-300
                  ${service.highlight ? 'text-gray-700' : 'text-gray-400 group-hover:text-gray-200'}
                `}
                >
                  {service.desc}
                </p>

                <motion.div className="mt-6">
                  <motion.span
                    whileHover={{ x: 8 }}
                    className={`inline-flex items-center text-sm font-medium transition-colors duration-300
                      ${service.highlight ? 'text-gray-900 hover:text-gray-700' : 'text-yellow-400 hover:text-yellow-300'}
                    `}
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.span>
                </motion.div>

                {/* Hover Overlay */}
                {hovered === i && !service.highlight && (
                  <motion.div
                    layoutId={`overlay-${i}`}
                    className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}