import Footer from "@/components/Footer";

export default function Disclaimer() {
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
              Disclaimer
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Please read this disclaimer carefully before accessing information or utilizing services delivered by <strong>Zentrok Pvt. Ltd.</strong>
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            <Section title="1. General Informational Notice">
              All materials, case summaries, articles, data points, and solutions presented by <strong>Zentrok Pvt. Ltd.</strong> across this website and associated channels are published in good faith for general business informational and technological consulting purposes only.
            </Section>

            <Section title="2. Commercial & Performance Disclaimers">
              <p className="mb-3 text-white/70">
                While we apply proven engineering methodologies and strategic marketing expertise, we explicitly disclaim any express or implied guarantees regarding:
              </p>
              <ul className="list-disc ml-5 space-y-1.5 text-white/60 text-sm">
                <li>Fixed search engine rankings or position preservation on Google or other engines</li>
                <li>Absolute volumes of website impressions, inbound leads, or gross conversions</li>
                <li>Commercial sales revenues or definitive return on advertising spend (ROAS)</li>
              </ul>
              <p className="mt-3 text-white/60 text-sm">
                Market outcomes remain intrinsically dependent upon prevailing industry competition, economic fluctuations, product-market fit, client operational execution, and external platform algorithm adjustments.
              </p>
            </Section>

            <Section title="3. No Substitute for Legal, Tax, or Financial Counsel">
              Content provided on our digital properties, consulting documentation, or strategic communications does not constitute licensed legal, accounting, taxation, or certified financial advice. Clients and users are advised to seek independent certified professional counsel before acting on business decisions.
            </Section>

            <Section title="4. Third-Party Networks, Integrations & Platforms">
              <p className="mb-2 text-white/70">
                Our solutions frequently interact with third-party software, cloud servers, and media ecosystems, including Google, Meta, cloud infrastructure providers, and external APIs.
              </p>
              <p className="text-white/60 text-sm">
                Zentrok Pvt. Ltd. maintains no ownership over these external entities and disclaims responsibility for account suspensions, policy enforcement, service outages, or architectural disruptions initiated by third-party platforms.
              </p>
            </Section>

            <Section title="5. System Availability & Continuity">
              While we strive to ensure continuous uptime and seamless platform stability, we do not warrant that our website will be constantly available, uninterrupted, entirely error-free, or exempt from temporary maintenance, network disruptions, or cyber threats.
            </Section>

            <Section title="6. External Hyperlinks">
              This platform may contain links redirecting to external websites not hosted, controlled, or monitored by Zentrok Pvt. Ltd. We assume no responsibility for the content, privacy standards, accuracy, or terms of third-party websites. Accessing external links is undertaken strictly at your own discretion.
            </Section>

            <Section title="7. Limitation of Responsibility">
              In no event shall Zentrok Pvt. Ltd., its directors, employees, or contractors be liable for any direct, indirect, incidental, or consequential damages resulting from the use of, or inability to use, our website, materials, or solutions.
            </Section>

            <Section title="8. User Acceptance & Consent">
              By accessing, browsing, or utilizing this website and its affiliated digital properties, you formally consent to this Disclaimer and agree to all terms and conditions set forth herein.
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