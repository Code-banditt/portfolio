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
        className="relative min-h-screen bg-[#0b0b0b] text-white flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-8 px-6 sm:px-12 md:px-20 py-10 overflow-hidden"
      >
        {/* ✨ PARTICLE FIELD (Behind Everything) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <motion.span
              key={i}
              initial={{
                opacity: 0.1,
                scale: Math.random() * 0.6 + 0.4,
              }}
              animate={{
                x: [Math.random() * 800 - 400, Math.random() * 800 - 400],
                y: [Math.random() * 600 - 300, Math.random() * 600 - 300],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: Math.random() * 12 + 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-2 h-2 rounded-full bg-teal-400/60 blur-[2px]"
              style={{
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
            />
          ))}
        </div>

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left space-y-6 z-10"
        >
          {/* Small Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`uppercase tracking-widest text-teal-400 text-xs sm:text-sm ${spaceGrotesk.className}`}
          >
            Full Stack Developer
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className={`${spaceGrotesk.className} text-4xl sm:text-5xl md:text-6xl font-light leading-tight`}
          >
            Hello, I’m <br />
            <span className="font-semibold text-teal-400">Nwodo Anthony</span>
          </motion.h1>

          {/* Sub Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className={`${inter.className} text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0`}
          >
            I build modern web applications using Next.js, React, Node.js,
            animations, and performance-focused engineering—creating products
            that feel fast, smooth, and visually engaging.
          </motion.p>
        </motion.div>

        {/* RIGHT IMAGE + ORBITS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center md:justify-end relative z-10 md:ml-[-20px]"
        >
          {/* Floating Image */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 w-[220px] sm:w-[300px] md:w-[360px] 
              h-[300px] sm:h-[450px] md:h-[520px]
              bg-gray-900 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.4)]"
          >
            <Image
              height={500}
              width={500}
              src="/img/portfolio.png"
              alt="Profile"
              className="w-full h-full object-cover opacity-90"
            />
          </motion.div>

          {/* ORBIT TAGS */}
          <div className="hidden lg:block">
            {[
              { label: "Full Stack", color: "#0ff" },
              { label: "Next.js", color: "#14b8a6" },
              { label: "Node.js", color: "#56ffca" },
              { label: "MongoDB", color: "#24e08a" },
            ].map((item, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2"
              >
                <motion.div
                  animate={{
                    x: Math.cos(i * 2) * 200,
                    y: Math.sin(i * 2) * 200,
                  }}
                  transition={{ repeat: Infinity, duration: 0 }}
                  className="absolute px-4 py-2 rounded-xl backdrop-blur-md 
                    border shadow-[0_0_20px_rgba(0,255,255,0.5)]
                    font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    borderColor: item.color,
                    color: item.color,
                  }}
                >
                  {item.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
