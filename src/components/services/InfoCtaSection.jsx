"use client";

import { useRouter } from "next/navigation";
import { Phone } from "lucide-react";

export default function InfoCtaSection({ title, description }) {
  const router = useRouter();

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
        
        <h2 className="text-2xl md:text-3xl text-gray-900">
          {title}
        </h2>

        <p className="text-gray-600 text-base leading-relaxed">
          {description}
        </p>

        <div className="pt-4">
          <button
            onClick={() => router.push("/contact")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white bg-gradient-to-r from-red-500 to-orange-500 hover:opacity-90 transition"
          >
            <Phone size={18} />
            Talk to an Expert
          </button>
        </div>

      </div>
    </section>
  );
}
