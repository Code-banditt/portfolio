"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const EXPERIENCE_ITEMS = [
  {
    id: "davo",
    company: "Davo Solutions Ltd",
    role: "Fullstack Mobile App Developer • React Native, Expo & Web3 Systems",
    period: "2024 — Present",
    mockup: "/img/planorav2.png",
  },
  {
    id: "digital-dreams",
    company: "Digital Dreams",
    role: "Frontend Developer Intern • React.js & Performance Architecture",
    period: "Aug 2023 — Nov 2023",
    mockup: "/img/biteblitz.png",
  },
  {
    id: "contract",
    company: "Contract & Open-Source Engineering",
    role: "Full Stack Software Engineer • Distributed APIs & WebSockets",
    period: "2023 — Present",
    mockup: "/img/roadlux.png",
  },
  {
    id: "esut",
    company: "Enugu State Univ. of Science & Tech (ESUT)",
    role: "B.Sc Computer Science",
    period: "2020 — 2024",
    mockup: "/img/unis.png",
  },
];

export default function ShowcaseExperience({ experienceYears = "3+ Years of Experience" }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="experience"
      onMouseMove={handleMouseMove}
      className="relative my-8 sm:my-14 mx-3 sm:mx-6 md:mx-10 rounded-2xl md:rounded-[32px] bg-[#1C1D1F] text-white py-14 sm:py-20 px-6 sm:px-10 md:px-16 overflow-hidden shadow-2xl"
    >
      {/* Background Watermark Text: "EXPERIENCE" */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[15vw] md:text-[140px] lg:text-[170px] font-black watermark-text-dark whitespace-nowrap">
        EXPERIENCE
      </div>

      {/* Header: Left: /EXPERIENCE | Right: Years of Experience */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-12 sm:mb-16 border-b border-white/10 pb-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          /EXPERIENCE
        </h2>

        <div className="text-xs sm:text-sm font-medium text-[#A0A0A3] tracking-wide">
          {experienceYears}
        </div>
      </div>

      {/* Experience Rows */}
      <div className="relative z-10 divide-y divide-white/10">
        {EXPERIENCE_ITEMS.map((item, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="py-7 sm:py-9 grid grid-cols-1 md:grid-cols-12 items-baseline gap-4 cursor-pointer group transition-colors hover:bg-white/[0.02]"
            >
              {/* Company & Role */}
              <div className="md:col-span-8 space-y-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  {item.company}
                </h3>
                <p className="text-xs sm:text-sm text-[#8E8E93] font-normal">
                  {item.role}
                </p>
              </div>

              {/* Period */}
              <div className="md:col-span-4 text-left md:text-right">
                <span className="text-xs sm:text-sm font-medium text-[#7A7A80] group-hover:text-white transition-colors">
                  {item.period}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* FLOATING HOVER PREVIEW (Frame 13s / 14s) */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: -6,
              x: cursorPos.x + 20,
              y: cursorPos.y - 120,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 25,
            }}
            className="hidden lg:block pointer-events-none fixed z-50 w-[260px] h-[175px] rounded-xl overflow-hidden border border-white/20 shadow-[0_25px_50px_rgba(0,0,0,0.7)] bg-[#111111]"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={EXPERIENCE_ITEMS[hoveredIndex]?.mockup || "/img/planorav2.png"}
                alt="Experience Mockup Preview"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
