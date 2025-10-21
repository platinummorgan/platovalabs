import Link from 'next/link';

export const metadata = { title: 'Updates — Platova Labs' };

export default function Updates() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Updates</h1>
        <Link href="/" className="text-sm text-cyan-400 hover:underline">Back to Home</Link>
      </div>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">October 2025</h2>
        <ul className="mt-2 list-disc pl-6 text-neutral-300">
          <li>
            <strong>Rebalance v1.0.5</strong> —
            <ul className="mt-2 list-disc pl-6 text-neutral-300">
              <li><strong>Income tracking:</strong> Track multiple income sources with tax breakdowns, 10 income types, 8 frequency options, and automatic net/gross calculations.</li>
              <li><strong>Multi-currency support:</strong> 150+ currencies with live exchange rates, automatic conversion across all screens, and offline caching for uninterrupted use.</li>
              <li><strong>Improvements:</strong> Larger dashboard pie chart (50% bigger); fixed currency rounding errors; enhanced CSV export — saves directly to Downloads.</li>
              <li><strong>Bug fixes:</strong> Various stability and edge-case fixes.</li>
            </ul>
          </li>
        </ul>

        <ul className="mt-4 list-disc pl-6 text-neutral-300">
          <li>Rebalance 1.0.2 — small performance and stability improvements.</li>
          <li>QRKit tweak — adjusted default sizes for better scanning compatibility.</li>
          <li>PDFTrim bugfix — fixed an edge case when trimming large documents.</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">September 2025</h2>
        <ul className="mt-2 list-disc pl-6 text-neutral-300">
          <li>Rebalance 1.0.1 — initial public release.</li>
          <li>QRKit.app — small UX polish and share link fix.</li>
          <li>PDFTrim — improved compression heuristics.</li>
        </ul>
      </section>
    </main>
  );
}
