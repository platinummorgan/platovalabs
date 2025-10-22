import React from 'react';

export default function HeroBillboard({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className} group`} aria-hidden>
      <svg viewBox="0 0 800 560" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" className="rounded-2xl transform transition-transform duration-500 group-hover:translate-y-[-6px] group-hover:scale-[1.02]">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#0EA5E9" stopOpacity="0.18" />
            <stop offset="1" stopColor="#7C3AED" stopOpacity="0.16" />
          </linearGradient>
          <radialGradient id="glow" cx="30%" cy="20%" r="60%">
            <stop offset="0" stopColor="#22D3EE" stopOpacity="0.22" />
            <stop offset="1" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="18" result="b" />
            <feBlend in="SourceGraphic" in2="b" />
          </filter>
        </defs>

        <rect x="0" y="0" width="800" height="560" rx="20" fill="url(#g1)" />

        {/* subtle glow circles */}
        <g filter="url(#soft)">
          <circle cx="160" cy="120" r="60" fill="url(#glow)" />
          <circle cx="640" cy="220" r="48" fill="#6366F1" fillOpacity="0.06" />
        </g>

        {/* composition shapes */}
  <rect x="72" y="188" rx="16" width="536" height="236" fill="#06111A" opacity="0.6" />
  <rect x="112" y="232" rx="12" width="420" height="72" fill="#0B1720" opacity="0.45" />
        <circle cx="640" cy="120" r="28" fill="#22D3EE" opacity="0.22" />

        {/* faint grid */}
        <g opacity="0.04" stroke="#ffffff">
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={i} x1={i * 40} y1={0} x2={i * 40} y2={560} />
          ))}
        </g>
      </svg>
      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{ boxShadow: 'inset 0 120px 140px -80px rgba(0,0,0,0.7)' }} />
      {/* glossy sheen */}
      <div className="absolute left-6 top-6 w-40 h-20 rounded-full blur-3xl opacity-30 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
    </div>
  );
}
