import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import InfoCtaSection from "@/components/services/InfoCtaSection";
import FiveCards from "@/components/services/FiveCards";
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

export default function ITBranchOperations() {
  return (
    <>
    <div>
      <InnerPageBanner
        bgImage="/assets/images/services/it-staff-augmentation/banner.jpg"
        title="IT Staff Augmentation"
        titleTag="h1"
        description={`Round-the-clock Managed Security Services designed to defend modern enterprises.`}
      />
    </div>
    <FeatureHighlightSection
            images={[
              {
                src: "/assets/images/services/it-staff-augmentation/scale1.jpg",
                alt: "Security dashboard",
              },
              {
                src: "/assets/images/services/it-staff-augmentation/scale2.jpg",
                alt: "Developer working",
              },
              {
                src: "/assets/images/services/it-staff-augmentation/scale3.jpg",
                alt: "Data monitoring",
              },
            ]}
            title="Scale Your Team with Certified IT Experts"
            description="Finding and retaining skilled IT professionals can be challenging, especially when projects
demand specialized expertise or rapid scaling. LA Technologies’ IT Staff Augmentation
Services help you bridge the talent gap by providing highly qualified professionals who
integrate seamlessly with your team—on-demand and cost-effectively."
          />
          <InfoCtaSection
                  title="What is IT Staff Augmentation?
"
                  description="IT Staff Augmentation is a flexible outsourcing model that allows businesses to hire skilled
IT resources for short-term or long-term projects without the overhead of full-time
employment. Our experts work as an extension of your team, ensuring faster delivery and
improved efficiency."
                />
                <FiveCards
  heading="Our IT Staff Augmentation Services Include"
  headingTag="h2"
  items={[
    {
      icon: "/assets/images/services/it-staff-augmentation/service1.png",
      title: "On-Demand IT Talent",
      description:
        "Access certified professionals for networking, cloud, cybersecurity, DevOps, and more.",
    },
    {
      icon: "/assets/images/services/it-staff-augmentation/service2.png",
      title: "Flexible Engagement Models",
      description:
        "Hire resources on hourly, monthly, or project-based contracts.",
    },
    {
      icon: "/assets/images/services/it-staff-augmentation/service3.png",
      title: "Specialized Expertise",
      description:
        "Configuration, monitoring, and optimSkilled engineers for niche technologies like virtualization, cloud migration, and security operations.ization of firewalls, IDS/IPS, and VPNs.",
    },
    {
      icon: "/assets/images/services/it-staff-augmentation/service4.png",
      title: "Rapid Deployment",
      description:
        "Quickly scale your team to meet project deadlines and business goals.",
    },
    {
      icon: "/assets/images/services/it-staff-augmentation/service5.png",
      title: "End-to-End Support",
      description:
        "From onboarding to performance monitoring, we ensure smooth integration.",
    },
  ]}
/>
  <WhyChooseSection
          heading="What LA Technologies Helps You With:"
          centerImage="/assets/images/services/it-staff-augmentation/whychoose.jpg"
          featuresLeft={[
            {
              icon: "/assets/images/services/it-staff-augmentation/choose1.png",
              title: "Certified Professionals",
              text: "Experts in networking, cloud, security, and enterprise IT solutions.",
            },
            {
              icon: "/assets/images/services/it-staff-augmentation/choose2.png",
              title: "Cost Efficiency",
              text: "Reduce hiring costs and eliminate long recruitment cycles.",
            },
          ]}
          featuresRight={[
            {
              icon: "/assets/images/services/it-staff-augmentation/choose3.png",
              title: "Scalability",
              text: "Scale up or down based on project requirements.",
            },
            {
              icon: "/assets/images/services/it-staff-augmentation/choose4.png",
              title: "Domain Expertise",
              text: "Experience across industries including BFSI, healthcare, manufacturing, and IT services.",
            },
          ]}
        />
        <ImageTabsSection
                heading="Where Is IT Staff Augmentation Required?"
                headingTag="h2"
                tabs={[
                  {
                    label: "Businesses with short-term IT projects",
                    image: "/assets/images/services/it-staff-augmentation/tab1.jpg",
                  },
                  {
                    label: "Organizations facing skill shortages",
                    image: "/assets/images/services/it-staff-augmentation/tab2.jpg",
                  },
                  {
                    label: "Companies scaling operations rapidly",
                    image: "/assets/images/services/it-staff-augmentation/tab3.png",
                  },
                  {
                    label: "Enterprises seeking niche technology expertise",
                    image: "/assets/images/services/it-staff-augmentation/tab4.png",
                  },
                ]}
              />
              <ImageHighlightSection
                heading="Your Team, Our Talent"
                headingTag="h2"
                imageSrc="/assets/images/services/it-staff-augmentation/security.jpg"
                imageAlt="Cybersecurity monitoring dashboard"
                description="With LA Technologies as your security partner, you gain peace of mind knowing your
business is protected against evolving threats. We work behind the scenes so you can
focus on growth and innovation."
              />
              <GradientCtaBanner text="Ready to augment your IT team?" />
  </>
  );
}
