import { createFileRoute } from "@tanstack/react-router";
import { buildHead, PageHeader } from "@/components/SEO";

export const Route = createFileRoute("/cookie-policy")({
  head: () => buildHead({
    title: "Cookie Policy | InfyGrid Solutions",
    description: "How InfyGrid Solutions uses cookies and similar tracking technologies on infygrid.in.",
    path: "/cookie-policy",
  }),
  component: CookiePage,
});

function CookiePage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Cookie Policy" subtitle="Last updated: January 2025" />
      <section className="section">
        <div className="container-x max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          <p>This Cookie Policy explains how InfyGrid Solutions uses cookies and similar technologies on infygrid.in.</p>
          <h2 className="text-2xl font-bold text-foreground">What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and understand how visitors use our site.</p>
          <h2 className="text-2xl font-bold text-foreground">Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">Essential cookies</strong> — required for the website to function (security, session).</li>
            <li><strong className="text-foreground">Analytics cookies</strong> — help us understand visitor behaviour (Google Analytics, GA4).</li>
            <li><strong className="text-foreground">Marketing cookies</strong> — used to measure ad performance and retargeting.</li>
          </ul>
          <h2 className="text-2xl font-bold text-foreground">Managing Cookies</h2>
          <p>You can block or delete cookies via your browser settings. Note that disabling some cookies may impact site functionality.</p>
          <h2 className="text-2xl font-bold text-foreground">Contact</h2>
          <p>Questions? Email support@infygrid.in.</p>
        </div>
      </section>
    </>
  );
}
