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

export default function NOC() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/about-us/banner.jpg"
          title="NOC As A Service"
          titleTag="h1"
          description={`Round-the-clock NOC services designed to defend modern enterprises.`}
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
        title="Scale Your IT Operations Without Increasing Overhead"
        description="In today’s digital-first world, cyber threats are more advanced, persistent, and damaging than ever before. From ransomware and phishing attacks to insider threats and data breaches, businesses face constant risks that can disrupt operations and compromise sensitive data. Traditional security measures are no longer enough—you need a dedicated team monitoring your environment around the clock.That’s where LA Technologies’ SOC-as-a-Service comes in. We provide a fully managed Security Operations Center (SOC) that acts as an extension of your IT team, delivering continuous threat detection, rapid incident response, and proactive defense—all without the cost and complexity of building your own SOC"
      />

      <InfoCtaSection
        title="What is SOC-as-a-Service?"
        description="SOC-as-a-Service is a subscription-based model that gives you access to enterprise-grade security operations without heavy upfront investment..."
      />

      <FiveCards
        heading="Our NOC Service Models"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/services/soc/feature1.png",
            title: "MaaS (Monitoring-as-a-Service)",
            description:
              "24×7 monitoring and escalation for critical systems and infrastructure",
          },
          {
            icon: "/assets/images/services/soc/feature3.png",
            title: "Manage",
            description:
              "Level 1, 2 & 3 resolution staff for comprehensive issue handling.",
          },
          {
            icon: "/assets/images/services/soc/feature3.png",
            title: "Agile Pod",
            description:
              "Dedicated NOC team with Level 2 & 3 technical personnel tailored to your needs.",
          },
          {
            icon: "/assets/images/services/soc/feature4.png",
            title: "RSA (Remote System Administration)",
            description:
              "Remote administration and migration support for project-based requirements.",
          },
          {
            icon: "/assets/images/services/soc/feature4.png",
            title: "Managed Business Continuity",
            description:
              "24×7 managed data protection and disaster recovery services.",
          },
        ]}
      />

      <WhyChooseSection
        heading="Why Choose LA Technologies SOC-as-a-Service?"
        centerImage="/assets/images/services/soc/whychoose.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/soc/cost.png",
            title: "Cost-Effective Security",
            text: "Avoid the high costs of building and maintaining an in-house SOC while accessing enterprise-grade capabilities.",
          },
          {
            icon: "/assets/images/services/soc/scalable.png",
            title: "Scalable & Flexible",
            text: "Whether you are a startup or a large enterprise, our service scales with your business needs.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/soc/alert.png",
            title: "Tailored Alerts & Reports",
            text: "Receive customized alerts and actionable insights aligned with your business priorities.",
          },
          {
            icon: "/assets/images/services/soc/global.png",
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
