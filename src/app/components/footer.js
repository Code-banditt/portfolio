"use client";

import { useState } from "react";
import { ArrowUp, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nwodotony02@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 bg-[#F8F7F4] dark:bg-[#0C0D0E] text-[#121314] dark:text-[#F4F3EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Colophon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#DDD9CE] dark:border-[#1E2023]">
          {/* Identity & Mission (Col 1-5) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded bg-[#121314] text-[#F4F3EF] dark:bg-[#F4F3EF] dark:text-[#0C0D0E] font-mono text-[10px] font-bold flex items-center justify-center">
                NA
              </span>
              <span className="text-sm font-semibold tracking-tight uppercase">
                Nwodo Ebube Anthony
              </span>
            </div>
            <p className="text-xs text-[#575855] dark:text-[#A09E96] max-w-sm leading-relaxed">
              Software engineer crafting resilient web platforms, real-time distributed
              architectures, and restrained Scandinavian digital experiences.
            </p>
          </div>

          {/* Navigation Directory (Col 6-8) */}
          <div className="md:col-span-3 space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#8E8D86] dark:text-[#6C6A64]">
              DIRECTORY
            </p>
            <ul className="space-y-1.5 text-xs font-mono">
              <li>
                <a
                  href="#projects"
                  className="text-[#575855] dark:text-[#A09E96] hover:text-[#121314] dark:hover:text-[#F4F3EF] transition-colors"
                >
                  01 // Selected Work
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-[#575855] dark:text-[#A09E96] hover:text-[#121314] dark:hover:text-[#F4F3EF] transition-colors"
                >
                  02 // Technical Matrix
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-[#575855] dark:text-[#A09E96] hover:text-[#121314] dark:hover:text-[#F4F3EF] transition-colors"
                >
                  03 // Chronology
                </a>
              </li>
              <li>
                <a
                  href="#certificates"
                  className="text-[#575855] dark:text-[#A09E96] hover:text-[#121314] dark:hover:text-[#F4F3EF] transition-colors"
                >
                  04 // Credentials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#575855] dark:text-[#A09E96] hover:text-[#121314] dark:hover:text-[#F4F3EF] transition-colors"
                >
                  05 // Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Colophon & Tech (Col 9-12) */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#8E8D86] dark:text-[#6C6A64]">
              COLOPHON SPECIFICATIONS
            </p>
            <p className="text-xs text-[#575855] dark:text-[#A09E96] leading-relaxed">
              Designed with Nordic architectural restraint. Built with Next.js 15+, React 19,
              Tailwind CSS, and Framer Motion. Typeset in Geist Sans & Geist Mono.
            </p>
            <div className="pt-1">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DDD9CE] dark:border-[#202225] text-xs font-mono text-[#575855] dark:text-[#A09E96] hover:text-[#121314] dark:hover:text-[#F4F3EF] cursor-pointer"
              >
                {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                <span>{copied ? "Email Copied" : "nwodotony02@gmail.com"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Socials & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8E8D86] dark:text-[#6C6A64]">
          <p>© {new Date().getFullYear()} Nwodo Anthony. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Code-banditt"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#121314] dark:hover:text-[#F4F3EF] transition-colors"
            >
              GitHub
            </a>
            <span>/</span>
            <a
              href="https://www.linkedin.com/in/anthony-nwodo-8a36a71b4"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#121314] dark:hover:text-[#F4F3EF] transition-colors"
            >
              LinkedIn
            </a>
            <span>/</span>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#121314] dark:hover:text-[#F4F3EF] transition-colors"
            >
              Twitter
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#121314] dark:hover:text-[#F4F3EF] transition-colors cursor-pointer"
          >
            <span>Back to Summit</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
