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
    title: "Passive OT Network Monitoring",
    description:
      "Non-intrusive analysis of ICS/  SCADA traffic (e.g., Modbus, DNP3,  IEC 104) to avoid  impacting controllers and field  devices.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Behavior & Anomaly Detection",
    description:
      "Baseline “known-good” operational patterns;  alert on deviations such as unexpected  firmware changes, unauthorized ladder logic  downloads, or unusual command  sequences.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Use-Case & Playbook Catalog (OT-Specific)",
    description:
      "Predefined detections and response steps for  common OT scenarios: ransomware on  engineering workstations, unauthorized remote  sessions, rogue PLC programming, and  HMI tampering.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Incident Response Runbooks",
    description:
      "OT-safe procedures for triage,  containment, and recovery—  coordinated with plant  operations, EHS, and maintenance  teams.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Forensics & Root Cause Analysis",
    description:
      "Evidence collection (logs, packets,  controller state) with minimal  downtime; root-cause  findings and corrective actions.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Post-Incident Hardening",
    description:
      "Recommendations and implementation  support: tightening ACLs, refining  zones/conduits, MFA for remote sessions,  change-control on programming terminals.",
  },
];

const industriesData = {
  sectionTitle: "Industries We Serve",
  items: [
    {
      id: "manufacturing",
      title: "Manufacturing",
      image: "/assets/images/services/threat-detection-incident-response/industries1.png",
    },
    {
      id: "energyUtilities",
      title: "Energy & Utilities",
      image: "/assets/images/services/threat-detection-incident-response/industries2.png",
    },
    {
      id: "oilNGas",
      title: "Oil & Gas",
      image: "/assets/images/services/threat-detection-incident-response/industries3.png",
    },
    {
      id: "transportation",
      title: "Transportation",
      image: "/assets/images/services/threat-detection-incident-response/industries4.png",
    },
    {
      id: "criticalInfrastructure",
      title: "Critical Infrastructure",
      image: "/assets/images/services/threat-detection-incident-response/industries5.png",
    },
  ],
};
const benefitsData = [
  {
    icon: "/assets/images/services/threat-detection-incident-response/benefit1.png",
    title: "Minimize Downtime",
    description: "Rapid, OT-safe containment to keep production running.",
  },
  {
    icon: "/assets/images/services/threat-detection-incident-response/benefit2.png",
    title: "Reduce Risk Exposure",
    description:
      "Detect threats early and prevent lateral movement across lines and plants.",
  },
  {
    icon: "/assets/images/services/threat-detection-incident-response/benefit3.png",
    title: "Strengthen Compliance & Governance",
    description:
      "IR documentation and controls aligned to industrial standards (e.g., IEC 62443 practices).",
  },
  {
    icon: "/assets/images/services/threat-detection-incident-response/benefit4.png",
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
          bgImage="/assets/images/services/threat-detection-incident-response/banner.png"
          title="Threat Detection & Incident Response"
          titleTag="h1"
          description={`Round-the-clock Endpoint Security Services designed to  defend modern enterprises.`}
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
            src: "/assets/images/services/threat-detection-incident-response/detect1.png",
            alt: "Security dashboard",
          },
          {
            src: "/assets/images/services/threat-detection-incident-response/detect2.png",
            alt: "Developer working",
          },
          {
            src: "/assets/images/services/threat-detection-incident-response/detect3.png",
            alt: "Data monitoring",
          },
        ]}
      />

      <FourBoxSection
        heading="OT-Focused TDIR for Security and Safety"
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
            icon: "/assets/images/services/threat-detection-incident-response/service1.png",
            title: "Passive OT Network Monitoring",
            description:
              "Non-intrusive analysis of ICS/ SCADA traffic (e.g., Modbus, DNP3,  IEC 104) to avoid  impacting controllers and field  devices.",
          },
          {
            icon: "/assets/images/services/threat-detection-incident-response/service2.png",
            title: "Behavior &  Anomaly Detection",
            description:
              "Baseline “known-good” operational patterns;  alert on deviations such as unexpected  firmware changes, unauthorized ladder logic  downloads, or unusual command  sequences.",
          },
          {
            icon: "/assets/images/services/threat-detection-incident-response/service3.png",
            title: "Use-Case & Playbook Catalog (OT-Specific)",
            description:
              "Predefined detections and response steps for  common OT scenarios: ransomware on  engineering workstations, unauthorized remote  sessions, rogue PLC programming, and  HMI tampering.",
          },
          {
            icon: "/assets/images/services/threat-detection-incident-response/service4.png",
            title: "Incident ResponseRunbooks",
            description:
              "OT-safe procedures for triage, containment, and recovery— coordinated with plant operations, EHS, and maintenance  teams.",
          },
          {
            icon: "/assets/images/services/threat-detection-incident-response/service5.png",
            title: "Forensics & Root  Cause Analysis",
            description:
              "Evidence collection (logs, packets, controller state) with minimal downtime; root-cause  findings and corrective actions.",
          },
          {
            icon: "/assets/images/services/threat-detection-incident-response/service6.png",
            title: "Post-Incident  Hardening",
            description:
              "Recommendations and implementation support: tightening ACLs, refining zones/conduits, MFA for remote sessions,  change-control on programming terminals.",
          },
        ]}
      />

      <WhyChooseSection
        heading="Key Capabilities"
        centerImage="/assets/images/services/threat-detection-incident-response/benefits.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/threat-detection-incident-response/choose1.png",
            title: "24×7 Alerting & Escalation",
            text: "Tiered response aligned to severity and process criticality.",
          },
          {
            icon: "/assets/images/services/threat-detection-incident-response/choose2.png",
            title: "Threat Intelligence Tailored to OT",
            text: "Indicators and TTPs relevant to industrial environments (malicious ladder logic patterns, protocol misuse, vendor tool abuse).",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/threat-detection-incident-response/choose3.png",
            title: "Integration with Existing Controls",
            text: "Align detections with Network Segmentation, Asset Discovery, Vulnerability Management, and OT Privileged Access Management for end-to-end coverage.",
          },
          {
            icon: "/assets/images/services/threat-detection-incident-response/choose4.png",
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
        centerImage="/assets/images/services/threat-detection-incident-response/engagement.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/threat-detection-incident-response/engage1.png",
            title: "Discovery & Readiness Check",
            text: "Review architecture, assets, and current monitoring.",
          },
          {
            icon: "/assets/images/services/threat-detection-incident-response/engage2.png",
            title: "Baseline & Use-Case Setup",
            text: "Build operational baselines and map detections to your processes.",
          },
          {
            icon: "/assets/images/services/threat-detection-incident-response/engage3.png",
            title: "Runbook Development",
            text: "Create plant-specific IR procedures and communication plans.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/threat-detection-incident-response/engage4.png",
            title: "Go-Live Monitoring",
            text: "Enable alerts, escalation paths, and evidence retention.",
          },
          {
            icon: "/assets/images/services/threat-detection-incident-response/engage5.png",
            title: "Tabletop & Drills",
            text: "Practice IR scenarios with operations and EHS teams.",
          },
          {
            icon: "/assets/images/services/threat-detection-incident-response/engage6.png",
            title: "Continuous Improvement",
            text: "Quarterly reviews to refine detections and controls.",
          },
        ]}
      />

      <IndustryGrid data={industriesData} />

      <ImageHighlightSection
        heading="Your Operations, Our Response"
        headingTag="h2"
        imageSrc="/assets/images/services/threat-detection-incident-response/cta.png"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies, you get OT‑aware detection and incident response that protects
both safety and uptime.
."
      />

      <GradientCtaBanner text="Ready to strengthen OT threat detection and response?" buttonText="Request an OT Risk Assessment"/>
    </>
  );
}
