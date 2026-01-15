"use client";

import Image from "next/image";

export default function FeatureHighlightSection({
  images = [],
  title,
  description,
}) {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: Image Composition */}
        <div className="grid grid-cols-2 gap-4">
          
          {/* Tall Left Image */}
          <div className="relative rounded-2xl overflow-hidden h-[420px]">
            <Image
              src={images[0]?.src}
              alt={images[0]?.alt || "feature image"}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Stacked Images */}
          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden h-[200px]">
              <Image
                src={images[1]?.src}
                alt={images[1]?.alt || "feature image"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[200px]">
              <Image
                src={images[2]?.src}
                alt={images[2]?.alt || "feature image"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
            {title}
          </h2>

          <p className="text-gray-600 text-base leading-relaxed" dangerouslySetInnerHTML={{__html: description}}>
          </p>
        </div>
      </div>
    </section>
  );
}
