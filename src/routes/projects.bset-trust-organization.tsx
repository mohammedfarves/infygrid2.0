import { createFileRoute, notFound } from "@tanstack/react-router";
import { buildHead } from "@/components/SEO";
import { getProject } from "@/data/projects";
import { ProjectDetailView } from "@/components/DetailViews";

const SLUG = "bset-trust-organization";

export const Route = createFileRoute("/projects/bset-trust-organization")({
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
