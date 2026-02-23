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
              {/* LEFT COLUMN */}
              <div className="space-y-6">
                {industryScope.industry && (
                  <div>
                    <h4 className="font-semibold mb-1">
                      {industryScope.industry.heading}
                    </h4>
                    <p>{industryScope.industry.value}</p>
                  </div>
                )}

                {industryScope.organizationType && (
                  <div>
                    <h4 className="font-semibold mb-1">
                      {industryScope.organizationType.heading}
                    </h4>
                    <p>{industryScope.organizationType.value}</p>
                  </div>
                )}

                {industryScope.size && (
                  <div>
                    <h4 className="font-semibold mb-1">
                      {industryScope.size.heading}
                    </h4>
                    <p>{industryScope.size.value}</p>
                  </div>
                )}

                {industryScope.usersCovered && (
                  <div>
                    <h4 className="font-semibold mb-1">
                      {industryScope.usersCovered.heading}
                    </h4>
                    <p>{industryScope.usersCovered.value}</p>
                  </div>
                )}
              </div>

              {/* MIDDLE COLUMN */}
              <div className="space-y-6">
                {industryScope.geography && (
                  <div>
                    <h4 className="font-semibold mb-1">
                      {industryScope.geography.heading}
                    </h4>
                    <p className="leading-relaxed">
                      {industryScope.geography.value}
                    </p>
                  </div>
                )}

                {industryScope.operationalFootprint && (
                  <div>
                    <h4 className="font-semibold mb-1">
                      {industryScope.operationalFootprint.heading}
                    </h4>
                    <p className="leading-relaxed">
                      {industryScope.operationalFootprint.value}
                    </p>
                  </div>
                )}

                {industryScope.networkCoverage && (
                  <div>
                    <h4 className="font-semibold mb-1">
                      {industryScope.networkCoverage.heading}
                    </h4>
                    <p className="leading-relaxed">
                      {industryScope.networkCoverage.value}
                    </p>
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN */}
              {industryScope.securitySolutions && (
                <div>
                  {industryScope.securitySolutionsHeading && (
                    <h4 className="font-semibold mb-4">
                      {industryScope.securitySolutionsHeading}
                    </h4>
                  )}

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

                {/* Render all sections dynamically */}
                {executiveSummary.sections?.map((section, i) => (
                  <div key={i} className="mb-8">
                    {section.heading && (
                      <h3 className="text-2xl font-semibold mb-4">
                        {section.heading}
                      </h3>
                    )}

                    {section.contentType === "paragraph" &&
                      section.paragraph && (
                        <p className="mb-8">{section.paragraph}</p>
                      )}

                    {section.contentType === "list" &&
                      section.listItems?.length > 0 && (
                        <ul className="mb-8 space-y-1 list-disc list-inside">
                          {section.listItems.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                  </div>
                ))}
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
