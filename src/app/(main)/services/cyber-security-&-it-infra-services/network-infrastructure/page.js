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
import InfoList from "@/components/ui/InfoList";
import WhatWeDeliver from "@/components/sections/WhatWeDeliver";
import MultiLocationOperatingModel from "@/components/sections/MultiLocation";
import IntegrationEcosystem from "@/components/sections/IntegrationEcosystem";
import KeyPerformanceIndicators from "@/components/sections/KeyPerformance";
import { Key } from "lucide-react";

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

export default function FacilityManagement() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/services/network-infrastructure/banner.png"
          title="Network Infrastructure"
          titleTag="h1"
          description={`Designed for performance. Built for scale.`}
        />
      </div>
      <FeatureHighlightSection
        images={[
          {
            src: "/assets/images/services/network-infrastructure/design1.png",
            alt: "Security dashboard",
          },
          {
            src: "/assets/images/services/network-infrastructure/design2.png",
            alt: "Developer working",
          },
          {
            src: "/assets/images/services/network-infrastructure/design3.png",
            alt: "Data monitoring",
          },
        ]}
        title="Design, Build, and Manage High-Performance Networks Across All Your Locations"
        description="A resilient network is the backbone of every business. From headquarters to branch offices and warehouses, your LAN, WAN, Wi‑Fi, and data center connectivity must be fast, secure, and reliable. LA Technologies’ Network Infrastructure services deliver end-to-end design, deployment, and managed operations—so your business stays connected and protected, everywhere."
      />

      <FourBoxSection
        heading="Network Infrastructure for Business Continuity"
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



      <WhatWeDeliver />
      <MultiLocationOperatingModel />
      <IntegrationEcosystem />

      <ImageTabsSection
        heading="Service Tiers & SLAs"
        headingTag="h2"
        tabs={[
          {
            label: "L1 Response: 15–30 minutes for priority incidents",
            image: "/assets/images/services/network-infrastructure/tab1.png",
          },
          {
            label:
              "P1 Restoration Target: ≤ 2 hours with failover/contingency plans",
            image: "/assets/images/services/network-infrastructure/tab2.png",
          },
          {
            label:
              "Configuration Changes: Scheduled with approvals and impact analysis",
            image: "/assets/images/services/network-infrastructure/tab3.png",
          },
          {
            label: "Uptime Targets: 99.5%–99.9% based on design redundancy",
            image: "/assets/images/services/network-infrastructure/tab4.png",
          },
        ]}
      />

      <KeyPerformanceIndicators />

      <WhyChooseSection
        heading="Benefits with LA Technologies"
        centerImage="/assets/images/services/network-infrastructure/benefits.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/network-infrastructure/choose1.png",
            title: "High Performance & Reliability",
            text: "Through robust, standards-based design",
          },
          {
            icon: "/assets/images/services/network-infrastructure/choose2.png",
            title: "Lower Operational Risk",
            text: "via proactive monitoring and tested runbooks",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/network-infrastructure/choose3.png",
            title: "Stronger Security",
            text: "with segmentation, NAC, and enforced policies",
          },
          {
            icon: "/assets/images/services/network-infrastructure/choose4.png",
            title: "Scalable Rollouts",
            text: "using templates and centralized orchestration",
          },
        ]}
      />

      {/* <IndustryGrid data={industriesData} /> */}

      <InfoList
        title="Sample Use Cases"
        items={[
          "Rapid branch setup with pre-configured kits and standardized SSIDs",
          "Migration from flat LAN to segmented, policy-controlled VLANs",
          "Dual-ISP deployment with automatic failover and SLA monitoring",
          "NAC rollouts to control device onboarding across all branches",
          "Wi‑Fi redesign to eliminate dead zones and improve client experience",
        ]}
      />

      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Build a Network You Can Trust
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-3xl">
            With LA Technologies, your network becomes faster, safer, and easier
            to operate across every location.
          </p>
        </div>
      </section>

      <GradientCtaBanner
        text="Ready to modernize your network infrastructure?"
        buttonText="Request a Network Assessment"
      />
    </>
  );
}
