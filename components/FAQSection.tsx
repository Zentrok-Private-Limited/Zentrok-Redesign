"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

// Top FAQs from Innometrics relevant to business IT services, consulting, cybersecurity, software, etc. (excluding tech support)
const faqs = [
  {
    question: "What is the difference between IT service and IT support?",
    answer:
      "IT service refers to comprehensive solutions provided to meet a business's technology needs, such as cloud computing, custom software development, and cybersecurity architecture. IT support focuses on ongoing maintenance, troubleshooting, and ensuring the smooth, continuous operation of existing IT systems and infrastructure.",
  },
  {
    question: "What kind of IT Services are needed for Businesses?",
    answer:
      "Businesses typically require comprehensive IT services such as proactive network monitoring, robust data backup and disaster recovery, cybersecurity threat management, cloud infrastructure setup, and customized software solutions. These ensure high productivity, secure data, and readiness for technological growth.",
  },
  {
    question: "What does an IT advisory consultant do?",
    answer:
      "An advisory consultant provides expert guidance to businesses, helping them make strategic technology decisions. They analyze current digital operations, identify security and efficiency bottlenecks, and recommend tailored digital transformation roadmaps to boost productivity and profitability.",
  },
  {
    question: "What do your Cybersecurity Services include?",
    answer:
      "Our cybersecurity services encompass threat detection and incident response, endpoint and network protection, firewall management, data encryption, vulnerability assessments, penetration testing, and compliance consulting to safeguard critical assets against modern cyber threats.",
  },
  {
    question: "What is included in Custom Software Development?",
    answer:
      "Custom software development involves designing, building, deploying, and maintaining software tailored to your specific business workflows. This includes custom web applications, mobile apps, enterprise API integrations, and scalable cloud-native architectures.",
  },
  {
    question: "How do we get started with your solutions?",
    answer:
      "Getting started is simple. Reach out to Zentrok Pvt. Ltd. through our contact form or email for an initial consultation. We will discuss your business requirements, assess your goals, and design a tailored service package that matches your operational needs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-32 overflow-hidden bg-transparent">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#7468fc]/5 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/50 text-xs uppercase tracking-widest mb-4">
            <HelpCircle size={14} className="text-[#7468fc]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white font-serif tracking-tight"
            style={{
              fontFamily:
                "var(--font-heading, 'Playfair Display', Georgia, serif)",
            }}
          >
            Answers to Your Most Common Questions
          </h2>
          <p className="mt-4 text-white/50 text-base max-w-xl mx-auto">
            Everything you need to know about our enterprise IT solutions, consulting, cybersecurity, and software engineering.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-white/[0.08] rounded-2xl bg-white/[0.03] backdrop-blur-sm overflow-hidden transition-colors hover:border-white/[0.15]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 md:px-8 flex items-center justify-between text-left text-white font-medium text-lg focus:outline-none cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center shrink-0 text-white/70 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-white/[0.08] text-white" : ""
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 text-sm md:text-base leading-relaxed text-white/60 border-t border-white/[0.04] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
