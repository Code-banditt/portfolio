"use client";

import { useState, useEffect } from "react";
import {
  Link as ScrollLink,
  Events,
  animateScroll as scroll,
} from "react-scroll";
import {
  Menu,
  X,
  Home,
  FolderKanban,
  Award,
  Mail,
  FileUser,
  Briefcase,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  // Track scroll to add shadow to navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for scroll events to highlight active section
  useEffect(() => {
    const handleSetActive = (to) => setActiveSection(to);

    Events.scrollEvent.register("begin", handleSetActive);
    Events.scrollEvent.register("end", handleSetActive);

    // Also track sections via Intersection Observer
    const sections = [
      "home",
      "skills",
      "projects",
      "experience",
      "certificates",
      "contact",
    ];
    const observers = sections.map((section) => {
      const element = document.getElementById(section);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section);
          }
        },
        { threshold: 0.5, rootMargin: "-50% 0px -50% 0px" }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      observers.forEach((obs) => obs && obs.disconnect());
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500 });
    setActiveSection("home");
  };

  const links = [
    { name: "Home", to: "home", icon: <Home size={18} /> },
    { name: "Skills", to: "skills", icon: <FileUser size={18} /> },
    { name: "Projects", to: "projects", icon: <FolderKanban size={18} /> },
    { name: "Experience", to: "experience", icon: <Briefcase size={18} /> },
    { name: "Certificates", to: "certificates", icon: <Award size={18} /> },
    { name: "Contact", to: "contact", icon: <Mail size={18} /> },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/Code-banditt",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/anthony-nwodo-8a36a71b4",
      label: "LinkedIn",
    },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-black/30"
          : "bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={scrollToTop}
          >
            <div className="relative">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">NA</span>
              </div>
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 blur opacity-30" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                Nwodo Anthony
              </span>
              <p className="text-xs text-gray-400">Full Stack Developer</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Navigation Links */}
            <ul className="flex items-center gap-1 bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-white/10">
              {links.map((link) => (
                <motion.li
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setHoveredLink(link.to)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-all ${
                      activeSection === link.to
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {activeSection === link.to && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-400/30 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {link.icon}
                      {link.name}
                    </span>
                  </ScrollLink>
                </motion.li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-teal-400 hover:border-teal-400/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all"
            onClick={handleToggle}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gradient-to-b from-gray-900 to-gray-950 border-t border-white/10"
          >
            <div className="px-4 py-6">
              {/* Navigation Links */}
              <ul className="space-y-2 mb-6">
                {links.map((link, index) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={handleLinkClick}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium cursor-pointer transition-all ${
                        activeSection === link.to
                          ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 border border-teal-400/30"
                          : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span
                        className={`${
                          activeSection === link.to
                            ? "text-teal-400"
                            : "text-gray-400"
                        }`}
                      >
                        {link.icon}
                      </span>
                      {link.name}
                      {activeSection === link.to && (
                        <div className="ml-auto w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                      )}
                    </ScrollLink>
                  </motion.li>
                ))}
              </ul>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6" />

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-teal-400 hover:border-teal-400/30 transition-all"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-6"
              >
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={handleLinkClick}
                  className="block w-full text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all"
                >
                  Get In Touch
                </ScrollLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Section Indicator - Desktop */}
      <motion.div
        className="hidden md:block absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"
        animate={{
          width: scrolled ? "100%" : "0%",
          opacity: scrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.nav>
  );
}
