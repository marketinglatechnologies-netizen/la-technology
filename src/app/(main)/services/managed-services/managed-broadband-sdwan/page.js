import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import SixCards from "@/components/services/SixCards";
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
      title: "Unpredictable Network Performance",
      text:
        "Legacy WAN solutions struggle with bandwidth demands and cloud adoption.",
    },
    {
      title: "High Operational Costs",
      text:
        "MPLS and traditional WAN architectures are expensive and inflexible.",
    },
    {
      title: "Security Challenges",
      text:
        "Distributed branches and remote users increase exposure to cyber threats.",
    },
    {
      title: "Cloud-First Workloads",
      text:
        "Businesses need seamless connectivity to SaaS and cloud applications.",
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
  ];

export default function ManagedBroadbandSDWAN() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/services/managed-broadband-service/managed-broadband-service.jpg"
          title="Managed Broadband + SDWAN"
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
        title="Reliable Connectivity with Intelligent Network Management"
        description="Modern businesses rely on fast, secure, and resilient connectivity to keep operations running smoothly. Traditional broadband alone often falls short in delivering the performance and flexibility required for today’s distributed environments. That’s where Managed Broadband + SD-WAN comes in—combining high-speed internet with intelligent software-defined networking for optimized performance, security, and cost efficiency. "
      />
      <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">
          Why Managed Broadband + SD-WAN Matters
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

    <SixCards
  heading="Our Managed Broadband + SD-WAN Solutions"
  headingTag="h2"
  items={[
    {
      icon: "/assets/images/icons/speed.svg",
      title: "High-Speed Broadband Connectivity",
      description:
        "Reliable internet access tailored to your business needs.",
    },
    {
      icon: "/assets/images/icons/wan.svg",
      title: "SD-WAN Orchestration",
      description:
        "Intelligent routing for optimal application performance and reduced latency.",
    },
    {
      icon: "/assets/images/icons/vector.svg",
      title: "Centralized Management ",
      description:
        "Single-pane-of-glass visibility for all branch and remote connections.",
    },
    {
      icon: "/assets/images/icons/securtiy.svg",
      title: "Integrated Security",
      description:
        "Built-in firewall, encryption, and threat detection for secure data flow.",
    },
    {
      icon: "/assets/images/icons/path.svg",
      title: "Dynamic Path Selection",
      description:
        "RAutomatically route traffic over the best available link for performance. ",
    },
    {
      icon: "/assets/images/icons/path.svg",
      title: "Cloud Optimization",
      description:
        "Direct, secure access to cloud services without backhauling traffic.",
    },
  ]}
/>   
    
      <WhyChooseSection
        heading="Benefits of LA Technologies Managed Broadband + SD-WAN "
        centerImage="/assets/images/services/soc/whychoose.png"
        featuresLeft={[
          {
            icon: "/assets/images/home/icon1.png",
            title: "Enhanced Performance",
            text: "Improve application speed and user experience across all locations.",
          },
          {
            icon: "/assets/images/home/icon2.png",
            title: "Cost Efficiency",
            text: "Reduce dependency on expensive MPLS circuits.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/home/icon3.png",
            title: "Scalability",
            text: "Easily add new branches or remote sites without complex configurations.",
          },
          {
            icon: "/assets/images/home/icon4.png",
            title: "Security & Compliancee",
            text: "Protect data with advanced encryption and policy enforcement requirements.",
          },
          {
            icon: "/assets/images/home/icon4.png",
            title: "24/7 Monitoring & Support",
            text: "Proactive management to ensure uptime and reliability.",
          },
        ]}
      />

       <IndustriesGrid
      title="Industries We Serve"
      industries={industries}
    />
      <ImageHighlightSection
<<<<<<< HEAD
        heading="Your Network, Smarter and Safer 
"
=======
        heading="Your Network, Smarter and Safer"
>>>>>>> 4bf6e6b685ad63b291ba2b68cb8c13de70598ba0
        headingTag="h2"
        imageSrc="/assets/images/industries/security.jpg"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies, you get a fully managed broadband and SD-WAN solution that delivers speed, security, and simplicity."
      />
      <GradientCtaBanner text="Ready to transform your network?" />
    </>
  );
}
