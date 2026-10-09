"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function ShowcaseHero({ onOpenContact }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const firstName = "ANTHONY";
  const lastName = "EBUBE";
  const roleTitle = "Full Stack Software Engineer";
  const bio =
    "Crafting resilient digital products, high-performance web systems, and high-conversion UX with Next.js, React, TypeScript, and Node.js.";

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-6 md:pt-10 pb-0 overflow-hidden px-4 sm:px-8 md:px-12 flex flex-col justify-between"
      style={{ minHeight: "calc(100vh - 120px)" }}
    >
      {/* 1. HUGE SIGNATURE HEADLINE: ANTHONY (STROKED) + EBUBE (SOLID) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full text-center select-none pt-2 sm:pt-4"
      >
        <h1 className="text-[12.5vw] sm:text-[11vw] md:text-[100px] lg:text-[130px] xl:text-[150px] font-black tracking-[-0.04em] leading-[0.88] uppercase whitespace-nowrap">
          <span className="text-stroke-black mr-2 md:mr-4 inline-block hover:scale-[1.01] transition-transform">
            {firstName}
          </span>
          <span className="text-[#111111] font-black inline-block hover:scale-[1.01] transition-transform">
            {lastName}
          </span>
        </h1>
      </motion.div>

      {/* 2. THREE-COLUMN HERO BODY: LEFT INFO | CENTER RISING PORTRAIT | RIGHT SOCIALS */}
      <div className="relative mt-4 md:mt-8 flex-1 grid grid-cols-1 md:grid-cols-12 items-end gap-6 md:gap-4 pb-0">
        {/* Left Column: Role Headline, Bio, and CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 z-20 space-y-4 pb-8 md:pb-16 text-left"
        >
          <div className="space-y-2 max-w-sm">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[32px] font-bold tracking-tight text-[#111111] leading-tight">
              {roleTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-xs font-normal">
              {bio}
            </p>
          </div>

          <div>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_6px_20px_rgba(0,0,0,0.18)] group cursor-pointer"
            >
              <span>Let's collaborate</span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>
        </motion.div>

        {/* Center Column: Anthony's Rising Interactive Studio Portrait */}
        <div className="md:col-span-4 z-10 flex justify-center items-end relative h-full min-h-[360px] sm:min-h-[440px] md:min-h-[500px]">
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${
                -mousePos.y * 6
              }deg)`,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-[300px] sm:w-[350px] md:w-[400px] lg:w-[440px] h-[360px] sm:h-[440px] md:h-[500px] cursor-pointer group select-none flex items-end justify-center"
          >
            {/* Normal Monochrome Portrait */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src="/showcase/anthony_normal.png"
                alt="Anthony Ebube — Software Engineer"
                fill
                priority
                className="object-contain object-bottom pointer-events-none drop-shadow-sm"
              />
            </div>

            {/* Interactive Color Portrait on Hover */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src="/showcase/anthony_hover.png"
                alt="Anthony Ebube — Software Engineer in Color"
                fill
                priority
                className="object-contain object-bottom pointer-events-none drop-shadow-md"
              />
            </div>

            {/* Subtle interactive hover badge */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
              <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm text-white text-[10px] font-medium tracking-wide shadow-md">
                Nwodo Anthony Ebube ✨
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Anthony's Real Social Pills */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 z-20 flex flex-col items-start md:items-end gap-2.5 pb-8 md:pb-16"
        >
          {[
            {
              name: "GitHub",
              icon: FaGithub,
              href: "https://github.com/Code-banditt",
            },
            {
              name: "LinkedIn",
              icon: FaLinkedin,
              href: "https://www.linkedin.com/in/anthony-nwodo-8a36a71b4",
            },
            {
              name: "Twitter / X",
              icon: FaXTwitter,
              href: "https://twitter.com",
            },
            {
              name: "Email Me",
              icon: Mail,
              href: "mailto:nwodotony02@gmail.com",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto min-w-[135px] inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-medium text-[#222222] bg-white border border-[#E5E5E5] hover:border-black hover:bg-[#F9F9F9] hover:shadow-xs transition-all group"
              >
                <Icon
                  size={14}
                  className="text-[#555555] group-hover:text-black transition-colors"
                />
                <span>{item.name}</span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
