import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { blogPosts } from "@/data/site-data";
import { buildMetadata, createBreadcrumbJsonLd, createOrganizationJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Read practical insights on PPE compliance, operational safety, and procurement strategy for UAE businesses.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <StructuredData data={createOrganizationJsonLd()} />
      <StructuredData data={createBreadcrumbJsonLd([{ name: "Blog", item: "/blog" }])} />
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Latest insights"
          title="Guides and updates for smarter safety procurement"
          description="Stay informed with practical recommendations on standards, site safety, and product planning."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-[1.5rem] border border-[#d6e2dd] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f59e0b]">{post.category}</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#173b2d]">{post.title}</h2>
              <p className="mt-4 text-base leading-7 text-[#35594a]">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-[#35594a]">
                <span>{post.date}</span>
                <Link href={`/blog/${post.slug}`} className="font-semibold text-[#173b2d] hover:text-[#f59e0b]">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
