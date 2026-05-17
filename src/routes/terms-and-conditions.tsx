import { createFileRoute } from "@tanstack/react-router";
import { buildHead, PageHeader } from "@/components/SEO";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => buildHead({
    title: "Terms & Conditions | InfyGrid Solutions",
    description: "Terms and conditions governing the use of InfyGrid Solutions website, services and engagements.",
    path: "/terms-and-conditions",
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" subtitle="Last updated: January 2025" />
      <section className="section">
        <div className="container-x max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          <p>By accessing or using infygrid.in or engaging InfyGrid Solutions for services, you agree to the following terms.</p>
          <h2 className="text-2xl font-bold text-foreground">Use of Website</h2>
          <p>You may browse our site for personal, non-commercial purposes. You may not reproduce, distribute or create derivative works of any content without our written permission.</p>
          <h2 className="text-2xl font-bold text-foreground">Service Engagements</h2>
          <p>All project engagements are governed by a separate proposal or contract signed between InfyGrid Solutions and the client, which takes precedence over these general terms.</p>
          <h2 className="text-2xl font-bold text-foreground">Intellectual Property</h2>
          <p>All logos, designs, code and content on this website are the property of InfyGrid Solutions unless otherwise indicated. Project deliverables transfer to clients per signed contract terms.</p>
          <h2 className="text-2xl font-bold text-foreground">Limitation of Liability</h2>
          <p>InfyGrid Solutions will not be liable for any indirect, incidental or consequential damages arising from use of this website or our services.</p>
          <h2 className="text-2xl font-bold text-foreground">Governing Law</h2>
          <p>These terms are governed by the laws of India, with exclusive jurisdiction in the courts of Tamil Nadu.</p>
          <h2 className="text-2xl font-bold text-foreground">Contact</h2>
          <p>Questions about these terms? Email support@infygrid.in.</p>
        </div>
      </section>
    </>
  );
}
