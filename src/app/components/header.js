"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowUpRight,
  Terminal,
  Circle,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("dark");
  const [time, setTime] = useState("");

  // Live real-time clock in West Africa Time (UTC+1)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Africa/Lagos",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Sync theme with document class & localStorage
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("nordic-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("nordic-theme", "light");
    }
  };

  // Scroll detection for border emphasis
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section tracking
  useEffect(() => {
    const sections = [
      "home",
      "projects",
      "skills",
      "experience",
      "certificates",
      "contact",
    ];

    const observers = sections.map((sec) => {
      const el = document.getElementById(sec);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sec);
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, []);

  const navLinks = [
    { num: "01", label: "Work", href: "#projects", id: "projects" },
    { num: "02", label: "Capabilities", href: "#skills", id: "skills" },
    { num: "03", label: "Chronology", href: "#experience", id: "experience" },
    { num: "04", label: "Credentials", href: "#certificates", id: "certificates" },
    { num: "05", label: "Inquiries", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8F7F4]/90 dark:bg-[#0C0D0E]/90 backdrop-blur-md border-b border-[#DDD9CE] dark:border-[#202225] py-3.5 shadow-[0_1px_8px_rgba(0,0,0,0.03)]"
          : "bg-[#F8F7F4]/60 dark:bg-[#0C0D0E]/60 backdrop-blur-sm border-b border-[#E8E5DC] dark:border-[#1A1C1E] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-3.5 text-inherit no-underline"
          >
            <div className="w-8 h-8 rounded-md bg-[#121314] text-[#F4F3EF] dark:bg-[#F4F3EF] dark:text-[#0C0D0E] font-mono text-xs font-semibold flex items-center justify-center transition-transform group-hover:scale-95 duration-200">
              NA
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-[#121314] dark:text-[#F4F3EF] leading-tight">
                Nwodo Anthony
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8E8D86] dark:text-[#6C6A64]">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Architectural Nav */}
          <nav className="hidden lg:flex items-center gap-1 border border-[#DDD9CE] dark:border-[#202225] rounded-full px-2 py-1 bg-[#FFFFFF]/70 dark:bg-[#131416]/70 backdrop-blur-md">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.num}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "text-[#121314] dark:text-[#F4F3EF] font-medium"
                      : "text-[#8E8D86] dark:text-[#6C6A64] hover:text-[#121314] dark:hover:text-[#F4F3EF]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-[#EDEAE3] dark:bg-[#202225] rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="text-[10px] opacity-60">{item.num}</span>
                  <span className="tracking-wide font-sans text-xs">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action & Utility Cluster */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Clock / Location Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DDD9CE] dark:border-[#202225] text-[11px] font-mono text-[#575855] dark:text-[#A09E96] bg-[#FFFFFF]/50 dark:bg-[#131416]/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>WAT</span>
              <span className="text-[#8E8D86] dark:text-[#6C6A64]">/</span>
              <span>{time || "15:45:00"}</span>
            </div>

            {/* Nordic Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Nordic Theme"
              className="p-2 rounded-full border border-[#DDD9CE] dark:border-[#202225] text-[#575855] dark:text-[#A09E96] hover:text-[#121314] dark:hover:text-[#F4F3EF] bg-[#FFFFFF]/50 dark:bg-[#131416]/50 transition-colors cursor-pointer"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Direct Contact Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium tracking-tight bg-[#121314] text-[#F4F3EF] dark:bg-[#F4F3EF] dark:text-[#0C0D0E] hover:bg-[#2C3E35] dark:hover:bg-[#E8E6DF] transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Nordic Theme"
              className="p-2 rounded-full border border-[#DDD9CE] dark:border-[#202225] text-[#575855] dark:text-[#A09E96]"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Mobile Menu"
              className="p-2 rounded-lg border border-[#DDD9CE] dark:border-[#202225] text-[#121314] dark:text-[#F4F3EF]"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Architectural Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="sm:hidden border-b border-[#DDD9CE] dark:border-[#202225] bg-[#F8F7F4] dark:bg-[#0C0D0E] overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#8E8D86] dark:text-[#6C6A64] pb-4 border-b border-[#DDD9CE] dark:border-[#202225]">
                <span>INDEX DIRECTORY</span>
                <span>WAT {time}</span>
              </div>
              <div className="flex flex-col space-y-3">
                {navLinks.map((item) => (
                  <a
                    key={item.num}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-base font-medium text-[#121314] dark:text-[#F4F3EF] hover:text-[#2C3E35] dark:hover:text-[#68B087]"
                  >
                    <span className="font-sans">{item.label}</span>
                    <span className="font-mono text-xs text-[#8E8D86] dark:text-[#6C6A64]">
                      {item.num}
                    </span>
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-[#DDD9CE] dark:border-[#202225] flex justify-between items-center">
                <div className="flex gap-4 text-[#8E8D86] dark:text-[#6C6A64]">
                  <a
                    href="https://github.com/Code-banditt"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#121314] dark:hover:text-[#F4F3EF]"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anthony-nwodo-8a36a71b4"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#121314] dark:hover:text-[#F4F3EF]"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#121314] dark:hover:text-[#F4F3EF]"
                  >
                    <FaTwitter size={18} />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 rounded-full text-xs font-medium bg-[#121314] text-[#F4F3EF] dark:bg-[#F4F3EF] dark:text-[#0C0D0E]"
                >
                  Direct Inquiry ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
