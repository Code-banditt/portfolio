"use client";

import Image from "next/image";
import Navbar from "./components/header";
import Skills from "./components/Skills";
import HonorableMentions from "./components/honorableMention";
import Projects from "./components/project";
import ContactSection from "./components/contact";
import Footer from "./components/footer";
import ExperienceSection from "./components/Education";
import CertificatesSection from "./components/certificate";

import { Inter, Space_Grotesk } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "400" });

import { motion } from "framer-motion";

export default function HeroDark() {
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="relative min-h-screen bg-gradient-to-br from-[#0b0b0b] via-[#101010] to-[#0b0b0b] text-white overflow-hidden pt-20 md:pt-24"
      >
        {/* ENHANCED ANIMATED BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:80px_80px]" />

          {/* Floating Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-teal-400/40"
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

          {/* Gradient Orbs */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"
          />
        </div>

        {/* MAIN CONTENT CONTAINER */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-12 md:py-0">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
            {/* LEFT CONTENT - MOBILE FIRST */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-400/30 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                </span>
                <span
                  className={`text-sm font-medium text-teal-400 ${spaceGrotesk.className}`}
                >
                  Open to Opportunities
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4 md:space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className={`${spaceGrotesk.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight`}
                >
                  <span className="block text-white">Hello, I Am</span>
                  <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
                    Nwodo Anthony
                  </span>
                </motion.h1>

                {/* Subheading */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className={`${spaceGrotesk.className} text-xl sm:text-2xl md:text-3xl font-light text-gray-300`}
                >
                  Full Stack Developer & Creative Engineer
                </motion.h2>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className={`${inter.className} text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0`}
              >
                I craft high-performance web applications with modern stacks
                like{" "}
                <span className="text-teal-300 font-semibold">Next.js</span>,{" "}
                <span className="text-teal-300 font-semibold">React</span>, and{" "}
                <span className="text-teal-300 font-semibold">Node.js</span>.
                Focused on creating seamless user experiences through{" "}
                <span className="text-cyan-300 font-semibold">animations</span>{" "}
                and{" "}
                <span className="text-cyan-300 font-semibold">
                  optimized performance
                </span>
                .
              </motion.p>

              {/* Tech Stack Tags - Mobile Friendly */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Node.js",
                  "MongoDB",
                  "Tailwind CSS",
                ].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm 
                    text-sm font-medium text-gray-300 hover:text-teal-300 hover:border-teal-400/30 
                    transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 
                  text-white font-semibold text-sm md:text-base shadow-lg shadow-teal-500/25 
                  hover:shadow-teal-500/40 transition-all duration-300"
                >
                  View My Work
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-8 py-3 rounded-full bg-white/5 border border-white/20 
                  text-white font-semibold text-sm md:text-base backdrop-blur-sm
                  hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>

            {/* RIGHT CONTENT - PROFILE IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
                {/* Outer Glow Ring */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full p-1"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent, #0ff, transparent)",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-[#0b0b0b]" />
                </motion.div>

                {/* Inner Gradient Ring */}
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-8 rounded-full p-1"
                  style={{
                    background:
                      "conic-gradient(from 180deg, transparent, #14b8a6, transparent)",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-[#0b0b0b]" />
                </motion.div>

                {/* Floating Image Container */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-12 rounded-2xl overflow-hidden 
                    border-4 border-white/10 backdrop-blur-sm
                    shadow-[0_0_80px_rgba(20,184,166,0.3)]"
                >
                  <Image
                    height={500}
                    width={500}
                    src="/img/portfolio.png"
                    alt="Nwodo Anthony - Full Stack Developer"
                    className="w-full h-full object-cover"
                    priority
                  />
                </motion.div>

                {/* Floating Tech Badges - Hidden on mobile, shown on tablet+ */}
                <div className="hidden md:block">
                  {[
                    {
                      text: "Full Stack",
                      pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    },
                    {
                      text: "Next.js",
                      pos: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
                    },
                    {
                      text: "React",
                      pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                    },
                    {
                      text: "Node.js",
                      pos: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
                    },
                  ].map((badge, i) => (
                    <motion.div
                      key={badge.text}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                      whileHover={{ scale: 1.1 }}
                      className={`absolute ${badge.pos} px-4 py-2 rounded-full 
                        bg-gradient-to-r from-teal-500/20 to-cyan-500/20 
                        border border-teal-400/30 backdrop-blur-md
                        text-sm font-semibold text-teal-300 shadow-lg`}
                    >
                      {badge.text}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* SCROLL INDICATOR */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-sm text-gray-400">Scroll</span>
              <div className="w-6 h-10 rounded-full border-2 border-teal-400/50 flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 rounded-full bg-teal-400 mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <Skills />
      <HonorableMentions />
      <Projects id="projects" />
      <ExperienceSection />
      <CertificatesSection id="certificates" />
      <ContactSection id="contact" />
      <Footer />
    </>
  );
}
