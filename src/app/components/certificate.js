"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { SiUdemy, SiCoursera } from "react-icons/si";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const certificates = [
  {
    title: "Modern React, Next.js and Redux",
    platform: "Udemy",
    date: "Jan 2025",
    image: "/img/react.jpg",
    credentialId: "UC-12345678",
    skills: ["React", "Next.js", "Redux", "TypeScript"],
    duration: "84 hours",
    description:
      "Advanced React patterns, server-side rendering with Next.js, and state management with Redux Toolkit",
    link: "https://www.udemy.com/certificate/UC-2733ce97-18dd-4d12-a698-685a40c9e175/",
  },
  {
    title: "Node.js: The Complete Guide",
    platform: "Udemy",
    date: "June 2025",
    image: "/img/nodejs.jpg",
    credentialId: "UC-87654321",
    skills: ["Node.js", "Express", "MongoDB", "REST API"],
    duration: "42 hours",
    description:
      "Building scalable server-side applications, REST APIs, authentication, and database integration",
    link: "https://www.udemy.com/certificate/UC-4f514784-bc11-4187-91ce-1cff15bcab0d/",
  },
  {
    title: "Mastering JavaScript",
    platform: "Udemy",
    date: "April 2024",
    image: "/certs/js.png",
    credentialId: "UC-11223344",
    skills: ["JavaScript", "ES6+", "Async", "DOM"],
    duration: "64 hours",
    description:
      "Modern JavaScript features, asynchronous programming, and advanced concepts",
    link: "https://udemy.com/certificate/UC-11223344",
  },
  {
    title: "Advanced HTML/CSS & Responsive Design",
    platform: "Udemy",
    date: "Jan 2024",
    image: "/img/html.jpg",
    credentialId: "UC-55667788",
    skills: ["HTML5", "CSS3", "Flexbox", "Grid"],
    duration: "37 hours",
    description:
      "Modern HTML5 semantics, advanced CSS techniques, and responsive design principles",
    link: "https://www.udemy.com/certificate/UC-eb9453ef-a260-4280-a084-b78e275d9cd0/",
  },

  {
    title: "TypeScript Fundamentals",
    platform: "Udemy",
    date: "Feb 2024",
    image: "/img/typescript.jpg",
    credentialId: "UC-33445566",
    skills: ["TypeScript", "Type System", "Interfaces"],
    duration: "18 hours",
    description:
      "TypeScript basics, advanced types, and integration with React",
    link: "https://udemy.com/certificate/UC-33445566",
  },
];

const platforms = ["All", "Udemy", "Coursera", "Others"];

export default function CertificatesSection({ id }) {
  const [activePlatform, setActivePlatform] = useState("All");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const filteredCertificates =
    activePlatform === "All"
      ? certificates
      : certificates.filter((cert) => cert.platform === activePlatform);

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case "Udemy":
        return <SiUdemy className="text-purple-400" />;
      case "Coursera":
        return <SiCoursera className="text-blue-400" />;
      default:
        return <FaCertificate className="text-teal-400" />;
    }
  };

  return (
    <section
      id={id}
      className={`relative bg-gradient-to-b from-[#0b0b0b] to-[#121212] text-white py-16 md:py-24 px-4 sm:px-6 ${spaceGrotesk.className}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-400 text-sm font-medium mb-4">
            <FaCertificate />
            CERTIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Learning & Achievements
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Certifications that validate my skills and commitment to continuous
            learning
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-2"
        >
          {platforms.map((platform) => (
            <motion.button
              key={platform}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePlatform(platform)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activePlatform === platform
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25"
                  : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {getPlatformIcon(platform)}
              {platform}
            </motion.button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-teal-400/30 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCertificate(cert)}
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-teal-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Platform Badge */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                  {getPlatformIcon(cert.platform)}
                </div>

                {/* View More Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <FaEye className="text-white" />
                    <span className="text-sm font-medium">View Details</span>
                  </div>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-5">
                {/* Title and Platform */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-teal-300 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      {getPlatformIcon(cert.platform)}
                      <span>{cert.platform}</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {cert.duration}
                    </span>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-full bg-teal-500/10 border border-teal-400/20 text-teal-300 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 rounded-full bg-gray-700/50 text-gray-400 text-xs">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>{cert.date}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(cert.link, "_blank");
                    }}
                    className="flex items-center gap-1 text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <span className="text-xs">Verify</span>
                    <FaExternalLinkAlt size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400">
            Showing{" "}
            <span className="text-teal-400 font-semibold">
              {filteredCertificates.length}
            </span>{" "}
            of{" "}
            <span className="text-teal-400 font-semibold">
              {certificates.length}
            </span>{" "}
            certificates
          </p>
        </motion.div>
      </div>

      {/* Modal for Certificate Details */}
      {selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 p-6 border-b border-white/10 bg-[#1a1a1a]/80 backdrop-blur-sm flex justify-between items-center">
              <div className="flex items-center gap-3">
                {getPlatformIcon(selectedCertificate.platform)}
                <div>
                  <h3 className="text-xl font-bold">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {selectedCertificate.platform} • {selectedCertificate.date}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <FaEyeSlash className="text-gray-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Certificate Image */}
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Certificate Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">
                      Description
                    </h4>
                    <p className="text-gray-300">
                      {selectedCertificate.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">
                      Skills Acquired
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-400/20 text-teal-300 text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">
                        Duration
                      </h4>
                      <p className="text-gray-300">
                        {selectedCertificate.duration}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">
                        Credential ID
                      </h4>
                      <p className="text-gray-300 font-mono">
                        {selectedCertificate.credentialId}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedCertificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all"
                    >
                      <FaExternalLinkAlt />
                      Verify Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
