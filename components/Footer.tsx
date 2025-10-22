import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 pb-14 border-t border-neutral-800 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        <div>
          <div className="text-sm text-neutral-400">Contact</div>
          <a href="mailto:support@platovalabs.com" className="text-base block" aria-label="Email support">support@platovalabs.com</a>
          <div className="text-xs text-neutral-500 mt-1">Email support@platovalabs.com</div>
          <div className="text-xs text-neutral-600 mt-1">We reply within 1–2 business days.</div>
        </div>

        <div className="flex flex-col items-start md:items-center">
          <nav aria-label="Footer navigation" className="flex gap-4 mb-2 flex-wrap justify-start md:justify-center">
            <Link href="/privacy" className="text-sm underline underline-offset-2 text-neutral-300" aria-label="Privacy policy">Privacy</Link>
            <Link href="/terms" className="text-sm underline underline-offset-2 text-neutral-300" aria-label="Terms of service">Terms</Link>
            <a href="mailto:support@platovalabs.com" className="text-sm underline underline-offset-2 text-neutral-300" aria-label="Email support">Contact</a>
            <Link href="/updates" className="text-sm underline underline-offset-2 text-neutral-300" aria-label="Updates page">Updates</Link>
          </nav>
        </div>

        <div className="flex items-center justify-end text-neutral-500 text-sm">
          <div className="flex flex-col items-end">
            <div>© {new Date().getFullYear()} Platova Labs. All rights reserved.</div>
            <div className="mt-2 flex gap-3">
              <a href="https://x.com/platovalabs" target="_blank" rel="noopener noreferrer" className="text-neutral-300 text-sm">X</a>
              <a href="https://www.tiktok.com/@platovalabs" target="_blank" rel="noopener noreferrer" className="text-neutral-300 text-sm">TikTok</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
