import { createFileRoute, notFound } from "@tanstack/react-router";
import { buildHead } from "@/components/SEO";
import { getProject } from "@/data/projects";
import { ProjectDetailView } from "@/components/DetailViews";

const SLUG = "violin-sri-jagan-portfolio";

export const Route = createFileRoute("/projects/violin-sri-jagan-portfolio")({
  head: () => {
    const p = getProject(SLUG)!;
    return buildHead({ title: p.title, description: p.metaDescription, path: p.path });
  },
  component: () => {
    const p = getProject(SLUG);
    if (!p) throw notFound();
    return <ProjectDetailView project={p} />;
  },
});
