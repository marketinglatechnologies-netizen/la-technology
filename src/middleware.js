// import { NextResponse } from "next/server";

// export function middleware(request) {
//   const response = NextResponse.next();

//   // 1. Prevent Clickjacking (X-Frame-Options)
//   response.headers.set("X-Frame-Options", "DENY");

//   // 2. Prevent MIME-type sniffing
//   response.headers.set("X-Content-Type-Options", "nosniff");

//   // 3. Referrer Policy
//   response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

//   // 4. Content Security Policy (CSP)
//   // Only allows scripts and styles from your own domain
//   response.headers.set(
//     "Content-Security-Policy",
//     "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self';"
//   );

//   return response;
// }

// // Ensure middleware only runs on page routes, not on static assets/images
// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     "/((?!api|_next/static|_next/image|favicon.ico).*)",
//   ],
// };
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
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self';",
      "frame-src https://www.google.com https://www.google.com/maps;",
      "script-src 'self' 'unsafe-inline' https://www.google.com;",
      "style-src 'self' 'unsafe-inline';",
      // Added blob: and verified 'self' for internal Next.js optimization paths
      "img-src 'self' data: blob: https://www.google.com https://maps.gstatic.com;",
      "font-src 'self';",
    ].join(" ")
  );

  return response;
}

// Single, clean matcher that excludes all static assets and internal Next routes
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};
