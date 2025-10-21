import Link from "next/link";
import { Button, Card } from "@/components/ui";
import { CATALOG } from "@/data/catalog";
import Footer from "@/components/Footer";
import Icons, { FinanceIcon, ToolsIcon, SportsIcon, ShopIcon, AppIcon, LabIcon } from '@/components/Icons';
import Logo from '@/components/Logo';
import HeroArt from '@/components/HeroArt';

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="pt-8 pb-8">
        <div className="section-wrap flex items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-4">
            <Link href="/updates" className="text-sm text-neutral-300">Updates</Link>
            <Link href="/contact" className="text-sm text-neutral-300">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="pt-6 pb-10">
        <div className="section-wrap grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-indigo)]">Small tools, big relief</span>
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-neutral-300 max-w-3xl">Practical apps that make dollars work harder.</p>
            <div className="mt-6 flex gap-3">
              <Link href="#products"><Button aria-label="Explore products">Explore products</Button></Link>
              <Link href="/contact"><Button className="bg-white/5" aria-label="Contact">Contact</Button></Link>
            </div>
          </div>
          <div className="flex justify-center">
            <HeroArt className="w-full max-w-md" />
          </div>
        </div>
      </section>

      {CATALOG.map(category => (
  <section id={category.key} key={category.key} className="pt-10 pb-8">
          <div className="section-wrap">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-neutral-300 opacity-80">{
                  category.key === 'finance' ? <Icons.FinanceIcon /> :
                  category.key === 'tools' ? <Icons.ToolsIcon /> :
                  category.key === 'sports' ? <Icons.SportsIcon /> :
                  category.key === 'shops' ? <Icons.ShopIcon /> :
                  category.key === 'mobile-apps' ? <Icons.AppIcon /> :
                  <Icons.LabIcon />
                }</span>
                <h2 className="text-2xl font-semibold">{category.title}</h2>
              </div>
              <span className="text-neutral-400 text-sm">{category.items.length} listed</span>
            </div>
            <div className="h-px mb-6 bg-gradient-to-r from-white/10 via-white/30 to-white/0" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {category.items.map((p: any) => (
              <Card key={p.name} className="p-5 hover:bg-neutral-900 transition">
                <div className="flex items-center justify-between">
                  <h3 className="text-[1.125rem] font-semibold leading-tight">{p.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">{p.tag}</span>
                </div>
                <p className="mt-2 text-neutral-300 text-sm leading-relaxed min-h-[48px]" style={{maxWidth: '50ch'}}>{p.blurb}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.href} target="_blank" rel="noreferrer" aria-label={`Open ${p.name}`}>
                    <Button aria-label={`Open ${p.name}`}>Open ↗</Button>
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
