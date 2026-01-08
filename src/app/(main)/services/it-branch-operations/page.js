import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import FiveCards from "@/components/services/FiveCards";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ImageHighlightSection from "@/components/services/ImageHighlightSection";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import EightCards from "@/components/services/EightCards";
import Image from "next/image";


export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};


const items = [
    {
      title: "Fragmented Management ",
      text:
        "Different tools and vendors per branch lead to inconsistency and downtime. ",
    },
    {
      title: "Security Exposure",
      text:
        "Distributed endpoints and unmanaged Wi‑Fi increase risk across locations.",
    },
    {
      title: "Operational Overheads",
      text:
        "Local troubleshooting and on-site support consume time and budget",
    },
    {
      title: "Business Continuity Needs",
      text:
        "Branches require reliable connectivity and proactive monitoring. ",
    },
  ];

export default function ITBranchOperations() {
  return (
    <>
    <div>
      <InnerPageBanner
        bgImage="/assets/images/about-us/banner.jpg"
        title="IT Branch Operations"
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
            title="End-to-End IT Management Across Multiple Branch Locations—Reliable, Secure, and Scalable "
            description="Managing IT for multiple branch locations is challenging—different geographies, diverse teams, and varying infrastructure create complexity in consistency, security, and uptime. LA Technologies’ IT Branch Operations provides centralized control and standardized processes for all your branches, ensuring seamless operations across every location. "
          />
          <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">
Why Multi-Location IT Branch Operations Matter 
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
  heading="What We Manage Across Multiple Branches"
  headingTag="h2"
  items={[
    {
      icon: "/assets/images/icons/path.svg",
      title: "Network & Connectivity",
      description:
        "Broadband/MPLS/4G/5G links, SD-WAN, firewalls, VPNs, routing & switching.",
    },
    {
      icon: "/assets/images/icons/path.svg",
      title: "Wi-Fi & Access",
      description:
        "Secure SSIDs (Corp/Guest), NAC policies, captive portal, bandwidth management.",
    },
    {
      icon: "/assets/images/icons/path.svg",
      title: "Endpoint & Server Ops",
      description:
        "Windows/macOS endpoints, POS devices, local servers, patching.",
    },
    {
      icon: "/assets/images/icons/path.svg",
      title: "Identity & Access Management",
      description:
        "AD / Azure AD, MFA, role-based access, password policies.",
    },
    {
      icon: "/assets/images/icons/path.svg",
      title: "Security Operations",
      description:
        "EDR/XDR, email security, DLP policies, web filtering, vulnerability management.",
    },
    {
      icon: "/assets/images/icons/path.svg",
      title: "Local Apps & IoT",
      description:
        "Printers, CCTV/NVR, IoT device onboarding.",
    },
    {
      icon: "/assets/images/icons/path.svg",
      title: "ITSM & Helpdesk",
      description:
        "Centralized ticketing for all branches with SLA tracking.",
    },
    {
      icon: "/assets/images/icons/path.svg",
      title: "Asset & License Governance",
      description:
        "Policy rollouts and audit readiness for every branch.",
    },
  ]}
/>

  <WhyChooseSection
          heading="Consistency Across All Locations "
          centerImage="/assets/images/services/soc/whychoose.png"
          featuresLeft={[
            {
              icon: "/assets/images/home/icon1.png",
              title: "Consistency Across All Locations",
              text: "Standardized configurations and policies reduce variability.",
            },
            {
              icon: "/assets/images/home/icon2.png",
              title: "Lower Operational Costs",
              text: "Centralized management and automation reduce on-site dependencies.",
            },
            {
              icon: "/assets/images/home/icon2.png",
              title: "Single Point of Accountability",
              text: "One partner managing networks, endpoints, security, and support.",
            },
          ]}
          featuresRight={[
            {
              icon: "/assets/images/home/icon3.png",
              title: "Enhanced Security Posture",
              text: "Continuous monitoring and rapid incident response across branches.",
            },
            {
              icon: "/assets/images/home/icon4.png",
              title: "Business Continuity",
              text: "High availability design and tested recovery procedures.",
            },
          
             {
              icon: "/assets/images/home/icon4.png",
              title: "Scalability",
              text: "Rapid onboarding for new branches with templated deployments.",
            },
          ]}
        />
     
              <ImageHighlightSection
                heading="Your Infrastructure, Our Responsibility"
                headingTag="h2"
                imageSrc="/assets/images/industries/security.jpg"
                imageAlt="Cybersecurity monitoring dashboard"
                description="With LA Technologies as your infrastructure partner, you gain reliability, security, and
scalability—without the complexity of managing it all yourself.
"
              />
              <GradientCtaBanner text="READY TO STRENGTHEN YOUR SECURITY POSTURE?" />
  </>
  );
}
