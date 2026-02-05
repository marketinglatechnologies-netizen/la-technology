"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NON_CLICKABLE_ROUTES = [
  "/case-studies",
  "/insights",
  "/join-us",
  "/la-subsidiaries",
  "/services",
  "/who-we-are"

  // add more parent-only routes if needed
];

export default function Breadcrumbs() {
  const pathname = usePathname();

  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment !== "");

  return (
    <nav className="flex items-center gap-2 text-white/80 text-sm font-poppins mb-4 relative z-20">
      <Link
        href="/"
        className="md:text-lg hover:text-la-orange transition-colors"
      >
        Home
      </Link>

      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

        const label = segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());

        const isLast = index === pathSegments.length - 1;
        const isClickable =
          !isLast && !NON_CLICKABLE_ROUTES.includes(href);

        return (
          <div key={href} className="flex items-center gap-2">
            <span className="shrink-0 text-white/60">/</span>

            {isClickable ? (
              <Link
                href={href}
                className="md:text-lg hover:text-la-orange transition-colors"
              >
                {label}
              </Link>
            ) : (
              <span
                className={`md:text-lg ${
                  isLast ? "text-white font-semibold" : "text-white/80"
                }`}
              >
                {label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
