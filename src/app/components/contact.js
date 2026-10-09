"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Copy,
  Check,
  Send,
  Mail,
  ArrowUpRight,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactSection({ id }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    scope: "Full-Stack Project",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nwodotony02@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`Project Inquiry from ${form.name} [${form.scope}]`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nScope: ${form.scope}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:nwodotony02@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id={id}
      className="relative py-24 md:py-36 border-b border-[#DDD9CE] dark:border-[#1E2023] bg-[#F8F7F4] dark:bg-[#0C0D0E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#DDD9CE] dark:border-[#1E2023]">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#8E8D86] dark:text-[#6C6A64]">
              // 06 — INQUIRIES & ENGAGEMENT
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#121314] dark:text-[#F4F3EF]">
              Let’s engineer something exceptional.
            </h2>
          </div>

          <p className="text-sm font-mono text-[#8E8D86] dark:text-[#6C6A64] max-w-xs">
            Open for software engineering opportunities, product builds, and technical consultations.
          </p>
        </div>

        {/* 2-Column Split: Form & Contact Dossier */}
        <div className="grid lg:grid-cols-12 gap-12 pt-12 items-start">
          {/* Left Column: Dossier Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium tracking-tight text-[#121314] dark:text-[#F4F3EF]">
                Direct Communication Channels
              </h3>
              <p className="text-sm text-[#575855] dark:text-[#A09E96] leading-relaxed">
                Whether you have an upcoming project, a challenging architectural problem,
                or a senior engineering position to fill, feel free to reach out directly.
              </p>
            </div>

            {/* Quick Copy Email Card */}
            <div className="p-5 rounded-2xl border border-[#DDD9CE] dark:border-[#202225] bg-[#FFFFFF] dark:bg-[#131416] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#8E8D86] dark:text-[#6C6A64]">
                <span>PRIMARY INBOX</span>
                <span className="text-[#2C3E35] dark:text-[#68B087]">● CHECKED DAILY</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm sm:text-base font-mono font-medium text-[#121314] dark:text-[#F4F3EF] truncate">
                  nwodotony02@gmail.com
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg border border-[#DDD9CE] dark:border-[#202225] hover:border-[#121314] dark:hover:border-[#F4F3EF] text-xs font-mono flex items-center gap-1.5 text-[#121314] dark:text-[#F4F3EF] cursor-pointer transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Meta Information Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-[#E8E5DC] dark:border-[#202225] bg-[#FFFFFF]/70 dark:bg-[#131416]/70 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8E8D86] dark:text-[#6C6A64]">
                  <MapPin size={13} />
                  <span>LOCATION</span>
                </div>
                <p className="text-xs font-medium text-[#121314] dark:text-[#F4F3EF]">
                  Nigeria (UTC+1 / WAT)
                </p>
                <p className="text-[11px] text-[#8E8D86] dark:text-[#6C6A64]">
                  Remote Worldwide & Relocation
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#E8E5DC] dark:border-[#202225] bg-[#FFFFFF]/70 dark:bg-[#131416]/70 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8E8D86] dark:text-[#6C6A64]">
                  <Clock size={13} />
                  <span>RESPONSE TIME</span>
                </div>
                <p className="text-xs font-medium text-[#121314] dark:text-[#F4F3EF]">
                  Under 24 Hours
                </p>
                <p className="text-[11px] text-[#8E8D86] dark:text-[#6C6A64]">
                  Mon — Fri (Priority Delivery)
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-xs font-mono text-[#8E8D86] dark:text-[#6C6A64] mb-3">
                NETWORK & SOCIAL DIRECTORY
              </p>
              <div className="flex gap-2">
                {[
                  {
                    name: "GitHub",
                    href: "https://github.com/Code-banditt",
                    icon: <FaGithub />,
                  },
                  {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/in/anthony-nwodo-8a36a71b4",
                    icon: <FaLinkedin />,
                  },
                  {
                    name: "Twitter / X",
                    href: "https://twitter.com",
                    icon: <FaTwitter />,
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#DDD9CE] dark:border-[#202225] bg-[#FFFFFF] dark:bg-[#131416] text-xs font-mono text-[#575855] dark:text-[#A09E96] hover:text-[#121314] dark:hover:text-[#F4F3EF] hover:border-[#121314] dark:hover:border-[#F4F3EF] transition-colors"
                  >
                    <span>{s.icon}</span>
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl border border-[#DDD9CE] dark:border-[#202225] bg-[#FFFFFF] dark:bg-[#131416] shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#DDD9CE] dark:border-[#202225]">
                <h3 className="text-lg font-medium tracking-tight text-[#121314] dark:text-[#F4F3EF]">
                  Transmit a Brief
                </h3>
                <span className="text-xs font-mono text-[#8E8D86] dark:text-[#6C6A64]">
                  ENCRYPTED VIA MAILTO
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#8E8D86] dark:text-[#6C6A64]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Linus Torvalds"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD9CE] dark:border-[#202225] bg-[#F8F7F4] dark:bg-[#191B1D] text-sm text-[#121314] dark:text-[#F4F3EF] focus:outline-none focus:border-[#121314] dark:focus:border-[#F4F3EF] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#8E8D86] dark:text-[#6C6A64]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. linus@kernel.org"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD9CE] dark:border-[#202225] bg-[#F8F7F4] dark:bg-[#191B1D] text-sm text-[#121314] dark:text-[#F4F3EF] focus:outline-none focus:border-[#121314] dark:focus:border-[#F4F3EF] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8E8D86] dark:text-[#6C6A64]">
                    Scope of Engagement
                  </label>
                  <select
                    value={form.scope}
                    onChange={(e) => setForm({ ...form, scope: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#DDD9CE] dark:border-[#202225] bg-[#F8F7F4] dark:bg-[#191B1D] text-sm text-[#121314] dark:text-[#F4F3EF] focus:outline-none focus:border-[#121314] dark:focus:border-[#F4F3EF] transition-colors"
                  >
                    <option value="Full-Stack Web Application">
                      Full-Stack Web Application (Next.js / React / Node)
                    </option>
                    <option value="Senior Engineering Role">
                      Senior / Lead Software Engineering Role
                    </option>
                    <option value="Real-Time Systems & API Architecture">
                      Real-Time Systems & API Architecture (Socket.io)
                    </option>
                    <option value="Technical Consultation or Audit">
                      Technical Consultation or Performance Audit
                    </option>
                    <option value="Other Inquiries">Other Inquiries</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8E8D86] dark:text-[#6C6A64]">
                    Message / Project Parameters
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your vision, timeline, or engineering goals..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#DDD9CE] dark:border-[#202225] bg-[#F8F7F4] dark:bg-[#191B1D] text-sm text-[#121314] dark:text-[#F4F3EF] focus:outline-none focus:border-[#121314] dark:focus:border-[#F4F3EF] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#121314] text-[#F4F3EF] dark:bg-[#F4F3EF] dark:text-[#0C0D0E] font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#2C3E35] dark:hover:bg-[#E8E6DF] transition-colors cursor-pointer"
                >
                  <span>Dispatch Message</span>
                  <ArrowUpRight size={15} />
                </button>

                {submitted && (
                  <p className="text-center text-xs font-mono text-emerald-600 dark:text-emerald-400 pt-2">
                    ✓ Opening your mail client with pre-filled dispatch...
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
