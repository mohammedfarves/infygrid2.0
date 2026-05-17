import { createFileRoute, notFound } from "@tanstack/react-router";
import { buildHead } from "@/components/SEO";
import { getBlog } from "@/data/blogs";
import { BlogDetailView } from "@/components/DetailViews";

const SLUG = "website-cost-tamil-nadu";

export const Route = createFileRoute("/blog/website-cost-tamil-nadu")({
  head: () => {
    const b = getBlog(SLUG)!;
    return buildHead({ title: b.title, description: b.metaDescription, path: b.path, image: b.cover, type: "article" });
  },
  component: () => {
    const b = getBlog(SLUG);
    if (!b) throw notFound();
    return <BlogDetailView blog={b} />;
  },
});
