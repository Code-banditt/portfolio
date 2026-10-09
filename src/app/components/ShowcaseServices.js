"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const SERVICES_DATA = [
  {
    id: "fullstack",
    title: "FULL-STACK WEB DEVELOPMENT",
    description:
      "Architecting end-to-end, high-performance web platforms using Next.js 15, React 19, TypeScript, SSR/Streaming, and stateful backend services.",
    mockup: "/img/planorav2.png",
  },
  {
    id: "realtime",
    title: "REAL-TIME & EVENT PROTOCOLS",
    description:
      "Engineering bidirectional WebSocket event buses, sub-50ms live chat streams, conflict resolution algorithms, and audio/voice note relays.",
    mockup: "/img/planora2.png",
  },
  {
    id: "backend",
    title: "API & BACKEND ARCHITECTURE",
    description:
      "Designing scalable RESTful APIs, token security, and robust data persistence models across Node.js, Express, MongoDB, and Supabase Postgres.",
    mockup: "/img/roadlux.png",
  },
  {
    id: "uiux",
    title: "UI/UX & INTERACTION SYSTEMS",
    description:
      "Crafting tactile micro-interactions, responsive design systems, accessible component architectures, and high-conversion UX with Framer Motion.",
    mockup: "/img/biteblitz.png",
  },
];

export default function ShowcaseServices() {
  // Default to the first service expanded as in potty.mp4
  const [activeService, setActiveService] = useState("fullstack");

  return (
    <section id="services" className="relative pt-20 pb-24 px-4 sm:px-8 md:px-12">
      {/* Background Watermark Text: "SERVICE" */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[16vw] md:text-[150px] lg:text-[190px] font-black watermark-text whitespace-nowrap">
        SERVICE
      </div>

      {/* Section Header: /SERVICE */}
      <div className="relative z-10 mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
          /SERVICE
        </h2>
      </div>

      {/* Accordion List */}
      <div className="relative z-10 space-y-4">
        {SERVICES_DATA.map((service) => {
          const isActive = activeService === service.id;

          return (
            <div key={service.id} className="relative">
              <AnimatePresence mode="wait">
                {isActive ? (
                  /* EXPANDED DARK CONTAINER (Matches frame 09s) */
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full rounded-2xl md:rounded-3xl bg-[#28292B] text-white p-6 sm:p-8 md:p-10 overflow-hidden shadow-xl"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      {/* Left: Title & Description */}
                      <div className="md:col-span-7 space-y-3 pr-4 z-10">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-[#B0B0B2] max-w-md leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Right: Floating Angled UI Mockup Card */}
                      <div className="md:col-span-5 relative flex justify-center md:justify-end items-center min-h-[160px] sm:min-h-[220px]">
                        <motion.div
                          initial={{ scale: 0.85, rotate: 6, opacity: 0 }}
                          animate={{ scale: 1, rotate: -3, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="relative w-[260px] sm:w-[320px] h-[160px] sm:h-[190px] rounded-xl overflow-hidden border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.5)] pointer-events-none"
                        >
                          <Image
                            src={service.mockup}
                            alt={`${service.title} Mockup`}
                            fill
                            className="object-cover object-top"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Close Button on top right */}
                    <button
                      onClick={() => setActiveService(null)}
                      className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
                      title="Close"
                    >
                      <X size={18} />
                    </button>
                  </motion.div>
                ) : (
                  /* COLLAPSED ROW */
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setActiveService(service.id)}
                    className="group cursor-pointer py-6 sm:py-8 border-b border-black/10 flex items-center justify-between transition-colors hover:border-black/40"
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-[#111111] group-hover:text-black transition-colors uppercase">
                      {service.title}
                    </h3>

                    <div className="w-10 h-10 rounded-full border border-black/10 group-hover:border-black group-hover:bg-[#111111] group-hover:text-white flex items-center justify-center transition-all">
                      <ArrowUpRight
                        size={18}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
