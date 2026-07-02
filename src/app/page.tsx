export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-green-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold">
          PPE Supplier in UAE & Abu Dhabi
        </h1>

        <p className="mt-4 text-lg">
          High quality Personal Protective Equipment for industrial, construction and oil & gas sectors
        </p>
      </section>

      {/* WHAT IS */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">
          What is PPE?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          PPE (Personal Protective Equipment) includes safety gear such as helmets, gloves,
          goggles, masks, safety vests and harnesses used to protect workers in UAE industries.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Benefits</h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Protects workers from injuries</li>
            <li>Mandatory in UAE safety regulations</li>
            <li>Used in construction and oil & gas projects</li>
            <li>Improves workplace safety compliance</li>
          </ul>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Why Choose Us in UAE?
        </h2>

        <p className="text-gray-700">
          We are a leading PPE supplier in Abu Dhabi and UAE, providing wholesale and retail
          safety equipment for construction companies, factories and government projects
          with fast delivery and competitive pricing.
        </p>
      </section>

      {/* 🔥 INTERNAL LINKS */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Explore Other Safety Products in UAE
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-center text-sm">

          <a href="/blog/safety-helmets-uae" className="border p-4 rounded-lg hover:shadow">
            Safety Helmets UAE
          </a>

          <a href="/blog/traffic-cones-uae" className="border p-4 rounded-lg hover:shadow">
            Traffic Cones Dubai
          </a>

          <a href="/blog/fire-safety-equipment-abu-dhabi" className="border p-4 rounded-lg hover:shadow">
            Fire Safety Equipment Abu Dhabi
          </a>

          <a href="/blog/anti-slip-tape-abu-dhabi" className="border p-4 rounded-lg hover:shadow">
            Anti Slip Tape UAE
          </a>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white text-center py-16">
        <h2 className="text-3xl font-bold">
          Need PPE in UAE?
        </h2>

        <a
          href="/contact"
          className="mt-4 inline-block bg-black px-6 py-3 rounded-lg"
        >
          Request Quote
        </a>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/971561080825"
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg z-50"
      >
        WhatsApp Us
      </a>

    </main>
  );
}
