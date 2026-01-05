import InnerPageBanner from "@/components/layout/InnerPageBanner";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

export default function AboutPage() {
  return (
    <div>
      <InnerPageBanner
        bgImage="/assets/images/about-us/banner.jpg"
        title="Driven by Innovation"
        titleTag="h1"
        description={`Our team combines technology, strategy, and <br> creativity to deliver meaningful digital experiences.`}
      />
    </div>
  );
}
