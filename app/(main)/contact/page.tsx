"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Info, X } from "lucide-react";

/* ------------------- TYPES ------------------- */
type NotificationType = "success" | "error" | "info";

interface NotificationItem {
  id: number;
  text: string;
  type: NotificationType;
}

interface NotificationProps extends NotificationItem {
  removeNotif: (id: number) => void;
}

interface NotificationsContainerProps {
  notifications: NotificationItem[];
  removeNotif: (id: number) => void;
}

/* ------------------- NOTIFICATION SYSTEM ------------------- */
const NOTIFICATION_TTL = 5000;

const Notification: React.FC<NotificationProps> = ({
  text,
  id,
  removeNotif,
  type,
}) => {
  const styles: Record<NotificationType, { bg: string; icon: React.ReactNode }> = {
    success: {
      bg: "bg-emerald-950/90 text-emerald-200 border-emerald-500/30",
      icon: <CheckCircle2 size={18} className="text-emerald-400" />,
    },
    error: {
      bg: "bg-rose-950/90 text-rose-200 border-rose-500/30",
      icon: <AlertCircle size={18} className="text-rose-400" />,
    },
    info: {
      bg: "bg-indigo-950/90 text-indigo-200 border-indigo-500/30",
      icon: <Info size={18} className="text-indigo-400" />,
    },
  };

  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);
    return () => clearTimeout(timeoutRef);
  }, [id, removeNotif]);

  return (
    <motion.div
      layout
      initial={{ y: 30, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: 20, opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`p-4 flex items-center rounded-2xl gap-3 text-sm font-medium shadow-2xl border backdrop-blur-md pointer-events-auto ${styles[type].bg}`}
    >
      <div className="shrink-0">{styles[type].icon}</div>
      <span className="flex-1 text-xs md:text-sm">{text}</span>
      <button
        onClick={() => removeNotif(id)}
        className="p-1 rounded-full hover:bg-white/10 transition cursor-pointer text-white/60 hover:text-white"
        aria-label="Dismiss notification"
      >
        <X size={15} />
      </button>
    </motion.div>
  );
};

const NotificationsContainer: React.FC<NotificationsContainerProps> = ({
  notifications,
  removeNotif,
}) => (
  <div className="flex flex-col gap-2 w-80 max-w-[calc(100vw-2rem)] fixed bottom-6 right-6 z-50 pointer-events-none">
    <AnimatePresence>
      {notifications.map((n) => (
        <Notification key={n.id} {...n} removeNotif={removeNotif} />
      ))}
    </AnimatePresence>
  </div>
);

export default function ContactPage() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addNotification = (text: string, type: NotificationType) => {
    setNotifications((pv) => [{ id: Date.now(), text, type }, ...pv]);
  };

  const removeNotif = (id: number) => {
    setNotifications((pv) => pv.filter((n) => n.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        form.reset();
        addNotification("Thank you! Your message has been sent.", "success");
      } else {
        const errorData = await response.json();
        addNotification(errorData.message || "Oops! Server error.", "error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      addNotification(
        "Oops! Something went wrong. Check your connection.",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#7468fc]/30 selection:text-white flex flex-col justify-between">
      {/* Notifications */}
      <NotificationsContainer
        notifications={notifications}
        removeNotif={removeNotif}
      />

      <main className="relative flex-1 pt-36 pb-24 px-6 overflow-hidden">
        {/* Ambient Purple Glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-20 blur-[130px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #7468fc 0%, #110fdf 45%, transparent 75%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs uppercase tracking-[0.25em] text-white/50 backdrop-blur-sm"
            >
              <span>Get In Touch</span>
              <span className="w-1 h-1 rounded-full bg-[#7468fc]" />
              <span>Connect</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-serif"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact <span className="italic text-[#7468fc]">Us</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-white/60 max-w-xl mx-auto leading-relaxed"
            >
              We&apos;d love to hear from you! Reach out using the form or details below to
              discuss your technology, software, or digital strategy goals.
            </motion.p>
          </div>

          {/* Form & Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Corner Ambient Glow */}
              <div
                className="absolute -top-24 -left-24 w-64 h-64 rounded-full opacity-15 blur-[80px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, #7468fc 0%, #110fdf 70%, transparent 80%)",
                }}
              />

              <div className="relative z-10">
                <h2
                  className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Send us a Message
                </h2>
                <p className="text-sm text-white/50 mb-8">
                  Fill out the parameters below and our team will respond promptly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      required
                      className="w-full rounded-2xl bg-white/[0.03] border border-white/[0.08] px-5 py-4 text-sm text-white placeholder-white/30 outline-none focus:border-[#7468fc] focus:ring-1 focus:ring-[#7468fc] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. john@enterprise.com"
                      required
                      className="w-full rounded-2xl bg-white/[0.03] border border-white/[0.08] px-5 py-4 text-sm text-white placeholder-white/30 outline-none focus:border-[#7468fc] focus:ring-1 focus:ring-[#7468fc] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 font-medium">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                      required
                      className="w-full rounded-2xl bg-white/[0.03] border border-white/[0.08] px-5 py-4 text-sm text-white placeholder-white/30 outline-none focus:border-[#7468fc] focus:ring-1 focus:ring-[#7468fc] transition-all resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#110fdf] hover:bg-[#7468fc] text-white font-medium px-8 py-4 text-sm transition-all duration-300 shadow-xl shadow-[#110fdf]/25 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <span>{isLoading ? "Sending..." : "Send Message"}</span>
                    <Send size={16} />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Right - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Info Card */}
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-8 md:p-10 shadow-2xl space-y-8">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#7468fc] font-semibold">
                    Direct Communications
                  </span>
                  <h3
                    className="text-2xl font-bold text-white mt-1 tracking-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Zentrok Pvt. Ltd.
                  </h3>
                  <p className="text-sm text-white/50 mt-2 leading-relaxed">
                    Connecting visionary businesses with next-generation digital
                    engineering, cybersecurity, and strategic marketing solutions.
                  </p>
                </div>

                <div className="space-y-6 pt-4 border-t border-white/[0.06]">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#7468fc]/10 border border-[#7468fc]/20 flex items-center justify-center text-[#7468fc] shrink-0 mt-0.5">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-1">
                        Email Support
                      </h4>
                      <a
                        href="mailto:info@zentrok.com"
                        className="text-base text-white/80 hover:text-[#7468fc] transition-colors font-medium"
                      >
                        info@zentrok.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#7468fc]/10 border border-[#7468fc]/20 flex items-center justify-center text-[#7468fc] shrink-0 mt-0.5">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-1">
                        Corporate Headquarters
                      </h4>
                      <p className="text-base text-white/80 font-medium">
                        Noida, Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Promise Card */}
              <div className="p-6 rounded-3xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-sm">
                <p className="text-xs text-white/40 leading-relaxed">
                  ⚡ <strong>Fast Response Commitment:</strong> Inquiries submitted through
                  our portal are typically reviewed and acknowledged within one business day.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
