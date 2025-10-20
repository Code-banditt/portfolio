// components/Skills.tsx
"use client";

import { useState } from "react";
import { Star, StarOff } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", stars: 5, level: "Expert" },
  { name: "React.js", stars: 5, level: "Expert" },
  { name: "HTML", stars: 5, level: "Expert" },
  { name: "CSS", stars: 3, level: "Intermediate" },
  { name: "JavaScript", stars: 4, level: "Master" },
  { name: "Node.js", stars: 4, level: "Master" },
  { name: "Tailwind", stars: 4, level: "Master" },
  { name: "MongoDB", stars: 4, level: "Master" },
  { name: "Typescript", stars: 2, level: "Beginner" },
  { name: "React Native", stars: 2, level: "Beginner" },
  { name: "Socket.io", stars: 2, level: "Beginner" },
];

const levels = ["All", "Expert", "Master", "Intermediate", "Beginner"];

export default function Skills() {
  const [activeLevel, setActiveLevel] = useState("All");

  const filteredSkills =
    activeLevel === "All"
      ? skills
      : skills.filter((skill) => skill.level === activeLevel);

  return (
    <section className="bg-[#111] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-10 tracking-tight"
        >
          My Skills
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`px-4 py-2 rounded-full border border-white/20 hover:border-white/50 transition text-sm ${
                activeLevel === level
                  ? "bg-white text-[#111]"
                  : "bg-transparent text-white"
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              layout
              className="bg-[#1a1a1a] p-6 rounded-2xl border border-[#333] hover:border-white/10 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < skill.stars ? (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ) : (
                    <StarOff key={i} className="w-5 h-5 text-gray-600" />
                  )
                )}
              </div>
              <p className="text-sm text-gray-400">{skill.level}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
