"use client";

import Image from "next/image";

export default function ImageHighlightSection({
  heading,
  headingTag = "h2",
  imageSrc,
  imageAlt = "",
  description,
}) {
  const HeadingTag = headingTag;

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 text-center">
        {/* Heading */}
        <HeadingTag className="text-2xl md:text-3xl text-gray-900 mb-8 font-semibold">
          {heading}
        </HeadingTag>

        {/* Image */}
        <div className="relative w-full h-[300px] md:h-[360px] rounded-2xl overflow-hidden mb-8">
          <Image
            src={imageSrc}
            alt={imageAlt || heading}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Description */}
        <p
          className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto font-medium"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </section>
  );
}
