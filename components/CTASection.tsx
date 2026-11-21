"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";

export default function PremiumCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Purple glow background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-30 blur-[100px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #7468fc 0%, #110fdf 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6"
        >
          Need Immediate Assistance?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Let&apos;s Build Something
          <br />
          Great Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed"
        >
          Get in touch with Zentrok Pvt. Ltd. specialists. We&apos;ll keep you on
          track with everything from digital transformation to cybersecurity,
          custom development, and enterprise digital growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium text-sm hover:bg-white/90 transition-colors group"
          >
            Get Started
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/[0.15] text-white/80 hover:text-white hover:border-white/30 px-8 py-4 rounded-full font-medium text-sm transition-all"
          >
            Contact Us
            <Send size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
