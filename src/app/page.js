"use client";

import { useState } from "react";
import Image from "next/image";
import ShowcaseHeader from "./components/ShowcaseHeader";
import ShowcaseHero from "./components/ShowcaseHero";
import ShowcaseProjects, { SHOWCASE_PROJECTS } from "./components/ShowcaseProjects";
import ShowcaseProjectDetail from "./components/ShowcaseProjectDetail";
import ShowcaseStack from "./components/ShowcaseStack";
import ShowcaseServices from "./components/ShowcaseServices";
import ShowcaseExperience from "./components/ShowcaseExperience";
import ShowcaseCertificates from "./components/ShowcaseCertificates";
import ShowcaseFooter from "./components/ShowcaseFooter";
import ContactModal from "./components/ContactModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="relative min-h-screen w-full bg-[#CDCFD2] py-0 md:py-8 lg:py-12 px-0 md:px-6 lg:px-12 flex justify-center items-start selection:bg-black selection:text-white">
      {/* 1. Atmospheric Ethereal Cloudy Backdrop (Matches Potty.mp4 outer canvas) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/showcase/cloud_bg.jpg"
          alt="Atmospheric Clouds Background"
          fill
          priority
          className="object-cover object-center opacity-90 filter contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#C8CACD]/40 via-transparent to-[#BCBEC2]/50" />
      </div>

      {/* 2. Elevated Portfolio Canvas Card (Matches Potty.mp4 central white card) */}
      <div className="relative z-10 w-full max-w-[1260px] min-h-[96vh] rounded-none md:rounded-[36px] bg-[#FFFFFF] shadow-[0_20px_80px_rgba(0,0,0,0.15)] border border-black/5 transition-all duration-500">
        {selectedProject ? (
          /* CASE STUDY / DETAIL VIEW (Frames 16s - 18s) */
          <ShowcaseProjectDetail
            project={selectedProject}
            onBack={() => {
              setSelectedProject(null);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onOpenContact={() => setIsContactOpen(true)}
          />
        ) : (
          /* MAIN REDESIGNED PORTFOLIO FLOW (Frames 00s - 15s) */
          <>
            {/* Header Navigation */}
            <ShowcaseHeader
              onOpenContact={() => setIsContactOpen(true)}
              projectCount={SHOWCASE_PROJECTS.length}
              stackCount={16}
              serviceCount={4}
              experienceYears="3y+"
              certificateCount={5}
            />

            {/* Hero Section */}
            <ShowcaseHero
              onOpenContact={() => setIsContactOpen(true)}
            />

            {/* /SELECTED WORK Section */}
            <ShowcaseProjects onSelectProject={setSelectedProject} />

            {/* /STACK Section */}
            <ShowcaseStack />

            {/* /SERVICE Section */}
            <ShowcaseServices />

            {/* /EXPERIENCE Section */}
            <ShowcaseExperience experienceYears="3+ Years of Experience" />

            {/* /CREDENTIALS Section */}
            <ShowcaseCertificates />

            {/* CTA & Footer Section */}
            <ShowcaseFooter
              onOpenContact={() => setIsContactOpen(true)}
            />
          </>
        )}
      </div>

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        authorName="Anthony Ebube"
      />
    </main>
  );
}
