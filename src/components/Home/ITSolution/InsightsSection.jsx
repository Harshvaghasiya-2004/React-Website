'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import { FaRegCalendarAlt } from "react-icons/fa";

const insights = [
  {
    category: 'Solutions',
    author: 'Elinien Loma',
    title: 'How to Successfully Migrate Your Business to the Cloud',
    date: '28 FEB',
    img: 'https://themejunction.net/html/tekmino/demo/assets/images/blog/blog-1.webp',
  },
  {
    category: 'Focus',
    author: 'Elinien Loma',
    title: 'Building a Stronger Workforce with IT Training',
    date: '28 FEB',
    img: 'https://themejunction.net/html/tekmino/demo/assets/images/blog/blog-2.webp',
  },
  {
    category: 'Software',
    author: 'Elinien Loma',
    title: 'Optimizing Your IT Budget: Tips and Strategies',
    date: '28 FEB',
    img: 'https://themejunction.net/html/tekmino/demo/assets/images/blog/blog-3.webp',
  },
];

export default function InsightsSection() {
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
            [ INSIGHTS & INNOVATION ]
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Explore Latest Insights, &
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
              Innovations.
            </span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                y: -16,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
                transition: { duration: 0.3 },
              }}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden border border-gray-800 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300 cursor-pointer"
            >
              {/* Floating Date Badge */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 left-6 z-10 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-xl"
              >
                <FaRegCalendarAlt className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-bold text-yellow-400">{insight.date}</span>
              </motion.div>

              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={insight.img}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Category & Author */}
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full font-medium">
                    {insight.category}
                  </span>
                  <span className="text-gray-500">By {insight.author}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold line-clamp-2 group-hover:text-yellow-400 transition-colors">
                  {insight.title}
                </h3>

                {/* Read More */}
                <button className="flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-yellow-400 transition-colors">
                  Read More
                  <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
