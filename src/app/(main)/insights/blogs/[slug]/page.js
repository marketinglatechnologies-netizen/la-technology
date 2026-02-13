import sanityClient from "@/lib/sanityClient";
import { notFound } from "next/navigation";
import { createImageUrlBuilder } from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

export const revalidate = 60;
const builder = createImageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source);

const query = `
*[_type == "post" && slug.current == $slug][0] {
  title,
  publishedAt,
  body,
  mainImage
}
`;

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`,
  );

  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  if (!slug) notFound();

  const post = await sanityClient.fetch(query, { slug });

  if (!post) notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">{post.title}</h1>

      {post.publishedAt && (
        <p className="text-sm text-gray-500 mb-8">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      )}

      {post.mainImage && (
        <img
          src={urlFor(post.mainImage).width(1200).url()}
          alt={post.title}
          className="w-full h-[360px] object-cover rounded-xl mb-10"
        />
      )}

      <article className="prose prose-lg max-w-none prose-headings:mt-10 prose-p:mb-6">
        <PortableText
          value={post.body}
          components={{
            block: {
              normal: ({ children }) => (
                <p className="mb-6 leading-7 text-gray-700">{children}</p>
              ),
              h2: ({ children }) => (
                <h2 className="mt-10 mb-4 text-2xl font-semibold">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="mt-8 mb-3 text-xl font-semibold">{children}</h3>
              ),
            },
          }}
        />
      </article>
    </main>
  );
}
