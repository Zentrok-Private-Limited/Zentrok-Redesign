"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  BriefcaseBusiness,
  BadgeHelp,
  ShieldCheck,
  Megaphone,
  Globe,
  Code2,
  type LucideIcon,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

// Exactly the 6 services from Innometrics (excluding Expert Tech Support as requested)
const services: Service[] = [
  {
    title: "IT Support for Businesses",
    description:
      "Reliable IT support solutions that keep your business running smoothly, minimize downtime, and enhance productivity with managed infrastructure.",
    icon: BriefcaseBusiness,
  },
  {
    title: "IT Consultancy and Advisory Services",
    description:
      "Expert consultancy and advisory services to guide businesses in making informed, strategic technology decisions for sustainable growth and efficiency.",
    icon: BadgeHelp,
  },
  {
    title: "Cybersecurity Services",
    description:
      "Protect your business with advanced cybersecurity solutions, including threat detection, data encryption, and robust defense against cyber attacks.",
    icon: ShieldCheck,
  },
  {
    title: "Digital Marketing Services",
    description:
      "Elevate your brand's online presence with tailored digital marketing strategies (SEO, SMM, PPC, content) that drive high engagement and boost conversions.",
    icon: Megaphone,
  },
  {
    title: "Website Design & Development",
    description:
      "Building aesthetically beautiful and incredibly useful websites that increase interaction, strengthen brand identity, and produce measurable outcomes.",
    icon: Globe,
  },
  {
    title: "Software Development Services",
    description:
      "Tailored software solutions designed to meet your unique business needs, from custom web and mobile apps to scalable enterprise systems and APIs.",
    icon: Code2,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-white/40 block">
            Our Services
          </span>
          <h2
            className="mt-3 text-4xl md:text-5xl font-bold text-white font-serif tracking-tight"
            style={{
              fontFamily:
                "var(--font-heading, 'Playfair Display', Georgia, serif)",
            }}
          >
            Explore Our Expertise & Featured Solutions
          </h2>
          <p className="mt-4 text-white/50 max-w-2xl mx-auto text-base">
            Innovative tech solutions, IT services, and consulting designed to
            minimize downtime and maximize efficiency for seamless business operations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className="group relative flex flex-col items-start rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/[0.18] hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-black/50"
              >
                {/* Icon Container */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 transition-all duration-300 group-hover:bg-purple-500/20 group-hover:border-purple-500/30 group-hover:text-purple-300">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>

                {/* Service Title */}
                <h3 className="mb-3 text-xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm leading-relaxed text-white/50">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
