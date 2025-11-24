'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaStar } from 'react-icons/fa';

const team = [
  {
    name: "Eade Marren",
    role: "Chief Executive",
    image: "https://themejunction.net/html/tekmino/demo/assets/images/team/team-1.webp",
    emoji: "rocket"
  },
  {
    name: "Savannah Nguen",
    role: "Operations Head",
    image: "https://themejunction.net/html/tekmino/demo/assets/images/team/team-2.webp",
    emoji: "gear"
  },
  {
    name: "Cameron William",
    role: "Marketing Lead",
    image: "https://themejunction.net/html/tekmino/demo/assets/images/team/team-3.webp",
    emoji: "chart"
  },
  {
    name: "Olivia Fox",
    role: "Business Director",
    image: "https://themejunction.net/html/tekmino/demo/assets/images/team/team-4.webp",
    emoji: "target"
  }
];

export default function TeamSection() {
  return (
    <div className="bg-gray-900 text-white overflow-hidden relative py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-16"
        >
          <p className="text-yellow-400 text-sm font-bold tracking-wider mb-4">
            [ MEET OUR TEAM ]
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Creative Minds Behind<br />
              <span className="text-yellow-400">our Team</span>
            </h1>

            <div className="flex items-center gap-4">
              <p className="text-gray-400 text-sm md:text-base max-w-xs">
                Our teams are customized to meet your unique ideas.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
              >
                More Member
                <FaArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ 
                y: -16,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-xl font-bold mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>

              {/* Emoji Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-xl">
                  {member.emoji === "rocket" ? "rocket" : 
                   member.emoji === "gear" ? "gear" : 
                   member.emoji === "chart" ? "chart" : 
                   member.emoji === "target" ? "target" : "star"}
                </span>
              </motion.div>

              {/* Hover Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                layoutId={`glow-${index}`}
              />

              {/* Bottom Accent Line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-yellow-400 w-0 group-hover:w-full transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}