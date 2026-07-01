"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f4ea] px-6 py-16">
      <div className="max-w-xl rounded-[2rem] border border-[#d6e2dd] bg-white p-10 shadow-sm text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f59e0b]">Something went wrong</p>
        <h1 className="mt-4 text-3xl font-semibold text-[#173b2d]">We could not load this page.</h1>
        <p className="mt-4 text-lg leading-8 text-[#35594a]">
          Please try again. If this keeps happening, contact our team for prompt assistance.
        </p>
        <button
          onClick={() => reset()}
          className="mt-8 rounded-full bg-[#173b2d] px-6 py-3 font-semibold text-white"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
