import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import EightCards from "@/components/services/EightCards";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ImageHighlightSection from "@/components/services/ImageHighlightSection";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import IndustryGrid from "@/components/sections/IndustrySection";
import Image from "next/image";
import FourBoxSection from "@/components/services/FourBox";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const items = [
  {
    title: "Rising Cyber Threats",
    text: "Rising Cyber Threats Ransomware, phishing, and insider threats target sensitive data. ",
  },
  {
    title: "Regulatory Compliance ",
    text: " Laws like GDPR, HIPAA, and local data protection mandates require strict controls.",
  },
  {
    title: "Multi-Location Risks ",
    text: "Distributed offices and remote teams increase exposure to breaches. ",
  },
  {
    title: "Business Continuity ",
    text: "Data loss or corruption can halt operations and impact customer trust.",
  },
];

const industriesData = {
  sectionTitle: "Industries We Serve",
  items: [
    {
      id: "bfsi",
      title: "BFSI",
      image: "/assets/images/services/data-security/bfsi.jpg",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      image: "/assets/images/services/data-security/healthcare.jpeg",
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      image: "/assets/images/services/data-security/manufacturing.jpg",
    },
    {
      id: "retail",
      title: "Retail",
      image: "/assets/images/services/data-security/retail1.png",
    },
    {
      id: "education",
      title: "Education",
      image: "/assets/images/services/data-security/education1.jpg",
    },
    {
      id: "Government and public sector",
      title: "Government & public sector",
      image: "/assets/images/services/data-security/government.jpg",
    },
  ],
};

export default function DataSecurity() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/services/data-security/banner.jpg"
          title="Data Security"
          titleTag="h1"
          description={`Round-the-clock Managed Security Services designed to defend modern enterprises.`}
        />
      </div>
      <FeatureHighlightSection
        images={[
          {
            src: "/assets/images/services/data-security/protect1.png",
            alt: "Security dashboard",
          },
          {
            src: "/assets/images/services/data-security/protect2.jpg",
            alt: "Developer working",
          },
          {
            src: "/assets/images/services/data-security/protect3.jpg",
            alt: "Data monitoring",
          },
        ]}
        title="Protect Your Most Valuable Asset—Your Data "
        description="Data is the lifeblood of modern businesses. From customer information to financial records and intellectual property, any compromise can lead to severe financial, operational, and reputational damage. LA Technologies’ Data Security solutions safeguard your data across endpoints, networks, and storage systems—ensuring confidentiality, integrity, and availability."
      />
    
      <FourBoxSection
        heading="Why Data Security Matters"
        headingTag="h2"
        items={[
          {
            title: "Rising Cyber Threats",
            description: "Rising Cyber Threats Ransomware, phishing, and insider threats target sensitive data. ",
          },
          {
            title: "Regulatory Compliance ",
            description: " Laws like GDPR, HIPAA, and local data protection mandates require strict controls.",
          },
          {
            title: "Multi-Location Risks ",
            description: "Distributed offices and remote teams increase exposure to breaches. ",
          },
          {
            title: "Business Continuity ",
            description: "Data loss or corruption can halt operations and impact customer trust.",
          },
        ]}
      />

      <EightCards
        heading="Our Data Security Solutions"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/services/data-security/service1.png",
            title: "Data Encryption",
            description:
              "Protect data at rest and in transit with strong encryption standards.",
          },
          {
            icon: "/assets/images/services/data-security/service2.png",
            title: "Data Loss Prevention (DLP)",
            description:
              "Monitor and control sensitive data movement across endpoints and networks.",
          },
          {
            icon: "/assets/images/services/data-security/service3.png",
            title: "Access Control & Identity Management",
            description:
              "Enforce least privilege and MFA for secure data access.",
          },
          {
            icon: "/assets/images/services/data-security/service4.png",
            title: "Endpoint Protection",
            description:
              "Secure laptops, desktops, and mobile devices against malware and unauthorized access.",
          },
          {
            icon: "/assets/images/services/data-security/service5.png",
            title: "Email & File Security",
            description:
              "Prevent phishing, malware, and unauthorized file sharing.",
          },
          {
            icon: "/assets/images/services/data-security/service6.png",
            title: "Backup & Recovery",
            description:
              "Ensure reliable data backups and fast restoration in case of incidents.",
          },
          {
            icon: "/assets/images/services/data-security/service7.png",
            title: "Data Classification & Governance",
            description:
              "Identify sensitive data and apply appropriate protection policies.",
          },
          {
            icon: "/assets/images/services/data-security/service8.png",
            title: "Insider Threat Management",
            description:
              "Detect and prevent unauthorized data access or exfiltration.",
          },
        ]}
      />

      <WhyChooseSection
        heading="Benefits of LA Technologies Data Security"
        centerImage="/assets/images/services/data-security/benefits.jpg"
        featuresLeft={[
          {
            icon: "/assets/images/services/data-security/choose1.png",
            title: "Prevent Data Breaches",
            text: "Reduce risk of unauthorized access and data theft.",
          },
          {
            icon: "/assets/images/services/data-security/choose2.png",
            title: "Ensure Compliance",
            text: "Meet regulatory and industry standards effortlessly. ",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/data-security/choose3.png",
            title: "Improve Visibility",
            text: "Track data movement and enforce security policies across all locations.",
          },
          {
            icon: "/assets/images/services/data-security/choose4.png",
            title: "Business Continuity",
            text: "Minimize downtime with robust backup and recovery strategies.",
          },
        ]}
      />

      {/* <IndustryGrid data={industriesData} /> */}
      <ImageHighlightSection
        heading="Your Data, Always Secure"
        headingTag="h2"
        imageSrc="/assets/images/services/data-security/security.jpg"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies, you gain complete control and protection for your critical data—across every branch and endpoint."
      />
      <GradientCtaBanner text="Ready to secure your data?" />
    </>
  );
}
