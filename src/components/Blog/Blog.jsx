import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/NewNavbar"; // ← your navbar
import BlogPage from "./BlogPage";

import {
  HiCalendar,
  HiSearch,
  HiChevronRight,
  HiTag,
  HiArrowRight,
} from "react-icons/hi";

import {
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const hoverScale = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.96 },
  };

  // Sample blog posts (replace with real data later)
  const posts = [
    {
      id: 1,
      date: "28 Oct",
      title: "How to Successfully Migrate Your Business to the Cloud",
      author: "Elaine Lorne",
      excerpt:
        "In today’s fast-paced business environment, the key to staying ahead of the competition lies in embracing innovation. AI, Company Name, has specialized in unlocking your business full potential by providing tailored, forward-thinking solutions that drive growth, efficiency, and lasting success.",
      image:
        "https://themejunction.net/html/tekmino/demo/assets/images/blog/blog-details.webp",
    },
    {
      id: 2,
      date: "28 Oct",
      title: "Building a Stronger Workforce with IT Training",
      author: "Elaine Lorne",
      excerpt:
        "In today’s fast-paced business environment, the key to staying ahead of the competition lies in embracing innovation. AI, Company Name, has specialized in unlocking your business full potential by providing tailored, forward-thinking solutions that drive growth, efficiency, and lasting success.",
      image:
        "https://themejunction.net/html/tekmino/demo/assets/images/about/about-img-1.webp",
    },
    {
      id: 3,
      date: "28 Oct",
      title: "How IT Solutions are Transforming Businesses",
      author: "Elaine Lorne",
      excerpt:
        "In today’s fast-paced business environment, the key to staying ahead of the competition lies in embracing innovation. AI, Company Name, has specialized in unlocking your business full potential by providing tailored, forward-thinking solutions that drive growth, efficiency, and lasting success.",
      image:
        "https://themejunction.net/html/tekmino/demo/assets/images/bg/video-bg.webp",
    },
  ];

  const relatedPosts = [
    { title: "The Top-IT Challenges of 2025", date: "06 Oct 2025" },
    { title: "Orchestrate Your IT Budget: Tips and Strategies", date: "02 Jun 2025" },
    { title: "Driving Innovation and Efficiency in Tech", date: "01 Jan 2025" },
  ];

  const categories = [
    { name: "Development", count: 3 },
    { name: "Cybersecurity", count: 2 },
    { name: "Technology", count: 5 },
    { name: "Innovation", count: 8 },
    { name: "Automation", count: 4 },
  ];

  const tags = ["Solution", "Data", "Software", "Tech", "Security", "Focus", "Team", "Optimize", "Cloud", "Drive"];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* ==== NAVBAR ==== */}
      <Navbar />

      <BlogPage />
      
      {/* ==== BLOG LIST + SIDEBAR ==== */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Blog Posts */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 space-y-12"
          >
            {posts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeUp}
                className="bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <img src={post.image} alt={post.title} className="w-full h-64 md:h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400/90 to-yellow-500/90 text-gray-900 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
                      <HiCalendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <p className="text-yellow-400 text-sm mb-1">
                        Solution by <span className="font-medium">{post.author}</span>
                      </p>
                      <h2 className="text-xl md:text-2xl font-bold mb-3 line-clamp-2 hover:text-yellow-300 transition-colors duration-200">
                        {post.title}
                      </h2>
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    </div>
                    <motion.div {...hoverScale} className="mt-4">
                      <Link
                        to={`/blog/${post.id}`}
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-5 py-2 rounded-full font-medium inline-flex items-center gap-2 shadow-md hover:shadow-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
                      >
                        Read More
                        <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-10">
              {[...Array(totalPages)].map((_, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === i + 1
                      ? "bg-yellow-400 w-8 shadow-md shadow-yellow-500/50"
                      : "bg-gray-600 hover:bg-yellow-500 hover:shadow-md hover:shadow-yellow-500/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Search */}
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-5 border border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <h3 className="font-semibold mb-3 text-yellow-300">Search here</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all duration-300"
                />
                <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow-400" />
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-5 border border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <h3 className="font-semibold mb-4 text-yellow-300">Related Posts</h3>
              <div className="space-y-4">
                {relatedPosts.map((rp, i) => {
                  // Array of 3 different images (can add more if needed)
                  const images = [
                    "https://themejunction.net/html/tekmino/demo/assets/images/blog/post-1.webp",
                    "https://themejunction.net/html/tekmino/demo/assets/images/blog/post-2.webp",
                    "https://themejunction.net/html/tekmino/demo/assets/images/blog/post-3.webp",
                  ];

                  return (
                    <motion.div
                      key={i}
                      whileHover={{ x: 4 }}
                      className="flex gap-3 cursor-pointer group"
                    >
                      <img
                        src={images[i % images.length]} // rotate images
                        alt="Related Post"
                        className="w-16 h-16 rounded-lg object-cover group-hover:shadow-md group-hover:shadow-yellow-500/20 transition-shadow duration-300"
                      />
                      <div>
                        <p className="text-sm font-medium line-clamp-2 hover:text-yellow-400 transition-colors duration-200">
                          {rp.title}
                        </p>
                        <p className="text-xs text-gray-400">{rp.date}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-5 border border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <h3 className="font-semibold mb-4 text-yellow-300">Categories</h3>
              <ul className="space-y-2">
                {categories.map((cat, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 4 }}
                    className="flex justify-between text-sm cursor-pointer group"
                  >
                    <span className="hover:text-yellow-400 transition-colors duration-200 group-hover:translate-x-1">
                      {cat.name}
                    </span>
                    <span className="text-gray-500">({cat.count})</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-5 border border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <h3 className="font-semibold mb-4 text-yellow-300">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1 bg-gray-700/80 border border-gray-600 rounded-full text-xs hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-gray-900 hover:border-yellow-400 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:shadow-yellow-500/20"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
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