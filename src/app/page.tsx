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
        {/* Company Title */}
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
            <a href="#products" className="bg-[#fdbf11] text-slate-900 px-6 py-3 rounded-md font-bold inline-flex items-center gap-2 hover:bg-yellow-500 transition mt-4">
              Our Products →
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

      {/* 5. Product Categories Grid */}
      <div id="products" className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
        <h2 className="text-2xl font-black mb-2">Our Comprehensive Safety Range</h2>
        <div className="w-16 h-1 bg-[#fdbf11] mx-auto mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {["Site Utilities", "Traffic Management", "Emergency Care", "PPE & Safety Wear", "Electrical Safety", "Fire Safety", "Workplace Safety", "Road Safety"].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:border-[#fdbf11] transition">
              <h4 className="font-bold text-slate-900">{item}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Footer Contact Bar - Updated Hours */}
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
