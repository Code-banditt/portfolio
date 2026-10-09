"use client";

import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function ShowcaseFooter({ onOpenContact }) {
  const authorName = "Anthony Ebube";

  return (
    <footer id="contact" className="relative pt-20 pb-16 px-4 sm:px-8 md:px-14 text-center">
      {/* 1. Status Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F4F5] border border-black/5 text-[#111111] text-xs font-medium mb-6 shadow-xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="tracking-tight text-[11px] sm:text-xs">
          Available for New Project & Engineering Roles
        </span>
      </div>

      {/* 2. Main Headline */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] max-w-2xl mx-auto uppercase">
        HAVE A PROJECT IN MIND?
      </h2>

      {/* 3. Subtitle description */}
      <p className="mt-4 text-xs sm:text-sm md:text-base text-[#666666] max-w-lg mx-auto leading-relaxed">
        Let's engineer something clear, high-performing, and impactful. Reach out to collaborate on modern web platforms, real-time systems, or product architecture.
      </p>

      {/* 4. Contact Me CTA Button */}
      <div className="mt-8 mb-16 sm:mb-20">
        <button
          onClick={onOpenContact}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_8px_25px_rgba(0,0,0,0.18)] cursor-pointer"
        >
          <span>Contact Me</span>
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* 5. Bottom Social Pills Bar (Matches frame 15s) */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-8 border-t border-black/5">
        {/* Author Avatar Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#111111] text-white text-xs font-semibold shadow-sm">
          <div className="relative w-5 h-5 rounded-full overflow-hidden bg-white/20">
            <Image
              src="/showcase/anthony_normal.png"
              alt={authorName}
              fill
              className="object-cover object-top"
            />
          </div>
          <span>{authorName}</span>
        </div>

        {/* Social Link Pills */}
        {[
          {
            name: "GitHub",
            icon: FaGithub,
            href: "https://github.com/Code-banditt",
          },
          {
            name: "LinkedIn",
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/anthony-nwodo-8a36a71b4",
          },
          {
            name: "Email Me",
            icon: Mail,
            href: "mailto:nwodotony02@gmail.com",
          },
          {
            name: "Twitter / X",
            icon: FaXTwitter,
            href: "https://twitter.com",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-[#222222] bg-white border border-[#E5E5E5] hover:border-black hover:bg-[#F9F9F9] transition-all shadow-xs"
            >
              <Icon size={13} className="text-[#666666]" />
              <span>{item.name}</span>
            </a>
          );
        })}
      </div>
    </footer>
  );
}
