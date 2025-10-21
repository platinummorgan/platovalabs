export default function sitemap() {
  const base = "https://platovalabs.com";
  return [
    { url: base + "/", lastModified: new Date() },
    { url: base + "/privacy", lastModified: new Date() },
    { url: base + "/terms", lastModified: new Date() },
    { url: base + "/contact", lastModified: new Date() },
  ];
}
