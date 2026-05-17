import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/service", label: "Services" },
  { to: "/project", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2.5 bg-white/80 backdrop-blur-[30px] border-b border-black/[0.06] shadow-[0_4px_24px_0_rgba(82,60,220,0.07)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[8deg]">
            <img src="/logo-icon.png" alt="InfyGrid" className="w-full h-full object-contain drop-shadow-glow" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-anton text-[1.3rem] tracking-wide gradient-text uppercase leading-[1]">InfyGrid</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary/60 mt-0.5">Solutions</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5 p-1 bg-white/60 backdrop-blur-md rounded-2xl border border-black/[0.06] shadow-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="px-4 py-2 text-[0.82rem] font-medium text-foreground/60 rounded-xl hover:text-foreground hover:bg-white/80 transition-all duration-200"
              activeProps={{ className: "px-4 py-2 text-[0.82rem] font-bold text-primary bg-white shadow-sm border border-border/40 rounded-xl" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/918825445211"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-[0.82rem] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            WhatsApp
          </a>
          <Link
            to="/contact"
            className="btn-primary text-sm py-2.5 px-5"
          >
            Get Free Consultation <ArrowRight size={15} />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${
            scrolled
              ? "text-foreground hover:bg-secondary"
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full border-t border-border bg-white/97 backdrop-blur-2xl animate-fade-up shadow-lg">
          <nav className="container-x py-5 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-4 py-3 rounded-xl text-[0.9rem] font-medium text-foreground/70 hover:text-foreground hover:bg-secondary transition-colors"
                activeProps={{ className: "px-4 py-3 rounded-xl text-[0.9rem] font-bold text-primary bg-primary/5 border border-primary/15" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="https://wa.me/918825445211"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
              <Link to="/contact" className="btn-primary justify-center">
                Get Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
