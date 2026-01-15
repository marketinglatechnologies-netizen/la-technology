import InnerPageBanner from "@/components/layout/InnerPageBanner";
import LogoSlider from "@/components/sections/LogoSlider";
import TestimonialsSection from "@/components/joinus/testimonials-clientele";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    text:
      "LA Technologies has transparent leadership and great benefits! Leadership and managers are very transparent and approachable. Working in the diversity and equity domain gives me great satisfaction. I get to do what I believe in. I'm proud to be part of the LA family.",
    name: "Rajendra Naidu",
    role: "CEO, Founder",
    image: "/assets/images/about-us/client1.jpg",
  },
  {
    text:
      "LA Technologies has transparent leadership and great benefits! Leadership and managers are very transparent and approachable. Working in the diversity and equity domain gives me great satisfaction. I get to do what I believe in. I'm proud to be part of the LA family.",
    name: "Rajendra Naidu",
    role: "CEO, Founder",
    image: "/assets/images/about-us/client2.jpg",
  },
];

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

export default function Clientele() {
  return (
    <main>
      <InnerPageBanner
        bgImage="/assets/images/about-us/clientele.jpg"
        title="Partners in Growth"
        titleTag="h1"
        description={`Collaborating with businesses to deliver measurable impact.`}
      />
      <section>
              <LogoSlider />
      </section>
    

    <TestimonialsSection />
    
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-2xl bg-gradient-to-r from-[#E53935] to-[#F68B2C] px-8 py-6 md:px-12 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* TEXT */}
          <p className="text-white font-semibold uppercase text-sm md:text-base tracking-wide text-center md:text-left">
            Driving digital growth with trusted technology solutions – <br className="hidden md:block" />
            reach out to us now
          </p>

          {/* BUTTON */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#E53935] font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Talk to an Expert
          </Link>

        </div>

      </div>
    </section>      
    </main>
  );
}
