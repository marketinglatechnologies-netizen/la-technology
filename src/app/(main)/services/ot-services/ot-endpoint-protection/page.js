import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import InfoCtaSection from "@/components/services/InfoCtaSection";
import EightCards from "@/components/services/EightCards";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ImageTabsSection from "@/components/services/ImageTabsSection";
import ImageHighlightSection from "@/components/services/ImageHighlightSection";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import Image from "next/image";
import InfoList from "@/components/ui/InfoList";
import SolutionGrid from "@/components/services/SolutionGrid";
import IndustryGrid from "@/components/sections/IndustrySection";
import FourBoxSection from "@/components/services/FourBox";
import BenefitsGrid from "@/components/services/BenefitsGrid";
import SixCards from "@/components/services/SixCards";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const multiCardsItems = [
  {
    icon: "/assets/images/icons/path.svg",
    title: "OT-Safe Endpoint <br> Hardening",
    description:
      "Baseline configurations for HMIs, <br> historians, and engineering <br> stations (services, accounts, <br> policies, removable media <br> controls) tailored to vendor <br> guidance.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Application Control / <br> Allow-Listing",
    description:
      "Permit only trusted engineering <br> tools and runtime binaries; block <br> unauthorized executables and <br> scripts to prevent logic tampering <br> and malware execution.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Advanced Endpoint Protection <br> (Agented or Agentless Options)",
    description:
      "Deploy EDR/XDR where feasible on <br> Windows/Linux endpoints; use <br> agentless monitoring <br> for constrained systems to observe <br> changes and suspicious behaviors <br> without impacting <br> controllers.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Removable Media <br> Governance",
    description:
      "Control and scan USB usage on <br> programming laptops; enforce <br> cryptographic signing of <br> ladder logic/firmware files and <br> maintain transfer logs.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Privilege & <br> Session Controls",
    description:
      "Enforce least privilege on <br> engineering accounts, MFA for <br> admin access, and session <br> recording on maintenance <br> activities (links with OT Privileged <br> Access Management).",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Patch & <br> Compensating Controls",
    description:
      "Plan patching aligned to shutdown <br> windows; for unpatchable assets, <br> implement <br> compensating controls (isolation, <br> ACLs, app control, enhanced <br> monitoring).",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Change Control & <br> Integrity Monitoring",
    description:
      "Track and approve PLC/HMI project <br> changes; alert on unauthorized <br> firmware updates, <br> logic downloads, or configuration <br> drifts.",
  },
];

const industriesData = {
  sectionTitle: "Industries We Serve",
  items: [
    {
      id: "manufacturing",
      title: "Manufacturing",
      image: "/assets/images/industries/bfsi.jpg",
    },
    {
      id: "energyUtilities",
      title: "Energy & Utilities",
      image: "/assets/images/industries/education.jpg",
    },
    {
      id: "oilNGas",
      title: "Oil & Gas",
      image: "/assets/images/industries/manufacturing.jpg",
    },
    {
      id: "transportation",
      title: "Transportation",
      image: "/assets/images/industries/transportation.jpg",
    },
    {
      id: "criticalInfrastructure",
      title: "Critical Infrastructure",
      image: "/assets/images/industries/criticalInfra.jpg",
    },
  ],
};
const benefitsData = [
  {
    icon: "/assets/images/industries/greybox.jpg",
    title: "Reduce Ransomware & Logic Tampering Risk",
    description:
      "Block unauthorized executables and monitor high‑risk activities on engineering devices.",
  },
  {
    icon: "/assets/images/industries/greybox.jpg",
    title: "Protect Safety & Uptime",
    description:
      "OT‑safe controls that respect process constraints and vendor requirements.",
  },
  {
    icon: "/assets/images/industries/greybox.jpg",
    title: "Strengthen Governance",
    description:
      "Complete audit trails of admin actions, USB transfers, and configuration changes.",
  },
  {
    icon: "/assets/images/industries/greybox.jpg",
    title: "Compliance Alignment",
    description:
      "Controls mapped to industrial security practices (e.g., IEC 62443 principles) and internal EHS/quality policies.",
  },
];

export default function ApplicationSecurity() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/services/ICS-SCADA/banner.jpg"
          title="OT Endpoint Protection"
          titleTag="h1"
          description={`Round-the-clock Endpoint Security Services designed to <br> defend modern enterprises.`}
        />
      </div>
      <FeatureHighlightSection
        title="Secure HMIs, Engineering Workstations, and PLC Programming Devices"
        description="Operational Technology (OT) endpoints—like Human–Machine Interfaces (HMIs),
engineering workstations, historians, and PLC programming laptops—are critical to
plant operations. These systems often run legacy OS versions, use vendor-specific tools,
and cannot be patched or scanned like typical IT endpoints. That makes them prime
targets for ransomware, unauthorized logic changes, and remote-access abuse. <br>
LA Technologies’ OT Endpoint Protection solutions safeguard these specialized
endpoints without disrupting production, ensuring safety, availability, and integrity of your
industrial processes.
"
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
      />

      <FourBoxSection
        heading="Why OT Endpoint Protection Matters"
        headingTag="h2"
        items={[
          {
            title: "Legacy & constrained devices",
            description:
              "Many OT endpoints run unsupported OS or proprietary applications that limit traditional security controls.",
          },
          {
            title: "High-impact risks",
            description:
              "A single compromised HMI or engineering workstation can halt lines, corrupt PLC logic, or trigger unsafe states.",
          },
          {
            title: "Operational constraints",
            description:
              "Security must respect change-control windows, vendor tooling, and process safety—no intrusive agents or aggressive scans.",
          },
        ]}
      />

      <SixCards
        heading="What We Deliver"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/icons/path.svg",
            title: "OT-Safe Endpoint Hardening",
            description:
              "Baseline configurations for HMIs, historians, and engineering stations (services, accounts, policies, removable media controls) tailored to vendor guidance.",
          },
          {
            icon: "/assets/images/icons/path.svg",
            title: "Application Control / Allow-Listing",
            description:
              "Permit only trusted engineering tools and runtime binaries; block unauthorized executables and scripts to prevent logic tampering and malware execution.",
          },
          {
            icon: "/assets/images/icons/path.svg",
            title:
              "Advanced Endpoint Protection (Agented or Agentless Options)",
            description:
              "Deploy EDR/XDR where feasible on Windows/Linux endpoints; use agentless monitoring for constrained systems to observe changes and suspicious behaviors without impacting controllers.",
          },
          {
            icon: "/assets/images/icons/path.svg",
            title: "Removable Media  Governance",
            description:
              "Control and scan USB usage on programming laptops; enforce cryptographic signing of ladder logic/firmware files and maintain transfer logs.",
          },
          {
            icon: "/assets/images/icons/path.svg",
            title: "Privilege & Session Controls",
            description:
              "Enforce least privilege on engineering accounts, MFA for  admin access, and session recording on maintenance activities (links with OT Privileged  Access Management).",
          },
          {
            icon: "/assets/images/icons/path.svg",
            title: "Patch &  Compensating Controls",
            description:
              "Plan patching aligned to shutdown  windows; for unpatchable assets, implement compensating controls (isolation, ACLs, app control, enhanced monitoring).",
          },
          {
            icon: "/assets/images/icons/path.svg",
            title: "Change Control & Integrity Monitoring",
            description:
              "Track and approve PLC/HMI project hanges; alert on unauthorized firmware updates,logic downloads, or configuration drifts.",
          },
        ]}
      />

      <WhyChooseSection
        heading="Integration Across OT Security"
        centerImage="/assets/images/services/soc/whychoose.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/soc/cost.png",
            title: "Asset Discovery",
            text: "Validate endpoint inventory, owners, and criticality.",
          },
          {
            icon: "/assets/images/services/soc/scalable.png",
            title: "Network Segmentation",
            text: "Place endpoints in appropriate zones; restrict conduits to required protocols.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/soc/alert.png",
            title: "Threat Detection & IR",
            text: "Stream endpoint events to OT monitoring; use OT‑specific runbooks for safe containment.",
          },
          {
            icon: "/assets/images/services/soc/global.png",
            title: "Vulnerability Management",
            text: "Prioritize endpoint findings and plan remediation without impacting production.",
          },
        ]}
      />

      <BenefitsGrid heading="Benefits" items={benefitsData} columns={4} />

      <InfoList
        title="Typical Use Cases"
        items={[
          "Hardening and allow‑listing on HMIs and historians in a production line",
          "EDR deployment on Windows-based engineering workstations with vendor tool compatibility testing",
          "USB control and scanning for firmware updates to PLCs and drives",
          "Integrity monitoring for unauthorized logic downloads during off-hours",
          "MFA and session recording for third‑party maintenance activities",
        ]}
      />

      <WhyChooseSection
        heading="How Engagement Works ?"
        centerImage="/assets/images/services/soc/whychoose.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/soc/cost.png",
            title: "Discovery & Feasibility Assessment",
            text: " Identify endpoint types, OS/vendor constraints, and operational windows.",
          },
          {
            icon: "/assets/images/services/soc/scalable.png",
            title: "Control Design ",
            text: "Define allow‑lists, hardening baselines, privilege policies, and monitoring integrations.",
          },
          {
            icon: "/assets/images/services/soc/alert.png",
            title: "Pilot & Compatibility Tests",
            text: "Validate controls with vendor tools and plant operations; adjust for OT safety.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/soc/global.png",
            title: "Rollout",
            text: "Phased deployment aligned to change windows; documented procedures and training.",
          },
          {
            icon: "/assets/images/industries/greybox.jpg",
            title: "Operate & Improve",
            text: "Continuous monitoring, periodic reviews, and updates to baselines and allow‑lists.",
          },
        ]}
      />

      <IndustryGrid data={industriesData} />

      <ImageHighlightSection
        heading="Your Endpoints, Our Protection"
        headingTag="h2"
        imageSrc="/assets/images/industries/security.jpg"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies, you get OT‑aware endpoint protection that defends critical devices
without disrupting production."
      />

      <GradientCtaBanner text="Ready to secure OT endpoints ?" />
    </>
  );
}
