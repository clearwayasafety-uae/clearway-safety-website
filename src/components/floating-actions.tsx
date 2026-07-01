export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/971500000000"
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-[#25d366] px-4 py-3 text-sm font-semibold text-white shadow-lg"
      >
        WhatsApp
      </a>
      <a
        href="tel:+971500000000"
        className="rounded-full bg-[#173b2d] px-4 py-3 text-sm font-semibold text-white shadow-lg"
      >
        Call Now
      </a>
      <a
        href="mailto:sales@clearway-safety.com"
        className="rounded-full bg-[#f59e0b] px-4 py-3 text-sm font-semibold text-[#173b2d] shadow-lg"
      >
        Email Us
      </a>
    </div>
  );
}
