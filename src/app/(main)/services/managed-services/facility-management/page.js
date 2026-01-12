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
          heading="Why Choose LA Technologies?"
          centerImage="/assets/images/services/soc/whychoose.png"
          featuresLeft={[
            {
<<<<<<< HEAD:src/app/(main)/services/facility-management/page.js
              icon: "/assets/images/services/facility-management/Certified.png",
=======
              icon: "/assets/images/home/icon1.png",
>>>>>>> 3fef0d8f9061ce564152035190f64d31df348d8a:src/app/(main)/services/managed-services/facility-management/page.js
              title: "Certified IT Professionals",
              text: "Skilled engineers with expertise in networking, servers, storage, and end-user support.",
            },
            {
<<<<<<< HEAD:src/app/(main)/services/facility-management/page.js
              icon: "/assets/images/services/facility-management/Cost.png",
=======
              icon: "/assets/images/home/icon2.png",
>>>>>>> 3fef0d8f9061ce564152035190f64d31df348d8a:src/app/(main)/services/managed-services/facility-management/page.js
              title: "Cost Efficiency",
              text: "Reduce operational overhead with flexible engagement models.",
            },
          ]}
          featuresRight={[
            {
<<<<<<< HEAD:src/app/(main)/services/facility-management/page.js
              icon: "/assets/images/services/facility-management/Scalability.png",
=======
              icon: "/assets/images/home/icon3.png",
>>>>>>> 3fef0d8f9061ce564152035190f64d31df348d8a:src/app/(main)/services/managed-services/facility-management/page.js
              title: "Scalability",
              text: "Services tailored for single-site or multi-location enterprises.",
            },
            {
<<<<<<< HEAD:src/app/(main)/services/facility-management/page.js
              icon: "/assets/images/services/facility-management/Approach.png",
=======
              icon: "/assets/images/home/icon4.png",
>>>>>>> 3fef0d8f9061ce564152035190f64d31df348d8a:src/app/(main)/services/managed-services/facility-management/page.js
              title: "Proactive Approach",
              text: "Prevent issues before they impact business operations.",
            },
          ]}
        />
        <ImageTabsSection
                heading="Who Needs SOC-as-a-Service?"
                headingTag="h2"
                tabs={[
                  {
                    label: "Businesses with short-term IT projects",
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
                heading="Your Team, Our Talent"
                headingTag="h2"
                imageSrc="/assets/images/industries/security.jpg"
                imageAlt="Cybersecurity monitoring dashboard"
                description="With LA Technologies as your security partner, you gain peace of mind knowing your
business is protected against evolving threats. We work behind the scenes so you can
focus on growth and innovation."
              />
              <GradientCtaBanner text="READY TO STRENGTHEN YOUR SECURITY POSTURE?" />
  </>
  );
}
