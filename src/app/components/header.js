"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink, Events } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

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
    Events.scrollEvent.register("begin", (to) => setActiveSection(to));
    Events.scrollEvent.register("end", (to) => setActiveSection(to));
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const links = [
    { name: "About", to: "home" },
    { name: "Projects", to: "projects" },
    { name: "Certificates", to: "certificates" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-gray-800/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="text-xl font-bold cursor-pointer text-teal-400 hover:text-teal-300"
          onClick={handleLinkClick}
        >
          Nwodo Anthony
        </ScrollLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <li key={link.to}>
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                className={`cursor-pointer transition-colors hover:text-teal-400 ${
                  activeSection === link.to ? "text-teal-400 font-semibold" : ""
                }`}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-700 transition"
          onClick={handleToggle}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-gray-900/95 overflow-hidden"
      >
        <ul className="flex flex-col items-center gap-6 py-4 text-sm font-medium">
          {links.map((link) => (
            <li key={link.to}>
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                className={`cursor-pointer transition-colors hover:text-teal-400 ${
                  activeSection === link.to
                    ? "text-teal-400 font-semibold"
                    : "text-white"
                }`}
                onClick={handleLinkClick}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}
