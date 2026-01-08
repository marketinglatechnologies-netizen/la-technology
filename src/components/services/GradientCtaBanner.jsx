"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function GradientCtaBanner({ text }) {
  const router = useRouter();
  

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6
          rounded-2xl px-8 py-8
          bg-gradient-to-r from-red-500 to-orange-500"
        >
          {/* Left Text */}
          <p className="text-white text-lg md:text-xl font-semibold text-center md:text-left uppercase">
            {text}
          </p>

          {/* Button */}
          <button
            onClick={() => router.push("/contact")}
            className="inline-flex items-center gap-2 bg-white text-orange-500
              px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            <Image
              src="/assets/images/home/plane.png"
              alt="Contact"
              width={18}
              height={18}
            />
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
