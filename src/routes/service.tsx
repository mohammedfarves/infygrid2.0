import { createFileRoute } from "@tanstack/react-router";
import { buildHead, PageHeader } from "@/components/SEO";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/Cards";
import { CTABand } from "@/components/ContactSection";
import { Sparkles, ArrowRight, MessageSquare, Paintbrush, Terminal, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/service")({
  head: () =>
    buildHead({
      title: "IT Services — Web, Mobile, ERP, SEO & Digital Marketing | InfyGrid Solutions",
      description:
        "InfyGrid Solutions IT services: website development, mobile apps, custom software, ERP/CRM, UI/UX design, SEO and digital marketing for modern businesses.",
      path: "/service",
    }),
  component: ServicePage,
});

function ServicePage() {
  const steps = [
    { step: "01", title: "Discovery", text: "We dive deep into your requirements and goals to build a winning development roadmap.", Icon: MessageSquare, delay: "0s" },
    { step: "02", title: "Design", text: "Our designers craft intuitive, stunning high-fidelity experiences that represent your brand.", Icon: Paintbrush, delay: "0.1s" },
    { step: "03", title: "Development", text: "Our engineers build fast, secure, and scalable solutions using modern tech stacks.", Icon: Terminal, delay: "0.2s" },
    { step: "04", title: "Launch", text: "Continuous testing, DLT setup, and seamless cloud deployment ensure successful release.", Icon: Sparkles, delay: "0.3s" },
  ];

  return (
    <>
      <PageHeader 
        eyebrow="Our Expertise" 
        title="Premium IT services tailored for modern businesses" 
        subtitle="From initial concept to deployment, we build and deliver full-stack customized digital platforms that solve real operational hurdles and scale flawlessly." 
      />

      {/* Services Grid Section */}
      <section className="relative py-20 bg-background overflow-hidden">
        {/* Glow Decor */}
        <div className="absolute top-[15%] right-[-15%] w-[45vw] h-[45vw] rounded-full opacity-10 bg-primary/25 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-15%] w-[40vw] h-[40vw] rounded-full opacity-5 bg-accent/20 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] grid-dots-bg pointer-events-none" />

        <div className="container-x relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.slug} className="animate-fade-in duration-300">
              <ServiceCard service={s} />
            </div>
          ))}
        </div>
      </section>

      {/* Connected Process Section */}
      <section className="relative py-24 bg-surface overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "var(--gradient-mesh)" }} />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border/50 to-transparent" />

        <div className="container-x relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow"><Sparkles size={11} className="mr-1.5" /> High-Performance Workflow</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              How we bring your ideas <span className="gradient-text">to life</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-base">
              A meticulously engineered project cycle centered around extreme speed, thorough QA, and operational clarity.
            </p>
          </div>

          {/* Interactive Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            
            {/* Visual connector line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-primary/10 via-primary/30 to-accent/15 -translate-y-1/2 z-0 pointer-events-none" />

            {steps.map((p) => {
              const StepIcon = p.Icon;
              return (
                <div 
                  key={p.step} 
                  className="relative card-elevated group flex flex-col h-full bg-white dark:bg-zinc-950 border border-border/80 hover:border-primary/45 rounded-3xl p-6 transition-all duration-300 shadow-sm hover:shadow-[0_20px_45px_rgba(120,119,198,0.12)] z-10"
                >
                  {/* Dynamic corner gradient glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Header info */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-5xl font-display font-extrabold text-foreground/5 group-hover:text-primary/15 group-hover:scale-105 transition-all duration-500">
                      {p.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-sm">
                      <StepIcon size={18} />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {p.title}
                  </h3>
                  
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                    {p.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <CTABand />
    </>
  );
}
