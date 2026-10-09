"use client";

import Image from "next/image";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function ShowcaseProjectDetail({ project, onBack, onOpenContact }) {
  if (!project) return null;

  return (
    <div className="w-full min-h-screen px-4 sm:px-8 md:px-14 py-8 md:py-12 bg-[#FFFFFF] animate-in fade-in duration-300">
      {/* Top Navigation Bar inside Detail */}
      <div className="flex items-center justify-between pb-8 md:pb-12 border-b border-black/5">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-[#111111] bg-[#F4F4F5] hover:bg-black hover:text-white transition-all shadow-xs cursor-pointer group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Projects</span>
        </button>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F4F5] border border-black/5 text-[#111111] text-xs font-medium shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-tight text-[11px] sm:text-xs">
            Nwodo Anthony Ebube • Production Case Study
          </span>
        </div>
      </div>

      {/* Case Study Header Grid */}
      <div className="pt-8 md:pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Category Pills, Title, Description, and Action Buttons */}
        <div className="lg:col-span-8 space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            {(project.stacks || project.tags || []).map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1 rounded-full text-xs font-medium bg-[#F4F4F5] text-[#444444] border border-black/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Title + Real Project Label */}
          <div className="flex flex-wrap items-baseline gap-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
              {project.title.split("-")[0].trim()}
            </h1>
            <span className="text-base sm:text-lg font-normal text-[#888888] tracking-tight">
              /{project.category || "Full-Stack System"}
            </span>
          </div>

          {/* Project Summary */}
          <p className="text-base sm:text-lg text-[#666666] max-w-2xl leading-relaxed">
            {project.fullDescription || project.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
              >
                <span>Live Platform</span>
                <ArrowUpRight size={14} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-white border border-[#DDD] text-[#111111] hover:border-black hover:bg-[#F9F9F9] transition-all"
              >
                <FaGithub size={14} />
                <span>Source Code</span>
              </a>
            )}

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#F4F4F5] text-[#333333] hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              <span>Contact Anthony</span>
            </button>
          </div>
        </div>

        {/* Right Column: Case Study Metadata (Service, Timeline, Highlights) */}
        <div className="lg:col-span-4 lg:pl-10 space-y-6 border-t lg:border-t-0 lg:border-l border-black/5 pt-6 lg:pt-0">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#999999] font-medium mb-1">
              Service
            </p>
            <p className="text-base font-semibold text-[#111111]">
              {project.service || "Full Stack Web Engineering"}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-[#999999] font-medium mb-1">
              Development Timeline
            </p>
            <p className="text-base font-semibold text-[#111111]">
              {project.timeline || "4 Weeks"}
            </p>
          </div>

          {project.highlights && (
            <div>
              <p className="text-xs uppercase tracking-wider text-[#999999] font-medium mb-2.5">
                Key Engineering Highlights
              </p>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#555]">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Visual Showcase Gallery */}
      <div className="mt-14 space-y-10">
        {/* Main Mockup Hero Card */}
        <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#F8F8F8] border border-black/5 shadow-sm p-3 sm:p-6 md:p-8">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-inner border border-black/5">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* Narrative / Design System Breakdown */}
        <div className="max-w-3xl mx-auto space-y-6 text-center py-6">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
            Engineering & System Architecture
          </h3>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
            {project.narrative ||
              `${project.title} was built with a strong focus on high-performance rendering, zero unnecessary layout shifts, responsive component scalability, and robust state synchronization across all client viewports.`}
          </p>
        </div>

        {/* Back CTA Button */}
        <div className="text-center pt-6 pb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Back to All Projects</span>
          </button>
        </div>
      </div>
    </div>
  );
}
