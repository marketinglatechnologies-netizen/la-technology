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

export default function NetworkSecurity() {
  return (
    <>
    <div>
      <InnerPageBanner
        bgImage="/assets/images/about-us/banner.jpg"
        title="Network Security"
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
            title="Secure Your Network, Secure Your Business"
            description="Your network is the backbone of your IT infrastructure—and a prime target for
cyberattacks. From ransomware and phishing to unauthorized access and insider threats,
businesses face constant risks that can compromise data and disrupt operations.
LA Technologies’ Network Security solutions provide robust protection for your network
perimeter and internal systems, ensuring confidentiality, integrity, and availability of your
critical resources.
" />
          <InfoCtaSection
                  title="Securing Your Business Networks Against Evolving Attacks"
                  description="A single breach can expose sensitive data, halt operations, and damage your reputation.
With increasing connectivity and remote access, securing your network is no longer
optional—it’s essential.

"
                />
                <FiveCards
  heading="Our Network Security Solutions"
  headingTag="h2"
  items={[
    {
      icon: "/assets/images/services/network-security/service1.png",
      title: "Firewall Management",
      description:
        "Deployment, configuration, and monitoring of next-generation firewalls.",
    },
    {
      icon: "/assets/images/services/network-security/service2.png",
      title: "Intrusion Detection & Prevention (IDS/IPS)",
      description:
        "Real-time threat detection, investigation, and automated response.",
    },
    {
      icon: "/assets/images/services/network-security/service3.png",
      title: "Secure VPN & Remote Access",
      description:
        "Encrypted connections for secure remote workforce access.",
    },
    {
      icon: "/assets/images/services/network-security/service4.png",
      title: "Network Segmentation & Zero Trust Architecture",
      description:
        "Limit lateral movement and enforce least-privilege access.",
    },
    {
      icon: "/assets/images/services/network-security/service5.png",
      title: "Email & Web Security Gateways",
      description:
        "Protect against phishing, spam, and malicious URLs.",
    },
  ]}
/>
  <WhyChooseSection
          heading="Benefits of LA Technologies Network Security"
          centerImage="/assets/images/services/soc/whychoose.png"
          featuresLeft={[
            {
              icon: "/assets/images/services/network-security/choose1.png",
              title: "Comprehensive Protection",
              text: "Defend against external and internal threats with layered security.",
            },
            {
              icon: "/assets/images/services/network-security/choose2.png",
              title: "Regulatory Compliance",
              text: "Meet standards like GDPR, HIPAA, and PCI DSS",
            },
          ]}
          featuresRight={[
            {
              icon: "/assets/images/services/network-security/choose3.png",
              title: "Scalable Solutions",
              text: "Designed for SMBs and large enterprises.",
            },
            {
              icon: "/assets/images/services/network-security/choose4.png",
              title: "Expert Management",
              text: "Certified professionals ensure optimal configuration and monitoring.",
            },
          ]}
        />
        <section className="w-full py-16 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                
                {/* Heading */}
                <h2 className="text-2xl font-semibold text-gray-900 mb-10">
                  Supported Technologies

                </h2>
        
                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                  
                  {/* Card 1 */}
                  <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="relative h-36 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                      <Image
                        src="/assets/images/industries/greybox.jpg"
                        alt="Fortinet"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm font-semibold">
                      Fortinet
                    </p>
                  </div>
        
                  {/* Card 2 */}
                  <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="relative h-36 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                      <Image
                        src="/assets/images/industries/greybox.jpg"
                        alt="ISO 27001"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm font-semibold">
                      Palo Alto Networks
                    </p>
                  </div>
        
                  {/* Card 3 */}
                  <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="relative h-36 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                      <Image
                        src="/assets/images/industries/greybox.jpg"
                        alt="IEC 62443"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm font-semibold">
                      Cisco
                    </p>
                  </div>
        
                  {/* Card 4 */}
                  <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="relative h-36 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                      <Image
                        src="/assets/images/industries/greybox.jpg"
                        alt="CERT-In"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm font-semibold">
                      Sophoss
                    </p>
                  </div>
        
                </div>
              </div>
            </section>
        <ImageTabsSection
                heading="Who Needs Network Security?"
                headingTag="h2"
                tabs={[
                  {
                    label: "Businesses with multiple branch offices",
                    image: "/assets/images/industries/tabimage.jpg",
                  },
                  {
                    label: "Organizations handling sensitive data",
                    image: "/assets/images/industries/tabimage.jpg",
                  },
                  {
                    label: "Enterprises seeking compliance and risk reduction",
                    image: "/assets/images/industries/tabimage.jpg",
                  },
                  
                ]}
              />
              <ImageHighlightSection
                heading="Your Network, Our Shield"
                headingTag="h2"
                imageSrc="/assets/images/industries/security.jpg"
                imageAlt="Cybersecurity monitoring dashboard"
                description="With LA Technologies, you gain peace of mind knowing your network is secure—so your
business can operate without disruption"
              />
              <GradientCtaBanner text="Ready to strengthen your network security?" />
  </>
  );
}
