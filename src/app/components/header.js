"use client";

import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-700 text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="text-xl font-bold cursor-pointer"
        >
          MyPortfolio
        </ScrollLink>

        <ul className="flex gap-6 text-sm font-medium">
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
      </div>
    </nav>
  );
}
