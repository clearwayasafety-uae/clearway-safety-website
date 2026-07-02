export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-green-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold">
          Anti Slip Tape Supplier in Abu Dhabi & UAE
        </h1>
        <p className="mt-4 text-lg">
          High quality safety tapes for stairs, floors and industrial areas
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">
          What is Anti Slip Tape?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Anti slip tape is used to prevent accidents in workplaces, factories,
          warehouses and construction sites across UAE. It improves safety and
          reduces slipping risks in high traffic areas.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Benefits</h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Strong grip on all surfaces</li>
            <li>Weather resistant for UAE conditions</li>
            <li>Used in industrial & commercial buildings</li>
            <li>Reduces accident risks</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white text-center py-16">
        <h2 className="text-3xl font-bold">
          Need Anti Slip Tape in UAE?
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
