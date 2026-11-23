"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Send,
  Eye,
  Target,
  Compass,
  Users,
  Lightbulb,
  Award,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Lock,
  Code2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Footer from "@/components/Footer";

const coreValues = [
  {
    icon: Users,
    title: "Customer-Centricity",
    description:
      "We place our customers at the core of everything we do. Our services and digital architectures are tailored to meet the specific needs of each client, ensuring maximum satisfaction and lasting value.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We are always looking for fresh and innovative approaches to challenges. By embracing the latest technological advancements, we aim to provide cutting-edge solutions that help our clients stay ahead in their industries.",
  },
  {
    icon: Award,
    title: "Professionalism",
    description:
      "Every interaction with our clients reflects our commitment to professionalism. From transparent communication to meticulous service delivery, we maintain the highest standards of quality and integrity.",
  },
  {
    icon: ShieldCheck,
    title: "Responsibility",
    description:
      "We take full responsibility for our services and their impact on our clients' operations. Our team is dedicated to providing reliable, accurate, and timely support to ensure that technology works seamlessly for our customers.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "We believe in constantly improving our skills, services, and processes. By fostering a culture of perpetual learning and growth, we stay updated with the latest technology trends and architectural advancements.",
  },
];

const achievements = [
  {
    metric: "150+",
    label: "Projects Delivered",
    detail: "Across custom web, software engineering & digital solutions",
  },
  {
    metric: "98%",
    label: "Client Satisfaction",
    detail: "Consistently rated top-tier for reliability and execution",
  },
  {
    metric: "24/7",
    label: "Operational Dedication",
    detail: "Continuous system monitoring, reliability and advisory",
  },
];

const innovationHighlights = [
  {
    icon: Cpu,
    title: "Modern Architectures",
    desc: "Scalable, cloud-native frameworks engineered for speed and longevity.",
  },
  {
    icon: Lock,
    title: "Security-First Mindset",
    desc: "Rigorous cybersecurity protocols protecting vital digital assets.",
  },
  {
    icon: Code2,
    title: "Full-Stack Agility",
    desc: "High-velocity development cycles translating business goals into reality.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#7468fc]/30 selection:text-white">
      {/* ========================================================
          1. HERO SECTION - Optunex Dark Glassmorphic Aesthetic
      ======================================================== */}
      <section className="relative min-h-[75vh] flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden">
        {/* Purple gradient ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] rounded-full opacity-25 blur-[130px] pointer-events-none"
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
            <span>Who We Are</span>
            <span className="w-1 h-1 rounded-full bg-[#7468fc]" />
            <span>About Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight leading-[1.12]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="italic text-[#7468fc]">Agility</span> &amp; Digital Growth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            <strong>Zentrok Pvt. Ltd.</strong> blends precision and creative
            innovation to deliver enterprise-grade digital solutions focused on real-world
            performance, resilience, and client success.
          </motion.p>
        </div>
      </section>

      {/* ========================================================
          2. COMPANY PROFILE SECTION (About Zentrok Pvt. Ltd.)
      ======================================================== */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual Glassmorphic Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-8 overflow-hidden shadow-2xl">
                {/* Purple gradient orb inside card */}
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 blur-[80px] pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, #7468fc 0%, #110fdf 70%, transparent 80%)",
                  }}
                />

                <div className="space-y-6 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7468fc]/30 bg-[#7468fc]/10 text-xs font-medium text-[#7468fc]">
                    <Target size={14} />
                    <span>Technology on Demand</span>
                  </div>

                  <h3
                    className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Built on Precision, Driven by Growth.
                  </h3>

                  <p className="text-sm text-white/50 leading-relaxed">
                    We eliminate friction between complex engineering and strategic business
                    execution, equipping enterprises with modern digital powerhouses.
                  </p>

                  {/* Feature badges list */}
                  <div className="pt-4 space-y-3">
                    {[
                      "Custom Software & Web Engineering",
                      "IT Consultancy & Digital Transformation",
                      "Cybersecurity Architecture & Defense",
                      "Performance Digital Marketing & Strategy",
                    ].map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.05] bg-white/[0.02] text-sm text-white/70"
                      >
                        <CheckCircle2 size={16} className="text-[#7468fc] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Company Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#7468fc] font-semibold">
                  Company Profile
                </span>
                <h2
                  className="text-3xl md:text-5xl font-bold tracking-tight text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Zentrok Pvt. Ltd.
                </h2>
              </div>

              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                <strong>Zentrok Pvt. Ltd.</strong> was founded with a clear vision to be a
                leader in delivering perfect, professional, and responsible technology solutions.
                We aim to provide exceptional services that evolve with the needs of our clients,
                enabling them to stay ahead in the rapidly changing tech landscape. Our commitment
                is to offer innovative and transformational tech services that go beyond the
                ordinary, ensuring the highest level of customer satisfaction.
              </p>

              <p className="text-base md:text-lg text-white/60 leading-relaxed">
                With a dedicated focus on both individuals and businesses, Zentrok Pvt. Ltd.
                strives to deliver comprehensive and timely solutions. Whether it&apos;s custom
                software development, setting up secure networks, or addressing complex
                cybersecurity challenges, we are here to deliver end-to-end technology solutions.
                Our mission is simple: keep systems running smoothly, minimize downtime, and
                maximize efficiency, allowing clients to focus on what matters most—growing their
                businesses and achieving their goals.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <div className="p-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#7468fc]/10 border border-[#7468fc]/20 flex items-center justify-center text-[#7468fc]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Responsible Partner</h4>
                    <p className="text-xs text-white/50">Trusted by modern enterprises</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#7468fc]/10 border border-[#7468fc]/20 flex items-center justify-center text-[#7468fc]">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Proven Execution</h4>
                    <p className="text-xs text-white/50">Results-driven deliverables</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. VISION & MISSION SECTION + KEY PERFORMANCE METRICS
      ======================================================== */}
      <section className="relative py-24 md:py-32 px-6 border-t border-white/[0.08] bg-white/[0.01]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Left: Vision & Mission Cards (Col 8) */}
            <div className="lg:col-span-8 space-y-8 flex flex-col justify-between">
              {/* Vision Card */}
              <div className="p-8 md:p-10 rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:border-[#7468fc]/30 hover:bg-white/[0.04] transition-all duration-300 relative group overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#7468fc]/10 border border-[#7468fc]/20 flex items-center justify-center text-[#7468fc]">
                    <Eye size={22} />
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Our Vision
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  Our vision at <strong>Zentrok Pvt. Ltd.</strong> is to set the benchmark for
                  perfection, professionalism, and responsibility in the technology services
                  industry. We aspire to build strong, lasting relationships with our clients by
                  providing consistently exceptional service. By staying at the forefront of
                  technological advancements, we aim to deliver innovative solutions that anticipate
                  and meet our clients&apos; future needs. We believe in providing a seamless
                  experience, ensuring that every interaction with our team leaves a positive and
                  lasting impact.
                </p>
              </div>

              {/* Mission Card */}
              <div className="p-8 md:p-10 rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:border-[#7468fc]/30 hover:bg-white/[0.04] transition-all duration-300 relative group overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#7468fc]/10 border border-[#7468fc]/20 flex items-center justify-center text-[#7468fc]">
                    <Compass size={22} />
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Our Mission
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  Our mission is to empower individuals and businesses by delivering high-quality,
                  reliable, and innovative technical solutions. Through a customer-centric
                  approach, we aim to ensure that every client experiences seamless technology
                  support, enabling them to achieve their objectives with minimal disruption. We are
                  dedicated to improving operational efficiency, security, and performance for our
                  clients by providing timely solutions and expert guidance.
                </p>
              </div>
            </div>

            {/* Right: Key Performance Metrics (Col 4) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="flex-1 p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-[#7468fc]/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-center"
                >
                  <span
                    className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.metric}
                  </span>
                  <h4 className="text-base font-semibold text-[#7468fc] mt-2 mb-1">
                    {item.label}
                  </h4>
                  <p className="text-xs text-white/50 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. CORE VALUES SECTION
      ======================================================== */}
      <section className="relative py-24 md:py-32 px-6 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#7468fc] font-semibold">
              Our Foundation
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Core Values
            </h2>
            <p className="text-sm md:text-base text-white/50 leading-relaxed">
              The fundamental standards and principles that anchor every strategy, line of code,
              and relationship we cultivate at <strong>Zentrok Pvt. Ltd.</strong>
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-[#7468fc]/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#7468fc]/10 border border-[#7468fc]/20 flex items-center justify-center text-[#7468fc] mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                      {value.title}
                    </h3>

                    <p className="text-sm text-white/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-white/30">
                    <span>Value 0{idx + 1}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7468fc]/40 group-hover:bg-[#7468fc] transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. OUR COMMITMENT TO INNOVATION SECTION
      ======================================================== */}
      <section className="relative py-24 md:py-32 px-6 border-t border-white/[0.08] bg-white/[0.01] overflow-hidden">
        {/* Glow backdrop */}
        <div
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-[120px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #7468fc 0%, #110fdf 60%, transparent 80%)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#7468fc] font-semibold">
                  Zentrok Pvt. Ltd.
                </span>
                <h2
                  className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Our Commitment to Innovation
                </h2>
              </div>

              <p className="text-base text-white/70 leading-relaxed">
                At <strong>Zentrok Pvt. Ltd.</strong>, innovation is the foundation of everything
                we do. We believe that technology should not only solve present-day challenges but
                also anticipate future needs. Our commitment to continuous improvement drives us to
                explore new possibilities, enhance digital solutions, and adopt cutting-edge
                technologies. Whether it&apos;s intelligent automation, advanced cybersecurity
                protocols, or modern cloud and web engineering, we constantly evolve to offer our
                clients best-in-class IT solutions. By investing in research, development, and
                architectural refinements, we ensure that our services remain at the forefront of
                the digital revolution.
              </p>

              <p className="text-base text-white/60 leading-relaxed">
                To stay ahead in an ever-changing technological landscape, we embrace a culture of
                adaptability and learning. Our team of experts continuously refines methodologies,
                optimizes processes, and integrates emerging technologies to deliver efficient,
                scalable, and future-proof solutions. From enterprise IT infrastructure to custom
                software development, we ensure that businesses thrive in a digitally connected
                world. As part of our ongoing mission, we prioritize security, efficiency, and
                innovation, ensuring that every solution we provide empowers businesses to grow with
                confidence. At Zentrok Pvt. Ltd., we don&apos;t just keep up with change—we drive it
                forward.
              </p>
            </div>

            {/* Right Highlights Cards */}
            <div className="lg:col-span-5 space-y-4">
              {innovationHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:border-[#7468fc]/30 hover:bg-white/[0.05] transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#7468fc]/10 border border-[#7468fc]/20 flex items-center justify-center text-[#7468fc] shrink-0 mt-1">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. CALL TO ACTION SECTION (Optunex Style)
      ======================================================== */}
      <section className="relative py-24 px-6 border-t border-white/[0.08] text-center overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#7468fc] font-semibold">
            Partner With Us
          </span>

          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Accelerate Your <br className="hidden sm:inline" />
            <span className="italic text-[#7468fc]">Digital Transformation?</span>
          </h2>

          <p className="text-base text-white/50 max-w-xl mx-auto leading-relaxed">
            Collaborate with <strong>Zentrok Pvt. Ltd.</strong> to build resilient architectures,
            elevate your brand, and unlock measurable commercial growth.
          </p>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#110fdf] hover:bg-[#7468fc] text-white px-8 py-4 rounded-full font-medium text-sm transition-all duration-300 shadow-xl shadow-[#110fdf]/25 hover:scale-105"
            >
              Let&apos;s Work Together <Send size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
