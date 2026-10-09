"use client";

import { motion } from "framer-motion";
import {
  SiFramer,
  SiReactquery,
  SiReact,
  SiRedux,
  SiDaisyui,
  SiSupabase,
  SiVercel,
  SiSocketdotio,
} from "react-icons/si";
import { Compass, ShieldCheck, Zap, Sparkles, Feather } from "lucide-react";

const principles = [
  {
    num: "01",
    title: "Functional Essentialism",
    motto: "Form follows deterministic utility.",
    description:
      "Eliminating decorative fluff in favor of clarity, effortless accessibility, and intuitive information hierarchy. If a feature doesn't solve a user problem, it doesn't ship.",
  },
  {
    num: "02",
    title: "Perceptual & Real Speed",
    motto: "Latency is a feature.",
    description:
      "Designing with optimistic UI patterns, intelligent server-side caching, and streaming Next.js route chunks to ensure page transitions occur in under 100ms.",
  },
  {
    num: "03",
    title: "Architectural Resilience",
    motto: "Graceful degradation by default.",
    description:
      "Strict TypeScript typings, comprehensive schema validation with Zod, and clear fallback error boundaries ensure applications survive edge network drops and malformed payloads.",
  },
  {
    num: "04",
    title: "Tactile Micro-Interactions",
    motto: "Motion as subconscious feedback.",
    description:
      "Crafting physics-driven transitions with Framer Motion that provide immediate tactile acknowledgement to user actions without slowing down their workflow.",
  },
];

const specializedTools = [
  {
    name: "Framer Motion",
    role: "Physics-Based Animation",
    icon: <SiFramer />,
    note: "Fluid layout animations, spring physics, and zero-stutter page transitions.",
  },
  {
    name: "React Query",
    role: "Server State & Caching",
    icon: <SiReactquery />,
    note: "Intelligent background data synchronization, automatic refetching, and deduping.",
  },
  {
    name: "Supabase",
    role: "Database & Authentication",
    icon: <SiSupabase />,
    note: "Postgres infrastructure, real-time channels, and Row-Level Security policies.",
  },
  {
    name: "Socket.io",
    role: "Bidirectional WebSockets",
    icon: <SiSocketdotio />,
    note: "Low-latency event transmission for live appointment sync and messaging.",
  },
  {
    name: "Vercel Edge",
    role: "Global Distribution",
    icon: <SiVercel />,
    note: "Zero-configuration edge networks, preview branches, and serverless compute.",
  },
  {
    name: "Context & Redux",
    role: "Deterministic State",
    icon: <SiRedux />,
    note: "Normalized stores and lightweight scoped providers tailored to project scale.",
  },
];

export default function HonorableMentions() {
  return (
    <section className="relative py-24 md:py-36 border-b border-[#DDD9CE] dark:border-[#1E2023] bg-[#F8F7F4] dark:bg-[#0C0D0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#DDD9CE] dark:border-[#1E2023]">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#8E8D86] dark:text-[#6C6A64]">
              // 03 — PHILOSOPHY & SPECIALIZED TOOLING
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#121314] dark:text-[#F4F3EF]">
              Principles that govern every commit.
            </h2>
          </div>

          <p className="text-sm font-mono text-[#8E8D86] dark:text-[#6C6A64] max-w-xs">
            How Scandinavian minimalism directly translates into robust, clean software engineering.
          </p>
        </div>

        {/* 4 Pillars of Engineering */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 pb-16">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-[#DDD9CE] dark:border-[#202225] bg-[#FFFFFF] dark:bg-[#131416] space-y-4 hover:border-[#121314] dark:hover:border-[#404348] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#2C3E35] dark:text-[#68B087] font-semibold">
                  [{principle.num}]
                </span>
                <span className="font-mono text-[10px] text-[#8E8D86] dark:text-[#6C6A64]">
                  PILLAR
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-medium tracking-tight text-[#121314] dark:text-[#F4F3EF]">
                  {principle.title}
                </h3>
                <p className="text-xs font-mono text-[#8E8D86] dark:text-[#6C6A64]">
                  "{principle.motto}"
                </p>
              </div>

              <p className="text-xs text-[#575855] dark:text-[#A09E96] leading-relaxed pt-2">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Specialized Arsenal Section */}
        <div className="pt-10 border-t border-[#DDD9CE] dark:border-[#1E2023]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-medium tracking-tight text-[#121314] dark:text-[#F4F3EF]">
              Specialized Integration Arsenal
            </h3>
            <span className="text-xs font-mono text-[#8E8D86] dark:text-[#6C6A64]">
              COMPANION ECOSYSTEM
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializedTools.map((tool, i) => (
              <div
                key={tool.name}
                className="p-4 rounded-xl border border-[#E8E5DC] dark:border-[#202225] bg-[#FFFFFF]/70 dark:bg-[#131416]/70 flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg border border-[#DDD9CE] dark:border-[#202225] bg-[#F8F7F4] dark:bg-[#191B1D] text-[#121314] dark:text-[#F4F3EF] flex items-center justify-center text-sm shrink-0 mt-0.5">
                  {tool.icon}
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-medium text-[#121314] dark:text-[#F4F3EF]">
                      {tool.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#8E8D86] dark:text-[#6C6A64]">
                      {tool.role}
                    </span>
                  </div>
                  <p className="text-xs text-[#575855] dark:text-[#A09E96] leading-relaxed mt-1">
                    {tool.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
