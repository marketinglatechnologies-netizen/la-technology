"use client";

export default function FourBoxSection({
  heading,
  headingTag = "h2",
  items = [],
}) {
  const HeadingTag = headingTag;

  // Determine the desktop grid columns based on the number of items
  // If 4 or more, use 4 cols. If 3, use 3 cols. Default to 4.
  const gridColsClass =
    items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <HeadingTag
          className="text-2xl md:text-3xl text-center text-gray-900 mb-16 font-semibold"
          dangerouslySetInnerHTML={{ __html: heading }}
        />

        {/* Dynamic Grid:
            - justify-center ensures that if items wrap, they stay balanced.
            - gridColsClass handles the 3 vs 4 column switch on desktop.
        */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-8 justify-center`}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Box({ title, description }) {
  return (
    <div className="border border-orange-200 hover:border-orange-400 transition-colors duration-300 rounded-2xl px-6 py-10 text-center flex flex-col h-full bg-orange-50/10">
      <h4
        className="text-lg font-bold text-gray-900 mb-4"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <p
        className="text-sm text-gray-600 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
