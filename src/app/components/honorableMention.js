"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const tools = [
  {
    name: "Framer Motion",
    description:
      "I use it to create smooth, professional animations and transitions — especially for hero sections, modals, and page transitions.",
  },
  {
    name: "React Query",
    description:
      "It helps me manage server state efficiently, with automatic caching, background refetching, and smooth UI updates.",
  },
  {
    name: "Context API",
    description:
      "I use it for lightweight state management between components when Redux would be overkill — like handling themes or user sessions.",
  },
  {
    name: "Redux Toolkit",
    description:
      "I rely on it for complex state logic, async thunks, and global data — especially in larger apps like my Wanderlust travel project.",
  },
  {
    name: "DaisyUI",
    description:
      "It provides pre-styled, Tailwind-compatible components that help me quickly design consistent UIs with minimal custom CSS.",
  },
  {
    name: "Supabase",
    description:
      "I use it as a backend service for authentication, real-time data, and database management — a great alternative to Firebase.",
  },

  {
    name: "Vercel",
    description:
      "I deploy my Next.js applications on Vercel from github for its seamless integration, automatic optimizations, and global CDN.",
  },

  {
    name: "socket.io",
    description:
      "I implement it for real-time, bidirectional communication in my website like Planora, and live notifications.",
  },
];

export default function TechJourney() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-[#111] text-white py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Other Skills
        </motion.h2>

        <div
          ref={ref}
          className="relative border-l-2 border-white/10 pl-8 space-y-16"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Glowing Fireball */}
              <div className="absolute -left-[19px] top-1 w-5 h-5 rounded-full bg-orange-500 shadow-[0_0_25px_8px_rgba(255,115,0,0.5)] animate-pulse" />

              {/* Connector Glow Ring */}
              <div className="absolute -left-[21px] top-1 w-6 h-6 rounded-full border-2 border-orange-400 blur-sm animate-ping" />

              {/* Text */}
              <div>
                <p className="text-xl font-semibold">{tool.name}</p>
                <p className="text-sm text-gray-400 italic">
                  {tool.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
