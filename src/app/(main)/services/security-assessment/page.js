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



export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

 const items = [
    {
      title: "Network Security",
      points: [
        "Firewall rules, segmentation, VPN configurations",
        "Routing/switching baselines, remote access policies",
        "IDS/IPS policies, logging and alerting coverage",
      ],
    },
    {
      title: "Endpoint & Server Security",
      points: [
        "Patch status, AV/EDR, hardening baselines",
        "Local admin usage, removable media, application control",
        "Backup integrity and restoration drill readiness",
      ],
    },
    {
      title: "Identity & Access",
      points: [
        "AD/Azure AD hygiene (users, groups, roles)",
        "MFA usage, privileged access controls",
        "Password policies and account lifecycle processes",
      ],
    },
    {
      title: "Email & Web Security",
      points: [
        "Anti-phishing, anti-malware",
        "SPF/DKIM/DMARC",
        "DLP policies, web filtering, safe browsing controls",
      ],
    },
    {
      title: "OT / Industrial Security (if applicable)",
      points: [
        "Network segmentation between IT/OT",
        "Remote vendor access governance and jump hosts",
        "Asset inventory, firmware status, protocol exposure",
        "Safety-critical change controls and maintenance procedures",
      ],
    },
    {
      title: "Physical & Environmental",
      points: [
        "Access controls, surveillance, secure racks and wiring",
        "Device labeling, asset custody, visitor/vendor processes",
      ],
    },
    {
      title: "Policies & Governance",
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
        bgImage="/assets/images/about-us/banner.jpg"
        title="Security Assessment"
        titleTag="h1"
        description={`Round-the-clock Managed Security Services designed to defend modern enterprises.`}
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
 
<section className="max-w-7xl mx-auto px-6 py-6">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-2xl font-semibold">Assessment Scope</h2>
        <p className="text-gray-500 mt-2">
          We tailor the assessment to your environment and priorities.
        </p>
      </div>

      {/* ROW 1 – 4 CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.slice(0, 4).map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>

      {/* ROW 2 – 3 CARDS (CENTERED) */}
      <div className="mt-10 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
          {items.slice(4).map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>

                <SixCards
  heading="Our Methodology"
  headingTag="h2"
  items={[
    {
      icon: "/assets/images/icons/speed.svg",
      title: "Planning & Scoping",
      description:
        "Planning & Scoping define sites, systems, and priorities; agree on timelines and stakeholders.",
    },
    {
      icon: "/assets/images/icons/speed.svg",
      title: "Data Collection",
      description:
        "Workshops, configuration reviews, log analysis, and controlled testing.",
    },
    {
      icon: "/assets/images/icons/speed.svg",
      title: "Technical Testing",
      description:
        "Vulnerability scanning, configuration benchmarking, and sample validation.",
    },
    {
      icon: "/assets/images/icons/speed.svg",
      title: "Gap Analysis",
      description:
        "Map findings to standards and your business impact.",
    },
    {
      icon: "/assets/images/icons/speed.svg",
      title: "Risk Prioritization",
      description:
        "Rate risks by likelihood, impact, and ease of remediation.",
    },
    {
      icon: "/assets/images/icons/speed.svg",
      title: "Recommendations & Roadmap",
      description:
        "Practical fixes, quick wins, and phased improvements.",
    },
  ]}
/>
<section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-10">
          Standards & Frameworks We Align To
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          
          {/* Card 1 */}
          <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="relative h-36 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/assets/images/industries/greybox.jpg"
                alt="NIST CSF"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm font-semibold">
              NIST Cybersecurity Framework (CSF)
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="relative h-36 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/assets/images/industries/greybox.jpg"
                alt="ISO 27001"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm font-semibold">
              ISO/IEC 27001 (controls and audit readiness)
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="relative h-36 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/assets/images/industries/greybox.jpg"
                alt="IEC 62443"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm font-semibold">
              IEC 62443 (for industrial/OT environments)
            </p>
          </div>

          {/* Card 4 */}
          <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="relative h-36 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/assets/images/industries/greybox.jpg"
                alt="CERT-In"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm font-semibold">
              CERT-In advisories (India-specific guidance)
            </p>
          </div>

          {/* Card 5 */}
          <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="relative h-36 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/assets/images/industries/greybox.jpg"
                alt="OEM Best Practices"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm font-semibold">
              OEM Best Practices (firewalls, endpoints & network gear)
            </p>
          </div>

        </div>
      </div>
    </section>

  <WhyChooseSection
          heading="Why Choose LA Technologies?"
          centerImage="/assets/images/services/soc/whychoose.png"
          featuresLeft={[
            {
              icon: "/assets/images/home/icon1.png",
              title: "Certified Professionals",
              text: "Experts in networking, cloud, security, and enterprise IT solutions.",
            },
            {
              icon: "/assets/images/home/icon2.png",
              title: "Cost Efficiency",
              text: "Reduce hiring costs and eliminate long recruitment cycles.",
            },
          ]}
          featuresRight={[
            {
              icon: "/assets/images/home/icon3.png",
              title: "Scalability",
              text: "Scale up or down based on project requirements.",
            },
            {
              icon: "/assets/images/home/icon4.png",
              title: "Domain Expertise",
              text: "Experience across industries including BFSI, healthcare, manufacturing, and IT services.",
            },
          ]}
        />
        <ImageTabsSection
                heading="Who Needs SOC-as-a-Service?"
                headingTag="h2"
                tabs={[
                  {
                    label: "Businesses with short-term IT projects",
                    image: "/assets/images/industries/tabimage.jpg",
                  },
                  {
                    label: "Organizations facing skill shortages",
                    image: "/assets/images/industries/tabimage.jpg",
                  },
                  {
                    label: "Companies scaling operations rapidly",
                    image: "/assets/images/industries/tabimage.jpg",
                  },
                  {
                    label: "Enterprises seeking niche technology expertise",
                    image: "/assets/images/industries/tabimage.jpg",
                  },
                ]}
              />
              <ImageHighlightSection
                heading="Your Team, Our Talent"
                headingTag="h2"
                imageSrc="/assets/images/industries/security.jpg"
                imageAlt="Cybersecurity monitoring dashboard"
                description="With LA Technologies as your security partner, you gain peace of mind knowing your
business is protected against evolving threats. We work behind the scenes so you can
focus on growth and innovation."
              />
              <GradientCtaBanner text="READY TO STRENGTHEN YOUR SECURITY POSTURE?" />
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

      <h4 className="text-orange-500 font-semibold mb-3">
        {item.title}
      </h4>

      <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
        {item.points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}