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
import SixCards from "@/components/services/SixCards";
import IndustryGrid from "@/components/sections/IndustrySection";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const otPamFeatures = [
  {
    id: 1,
    title: "Centralized Credential Vault",
    description: "Securely store and rotate privileged credentials.",
  },
  {
    id: 2,
    title: "Role-Based Access Control",
    description: "Enforce least privilege principles for critical OT assets.",
  },
  {
    id: 3,
    title: "Automated Password Rotation",
    description: "Eliminate shared or static credentials.",
  },
  {
    id: 4,
    title: "Session Monitoring",
    description: "Track and record all privileged activities for compliance.",
  },
];

const multiCardsItems = [
  {
    icon: "/assets/images/icons/path.svg",
    title: "Granular Access <br> Control",
    description:
      "Limit remote access to specific <br> zones, assets, and time windows.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Multi-Factor <br> Authentication (MFA)",
    description: "Enforce strong authentication for all <br> remote users.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Just-in-Time <br> Access",
    description:
      "Provide temporary access for <br> vendors and revoke <br> automatically after use.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Secure Jump <br> Hosts",
    description: "Isolate remote sessions from critical <br> OT networks.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Integration with OT Privileged <br> Access Management",
    description:
      "Manage and monitor privileged <br> accounts during remote sessions.",
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

export default function Page() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/services/ICS-SCADA/banner.jpg"
          title="Secure Remote Access"
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
        title="Enable Safe, Controlled Connectivity to Your OT Environment"
        description="Remote access is essential for OT environments—vendors, integrators, and maintenance
teams often need to connect to industrial systems for troubleshooting and updates. But
uncontrolled remote access is one of the biggest attack vectors for ransomware and
targeted OT breaches. <br>
LA Technologies’ Secure Remote Access solution ensures that remote connectivity to OT systems is safe, monitored, and compliant with security best practices—while also managing privileged accounts during these sessions."
      />

      <InfoList
        title="Reducing Remote Access Risk"
        items={[
          " Unrestricted VPNs and shared credentials create major security gaps.",
          "Attackers exploit remote access tools to deploy malware or manipulate control systems.",
          "Compliance frameworks mandate strict control and logging of remote sessions.",
        ]}
      />

      <SixCards
        heading="Our Secure Remote Access Features"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/services/secure-remote-access/service1.png",
            title: "Granular Access Control",
            description:
              "Limit remote access to specific zones, assets, and time windows.",
          },
          {
            icon: "/assets/images/services/secure-remote-access/service2.png",
            title: "Multi-Factor Authentication (MFA)",
            description: "Enforce strong authentication for all remote users.",
          },
          {
            icon: "/assets/images/services/secure-remote-access/service3.png",
            title: "Just-in-Time Access",
            description:
              "Provide temporary access for vendors and revoke automatically after use.",
          },
          {
            icon: "/assets/images/services/secure-remote-access/service4.png",
            title: "Session Recording & Audit Trails",
            description:
              "Capture full activity logs for compliance and forensic analysis.",
          },
          {
            icon: "/assets/images/services/secure-remote-access/service5.png",
            title: "Secure Jump Hosts",
            description: "Isolate remote sessions from critical OT networks.",
          },
          {
            icon: "/assets/images/services/secure-remote-access/service6.png",
            title: "Integration with OT Privileged Access Management",
            description:
              "Manage and monitor privilegedaccounts during remote sessions.",
          },
        ]}
      />

      <WhyChooseSection
        heading="Benefits of LA Technologies Secure Remote Access"
        centerImage="/assets/images/services/soc/whychoose.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/secure-remote-access/choose1.png",
            title: "Reduce Attack Surface",
            text: "Eliminate uncontrolled remote connections and shared credentials.",
          },
          {
            icon: "/assets/images/services/secure-remote-access/choose2.png",
            title: "Ensure Compliance",
            text: "Meet IEC 62443 and industry security requirements.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/secure-remote-access/choose3.png",
            title: "Improve Visibility",
            text: "Monitor and record all remote activities for accountability.",
          },
          {
            icon: "/assets/images/services/secure-remote-access/choose4.png",
            title: "Operational Safety",
            text: "Maintain uptime and prevent unauthorized changes during remote work.",
          },
        ]}
      />

      <IndustryGrid data={industriesData} />

      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#2D1F1F] mb-4">
            Integrated OT Privileged Access Management
          </h2>

          {/* Description */}
          <p className="text-center text-sm md:text-base text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
            Privileged accounts in OT environments hold the keys to critical
            industrial assets. If compromised, they can override safety controls
            and disrupt operations. Our integrated OT PAM capabilities include:
          </p>

          {/* Gradient Divider */}
          <div className="mb-16 h-[3px] w-full max-w-6xl mx-auto bg-gradient-to-r from-orange-500 to-red-600 rounded-full" />

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {otPamFeatures.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-orange-100
                         shadow-[0_8px_24px_rgba(255,140,0,0.15)]"
              >
                <h3 className="text-sm md:text-base font-semibold text-[#2D1F1F] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageHighlightSection
        heading="Your Remote Access, Secured"
        headingTag="h2"
        imageSrc="/assets/images/industries/security.jpg"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies, you enable secure, monitored remote access—without compromising safety or productivity."
      />

      <GradientCtaBanner
        text="Ready to secure remote access to your OT environment?"
        buttonText="Request an OT Risk Assessment"
      />
    </>
  );
}
