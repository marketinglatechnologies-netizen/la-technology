import InnerPageBanner from "@/components/layout/InnerPageBanner";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

export default function ContactPage() {
  return (
    <main>
      <InnerPageBanner
        bgImage="/assets/images/contact/contact.png"
        title="We'd Love to Hear from You"
        titleTag="h1"
        description={`We’re here to help you with secure, scalable, and <br>  reliable technology solutions. `}
      />
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT INFO CARD */}
            <div className="bg-[#FFF4E6] rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">
                Get in Touch, We're Here
                <br />
                to Help
              </h2>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm">
                  <span className="text-orange-500">
                    <img src="/assets/images/home/call.svg" />
                  </span>
                  <span className="text-sm font-medium">+91 022 6182 8400</span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm">
                  <span className="text-orange-500">
                    <img src="/assets/images/home/letter.svg" />
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

              <div className="mt-6">
                <div className="flex items-center gap-2 text-orange-500 text-sm">
                  ★ ★ ★ ★ ☆
                  <span className="text-black font-medium ml-1">4.2</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">104 Google reviews</p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
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
                    placeholder="Enter your message..."
                    className="w-full mt-2 px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="mt-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-md flex items-center gap-2 text-sm font-medium hover:opacity-90 transition"
                  >
                    <span>
                      <img src="/assets/images/home/send.svg" />
                    </span>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-center text-xl md:text-2xl font-semibold mb-8">
            How to reach our location
          </h2>

          {/* Map Container */}
          <div className="w-full overflow-hidden rounded-2xl shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1169.7851973705672!2d72.86969356962521!3d19.072172766371875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90cb9faca23%3A0xa53ec9af9e0f4037!2sL%20A%20Technologies%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1767612479203!5m2!1sen!2sin"
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
