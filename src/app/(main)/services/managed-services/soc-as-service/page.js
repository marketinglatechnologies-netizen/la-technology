import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import InfoCtaSection from "@/components/services/InfoCtaSection";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ImageTabsSection from "@/components/services/ImageTabsSection";
import ImageHighlightSection from "@/components/services/ImageHighlightSection";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import Image from "next/image";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const features = [
  {
    icon: "/assets/images/services/soc/24.png",
    title: "24/7 Threat Monitoring & Detection",
    description:
      "Continuous surveillance of networks, endpoints, and cloud environments using next-gen SIEM and analytics.",
  },
  {
    icon: "/assets/images/services/soc/Incident-Response.png",
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
          bgImage="/assets/images/services/soc/soc-service-banner.jpg"
          title="SOC As A Service"
          titleTag="h1"
          description={`Round-the-clock SOC services designed to defend modern enterprises.`}
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
        title="Stay Ahead of Cyber Threats with 24/7 Security Monitoring"
        description="In today’s digital-first world, cyber threats are more advanced, persistent, and damaging than ever before. From ransomware and phishing attacks to insider threats and data breaches, businesses face constant risks that can disrupt operations and compromise sensitive data. Traditional security measures are no longer enough—you need a dedicated team monitoring your environment around the clock."
      />

      <InfoCtaSection
        title="What is SOC-as-a-Service?"
        description="SOC-as-a-Service is a subscription-based model that gives you access to enterprise-grade security operations without heavy upfront investment. Our experts leverage advanced SIEM tools, threat intelligence, and automation to monitor, detect, and respond to security incidents in real time—keeping your business safe and compliant."
      />

      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl text-center text-gray-900 mb-16">
            Key Features of Our SOC-as-a-Service
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col max-w-xs mx-auto"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="mb-4"
                />

                <h4 className="text-base text-gray-900 mb-3 text-left">{item.title}</h4>

                <p className="text-sm text-gray-600 leading-relaxed text-left">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseSection
        heading="Why Choose LA Technologies SOC-as-a-Service?"
        centerImage="/assets/images/services/soc/whychoose.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/soc/Cost-Effective.svg",
            title: "Cost-Effective Security",
            text: "Avoid the high costs of building and maintaining an in-house SOC while accessing enterprise-grade capabilities.",
          },
          {
            icon: "/assets/images/services/soc/Flexible.svg",
            title: "Scalable & Flexible",
            text: "Whether you are a startup or a large enterprise, our service scales with your business needs.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/soc/report.svg",
            title: "Tailored Alerts & Reports",
            text: "Receive customized alerts and actionable insights aligned with your business priorities.",
          },
          {
            icon: "/assets/images/services/soc/global.svg",
            title: "Global Threat Intelligence",
            text: "We combine human expertise with AI-driven tools to detect both known and zero-day threats.",
          },
        ]}
      />
      <ImageTabsSection
        heading="Who Needs SOC-as-a-Service?"
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
        heading="Your Security, Our Priority"
        headingTag="h2"
        imageSrc="/assets/images/services/soc/security.png"
        imageAlt="Cybersecurity monitoring dashboard"
        description="Cybersecurity is not optional—it’s essential. With LA Technologies as your trusted SOC partner, you gain visibility, control, and peace of mind. We work behind the scenes to keep your business secure so you can focus on growth and innovation."
      />
      <GradientCtaBanner text="READY TO STRENGTHEN YOUR SECURITY POSTURE?" />
    </>
  );
}
