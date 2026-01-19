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

export default function EndpointSecurity() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/services/endpoint-security/banner.png"
          title="Endpoint Security"
          titleTag="h1"
          description={`Round-the-clock Managed Security Services designed to defend modern enterprises.`}
        />
      </div>
      <FeatureHighlightSection
        images={[
          {
            src: "/assets/images/services/endpoint-security/protect1.png",
            alt: "Security dashboard",
          },
          {
            src: "/assets/images/services/endpoint-security/protect2.png",
            alt: "Developer working",
          },
          {
            src: "/assets/images/services/endpoint-security/protect3.png",
            alt: "Data monitoring",
          },
        ]}
        title="Protect Every Device, Everywhere"
        description="Endpoints—desktops, laptops, mobile devices, and IoT—are often the weakest link in your
security chain. With remote work and BYOD policies, the number of endpoints connecting
to your network is growing rapidly, creating new attack surfaces for cybercriminals.
LA Technologies’ Endpoint Security solutions safeguard every device with advanced protection against malware, ransomware, and zero-day threats—ensuring your business stays secure and compliant."
      />
      <InfoCtaSection
        title="Endpoint Security in Today’s Threat Landscape"
        description="Every endpoint is a potential entry point for attackers. A single compromised device can
lead to data breaches, financial loss, and reputational damage. Our solutions provide
complete visibility, control, and protection across all endpoints.
"
      />
      <FiveCards
        heading="Our Endpoint Security Solutions"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/services/endpoint-security/service1.png",
            title: "Next-Generation Antivirus (NGAV)",
            description:
              "Advanced protection against malware, ransomware, and zero-day exploits.",
          },
          {
            icon: "/assets/images/services/endpoint-security/service2.png",
            title: "Endpoint Detection & Response (EDR)",
            description:
              "Real-time threat detection, investigation, and automated response.",
          },
          {
            icon: "/assets/images/services/endpoint-security/service3.png",
            title: "Threat Hunting & Incident Response",
            description:
              "Proactive threat hunting and rapid containment of security incidents.",
          },
          {
            icon: "/assets/images/services/endpoint-security/service4.png",
            title: "Device Encryption & Data Loss Prevention (DLP)",
            description:
              "Secure sensitive data and prevent unauthorized access.",
          },
          {
            icon: "/assets/images/services/endpoint-security/service5.png",
            title: "Patch Management & Vulnerability Scanning",
            description:
              "Regular updates and scans to eliminate security gaps.",
          },
        ]}
      />
      <WhyChooseSection
        heading="Benefits of LA Technologies Endpoint Security"
        centerImage="/assets/images/services/endpoint-security/whychoose.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/endpoint-security/choose1.png",
            title: "Comprehensive Protection",
            text: "Defend against known and unknown threats with AI-driven security.",
          },
          {
            icon: "/assets/images/services/endpoint-security/choose2.png",
            title: "Centralized Management",
            text: "Simplify endpoint security with unified dashboards and reporting.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/endpoint-security/choose3.png",
            title: "Compliance Ready",
            text: "Meet regulatory requirements like GDPR, HIPAA, and PCI DSS.",
          },
          {
            icon: "/assets/images/services/endpoint-security/choose4.png",
            title: "Scalable & Flexible",
            text: "Solutions tailored for SMBs and large enterprises.",
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
                  src="/assets/images/services/endpoint-security/carbon-cloud.png"
                  alt="NIST CSF"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-semibold">Carbon Black Cloud™ </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="relative h-36 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/assets/images/services/endpoint-security/sophos.png"
                  alt="ISO 27001"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-semibold">Sophos Intercept X</p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="relative h-36 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/assets/images/services/endpoint-security/microsoft.png"
                  alt="IEC 62443"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-semibold">
                Microsoft Defender for Endpoint
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="relative h-36 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/assets/images/services/endpoint-security/crowdstrike.png"
                  alt="CERT-In"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-semibold">CrowdStrike Falcon</p>
            </div>
          </div>
        </div>
        {/* <p className="mt-3 text-xs text-gray-500 italic text-right pr-15">
          (Based on your OEM partnerships)
        </p> */}
      </section>
      <ImageTabsSection
        heading="Where Endpoint Security Is Required:"
        headingTag="h2"
        tabs={[
          {
            label: "Businesses with remote workforce",
            image: "/assets/images/services/endpoint-security/tab1.png",
          },
          {
            label: "Organizations handling sensitive data",
            image: "/assets/images/services/endpoint-security/tab2.png",
          },
          {
            label: "Enterprises seeking compliance and risk reduction",
            image: "/assets/images/services/endpoint-security/tab3.png",
          },
        ]}
      />
      <ImageHighlightSection
        heading="Your Devices, Our Defense"
        headingTag="h2"
        imageSrc="/assets/images/services/endpoint-security/security.png"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies, you gain peace of mind knowing every endpoint is secure—so your
business can thrive without disruption."
      />
      <GradientCtaBanner text="Ready to secure your endpoints?"/>
    </>
  );
}
