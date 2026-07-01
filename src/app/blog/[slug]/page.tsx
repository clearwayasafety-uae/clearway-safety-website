import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredData } from "@/components/structured-data";
import { blogPosts } from "@/data/site-data";
import { buildMetadata, createBreadcrumbJsonLd, createOrganizationJsonLd } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return buildMetadata({ title: "Blog Post", description: "Safety insights for UAE buyers and operations teams.", path: "/blog" });
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <StructuredData data={createOrganizationJsonLd()} />
      <StructuredData data={createBreadcrumbJsonLd([{ name: "Blog", item: "/blog" }, { name: post.title, item: `/blog/${post.slug}` }])} />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f59e0b]">{post.category}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#173b2d] sm:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg leading-8 text-[#35594a]">{post.excerpt}</p>
        <div className="mt-12 rounded-[2rem] border border-[#d6e2dd] bg-white p-8 shadow-sm text-lg leading-8 text-[#35594a]">
          <p>
            Clearway Safety helps procurement teams and operational leaders make confident decisions around PPE, road safety, and fire protection. The right products do more than meet standards—they reduce risk, improve site flow, and support long-term compliance.
          </p>
          <p className="mt-6">
            For growing operations across Abu Dhabi and the wider UAE, consistency in supply and responsive support are essential. Clearway combines premium product selection with practical delivery planning so teams can stay productive and safe.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/blog" className="font-semibold text-[#173b2d] hover:text-[#f59e0b]">
            ← Back to blog
          </Link>
        </div>
      </section>
    </>
  );
}
