"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const certificates = [
  {
    title: "Modern React, Next.js and Redux",
    platform: "Udemy",
    date: "Jan 2025",
    image: "/img/react.jpg", // use public folder path
  },
  {
    title: "Node.js: The Complete Guide",
    platform: "Udemy",
    date: "June 2025",
    image: "/img/nodejs.jpg",
  },
  {
    title: "Mastering JavaScript",
    platform: "Udemy",
    date: "April 2024",
    image: "/certs/js.png",
  },
  {
    title: "HTML/CSS",
    platform: "Udemy",
    date: "Jan 2024",
    image: "/img/html.jpg",
  },
];

export default function CertificatesSection({ id }) {
  return (
    <section
      id={id}
      className={`bg-[#111] text-white py-20 px-6 md:px-20 ${spaceGrotesk.className}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center text-teal-400"
      >
        🎓 Certificates
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, x: -50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 120 }}
            className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#333] hover:border-teal-400 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] transition transform hover:scale-105"
          >
            <div className="relative w-full h-64">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold text-teal-400">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400">{cert.platform}</p>
              <p className="text-xs text-gray-500">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
