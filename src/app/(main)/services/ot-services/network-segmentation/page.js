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
import FiveCards from "@/components/services/FiveCards";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const multiCardsItems = [
  {
    icon: "/assets/images/icons/path.svg",
    title: "Zone & Conduit <br> Design",
    description:
      "Logical separation of OT assets <br> based on criticality and <br> function.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Firewall & Access <br> Control Policies",
    description: "Enforce strict communication rules <br> between zones.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Secure Remote Access <br> Integration",
    description:
      "Ensure vendor and maintenance access is <br> limited to specific zones.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Monitoring & <br> Validation",
    description:
      "Continuous verification of <br> segmentation policies and <br> traffic flows.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Compliance <br> Alignment",
    description:
      "Implement segmentation strategies <br> that meet industry <br> standards.",
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

export default function ApplicationSecurity() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/services/ICS-SCADA/banner.jpg"
          title="Network Segmentation"
          titleTag="h1"
          description={`Round-the-clock Endpoint Security Services designed to <br> defend modern enterprises.`}
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
        title="Divide and Protect Your OT Network"
        description="In OT environments, flat networks create a high-risk scenario—if one system is
compromised, attackers can move laterally and disrupt critical operations. Network
Segmentation is essential to isolate critical assets, enforce least-privilege access, and
reduce the impact of potential breaches.<br>
LA Technologies’ Network Segmentation solutions help you design and implement
secure zones and conduits without disrupting production.
"
      />

      <InfoList
        title="Containing Breaches with Network Segmentation"
        items={[
          "Flat networks allow attackers to move freely once inside.",
          "Compliance frameworks (IEC 62443, NIST) mandate segmentation.",
          "Segmentation reduces the blast radius of any cyber incident.",
        ]}
      />

      <FiveCards
        heading="Our Network Segmentation Solutions"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/services/asset-discovery/service1.png",
            title: "Zone & Conduit Design",
            description:
              "Logical separation of OT assets <br> based on criticality and <br> function.",
          },
          {
            icon: "/assets/images/services/asset-discovery/service2.png",
            title: "Firewall & Access Control Policies",
            description:
              "Enforce strict communication rules between zones.",
          },
          {
            icon: "/assets/images/services/asset-discovery/service3.png",
            title: "Secure Remote Access Integration",
            description:
              "Ensure vendor and maintenance access is limited to specific zones.",
          },
          {
            icon: "/assets/images/services/asset-discovery/service4.png",
            title: "Monitoring & Validation",
            description:
              "Continuous verification of segmentation policies and <br> traffic flows.",
          },
          {
            icon: "/assets/images/services/asset-discovery/service5.png",
            title: "Compliance Alignment",
            description:
              "Implement segmentation strategies that meet industry <br> standards.",
          },
        ]}
      />

      <WhyChooseSection
        heading="Benefits of LA Technologies Network Segmentation"
        centerImage="/assets/images/services/soc/whychoose.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/asset-discovery/choose1.png",
            title: "Reduce Attack Surface",
            text: "Limit lateral movement and contain threats.",
          },
          {
            icon: "/assets/images/services/asset-discovery/choose2.png",
            title: "Improve Resilience",
            text: "Isolate critical systems to maintain uptime during incidents.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/asset-discovery/choose3.png",
            title: "Ensure Compliance",
            text: "Meet regulatory and industry security requirements.",
          },
          {
            icon: "/assets/images/services/asset-discovery/choose4.png",
            title: "Expert Design & Implementation",
            text: "Certified professionals with OT and network security expertise.",
          },
        ]}
      />

      <IndustryGrid data={industriesData} />

      <ImageHighlightSection
        heading="Your Network, Our Shield"
        headingTag="h2"
        imageSrc="/assets/images/industries/security.jpg"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies, you gain a segmented, secure OT network—without compromising
operational efficiency."
      />
      <GradientCtaBanner text="Ready to implement secure OT segmentation?" buttonText="Request an OT Risk Assessment"/>
    </>
  );
}
