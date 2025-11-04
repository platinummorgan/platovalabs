'use client';
import Link from "next/link";
import { Button, Card } from "@/components/ui";
import { CATALOG } from "@/data/catalog";
import Footer from "@/components/Footer";
import Icons, { FinanceIcon, ToolsIcon, SportsIcon, ShopIcon, AppIcon, LabIcon } from '@/components/Icons';
import Logo from '@/components/Logo';
import HeroBillboard from '@/components/HeroBillboard';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Billboard hero */}
      <section className="relative w-full overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_15%_15%,rgba(34,211,238,0.15),transparent),radial-gradient(800px_600px_at_85%_40%,rgba(99,102,241,0.12),transparent),linear-gradient(180deg,rgba(3,7,11,0.9),rgba(4,6,8,0.95))]" />
        <div className="absolute inset-0 opacity-5 bg-[url('/noise.png')]" />
        <div className="container relative z-10 grid md:grid-cols-2 items-center" style={{ minHeight: '70vh', maxHeight: '680px' }}>
          <div>
            <h1 id="hero-heading" className="mt-6 text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight site-headline">
              Small tools,
              <br />
              big relief
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-neutral-300 max-w-3xl">Practical apps that make dollars work harder.</p>
            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <Link href="#products">
                <Button 
                  className="btn-brand btn-pill text-base sm:text-lg px-6 py-3 animate-pulse" 
                  aria-label="Explore products"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).plausible) {
                      (window as any).plausible('Hero CTA - Explore');
                    }
                  }}
                >
                  Explore products
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  className="btn-ghost btn-pill border-2" 
                  aria-label="Get help"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).plausible) {
                      (window as any).plausible('Hero CTA - Contact');
                    }
                  }}
                >
                  Get help
                </Button>
              </Link>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-neutral-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Join 10,000+ users building better financial habits</span>
            </div>
            {/* progress dots (decorative) */}
            <div className="mt-6 flex gap-2 items-center" aria-hidden>
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
          <div tabIndex={0} className="card-glass rounded-xl p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)] hover:border-cyan-500/30 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 flex items-center justify-center border border-cyan-500/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-cyan-100">Privacy-first</div>
                <div className="text-sm text-neutral-400">No dark patterns. Clear pricing.</div>
              </div>
            </div>
          </div>
          <div tabIndex={0} className="card-glass rounded-xl p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)] hover:border-indigo-500/30 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 flex items-center justify-center border border-indigo-500/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-indigo-100">Built fast</div>
                <div className="text-sm text-neutral-400">Small tools that solve real problems.</div>
              </div>
            </div>
          </div>
          <div tabIndex={0} className="card-glass rounded-xl p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)] hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center border border-purple-500/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="#A78BFA" strokeWidth="2"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="#A78BFA" strokeWidth="2"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="#A78BFA" strokeWidth="2"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="#A78BFA" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-purple-100">One hub</div>
                <div className="text-sm text-neutral-400">All apps, docs, and support in one place.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Social proof */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Trusted by makers and savers</h2>
            <p className="text-neutral-400 mt-2">Real feedback from people building better financial habits</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card-glass rounded-xl p-6 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FCD34D" aria-hidden>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm text-neutral-300 mb-4">"PayOfPath helped me visualize my debt payoff timeline. Paid off $12K in 18 months using the avalanche method."</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center text-xs font-semibold">SJ</div>
                <div>
                  <div className="text-sm font-semibold">Sarah J.</div>
                  <div className="text-xs text-neutral-500">PayOfPath user</div>
                </div>
              </div>
            </div>
            
            <div className="card-glass rounded-xl p-6 hover:border-indigo-500/30 transition-all">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FCD34D" aria-hidden>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm text-neutral-300 mb-4">"QRKit is my go-to for quick QR codes. No signup, no tracking, just works. Perfect for event organizers."</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-semibold">MT</div>
                <div>
                  <div className="text-sm font-semibold">Marcus T.</div>
                  <div className="text-xs text-neutral-500">Event coordinator</div>
                </div>
              </div>
            </div>
            
            <div className="card-glass rounded-xl p-6 hover:border-purple-500/30 transition-all">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FCD34D" aria-hidden>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm text-neutral-300 mb-4">"Rebalance keeps me on track with budget alerts and portfolio rebalancing reminders. Simple and effective."</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-xs font-semibold">AP</div>
                <div>
                  <div className="text-sm font-semibold">Alex P.</div>
                  <div className="text-xs text-neutral-500">Android user since 2024</div>
                </div>
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
            {category.items.map((p: any) => {
              // Get category icon
              const CategoryIcon = 
                category.key === 'finance' ? Icons.FinanceIcon :
                category.key === 'tools' ? Icons.ToolsIcon :
                category.key === 'sports' ? Icons.SportsIcon :
                category.key === 'shops' ? Icons.ShopIcon :
                category.key === 'mobile-apps' ? Icons.AppIcon :
                Icons.LabIcon;

              return (
              <Card key={p.name} className="hover:bg-neutral-900 transition">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="card-icon" aria-hidden>
                      <CategoryIcon />
                    </div>
                    <h3 className="text-[1.125rem] font-semibold leading-tight">{p.name}</h3>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">{p.tag}</span>
                </div>
                
                {/* Badges and platform */}
                <div className="mt-2 flex items-center gap-2 flex-wrap">
                  {p.badge && (
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                      p.badge === 'Popular' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' :
                      p.badge === 'Free' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                      p.badge === 'New' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' :
                      'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                    }`}>
                      {p.badge}
                    </span>
                  )}
                  {p.platform && (
                    <span className="text-xs text-neutral-500 flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-neutral-500">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      {p.platform}
                    </span>
                  )}
                </div>
                
                <p className="mt-2 text-neutral-300 text-sm leading-relaxed" style={{maxWidth: '50ch'}}>{p.blurb}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a 
                    href={p.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label={`Open ${p.name}`}
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).plausible) {
                        (window as any).plausible('Product Card - Open', { props: { product: p.name, category: category.title } });
                      }
                    }}
                  >
                    <Button className="btn-ghost group/btn" aria-label={`Open ${p.name}`}>
                      <span>Open</span>
                      <span className="inline-block transition-transform group-hover/btn:translate-x-1">↗</span>
                    </Button>
                  </a>
                  {/* changelog link intentionally removed; updates are on the /updates page */}
                </div>
              </Card>
              );
            })}
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

      {/* FAQ Section */}
      <FAQ />

      {/* Trust badges */}
      <section className="py-8 border-t border-neutral-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-sm text-neutral-500">Committed to your privacy and security</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center gap-2 p-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="text-xs text-neutral-400 text-center font-medium">Privacy First</div>
              </div>
              <div className="flex flex-col items-center gap-2 p-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-indigo-400">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div className="text-xs text-neutral-400 text-center font-medium">Secure Data</div>
              </div>
              <div className="flex flex-col items-center gap-2 p-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div className="text-xs text-neutral-400 text-center font-medium">99.9% Uptime</div>
              </div>
              <div className="flex flex-col items-center gap-2 p-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-indigo-400">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 10h8M8 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div className="text-xs text-neutral-400 text-center font-medium">1-2 Day Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
