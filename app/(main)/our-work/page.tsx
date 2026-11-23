"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import {
  ChevronDown,
  X,
  Link as LinkIcon,
  PlayCircle,
  Tag,
  Search,
  Filter,
  ArrowUpRight,
  Send,
} from "lucide-react";

// ---------- Types ----------
type Project = {
  id: string;
  title: string;
  brand: string;
  sector:
    | "Website Design"
    | "Social Media Management"
    | "Content Creation"
    | "Branding"
    | "Others";
  services: ("Branding" | "Performance" | "Social" | "SEO" | "Video" | "Web")[];
  year: number;
  cover: string;
  kpi: { label: string; value: string }[];
  summary: string;
  tags: string[];
  link?: string;
  videoUrl?: string;
};

// ---------- Data ----------
const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Healing Health & Lives",
    brand: "Advika Physiotherapy Clinic",
    sector: "Website Design",
    services: ["Branding", "Social", "Performance"],
    year: 2025,
    cover: "/project1.png",
    kpi: [
      { label: "Engagement ↑", value: "+148%" },
      { label: "CTR", value: "3.9%" },
      { label: "ROAS", value: "4.6x" },
    ],
    summary:
      "Where compassion meets clinical excellence to restore mobility, accelerate recovery, and help you live pain-free. Trust our expert care to guide you every step toward renewed strength and lasting wellness.",
    tags: ["creator", "ugc", "retail-push", "full-funnel"],
    link: "https://www.advikaphysiotherapyclinic.com/",
  },
  {
    id: "p2",
    title: "Astro, Taro & Numerology",
    brand: "Divine SSarthi",
    sector: "Website Design",
    services: ["Branding", "Performance", "Web"],
    year: 2024,
    cover: "/project3.png",
    kpi: [
      { label: "Sign-ups", value: "120k" },
      { label: "CPL ↓", value: "-37%" },
      { label: "CAC", value: "₹128" },
    ],
    summary:
      "Your gateway to transformative insight: from astrology and tarot to vastu and gemstones, tailor made guidance delivered online or right to your doorstep. Empower your journey with clarity, connection, and cosmic confidence.",
    tags: ["landing-page", "ab-test", "lifecycle"],
    link: "https://divine-ssarthi.vercel.app/",
  },
  {
    id: "p3",
    title: "From Lookbook to Look-at-Me",
    brand: "Velora",
    sector: "Social Media Management",
    services: ["Social", "Video", "SEO"],
    year: 2025,
    cover:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
    kpi: [
      { label: "Organic Sessions", value: "+92%" },
      { label: "View-Throughs", value: "2.1M" },
    ],
    summary:
      "SEO + Shorts engine: trend hooks, rapid edits, and cross-posting to drive incremental discovery.",
    tags: ["shorts", "seo", "trend-hacking"],
    link: "#",
    videoUrl: "/video2.mp4",
  },
  {
    id: "p4",
    title: "Zero to Waitlist in 21 Days",
    brand: "Healio",
    sector: "Branding",
    services: ["Performance", "Web"],
    year: 2023,
    cover:
      "https://images.unsplash.com/photo-1512061942530-3c1f288a4b43?q=80&w=1600&auto=format&fit=crop",
    kpi: [
      { label: "Leads", value: "38k" },
      { label: "CPA", value: "₹84" },
    ],
    summary:
      "CRO-first landing systems, ADA-friendly UX, and precise geo-targeting around hospital clusters.",
    tags: ["cro", "geo-targeting", "accessibility"],
    link: "#",
  },
];

// ---------- Filters ----------
const SECTORS: Project["sector"][] = [
  "Website Design",
  "Content Creation",
  "Social Media Management",
  "Branding",
  "Others",
];
const SERVICES: Project["services"][number][] = [
  "Branding",
  "Performance",
  "Social",
  "SEO",
  "Video",
  "Web",
];
const YEARS = Array.from(new Set(PROJECTS.map((p) => p.year))).sort(
  (a, b) => b - a
);

type SortKey = "newest" | "oldest" | "brand-az" | "brand-za";

export default function OurWorkPage() {
  const [q, setQ] = useState("");
  const [sector, setSector] = useState<Set<Project["sector"]>>(new Set());
  const [services, setServices] = useState<Set<Project["services"][number]>>(
    new Set()
  );
  const [year, setYear] = useState<number | "all">("all");
  const [sortBy, setSortBy] = useState<SortKey>("newest");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    let data = [...PROJECTS];

    // Search
    if (q.trim()) {
      const k = q.toLowerCase();
      data = data.filter(
        (p) =>
          p.title.toLowerCase().includes(k) ||
          p.brand.toLowerCase().includes(k) ||
          p.tags.join(" ").toLowerCase().includes(k) ||
          p.summary.toLowerCase().includes(k)
      );
    }

    // Sector
    if (sector.size) data = data.filter((p) => sector.has(p.sector));

    // Services
    if (services.size)
      data = data.filter((p) => p.services.some((s) => services.has(s)));

    // Year
    if (year !== "all") data = data.filter((p) => p.year === year);

    // Sort
    data.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b.year - a.year;
        case "oldest":
          return a.year - b.year;
        case "brand-az":
          return a.brand.localeCompare(b.brand);
        case "brand-za":
          return b.brand.localeCompare(a.brand);
      }
    });

    return data;
  }, [q, sector, services, year, sortBy]);

  const toggleSet = <T,>(s: Set<T>, v: T) => {
    const next = new Set(s);
    if (next.has(v)) {
      next.delete(v);
    } else {
      next.add(v);
    }
    return next;
  };

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#7468fc]/30 selection:text-white">
      <main>
        {/* ========================================================
            1. HERO SECTION - Optunex Dark Glassmorphism
        ======================================================== */}
        <section className="relative min-h-[45vh] flex flex-col items-center justify-center text-center px-6 pt-36 pb-14 overflow-hidden border-b border-white/[0.08]">
          {/* Ambient Purple Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full opacity-25 blur-[130px] pointer-events-none"
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
              <span>Featured Portfolio</span>
              <span className="w-1 h-1 rounded-full bg-[#7468fc]" />
              <span>Case Studies</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight text-white font-serif"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our <span className="italic text-[#7468fc]">Work</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            >
              Real brands. Real outcomes. Explore case studies across sectors—built
              on creative discipline, performance rigor, and relentless iteration.
            </motion.p>
          </div>
        </section>

        {/* ========================================================
            3. PROJECTS GRID
        ======================================================== */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-white/40 rounded-3xl border border-white/[0.08] bg-white/[0.02]">
              No projects match your current filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p, idx) => (
                <motion.article
                  key={p.id}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-[#7468fc]/40 hover:bg-white/[0.04] transition-all duration-300 shadow-2xl"
                >
                  <div>
                    {/* Cover Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                      <Image
                        src={p.cover}
                        alt={`${p.brand} cover`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute left-3.5 top-3.5 flex flex-wrap gap-2 z-10">
                        <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-xs text-white border border-white/[0.1]">
                          {p.sector}
                        </span>
                        <span className="rounded-full bg-[#110fdf]/80 backdrop-blur-md px-3 py-1 text-xs text-white border border-[#7468fc]/30">
                          {p.year}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                          {p.brand}
                          <span className="block text-sm font-normal text-[#7468fc] mt-0.5">
                            {p.title}
                          </span>
                        </h3>
                        <button
                          onClick={() => setActive(p)}
                          className="shrink-0 inline-flex items-center gap-1 rounded-full border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.1] px-3 py-1.5 text-xs text-white/80 hover:text-white transition"
                        >
                          View <ArrowUpRight className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <p className="mt-3 text-xs md:text-sm text-white/60 line-clamp-3 leading-relaxed">
                        {p.summary}
                      </p>

                      {/* KPIs */}
                      <div className="mt-6 grid grid-cols-3 gap-2">
                        {p.kpi.slice(0, 3).map((k) => (
                          <div
                            key={k.label}
                            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-2.5 text-center"
                          >
                            <div className="text-[10px] uppercase tracking-wide text-white/40 truncate">
                              {k.label}
                            </div>
                            <div className="text-sm font-bold text-white mt-0.5">
                              {k.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {p.tags.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/[0.05] bg-white/[0.02] px-2.5 py-1 text-[10px] text-white/50"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="p-6 pt-0 mt-4 flex items-center gap-3">
                    {p.videoUrl && (
                      <button
                        onClick={() => setActive(p)}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] px-4 py-2.5 text-xs font-medium text-white transition"
                      >
                        <PlayCircle className="h-3.5 w-3.5 text-[#7468fc]" />
                        <span>Watch case</span>
                      </button>
                    )}
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] hover:bg-[#110fdf] hover:border-[#7468fc]/50 px-4 py-2.5 text-xs font-medium text-white transition"
                      >
                        <LinkIcon className="h-3.5 w-3.5 text-[#7468fc]" />
                        <span>Visit Site</span>
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </section>

        {/* ========================================================
            4. DETAILED PROJECT MODAL
        ======================================================== */}
        <AnimatePresence>
          {active && (
            <motion.div
              key="overlay"
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            >
              <div className="min-h-screen flex items-center justify-center p-4 md:p-10">
                <motion.div
                  key="dialog"
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 25, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 140, damping: 18 }}
                  className="w-full max-w-4xl rounded-3xl border border-white/[0.1] bg-neutral-950 p-6 md:p-8 text-white shadow-2xl relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className="text-2xl md:text-3xl font-bold text-white tracking-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {active.brand}
                        <span className="block text-base font-normal text-[#7468fc] mt-1">
                          {active.title}
                        </span>
                      </h3>
                      <p className="mt-2 text-sm text-white/60 leading-relaxed max-w-2xl">
                        {active.summary}
                      </p>
                    </div>
                    <button
                      onClick={() => setActive(null)}
                      className="rounded-full border border-white/[0.1] bg-white/[0.05] hover:bg-white/[0.15] p-2.5 text-white/70 hover:text-white transition"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Media */}
                  <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.1] bg-black">
                    {active.videoUrl ? (
                      <video controls className="w-full h-auto" poster={active.cover}>
                        <source src={active.videoUrl} type="video/mp4" />
                      </video>
                    ) : (
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={active.cover}
                          alt={active.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Details row */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
                      <div className="text-[11px] text-white/40 uppercase tracking-wider">
                        Sector
                      </div>
                      <div className="mt-1 font-semibold text-white">
                        {active.sector}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
                      <div className="text-[11px] text-white/40 uppercase tracking-wider">
                        Services
                      </div>
                      <div className="mt-1 text-sm font-semibold text-white">
                        {active.services.join(" • ")}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
                      <div className="text-[11px] text-white/40 uppercase tracking-wider">
                        Year
                      </div>
                      <div className="mt-1 font-semibold text-white">
                        {active.year}
                      </div>
                    </div>
                  </div>

                  {/* KPIs */}
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                    {active.kpi.map((k) => (
                      <div
                        key={k.label}
                        className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 text-center"
                      >
                        <div className="text-[10px] uppercase tracking-wide text-white/40">
                          {k.label}
                        </div>
                        <div className="text-lg font-bold text-white mt-1">
                          {k.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {active.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-white/60"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-white/[0.08]">
                    {active.link && (
                      <a
                        href={active.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#110fdf] hover:bg-[#7468fc] px-6 py-3 text-sm font-medium text-white transition-all shadow-lg shadow-[#110fdf]/25"
                      >
                        <LinkIcon className="h-4 w-4" /> Visit brand site
                      </a>
                    )}
                    <button
                      onClick={() => setActive(null)}
                      className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] hover:bg-white/[0.1] px-6 py-3 text-sm text-white/80 transition"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================
            5. FOOTER CTA SECTION (Optunex Style)
        ======================================================== */}
        <section className="relative py-24 px-6 border-t border-white/[0.08] text-center overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full opacity-20 blur-[110px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #7468fc 0%, #110fdf 60%, transparent 80%)",
            }}
          />

          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#7468fc] font-semibold">
              Start a Project
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to Build Your Next{" "}
              <span className="italic text-[#7468fc]">Case Study?</span>
            </h2>
            <p className="text-base text-white/50 max-w-xl mx-auto leading-relaxed">
              Brief <strong>Zentrok Pvt. Ltd.</strong> and we&apos;ll get the
              flywheel spinning.
            </p>
            <div className="pt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#110fdf] hover:bg-[#7468fc] text-white px-8 py-4 rounded-full font-medium text-sm transition-all duration-300 shadow-xl shadow-[#110fdf]/25 hover:scale-105"
              >
                Let&apos;s Talk <Send size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
