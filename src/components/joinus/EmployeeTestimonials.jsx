"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";

const testimonials = [
  {
    name: "Rajendra Kadu",
    designation: "Senior Account Executive",
    image: "/assets/images/join-us/team/rajendra.jpeg",
    text: "LA is making a Positive Impact. Here they care about their people. Across LA Technologies, from operations to our support functions we focus on making a positive impact to our customers by working collectively to provide meaningful and action-oriented solutions.",
  },
  {
    name: "Rohini Kalambe",
    designation: "Junior Account Executive",
    image: "/assets/images/join-us/team/rohini.jpeg",
    text: "LA Technologies has transparent leadership and great benefits. Leadership and managers are very transparent and approachable. Working in the diversity and equity domain gives me great satisfaction. I get to do what I believe in. I’m proud to be part of the LA family.",
  },
  {
    name: "Irfan Khan",
    designation: "Pre Sales Network Security",
    image: "/assets/images/join-us/team/irfan.jpeg",
    text: "I am proud to say I work at LA Technologies. The company truly values its employees and enables us to grow and feel passionate about our careers. Great learning experience.",
  },
  {
    name: "Shubham",
    designation: "Trainee Engineer- NOC",
    image: "/assets/images/join-us/team/shubham.jpeg",
    text: "When I first joined LA Technologies as a recent graduate, I was looking for a platform where I could engage in meaningful work and grow along the way.",
  },
  {
    name: "Jerry Jacob",
    designation: "Digital Marketing Executive",
    image: "/assets/images/join-us/team/jerry.jpg",
    text: "One of the things I enjoy most about working here is the teamwork. Even on hectic days, we pull together where needed.",
  },
  {
    name: "Imran Khan",
    designation: "Talent Acquisition Manager",
    image: "/assets/images/join-us/team/imran.jpeg",
    text: "Working at LA is a wonderful experience. My team is filled with lovely people and we have great benefits.",
  },
  {
    name: "Shreya Chaurasia",
    designation: "Sales Executive",
    image: "/assets/images/join-us/team/shreya.jpeg",
    text: "The workplace and culture is fantastic. I’ve had opportunities to grow and take on more responsibility.",
  },
  {
    name: "Avinash Bamanale",
    designation: "Regional Manager Enterprise Business",
    image: "/assets/images/join-us/team/avinash.jpeg",
    text: "I was surprised at how quickly I felt comfortable here. The team is welcoming, supportive, and collaborative.",
  },
  {
    name: "Shravani Adsul",
    designation: "Helpdesk Engineer",
    image: "/assets/images/join-us/team/shravani.jpeg",
    text: "LA Technologies welcomed me with open arms and empowered me to share my perspective and make a difference.",
  },
  {
    name: "Aaditya Avasthi",
    designation: "Team Lead- SOC",
    image: "/assets/images/join-us/team/aaditya.jpg",
    text: "Joining LA has been one of the most rewarding decisions of my career. I’m encouraged to innovate and grow.",
  },
  {
    name: "Jyoti Maurya",
    designation: "Security Engineer",
    image: "/assets/images/join-us/team/jyoti.jpeg",
    text: "I appreciate the proactive approach to security and the strong culture of collaboration and learning.",
  },
];

export default function EmployeeTestimonials() {
  return (
   <section className="py-12 sm:py-14 md:py-20 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      slidesPerView="auto"
      spaceBetween={16}
      grabCursor
    >
      {testimonials.map((item, index) => (
        <SwiperSlide
          key={index}
          className="!w-[90%] sm:!w-[420px] md:!w-[520px] lg:!w-[560px]"
        >
          <div className="
            relative flex flex-col sm:flex-row
            gap-5 sm:gap-6
            items-center sm:items-start
            bg-gradient-to-r from-[#FFF4E8] to-[#FFF9F2]
            rounded-2xl shadow-md
            p-5 sm:p-6
          ">
            {/* Quote Icon */}
            <span className="absolute top-3 right-4 sm:top-4 sm:right-6 text-[56px] sm:text-[80px] text-orange-100 leading-none">
              “
            </span>

            {/* LEFT: IMAGE + NAME */}
            <div className="flex flex-col items-center min-w-0 sm:min-w-[160px]">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white flex items-center justify-center shadow overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <p className="mt-3 sm:mt-4 text-sm sm:text-base font-bold text-black text-center leading-tight">
                {item.name}
              </p>

              <p className="mt-1 text-xs text-red-500 font-medium text-center">
                {item.designation}
              </p>
            </div>

            {/* RIGHT: TEXT */}
            <p className="
              text-gray-700 text-sm leading-relaxed
              text-center sm:text-left
              max-w-full sm:max-w-[300px] md:max-w-[320px]
            ">
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
