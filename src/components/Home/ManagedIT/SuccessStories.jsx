"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaPlay } from "react-icons/fa6";

// ----------------------------------
// ICONS
// ----------------------------------
const StarIcon = ({ className = "w-4 h-4 text-yellow-400 drop-shadow-sm" }) => (
  <FaStar className={className} />
);

const PlayIcon = ({ className = "w-10 h-10 text-white" }) => (
  <FaPlay className={className} />
);

// ----------------------------------
// DATA
// ----------------------------------
const testimonials = [
  {
    id: 1,
    name: "Meavor Lane",
    title: "VP of Strategy",
    rating: 5,
    feedback:
      "Partnering with Nexor has been an absolute game-changer. Their tailored IT solutions saved us time and money.",
    image:
      "https://themejunction.net/html/tekmino/demo/assets/images/testimonial/h3-testimonial-1.webp",
  },
  {
    id: 2,
    name: "Dr. Evelyn Reed",
    title: "CTO, AlphaCorp",
    rating: 4,
    feedback:
      "Nexor streamlined our operations with innovative cloud solutions. Great results and long-term value.",
    image:
      "https://themejunction.net/html/tekmino/demo/assets/images/testimonial/h3-testimonial-2.webp",
  },
  {
    id: 3,
    name: "Julian Price",
    title: "Chief Marketing Officer",
    rating: 5,
    feedback:
      "From consultation to implementation, their service was outstanding. Nexor transformed our workflows.",
    image:
      "https://themejunction.net/html/tekmino/demo/assets/images/testimonial/h3-testimonial-3.webp",
  },
  {
    id: 4,
    name: "Sarah Chen",
    title: "Director of Operations",
    rating: 5,
    feedback:
      "The solution was scalable and robust. We saw an immediate 25% increase in efficiency.",
    image:
      "https://themejunction.net/html/tekmino/demo/assets/images/testimonial/h3-testimonial-1.webp",
  },
  {
    id: 5,
    name: "Alex Johnson",
    title: "Founder, InnovateX",
    rating: 4,
    feedback:
      "We needed a secure cloud architecture. Nexor delivered perfectly with modern best practices.",
    image:
      "https://themejunction.net/html/tekmino/demo/assets/images/testimonial/h3-testimonial-2.webp",
  },
];

// ----------------------------------
// STARS
// ----------------------------------
const RatingStars = ({ rating }) => (
  <div className="flex gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-600"}`}
      />
    ))}
  </div>
);

// ----------------------------------
// CARD
// ----------------------------------
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col md:flex-row w-[90vw] sm:w-[500px] lg:w-[420px] flex-shrink-0 p-5 mx-4 rounded-xl bg-gray-800 shadow-xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 group">
      <div className="relative w-full md:w-1/3 mb-4 md:mb-0 md:mr-5">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full aspect-[3/4] object-cover rounded-lg border border-gray-700/50"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg pointer-events-none">
          <div className="p-3 rounded-full border-2 border-white/50 bg-black/40 text-white 
          group-hover:text-yellow-400 group-hover:border-yellow-400 group-hover:shadow-[0_0_20px_rgba(255,255,0,0.6)]
          transition-all duration-300">
            <PlayIcon className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="flex-1">
        <RatingStars rating={testimonial.rating} />

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          "{testimonial.feedback}"
        </p>

        <div className="pt-3 border-t border-gray-700">
          <h3 className="text-lg font-bold">{testimonial.name}</h3>
          <p className="text-sm text-yellow-400">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------
// LOOPING CAROUSEL (FIXED SMOOTH SLIDE)
// ----------------------------------
const LoopCarousel = () => {
  const doubled = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden w-full max-w-7xl">
      <motion.div
        className="flex py-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} />
        ))}
      </motion.div>
    </div>
  );
};

// ----------------------------------
// PAGE
// ----------------------------------
const SuccessStories = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center p-4 pt-20">
      <header className="text-center max-w-3xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400 mb-2 flex items-center justify-center">
          <StarIcon className="w-3 h-3 mr-1" /> Success Stories
        </p>

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Building Success with Client Feedback
        </h1>

        <p className="text-gray-400 text-lg">
          Discover how our IT solutions transformed businesses worldwide.
        </p>
      </header>

      <LoopCarousel />
    </div>
  );
};

export default SuccessStories;
