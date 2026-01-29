import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();

  // 1. Prevent Clickjacking
  response.headers.set("X-Frame-Options", "DENY");

  // 2. Prevent MIME sniffing
  response.headers.set("X-Content-Type-Options", "nosniff");

  // 3. Referrer policy
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // 4. Content Security Policy
  // 4. Content Security Policy
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self';",

      // Allows the GTM iframe (noscript) and Google Maps
      "frame-src https://www.google.com https://www.googletagmanager.com https://www.google.com/maps;",

      // Fallback for older browsers
      "script-src 'self' 'unsafe-inline' https://www.google.com https://www.googletagmanager.com;",

      // ✅ FIXED: Added 'unsafe-inline' to allow your "gtm-init" script to run
      "script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com;",

      "style-src 'self' 'unsafe-inline';",

      "img-src 'self' data: blob: https://www.google.com https://maps.gstatic.com https://www.googletagmanager.com https://www.google-analytics.com;",

      "font-src 'self';",

      // Allows GTM to send tracking data out to Google's servers
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com;",
    ].join(" "),
  );

  return response;
}

// Single, clean matcher that excludes all static assets and internal Next routes
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};
