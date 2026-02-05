"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// Swiper styles
import "swiper/css";

const CLIENT_LOGOS = [
  { name: "Yes Bank", src: "/assets/images/clients/yes-bank.png" },
  { name: "UTI", src: "/assets/images/clients/UTI.png" },
  { name: "Aditya Birla", src: "/assets/images/clients/ABC.png" },
  { name: "Trent", src: "/assets/images/clients/trent.png" },
  { name: "Kotak", src: "/assets/images/clients/kotak.png" },
  { name: "Tata AIG", src: "/assets/images/clients/TATA-AIG.png" },
];

export default function LogoSlider() {
  return (
    <section className="py-12 bg-white border-b border-gray-50">
      <div className="max-w-full mx-auto px-4 md:px-0">
        <h3 className="text-center text-[#302123] text-[30px] font-[700] tracking-[2%] mb-10 font-montserrat">
          Trusted by Clients
        </h3>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          loop
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 40 },
            1024: { slidesPerView: 5, spaceBetween: 50 },
          }}
          className="logo-swiper"
        >
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              {/* Fixed-size container prevents CLS */}
              <div className="relative w-[160px] h-[64px]">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .logo-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}
