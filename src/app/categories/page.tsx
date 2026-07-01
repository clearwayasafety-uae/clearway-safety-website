import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { categories } from "@/data/site-data";
import { buildMetadata, createBreadcrumbJsonLd, createOrganizationJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Categories",
  description: "Explore Clearway Safety categories covering industrial PPE, road safety, fire safety, and traffic protection products.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <>
      <StructuredData data={createOrganizationJsonLd()} />
      <StructuredData data={createBreadcrumbJsonLd([{ name: "Categories", item: "/categories" }])} />
      <Breadcrumbs items={[{ label: "Categories" }]} />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product categories"
          title="Specialized product lines for safety-critical environments"
          description="Everything your team needs to operate with confidence, from everyday PPE to mission-critical traffic and fire safety equipment."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <article key={category.title} className="rounded-[1.5rem] border border-[#d6e2dd] bg-white p-8 shadow-sm">
              <div className="text-4xl">{category.icon}</div>
              <h2 className="mt-4 text-2xl font-semibold text-[#173b2d]">{category.title}</h2>
              <p className="mt-3 text-base leading-7 text-[#35594a]">{category.description}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
