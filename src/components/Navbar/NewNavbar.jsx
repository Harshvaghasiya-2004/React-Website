"use client";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Phone,
  Globe,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/primary-logo.webp";

const MotionLink = motion(Link);

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const effectivePath =
    location.pathname === "/" ? "/managed-it" : location.pathname;

  const menuLinks = [
    {
      name: "Home",
      submenu: [
        { label: "IT Solution", path: "/it-solution" },
        { label: "IT Consulting", path: "/it-consulting" },
        { label: "Managed IT", path: "/managed-it" },
      ],
    },
    {
      name: "Pages",
      submenu: [
        { label: "About Us", path: "/about" },
        { label: "Team", path: "/team" },
        { label: "Team Details", path: "/team-details" },
        { label: "FAQ", path: "/faq" },
        { label: "Pricing Page", path: "/pricing" },
        { label: "Error 404", path: "/error" },
      ],
    },
    {
      name: "Services",
      submenu: [
        { label: "Services", path: "/services" },
        { label: "Service Details", path: "/service-details" },
      ],
    },
    {
      name: "Projects",
      submenu: [
        { label: "Projects", path: "/projects" },
        { label: "Project Details", path: "/project-details" },
      ],
    },
    {
      name: "Blog",
      submenu: [
        { label: "Blog", path: "/blog" },
        { label: "Blog Detail", path: "/blog-details" },
      ],
    },
    { name: "Contact", submenu: null, path: "/contact" },
  ];

  const isMainActive = (item) =>
    item.submenu
      ? item.submenu.some((sub) => effectivePath === sub.path)
      : effectivePath === item.path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white border-b border-gray-800">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center text-sm">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2"
          >
            <span className="hidden sm:inline">
              Fast & Reliable IT Solution Services.
            </span>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-yellow-400 font-medium flex items-center gap-1 hover:underline"
            >
              Join Now <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-1 text-yellow-400">
              <span className="hidden sm:inline">9 am to 6 pm (mon-sat)</span>
            </div>
            <motion.a
              href="tel:+1234567890"
              whileHover={{ color: "#facc15" }}
              className="flex items-center gap-1 hover:text-yellow-400 transition"
            >
              <Phone className="w-4 h-4" /> Support
            </motion.a>
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 hover:text-yellow-400 transition"
              >
                <Globe className="w-4 h-4" /> English{" "}
                <ChevronDown className="w-3 h-3" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2 w-32 z-50"
                  >
                    {["English", "Español", "Français"].map((lang) => (
                      <a
                        key={lang}
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-800 hover:text-yellow-400 transition"
                      >
                        {lang}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-gray-950/95 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-auto cursor-pointer"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-white">
            {menuLinks.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => item.submenu && setDropdown(item.name)}
                onMouseLeave={() => item.submenu && setDropdown(null)}
              >
                {item.submenu ? (
                  <button
                    className={`flex items-center gap-1 font-medium transition ${
                      isMainActive(item)
                        ? "text-yellow-400"
                        : "text-gray-300 hover:text-yellow-400"
                    }`}
                  >
                    {item.name} <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <MotionLink
                    to={item.path}
                    className={`font-medium transition ${
                      isMainActive(item)
                        ? "text-yellow-400"
                        : "text-gray-300 hover:text-yellow-400"
                    }`}
                  >
                    {item.name}
                  </MotionLink>
                )}

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {dropdown === item.name && item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-3 z-50"
                    >
                      {item.submenu.map((sub, i) => (
                        <MotionLink
                          key={i}
                          to={sub.path}
                          className={`block px-5 py-2 text-sm transition ${
                            effectivePath === sub.path
                              ? "bg-gray-800 text-yellow-400"
                              : "hover:bg-gray-800 hover:text-yellow-400"
                          }`}
                        >
                          {sub.label}
                        </MotionLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full hover:bg-gray-800 transition"
            >
              <Search className="w-5 h-5 text-white" />
            </motion.button>

            <MotionLink
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition shadow-lg"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </MotionLink>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="bg-gray-900 border-t border-gray-800 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-4">
                <div className="flex items-center max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-5 py-3 bg-gray-800 text-white rounded-l-lg focus:outline-none"
                  />
                  <button className="px-8 py-3 bg-yellow-400 text-black font-medium rounded-r-lg hover:bg-yellow-500 transition">
                    Search
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-0 bg-gray-950 h-screen z-50 lg:hidden"
            >
              <div className="container px-6 py-20 h-full relative z-100">
                {/* Close Button */}
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ type: "spring", damping: 20 }}
                  className="absolute top-6 right-6 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>

                <div className="flex flex-col gap-6 text-2xl font-medium bg-black p-6 rounded-lg shadow-xl">
                  {menuLinks.map((item, index) => (
                    <div key={index}>
                      {item.submenu ? (
                        <button
                          onClick={() =>
                            setDropdown(
                              dropdown === item.name ? null : item.name
                            )
                          }
                          className={`w-full text-left flex justify-between items-center pl-2 transition ${
                            isMainActive(item)
                              ? "text-yellow-400"
                              : "text-white hover:text-yellow-400"
                          }`}
                        >
                          {item.name}{" "}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              dropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      ) : (
                        <MotionLink
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block transition ${
                            isMainActive(item)
                              ? "text-yellow-400"
                              : "text-white hover:text-yellow-400"
                          }`}
                        >
                          {item.name}
                        </MotionLink>
                      )}

                      <AnimatePresence>
                        {dropdown === item.name && item.submenu && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-6 mt-3 flex flex-col gap-3 text-lg"
                          >
                            {item.submenu.map((sub, i) => (
                              <MotionLink
                                key={i}
                                to={sub.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`transition ${
                                  effectivePath === sub.path
                                    ? "text-yellow-400 font-semibold"
                                    : "text-gray-400 hover:text-yellow-400"
                                }`}
                              >
                                {sub.label}
                              </MotionLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  <MotionLink
                    to="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-8 flex items-center justify-center gap-3 bg-yellow-400 text-black font-bold px-6 py-4 rounded-full w-fit hover:bg-yellow-500 transition"
                  >
                    Get Started <ArrowRight className="w-6 h-6" />
                  </MotionLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
