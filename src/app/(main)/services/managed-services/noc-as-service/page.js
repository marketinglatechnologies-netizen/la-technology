import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import InfoCtaSection from "@/components/services/InfoCtaSection";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ImageTabsSection from "@/components/services/ImageTabsSection";
import ImageHighlightSection from "@/components/services/ImageHighlightSection";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import FiveCards from "@/components/services/FiveCards";
import Image from "next/image";
import BenefitsGrid from "@/components/services/BenefitsGrid";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const benefitsData = [
  {
    icon: "/assets/images/services/noc/key1.png",
    title: "24×7 Monitoring & Remediation",
    description:
      "Continuous oversight of servers, networks, applications, and databases.",
  },
  {
    icon: "/assets/images/services/noc/key2.png",
    title: "Cost-Effective Scaling",
    description:
      "Expand your service offerings without increasing headcount or infrastructure costs.",
  },
  {
    icon: "/assets/images/services/noc/key3.png",
    title: "Reduce Alert Fatigue",
    description:
      "We handle alerts and minimize false positives, freeing your engineers for strategic work.",
  },
  {
    icon: "/assets/images/services/noc/key4.png",
    title: "Preferred Pricing for Partners",
    description:
      "Competitive pricing models designed for MSPs and VARs to maximize margins.",
  },
  {
    icon: "/assets/images/services/noc/key5.png",
    title: "Your Tools, Your Way",
    description:
      "We integrate with your existing RMM tools to ensure consistency and leverage your investments.",
  },
];

export default function NOC() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/services/noc/noc-banner.jpg"
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
        description="Managing IT infrastructure is complex and resource-intensive. As businesses grow, so do
the demands for continuous monitoring, maintenance, and rapid issue resolution. Building
and staffing an in-house Network Operations Center (NOC) can be costly and time consuming. LA Technologies’ NOC-as-a-Service empowers Managed Service Providers (MSPs) and
Value-Added Resellers (VARs) to deliver world-class IT operations without heavy upfront
investment or additional staffing. We act as your extended team, providing 24/7
monitoring, remediation, and dedicated technical expertise—fully branded or white labeled under your name."
      />

      <InfoCtaSection
        title="What is NOC-as-a-Service?"
        description="NOC-as-a-Service is a managed solution that provides remote monitoring and remediation
for servers, networks, applications, databases, and workstations. Our certified engineers
handle alerts, troubleshoot issues, and ensure maximum uptime—so your team can focus
on strategic, high-margin projects.
"
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
            icon: "/assets/images/services/soc/feature-3.png",
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
            icon: "/assets/images/services/soc/feature-5.png",
            title: "Managed Business Continuity",
            description:
              "24×7 managed data protection and disaster recovery services.",
          },
        ]}
      />

      <BenefitsGrid heading="Key Benefits" items={benefitsData} columns={4} />

      <WhyChooseSection
        heading="LA Technologies as your Trusted Cybersecurity Partner:"
        centerImage="/assets/images/services/soc/whychoose.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/noc/partner1.png",
            title: "Increase Recurring Revenue",
            text: "Increase Recurring Revenue",
          },
          {
            icon: "/assets/images/services/noc/partner2.png",
            title: "Certified Expertise",
            text: "Our NOC teams include engineers skilled in OS, networking, backup, databases, security, and virtualization.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/noc/partner3.png",
            title: "Dedicated Resources",
            text: "Form your own Agile Pod with the right mix of Level 2 & 3 engineers for evolving needs.",
          },
          {
            icon: "/assets/images/services/noc/partner4.png",
            title: "Enhanced Customer Satisfaction",
            text: "Improve uptime, reliability, and retention with proactive IT operations.",
          },
        ]}
      />
      <ImageTabsSection
        heading="Businesses That Need NOC-as-a-Service:"
        headingTag="h2"
        tabs={[
          {
            label: "MSPs and VARs looking to expand service offerings",
            image: "/assets/images/services/soc/tab1.png",
          },
          {
            label: "Businesses seeking 24×7 IT infrastructure monitoring",
            image: "/images/soc-tab-2.jpg",
          },
          {
            label:
              "Organizations aiming to reduce operational costs and complexity",
            image: "/images/soc-tab-3.jpg",
          },
          // {
          //   label: "Enterprises lacking in-house security expertise",
          //   image: "/images/soc-tab-4.jpg",
          // },
        ]}
      />
      <ImageHighlightSection
        heading="Your Operations, Our Expertise"
        headingTag="h2"
        imageSrc="/assets/images/services/soc/security.png"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies as your NOC partner, you gain flexibility, scalability, and peace of
mind. We work behind the scenes to keep your IT environment running smoothly—so you
can focus on growth and customer success.
"
      />
      <GradientCtaBanner text="Ready to scale your IT services?" />
    </>
  );
}
