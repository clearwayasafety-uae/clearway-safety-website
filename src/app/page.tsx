export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* TOP BAR */}
      <div className="bg-green-950 text-white text-center text-sm py-2">
        Industrial Safety Supplier in Abu Dhabi | UAE Wide Delivery
      </div>

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <h1 className="font-bold text-lg text-green-900">
          CLEARWAY SAFETY
        </h1>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Industries</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>

        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
          Request Quote
        </button>
      </header>

      {/* HERO */}
      <section className="bg-green-900 text-white text-center py-24 px-6">
        <h2 className="text-4xl md:text-6xl font-bold">
          Safety Equipment Supplier in UAE
        </h2>

        <p className="mt-4 text-lg text-gray-200">
          PPE • Road Safety • Fire Safety • Traffic Safety Solutions
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold">
            Get Quote
          </a>

          <a className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold">
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-10">Why Choose Us</h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "UAE Wide Delivery",
            "Industrial Grade Quality",
            "Fast Response Quotes",
            "Bulk Supply Available",
            "Trusted Supplier",
            "Competitive Pricing"
          ].map((item, i) => (
            <div key={i} className="border p-6 rounded-xl shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gray-100 py-16 text-center px-6">
        <h3 className="text-3xl font-bold mb-6">Industries We Serve</h3>
        <p className="text-gray-700">
          Construction • Oil & Gas • Factories • Government • Hospitals • Schools • Hotels
        </p>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white text-center py-16">
        <h3 className="text-3xl font-bold">Need Safety Equipment in UAE?</h3>
        <p className="mt-2">Get fast quotation within 24 hours</p>
        <button className="mt-4 bg-black px-6 py-3 rounded-lg">
          Request Quote
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-10">
        <p>© 2026 Clearway Safety UAE. All rights reserved.</p>
      </footer>

    </main>
  );
}