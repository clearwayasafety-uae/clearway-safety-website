export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-green-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold">
          [PRODUCT NAME] Supplier in Abu Dhabi & UAE
        </h1>

        <p className="mt-4 text-lg">
          High quality [PRODUCT NAME] for industrial and commercial use across UAE
        </p>
      </section>

      {/* WHAT IS */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">
          What is [PRODUCT NAME]?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          [PRODUCT NAME] is widely used in UAE industries for safety, protection
          and compliance in construction, oil & gas and commercial sectors.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Benefits</h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>High durability and quality</li>
            <li>Suitable for UAE weather conditions</li>
            <li>Used in industrial and commercial projects</li>
            <li>Improves safety and efficiency</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white text-center py-16">
        <h2 className="text-3xl font-bold">
          Need [PRODUCT NAME] in UAE?
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
