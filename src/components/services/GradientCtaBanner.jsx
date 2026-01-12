"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function GradientCtaBanner({
  text,
  buttonText = "Contact Us Today",
  iconSrc = "/assets/images/home/plane.png",
}) {
  const router = useRouter();

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6
          rounded-2xl px-8 py-8
          bg-gradient-to-r from-red-500 to-orange-500"
        >
          {/* Left Text */}
          <p
            className="text-white text-lg md:text-lg font-semibold text-center md:text-left uppercase font-montserrat"
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>

          {/* Button */}
          <button
            onClick={() => router.push("/contact")}
            className="inline-flex items-center gap-2 bg-white text-orange-500
              px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            {/* <Image src={iconSrc} alt="Contact" width={18} height={18} /> */}
            <img src={iconSrc} alt="Phone" className="w-4 h-4" />
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
