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
  SiReactquery,
  SiSocketdotio,
  SiExpress,
  SiGit,
  SiFigma,
  SiRedux,
  SiFirebase,
  SiGraphql,
} from "react-icons/si";

const skills = [
  {
    name: "Next.js",
    stars: 5,
    level: "Expert",
    icon: <SiNextdotjs />,
    color: "#000000",
  },
  {
    name: "React.js",
    stars: 5,
    level: "Expert",
    icon: <SiReact />,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    stars: 4,
    level: "Advanced",
    icon: <SiTypescript />,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    stars: 5,
    level: "Expert",
    icon: <SiJavascript />,
    color: "#F7DF1E",
  },
  {
    name: "Node.js",
    stars: 4,
    level: "Advanced",
    icon: <SiNodedotjs />,
    color: "#339933",
  },
  {
    name: "Express.js",
    stars: 4,
    level: "Advanced",
    icon: <SiExpress />,
    color: "#000000",
  },
  {
    name: "MongoDB",
    stars: 4,
    level: "Advanced",
    icon: <SiMongodb />,
    color: "#47A248",
  },
  {
    name: "Tailwind CSS",
    stars: 5,
    level: "Expert",
    icon: <SiTailwindcss />,
    color: "#06B6D4",
  },
  {
    name: "HTML5",
    stars: 5,
    level: "Expert",
    icon: <SiHtml5 />,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    stars: 4,
    level: "Advanced",
    icon: <SiCss3 />,
    color: "#1572B6",
  },
  {
    name: "React Query",
    stars: 3,
    level: "Intermediate",
    icon: <SiReactquery />,
    color: "#FF4154",
  },
  {
    name: "Redux",
    stars: 3,
    level: "Intermediate",
    icon: <SiRedux />,
    color: "#764ABC",
  },
  {
    name: "Socket.io",
    stars: 3,
    level: "Intermediate",
    icon: <SiSocketdotio />,
    color: "#010101",
  },
  {
    name: "Git",
    stars: 4,
    level: "Advanced",
    icon: <SiGit />,
    color: "#F05032",
  },
  {
    name: "Figma",
    stars: 3,
    level: "Intermediate",
    icon: <SiFigma />,
    color: "#F24E1E",
  },
  {
    name: "Firebase",
    stars: 3,
    level: "Intermediate",
    icon: <SiFirebase />,
    color: "#FFCA28",
  },
  {
    name: "GraphQL",
    stars: 2,
    level: "Beginner",
    icon: <SiGraphql />,
    color: "#E10098",
  },
];

const levels = ["All", "Expert", "Advanced", "Intermediate", "Beginner"];

export default function Skills() {
  const [activeLevel, setActiveLevel] = useState("All");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredSkills =
    activeLevel === "All"
      ? skills
      : skills.filter((skill) => skill.level === activeLevel);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative bg-gradient-to-b from-[#0b0b0b] to-[#111111] text-white py-16 md:py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]" />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-teal-400/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-400 text-sm font-medium mb-4"
          >
            TECHNICAL EXPERTISE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Skills & Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Technologies I use to build modern, scalable, and performant
            applications
          </motion.p>
        </div>

        {/* Filter Tabs - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-2"
        >
          {levels.map((level) => (
            <motion.button
              key={level}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveLevel(level)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeLevel === level
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25"
                  : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {level}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] 
                         border border-white/10 backdrop-blur-sm hover:border-teal-400/30 
                         transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-teal-500/0 
                            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
              />

              {/* Content Container */}
              <div className="relative z-10">
                {/* Icon and Level */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-teal-400/30 transition-colors">
                    <div
                      className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                  </div>

                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      skill.level === "Expert"
                        ? "bg-teal-500/20 text-teal-300 border border-teal-400/30"
                        : skill.level === "Advanced"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                        : skill.level === "Intermediate"
                        ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                        : "bg-gray-500/20 text-gray-300 border border-gray-400/30"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-teal-300 transition-colors">
                  {skill.name}
                </h3>

                {/* Stars - Mobile Optimized */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5 sm:gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                          i < skill.stars
                            ? "bg-gradient-to-r from-yellow-400 to-amber-400 shadow-[0_0_8px_rgba(250,204,21,0.3)]"
                            : "bg-gray-700/50"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">{skill.stars}/5</span>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full h-2 bg-gray-800/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.stars * 20}%` } : {}}
                      transition={{ duration: 1, delay: 0.3 + index * 0.05 }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}60, ${skill.color})`,
                      }}
                    />
                  </div>

                  {/* Percentage Label */}
                  <div className="absolute -top-6 right-0 text-xs font-medium text-gray-400">
                    {skill.stars * 20}%
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-center py-12"
          >
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              No skills found
            </h3>
            <p className="text-gray-500">Try selecting a different filter</p>
          </motion.div>
        )}

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500" />
              <span>Expert (5 Stars)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
              <span>Advanced (4 Stars)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
              <span>Intermediate (3 Stars)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-600" />
              <span>Beginner (2 Stars)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
