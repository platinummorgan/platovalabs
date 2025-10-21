import React from 'react';

export const Icon = ({ children, title = '' }: { children: React.ReactNode; title?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden={title ? 'false' : 'true'} role="img">
    {title ? <title>{title}</title> : null}
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{children}</g>
  </svg>
);

export const FinanceIcon = ({ title = 'Finance' }: { title?: string }) => (
  <Icon title={title}>
    <path d="M4 19h16" />
    <path d="M6 12h3v7" />
    <path d="M15 7h3v12" />
    <path d="M9 4h6v16" />
  </Icon>
);

export const ToolsIcon = ({ title = 'Tools' }: { title?: string }) => (
  <Icon title={title}>
    <path d="M14 8l6-6" />
    <path d="M14 8l-6 6" />
    <path d="M7 17l3-3" />
    <path d="M10 14l4 4" />
  </Icon>
);

export const SportsIcon = ({ title = 'Sports' }: { title?: string }) => (
  <Icon title={title}>
    <circle cx="12" cy="8" r="3" />
    <path d="M5 19c2-3 6-5 11-5" />
  </Icon>
);

export const ShopIcon = ({ title = 'Shop' }: { title?: string }) => (
  <Icon title={title}>
    <path d="M3 6h3l1 12h10l1-12h3" />
    <path d="M16 6V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2" />
  </Icon>
);

export const AppIcon = ({ title = 'App' }: { title?: string }) => (
  <Icon title={title}>
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path d="M8 8h8v8H8z" />
  </Icon>
);

export const LabIcon = ({ title = 'Lab' }: { title?: string }) => (
  <Icon title={title}>
    <path d="M6 7h12" />
    <path d="M9 7v10a3 3 0 0 0 6 0V7" />
    <path d="M12 3v4" />
  </Icon>
);

const All = { FinanceIcon, ToolsIcon, SportsIcon, ShopIcon, AppIcon, LabIcon };
export default All;
