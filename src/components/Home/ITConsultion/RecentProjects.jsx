'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';

const projects = [
  {
    tag: 'Information',
    title: 'Digital Growth Strategy',
    desc: 'Many businesses struggle with outdated on-premise systems that limit scalability and flexibility. Our cloud migration service ensures a seamless...',
    img: 'https://themejunction.net/html/tekmino/demo/assets/images/project/project-2.webp',
  },
  {
    tag: 'Solution',
    title: 'Cloud Migration System',
    desc: 'A strong mobile presence is crucial for business growth in today’s digital age. We design and develop custom mobile applications for iOS...',
    img: 'https://themejunction.net/html/tekmino/demo/assets/images/project/project-3.webp',
  },
  {
    tag: 'Solution',
    title: 'Mobile App Development',
    desc: 'A strong mobile presence is crucial for business growth in today’s digital age. We design and develop custom mobile applications for iOS...',
    img: 'https://themejunction.net/html/tekmino/demo/assets/images/project/project-4.webp',
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-xs md:text-sm text-yellow-400 font-medium tracking-widest uppercase mb-3">
              // RECENT PROJECTS
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Transforming Ideas
              <br />
              Into Real Digital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                Success.
              </span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-400">
              Custom software solutions tailored to your business needs development.
            </p>

            {/* Floating CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 0 35px rgba(250, 204, 21, 0.6)',
                }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full font-bold text-black shadow-xl"
              >
                Explore More
                <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 lg:space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="w-full lg:w-1/2"
              >
                <div className="aspect-[4/3] lg:aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </motion.div>

              {/* Info Card */}
              <motion.div
                whileHover={{
                  y: -12,
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
                }}
                transition={{ duration: 0.3 }}
                className="w-full lg:w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-800 backdrop-blur-sm hover:border-yellow-500/30 cursor-pointer"
              >
                <span className="inline-block px-4 py-1 bg-yellow-400/20 text-yellow-400 text-xs font-bold rounded-full mb-4">
                  {project.tag}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {project.desc}
                </p>
                <button className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-yellow-400 transition-colors">
                  <FaArrowRight className="w-4 h-4 transition-transform hover:translate-x-1" />
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
