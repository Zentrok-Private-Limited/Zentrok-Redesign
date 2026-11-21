"use client";

import Link from "next/link";

export default function PaymentFooter() {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Zentrok. All Rights Reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link
            href="/Disclaimer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Disclaimer
          </Link>

          <Link
            href="/PrivacyPolicy"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </Link>

          <Link
            href="/Terms"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Terms & Conditions
          </Link>

          <Link
            href="/RefundPolicy"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Refund Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}