export type UpdateItem = {
  id: string;
  version: string;
  title: string;
  date: string; // YYYY-MM-DD
  description: string;
  category: 'rebalance' | 'qrkit' | 'pdftrim' | string;
  link?: string;
};

export const UPDATES: UpdateItem[] = [
  {
    id: 'rebalance-1.0.2',
    version: 'v1.0.2',
    title: 'Rebalance — Performance update',
    date: '2025-10-10',
    description: 'Performance and stability improvements.',
    category: 'rebalance',
    link: '/apps/rebalance',
  },
  {
    id: 'rebalance-1.0.1',
    version: 'v1.0.1',
    title: 'Rebalance — Bug fixes',
    date: '2025-09-15',
    description: 'Minor bug fixes following the initial release.',
    category: 'rebalance',
    link: '/apps/rebalance',
  },
  {
    id: 'rebalance-1.0.0',
    version: 'v1.0.0',
    title: 'Rebalance — Initial release',
    date: '2025-08-01',
    description: 'Initial public release.',
    category: 'rebalance',
    link: '/apps/rebalance',
  },
];

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://platovalabs.com';
