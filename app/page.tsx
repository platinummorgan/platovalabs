import Link from "next/link";
import { Button, Card } from "@/components/ui";
import { CATALOG } from "@/data/catalog";
import Footer from "@/components/Footer";
import Icons, { FinanceIcon, ToolsIcon, SportsIcon, ShopIcon, AppIcon, LabIcon } from '@/components/Icons';
import Logo from '@/components/Logo';
import HeroBillboard from '@/components/HeroBillboard';

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Billboard hero */}
      <section className="relative w-full overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(34,211,238,0.06),transparent),linear-gradient(180deg,rgba(3,7,11,0.85),rgba(4,6,8,0.95))]" />
        <div className="absolute inset-0 opacity-5 bg-[url('/noise.png')]" />
        <div className="container relative z-10 grid md:grid-cols-2 items-center" style={{ minHeight: '70vh', maxHeight: '680px' }}>
          <div>
            <h1 id="hero-heading" className="mt-6 text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight site-headline">
              Small tools,
              <br />
              big relief
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-neutral-300 max-w-3xl">Practical apps that make dollars work harder.</p>
            <div className="mt-6 flex gap-3">
              <Link href="#products"><Button className="btn-brand btn-pill" aria-label="Explore products">Explore products</Button></Link>
              <Link href="/contact"><Button className="btn-ghost btn-pill" aria-label="Contact">Contact</Button></Link>
            </div>
            {/* progress dots (decorative) */}
            <div className="mt-8 flex gap-2 items-center" aria-hidden>
              <div className="w-8 h-1 bg-white/12 rounded" />
              <div className="w-2 h-2 bg-white/10 rounded-full" />
              <div className="w-2 h-2 bg-white/8 rounded-full" />
              <div className="w-2 h-2 bg-white/6 rounded-full" />
            </div>
          </div>
          <div className="flex justify-center">
            <HeroBillboard className="w-full max-w-[720px] h-[420px]" />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 -120px 120px -60px rgba(0,0,0,0.6)' }} />
      </section>

      {/* Value props row */}
      <section className="pt-8 pb-8">
        <div className="container grid sm:grid-cols-3 gap-4">
          <div tabIndex={0} className="card-glass rounded-xl p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)]">
            <div className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect width="24" height="24" rx="6" fill="#0B1720" />
                <path d="M6 12h12" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div>
                <div className="font-semibold">Privacy-first</div>
                <div className="text-sm muted">No dark patterns. Clear pricing.</div>
              </div>
            </div>
          </div>
          <div tabIndex={0} className="card-glass rounded-xl p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)]">
            <div className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect width="24" height="24" rx="6" fill="#0B1720" />
                <circle cx="12" cy="12" r="4" fill="#6366F1" />
              </svg>
              <div>
                <div className="font-semibold">Built fast</div>
                <div className="text-sm muted">Small tools that solve real problems.</div>
              </div>
            </div>
          </div>
          <div tabIndex={0} className="card-glass rounded-xl p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)]">
            <div className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect width="24" height="24" rx="6" fill="#0B1720" />
                <path d="M6 8h12v8H6z" fill="#22D3EE" />
              </svg>
              <div>
                <div className="font-semibold">One hub</div>
                <div className="text-sm muted">All apps, docs, and support in one place.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

  <div id="products" />
  {CATALOG.map(category => (
  <section id={category.key} key={category.key} className="pt-10 pb-8">
    <div className="container">
            <div className="flex items-center justify-between mb-4">
              <div className="section-header">
                <div className="section-overline text-neutral-400">{category.title}</div>
                <div className="section-divider" />
                <div className="text-neutral-300 opacity-80">{
                  category.key === 'finance' ? <Icons.FinanceIcon /> :
                  category.key === 'tools' ? <Icons.ToolsIcon /> :
                  category.key === 'sports' ? <Icons.SportsIcon /> :
                  category.key === 'shops' ? <Icons.ShopIcon /> :
                  category.key === 'mobile-apps' ? <Icons.AppIcon /> :
                  <Icons.LabIcon />
                }</div>
              </div>
              <span className="text-neutral-400 text-sm">{category.items.length} listed</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((p: any) => (
              <Card key={p.name} className="hover:bg-neutral-900 transition">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="card-icon" aria-hidden>
                      {/* simple monochrome icon placeholder */}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" stroke="white" strokeOpacity="0.6" strokeWidth="1.2"/></svg>
                    </div>
                    <h3 className="text-[1.125rem] font-semibold leading-tight">{p.name}</h3>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">{p.tag}</span>
                </div>
                <p className="mt-2 text-neutral-300 text-sm leading-relaxed min-h-[48px]" style={{maxWidth: '50ch'}}>{p.blurb}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.href} target="_blank" rel="noreferrer" aria-label={`Open ${p.name}`}>
                    <Button className="btn-ghost" aria-label={`Open ${p.name}`}>Open ↗</Button>
                  </a>
                  {/* changelog link intentionally removed; updates are on the /updates page */}
                </div>
              </Card>
            ))}
            </div>
          </div>
          {category.key === 'in-the-works' && (
            <div className="mt-4 text-sm">
              <a href="mailto:support@platovalabs.com" className="text-cyan-400 underline">Notify me</a>
            </div>
          )}
        </section>
      ))}

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

      <Footer />
    </main>
  );
}
