import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  return (
    <section className="section">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-start">
        {/* Left: info + trust */}
        <div>
          <span className="eyebrow">Get In Touch</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Ready to start your{" "}
            <span className="gradient-text">website project?</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-lg leading-relaxed">
            Tell us about your business and we'll get back to you with a transparent quote within <strong>24 hours</strong>. No pressure, no jargon.
          </p>

          {/* Trust items */}
          <ul className="mt-7 space-y-3">
            {[
              "Free consultation — no commitment required",
              "Transparent pricing, no hidden fees",
              "Projects delivered on time, every time",
              "Ongoing support after launch",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Contact options */}
          <div className="mt-8 space-y-3">
            <a
              href="tel:+918825445211"
              className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-primary/40 hover:bg-primary/3 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl grid place-items-center text-primary-foreground shrink-0 shadow-sm" style={{ background: "var(--gradient-primary)" }}>
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-0.5">Call / WhatsApp</p>
                <p className="font-semibold group-hover:text-primary transition-colors">+91 8825 445 211</p>
              </div>
            </a>

            <a
              href="mailto:support@infygrid.in"
              className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-primary/40 hover:bg-primary/3 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl grid place-items-center text-primary-foreground shrink-0 shadow-sm" style={{ background: "var(--gradient-primary)" }}>
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-0.5">Email</p>
                <p className="font-semibold group-hover:text-primary transition-colors">support@infygrid.in</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl border border-border">
              <div className="w-11 h-11 rounded-xl grid place-items-center text-primary-foreground shrink-0 shadow-sm" style={{ background: "var(--gradient-primary)" }}>
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-0.5">Location</p>
                <p className="font-semibold">Nagapattinam, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <form
          className="card-elevated"
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.currentTarget as HTMLFormElement;
            const data = new FormData(f);
            const body = encodeURIComponent(
              `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nInterest: ${data.get("interest")}\n\n${data.get("message")}`
            );
            window.location.href = `mailto:support@infygrid.in?subject=Project Enquiry&body=${body}`;
          }}
        >
          <h3 className="font-display text-2xl font-bold">Send us a message</h3>
          <p className="text-muted-foreground text-sm mt-1.5">We typically reply within a few hours.</p>

          <div className="mt-6 grid gap-4">
            <input
              required
              name="name"
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl border border-input bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all text-sm placeholder:text-muted-foreground/60"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-xl border border-input bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all text-sm placeholder:text-muted-foreground/60"
              />
              <input
                name="phone"
                placeholder="Phone number"
                className="w-full px-4 py-3 rounded-xl border border-input bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all text-sm placeholder:text-muted-foreground/60"
              />
            </div>
            <select
              name="interest"
              className="w-full px-4 py-3 rounded-xl border border-input bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all text-sm text-muted-foreground"
            >
              <option>Select a service</option>
              <option>Website Development</option>
              <option>Mobile App Development</option>
              <option>Digital Marketing</option>
              <option>UI/UX Design</option>
              <option>ERP & CRM Solutions</option>
              <option>SEO Optimization</option>
            </select>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell us about your project — what do you need?"
              className="w-full px-4 py-3 rounded-xl border border-input bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all text-sm resize-none placeholder:text-muted-foreground/60"
            />
            <button type="submit" className="btn-primary w-full justify-center">
              <MessageCircle size={17} /> Send Message
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Or{" "}
              <a
                href="https://wa.me/918825445211"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 font-semibold hover:underline"
              >
                chat directly on WhatsApp
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export function CTABand() {
  return (
    <section className="section">
      <div className="container-x">
        <div
          className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
          style={{ background: "var(--gradient-hero)" }}
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: "linear-gradient(rgba(120,100,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(120,100,255,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Glow orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-30" style={{ background: "radial-gradient(circle, oklch(0.62 0.28 310 / 0.6) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-20" style={{ background: "radial-gradient(circle, oklch(0.72 0.18 195 / 0.6) 0%, transparent 70%)" }} />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 border border-white/15 text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Free Consultation Available
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight tracking-tight">
              Ready to get a professional website for your business?
            </h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto text-lg leading-relaxed">
              Join 25+ businesses that trust InfyGrid Solutions. Get a transparent quote in 24 hours.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="btn-glow"
                style={{ background: "white", color: "oklch(0.14 0.04 260)" }}
              >
                Get Free Consultation <ArrowRight size={17} />
              </Link>
              <a
                href="https://wa.me/918825445211"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-dark"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
