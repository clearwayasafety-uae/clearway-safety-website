export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="bg-green-900 text-white text-center py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Safety Equipment Supplier in UAE
        </h1>

        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          PPE • Road Safety • Fire Safety • Industrial Safety Solutions
          across Abu Dhabi, Dubai & UAE
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
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "UAE Wide Delivery",
            "Industrial Grade Quality",
            "Fast Response Quotes",
            "Bulk Supply Available",
            "Trusted Supplier in Abu Dhabi",
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
        <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>

        <p className="text-gray-700 max-w-3xl mx-auto">
          Construction • Oil & Gas • Factories • Government Projects • Hospitals • Schools • Hotels
        </p>
      </section>

      {/* UAE SEO SECTION */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">
          Trusted Safety Supplier in Abu Dhabi & UAE
        </h2>

        <p className="text-gray-600 leading-relaxed">
          We are a leading supplier of industrial safety equipment in Abu Dhabi,
          providing high-quality PPE, traffic safety products, fire safety equipment,
          and construction safety solutions across UAE. We support wholesale and retail supply
          for all industries.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white text-center py-16">
        <h2 className="text-3xl font-bold">
          Need Safety Equipment in UAE?
        </h2>

        <p className="mt-2">
          Get fast quotation within 24 hours
        </p>

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
