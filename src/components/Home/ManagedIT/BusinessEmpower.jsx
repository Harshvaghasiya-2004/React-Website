// ServicesPage.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const services = [
  {
    id: 1,
    title: "Cloud Migration System",
    desc: "Many businesses struggle with outdated on-premise systems that limit scalability and flexibility. Our cloud migration service ensures a seamless transition to cloud platforms.",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/project/project-1.webp",
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "A strong mobile presence is crucial for business growth in today’s digital age. We design and develop custom mobile applications for iOS and Android.",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/project/project-2.webp",
  },
  {
    id: 3,
    title: "ERP Implementation",
    desc: "Managing different business functions separately can create inefficiencies. Our ERP implementation service integrates finance, HR, supply chain, and customer management.",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/project/project-3.webp",
  },
  {
    id: 4,
    title: "Data Analytics Dashboard",
    desc: "Businesses generate vast amounts of data, but without proper insights, it remains untapped potential. Our data analytics dashboard centralizes and visualizes key business metrics.",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/project/project-4.webp",
  },
];

const ServicesPage = () => {
  const [active, setActive] = useState(2);

  return (
    <section className=" bg-gray-900 text-white flex flex-col items-center py-20 px-6 lg:px-20">
      {/* Header */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start mb-16">
        {/* Left Section */}
        <div>
          <motion.div className="flex items-center gap-3">
            <motion.span
              className="w-2 h-2 bg-yellow-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-yellow-400 font-medium tracking-wide">
              Explore Services
            </span>
          </motion.div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-snug mt-4">
            Discover How Empower <br /> for Businesses.
          </h1>
        </div>

        {/* Right Button */}
        <button className="mt-4 lg:mt-0 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
          Explore More <BsArrowUpRightCircleFill className="w-5 h-5" />
        </button>
      </div>

      {/* Services Grid */}
      <div className="w-full lg:flex lg:gap-12">
        {/* Steps */}
        <div className="flex flex-col items-center gap-8 mb-12 lg:mb-0">
          {services.map((s) => (
            <motion.div
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`w-12 h-12 flex items-center justify-center rounded-full cursor-pointer transition-all ${
                active === s.id
                  ? "bg-yellow-400 text-gray-900 font-bold shadow-lg"
                  : "bg-gray-800 text-gray-400 font-medium hover:bg-yellow-500 hover:text-gray-900"
              }`}
              whileHover={{ scale: 1.2 }}
            >
              {s.id.toString().padStart(2, "0")}
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col lg:flex-row items-start gap-8">
          <motion.img
            key={active}
            src={
              services.find((s) => s.id === active).img ||
              "https://via.placeholder.com/400x300?text=Service"
            }
            alt="service"
            className="w-full lg:w-1/2 rounded-xl object-cover shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />

          <motion.div
            key={active + "-text"}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col gap-4"
          >
            <h2 className="text-2xl font-bold text-yellow-400">
              {services.find((s) => s.id === active).title}
            </h2>
            <p className="text-gray-300">
              {services.find((s) => s.id === active).desc}
            </p>
            <BsArrowUpRightCircleFill className="text-yellow-400 w-6 h-6 mt-2 cursor-pointer hover:translate-x-1 transition-transform" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
