import Footer from "@/components/Footer";

export default function TermsConditions() {
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
              Terms &amp; Conditions
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              These terms govern your access to and use of digital products, enterprise services, and solutions delivered by <strong>Zentrok Pvt. Ltd.</strong>
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            <Section title="1. Agreement & Acceptance">
              These Terms &amp; Conditions constitute a legally binding agreement between you (&ldquo;Client&rdquo;, &ldquo;User&rdquo;, or &ldquo;you&rdquo;) and <strong>Zentrok Pvt. Ltd.</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By accessing our website, browsing our platform, or engaging our enterprise services, you formally acknowledge that you have read, understood, and agreed to be governed by these provisions.
            </Section>

            <Section title="2. Scope of Services">
              <p className="mb-3 text-white/70">
                Zentrok Pvt. Ltd. provides technology, consulting, and digital solutions, encompassing:
              </p>
              <ul className="list-disc ml-5 space-y-1.5 text-white/60 text-sm">
                <li>IT Support &amp; Managed Systems for Businesses</li>
                <li>IT Consultancy &amp; Strategic Digital Transformation</li>
                <li>Cybersecurity Assessments, Network Defense &amp; Threat Architecture</li>
                <li>Digital Marketing, Strategy, Analytics &amp; Conversion Optimization</li>
                <li>Website Design, UI/UX Engineering &amp; Platform Development</li>
                <li>Custom Software Engineering, Web Applications, APIs &amp; Cloud Integration</li>
              </ul>
              <p className="mt-3 text-white/60 text-sm">
                Specific technical parameters, timelines, milestones, and deliverable specifications are determined in individual project proposals, statements of work (SOW), or service agreements.
              </p>
            </Section>

            <Section title="3. User Eligibility & Authority">
              By accessing our solutions, you affirm that you are at least eighteen (18) years of age, possess the full legal power and capacity to bind yourself or the legal entity you represent, and that your use of our services does not violate any applicable territorial law or standard.
            </Section>

            <Section title="4. Professional Engagements & Outcome Standards">
              Digital technology implementation, marketing, and software engineering rely on external variables, platform architectures, client infrastructure, and market dynamics. Consequently, while we guarantee high professional diligence, adherence to quality standards, and industry best practices, we make no unconditional warranties regarding specific commercial conversion figures, third-party platform algorithm decisions, or search engine indexing rankings.
            </Section>

            <Section title="5. Client Obligations & Cooperation">
              <p className="mb-2 text-white/70">
                To guarantee optimal service execution, clients agree to:
              </p>
              <ul className="list-disc ml-5 space-y-1.5 text-white/60 text-sm">
                <li>Provide accurate, lawful, and necessary assets, credentials, and documentation in a timely manner</li>
                <li>Approve developmental milestones, project deliverables, and strategic plans without undue delay</li>
                <li>Maintain lawful ownership or verified usage licenses for all materials submitted to us</li>
                <li>Ensure internal technical teams cooperate during integration, testing, and deployment cycles</li>
              </ul>
            </Section>

            <Section title="6. Invoicing, Fees & Billing Terms">
              Service remuneration, billing milestones, and fee schedules are documented within dedicated proposals or statements of work. Invoices are payable according to stated terms. Continued delivery of ongoing services and deployments remains subject to timely financial settlement.
            </Section>

            <Section title="7. Intellectual Property Rights">
              <p className="mb-2 text-white/70">
                Ownership of deliverables and underlying technical property is maintained as follows:
              </p>
              <ul className="list-disc ml-5 space-y-1.5 text-white/60 text-sm">
                <li>All pre-existing methodologies, proprietary code libraries, frameworks, and tools remain the sole intellectual property of Zentrok Pvt. Ltd.</li>
                <li>Upon full settlement of all associated project dues, ownership of custom bespoke deliverables created specifically for the client transfers as stipulated in the relevant statement of work.</li>
                <li>The Company retains the customary professional right to cite non-confidential project completions within professional portfolios and case studies.</li>
              </ul>
            </Section>

            <Section title="8. Confidentiality">
              Both parties agree to treat all commercial, architectural, technical, operational, and strategic data disclosed during the engagement as strictly confidential. Neither party shall disclose such proprietary information to unauthorized third parties without prior written consent, except where mandated by statutory law.
            </Section>

            <Section title="9. Third-Party Services & Platforms">
              Our engineering and marketing solutions may interface with third-party software, cloud servers, or advertising networks. We disclaim liability for operational outages, policy revisions, account actions, or terms imposed independently by such third-party vendors.
            </Section>

            <Section title="10. Limitation of Liability">
              To the fullest extent permitted by applicable jurisdiction, Zentrok Pvt. Ltd. and its directors, employees, or partners shall not be liable for any indirect, incidental, punitive, consequential, or special damages, including loss of profits, commercial data, or business interruption. In all events, the aggregate liability of the Company shall not exceed the total fees paid by the client for the specific service phase giving rise to the claim.
            </Section>

            <Section title="11. Indemnification">
              You agree to defend, indemnify, and hold harmless Zentrok Pvt. Ltd. against any claims, liabilities, damages, and legal costs arising from your unlawful use of our solutions, breach of these Terms, or infringement of third-party rights through materials supplied by you.
            </Section>

            <Section title="12. Termination">
              Either party may terminate an ongoing engagement in accordance with the notice provisions documented within the applicable contract. In the event of material breach, illegal practices, or persistent non-payment, we reserve the right to suspend or terminate services immediately. Accrued financial liabilities for work delivered prior to termination remain fully payable.
            </Section>

            <Section title="13. Force Majeure">
              Neither party shall be held liable for delay or failure to fulfill performance obligations resulting from causes beyond reasonable control, including natural catastrophes, civil disturbances, national infrastructure disruptions, governmental restrictions, or telecommunication failures.
            </Section>

            <Section title="14. Governing Law & Jurisdiction">
              These Terms &amp; Conditions are constructed, interpreted, and governed under the laws of India. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts of law in India.
            </Section>

            <Section title="15. Modifications to Terms">
              We reserve the prerogative to revise these Terms &amp; Conditions at our discretion. The prevailing and updated version published on this page supersedes previous drafts. Continued engagement with our services constitutes binding acceptance of modified provisions.
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