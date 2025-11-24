'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  ArrowUp,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        {/* Wavy Background Effect */}
        <div className="absolute inset-0 opacity-30">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="url(#gradient)"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#facc15" />
                <stop offset="100%" stopColor="#fde047" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Newsletter Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Subscribe to Our Newsletter
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email here..."
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition text-sm sm:text-base"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 rounded-lg transition flex items-center justify-center gap-2 min-w-[60px] sm:min-w-[70px]"
                  aria-label="Subscribe to newsletter"
                >
                  <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  <span className="sr-only sm:not-sr-only sm:inline text-black font-medium text-sm">
                    Subscribe
                  </span>
                </motion.button>
              </div>
              
              {/* App Download Buttons */}
              <div className="flex flex-col xs:flex-row gap-3 mt-4 sm:mt-6">
                {/* Google Play */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-2 rounded-lg flex items-center justify-center sm:justify-start transition hover:bg-gray-700"
                >
                  <img
                    src="https://themejunction.net/html/tekmino/demo/assets/images/footer/google-play.webp"
                    alt="Get it on Google Play"
                    className="h-8 sm:h-9 w-auto object-contain"
                  />
                </motion.a>

                {/* App Store */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-2 rounded-lg flex items-center justify-center sm:justify-start transition hover:bg-gray-700"
                >
                  <img
                    src="https://themejunction.net/html/tekmino/demo/assets/images/footer/app-store.webp"
                    alt="Download on the App Store"
                    className="h-8 sm:h-9 w-auto object-contain"
                  />
                </motion.a>
              </div>
            </motion.div>

            {/* Resources Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="sm:col-span-1"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Resources</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                {[
                  { name: "Contact Us", badge: false },
                  { name: "Privacy Policy", badge: false },
                  { name: "Recognitions", badge: false },
                  { name: "Careers", badge: true },
                  { name: "News", badge: false },
                  { name: "Feedback", badge: false },
                ].map((item) => (
                  <motion.li
                    key={item.name}
                    whileHover={{ x: 5, color: "#facc15" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href="#" className="hover:text-yellow-400 transition flex items-center gap-2 py-1">
                      {item.name}
                      {item.badge && (
                        <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sm:col-span-1"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Services</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                {[
                  "Manage IT Service",
                  "Cloud Computing",
                  "Cyber Security",
                  "Software Develop",
                  "Change Manage",
                  "IT Consulting",
                ].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5, color: "#facc15" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href="#" className="hover:text-yellow-400 transition block py-1">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Office Hours Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="sm:col-span-2 lg:col-span-1 lg:col-start-4"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Office Hours</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                <li className="flex flex-wrap gap-1">
                  <span className="text-gray-400 min-w-[80px]">Thu - Fri</span>
                  <span>8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex flex-wrap gap-1">
                  <span className="text-gray-400 min-w-[80px]">Mon - Wed</span>
                  <span>9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex flex-wrap gap-1">
                  <span className="text-gray-400 min-w-[80px]">Saturday</span>
                  <span>7:00 AM - 9:00 PM</span>
                </li>
                <li className="flex flex-wrap gap-1">
                  <span className="text-yellow-400 font-medium min-w-[80px]">Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              {/* Copyright */}
              <p className="text-center lg:text-left order-2 lg:order-1">
                Tekmino © 2025. All right reserved.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 order-1 lg:order-2">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.2, color: "#facc15" }}
                    className="transition p-2 hover:bg-gray-800 rounded-full"
                    aria-label={`Follow us on ${Icon.name}`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Policies */}
              <div className="flex gap-4 order-3 text-center lg:text-left">
                <a href="#" className="hover:text-yellow-400 transition">
                  Privacy & Policy
                </a>
                <span className="text-gray-600">•</span>
                <a href="#" className="hover:text-yellow-400 transition">
                  Terms & Condition
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-yellow-400 p-3 sm:p-4 rounded-full shadow-lg z-50"
          whileHover={{ scale: 1.1, rotate: -360 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
        </motion.button>
      </footer>
    </>
  );
}