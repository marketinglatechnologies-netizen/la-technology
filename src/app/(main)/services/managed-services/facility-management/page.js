import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import InfoCtaSection from "@/components/services/InfoCtaSection";
import SixCards from "@/components/services/SixCards";
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

export default function FacilityManagement() {
  return (
    <>
    <div>
      <InnerPageBanner
        bgImage="/assets/images/services/facility-management/facility-management-service-banner.jpg"
        title="Facility Management Services"
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
            title="End-to-End IT Support for Your Business"
            description="Managing IT infrastructure across multiple locations can be challenging and resource intensive . LA Technologies’ Facility Management Services (FMS) provide comprehensive
on-site and remote support to ensure your IT environment runs smoothly, securely, and
efficiently."
          />
          <InfoCtaSection
                  title="What Are Facility Management Services?"
                  description="Facility Management Services involve deploying skilled IT professionals to manage and
maintain your organization’s IT infrastructure. From hardware and software support to
network monitoring and user assistance, we act as your extended IT team—delivering
reliable, cost-effective solutions"
                />
                <SixCards
  heading="Our Facility Management Services Include"
  headingTag="h2"
  items={[
    {
      icon: "/assets/images/services/facility-management/support-it.svg",
      title: "On-Site IT Support",
      description:
        "Dedicated engineers for day-to-day IT operations and troubleshooting.",
    },
    {
      icon: "/assets/images/services/facility-management/remote-supoort.svg",
      title: "Helpdesk & Remote Support",
      description:
        "24×7 assistance for end-users to resolve technical issues quickly.",
    },
    {
      icon: "/assets/images/services/facility-management/inventory.svg",
      title: "Asset & Inventory Management",
      description:
        "Tracking and managing IT assets for optimal utilization and compliance.",
    },
    {
      icon: "/assets/images/services/facility-management/preventive.svg",
      title: "Preventive Maintenance",
      description:
        "Regular health checks and proactive measures to avoid downtime.",
    },
    {
      icon: "/assets/images/services/facility-management/server.svg",
      title: "Network & Server Management",
      description:
        "Monitoring, patching, and performance optimization for critical systems.",
    },
    {
      icon: "/assets/images/services/facility-management/vendor.svg",
      title: "Vendor Coordination",
      description:
        "Managing third-party vendors for hardware, software, and service requirements.",
    },
  ]}
/>

  <WhyChooseSection
          heading="Partner Up With LA Technologies:"
          centerImage="/assets/images/services/soc/whychoose.png"
          featuresLeft={[
            {
              icon: "/assets/images/services/facility-management/Certified.png",
              title: "Certified IT Professionals",
              text: "Skilled engineers with expertise in networking, servers, storage, and end-user support.",
            },
            {
              icon: "/assets/images/services/facility-management/Cost.png",
              title: "Cost Efficiency",
              text: "Reduce operational overhead with flexible engagement models.",
            },
          ]}
          featuresRight={[
            {
              icon: "/assets/images/services/facility-management/Scalability.png",
              title: "Scalability",
              text: "Services tailored for single-site or multi-location enterprises.",
            },
            {
              icon: "/assets/images/services/facility-management/Approach.png",
              title: "Proactive Approach",
              text: "Prevent issues before they impact business operations.",
            },
          ]}
        />
        <ImageTabsSection
                heading="Who Needs Facility Management Services?"
                headingTag="h2"
                tabs={[
                  {
                    label: "Enterprises with large IT infrastructure",
                    image: "/assets/images/industries/tabimage.jpg",
                  },
                  {
                    label: "Organizations facing skill shortages",
                    image: "/assets/images/industries/tabimage.jpg",
                  },
                  {
                    label: "Companies scaling operations rapidly",
                    image: "/assets/images/industries/tabimage.jpg",
                  },
                  {
                    label: "Enterprises seeking niche technology expertise",
                    image: "/assets/images/industries/tabimage.jpg",
                  },
                ]}
              />
              <ImageHighlightSection
                heading="Your IT, Our Responsibility"
                headingTag="h2"
                imageSrc="/assets/images/industries/security.jpg"
                imageAlt="Cybersecurity monitoring dashboard"
<<<<<<< Updated upstream
                description="With LA Technologies, you gain access to top-tier IT professionals without the complexity
of permanent hiring. We help you stay agile, competitive, and ready for any challenge."
              />
              <GradientCtaBanner text="Ready to augment your IT team?" />
=======
                description="With LA Technologies as your facility management partner, you gain reliable IT operations, improved efficiency, and reduced downtime, so you can focus on your core business."
              />
              <GradientCtaBanner text="Ready to streamline your IT operations?" />
>>>>>>> Stashed changes
  </>
  );
}
