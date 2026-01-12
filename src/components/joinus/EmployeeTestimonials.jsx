"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";

const testimonials = [
  {
    name: "Rajendra Kadu",
    image: "/assets/images/join-us/teams/rajendra.jpeg",
    text:
      "LA is making a Positive Impact. Here they care about their people. Across LA Technologies, from operations to our support functions we focus on making a positive impact to our customers by working collectively to provide meaningful and action-oriented solutions.",
  },
  {
    name: "Rohini Kalambe",
    image: "/assets/images/join-us/teams/rohini.jpeg",
    text:
      "LA Technologies has transparent leadership and great benefits. Leadership and managers are very transparent and approachable. Working in the diversity and equity domain gives me great satisfaction. I get to do what I believe in. I’m proud to be part of the LA family.",
  },
  {
    name: "Irfan Khan",
    image: "/assets/images/join-us/teams/irfan.jpeg",
    text:
      "I am proud to say I work at LA Technologies. The company truly values its employees and enables us to grow and feel passionate about our careers. Great learning experience.",
  },
  {
    name: "Shubham",
    image: "/assets/images/join-us/teams/shubham.jpeg",
    text:
      "When I first joined LA Technologies as a recent graduate, I was looking for a platform where I could engage in meaningful work and grow along the way.",
  },
  {
    name: "Jerry Jacob",
    image: "/assets/images/join-us/teams/jerry.jpg",
    text:
      "One of the things I enjoy most about working here is the teamwork. Even on hectic days, we pull together where needed.",
  },
  {
    name: "Imran Khan",
    image: "/assets/images/join-us/teams/imran.jpeg",
    text:
      "Working at LA is a wonderful experience. My team is filled with lovely people and we have great benefits.",
  },
  {
    name: "Shreya Chaurasia",
    image: "/assets/images/join-us/teams/shreya.jpeg",
    text:
      "The workplace and culture is fantastic. I’ve had opportunities to grow and take on more responsibility.",
  },
  {
    name: "Avinash Bamanale",
    image: "/assets/images/join-us/teams/avinash.jpeg",
    text:
      "I was surprised at how quickly I felt comfortable here. The team is welcoming, supportive, and collaborative.",
  },
  {
    name: "Shravani Adsul",
    image: "/assets/images/join-us/teams/shravani.jpeg",
    text:
      "LA Technologies welcomed me with open arms and empowered me to share my perspective and make a difference.",
  },
  {
    name: "Aaditya Avasthi",
    image: "/assets/images/join-us/teams/aaditya.jpg",
    text:
      "Joining LA has been one of the most rewarding decisions of my career. I’m encouraged to innovate and grow.",
  },
  {
    name: "Jyoti Maurya",
    image: "/assets/images/join-us/teams/jyoti.jpeg",
    text:
      "I appreciate the proactive approach to security and the strong culture of collaboration and learning.",
  },
];

export default function EmployeeTestimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          slidesPerView="auto"
          grabCursor
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="!w-[420px]">
              <div className="bg-[#FFF4E8] rounded-2xl p-6 shadow-sm relative flex gap-6 min-h-[260px]">

                {/* Quote Icon */}
                <span className="absolute top-4 right-5 text-7xl text-orange-100 leading-none">
                  “
                </span>

                {/* LEFT: IMAGE + NAME */}
                <div className="flex flex-col items-center min-w-[110px]">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-full object-cover object-top"
                    />
                  </div>

                  <p className="mt-3 text-sm font-semibold text-black text-center leading-tight">
                    {item.name.split(" ")[0]} <br />
                    {item.name.split(" ").slice(1).join(" ")}
                  </p>
                </div>

                {/* RIGHT: TEXT */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  “{item.text}”
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
