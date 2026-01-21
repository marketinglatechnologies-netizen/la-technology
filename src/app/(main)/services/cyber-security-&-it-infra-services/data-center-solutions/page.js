import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import InfoCtaSection from "@/components/services/InfoCtaSection";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ImageTabsSection from "@/components/services/ImageTabsSection";
import ImageHighlightSection from "@/components/services/ImageHighlightSection";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import FiveCards from "@/components/services/FiveCards";
import OurExpertise from "@/components/sections/OurExpertise";
import Image from "next/image";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

const expertiseData = [
  {
    title: "Certified Data Center Design Professionals (CDCDP)",
    image: "/assets/images/services/data-center-solutions/expertise1.png",
  },
  {
    title: "RCDD-certified cabling experts with experience",
    image: "/assets/images/services/data-center-solutions/expertise2.png",
  },
  {
    title: "Experienced project managers and infrastructure engineers",
    image: "/assets/images/services/data-center-solutions/expertise3.png",
  },
];

export default function FacilityManagement() {
  return (
    <>
      <InnerPageBanner
        bgImage="/assets/images/services/data-center-solutions/banner.png"
        title="Data Center Solutions"
        titleTag="h1"
        description={`Round-the-clock Endpoint Security Services designed to defend modern enterprises.`}
      />

      <FeatureHighlightSection
        images={[
          {
            src: "/assets/images/services/data-center-solutions/build1.png",
            alt: "Security dashboard",
          },
          {
            src: "/assets/images/services/data-center-solutions/build2.png",
            alt: "Developer working",
          },
          {
            src: "/assets/images/services/data-center-solutions/build3.png",
            alt: "Data monitoring",
          },
        ]}
        title="Build, Optimize, and Secure Your Data Center"
        description="Your data center is the heart of your IT infrastructure. Whether you need a new facility,
want to optimize an existing one, or require modular solutions for scalability, LA
Technologies delivers end-to-end data center services—from design and
implementation to ongoing optimization."
      />

      <InfoCtaSection
        title="Why Choose LA Technologies for Data Center Solutions?"
        description="With over 50 years of combined experience, our certified professionals design and
implement data centers that meet the highest standards of reliability, efficiency, and
security. We ensure your infrastructure supports business continuity and future growth."
      />

      <FiveCards
        heading="Our Data Center Services"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/services/data-center-solutions/service1.png",
            title: "Data Center Design & Implementation",
            description:
              "Complete turnkey solutions—from planning and civil works to electrical, mechanical, and IT fit-out.",
          },
          {
            icon: "/assets/images/services/data-center-solutions/service2.png",
            title: "Legacy Data Center Optimization",
            description:
              "Improve efficiency, reduce power usage (PUE), and extend the life of existing facilities.",
          },
          {
            icon: "/assets/images/services/data-center-solutions/service3.png",
            title: "Modular & Containerized Data Centers",
            description:
              "Scalable, cost-effective solutions that adapt to changing business needs.",
          },
          {
            icon: "/assets/images/services/data-center-solutions/service4.png",
            title: "Power & Cooling Solutions",
            description:
              "Precision cooling systems and energy-efficient power distribution for maximum uptime.",
          },
          {
            icon: "/assets/images/services/data-center-solutions/service5.png",
            title: "Structured Cabling & Rack Solutions",
            description:
              "Industry-compliant cabling, rack layout, and space planning for optimal performance.",
          },
        ]}
      />

      <WhyChooseSection
        heading="Benefits of Our Data Center Solutions"
        centerImage="/assets/images/services/data-center-solutions/benefits.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/data-center-solutions/choose1.png",
            title: "High Availability & Resilience",
            text: "Ensure business continuity with robust design and redundancy.",
          },
          {
            icon: "/assets/images/services/data-center-solutions/choose2.png",
            title: "Cost Efficiency",
            text: "Reduce operational costs through optimized power and cooling.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/data-center-solutions/choose3.png",
            title: "Scalability",
            text: "Modular designs that grow with your business.",
          },
          {
            icon: "/assets/images/services/data-center-solutions/choose4.png",
            title: "Compliance Ready",
            text: "Adherence to global standards and best practices.",
          },
        ]}
      />


      <OurExpertise />

      <ImageHighlightSection
        heading="Your Data Center, Our Expertise"
        headingTag="h2"
        imageSrc="/assets/images/services/data-center-solutions/cta.png"
        imageAlt="Cybersecurity monitoring dashboard"
        description="From small server rooms to large-scale enterprise facilities, LA Technologies ensures your data center is built for performance, reliability, and future growth."
      />
      <GradientCtaBanner text="Ready to design or optimize your data center?" />
    </>
  );
}
