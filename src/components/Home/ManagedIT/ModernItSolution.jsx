'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BsStarFill } from 'react-icons/bs';

const carouselText = ["Business", "IT Solutions", "Modern"];

const SingleLineCarousel = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-900 py-4">
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}   // FIX ✔
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* FIRST COPY */}
          {carouselText.map((item, index) => (
            <React.Fragment key={`a-${index}`}>
              <motion.span
                className="text-gray-300 mx-6 cursor-pointer text-lg font-semibold"
                whileHover={{ color: "#facc15", scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.span>
              <BsStarFill className="text-yellow-400 mx-3" />
            </React.Fragment>
          ))}

          {/* SECOND */}
          {carouselText.map((item, index) => (
            <React.Fragment key={`b-${index}`}>
              <motion.span
                className="text-gray-300 mx-6 cursor-pointer text-lg font-semibold"
                whileHover={{ color: "#facc15", scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.span>
              <BsStarFill className="text-yellow-400 mx-3" />
            </React.Fragment>
          ))}

          {/* THIRD */}
          {carouselText.map((item, index) => (
            <React.Fragment key={`c-${index}`}>
              <motion.span
                className="text-gray-300 mx-6 cursor-pointer text-lg font-semibold"
                whileHover={{ color: "#facc15", scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.span>
              <BsStarFill className="text-yellow-400 mx-3" />
            </React.Fragment>
          ))}

          {/* FOURTH */}
          {carouselText.map((item, index) => (
            <React.Fragment key={`d-${index}`}>
              <motion.span
                className="text-gray-300 mx-6 cursor-pointer text-lg font-semibold"
                whileHover={{ color: "#facc15", scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.span>
              <BsStarFill className="text-yellow-400 mx-3" />
            </React.Fragment>
          ))}

          {/* FIFTH */}
          {carouselText.map((item, index) => (
            <React.Fragment key={`e-${index}`}>
              <motion.span
                className="text-gray-300 mx-6 cursor-pointer text-lg font-semibold"
                whileHover={{ color: "#facc15", scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.span>
              <BsStarFill className="text-yellow-400 mx-3" />
            </React.Fragment>
          ))}

        </motion.div>
      </div>
    </div>
  );
};

export default SingleLineCarousel;
