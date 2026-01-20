import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, X, Youtube } from "lucide-react";

const SOCIAL_LINKS = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61575532165684" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/latech_india/" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/latechnologiesindia/" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@LATechnologies-India" },
  { name: "X", icon: X, href: "https://x.com/latech_india" },
];

export default function Footer() {
  return (
    <footer className="relative bg-la-cream pt-16 overflow-hidden">
      {/* 1. THE GIANT WATERMARK (Now positioned absolutely to match mockup) */}
      <div className="absolute bottom-12 left-0 w-[70%] px-6 z-0 pb-4 pointer-events-none">
        <svg
          className="w-full h-auto max-w-[50%] md:max-w-[1200px]"
          viewBox="0 0 798 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.07"
            d="M-4.82649e-05 108.15V-0.000100017H23.25V84.7499H108V108.15H-4.82649e-05ZM124.544 108.15V22.3499C124.544 18.2499 125.544 14.5499 127.544 11.2499C129.544 7.8499 132.244 5.1499 135.644 3.1499C139.044 1.1499 142.744 0.149898 146.744 0.149898H210.194C214.294 0.149898 217.994 1.1499 221.294 3.1499C224.694 5.1499 227.394 7.8499 229.394 11.2499C231.494 14.5499 232.544 18.2499 232.544 22.3499V108.15H208.994V73.3499H147.794V108.15H124.544ZM147.794 49.9499H208.994V23.5499H147.794V49.9499ZM349.875 108.15V23.5499H307.575V0.149898H415.575V23.5499H373.275V108.15H349.875ZM434.593 108.15V0.149898H534.343V23.5499H458.143V42.4499H519.493V65.8499H458.143V84.7499H534.343V108.15H434.593ZM578.837 108.15C574.737 108.15 570.987 107.15 567.587 105.15C564.287 103.15 561.637 100.5 559.637 97.1999C557.637 93.7999 556.637 90.0499 556.637 85.9499V22.3499C556.637 18.2499 557.637 14.5499 559.637 11.2499C561.637 7.8499 564.287 5.1499 567.587 3.1499C570.987 1.1499 574.737 0.149898 578.837 0.149898H664.337V23.5499H584.837C583.237 23.5499 581.987 23.9499 581.087 24.7499C580.287 25.5499 579.887 26.7999 579.887 28.4999V79.7999C579.887 81.3999 580.287 82.6499 581.087 83.5499C581.987 84.3499 583.237 84.7499 584.837 84.7499H664.337V108.15H578.837ZM687.627 108.15V0.149898H710.877V42.4499H774.627V0.149898H797.877V108.15H774.627V65.8499H710.877V108.15H687.627Z"
            fill="url(#paint0_linear_footer)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_footer"
              x1="-8.55"
              y1="50.15"
              x2="807.45"
              y2="50.15"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E0183D" />
              <stop offset="1" stopColor="#F48129" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="lg:px-6 max-w-7xl md:px-6 mx-auto px-4 relative z-10 pb-20 lg:px-6 md:px-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Brand & Socials */}
          <div className="md:col-span-4">
            <div className="text-3xl font-bold flex mb-6 tracking-tight">
              <img src="/assets/svgs/logo.svg" />
            </div>
            <p className="text-gray-600 text-[13px] leading-relaxed mb-8 max-w-xs">
              L A Technologies meets complex business requirements by providing
              industry compliant designs, implementation and support for
              network.
            </p>
            <div className="flex gap-4">
              {/* Note: Ensure SOCIAL_LINKS is imported or defined */}
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-la-orange hover:bg-la-orange hover:text-white transition-all duration-300"
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div className="md:col-span-2">
            <h3 className="text-[#DC2A3C] font-bold mb-6 text-sm">Sitemap</h3>
            <ul className="space-y-2 text-[13px] text-gray-600">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/who-we-are/about-us">Who We Are</Link>
              </li>
              {/* <li>
                <Link href="/services">What We Do</Link>
              </li> */}
              <li>
                <Link href="/global">Global Presence</Link>
              </li>
              <li>
                <Link href="/join-us/careers">Careers</Link>
              </li>
              {/* <li>
                <Link href="/subsidiaries">LA Subsidiaries</Link>
              </li>
              <li>
                <Link href="/insights">Insights</Link>
              </li> */}
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="md:col-span-3">
            <h3 className="text-[#DC2A3C] font-bold mb-6 text-sm">Services</h3>

            <ul className="space-y-2 text-[13px] text-gray-600">
              <li>
                <Link
                  href="/services/managed-services/soc-as-service"
                >
                  SOC-as-a-Service
                </Link>
              </li>
              <li>
                <Link
                  href="/services/managed-services/noc-as-service"
                >
                  NOC-as-a-Service
                </Link>
              </li>
              <li>
                <Link
                  href="/services/managed-services/it-infra-managed-services"
                >
                  Infra Managed Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cyber-security-&-it-infra-services/data-security"
                >
                  Data Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cyber-security-&-it-infra-services/endpoint-security"
                >
                  Endpoint Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cyber-security-&-it-infra-services/netwwork-security"
                >
                  Network Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ot-services/ics-scada-security"
                >
                  ICS & SCADA Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ot-services/asset-discovery"
                >
                  Asset Discovery
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ot-services/network-segmentation"
                >
                  Network Segmentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="md:col-span-3 text-[13px] text-gray-600">
            <h3 className="text-[#DC2A3C] font-bold mb-6 text-sm">
              Contact Us
            </h3>

            <div className="mb-4">
              <p className="font-bold text-[#DC2A3C] mb-1">Location:</p>
              <p className="leading-relaxed">
                101 B, Pinnacle Corporate Park, B Wing, First Floor, CTS 4207
                Part, Bandra Kurla Complex, Bandra (East), Mumbai 400051
              </p>
            </div>

            <div className="mb-4">
              <p className="font-bold text-[#DC2A3C] mb-2">
                Our Global locations
              </p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-2 uppercase text-[10px] font-bold">
                {["Singapore", "Hong Kong", "Indonesia", "Dubai"].map(
                  (city) => (
                    <span key={city} className="flex items-center gap-1">
                      <MapPin
                        size={12}
                        className="text-[#DC2A3C] shrink-0"
                        strokeWidth={3}
                      />
                      {city}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="mb-4">
              <p className="font-bold text-[#DC2A3C] mb-1">Availability:</p>
              <p>Monday to Friday, 10:00 AM – 7:00 PM</p>
            </div>

            <div className="mb-4">
              <p className="font-bold text-[#DC2A3C] mb-1">
                Sales & General Inquiries:
              </p>
              <p className="lowercase">sales@la-technologiesindia.com</p>
            </div>

            <div className="mb-4">
              <p className="font-bold text-[#DC2A3C] mb-1">Job Inquiries:</p>
              <p className="lowercase">recruitment@la-technologiesindia.com</p>
            </div>

            <div className="mb-4">
              <p className="font-bold text-[#DC2A3C] mb-1">Contact us:</p>
              <p>9136487172</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Bottom Copyright Bar */}
      <div className="bg-gradient-to-r from-[#DC2A3C] to-[#F58028] py-4 relative z-20">
        <div className="max-w-7xl mx-auto px-6 text-white text-sm font-medium">
          © Copyrights 2010. All rights reserved. by L A Technologies
        </div>
      </div>
    </footer>
  );
}
