"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const projects = [
  {
    title: "Business Transformation",
    solution: "Solution",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/project/project-1.webp",
  },
  {
    title: "Cloud Migration Success",
    solution: "Solution",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/project/project-2.webp",
  },
  {
    title: "Digital Growth Strategy",
    solution: "Solution",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/project/project-3.webp",
  },
  {
    title: "Mobile App Development",
    solution: "Solution",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/project/project-4.webp",
  },
];

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlay) return;
    timeoutRef.current = setTimeout(nextSlide, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [current, isAutoPlay]);

  return (
    <section
      className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-900 text-white overflow-hidden"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center lg:text-left mb-16">
          <p className="text-sm lg:text-base text-yellow-400 font-medium tracking-wider uppercase mb-4">
            [ RECENT PROJECTS ]
          </p>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Breaking Boundaries,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                Building Dreams.
              </span>
            </h2>

            <p className="text-sm lg:text-base text-gray-400 max-w-md">
              Our projects are tailored to meet your unique business needs.
            </p>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-all"
              >
                <FaArrowRight className="w-4 h-4 rotate-180" />
              </button>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-all"
              >
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex"
              animate={{ x: `${-current * 100}%` }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              {projects.map((project, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <div className="relative group cursor-pointer">
                    {/* Image */}
                    <div className="aspect-[4/3] lg:aspect-[16/9] overflow-hidden rounded-3xl">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 rounded-b-3xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full mb-2">
                            {project.solution}
                          </span>
                          <h3 className="text-xl lg:text-2xl font-bold">
                            {project.title}
                          </h3>
                        </div>

                        <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-yellow-400 transition-all">
                          <FaArrowRight className="w-4 h-4 group-hover:text-black" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="relative"
              >
                <motion.div
                  className={`w-3 h-3 rounded-full ${
                    i === current ? "bg-yellow-400" : "bg-gray-600"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
