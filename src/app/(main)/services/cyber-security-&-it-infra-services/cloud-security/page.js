import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import InfoCtaSection from "@/components/services/InfoCtaSection";
import SixCards from "@/components/services/SixCards";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ImageTabsSection from "@/components/services/ImageTabsSection";
import ImageHighlightSection from "@/components/services/ImageHighlightSection";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import IndustryGrid from "@/components/sections/IndustrySection";
import FourBoxSection from "@/components/services/FourBox";
import EightCards from "@/components/services/EightCards";
import Image from "next/image";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const industriesData = {
  sectionTitle: "Industries We Serve",
  items: [
    {
      id: "bfsi",
      title: "BFSI",
      image: "/assets/images/industries/bfsi.jpg",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      image: "/assets/images/industries/healthcare.jpg",
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      image: "/assets/images/industries/manufacturing.jpg",
    },
    {
      id: "retail",
      title: "Retail",
      image: "/assets/images/industries/retail.jpg",
    },
    {
      id: "education",
      title: "Education",
      image: "/assets/images/industries/education.jpg",
    },
    {
      id: "Government & public sector",
      title: "Government & public sector",
      image: "/assets/images/industries/criticalInfra.jpg",
    },
  ],
};

export default function FacilityManagement() {
  return (
    <>
      <InnerPageBanner
        bgImage="/assets/images/about-us/banner.jpg"
        title="Cloud Security"
        titleTag="h1"
        description={`Round-the-clock Endpoint SecurityServices designed to defend modern enterprises.`}
      />

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
        title="Secure Your Cloud Environment—Protect Data, Applications, and Access"
        description="Applications are the backbone of modern business—but they’re also a prime target for
cyberattacks. Vulnerabilities in web apps, APIs, and enterprise software can lead to data
breaches, financial loss, and compliance failures.
LA Technologies’ Application Security solutions help you identify, remediate, and
prevent application-level threats, ensuring your business remains secure and compliant."/>

      <FourBoxSection
        heading="Cloud Security Matters"
        headingTag="h2"
        items={[
          {
            title: "Misconfigurations Are the #1 Risk",
            description:
              "Incorrect settings in cloud services lead to data leaks and breaches.",
          },
          {
            title: "Shared Responsibility Confusion",
            description:
              "Cloud providers secure the infrastructure, but your data and apps need protection",
          },
          {
            title: "Compliance Requirements",
            description:
              "Regulations demand strict control over cloud-hosted data and workloads.",
          },
          {
            title: "Growing Attack Surface",
            description:
              "Multiple SaaS apps, hybrid setups, and remote access increase exposure.",
          },
        ]}
      />

      <EightCards
        heading="Our Cloud Security Solutions"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/services/soc/feature1.png",
            title: "Identity & Access Management (IAM)",
            description:
              "Enforce MFA, role-based access, and least privilege principles.",
          },
          {
            icon: "/assets/images/services/soc/feature1.png",
            title: "Cloud Configuration Hardening",
            description:
              "Secure AWS, Azure, and Google Cloud environments against misconfigurations.",
          },
          {
            icon: "/assets/images/services/soc/feature1.png",
            title: "Data Encryption",
            description:
              "Protect data at rest and in transit with strong encryption standards.",
          },
          {
            icon: "/assets/images/services/soc/feature1.png",
            title: "Cloud Workload Protection",
            description:
              "Secure virtual machines, containers, and serverless functions.",
          },
          {
            icon: "/assets/images/services/soc/feature1.png",
            title: "Threat Detection & Response",
            description:
              "Continuous monitoring for anomalies and real-time incident response.",
          },
          {
            icon: "/assets/images/services/soc/feature1.png",
            title: "Compliance & Governance",
            description:
              "Align with standards like ISO 27001, GDPR, and local regulations.",
          },
          {
            icon: "/assets/images/services/soc/feature1.png",
            title: "Secure API & Integration",
            description:
              "Protect APIs from unauthorized access and data exposure.",
          },
          {
            icon: "/assets/images/services/soc/feature1.png",
            title: "Backup & Disaster Recovery",
            description:
              "Ensure resilience with automated cloud backups and tested recovery plans.",
          },
        ]}
      />

      <WhyChooseSection
        heading="Benefits of LA Technologies Cloud Security"
        centerImage="/assets/images/services/soc/whychoose.png"
        featuresLeft={[
          {
            icon: "/assets/images/home/icon1.png",
            title: "Prevent Data Breaches",
            text: "Eliminate misconfigurations and enforce strong access controls.",
          },
          {
            icon: "/assets/images/home/icon2.png",
            title: "Ensure Compliance",
            text: "Meet regulatory and industry standards effortlessly.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/home/icon3.png",
            title: "Improve Visibility",
            text: "Gain centralized monitoring and reporting across all cloud services.",
          },
          {
            icon: "/assets/images/home/icon4.png",
            title: "Operational Continuity",
            text: "Minimize downtime with proactive threat detection and recovery strategies.",
          },
        ]}
      />
      <IndustryGrid data={industriesData} />
      <ImageHighlightSection
        heading="Your Cloud, Secured"
        headingTag="h2"
        imageSrc="/assets/images/industries/security.jpg"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies, you get end-to-end protection for your cloud environment—covering identity, data, and workloads."
      />
      <GradientCtaBanner text="Ready to secure your cloud infrastructure?" />
    </>
  );
}
