"use client";

import Marquee from "react-fast-marquee";

export default function VendorLogo() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-900">
              Our Vendors-Powered by leading technology partners
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Trusted global vendors enabling secure and scalable IT solutions
            </p>
          </div>

          <button
            className="inline-flex items-center gap-2
                             bg-gradient-to-r from-[#E11D48] to-[#F97316]
                             text-white text-sm px-5 py-2.5 rounded-lg"
          >
            <img
              src="/assets/images/home/phone2.svg"
              alt="Phone"
              className="w-4 h-4"
            />
            <span> Talk to an Expert</span>
          </button>
        </div>
      </div>
      {/* Marquee */}
      <Marquee speed={60} pauseOnHover gradient={false}>
        {[
          "/assets/images/home/opswat.png",
          "/assets/images/home/fortinet.png",
          "/assets/images/home/solarwinds.png",
          "/assets/images/home/txone.png",
          "/assets/images/home/netskope.png",
          "/assets/images/home/varonis.png",
        ].map((logo, i) => (
          <div key={i} className="mx-10 flex items-center">
            <img
              src={logo}
              alt="Vendor logo"
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
