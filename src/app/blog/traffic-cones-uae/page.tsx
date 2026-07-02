export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-green-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold">
          Traffic Cones Supplier in UAE & Dubai
        </h1>

        <p className="mt-4 text-lg">
          High quality traffic safety cones for road works, construction sites and parking areas
        </p>
      </section>

      {/* WHAT IS */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">
          What are Traffic Cones?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Traffic cones are safety devices used on roads and construction sites
          in UAE to guide vehicles, control traffic flow and prevent accidents.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Benefits</h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>High visibility for road safety</li>
            <li>Weather resistant for UAE heat</li>
            <li>Used in highways and construction zones</li>
            <li>Easy to deploy and move</li>
          </ul>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Why Choose Us in UAE?
        </h2>

        <p className="text-gray-700">
          We are a trusted supplier of traffic safety equipment in Abu Dhabi and Dubai.
          We supply traffic cones for road projects, construction companies and government contracts
          across UAE.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white text-center py-16">
        <h2 className="text-3xl font-bold">
          Need Traffic Cones in UAE?
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
