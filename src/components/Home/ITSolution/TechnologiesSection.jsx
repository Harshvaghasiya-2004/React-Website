"use client";

import React from "react";
import { motion } from "framer-motion";

/* Technologies Data */
const techs = [
  {
    img: "https://themejunction.net/html/tekmino/demo/assets/images/icons/notion.svg",
    name: "Notion",
    desc: "You can create rich-text document customizable formatting, images.",
  },
  {
    img: "https://themejunction.net/html/tekmino/demo/assets/images/icons/gitlab.svg",
    name: "Gitlab",
    desc: "Support more Multiple repositories to one or more channels.",
  },
  {
    img: "https://themejunction.net/html/tekmino/demo/assets/images/icons/ovhcloud.svg",
    name: "OVHcloud",
    desc: "OVH legally OVH Groupe SAS, is a French cloud compute company.",
  },
  {
    img: "https://themejunction.net/html/tekmino/demo/assets/images/icons/chatgpt.svg",
    name: "ChatGPT",
    desc: "Offering assistance with answering frequently asked questions.",
  },
  {
    img: "https://themejunction.net/html/tekmino/demo/assets/images/icons/clickup.svg",
    name: "ClickUp",
    desc: "ClickUp is a productivity platform for our task management.",
  },
  {
    img: "https://themejunction.net/html/tekmino/demo/assets/images/icons/slack.svg",
    name: "Slack",
    desc: "Slack used channels to organize communication around topics.",
  },
  {
    img: "https://themejunction.net/html/tekmino/demo/assets/images/icons/zoom.svg",
    name: "Zoom",
    desc: "For Video conferencing platform used for virtual meeting.",
  },
  {
    img: "https://themejunction.net/html/tekmino/demo/assets/images/icons/dropbox.svg",
    name: "Dropbox",
    desc: "Dropbox provides cloud storage where users can securely store.",
  },
];

export default function TechnologiesSection() {
  const duplicated = [...techs, ...techs]; // double for infinite loop

  return (
    <section className="py-20 lg:py-32 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm lg:text-base text-yellow-400 font-medium tracking-wider uppercase mb-4">
            [ OUR TECHNOLOGIES ]
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
            Effortless IT Integration <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
              for Business.
            </span>
          </h2>
        </motion.div>

        {/* ROW 1 - LEFT SCROLL */}
        <div className="relative overflow-hidden mb-10">
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
            className="flex gap-6"
          >
            {duplicated.map((tech, index) => (
              <div
                key={index}
                className="min-w-[280px] p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:border-yellow-400/40 hover:bg-gray-700 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="w-12 h-12 object-contain rounded-md p-2"
                  />
                  <h3 className="text-lg font-semibold text-white">
                    {tech.name}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2 - RIGHT SCROLL */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
            className="flex gap-6"
          >
            {duplicated.map((tech, index) => (
              <div
                key={index}
                className="min-w-[280px] p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:border-yellow-400/40 hover:bg-gray-700 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="w-12 h-12 object-contain rounded-md p-2"
                  />
                  <h3 className="text-lg font-semibold text-white">
                    {tech.name}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
