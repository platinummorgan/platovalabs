import { NextResponse } from 'next/server';
import { UPDATES, SITE_URL } from '@/data/updates';

function buildRss() {
  const items = UPDATES.map(u => `
    <item>
      <title>${escapeXml(u.title)}</title>
      <link>${SITE_URL}${u.link || `/updates#${u.category}`}</link>
      <pubDate>${new Date(u.date).toUTCString()}</pubDate>
      <description>${escapeXml(u.description)}</description>
      <guid>${SITE_URL}/updates/${u.id}</guid>
    </item>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>Platova Labs — Updates</title>
      <link>${SITE_URL}</link>
      <description>Latest releases and fixes from Platova Labs</description>
      ${items}
    </channel>
  </rss>`;
}

function escapeXml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export async function GET() {
  const xml = buildRss();
  return new NextResponse(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
