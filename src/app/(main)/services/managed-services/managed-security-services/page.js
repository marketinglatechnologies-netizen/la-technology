import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import InfoCtaSection from "@/components/services/InfoCtaSection";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ImageTabsSection from "@/components/services/ImageTabsSection";
import ImageHighlightSection from "@/components/services/ImageHighlightSection";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import SixCards from "@/components/services/SixCards";
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
          bgImage="/assets/images/services/managed-security-service/managed-security-service.jpg"
          title="Managed Security Service"
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
        title="Comprehensive Protection for Your Digital Assets"
        description="Cyber threats are evolving faster than ever, and businesses need more than basic security
tools to stay protected. LA Technologies’ Managed Security Services deliver end-to-end
security management, combining advanced technologies, global threat intelligence, and
expert human oversight to safeguard your IT environment."
      />

      <InfoCtaSection
        title="What Are Managed Security Services?"
        description="Managed Security Services (MSS) provide continuous monitoring, threat detection, and
incident response for your IT infrastructure. Instead of managing complex security
operations in-house, you can rely on our certified experts to protect your business 24/7."
      />

      <SixCards
        heading="Our Managed Security Services Include"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/services/soc/feature1.png",
            title: "Threat Monitoring & Detection",
            description:
              "Real-time monitoring of networks, endpoints, and cloud environments using advanced SIEM tools.",
          },
          {
            icon: "/assets/images/services/soc/feature1.png",
            title: "Incident Response & Remediation",
            description:
              "Rapid containment and resolution of security incidents to minimize downtime and damage.",
          },
          {
            icon: "/assets/images/services/soc/feature3.png",
            title: "Firewall & Network Security Management",
            description:
              "Configuration, monitoring, and optimization of firewalls, IDS/IPS, and VPNs.",
          },
          {
            icon: "/assets/images/services/soc/feature4.png",
            title: "Endpoint Protection",
            description:
              "Advanced antivirus, EDR, and patch management for endpoints.",
          },
          {
            icon: "/assets/images/services/soc/feature4.png",
            title: "Vulnerability Management",
            description:
              "Regular scans and remediation to eliminate weaknesses before attackers exploit them.",
          },
          {
            icon: "/assets/images/services/soc/feature3.png",
            title: "Compliance & Reporting",
            description:
              "Support for GDPR, HIPAA, PCI DSS, ISO 27001 through detailed logs and audit-ready reports.",
          },
        ]}
      />
      <WhyChooseSection
        heading="Partner Up with LA Technologies for Managed Security Services:"
        centerImage="/assets/images/services/soc/whychoose.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/soc/cost.png",
            title: "24×7 Security Operations",
            text: "Continuous monitoring and response by certified security professionals.",
          },
          {
            icon: "/assets/images/services/soc/scalable.png",
            title: "Cost-Effective & Scalable",
            text: "Enterprise-grade security without the cost of building an in-house SOC.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/soc/alert.png",
            title: "Proactive Defense",
            text: "Threat hunting and vulnerability management to prevent breaches before they occur.",
          },
          {
            icon: "/assets/images/services/soc/global.png",
            title: "Tailored Solutions",
            text: "Customized security strategies aligned with your business needs and compliance requirements.",
          },
        ]}
      />
      <ImageTabsSection
        heading="Who Needs Managed Security Services?"
        headingTag="h2"
        tabs={[
          {
            label: "Businesses handling sensitive customer data",
            image: "/assets/images/services/soc/tab1.png",
          },
          {
            label: "Organizations in regulated industries",
            image: "/images/soc-tab-2.jpg",
          },
          {
            label: "Companies migrating workloads to the cloud",
            image: "/images/soc-tab-3.jpg",
          },
          {
            label: "Enterprises lacking in-house security expertise",
            image: "/images/soc-tab-4.jpg",
          },
        ]}
      />
      <ImageHighlightSection
        heading="Your Security, Our Responsibility"
        headingTag="h2"
        imageSrc="/assets/images/services/soc/security.png"
        imageAlt="Cybersecurity monitoring dashboard"
        description="Cybersecurity is not optional—it’s essential. With LA Technologies as your trusted SOC partner, you gain visibility, control, and peace of mind. We work behind the scenes to keep your business secure so you can focus on growth and innovation."
      />
      <GradientCtaBanner text="READY TO STRENGTHEN YOUR SECURITY POSTURE?" />
    </>
  );
}
