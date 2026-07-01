import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, createBreadcrumbJsonLd, createOrganizationJsonLd, createWebSiteJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description: "Learn more about Clearway Safety, our UAE presence, and the values behind our safety supply operations.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <StructuredData data={createOrganizationJsonLd()} />
      <StructuredData data={createWebSiteJsonLd()} />
      <StructuredData data={createBreadcrumbJsonLd([{ name: "About", item: "/about" }])} />
      <Breadcrumbs items={[{ label: "About" }]} />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f59e0b]">About Clearway</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#173b2d] sm:text-5xl">
              A dependable supply partner for safety-critical operations.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#35594a]">
              Clearway Safety & General Trading LLC OPC is a trusted UAE supplier of industrial safety equipment, PPE, road safety products, fire safety systems, and traffic control materials. We support wholesale and retail requirements with premium service and dependable availability.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#d6e2dd] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#173b2d]">Why businesses choose us</h2>
            <ul className="mt-5 space-y-4 text-base leading-7 text-[#35594a]">
              <li>• Strong product sourcing and consistent stock availability</li>
              <li>• Fast support for urgent project and facility needs</li>
              <li>• Tailored recommendations for compliance-conscious teams</li>
              <li>• Delivery coverage across the UAE including Abu Dhabi</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#d6e2dd] bg-[#fdf8ee] p-8">
          <SectionHeading
            eyebrow="Our commitment"
            title="Premium products backed by professional service"
            description="We combine quality sourcing with clear communication, making procurement simple for companies that need dependable results."
          />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
