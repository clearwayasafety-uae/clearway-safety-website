export default function Products() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HEADER */}
      <section className="bg-green-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p className="mt-2">Industrial Safety Equipment Across UAE</p>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-16 px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            "PPE Equipment",
            "Road Safety Products",
            "Fire Safety Equipment",
            "Traffic Cones & Barriers",
            "Industrial Safety Gear",
            "Warning Signs"
          ].map((item, i) => (
            <div key={i} className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">{item}</h3>
              <p className="text-sm text-gray-600 mt-2">
                High quality certified safety solution for UAE industries.
              </p>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}