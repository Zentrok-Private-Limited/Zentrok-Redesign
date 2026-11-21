"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, type LucideIcon } from "lucide-react";

interface PhilosophyItem {
  number: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

const philosophyValues: PhilosophyItem[] = [
  {
    number: "01",
    title: "Proactive Security & Continuity",
    desc: "From enterprise cybersecurity to robust disaster recovery, we safeguard your digital infrastructure so your business never misses a beat.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Round-the-Clock Reliability",
    desc: "Seamless 24/7 technical monitoring, proactive troubleshooting, and dedicated consultation — keeping operations smooth, resilient, and always connected.",
    icon: Clock,
  },
  {
    number: "03",
    title: "Customer-Centric Innovation",
    desc: "Tailored IT strategies and scalable software engineering engineered around your specific operational goals, maximizing productivity and ROI.",
    icon: Users,
  },
];

export default function MissionValues() {
  return (
    <section className="relative py-32 overflow-hidden bg-transparent">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full opacity-10 blur-[130px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #7468fc 0%, #110fdf 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-white/40 mb-3">
            Why Choose Us
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Technology on Demand
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mt-4 text-base md:text-lg leading-relaxed">
            Innovative Tech Solutions, IT Services, and Strategic Consulting —
            ensuring continuous operations, minimal downtime, and maximum
            efficiency for ambitious enterprises.
          </p>
        </motion.div>

        {/* 3 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophyValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.02 }}
                className="group relative flex flex-col justify-between border border-white/[0.08] rounded-2xl bg-white/[0.03] p-8 transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.05]"
              >
                <div>
                  {/* Subtle Icon & Decorative Number */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-white/[0.15] group-hover:bg-white/[0.08] transition-all duration-300">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <span className="font-mono text-xs tracking-widest text-white/30 font-medium select-none group-hover:text-white/50 transition-colors duration-300">
                      {value.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-white text-lg mb-2">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
