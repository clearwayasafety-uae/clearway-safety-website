export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-green-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold">
          Safety Equipment Blog – UAE & Abu Dhabi
        </h1>
        <p className="mt-4 text-lg">
          Learn about PPE, traffic safety, fire safety & industrial protection products
        </p>
      </section>

      {/* BLOG CATEGORIES */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-8">Latest Safety Topics</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Anti Slip Tape",
            "Safety Helmets UAE",
            "Traffic Cones Dubai",
            "Fire Safety Equipment Abu Dhabi",
            "PPE Guide UAE",
            "Road Safety Products"
          ].map((item, i) => (
            <div key={i} className="border p-5 rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold">{item}</h3>
              <p className="text-sm text-gray-500 mt-2">
                Complete guide and supplier information in UAE market.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* SEO TEXT */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <p className="max-w-3xl mx-auto text-gray-700">
          We are a leading supplier of industrial safety equipment in Abu Dhabi, UAE.
          Our blog helps customers understand safety products, usage and applications
          in construction, oil & gas and industrial sectors.
        </p>
      </section>

    </main>
  );
}
