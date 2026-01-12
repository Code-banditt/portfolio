"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Space_Grotesk } from "next/font/google";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaCode,
} from "react-icons/fa";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const projectsData = {
  Beginner: [
    {
      title: "WOOF",
      description:
        "A responsive dog adoption website with interactive features and animations.",
      image: "/img/doggity.png",
      live: "https://dog-website-plum.vercel.app",
      github: "#",
      stacks: ["HTML", "CSS", "JS"],
      difficulty: "★☆☆",
      features: ["Responsive Design", "Animations"],
    },
    {
      title: "Find Universities",
      description:
        "University search platform with real-time filtering and detailed institution profiles.",
      image: "/img/unis.png",
      live: "#",
      github: "#",
      stacks: ["Next.js", "CSS", "JS"],
      difficulty: "★☆☆",
      features: ["API Integration", "Search Filters"],
    },
  ],
  Intermediate: [
    {
      title: "Roadlux Rentals",
      description:
        "Car rental dashboard with real-time analytics and booking management system.",
      image: "/img/roadlux.png",
      live: "https://roadlux-rental.vercel.app",
      github: "https://github.com/Code-banditt/Roadlux",
      stacks: ["React", "Next.js", "Tailwind", "Supabase"],
      difficulty: "★★☆",
      features: ["Dashboard Analytics", "User Authentication"],
    },
    {
      title: "MY Portfolio",
      description:
        "Modern portfolio with interactive 3D elements and smooth animations.",
      image: "/img/portfolioimage.png",
      live: "https://portfolio-hazel-eight-sgqniazq22.vercel.app",
      github: "#",
      stacks: ["Next.js", "CSS", "JS"],
      difficulty: "★★☆",
      features: ["3D Effects", "Smooth Scroll"],
    },
  ],
  Advanced: [
    {
      title: "Wanderlust",
      description:
        "Full-stack travel planning platform with AI-powered itinerary suggestions.",
      image: "/img/wanderlst.png",
      live: "https://wanderlust-gray-phi.vercel.app",
      github: "https://github.com/Code-banditt/wanderlust",
      stacks: ["React", "Next.js", "Tailwind", "Node.js"],
      difficulty: "★★★",
      features: ["Multiple API Integrations", "Travel Maps"],
    },
    {
      title: "Planora",
      description:
        "Real-time appointment scheduling with video conferencing capabilities.",
      image: "/img/planora2.png",
      live: "https://planora-inky.vercel.app",
      github: "https://github.com/Code-banditt/Planora",
      stacks: ["Next.js", "Socket.io", "Typescript", "Node.js"],
      difficulty: "★★★",
      features: ["Calendar Sync", "Notifications"],
    },
    {
      title: "Biteblitz",
      description:
        "Full-stack food delivery platform with live order tracking.",
      image: "/img/biteblitz.png",
      live: "https://biteblitz.vercel.app",
      github: "https://github.com/Code-banditt/biteblitz",
      stacks: ["Next.js", "Typescript", "Node.js"],
      difficulty: "★★★",
      features: ["Cart System", "Order History"],
    },
  ],
};

// Individual Project Card Component
// Enhanced Project Card - Fixed Click Issue
const ProjectCard = ({ project }) => (
  <motion.div
    className="flex-shrink-0 w-full sm:w-[300px] md:w-[320px] lg:w-[340px] xl:w-[360px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a0a0a]/90 to-[#111111]/90 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_60px_rgba(0,255,255,0.15)] hover:shadow-[0_0_80px_rgba(0,255,255,0.3)] cursor-pointer transition-all duration-500 hover:-translate-y-2 relative flex flex-col"
    whileHover={{ scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    {/* Background Glow - Behind everything now */}
    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

    {/* Difficulty Badge */}
    <div className="absolute -top-3 -right-3 z-10 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold px-4 py-1 rounded-full text-sm shadow-lg">
      {project.difficulty}
    </div>

    {/* Image */}
    <div className="relative w-full aspect-[16/9] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
      />
      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
        <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
          {project.title}
        </h3>
      </div>
    </div>

    {/* Card content */}
    <div className="p-4 sm:p-6 flex flex-col flex-grow">
      {/* Description */}
      <p
        className={`text-gray-300 text-sm leading-relaxed mb-3 ${spaceGrotesk.className}`}
      >
        {project.description}
      </p>

      {/* Features */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <FaStar className="text-amber-400 text-sm" />
          <span className="text-xs font-semibold text-gray-400">
            KEY FEATURES
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.features.map((feature, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:bg-white/10 transition-colors"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Tech stack */}
      <div className="mb-3 mt-auto">
        <div className="flex items-center gap-2 mb-2">
          <FaCode className="text-teal-400 text-sm" />
          <span className="text-xs font-semibold text-gray-400">
            TECH STACK
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stacks.map((stack, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-teal-400/20 to-cyan-400/20 text-teal-300 rounded-full backdrop-blur-sm border border-teal-500/30 hover:border-teal-400/50 transition-all"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2 mt-4">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-20 flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-orange-500 to-amber-500 text-black rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,140,0,0.4)]"
        >
          <FaExternalLinkAlt />
          Live Demo
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-20 flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-gray-300 hover:text-white rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          <FaGithub />
          Code
        </a>
      </div>
    </div>
  </motion.div>
);

// Enhanced Carousel with Pagination
const Carousel = ({ projects }) => {
  const [x, setX] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(2);

  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCards(1);
      else if (w < 1024) setVisibleCards(2);
      else if (w < 1280) setVisibleCards(3);
      else setVisibleCards(4);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const cardWidth = containerRef.current
    ? containerRef.current.offsetWidth / visibleCards - 20
    : 380;

  const maxX = -(
    projects.length * (cardWidth + 20) -
    visibleCards * (cardWidth + 20)
  );

  const prev = () => {
    const newX = Math.min(x + (cardWidth + 20) * visibleCards, 0);
    setX(newX);
    setCurrentSlide(Math.max(0, currentSlide - visibleCards));
  };

  const next = () => {
    const newX = Math.max(x - (cardWidth + 20) * visibleCards, maxX);
    setX(newX);
    setCurrentSlide(
      Math.min(projects.length - visibleCards, currentSlide + visibleCards)
    );
  };

  const goToSlide = (index) => {
    const newX = -(index * (cardWidth + 20));
    setX(newX);
    setCurrentSlide(index);
  };

  return (
    <div className="relative px-8 sm:px-12">
      {/* Navigation Arrows */}
      <motion.button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-lg border border-teal-500/30 text-teal-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={currentSlide === 0}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowLeft className="text-xl" />
      </motion.button>

      {/* Cards Container */}
      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          className="flex gap-5"
          animate={{ x }}
          transition={{ type: "spring", damping: 20 }}
        >
          {projects.map((project) => (
            <div style={{ minWidth: cardWidth }} key={project.title}>
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-lg border border-teal-500/30 text-teal-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={currentSlide >= projects.length - visibleCards}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowRight className="text-xl" />
      </motion.button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: Math.ceil(projects.length / visibleCards) }).map(
          (_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i * visibleCards)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentSlide / visibleCards) === i
                  ? "w-8 bg-gradient-to-r from-teal-400 to-cyan-400"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          )
        )}
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-4 text-sm text-gray-400">
        <span className="text-teal-400 font-semibold">{currentSlide + 1}</span>
        <span className="mx-2">of</span>
        <span className="text-gray-300">{projects.length}</span>
      </div>
    </div>
  );
};

// Enhanced Section Component
const ProjectSection = ({ title, projects }) => (
  <motion.div
    className="mb-24"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center justify-between mb-8">
      <div>
        <h3
          className={`text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent ${spaceGrotesk.className}`}
        >
          {title}
          <span className="block w-32 h-1.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mt-3 shadow-[0_0_15px_rgba(0,255,255,0.5)]"></span>
        </h3>
        <p className="text-gray-400 text-sm">
          {projects.length} project{projects.length > 1 ? "s" : ""} showcasing{" "}
          {title.toLowerCase()} level skills
        </p>
      </div>
      <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-sm text-gray-300">Active</span>
      </div>
    </div>
    <Carousel projects={projects} />
  </motion.div>
);

// Main Projects Component
export default function Projects({ id }) {
  const [activeLevel, setActiveLevel] = useState("All");

  const allProjects = Object.values(projectsData).flat();

  return (
    <section
      id={id}
      className={`bg-gradient-to-b from-[#0a0a0a] to-[#111] text-white py-28 px-4 sm:px-6 ${spaceGrotesk.className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Filter */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-gradient-x">
              Featured Projects
            </span>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.5)]"></span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            A curated collection of my work, from beginner experiments to
            complex full-stack applications
          </p>

          {/* Level Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", ...Object.keys(projectsData)].map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeLevel === level
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-black shadow-[0_0_25px_rgba(0,255,255,0.4)]"
                    : "bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:border-white/30 hover:text-white"
                }`}
              >
                {level}
                {level !== "All" && (
                  <span className="ml-2 text-xs opacity-70">
                    ({projectsData[level]?.length || 0})
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Display */}
        <div className="min-h-[600px]">
          {activeLevel === "All" ? (
            Object.entries(projectsData).map(([level, projects]) => (
              <ProjectSection key={level} title={level} projects={projects} />
            ))
          ) : (
            <ProjectSection
              title={activeLevel}
              projects={projectsData[activeLevel]}
            />
          )}
        </div>

        {/* Stats Footer */}
        <motion.div
          className="mt-20 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-teal-400 mb-2">
                {allProjects.length}
              </div>
              <div className="text-gray-400 text-sm">Total Projects</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {Object.keys(projectsData).length}
              </div>
              <div className="text-gray-400 text-sm">Skill Levels</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-amber-400 mb-2">12+</div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                100%
              </div>
              <div className="text-gray-400 text-sm">Responsive</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
