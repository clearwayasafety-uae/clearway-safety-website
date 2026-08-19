export default function Home() {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50">
      
      {/* 1. Top Yellow Bar */}
      <div className="bg-[#fdbf11] py-2 px-6 flex flex-wrap justify-center md:justify-around text-xs md:text-sm font-bold text-slate-900">
        <span>📍 Mussafah-M10, Abu Dhabi - UAE</span>
        <span>🛒 Wholesale & Retail</span>
        <span>🛡️ Quality Products | Competitive Prices</span>
      </div>

      {/* 2. Navigation Bar */}
      <nav className="bg-white py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-black text-[#0a183d] tracking-tight">
            CLEARWAY <span className="text-[#fdbf11]">SAFETY</span>
          </h1>
          <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">
            AND GENERAL TRADING L.L.C - O.P.C
          </p>
        </div>
        <div className="hidden md:flex space-x-6 font-semibold text-sm text-slate-700">
          <a href="/" className="hover:text-blue-900">Home</a>
          <a href="#products" className="hover:text-blue-900">Our Products</a>
          <a href="#about" className="hover:text-blue-900">About Us</a>
          <a href="#blog" className="hover:text-blue-900">Latest Blogs</a>
          <a href="#contact" className="hover:text-blue-900">Contact Us</a>
        </div>
        <a 
          href="https://wa.me/971561080825" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#00a859] text-white px-5 py-2 rounded-md font-semibold text-sm flex items-center gap-2 hover:bg-emerald-700 transition"
        >
          <span className="text-xl">💬</span> WhatsApp
        </a>
      </nav>

      {/* 3. Hero Section (Deep Navy Blue) */}
      <div className="bg-[#0a183d] text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Premium Industrial <br />
              <span className="text-[#fdbf11]">Safety Products & PPE</span>
            </h1>
            <p className="text-lg font-semibold text-slate-200 mb-3">Your Trusted Wholesale & Retail Supplier in Abu Dhabi</p>
            <p className="text-slate-400 text-sm mb-8 max-w-lg">
              Explore our high-quality safety products for every industry.
            </p>
            <a 
              href="#products" 
              className="bg-[#fdbf11] text-slate-900 px-6 py-3 rounded-md font-bold inline-flex items-center gap-2 hover:bg-yellow-500 transition"
            >
              Our Brand →
            </a>
          </div>

          <div id="why-choose-us" className="border-l-2 border-slate-700 pl-6 md:pl-10 space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-[#fdbf11] text-2xl">📦</span>
              <div><h4 className="font-bold text-white">5000+ Products</h4></div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#fdbf11] text-2xl">🛒</span>
              <div><h4 className="font-bold text-white">Wholesale & Retail</h4></div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#fdbf11] text-2xl">🛡️</span>
              <div><h4 className="font-bold text-white">Trusted Supplier</h4></div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Product Categories Grid */}
      <div id="products" className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-2">Our Comprehensive Safety Range</h2>
        <div className="w-16 h-1 bg-[#fdbf11] mx-auto mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {[
            { cat: "Site Utilities", title: "Anti Slip Tapes & Markings", icon: "🚧" },
            { cat: "Traffic Management", title: "Traffic Cones & Barriers", icon: "🛑" },
            { cat: "Emergency Care", title: "First Aid Boxes & Kits", icon: "🩹" },
            { cat: "PPE & Safety Wear", title: "Safety Jackets, Gloves & More", icon: "🦺" },
            { cat: "Electrical Safety", title: "Insulating Gloves & Mats", icon: "⚡" },
            { cat: "Fire Safety", title: "Extinguishers & Accessories", icon: "🧯" },
            { cat: "Workplace Safety", title: "Signages, Mirrors & More", icon: "⚠️" },
            { cat: "Road Safety", title: "Speed Humps, Delineators & More", icon: "🔶" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:border-[#fdbf11] transition">
              <div className="text-3xl mb-4 text-blue-900 bg-slate-50 w-12 h-12 flex items-center justify-center rounded-md border border-slate-100">
                {item.icon}
              </div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{item.cat}</p>
              <h3 className="font-bold text-slate-900 mb-4">{item.title}</h3>
              <a href="#contact" className="text-xs font-bold text-blue-900 hover:text-[#fdbf11]">Explore Details →</a>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10">
          <a 
            href="#contact" 
            className="inline-block bg-[#0a183d] text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-blue-950 transition shadow-md"
          >
            View All →
          </a>
        </div>
      </div>

      {/* 5. Latest Blog Section */}
      <div id="blog" className="bg-white py-16 px-6 md:px-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-10 text-center">Latest Safety Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Industrial PPE Compliance</h3>
              <p className="text-xs text-slate-600 mb-4">Essential standards for UAE industrial sites.</p>
              <a href="#contact" className="text-xs font-bold text-blue-900">Read More →</a>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Fire Safety Solutions</h3>
              <p className="text-xs text-slate-600 mb-4">Importance of reliable extinguisher maintenance.</p>
              <a href="#contact" className="text-xs font-bold text-blue-900">Read More →</a>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-lg mb-2">Traffic Hazard Control</h3>
              <p className="text-xs text-slate-600 mb-4">Preventing site accidents with effective signals.</p>
              <a href="#contact" className="text-xs font-bold text-blue-900">Read More →</a>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Footer Contact Bar */}
      <div id="contact" className="bg-[#0a183d] text-white py-12 px-6 md:px-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div><p className="font-bold text-[#fdbf11]">📍 Location</p><p>Mussafah-M10, Abu Dhabi</p></div>
          <div><p className="font-bold text-[#fdbf11]">📞 Phone</p><p>+971 56 108 0825</p></div>
          <div><p className="font-bold text-[#fdbf11]">✉️ Email</p><p>clearwayuae@gmail.com</p></div>
          <div><p className="font-bold text-[#fdbf11]">⏱️ Hours</p><p>Mon - Sat: 8:30 AM - 7:00 PM</p></div>
        </div>
      </div>
    </div>
  );
}
