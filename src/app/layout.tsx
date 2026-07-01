import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clearway Safety UAE | Industrial Safety Equipment Supplier",
  description:
    "Clearway Safety & General Trading LLC OPC provides PPE, road safety, fire safety, and industrial safety equipment across UAE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">

        {/* NAVBAR */}
        <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
          <h1 className="font-bold text-green-900">
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
            href="https://wa.me/971561080825"
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            target="_blank"
          >
            WhatsApp
          </a>
        </header>

        {children}

      </body>
    </html>
  );
}