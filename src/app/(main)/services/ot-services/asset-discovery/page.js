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
    title: "Automated Asset <br> Inventory",
    description:
      "Discover all OT devices, <br> including PLCs, HMIs, sensors, <br> and engineering workstations.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Passive Network <br> Scanning",
    description:
      "Non-intrusive methods to <br> avoid disrupting critical <br> operations.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Asset Classification & <br> Risk Scoring",
    description:
      "Categorize assets by <br> criticality and vulnerability <br> exposure.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Continuous <br> Monitoring",
    description:
      "Track changes in asset <br> configurations and detect <br> unauthorized devices.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Integration with OT <br> Security Tools",
    description:
      "Seamless integration with threat <br> detection and vulnerability <br> management platforms.",
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
          bgImage="/assets/images/services/asset-discovery/banner.png"
          title="Asset Discovery"
          titleTag="h1"
          description={`Round-the-clock Endpoint Security Services designed to defend modern enterprises.`}
        />
      </div>
      <FeatureHighlightSection
        images={[
          {
            src: "/assets/images/services/asset-discovery/gain1.png",
            alt: "Security dashboard",
          },
          {
            src: "/assets/images/services/asset-discovery/gain2.png",
            alt: "Developer working",
          },
          {
            src: "/assets/images/services/asset-discovery/gain3.png",
            alt: "Data monitoring",
          },
        ]}
        title="Gain Complete Visibility into Your OT Environment"
        description="In industrial networks, you can’t protect what you can’t see. Many OT environments have
legacy devices, undocumented assets, and shadow systems that create blind spots for
security teams. These unknowns increase the risk of cyberattacks and operational
disruptions. <br>
LA Technologies’ Asset Discovery solutions provide full visibility into your OT
infrastructure, helping you identify, classify, and monitor every connected device.
"
      />

      <InfoList
        title="Asset Discovery for Security and Compliance"
        items={[
          "Unidentified assets can become entry points for attackers.",
          "Manual inventory processes are time-consuming and error-prone.",
          "Compliance requires accurate asset records and risk assessments.",
        ]}
      />

      <FiveCards
        heading="Our Asset Discovery Solutions"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/services/asset-discovery/service1.png",
            title: "Automated Asset Inventory",
            description:
              "Discover all OT devices, including PLCs, HMIs, sensors, and engineering workstations.",
          },
          {
            icon: "/assets/images/services/asset-discovery/service2.png",
            title: "Passive Network Scanning",
            description:
              "Non-intrusive methods to avoid disrupting critical  operations.",
          },
          {
            icon: "/assets/images/services/asset-discovery/service3.png",
            title: "Asset Classification & Risk Scoring",
            description:
              "Categorize assets by criticality and vulnerability exposure.",
          },
          {
            icon: "/assets/images/services/asset-discovery/service4.png",
            title: "Continuous Monitoring",
            description:
              "Track changes in asset configurations and detect unauthorized devices.",
          },
          {
            icon: "/assets/images/services/asset-discovery/service5.png",
            title: "Integration with OT Security Tools",
            description:
              "Seamless integration with threat detection and vulnerability management platforms.",
          },
        ]}
      />

      <WhyChooseSection
        heading="Benefits of LA Technologies Asset Discovery"
        centerImage="/assets/images/services/asset-discovery/benefits.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/asset-discovery/choose1.png",
            title: "Reduce Blind Spots",
            text: "Gain complete visibility into your OT environment.",
          },
          {
            icon: "/assets/images/services/asset-discovery/choose2.png",
            title: "Improve Security Posture",
            text: "Identify and mitigate risks before attackers exploit them.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/asset-discovery/choose3.png",
            title: "Ensure Compliance",
            text: "Maintain accurate asset records for audits and regulatory requirements.",
          },
          {
            icon: "/assets/images/services/asset-discovery/choose4.png",
            title: "Operational Efficiency",
            text: "Automate inventory and reduce manual effort.",
          },
        ]}
      />

      {/* <IndustryGrid data={industriesData} /> */}

      <ImageHighlightSection
        heading="Your Visibility, Our Expertise"
        headingTag="h2"
        imageSrc="/assets/images/services/asset-discovery/cta.png"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies, you gain a clear picture of your OT environment—so you can secure"
      />
      <GradientCtaBanner text="Ready to discover and secure your OT assets?" buttonText="Request an OT Risk Assessment"/>
    </>
  );
}
