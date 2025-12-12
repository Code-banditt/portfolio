"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection({ id }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    // Send to API/email service here
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nwodotony02@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id={id} className="bg-[#111] text-white py-24 px-4 md:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 tracking-wide text-teal-400"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-gray-400 text-base"
        >
          Got a project, idea, or just want to say hi? Let’s connect.
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full bg-[#1a1a1a] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            whileFocus={{ scale: 1.02 }}
            required
          />
          <motion.input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full bg-[#1a1a1a] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            whileFocus={{ scale: 1.02 }}
            required
          />
          <motion.textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full bg-[#1a1a1a] border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition resize-none"
            whileFocus={{ scale: 1.02 }}
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-2xl transition"
          >
            <a href="mailto:nwodotony02@gmail.com">Send Email</a>
          </motion.button>
        </form>

        <div className="flex justify-center gap-8 mt-12 text-xl text-gray-400 relative">
          <a
            href="https://github.com/Code-banditt"
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/anthony-nwodo-8a36a71b4"
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-400 transition"
          >
            LinkedIn
          </a>

          {/* Email with copy tooltip */}
          <div className="relative">
            <p
              className="cursor-pointer hover:text-teal-400 transition"
              onClick={handleCopyEmail}
            >
              <a href="mailto:nwodotony02@gmail.com"> Email</a>
            </p>
            {copied && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: -20 }}
                exit={{ opacity: 0 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 bg-teal-400 text-black px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
              >
                Email copied!
              </motion.span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
