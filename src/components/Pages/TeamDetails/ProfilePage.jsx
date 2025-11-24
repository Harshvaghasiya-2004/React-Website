'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaCheckCircle } from 'react-icons/fa';

export default function ProfilePage() {
  const [progress, setProgress] = useState({ consulting: 0, communication: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress({ consulting: 82, communication: 90 });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.img
                src="https://themejunction.net/html/tekmino/demo/assets/images/team/team-1.webp"
                alt="Eade Marren"
                className="w-80 h-96 object-cover rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">rocket</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                Hello, I am <span className="text-yellow-400">Eade Marren</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-sm"
              >
                Chief Executive
              </motion.p>
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 leading-relaxed"
            >
              Our mission is to empower businesses size to thrive in ever changing marketplace. We are committed to the delivering exceptional value through strategic and innovative approaches. Our consulting of our missing empower.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <div className="bg-gray-900 rounded-2xl px-6 py-3 border border-gray-800">
                <p className="text-sm text-gray-400">Email address</p>
                <p className="font-medium">eade.marren@tekmino.com</p>
              </div>
              <div className="bg-gray-900 rounded-2xl px-6 py-3 border border-gray-800">
                <p className="text-sm text-gray-400">Phone number</p>
                <p className="font-medium">+1 (009) 544-7818</p>
              </div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"
              >
                <FaFacebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-all"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Our mission is to empower businesses size to thrive in ever changing marketplace. We are committed to the delivering exceptional value through strategic and innovative approaches. Our consulting of our missing empowers businesses of all sizes. Committed to the delivering exceptional in values.
              </p>

              {/* Beliefs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "We believe that the human essential start any successful project.",
                  "We believe that the human essential start any successful project.",
                  "We believe that the human essential start any successful project.",
                  "We believe that the human essential start any successful project."
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="bg-gray-900 rounded-2xl p-4 border border-gray-800 flex items-start gap-3"
                  >
                    <FaCheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-300">{text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Professional Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-xl font-bold mb-6">Professional Skills</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Our mission is to empower businesses size to thrive in ever changing marketplace. We are committed to the delivering exceptional value through strategic and innovative approaches. Our consulting of our missing empower.
              </p>

              <div className="space-y-6">
                {[
                  { label: "Business Consultants", value: 82 },
                  { label: "Client Communication", value: 90 }
                ].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.label}</span>
                      <span className="text-sm text-yellow-400">{progress[skill.label.toLowerCase().includes("consult") ? "consulting" : "communication"]}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress[skill.label.toLowerCase().includes("consult") ? "consulting" : "communication"]}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.9 }}
                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}