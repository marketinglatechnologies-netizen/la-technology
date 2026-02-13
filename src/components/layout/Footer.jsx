import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  X,
  Youtube,
} from "lucide-react";

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61575532165684",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/latech_india/",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/latechnologiesindia/",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@LATechnologies-India",
  },
  { name: "X", icon: X, href: "https://x.com/latech_india" },
];

export default function Footer() {
  return (
    <footer className="relative bg-la-cream pt-16 overflow-hidden">
      {/* 1. THE GIANT WATERMARK (Now positioned absolutely to match mockup) */}
      <div className="absolute bottom-12 left-0 w-[70%] px-6 z-0 pb-4 pointer-events-none">
        <img
          src="/assets/svgs/logo.png"
          alt="Logo watermark"
          className="w-full max-w-[50%] md:max-w-[1200px] opacity-[0.07]"
        />
      </div>

      <div className="lg:px-6 max-w-7xl md:px-6 mx-auto px-4 relative z-10 pb-20 lg:px-6 md:px-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Brand & Socials */}
          <div className="md:col-span-4">
            <div className="text-3xl font-bold flex mb-6 tracking-tight">
              <img src="/assets/svgs/logo.png" className="-ml-12" />
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
          <div className="md:col-span-6">
            <h3 className="text-[#DC2A3C] font-bold mb-6 text-sm">Services</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Service Group 1 */}
              <div>
                <p className="font-bold text-[13px] text-gray-800 mb-3">
                  Managed Services
                </p>
                <ul className="space-y-2 text-[13px] text-gray-600">
                  <li>
                    <Link href="/services/managed-services/soc-as-service">
                      SOC-as-a-Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/managed-services/noc-as-service">
                      NOC-as-a-Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/managed-services/infra-managed-services">
                      Infra Managed Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/managed-services/managed-security-services">
                      Managed Security Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/managed-services/managed-broadband-sdwan">
                      Managed Broadband + SDWAN
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/managed-services/it-branch-operations">
                      IT Branch Operations
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/managed-services/it-staff-augmentation">
                      IT Staff Augmentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/managed-services/security-assessment">
                      Security Assessment
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Service Group 2 */}
              <div>
                <p className="font-bold text-[13px] text-gray-800 mb-3">
                  Cyber Security
                </p>
                <ul className="space-y-2 text-[13px] text-gray-600">
                  <li>
                    <Link href="/services/cyber-security-&-it-infra-services/data-security">
                      Data Security
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cyber-security-&-it-infra-services/endpoint-security">
                      Endpoint Security
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cyber-security-&-it-infra-services/network-security">
                      Network Security
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cyber-security-&-it-infra-services/application-security">
                      Application Security
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cyber-security-&-it-infra-services/cloud-security">
                      Cloud Security
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cyber-security-&-it-infra-services/network-infrastructure">
                      Network Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cyber-security-&-it-infra-services/data-center-solutions">
                      Data Center Solutions
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Service Group 3 */}
              <div>
                <p className="font-bold text-[13px] text-gray-800 mb-3">
                  OT Services
                </p>
                <ul className="space-y-2 text-[13px] text-gray-600">
                  <li>
                    <Link href="/services/ot-services/ics-scada-security">
                      ICS & SCADA Security
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ot-services/asset-discovery">
                      Asset Discovery
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ot-services/network-segmentation">
                      Network Segmentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ot-services/threat-detection-&-incident-response">
                      Threat Detection & Incident Response
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ot-services/ot-endpoint-protection">
                      OT Endpoint Protection
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ot-services/compliance-for-ot">
                      Compliance for OT
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ot-services/secure-remote-access">
                      Secure Remote Access
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ot-services/ot-privileged-access-management">
                      OT Privileged Access Management
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-[#DC2A3C] mb-2 text-sm">Legal</p>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a href="/privacy-policy" className="text-sm">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    {/* <a href="/disclaimer" className="text-sm ">
                      Disclaimer
                    </a> */}
                  </li>
                  <li>
                    <a
                      href="/recruitment-policy"
                      className="text-sm"
                    >
                      Recruitment Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Us */}
        </div>
        <div className="mt-5 border-t border-gray-200 pt-5 text-[13px] text-gray-600">
          <h3 className="text-[#DC2A3C] font-bold mb-6 text-sm">Contact Us</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div>
              <p className="font-bold text-[#DC2A3C] mb-1">Location:</p>
              <p className="leading-relaxed">
                101 B, Pinnacle Corporate Park, B Wing, First Floor, CTS 4207
                Part, Bandra Kurla Complex, Bandra (East), Mumbai 400051
              </p>
            </div>

            <div>
              <p className="font-bold text-[#DC2A3C] mb-2">
                Our Global locations
              </p>

              <div className="grid grid-cols-2 gap-y-2 gap-x-2 uppercase text-[10px] font-bold mb-3">
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
                  ),
                )}
              </div>
            </div>

            <div>
              <p className="font-bold text-[#DC2A3C] mb-1">Availability:</p>
              <p className="mb-4">Monday to Friday, 10:00 AM – 7:00 PM</p>

              <p className="font-bold text-[#DC2A3C] mb-1">
                Sales & General Inquiries:
              </p>
              <p className="lowercase mb-4">sales@la-technologiesindia.com</p>

              <p className="font-bold text-[#DC2A3C] mb-1">Job Inquiries:</p>
              <p className="lowercase mb-4">
                recruitment@la-technologiesindia.com
              </p>

              <p className="font-bold text-[#DC2A3C] mb-1">Contact us:</p>
              <p>+91 9136487172</p>
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
