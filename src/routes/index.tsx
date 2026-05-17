import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight, Sparkles, Rocket, Shield, Clock, Award,
  CheckCircle2, Globe, Star, ChevronDown, MessageCircle,
  Zap, Users, HeartHandshake, TrendingUp, Phone, Palette
} from "lucide-react";
import { buildHead } from "@/components/SEO";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { ServiceCard, ProjectCard } from "@/components/Cards";
import { CTABand, ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  head: () =>
    buildHead({
      title: "InfyGrid Solutions — Software Company in Nagapattinam | Web, Mobile, ERP",
      description:
        "InfyGrid Solutions is your strategic software partner in Nagapattinam, Tamil Nadu. We craft high-performance web apps, mobile apps, ERP/CRM systems and AI-driven business solutions.",
      path: "/",
    }),
  component: Home,
});

const techStack = [
  "React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "Firebase",
  "Tailwind CSS", "Figma", "React Native", "AWS", "Razorpay", "TypeScript",
  "PHP / Laravel", "WordPress", "SEO Tools",
];

const why = [
  { Icon: Rocket, title: "Fast Delivery", text: "We ship projects on time, every time. No delays, no excuses — just results.", color: "from-violet-500 to-purple-600" },
  { Icon: Shield, title: "Secure & Scalable", text: "Built to grow with your business. Enterprise-grade security baked in from day one.", color: "from-blue-500 to-cyan-500" },
  { Icon: Clock, title: "24/7 Support", text: "Dedicated post-launch support so your website always stays online and running.", color: "from-emerald-500 to-teal-500" },
  { Icon: Award, title: "Affordable Pricing", text: "Premium quality at competitive rates. Maximum value for your investment.", color: "from-orange-500 to-amber-500" },
];

const processSteps = [
  { step: "01", title: "Discovery Call", text: "We understand your business goals, target audience, and project requirements.", icon: MessageCircle },
  { step: "02", title: "Design & Prototype", text: "We create high-fidelity designs tailored to your brand identity and user experience.", icon: Palette },
  { step: "03", title: "Build & Develop", text: "Our engineers build a fast, secure, and scalable solution using modern tech.", icon: Zap },
  { step: "04", title: "Launch & Support", text: "We deploy your project and provide ongoing support to keep it performing.", icon: Rocket },
];

const testimonials = [
  {
    name: "Arul Prakash",
    role: "Founder & CEO",
    company: "AGS Healthy Foods",
    quote: "InfyGrid developed a fully customized diet food ordering platform tailored to our business model. The system streamlined our order management and improved our customer experience significantly.",
    rating: 5,
  },
  {
    name: "Jaya Prakash",
    role: "CEO",
    company: "Sri Krishna Digital World",
    quote: "InfyGrid delivered a powerful custom-built solution with integrated payment gateway and DLT-based OTP authentication. The website handles high product volume efficiently.",
    rating: 5,
  },
  {
    name: "Sri Jagan",
    role: "Founder",
    company: "Violin Sri Jagan",
    quote: "The portfolio website perfectly represents my musical journey. After launching the site, I noticed a clear increase in inquiries and event bookings.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "A typical business website takes 2–4 weeks. Complex platforms like e-commerce or custom web apps may take 6–12 weeks depending on scope. We'll give you a clear timeline upfront.",
  },
  {
    q: "How much does a website cost?",
    a: "Our websites start from ₹8,000 for simple landing pages and go up based on features. We offer transparent pricing with no hidden charges. Contact us for a free quote.",
  },
  {
    q: "Do you provide website maintenance after launch?",
    a: "Yes! We offer affordable monthly maintenance plans that include updates, backups, performance monitoring, and 24/7 support.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We specialize in modernizing outdated websites while preserving your SEO rankings and existing content. Many of our clients come to us for redesigns.",
  },
  {
    q: "Do you work with businesses outside Nagapattinam?",
    a: "Yes, we work with clients across Tamil Nadu and all over India. We communicate via WhatsApp, calls, and video meetings for full remote collaboration.",
  },
  {
    q: "What types of businesses do you build websites for?",
    a: "We've built websites for shops, hostels, schools, NGOs, agencies, restaurants, hospitals, portfolios, startups, and more. Any business that needs a strong online presence.",
  },
];



function Home() {
  const dynamicWords = [
    "Websites",
    "Apps",
    "ERP Systems",
    "CMS Solutions",
    "LLM Integrations",
    "UI/UX Designs",
    "Graphics",
    "Billing Software",
    "Custom Software"
  ];
  
  const statusTags = [
    "Available for New Projects",
    "MSME Registered Startup",
    "Next-Gen Software Studio",
    "Strategic Tech Partner"
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  const [tagIndex, setTagIndex] = useState(0);
  const [tagVisible, setTagVisible] = useState(true);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % dynamicWords.length);
        setWordVisible(true);
      }, 300);
    }, 2800);

    const tagInterval = setInterval(() => {
      setTagVisible(false);
      setTimeout(() => {
        setTagIndex((prev) => (prev + 1) % statusTags.length);
        setTagVisible(true);
      }, 300);
    }, 4500);

    return () => {
      clearInterval(wordInterval);
      clearInterval(tagInterval);
    };
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        {/* Grid lines overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(120,100,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(120,100,255,0.12) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Ambient glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full opacity-30 animate-float-slow" style={{ background: "radial-gradient(circle, oklch(0.62 0.28 310 / 0.5) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-15%] left-[-10%] w-[45vw] h-[45vw] rounded-full opacity-20 animate-float" style={{ background: "radial-gradient(circle, oklch(0.72 0.18 195 / 0.5) 0%, transparent 70%)" }} />
        <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] rounded-full opacity-15" style={{ background: "radial-gradient(circle, oklch(0.52 0.24 268 / 0.4) 0%, transparent 70%)" }} />

        {/* Mesh overlay */}
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "var(--gradient-mesh)" }} />

        <div className="container-x relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Elegant glassmorphic pulsing live status container */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 backdrop-blur-md mb-6 max-w-[95%] mx-auto animate-fade-up shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-300 transform text-[10px] font-bold uppercase tracking-[0.18em]">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className={`transition-all duration-300 ${tagVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}`}>
                {statusTags[tagIndex]}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight animate-fade-up" style={{ animationDelay: "0.05s" }}>
              We Build
              <br />
              <span className={`inline-block transition-all duration-300 transform ${wordVisible ? "opacity-100 translate-y-0 shimmer-text" : "opacity-0 -translate-y-2 text-primary"}`}>
                {dynamicWords[wordIndex]}
              </span>
              <br />
              <span className="text-white/90">That Grow Your Business</span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-7 text-lg md:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.12s" }}>
              From local shops to funded startups — we design, develop & launch{" "}
              <strong className="text-white/80 font-semibold">fast, beautiful, and conversion-focused websites</strong>{" "}
              that turn visitors into customers.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/contact" className="btn-glow animate-pulse-glow text-sm">
                Get Free Consultation <ArrowRight size={16} />
              </Link>
              <Link to="/project" className="btn-ghost-dark text-sm">
                View Our Work <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/918825445211"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 hover:bg-emerald-500/30 hover:border-emerald-400/50 transition-all duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                WhatsApp Expert
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-white/45 text-xs font-medium animate-fade-up" style={{ animationDelay: "0.28s" }}>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-400" /> Free Consultation</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-400" /> No Hidden Charges</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-400" /> 24/7 Support</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-400" /> MSME Registered</span>
            </div>
          </div>

          {/* Stat cards */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.35s" }}>
            {[
              { value: "25+", label: "Projects Delivered", icon: TrendingUp },
              { value: "15+", label: "Expert Team", icon: Users },
              { value: "3+", label: "Years Experience", icon: Clock },
              { value: "24/7", label: "Client Support", icon: HeartHandshake },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="glass-panel rounded-2xl p-4 text-center group hover:bg-white/8 transition-all duration-300">
                <Icon size={18} className="mx-auto mb-2 text-white/40 group-hover:text-violet-300 transition-colors" />
                <p className="text-2xl md:text-3xl font-bold text-white tracking-tight font-display">{value}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40 mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* Scroll cue */}
          <div className="mt-14 flex justify-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <div className="flex flex-col items-center gap-2 text-white/25 text-[10px] font-medium uppercase tracking-widest">
              <span>Scroll</span>
              <ChevronDown size={16} className="animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTS MARQUEE ── */}
      <section className="py-10 border-y border-border bg-surface overflow-hidden">
        <div className="container-x mb-6">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
            Trusted by businesses across Tamil Nadu & India
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-10 items-center animate-marquee w-max">
            {[...projects, ...projects].map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white border border-border/60 shadow-sm whitespace-nowrap text-sm font-semibold text-foreground/70"
              >
                <Globe size={12} className="text-primary/50" />
                {p.client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="container-x">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Our Services</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              Everything your business needs{" "}
              <span className="gradient-text">online</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              We're not a template agency. Every project is custom-built for your business goals, your audience, and your growth.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(0, 6).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/service" className="btn-primary">
              View All Services <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-outline text-sm">
              Get a Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US (dark section) ── */}
      <section className="section relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(140,120,255,0.2) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "var(--gradient-mesh)" }} />

        <div className="container-x relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow-light">Why Choose InfyGrid</span>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Built for businesses that want{" "}
              <span className="shimmer-text">real results</span>
            </h2>
            <p className="mt-5 text-white/60 text-lg">
              We don't just deliver code — we deliver growth. Here's what makes us different.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {why.map(({ Icon, title, text, color }) => (
              <div key={title} className="card-dark group text-center">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-400`}>
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-glow text-sm">
              Start Your Project <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/918825445211"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-dark text-sm"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section className="section bg-surface">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Our Process</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              From idea to live website in{" "}
              <span className="gradient-text">4 simple steps</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              A proven process that delivers on time, every time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map(({ step, title, text, icon: Icon }, i) => (
              <div
                key={step}
                className="card-elevated relative group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Step number */}
                <div className="text-5xl font-bold font-display opacity-[0.07] absolute top-4 right-5 select-none">{step}</div>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-primary bg-primary/8 mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-400 group-hover:scale-110">
                  <Icon size={20} />
                </div>

                {/* Connector dot */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 h-6 rounded-full border-2 border-border bg-background z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary/30" />
                  </div>
                )}

                <div className="text-xs font-bold uppercase tracking-[0.15em] text-primary/60 mb-2">Step {step}</div>
                <h3 className="font-display text-lg font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/contact" className="btn-primary">
              Book a Free Discovery Call <Phone size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <span className="eyebrow">Our Work</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                Real websites for{" "}
                <span className="gradient-text">real businesses</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Explore our portfolio of custom websites, apps, and digital platforms.
              </p>
            </div>
            <Link to="/project" className="btn-outline text-sm shrink-0">
              All Projects <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.slice(0, 3).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="container-x">
          <div className="text-center mb-10">
            <span className="eyebrow">Technology Stack</span>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight">
              Built with modern, proven technologies
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {techStack.map((tech) => (
              <span key={tech} className="tech-chip cursor-default">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">Client Reviews</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              What our clients{" "}
              <span className="gradient-text">say about us</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <figure key={t.name} className="card-elevated flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-foreground/80 text-sm leading-relaxed flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border/60 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0" style={{ background: "var(--gradient-primary)" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section bg-surface">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                Common questions{" "}
                <span className="gradient-text">answered</span>
              </h2>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                Still have questions? We're always happy to help.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/918825445211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  <MessageCircle size={16} /> Ask on WhatsApp
                </a>
                <Link to="/contact" className="btn-outline text-sm">
                  Send a Message
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="faq-item card-elevated p-0 overflow-hidden group">
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer">
                    <span className="font-display font-semibold text-[0.95rem]">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className="faq-chevron shrink-0 text-muted-foreground group-open:text-primary transition-all"
                    />
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-muted-foreground text-sm leading-relaxed border-t border-border/60">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
      <ContactSection />
    </>
  );
}
