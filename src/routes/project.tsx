import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { buildHead, PageHeader } from "@/components/SEO";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/Cards";
import { CTABand } from "@/components/ContactSection";
import { Sparkles, Layers, ShoppingBag, Briefcase, Heart, Cpu, Clock, CheckCircle2, Search } from "lucide-react";

export const Route = createFileRoute("/project")({
  head: () =>
    buildHead({
      title: "Our Projects — Case Studies & Client Work | InfyGrid Solutions",
      description:
        "Browse InfyGrid Solutions case studies: custom e-commerce platforms, artist portfolios, ERP systems, AI/drone tech websites and enterprise security suites.",
      path: "/project",
    }),
  component: ProjectsPage,
});

const filterCategories = [
  { id: "all", label: "All Projects", Icon: Layers },
  { id: "ecommerce", label: "E-Commerce", Icon: ShoppingBag },
  { id: "enterprise", label: "Enterprise & FinTech", Icon: Briefcase },
  { id: "health-ai", label: "Health & AI/Robotics", Icon: Cpu },
  { id: "portfolio-ngo", label: "Portfolio & NGO", Icon: Heart },
  { id: "upcoming", label: "Upcoming Beta", Icon: Clock },
];

const metrics = [
  { metric: "15k+", label: "Diet Meals Delivered", color: "text-emerald-400 bg-emerald-400/5 border-emerald-400/20" },
  { metric: "2.5x", label: "E-commerce Sales Growth", color: "text-violet-400 bg-violet-400/5 border-violet-400/20" },
  { metric: "10k+", label: "Active Macro Calculator Users", color: "text-cyan-400 bg-cyan-400/5 border-cyan-400/20" },
  { metric: "99.9%", label: "Enterprise System Uptime", color: "text-amber-400 bg-amber-400/5 border-amber-400/20" },
];

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((p) => {
    // 1. Category check
    let categoryMatch = false;
    if (activeCategory === "all") {
      categoryMatch = true;
    } else if (activeCategory === "ecommerce") {
      categoryMatch = p.tags.includes("E-commerce");
    } else if (activeCategory === "enterprise") {
      categoryMatch = p.tags.includes("FinTech") || p.tags.includes("Management") || p.tags.includes("Enterprise");
    } else if (activeCategory === "health-ai") {
      categoryMatch = p.tags.includes("AI/ML") || p.tags.includes("Health") || p.tags.includes("Fitness");
    } else if (activeCategory === "portfolio-ngo") {
      categoryMatch = p.tags.includes("Portfolio") || p.tags.includes("NGO") || p.tags.includes("Non-Profit");
    } else if (activeCategory === "upcoming") {
      categoryMatch = p.tags.includes("Upcoming");
    }

    // 2. Search query check
    const query = searchQuery.toLowerCase().trim();
    const searchMatch =
      p.title.toLowerCase().includes(query) ||
      p.summary.toLowerCase().includes(query) ||
      p.client.toLowerCase().includes(query) ||
      p.tags.some((t) => t.toLowerCase().includes(query));

    return categoryMatch && searchMatch;
  });

  return (
    <>
      <PageHeader 
        eyebrow="Case Studies" 
        title="We build digital products that grow businesses" 
        subtitle="A premium collection of high-performance custom platforms, mobile applications, and enterprise web solutions shipped with love across India." 
      />

      {/* Main Section */}
      <section className="relative py-20 bg-background overflow-hidden">
        {/* Glow Ambient background */}
        <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full opacity-10 bg-primary/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[35vw] h-[35vw] rounded-full opacity-5 bg-accent/20 blur-3xl pointer-events-none" />

        {/* Global grid lines background */}
        <div className="absolute inset-0 opacity-[0.03] grid-dots-bg pointer-events-none" />

        <div className="container-x relative z-10">
          
          {/* ── METRICS OVERVIEW BAND ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {metrics.map((m, i) => (
              <div 
                key={i} 
                className={`p-6 rounded-2xl border bg-card/40 backdrop-blur-md flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 ${m.color}`}
              >
                <span className="text-3xl md:text-4xl font-display font-extrabold tracking-tight">{m.metric}</span>
                <span className="text-xs text-muted-foreground font-semibold mt-2">{m.label}</span>
              </div>
            ))}
          </div>

          {/* ── SEARCH & FILTER CONTROLS ── */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 pb-8 border-b border-border/40">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 flex-wrap justify-center w-full lg:w-auto">
              {filterCategories.map((c) => {
                const Icon = c.Icon;
                const isActive = activeCategory === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCategory(c.id)}
                    className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl border transition-all duration-300 ${
                      isActive
                        ? "bg-primary border-primary text-primary-foreground shadow-[0_0_15px_rgba(120,100,255,0.4)]"
                        : "bg-surface border-border hover:border-primary/40 hover:bg-surface-muted text-muted-foreground"
                    }`}
                  >
                    <Icon size={13} />
                    <span>{c.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={15} />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-surface border border-border/80 rounded-xl focus:outline-none focus:border-primary/50 text-foreground transition-all placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* ── NO RESULTS STATE ── */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-card/25 border border-border/60 rounded-3xl max-w-xl mx-auto backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto text-primary mb-4 animate-pulse">
                <Search size={20} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">No case studies found</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We couldn't find any projects matching your current filter criteria or search keyword.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="mt-5 btn-primary text-xs"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* ── PROJECTS GRID ── */}
          {filteredProjects.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((p) => (
                <div key={p.slug} className="animate-fade-in duration-300">
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      <CTABand />
    </>
  );
}
