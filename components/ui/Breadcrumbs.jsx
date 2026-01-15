"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Slash } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Split the path into segments: "/services/cloud-security" -> ["services", "cloud-security"]
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav className="flex items-center gap-2 text-white/80 text-sm font-poppins mb-4 relative z-20">
      <Link href="/" className="md:text-lg hover:text-la-orange transition-colors">
        Home
      </Link>

      {pathSegments.map((segment, index) => {
        // Build the href for each segment incrementally
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

        // Format the label: "cloud-security" -> "Cloud Security"
        const label = segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());

        const isLast = index === pathSegments.length - 1;

        return (
          <div key={href} className="flex items-center gap-2">
            <span className={`shrink-0 ${isLast ? 'text-white' : 'text-white-300'}`}>/</span>
            {isLast ? (
              <span className="text-white md:text-lg font-semibold">{label}</span>
            ) : (
              <Link
                href={href}
                className=" md:text-lg hover:text-la-orange transition-colors"
              >
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
