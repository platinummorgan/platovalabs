"use client";

import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

export default function Header() {
  const path = usePathname() || '/';
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-black/40 border-b border-white/6">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-4">
          <Link href="#products" className={`text-sm px-2 py-1 rounded focus:ring-2 focus:ring-[var(--brand-cyan)] ${path === '/' ? 'aria-current' : ''}`}>Products</Link>
          <Link href="/updates" className="text-sm px-2 py-1 rounded focus:ring-2 focus:ring-[var(--brand-cyan)]">Updates</Link>
          <Link href="/contact" className="text-sm px-2 py-1 rounded focus:ring-2 focus:ring-[var(--brand-cyan)]">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
