export default function Industries() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HEADER */}
      <section className="bg-green-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Industries We Serve</h1>
        <p className="mt-2">Safety Solutions for All UAE Sectors</p>
      </section>

      {/* INDUSTRY GRID */}
      <section className="py-16 px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            "Construction Companies",
            "Oil & Gas Industry",
            "Factories & Manufacturing",
            "Government Projects",
            "Schools & Hospitals",
            "Hotels & Facility Management"
          ].map((item, i) => (
            <div key={i} className="border p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg">{item}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Providing certified safety equipment for {item.toLowerCase()} in UAE.
              </p>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}