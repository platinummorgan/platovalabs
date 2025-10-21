import React from "react";
export function Button({ className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={
        'inline-flex items-center gap-2 rounded-2xl px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan)] ' +
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
        'rounded-2xl transition transform hover:-translate-y-0.5 hover:shadow-xl ' +
        'card-glass ' + className
      }
    >
      {children}
    </div>
  );
}
