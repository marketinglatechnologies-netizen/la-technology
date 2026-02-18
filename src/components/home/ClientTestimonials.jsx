// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function ClientTestimonial({ testimonials = [] }) {
//   if (!testimonials.length) return null;

//   return (
//     <section className="relative py-24 bg-[#F8F9FC] overflow-hidden">

//       <div className="max-w-6xl mx-auto px-6 relative">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <p className="text-orange-500 text-sm tracking-[3px] font-semibold">
//             TESTIMONIALS
//           </p>
//           <h2 className="text-4xl font-bold text-[#1E1B4B] mt-3">
//             Trusted by Clients
//           </h2>
//         </div>

//         <div className="relative">

//           <Swiper
//             modules={[Navigation, Autoplay]}
//             navigation={{
//               nextEl: ".next-btn",
//               prevEl: ".prev-btn",
//             }}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             speed={900}
//             className="rounded-3xl"
//           >
//             {testimonials.map((item) => (
//               <SwiperSlide key={item._id}>
//                 <div className="bg-white rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">

//                   {/* Left Section (Optional Image Block) */}
//                   <div className="md:w-1/2 bg-orange-50 flex items-center justify-center p-12">
//                     <h3 className="text-orange-500 text-2xl font-bold text-center">
//                       {item.companyName}
//                     </h3>
//                   </div>

//                   {/* Right Content */}
//                   <div className="md:w-1/2 p-12 flex flex-col justify-center">
//                     <p className="text-gray-600 leading-relaxed mb-8">
//                       “{item.quote}”
//                     </p>

//                     <div className="flex items-center gap-4">
//                       {item.avatar && (
//                         <img
//                           src={item.avatar}
//                           alt={item.personName}
//                           className="w-12 h-12 rounded-full object-cover"
//                         />
//                       )}

//                       <div>
//                         <p className="font-semibold text-[#1E1B4B]">
//                           {item.personName}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           {item.personTitle}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Navigation Buttons */}
//           <button className="prev-btn absolute -left-8 top-1/2 -translate-y-1/2 bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition z-10">
//             <ChevronLeft size={20} />
//           </button>

//           <button className="next-btn absolute -right-8 top-1/2 -translate-y-1/2 bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition z-10">
//             <ChevronRight size={20} />
//           </button>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PageWrapper from "../services/PageWrapper";

export default function TestimonialsGridSection({ items = [], heading }) {
  if (!items.length) return null;

  return (
    <PageWrapper>
      <section className="bg-white py-24 relative overflow-hidden">
        {/* Top Right Decorative */}
        <img
          src="/assets/images/clients/dots.png"
          alt=""
          className="absolute -top-10 -right-10 w-[600px] pointer-events-none"
        />

        {/* Bottom Left Decorative */}
        <img
          src="/assets/images/clients/dots.png"
          alt=""
          className="absolute -bottom-10 -left-10 w-[500px] pointer-events-none rotate-180"
        />
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-14">
            <p className="text-orange-500 font-semibold text-xl tracking-widest uppercase mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl font-bold text-gray-900">{heading}</h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              autoplay={{ delay: 4000 }}
              spaceBetween={30}
              slidesPerView={1}
              className="relative"
            >
              {items.map((item) => (
                <SwiperSlide key={item._id}>
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch">
                    {/* Left Image */}
                    <div className="md:w-1/2 h-[500px]">
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          alt={item.personName}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    {/* Right Content */}
                    <div className="md:w-1/2 p-10 flex flex-col justify-center">
                      <h3 className="text-orange-500 text-2xl font-bold mb-4">
                        {item.personName}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-8">
                        {item.quote}
                      </p>

                      <div className="flex items-center gap-4">
                        {item.imageUrl && (
                          <img
                            src={item.imageUrl}
                            alt={item.personName}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        )}

                        <div>
                          <p className="font-semibold text-gray-900">
                            {item.personName}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.personTitle}
                          </p>
                          <p className="text-sm text-red-500">
                            {item.companyName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Arrows Outside */}
            <div className="custom-prev absolute -left-20 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition">
                &#10094;
              </div>
            </div>

            <div className="custom-next absolute -right-20 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition">
                &#10095;
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
