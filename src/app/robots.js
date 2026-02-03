export default function robots() {
  return {
    rules: {
      userAgent: "*",
      disallow: ["/cgi-bin/"],
    },
    sitemap: "https://la-technologiesindia.com/sitemap.xml",
  };
}
