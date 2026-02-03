"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonialsData = {
  heading:
    "What our clients have to say about the services we provide at LA Technologies",
  items: [
    {
      id: 1,
      quote:
        "Our partnership with LA Technologies has transformed the way we approach cybersecurity. Their SOC operations deliver real-time threat intelligence and actionable insights, enabling us to operate with confidence. Their professionalism and reliability make them an invaluable partner.",
      name: "Hemant Sudhakar Marathe",
      designation: "CISO",
      company: "Thane Bharat Bank",
      image: "/assets/images/clients/hemant.png",
    },
    {
      id: 2,
      quote:
        "As our digital landscape continues to grow in scale and complexity, achieving unified visibility, stronger control, and operational resilience across our security environment has become a strategic necessity. LA Technologies has been an exceptional partner in this journey, bringing a level of expertise, discipline, and commitment that stands out.",
      name: "Meheriar Patel",
      designation: "GCTO & Director IT",
      company: "Master Group",
      image: "/assets/images/clients/meheriar.png",
    },
    {
      id: 3,
      quote:
        "With the growing sophistication of cyber adversaries and the increasing exposure of financial institutions on the dark web, enhancing our threat intelligence capabilities became a strategic priority for NKGSB. LA Technologies has been an exceptional partner in this effort, delivering a comprehensive Dark Web Monitoring and Threat Intelligence framework.",
      name: "Kiran R.",
      designation: "CISO",
      company: "NKGSB Bank",
      image: "/assets/images/clients/kiran.png",
    },
    {
      id: 4,
      quote:
        "LA Technologies is a powerhouse strategic security partner that has seamlessly integrated architectural vision and operational rigor into C5i’s IT and security practices. Their ability to deliver high-precision security enhancements that align with our business growth has significantly elevated our organizational resilience and cybersecurity maturity.",
      name: "Sanjay Chandiramani",
      designation: "Head – Information Technology",
      company: "C5i",
      image: "/assets/images/clients/sanjay.png",
    },
    {
      id: 5,
      quote:
        "LA Technologies has been a reliable and highly competent technology partner for us. Their seamless deployment of servers and implementation of Kaspersky endpoint security significantly strengthened our infrastructure and security posture. The team worked with professionalism, precision, and a strong customer‑first approach.",
      name: "Asim Shaikh",
      designation: "Head - IT & InfoSec",
      company: "Athena BPO Pvt. Ltd",
      image: "/assets/images/clients/asim.png",
    },
    {
      id: 6,
      quote:
        "Partnering with LA Technologies for our SOC operations has been a strategic advantage. Their proactive monitoring and rapid incident response have strengthened our security posture significantly. The team’s professionalism and deep expertise give us complete confidence in our ability to mitigate risks in real time",
      name: "Jayesh Acharya",
      designation: "Head - IT",
      company: "Athena BPO Pvt. Ltd",
      image: "/assets/images/clients/jayesh.jpg",
    },
  ],
};

export default function TestimonialsSection({ heading }) {
  return (
    <section className="bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">
        {/* Heading */}
        <h2 className="text-center text-xl lg:text-3xl font-semibold text-gray-900 mb-10">
          {heading}
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
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
                <p className="text-gray-700 text-sm leading-relaxed text-justify mb-6">
                  “{item.quote}”
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-18 h-18 rounded-full object-cover object-top flex-shrink-0"
                  />

                  <div className="leading-tight">
                    <p className="font-semibold text-gray-900 text-sm">
                      {item.name}
                    </p>

                    <p className="text-xs text-gray-600">{item.designation}</p>

                    <p className="text-xs font-medium text-red-500">
                      {item.company}
                    </p>
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
