import InnerPageBanner from "@/components/layout/InnerPageBanner";
import LogoSlider from "@/components/sections/LogoSlider";
import Testimonials from "@/components/home/testimonials";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "@/components/services/PageWrapper";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";

const testimonials = [
  {
    text: "LA Technologies has transparent leadership and great benefits! Leadership and managers are very transparent and approachable. Working in the diversity and equity domain gives me great satisfaction. I get to do what I believe in. I'm proud to be part of the LA family.",
    name: "Rajendra Naidu",
    role: "CEO, Founder",
    image: "/assets/images/about-us/client1.jpg",
  },
  {
    text: "LA Technologies has transparent leadership and great benefits! Leadership and managers are very transparent and approachable. Working in the diversity and equity domain gives me great satisfaction. I get to do what I believe in. I'm proud to be part of the LA family.",
    name: "Rajendra Naidu",
    role: "CEO, Founder",
    image: "/assets/images/about-us/client2.jpg",
  },
];

export const metadata = {
  title: "Our Clients | Enterprises Trusting LA Technologies Pvt Ltd",
  description:
    "Explore the diverse clientele of LA Technologies Pvt Ltd , trusted by enterprises across industries for cyber security, IT, and OT solutions.",
};

export default function Clientele() {
  return (
    <main>
      <InnerPageBanner
        bgImage="/assets/images/about-us/clientele-banner.jpg"
        title="Partners in Growth"
        titleTag="h1"
        description={`Collaborating with businesses to deliver measurable impact.`}
      />

      <PageWrapper>
        <LogoSlider />
      </PageWrapper>

      <PageWrapper>
        <Testimonials heading="What Our Clients Say" />
      </PageWrapper>

      <GradientCtaBanner
        text="DRIVING DIGITAL GROWTH WITH TRUSTED TECHNOLOGY SOLUTIONS <br/> REACH OUT TO US NOW"
        buttonText="Contact Us Today"
        iconSrc="/assets/images/home/phone.svg"
      />
    </main>
  );
}
