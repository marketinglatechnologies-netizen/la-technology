"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonialsData = {
  heading:
    "What our clients have to say about the services we provide at LA Technologies",
  items: [
    // {
    //   id: 1,
    //   quote:
    //     "LA Technologies has transparent leadership and great benefits! Leadership and managers are very transparent and approachable. Working in the diversity and equity domain gives me great satisfaction. I get to do what I believe in. I'm proud to be part of the LA family",
    //   name: "Rajendra Naidu",
    //   designation: "CEO, Founder",
    //   image: "/assets/images/home/rajendra1.png",
    // },
    {
      id: 2,
      quote:
        "LA Technologies has transparent leadership and great benefits! Leadership and managers are very transparent and approachable. Working in the diversity and equity domain gives me great satisfaction. I get to do what I believe in. I'm proud to be part of the LA family",
      name: "Rajendra Naidu",
      designation: "CEO, Founder",
      image: "/assets/images/home/rajendra2.png",
    },
    // {
    //   id: 3,
    //   quote:
    //     "LA Technologies has transparent leadership and great benefits! Leadership and managers are very transparent and approachable. Working in the diversity and equity domain gives me great satisfaction. I get to do what I believe in. I'm proud to be part of the LA family",
    //   name: "Rajendra Naidu",
    //   designation: "CEO, Founder",
    //   image: "/assets/images/home/rajendra1.png",
    // },
    {
      id: 4,
      quote:
        "LA Technologies has transparent leadership and great benefits! Leadership and managers are very transparent and approachable. Working in the diversity and equity domain gives me great satisfaction. I get to do what I believe in. I'm proud to be part of the LA family",
      name: "Rajendra Naidu",
      designation: "CEO, Founder",
      image: "/assets/images/home/rajendra2.png",
    },
    // {
    //   id: 5,
    //   quote:
    //     "LA Technologies has transparent leadership and great benefits! Leadership and managers are very transparent and approachable. Working in the diversity and equity domain gives me great satisfaction. I get to do what I believe in. I'm proud to be part of the LA family",
    //   name: "Rajendra Naidu",
    //   designation: "CEO, Founder",
    //   image: "/assets/images/home/rajendra1.png",
    // },
    {
      id: 6,
      quote:
        "LA Technologies has transparent leadership and great benefits! Leadership and managers are very transparent and approachable. Working in the diversity and equity domain gives me great satisfaction. I get to do what I believe in. I'm proud to be part of the LA family",
      name: "Rajendra Naidu",
      designation: "CEO, Founder",
      image: "/assets/images/home/rajendra2.png",
    },
  ],
};

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">
        {/* Heading */}
        <h2 className="text-center text-xl lg:text-2xl font-semibold text-gray-900 mb-14">
          {testimonialsData.heading}
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={false}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          style={{ padding: "40px 0px" }}
        >
          {testimonialsData.items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#FFF3E0] rounded-2xl p-8 shadow-xl h-full flex flex-col">
                {/* Quote */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  “{item.quote}”
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-15 h-15 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-600">{item.designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
