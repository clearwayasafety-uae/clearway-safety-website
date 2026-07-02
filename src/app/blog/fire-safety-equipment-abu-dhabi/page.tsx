export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-green-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold">
          Fire Safety Equipment Supplier in Abu Dhabi & UAE
        </h1>

        <p className="mt-4 text-lg">
          High quality fire extinguishers, alarms and emergency safety systems for all industries
        </p>
      </section>

      {/* WHAT IS */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">
          What is Fire Safety Equipment?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Fire safety equipment includes tools and systems used to detect, prevent and control fire
          hazards in industrial, commercial and residential buildings across UAE.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Benefits</h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Prevents fire accidents and damage</li>
            <li>Ensures workplace safety compliance</li>
            <li>Used in UAE industrial projects</li>
            <li>Essential for emergency preparedness</li>
          </ul>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Why Choose Us in Abu Dhabi?
        </h2>

        <p className="text-gray-700">
          We are a trusted supplier of fire safety equipment in Abu Dhabi and UAE,
          providing high quality certified fire protection products for construction,
          oil & gas, factories and commercial buildings.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white text-center py-16">
        <h2 className="text-3xl font-bold">
          Need Fire Safety Equipment in UAE?
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
