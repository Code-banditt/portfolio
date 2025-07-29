"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import image1 from "/public/img/doggity.png"; // ✅ Assuming correct import
import image2 from "/public/img/roadlux.png";
const beginnerProjects = [
  {
    title: "WOOF",
    description:
      "Simple HTML/CSS project with a little bit of javascript, my first project in my web dev journey.",
    image: image1,
    live: "https://vercel.com/chanel-bandits-projects/dog-website/ERVDPCEiadU2nqpFdX4Lx9Xo8r9o",
    github: "https://github.com/Code-banditt/dog-website-.git",
    stacks: "HTML, Css, Js",
  },
  {
    title: "HTML Portfolio",
    description: "Static portfolio site built with HTML/CSS.",
    image: "/placeholder2.jpg",
    live: "#",
    github: "#",
    stacks: "HTML,Css,Js",
  },
];

const intermediateProjects = [
  {
    title: "Roadlux Rentals",
    description: "Car rental dashboard with Supabase and authentication.",
    image: image2,
    live: "https://vercel.com/chanel-bandits-projects/roadlux-rental/4DdNehJSjmsQkneE4N8JayBSwWCt",
    github: "https://github.com/Code-banditt/Roadlux.git",
    stacks: "React, Next.js, Tailwind, Supabase",
  },
  {
    title: "Food Finder",
    description: "React app with API search and filtering.",
    image: "/placeholder4.jpg",
    live: "#",
    github: "#",
    stacks: "HTML,Css,Js",
  },
];

const advancedProjects = [
  {
    title: "Wanderlust",
    description:
      "Fullstack travel planner with Next.js, MongoDB, and API integrations.",
    image: "/placeholder5.jpg",
    live: "#",
    github: "#",
    stacks: "React, Next.js, Tailwind, Supabase",
  },
  {
    title: "RoadLux",
    description: "Car rental dashboard with Supabase and authentication.",
    image: "/placeholder6.jpg",
    live: "#",
    github: "#",
    stacks: "HTML,Css,Js",
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
        className="text-2xl font-semibold mb-6"
      >
        {title}
      </motion.h3>

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 + delayOffset }}
            className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#2a2a2a] hover:scale-[1.02] transition"
          >
            <div className="aspect-video w-full bg-neutral-800">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 space-y-3">
              <div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
              <div>{project.stacks}</div>

              <div className="flex gap-3 pt-2">
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
    <section id={id} className="bg-[#111] text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
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
