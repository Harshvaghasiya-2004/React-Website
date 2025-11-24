"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlus,
  FaMinus,
  FaChevronLeft,
  FaChevronRight,
  FaEllipsisH,
} from "react-icons/fa";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(1); // Default open: "How secure is cloud computing?"
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const faqs = [
    {
      question: "What are the main types of cloud computing?",
      answer:
        "Cloud computing is categorized into three main types: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). IaaS provides virtualized computing resources, PaaS offers a platform for application development, and SaaS delivers software applications over the internet.",
    },
    {
      question: "How secure is cloud computing?",
      answer:
        "Cloud providers implement strong security measures such as encryption, firewalls, and multi-factor authentication. However, businesses must also share responsibility by securing their data, managing access controls, and following best practices. Regular security audits, compliance certifications, and real-time monitoring enhance protection. Our solutions optimize every touchpoint of the customer journey, ensuring seamless, personalized, and meaningful interactions.",
      highlight: true,
    },
    {
      question: "Can I move my existing business applications to the cloud?",
      answer:
        "Yes, most applications can be migrated to the cloud. The process involves assessment, planning, and execution. Some may require refactoring or re-platforming for optimal performance. Cloud providers offer tools and services to simplify migration.",
    },
    {
      question: "How does cloud computing help businesses save costs?",
      answer:
        "Cloud computing eliminates upfront hardware costs and reduces maintenance expenses. You only pay for what you use (pay-as-you-go model). It also improves resource utilization, reduces downtime, and enables faster time-to-market.",
    },
    {
      question: "How do you collect customer feedback?",
      answer:
        "We use multiple channels including surveys, in-app feedback, support tickets, and social media monitoring. All feedback is analyzed to identify trends and improvement areas. Regular reports are shared with clients to drive continuous enhancement.",
    },
    {
      question: "How do I choose the right cloud service provider?",
      answer:
        "Consider factors like security certifications, compliance standards, scalability, pricing, support quality, and integration capabilities. Evaluate your business needs and conduct a proof-of-concept before committing.",
    },
  ];

  const totalPages = Math.ceil(faqs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleFaqs = faqs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-gray-900 text-white overflow-hidden relative py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs md:text-sm text-yellow-400 font-medium tracking-widest uppercase mb-3">
            // READ ANSWERS
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Quick Answers For Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400">
              Most Common Questions.
            </span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {visibleFaqs.map((faq, index) => {
            const globalIndex = startIndex + index;
            const isOpen = activeIndex === globalIndex;

            return (
              <motion.div
                key={globalIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden border transition-all duration-300
                  ${
                    faq.highlight
                      ? "bg-yellow-400 text-black border-yellow-400 shadow-xl shadow-yellow-400/30"
                      : "bg-gray-900 border-gray-800 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20"
                  }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : globalIndex)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-medium transition-all duration-300"
                >
                  <span
                    className={`text-lg ${faq.highlight ? "font-bold" : ""}`}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? (
                      <FaMinus
                        className={`w-5 h-5 ${
                          faq.highlight ? "text-black" : "text-yellow-400"
                        }`}
                      />
                    ) : (
                      <FaPlus
                        className={`w-5 h-5 ${
                          faq.highlight ? "text-black" : "text-yellow-400"
                        }`}
                      />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div
                        className={`px-6 pb-5 text-sm leading-relaxed ${
                          faq.highlight ? "text-gray-800" : "text-gray-300"
                        }`}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination */}
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="flex items-center justify-center gap-4 mt-12"
>
  {/* LEFT BUTTON */}
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
    disabled={currentPage === 1}
    className={`p-3 rounded-full transition-all duration-300 ${
      currentPage === 1
        ? "bg-gray-800 text-gray-600 cursor-not-allowed"
        : "bg-gray-900 text-white hover:bg-yellow-400 hover:text-black"
    }`}
  >
    <FaChevronLeft className="w-5 h-5" />
  </motion.button>

  {/* DOTS */}
  <div className="flex items-center gap-2">
    {[...Array(totalPages)].map((_, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.2 }}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          currentPage === i + 1
            ? "bg-yellow-400"     // ACTIVE (highlight only)
            : "bg-gray-600 hover:bg-gray-500"
        }`}
      />
    ))}
  </div>

  {/* RIGHT BUTTON */}
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
    disabled={currentPage === totalPages}
    className={`p-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
      currentPage === totalPages
        ? "bg-gray-800 text-gray-600 cursor-not-allowed"
        : "bg-gray-900 text-white hover:bg-yellow-400 hover:text-black"
    }`}
  >
    <FaChevronRight className="w-4 h-4" />
  </motion.button>
</motion.div>

      </div>
    </div>
  );
}
