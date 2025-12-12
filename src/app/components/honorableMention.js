"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Space_Grotesk } from "next/font/google";

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

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const tools = [
  {
    name: "Framer Motion",
    description:
      "I create smooth, professional animations and transitions — especially for hero sections, modals, and page transitions.",
    icon: <SiFramer />,
    color: "text-pink-400",
  },
  {
    name: "React Query",
    description:
      "It helps me manage server state efficiently, with automatic caching, background refetching, and smooth UI updates.",
    icon: <SiReactquery />,
    color: "text-blue-400",
  },
  {
    name: "Context API",
    description:
      "I use it for lightweight state management between components when Redux would be overkill — like handling themes or user sessions.",
    icon: <SiReact />,
    color: "text-cyan-400",
  },
  {
    name: "Redux Toolkit",
    description:
      "I rely on it for complex state logic, async thunks, and global data — especially in larger apps like my Wanderlust travel project.",
    icon: <SiRedux />,
    color: "text-purple-400",
  },
  {
    name: "DaisyUI",
    description:
      "It provides pre-styled, Tailwind-compatible components that help me quickly design consistent UIs with minimal custom CSS.",
    icon: <SiDaisyui />,
    color: "text-teal-400",
  },
  {
    name: "Supabase",
    description:
      "I use it as a backend service for authentication, real-time data, and database management — a great alternative to Firebase.",
    icon: <SiSupabase />,
    color: "text-green-400",
  },
  {
    name: "Vercel",
    description:
      "I deploy my Next.js applications on Vercel from GitHub for its seamless integration, automatic optimizations, and global CDN.",
    icon: <SiVercel />,
    color: "text-white",
  },
  {
    name: "Socket.io",
    description:
      "I implement it for real-time, bidirectional communication in my website like Planora, and live notifications.",
    icon: <SiSocketdotio />,
    color: "text-orange-400",
  },
];

export default function TechJourney() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      className={`relative bg-[#111] text-white py-24 px-4 ${spaceGrotesk.className}`}
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16 tracking-tight text-teal-400"
        >
          Other Skills
        </motion.h2>

        {/* Timeline */}
        <div
          ref={ref}
          className="relative border-l-2 border-white/10 pl-10 space-y-16"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{ scale: 1.03 }}
              className="relative flex items-start gap-6 group"
            >
              {/* Icon Ball */}
              <div className="relative flex-shrink-0">
                <div
                  className={`w-6 h-6 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.3)] bg-gradient-to-tr from-orange-400 to-red-400 flex items-center justify-center ${tool.color}`}
                >
                  {tool.icon}
                </div>
                <div className="absolute w-8 h-8 -left-1 top-0 rounded-full border-2 border-teal-400/20 blur-md animate-ping" />
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="text-xl font-semibold text-teal-400 group-hover:text-teal-300 transition-all">
                  {tool.name}
                </p>
                <p className="text-gray-300 leading-relaxed mt-1">
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
