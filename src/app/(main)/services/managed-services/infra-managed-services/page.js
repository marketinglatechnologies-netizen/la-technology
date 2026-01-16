import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import InfoCtaSection from "@/components/services/InfoCtaSection";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ImageTabsSection from "@/components/services/ImageTabsSection";
import ImageHighlightSection from "@/components/services/ImageHighlightSection";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import FiveCards from "@/components/services/FiveCards";
import Image from "next/image";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const features = [
  {
    icon: "/assets/images/services/soc/feature1.png",
    title: "24/7 Threat Monitoring & Detection",
    description:
      "Continuous surveillance of networks, endpoints, and cloud environments using next-gen SIEM and analytics.",
  },
  {
    icon: "/assets/images/services/soc/feature3.png",
    title: "Rapid Incident Response",
    description:
      "Our certified analysts investigate and contain threats immediately, minimizing downtime and damage.",
  },
  {
    icon: "/assets/images/services/soc/feature3.png",
    title: "Proactive Vulnerability Management",
    description:
      "Regular scans and remediation recommendations to prevent potential breaches before they occur.",
  },
  {
    icon: "/assets/images/services/soc/feature4.png",
    title: "Compliance & Reporting",
    description:
      "Stay aligned with GDPR, HIPAA, PCI DSS, ISO 27001 through detailed logs, reports, and audit support.",
  },
];

export default function SOC() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/services/Infra-managed-services/Infra-managed-services.jpg"
          title="Infra Managed Services"
          titleTag="h1"
          description={`Round-the-clock Infra Managed Services designed to defend modern enterprises.`}
        />
      </div>
      <FeatureHighlightSection
        images={[
          {
            src: "/assets/images/services/soc/soc1.png",
            alt: "Security",
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
        title="Optimize, Secure, and Scale Your IT Environment.."
        description="Modern businesses rely on a robust IT infrastructure to stay competitive. From servers and
storage to networking and virtualization, managing these components efficiently is
critical—but it can be complex and resource-intensive.LA Technologies’ Infrastructure Managed Services provide end-to-end management of
your IT environment, ensuring high availability, security, and performance while reducing
operational costs. Our certified experts monitor, maintain, and optimize your
infrastructure so you can focus on innovation and growth."
      />
      <FiveCards
        heading="Our Infra Managed Services Include"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/services/infra-managed-services/service1.png",
            title: "Server & Compute Management",
            description:
              "Deployment, monitoring, patching, and performance optimization for physical and virtual servers.",
          },
          {
            icon: "/assets/images/services/infra-managed-services/service2.png",
            title: "Storage & Backup Solutions",
            description:
              "Secure data storage, backup automation, and disaster recovery planning.",
          },
          {
            icon: "/assets/images/services/infra-managed-services/service3.png",
            title: "Network Management",
            description:
              "Configuration, monitoring, and troubleshooting for routers, switches, firewalls, and  WAN/LAN environments.",
          },
          {
            icon: "/assets/images/services/infra-managed-services/service4.png",
            title: "Monitoring & Performance Management",
            description:
              "24×7 proactive monitoring to prevent downtime and ensure optimal performance.",
          },
          {
            icon: "/assets/images/services/infra-managed-services/service5.png",
            title: "Security & Compliance",
            description:
              "Regular updates, vulnerability management, and compliance with industry standards.",
          },
        ]}
      />
 
      <WhyChooseSection
        heading="What LA Technologies Provide as Solutions:"
        centerImage="/assets/images/services/soc/whychoose.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/infra-managed-services/choose1.png",
            title: "End-to-End Expertise",
            text: "From cabling to cloud, we manage every layer of your IT infrastructure.",
          },
          {
            icon: "/assets/images/services/infra-managed-services/choose2.png",
            title: "Cost Efficiency",
            text: "Reduce overhead and eliminate the need for large in-house teams.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/infra-managed-services/choose3.png",
            title: "Scalability",
            text: "Services tailored for startups, SMBs, and large enterprises.",
          },
          {
            icon: "/assets/images/services/infra-managed-services/choose4.png",
            title: "Certified Professionals",
            text: "Skilled engineers with expertise in networking, storage, virtualization, and security.",
          },
        ]}
      />
      <ImageTabsSection
        heading="Additional Services"
        headingTag="h2"
        tabs={[
          {
            label: "Structured Cabling & Physical Infrastructure",
            image: "/assets/images/services/soc/tab1.png",
          },
          {
            label: "Data Center Design & Implementation",
            image: "/images/soc-tab-2.jpg",
          },
          {
            label: "Power & Cooling Solutions",
            image: "/images/soc-tab-3.jpg",
          },
          {
            label: "Disaster Recovery & Business Continuity",
            image: "/images/soc-tab-4.jpg",
          },
        ]}
      />
      <ImageHighlightSection
        heading="Your Infrastructure , Our Responsibility"
        headingTag="h2"
        imageSrc="/assets/images/services/soc/security.png"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies as your infrastructure partner, you gain reliability, security, and scalability—without the complexity of managing it all yourself."
      />
      <GradientCtaBanner text="Ready to simplify your IT operations?" />
    </>
  );
}
