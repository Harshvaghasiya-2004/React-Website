import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/NewNavbar"; // ← your navbar
import BlogDetailsPage from "./BlogDetailsPage";

import {
  HiUserCircle,
  HiCalendar,
  HiChatAlt,
  HiSearch,
  HiTag,
  HiArrowRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

import { FiTwitter, FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";

export default function BlogDetails() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const hoverScale = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.96 },
  };

  const quoteVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  // Sample data (replace with real data later)
  const post = {
    title: "How to Successfully Migrate Your Business to the Cloud",
    author: "Burden Nicolas",
    date: "28 December, 2025",
    comments: 59,
    image:
      "https://themejunction.net/html/tekmino/demo/assets/images/blog/blog-details.webp",
  };

  const relatedPosts = [
    { title: "The Top-IT Challenges of 2025", date: "06 Oct 2025" },
    {
      title: "Orchestrate Your IT Budget: Tips and Strategies",
      date: "02 Jun 2025",
    },
    { title: "Driving Innovation and Efficiency in Tech", date: "01 Jan 2025" },
  ];

  const categories = [
    { name: "Development", count: 3 },
    { name: "Cybersecurity", count: 2 },
    { name: "Technology", count: 5 },
    { name: "Innovation", count: 8 },
    { name: "Automation", count: 4 },
  ];

  const tags = [
    "Solution",
    "Data",
    "Software",
    "Tech",
    "Security",
    "Focus",
    "Team",
    "Optimize",
    "Cloud",
    "Drive",
  ];

  const comments = [
    {
      author: "Owen Parker",
      date: "June 15, 2024 at 05:00 pm",
      text: "Recently migrated our entire infrastructure to the cloud, and the process has been smoother than we expected. The step-by-step guidance in this article was invaluable.",
      image:
        "https://themejunction.net/html/tekmino/demo/assets/images/blog/avatar-1.webp",
    },
    {
      author: "Hunter James",
      date: "June 10, 2024 at 06:30 pm",
      text: "As a small business owner, I was hesitant about cloud migration due to cost concerns. This article clearly explains the long-term savings and scalability benefits.",
      image:
        "https://themejunction.net/html/tekmino/demo/assets/images/blog/avatar-2.webp",
    },
  ];

  return (
    <div className=" bg-gray-900 text-white overflow-hidden">
      {/* ==== NAVBAR ==== */}
      <Navbar />

      <BlogDetailsPage />

      {/* ==== MAIN CONTENT + SIDEBAR ==== */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Featured Image */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 md:h-[500px] object-cover"
              />
            </motion.div>

            {/* Title & Meta */}
            <motion.div variants={fadeUp}>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 hover:text-yellow-300 transition-colors duration-300">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <HiUserCircle className="w-5 h-5 text-yellow-400" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCalendar className="w-5 h-5 text-yellow-400" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiChatAlt className="w-5 h-5 text-yellow-400" />
                  <span>{post.comments} Comments</span>
                </div>
              </div>
            </motion.div>

            {/* Article Body */}
            <motion.div
              variants={fadeUp}
              className="prose prose-invert max-w-none text-gray-300 space-y-6"
            >
              <p>
                In today’s fast-paced business environment, migrating to the
                cloud has become more of a necessity than a choice. The cloud
                offers businesses unmatched flexibility, scalability, and cost
                efficiency. However, making the shift can be daunting without
                proper planning and execution. This article will guide you
                through the key steps to ensure a smooth and successful
                migration.
              </p>

              <motion.blockquote
                variants={quoteVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border-l-4 border-yellow-400 pl-6 py-4 my-8 bg-gray-800/50 rounded-r-lg shadow-inner"
              >
                <p className="text-lg italic">
                  “Migrating to the cloud is a journey toward greater
                  flexibility, security, and scalability, where businesses
                  unlock new capabilities, improve collaboration, and enhance
                  overall performance.”
                </p>
                <cite className="block mt-3 text-sm text-yellow-400">
                  — Kevin Hicks
                </cite>
              </motion.blockquote>

              <h2 className="text-2xl font-bold text-white hover:text-yellow-300 transition-colors duration-300">
                Understand Why You’re Migrating
              </h2>
              <p>
                Before diving into the technical aspects of migration, it’s
                important to understand the why behind your decision. Every
                business has different needs, so it’s critical to identify the
                key benefits you expect from the cloud. Some common reasons for
                migrating include improved scalability, cost reduction, enhanced
                security, and better disaster recovery capabilities.
              </p>

              {/* Image Grid */}
              <div className="grid md:grid-cols-2 gap-4 my-8">
                <img
                  src="https://themejunction.net/html/tekmino/demo/assets/images/blog/blog-9.webp"
                  alt="Team collaboration"
                  className="rounded-lg hover:shadow-md hover:shadow-yellow-500/20 transition-shadow duration-300"
                />
                <img
                  src="https://themejunction.net/html/tekmino/demo/assets/images/blog/blog-10.webp"
                  alt="Cloud dashboard"
                  className="rounded-lg hover:shadow-md hover:shadow-yellow-500/20 transition-shadow duration-300"
                />
              </div>

              <h2 className="text-2xl font-bold text-white hover:text-yellow-300 transition-colors duration-300">
                Key Benefits of Cloud Migration
              </h2>
              <ul className="space-y-3">
                {[
                  "Seamless IT Administration",
                  "High Data Security",
                  "Flexible Storage Options",
                  "Compliance and Support",
                  "Built-in Redundancy",
                  "24/7 Cloud Monitoring",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <span className="hover:text-yellow-300 transition-colors duration-200">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="my-10">
                <img
                  src="https://themejunction.net/html/tekmino/demo/assets/images/blog/blog-video.webp"
                  alt="Meeting"
                  className="rounded-lg w-full hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300"
                />
              </div>

              <h2 className="text-2xl font-bold text-white hover:text-yellow-300 transition-colors duration-300">
                Conclusion
              </h2>
              <p>
                Migrating to the cloud can significantly enhance your business
                operations. By planning carefully, choosing the right provider,
                and following best practices, you can ensure a smooth
                transition. The long-term benefits—cost savings, scalability,
                and improved performance—make cloud migration a strategic
                investment for any forward-thinking business.
              </p>

              {/* Social Share */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-700">
                <span className="text-sm text-gray-400">Share:</span>
                <div className="flex gap-3">
                  {[
                    { Icon: FiTwitter, label: "Twitter" },
                    { Icon: FiLinkedin, label: "LinkedIn" },
                    { Icon: FiFacebook, label: "Facebook" },
                  ].map(({ Icon, label }, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1.2 }}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-yellow-400 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-yellow-500/30"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Post Navigation */}
              <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-700">
                <motion.button
                  {...hoverScale}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  <HiChevronLeft className="w-5 h-5" />
                  Previous
                </motion.button>
                <div className="flex gap-2">
                  {[1, 2, 3].map((n) => (
                    <motion.div
                      key={n}
                      whileHover={{ scale: 1.3 }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        n === 2
                          ? "bg-yellow-400 shadow-md shadow-yellow-500/50"
                          : "bg-gray-600 hover:bg-yellow-500"
                      }`}
                    />
                  ))}
                </div>
                <motion.button
                  {...hoverScale}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Next
                  <HiChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Comments Section */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold mb-6 hover:text-yellow-300 transition-colors duration-300">
                Top Comments ({comments.length})
              </h3>
              <div className="space-y-6">
                {comments.map((c, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10"
                  >
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <img
                        src={c.image}
                        alt={c.author}
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover hover:shadow-md hover:shadow-yellow-500/30 transition-shadow duration-300"
                      />

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold hover:text-yellow-300 transition-colors duration-200">
                            {c.author}
                          </h4>
                          <span className="text-xs text-gray-400">
                            {c.date}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{c.text}</p>
                        <button className="text-xs text-yellow-400 mt-2 hover:underline hover:text-yellow-300 transition-colors duration-200">
                          Reply
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Leave a Comment */}
              <div className="mt-10 bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                <h3 className="text-xl font-bold mb-5 text-yellow-300">
                  Leave a Comment
                </h3>
                <form className="space-y-5">
                  <textarea
                    rows={5}
                    placeholder="Write Your Comment *"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all duration-300 resize-none"
                  />
                  <div className="grid sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all duration-300"
                    />
                    <input
                      type="email"
                      placeholder="Your Email *"
                      className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all duration-300"
                    />
                    <input
                      type="url"
                      placeholder="Website"
                      className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all duration-300"
                    />
                  </div>
                  <motion.button
                    {...hoverScale}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300"
                  >
                    Submit Now
                    <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
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
              <h3 className="font-semibold mb-3 text-yellow-300">
                Search here
              </h3>
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
              <h3 className="font-semibold mb-4 text-yellow-300">
                Related Posts
              </h3>
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
    </div>
  );
}
