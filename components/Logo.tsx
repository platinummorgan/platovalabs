import Link from 'next/link';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" aria-label="Platova Labs home" className={`inline-flex items-center gap-3 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect width="64" height="64" rx="12" fill="url(#g)" />
        <path d="M20 36c0-8 8-12 16-12v4c-6 0-12 2-12 8 0 6 6 8 12 8v4c-8 0-16-4-16-12z" fill="white" opacity="0.98" />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22D3EE" />
            <stop offset="1" stopColor="#6366F1" />
          </linearGradient>
        </defs>
      </svg>
      <span className="hidden sm:inline-block font-extrabold text-lg tracking-tight text-white">Platova Labs</span>
    </Link>
  );
}
