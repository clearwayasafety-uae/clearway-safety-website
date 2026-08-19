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
        <div className="flex items-center gap-3">
          {/* Logo with 141px width and 58px height */}
          <img 
  src="logo.jpg" 
  alt="Clearway Safety Logo" 
  style={{ width: "180px", height: "75px" }} 
  className="object-contain" 
/>
          <div className="text-2xl font-black tracking-tight">
            CLEARWAY <span className="text-[#fdbf11]">SAFETY</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-6 font-semibold text-sm text-slate-700">
          <a href="/" className="hover:text-blue-900">Home</a>
          <a href="#products" className="hover:text-blue-900">Our Products</a>
          <a href="#about" className="hover:text-blue-900">About Us</a>
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
          
          {/* Left Side: Text & Button */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Premium Industrial <br />
              <span className="text-[#fdbf11]">Safety Products & PPE</span>
            </h1>
            <p className="text-lg font-semibold text-slate-200 mb-3">Your Trusted Wholesale & Retail Supplier in Abu Dhabi</p>
            <p className="text-slate-400 text-sm mb-8 max-w-lg">
              Explore 5000+ high-quality safety products for every industry.
            </p>
            <a 
              href="#products" 
              className="bg-[#fdbf11] text-slate-900 px-6 py-3 rounded-md font-bold inline-flex items-center gap-2 hover:bg-yellow-500 transition"
            >
              Our Brand →
            </a>
          </div>

          {/* Right Side: Key Highlights */}
          <div id="why-choose-us" className="border-l-2 border-slate-700 pl-6 md:pl-10 space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-[#fdbf11] text-2xl">📦</span>
              <div>
                <h4 className="font-bold text-white">5000+ Products</h4>
                <p className="text-xs text-slate-400">Wide range for every need</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#fdbf11] text-2xl">🛒</span>
              <div>
                <h4 className="font-bold text-white">Wholesale & Retail</h4>
                <p className="text-xs text-slate-400">Best prices for all customers</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#fdbf11] text-2xl">🛡️</span>
              <div>
                <h4 className="font-bold text-white">Trusted Supplier</h4>
                <p className="text-xs text-slate-400">Serving across Abu Dhabi & UAE</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#fdbf11] text-2xl">🤝</span>
              <div>
                <h4 className="font-bold text-white">Bulk & Custom Orders</h4>
                <p className="text-xs text-slate-400">Committed to Excellence with Reliable Execution</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. Mini Features Strip */}
      <div className="max-w-7xl mx-auto -mt-6 px-6 relative z-10">
        <div className="bg-white rounded-xl shadow-md p-6 grid grid-cols-2 md:grid-cols-4 gap-6 border border-slate-100 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="text-2xl">🛡️</span>
            <div><p className="font-bold text-sm">Quality Assured</p><p className="text-xs text-slate-500">Premium quality products</p></div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 border-l pl-4">
            <span className="text-2xl">🏷️</span>
            <div><p className="font-bold text-sm">Best Prices</p><p className="text-xs text-slate-500">Competitive wholesale & retail</p></div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 border-l pl-4">
            <span className="text-2xl">🎧</span>
            <div><p className="font-bold text-sm">Expert Support</p><p className="text-xs text-slate-500">We're here to help you</p></div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 border-l pl-4">
            <span className="text-2xl">🤝</span>
            <div><p className="font-bold text-sm">Committed to Excellence</p><p className="text-xs text-slate-500">Reliable professional execution</p></div>
          </div>
        </div>
      </div>

      {/* 5. Product Categories Grid */}
      <div id="products" className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
        <h2 className="text-2xl font-black mb-2">Our Comprehensive Safety Range</h2>
        <div className="w-16 h-1 bg-[#fdbf11] mx-auto mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {[
            { cat: "Site Utilities", title: "Anti Slip Tapes", icon: "🚧" },
            { cat: "Traffic Management", title: "Traffic Cones & Barriers", icon: "🛑" },
            { cat: "Emergency Care", title: "First Aid Boxes & Kits", icon: "🩹" },
            { cat: "PPE & Safety Wear", title: "Safety Jackets, Gloves & More", icon: "🦺" },
            { cat: "Electrical Safety", title: "Insulating Gloves & More", icon: "⚡" },
            { cat: "Fire Safety", title: "Extinguishers & Accessories", icon: "🧯" },
            { cat: "Workplace Safety", title: "Signages, Mirrors & More", icon: "⚠️" },
            { cat: "Road Safety", title: "Speed Humps, Delineators & More", icon: "🔶" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:border-[#fdbf11] transition group">
              <div className="text-3xl mb-4 text-blue-900 bg-slate-50 w-12 h-12 flex items-center justify-center rounded-md border border-slate-100">
                {item.icon}
              </div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{item.cat}</p>
              <h4 className="font-bold text-slate-900 mb-4">{item.title}</h4>
              <a href="#contact" className="text-xs font-bold text-blue-900 hover:text-[#fdbf11]">Explore Product Details →</a>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Footer Contact Bar */}
      <div id="contact" className="bg-[#0a183d] text-white py-12 px-6 md:px-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div className="flex items-start gap-3">
            <span className="text-[#fdbf11] text-xl">📍</span>
            <div><p className="font-bold">Visit Our Store</p><p className="text-slate-400 text-xs">Mussafah-M10, Abu Dhabi - UAE</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#fdbf11] text-xl">📞</span>
            <div><p className="font-bold">Call Us</p><p className="text-slate-400 text-xs">+971 56 108 0825</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#fdbf11] text-xl">✉️</span>
            <div><p className="font-bold">Email Us</p><p className="text-slate-400 text-xs">clearwayuae@gmail.com</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#fdbf11] text-xl">⏱️</span>
            <div><p className="font-bold">Open Hours</p><p className="text-slate-400 text-xs">Mon - Sat: 8:30 AM - 7:00 PM</p></div>
          </div>
        </div>
      </div>

    </div>
  );
}
