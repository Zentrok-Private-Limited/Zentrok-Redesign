"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/our-work", label: "Our Work" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/zentrokLogo.png"
            alt="ZENTROK"
            width={100}
            height={100}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 border border-white/[0.08] rounded-full px-1.5 py-1.5 bg-white/[0.03]">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                pathname === href
                  ? "text-white bg-white/[0.08]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-[#110fdf] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#7468fc] transition-colors ml-1"
          >
            Let&apos;s Work <Send size={14} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/[0.08] overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm transition-all ${
                    pathname === href
                      ? "text-white bg-white/[0.06]"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#110fdf] text-white px-5 py-3 rounded-full text-sm font-medium mt-2"
              >
                Let&apos;s Work <Send size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
