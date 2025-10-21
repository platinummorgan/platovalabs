import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-50">
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold">404 — Page not found</h1>
        <p className="mt-4 text-neutral-400">We couldn't find that page.</p>
        <div className="mt-6">
          <Link href="/" className="underline text-indigo-400">Return home</Link>
        </div>
      </div>
    </main>
  );
}
