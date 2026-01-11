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

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const multiCardsItems = [
  {
    icon: "/assets/images/icons/path.svg",
    title: "Centralized Credential <br> Vault",
    description:
      "Securely store and rotate privileged <br> credentials for OT systems.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Granular Access <br> Control",
    description:
      "Assign role-based permissions and <br> enforce least privilege principles.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Just-in-Time <br> Access",
    description:
      "Provide temporary, time-bound <br> access to critical OT assets.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Session Monitoring & <br> Recording",
    description:
      "Track and record all privileged <br> activities for compliance and <br> forensic analysis.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Automated Password <br> Rotation",
    description:
      "Eliminate shared or static credentials <br> across OT environments.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Integration with Secure <br> Remote Access",
    description:
      "Combine PAM with remote access <br> controls for complete security.",
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
          title="OT Privileged Access Management"
          titleTag="h1"
          description={`Round-the-clock Endpoint Security
 Services
 designed to defend modern enterprises.`}
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
        title="Control and Monitor Privileged Accounts Across OT Systems"
        description="Privileged accounts in OT environments hold the keys to critical industrial assets. If
compromised, they can override safety controls, disrupt operations, and cause severe
financial and reputational damage. Traditional IT PAM solutions often fail to address the
unique challenges of OT networks, which include legacy systems, proprietary protocols,
and strict uptime requirements. <br/>
LA Technologies’ OT Privileged Access Management (PAM) solution secures, monitors,
and governs privileged accounts across your OT infrastructure—ensuring compliance,
reducing risk, and maintaining operational continuity."
      />

      <SolutionGrid
        title="Our OT PAM Solutions"
        items={multiCardsItems}
        align="center"
      />

      <WhyChooseSection
        heading="Benefits of LA Technologies OT PAM"
        centerImage="/assets/images/services/soc/whychoose.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/soc/cost.png",
            title: "Reduce Cyber Risk",
            text: "Prevent unauthorized access to critical OT systems.",
          },
          {
            icon: "/assets/images/services/soc/scalable.png",
            title: "Ensure Compliance",
            text: "Meet IEC 62443 and other industry standards effortlessly.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/soc/alert.png",
            title: "Improve Visibility",
            text: "Gain full insight into privileged activities across OT networks.",
          },
          {
            icon: "/assets/images/services/soc/global.png",
            title: "Operational Safety",
            text: "Minimize downtime and maintain safety during maintenance operations.",
          },
        ]}
      />

      <IndustryGrid data={industriesData} />

      <ImageHighlightSection
        heading="Your Privileged Access, Secured"
        headingTag="h2"
        imageSrc="/assets/images/industries/security.jpg"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies, you gain complete control over privileged accounts—without
compromising uptime or safety."
      />

      <GradientCtaBanner text="Ready to secure privileged access in your OT environment?" />
    </>
  );
}
