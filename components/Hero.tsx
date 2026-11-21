"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Send, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";

const rotatingWords = [
  { text: "IT Solutions", color: "#7468fc" },
  { text: "Consulting", color: "#7468fc" },
  { text: "Digital Growth", color: "#7468fc" },
];

const MotionLink = motion.create(Link);

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Purple gradient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #7468fc 0%, #110fdf 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl">
        {/* Eyebrow badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#7468fc] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-white/70 font-medium">
            Technology on Demand
          </span>
        </motion.div> */}

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          A one-stop solution for{" "}
          <br className="hidden sm:block" />
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="italic"
              style={{ color: rotatingWords[index].color }}
            >
              {rotatingWords[index].text}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        {/* Subtitle from Innometrics */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          Committed to excellence, we offer expert technical and operational
          solutions tailored for your enterprise. Delivering proactive
          troubleshooting, cybersecurity, custom software, and digital growth
          to keep your business secure, efficient, and always ahead.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MotionLink
            href="/contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 bg-[#110fdf] hover:bg-[#7468fc] text-white px-7 py-3.5 rounded-full font-medium text-sm transition-colors shadow-lg shadow-[#110fdf]/25"
          >
            Let&apos;s Talk <Send size={16} />
          </MotionLink>

          <MotionLink
            href="/contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 border border-white/[0.15] text-white/70 hover:text-white hover:border-white/30 px-7 py-3.5 rounded-full font-medium text-sm transition-all"
          >
            Contact Us <PhoneCall size={16} />
          </MotionLink>
        </motion.div>

        {/* Social Proof badge from Innometrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 inline-flex items-center gap-3 text-xs text-white/40 tracking-wide"
        >
          <span className="flex -space-x-2 overflow-hidden">
            <span className="inline-block h-6 w-6 rounded-full ring-2 ring-black bg-[#7468fc]/40" />
            <span className="inline-block h-6 w-6 rounded-full ring-2 ring-black bg-[#110fdf]/60" />
            <span className="inline-block h-6 w-6 rounded-full ring-2 ring-black bg-purple-400/40" />
          </span>
          <span>Trusted by 50K+ businesses and individuals worldwide</span>
        </motion.div>
      </div>
    </section>
  );
}
