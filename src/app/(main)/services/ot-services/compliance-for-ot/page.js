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
    title: "Gap Assessment & <br> Compliance Mapping",
    description:
      "Identify gaps against IEC 62443, <br> NIST, and industry-specific <br> standards.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Policy Development <br> & Documentation",
    description:
      "Create OT-specific security policies, <br> procedures, and governance <br> frameworks.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Access Control & <br> Privilege Management",
    description:
      "Implement least-privilege <br> access and secure remote <br> connections.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Incident Response & <br> Reporting",
    description:
      "Develop OT-focused IR plans <br> and maintain audit-ready <br> logs.",
  },
  {
    icon: "/assets/images/icons/path.svg",
    title: "Continuous Compliance <br> Monitoring",
    description:
      "Track adherence and generate <br> reports for audits and <br> certifications.",
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
          title="Compliance for OT"
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
        title="Achieve Regulatory Compliance Without Disrupting Operations"
        description="Industrial environments face increasing pressure to comply with cybersecurity standards
and regulations. Frameworks like IEC 62443, NIST CSF, and industry-specific mandates
require robust security controls, documented processes, and continuous monitoring. <br>
LA Technologies’ Compliance for OT solutions help you meet these requirements while
maintaining uptime and safety."
      />

      <InfoList
        title="OT Compliance & Risk Management"
        items={[
          "Non-compliance can lead to fines, reputational damage, and operational shutdowns.",
          "OT systems often lack built-in security controls, making compliance challenging.",
          "Regulations demand documented risk assessments, access controls, and incident response plans.",
        ]}
      />

      <FiveCards
        heading="Our Compliance Solutions"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/services/compliance-for-ot/service1.png",
            title: "Gap Assessment & Compliance Mapping",
            description:
              "Identify gaps against IEC 62443, NIST, and industry-specific standards.",
          },
          {
            icon: "/assets/images/services/compliance-for-ot/service2.png",
            title: "Policy Development & Documentation",
            description:
              "Create OT-specific security policies, procedures, and governance frameworks.",
          },
          {
            icon: "/assets/images/services/compliance-for-ot/service3.png",
            title: "Access Control & Privilege Management",
            description:
              "Implement least-privilege access and secure remote connections.",
          },
          {
            icon: "/assets/images/services/compliance-for-ot/service4.png",
            title: "Incident Response & Reporting",
            description:
              "Develop OT-focused IR plans and maintain audit-ready logs.",
          },
          {
            icon: "/assets/images/services/compliance-for-ot/service5.png",

            title: "Continuous Compliance Monitoring",
            description:
              "Track adherence and generate reports for audits and certifications.",
          },
        ]}
      />

      <WhyChooseSection
        heading="Benefits of LA Technologies Compliance Services"
        centerImage="/assets/images/services/soc/whychoose.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/compliance-for-ot/choose1.png",
            title: "Reduce Regulatory Risk",
            text: "Avoid penalties and maintain operational licenses.",
          },
          {
            icon: "/assets/images/services/compliance-for-ot/choose2.png",
            title: "Audit-Ready Documentation",
            text: "Simplify compliance audits with structured reports.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/compliance-for-ot/choose3.png",
            title: "Improve Security Posture",
            text: "Align with global best practices for OT environments.",
          },
          {
            icon: "/assets/images/services/compliance-for-ot/choose4.png",
            title: "Expert Guidance",
            text: "Certified professionals with deep knowledge of OT standards.",
          },
        ]}
      />

      {/* <IndustryGrid data={industriesData} /> */}

      <ImageHighlightSection
        heading="Your Compliance, Our Expertise"
        headingTag="h2"
        imageSrc="/assets/images/industries/security.jpg"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies, you achieve OT compliance without compromising productivity or safety."
      />
      <GradientCtaBanner text="Ready to align your OT environment with global standards?" buttonText="Request an OT Compliance Assessment"/>
    </>
  );
}
