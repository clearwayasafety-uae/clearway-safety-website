export default function Home() {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50">
      
      {/* 1. Top Yellow Bar */}
      <div className="bg-[#fdbf11] py-2 px-6 flex flex-wrap justify-center md:justify-around text-xs md:text-sm font-bold text-slate-900">
        <span>📍 Mussafah-M10, Abu Dhabi - UAE | مصفح، أبوظبي</span>
        <span>🛒 Wholesale & Retail | جملة ومفرق</span>
        <span>🛡️ Quality Products | منتجات عالية الجودة</span>
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
          <p className="text-[10px] md:text-xs font-semibold text-slate-600 mt-0.5" dir="rtl">
            شركة كليروэй للسلامة والتجارة العامة ذ.م.م - ش.و.و
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Text & Button (Cols 1 to 5) */}
          <div className="md:col-span-5">
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

          {/* Middle: Key Highlights (Cols 6 to 8) */}
          <div id="why-choose-us" className="md:col-span-3 border-l-2 border-slate-700 pl-6 space-y-6">
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

          {/* Right Side: Attractive Contact Card with Arabic (Cols 9 to 12) */}
          <div className="md:col-span-4 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 border-[#fdbf11]/40 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#fdbf11]/10 rounded-full blur-xl"></div>
            <span className="inline-block bg-[#fdbf11]/20 text-[#fdbf11] text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wider">
              Quick Inquiry / استفسار سريع
            </span>
            <h3 className="text-slate-300 font-semibold text-xs mb-1">Call Us Directly / اتصل بنا مباشدة</h3>
            <a 
              href="tel:+971561080825" 
              className="text-2xl md:text-3xl font-black text-white hover:text-[#fdbf11] transition tracking-tight block mb-3"
            >
              +971 56 108 0825
            </a>
            <div className="border-t border-slate-700 pt-4 flex flex-col gap-2">
              <a 
                href="https://wa.me/971561080825" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#00a859] text-white py-2.5 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-emerald-700 transition shadow-md"
              >
                <span>💬</span> Chat on WhatsApp / واتساب
              </a>
              <p className="text-[11px] text-slate-400 mt-1">Mon - Sat: 8:30 AM - 7:00 PM</p>
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

      {/* 5. Product Categories Grid with View All Option */}
      <div id="products" className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-2">Our Comprehensive Safety Range </h2>
        <p className="text-slate-600 text-sm mb-2">Explore our extensive industrial safety inventory available for wholesale & retail.</p>
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
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:border-[#fdbf11] transition group">
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

      {/* 6. Latest Blog / News Section */}
      <div id="blog" className="bg-white py-16 px-6 md:px-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-2">Latest Safety Insights & News</h2>
            <div className="w-16 h-1 bg-[#fdbf11] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <p className="text-xs text-blue-600 font-bold mb-2">SAFETY GUIDELINES • UAE</p>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Essential PPE Requirements for Industrial Sites in Abu Dhabi</h3>
              <p className="text-xs text-slate-600 mb-4">Learn about standard safety equipment compliance and regulations across Mussafah industrial areas.</p>
              <a href="#contact" className="text-xs font-bold text-blue-900 hover:text-[#fdbf11]">Read More →</a>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <p className="text-xs text-blue-600 font-bold mb-2">WORKPLACE SAFETY</p>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Importance of High-Quality Fire Extinguishers & Accessories</h3>
              <p className="text-xs text-slate-600 mb-4">Discover the right fire safety gear needed to ensure commercial and industrial property compliance.</p>
              <a href="#contact" className="text-xs font-bold text-blue-900 hover:text-[#fdbf11]">Read More →</a>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <p className="text-xs text-blue-600 font-bold mb-2">TRAFFIC MANAGEMENT</p>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Effective Road Safety Solutions with Speed Humps & Cones</h3>
              <p className="text-xs text-slate-600 mb-4">Improve site traffic flow and hazard prevention using heavy-duty road safety items.</p>
              <a href="#contact" className="text-xs font-bold text-blue-900 hover:text-[#fdbf11]">Read More →</a>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Footer Contact Bar */}
      <div id="contact" className="bg-[#0a183d] text-white py-12 px-6 md:px-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div className="flex items-start gap-3">
            <span className="text-[#fdbf11] text-xl">📍</span>
            <div><p className="font-bold">Visit Our Store / متجرنا</p><p className="text-slate-400 text-xs">Mussafah-M10, Abu Dhabi - UAE</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#fdbf11] text-xl">📞</span>
            <div><p className="font-bold">Call Us / اتصل بنا</p><p className="text-slate-400 text-xs">+971 56 108 0825</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#fdbf11] text-xl">✉️</span>
            <div><p className="font-bold">Email Us / البريد</p><p className="text-slate-400 text-xs">clearwayuae@gmail.com</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#fdbf11] text-xl">⏱️</span>
            <div><p className="font-bold">Open Hours / أوقات العمل</p><p className="text-slate-400 text-xs">Mon - Sat: 8:30 AM - 7:00 PM</p></div>
          </div>
        </div>
      </div>

    </div>
  );
}
