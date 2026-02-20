import { sanityClient } from "@/lib/sanityClient";
import { notFound } from "next/navigation";
import { createImageUrlBuilder } from "@sanity/image-url";

export const revalidate = 60;

const builder = createImageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source);

const query = `
*[_type == "caseStudy" && slug.current == $slug][0] {
  title,
  heroTitle,
  heroSubtitle,
  publishedAt,
  industryScope,
  executiveSummary,

  // Hero Image
  heroImage{
    asset->{
      url
    }
  },

  // Side Image with Alt
  sideImage{
  asset,
  alt
},

  // SEO Fields
  seo{
    metaTitle,
    metaDescription
  }
}
`;

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch(
    `*[_type == "caseStudy" && defined(slug.current)]{
      "slug": slug.current
    }`,
  );

  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params; 

  if (!slug) return {};

  const data = await sanityClient.fetch(query, { slug });

  if (!data) return {};

  return {
    title: data?.seo?.metaTitle || data?.heroTitle,
    description: data?.seo?.metaDescription || data?.heroSubtitle,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  if (!slug) return notFound();

  const caseStudy = await sanityClient.fetch(query, { slug });

  if (!caseStudy) return notFound();

  const { industryScope, executiveSummary } = caseStudy;

  return (
    <main className="bg-white">
      {/* Title (Centered) */}
      {/* ================= HERO BANNER ================= */}
      {caseStudy.heroImage && (
        <section className="relative w-full h-[320px] md:h-[450px]">
          <img
            src={urlFor(caseStudy.heroImage).width(1920).url()}
            alt={caseStudy.heroTitle || caseStudy.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          {/* Text Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="w-full px-6 md:px-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 max-w-3xl">
                {caseStudy.heroTitle || caseStudy.title}
              </h1>

              {caseStudy.heroSubtitle && (
                <p className="text-white/90 mt-4 max-w-2xl text-lg">
                  {caseStudy.heroSubtitle}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Industry & Scope – FULL WIDTH */}
      {industryScope && (
        <section className="w-full bg-[#FFF7EB] py-6">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-semibold text-orange-600 mb-10">
              Industry & Scope
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-gray-800">
              {/* LEFT */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-1">Industry :</h4>
                  <p>{industryScope.industry}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">Organization Type :</h4>
                  <p>{industryScope.organizationType}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">Deployment Size :</h4>
                  <p>{industryScope.size}</p>
                </div>
              </div>

              {/* MIDDLE */}
              <div>
                <h4 className="font-semibold mb-1">Geography :</h4>
                <p className="leading-relaxed">{industryScope.geography}</p>
              </div>

              {/* RIGHT */}
              {industryScope.securitySolutions && (
                <div>
                  <h4 className="font-semibold mb-4">
                    Security Solutions Deployed:
                  </h4>
                  <ul className="space-y-3 list-disc list-inside">
                    {industryScope.securitySolutions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Executive Section */}
        {executiveSummary && (
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="text-sm text-gray-800 leading-relaxed">
                <h2 className="text-2xl font-semibold mb-4">
                  Executive Summary
                </h2>

                <p className="mb-8">{executiveSummary.summary}</p>

                {/* Business Challenges */}
                <h3 className="text-2xl font-semibold mb-4">
                  Business Challenges
                </h3>
                <ul className="mb-8 space-y-1">
                  {executiveSummary.businessChallenges?.map((item, i) => (
                    <li key={i}>– {item}</li>
                  ))}
                </ul>

                {/* Security Objectives */}
                <h3 className="text-2xl font-semibold mb-4">
                  Security Objectives
                </h3>
                <ul className="mb-8 space-y-1">
                  {executiveSummary.securityObjectives?.map((item, i) => (
                    <li key={i}>– {item}</li>
                  ))}
                </ul>

                {/* Solution Overview */}
                <h3 className="text-2xl font-semibold mb-4">
                  Solution Overview
                </h3>
                <div className="space-y-4 mb-8">
                  {executiveSummary.solutionOverview?.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Deployment Phases */}
                <h3 className="text-2xl font-semibold mb-4">
                  Deployment Phases
                </h3>
                <ul className="mb-8 space-y-1">
                  {executiveSummary.deploymentPhases?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* Business Outcomes */}
                <h3 className="text-2xl font-semibold mb-4">
                  Business Outcomes
                </h3>
                <ul className="mb-8 space-y-1">
                  {executiveSummary.businessOutcomes?.map((item, i) => (
                    <li key={i}>– {item}</li>
                  ))}
                </ul>

                {/* Conclusion */}
                <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
                <div className="space-y-3">
                  {executiveSummary.conclusion?.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Right Side Image */}
              {executiveSummary?.sideImage?.asset && (
                <div className="flex justify-center lg:justify-end">
                  <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-sm">
                    <img
                      src={urlFor(executiveSummary.sideImage).width(800).url()}
                      alt={executiveSummary.sideImage?.alt || "Side Image"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
