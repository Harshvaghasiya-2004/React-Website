'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCheck, 
  FaCloud, 
  FaShieldAlt, 
  FaLaptopCode, 
  FaHeadset, 
  FaLock, 
  FaDatabase,
  FaClock,
  FaUserTie,
  FaBolt,
  FaArrowRight
} from 'react-icons/fa';

export default function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic Plan",
      subtitle: "Essential IT Services",
      monthly: 99,
      yearly: 84, // 15% off
      originalYearly: 1188,
      features: [
        { icon: FaLaptopCode, text: "Essential IT Support" },
        { icon: FaCloud, text: "Cloud Storage (50 GB)" },
        { icon: FaClock, text: "Monthly System Check" },
        { icon: FaLock, text: "Basic Security Updates" },
        { icon: FaShieldAlt, text: "Software Patches and Fixes" },
        { icon: FaHeadset, text: "1 Scheduled Maintenance" }
      ],
      highlighted: false
    },
    {
      name: "Standard Plan",
      subtitle: "Complete IT Solutions",
      monthly: 249,
      yearly: 212, // 15% off
      originalYearly: 2988,
      features: [
        { icon: FaLaptopCode, text: "Advanced IT Management" },
        { icon: FaCloud, text: "Cloud Storage (200 GB)" },
        { icon: FaShieldAlt, text: "Custom Software Solutions" },
        { icon: FaLock, text: "Threat Detection Services" },
        { icon: FaDatabase, text: "Data Backup and Recovery" },
        { icon: FaClock, text: "Monthly IT Consultation" }
      ],
      highlighted: true
    },
    {
      name: "Premium Plan",
      subtitle: "Advanced IT Services",
      monthly: 499,
      yearly: 424, // 15% off
      originalYearly: 5988,
      features: [
        { icon: FaLaptopCode, text: "Comprehensive IT Solutions" },
        { icon: FaCloud, text: "Unlimited Cloud Storage" },
        { icon: FaShieldAlt, text: "Priority 1-Hour Support" },
        { icon: FaLock, text: "Cybersecurity Protection" },
        { icon: FaUserTie, text: "Dedicated Account Manager" },
        { icon: FaBolt, text: "24/7 Emergency Service" }
      ],
      highlighted: false
    }
  ];

  return (
    <div className=" bg-gray-900 text-white overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-yellow-400 text-sm font-medium tracking-wider mb-2">
            [ BEST PRICING ]
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Pricing Plans to Find the Right IT Support
          </h1>

          {/* Toggle Switch - FIXED & PERFECT */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <span className={`text-lg font-medium transition-colors ${!isYearly ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>

            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-9 bg-gray-800 rounded-full p-1 flex items-center transition-all duration-300"
            >
              <motion.div
                layout
                className={`absolute w-7 h-7 rounded-full shadow-md transition-all duration-300 ${
                  isYearly ? 'bg-yellow-400 translate-x-7' : 'bg-gray-400 translate-x-0'
                }`}
              />
              <span className="sr-only">Toggle Yearly</span>
            </button>

            <div className="flex items-center gap-2">
              <span className={`text-lg font-medium transition-colors ${isYearly ? 'text-white' : 'text-gray-500'}`}>
                Yearly
              </span>
              {isYearly && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full"
                >
                  Save 15%
                </motion.span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const price = isYearly ? plan.yearly : plan.monthly;
            const original = isYearly ? plan.originalYearly : null;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                className={`relative rounded-3xl p-8 transition-all duration-500 group cursor-pointer
                  ${plan.highlighted 
                    ? 'bg-yellow-400 text-black shadow-2xl' 
                    : 'bg-gray-900 border border-gray-800 hover:border-yellow-400 hover:shadow-2xl'
                  }`}
                style={{
                  transform: plan.highlighted ? 'translateY(-20px)' : 'translateY(0)',
                }}
              >
                {/* Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-yellow-400 text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-gray-800' : 'text-gray-400'}`}>
                  {plan.subtitle}
                </p>

                <div className="mb-8">
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold">${price}</span>
                    <span className={`text-lg ${plan.highlighted ? 'text-gray-800' : 'text-gray-400'}`}>
                      /per month
                    </span>
                  </div>
                  {isYearly && original && (
                    <p className={`text-sm line-through ${plan.highlighted ? 'text-gray-600' : 'text-gray-500'}`}>
                      ${original}/yr
                    </p>
                  )}
                </div>

                {/* Button - HOVER COLOR FIXED */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2
                    ${plan.highlighted 
                      ? 'bg-black text-yellow-400 hover:bg-gray-900' 
                      : 'bg-yellow-400 text-black hover:bg-yellow-300'
                    }`}
                >
                  Choose Package
                  <FaArrowRight className="w-4 h-4" />
                </motion.button>

                {/* Features */}
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center
                          ${plan.highlighted ? 'bg-black text-yellow-400' : 'bg-yellow-400 text-black'}
                        `}>
                          <FaCheck className="w-3 h-3" />
                        </div>
                        <span className={`text-sm ${plan.highlighted ? 'text-gray-800' : 'text-gray-300'}`}>
                          {feature.text}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Hover Glow - FIXED */}
                {!plan.highlighted && (
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}