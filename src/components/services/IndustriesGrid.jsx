"use client";

import Image from "next/image";

export default function IndustriesGrid({ title, industries }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-2xl font-semibold mb-12">
          {title}
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {industries.map((item, index) => {
            const isLastRowCentered =
              industries.length % 3 === 2 &&
              index >= industries.length - 2;

            return (
              <div
                key={index}
                className={`flex justify-center ${
                  isLastRowCentered ? "lg:col-span-1" : ""
                }`}
              >
                <div className="relative w-[280px] h-[360px] rounded-2xl overflow-hidden">

                  {/* IMAGE */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  {/* LABEL */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-2 rounded-md text-sm font-medium text-center">
                    {item.title}
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
