"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail, MessageCircle } from "lucide-react";

const footerServices = [
  { label: "IT Support for Businesses", href: "/services" },
  { label: "Consultancy & Advisory", href: "/services" },
  { label: "Cybersecurity Services", href: "/services" },
  { label: "Software Development", href: "/services" },
  { label: "Website Design & Dev", href: "/services" },
  { label: "Digital Marketing Services", href: "/services" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/PrivacyPolicy" },
  { label: "Terms & Conditions", href: "/Terms" },
  { label: "Refund Policy", href: "/RefundPolicy" },
  { label: "Disclaimer", href: "/Disclaimer" },
];

// Zentrok original social profiles
const socials = [
  {
    Icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61579906194112",
    label: "Facebook",
  },
  {
    Icon: FaXTwitter,
    href: "https://x.com/Zentrok_05",
    label: "X",
  },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/zentrok_/",
    label: "Instagram",
  },
  {
    Icon: FaLinkedinIn,
    href: "http://www.linkedin.com/in/zentrok-private-limited",
    label: "LinkedIn",
  },
  {
    Icon: FaYoutube,
    href: "https://youtube.com/@zentrokpvtltd-s5l?si=1cID75lxCF2YDpr5",
    label: "YouTube",
  },
];

const MarketingFooter: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/zentrokLogo.png"
                alt="Zentrok Pvt. Ltd."
                width={120}
                height={40}
              />
            </Link>
            <p className="text-xs uppercase tracking-widest text-[#7468fc] font-semibold mb-2">
              Technology on Demand
            </p>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Zentrok Pvt. Ltd. delivers cutting-edge IT solutions, enterprise software development, cybersecurity, and strategic digital marketing that accelerate brand growth and operational efficiency.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/[0.08] hover:border-white/[0.2] text-white/50 hover:text-white transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column (Excluding tech support) */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-3">
              {footerServices.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick & Legal Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Legal & Policy
            </h4>
            <ul className="space-y-3">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Zentrok original) */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#7468fc] shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-white/40 block">Email Support</span>
                  <a
                    href="mailto:info@zentrok.com"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    info@zentrok.com
                  </a>
                </div>
              </li>
              {/* <li className="flex items-start gap-3">
                <MessageCircle size={16} className="text-[#7468fc] shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-white/40 block">WhatsApp</span>
                  <a
                    href="https://wa.me/8826360287"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    +91 8826360287
                  </a>
                </div>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Zentrok Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Technology on Demand &bull; Crafted with Purpose
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MarketingFooter;
