import InnerPageBanner from "@/components/layout/InnerPageBanner";
import LogoSlider from "@/components/sections/LogoSlider";
import Testimonials from "@/components/home/testimonials";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "@/components/services/PageWrapper";
import GradientCtaBanner from "@/components/services/GradientCtaBanner";
import { sanityClient } from "@/lib/sanityClient";
import TestimonialsGridSection from "@/components/home/ClientTestimonials";

export default async function Clientele() {
  const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] 
  | order(isFeatured desc, sortOrder asc, publishedAt desc) {
    _id,
    quote,
    personName,
    personTitle,
    companyName,
    "imageUrl": personImage.asset->url
  }
`;

  const testimonials = await sanityClient.fetch(TESTIMONIALS_QUERY);
  return (
    <main>
      <InnerPageBanner
        bgImage="/assets/images/about-us/clientele-banner.jpg"
        title="Partners in Growth"
        titleTag="h1"
        description={`Collaborating with businesses to deliver measurable impact.`}
      />

      <TestimonialsGridSection
        items={testimonials}
        heading="Trusted By Our Clients"
      />

      <PageWrapper>
        <LogoSlider />
      </PageWrapper>

      <GradientCtaBanner
        text="DRIVING DIGITAL GROWTH WITH TRUSTED TECHNOLOGY SOLUTIONS <br/> REACH OUT TO US NOW"
        buttonText="Contact Us Today"
        iconSrc="/assets/images/home/phone.svg"
      />
    </main>
  );
}
