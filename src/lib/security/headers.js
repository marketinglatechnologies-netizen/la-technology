// export const securityHeaders = {
//   "Content-Security-Policy":
//   "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://cdn.sanity.io https://www.google.com https://maps.gstatic.com; font-src 'self';",
//   "X-Frame-Options": "DENY",
//   "X-Content-Type-Options": "nosniff",
//   "Referrer-Policy": "strict-origin-when-cross-origin",
//   "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
// };

export const securityHeaders = {
  "Content-Security-Policy": `
    default-src 'self';
    connect-src 'self' https://*.sanity.io https://*.apicdn.sanity.io https://cdn.sanity.io;
    script-src 'self' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: blob: https://cdn.sanity.io https://www.google.com https://maps.gstatic.com;
    font-src 'self';
  `.replace(/\n/g, ""),
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
};