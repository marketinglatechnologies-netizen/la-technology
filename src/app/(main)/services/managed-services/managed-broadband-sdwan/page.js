import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import SixCards from "@/components/services/SixCards";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ImageHighlightSection from "@/components/services/ImageHighlightSection";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import IndustryGrid from "@/components/sections/IndustrySection";
import Image from "next/image";
import FourBoxSection from "@/components/services/FourBox";

export const metadata = {
  title: "Managed Broadband & SD-WAN | LA Technologies Pvt Ltd",
  description:
    "Optimise enterprise connectivity with managed broadband and SD-WAN solutions for secure and scalable networks",
};

const industries = {
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
  ],
};

export default function ManagedBroadbandSDWAN() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/services/managed-broadband-sdwan/banner.jpg"
          title="Managed Broadband + SDWAN"
          titleTag="h1"
          description={`Reliable connectivity, optimized for performance and security.`}
        />
      </div>
      <FeatureHighlightSection
        images={[
          {
            src: "/assets/images/services/managed-broadband-sdwan/reliable1.jpg",
            alt: "Security dashboard",
          },
          {
            src: "/assets/images/services/managed-broadband-sdwan/reliable2.jpg",
            alt: "Developer working",
          },
          {
            src: "/assets/images/services/managed-broadband-sdwan/reliable3.jpg",
            alt: "Data monitoring",
          },
        ]}
        title="Reliable Connectivity with Intelligent Network Management"
        description="Modern businesses rely on fast, secure, and resilient connectivity to keep operations running smoothly. Traditional broadband alone often falls short in delivering the performance and flexibility required for today’s distributed environments. That’s where Managed Broadband + SD-WAN comes in—combining high-speed internet with intelligent software-defined networking for optimized performance, security, and cost efficiency. "
      />

      <FourBoxSection
        heading="The Importance of Managed Broadband + SD-WAN"
        headingTag="h2"
        items={[
          {
            title: "Unpredictable Network Performance",
            description: "Legacy WAN solutions struggle with bandwidth demands and cloud adoption.",
          },
          {
            title: "High Operational Costs",
            description: "MPLS and traditional WAN architectures are expensive and inflexible.",
          },
          {
            title: "Security Challenges",
            description: "Distributed branches and remote users increase exposure to cyber threats.",
          },
          {
            title: "Cloud-First Workloads",
            description: "Businesses need seamless connectivity to SaaS and cloud applications.",
          },
        ]}
      />

      <SixCards
        heading="Our Managed Broadband + SD-WAN Solutions"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/services/managed-broadband-sdwan/service1.png",
            title: "High-Speed Broadband Connectivity",
            description:
              "Reliable internet access tailored to your business needs.",
          },
          {
            icon: "/assets/images/services/managed-broadband-sdwan/service2.png",
            title: "SD-WAN Orchestration",
            description:
              "Intelligent routing for optimal application performance and reduced latency.",
          },
          {
            icon: "/assets/images/services/managed-broadband-sdwan/service3.png",
            title: "Centralized Management ",
            description:
              "Single-pane-of-glass visibility for all branch and remote connections.",
          },
          {
            icon: "/assets/images/services/managed-broadband-sdwan/service4.png",
            title: "Integrated Security",
            description:
              "Built-in firewall, encryption, and threat detection for secure data flow.",
          },
          {
            icon: "/assets/images/services/managed-broadband-sdwan/service5.png",
            title: "Dynamic Path Selection",
            description:
              "RAutomatically route traffic over the best available link for performance. ",
          },
          {
            icon: "/assets/images/services/managed-broadband-sdwan/service6.png",
            title: "Cloud Optimization",
            description:
              "Direct, secure access to cloud services without backhauling traffic.",
          },
        ]}
      />

      <WhyChooseSection
        heading="Benefits of LA Technologies Managed Broadband + SD-WAN "
        centerImage="/assets/images/services/managed-broadband-sdwan/whychoose.jpg"
        featuresLeft={[
          {
            icon: "/assets/images/services/managed-broadband-sdwan/choose1.png",
            title: "Enhanced Performance",
            text: "Improve application speed and user experience across all locations.",
          },
          {
            icon: "/assets/images/services/managed-broadband-sdwan/choose2.png",
            title: "Cost Efficiency",
            text: "Reduce dependency on expensive MPLS circuits.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/managed-broadband-sdwan/choose3.png",
            title: "Scalability",
            text: "Easily add new branches or remote sites without complex configurations.",
          },
          {
            icon: "/assets/images/services/managed-broadband-sdwan/choose4.png",
            title: "Security & Compliancee",
            text: "Protect data with advanced encryption and policy enforcement requirements.",
          },
          {
            icon: "/assets/images/services/managed-broadband-sdwan/choose5.png",
            title: "24/7 Monitoring & Support",
            text: "Proactive management to ensure uptime and reliability.",
          },
        ]}
      />
      {/* <IndustryGrid data={industries} /> */}

      <ImageHighlightSection
        heading="Your Network, Smarter and Safer 
"
        headingTag="h2"
        imageSrc="/assets/images/services/managed-broadband-sdwan/network.jpg"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies, you get a fully managed broadband and SD-WAN solution that delivers speed, security, and simplicity."
      />
      <GradientCtaBanner text="Ready to transform your network?" />
    </>
  );
}
