"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/NewNavbar";
import ContactPage from "./ContactPage";

import {
  HiLocationMarker,
  HiMail,
  HiPhone,
  HiChatAlt2,
  HiArrowRight,
  HiCheckCircle,
} from "react-icons/hi";

import { FiTwitter, FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const hoverScale = {
    whileHover: { scale: 1.06 },
    whileTap: { scale: 0.96 },
  };

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = { lat: 23.04, lng: 72.66 };

  return (
    <div className=" bg-gray-900 text-white overflow-hidden">
      <Navbar />

      <ContactPage />

      {/* Contact Info Cards */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {[
            {
              icon: HiLocationMarker,
              title: "Our Location",
              line1: "503 Berne Burg, West Road,",
              line2: "NY 1405-025",
            },
            {
              icon: HiMail,
              title: "Email us",
              line1: "support@tekmino.com",
              line2: "hello@tekmino.com",
            },
            {
              icon: HiPhone,
              title: "Call us",
              line1: "+1 (800) 554-7616",
              line2: "+1 (800) 555-9520",
            },
            {
              icon: HiChatAlt2,
              title: "Live chat",
              line1: "livechat@tekmino.com",
              line2: "Chat Now",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-700 hover:border-yellow-400 transition-colors duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <item.icon className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.line1}
                <br />
                {item.line2}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Form + Map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto"
        >
          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <HiCheckCircle className="text-yellow-400" />
              Feel Free Contact with Us!
            </h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="tel"
                  placeholder="Phone*"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition"
                />
                <input
                  type="text"
                  placeholder="Subject*"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition"
                />
              </div>
              <textarea
                rows={5}
                placeholder="Message*"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition resize-none"
              />
              <motion.button
                {...hoverScale}
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg w-full sm:w-auto justify-center"
              >
                Submit Now
                <HiArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden border border-gray-700 h-96"
          >
            <LoadScript googleMapsApiKey="AIzaSyDJwcwPfTsuHSyzmp01lRBGHgYr5a4SFAA">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={13}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-300 py-12 mt-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
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
              className="px-5 py-3 rounded-full text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-900/30 flex-1 md:flex-initial"
            />
            <motion.button
              {...hoverScale}
              className="bg-gray-900 text-yellow-400 px-6 py-3 rounded-full font-semibold flex items-center gap-2 justify-center shadow-lg"
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
              className="text-gray-900 hover:text-yellow-400 transition"
            >
              <FiTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-yellow-400 transition"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-yellow-400 transition"
            >
              <FiInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-yellow-400 transition"
            >
              <FiFacebook className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Social Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-5"
      >
        <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
          <FiTwitter className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
          <FiLinkedin className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
          <FiInstagram className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
          <FiFacebook className="w-5 h-5" />
        </a>
        <span className="text-xs text-gray-500 rotate-180 [writing-mode:vertical-rl] tracking-widest">
          Follow Us
        </span>
      </motion.div>
    </div>
  );
}
