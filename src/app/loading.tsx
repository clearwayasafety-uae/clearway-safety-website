export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f4ea]">
      <div className="flex items-center gap-3 rounded-full border border-[#d6e2dd] bg-white px-6 py-3 shadow-sm">
        <div className="h-3 w-3 animate-pulse rounded-full bg-[#f59e0b]" />
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#173b2d]">Loading</p>
      </div>
    </div>
  );
}
