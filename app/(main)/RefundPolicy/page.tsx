import Footer from "@/components/Footer";

export default function RefundPolicy() {
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
              Refund &amp; Cancellation Policy
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Please review our commercial refund and cancellation protocols carefully before commissioning services with <strong>Zentrok Pvt. Ltd.</strong>
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            <Section title="1. Overview & Scope">
              All commercial transactions, service retainers, and project engagements commissioned with <strong>Zentrok Pvt. Ltd.</strong> are governed by this Refund &amp; Cancellation Policy. By making payment or signing a service agreement, you affirm acceptance of these terms.
            </Section>

            <Section title="2. Professional Services & Deliverables Policy">
              <ul className="list-disc ml-5 space-y-2 text-white/60 text-sm">
                <li>Due to the tailored, intellectual, and resource-intensive nature of custom software development, digital marketing, IT infrastructure, and consulting services, payments made for completed or in-progress work phases are non-refundable.</li>
                <li>Once strategic planning, initial discovery, architecture design, development sprints, or marketing execution has commenced, dedicated personnel and technical resources have been allocated.</li>
              </ul>
            </Section>

            <Section title="3. Pre-Commencement Project Cancellation">
              <ul className="list-disc ml-5 space-y-2 text-white/60 text-sm">
                <li>If a formal project engagement is canceled by the client in writing prior to the initiation of any design, development, or strategic work, a partial refund may be considered.</li>
                <li>Any administrative fees, scoping assessments, preliminary consultations, or setup charges already incurred will be deducted from any refundable balance.</li>
                <li>All refund assessments are performed at the discretion of Zentrok Pvt. Ltd.</li>
              </ul>
            </Section>

            <Section title="4. Retainer Engagements & Monthly Services">
              <ul className="list-disc ml-5 space-y-2 text-white/60 text-sm">
                <li>For monthly retainers (such as ongoing managed IT support, cybersecurity monitoring, or monthly digital marketing campaigns), clients must submit written cancellation notice at least thirty (30) days in advance of the subsequent billing cycle.</li>
                <li>No partial or prorated refunds will be issued for billing cycles that have already begun or are actively underway.</li>
              </ul>
            </Section>

            <Section title="5. Direct Platform & Media Expenditures">
              <ul className="list-disc ml-5 space-y-2 text-white/60 text-sm">
                <li>All budgets allocated directly to third-party ad networks, advertising platforms (such as Google Ads, Meta, LinkedIn), domain registrars, external API providers, or cloud servers are strictly non-refundable.</li>
                <li>These disbursements represent direct capital passed through to third-party vendors and fall entirely outside our financial purview.</li>
              </ul>
            </Section>

            <Section title="6. Third-Party Licenses & Software Costs">
              Any dedicated licensing fees, software subscriptions, third-party plugin purchases, or specialized data services procured specifically on behalf of the client are strictly non-refundable under all circumstances.
            </Section>

            <Section title="7. Extraordinary Evaluation & Processing Window">
              <ul className="list-disc ml-5 space-y-2 text-white/60 text-sm">
                <li>Exceptional claims or disputes are assessed individually based on verified contractual deliverables and documented milestone sign-offs.</li>
                <li>In the event an authorized refund is approved in writing by corporate management, the transaction will be processed through the original method of payment within seven to fourteen (7–14) business days.</li>
              </ul>
            </Section>

            <Section title="8. Policy Revisions">
              Zentrok Pvt. Ltd. reserves the right to amend, update, or restructure this Refund &amp; Cancellation Policy at any time without prior individual notification. Changes become immediately active upon publication on this platform.
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