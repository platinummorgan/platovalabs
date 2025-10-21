export const CATALOG = [
  {
    key: 'finance',
    title: 'Finance',
    items: [
      { name: 'PayOfPath.com', blurb: 'Amortization + payoff planners for loans and debts.', href: 'https://payofpath.com', tag: 'Finance' },
    ],
  },
  {
    key: 'tools',
    title: 'Tools',
    items: [
      { name: 'QRKit.app', blurb: 'Fast, privacy-friendly QR code generator.', href: 'https://qrkit.app', tag: 'Tools' },
      { name: 'PDFTrim.app', blurb: 'Bulk trim, split, and compress PDFs in the browser.', href: 'https://pdftrim.app', tag: 'Docs' },
    ],
  },
  {
    key: 'sports',
    title: 'Sports',
    items: [
      { name: 'TikTok', blurb: 'Short sports predictions & picks.', href: 'https://www.tiktok.com/@predict_a_sport', tag: 'Sports' },
    ],
  },
  {
    key: 'shops',
    title: 'Shops & Publishing',
    items: [
      { name: 'Etsy Store', blurb: 'Merch & digital downloads.', href: 'https://www.etsy.com/shop/PlatLabs?ref=shop-header-name&listing_id=4390248520&from_page=listing', tag: 'Store' },
      { name: 'Kindle Publishing', blurb: 'Books and guides on Amazon Kindle.', href: 'https://www.amazon.com/s?i=digital-text&rh=p_27%3APlatinum%2BMorgan&s=relevancerank&text=Platinum+Morgan&ref=dp_byline_sr_ebooks_1', tag: 'Publishing' },
    ],
  },
  {
    key: 'mobile-apps',
    title: 'Mobile Apps',
    items: [
      { name: 'Rebalance (Android)', blurb: 'Budget & alerts with debt payoff and portfolio guidance.', href: 'https://play.google.com/store/apps/details?id=com.wealthdial.app', tag: 'Android', extra: { changelog: '/apps/rebalance/changelog' } },
    ],
  },
  {
    key: 'in-the-works',
    title: 'In the Works',
    items: [
      { name: 'QuarryCRM', blurb: 'A lightweight CRM for tiny teams.', href: 'https://quarrycrm.com', tag: 'Coming soon' },
  { name: 'Sabremetrics', blurb: 'A new data-driven tool—details soon.', href: '#', tag: 'Coming soon' },
  { name: 'Grocery App', blurb: 'A new data-driven tool—details soon.', href: '#', tag: 'Coming soon' },
    ],
  },
];

export type Catalog = typeof CATALOG;
