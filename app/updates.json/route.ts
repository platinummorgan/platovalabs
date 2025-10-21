import { NextResponse } from 'next/server';
import { UPDATES, SITE_URL } from '@/data/updates';

export async function GET() {
  const feed = {
    version: 'https://jsonfeed.org/version/1',
    title: 'Platova Labs — Updates',
    home_page_url: SITE_URL,
    feed_url: `${SITE_URL}/updates.json`,
    items: UPDATES.map(u => ({
      id: u.id,
      url: `${SITE_URL}${u.link || `/updates#${u.category}`}`,
      title: u.title,
      date_published: u.date,
      content_text: u.description,
    })),
  };

  return NextResponse.json(feed, { status: 200 });
}
