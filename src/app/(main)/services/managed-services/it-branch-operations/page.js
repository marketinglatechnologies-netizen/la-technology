import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import FiveCards from "@/components/services/FiveCards";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ImageHighlightSection from "@/components/services/ImageHighlightSection";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import FourBoxSection from "@/components/services/FourBox";
import BenefitsGrid from "@/components/services/BenefitsGrid";
import EightCards from "@/components/services/EightCards";
import Image from "next/image";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};
// const benefitsData = {
//   title: "Benefits",
//   items: [
//     {
//       id: 1,
//       title: "Centralized Command Center (NOC/SOC)",
//       description: "24×7 monitoring and incident response for all branches.",
//       row: "top",
//     },
//     {
//       id: 2,
//       title: "Standardized Playbooks",
//       description:
//         "Golden configurations and security baselines applied across locations.",
//       row: "top",
//     },
//     {
//       id: 3,
//       title: "Hybrid Support",
//       description:
//         "Remote-first with scheduled on-site visits for critical issues.",
//       row: "top",
//     },
//     {
//       id: 4,
//       title: "Change & Release Management",
//       description:
//         "Controlled deployments across multiple branches with rollback plans.",
//       row: "bottom",
//     },
//     {
//       id: 5,
//       title: "Vendor Coordination",
//       description:
//         "One-stop ownership of ISP, OEM, and third-party escalations for all sites.",
//       row: "bottom",
//     },
//   ],
// };

const items = [
  {
    title: "Fragmented Management ",
    text: "Different tools and vendors per branch lead to inconsistency and downtime. ",
  },
  {
    title: "Security Exposure",
    text: "Distributed endpoints and unmanaged Wi‑Fi increase risk across locations.",
  },
  {
    title: "Operational Overheads",
    text: "Local troubleshooting and on-site support consume time and budget",
  },
  {
    title: "Business Continuity Needs",
    text: "Branches require reliable connectivity and proactive monitoring. ",
  },
];

const benefitsData = [
  {
    title: "Centralized Command Center (NOC/SOC)",
    description: "24×7 monitoring and incident response for all branches.",
  },
  {
    title: "Standardized Playbooks",
    description:
      "Golden configurations and security baselines applied across locations.",
  },
  {
    title: "Hybrid Support",
    description:
      "Remote-first with scheduled on-site visits for critical issues.",
  },
  {
    title: "Change & Release Management",
    description:
      "Controlled deployments across multiple branches with rollback plans.",
  },
  {
    title: "Vendor Coordination",
    description:
      "One-stop ownership of ISP, OEM, and third-party escalations for all sites.",
  },
];

export default function ITBranchOperations() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/services/it-branch/banner.jpg"
          title="IT Branch Operations"
          titleTag="h1"
          description={`Consistent IT experiences across every branch.`}
        />
      </div>
      <FeatureHighlightSection
        images={[
          {
            src: "/assets/images/services/it-branch/reliable1.jpg",
            alt: "Security dashboard",
          },
          {
            src: "/assets/images/services/it-branch/reliable2.jpg",
            alt: "Developer working",
          },
          {
            src: "/assets/images/services/it-branch/reliable3.jpg",
            alt: "Data monitoring",
          },
        ]}
        title="End-to-End IT Management Across Multiple Branch Locations—Reliable, Secure, and Scalable "
        description="Managing IT for multiple branch locations is challenging—different geographies, diverse teams, and varying infrastructure create complexity in consistency, security, and uptime. LA Technologies’ IT Branch Operations provides centralized control and standardized processes for all your branches, ensuring seamless operations across every location. "
      />

      <FourBoxSection
        heading="Managing Multi-Location IT Branch Operations Effectively"
        headingTag="h2"
        items={[
          {
            title: "Fragmented Management ",
            description:
              "Different tools and vendors per branch lead to inconsistency and downtime. ",
          },
          {
            title: "Security Exposure",
            description:
              "Distributed endpoints and unmanaged Wi‑Fi increase risk across locations.",
          },
          {
            title: "Operational Overheads",
            description:
              "Local troubleshooting and on-site support consume time and budget",
          },
          {
            title: "Business Continuity Needs",
            description:
              "Branches require reliable connectivity and proactive monitoring. ",
          },
        ]}
      />

      <EightCards
        heading="What We Manage Across Multiple Branches"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/services/it-branch/service1.png",
            title: "Network & Connectivity",
            description:
              "Broadband/MPLS/4G/5G links, SD-WAN, firewalls, VPNs, routing & switching.",
          },
          {
            icon: "/assets/images/services/it-branch/service2.png",
            title: "Wi-Fi & Access",
            description:
              "Secure SSIDs (Corp/Guest), NAC policies, captive portal, bandwidth management.",
          },
          {
            icon: "/assets/images/services/it-branch/service3.png",
            title: "Endpoint & Server Ops",
            description:
              "Windows/macOS endpoints, POS devices, local servers, patching.",
          },
          {
            icon: "/assets/images/services/it-branch/service4.png",
            title: "Identity & Access Management",
            description:
              "AD / Azure AD, MFA, role-based access, password policies.",
          },
          {
            icon: "/assets/images/services/it-branch/service5.png",
            title: "Security Operations",
            description:
              "EDR/XDR, email security, DLP policies, web filtering, vulnerability management.",
          },
          {
            icon: "/assets/images/services/it-branch/service6.png",
            title: "Local Apps & IoT",
            description: "Printers, CCTV/NVR, IoT device onboarding.",
          },
          {
            icon: "/assets/images/services/it-branch/service7.png",
            title: "ITSM & Helpdesk",
            description:
              "Centralized ticketing for all branches with SLA tracking.",
          },
          {
            icon: "/assets/images/services/it-branch/service8.png",
            title: "Asset & License Governance",
            description: "Inventory and compliance across all locations.",
          },
          {
            icon: "/assets/images/services/it-branch/service9.png",
            title: "Compliance & Audits",
            description:
              "Policy rollouts and audit readiness for every branch.",
          },
        ]}
      />

      <BenefitsGrid heading="Our Multi-Location Operating Model" items={benefitsData} columns={4} />

      <WhyChooseSection
        heading="Benefits for Multi-Branch Enterprises"
        centerImage="/assets/images/services/it-branch/benefits.jpg"
        featuresLeft={[
          {
            icon: "/assets/images/services/it-branch/choose1.png",
            title: "Consistency Across All Locations",
            text: "Standardized configurations and policies reduce variability.",
          },
          {
            icon: "/assets/images/services/it-branch/choose2.png",
            title: "Lower Operational Costs",
            text: "Centralized management and automation reduce on-site dependencies.",
          },
          {
            icon: "/assets/images/services/it-branch/choose3.png",
            title: "Single Point of Accountability",
            text: "One partner managing networks, endpoints, security, and support.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/it-branch/choose4.png",
            title: "Enhanced Security Posture",
            text: "Continuous monitoring and rapid incident response across branches.",
          },
          {
            icon: "/assets/images/services/it-branch/choose5.png",
            title: "Business Continuity",
            text: "High availability design and tested recovery procedures.",
          },
          {
            icon: "/assets/images/services/it-branch/choose6.png",
            title: "Scalability",
            text: "Rapid onboarding for new branches with templated deployments.",
          },
        ]}
      />

      <ImageHighlightSection
        heading="Run Every Branch Like Your Best Branch"
        headingTag="h2"
        imageSrc="/assets/images/services/it-branch/branch.jpg"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies, multi-location IT operations become predictable, secure, and easy to scale."
      />
      <GradientCtaBanner
        text="Ready to streamline IT across your branches?"
        buttonText="Request a Branch Operations Assessment"
      />
    </>
  );
}
