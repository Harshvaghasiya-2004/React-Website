import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaTh, FaPhone, FaGlobe } from "react-icons/fa";
import logo from "../../assets/logo/primary-logo.webp";
import { HiArrowRight, HiChevronDown } from "react-icons/hi2";

const MotionLink = motion(Link);

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [langOpen, setLangOpen] = useState(false);

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

  const isMainActive = (item) => {
    if (!item.submenu) return effectivePath === item.path;
    return item.submenu.some((sub) => effectivePath === sub.path);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white border-b border-gray-800 hidden lg:flex justify-between items-center w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-2 text-sm">
        <div className="flex items-center gap-2">
          <span>Fast & Reliable IT Solution Services.</span>
          <Link
            to="/contact"
            className="text-yellow-400 font-medium flex items-center gap-1 hover:underline"
          >
            Join Now <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="text-yellow-400">9 am to 6 pm (mon-sat)</span>
          <Link
            to="tel:+1234567890"
            className="flex items-center gap-1 hover:text-yellow-400 transition"
          >
            <FaPhone className="w-4 h-4" /> Support
          </Link>
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 hover:text-yellow-400 transition"
            >
              <FaGlobe className="w-4 h-4" /> English{" "}
              <HiChevronDown className="w-3 h-3" />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl py-2 w-32 z-50"
                >
                  {["English", "Español", "Français"].map((lang) => (
                    <button
                      key={lang}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 hover:text-yellow-400 transition"
                    >
                      {lang}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gray-900 text-white shadow-md fixed top-0 w-full z-50">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 w-full">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 flex-1 justify-center">
              {menuLinks.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => item.submenu && setDropdown(item.name)}
                  onMouseLeave={() => item.submenu && setDropdown(null)}
                >
                  {item.submenu ? (
                    <button
                      className={`font-semibold flex items-center gap-1 transition ${
                        isMainActive(item)
                          ? "text-yellow-400"
                          : "text-white hover:text-yellow-400"
                      }`}
                    >
                      {item.name} <HiChevronDown className="w-3 h-3" />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`font-semibold transition ${
                        isMainActive(item)
                          ? "text-yellow-400"
                          : "text-white hover:text-yellow-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                  {/* Dropdown */}
                  <AnimatePresence>
                    {dropdown === item.name && item.submenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 bg-gray-800 w-48 rounded-md shadow-lg py-2 mt-2"
                      >
                        {item.submenu.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.path}
                            className={`block px-4 py-2 transition ${
                              effectivePath === sub.path
                                ? "bg-gray-700 text-yellow-400"
                                : "hover:bg-gray-700 hover:text-yellow-400"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <FaSearch className="cursor-pointer hover:text-yellow-400" />
                <MotionLink
                  to="/contact"
                  initial={{
                    backgroundColor: "#fbbf24",
                    color: "#000",
                    borderColor: "#000",
                  }}
                  whileHover={{
                    backgroundColor: "#000",
                    color: "#fff",
                    borderColor: "#fbbf24",
                    borderWidth: 2,
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.25 }}
                  className="px-5 py-2 rounded-full border font-semibold flex items-center gap-2"
                >
                  Get Started <HiArrowRight className="text-lg" />
                </MotionLink>
              </div>

              {/* Mobile Hamburger */}
              <FaTh
                className="text-2xl cursor-pointer hover:text-yellow-400 md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
       {/* MOBILE MENU OVERLAY */}
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Background overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-40"
          onClick={() => setIsOpen(false)} // Click outside closes menu
        />

        {/* Mobile menu content */}
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed top-0 right-0 w-full max-w-xs bg-gray-900 z-50 h-full px-5 py-6 overflow-y-auto"
        >
          {menuLinks.map((item, index) => (
            <div key={index} className="pb-4 border-b border-gray-800">
              {item.submenu ? (
                <button
                  onClick={() =>
                    setDropdown(dropdown === item.name ? null : item.name)
                  }
                  className={`w-full flex justify-between items-center font-semibold text-lg transition ${
                    isMainActive(item)
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {item.name} <HiChevronDown className="w-4 h-4" />
                </button>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block font-semibold text-lg mt-1 transition ${
                    isMainActive(item)
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {item.name}
                </Link>
              )}
              {/* Submenu */}
              <AnimatePresence>
                {dropdown === item.name && item.submenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="mt-2 ml-4 flex flex-col gap-2"
                  >
                    {item.submenu.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-base transition ${
                          effectivePath === sub.path
                            ? "text-yellow-400 font-semibold"
                            : "hover:text-yellow-400"
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </>
    )}
  </AnimatePresence>

        </nav>
      </>
    );
  };

  export default Navbar;
