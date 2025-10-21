export const metadata = { title: 'Updates — Platova Labs' };

export default function Updates() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Updates</h1>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">October 2025</h2>
        <ul className="mt-2 list-disc pl-6 text-neutral-300">
          <li><strong>v1.0.5</strong> — INCOME TRACKING: Track multiple income sources with tax breakdowns, 10 income types, 8 frequency options, and automatic net/gross calculations.</li>
          <li><strong>v1.0.5</strong> — MULTI-CURRENCY SUPPORT: 150+ currencies with live exchange rates, automatic conversion across all screens, works offline with smart caching.</li>
          <li><strong>v1.0.5</strong> — Improvements: Larger dashboard pie chart (50% bigger); fixed currency rounding errors; enhanced CSV export — saves directly to Downloads.</li>
          <li><strong>v1.0.5</strong> — Bug fixes and stability improvements.</li>
        </ul>
        <ul className="mt-2 list-disc pl-6 text-neutral-300">
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
