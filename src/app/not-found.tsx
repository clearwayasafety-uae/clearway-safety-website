import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f4ea] px-6 py-16">
      <div className="max-w-xl rounded-[2rem] border border-[#d6e2dd] bg-white p-10 shadow-sm text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f59e0b]">Page not found</p>
        <h1 className="mt-4 text-3xl font-semibold text-[#173b2d]">The page you are looking for is unavailable.</h1>
        <p className="mt-4 text-lg leading-8 text-[#35594a]">
          Please return to the homepage or contact our team for the product you need.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-[#173b2d] px-6 py-3 font-semibold text-white">
          Go to homepage
        </Link>
      </div>
    </div>
  );
}
