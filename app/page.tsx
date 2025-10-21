import Link from "next/link";
import { Button, Card } from "@/components/ui";

const PRODUCTS = [
  { name: "Rebalance (Android)", blurb: "Budget & alerts with debt payoff and portfolio guidance.", href: "https://play.google.com/store/apps/details?id=com.wealthdial.app", tag: "Finance" },
  { name: "QRKit.app", blurb: "Fast, privacy-friendly QR code generator.", href: "https://qrkit.app", tag: "Tools" },
  { name: "PDFTrim.com", blurb: "Bulk trim, split, and compress PDFs in the browser.", href: "https://pdftrim.com", tag: "Docs" },
  { name: "PayOfPath.com", blurb: "Amortization + payoff planners for loans and debts.", href: "https://payofpath.com", tag: "Finance" },
  { name: "Ripstuff.net", blurb: "A playful graveyard of discontinued tech and products.", href: "https://ripstuff.net", tag: "Fun" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="text-neutral-400 text-sm">platovalabs.com</div>
        <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight">Platova Labs</h1>
        <p className="mt-3 text-lg sm:text-xl text-neutral-300 max-w-2xl">Tools for working-class wallets.</p>
        <div className="mt-6 flex gap-3">
          <Link href="#products"><Button>Explore products</Button></Link>
          <Link href="/contact"><Button className="bg-white/5">Contact</Button></Link>
        </div>
      </header>

      <section id="products" className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Products</h2>
          <span className="text-neutral-400 text-sm">{PRODUCTS.length} live</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map(p => (
            <Card key={p.name} className="p-5 hover:bg-neutral-900 transition">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold leading-tight">{p.name}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">{p.tag}</span>
              </div>
              <p className="mt-2 text-neutral-300 text-sm leading-relaxed min-h-[48px]">{p.blurb}</p>
              <div className="mt-4">
                <a href={p.href} target="_blank" rel="noreferrer">
                  <Button>Visit ↗</Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-5">
            <h4 className="font-semibold">Privacy-first</h4>
            <p className="text-sm text-neutral-300 mt-1">No dark patterns. Clear pricing. Sensible defaults.</p>
          </Card>
          <Card className="p-5">
            <h4 className="font-semibold">Built fast</h4>
            <p className="text-sm text-neutral-300 mt-1">We ship small tools that solve real problems.</p>
          </Card>
          <Card className="p-5">
            <h4 className="font-semibold">One hub</h4>
            <p className="text-sm text-neutral-300 mt-1">All apps, docs, and support in one place.</p>
          </Card>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 pb-14 border-t border-neutral-800 pt-6 flex flex-col md:flex-row items-start md:items-center gap-3 justify-between">
        <div>
          <div className="text-sm text-neutral-400">Contact</div>
          <a href="mailto:support@platovalabs.com" className="text-base">support@platovalabs.com</a>
        </div>
        <div className="text-neutral-500 text-sm">© {new Date().getFullYear()} Platova Labs. All rights reserved.</div>
      </footer>
    </main>
  );
}
