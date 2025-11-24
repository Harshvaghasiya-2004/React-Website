'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: "What services does your company offer?",
    answer: "Our solutions are tailored to meet your unique business needs, improving efficiency, reducing costs, and enabling seamless digital transformation to boost growth and productivity and stay up-to-date with the latest technologies. The consultation phase and keep you informed.",
    open: true
  },
  {
    question: "How can your IT solutions help my business?",
    answer: "We provide scalable, secure, and innovative IT solutions that streamline operations, enhance data security, and improve overall efficiency. From cloud migration to AI automation, we help businesses stay competitive.",
    open: false
  },
  {
    question: "Do you provide support after project completion?",
    answer: "Yes, we offer 24/7 dedicated support, regular maintenance, and performance monitoring to ensure your systems run smoothly long after implementation.",
    open: false
  },
  {
    question: "How long does it take to implement an IT solution?",
    answer: "Timeline depends on project complexity. Simple solutions can be deployed in 2–4 weeks, while enterprise-level systems may take 2–6 months. We provide a clear roadmap from day one.",
    open: false
  },
  {
    question: "Is my data secure with your solutions?",
    answer: "Absolutely. We use enterprise-grade encryption, multi-factor authentication, regular audits, and comply with GDPR, HIPAA, and ISO 27001 standards.",
    open: false
  }
];

export default function QuickAnswersFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-gray-900 text-white overflow-hidden relative py-24">
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

      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        <div className="text-center space-y-8">
          
          {/* Badge */}
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="text-yellow-400 text-sm font-bold tracking-widest"
          >
            [ READ ANSWERS ]
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Quick Answers For Your<br />
            <span className="text-yellow-400">Most Questions.</span>
          </motion.h1>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 space-y-4"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`rounded-2xl overflow-hidden transition-all duration-500
                    ${isOpen 
                      ? 'bg-gray-900 border-2 border-yellow-400 shadow-2xl shadow-yellow-400/30' 
                      : 'bg-gray-900/50 border border-gray-800 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10'
                    }`}
                >
                  {/* Header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-medium transition-all duration-300"
                  >
                    <span className={`text-lg ${isOpen ? 'text-yellow-400 font-bold' : 'text-white'}`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-md"
                    >
                      {isOpen ? (
                        <FaMinus className="w-4 h-4 text-black" />
                      ) : (
                        <FaPlus className="w-4 h-4 text-black" />
                      )}
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-sm leading-relaxed text-gray-300 border-t border-yellow-400/30 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}