"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nwodotony02@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      className={`bg-[#111] text-white py-12 border-t border-neutral-800 ${spaceGrotesk.className}`}
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-teal-400 tracking-wide"
        >
          NWODO EBUBE ANTHONY
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-neutral-400"
        >
          © {new Date().getFullYear()} All rights reserved.
        </motion.p>

        <div className="flex gap-6 text-2xl mt-2">
          {[
            { icon: <FaGithub />, link: "https://github.com/code-banditt" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/anthony-nwodo-8a36a71b4",
            },
            { icon: <FaTwitter />, link: "https://twitter.com/yourusername" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                color: "#14b8a6",
                textShadow: "0 0 10px #14b8a6",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}

          {/* Email icon with copy */}
          <div className="relative">
            <motion.div
              onClick={handleCopyEmail}
              whileHover={{
                scale: 1.2,
                color: "#14b8a6",
                textShadow: "0 0 10px #14b8a6",
                cursor: "pointer",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="transition-colors"
            >
              <a href="mailto:nwodotony02@gmail.com">
                <FaEnvelope />
              </a>
            </motion.div>

            {/* Tooltip */}
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: -20 }}
                exit={{ opacity: 0 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 bg-teal-400 text-black px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
              >
                Email copied!
              </motion.div>
            )}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xs text-neutral-500 mt-4"
        >
          Built with ❤️ using Next.js & Tailwind CSS
        </motion.p>
      </div>
    </footer>
  );
}
