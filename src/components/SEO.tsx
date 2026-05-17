import type { ReactNode } from "react";

interface SEOMeta {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}

export const SITE_URL = "https://infygrid.in";
export const SITE_NAME = "InfyGrid Solutions";

export function buildHead({ title, description, path, image, type = "website" }: SEOMeta) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes("InfyGrid") ? title : `${title} | ${SITE_NAME}`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      ...(image ? [{ property: "og:image", content: image }] : []),
      { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      ...(image ? [{ name: "twitter:image", content: image }] : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function PageHeader({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: ReactNode; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Grid lines overlay */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "linear-gradient(rgba(120,100,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(120,100,255,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[45vw] h-[45vw] rounded-full opacity-25" style={{ background: "radial-gradient(circle, oklch(0.62 0.28 310 / 0.4) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-20%] left-[-10%] w-[35vw] h-[35vw] rounded-full opacity-15" style={{ background: "radial-gradient(circle, oklch(0.72 0.18 195 / 0.4) 0%, transparent 70%)" }} />

      {/* Mesh overlay */}
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "var(--gradient-mesh)" }} />

      <div className="container-x relative z-10 py-24 md:py-32 text-center">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 bg-white/8 border border-white/12 text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md">
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-[1.05] tracking-tight">
          {title}
        </h1>
        {subtitle && <p className="mt-5 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
