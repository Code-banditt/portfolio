"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiReactquery,
  SiSocketdotio,
  SiExpress,
  SiGit,
  SiFigma,
  SiRedux,
  SiFirebase,
  SiPostgresql,
  SiSupabase,
} from "react-icons/si";
import { Search, CheckCircle, Cpu, Layers } from "lucide-react";

const capabilitiesData = [
  {
    name: "Next.js",
    category: "Frontend",
    tier: "Core Architecture",
    icon: <SiNextdotjs />,
    description: "App Router, Server Components, Streaming SSR, Route Handlers, ISR & performance caching.",
  },
  {
    name: "React.js (19+)",
    category: "Frontend",
    tier: "Core Architecture",
    icon: <SiReact />,
    description: "Custom hooks, concurrency, performance memoization, context orchestration & compound components.",
  },
  {
    name: "TypeScript",
    category: "Core Language",
    tier: "Strict Typings",
    icon: <SiTypescript />,
    description: "Generics, conditional types, discriminated unions, end-to-end type safety between client and server.",
  },
  {
    name: "JavaScript (ES6+)",
    category: "Core Language",
    tier: "Foundational Mastery",
    icon: <SiJavascript />,
    description: "Asynchronous runtime, event loop, closures, prototypal mechanics & memory optimization.",
  },
  {
    name: "Node.js",
    category: "Backend",
    tier: "Production Grade",
    icon: <SiNodedotjs />,
    description: "Event-driven runtime, streams, worker threads, clustering, microservice API design & file I/O.",
  },
  {
    name: "Express.js",
    category: "Backend",
    tier: "Production Grade",
    icon: <SiExpress />,
    description: "RESTful endpoints, middleware chaining, JWT authentication, rate limiting & error handling.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    tier: "Design Systems",
    icon: <SiTailwindcss />,
    description: "Design tokens, arbitrary values, responsive fluid layouts, zero-runtime CSS bundle optimization.",
  },
  {
    name: "MongoDB",
    category: "Backend",
    tier: "Data Systems",
    icon: <SiMongodb />,
    description: "Mongoose modeling, aggregation pipelines, schema validation, indexing & replica sets.",
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    tier: "Data Systems",
    icon: <SiPostgresql />,
    description: "Relational schema design, ACID transactions, complex joins, indexing & query optimization.",
  },
  {
    name: "Supabase",
    category: "Backend",
    tier: "BaaS & Realtime",
    icon: <SiSupabase />,
    description: "Postgres database orchestration, Row-Level Security (RLS), real-time channels & authentication.",
  },
  {
    name: "Socket.io",
    category: "Backend",
    tier: "Real-Time Protocols",
    icon: <SiSocketdotio />,
    description: "Bidirectional WebSocket orchestration, room partitioning, event acknowledgments & reconnection buffers.",
  },
  {
    name: "React Query",
    category: "State & Data",
    tier: "Asynchronous State",
    icon: <SiReactquery />,
    description: "Automatic cache invalidation, optimistic mutations, background polling & deduping network calls.",
  },
  {
    name: "Redux Toolkit",
    category: "State & Data",
    tier: "Global State",
    icon: <SiRedux />,
    description: "Slices, immutable state updates via Immer, AsyncThunk orchestration & normalized stores.",
  },
  {
    name: "React Native",
    category: "Mobile",
    tier: "Cross-Platform",
    icon: <SiReact />,
    description: "Native component bridging, gesture handlers, mobile screen navigation & device storage.",
  },
  {
    name: "HTML5 & Semantic Web",
    category: "Frontend",
    tier: "Core Standards",
    icon: <SiHtml5 />,
    description: "Semantic document architecture, ARIA accessibility guidelines, SEO structured data & microdata.",
  },
  {
    name: "CSS3 & Modern Layouts",
    category: "Frontend",
    tier: "Core Standards",
    icon: <SiCss3 />,
    description: "CSS Grid, Flexbox, custom CSS properties, subgrid, container queries & performant transitions.",
  },
  {
    name: "Git & VCS",
    category: "Tooling & DevOps",
    tier: "Version Control",
    icon: <SiGit />,
    description: "Branching strategies, rebase workflows, interactive conflict resolution & release tags.",
  },
  {
    name: "Figma",
    category: "Tooling & DevOps",
    tier: "Design Systems",
    icon: <SiFigma />,
    description: "Wireframing, auto-layout inspections, design token translation & component variable specs.",
  },
];

const capabilityCategories = [
  "All",
  "Frontend",
  "Backend",
  "Core Language",
  "State & Data",
  "Tooling & DevOps",
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCapabilities = capabilitiesData.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tier.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="skills"
      className="relative py-24 md:py-36 border-b border-[#DDD9CE] dark:border-[#1E2023] bg-[#F8F7F4] dark:bg-[#0C0D0E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#DDD9CE] dark:border-[#1E2023]">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#8E8D86] dark:text-[#6C6A64]">
              // 02 — CAPABILITIES & TECHNICAL MATRIX
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#121314] dark:text-[#F4F3EF]">
              Architectural stack & domain expertise.
            </h2>
          </div>

          <p className="text-sm font-mono text-[#8E8D86] dark:text-[#6C6A64] max-w-xs">
            Chosen for maintainability, type safety, low latency, and deterministic production behavior.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 pb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {capabilityCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#121314] text-[#F4F3EF] dark:bg-[#F4F3EF] dark:text-[#0C0D0E] font-medium"
                    : "border border-[#DDD9CE] dark:border-[#202225] bg-[#FFFFFF]/60 dark:bg-[#131416]/60 text-[#575855] dark:text-[#A09E96] hover:border-[#121314] dark:hover:border-[#F4F3EF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search
              size={14}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8E8D86] dark:text-[#6C6A64]"
            />
            <input
              type="text"
              placeholder="Search stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-1.5 text-xs font-mono rounded-full border border-[#DDD9CE] dark:border-[#202225] bg-[#FFFFFF] dark:bg-[#131416] text-[#121314] dark:text-[#F4F3EF] placeholder-[#8E8D86] dark:placeholder-[#6C6A64] focus:outline-none focus:border-[#121314] dark:focus:border-[#F4F3EF] transition-colors"
            />
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCapabilities.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className="group p-5 rounded-2xl border border-[#DDD9CE] dark:border-[#202225] bg-[#FFFFFF] dark:bg-[#131416] hover:border-[#121314] dark:hover:border-[#404348] hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Icon + Name + Tier */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl border border-[#DDD9CE] dark:border-[#202225] bg-[#F8F7F4] dark:bg-[#191B1D] text-[#121314] dark:text-[#F4F3EF] flex items-center justify-center text-lg transition-transform group-hover:scale-105">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-medium tracking-tight text-[#121314] dark:text-[#F4F3EF]">
                        {item.name}
                      </h3>
                      <span className="font-mono text-[10px] text-[#8E8D86] dark:text-[#6C6A64]">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-[#E8E5DC] dark:border-[#202225] bg-[#F8F7F4] dark:bg-[#191B1D] text-[#2C3E35] dark:text-[#68B087] font-medium shrink-0">
                    {item.tier}
                  </span>
                </div>

                {/* Technical Descriptor */}
                <p className="text-xs text-[#575855] dark:text-[#A09E96] leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              {/* Bottom Architectural Hairline Indicator */}
              <div className="mt-4 pt-3 border-t border-[#F1EFEA] dark:border-[#191B1D] flex items-center justify-between text-[10px] font-mono text-[#8E8D86] dark:text-[#6C6A64]">
                <span>STATUS // VERIFIED</span>
                <span className="text-[#2C3E35] dark:text-[#68B087]">● ACTIVE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
