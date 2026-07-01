import Link from "next/link";
import { ReactNode } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f8f4ea] text-[#173b2d]">
      <header className="sticky top-0 z-50 border-b border-[#e7e0cf] bg-[#f8f4ea]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#173b2d] text-lg font-semibold text-white">
              C
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f59e0b]">
                Clearway
              </p>
              <p className="text-sm font-medium text-[#35594a]">
                Safety & General Trading
              </p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium hover:text-[#f59e0b]">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+971500000000" className="hidden rounded-full border border-[#173b2d]/20 px-4 py-2 text-sm font-semibold sm:inline-flex hover:bg-[#173b2d] hover:text-white">
              Call Now
            </a>
            <Link href="/contact" className="rounded-full bg-[#f59e0b] px-4 py-2 text-sm font-semibold text-[#173b2d] shadow-sm transition hover:-translate-y-0.5">
              Request Quote
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-[#e7e0cf] bg-[#173b2d] text-[#f8f4ea]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#fde68a]">Clearway Safety</p>
            <h3 className="mt-3 text-2xl font-semibold">Industrial safety solutions for modern UAE operations.</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#d4e2db]">
              From PPE and road safety to fire protection and traffic control, we supply dependable products for contractors, facilities, and public-sector teams.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#d4e2db]">
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#d4e2db]">
              <li>Mussafah M37, Abu Dhabi</li>
              <li>United Arab Emirates</li>
              <li><a href="mailto:sales@clearway-safety.com">sales@clearway-safety.com</a></li>
              <li><a href="tel:+971500000000">+971 50 000 0000</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
