import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { 
  ArrowRight, Check, ArrowUpRight, Laptop, Smartphone, Tablet, 
  Sparkles, Play, Calendar, User, TrendingUp, Plus, 
  Search, Shield, Code, Heart, Layers, ShoppingBag, 
  Music, MapPin, Volume2, Key, Star, Clock 
} from "lucide-react";
import type { Service } from "@/data/services";
import type { Project } from "@/data/projects";
import type { Blog } from "@/data/blogs";
import { PageHeader } from "@/components/SEO";
import { CTABand } from "@/components/ContactSection";

export function ServiceDetailView({ service }: { service: Service }) {
  return (
    <>
      <PageHeader eyebrow={service.shortTitle} title={service.title} subtitle={service.tagline} />

      <section className="section">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Overview</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{service.description}</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold">What you get</h2>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                    <Check size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Why teams choose us</h2>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {service.benefits.map((b) => (
                  <div key={b.title} className="card-elevated">
                    <h3 className="font-display font-bold">{b.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Our process</h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {service.process.map((p) => (
                  <div key={p.step} className="p-5 rounded-2xl border border-border">
                    <div className="text-3xl font-display font-bold text-primary/30">{p.step}</div>
                    <h3 className="mt-2 font-display font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 self-start">
            <div className="card-elevated">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tech stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.techStack.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium">{t}</span>
                ))}
              </div>
            </div>
            <div className="card-elevated" style={{ background: "var(--gradient-hero)", borderColor: "transparent" }}>
              <h3 className="font-display text-xl font-bold text-white">Ready to start?</h3>
              <p className="mt-2 text-sm text-white/80">Get a transparent quote within 24 hours.</p>
              <Link to="/contact" className="btn-primary mt-5 w-full" style={{ background: "white", color: "var(--primary)", boxShadow: "none" }}>
                Get a quote <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CTABand />
    </>
  );
}

/* ──────────────────────────────────────────────────────── */
/* ─── NEW INTERACTIVE CLIENT SYSTEM SCREENSHOT SIMULATOR ─── */
/* ──────────────────────────────────────────────────────── */

function InteractiveDeviceSimulator({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<1 | 2>(1);

  // High fidelity customized mock interfaces for all 11 projects
  const renderSimulatedUI = () => {
    const isTab1 = activeTab === 1;

    switch (project.slug) {
      case "trueluxe":
        return isTab1 ? (
          <div className="p-4 bg-zinc-950 text-white font-mono text-xs h-full flex flex-col gap-3">
            <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
              <span className="text-[10px] text-zinc-400">TRUELUXE BROKERAGE PORTAL</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-bold">SOCKET LIVE</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 bg-zinc-900 border border-zinc-800 rounded">
                <p className="text-[9px] text-zinc-500">NIFTY 50</p>
                <p className="text-sm font-bold text-emerald-400">22,146.50</p>
                <p className="text-[8px] text-emerald-500">+1.24%</p>
              </div>
              <div className="p-2 bg-zinc-900 border border-zinc-800 rounded">
                <p className="text-[9px] text-zinc-500">SENSEX</p>
                <p className="text-sm font-bold text-emerald-400">72,708.15</p>
                <p className="text-[8px] text-emerald-500">+1.16%</p>
              </div>
              <div className="p-2 bg-zinc-900 border border-zinc-800 rounded">
                <p className="text-[9px] text-zinc-500">PORTFOLIO</p>
                <p className="text-sm font-bold text-primary-glow">₹4,82,910</p>
                <p className="text-[8px] text-zinc-400">24 Hold</p>
              </div>
            </div>
            <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded p-3 relative overflow-hidden flex flex-col justify-end">
              <div className="absolute inset-x-2 top-2 flex justify-between text-[8px] text-zinc-500">
                <span>STOCK REALTIME PERFORMANCE</span>
                <span className="text-emerald-400">₹TRUX 248.60 (+8.4%)</span>
              </div>
              {/* Simulated Candlestick chart grid */}
              <div className="h-20 w-full flex items-end justify-between gap-1 pb-1">
                {[40, 55, 48, 68, 60, 85, 74, 98, 92, 110, 102, 128].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                    <div className="w-[2px] bg-emerald-500/30 h-12" />
                    <div className="w-full bg-emerald-500 rounded-sm" style={{ height: `${h}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-zinc-950 text-white font-mono text-xs h-full flex flex-col gap-3">
            <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
              <span className="text-[10px] text-zinc-400">CONVERSION & STRATEGY PANEL</span>
              <span className="text-indigo-400 text-[10px]">ACTIVE ADS</span>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-3">
              <div className="bg-zinc-900 border border-zinc-800 p-3 rounded flex flex-col justify-between">
                <div>
                  <p className="text-[10px] text-zinc-400">Total Leads</p>
                  <p className="text-xl font-bold mt-1 text-white">4,812</p>
                </div>
                <div className="text-[9px] text-emerald-400 flex items-center gap-1 font-sans font-bold">
                  <TrendingUp size={10} /> +120% conversion spike
                </div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-3 rounded flex flex-col justify-between">
                <div>
                  <p className="text-[10px] text-zinc-400">Bounce rate</p>
                  <p className="text-xl font-bold mt-1 text-white">24.2%</p>
                </div>
                <div className="text-[9px] text-emerald-400 font-bold">-32% Optimised</div>
              </div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded text-[9px] space-y-1.5">
              <p className="text-zinc-500 font-bold">RECENT CAMPAIGN TRIGGERS</p>
              <div className="flex justify-between text-zinc-300">
                <span>Google-Ads/Brokerage-Launch</span>
                <span className="text-emerald-400">ACTIVE</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>Facebook-Ads/Wealth-Promo</span>
                <span className="text-emerald-400">ACTIVE</span>
              </div>
            </div>
          </div>
        );

      case "ebat-ai-drone-technology":
        return isTab1 ? (
          <div className="p-4 bg-slate-950 text-cyan-400 font-mono text-[10px] h-full flex flex-col gap-3">
            <div className="flex justify-between items-center pb-2 border-b border-cyan-800/40">
              <span>EBAT AUTONOMOUS HUD SYSTEM</span>
              <span className="text-rose-500 animate-pulse font-bold">SYS ACTIVE</span>
            </div>
            <div className="flex-1 bg-slate-900 border border-cyan-500/20 rounded relative p-2 overflow-hidden flex flex-col justify-between">
              {/* Telemetry coordinate marks */}
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-10 border border-cyan-500/20 pointer-events-none" />
              <div className="flex justify-between text-[8px] text-cyan-500/70">
                <span>ALT: 120M</span>
                <span>BATTERY: 88%</span>
                <span>WIND: 4.2 KT</span>
              </div>
              {/* Drone center hud crosshair */}
              <div className="w-12 h-12 rounded-full border border-dashed border-cyan-500/40 mx-auto my-4 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              </div>
              <div className="flex justify-between text-[8px] text-cyan-500/70">
                <span>LAT: 10.76° N</span>
                <span>LNG: 79.84° E</span>
                <span className="text-emerald-400">GPS MATCH</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-slate-950 text-cyan-400 font-mono text-[10px] h-full flex flex-col gap-3">
            <div className="flex justify-between items-center pb-2 border-b border-cyan-800/40">
              <span>AI SCAN TELEMETRY</span>
              <span className="text-emerald-400">CROP STABILITY</span>
            </div>
            <div className="flex-1 bg-slate-900 border border-cyan-500/20 rounded p-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex justify-between text-[9px]">
                  <span>AI Crop Analysis</span>
                  <span className="text-emerald-400 font-bold">Optimal 94%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-cyan-400 h-full rounded-full" style={{ width: "94%" }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[9px]">
                  <span>Structural Integrity</span>
                  <span className="text-cyan-300 font-bold">Safe 98%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-cyan-400 h-full rounded-full" style={{ width: "98%" }} />
                </div>
              </div>
              <div className="bg-slate-950/80 p-2 border border-cyan-500/10 rounded text-[8px] text-cyan-500/60 leading-relaxed">
                SYS STATUS: Autopilot operational. Multi-spectral camera feeding telemetry. Nagapattinam testing ground coordinates mapped successfully.
              </div>
            </div>
          </div>
        );

      case "violin-sri-jagan-portfolio":
        return isTab1 ? (
          <div className="p-4 bg-stone-950 text-stone-200 font-serif h-full flex flex-col gap-3">
            <div className="flex justify-between items-center pb-1.5 border-b border-stone-800 font-sans text-[9px] uppercase tracking-wider text-stone-500">
              <span>Violin Sri Jagan</span>
              <span className="text-amber-500/80">Premium Audio</span>
            </div>
            <div className="flex-1 bg-stone-900 border border-stone-800 rounded-2xl p-4 flex flex-col items-center justify-between text-center">
              {/* Rotating record */}
              <div className="w-20 h-20 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-lg relative animate-reverse-spin">
                <div className="absolute inset-2 rounded-full border border-stone-800" />
                <div className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center">
                  <Music size={10} className="text-amber-400" />
                </div>
              </div>
              <div className="font-sans">
                <p className="text-xs font-bold tracking-tight text-white">Carnatic Raga Devagandhari</p>
                <p className="text-[10px] text-stone-400 mt-0.5">Violin Solo Recital</p>
              </div>
              <div className="w-full flex items-center justify-center gap-3">
                <Volume2 size={12} className="text-stone-500" />
                <div className="flex-1 h-1 bg-stone-800 rounded-full relative">
                  <div className="absolute left-0 top-0 bottom-0 bg-amber-500 rounded-full" style={{ width: "42%" }} />
                </div>
                <Play size={12} className="text-amber-500 fill-current" />
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-stone-950 text-stone-200 font-sans text-xs h-full flex flex-col gap-3">
            <div className="pb-1.5 border-b border-stone-800 text-[10px] text-stone-500 font-bold uppercase tracking-wider">
              Concert Booking Portal
            </div>
            <div className="flex-1 space-y-2.5 overflow-y-auto pr-1">
              {[
                { date: "Oct 12", location: "Music Academy Hall, Chennai" },
                { date: "Nov 04", location: "Vellore Heritage Concert Auditorium" },
                { date: "Dec 25", location: "Nagapattinam Cultural Recital Event" }
              ].map((c, i) => (
                <div key={i} className="bg-stone-900 border border-stone-800/80 p-2.5 rounded-xl flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[8px] uppercase tracking-wider text-amber-500 font-bold">{c.date}</span>
                    <span className="text-[10px] font-semibold text-white mt-0.5">{c.location}</span>
                  </div>
                  <span className="text-[8px] bg-amber-500/10 border border-amber-500/30 text-amber-400 px-2 py-0.5 rounded-full font-bold">BOOKED</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "lumina-trust":
        return isTab1 ? (
          <div className="p-4 bg-emerald-950/20 text-emerald-900 dark:text-emerald-100 font-sans h-full flex flex-col gap-3">
            <div className="flex justify-between items-center pb-2 border-b border-emerald-900/10">
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">LUMINA TRUST FUNDING</span>
              <span className="text-[9px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold">100% SECURE</span>
            </div>
            <div className="flex-1 bg-white dark:bg-zinc-900 border border-emerald-500/10 rounded-2xl p-4 flex flex-col justify-between shadow-sm">
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Active Program: Orphan Feeding</p>
                <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">₹4,85,600</p>
                <p className="text-[10px] text-muted-foreground">Goal: ₹5,000,000 (97% Raised)</p>
              </div>
              <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2 overflow-hidden mt-2">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: "97%" }} />
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {["₹1,000", "₹5,000", "₹10,000"].map((t) => (
                  <button key={t} className="p-1.5 rounded-xl border border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/30 text-[10px] font-bold text-center text-emerald-600 dark:text-emerald-400">
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-emerald-950/20 text-emerald-900 dark:text-emerald-100 font-sans h-full flex flex-col gap-3">
            <div className="pb-2 border-b border-emerald-900/10 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
              ACTIVE PROGRAM TRACKS
            </div>
            <div className="flex-1 space-y-2 overflow-y-auto">
              {[
                { title: "Nagapattinam Feeding Program", cap: "1,200 Children", status: "Active" },
                { title: "Smart School Lab Buildout", cap: "450 Students", status: "Complete" },
                { title: "Local Artisans Direct Grant", cap: "45 Families", status: "In Progress" }
              ].map((p, i) => (
                <div key={i} className="bg-white dark:bg-zinc-900 p-2.5 rounded-xl border border-emerald-500/10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-zinc-800 dark:text-zinc-200">{p.title}</p>
                    <p className="text-[8px] text-muted-foreground mt-0.5">Impact: {p.cap}</p>
                  </div>
                  <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${p.status === "Complete" ? "bg-emerald-500/10 text-emerald-500" : "bg-primary/10 text-primary"}`}>
                    {p.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );

      case "maha-hostel":
        return isTab1 ? (
          <div className="p-4 bg-zinc-950 text-white font-sans text-xs h-full flex flex-col gap-3">
            <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
              <span className="text-[10px] text-zinc-400 font-bold">MAHA DELUXE ROOM MONITOR</span>
              <span className="text-emerald-400 text-[10px] font-bold">LIVE MATRIX</span>
            </div>
            <div className="flex-1 grid grid-cols-4 gap-2">
              {[
                { room: "101", status: "occupied" }, { room: "102", status: "vacant" },
                { room: "103", status: "occupied" }, { room: "104", status: "occupied" },
                { room: "201", status: "vacant" }, { room: "202", status: "occupied" },
                { room: "203", status: "occupied" }, { room: "204", status: "vacant" }
              ].map((r, i) => (
                <div 
                  key={i} 
                  className={`p-2 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${
                    r.status === "occupied" 
                      ? "bg-rose-500/10 border-rose-500/20 text-rose-400" 
                      : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                  }`}
                >
                  <span className="text-[10px] font-extrabold">{r.room}</span>
                  <span className="text-[7px] uppercase tracking-wider mt-0.5 opacity-80">{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-4 bg-zinc-950 text-white font-sans text-xs h-full flex flex-col gap-3">
            <div className="pb-2 border-b border-zinc-800 text-[10px] text-zinc-400 font-bold">
              BILLING & LEDGER AUDIT
            </div>
            <div className="flex-1 space-y-2 overflow-y-auto">
              {[
                { name: "Divya R.", room: "101", amount: "₹8,500", status: "Paid" },
                { name: "Priya S.", room: "202", amount: "₹9,200", status: "Pending" },
                { name: "Sandhya M.", room: "103", amount: "₹8,500", status: "Paid" }
              ].map((l, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800/80 p-2.5 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-white">{l.name}</p>
                    <p className="text-[8px] text-zinc-400 mt-0.5">AC Deluxe Room {l.room}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-white">{l.amount}</p>
                    <span className={`text-[7px] font-bold uppercase tracking-wider ${l.status === "Paid" ? "text-emerald-400" : "text-amber-400"}`}>{l.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "haleem-fx":
        return isTab1 ? (
          <div className="p-4 bg-slate-950 text-rose-500 font-mono text-[9px] h-full flex flex-col gap-3">
            <div className="flex justify-between items-center pb-2 border-b border-rose-950/40">
              <span className="font-bold text-rose-400">HALEEM FX MACRO HUD</span>
              <span className="text-rose-400 animate-pulse">LIVE TRACKING</span>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-2">
              <div className="bg-slate-900 border border-rose-950/50 p-2.5 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-[7px] text-slate-500 uppercase tracking-widest font-bold">PROTEIN</span>
                  <p className="text-lg font-black text-rose-400 mt-0.5">145g</p>
                </div>
                <span className="text-[7px] text-slate-400">Target 180g</span>
              </div>
              <div className="bg-slate-900 border border-rose-950/50 p-2.5 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-[7px] text-slate-500 uppercase tracking-widest font-bold">CARBS</span>
                  <p className="text-lg font-black text-emerald-400 mt-0.5">220g</p>
                </div>
                <span className="text-[7px] text-slate-400">Target 250g</span>
              </div>
              <div className="bg-slate-900 border border-rose-950/50 p-2.5 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-[7px] text-slate-500 uppercase tracking-widest font-bold">FATS</span>
                  <p className="text-lg font-black text-cyan-400 mt-0.5">55g</p>
                </div>
                <span className="text-[7px] text-slate-400">Target 70g</span>
              </div>
              <div className="bg-slate-900 border border-rose-950/50 p-2.5 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-[7px] text-slate-500 uppercase tracking-widest font-bold">CALORIES</span>
                  <p className="text-lg font-black text-white mt-0.5">1,955 kcal</p>
                </div>
                <span className="text-[7px] text-slate-400">Target 2,400 kcal</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-slate-950 text-rose-500 font-mono text-[9px] h-full flex flex-col gap-3">
            <div className="pb-2 border-b border-rose-950/40 text-rose-400 font-bold uppercase tracking-widest">
              NUTRITION DAILY LOG
            </div>
            <div className="flex-1 space-y-2 overflow-y-auto">
              {[
                { food: "Grilled Chicken Breast (200g)", p: "62g Protein", cal: "330 kcal" },
                { food: "Organic Whey Shake + Milk", p: "32g Protein", cal: "240 kcal" },
                { food: "Brown Rice + Egg Whites", p: "24g Protein", cal: "410 kcal" }
              ].map((n, i) => (
                <div key={i} className="bg-slate-900 border border-rose-950/30 p-2 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-bold text-white">{n.food}</p>
                    <p className="text-[7px] text-rose-400 mt-0.5">{n.p}</p>
                  </div>
                  <span className="text-[8px] bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded font-bold">{n.cal}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "ags-healthy-foods":
        return isTab1 ? (
          <div className="p-4 bg-emerald-950/20 text-emerald-900 dark:text-emerald-100 font-sans h-full flex flex-col gap-3">
            <div className="flex justify-between items-center pb-2 border-b border-emerald-950/10">
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">AGS HEALTHY MEALS</span>
              <span className="text-[9px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold">DIET PLAN</span>
            </div>
            <div className="flex-1 space-y-2 overflow-y-auto">
              {[
                { day: "MON", meal: "Keto Avocado Egg Toast", cal: "420 Kcal" },
                { day: "TUE", meal: "Premium Mediterranean Salad", cal: "380 Kcal" },
                { day: "WED", meal: "High-Protein Salmon Bowl", cal: "510 Kcal" }
              ].map((m, i) => (
                <div key={i} className="bg-white dark:bg-zinc-900 p-2.5 rounded-xl border border-emerald-500/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0">{m.day}</span>
                    <div>
                      <p className="text-[10px] font-bold text-zinc-800 dark:text-zinc-200">{m.meal}</p>
                      <p className="text-[8px] text-muted-foreground mt-0.5">Calorie mark: {m.cal}</p>
                    </div>
                  </div>
                  <Check size={12} className="text-emerald-500" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-4 bg-emerald-950/20 text-emerald-900 dark:text-emerald-100 font-sans h-full flex flex-col gap-3">
            <div className="pb-2 border-b border-emerald-950/10 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
              SECURE RAZORPAY GATEWAY
            </div>
            <div className="flex-1 bg-white dark:bg-zinc-900 border border-emerald-500/10 rounded-2xl p-4 flex flex-col justify-between shadow-sm text-center">
              <div>
                <p className="text-[10px] text-muted-foreground">AGS Meal Plan Subscription</p>
                <p className="text-xl font-extrabold text-zinc-800 dark:text-white mt-1">₹3,450 / Month</p>
                <p className="text-[8px] text-zinc-400">Includes 30 Customized Meals</p>
              </div>
              <div className="p-2 border border-zinc-100 dark:border-zinc-800 rounded-xl bg-zinc-50 dark:bg-zinc-950/50 text-[9px] text-left space-y-1">
                <p className="flex justify-between"><span>Subtotal:</span><span className="font-bold">₹3,450.00</span></p>
                <p className="flex justify-between text-emerald-500"><span>Discount (AGSFIT):</span><span className="font-bold">-₹300.00</span></p>
              </div>
              <button className="w-full py-2 bg-emerald-500 text-white font-bold text-[10px] rounded-xl mt-2 hover:bg-emerald-600 transition-colors">
                PROCEED TO PAY
              </button>
            </div>
          </div>
        );

      case "sri-krishna-digital-world":
        return isTab1 ? (
          <div className="p-4 bg-slate-950 text-white font-sans text-xs h-full flex flex-col gap-3">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Sri Krishna Store</span>
              <span className="text-indigo-400 text-[9px] font-bold">14 ITEMS</span>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-2">
              {[
                { name: "Aero Pro Smartwatch", price: "₹4,999", old: "₹8,999" },
                { name: "SuperBass ANC Headset", price: "₹2,499", old: "₹5,499" }
              ].map((it, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800/80 p-2.5 rounded-xl flex flex-col justify-between">
                  <div className="w-full h-12 rounded-lg bg-slate-800/50 flex items-center justify-center text-[10px] text-slate-500 uppercase font-bold">GADGET</div>
                  <div className="mt-1">
                    <p className="text-[9px] font-bold text-white line-clamp-1">{it.name}</p>
                    <p className="text-[8px] text-slate-400 mt-0.5"><span className="text-indigo-400 font-bold">{it.price}</span> <span className="line-through">{it.old}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-4 bg-slate-950 text-white font-sans text-xs h-full flex flex-col gap-3">
            <div className="pb-2 border-b border-slate-800 text-[10px] text-slate-400 font-bold">
              SHOPPING CART RECEIPT
            </div>
            <div className="flex-1 bg-slate-900 border border-slate-800/80 rounded-xl p-3 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex justify-between text-[9px]">
                  <span>Aero Pro Smartwatch (x1)</span>
                  <span className="font-bold">₹4,999</span>
                </div>
                <div className="flex justify-between text-[9px]">
                  <span>SuperBass ANC Headset (x2)</span>
                  <span className="font-bold">₹4,998</span>
                </div>
              </div>
              <div className="border-t border-slate-800 pt-2 text-[9px]">
                <div className="flex justify-between text-slate-400">
                  <span>Shipping:</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between font-bold text-white mt-1">
                  <span>TOTAL:</span>
                  <span className="text-indigo-400 text-xs">₹9,997</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "sri-krishna-digital":
        return isTab1 ? (
          <div className="p-4 bg-neutral-950 text-white font-sans h-full flex flex-col gap-3">
            <div className="flex justify-between items-center pb-2 border-b border-neutral-950/20">
              <span className="text-[9px] font-bold tracking-widest text-neutral-500 uppercase">SKD BRAND STUDIO</span>
              <span className="text-pink-500 text-[9px] font-bold">CREATIVE BRANDING</span>
            </div>
            <div className="flex-1 bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold text-white">SKD Digital Identity Pack</p>
                <p className="text-[9px] text-neutral-400 mt-1">Art direction & minimalist logo blueprints tailored for regional market domination.</p>
              </div>
              <div className="grid grid-cols-4 gap-1.5 mt-2">
                {["#6366F1", "#EC4899", "#14B8A6", "#10B981"].map((c) => (
                  <div key={c} className="flex flex-col gap-1 items-center">
                    <div className="w-full h-8 rounded-lg" style={{ backgroundColor: c }} />
                    <span className="text-[7px] font-mono text-neutral-500">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-neutral-950 text-white font-sans h-full flex flex-col gap-3">
            <div className="pb-2 border-b border-neutral-800 text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
              COLOR PALETTE SCHEME
            </div>
            <div className="flex-1 grid grid-cols-2 gap-2.5">
              {[
                { name: "Royal Purple", code: "#6366F1" },
                { name: "Cyan Sparkle", code: "#14B8A6" },
                { name: "Crimson Glow", code: "#EC4899" },
                { name: "Emerald Mint", code: "#10B981" }
              ].map((p, i) => (
                <div key={i} className="bg-neutral-900 border border-neutral-800 p-2 rounded-xl flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg shrink-0" style={{ backgroundColor: p.code }} />
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold text-white line-clamp-1">{p.name}</span>
                    <span className="text-[7px] text-neutral-500 font-mono mt-0.5">{p.code}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "trueluxe-service":
        return isTab1 ? (
          <div className="p-4 bg-zinc-950 text-white font-sans text-xs h-full flex flex-col gap-3">
            <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
              <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider">Technician Dispatch Map</span>
              <span className="text-emerald-400 text-[9px] font-bold animate-pulse">SYS DISPATCH</span>
            </div>
            <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl relative p-3 overflow-hidden flex flex-col justify-between">
              {/* Map Simulator */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              <div className="absolute top-8 left-10 w-2.5 h-2.5 rounded-full bg-rose-500 border-2 border-white animate-ping" />
              <div className="absolute bottom-8 right-12 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-ping" />
              <div className="flex justify-between text-[8px] text-zinc-400 relative z-10">
                <span>Active Tech: Rajesh K.</span>
                <span>ETA: 14 Mins</span>
              </div>
              <div className="text-[8px] bg-zinc-950/80 p-2 border border-zinc-800 rounded relative z-10 text-zinc-400 leading-tight">
                Current Location: Nagapattinam Beach Road intersection. Dispatching AC installation tools.
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-zinc-950 text-white font-sans text-xs h-full flex flex-col gap-3">
            <div className="pb-2 border-b border-zinc-800 text-[10px] text-zinc-400 font-bold">
              APPLIANCE SERVICE BOOKING
            </div>
            <div className="flex-1 space-y-2 overflow-y-auto">
              {[
                { title: "AC Installation & Leak Repair", cost: "₹1,200", status: "Assigned" },
                { title: "Refrigerator Defrost Fault", cost: "₹850", status: "Pending" },
                { title: "Washing Machine Spinner Swap", cost: "₹1,600", status: "Completed" }
              ].map((s, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800/80 p-2.5 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-white">{s.title}</p>
                    <p className="text-[8px] text-zinc-400 mt-0.5">Est. Bill: {s.cost}</p>
                  </div>
                  <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${s.status === "Completed" ? "bg-emerald-500/10 text-emerald-400" : "bg-primary/10 text-primary"}`}>
                    {s.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );

      case "sri-krishna-supermarket":
        return isTab1 ? (
          <div className="p-4 bg-emerald-950/20 text-emerald-900 dark:text-emerald-100 font-sans h-full flex flex-col gap-3">
            <div className="flex justify-between items-center pb-2 border-b border-emerald-950/10">
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">SUPERMARKET CART</span>
              <span className="text-emerald-500 text-[9px] font-bold">3 ITEMS</span>
            </div>
            <div className="flex-1 bg-white dark:bg-zinc-900 border border-emerald-500/10 rounded-2xl p-4 flex flex-col justify-between shadow-sm">
              <div className="space-y-2">
                {[
                  { name: "Fresh Royal Apples (1kg)", qty: "1", price: "₹240" },
                  { name: "Full Cream Milk (1L)", qty: "2", price: "₹120" },
                  { name: "Organic Honey Bottle", qty: "1", price: "₹380" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-[10px]">
                    <div className="flex flex-col">
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">{item.name}</span>
                      <span className="text-[8px] text-muted-foreground">Qty: {item.qty}</span>
                    </div>
                    <span className="font-bold text-zinc-800 dark:text-zinc-200">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-zinc-100 dark:border-zinc-800 pt-2 text-[9px]">
                <div className="flex justify-between text-muted-foreground font-bold">
                  <span>GRAND TOTAL:</span>
                  <span className="text-emerald-500 text-xs">₹740</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-emerald-950/20 text-emerald-900 dark:text-emerald-100 font-sans h-full flex flex-col gap-3">
            <div className="pb-2 border-b border-emerald-950/10 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
              ACTIVE REDEEMABLE COUPONS
            </div>
            <div className="flex-1 space-y-2 overflow-y-auto">
              {[
                { code: "FRESHGROCERY20", desc: "20% Off on Fresh Fruits", status: "VALID" },
                { code: "FESTIVESAVE100", desc: "Flat ₹100 Off on ₹1,000+", status: "VALID" },
                { code: "MILKSAVER20", desc: "₹20 Off on Dairy Bundle", status: "EXPIRED" }
              ].map((c, i) => (
                <div key={i} className="bg-white dark:bg-zinc-900 p-2.5 rounded-xl border border-emerald-500/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-zinc-800 dark:text-zinc-200 font-mono bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">{c.code}</span>
                    <p className="text-[8px] text-muted-foreground mt-1">{c.desc}</p>
                  </div>
                  <span className={`text-[8px] font-bold ${c.status === "VALID" ? "text-emerald-500" : "text-zinc-400"}`}>{c.status}</span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="p-8 text-center text-muted-foreground text-xs flex flex-col items-center justify-center h-full">
            <Layers size={24} className="mb-2 text-primary" />
            No interactive preview modules loaded.
          </div>
        );
    }
  };

  // Allow manual toggling between desktop, tablet, and mobile frames
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">(
    project.deviceType === "mobile" ? "mobile" : "desktop"
  );

  // Toggle between high-fidelity interactive dashboard mockup and live website preview/screenshot mode
  const [previewMode, setPreviewMode] = useState<"mockup" | "live">(
    (project.liveUrl || project.screenshotDesktop || project.screenshotTablet || project.screenshotMobile) ? "live" : "mockup"
  );

  // Track if screenshot images fail to load (e.g. if the user hasn't added the image files to public directory yet)
  const [screenshotError, setScreenshotError] = useState({
    desktop: false,
    tablet: false,
    mobile: false
  });

  return (
    <div className="card-elevated border border-border bg-card/70 backdrop-blur-md rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden group shadow-md hover:shadow-[0_20px_50px_rgba(120,119,198,0.15)] transition-all duration-300">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/10 to-violet-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      {/* Main Switcher Hub Control Panel */}
      <div className="flex flex-col gap-5 mb-6 pb-6 border-b border-border/40">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-extrabold text-xl text-foreground flex items-center gap-2">
              <Sparkles size={18} className="text-primary-glow animate-pulse" />
              Live Project Simulator
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Experience the customized solution across different responsive viewports.
            </p>
          </div>

          {/* Source Mode Selector */}
          {(project.liveUrl || project.screenshotDesktop || project.screenshotTablet || project.screenshotMobile) && (
            <div className="flex gap-1 bg-surface-muted/80 p-1 rounded-xl border border-border shrink-0">
              <button 
                onClick={() => setPreviewMode("mockup")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  previewMode === "mockup" ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Dashboard Simulator
              </button>
              <button 
                onClick={() => setPreviewMode("live")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  previewMode === "live" ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {((device === "desktop" && project.screenshotDesktop) ||
                  (device === "tablet" && project.screenshotTablet) ||
                  (device === "mobile" && project.screenshotMobile)) 
                    ? "Screenshot View" 
                    : "Live Web Preview"}
              </button>
            </div>
          )}
        </div>

        {/* Device Switcher + Feature Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
          {/* Responsive Device Frame Switcher */}
          <div className="flex items-center gap-2 bg-surface-muted/65 p-1 rounded-xl border border-border/70 self-start">
            <button
              onClick={() => setDevice("desktop")}
              className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                device === "desktop" ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:text-foreground border border-transparent"
              }`}
              title="Switch to Laptop view"
            >
              <Laptop size={14} />
              <span className="hidden xs:inline">Laptop</span>
            </button>
            <button
              onClick={() => setDevice("tablet")}
              className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                device === "tablet" ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:text-foreground border border-transparent"
              }`}
              title="Switch to Tablet view"
            >
              <Tablet size={14} />
              <span className="hidden xs:inline">Tablet</span>
            </button>
            <button
              onClick={() => setDevice("mobile")}
              className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                device === "mobile" ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:text-foreground border border-transparent"
              }`}
              title="Switch to Mobile view"
            >
              <Smartphone size={14} />
              <span className="hidden xs:inline">Mobile</span>
            </button>
          </div>

          {/* Interactive tabs (only visible in mockup mode) */}
          {previewMode === "mockup" && (
            <div className="flex gap-1.5 bg-surface-muted/65 p-1 rounded-xl border border-border/70">
              <button 
                onClick={() => setActiveTab(1)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-extrabold tracking-wide uppercase transition-all ${
                  activeTab === 1 ? "bg-zinc-800 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Feature View 1
              </button>
              <button 
                onClick={() => setActiveTab(2)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-extrabold tracking-wide uppercase transition-all ${
                  activeTab === 2 ? "bg-zinc-800 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Feature View 2
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Frame Viewer Chassis Area */}
      <div className="w-full flex flex-col items-center justify-center py-8 px-4 bg-surface-muted/40 border border-border/20 rounded-3xl relative overflow-hidden">
        {/* Absolute Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

        {device === "desktop" && (
          /* Macbook Browser Frame Chassis - Fluid Widescreen scale */
          <div className="w-full max-w-[840px] bg-zinc-900 border-[6px] border-zinc-800 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col transition-all duration-300">
            {/* Header window control buttons */}
            <div className="bg-zinc-900 px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm" />
              </div>
              <div className="bg-zinc-950/80 px-4 py-1 text-[9px] text-zinc-400 font-mono rounded border border-zinc-800 max-w-[320px] w-full text-center truncate shadow-inner">
                {previewMode === "live" ? project.liveUrl : `https://mock.infygrid.in/${project.slug}`}
              </div>
              <Laptop size={12} className="text-zinc-500" />
            </div>
            {/* Inner Screen - Fluid Widescreen Aspect Ratio */}
            <div className="w-full aspect-[16/10] bg-zinc-955 overflow-hidden relative">
              {previewMode === "live" ? (
                (project.screenshotDesktop && !screenshotError.desktop) ? (
                  <img 
                    src={project.screenshotDesktop} 
                    alt={`${project.title} Desktop`} 
                    className="w-full h-full object-cover object-top select-none pointer-events-none"
                    onError={() => setScreenshotError(prev => ({ ...prev, desktop: true }))}
                  />
                ) : (
                  <iframe 
                    src={project.liveUrl} 
                    className="absolute top-0 left-0 border-0 bg-white" 
                    style={{
                      width: "160%",
                      height: "160%",
                      transform: "scale(0.625)",
                      transformOrigin: "top left",
                    }}
                    title={`${project.title} Live Preview`}
                    sandbox="allow-scripts allow-same-origin allow-forms"
                  />
                )
              ) : (
                <div className="w-full h-full overflow-y-auto">
                  {renderSimulatedUI()}
                </div>
              )}
            </div>
          </div>
        )}

        {device === "tablet" && (
          /* iPad Tablet Frame Chassis - Fluid Portrait scale */
          <div className="w-full max-w-[400px] bg-zinc-900 border-[8px] border-zinc-800 rounded-[2rem] shadow-2xl relative overflow-hidden transition-all duration-300">
            {/* Top iPad camera sensor dot - Absolute Floating Overlay */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 w-1.5 h-1.5 rounded-full bg-zinc-955/80 pointer-events-none" />
            
            {/* Inner Screen - Fluid Portrait Aspect Ratio */}
            <div className="w-full aspect-[3/4] bg-zinc-955 relative overflow-hidden rounded-[1.5rem]">
              {previewMode === "live" ? (
                (project.screenshotTablet && !screenshotError.tablet) ? (
                  <img 
                    src={project.screenshotTablet} 
                    alt={`${project.title} Tablet`} 
                    className="w-full h-full object-cover object-top select-none pointer-events-none"
                    onError={() => setScreenshotError(prev => ({ ...prev, tablet: true }))}
                  />
                ) : (
                  <iframe 
                    src={project.liveUrl} 
                    className="absolute top-0 left-0 border-0 bg-white" 
                    style={{
                      width: "192%",
                      height: "192%",
                      transform: "scale(0.52)",
                      transformOrigin: "top left",
                    }}
                    title={`${project.title} Live Preview`}
                    sandbox="allow-scripts allow-same-origin allow-forms"
                  />
                )
              ) : (
                <div className="w-full h-full overflow-y-auto pt-6">
                  {renderSimulatedUI()}
                </div>
              )}
            </div>
            
            {/* Home swipe simulator - Absolute Floating Overlay */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none w-24 h-[4px] bg-white/30 backdrop-blur-[1px] rounded-full" />
          </div>
        )}

        {device === "mobile" && (
          /* iPhone Smartphone Frame Chassis - Fluid Mobile Portrait scale */
          <div className="w-full max-w-[280px] bg-black border-[10px] border-black rounded-[2.5rem] shadow-2xl relative overflow-hidden transition-all duration-300 ring-1 ring-white/10">
            {/* Apple Dynamic Island Top Notch - Absolute Floating Overlay */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-18 h-4 bg-black rounded-full z-30 flex items-center justify-center pointer-events-none shadow-inner">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-900/60" />
            </div>

            {/* Inner Screen - Fluid Mobile Portrait Aspect Ratio */}
            <div className="w-full aspect-[9/16] bg-zinc-950 relative overflow-hidden rounded-[1.8rem]">
              {previewMode === "live" ? (
                (project.screenshotMobile && !screenshotError.mobile) ? (
                  <img 
                    src={project.screenshotMobile} 
                    alt={`${project.title} Mobile`} 
                    className="w-full h-full object-cover object-top select-none pointer-events-none"
                    onError={() => setScreenshotError(prev => ({ ...prev, mobile: true }))}
                  />
                ) : (
                  <iframe 
                    src={project.liveUrl} 
                    className="absolute top-0 left-0 border-0 bg-white" 
                    style={{
                      width: "134%",
                      height: "134%",
                      transform: "scale(0.746)",
                      transformOrigin: "top left",
                    }}
                    title={`${project.title} Live Preview`}
                    sandbox="allow-scripts allow-same-origin allow-forms"
                  />
                )
              ) : (
                <div className="w-full h-full overflow-y-auto pt-10 pb-4">
                  {renderSimulatedUI()}
                </div>
              )}
            </div>

            {/* iPhone Home Swipe Bar - Absolute Floating Overlay */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none w-16 h-[3px] bg-white/30 backdrop-blur-[1px] rounded-full" />
          </div>
        )}

        {/* Warning notification footer for mixed-content/X-Frame-Options blocks in direct preview */}
        {previewMode === "live" && !(
          (device === "desktop" && project.screenshotDesktop && !screenshotError.desktop) ||
          (device === "tablet" && project.screenshotTablet && !screenshotError.tablet) ||
          (device === "mobile" && project.screenshotMobile && !screenshotError.mobile)
        ) && (
          <p className="text-[10px] text-center text-muted-foreground mt-4 max-w-md leading-relaxed px-4">
            ⚠️ <span className="font-bold">Live preview note:</span> External sites may block embedded loading due to mixed content or security headers. If it does not load, switch back to the <span className="text-primary font-bold">Dashboard Simulator</span> or click the "Visit live site" link.
          </p>
        )}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────── */

export function ProjectDetailView({ project }: { project: Project }) {
  return (
    <>
      <PageHeader 
        eyebrow={project.category} 
        title={project.title} 
        subtitle={project.summary}
      >
        <div className="mt-8 flex flex-col items-center justify-center gap-6">
          {/* Main Floating Brand Logo Header */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-4 rounded-3xl shadow-lg">
            <div className={`w-14 h-14 rounded-2xl ${project.logoBg} text-white font-display font-extrabold flex items-center justify-center text-2xl shadow-lg animate-float relative overflow-hidden shrink-0`}>
              {project.logoChar}
              {project.logoUrl && (
                <img 
                  src={project.logoUrl} 
                  alt={`${project.client} Logo`} 
                  className="absolute inset-0 w-full h-full object-contain p-2 bg-zinc-900/90 transition-opacity duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">BRAND PARTNER</span>
              <span className="font-display font-bold text-xl text-white mt-0.5">{project.client}</span>
            </div>
          </div>

          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary flex items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(120,100,255,0.35)] transition-all duration-300" 
              style={{ background: "white", color: "var(--primary)" }}
            >
              Visit live site 
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </PageHeader>

      <section className="section bg-background relative overflow-hidden">
        {/* Glow lights */}
        <div className="absolute top-[10%] right-[-10%] w-[35vw] h-[35vw] rounded-full opacity-5 bg-primary/25 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] grid-dots-bg pointer-events-none" />

        <div className="container-x grid lg:grid-cols-3 gap-12 relative z-10">
          
          <div className="lg:col-span-2 space-y-12">
            
            {/* Live Interactive UI Screens Frame */}
            <InteractiveDeviceSimulator project={project} />

            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Overview</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{project.description}</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">The challenge</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Our solution</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Results</h2>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {project.results.map((r) => (
                  <div key={r.label} className="card-elevated text-center">
                    <p className="text-4xl font-bold gradient-text">{r.metric}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{r.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {project.review && (
              <div className="pt-12 border-t border-border">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Client review</h2>
                <div className="p-8 md:p-12 rounded-[2.5rem] bg-surface border border-border relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative">
                    <div className="flex gap-1 text-primary mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-current text-amber-400 stroke-none" />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-foreground italic">
                      "{project.review.content}"
                    </blockquote>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-bold text-lg">
                        {project.review.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-lg">{project.review.author}</p>
                        <p className="text-sm text-muted-foreground">{project.review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 self-start">
            <div className="card-elevated">
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Client</dt>
                  <dd className="mt-1 font-semibold">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Industry</dt>
                  <dd className="mt-1 font-semibold">{project.industry}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Duration</dt>
                  <dd className="mt-1 font-semibold">{project.duration}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Services</dt>
                  <dd className="mt-1 flex flex-wrap gap-1.5">
                    {project.services.map((s) => (
                      <span key={s} className="px-2 py-1 rounded-xl bg-secondary text-secondary-foreground text-xs font-semibold">{s}</span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Tech stack</dt>
                  <dd className="mt-1 flex flex-wrap gap-1.5">
                    {project.techStack.map((t) => (
                      <span key={t} className="px-2 py-1 rounded-xl bg-secondary text-secondary-foreground text-xs font-semibold">{t}</span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
            
            <Link to="/project" className="text-sm font-bold text-primary hover:text-primary-glow inline-flex items-center gap-1.5 transition-colors">
              ← Back to all projects
            </Link>
          </aside>
        </div>
      </section>

      <CTABand />
    </>
  );
}

export function BlogDetailView({ blog }: { blog: Blog }) {
  return (
    <article>
      <PageHeader eyebrow={blog.category} title={blog.title} subtitle={blog.excerpt}>
        <p className="mt-6 text-sm text-white/70">{blog.author} • {blog.date} • {blog.readTime}</p>
      </PageHeader>
      <div className="container-x my-12">
        <div className="aspect-[2/1] rounded-3xl overflow-hidden -mt-24 relative shadow-xl">
          <img src={blog.cover} alt={blog.title} className="w-full h-full object-cover" />
        </div>
      </div>
      <section className="pb-20">
        <div className="container-x max-w-3xl">
          <div className="prose-content space-y-5">
            {blog.content.map((c, i) => {
              if (c.type === "h2") return <h2 key={i} className="text-2xl md:text-3xl font-bold mt-10">{c.text}</h2>;
              if (c.type === "h3") return <h3 key={i} className="text-xl md:text-2xl font-bold mt-8">{c.text}</h3>;
              if (c.type === "ul") return (
                <ul key={i} className="space-y-2 pl-1">
                  {c.items!.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-muted-foreground"><span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{it}</li>
                  ))}
                </ul>
              );
              return <p key={i} className="text-lg leading-relaxed text-muted-foreground">{c.text}</p>;
            })}
          </div>
          <div className="mt-14 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/blog" className="text-sm font-semibold text-primary">← Back to blog</Link>
            <Link to="/contact" className="btn-primary">Talk to us <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </article>
  );
}
