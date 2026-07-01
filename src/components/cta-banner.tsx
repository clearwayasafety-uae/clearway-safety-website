import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="mx-auto mt-16 flex w-full max-w-7xl flex-col gap-6 rounded-[2rem] border border-[#d6e2dd] bg-[#173b2d] px-8 py-10 text-white shadow-[0_30px_80px_rgba(23,59,45,0.16)] sm:px-10 lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#fde68a]">
          Ready to secure your site?
        </p>
        <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">
          Get a tailored quote for PPE, road safety, and fire protection.
        </h3>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="rounded-full bg-[#f59e0b] px-6 py-3 font-semibold text-[#173b2d] transition hover:-translate-y-0.5"
        >
          Request a quote
        </Link>
        <a
          href="https://wa.me/971500000000"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
        >
          WhatsApp us
        </a>
      </div>
    </section>
  );
}
