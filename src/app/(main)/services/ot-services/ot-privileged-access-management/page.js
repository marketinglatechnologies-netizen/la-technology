import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import InfoCtaSection from "@/components/services/InfoCtaSection";
import EightCards from "@/components/services/EightCards";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ImageTabsSection from "@/components/services/ImageTabsSection";
import ImageHighlightSection from "@/components/services/ImageHighlightSection";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import SixCards from "@/components/services/SixCards";
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
    icon: "/assets/images/services/ot-privileged-access-management/service1.png",
    title: "Centralized Credential <br> Vault",
    description:
      "Securely store and rotate privileged <br> credentials for OT systems.",
  },
  {
    icon: "/assets/images/services/ot-privileged-access-management/service2.png",
    title: "Granular Access <br> Control",
    description:
      "Assign role-based permissions and <br> enforce least privilege principles.",
  },
  {
    icon: "/assets/images/services/ot-privileged-access-management/service3.png",
    title: "Just-in-Time <br> Access",
    description:
      "Provide temporary, time-bound <br> access to critical OT assets.",
  },
  {
    icon: "/assets/images/services/ot-privileged-access-management/service4.png",
    title: "Session Monitoring & <br> Recording",
    description:
      "Track and record all privileged <br> activities for compliance and <br> forensic analysis.",
  },
  {
    icon: "/assets/images/services/ot-privileged-access-management/service5.png",
    title: "Automated Password <br> Rotation",
    description:
      "Eliminate shared or static credentials <br> across OT environments.",
  },
  {
    icon: "/assets/images/services/ot-privileged-access-management/service6.png",
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
      image: "/assets/images/services/ot-privileged-access-management/industries1.png",
    },
    {
      id: "energyUtilities",
      title: "Energy & Utilities",
      image: "/assets/images/services/ot-privileged-access-management/industries2.png",
    },
    {
      id: "oilNGas",
      title: "Oil & Gas",
      image: "/assets/images/services/ot-privileged-access-management/industries3.png",
    },
    {
      id: "transportation",
      title: "Transportation",
      image: "/assets/images/services/ot-privileged-access-management/industries4.png",
    },
    {
      id: "criticalInfrastructure",
      title: "Critical Infrastructure",
      image: "/assets/images/services/ot-privileged-access-management/industries5.png",
    },
  ],
};

export default function Page() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/services/ot-privileged-access-management/banner.png"
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
            src: "/assets/images/services/ot-privileged-access-management/control1.png",
            alt: "Security dashboard",
          },
          {
            src: "/assets/images/services/ot-privileged-access-management/control2.png",
            alt: "Developer working",
          },
          {
            src: "/assets/images/services/ot-privileged-access-management/control3.png",
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

      <SixCards
        heading="Our Facility Management Services Include"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/services/ot-privileged-access-management/service1.png",
            title: "Centralized Credential <br> Vault",
            description:
              "Securely store and rotate privileged <br> credentials for OT systems.",
          },
          {
            icon: "/assets/images/services/ot-privileged-access-management/service2.png",
            title: "Granular Access Control",
            description:
              "Assign role-based permissions and enforce least privilege principles.",
          },
          {
            icon: "/assets/images/services/ot-privileged-access-management/service3.png",
            title: "Just-in-Time Access",
            description:
              "Provide temporary, time-bound access to critical OT assets.",
          },
          {
            icon: "/assets/images/services/ot-privileged-access-management/service4.png",
            title: "Session Monitoring & Recording",
            description:
              "Track and record all privileged activities for compliance and forensic analysis.",
          },
          {
            icon: "/assets/images/services/ot-privileged-access-management/service5.png",
            title: "Automated Password Rotation",
            description:
              "Eliminate shared or static credentials across OT environments.",
          },
          {
            icon: "/assets/images/services/ot-privileged-access-management/service6.png",
            title: "Integration with Secure Remote Access",
            description:
              "Combine PAM with remote access controls for complete security.",
          },
        ]}
      />

      <WhyChooseSection
        heading="Benefits of LA Technologies OT PAM"
        centerImage="/assets/images/services/ot-privileged-access-management/benefits.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/ot-privileged-access-management/choose1.png",
            title: "Reduce Cyber Risk",
            text: "Prevent unauthorized access to critical OT systems.",
          },
          {
            icon: "/assets/images/services/ot-privileged-access-management/choose2.png",
            title: "Ensure Compliance",
            text: "Meet IEC 62443 and other industry standards effortlessly.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/ot-privileged-access-management/choose3.png",
            title: "Improve Visibility",
            text: "Gain full insight into privileged activities across OT networks.",
          },
          {
            icon: "/assets/images/services/ot-privileged-access-management/choose4.png",
            title: "Operational Safety",
            text: "Minimize downtime and maintain safety during maintenance operations.",
          },
        ]}
      />

      <IndustryGrid data={industriesData} />

      <ImageHighlightSection
        heading="Your Privileged Access, Secured"
        headingTag="h2"
        imageSrc="/assets/images/services/ot-privileged-access-management/cta.png"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies, you gain complete control over privileged accounts—without
compromising uptime or safety."
      />

      <GradientCtaBanner text="Ready to secure privileged access in your OT environment?" />
    </>
  );
}
