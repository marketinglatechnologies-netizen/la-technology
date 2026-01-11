"use client"; // Required for hooks in Next.js App Router

import InnerPageBanner from "@/components/layout/InnerPageBanner";
import { useEffect, useState } from "react";
import { CheckCircle, AlertCircle, X } from "lucide-react";

// Metadata must be in a separate layout.js or a Server Component.
// You cannot export metadata from a file with "use client".
// If you need titles, use <title> in the return or a separate layout.

export default function ContactPage() {
  // 1. Move States inside the component
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
    captchaInput: "",
  });
  const [captcha, setCaptcha] = useState({ q: "", a: null });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle");

  // 2. Generate new math question
  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ q: `${n1} + ${n2}`, a: n1 + n2 });
  };

  // 3. Move useEffect inside the component
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parseInt(formData.captchaInput) !== captcha.a) {
      // alert("Captcha is incorrect!");
      setStatus("error-captcha");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Success! Check your email.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          message: "",
          captchaInput: "",
        });
        generateCaptcha();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission error", err);
      setStatus("error");
    } finally {
      //setIsSubmitting(false);
    }
  };

  return (
    <main>
      <InnerPageBanner
        bgImage="/assets/images/contact/contact.png"
        title="We'd Love to Hear from You"
        titleTag="h1"
        description={`We’re here to help you with secure, scalable, and <br> reliable technology solutions.`}
      />

      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT INFO CARD */}
            <div className="bg-[#FFF4E6] rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">
                Get in Touch, We're Here to Help
              </h2>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm">
                  <span className="text-orange-500">
                    <img src="/assets/images/home/call.svg" alt="call" />
                  </span>
                  <span className="text-sm font-medium">+91 022 6182 8400</span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm">
                  <span className="text-orange-500">
                    <img src="/assets/images/home/letter.svg" alt="email" />
                  </span>
                  <span className="text-sm font-medium">
                    sales@la-technologiesindia.com
                  </span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-start gap-3 shadow-sm">
                  <span className="flex-none w-8 h-8 mt-1">
                    <img
                      src="/assets/images/home/location.svg"
                      alt="Location"
                      className="w-8 h-8 object-contain"
                    />
                  </span>
                  <span className="text-sm font-medium leading-relaxed">
                    101B, Pinnacle Corporate Park B Wing, First Floor, CTS 4207,
                    Pant Nagar Kurla Complex, East, Mumbai, Maharashtra 400098
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div>
              {/* BEAUTIFUL STATUS NOTIFICATIONS */}
              {status === "success" && (
                <div className="mb-6 flex items-center gap-3 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl animate-in fade-in slide-in-from-top-4 duration-300">
                  <CheckCircle className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">Message Sent!</p>
                    <p className="text-sm">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                  <button onClick={() => setStatus("idle")} className="ml-auto">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 flex items-center gap-3 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl animate-in fade-in duration-300">
                  <AlertCircle className="w-5 h-5" />
                  <p className="text-sm font-semibold">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}

              {status === "error-captcha" && (
                <div className="mb-6 flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 text-amber-700 rounded-xl animate-in shake duration-300">
                  <AlertCircle className="w-5 h-5" />
                  <p className="text-sm font-semibold">
                    Captcha is incorrect. Please solve again.
                  </p>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <div>
                  <label className="text-sm font-medium">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    placeholder="Enter your first name..."
                    className="w-full mt-2 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    placeholder="Enter your last name..."
                    className="w-full mt-2 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Enter your email id..."
                    className="w-full mt-2 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Mobile Enter<span className="text-red-500">*</span>
                  </label>
                  <div className="flex mt-2">
                    <span className="px-3 flex items-center border border-r-0 rounded-l-md text-sm bg-gray-100">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) =>
                        setFormData({ ...formData, mobile: e.target.value })
                      }
                      placeholder="Enter mobile number"
                      className="w-full px-4 py-2 border rounded-r-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium">
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Enter your message..."
                    className="w-full mt-2 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  ></textarea>
                </div>

                {/* CAPTCHA */}
                <div className="md:col-span-2 flex items-center gap-4 bg-orange-50 p-3 rounded-md border border-orange-100">
                  <label className="text-sm font-bold text-gray-700">
                    Solve: {captcha.q} =
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.captchaInput}
                    onChange={(e) =>
                      setFormData({ ...formData, captchaInput: e.target.value })
                    }
                    className="w-20 px-2 py-1 border rounded focus:ring-orange-400 outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-md flex items-center justify-center gap-3 text-sm font-medium hover:opacity-90 transition disabled:cursor-not-allowed w-full md:w-auto"
                  >
                    {status === "submitting" ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <img
                          src="/assets/images/home/send.svg"
                          alt="send"
                          className="w-4 h-4"
                        />
                        Submit Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto lg:px-6 md:px-6 px-4">
          <h2 className="text-center text-xl md:text-2xl font-semibold mb-8">
            How to reach our location
          </h2>
          <div className="w-full overflow-hidden rounded-2xl shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1169.7851973705672!2d72.86969356962521!3d19.072172766371875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90cb9faca23%3A0xa53ec9af9e0f4037!2sL%20A%20Technologies%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1767612479203!5m2!1sen!2sin" // Replace with actual embed URL
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
