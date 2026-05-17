import { createFileRoute } from "@tanstack/react-router";
import { buildHead, PageHeader } from "@/components/SEO";
import { blogs } from "@/data/blogs";
import { BlogCard } from "@/components/Cards";

export const Route = createFileRoute("/blog")({
  head: () =>
    buildHead({
      title: "Blog & Insights — Web, Software & Digital Marketing | InfyGrid Solutions",
      description:
        "Insights, guides and case studies on website development, custom software, SEO and digital marketing for Tamil Nadu businesses — by InfyGrid Solutions.",
      path: "/blog",
    }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHeader eyebrow="Insights" title="Blog & Insights" subtitle="Tactics, guides and case studies from our engineering and marketing teams." />
      <section className="section">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <BlogCard key={b.slug} blog={b} />
          ))}
        </div>
      </section>
    </>
  );
}
