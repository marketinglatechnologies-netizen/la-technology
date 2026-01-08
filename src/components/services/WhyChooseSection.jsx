"use client";

import Image from "next/image";

export default function WhyChooseSection({
  heading,
  centerImage,
  featuresLeft = [],
  featuresRight = [],
}) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-2xl md:text-3xl text-center text-gray-900 mb-16 font-semibold">
          {heading}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* Left Features */}
          <div className="space-y-20">
            {featuresLeft.map((item, idx) => (
              <Feature
                key={idx}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <div className="relative w-[300px] h-[420px] rounded-2xl overflow-hidden">
              <Image
                src={centerImage}
                alt="Why choosee"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-20">
            {featuresRight.map((item, idx) => (
              <Feature
                key={idx}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
   <div className="flex gap-4 items-start">
  <div className="w-14 h-14 relative flex items-center justify-center shrink-0">
    <Image
      src={icon}
      alt={title}
      fill
      className="object-contain"
    />
  </div>

  <div>
    <h4 className="text-base text-gray-900 mb-1">{title}</h4>
    <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
  </div>
</div>


  );
}
