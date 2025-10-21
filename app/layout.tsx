import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Platova Labs — Tools for working-class wallets",
  description: "Platova Labs builds small, fast, privacy-friendly apps like Rebalance, QRKit, PDFTrim, and more.",
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
      <body className="bg-neutral-950 text-neutral-50 antialiased">{children}</body>
    </html>
  );
}
