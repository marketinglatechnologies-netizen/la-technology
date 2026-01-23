// "use client";

// import Marquee from "react-fast-marquee";
// import Link from "next/link";

// export default function VendorLogo() {
//   return (
//     <section className="py-16">
//       <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">
//         {/* Header */}
//         <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10">
//           <div>
//             <h2 className="text-xl lg:text-2xl font-semibold text-gray-900">
//               Our Vendors-Powered by leading technology partners
//             </h2>
//             <p className="text-sm text-gray-600 mt-2">
//               Trusted global vendors enabling secure and scalable IT solutions
//             </p>
//           </div>

//           <Link href="/contact">
//             <button
//               className="inline-flex items-center gap-2
//                bg-gradient-to-r from-[#E11D48] to-[#F97316]
//                text-white text-sm px-5 py-2.5 rounded-lg"
//             >
//               <img
//                 src="/assets/images/home/phone2.svg"
//                 alt="Phone"
//                 className="w-4 h-4"
//               />
//               <span>Talk to an Expert</span>
//             </button>
//           </Link>
//         </div>
//       </div>
//       {/* Marquee */}
//       <Marquee speed={100} gradient={false}>
//         {[
//           "/assets/images/home/opswat.png",
//           "/assets/images/home/fortinet.png",
//           "/assets/images/home/solarwinds.png",
//           "/assets/images/home/txone.png",
//           "/assets/images/home/netskope.png",
//           "/assets/images/home/varonis.png",
//           "/assets/images/home/opswat.png",
//           "/assets/images/home/fortinet.png",
//           "/assets/images/home/solarwinds.png",
//           "/assets/images/home/txone.png",
//           "/assets/images/home/netskope.png",
//           "/assets/images/home/varonis.png",
//         ].map((logo, i) => (
//           <div key={i} className="mx-6 flex items-center">
//             <img
//               src={logo}
//               alt="Vendor logo"
//               className="h-15 w-auto object-contain"
//             />
//           </div>
//         ))}
//       </Marquee>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const VENDOR_LOGOS = [
  "/assets/images/home/opswat.png",
  "/assets/images/home/fortinet.png",
  "/assets/images/home/solarwinds.png",
  "/assets/images/home/txone.png",
  "/assets/images/home/netskope.png",
  "/assets/images/home/varonis.png",
  "/assets/images/home/kaspersky.png",
    "/assets/images/home/juniper.png",
  "/assets/images/home/indusface.png",
  "/assets/images/home/wiz.png",
  "/assets/images/home/aruba.png",
  "/assets/images/home/riverbed.png",
];

export default function VendorLogo() {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-900">
              Our Vendors – Powered by leading technology partners
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Trusted global vendors enabling secure and scalable IT solutions
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2
                       bg-gradient-to-r from-[#E11D48] to-[#F97316]
                       text-white text-sm px-5 py-2.5 rounded-lg"
          >
            <img
              src="/assets/images/home/phone2.svg"
              alt="Phone"
              className="w-4 h-4"
            />
            <span>Talk to an Expert</span>
          </Link>
        </div>
      </div>

      {/* Vendor Slider */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 40 },
          1024: { slidesPerView: 5, spaceBetween: 60 },
        }}
        className="vendor-swiper"
      >
        {[...VENDOR_LOGOS, ...VENDOR_LOGOS].map((logo, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={logo}
              alt="Vendor logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .vendor-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}
