"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const beginnerProjects = [
  {
    title: "WOOF",
    description:
      "Simple HTML/CSS project with a little bit of JavaScript, my first web dev project.",
    image: "/img/doggity.png", // ✅ reference public folder directly
    live: "https://dog-website-plum.vercel.app",
    github: "https://github.com/Code-banditt/dog-website-.git",
    stacks: ["HTML", "CSS", "JS"],
  },
  {
    title: "Find Universities",
    description: "Static research site built with React and API integrations.",
    image: "/img/unis.png",
    live: "https://worlds-universities.vercel.app/",
    github: "#",
    stacks: ["Next.js", "CSS", "JS"],
  },
];

const intermediateProjects = [
  {
    title: "Roadlux Rentals",
    description: "Car rental dashboard with Supabase and authentication.",
    image: "/img/roadlux.png",
    live: "https://roadlux-rental.vercel.app/",
    github: "https://github.com/Code-banditt/Roadlux.git",
    stacks: ["React", "Next.js", "Tailwind", "Supabase"],
  },
  {
    title: "MY Portfolio",
    description: "Static portfolio site built with NEXT.js.",
    image: "/img/portfolioimage.png",
    live: "https://portfolio-hazel-eight-sgqniazq22.vercel.app/",
    github: "#",
    stacks: ["Next.js", "CSS", "JS"],
  },
];

const advancedProjects = [
  {
    title: "Wanderlust",
    description:
      "Fullstack travel planner with Next.js, MongoDB, and API integrations.",
    image: "/img/wanderlst.png",
    live: "https://wanderlust-gray-phi.vercel.app/",
    github: "#",
    stacks: ["React", "Next.js", "Tailwind", "Node.js", "MongoDB"],
  },
  {
    title: "Planora",
    description:
      "Appointment booking app with real-time updates using Socket.io.",
    image: "/img/planora2.png",
    live: "https://planora-inky.vercel.app/",
    github: "#",
    stacks: [
      "Next.js",
      "Socket.io",
      "Tailwind",
      "TypeScript",
      "Node.js",
      "React",
      "Express",
      "MongoDB",
      "AntD",
      "Framer Motion",
    ],
  },
];

const SectionBlock = ({ title, projects, delayOffset = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="mb-20">
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-3xl sm:text-4xl font-bold mb-8 text-teal-400 ${spaceGrotesk.className}`}
      >
        {title}
      </motion.h3>

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30, x: -50 }}
            animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{
              delay: index * 0.1 + delayOffset,
              type: "spring",
              stiffness: 120,
            }}
            whileHover={{ scale: 1.03 }}
            className="bg-[#1a1a1a] rounded-3xl overflow-hidden border border-[#2a2a2a] shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.5)] transition"
          >
            {/* Project Image */}
            <div className="aspect-video w-full bg-neutral-800 relative">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-t-3xl"
              />
            </div>

            {/* Project Info */}
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold text-teal-400">
                {project.title}
              </h3>
              <p
                className={`text-gray-300 leading-relaxed ${spaceGrotesk.className}`}
              >
                {project.description}
              </p>

              {/* Stacks */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stacks.map((stack, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-medium bg-teal-400/20 text-teal-400 rounded-full backdrop-blur-sm"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-3">
                <Link
                  href={project.live}
                  target="_blank"
                  className="px-3 py-1 text-sm border border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-[#111] rounded-full transition"
                >
                  Live
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  className="px-3 py-1 text-sm border border-white/20 hover:border-white/60 text-gray-300 hover:text-white rounded-full transition"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function Projects({ id }) {
  return (
    <section
      id={id}
      className={`bg-[#111] text-white py-24 px-4 ${spaceGrotesk.className}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16 text-teal-400"
        >
          Projects
        </motion.h2>

        <SectionBlock
          title="Beginner Projects"
          projects={beginnerProjects}
          delayOffset={0}
        />
        <SectionBlock
          title="Intermediate Projects"
          projects={intermediateProjects}
          delayOffset={0.3}
        />
        <SectionBlock
          title="Advanced Projects"
          projects={advancedProjects}
          delayOffset={0.6}
        />
      </div>
    </section>
  );
}
