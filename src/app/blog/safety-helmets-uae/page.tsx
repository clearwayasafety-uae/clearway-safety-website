export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-green-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold">
          Safety Helmets Supplier in UAE & Abu Dhabi
        </h1>

        <p className="mt-4 text-lg">
          High quality industrial safety helmets for construction, oil & gas and factories
        </p>
      </section>

      {/* WHAT IS */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">
          What is a Safety Helmet?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Safety helmets are essential protective equipment used in construction sites,
          industrial areas and oil & gas projects across UAE. They protect workers
          from head injuries caused by falling objects and accidents.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Benefits</h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Protects from head injuries</li>
            <li>Strong and durable material</li>
            <li>Used in UAE construction industry</li>
            <li>Comfortable for long working hours</li>
          </ul>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Why Choose Us in UAE?
        </h2>

        <p className="text-gray-700">
          We are a trusted supplier of safety equipment in Abu Dhabi and UAE.
          We provide wholesale and retail supply of safety helmets with fast delivery
          and competitive pricing for all industries.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white text-center py-16">
        <h2 className="text-3xl font-bold">
          Need Safety Helmets in UAE?
        </h2>

        <a
          href="/contact"
          className="mt-4 inline-block bg-black px-6 py-3 rounded-lg"
        >
          Request Quote
        </a>
      </section>

    </main>
  );
}
