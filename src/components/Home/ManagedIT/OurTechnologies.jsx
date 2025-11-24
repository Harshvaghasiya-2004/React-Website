import React from "react";
import { motion } from "framer-motion";

// --- LOGO DATA ---
const technologies = [
  {
    name: "ChatGPT",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/icons/chatgpt.svg",
  },
  {
    name: "Microsoft",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/icons/microsoft.svg",
  },
  {
    name: "Slack",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/icons/slack.svg",
  },
  {
    name: "Dropbox",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/icons/dropbox.svg",
  },
  {
    name: "Gitlab",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/icons/gitlab.svg",
  },
  {
    name: "OVHCloud",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/icons/ovhcloud.svg",
  },
  {
    name: "Notion",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/icons/notion.svg",
  },
  {
    name: "Zoom",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/icons/zoom.svg",
  },
  {
    name: "ClickUp",
    img: "https://themejunction.net/html/tekmino/demo/assets/images/icons/clickup.svg",
  },
];

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.5, staggerChildren: 0.15 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const iconFloatVariants = {
  initial: { y: 40, opacity: 0 },
  animate: {
    y: [40, 0, 40],
    opacity: 1,
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

// --- TECHNOLOGY LOGO CARD ---
const TechnologyTag = ({ tech }) => {
  return (
    <motion.div
      className="
        h-14 w-36 rounded-xl bg-gray-900 border border-gray-700/40 
        shadow-lg flex items-center justify-center gap-3 px-4
        backdrop-blur-md
        transition-all duration-300 cursor-default
      "
      variants={iconFloatVariants}
      initial="initial"
      animate="animate"
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 25px rgba(255, 204, 0, 0.4)",
      }}
    >
      {/* RENDER LOGO IMAGE */}
      <img src={tech.img} alt={tech.name} className="w-6 h-6 object-contain" />

      <span className="text-white text-sm font-semibold truncate">
        {tech.name}
      </span>
    </motion.div>
  );
};

// --- MAIN SECTION ---
const OurTechnologies = () => {
  // UPDATED → Only 9 positions because 9 logos
  const iconPositions = [
    { bottom: 50, left: "8%", rotate: -5 },
    { bottom: 70, left: "18%", rotate: 4 },
    { bottom: 48, left: "28%", rotate: -3 },
    { bottom: 80, left: "38%", rotate: 7 },
    { bottom: 60, left: "48%", rotate: -1 },
    { bottom: 45, left: "58%", rotate: 5 },
    { bottom: 65, left: "68%", rotate: -4 },
    { bottom: 52, left: "78%", rotate: 3 },
    { bottom: 75, left: "23%", rotate: -6 },
  ];

  return (
    <motion.section
      className="relative w-full bg-gray-900 text-white py-24 px-10 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#3a3a3a 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* -------------- LEFT + RIGHT TEXT AREA -------------- */}
      <div className="relative z-10 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* LEFT */}
        <div className="space-y-6">
          <motion.p
            className="text-sm font-semibold tracking-widest uppercase text-yellow-400 flex items-center"
            variants={textVariants}
          >
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            Our Technologies
          </motion.p>

          <motion.h1
            className="text-5xl lg:text-6xl font-extrabold leading-tight"
            variants={textVariants}
          >
            Effortless IT Integration for Solutions.
          </motion.h1>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-end">
          <motion.p
            className="text-gray-400 text-lg max-w-md mb-6"
            variants={textVariants}
          >
            Comprehensive IT for management, including monitoring, maintenance &
            support to keep your business running smooth.
          </motion.p>

          <motion.a
            href="#"
            className="text-yellow-400 text-lg font-semibold flex items-center group w-fit"
            variants={textVariants}
          >
            Read More
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 240H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H338.7l-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </motion.a>
        </div>
      </div>

      {/* FLOATING LOGO WRAPPER */}
      <div className="relative h-[200px] w-full mt-10">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="absolute"
            style={{
              bottom: iconPositions[index].bottom,
              left: iconPositions[index].left,
              transform: `rotate(${iconPositions[index].rotate}deg)`,
            }}
          >
            <TechnologyTag tech={tech} />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default OurTechnologies;
