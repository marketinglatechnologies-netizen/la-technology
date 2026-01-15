export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Just in case you add sensitive paths later
    },
    sitemap: "https://yourdomain.com/sitemap.xml",
  };
}
