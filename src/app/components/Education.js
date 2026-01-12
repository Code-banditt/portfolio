"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdWork, MdSchool } from "react-icons/md";

const experienceData = [
  {
    title: "Frontend Developer Intern",
    company: "Digital Dreams",
    period: "Aug 2023 – Nov 2023",
    description: [
      "Developed responsive internal dashboards using React.js and Tailwind CSS",
      "Improved user experience through optimized UI components and interactive features",
      "Collaborated with design team to implement pixel-perfect interfaces",
      "Participated in code reviews and contributed to team knowledge sharing",
    ],
    location: "Remote",
    skills: ["React", "Tailwind CSS", "JavaScript", "UI/UX"],
  },
];

const educationData = [
  {
    degree: "B.Sc Computer Science",
    school: "Enugu State University of Science and Technology (ESUT)",
    period: "2020 – 2024",
    description: [
      "Studied core computing concepts including algorithms and data structures",
      "Completed coursework in software engineering and database systems",
      "Developed foundational skills in programming and system design",
      "Participated in academic projects focusing on practical applications",
    ],
    gpa: "4.2/5.0",
    achievements: ["Dean's List (2022)", "Best Project Award"],
  },
  {
    degree: "Full Stack Development (Self-Taught)",
    school: "Online Platforms (Udemy, Official Docs, YouTube)",
    period: "2023 – Present",
    description: [
      "Mastered React, Next.js, and modern frontend development patterns",
      "Built full-stack applications with Node.js, Express, and MongoDB",
      "Implemented authentication, REST APIs, and real-time features",
      "Deployed and maintained production applications",
    ],
    certificates: ["Advanced React", "Node.js Developer"],
  },
];

export default function ExperienceSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative bg-gradient-to-b from-[#0b0b0b] to-[#151515] text-white py-16 md:py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-40 w-80 h-80 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-400 text-sm font-medium mb-4">
            CAREER JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            My professional journey through internships and academic learning
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Experience Column */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-400/20">
                  <MdWork className="text-2xl text-teal-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Work Experience
                </h3>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400/20 via-teal-400/40 to-teal-400/20" />

                {experienceData.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="relative mb-8 ml-12 pl-6"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-9 top-0 w-6 h-6 rounded-full bg-teal-500 border-4 border-[#0b0b0b] shadow-lg shadow-teal-500/20" />

                    {/* Experience Card */}
                    <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-teal-400/30 transition-all duration-300">
                      <div className="absolute -top-2 right-4 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold">
                        Internship
                      </div>

                      <div className="mb-4">
                        <h4 className="text-xl font-bold mb-1 group-hover:text-teal-300 transition-colors">
                          {exp.title}
                        </h4>
                        <p className="text-teal-400 font-medium">
                          {exp.company}
                        </p>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-teal-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-teal-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description Points */}
                      <ul className="space-y-2 mb-6">
                        {exp.description.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-300"
                          >
                            <span className="text-teal-400 mt-1">▸</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-400/20 text-teal-300 text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education Column */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-400/20">
                  <MdSchool className="text-2xl text-blue-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Education</h3>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/20 via-blue-400/40 to-blue-400/20" />

                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="relative mb-8 ml-12 pl-6"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-9 top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-[#0b0b0b] shadow-lg shadow-blue-500/20" />

                    {/* Education Card */}
                    <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-400/30 transition-all duration-300">
                      {/* Degree Type Badge */}
                      <div className="absolute -top-2 right-4 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">
                        {edu.degree.includes("Self-Taught")
                          ? "Online Learning"
                          : "University"}
                      </div>

                      <div className="mb-4">
                        <h4 className="text-xl font-bold mb-1 group-hover:text-blue-300 transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-400 font-medium">
                          {edu.school}
                        </p>
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-blue-400" />
                          <span>{edu.period}</span>
                        </div>
                        {edu.gpa && (
                          <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold">
                            GPA: {edu.gpa}
                          </div>
                        )}
                      </div>

                      {/* Description Points */}
                      <ul className="space-y-2 mb-6">
                        {edu.description.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-300"
                          >
                            <span className="text-blue-400 mt-1">▸</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Achievements / Certificates */}
                      {edu.achievements && (
                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-400 mb-2">
                            Achievements:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {edu.achievements.map((achievement, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-400/20 text-yellow-300 text-xs font-medium"
                              >
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {edu.certificates && (
                        <div>
                          <p className="text-sm font-medium text-gray-400 mb-2">
                            Certificates:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {edu.certificates.map((cert, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs font-medium"
                              >
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10"
        >
          {[
            { label: "Years Learning", value: "4+", color: "text-teal-400" },
            { label: "Projects Built", value: "20+", color: "text-blue-400" },
            { label: "Technologies", value: "15+", color: "text-cyan-400" },
            { label: "Certificates", value: "5+", color: "text-purple-400" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}
              >
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
