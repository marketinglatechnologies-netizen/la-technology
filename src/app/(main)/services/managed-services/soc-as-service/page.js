"use client";

import { useEffect, useState } from "react";
import { CheckCircle, AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import InnerPageBanner from "@/components/layout/InnerPageBanner";
import FeatureHighlightSection from "@/components/services/FeatureHighlightSection";
import InfoCtaSection from "@/components/services/InfoCtaSection";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ImageTabsSection from "@/components/services/ImageTabsSection";
import ImageHighlightSection from "@/components/services/ImageHighlightSection";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import FourCards from "@/components/services/FourCards";
import Image from "next/image";
import HalfwayPopupForm from "@/components/sections/PopupForm";
import PageWrapper from "@/components/services/PageWrapper";

// export const metadata = {
//   title: " SOC as a Service | 24x7 Security Operations | LA Technologies Pvt Ltd",
//   description:
//     "LA Technologies Pvt Ltd provides SOC as a Service with round-the-clock monitoring, threat detection, and incident response for enterprises",
// };

const features = [
  {
    icon: "/assets/images/services/soc/24.png",
    title: "24/7 Threat Monitoring & Detection",
    description:
      "Continuous surveillance of networks, endpoints, and cloud environments using next-gen SIEM and analytics.",
  },
  {
    icon: "/assets/images/services/soc/Incident-Response.png",
    title: "Rapid Incident Response",
    description:
      "Our certified analysts investigate and contain threats immediately, minimizing downtime and damage.",
  },
  {
    icon: "/assets/images/services/soc/feature3.png",
    title: "Proactive Vulnerability Management",
    description:
      "Regular scans and remediation recommendations to prevent potential breaches before they occur.",
  },
  {
    icon: "/assets/images/services/soc/feature4.png",
    title: "Compliance & Reporting",
    description:
      "Stay aligned with GDPR, HIPAA, PCI DSS, ISO 27001 through detailed logs, reports, and audit support.",
  },
];

export default function SOC() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    company: "",
    jobTitle: "",
    companySize: "",
    industry: "",
    message: "",
    captchaInput: "",
  });
  const [captcha, setCaptcha] = useState({ q: "", a: null });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle");

  // 2. Generate new math question
  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ q: `${n1} + ${n2}`, a: n1 + n2 });
  };

  // 3. Move useEffect inside the component
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parseInt(formData.captchaInput) !== captcha.a) {
      // alert("Captcha is incorrect!");
      setStatus("error-captcha");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // alert("Success! Check your email.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          company: "",
          jobTitle: "",
          companySize: "",
          industry: "",
          message: "",
          captchaInput: "",
        });
        generateCaptcha();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission error", err);
      setStatus("error");
    } finally {
      //setIsSubmitting(false);
    }
  };
  return (
    <>
      <div>
        <InnerPageBanner
          bgImage="/assets/images/services/soc/SOC-banner.jpg"
          title="SOC As A Service"
          titleTag="h1"
          description={`24×7 threat visibility, rapid response, real resilience.`}
        />
      </div>
      <FeatureHighlightSection
        images={[
          {
            src: "/assets/images/services/soc/SOC-1.jpg",
            alt: "Security dashboard",
          },
          {
            src: "/assets/images/services/soc/SOC-2.png",
            alt: "Developer working",
          },
          {
            src: "/assets/images/services/soc/SOC-3.jpg",
            alt: "Data monitoring",
          },
        ]}
        title="Stay Ahead of Cyber Threats with 24/7 Security Monitoring"
        description="In today’s digital-first world, cyber threats are more advanced, persistent, and damaging than ever before. From ransomware and phishing attacks to insider threats and data breaches, businesses face constant risks that can disrupt operations and compromise sensitive data. Traditional security measures are no longer enough—you need a dedicated team monitoring your environment around the clock."
      />

      <InfoCtaSection
        title="What is SOC-as-a-Service?"
        description="SOC-as-a-Service is a subscription-based model that gives you access to enterprise-grade security operations without heavy upfront investment. Our experts leverage advanced SIEM tools, threat intelligence, and automation to monitor, detect, and respond to security incidents in real time—keeping your business safe and compliant."
      />

      <FourCards
        heading="Our Data Center Services"
        headingTag="h2"
        cards={[
          {
            icon: "/assets/images/services/soc/24.png",
            title: "24/7 Threat Monitoring & Detection",
            description:
              "Continuous surveillance of networks, endpoints, and cloud environments using next-gen SIEM and analytics.",
          },
          {
            icon: "/assets/images/services/soc/Incident-Response.png",
            title: "Rapid Incident Response",
            description:
              "Our certified analysts investigate and contain threats immediately, minimizing downtime and damage.",
          },
          {
            icon: "/assets/images/services/soc/feature3.png",
            title: "Proactive Vulnerability Management",
            description:
              "Regular scans and remediation recommendations to prevent potential breaches before they occur.",
          },
          {
            icon: "/assets/images/services/soc/feature4.png",
            title: "Compliance & Reporting",
            description:
              "Stay aligned with GDPR, HIPAA, PCI DSS, ISO 27001 through detailed logs, reports, and audit support.",
          },
        ]}
      />

      <HalfwayPopupForm />

      <WhyChooseSection
        heading="LA Technologies SOC-as-a-Service:"
        centerImage="/assets/images/services/soc/1/soc-whychoose-la.jpg"
        featuresLeft={[
          {
            icon: "/assets/images/services/soc/Cost-Effective.svg",
            title: "Cost-Effective Security",
            text: "Avoid the high costs of building and maintaining an in-house SOC while accessing enterprise-grade capabilities.",
          },
          {
            icon: "/assets/images/services/soc/Flexible.svg",
            title: "Scalable & Flexible",
            text: "Whether you are a startup or a large enterprise, our service scales with your business needs.",
          },
        ]}
        featuresRight={[
          {
            icon: "/assets/images/services/soc/report.svg",
            title: "Tailored Alerts & Reports",
            text: "Receive customized alerts and actionable insights aligned with your business priorities.",
          },
          {
            icon: "/assets/images/services/soc/global.svg",
            title: "Global Threat Intelligence",
            text: "We combine human expertise with AI-driven tools to detect both known and zero-day threats.",
          },
        ]}
      />
      <ImageTabsSection
        heading="Benefits of SOC-as-a-Service:"
        headingTag="h2"
        tabs={[
          {
            label: "Businesses handling sensitive customer data",
            image:
              "/assets/images/services/soc/soc-Who-Needs-SOC-as-a-Service-1.jpg",
          },
          {
            label: "Organizations in regulated industries",
            image:
              "/assets/images/services/soc/soc-Who-Needs-SOC-as-a-Service-2.jpg",
          },
          {
            label: "Companies migrating workloads to the cloud",
            image:
              "/assets/images/services/soc/soc-Who-Needs-SOC-as-a-Service-3.jpg",
          },
          {
            label: "Enterprises lacking in-house security expertise",
            image:
              "/assets/images/services/soc/soc-Who-Needs-SOC-as-a-Service-4.jpg",
          },
        ]}
      />
      <ImageHighlightSection
        heading="Your Security, Our Priority"
        headingTag="h2"
        imageSrc="/assets/images/services/soc/soc-security priority.jpg"
        imageAlt="Cybersecurity monitoring dashboard"
        description="Cybersecurity is not optional—it’s essential. With LA Technologies as your trusted SOC partner, you gain visibility, control, and peace of mind. We work behind the scenes to keep your business secure so you can focus on growth and innovation."
      />
      <GradientCtaBanner text="READY TO STRENGTHEN YOUR SECURITY POSTURE?" />
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <div>
              <label className="text-sm font-medium">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                placeholder="Enter your first name"
                className="w-full mt-2 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                placeholder="Enter your last name"
                className="w-full mt-2 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Enter Contact Number<span className="text-red-500">*</span>
              </label>
              <div className="flex mt-2">
                <span className="px-3 flex items-center border border-r-0 rounded-l-md text-sm bg-gray-100">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  placeholder="Enter contact number"
                  className="w-full px-4 py-2 border rounded-r-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">
                Work Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter your email id"
                className="w-full mt-2 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Company Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                placeholder="Enter your compnay name"
                className="w-full mt-2 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="text-sm font-medium">
                Job Title<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.jobTitle}
                onChange={(e) =>
                  setFormData({ ...formData, jobTitle: e.target.value })
                }
                placeholder="Enter your job title"
                className="w-full mt-2 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="text-sm font-medium">
                Company Size<span className="text-red-500">*</span>
              </label>

              <select
                required
                value={formData.companySize}
                onChange={(e) =>
                  setFormData({ ...formData, companySize: e.target.value })
                }
                className="w-full mt-1 px-4 py-2 border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select company size</option>
                <option value="1-10">1–10 employees</option>
                <option value="11-50">11–50 employees</option>
                <option value="51-200">51–200 employees</option>
                <option value="201-500">201–500 employees</option>
                <option value="500+">500+ employees</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">
                Industry<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.industry}
                onChange={(e) =>
                  setFormData({ ...formData, industry: e.target.value })
                }
                placeholder="Enter your industry"
                className="w-full mt-2 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Enter your message"
                className="w-full mt-2 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>

            {/* CAPTCHA */}
            <div className="md:col-span-2 flex items-center gap-4 bg-orange-50 p-3 rounded-md border border-orange-100">
              <label className="text-sm font-bold text-gray-700">
                Solve: {captcha.q} =
              </label>
              <input
                type="number"
                required
                value={formData.captchaInput}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    captchaInput: e.target.value,
                  })
                }
                className="w-20 px-2 py-1 border rounded focus:ring-orange-400 outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 bg-gradient-to-r from-red-500 cursor-pointer to-orange-500 text-white px-8 py-3 rounded-md flex items-center justify-center gap-3 text-sm font-medium hover:opacity-90 transition disabled:cursor-not-allowed w-full md:w-auto"
              >
                {status === "submitting" ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    <img
                      src="/assets/images/home/send.svg"
                      alt="send"
                      className="w-4 h-4"
                    />
                    Submit Message
                  </>
                )}
              </button>
            </div>

            <div className="col-span-full min-h-[80px]">
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mb-6 flex items-center gap-3 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-sm md:text-base">
                        Message Sent!
                      </p>
                      <p className="text-xs md:text-sm opacity-90">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                    {/* <button
                          onClick={() => setStatus("idle")}
                          className="p-1 hover:bg-green-100 rounded-lg transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button> */}
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 flex items-center gap-3 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-semibold">
                      Something went wrong. Please try again.
                    </p>
                    {/* <button
                          onClick={() => setStatus("idle")}
                          className="ml-auto p-1 hover:bg-red-100 rounded-lg transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button> */}
                  </motion.div>
                )}

                {status === "error-captcha" && (
                  <motion.div
                    key="captcha"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      x: [0, -4, 4, -4, 4, 0], // This creates the "Shake" animation
                    }}
                    transition={{ duration: 0.4 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 text-amber-700 rounded-xl"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-semibold">
                      Captcha is incorrect. Please solve again.
                    </p>
                    {/* <button
                          onClick={() => setStatus("idle")}
                          className="ml-auto p-1 hover:bg-amber-100 rounded-lg transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button> */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
