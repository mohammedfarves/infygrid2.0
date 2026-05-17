import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer 
      style={{ 
        background: "radial-gradient(circle at 50% 0%, oklch(0.18 0.06 285) 0%, oklch(0.1 0.04 268) 100%)" 
      }} 
      className="text-white border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Ambient glow decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />

      {/* Main grid */}
      <div className="container-x pt-20 pb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        
        {/* Brand Column */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-3 group w-fit">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-xl blur-md scale-0 group-hover:scale-110 transition-transform duration-300" />
              <img src="/logo-icon.png" alt="InfyGrid" className="w-10 h-10 object-contain drop-shadow-glow relative z-10 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-2xl tracking-tight bg-gradient-to-r from-white via-white to-primary-glow bg-clip-text text-transparent">
                InfyGrid
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mt-1">
                Solutions
              </span>
            </div>
          </Link>

          <p className="text-sm text-white/55 leading-relaxed">
            Premium custom software, web apps & IT services strategic partner in Nagapattinam, Tamil Nadu. Elevating local and global businesses with state-of-the-art engineering.
          </p>

          <div>
            <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.1)]">
              <Sparkles size={11} /> MSME & TNStartup Registered
            </span>
          </div>

          {/* Social Links */}
          <div className="flex gap-2.5">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/company/infygrid-solutions" },
              { Icon: Twitter, href: "https://twitter.com/infygrids" },
              { Icon: Instagram, href: "https://instagram.com/infygrid" },
              { Icon: Facebook, href: "https://facebook.com/infygrid" }
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social Link"
                className="w-10 h-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:bg-primary/25 hover:text-white hover:border-primary/40 hover:scale-110 hover:shadow-[0_0_15px_rgba(120,100,255,0.3)] transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Company Column */}
        <div>
          <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-6 relative w-fit">
            Company
            <span className="absolute bottom-[-6px] left-0 w-8 h-[2px] bg-primary rounded-full" />
          </h3>
          <ul className="space-y-3.5 text-sm text-white/60">
            {[
              { to: "/about", label: "About Us" },
              { to: "/service", label: "Our Services" },
              { to: "/project", label: "Portfolio" },
              { to: "/blog", label: "Blog Insights" },
              { to: "/contact", label: "Contact Us" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link 
                  to={to} 
                  className="hover:text-primary-glow hover:translate-x-1.5 inline-flex items-center gap-1.5 transition-all duration-300"
                >
                  <ChevronRight size={12} className="text-primary opacity-0 -ml-3 hover:ml-0 group-hover:opacity-100 transition-all duration-300" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-6 relative w-fit">
            Services
            <span className="absolute bottom-[-6px] left-0 w-8 h-[2px] bg-primary rounded-full" />
          </h3>
          <ul className="space-y-3.5 text-sm text-white/60">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link 
                  to={s.path} 
                  className="hover:text-primary-glow hover:translate-x-1.5 inline-flex items-center gap-1.5 transition-all duration-300"
                >
                  <ChevronRight size={12} className="text-primary opacity-0 -ml-3 hover:ml-0 group-hover:opacity-100 transition-all duration-300" />
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-6 relative w-fit">
            Get in Touch
            <span className="absolute bottom-[-6px] left-0 w-8 h-[2px] bg-primary rounded-full" />
          </h3>
          <ul className="space-y-4 text-sm text-white/60">
            <li>
              <a 
                href="tel:+918825445211" 
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-white/15 hover:text-white transition-all duration-300 shadow-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-primary-glow" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-white/40">Call Us</span>
                  <span className="font-semibold text-white/90">+91 8825 445 211</span>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="mailto:support@infygrid.in" 
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-white/15 hover:text-white transition-all duration-300 shadow-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-primary-glow" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-white/40">Email Us</span>
                  <span className="font-semibold text-white/90">support@infygrid.in</span>
                </div>
              </a>
            </li>
            <li className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/8 shadow-sm">
              <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <MapPin size={14} className="text-primary-glow" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-white/40">Location</span>
                <span className="font-semibold text-white/90">Nagapattinam, TN, India</span>
              </div>
            </li>
          </ul>

          <Link
            to="/contact"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-primary/20 border border-primary/30 hover:bg-primary/45 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(120,100,255,0.25)] px-5 py-3 rounded-2xl transition-all duration-300 group"
          >
            Get Free Consultation
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] relative z-10">
        <div className="container-x py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/40">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <p>© {new Date().getFullYear()} InfyGrid Solutions. All rights reserved.</p>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />
            <p className="flex items-center gap-1.5">
              Developed by{" "}
              <a
                href="https://www.infygrid.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white/70 hover:text-primary-glow transition-colors underline decoration-primary/30 underline-offset-4"
              >
                InfyGrid Solutions
              </a>
            </p>
          </div>
          <div className="flex gap-6 font-semibold">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
