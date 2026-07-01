import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto flex max-w-7xl px-4 pt-8 text-sm text-[#35594a] sm:px-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="font-medium hover:text-[#f59e0b]">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            <span>/</span>
            {item.href ? (
              <Link href={item.href} className="font-medium hover:text-[#f59e0b]">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-[#173b2d]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
