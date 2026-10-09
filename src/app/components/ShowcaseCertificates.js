"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Award, CheckCircle2, Clock, Calendar, ExternalLink, X, Eye } from "lucide-react";
import { SiUdemy } from "react-icons/si";

export const CERTIFICATES_DATA = [
  {
    id: "react-nextjs",
    title: "Modern React, Next.js and Redux",
    platform: "Udemy",
    date: "Jan 2025",
    duration: "84 Hours",
    credentialId: "UC-2733ce97-18dd-4d12-a698-685a40c9e175",
    skills: ["React 19", "Next.js App Router", "Redux Toolkit", "TypeScript"],
    description:
      "Comprehensive mastery over server-side rendering, client component lifecycles, global store architecture, and production Next.js deployments.",
    link: "https://www.udemy.com/certificate/UC-2733ce97-18dd-4d12-a698-685a40c9e175/",
    image: "/img/react.jpg",
    featured: true,
  },
  {
    id: "nodejs",
    title: "Node.js: The Complete Guide",
    platform: "Udemy",
    date: "June 2025",
    duration: "42 Hours",
    credentialId: "UC-4f514784-bc11-4187-91ce-1cff15bcab0d",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Auth"],
    description:
      "Deep dive into backend architecture, asynchronous streams, token authentication, MongoDB aggregation, and robust microservices.",
    link: "https://www.udemy.com/certificate/UC-4f514784-bc11-4187-91ce-1cff15bcab0d/",
    image: "/img/nodejs.jpg",
    featured: true,
  },
  {
    id: "html-css",
    title: "Advanced HTML5/CSS3 & Responsive Design",
    platform: "Udemy",
    date: "Jan 2024",
    duration: "37 Hours",
    credentialId: "UC-eb9453ef-a260-4280-a084-b78e275d9cd0",
    skills: ["CSS Grid", "Flexbox", "Responsive Algorithms", "Semantics"],
    description:
      "Mastery of responsive layouts across complex viewports, CSS architectural patterns, web accessibility, and performance optimization.",
    link: "https://www.udemy.com/certificate/UC-eb9453ef-a260-4280-a084-b78e275d9cd0/",
    image: "/img/html.jpg",
    featured: false,
  },
  {
    id: "javascript",
    title: "Mastering Modern JavaScript (ES6+)",
    platform: "Udemy",
    date: "April 2024",
    duration: "64 Hours",
    credentialId: "UC-11223344",
    skills: ["Async/Await", "Event Loop", "Closures", "DOM Optimization"],
    description:
      "Core JavaScript engine fundamentals, prototypal inheritance, asynchronous event loops, and modern web application patterns.",
    link: "https://udemy.com/certificate/UC-11223344",
    image: null,
    featured: false,
  },
  {
    id: "typescript",
    title: "TypeScript Fundamentals & Architecture",
    platform: "Udemy",
    date: "Feb 2024",
    duration: "18 Hours",
    credentialId: "UC-33445566",
    skills: ["Generics", "Type Narrowing", "Interfaces", "React Typing"],
    description:
      "Advanced type programming, strict compiler configuration, generic components, and type-safe API client consumption.",
    link: "https://udemy.com/certificate/UC-33445566",
    image: null,
    featured: false,
  },
];

export default function ShowcaseCertificates() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="certificates" className="relative pt-20 pb-24 px-4 sm:px-8 md:px-12">
      {/* Background Watermark Text: "CERTIFIED" */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[14vw] md:text-[130px] lg:text-[170px] font-black watermark-text whitespace-nowrap">
        CERTIFIED
      </div>

      {/* Section Header: /CREDENTIALS */}
      <div className="relative z-10 flex flex-wrap items-baseline justify-between gap-4 mb-8 sm:mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
            /CREDENTIALS
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#666666] max-w-lg">
            Verified online coursework & specialized architecture credentials from Udemy.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F4F5] border border-black/5 text-[#111111] text-xs font-medium shadow-xs">
          <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
          <span>5 Verified Certifications • 245+ Hours</span>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATES_DATA.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.5,
              delay: idx * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative rounded-2xl md:rounded-3xl bg-[#FFFFFF] border border-black/6 hover:border-black/25 p-6 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] flex flex-col justify-between"
          >
            <div>
              {/* Top Row: Icon + Meta badges */}
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#F6F6F7] border border-black/5 group-hover:bg-[#A435F0] group-hover:text-white flex items-center justify-center text-xl text-[#111111] transition-all duration-300 shadow-2xs">
                  <SiUdemy />
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="px-2.5 py-1 rounded-full bg-[#F4F4F5] text-[#111111] text-[10px] font-semibold tracking-wide uppercase">
                    {cert.duration}
                  </span>
                  <span className="text-[10px] text-[#888888] font-mono">
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* Title & Credential ID */}
              <div className="space-y-2 mb-4">
                <h3 className="text-lg font-bold tracking-tight text-[#111111] group-hover:text-black transition-colors leading-snug">
                  {cert.title}
                </h3>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F8F8F9] border border-black/5 text-[10px] font-mono text-[#555555]">
                  <CheckCircle2 size={11} className="text-emerald-500 shrink-0" />
                  <span className="truncate max-w-[200px]">{cert.credentialId}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#666666] leading-relaxed mb-5">
                {cert.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap items-center gap-1.5 mb-6">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#F6F6F7] text-[#444444] border border-black/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions Row: Verify Link + Image Preview */}
            <div className="pt-4 border-t border-black/5 flex items-center justify-between gap-3">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs group/btn"
              >
                <span>Verify on Udemy</span>
                <ArrowUpRight
                  size={12}
                  className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                />
              </a>

              {cert.image && (
                <button
                  onClick={() => setActiveImage(cert)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-[#444444] bg-[#F4F4F5] hover:bg-black hover:text-white transition-all cursor-pointer"
                  title="View Certificate Certificate"
                >
                  <Eye size={13} />
                  <span>Certificate</span>
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full Certificate Image Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full rounded-2xl bg-white p-4 sm:p-6 shadow-2xl z-10 overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-black/5 mb-4">
                <div>
                  <h4 className="text-base font-bold text-[#111111]">
                    {activeImage.title}
                  </h4>
                  <p className="text-xs text-[#666666]">
                    Credential ID: {activeImage.credentialId}
                  </p>
                </div>

                <button
                  onClick={() => setActiveImage(null)}
                  className="w-8 h-8 rounded-full bg-[#F4F4F5] hover:bg-black hover:text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>

              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-black/10 bg-[#FAFAFA]">
                <Image
                  src={activeImage.image}
                  alt={activeImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-4 pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="text-xs text-[#888888]">
                  Verified via Udemy Online Learning Platform
                </span>
                <a
                  href={activeImage.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black transition-all"
                >
                  <span>Open Official Credential</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
