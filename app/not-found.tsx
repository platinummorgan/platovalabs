import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-50">
      <div className="max-w-2xl text-center px-6 py-24">
        <h1 className="text-5xl font-extrabold">404</h1>
        <p className="mt-4 text-xl text-neutral-300">We can’t find the page you’re looking for.</p>
        <p className="mt-2 text-neutral-400">Try going back home — we keep small, useful tools there.</p>
        <div className="mt-6">
          <Link href="/" className="inline-flex items-center rounded-md bg-white/5 px-4 py-2 text-sm">Return home</Link>
        </div>
      </div>
    </main>
  );
}
