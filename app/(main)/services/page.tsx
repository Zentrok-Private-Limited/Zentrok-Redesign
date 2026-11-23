"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Monitor, Camera, ArrowUpRight } from "lucide-react";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const ideas = [
  {
    icon: Sparkles,
    title: "Creative Solutions",
    description:
      "Dynamic scrolling keywords, solution-based categories, and clean data structuring.",
  },
  {
    icon: Camera,
    title: "Luxury & Minimalism",
    description:
      "Minimalist restraint with luxury appeal. Clean, informative, and research-driven content.",
  },
];

const capabilities = [
  {
    icon: Monitor,
    title: "Website Design",
    description:
      "A clean, fashion-forward redesign inspired by Zara's global identity.",
  },
  {
    icon: Camera,
    title: "Product Photography",
    description:
      "From studio shots to lifestyle imagery, we craft visuals that tell your product's story.",
  },
  {
    icon: Sparkles,
    title: "Brand Identity",
    description:
      "Logos, color systems, and visual languages that make a lasting impression.",
  },
];

export default function Services() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#7468fc]/30 selection:text-white">
      <main>
        {/* ========================================================
            1. HERO SECTION - Optunex Dark Glassmorphic Aesthetic
        ======================================================== */}
        <section className="relative min-h-[45vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-12 overflow-hidden">
          {/* Ambient Purple Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] rounded-full opacity-25 blur-[130px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #7468fc 0%, #110fdf 45%, transparent 75%)",
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs uppercase tracking-[0.25em] text-white/50 mb-6 backdrop-blur-sm"
            >
              <span>Our Capabilities</span>
              <span className="w-1 h-1 rounded-full bg-[#7468fc]" />
              <span>Services</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight text-white font-serif"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our <span className="italic text-[#7468fc]">Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            >
              We deliver strategy, creativity, and data-driven marketing that
              propel your brand forward.
            </motion.p>
          </div>
        </section>

        {/* ========================================================
            2. SERVICES GRID
        ======================================================== */}
        <ServicesSection />

        {/* ========================================================
            3. IDEAS & INSPIRATION SECTION
        ======================================================== */}
        <section className="relative py-24 md:py-32 px-6 border-t border-white/[0.08]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 space-y-3"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-[#7468fc] font-semibold">
                Creative Direction
              </span>
              <h2
                className="text-3xl md:text-5xl font-bold tracking-tight text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ideas &amp; Inspiration
              </h2>
              <p className="max-w-2xl mx-auto text-sm md:text-base text-white/50 leading-relaxed">
                Transforming your brand vision into reality with structured
                design, creativity, and strategy.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {ideas.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    whileHover={{ y: -6 }}
                    className="group relative p-8 md:p-10 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-[#7468fc]/30 hover:bg-white/[0.04] transition-all duration-300 shadow-2xl overflow-hidden"
                  >
                    {/* Subtle purple gradient corner glow */}
                    <div
                      className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-0 group-hover:opacity-20 blur-[60px] transition-opacity duration-500 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle, #7468fc 0%, #110fdf 70%, transparent 80%)",
                      }}
                    />

                    <div className="w-14 h-14 rounded-2xl bg-[#7468fc]/10 border border-[#7468fc]/20 flex items-center justify-center text-[#7468fc] mb-6 group-hover:scale-105 group-hover:bg-[#7468fc]/20 transition-all duration-300">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            4. WHAT WE DO SECTION
        ======================================================== */}
        <section className="relative py-24 md:py-32 px-6 border-t border-white/[0.08] bg-white/[0.01]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 space-y-3"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-[#7468fc] font-semibold">
                Core Capabilities
              </span>
              <h2
                className="text-3xl md:text-5xl font-bold tracking-tight text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What We Do
              </h2>
              <p className="max-w-2xl mx-auto text-sm md:text-base text-white/50 leading-relaxed">
                A showcase of our website design, development, and product
                photography.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {capabilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    whileHover={{ y: -6 }}
                    className="group relative p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-[#7468fc]/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between shadow-2xl"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#7468fc]/10 border border-[#7468fc]/20 flex items-center justify-center text-[#7468fc] mb-6 group-hover:scale-105 group-hover:bg-[#7468fc]/20 transition-all duration-300">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-white/30">
                      <span>0{idx + 1}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7468fc]/40 group-hover:bg-[#7468fc] transition-colors" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            5. OUR WORK SECTION
        ======================================================== */}
        <section className="relative py-24 md:py-32 px-6 border-t border-white/[0.08]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 space-y-3"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-[#7468fc] font-semibold">
                Featured Portfolio
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold tracking-tight text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Work
              </h2>
            </motion.div>

            <div className="space-y-16 md:space-y-24">
              {/* Project 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
              >
                <div className="group relative rounded-2xl overflow-hidden border border-white/[0.1] bg-white/[0.02] shadow-2xl">
                  <Image
                    src="/project1.png"
                    alt="Physiotherapy clinic Website"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full border border-[#7468fc]/30 bg-[#7468fc]/10 text-xs font-medium text-[#7468fc]">
                    Healthcare Platform
                  </span>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Physiotherapy clinic Website
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm md:text-base">
                    Advika Physiotherapy Clinic presents a clean, compassionate,
                    and user-focused digital experience built to guide visitors
                    seamlessly through the clinic&apos;s services and values.
                    The homepage opens with a welcoming tagline, “Transforming
                    Health, Restoring Lives,” paired with a clear “Book
                    Appointment” call-to-action—reinforcing their patient-first
                    approach.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="https://www.advikaphysiotherapyclinic.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/[0.06] hover:bg-[#110fdf] border border-white/[0.1] hover:border-[#7468fc]/40 px-6 py-3 rounded-full transition-all duration-300 shadow-md group"
                    >
                      <span>Visit Site</span>
                      <ArrowUpRight
                        size={16}
                        className="text-[#7468fc] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
              >
                <div className="space-y-4 order-2 lg:order-1">
                  <span className="inline-block px-3 py-1 rounded-full border border-[#7468fc]/30 bg-[#7468fc]/10 text-xs font-medium text-[#7468fc]">
                    Spiritual &amp; Astrology
                  </span>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    AstroTaro Website
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm md:text-base">
                    Astro Taro blends the wisdom of astrology with the intuition
                    of tarot to offer personalized insights, spiritual guidance,
                    and clarity for life&apos;s journey. Explore accurate
                    readings, cosmic forecasts, and empowering tools to align
                    with your true path.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="https://divine-ssarthi.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/[0.06] hover:bg-[#110fdf] border border-white/[0.1] hover:border-[#7468fc]/40 px-6 py-3 rounded-full transition-all duration-300 shadow-md group"
                    >
                      <span>Visit Site</span>
                      <ArrowUpRight
                        size={16}
                        className="text-[#7468fc] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                      />
                    </Link>
                  </div>
                </div>

                <div className="group relative rounded-2xl overflow-hidden border border-white/[0.1] bg-white/[0.02] shadow-2xl order-1 lg:order-2">
                  <Image
                    src="/project2.jpg"
                    alt="AstroTaro Website"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. TESTIMONIALS SECTION
        ======================================================== */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
