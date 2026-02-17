import { sanityClient } from "@/lib/sanityClient";
import { notFound } from "next/navigation";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

export const revalidate = 60;

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source);

const query = `
*[_type == "caseStudy" && slug.current == $slug][0] {
  title,
  heroImage,
  industryScope,
  executiveSummary,
  publishedAt
}
`;

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch(
    `*[_type == "caseStudy" && defined(slug.current)]{
      "slug": slug.current
    }`
  );

  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = params;

  const caseStudy = await sanityClient.fetch(query, { slug });

  if (!caseStudy) notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-4">
        {caseStudy.title}
      </h1>

      <p className="text-sm text-gray-500 mb-8">
        {caseStudy.clientName} – {caseStudy.industry}
      </p>

      {caseStudy.featuredImage && (
        <img
          src={urlFor(caseStudy.featuredImage).width(1200).url()}
          alt={caseStudy.title}
          className="w-full rounded-xl mb-10"
        />
      )}

      <article className="prose max-w-none">
        <PortableText value={caseStudy.body} />
      </article>
    </main>
  );
}
