import InnerPageBanner from "@/components/layout/InnerPageBanner";
import IndustryAndScope from "@/components/services/CaseStudiesHeader";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

export default function NetskopeSecurity() {
  const industryScopeData = {
    industry: "Power Manufacturing & Generation",
    organizationType: "Large Commercial Bank",
    geography:
      "Pan-India (Thermal, Hydro, Solar plants, substations, R&D and service centers)",
       size: "20,000",
    securitySolutions: [
      "FortiSRA – Secure Remote Access",
      "Forti Authenticator – MFA",
      "Fortinet OT Firewall – FortiGate with FortiGuard OT Security",
      "TXOne Stellar EDR – OT Endpoint Detection & Response",
    ],
  };

  const executiveSummaryData = {
    title: "Executive Summary",
    summary:
      "A leading Indian power manufacturing enterprise required a secure, scalable, and OT-safe cybersecurity architecture to protect critical production facilities distributed across India. The organization faced increasing  ransomware risk, uncontrolled vendor access, and lack of endpoint protection on OT systems. The solution integrated Fortinet’s OT network security and identity platform with TXOne Stellar EDR, delivering defense-in-depth OT security without impacting operational uptime.",

    businessChallenges: [
      "Geographically dispersed OT environments",
      "Legacy PLC, SCADA, and DCS systems",
      "Insecure vendor and OEM remote access",
      "Lack of OT-aware endpoint protection",
      "Compliance and audit requirements",
    ],

    securityObjectives: [
      "Secure OT networks without disrupting operations",
      "Implement Zero-Trust remote access",
      "Enforce centralized MFA",
      "Deploy OT-specific endpoint protection",
      "Enable centralized monitoring across India",
    ],

    solutionOverview: [
      "Fortinet OT Firewall provides network segmentation, deep OT protocol inspection, and virtual patching. FortiSRA delivers Zero-Trust secure remote access with session recording and audit logging. FortiAuthenticator enforces centralized identity, MFA, and role-based access control. ",
      "TXOne Stellar EDR protects OT endpoints with behavior-based detection, ransomware protection, and application allowlisting designed for industrial environments.",
    ],

    deploymentPhases: [
      "Phase 1: OT risk assessment and pilot deployment",
      "Phase 2: Core Fortinet security rollout",
      "Phase 3: TXOne Stellar EDR endpoint protection rollout",
      "Phase 4: Forti Authenticator Roll out",
    ],

    businessOutcomes: [
      "100% OT asset visibility across plants",
      ">90% reduction in vendor access risk",
      "Faster detection and response to cyber threats",
      "Zero production downtime during deployment",
      "Improved compliance and audit readiness",
    ],
    conclusion: [
      "The combined Fortinet and TXOne OT security architecture enabled the power manufacturing organization to achieve comprehensive OT cyber resilience, secure remote access, and long-term operational stability across all India locations. ",
    ],

    image: "/assets/images/home/case2.jpg",
  };

  const {
    title,
    summary,
    businessChallenges,
    securityObjectives,
    solutionOverview,
    deploymentPhases,
    businessOutcomes,
    conclusion,
    image,
  } = executiveSummaryData;
  return (
    <>
      <InnerPageBanner
        bgImage="/assets/images/home/case2-banner.jpg"
        title=" Pan-India Power Manufacturing OT Cybersecurity Transformation"
        titleTag="h1"
        description={``}
      />
      <IndustryAndScope title="Industry & Scope" data={industryScopeData} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT CONTENT */}
            <div className="text-sm text-gray-800 leading-relaxed">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {title}
              </h2>

              <p className="mb-6">{summary}</p>

              {/* Business Challenges */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Business Challenges
              </h3>
              <ul className="mb-6 space-y-1">
                {businessChallenges.map((item, index) => (
                  <li key={index}>– {item}</li>
                ))}
              </ul>

              {/* Security Objectives */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Security Objectives
              </h3>
              <ul className="mb-6 space-y-1">
                {securityObjectives.map((item, index) => (
                  <li key={index}>– {item}</li>
                ))}
              </ul>

              {/* Solution Overview */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Solution Overview
              </h3>
              <div className="space-y-3 mb-8">
                {solutionOverview.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>

              {/* Deployment Phases */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Deployment Phases
                </h3>
                <ul className="space-y-1">
                  {deploymentPhases.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Business Outcomes */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Business Outcomes
                </h3>
                <ul className="space-y-1">
                  {businessOutcomes.map((item, index) => (
                    <li key={index}>– {item}</li>
                  ))}
                </ul>
              </div>

              {/* Conclusion */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Conclusion
              </h3>
              <div className="space-y-3">
                {conclusion.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
