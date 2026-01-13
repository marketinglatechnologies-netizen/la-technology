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
    title: "Passive OT Network <br> Monitoring",
    description:
      "Non-intrusive analysis of ICS/ <br> SCADA traffic (e.g., Modbus, DNP3, <br> IEC 104) to avoid <br> impacting controllers and field <br> devices.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Behavior & <br> Anomaly Detection",
    description:
      "Baseline “known-good” operational patterns; <br> alert on deviations such as unexpected <br> firmware changes, unauthorized ladder logic <br> downloads, or unusual command <br> sequences.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Use-Case & Playbook <br> Catalog (OT-Specific)",
    description:
      "Predefined detections and response steps for <br> common OT scenarios: ransomware on <br> engineering workstations, unauthorized remote <br> sessions, rogue PLC programming, and <br> HMI tampering.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Incident Response <br> Runbooks",
    description:
      "OT-safe procedures for triage, <br> containment, and recovery— <br> coordinated with plant <br> operations, EHS, and maintenance <br> teams.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Forensics & Root <br> Cause Analysis",
    description:
      "Evidence collection (logs, packets, <br> controller state) with minimal <br> downtime; root-cause <br> findings and corrective actions.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Post-Incident <br> Hardening",
    description:
      "Recommendations and implementation <br> support: tightening ACLs, refining <br> zones/conduits, MFA for remote sessions, <br> change-control on programming terminals.",
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
    title: "Minimize Downtime",
    description: "Rapid, OT-safe containment to keep production running.",
  },
  {
    icon: "/assets/images/industries/greybox.jpg",
    title: "Reduce Risk Exposure",
    description:
      "Detect threats early and prevent lateral movement across lines and plants.",
  },
  {
    icon: "/assets/images/industries/greybox.jpg",
    title: "Strengthen Compliance & Governance",
    description:
      "IR documentation and controls aligned to industrial standards (e.g., IEC 62443 practices).",
  },
  {
    icon: "/assets/images/industries/greybox.jpg",
    title: "Lower Total Cost of Incidents",
    description:
      "Faster recovery and targeted hardening reduce future event impact.",
  },
];

export default function ApplicationSecurity() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/services/ICS-SCADA/banner.jpg"
          title="Threat Detection & Incident Response"
          titleTag="h1"
          description={`Round-the-clock Endpoint Security Services designed to <br> defend modern enterprises.`}
        />
      </div>
      <FeatureHighlightSection
        title="Detect OT Threats Early. Respond Without Disrupting Operations."
        description="In OT environments, a single compromise can halt production, damage equipment, and
put safety at risk. Traditional IT-centric tools often miss OT‑specific behaviors and
protocols. LA Technologies’ Threat Detection & Incident Response (TDIR) for OT
provides continuous visibility into industrial networks and a proven response framework
that contains threats without impacting critical processes.
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
        heading="Why OT‑Focused TDIR Matters ?"
        headingTag="h2"
        items={[
          {
            title: "Legacy systems & proprietary protocols: ",
            description:
              "PLCs, HMIs, and SCADA servers were built for reliability, not security—making them susceptible to modern attacks.",
          },
          {
            title: "Lateral movement risk:",
            description:
              "Flat or poorly segmented networks let attackers pivot quickly across production lines.",
          },
          {
            title: "Safety & uptime:",
            description:
              "Incident handling must prioritize process safety and operational continuity over aggressive containment tactics common in IT.",
          },
        ]}
      />

      <SixCards
        heading="What We Deliver"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/icons/path.svg",
            title: "Passive OT Network <br> Monitoring",
            description:
              "Non-intrusive analysis of ICS/ <br> SCADA traffic (e.g., Modbus, DNP3, <br> IEC 104) to avoid <br> impacting controllers and field <br> devices.",
          },
          {
            icon: "/assets/images/icons/path.svg",
            title: "Behavior & <br> Anomaly Detection",
            description:
              "Baseline “known-good” operational patterns; <br> alert on deviations such as unexpected <br> firmware changes, unauthorized ladder logic <br> downloads, or unusual command <br> sequences.",
          },
          {
            icon: "/assets/images/icons/path.svg",
            title: "Use-Case & Playbook <br> Catalog (OT-Specific)",
            description:
              "Predefined detections and response steps for <br> common OT scenarios: ransomware on <br> engineering workstations, unauthorized remote <br> sessions, rogue PLC programming, and <br> HMI tampering.",
          },
          {
            icon: "/assets/images/icons/path.svg",
            title: "Incident Response <br> Runbooks",
            description:
              "OT-safe procedures for triage, <br> containment, and recovery— <br> coordinated with plant <br> operations, EHS, and maintenance <br> teams.",
          },
          {
            icon: "/assets/images/icons/path.svg",
            title: "Forensics & Root <br> Cause Analysis",
            description:
              "Evidence collection (logs, packets, <br> controller state) with minimal <br> downtime; root-cause <br> findings and corrective actions.",
          },
          {
            icon: "/assets/images/icons/path.svg",
            title: "Post-Incident <br> Hardening",
            description:
              "Recommendations and implementation <br> support: tightening ACLs, refining <br> zones/conduits, MFA for remote sessions, <br> change-control on programming terminals.",
          },
        ]}
      />

      <WhyChooseSection
        heading="Key Capabilities"
        centerImage="/assets/images/services/soc/whychoose.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/soc/cost.png",
            title: "24×7 Alerting & Escalation",
            text: "Tiered response aligned to severity and process criticality.",
          },
          {
            icon: "/assets/images/services/soc/scalable.png",
            title: "Threat Intelligence Tailored to OT",
            text: "Indicators and TTPs relevant to industrial environments (malicious ladder logic patterns, protocol misuse, vendor tool abuse).",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/soc/alert.png",
            title: "Integration with Existing Controls",
            text: "Align detections with Network Segmentation, Asset Discovery, Vulnerability Management, and OT Privileged Access Management for end-to-end coverage.",
          },
          {
            icon: "/assets/images/services/soc/global.png",
            title: "Evidence-Driven Reporting",
            text: "Time-stamped incident timelines, affected assets, dwell time, and recommended preventive measures—ready for audits and management reviews.",
          },
        ]}
      />

      <BenefitsGrid heading="Benefits" items={benefitsData} columns={4} />

      <InfoList
        title="Typical OT Threat Scenarios We Address"
        items={[
          "Ransomware impacting engineering workstations or historians",
          "Unauthorized PLC firmware changes or logic downloads",
          "Rogue remote access tools used on HMI/SCADA servers",
          "Misuse of vendor service accounts or shared credentials",
          "Suspicious protocol activity (unexpected writes, mode changes)",
        ]}
      />

      <WhyChooseSection
        heading="How Engagement Works ?"
        centerImage="/assets/images/services/soc/whychoose.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/soc/cost.png",
            title: "Discovery & Readiness Check",
            text: "Review architecture, assets, and current monitoring.",
          },
          {
            icon: "/assets/images/services/soc/scalable.png",
            title: "Baseline & Use-Case Setup",
            text: "Build operational baselines and map detections to your processes.",
          },
          {
            icon: "/assets/images/services/soc/alert.png",
            title: "Runbook Development",
            text: "Create plant-specific IR procedures and communication plans.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/soc/global.png",
            title: "Go-Live Monitoring",
            text: "Enable alerts, escalation paths, and evidence retention.",
          },
          {
            icon: "/assets/images/industries/greybox.jpg",
            title: "Tabletop & Drills",
            text: "Practice IR scenarios with operations and EHS teams.",
          },
          {
            icon: "/assets/images/industries/greybox.jpg",
            title: "Continuous Improvement",
            text: "Quarterly reviews to refine detections and controls.",
          },
        ]}
      />

      <IndustryGrid data={industriesData} />

      <ImageHighlightSection
        heading="Your Operations, Our Response"
        headingTag="h2"
        imageSrc="/assets/images/industries/security.jpg"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies, you get OT‑aware detection and incident response that protects
both safety and uptime.
."
      />

      <GradientCtaBanner text="Ready to strengthen OT threat detection and response?" />
    </>
  );
}
