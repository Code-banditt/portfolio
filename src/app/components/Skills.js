"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiReactrouter,
  SiSocketdotio,
} from "react-icons/si";

const skills = [
  { name: "Next.js", stars: 5, level: "Expert", icon: <SiNextdotjs /> },
  { name: "React.js", stars: 5, level: "Expert", icon: <SiReact /> },
  { name: "HTML", stars: 5, level: "Expert", icon: <SiHtml5 /> },
  { name: "CSS", stars: 3, level: "Intermediate", icon: <SiCss3 /> },
  { name: "JavaScript", stars: 4, level: "Master", icon: <SiJavascript /> },
  { name: "Node.js", stars: 4, level: "Master", icon: <SiNodedotjs /> },
  { name: "Tailwind", stars: 4, level: "Master", icon: <SiTailwindcss /> },
  { name: "MongoDB", stars: 4, level: "Master", icon: <SiMongodb /> },
  { name: "TypeScript", stars: 2, level: "Beginner", icon: <SiTypescript /> },
  {
    name: "React Native",
    stars: 2,
    level: "Beginner",
    icon: <SiReactrouter />,
  },
  { name: "Socket.io", stars: 2, level: "Beginner", icon: <SiSocketdotio /> },
];

const levels = ["All", "Expert", "Master", "Intermediate", "Beginner"];

export default function Skills() {
  const [activeLevel, setActiveLevel] = useState("All");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const filteredSkills =
    activeLevel === "All"
      ? skills
      : skills.filter((skill) => skill.level === activeLevel);

  return (
    <section
      ref={ref}
      className="relative bg-[#0c0c0c] text-white py-24 px-4 font-[Space_Grotesk] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-12 tracking-tight"
        >
          My Skills
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 relative">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all border
                ${
                  activeLevel === level
                    ? "bg-teal-400/70 text-black shadow-[0_0_15px_rgba(0,255,255,0.4)] scale-105"
                    : "border-white/20 hover:border-white/40"
                }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredSkills.map((skill, index) => {
            const fromLeft = index % 2 === 0; // alternate direction
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="group relative p-6 rounded-3xl bg-gradient-to-br from-[#0c0c0c]/80 to-[#111]/80 border border-teal-400/20
                           shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,255,255,0.5)] 
                           backdrop-blur-md cursor-pointer transition-all"
              >
                {/* Icon + Level */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-4xl text-teal-400">{skill.icon}</span>
                  <span className="text-sm text-gray-400">{skill.level}</span>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-full ${
                        i < skill.stars ? "bg-yellow-400" : "bg-gray-600/50"
                      }`}
                    />
                  ))}
                </div>

                {/* Animated Skill Bar */}
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.stars * 20}%` } : {}}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-teal-400"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
