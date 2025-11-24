"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Eade Marren",
    role: "Chief Executive",
    image:
      "https://themejunction.net/html/tekmino/demo/assets/images/team/team-1.webp",
    emoji: "rocket",
  },
  {
    name: "Savannah Nguen",
    role: "Operations Head",
    image:
      "https://themejunction.net/html/tekmino/demo/assets/images/team/team-2.webp",
    emoji: "gear",
  },
  {
    name: "Cameron William",
    role: "Marketing Lead",
    image:
      "https://themejunction.net/html/tekmino/demo/assets/images/team/team-3.webp",
    emoji: "chart",
  },
  {
    name: "Olivia Fox",
    role: "Business Director",
    image:
      "https://themejunction.net/html/tekmino/demo/assets/images/team/team-4.webp",
    emoji: "target",
  },
  {
    name: "Alex Turner",
    role: "Tech Lead",
    image:
      "https://themejunction.net/html/tekmino/demo/assets/images/team/team-5.webp",
    emoji: "code",
  },
  {
    name: "Jordan Lee",
    role: "Design Head",
    image:
      "https://themejunction.net/html/tekmino/demo/assets/images/team/team-6.webp",
    emoji: "palette",
  },
  {
    name: "Taylor Brooks",
    role: "Finance Director",
    image:
      "https://themejunction.net/html/tekmino/demo/assets/images/team/team-7.webp",
    emoji: "dollar",
  },
  {
    name: "Morgan Reed",
    role: "HR Manager",
    image:
      "https://themejunction.net/html/tekmino/demo/assets/images/team/team-8.webp",
    emoji: "team",
  },
];

const itemsPerPage = 4;
const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

export default function TeamCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPage = (page) => setCurrentPage(page);
  const goToPrev = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  const goToNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);

  const startIndex = currentPage * itemsPerPage;
  const visibleMembers = teamMembers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <div className="bg-gray-900 text-white overflow-hidden relative py-24">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-10"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <AnimatePresence mode="wait">
              {visibleMembers.map((member, idx) => (
                <motion.div
                  key={`${currentPage}-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition-all duration-500 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>

                  {/* Name & Role */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-400">{member.role}</p>
                  </div>

                  {/* Yellow Emoji Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <span className="text-xl">
                      {member.emoji === "rocket"
                        ? "rocket"
                        : member.emoji === "gear"
                        ? "gear"
                        : member.emoji === "chart"
                        ? "chart"
                        : member.emoji === "target"
                        ? "target"
                        : member.emoji === "code"
                        ? "code"
                        : member.emoji === "palette"
                        ? "palette"
                        : member.emoji === "dollar"
                        ? "dollar"
                        : "team"}
                    </span>
                  </motion.div>

                  {/* HOVER: 3 Social Icons */}
                  <AnimatePresence>
                    {hoveredIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-x-0 bottom-20 flex justify-center gap-3"
                      >
                        <motion.a
                          href="#"
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#0077b5] transition-all duration-300"
                        >
                          <FaLinkedin className="w-5 h-5 text-white" />
                        </motion.a>
                        <motion.a
                          href="#"
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#1877f2] transition-all duration-300"
                        >
                          <FaFacebook className="w-5 h-5 text-white" />
                        </motion.a>
                        <motion.a
                          href="#"
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] transition-all duration-300"
                        >
                          <FaInstagram className="w-5 h-5 text-white" />
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom Yellow Line */}
                  <motion.div className="absolute bottom-0 left-0 h-1 bg-yellow-400 w-0 group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          {/* Pagination */}
          <div className="flex justify-center items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrev}
              className="p-3 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <FaArrowLeft className="w-5 h-5" />
            </motion.button>

            {/* FIXED DOTS */}
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => goToPage(i)}
                  animate={{
                    scale: currentPage === i ? 1.3 : 1,
                    backgroundColor: currentPage === i ? "#EAB308" : "#4B5563",
                  }}
                  className="w-3 h-3 rounded-full transition-all duration-300"
                />
              ))}
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
        </div>
      </div>
    </>
  );
}
