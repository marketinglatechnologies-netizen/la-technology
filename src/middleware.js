import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();

  // 1. Prevent Clickjacking (X-Frame-Options)
  response.headers.set("X-Frame-Options", "DENY");

  // 2. Prevent MIME-type sniffing
  response.headers.set("X-Content-Type-Options", "nosniff");

  // 3. Referrer Policy
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // 4. Content Security Policy (CSP)
  // Only allows scripts and styles from your own domain
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self';"
  );

  return response;
}

// Ensure middleware only runs on page routes, not on static assets/images
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
