import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe, Smartphone, Code2, Layers, Palette, Search, Megaphone, Check } from "lucide-react";
import type { Service } from "@/data/services";
import type { Project } from "@/data/projects";
import type { Blog } from "@/data/blogs";

const iconMap = { Globe, Smartphone, Code2, Layers, Palette, Search, Megaphone } as const;

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Globe;
  return (
    <Link 
      to={service.path} 
      className="card-elevated group flex flex-col h-full bg-white dark:bg-zinc-950 border border-border/80 hover:border-primary/40 rounded-3xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(120,119,198,0.15)]"
    >
      {/* Dynamic corner gradient glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Floating active neon light bar */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      {/* Icon Frame */}
      <div className="w-14 h-14 rounded-2xl grid place-items-center text-primary-foreground mb-6 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_20px_rgba(120,100,255,0.4)]" style={{ background: "var(--gradient-primary)" }}>
        <Icon size={24} />
      </div>

      {/* Content */}
      <h3 className="font-display text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
        {service.shortTitle}
      </h3>
      <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
        {service.tagline}
      </p>

      {/* Beautiful Checklist */}
      <ul className="mt-6 space-y-3 text-sm text-muted-foreground flex-1">
        {service.features.slice(0, 4).map((f) => (
          <li key={f} className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary/20">
              <Check size={11} className="text-primary" />
            </span>
            <span className="group-hover:text-foreground transition-colors duration-300">{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA Line */}
      <div className="mt-8 pt-5 border-t border-border/40 flex items-center justify-between text-sm font-bold text-primary group-hover:text-primary-glow transition-colors">
        <span>Explore Solution</span>
        <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300">
          <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link 
      to={project.path} 
      className="card-elevated group flex flex-col h-full bg-white dark:bg-zinc-950 border border-border/80 hover:border-primary/40 rounded-3xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(120,119,198,0.15)]"
    >
      {/* Ambient background blur */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-primary/10 to-violet-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Left indicator glow line */}
      <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-gradient-to-b from-primary to-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center" />

      {/* Header tags + Action arrow */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {/* Visual Brand Logo Badge */}
          <div className={`w-10 h-10 rounded-xl ${project.logoBg} text-white font-display font-extrabold flex items-center justify-center text-sm shadow-md group-hover:scale-105 transition-transform duration-300 relative overflow-hidden shrink-0`}>
            {project.logoChar}
            {project.logoUrl && (
              <img 
                src={project.logoUrl} 
                alt={`${project.client} Logo`} 
                className="absolute inset-0 w-full h-full object-contain p-1.5 bg-zinc-900/90 transition-opacity duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}
          </div>
          <div className="flex gap-2 flex-wrap">
            {project.tags.slice(0, 1).map((t) => (
              <span
                key={t}
                className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-xl bg-surface-muted/50 border border-border/80 text-muted-foreground group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="w-8 h-8 rounded-xl bg-surface-muted border border-border/80 flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shrink-0 shadow-sm">
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* Details */}
      <h3 className="font-display text-lg font-bold leading-snug text-foreground group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>
      <p className="mt-3 text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-3">
        {project.summary}
      </p>

      {/* Styled Footer */}
      <div className="mt-8 flex items-center gap-4">
        <div className="h-[1px] flex-1 bg-border/40 group-hover:bg-primary/20 transition-colors duration-300" />
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground group-hover:text-primary transition-colors duration-300">
          Case Study
        </span>
      </div>
    </Link>
  );
}

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link 
      to={blog.path} 
      className="group flex flex-col rounded-3xl overflow-hidden border border-border/80 bg-white dark:bg-zinc-950 hover:shadow-[0_20px_50px_rgba(120,119,198,0.15)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40"
    >
      {/* Styled Thumbnail */}
      <div className="aspect-[16/10] overflow-hidden bg-zinc-900 relative">
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
        <img 
          src={blog.cover} 
          alt={blog.title} 
          loading="lazy" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        />
      </div>

      {/* Metadata & Description */}
      <div className="p-6 flex flex-col flex-1 relative">
        {/* Dynamic corner gradient glow */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">
          <span className="text-primary">{blog.category}</span>
          <span>•</span>
          <span>{blog.date}</span>
        </div>

        <h3 className="font-display text-lg font-bold leading-snug text-foreground group-hover:text-primary transition-colors duration-300">
          {blog.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-3 flex-1 leading-relaxed">
          {blog.excerpt}
        </p>

        {/* Read More button */}
        <div className="mt-6 pt-5 border-t border-border/40 flex items-center justify-between text-sm font-bold text-primary group-hover:text-primary-glow transition-colors">
          <span>Read Article</span>
          <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
