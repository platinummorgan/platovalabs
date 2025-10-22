import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap', weight: ['400','600','700'] });

export const metadata: Metadata = {
  title: "Platova Labs — Small tools, big relief",
  description: "Small, fast, privacy-first tools that make everyday money work a little easier.",
  openGraph: {
    title: "Platova Labs",
    description: "Tools for working-class wallets.",
    url: "https://platovalabs.com",
    siteName: "Platova Labs",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Platova Labs",
    description: "Tools for working-class wallets.",
    images: ["/og.png"],
  },
  metadataBase: new URL("https://platovalabs.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        {/* Preconnect to analytics origin for faster TTFB on plausible */}
        <link rel="preconnect" href="https://plausible.io" crossOrigin="" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <meta name="google-site-verification" content="HIrI1_SBVgDi68BOB361mv4iFfbvXamJpiSuUoDFIjY" />
        <link rel="canonical" href="https://platovalabs.com/" />
        <meta name="robots" content="index,follow" />
  <meta property="og:image" content="https://platovalabs.com/og.png" />
  <meta name="twitter:card" content="summary_large_image" />
        {/*
          Small inline script to promote the Next-generated stylesheet to a preload.
          Lighthouse flagged the main CSS chunk as render-blocking. Next emits a
          hashed CSS file under /_next/static/css/*.css — we detect that link
          and insert a preload tag early in the head so the browser can fetch it
          with higher priority without blocking render. The preload 'onload'
          handler sets rel=stylesheet so styles apply. This is a low-risk, small
          JS shim that avoids hard-coding build-generated filenames.
        */}
        <script
          // small, defensive script — runs early from the head
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var links=document.querySelectorAll('link[rel="stylesheet"][href*="/_next/static/css/"]');if(!links||links.length===0)return;links.forEach(function(link){if(link.__pl_preload_done) return;var href=link.href;var preload=document.createElement('link');preload.rel='preload';preload.as='style';preload.href=href;preload.onload=function(){preload.rel='stylesheet';};link.parentNode.insertBefore(preload,link);link.__pl_preload_done=true;});}catch(e){/* ignore */}})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} bg-neutral-950 text-neutral-50 antialiased`}> 
        <Header />
        {children}
        {/* Plausible analytics (deferred) */}
        <script defer data-domain="platovalabs.com" src="https://plausible.io/js/script.js"></script>
        {/* Organization JSON-LD (served from a static file to avoid inline scripts/CSP issues) */}
        <script type="application/ld+json" src="/organization.json"></script>
      </body>
    </html>
  );
}
