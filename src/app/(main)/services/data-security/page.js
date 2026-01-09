import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import EightCards from "@/components/services/EightCards";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ImageHighlightSection from "@/components/services/ImageHighlightSection";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import IndustriesGrid from "@/components/services/IndustriesGrid";
import Image from "next/image";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
}

const items = [
    {
      title: "Rising Cyber Threats",
      text:
        "Rising Cyber Threats Ransomware, phishing, and insider threats target sensitive data. ",
    },
    {
      title: "Regulatory Compliance ",
      text:
        " Laws like GDPR, HIPAA, and local data protection mandates require strict controls.",
    },
    {
      title: "Multi-Location Risks ",
      text:
        "Distributed offices and remote teams increase exposure to breaches. ",
    },
    {
      title: "Business Continuity ",
      text:
        "Data loss or corruption can halt operations and impact customer trust.",
    },
  ];

  const industries = [
    {
      title: "BFSI",
      image: "/assets/images/industries/bfsi.jpg",
    },
    {
      title: "Healthcare",
      image: "/assets/images/industries/healthcare.jpg",
    },
    {
      title: "Manufacturing",
      image: "/assets/images/industries/manufacturing.jpg",
    },
    {
      title: "Retail & Branch networking",
      image: "/assets/images/industries/retail.jpg",
    },
    {
      title: "Education",
      image: "/assets/images/industries/education.jpg",
    },
    {
      title: "Government & Public Sector",
      image: "/assets/images/industries/education.jpg",
    },
  ];

export default function DataSecurity() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/about-us/banner.jpg"
          title="Data Security"
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
        title="Protect Your Most Valuable Asset—Your Data "
        description="Data is the lifeblood of modern businesses. From customer information to financial records and intellectual property, any compromise can lead to severe financial, operational, and reputational damage. LA Technologies’ Data Security solutions safeguard your data across endpoints, networks, and storage systems—ensuring confidentiality, integrity, and availability."
      />
      <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">
          Why OT Endpoint Protection Matters
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-orange-300 rounded-xl p-6 text-left hover:shadow-md transition"
            >
              <h3 className="font-semibold mb-3 text-black">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section> 

    <EightCards
  heading="Our Data Security Capabilities"
  headingTag="h2"
  items={[
    {
      icon: "/assets/images/icons/path.svg",
      title: "Data Encryption",
      description:
        "Protect data at rest and in transit with strong encryption standards.",
    },
    {
      icon: "/assets/images/icons/path.svg",
      title: "Data Loss Prevention (DLP)",
      description:
        "Monitor and control sensitive data movement across endpoints and networks.",
    },
    {
      icon: "/assets/images/icons/path.svg",
      title: "Access Control & Identity Management",
      description:
        "Enforce least privilege and MFA for secure data access.",
    },
    {
      icon: "/assets/images/icons/path.svg",
      title: "Endpoint Protection",
      description:
        "Secure laptops, desktops, and mobile devices against malware and unauthorized access.",
    },
    {
      icon: "/assets/images/icons/path.svg",
      title: "Email & File Security",
      description:
        "Prevent phishing, malware, and unauthorized file sharing.",
    },
    {
      icon: "/assets/images/icons/path.svg",
      title: "Backup & Recovery",
      description:
        "Ensure reliable data backups and fast restoration in case of incidents.",
    },
    {
      icon: "/assets/images/icons/path.svg",
      title: "Data Classification & Governance",
      description:
        "Identify sensitive data and apply appropriate protection policies.",
    },
    {
      icon: "/assets/images/icons/path.svg",
      title: "Insider Threat Management",
      description:
        "Detect and prevent unauthorized data access or exfiltration.",
    },
  ]}
/>

    
      <WhyChooseSection
        heading="Benefits of LA Technologies Data Security"
        centerImage="/assets/images/services/soc/whychoose.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/soc/cost.png",
            title: "Prevent Data Breaches",
            text: "Reduce risk of unauthorized access and data theft.",
          },
          {
            icon: "/assets/images/services/soc/scalable.png",
            title: "Ensure Compliance",
            text: "Meet regulatory and industry standards effortlessly. ",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/soc/alert.png",
            title: "Improve Visibility",
            text: "Track data movement and enforce security policies across all locations.",
          },
          {
            icon: "/assets/images/services/soc/global.png",
            title: "Business Continuity",
            text: "Minimize downtime with robust backup and recovery strategies.",
          },
        ]}
      />

       <IndustriesGrid
      title="Industries We Serve"
      industries={industries}
    />
      <ImageHighlightSection
        heading="Your Data, Always Secure"
        headingTag="h2"
        imageSrc="/assets/images/industries/security.jpg"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies, you gain complete control and protection for your critical data—across every branch and endpoint."
      />
      <GradientCtaBanner text="READY TO STRENGTHEN YOUR SECURITY POSTURE?" />
    </>
  );
}
