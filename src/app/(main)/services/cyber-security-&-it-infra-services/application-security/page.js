import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import InfoCtaSection from "@/components/services/InfoCtaSection";
import EightCards from "@/components/services/EightCards";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ImageTabsSection from "@/components/services/ImageTabsSection";
import ImageHighlightSection from "@/components/services/ImageHighlightSection";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import Image from "next/image";

export const metadata = {
  title: "Application Security Services | LA Technologies Pvt Ltd",
  description:
    "Ensure application safety with vulnerability assessments, penetration testing, and secure development practices",
};

export default function ApplicationSecurity() {
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/services/application-security/banner.png"
          title="Application Security"
          titleTag="h1"
          description={`Build and run applications you can trust.`}
        />
      </div>
      <FeatureHighlightSection
        images={[
          {
            src: "/assets/images/services/application-security/secure1.png",
            alt: "Security dashboard",
          },
          {
            src: "/assets/images/services/application-security/secure2.png",
            alt: "Developer working",
          },
          {
            src: "/assets/images/services/application-security/secure3.png",
            alt: "Data monitoring",
          },
        ]}
        title="Secure Your Applications, Protect Your Business"
        description="Applications are the backbone of modern business—but they’re also a prime target for
cyberattacks. Vulnerabilities in web apps, APIs, and enterprise software can lead to data
breaches, financial loss, and compliance failures.
LA Technologies’ Application Security solutions help you identify, remediate, and
prevent application-level threats, ensuring your business remains secure and compliant.
"
      />
      <InfoCtaSection
        title="Why Application Security Matters?"
        description="Hackers increasingly target applications to bypass traditional network defenses. With apps
accessible over multiple networks and devices, securing them is critical to protect
sensitive data and maintain trust."
      />
      <EightCards
        heading="Our Application Security Solutions"
        headingTag="h2"
        items={[
          {
            icon: "/assets/images/services/application-security/application1.png",
            title: "Web Application Firewall (WAF)",
            description:
              "Protect apps from common attacks like SQL injection and XSS.",
          },
          {
            icon: "/assets/images/services/application-security/application2.png",
            title: "API Security",
            description:
              "Secure APIs against unauthorized access and data leaks.",
          },
          {
            icon: "/assets/images/services/application-security/application3.png",
            title: "Secure Code Review & Testing",
            description:
              "Identify vulnerabilities early in the development lifecycle.",
          },
          {
            icon: "/assets/images/services/application-security/application4.png",
            title: "Authentication & Authorization Controls",
            description: "Ensure only verified users access your applications.",
          },
          {
            icon: "/assets/images/services/application-security/application5.png",
            title: "Encryption & Data Protection",
            description:
              "Safeguard sensitive data during storage and transmission.",
          },
          {
            icon: "/assets/images/services/application-security/application6.png",
            title: "Logging & Monitoring",
            description:
              "Detect anomalies and track access for forensic analysis.",
          },
          {
            icon: "/assets/images/services/application-security/application7.png",
            title: "Vulnerability Assessment & Penetration Testing (VAPT)",
            description:
              "Comprehensive testing to uncover and remediate weaknesses.",
          },
        ]}
      />

      <WhyChooseSection
        heading="Benefits of LA Technologies Application Security"
        centerImage="/assets/images/services/application-security/benefits.png"
        featuresLeft={[
          {
            icon: "/assets/images/services/application-security/benefit1.png",
            title: "Prevent Data Breaches",
            text: "Block exploits before they compromise sensitive information.",
          },
          {
            icon: "/assets/images/services/application-security/benefit2.png",
            title: " Ensure Compliance",
            text: "Meet OWASP, PCI DSS, and industry security standards.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/application-security/benefit3.png",
            title: "Continuous Protection",
            text: "Ongoing assessments and updates to stay ahead of evolving threats.",
          },
          {
            icon: "/assets/images/services/application-security/benefit4.png",
            title: "Expert Guidance",
            text: "Certified security professionals with deep application security expertise.",
          },
        ]}
      />
      {/* <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6"> */}
          {/* Heading */}
          {/* <h2 className="text-2xl font-semibold text-gray-900 mb-10">
            Supported Technologies
          </h2> */}

          {/* Cards */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> */}
            {/* Card 1 */}
            {/* <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="relative h-36 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/assets/images/services/application-security/owasp.png"
                  alt="Fortinet"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-semibold">OWASP-aligned tools</p>
            </div> */}

            {/* Card 2 */}
            {/* <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="relative h-36 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/assets/images/services/application-security/leading.png"
                  alt="ISO 27001"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-semibold">
                Leading WAF and API security platforms
              </p>
            </div> */}

            {/* Card 3 */}
            {/* <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="relative h-36 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/assets/images/services/application-security/industry.png"
                  alt="IEC 62443"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-semibold">
                Industry-standard testing frameworks
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <ImageTabsSection
        heading="Who Needs Application Security?"
        headingTag="h2"
        tabs={[
          {
            label: "Businesses running web applications or APIs",
            image: "/assets/images/services/application-security/tab1.png",
          },
          {
            label: "Organizations handling sensitive customer data",
            image: "/assets/images/services/application-security/tab2.png",
          },
          {
            label: "Enterprises seeking compliance and risk reduction",
            image: "/assets/images/services/application-security/tab3.png",
          },
        ]}
      />
      <ImageHighlightSection
        heading="Your Applications, Our Shield"
        headingTag="h2"
        imageSrc="/assets/images/services/application-security/cta.png"
        imageAlt="Cybersecurity monitoring dashboard"
        description="With LA Technologies, you gain peace of mind knowing your applications are secure—so
your business can innovate without risk."
      />
      <GradientCtaBanner text="Ready to secure your applications?
" buttonText="Request a Network Assessment"/>
    </>
  );
}
