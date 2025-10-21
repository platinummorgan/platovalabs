export default function HeroArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 400" className={className} role="img" aria-hidden>
      <defs>
        <linearGradient id="h1" x1="0" x2="1">
          <stop offset="0" stopColor="#22D3EE" stopOpacity="0.9" />
          <stop offset="1" stopColor="#6366F1" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="url(#h1)" opacity="0.06" rx="24" />
      <g transform="translate(80,40)">
        <circle cx="80" cy="80" r="72" fill="#0B0C0F" opacity="0.6" />
        <circle cx="160" cy="120" r="60" fill="#22D3EE" opacity="0.14" />
        <rect x="240" y="40" width="220" height="120" rx="18" fill="#6366F1" opacity="0.08" />
        <g transform="translate(40,160)" fill="#fff" opacity="0.06">
          <rect x="0" y="0" width="120" height="80" rx="10" />
          <rect x="140" y="10" width="120" height="60" rx="10" />
        </g>
      </g>
    </svg>
  );
}
