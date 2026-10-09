"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

const experienceList = [
  {
    role: "Frontend Developer Intern",
    organization: "Digital Dreams",
    period: "Aug 2023 — Nov 2023",
    type: "Industry Internship",
    location: "Remote",
    highlights: [
      "Engineered responsive administration dashboards utilizing React.js, Tailwind CSS, and modular component architecture.",
      "Accelerated UI load times by 28% by auditing unnecessary re-renders and optimizing bundle tree-shaking.",
      "Collaborated closely with cross-functional design teams to convert Figma specifications into pixel-precise client code.",
      "Participated in rigorous asynchronous code reviews, enforcing modular clean code standards and TypeScript safety.",
    ],
    skills: ["React.js", "Tailwind CSS", "JavaScript ES6+", "UI Architecture"],
  },
];

const educationList = [
  {
    degree: "B.Sc Computer Science",
    institution: "Enugu State University of Science & Technology (ESUT)",
    period: "2020 — 2024",
    grade: "GPA 4.2 / 5.0 (Upper Credit)",
    honors: "Dean's Honours List (2022) • Best Project Award",
    coursework: [
      "Data Structures & Algorithm Complexity",
      "Object-Oriented Software Engineering",
      "Relational Database Systems (SQL & ACID)",
      "Computer Networks & Distributed Communication",
    ],
  },
  {
    degree: "Full Stack Systems Specialization",
    institution: "Self-Directed Continuous Learning & Open Source",
    period: "2023 — Present",
    grade: "Continuous Industry Mastery",
    honors: "Production Platforms Shipped & Verified",
    coursework: [
      "Next.js App Router, Server Actions & Streaming SSR",
      "Real-time event architecture via WebSockets (Socket.io)",
      "Production Node.js microservices and MongoDB schema scaling",
      "State machines, optimistic UI mutations & client caching",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-36 border-b border-[#DDD9CE] dark:border-[#1E2023] bg-[#F8F7F4] dark:bg-[#0C0D0E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#DDD9CE] dark:border-[#1E2023]">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#8E8D86] dark:text-[#6C6A64]">
              // 04 — CHRONOLOGY & BACKGROUND
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#121314] dark:text-[#F4F3EF]">
              Professional practice & academic foundation.
            </h2>
          </div>

          <p className="text-sm font-mono text-[#8E8D86] dark:text-[#6C6A64] max-w-xs">
            Grounding cutting-edge full-stack technologies in rigorous computer science principles.
          </p>
        </div>

        {/* Split Architectural Columns */}
        <div className="grid lg:grid-cols-2 gap-12 pt-12">
          {/* Left Column: Professional Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-[#DDD9CE] dark:border-[#202225]">
              <div className="w-8 h-8 rounded-lg border border-[#DDD9CE] dark:border-[#202225] bg-[#FFFFFF] dark:bg-[#131416] flex items-center justify-center text-[#2C3E35] dark:text-[#68B087]">
                <Briefcase size={16} />
              </div>
              <div>
                <h3 className="text-lg font-medium tracking-tight text-[#121314] dark:text-[#F4F3EF]">
                  Industry Experience
                </h3>
                <span className="font-mono text-[10px] text-[#8E8D86] dark:text-[#6C6A64]">
                  COMMERCIAL ROLES & INTERNSHIPS
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {experienceList.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="p-6 rounded-2xl border border-[#DDD9CE] dark:border-[#202225] bg-[#FFFFFF] dark:bg-[#131416] space-y-4 hover:border-[#121314] dark:hover:border-[#404348] transition-colors"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-medium tracking-tight text-[#121314] dark:text-[#F4F3EF]">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-mono text-[#2C3E35] dark:text-[#68B087]">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="font-mono text-xs text-[#8E8D86] dark:text-[#6C6A64]">
                        {exp.period}
                      </span>
                      <p className="text-[10px] font-mono text-[#8E8D86] dark:text-[#6C6A64]">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {exp.highlights.map((point, index) => (
                      <li
                        key={index}
                        className="text-xs text-[#575855] dark:text-[#A09E96] leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="font-mono text-[10px] text-[#8E8D86] dark:text-[#6C6A64] mt-0.5">
                          —
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-[#F1EFEA] dark:border-[#1E2023] flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded text-[10px] font-mono border border-[#E8E5DC] dark:border-[#202225] bg-[#F8F7F4] dark:bg-[#191B1D] text-[#575855] dark:text-[#A09E96]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Pedigree & Continuous Learning */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-[#DDD9CE] dark:border-[#202225]">
              <div className="w-8 h-8 rounded-lg border border-[#DDD9CE] dark:border-[#202225] bg-[#FFFFFF] dark:bg-[#131416] flex items-center justify-center text-[#2C3E35] dark:text-[#68B087]">
                <GraduationCap size={16} />
              </div>
              <div>
                <h3 className="text-lg font-medium tracking-tight text-[#121314] dark:text-[#F4F3EF]">
                  Academic Foundation
                </h3>
                <span className="font-mono text-[10px] text-[#8E8D86] dark:text-[#6C6A64]">
                  COMPUTER SCIENCE & THEORY
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {educationList.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-[#DDD9CE] dark:border-[#202225] bg-[#FFFFFF] dark:bg-[#131416] space-y-4 hover:border-[#121314] dark:hover:border-[#404348] transition-colors"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-medium tracking-tight text-[#121314] dark:text-[#F4F3EF]">
                        {edu.degree}
                      </h4>
                      <p className="text-xs font-mono text-[#575855] dark:text-[#A09E96]">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="font-mono text-xs text-[#8E8D86] dark:text-[#6C6A64]">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#E8E5DC] dark:border-[#202225] bg-[#F8F7F4] dark:bg-[#191B1D]">
                    <Award size={14} className="text-[#2C3E35] dark:text-[#68B087] shrink-0" />
                    <span className="text-xs font-mono text-[#121314] dark:text-[#F4F3EF]">
                      {edu.grade} • {edu.honors}
                    </span>
                  </div>

                  <div className="space-y-2 pt-1">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#8E8D86] dark:text-[#6C6A64]">
                      CORE DOMAINS & CURRICULUM
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {edu.coursework.map((course, idx) => (
                        <div
                          key={idx}
                          className="text-[11px] font-mono text-[#575855] dark:text-[#A09E96] flex items-center gap-2"
                        >
                          <span className="text-[#8E8D86] dark:text-[#6C6A64]">▪</span>
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
