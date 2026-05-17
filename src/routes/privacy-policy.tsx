import { createFileRoute } from "@tanstack/react-router";
import { buildHead, PageHeader } from "@/components/SEO";

export const Route = createFileRoute("/privacy-policy")({
  head: () => buildHead({
    title: "Privacy Policy | InfyGrid Solutions",
    description: "Privacy policy for InfyGrid Solutions — how we collect, use and protect personal information from visitors and clients.",
    path: "/privacy-policy",
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: January 2025" />
      <section className="section">
        <div className="container-x max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          <p>InfyGrid Solutions ("we", "us") values your privacy. This Privacy Policy explains what data we collect, how we use it and the choices you have.</p>
          <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
          <p>We collect information you provide directly — such as your name, email, phone number and project details — when you fill our contact form, request a quote or subscribe to our newsletter. We also collect basic analytics (pages viewed, device, location) via cookies and tools like Google Analytics.</p>
          <h2 className="text-2xl font-bold text-foreground">How We Use Information</h2>
          <p>We use your information to respond to enquiries, deliver services, improve our website, and send relevant updates. We do not sell your information to third parties.</p>
          <h2 className="text-2xl font-bold text-foreground">Data Security</h2>
          <p>We implement industry-standard safeguards (HTTPS, access controls, encrypted storage) to protect your information. No system is 100% secure, but we work to minimise risk.</p>
          <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
          <p>You can request access, correction or deletion of your personal data at any time by emailing support@infygrid.in.</p>
          <h2 className="text-2xl font-bold text-foreground">Contact</h2>
          <p>For any privacy-related questions, reach us at support@infygrid.in or +91 8825 445 211.</p>
        </div>
      </section>
    </>
  );
}
