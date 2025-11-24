import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/NewNavbar"; // ← your navbar
import ProjectDetailsPage from "./ProjectDetailsPage";

import {
  HiArrowLeft,
  HiShare,
  HiTag,
  HiCalendar,
  HiArrowRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

import { FiTwitter, FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";

export default function ProjectDetails() {
  const { id } = useParams();
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  const stagger = { visible: { transition: { staggerChildren: 0.12 } } };
  const hoverScale = { whileHover: { scale: 1.05 }, whileTap: { scale: 0.96 } };
  const imageHover = {
    whileHover: { scale: 1.08 },
    transition: { duration: 0.5 },
  };

  // Sample project data
  const project = {
    id: 1,
    title:
      "Cloud Migration System: Transforming IT Infrastructure for Scalability",
    category: "IT Solutions",
    client: "Innovative Interiors Group",
    budget: "$8,050 USD",
    location: "Maplewood Heights, CA",
    date: "Oct 22, 2025",
    image:
      "https://themejunction.net/html/tekmino/demo/assets/images/project/project-details.webp",
    description:
      "Cloud migration has become a crucial strategy for businesses looking to enhance scalability, reduce operational costs, and improve performance. This project involved migrating a legacy on‑premise system to a cloud‑based environment, resulting in a 40% reduction in infrastructure costs and seamless scalability.",
    strategies: [
      "Scalable IT Infrastructure",
      "High Data Security",
      "Disaster Recovery Solutions",
      "Flexible Storage Options",
      "Compliance and Support",
      "Reduced Hardware",
      "24/7 Cloud Monitoring",
    ],
    gallery: [
      "https://themejunction.net/html/tekmino/demo/assets/images/project/project-details.webp",
      "https://themejunction.net/html/tekmino/demo/assets/images/project/project-gallery-1.webp",
      "https://themejunction.net/html/tekmino/demo/assets/images/project/project-gallery-3.webp",
      "https://themejunction.net/html/tekmino/demo/assets/images/project/project-gallery-2.webp",
    ],
  };

  const nextSlide = () =>
    setCarouselIndex((prev) => (prev + 1) % project.gallery.length);
  const prevSlide = () =>
    setCarouselIndex(
      (prev) => (prev - 1 + project.gallery.length) % project.gallery.length
    );

  return (
    <div className=" bg-gray-900 text-white overflow-hidden">
      {/* ==== NAVBAR ==== */}
      <Navbar />
      <ProjectDetailsPage />

      {/* ==== PROJECT DETAILS ==== */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Main Image */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10"
              {...imageHover}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 md:h-[600px] object-cover"
              />
            </motion.div>

            {/* Title & Meta */}
            <motion.div variants={fadeUp} className="space-y-4">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <HiTag className="w-5 h-5 text-yellow-400" />
                  <span>{project.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCalendar className="w-5 h-5 text-yellow-400" />
                  <span>{project.date}</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold hover:text-yellow-300 transition-colors duration-300">
                {project.title}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={fadeUp}
              className="text-gray-300 leading-relaxed space-y-4"
            >
              <p>{project.description}</p>
              <p>
                The company’s previous server setup was becoming increasingly
                expensive, requiring frequent hardware upgrades and maintenance.
                Our team designed a cloud migration strategy that included
                phased data transfer, automated backups, and real‑time
                monitoring.
              </p>
            </motion.div>

            {/* Strategies */}
            <motion.div variants={fadeUp}>
              <h3 className="text-xl font-bold mb-4 text-yellow-400 hover:text-yellow-300 transition-colors duration-200">
                Cloud Migration Strategies
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.strategies.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-gray-300 cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <span className="hover:text-yellow-300 transition-colors duration-200">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Gallery Carousel */}
            <motion.div variants={fadeUp} className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-yellow-400 hover:text-yellow-300 transition-colors duration-200">
                Project Gallery
              </h3>
              <div className="relative rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                <img
                  src={project.gallery[carouselIndex]}
                  alt={`Gallery ${carouselIndex + 1}`}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex justify-center gap-4 p-4 bg-gradient-to-t from-gray-900">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevSlide}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-all duration-300"
                  >
                    <HiChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextSlide}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-all duration-300"
                  >
                    <HiChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Back & Share */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-700"
            >
              <motion.button
                {...hoverScale}
                className="flex items-center gap-2 text-yellow-400 hover:text-white font-medium transition-colors duration-300"
              >
                <HiShare className="w-5 h-5" />
                Share Project
              </motion.button>
              <motion.div {...hoverScale}>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300"
                >
                  <HiArrowLeft className="w-5 h-5" />
                  Back to Projects
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Project Info */}
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200">
                Project Info
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400">Client</span>
                  <span className="font-medium">{project.client}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400">Budget</span>
                  <span className="font-medium">{project.budget}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400">Location</span>
                  <span className="font-medium">{project.location}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400">Category</span>
                  <span className="font-medium">{project.category}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400">Date</span>
                  <span className="font-medium">{project.date}</span>
                </li>
              </ul>
            </div>

            {/* CTA Card */}
            <motion.div
              {...hoverScale}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-1 rounded-2xl"
            >
              <div className="bg-gray-900 p-6 rounded-2xl text-center">
                <h4 className="text-xl font-bold text-white mb-2">
                  Innovative IT Solutions
                </h4>
                <p className="text-sm text-gray-300 mb-4">
                  Starting from{" "}
                  <span className="text-yellow-400 font-bold">$3,150</span>
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300"
                >
                  Get Started
                  <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </motion.aside>
        </div>
      </section>

      {/* ==== CTA BANNER ==== */}
      <section className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 py-12 mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent" />
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Don't Miss Out
            <br className="hidden md:block" />
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
              className="px-5 py-3 rounded-full text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 flex-1 md:flex-initial shadow-lg"
            />
            <motion.button
              {...hoverScale}
              className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 justify-center shadow-xl hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300"
            >
              Subscribe Now
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <a href="#" className="text-gray-900 hover:text-gray-800 transition-all duration-300 hover:scale-110">
              <FiTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-800 transition-all duration-300 hover:scale-110">
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-800 transition-all duration-300 hover:scale-110">
              <FiInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-800 transition-all duration-300 hover:scale-110">
              <FiFacebook className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ==== SOCIAL SIDEBAR (optional) ==== */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-5"
      >
        <a href="#" className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110">
          <FiTwitter className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110">
          <FiLinkedin className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110">
          <FiInstagram className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110">
          <FiFacebook className="w-5 h-5" />
        </a>
        <span className="text-xs text-gray-500 rotate-180 [writing-mode:vertical-rl] tracking-widest hover:text-yellow-400 transition-colors duration-300">
          Follow Us
        </span>
      </motion.div>
    </div>
  );
}