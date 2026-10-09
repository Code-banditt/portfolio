"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ArrowUpRight,
  Clock,
  Calendar,
  CheckCircle,
  ExternalLink,
  X,
  FileCheck,
} from "lucide-react";
import { SiUdemy } from "react-icons/si";

const certificatesData = [
  {
    id: "01",
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
  },
  {
    id: "02",
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
  },
  {
    id: "03",
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
  },
  {
    id: "04",
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
  },
  {
    id: "05",
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
  },
];

export default function CertificatesSection({ id }) {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id={id}
      className="relative py-24 md:py-36 border-b border-[#DDD9CE] dark:border-[#1E2023] bg-[#F8F7F4] dark:bg-[#0C0D0E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#DDD9CE] dark:border-[#1E2023]">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#8E8D86] dark:text-[#6C6A64]">
              // 05 — VERIFIED CREDENTIALS & AUDIT
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#121314] dark:text-[#F4F3EF]">
              Continuous rigor & verified knowledge.
            </h2>
          </div>

          <p className="text-sm font-mono text-[#8E8D86] dark:text-[#6C6A64] max-w-xs">
            Over 245+ hours of structured coursework validated by accredited online certifications.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group p-6 rounded-2xl border border-[#DDD9CE] dark:border-[#202225] bg-[#FFFFFF] dark:bg-[#131416] flex flex-col justify-between hover:border-[#121314] dark:hover:border-[#404348] hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all"
            >
              <div className="space-y-4">
                {/* Top Row: Monogram / Platform + ID */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg border border-[#DDD9CE] dark:border-[#202225] bg-[#F8F7F4] dark:bg-[#191B1D] text-[#2C3E35] dark:text-[#68B087] flex items-center justify-center text-xs">
                      <SiUdemy />
                    </div>
                    <span className="font-mono text-xs text-[#575855] dark:text-[#A09E96]">
                      {cert.platform}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-[#8E8D86] dark:text-[#6C6A64]">
                    #{cert.id}
                  </span>
                </div>

                {/* Certificate Title */}
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-[#121314] dark:text-[#F4F3EF] group-hover:text-[#2C3E35] dark:group-hover:text-[#68B087] transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1.5 text-xs font-mono text-[#8E8D86] dark:text-[#6C6A64]">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {cert.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {cert.duration}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#575855] dark:text-[#A09E96] leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[10px] font-mono border border-[#E8E5DC] dark:border-[#202225] bg-[#F8F7F4] dark:bg-[#191B1D] text-[#575855] dark:text-[#A09E96]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-[#F1EFEA] dark:border-[#1E2023] flex items-center justify-between">
                {cert.image ? (
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-xs font-mono text-[#121314] dark:text-[#F4F3EF] hover:underline underline-offset-4 cursor-pointer"
                  >
                    View Document ↗
                  </button>
                ) : (
                  <span className="text-[11px] font-mono text-[#8E8D86] dark:text-[#6C6A64]">
                    ID: {cert.credentialId.slice(0, 11)}...
                  </span>
                )}

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#2C3E35] dark:text-[#68B087] hover:underline underline-offset-4"
                >
                  <span>Verify</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Certificate Image */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-[#0C0D0E]/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl rounded-2xl border border-[#DDD9CE] dark:border-[#2A2C30] bg-[#FFFFFF] dark:bg-[#131416] p-6 shadow-2xl z-10 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#DDD9CE] dark:border-[#202225] pb-3">
                <div>
                  <h3 className="text-base font-medium text-[#121314] dark:text-[#F4F3EF]">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs font-mono text-[#8E8D86] dark:text-[#6C6A64]">
                    Issued: {selectedCert.date} • {selectedCert.platform}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-full border border-[#DDD9CE] dark:border-[#202225] text-[#575855] dark:text-[#A09E96] cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {selectedCert.image && (
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#EDEAE3] dark:bg-[#191B1D]">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <span className="font-mono text-xs text-[#8E8D86] dark:text-[#6C6A64]">
                  {selectedCert.credentialId}
                </span>
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-[#121314] text-[#F4F3EF] dark:bg-[#F4F3EF] dark:text-[#0C0D0E]"
                >
                  <span>Verify on Udemy</span>
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
