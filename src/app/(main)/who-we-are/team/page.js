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
        bgImage="/assets/images/about-us/our-team-banner.jpg"
        title="The People Who Make It Happen"
        titleTag="h1"
        description={`A passionate team dedicated to building meaningful solutions.`}
      />
    </div>
  );
}
