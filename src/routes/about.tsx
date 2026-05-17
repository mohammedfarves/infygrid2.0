import { createFileRoute } from "@tanstack/react-router";
import { buildHead, PageHeader } from "@/components/SEO";
import { CheckCircle2, Target, Eye, Heart, Sparkles, Code2, Shield, Users } from "lucide-react";
import { CTABand } from "@/components/ContactSection";

export const Route = createFileRoute("/about")({
  head: () =>
    buildHead({
      title: "About InfyGrid Solutions — Software Company in Nagapattinam",
      description:
        "About InfyGrid Solutions — a TNStartup & MSME-registered software company in Nagapattinam, Tamil Nadu, building modern web, mobile, ERP and digital marketing solutions.",
      path: "/about",
    }),
  component: About,
});

function About() {
  const values = [
    { Icon: Eye, title: "Our Vision", text: "To be a global catalyst in digital innovation, empowering enterprises and local businesses alike with premium custom-engineered software.", color: "from-violet-500 to-indigo-600" },
    { Icon: Target, title: "Our Mission", text: "To design and ship robust, high-converting platforms that maximize business scale, operating efficiency, and long-term user trust.", color: "from-cyan-500 to-blue-600" },
    { Icon: Heart, title: "Our Values", text: "Rooted in radical integrity, continuous code excellence, and deep client partnerships. We build software that stands the test of time.", color: "from-emerald-500 to-teal-600" },
  ];

  return (
    <>
      <PageHeader 
        eyebrow="Who We Are" 
        title="A high-performance software agency with global vision" 
        subtitle="InfyGrid Solutions is a registered startup from Nagapattinam, Tamil Nadu. Founded by ambitious builders, we engineer products that power modern businesses." 
      />

      {/* ── VALUES SECTION ── */}
      <section className="relative py-20 bg-background overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-[10%] left-[-15%] w-[45vw] h-[45vw] rounded-full opacity-10 bg-primary/25 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] grid-dots-bg pointer-events-none" />

        <div className="container-x relative z-10 grid md:grid-cols-3 gap-8">
          {values.map(({ Icon, title, text, color }) => (
            <div 
              key={title} 
              className="card-elevated group flex flex-col h-full bg-white dark:bg-zinc-950 border border-border/80 hover:border-primary/40 rounded-3xl p-8 transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(120,119,198,0.15)]"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-14 h-14 rounded-2xl grid place-items-center text-white mb-6 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_20px_rgba(120,100,255,0.4)]" style={{ background: "var(--gradient-primary)" }}>
                <Icon size={24} />
              </div>
              <h2 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {title}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WELCOME SECTION ── */}
      <section className="relative py-20 bg-surface overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "var(--gradient-mesh)" }} />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        
        <div className="container-x relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="eyebrow"><Sparkles size={11} className="mr-1.5" /> About Agency</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight tracking-tight text-foreground">
              Welcome to <span className="gradient-text">InfyGrid Solutions</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-base">
              We are a premier software engineering startup based in Nagapattinam, Tamil Nadu. Registered proudly under **MSME** and **TNStartup**, our mission is to drive digital innovation across regional markets and national enterprises.
            </p>
            
            <ul className="mt-8 space-y-4">
              {[
                "Strategic software partner from Nagapattinam, TN",
                "Officially registered MSME & TNStartup venture",
                "High-performance custom web, mobile & ERP products",
                "Advanced SEO, search authority & growth campaigns",
                "Creative high-end UI/UX & brand assets design",
                "Dedicated post-launch engineering support",
              ].map((p, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground/80 group">
                  <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                    <CheckCircle2 size={12} className="text-primary" />
                  </span>
                  <span className="group-hover:text-foreground transition-colors duration-300">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3D Premium Tech Graphic */}
          <div className="relative">
            <div 
              className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative border border-white/10 group flex items-center justify-center p-8"
              style={{ background: "var(--gradient-hero)" }}
            >
              {/* Outer floating orbital circles */}
              <div className="absolute inset-4 rounded-full border border-white/5 animate-spin-slow pointer-events-none" />
              <div className="absolute inset-16 rounded-full border border-primary/20 animate-reverse-spin pointer-events-none" />
              <div className="absolute inset-28 rounded-full border border-accent/20 animate-spin-slow pointer-events-none" />

              {/* Glowing center emblem */}
              <div className="w-40 h-40 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 shadow-[0_0_50px_rgba(120,100,255,0.3)] flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Code2 size={40} className="text-primary-glow animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.25em] text-white/50 uppercase mt-4">Code Base</span>
              </div>

              {/* Orbiting nodes */}
              <div className="absolute top-12 left-12 w-10 h-10 rounded-xl bg-violet-500/20 backdrop-blur-md border border-violet-400/30 flex items-center justify-center text-violet-300 shadow-lg animate-float">
                <Shield size={16} />
              </div>
              <div className="absolute bottom-16 right-16 w-12 h-12 rounded-xl bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 flex items-center justify-center text-cyan-300 shadow-lg animate-float-slow">
                <Users size={20} />
              </div>
            </div>

            {/* Float Card */}
            <div className="absolute -bottom-6 -left-6 card-elevated max-w-[260px] bg-white dark:bg-zinc-950 border border-border/80 p-5 rounded-2xl shadow-xl flex items-center gap-4 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 font-extrabold text-2xl font-display">
                25+
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Scale</span>
                <span className="text-sm font-semibold text-foreground">Projects Shipped</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section className="relative py-20 bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] grid-lines-bg pointer-events-none" />
        
        <div className="container-x max-w-4xl relative z-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow">Our Journey</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">The story of InfyGrid Solutions</h2>
          </div>

          <div className="relative pl-8 md:pl-12 border-l border-primary/20 space-y-8 max-w-3xl mx-auto py-4">
            {/* Dot indicators on line */}
            <div className="absolute left-[-5px] top-4 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/20" />
            <div className="absolute left-[-5px] top-[40%] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/20" />
            <div className="absolute left-[-5px] bottom-10 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-accent/20" />

            <p className="text-lg text-foreground/80 leading-relaxed font-medium">
              “InfyGrid Solutions began as a small team of student innovators in Nagapattinam who believed Tamil Nadu's local businesses deserved world-class software — not generic, off-the-shelf tools built for someone else's market.”
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-base">
              Today we partner with brands across India, from artisan food makers and electronics retailers to AI drone startups and enterprise trusts. Every project is a chance to bring the high-energy of a young startup together with the rigour of professional engineering.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-base">
              We're proud to be TNStartup and MSME registered, and even prouder of the founders, families and teams we serve. If you're building something ambitious, we'd love to be your software partner.
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
