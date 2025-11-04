export const CATALOG = [
  {
    key: 'finance',
    title: 'Finance',
    items: [
      { name: 'PayOfPath.com', blurb: 'Amortization calculator and debt payoff planner with avalanche/snowball methods. Visualize your path to being debt-free with payment schedules and interest savings.', href: 'https://payofpath.com', tag: 'Finance', badge: 'Popular', platform: 'Web' },
    ],
  },
  {
    key: 'tools',
    title: 'Tools',
    items: [
      { name: 'QRKit.app', blurb: 'Fast, privacy-friendly QR code generator. Create codes for URLs, WiFi, contacts, and more—no signup required, all processing happens in your browser.', href: 'https://qrkit.app', tag: 'Tools', badge: 'Free', platform: 'Web' },
      { name: 'PDFTrim.app', blurb: 'Bulk trim, split, merge, and compress PDFs entirely in your browser. Client-side processing means your documents never leave your device.', href: 'https://pdftrim.app', tag: 'Docs', badge: 'Free', platform: 'Web' },
    ],
  },
  {
    key: 'sports',
    title: 'Sports',
    items: [
      // TODO: replace with official TikTok handle URL when available
      { name: 'TikTok', blurb: 'Short sports predictions and picks with analysis. Follow for daily updates on NBA, NFL, and more.', href: 'https://www.tiktok.com/@predict_a_sport', tag: 'Sports', platform: 'TikTok' },
    ],
  },
  {
    key: 'shops',
    title: 'Shops & Publishing',
    items: [
      // TODO: paste official Etsy store URL when ready
      { name: 'Etsy Store', blurb: 'Merch, printables, and digital downloads for productivity and finance tracking. Instant downloads available.', href: 'https://www.etsy.com/shop/PlatLabs?ref=shop-header-name&listing_id=4390248520&from_page=listing', tag: 'Store', platform: 'Etsy' },
      // TODO: replace with canonical Kindle author/search URL
      { name: 'Kindle Publishing', blurb: 'Books and guides on personal finance, budgeting, and productivity on Amazon Kindle. Available in digital and paperback formats.', href: 'https://www.amazon.com/s?i=digital-text&rh=p_27%3APlatinum%2BMorgan&s=relevancerank&text=Platinum+Morgan&ref=dp_byline_sr_ebooks_1', tag: 'Publishing', platform: 'Kindle' },
    ],
  },
  {
    key: 'mobile-apps',
    title: 'Mobile Apps',
    items: [
      { name: 'Rebalance (Android)', blurb: 'Budget tracker with smart alerts, debt payoff planning, and portfolio rebalancing guidance. Set goals, track spending, and stay on top of your finances.', href: 'https://play.google.com/store/apps/details?id=com.wealthdial.app', tag: 'Android', platform: 'Android', extra: { changelog: '/apps/rebalance/changelog' } },
    ],
  },
  {
    key: 'in-the-works',
    title: 'In the Works',
    items: [
      { name: 'QuarryCRM', blurb: 'Customer relationship management built for small teams. Track leads, manage contacts, and close deals without the enterprise bloat.', href: 'https://quarrycrm.com', tag: 'Coming soon', badge: 'New', platform: 'Web' },
      { name: 'New mobile app', blurb: 'Finance and productivity app currently in private testing. Details and beta access coming soon.', href: '#', tag: 'Coming soon', badge: 'Beta', platform: 'iOS & Android' },
      { name: 'New data project', blurb: 'Early-stage research into financial data aggregation and insights. Stay tuned for updates.', href: '#', tag: 'Coming soon', platform: 'Web' },
    ],
  },
];

export type Catalog = typeof CATALOG;
