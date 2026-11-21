"use client";

import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView, motion } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

// Innometrics exact metric numbers
const stats: StatItem[] = [
  {
    value: 1,
    suffix: "M+",
    label: "Queries Resolved",
  },
  {
    value: 50,
    suffix: "K+",
    label: "Happy Clients Globally",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Dedicated Support & Monitoring",
  },
];

export default function StatsAndProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-y border-white/[0.08] py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              {index > 0 && (
                <div
                  className="hidden md:block w-px h-16 bg-white/[0.08]"
                  aria-hidden="true"
                />
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="flex flex-col items-center text-center"
              >
                <div className="text-5xl md:text-6xl font-bold tracking-tight text-white">
                  {mounted && isInView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                    />
                  ) : (
                    <span>
                      0{stat.suffix}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-white/50 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
