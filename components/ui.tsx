import React from "react";
export function Button({ className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={"inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/10 " + className}
      {...props}
    />
  );
}
export function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={"rounded-2xl border border-neutral-800 bg-neutral-900/60 " + className}>{children}</div>;
}
