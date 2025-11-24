import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/NewNavbar";
import ProjectPage from "./ProjectPage";

import {
  HiArrowRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

import {
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const stagger = { visible: { transition: { staggerChildren: 0.15 } } };
  const hoverScale = { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } };

  const projects = [
    {
      id: 1,
      category: "Solution",
      title: "Cloud Migration Success",
      image:
        "https://themejunction.net/html/tekmino/demo/assets/images/project/project-1.webp",
    },
    {
      id: 2,
      category: "Solution",
      title: "Digital Growth Strategy",
      image:
        "https://themejunction.net/html/tekmino/demo/assets/images/project/project-2.webp",
    },
    {
      id: 3,
      category: "Solution",
      title: "Mobile App Development",
      image:
        "https://themejunction.net/html/tekmino/demo/assets/images/project/project-3.webp",
    },
    {
      id: 4,
      category: "Solution",
      title: "Business Transformation",
      image:
        "https://themejunction.net/html/tekmino/demo/assets/images/project/project-4.webp",
    },
    {
      id: 5,
      category: "Solution",
      title: "Customer Experience",
      image:
        "https://themejunction.net/html/tekmino/demo/assets/images/project/project-5.webp",
    },
    {
      id: 6,
      category: "Solution",
      title: "Process Optimization",
      image:
        "https://themejunction.net/html/tekmino/demo/assets/images/project/project-6.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <Navbar />
      <ProjectPage />

      {/* === PROJECT GRID === */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              className="group relative bg-gray-800/70 backdrop-blur-sm rounded-2xl 
              overflow-hidden border border-gray-700 hover:border-yellow-400 
              transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 w-full"
            >
              {/* FIXED IMAGE AREA */}
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* OVERLAY */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* CONTENT */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6 
                transform translate-y-10 group-hover:translate-y-0 
                transition-transform duration-300"
              >
                <span
                  className="inline-block bg-yellow-400/20 text-yellow-300 
                px-3 py-1 rounded-full text-xs font-medium mb-3"
                >
                  {project.category}
                </span>

                <h3
                  className="text-xl font-bold mb-3 leading-snug 
                group-hover:text-yellow-300 transition-colors duration-200"
                >
                  {project.title}
                </h3>

                <motion.div {...hoverScale}>
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 mb-10 text-yellow-400 
                    hover:text-white font-medium transition-colors duration-200"
                  >
                    View Details
                    <HiArrowRight
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* === PAGINATION === */}
       <div className="flex justify-center items-center gap-3 mt-16">
  {/* Prev Button */}
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center 
    text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-all duration-300"
    disabled={currentPage === 1}
  >
    <HiChevronLeft className="w-5 h-5" />
  </motion.button>

  {/* FIXED DOTS */}
  {[...Array(totalPages)].map((_, i) => (
    <motion.button
      key={i}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setCurrentPage(i + 1)}
      animate={{
        scale: currentPage === i + 1 ? 1.4 : 1,
        backgroundColor: currentPage === i + 1 ? "#FACC15" : "#4B5563",
      }}
      transition={{ duration: 0.25 }}
      className="w-3 h-3 rounded-full"
    />
  ))}

  {/* Next Button */}
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center 
    text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-all duration-300"
    disabled={currentPage === totalPages}
  >
    <HiChevronRight className="w-5 h-5" />
  </motion.button>
</div>

      </section>

      {/* === CTA BANNER === */}
      <section className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 py-12 mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent" />

        <div className="container mx-auto px-6 flex flex-col md:flex-row 
        items-center justify-between gap-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Don't Miss Out <br className="hidden md:block" />
            <span className="text-gray-800">the Future!</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="Enter email here..."
              className="px-5 py-3 rounded-full text-gray-900 placeholder-gray-600 
              focus:outline-none focus:ring-4 focus:ring-yellow-400/50 flex-1 md:flex-initial shadow-lg"
            />

            <motion.button
              {...hoverScale}
              className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold 
              flex items-center gap-2 justify-center shadow-xl hover:shadow-2xl 
              hover:shadow-yellow-500/30 transition-all duration-300"
            >
              Subscribe Now
              <HiArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <a
              href="#"
              className="text-gray-900 hover:text-gray-800 transition-all duration-300 hover:scale-110"
            >
              <FiTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-800 transition-all duration-300 hover:scale-110"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-800 transition-all duration-300 hover:scale-110"
            >
              <FiInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-800 transition-all duration-300 hover:scale-110"
            >
              <FiFacebook className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* === SOCIAL SIDEBAR === */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 
        flex-col gap-5"
      >
        <a
          href="#"
          className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
        >
          <FiTwitter className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
        >
          <FiLinkedin className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
        >
          <FiInstagram className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
        >
          <FiFacebook className="w-5 h-5" />
        </a>

        <span
          className="text-xs text-gray-500 rotate-180 [writing-mode:vertical-rl] 
          tracking-widest hover:text-yellow-400 transition-colors duration-300"
        >
          Follow Us
        </span>
      </motion.div>
    </div>
  );
}
