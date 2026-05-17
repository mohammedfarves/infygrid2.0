import { createFileRoute, notFound } from "@tanstack/react-router";
import { buildHead } from "@/components/SEO";
import { getService } from "@/data/services";
import { ServiceDetailView } from "@/components/DetailViews";

const SLUG = "ui-ux-design";

export const Route = createFileRoute("/ui-ux-design")({
  head: () => {
    const s = getService(SLUG)!;
    return buildHead({ title: s.title, description: s.metaDescription, path: s.path });
  },
  component: () => {
    const s = getService(SLUG);
    if (!s) throw notFound();
    return <ServiceDetailView service={s} />;
  },
});
