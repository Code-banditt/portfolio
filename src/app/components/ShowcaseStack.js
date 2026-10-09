"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiExpo,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiRedux,
  SiFigma,
  SiGit,
  SiFirebase,
} from "react-icons/si";
import { Smartphone, Sparkles, Layers, Cpu, Database, Wrench } from "lucide-react";

export const STACK_DATA = [
  {
    id: "expo",
    name: "React Native (Expo)",
    category: "Mobile",
    tier: "Cross-Platform Mobile",
    icon: <SiExpo className="text-xl" />,
    secondaryIcon: <SiReact className="text-sm text-cyan-500" />,
    featured: true,
    description:
      "Architecting cross-platform mobile applications for iOS & Android with Expo Router, file-based routing, native hardware APIs, gesture handlers, and NativeWind styling.",
    tags: ["Expo Router", "iOS & Android", "NativeWind", "AsyncStorage"],
    highlight: "Primary Mobile Framework",
  },
  {
    id: "nextjs",
    name: "Next.js 15+",
    category: "Frontend",
    tier: "Core Architecture",
    icon: <SiNextdotjs className="text-xl" />,
    featured: true,
    description:
      "Engineering SSR and streaming web applications using Next.js App Router, React Server Components, Server Actions, Route Handlers, ISR, and optimal Core Web Vitals.",
    tags: ["App Router", "Server Actions", "Streaming SSR", "Turbopack"],
    highlight: "Core Web Architecture",
  },
  {
    id: "react",
    name: "React 19+",
    category: "Frontend",
    tier: "Component Framework",
    icon: <SiReact className="text-xl text-cyan-500" />,
    description:
      "Building reactive client interfaces with modern React 19 primitives, concurrent rendering, custom hook architectures, and optimistic UI updates with zero layout shifts.",
    tags: ["React 19", "Custom Hooks", "Optimistic UI", "Concurrent Mode"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    tier: "Strict Typings",
    icon: <SiTypescript className="text-xl text-blue-500" />,
    description:
      "Enforcing strict type safety across full-stack applications with generics, discriminated unions, utility types, and synchronized client/server data contracts.",
    tags: ["Strict Typings", "Generics", "Type Inference", "Interfaces"],
  },
  {
    id: "socketio",
    name: "Socket.io & WebSockets",
    category: "Realtime",
    tier: "Bidirectional Protocol",
    icon: <SiSocketdotio className="text-xl" />,
    featured: true,
    description:
      "Engineering bidirectional event buses, sub-50ms live chat streams, voice note relays, and real-time conflict-free calendar booking synchronization.",
    tags: ["WebSockets", "Rooms & Namespaces", "Voice Notes", "Live Sync"],
    highlight: "Low-Latency Event Bus",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    tier: "Asynchronous Runtime",
    icon: <SiNodedotjs className="text-xl text-emerald-600" />,
    description:
      "High-throughput server runtimes, event-driven microservices, asynchronous file streams, token authentication, and robust clustering.",
    tags: ["Event Loop", "Streams", "Microservices", "REST APIs"],
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    tier: "RESTful Architecture",
    icon: <SiExpress className="text-xl" />,
    description:
      "Designing clean RESTful API endpoints, robust middleware pipelines, JWT auth, rate limiting, and centralized error handling boundaries.",
    tags: ["Middleware Chaining", "JWT Auth", "Rate Limiting", "Controllers"],
  },
  {
    id: "mongodb",
    name: "MongoDB & Mongoose",
    category: "Data",
    tier: "Document Store",
    icon: <SiMongodb className="text-xl text-emerald-500" />,
    description:
      "Schema modeling, aggregation pipelines, complex indexing, transactional queries, and Mongoose ODM integration for high-volume data.",
    tags: ["Mongoose ODM", "Aggregation Pipelines", "Indexing", "Replica Sets"],
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Data",
    tier: "Relational Database",
    icon: <SiPostgresql className="text-xl text-blue-600" />,
    description:
      "Relational schema modeling, foreign key constraints, ACID transactional integrity, complex joins, and performant SQL query optimization.",
    tags: ["ACID Compliance", "Relational Schemas", "Indexing", "Complex Joins"],
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "Data",
    tier: "BaaS & Postgres",
    icon: <SiSupabase className="text-xl text-emerald-500" />,
    description:
      "Cloud Postgres database management, Row Level Security (RLS) policies, database webhooks, and secure user authentication flows.",
    tags: ["Row Level Security", "Realtime Postgres", "Auth Flows", "Storage"],
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "Frontend",
    tier: "Design Systems",
    icon: <SiTailwindcss className="text-xl text-cyan-400" />,
    description:
      "Utility-first styling systems, custom design tokens, responsive fluid layouts, and zero-runtime CSS bundle optimization.",
    tags: ["Design Tokens", "Dark Mode", "Fluid Breakpoints", "Micro-layouts"],
  },
  {
    id: "redux",
    name: "Redux Toolkit (RTK)",
    category: "Frontend",
    tier: "State Management",
    icon: <SiRedux className="text-xl text-purple-600" />,
    description:
      "Centralized immutable store architectures, asynchronous thunk lifecycles, and normalized slice caching for complex stateful applications.",
    tags: ["Global Store", "RTK Query", "Slice Reducers", "Normalized Cache"],
  },
  {
    id: "figma",
    name: "Figma",
    category: "Tools",
    tier: "UI/UX & Prototyping",
    icon: <SiFigma className="text-xl" />,
    description:
      "Translating product vision into pixel-precise UI designs, responsive component variants, design tokens, and interactive click-through prototypes.",
    tags: ["Component Variants", "Design Tokens", "Wireframing", "Prototypes"],
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "Tools",
    tier: "Version Control",
    icon: <SiGit className="text-xl text-orange-600" />,
    description:
      "Feature-branch workflows, pull request reviews, semantic commit discipline, merge conflict resolution, and automated CI/CD pipelines.",
    tags: ["Branch Workflows", "Pull Requests", "CI/CD Actions", "Git Flow"],
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Backend",
    tier: "Cloud Services",
    icon: <SiFirebase className="text-xl text-amber-500" />,
    description:
      "Firestore document collections, cloud storage media uploads, authentication security rules, and real-time client listeners.",
    tags: ["Firestore", "Cloud Storage", "Security Rules", "Realtime Listeners"],
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "Frontend",
    tier: "Language Engine",
    icon: <SiJavascript className="text-xl text-amber-400" />,
    description:
      "Deep understanding of the JavaScript event loop, asynchronous promises, memory management, closures, prototypal mechanics, and DOM APIs.",
    tags: ["Event Loop", "Async/Await", "ESNext", "Closures & Prototypes"],
  },
];

const CATEGORIES = [
  { label: "All", id: "All" },
  { label: "Mobile & Frontend", id: "Frontend" },
  { label: "Backend & APIs", id: "Backend" },
  { label: "Data & Realtime", id: "Data" },
  { label: "Tools & Design", id: "Tools" },
];

export default function ShowcaseStack() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredStack = STACK_DATA.filter((item) => {
    if (activeTab === "All") return true;
    if (activeTab === "Frontend") return item.category === "Frontend" || item.category === "Mobile";
    if (activeTab === "Backend") return item.category === "Backend";
    if (activeTab === "Data") return item.category === "Data" || item.category === "Realtime";
    if (activeTab === "Tools") return item.category === "Tools";
    return true;
  });

  return (
    <section id="stack" className="relative pt-20 pb-24 px-4 sm:px-8 md:px-12">
      {/* Background Watermark Text: "STACK" */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[16vw] md:text-[150px] lg:text-[190px] font-black watermark-text whitespace-nowrap">
        STACK
      </div>

      {/* Section Header: /STACK */}
      <div className="relative z-10 flex flex-wrap items-baseline justify-between gap-4 mb-8 sm:mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
            /STACK
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#666666] max-w-lg">
            Production toolset, cross-platform mobile frameworks, and scalable cloud architectures.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F4F5] border border-black/5 text-[#111111] text-xs font-medium shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>16 Production Technologies</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-black/5">
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`cursor-pointer transition-colors relative py-1 ${
                activeTab === cat.id
                  ? "text-[#111111] font-bold"
                  : "text-[#777777] font-normal hover:text-[#111111]"
              }`}
            >
              <span>{cat.label}</span>
              {activeTab === cat.id && (
                <motion.div
                  layoutId="activeStackTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#111111]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <span className="text-xs text-[#888888] font-mono">
          Showing {filteredStack.length} of {STACK_DATA.length}
        </span>
      </div>

      {/* Stack Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <AnimatePresence mode="popLayout">
          {filteredStack.map((tech, idx) => (
            <motion.div
              layout
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative rounded-2xl md:rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between ${
                tech.featured
                  ? "bg-[#FFFFFF] border-2 border-black/15 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-black/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)]"
                  : "bg-[#FFFFFF] border border-black/6 hover:border-black/25 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
              }`}
            >
              <div>
                {/* Header Row: Icon + Badges */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-11 h-11 rounded-xl bg-[#F6F6F7] border border-black/5 group-hover:bg-[#111111] group-hover:text-white flex items-center justify-center text-[#111111] transition-all duration-300 shadow-2xs">
                      {tech.icon}
                    </div>
                    {tech.secondaryIcon && (
                      <div className="w-7 h-7 rounded-lg bg-[#F6F6F7] border border-black/5 flex items-center justify-center -ml-3 z-10 bg-white shadow-2xs">
                        {tech.secondaryIcon}
                      </div>
                    )}
                  </div>

                  {tech.highlight ? (
                    <span className="px-2.5 py-1 rounded-full bg-[#111111] text-white text-[10px] font-semibold tracking-wide uppercase shadow-xs">
                      {tech.highlight}
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full bg-[#F4F4F5] text-[#555555] text-[10px] font-medium tracking-wide">
                      {tech.tier}
                    </span>
                  )}
                </div>

                {/* Tech Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#111111] group-hover:text-black transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>

              {/* Bottom Tag Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-4 mt-4 border-t border-black/5">
                {tech.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#F6F6F7] text-[#555555] border border-black/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
