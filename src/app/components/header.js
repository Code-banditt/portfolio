"use client";

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="text-xl font-bold cursor-pointer text-teal-400"
          onClick={handleLinkClick}
        >
          MyPortfolio
        </ScrollLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-teal-400"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-teal-400"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="certificates"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-teal-400"
            >
              Certificates
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-teal-400"
            >
              Contact
            </ScrollLink>
          </li>
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

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-gray-800 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-sm font-medium">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-teal-400"
              onClick={handleLinkClick}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-teal-400"
              onClick={handleLinkClick}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="certificates"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-teal-400"
              onClick={handleLinkClick}
            >
              Certificates
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-teal-400"
              onClick={handleLinkClick}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
