import Link from "next/link";

export default function HomeCaseStudiesSection({ caseStudies = [] }) {
  if (!caseStudies.length) return null;

  return (
    <section className="bg-[#FFF7EB] py-20">
      <div className="max-w-7xl mx-auto bg-white lg:px-6 md:px-6 px-4 py-16">

        <h2 className="text-center text-2xl lg:text-3xl font-semibold text-gray-900 mb-12">
          Case Studies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudies.map((item) => (
            <Link
              key={item._id}
              href={`insights/csr/${item.slug}`}
              className="group block"
            >
              <div
                className="relative overflow-hidden rounded-2xl
                w-full lg:h-[360px] mx-auto"
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* TEXT OVERLAY */}
                <div className="absolute bottom-5 w-full bg-black/30 backdrop-blur-sm px-4 py-3">
                  <p className="text-white text-sm font-semibold leading-snug line-clamp-2 text-center">
                    {item.title}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
