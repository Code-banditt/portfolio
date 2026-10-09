"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Globe,
  SlidersHorizontal,
  X,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";

const projectsData = [
  {
    id: "01",
    title: "Planora V2",
    tagline: "Real-time Appointment Scheduling & Collaboration Engine",
    category: "Featured Systems",
    year: "2025",
    description:
      "Enterprise-grade appointment scheduling ecosystem engineered with bidirectional WebSocket synchronization. Supports live calendar conflict resolution, voice notes, and real-time in-app notifications.",
    challenge:
      "Eliminating race conditions during concurrent appointment bookings while maintaining sub-50ms latency across live chat and voice note streams.",
    solution:
      "Implemented Socket.io rooms with state reconciliation, optimistic UI updates on the Next.js client, and Node.js event clustering.",
    image: "/img/planorav2.png",
    live: "https://planoraversiontwo.vercel.app",
    github: "https://github.com/Code-banditt/PlanoraV2",
    stacks: ["Next.js", "Socket.io", "TypeScript", "Node.js", "Tailwind CSS"],
    highlights: [
      "Bidirectional WebSocket event bus",
      "Low-latency voice note delivery",
      "Real-time calendar slot locking",
    ],
  },
  {
    id: "02",
    title: "Biteblitz",
    tagline: "High-Performance Food Commerce & Real-Time Tracking",
    category: "Featured Systems",
    year: "2024",
    description:
      "Full-stack on-demand food ordering platform designed for speed. Features persistent client-side cart reconciliation, dynamic categorization, and live simulated order status tracking.",
    challenge:
      "Preserving cart integrity across session drops and providing seamless checkout without layout shifts.",
    solution:
      "Architected modular React state with LocalStorage synchronization, structured MongoDB schemas, and TypeScript interfaces.",
    image: "/img/biteblitz.png",
    live: "https://biteblitz.vercel.app",
    github: "https://github.com/Code-banditt/biteblitz",
    stacks: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB"],
    highlights: [
      "Optimistic UI state management",
      "Sub-second catalog search",
      "End-to-end checkout workflow",
    ],
  },
  {
    id: "03",
    title: "Roadlux Rentals",
    tagline: "Fleet Inventory Management & Reservation Platform",
    category: "Featured Systems",
    year: "2024",
    description:
      "Vehicle rental solution featuring dynamic fleet filtering, user authentication via Supabase, and real-time booking calculations with an administrative analytics overview.",
    challenge:
      "Handling complex vehicle availability ranges, multi-tier pricing, and authenticated customer reservations securely.",
    solution:
      "Leveraged Supabase Row Level Security (RLS) with Next.js Server Components for secure data fetching and instant rendering.",
    image: "/img/roadlux.png",
    live: "https://roadlux-rental.vercel.app",
    github: "https://github.com/Code-banditt/Roadlux",
    stacks: ["React", "Next.js", "Tailwind CSS", "Supabase", "TypeScript"],
    highlights: [
      "Supabase Row Level Security",
      "Live inventory availability checking",
      "Responsive fleet management console",
    ],
  },
  {
    id: "04",
    title: "Wanderlust",
    tagline: "AI-Assisted Travel Discovery & Itinerary Engine",
    category: "Web Platforms",
    year: "2024",
    description:
      "Full-stack travel exploration platform offering destination analytics, interactive mapping interfaces, and AI-suggested itinerary generation for global nomads.",
    challenge:
      "Orchestrating state across multiple third-party travel APIs while maintaining snappy map interactions.",
    solution:
      "Employed Redux Toolkit for centralized asynchronous dispatching alongside Next.js route caching to prevent redundant API queries.",
    image: "/img/wanderlst.png",
    live: "https://wanderlust-gray-phi.vercel.app",
    github: "https://github.com/Code-banditt/wanderlust",
    stacks: ["React", "Next.js", "Tailwind CSS", "Node.js", "Redux Toolkit"],
    highlights: [
      "Centralized Redux state management",
      "Interactive map overlays",
      "Custom trip saving and export",
    ],
  },
  {
    id: "05",
    title: "Planora (V1)",
    tagline: "Initial Virtual Consultation Prototype",
    category: "Explorations",
    year: "2023",
    description:
      "The initial proof-of-concept prototype exploring virtual video consultation links, automated calendar booking, and basic WebSocket notification relays.",
    challenge:
      "Validating the core architectural hypothesis for automated real-time booking before building V2.",
    solution:
      "Rapidly built and deployed a Next.js + Node.js prototype with Socket.io integration to test user engagement.",
    image: "/img/planora2.png",
    live: "https://planora-inky.vercel.app",
    github: "https://github.com/Code-banditt/Planora",
    stacks: ["Next.js", "Socket.io", "TypeScript", "Node.js"],
    highlights: [
      "Proof-of-concept WebSocket bus",
      "Calendar datepicker integration",
      "Lightweight microservice backend",
    ],
  },
  {
    id: "06",
    title: "WOOF Adoption",
    tagline: "Tactile Animal Welfare & Adoption Experience",
    category: "Explorations",
    year: "2023",
    description:
      "A fluid animal adoption portal built with vanilla fundamentals, focusing on accessible layout hierarchy, custom micro-interactions, and high performance.",
    challenge:
      "Demonstrating fluid interactivity and responsive layout design with zero external heavy libraries.",
    solution:
      "Crafted native semantic HTML5, modern CSS Grid/Flexbox, and lightweight JavaScript event delegators.",
    image: "/img/doggity.png",
    live: "https://dog-website-plum.vercel.app",
    github: "https://github.com/Code-banditt",
    stacks: ["HTML5", "CSS3", "JavaScript"],
    highlights: [
      "100 Lighthouse performance score",
      "Bespoke CSS animations",
      "Accessible structure",
    ],
  },
  {
    id: "07",
    title: "Find Universities",
    tagline: "Higher Education Search & Filtering Engine",
    category: "Web Platforms",
    year: "2023",
    description:
      "Academic institution search tool connecting prospective students with universities globally through real-time debounced search and comprehensive institution dossiers.",
    challenge:
      "Filtering through large JSON datasets client-side without stuttering the main browser thread.",
    solution:
      "Implemented debounced query hooks and memoized filter algorithms inside a clean Next.js architecture.",
    image: "/img/unis.png",
    live: "#",
    github: "https://github.com/Code-banditt",
    stacks: ["Next.js", "CSS3", "JavaScript", "REST APIs"],
    highlights: [
      "Debounced live query filtering",
      "Institution detail modals",
      "Clean REST API consumption",
    ],
  },
];

const categories = ["All", "Featured Systems", "Web Platforms", "Explorations"];

export default function Projects({ id }) {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

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
              // 01 — SELECTED WORKS & ARCHITECTURE
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#121314] dark:text-[#F4F3EF]">
              Engineered solutions with tangible impact.
            </h2>
          </div>

          <p className="text-sm font-mono text-[#8E8D86] dark:text-[#6C6A64] max-w-xs">
            A curated index of production systems, distributed web apps, and design explorations.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-8 pb-12">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? projectsData.length
                : projectsData.filter((p) => p.category === cat).length;
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-[#121314] text-[#F4F3EF] dark:bg-[#F4F3EF] dark:text-[#0C0D0E] font-medium"
                    : "border border-[#DDD9CE] dark:border-[#202225] bg-[#FFFFFF]/60 dark:bg-[#131416]/60 text-[#575855] dark:text-[#A09E96] hover:border-[#121314] dark:hover:border-[#F4F3EF]"
                }`}
              >
                <span>{cat}</span>
                <span className="text-[10px] opacity-60">[{count < 10 ? `0${count}` : count}]</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col justify-between rounded-2xl border border-[#DDD9CE] dark:border-[#202225] bg-[#FFFFFF] dark:bg-[#131416] p-4 transition-all duration-300 hover:border-[#121314] dark:hover:border-[#404348] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              {/* Media Frame */}
              <div>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#EDEAE3] dark:bg-[#191B1D] mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0C0D0E]/10 dark:bg-[#0C0D0E]/20 group-hover:opacity-0 transition-opacity" />

                  {/* Top Architectural Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-[#0C0D0E]/70 backdrop-blur-md text-[#F4F3EF] border border-white/10">
                      {project.id}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-[#0C0D0E]/70 backdrop-blur-md text-[#A09E96] border border-white/10">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-xl font-medium tracking-tight text-[#121314] dark:text-[#F4F3EF]">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[10px] text-[#8E8D86] dark:text-[#6C6A64] uppercase">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-[#2C3E35] dark:text-[#68B087]">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-[#575855] dark:text-[#A09E96] leading-relaxed line-clamp-3 pt-1">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Metadata & Actions */}
              <div className="pt-5 mt-4 border-t border-[#E8E5DC] dark:border-[#1E2023] space-y-3">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stacks.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono border border-[#E8E5DC] dark:border-[#202225] bg-[#F8F7F4] dark:bg-[#191B1D] text-[#575855] dark:text-[#A09E96]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stacks.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#8E8D86] dark:text-[#6C6A64]">
                      +{project.stacks.length - 4}
                    </span>
                  )}
                </div>

                {/* Interactive Action Links */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono underline underline-offset-4 text-[#575855] dark:text-[#A09E96] hover:text-[#121314] dark:hover:text-[#F4F3EF] cursor-pointer"
                  >
                    Inspect Specs ↗
                  </button>

                  <div className="flex items-center gap-2">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Repository"
                        className="p-1.5 rounded-lg border border-[#DDD9CE] dark:border-[#202225] text-[#575855] dark:text-[#A09E96] hover:text-[#121314] dark:hover:text-[#F4F3EF] hover:border-[#121314] dark:hover:border-[#F4F3EF] transition-colors"
                      >
                        <Github size={13} />
                      </a>
                    )}
                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live Platform"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#121314] text-[#F4F3EF] dark:bg-[#F4F3EF] dark:text-[#0C0D0E] hover:bg-[#2C3E35] dark:hover:bg-[#E8E6DF] transition-colors"
                      >
                        <span>Live</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* ARCHITECTURAL PROJECT DETAILS MODAL / DRAWER */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#0C0D0E]/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#DDD9CE] dark:border-[#2A2C30] bg-[#FFFFFF] dark:bg-[#131416] p-6 sm:p-8 md:p-10 shadow-2xl z-10 space-y-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-[#DDD9CE] dark:border-[#202225] pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#EDEAE3] dark:bg-[#191B1D] text-[#575855] dark:text-[#A09E96]">
                      CASE // {selectedProject.id}
                    </span>
                    <span className="font-mono text-xs text-[#8E8D86] dark:text-[#6C6A64]">
                      {selectedProject.year}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#121314] dark:text-[#F4F3EF]">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm font-mono text-[#2C3E35] dark:text-[#68B087] mt-1">
                    {selectedProject.tagline}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full border border-[#DDD9CE] dark:border-[#202225] text-[#575855] dark:text-[#A09E96] hover:text-[#121314] dark:hover:text-[#F4F3EF] cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Media Preview */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#EDEAE3] dark:bg-[#191B1D]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Architecture Deep Dive */}
              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#8E8D86] dark:text-[#6C6A64]">
                    THE ARCHITECTURAL CHALLENGE
                  </p>
                  <p className="text-sm text-[#575855] dark:text-[#A09E96] leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#8E8D86] dark:text-[#6C6A64]">
                    THE ENGINEERING SOLUTION
                  </p>
                  <p className="text-sm text-[#575855] dark:text-[#A09E96] leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-3 pt-2">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#8E8D86] dark:text-[#6C6A64]">
                  CORE ARCHITECTURAL HIGHLIGHTS
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {selectedProject.highlights.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl border border-[#DDD9CE] dark:border-[#202225] bg-[#F8F7F4] dark:bg-[#191B1D] flex items-start gap-2.5"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-[#2C3E35] dark:text-[#68B087] shrink-0 mt-0.5"
                      />
                      <span className="text-xs text-[#121314] dark:text-[#F4F3EF] font-medium leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack & Action Links */}
              <div className="pt-4 border-t border-[#DDD9CE] dark:border-[#202225] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.stacks.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono border border-[#DDD9CE] dark:border-[#202225] bg-[#FFFFFF] dark:bg-[#131416] text-[#575855] dark:text-[#A09E96]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {selectedProject.github && selectedProject.github !== "#" && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono border border-[#DDD9CE] dark:border-[#202225] hover:border-[#121314] dark:hover:border-[#F4F3EF] text-[#121314] dark:text-[#F4F3EF]"
                    >
                      <Github size={14} />
                      <span>Repository</span>
                    </a>
                  )}
                  {selectedProject.live && selectedProject.live !== "#" && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-[#121314] text-[#F4F3EF] dark:bg-[#F4F3EF] dark:text-[#0C0D0E] hover:bg-[#2C3E35] dark:hover:bg-[#E8E6DF]"
                    >
                      <span>Visit Live Platform</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
