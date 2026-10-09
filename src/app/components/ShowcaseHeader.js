"use client";

import { ArrowUpRight } from "lucide-react";

export default function ShowcaseHeader({
  onOpenContact,
  projectCount = 7,
  stackCount = 16,
  serviceCount = 4,
  experienceYears = "3y+",
  certificateCount = 5,
}) {
  return (
    <header className="sticky top-0 z-40 w-full py-4 sm:py-5 px-4 sm:px-8 md:px-12 flex items-center justify-between gap-4 bg-white/85 backdrop-blur-md border-b border-black/5 md:rounded-t-[36px] transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
      {/* Left: Available Status Pill */}
      <div className="flex items-center gap-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F4F5] border border-black/5 text-[#111111] text-xs font-medium shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-tight text-[11px] sm:text-xs">
            Available for Senior Roles & Projects
          </span>
        </div>
      </div>

      {/* Center: Navigation Links with Counters */}
      <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-xs sm:text-sm font-medium text-[#222222]">
        <a
          href="#work"
          className="hover:text-black transition-colors flex items-center gap-1 group"
        >
          <span>Work</span>
          <span className="text-[#888888] text-[11px] group-hover:text-black font-mono">
            [{projectCount}]
          </span>
        </a>
        <a
          href="#stack"
          className="hover:text-black transition-colors flex items-center gap-1 group"
        >
          <span>Stack</span>
          <span className="text-[#888888] text-[11px] group-hover:text-black font-mono">
            [{stackCount}]
          </span>
        </a>
        <a
          href="#services"
          className="hover:text-black transition-colors flex items-center gap-1 group"
        >
          <span>Service</span>
          <span className="text-[#888888] text-[11px] group-hover:text-black font-mono">
            [{serviceCount}]
          </span>
        </a>
        <a
          href="#experience"
          className="hover:text-black transition-colors flex items-center gap-1 group"
        >
          <span>Experience</span>
          <span className="text-[#888888] text-[11px] group-hover:text-black font-mono">
            [{experienceYears}]
          </span>
        </a>
        <a
          href="#certificates"
          className="hover:text-black transition-colors flex items-center gap-1 group"
        >
          <span>Credentials</span>
          <span className="text-[#888888] text-[11px] group-hover:text-black font-mono">
            [{certificateCount}]
          </span>
        </a>
        <a
          href="#contact"
          className="hover:text-black transition-colors"
        >
          Contact
        </a>
      </nav>

      {/* Right: Let's Talk CTA */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenContact}
          className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
        >
          <span>Let's Talk</span>
          <ArrowUpRight size={13} strokeWidth={2.5} />
        </button>
      </div>
    </header>
  );
}
