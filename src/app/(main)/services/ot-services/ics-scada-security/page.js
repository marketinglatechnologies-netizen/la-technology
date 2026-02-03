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
  title: "ICS & SCADA Security Services | LA Technologies Pvt Ltd",
  description:
    "Secure industrial control systems and SCADA environments with specialized OT cyber security solutions.",
};

// const multiCardsItems = [
//   {
//     icon: "/assets/images/icons/path.svg",
//     title: "System <br> Hardening",
//     description:
//       "Secure configurations for PLCs, <br> HMIs, and SCADA servers.",
//   },
//   {
//     icon: "/assets/images/icons/path.svg",
//     title: "Access Control & <br> Authentication",
//     description:
//       "Enforce least-privilege access <br> and multi-factor authentication for OT systems.",
//   },
//   {
//     icon: "/assets/images/icons/path.svg",
//     title: "Network <br> Segmentation",
//     description:
//       "Implement zones and conduits <br> to isolate critical assets.",
//   },
//   {
//     icon: "/assets/images/icons/path.svg",
//     title: "Monitoring & <br> Threat Detection",
//     description:
//       "Continuous visibility into ICS <br> traffic and anomaly detection.",
//   },
//   {
//     icon: "/assets/images/icons/path.svg",
//     title: "Incident Response <br> Planning",
//     description: "Develop OT-specific playbooks <br> for rapid containment.",
//   },
// ];

const industriesData = {
  sectionTitle: "Industries We Serve",
  items: [
    {
      id: "manufacturing",
      title: "Manufacturing",
      image: "/assets/images/services/ics-scada-security/manufacturing.jpg",
    },
    {
      id: "energyUtilities",
      title: "Energy & Utilities",
      image: "/assets/images/services/ics-scada-security/energy-utilities.jpg",
    },
    {
      id: "oilNGas",
      title: "Oil & Gas",
      image: "/assets/images/services/ics-scada-security/oil.jpg",
    },
    {
      id: "transportation",
      title: "Transportation",
      image: "/assets/images/services/ics-scada-security/transportation.jpg",
    },
    {
      id: "criticalInfrastructure",
      title: "Critical Infrastructure",
      image: "/assets/images/services/ics-scada-security/infrastructure.jpg",
    },
  ],
};

export default function ApplicationSecurity() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/services/ics-scada-security/banner.jpg"
          title="ICS & SCADA Security"
          titleTag="h1"
          description={`Protect critical systems without disrupting operations.`}
        />
      </div>
      <FeatureHighlightSection
        images={[
          {
            src: "/assets/images/services/ics-scada-security/protect1.jpg",
            alt: "Security dashboard",
          },
          {
            src: "/assets/images/services/ics-scada-security/protect2.jpg",
            alt: "Developer working",
          },
          {
            src: "/assets/images/services/ics-scada-security/protect3.jpg",
            alt: "Data monitoring",
          },
        ]}
        title="Protect Industrial Control Systems from Cyber Threats"
        description="Industrial Control Systems (ICS) and SCADA environments are critical for manufacturing,
energy, and other industrial operations. These systems were designed for reliability—not
cybersecurity—making them vulnerable to modern threats like ransomware, remote
exploits, and insider attacks.
LA Technologies’ ICS & SCADA Security solutions help you secure these environments
without disrupting production.
"
      />

      <InfoList
        title="Why ICS & SCADA Security Matters?"
        items={[
          "Legacy systems often lack patching and modern security controls.",
          "Remote access and vendor connections increase attack surfaces.",
          "A single breach can halt operations and cause financial and safety risks.",
        ]}
      />

      <FiveCards
        heading="Our ICS & SCADA Security Solutions"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/services/ics-scada-security/service1.png",
            title: "System Hardening",
            description:
              "Secure configurations for PLCs, HMIs, and SCADA servers.",
          },
          {
            icon: "/assets/images/services/ics-scada-security/service2.png",
            title: "Access Control & Authentication",
            description:
              "Enforce least-privilege access and multi-factor authentication for OT systems.",
          },
          {
            icon: "/assets/images/services/ics-scada-security/service3.png",
            title: "Network Segmentation",
            description:
              "Implement zones and conduits to isolate critical assets.",
          },
          {
            icon: "/assets/images/services/ics-scada-security/service4.png",
            title: "Monitoring & Threat Detection",
            description:
              "Continuous visibility into ICS traffic and anomaly detection.",
          },
          {
            icon: "/assets/images/services/ics-scada-security/service5.png",
            title: "Incident Response Planning",
            description:
              "Develop OT-specific playbooks for rapid containment.",
          },
        ]}
      />

      <WhyChooseSection
        heading="Benefits of LA Technologies ICS & SCADA Security"
        centerImage="/assets/images/services/ics-scada-security/whychoose.jpg"
        featuresLeft={[
          {
            icon: "/assets/images/services/ics-scada-security/choose1.png",
            title: "Minimize Downtime",
            text: "Prevent disruptions to critical operations.",
          },
          {
            icon: "/assets/images/services/ics-scada-security/choose2.png",
            title: "Reduce Risk",
            text: "Protect against ransomware and targeted attacks.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/ics-scada-security/choose3.png",
            title: "Ensure Compliance",
            text: "Align with IEC 62443, NIST, and industry standards.",
          },
          {
            icon: "/assets/images/services/ics-scada-security/choose4.png",
            title: "Expert Guidance",
            text: "Certified OT security professionals with industrial expertise.",
          },
        ]}
      />

      {/* <IndustryGrid data={industriesData} /> */}

      <ImageHighlightSection
        heading="Your Operations, Our Protection"
        headingTag="h2"
        imageSrc="/assets/images/services/ics-scada-security/security.jpg"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies, you gain peace of mind knowing your ICS and SCADA systems are
secure—without compromising productivity."
      />
      <GradientCtaBanner text="Ready to secure your industrial control systems?" buttonText="Request an OT Risk Assessment"/>
    </>
  );
}
