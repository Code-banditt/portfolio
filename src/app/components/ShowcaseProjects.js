"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const ANTHONY_PROJECTS = [
  {
    id: "planora-v2",
    title: "Planora V2 - Real-Time Booking & Collaboration",
    badge: "FEATURED SYSTEM",
    category: "Real Project",
    image: "/img/planorav2.png",
    tags: ["Next.js", "Socket.io", "TypeScript"],
    description:
      "Enterprise-grade appointment scheduling ecosystem engineered with bidirectional WebSocket synchronization, live conflict resolution, and voice notes.",
    fullDescription:
      "Enterprise-grade appointment scheduling ecosystem engineered with bidirectional WebSocket synchronization. Supports live calendar conflict resolution, voice notes, and real-time in-app notifications with sub-50ms latency across live chat streams.",
    service: "Full Stack Systems, Real-time WebSockets",
    timeline: "8 Weeks",
    liveUrl: "https://planoraversiontwo.vercel.app",
    githubUrl: "https://github.com/Code-banditt/PlanoraV2",
    stacks: ["Next.js 15", "Socket.io", "TypeScript", "Node.js", "Tailwind CSS"],
    highlights: [
      "Bidirectional WebSocket event bus",
      "Low-latency voice note delivery",
      "Real-time calendar slot locking",
    ],
  },
  {
    id: "biteblitz",
    title: "Biteblitz - High-Performance Food Commerce",
    badge: "REAL PROJECT",
    category: "Real Project",
    image: "/img/biteblitz.png",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    description:
      "Full-stack on-demand food ordering platform designed for speed with persistent client cart reconciliation and simulated live delivery tracking.",
    fullDescription:
      "Full-stack on-demand food commerce platform designed for speed. Features persistent client-side cart reconciliation, dynamic categorization, sub-second catalog search, and end-to-end checkout workflow with zero layout shifts.",
    service: "E-Commerce Architecture, Full Stack",
    timeline: "6 Weeks",
    liveUrl: "https://biteblitz.vercel.app",
    githubUrl: "https://github.com/Code-banditt/biteblitz",
    stacks: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB"],
    highlights: [
      "Optimistic UI state management",
      "Sub-second catalog search",
      "End-to-end checkout workflow",
    ],
  },
  {
    id: "roadlux",
    title: "Roadlux Rentals - Fleet Inventory & Booking",
    badge: "REAL PROJECT",
    category: "Real Project",
    image: "/img/roadlux.png",
    tags: ["React", "Next.js", "Supabase"],
    description:
      "Vehicle rental solution featuring dynamic fleet filtering, user authentication via Supabase, and real-time booking calculations with an administrative analytics overview.",
    fullDescription:
      "Vehicle rental solution featuring dynamic fleet filtering, user authentication via Supabase, and real-time booking calculations. Leveraged Supabase Row Level Security (RLS) with Next.js Server Components for secure data fetching.",
    service: "Web Platform, Cloud Architecture",
    timeline: "5 Weeks",
    liveUrl: "https://roadlux-rental.vercel.app",
    githubUrl: "https://github.com/Code-banditt/Roadlux",
    stacks: ["React", "Next.js", "Tailwind CSS", "Supabase", "TypeScript"],
    highlights: [
      "Supabase Row Level Security",
      "Live inventory availability checking",
      "Responsive fleet management console",
    ],
  },
  {
    id: "wanderlust",
    title: "Wanderlust - AI-Assisted Travel Discovery",
    badge: "EXPLORATION",
    category: "Exploration",
    image: "/img/wanderlst.png",
    tags: ["React", "Redux Toolkit", "Next.js"],
    description:
      "Full-stack travel exploration platform offering destination analytics, interactive mapping interfaces, and AI-suggested itinerary generation for global nomads.",
    fullDescription:
      "Full-stack travel exploration platform offering destination analytics, interactive mapping interfaces, and AI-suggested itinerary generation. Employed Redux Toolkit for centralized asynchronous dispatching alongside route caching.",
    service: "Travel Tech, State Management",
    timeline: "4 Weeks",
    liveUrl: "https://wanderlust-gray-phi.vercel.app",
    githubUrl: "https://github.com/Code-banditt/wanderlust",
    stacks: ["React", "Next.js", "Tailwind CSS", "Node.js", "Redux Toolkit"],
    highlights: [
      "Centralized Redux state management",
      "Interactive map overlays",
      "Custom trip saving and export",
    ],
  },
  {
    id: "planora-v1",
    title: "Planora (V1) - Virtual Consultation Prototype",
    badge: "EXPLORATION",
    category: "Exploration",
    image: "/img/planora2.png",
    tags: ["Next.js", "Socket.io", "Node.js"],
    description:
      "Initial proof-of-concept prototype exploring virtual video consultation links, automated calendar booking, and basic WebSocket notification relays.",
    fullDescription:
      "The initial proof-of-concept prototype exploring virtual video consultation links, automated calendar booking, and basic WebSocket notification relays to validate real-time engagement before building V2.",
    service: "Proof of Concept, Microservices",
    timeline: "3 Weeks",
    liveUrl: "https://planora-inky.vercel.app",
    githubUrl: "https://github.com/Code-banditt/Planora",
    stacks: ["Next.js", "Socket.io", "TypeScript", "Node.js"],
    highlights: [
      "Proof-of-concept WebSocket bus",
      "Calendar datepicker integration",
      "Lightweight microservice backend",
    ],
  },
  {
    id: "woof",
    title: "WOOF Adoption - Animal Welfare & Portal",
    badge: "EXPLORATION",
    category: "Exploration",
    image: "/img/doggity.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    description:
      "Tactile animal adoption portal built with vanilla fundamentals, focusing on accessible layout hierarchy, custom micro-interactions, and 100 Lighthouse score.",
    fullDescription:
      "A fluid animal adoption portal built with vanilla web fundamentals, focusing on accessible layout hierarchy, custom micro-interactions, zero external bloat, and perfect performance.",
    service: "Frontend Engineering, Accessibility",
    timeline: "2 Weeks",
    liveUrl: "https://dog-website-plum.vercel.app",
    githubUrl: "https://github.com/Code-banditt",
    stacks: ["HTML5", "CSS3", "JavaScript"],
    highlights: [
      "100 Lighthouse performance score",
      "Bespoke CSS animations",
      "Accessible structure",
    ],
  },
  {
    id: "unis",
    title: "Find Universities - Global Academic Search Engine",
    badge: "REAL PROJECT",
    category: "Real Project",
    image: "/img/unis.png",
    tags: ["Next.js", "REST APIs", "Debounced Search"],
    description:
      "Academic institution search tool connecting prospective students with universities globally through real-time debounced search and comprehensive institution dossiers.",
    fullDescription:
      "Academic institution search tool connecting prospective students with universities globally through real-time debounced query filtering and memoized algorithms inside a clean Next.js architecture.",
    service: "Web Platform, REST APIs",
    timeline: "3 Weeks",
    liveUrl: "#",
    githubUrl: "https://github.com/Code-banditt",
    stacks: ["Next.js", "CSS3", "JavaScript", "REST APIs"],
    highlights: [
      "Debounced live query filtering",
      "Institution detail modals",
      "Clean REST API consumption",
    ],
  },
];

export const SHOWCASE_PROJECTS = ANTHONY_PROJECTS;

export default function ShowcaseProjects({ onSelectProject }) {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = ANTHONY_PROJECTS.filter((p) => {
    if (filter === "All") return true;
    return p.category.toLowerCase() === filter.toLowerCase();
  });

  const displayList = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="work" className="relative pt-20 pb-24 px-4 sm:px-8 md:px-12">
      {/* Background Watermark Text: "PORTFOLIO" */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[15vw] md:text-[140px] lg:text-[180px] font-black watermark-text whitespace-nowrap">
        PORTFOLIO
      </div>

      {/* Section Header: /SELECTED WORK */}
      <div className="relative z-10 mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
          /SELECTED WORK
        </h2>
      </div>

      {/* Filter Tabs & View All Work Button */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-black/5">
        <div className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm">
          {["All", "Real Project", "Exploration"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`cursor-pointer transition-colors relative py-1 ${
                filter === tab
                  ? "text-[#111111] font-bold"
                  : "text-[#777777] font-normal hover:text-[#111111]"
              }`}
            >
              <span>{tab}</span>
              {filter === tab && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#111111]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-[#222222] bg-white border border-[#E5E5E5] hover:border-black hover:bg-[#F9F9F9] transition-all cursor-pointer shadow-xs"
        >
          <span>{showAll ? "Show 4 Highlights" : `View All Work (${filteredProjects.length})`}</span>
          <ArrowUpRight size={13} />
        </button>
      </div>

      {/* 2x2 Project Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {displayList.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.6,
              delay: idx * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={() => onSelectProject(project)}
            className="group cursor-pointer rounded-2xl md:rounded-3xl bg-[#FFFFFF] border border-black/6 hover:border-black/25 p-4 sm:p-5 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] flex flex-col justify-between"
          >
            {/* Image Container with Badge */}
            <div className="relative w-full aspect-[16/10] rounded-xl md:rounded-2xl overflow-hidden bg-[#F2F2F2] mb-5">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              />

              {/* Pill Badge */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#111111] shadow-xs border border-black/5">
                  {project.badge}
                </span>
              </div>
            </div>

            {/* Title & Tags */}
            <div className="space-y-3 px-1 pb-1">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#111111] group-hover:text-black transition-colors leading-snug">
                {project.title}
              </h3>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[11px] font-medium bg-[#F6F6F6] text-[#555555] border border-black/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
