export default function Home() {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col font-sans text-slate-800 bg-slate-50">
      
      {/* 1. Top Yellow Bar */}
      <div className="bg-[#fdbf11] flex flex-wrap items-center justify-center space-x-4 md:space-x-8 text-[10px] md:text-xs font-bold text-slate-900 shrink-0 py-1.5 px-2">
        <span>📍 Mussafah, Abu Dhabi</span>
        <span className="hidden md:inline">🚚 Fast Delivery Across UAE</span>
        <span>🛡️ Quality Products | Competitive Prices</span>
      </div>

      {/* 2. Navigation Bar */}
      <nav className="bg-white px-6 md:px-12 flex justify-between items-center shadow-sm shrink-0 py-3">
        <div className="text-xl md:text-2xl font-black tracking-tight">
          CLEARWAY <span className="text-[#fdbf11]">SAFETY</span>
        </div>
        <div className="hidden md:flex space-x-6 font-semibold text-sm text-slate-700">
          <a href="#" className="hover:text-blue-900">Home</a>
          <a href="#" className="hover:text-blue-900">Our Products</a>
          <a href="#" className="hover:text-blue-900">Why Choose Us</a>
          <a href="#" className="hover:text-blue-900">Contact Us</a>
        </div>
        <button className="bg-[#00a859] text-white px-4 py-2 rounded-md font-semibold text-xs md:text-sm flex items-center gap-2 hover:bg-emerald-700 transition">
          <span className="text-lg">💬</span> WhatsApp
        </button>
      </nav>

      {/* 3. Hero Section (Deep Navy Blue) */}
      <div className="bg-[#0a183d] text-white shrink-0 py-6 md:py-10 px-6 md:px-12 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-3">
              Premium Industrial <br />
              <span className="text-[#fdbf11]">Safety Products & PPE</span>
            </h1>
            <p className="text-sm md:text-base text-slate-300 mb-6 max-w-md">
              Your Trusted Wholesale & Retail Supplier in Abu Dhabi. Explore 5000+ high-quality safety products.
            </p>
            <button className="bg-[#fdbf11] text-slate-900 px-6 py-2.5 rounded-md font-bold text-sm hover:bg-yellow-500 transition">
              Explore Our Products →
            </button>
          </div>

          <div className="hidden md:grid border-l-2 border-slate-700 pl-8 grid-cols-2 gap-6">
            <div className="flex gap-3 items-center">
              <span className="text-[#fdbf11] text-2xl">📦</span>
              <div><h4 className="font-bold text-sm text-white">5000+ Products</h4></div>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-[#fdbf11] text-2xl">🛒</span>
              <div><h4 className="font-bold text-sm text-white">Wholesale & Retail</h4></div>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-[#fdbf11] text-2xl">🛡️</span>
              <div><h4 className="font-bold text-sm text-white">Trusted Supplier</h4></div>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-[#fdbf11] text-2xl">🚚</span>
              <div><h4 className="font-bold text-sm text-white">Fast Delivery</h4></div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Product Categories Grid (Takes remaining space) */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 py-4 flex flex-col justify-center">
        <h2 className="text-lg md:text-xl font-black mb-1 text-center">Our Comprehensive Safety Range</h2>
        <div className="w-12 h-1 bg-[#fdbf11] mx-auto mb-6"></div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { cat: "Site Utilities", title: "Anti Slip Tapes", icon: "🚧" },
            { cat: "Traffic Management", title: "Traffic Cones", icon: "🛑" },
            { cat: "Emergency Care", title: "First Aid Kits", icon: "🩹" },
            { cat: "PPE & Workwear", title: "Safety Jackets", icon: "🦺" },
            { cat: "Electrical Safety", title: "Insulating Gloves", icon: "⚡" },
            { cat: "Fire Safety", title: "Extinguishers", icon: "🧯" },
            { cat: "Workplace", title: "Signages & Mirrors", icon: "⚠️" },
            { cat: "Road Safety", title: "Speed Humps", icon: "🔶" }
          ].map((item, i) => (
             <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex items-center gap-4 hover:border-[#fdbf11] transition cursor-pointer">
              <div className="text-2xl text-blue-900 bg-slate-50 w-12 h-12 flex items-center justify-center rounded-md border border-slate-100 shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-[10px] font-bold text-blue-600 uppercase mb-0.5">{item.cat}</p>
                <h4 className="font-bold text-xs md:text-sm text-slate-900">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Footer Contact Bar */}
      <div className="bg-[#0a183d] text-white py-4 px-6 md:px-12 shrink-0 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-xs md:text-sm gap-4">
          <div className="flex gap-2 items-center"><span className="text-[#fdbf11]">📍</span><span>Store: Mussafah, Abu Dhabi</span></div>
          <div className="flex gap-2 items-center"><span className="text-[#fdbf11]">📞</span><span>+971 50 123 4567</span></div>
          <div className="flex gap-2 items-center"><span className="text-[#fdbf11]">✉️</span><span>info@clearwaysafety.com</span></div>
          <div className="hidden md:flex gap-2 items-center"><span className="text-[#fdbf11]">⏱️</span><span>Sat - Thu: 8:00 AM - 6:00 PM</span></div>
        </div>
      </div>

    </div>
  );
}
