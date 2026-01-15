"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function HomeHero({ slides }) {
  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Background Layer: Video or Image */}
            <div className="absolute inset-0 z-0">
              {slide.type === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-[5000ms] scale-110 group-[.swiper-slide-active]:scale-100"
                  style={{ backgroundImage: `url(${slide.src})` }}
                />
              )}
              {/* Brand Overlay - Adjusted to match mockup darkness */}
              <div className="absolute inset-0 bg-black/60 md:bg-black/60 bg-gradient-to-r from-black/10 via-black/20 to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-6 lg:px-6 md:px-6 px-4 flex flex-col justify-center">
              <div className="max-w-3xl">
                {/* Dynamic SEO Tags */}
                <slide.titleTag
                  className={`text-3xl md:text-5xl lg:text-4xl font-bold text-white leading-[1.5] mb-6 ${
                    slide.titleClassName || ""
                  }`}
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />

                <slide.descTag
                  className={`text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl ${
                    slide.descClassName || ""
                  }`}
                  dangerouslySetInnerHTML={{ __html: slide.description }}
                />

                {/* Mockup Button */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-la-gradient text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
                >
                  <PhoneCall size={22} />
                  Get in Touch
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom CSS for Swiper Navigation Arrows to match brand */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          transform: scale(0.7);
          opacity: 0.5;
          transition: opacity 0.3s;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          opacity: 1;
        }
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
