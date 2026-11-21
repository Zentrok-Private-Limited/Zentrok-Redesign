"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
}

// Innometrics exact testimonials
const testimonials: Testimonial[] = [
  {
    quote:
      "Their service saved me when our systems ran into critical issues right before an important presentation. Their 24/7 responsiveness was a lifesaver. Highly recommended for quick and efficient IT services!",
    name: "John Peterson",
    role: "Enterprise Client",
    location: "New York",
  },
  {
    quote:
      "As a small business owner, I rely heavily on their IT consultancy and helpdesk. They always provide the best support, whether it's troubleshooting or offering advice on new technology.",
    name: "Lisa Roberts",
    role: "Business Owner",
    location: "California",
  },
  {
    quote:
      "The customer service is unmatched. I needed immediate technical assistance with enterprise accounts, and their team walked me through every step of the way with utmost patience and expertise.",
    name: "Michael Turner",
    role: "Operations Director",
    location: "Texas",
  },
  {
    quote:
      "From setting up our secure business network to resolving complex software challenges, their support team is always there when we need them. Fast, transparent, and dependable.",
    name: "Emily Carter",
    role: "Product Manager",
    location: "Florida",
  },
  {
    quote:
      "Their IT helpdesk was able to resolve our technical issue within hours. I can’t believe how fast and seamless it was to get the assistance we needed for our entire distributed team.",
    name: "Sarah Mitchell",
    role: "Technology Lead",
    location: "Illinois",
  },
  {
    quote:
      "I’ve never experienced better IT solutions. They provided excellent strategic advice on improving our systems security, and their service was quick, professional, and reliable.",
    name: "David Johnson",
    role: "Managing Director",
    location: "Ohio",
  },
];

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  }),
};

export default function Testimonials() {
  const [[current, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setSlide(([curr]) => [(curr + 1) % testimonials.length, 1]);
  }, []);

  const prevTestimonial = useCallback(() => {
    setSlide(([curr]) => [
      (curr - 1 + testimonials.length) % testimonials.length,
      -1,
    ]);
  }, []);

  const goToSlide = (index: number) => {
    setSlide(([curr]) => [index, index > curr ? 1 : -1]);
  };

  // Auto-slide every 4.5 seconds, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextTestimonial();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial]);

  const activeTestimonial = testimonials[current];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#110fdf]/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Section Label */}
        <p className="text-sm uppercase tracking-widest text-white/40 mb-3 font-sans">
          Our Beaming Faces
        </p>

        {/* Main Heading */}
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight mb-14">
          What They Think About Us
        </h2>

        {/* Testimonial Card Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative min-h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full border border-white/[0.08] rounded-2xl bg-white/[0.03] p-10 md:p-14 backdrop-blur-sm relative shadow-2xl"
              >
                {/* 5 Stars Rating from Innometrics */}
                <div className="flex items-center justify-center gap-1.5 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xl md:text-2xl font-medium text-white/90 italic leading-relaxed mb-8 max-w-2xl mx-auto">
                  &ldquo;{activeTestimonial.quote}&rdquo;
                </p>

                {/* Client Meta */}
                <div className="flex items-center justify-center gap-4 pt-6 border-t border-white/[0.06] max-w-xs mx-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#110fdf] to-[#7468fc] flex items-center justify-center text-white font-bold text-sm shadow-inner shrink-0">
                    {activeTestimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-white text-base">
                      {activeTestimonial.name}
                    </h3>
                    <p className="text-sm text-white/50">
                      {activeTestimonial.role} &bull; {activeTestimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls (Arrows & Dots) */}
          <div className="flex items-center justify-center gap-6 mt-10">
            {/* Prev Button */}
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/70 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7468fc]/50"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
                    idx === current
                      ? "w-8 bg-[#7468fc]"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                >
                  <span className="sr-only">Slide {idx + 1}</span>
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/70 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7468fc]/50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
