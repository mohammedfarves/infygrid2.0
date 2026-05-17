import { createFileRoute } from "@tanstack/react-router";
import { buildHead, PageHeader } from "@/components/SEO";
import { ContactSection } from "@/components/ContactSection";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildHead({
      title: "Contact InfyGrid Solutions — Get a Quote in Tamil Nadu",
      description:
        "Contact InfyGrid Solutions for website development, mobile apps, ERP and digital marketing in Nagapattinam and across Tamil Nadu. Call +91 8825 445 211.",
      path: "/contact",
    }),
  component: ContactPage,
});

const faqs = [
  { q: "How long does a typical project take?", a: "Most web development projects take between 4 to 12 weeks depending on complexity. Mobile apps and enterprise solutions may take longer." },
  { q: "Can you help with post-launch maintenance?", a: "Yes — we offer continuous support and maintenance packages to keep your digital products updated, secure and performant." },
  { q: "What is your pricing model?", a: "We offer both fixed-price projects and dedicated developer models. Pricing is tailored to scope, complexity and urgency." },
  { q: "Do you sign Non-Disclosure Agreements (NDA)?", a: "Absolutely. We respect your intellectual property and happily sign an NDA before discussing sensitive project details." },
];

function ContactPage() {
  return (
    <>
      <PageHeader 
        eyebrow="Get In Touch" 
        title="Let's build something amazing together" 
        subtitle="Tell us about your project — we'll come back within a few hours with a clear engineering plan." 
      />
      
      <ContactSection />
      
      {/* Premium FAQ Accordion */}
      <section className="relative py-24 bg-surface overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "var(--gradient-mesh)" }} />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        
        <div className="container-x max-w-4xl relative z-10">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="eyebrow"><Sparkles size={11} className="mr-1.5" /> Questions & Answers</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-3 text-muted-foreground text-sm">
              Answers to our most common pricing, process, and security policies.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((f) => (
              <details 
                key={f.q} 
                className="card-elevated group border border-border/80 open:border-primary/50 open:shadow-[0_10px_30px_rgba(120,100,255,0.06)] rounded-2xl bg-white dark:bg-zinc-950/70 backdrop-blur-md overflow-hidden transition-all duration-300" 
                style={{ padding: "1.25rem 1.5rem" }}
              >
                <summary className="font-display font-bold text-base md:text-lg cursor-pointer list-none flex items-center justify-between text-foreground hover:text-primary transition-colors select-none">
                  <div className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-primary shrink-0 opacity-80" />
                    <span>{f.q}</span>
                  </div>
                  <ChevronDown size={18} className="text-muted-foreground group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="mt-4 pl-7 border-l-2 border-primary/20 text-muted-foreground text-sm leading-relaxed animate-fade-in duration-300">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
