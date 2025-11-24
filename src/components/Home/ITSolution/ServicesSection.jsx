'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import { GiHeadphones, GiSparkles, GiDiamondTrophy } from 'react-icons/gi';
import { IoRocketSharp } from 'react-icons/io5';

/* Tiny custom useInView – no external lib */
function useInView({ threshold = 0.1, triggerOnce = true } = {}) {
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

/* Services Data */
const services = [
  {
    number: '01.',
    icon: GiHeadphones,
    title: 'Managed IT Services',
    desc: 'Comprehensive IT management, including monitoring, maintenance.',
    features: ['24/7 system monitoring', 'IT support & troubleshooting', 'Remote IT assistance'],
  },
  {
    number: '02.',
    icon: IoRocketSharp,
    title: 'Cloud Computing',
    desc: 'Scalable cloud-based services, including migration, storage, and security.',
    features: ['Scalable cloud storage', 'SaaS, PaaS, and IaaS integration', 'Hybrid & multi-cloud'],
  },
  {
    number: '03.',
    icon: GiDiamondTrophy,
    title: 'Cybersecurity Solutions',
    desc: 'Advanced security measures, including firewall protection, threat detection.',
    features: ['Firewall & network security', 'Threat detection & prevention', 'Endpoint protection'],
  },
  {
    number: '04.',
    icon: GiSparkles,
    title: 'IT Consulting & Strategy',
    desc: 'Expert guidance to optimize IT infrastructure, streamline operations, and drive.',
    features: ['Transformation planning', 'IT infrastructure optimization', 'Risk assessment'],
  },
  {
    number: '05.',
    icon: IoRocketSharp,
    title: 'Network Infrastructure',
    desc: 'Expert guidance to optimize IT infrastructure, streamline operations, and drive.',
    features: ['Transformation planning', 'IT infrastructure optimization', 'Risk assessment'],
  },
];

/* Component */
export default function ServicesSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const float = {
    y: [0, -10, 0],
    transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
  };

  return (
    <section className="py-20 lg:py-32 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center lg:text-left mb-16"
        >
          <p className="text-sm lg:text-base text-yellow-400 font-medium tracking-wider uppercase mb-4">
            [ EXPLORE SERVICES ]
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
              Reliable IT Solution
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                for a Smarter.
              </span>
            </h2>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(250, 204, 21, 0.5)',
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
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  y: -12,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  transition: { duration: 0.3 },
                }}
                className="group relative bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-yellow-400/40 transition-all duration-300 cursor-pointer"
              >
                {/* Number */}
                <div className="absolute top-4 right-4 text-xs font-bold text-gray-600">
                  {service.number}
                </div>

                {/* Floating Icon */}
                <motion.div
                  animate={float}
                  className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center shadow-xl mb-6"
                >
                  <Icon className="w-8 h-8 text-black" />
                </motion.div>

                {/* Title & Desc */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1 h-1 bg-yellow-400 rounded-full" />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <button className="text-sm font-medium text-gray-400 group-hover:text-yellow-400 flex items-center gap-1 transition-colors">
                  Learn More
                  <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
