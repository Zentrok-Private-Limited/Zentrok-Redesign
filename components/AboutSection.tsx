"use client";

import { motion, type Variants } from "framer-motion";
import { MessageSquareShare, FileSearch, CheckCircle2 } from "lucide-react";

// Innometrics: "How We Serve - In just 3 Simple Steps"
const steps = [
  {
    number: "01",
    title: "Reach Us",
    description:
      "We're here to help you. Connect with our dedicated advisory team via our contact channels or email.",
    icon: MessageSquareShare,
  },
  {
    number: "02",
    title: "Share Your Concern",
    description:
      "Bring in your business requirements or technical grievances for rapid assessment and strategic planning.",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Get Your Problem Resolved",
    description:
      "Swiftly resolve challenges and scale systems with proactive engineering, expert guidance, and ongoing support.",
    icon: CheckCircle2,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-black text-white">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#7468fc]/5 rounded-full blur-[140px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7468fc]" />
            <span className="text-sm uppercase tracking-widest text-white/40 font-medium">
              How We Serve
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7468fc]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-heading, 'Playfair Display', Georgia, serif)" }}
          >
            In Just 3 Simple Steps
          </motion.h2>
          <p className="mt-4 text-white/50 text-base max-w-xl mx-auto">
            From initial consultation to seamless delivery and optimization, our structured approach keeps your business moving forward.
          </p>
        </div>

        {/* Numbered Process Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative flex flex-col justify-between p-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-[#7468fc]/40 hover:bg-white/[0.05] overflow-hidden"
              >
                {/* Large Background Step Number in Purple (#7468fc) with low opacity */}
                <span
                  aria-hidden="true"
                  className="absolute -top-3 -right-2 text-8xl md:text-9xl font-black text-[#7468fc]/10 select-none pointer-events-none tracking-tighter leading-none transition-colors duration-300 group-hover:text-[#7468fc]/20 font-mono"
                >
                  {step.number}
                </span>

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Step Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-[#7468fc]/10 border border-[#7468fc]/20 flex items-center justify-center text-[#7468fc] mb-8 group-hover:bg-[#7468fc]/20 group-hover:border-[#7468fc]/40 group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Step Title in Bold White */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description in text-white/50 */}
                  <p className="text-white/50 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Subtle bottom accent line on hover */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#7468fc]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Subtle border between cards (right border on desktop, bottom border on mobile) */}
                {index < steps.length - 1 && (
                  <>
                    <div
                      aria-hidden="true"
                      className="hidden md:block absolute -right-3 lg:-right-4 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-white/[0.12] to-transparent pointer-events-none"
                    />
                    <div
                      aria-hidden="true"
                      className="block md:hidden absolute -bottom-3 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none"
                    />
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
