"use client";

import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const path = usePathname() || '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-black/40 border-b border-white/6">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
        </Link>
        
        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-4">
          <Link href="/#products" className={`text-sm px-2 py-1 rounded focus:ring-2 focus:ring-[var(--brand-cyan)] ${path === '/' ? 'aria-current' : ''}`}>Products</Link>
          <Link href="/updates" className="text-sm px-2 py-1 rounded focus:ring-2 focus:ring-[var(--brand-cyan)]">Updates</Link>
          <a 
            href="mailto:support@platovalabs.com" 
            className="text-sm px-2 py-1 rounded focus:ring-2 focus:ring-[var(--brand-cyan)]" 
            aria-label="Email support"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).plausible) {
                (window as any).plausible('mailto - Click', { props: { location: 'Header' } });
              }
            }}
          >
            Contact
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden text-neutral-300 hover:text-white transition-colors"
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}
