import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 pb-14 border-t border-neutral-800 pt-6 flex flex-col md:flex-row items-start md:items-center gap-3 justify-between">
      <div>
        <div className="text-sm text-neutral-400">Contact</div>
        <a href="mailto:support@platovalabs.com" className="text-base" aria-label="Email support">support@platovalabs.com</a>
      </div>

      <div className="w-full md:w-auto flex flex-col items-start md:items-end">
        <nav aria-label="Footer navigation" className="flex gap-4 mb-2">
          <Link href="/privacy" className="text-sm underline underline-offset-2 text-neutral-300" aria-label="Privacy policy">Privacy</Link>
          <Link href="/terms" className="text-sm underline underline-offset-2 text-neutral-300" aria-label="Terms of service">Terms</Link>
          <Link href="/contact" className="text-sm underline underline-offset-2 text-neutral-300" aria-label="Contact page">Contact</Link>
        </nav>
        <div className="text-neutral-500 text-sm">© {new Date().getFullYear()} Platova Labs. All rights reserved.</div>
      </div>
    </footer>
  );
}
