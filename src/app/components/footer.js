// components/Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-10 border-t border-neutral-800 ">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-4 text-center">
        <h2 className="text-xl font-semibold">NWODO EBUBE ANTHONY</h2>
        <p className="text-sm text-neutral-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
        </div>

        <p className="text-xs text-neutral-600">
          Built with ❤️ using Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
