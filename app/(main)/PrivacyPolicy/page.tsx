import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <main className="relative text-white min-h-screen px-6 md:px-20 py-32 overflow-hidden bg-black">
        {/* Purple Background Glow - Optunex theme */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div
            className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-20 blur-[130px]"
            style={{
              background:
                "radial-gradient(circle, #7468fc 0%, #110fdf 50%, transparent 80%)",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-white/40 font-medium">
              Legal Documentation
            </span>
            <h1
              className="text-4xl md:text-6xl font-bold tracking-tight leading-tight font-serif"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Privacy Policy
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              We believe in transparency, integrity, and trust. This policy outlines how <strong>Zentrok Pvt. Ltd.</strong> collects, utilizes, manages, and safeguards your data.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            <Section title="1. Introduction">
              Zentrok Pvt. Ltd. (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is deeply committed to protecting your personal information and respecting your digital privacy. This Privacy Policy governs your access to and use of our digital platforms, applications, consulting services, and associated online solutions.
            </Section>

            <Section title="2. Information We Collect">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-2 text-base font-semibold text-white">
                    Personal Information
                  </p>
                  <ul className="list-disc ml-5 space-y-1.5 text-white/60 text-sm">
                    <li>Full name and professional identification</li>
                    <li>Business email address and organizational details</li>
                    <li>Service-related requirements and project parameters</li>
                    <li>Technical logs, device identifiers, and system preferences</li>
                  </ul>
                </div>

                <div>
                  <p className="mb-2 text-base font-semibold text-white">
                    Technical & Usage Information
                  </p>
                  <ul className="list-disc ml-5 space-y-1.5 text-white/60 text-sm">
                    <li>Browser architecture, version, and language</li>
                    <li>Operating system and device telemetry</li>
                    <li>Referral URLs, page dwell duration, and interaction paths</li>
                    <li>Aggregated analytical and performance diagnostics</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section title="3. Purpose and Legal Basis of Processing">
              <p className="mb-3 text-white/70">
                We collect and process your information under legitimate business interests, contractual necessity, and compliance standards to:
              </p>
              <ul className="list-disc ml-5 space-y-1.5 text-white/60 text-sm">
                <li>Deliver, maintain, and continually refine our IT and consulting solutions</li>
                <li>Process business requests, proposals, and enterprise deliverables</li>
                <li>Ensure technical integrity, cybersecurity monitoring, and threat prevention</li>
                <li>Evaluate performance metrics, platform responsiveness, and operational efficiency</li>
                <li>Comply with prevailing corporate, statutory, and legal obligations</li>
              </ul>
            </Section>

            <Section title="4. Information Sharing & Third-Party Disclosure">
              <p className="font-medium text-white mb-2">
                We strictly do not sell, rent, lease, or monetize your personal data.
              </p>
              <p className="text-white/60 text-sm mb-3">
                Information is only shared under secure, controlled conditions with:
              </p>
              <ul className="list-disc ml-5 space-y-1.5 text-white/60 text-sm">
                <li>Essential infrastructure partners (cloud hosting, secure server providers, diagnostic monitoring)</li>
                <li>Enterprise tooling strictly bound by stringent non-disclosure and security covenants</li>
                <li>Regulatory authorities or law enforcement bodies when mandated by applicable judicial proceedings</li>
              </ul>
            </Section>

            <Section title="5. Cookies & Tracking Technologies">
              Our website uses technical cookies and session storage mechanisms to enhance navigation performance, remember configuration preferences, and assess traffic volume. You can configure your browser to decline non-essential cookies without impeding basic platform access.
            </Section>

            <Section title="6. Data Security & Storage Architecture">
              We employ enterprise-grade cryptographic standards, SSL/TLS protocols, firewalls, and restricted access controls to guard against unauthorized access, alteration, disclosure, or destruction of data. While we implement comprehensive defenses, no electronic transmission over the internet can be guaranteed as entirely infallible.
            </Section>

            <Section title="7. Data Retention Guidelines">
              We retain personal data strictly for the duration required to fulfill the operational, consulting, or contractual objectives for which it was gathered, or as mandated by statutory accounting and legal compliance periods.
            </Section>

            <Section title="8. User Rights & Data Subject Safeguards">
              <p className="mb-2 text-white/70">
                In accordance with applicable privacy regulations, you possess rights regarding your data, including:
              </p>
              <ul className="list-disc ml-5 space-y-1.5 text-white/60 text-sm">
                <li>The right to request access to records of information maintained about you</li>
                <li>The right to request rectification of inaccurate or outdated information</li>
                <li>The right to request deletion or erasure of personal information where applicable</li>
                <li>The right to restrict or object to specific processing activities</li>
              </ul>
            </Section>

            <Section title="9. Protection of Minors">
              Our services, digital offerings, and enterprise solutions are strictly designed for businesses and adult professionals aged 18 and above. We do not knowingly solicit or collect personal records from minors.
            </Section>

            <Section title="10. Policy Amendments">
              We reserve the right to revise or modify this Privacy Policy to reflect evolving industry practices, regulatory mandates, or system capabilities. Updated versions become effective immediately upon being published on this page.
            </Section>
          </div>
        </div>
      </main>
      <Footer showContact={false} />
    </>
  );
}

/* Section Component - Optunex Dark Glassmorphic Card */
type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <div className="group relative p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:border-[#7468fc]/30 hover:bg-white/[0.05] transition-all duration-300">
      <div className="relative space-y-3">
        <h2 className="text-lg md:text-xl font-bold tracking-tight text-white">
          {title}
        </h2>
        <div className="text-white/60 leading-relaxed text-sm md:text-base">
          {children}
        </div>
      </div>
    </div>
  );
}