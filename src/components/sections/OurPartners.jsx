"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const partners = [
  "opswat",
  "fortinet",
  "solarwinds",
  "txone",
  "netskope",
  "varonus",
  "sentinelones",
  "sophos",
  "kasperky",
  "juniper",
  "indusface",
  "wiz",
  "hpearuba",
  "riverbed",
];

export default function TechnologyPartnersCarousel() {
  return (
    <section className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-3xl font-semibold text-gray-900 mb-12">
          Our Technology Partners
        </h2>

        {/* CAROUSEL */}
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          spaceBetween={60}
          slidesPerView={6}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {partners.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-16">
                <Image
                  src={`/assets/images/about-us/${logo}.png`}
                  alt={logo}
                  width={140}
                  height={60}
                  className="object-contain opacity-90 hover:opacity-100 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
