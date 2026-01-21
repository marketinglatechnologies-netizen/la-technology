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
    industry: "Banking & Financial Services",
    organizationType: "Large Commercial Bank",
    geography:
      "Nationwide (Branches, Head Office, Data Centers, Remote Workforce)",
    size: "20,000",
    securitySolutions: [
      "Netskope Secure Web Gateway (SWG)",
      "Netskope Endpoint Data Loss Prevention (DLP)",
      "Netskope DNS Security",
      "Netskope Cloud Firewall",
    ],
  };

  const executiveSummaryData = {
    title: "Executive Summary",
    summary:
      "A leading Indian power manufacturing enterprise required a secure, scalable, and OT-safe cybersecurity architecture to protect critical production facilities and distributed access across India. The organization faced increasing ransomware risk, uncontrolled vendor access, and lack of endpoint protection on OT systems. The solution integrated Fortinet’s OT network security and identity platform with TXOne Stellar EDR, delivering defense-in-depth OT security without impacting operational uptime.",

    businessChallenges: [
      "Growing adoption of SaaS and cloud services without visibility",
      "Data leakage risks involving customer and financial information",
      "Increasing phishing and DNS-based attacks",
      "Complex branch security architecture with legacy firewalls",
      "Regulatory and compliance requirements (PCI DSS, RBI, ISO 27001)",
    ],

    securityObjectives: [
      "Secure web and cloud access for all users",
      "Prevent data loss across endpoints and cloud applications",
      "Block malicious domains and DNS-based threats",
      "Simplify firewall architecture using cloud-native controls",
      "Achieve centralized visibility and policy enforcement",
    ],

    solutionOverview: [
      "Netskope Secure Web Gateway (SWG) Professional provides real-time inspection of web and cloud traffic, enabling granular access control and threat protection.",
      "Netskope Endpoint DLP ensures sensitive banking data such as PII, PCI, and financial records are protected on user endpoints.",
      "Netskope DNS Security blocks malicious domains, command-and-control traffic, and phishing attempts at the DNS layer.",
      "Netskope Cloud Firewall delivers scalable, cloud-native firewalling to replace or complement traditional branch firewalls.",
    ],

    deploymentPhases: [
      "Phase 1: Assessment and policy design",
      "Phase 2: Netskope SWG and DNS Security rollout",
      "Phase 3: Endpoint DLP deployment to users",
      "Phase 4: Cloud Firewall implementation for branches",
      "Phase 5: Optimization and compliance reporting",
    ],

    businessOutcomes: [
      "Reduced web-based malware and phishing incidents",
      "Strong protection of sensitive customer data",
      "Improved visibility into cloud and web usage",
      "Simplified branch security operations",
      "Enhanced compliance and audit readiness",
    ],

    image: "/assets/images/services/soc/whychoose.png",
  };

  const {
    title,
    summary,
    businessChallenges,
    securityObjectives,
    solutionOverview,
    deploymentPhases,
    businessOutcomes,
    image,
  } = executiveSummaryData;
  return (
    <>
      <InnerPageBanner
        bgImage="/assets/images/careers/banner.jpg"
        title="Secure Digital Banking Transformation Using Netskope"
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

              {/* Bottom Two Columns */}

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Deployment Phases
                  </h3>
                  <ul className="space-y-1">
                    {deploymentPhases.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Business Outcomes
                  </h3>
                  <ul className="space-y-1">
                    {businessOutcomes.map((item, index) => (
                      <li key={index}>– {item}</li>
                    ))}
                  </ul>
                </div>
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
