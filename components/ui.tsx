import React from "react";
export function Button({ className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={
        'inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ' +
        className
      }
      {...props}
    />
  );
}

export function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={
        'rounded-2xl border border-white/10 bg-white/5 transition transform hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:border-white/20 hover:ring-0 hover:ring-white/15 ' +
        className
      }
    >
      {children}
    </div>
  );
}
