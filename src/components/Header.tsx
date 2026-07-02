export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-green-950 text-white text-center text-xs py-2">
        Industrial Safety Supplier in Abu Dhabi | UAE Wide Delivery
      </div>

      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-lg text-green-900">
          CLEARWAY SAFETY
        </h1>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/industries">Industries</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>
        
        <a
          href="/contact"
          className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm"
        >
          Request Quote
        </a>
      </div>
    </header>
  );
}
