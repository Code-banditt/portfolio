"use client";

import { useState } from "react";
import { X, Send, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({ isOpen, onClose, authorName = "Anthony Ebube" }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Scope:\n${formData.message}`
    );
    window.open(`mailto:nwodotony02@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: "", email: "", message: "" });
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-black/10 z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F4F4F5] hover:bg-black hover:text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X size={16} />
          </button>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#111111]">Message Sent!</h3>
              <p className="text-sm text-[#666666] max-w-xs mx-auto">
                Thank you for reaching out. I'll get back to your inquiry promptly.
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-1 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] text-[11px] font-medium text-[#444] mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Direct Communication</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111]">
                  Let's create together
                </h3>
                <p className="text-xs sm:text-sm text-[#666666]">
                  Have a new product, redesign, or engineering challenge in mind?
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#333] mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F8F9] border border-black/10 focus:border-black focus:bg-white outline-none text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333] mb-1.5 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F8F9] border border-black/10 focus:border-black focus:bg-white outline-none text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333] mb-1.5 uppercase tracking-wider">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your timeline, vision, and scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F8F9] border border-black/10 focus:border-black focus:bg-white outline-none text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer mt-2"
                >
                  <Send size={14} />
                  <span>Send Message</span>
                </button>
              </form>

              <div className="mt-6 pt-5 border-t border-black/5 flex items-center justify-between text-[11px] text-[#777]">
                <div className="flex items-center gap-1.5">
                  <Mail size={12} />
                  <span>nwodotony02@gmail.com</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} />
                  <span>Available Worldwide</span>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
