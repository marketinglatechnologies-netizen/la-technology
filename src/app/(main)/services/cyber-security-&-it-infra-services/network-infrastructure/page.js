import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import FourBoxSection from "@/components/services/FourBox";
import InfoCtaSection from "@/components/services/InfoCtaSection";
import SixCards from "@/components/services/SixCards";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ImageTabsSection from "@/components/services/ImageTabsSection";
import ImageHighlightSection from "@/components/services/ImageHighlightSection";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import Image from "next/image";
import IndustryGrid from "@/components/sections/IndustrySection";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const industriesData = {
  sectionTitle: "Industries We Serve",
  items: [
    {
      id: "Retail & Multi-Branch Enterprises",
      title: "Retail & Multi-Branch Enterprises",
      image: "/assets/images/industries/bfsi.jpg",
    },
    {
      id: "BFSI (Branches & ATMs)",
      title: "BFSI (Branches & ATMs)",
      image: "/assets/images/industries/education.jpg",
    },
    {
      id: "Manufacturing (Plants & Warehouses) ",
      title: "Manufacturing (Plants & Warehouses) ",
      image: "/assets/images/industries/manufacturing.jpg",
    },
    {
      id: "Healthcare Networks",
      title: "Healthcare Networks",
      image: "/assets/images/industries/bfsi.jpg",
    },
     {
      id: "Logistics & Distribution ",
      title: "Logistics & Distribution ",
      image: "/assets/images/industries/education.jpg",
    },
     {
      id: "Education (Campuses & Centers)",
      title: "Education (Campuses & Centers)",
      image: "/assets/images/industries/manufacturing.jpg",
    },
  ],
};
export const whatWeDeliverData = [
  {
    title: "Network Architecture & Design",
    points: [
      "Site surveys, topology design (LAN/WAN), IP scheme and VLAN planning",
      "Network segmentation for users, servers, IoT, and OT environments",
      "High availability design (redundant links, failover, VRRP/HSRP)",
    ],
  },
  {
    title: "Routing, Switching & Firewalls",
    points: [
      "Core/distribution/access switching with QoS and ACLs",
      "Dynamic routing (OSPF/BGP) and policy-based routing",
      "Next-gen firewall deployment with IPS, application control, and VPN",
    ],
  },
  {
    title: "Secure Wi-Fi",
    points: [
      "Enterprise Wi-Fi planning (coverage maps, capacity, RF optimization)",
      "Role-based SSIDs (corporate/guest), captive portals, bandwidth management",
      "802.1X/NAC enforcement and device onboarding controls",
    ],
  },
  {
    title: "WAN & Branch Connectivity",
    points: [
      "Broadband/MPLS/4G/5G integration with path redundancy",
      "SD-WAN design for intelligent link selection and policy-based traffic steering",
      "Centralized configuration and templates for multi-site rollout",
    ],
  },
  {
    title: "Data Center & Server Room",
    points: [
      "Rack layout, structured cabling, power and environmental standards",
      "Core switch/firewall clustering, link aggregation, segmentation",
      "Network services (DHCP/DNS/NTP), logging and time sync baselines",
    ],
  },
  {
    title: "Network Access Control (NAC)",
    points: [
      "Identity-based access (802.1X/MAB), posture checks, guest workflows",
      "Device profiling for endpoints, printers, CCTV, POS, and OT devices",
    ],
  },
  {
    title: "Monitoring & Observability",
    points: [
      "NMS setup (SNMP/Flow), health dashboards, alerts, and runbooks",
      "Link performance, utilization trends, and SLA reporting",
      "Config backup, compliance checks, and change tracking",
    ],
  },
  {
    title: "Security Hardening & Policies",
    points: [
      "Standardized configurations, least privilege, and admin access control",
      "VPN standards (site-to-site/remote), key rotation, and logging",
      "Incident response playbooks aligned to network events",
    ],
  },
];

export default function FacilityManagement() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/about-us/banner.jpg"
          title="Network Infrastructure"
          titleTag="h1"
          description={`Round-the-clock Endpoint Security Services designed to defend modern enterprises.`}
        />
      </div>
      <FeatureHighlightSection
        images={[
          {
            src: "/assets/images/services/soc/soc1.png",
            alt: "Security dashboard",
          },
          {
            src: "/assets/images/services/soc/soc2.png",
            alt: "Developer working",
          },
          {
            src: "/assets/images/services/soc/soc3.png",
            alt: "Data monitoring",
          },
        ]}
        title="Design, Build, and Manage High-Performance Networks Across All Your Locations"
        description="A resilient network is the backbone of every business. From headquarters to branch offices and warehouses, your LAN, WAN, Wi‑Fi, and data center connectivity must be fast, secure, and reliable. LA Technologies’ Network Infrastructure services deliver end-to-end design, deployment, and managed operations—so your business stays connected and protected, everywhere."
      />

      <FourBoxSection
        heading="Why Network Infrastructure Matters"
        headingTag="h2"
        items={[
          {
            title: "Performance & Uptime",
            description:
              "Poorly designed networks cause latency, packet loss, and outages that impact business.",
          },
          {
            title: "Security & Segmentation",
            description:
              "Flat networks and weak policies expose critical systems to threats.",
          },
          {
            title: "Scalability Across Locations",
            description:
              "New branches and upgrades demand standardized designs and predictable rollouts.",
          },
          {
            title: "Operational Visibility",
            description:
              "Proactive monitoring and clear network baselines reduce firefighting.",
          },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-xl font-semibold text-center mb-14">
            What We Deliver
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWeDeliverData.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-orange-300 bg-white p-5"
              >
                {/* Image Placeholder */}
                <div className="h-32 w-full rounded-lg bg-gray-200 mb-4" />

                {/* Title */}
                <h3 className="text-sm font-semibold text-orange-600 mb-3">
                  {item.title}
                </h3>

                {/* Bullet Points */}
                <ul className="space-y-2 text-sm text-gray-600">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* LEFT – IMAGE GRID */}
            <div className="grid grid-cols-2 gap-6">
              {/* Tall image */}
              <div className="row-span-2 rounded-xl overflow-hidden">
                <Image
                  src="/images/operations/team-working.jpg"
                  alt="Team working in office"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top right image */}
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/operations/code-screen.jpg"
                  alt="Code on screen"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom right image */}
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/operations/data-center.jpg"
                  alt="Data center team"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT – CONTENT */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Multi-Location Operating Model
              </h2>

              <p className="text-gray-500 mb-8 max-w-xl">
                Comprehensive management for your distributed infrastructure.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-sm">
                    ✓
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">
                      Centralized Command Center (NOC/SOC)
                    </p>
                    <p className="text-sm text-gray-500">
                      24×7 monitoring and incident response for all sites.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-sm">
                    ✓
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">
                      Standard Templates
                    </p>
                    <p className="text-sm text-gray-500">
                      Golden configs for rapid branch deployment and consistent
                      security.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-sm">
                    ✓
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">Hybrid Support</p>
                    <p className="text-sm text-gray-500">
                      Remote-first operations with scheduled on-site visits for
                      critical tasks.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-sm">
                    ✓
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">
                      Vendor Management
                    </p>
                    <p className="text-sm text-gray-500">
                      Single-point coordination with ISPs and OEMs for
                      escalations.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-sm">
                    ✓
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">
                      Change Governance
                    </p>
                    <p className="text-sm text-gray-500">
                      Controlled rollouts, maintenance windows, and rollback
                      plans.
                    </p>
                  </div>
                </li>
              </ul>

              {/* CTA */}
              <div className="mt-10">
                <button className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-white font-medium hover:bg-orange-600 transition">
                  Talk to an Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Integration Ecosystem (Representative)
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mb-14">
            We align to your current stack or recommend an optimal mix.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Item 1 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-50 mb-4">
                <Image
                  src="/icons/switching-routing.svg"
                  alt="Switching Routing"
                  width={26}
                  height={26}
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Switching/Routing
              </h3>
              <p className="text-sm text-gray-500 text-center">
                Cisco, HPE/Aruba, Juniper, Extreme
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-50 mb-4">
                <Image
                  src="/icons/firewall-security.svg"
                  alt="Firewalls Security"
                  width={26}
                  height={26}
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Firewalls/Security
              </h3>
              <p className="text-sm text-gray-500 text-center">
                Fortinet, Palo Alto, Check Point, Sophos
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-50 mb-4">
                <Image
                  src="/icons/wifi-nac.svg"
                  alt="WiFi NAC"
                  width={26}
                  height={26}
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Wi-Fi/NAC</h3>
              <p className="text-sm text-gray-500 text-center">
                Aruba, Cisco Meraki/Catalyst, Ruckus, FortiNAC
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-50 mb-4">
                <Image
                  src="/icons/monitoring.svg"
                  alt="Monitoring"
                  width={26}
                  height={26}
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Monitoring</h3>
              <p className="text-sm text-gray-500 text-center">
                SolarWinds, PRTG, Zabbix, NetFlow/sFlow tools
              </p>
            </div>
          </div>
        </div>
      </section>

      <ImageTabsSection
        heading="Service Tiers & SLAs"
        headingTag="h2"
        tabs={[
          {
            label: "L1 Response: 15–30 minutes for priority incidents",
            image: "/assets/images/services/soc/tab1.png",
          },
          {
            label:
              "P1 Restoration Target: ≤ 2 hours with failover/contingency plans",
            image: "/images/soc-tab-2.jpg",
          },
          {
            label:
              "Configuration Changes: Scheduled with approvals and impact analysis",
            image: "/images/soc-tab-3.jpg",
          },
          {
            label: "Uptime Targets: 99.5%–99.9% based on design redundancy",
            image: "/images/soc-tab-4.jpg",
          },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Key Performance Indicators
          </h2>

          <p className="text-sm text-gray-500 mb-10">
            Measuring success through transparency.
          </p>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="rounded-lg  bg-white px-5 py-4 text-sm text-gray-700 shadow-sm">
              Link uptime &amp; failover success rate
            </div>

            <div className="rounded-lg  bg-white px-5 py-4 text-sm text-gray-700 shadow-sm">
              Latency, jitter, packet loss thresholds
            </div>

            <div className="rounded-lg bg-white px-5 py-4 text-sm text-gray-700 shadow-sm">
              Wi-Fi coverage &amp; client experience scores
            </div>

            <div className="rounded-lg  bg-white px-5 py-4 text-sm text-gray-700 shadow-sm">
              Security events blocked (IPS/ACL/NAC)
            </div>

            <div className="rounded-lg bg-white px-5 py-4 text-sm text-gray-700 shadow-sm">
              Configuration compliance success rate
            </div>
          </div>
        </div>
      </section>

      <WhyChooseSection
        heading="Benefits with LA Technologies"
        centerImage="/assets/images/services/soc/whychoose.png"
        featuresLeft={[
          {
            icon: "/assets/images/home/icon1.png",
            title: "High Performance & Reliability",
            text: "Through robust, standards-based design",
          },
          {
            icon: "/assets/images/home/icon2.png",
            title: "Lower Operational Risk",
            text: "via proactive monitoring and tested runbooks",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/home/icon3.png",
            title: "Stronger Security",
            text: "with segmentation, NAC, and enforced policies",
          },
          {
            icon: "/assets/images/home/icon4.png",
            title: "Scalable Rollouts",
            text: "using templates and centralized orchestration",
          },
        ]}
      />

     <IndustryGrid data={industriesData} />

      <GradientCtaBanner text="Ready to modernize your network infrastructure?" />
    </>
  );
}
