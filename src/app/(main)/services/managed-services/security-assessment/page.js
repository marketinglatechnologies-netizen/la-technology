import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import FourBoxSection from "@/components/services/FourBox";
import InfoCtaSection from "@/components/services/InfoCtaSection";
import SixCards from "@/components/services/SixCards";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ImageTabsSection from "@/components/services/ImageTabsSection";
import AssessmentScope from "@/components/sections/assesment";
import ImageHighlightSection from "@/components/services/ImageHighlightSection";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import Image from "next/image";
import StandardsFrameworks from "@/components/sections/StandardFramework";
import EngagementOptions from "@/components/sections/EngagementOptions";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const items = [
  {
    title: "Network Security",
    image: "/assets/images/services/security-assessment/network.png",
    points: [
      "Firewall rules, segmentation, VPN configurations",
      "Routing/switching baselines, remote access policies",
      "IDS/IPS policies, logging and alerting coverage",
    ],
  },
  {
    title: "Endpoint & Server Security",
    image: "/assets/images/services/security-assessment/endpoint.png",
    points: [
      "Patch status, AV/EDR, hardening baselines",
      "Local admin usage, removable media, application control",
      "Backup integrity and restoration drill readiness",
    ],
  },
  {
    title: "Identity & Access",
    image: "/assets/images/services/security-assessment/identity.png",
    points: [
      "AD/Azure AD hygiene (users, groups, roles)",
      "MFA usage, privileged access controls",
      "Password policies and account lifecycle processes",
    ],
  },
  {
    title: "Email & Web Security",
    image: "/assets/images/services/security-assessment/email.png",
    points: [
      "Anti-phishing, anti-malware",
      "SPF/DKIM/DMARC",
      "DLP policies, web filtering, safe browsing controls",
    ],
  },
  {
    title: "OT / Industrial Security (if applicable)",
    image: "/assets/images/services/security-assessment/ot.png",
    points: [
      "Network segmentation between IT/OT",
      "Remote vendor access governance and jump hosts",
      "Asset inventory, firmware status, protocol exposure",
      "Safety-critical change controls and maintenance procedures",
    ],
  },
  {
    title: "Physical & Environmental",
    image: "/assets/images/services/security-assessment/physical.png",
    points: [
      "Access controls, surveillance, secure racks and wiring",
      "Device labeling, asset custody, visitor/vendor processes",
    ],
  },
  {
    title: "Policies & Governance",
    image: "/assets/images/services/security-assessment/policy.png",
    points: [
      "Security policies, SOPs, incident response runbooks",
      "Roles & responsibilities, training & awareness",
      "Evidence collection and audit readiness",
    ],
  },
];

export default function SecurityAssessment() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/services/security-assessment/banner.png"
          title="Security Assessment"
          titleTag="h1"
          description={`Identify risks. Prioritize actions. Strengthen posture.`}
        />
      </div>
      <FeatureHighlightSection
        images={[
          {
            src: "/assets/images/services/security-assessment/risk1.png",
            alt: "Security dashboard",
          },
          {
            src: "/assets/images/services/security-assessment/risk2.png",
            alt: "Developer working",
          },
          {
            src: "/assets/images/services/security-assessment/risk3.png",
            alt: "Data monitoring",
          },
        ]}
        title="Identify Risks, Strengthen Defenses, and Stay Audit-Ready"
        description="A strong security posture starts with knowing where you’re exposed. LA Technologies’ Security Assessment provides a comprehensive, evidence-based evaluation of your IT and OT environments—so you can make informed decisions, fix critical gaps, and enforce consistent security across all locations."
      />
      <FourBoxSection
        heading="Why Security Assessment Matters"
        headingTag="h2"
        items={[
          {
            title: "Unknown Vulnerabilities",
            description:
              "Hidden misconfigurations, outdated devices, and weak policies create openings for attackers.",
          },
          {
            title: "Compliance Pressure",
            description:
              "Audits demand documented controls, evidence, and continuous improvement.",
          },
          {
            title: "Multi-Location Complexities",
            description:
              "Inconsistent controls across branches lead to uneven risk.",
          },
          {
            title: "Operational Continuity",
            description:
              "Prevent outages and security incidents that disrupt business and safety.",
          },
        ]}
      />

      <AssessmentScope />

      <SixCards
        heading="Our Methodology"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/services/security-assessment/service1.png",
            title: "Planning & Scoping",
            description:
              "Planning & Scoping define sites, systems, and priorities; agree on timelines and stakeholders.",
          },
          {
            icon: "/assets/images/services/security-assessment/service2.png",
            title: "Data Collection",
            description:
              "Workshops, configuration reviews, log analysis, and controlled testing.",
          },
          {
            icon: "/assets/images/services/security-assessment/service3.png",
            title: "Technical Testing",
            description:
              "Vulnerability scanning, configuration benchmarking, and sample validation.",
          },
          {
            icon: "/assets/images/services/security-assessment/service4.png",
            title: "Gap Analysis",
            description: "Map findings to standards and your business impact.",
          },
          {
            icon: "/assets/images/services/security-assessment/service5.png",
            title: "Risk Prioritization",
            description:
              "Rate risks by likelihood, impact, and ease of remediation.",
          },
          {
            icon: "/assets/images/services/security-assessment/service6.png",
            title: "Recommendations & Roadmap",
            description:
              "Practical fixes, quick wins, and phased improvements.",
          },
          {
            icon: "/assets/images/services/security-assessment/service6.png",
            title: "Validation & Sign‑off",
            description:
              "Review actions taken, update evidence, and finalize reports.",
          },
        ]}
      />

      <StandardsFrameworks />

      <SixCards
        heading="Deliverables You Receive"
        headingTag="h2"
        subheading="Tangible outcomes from our comprehensive assessment process."
        items={[
          {
            icon: "/assets/images/services/security-assessment/feature1.png",
            title: "Executive Summary",
            description:
              "Clear overview of risks and business impact, designed for leadership review.",
          },
          {
            icon: "/assets/images/services/security-assessment/feature2.png",
            title: "Detailed Findings Report",
            description:
              "Evidence, severity ratings, and affected assets for technical teams.",
          },
          {
            icon: "/assets/images/services/security-assessment/feature3.png",
            title: "Prioritized Remediation Plan",
            description:
              "Quick wins, medium-term actions, and strategic upgrades to improve posture.",
          },
          {
            icon: "/assets/images/services/security-assessment/feature4.png",
            title: "Policy & Config Baselines",
            description:
              "Templates for standardization across branches and new deployments.",
          },
          {
            icon: "/assets/images/services/security-assessment/feature5.png",
            title: "SLA-Ready Action Tracker",
            description:
              "Assign tasks, owners, and due dates—ready for immediate execution.",
          },
          {
            icon: "/assets/images/services/security-assessment/feature6.png",
            title: "Review Workshop",
            description:
              "Walkthrough with stakeholders to align next steps and clarify findings.",
          },
        ]}
      />

      <WhyChooseSection
        heading="Multi-Location Coverage"
        centerImage="/assets/images/services/security-assessment/center.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/security-assessment/coverage1.png",
            title: "Consistent Templates & Baselines",
            text: "Applied across all branches uniformly.",
          },
          {
            icon: "/assets/images/services/security-assessment/coverage2.png",
            title: "Comparative Scorecards",
            text: "Highlight site-wise risk differences effectively.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/security-assessment/coverage3.png",
            title: "Phased Remediation Plan",
            text: "Designed for efficient region-wise rollout",
          },
          {
            icon: "/assets/images/services/security-assessment/coverage4.png",
            title: "Centralized Evidence Repository",
            text: "Evidence repository for audits and reviews.",
          },
        ]}
      />
      <ImageTabsSection
        heading="Benefits with LA Technologies"
        headingTag="h2"
        tabs={[
          {
            label: "Clear Visibility of risks across IT and OT environments",
            image: "/assets/images/services/security-assessment/tab1.png",
          },
          {
            label:
              "Actionable Roadmap with practical, cost-aware recommendations",
            image: "/assets/images/services/security-assessment/tab2.png",
          },
          {
            label: "Audit Confidence with evidence-backed compliance posture",
            image: "/assets/images/services/security-assessment/tab3.png",
          },
          {
            label: "Reduced Attack Surface through standardized configurations",
            image: "/assets/images/services/security-assessment/tab4.jpg",
          },
          {
            label: "Faster Remediation enabled by on-ground and remote teams",
            image: "/assets/images/services/security-assessment/tab5.png",
          },
        ]}
      />

      <EngagementOptions />
      <GradientCtaBanner text="Ready to assess your security posture across locations?" />
    </>
  );
}

function Card({ item }) {
  return (
    <div className="border border-orange-400 rounded-xl p-6 bg-white">
      <img
        src="/assets/images/industries/greybox.jpg"
        alt={item.title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />

      <h4 className="text-orange-500 font-semibold mb-3">{item.title}</h4>

      <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
        {item.points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
