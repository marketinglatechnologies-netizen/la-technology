import InnerPageBanner from "@/components/layout/InnerPageBanner";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

export default function AboutPage() {
  return (
    <main>
      <InnerPageBanner
        bgImage="/assets/images/global/gloablpresence-banner.jpg"
        title="A Worldwide Network of Innovation"
        titleTag="h1"
        description={`From Asia to the Middle East, LA Technologies delivers cutting-edge cybersecurity and IT solutions wherever businesses grow.`}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* LEFT – IMAGES */}
            {/* LEFT – IMAGES */}
            <div className="grid grid-cols-2 gap-6">
              {/* BIG IMAGE – CENTERED & REDUCED */}
              <div className="col-span-1 row-span-2 flex items-center justify-center">
                <div className="rounded-2xl overflow-hidden h-[320px] w-full">
                  <img
                    src="/assets/images/careers/global-1.jpg"
                    alt="Global security operations"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* RIGHT STACK */}
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl overflow-hidden h-[180px]">
                  <img
                    src="/assets/images/global/global-presence-empowering-2.jpg"
                    alt="Cyber infrastructure"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="rounded-2xl overflow-hidden h-[180px]">
                  <img
                    src="/assets/images/global/global-presence-empowering-3.jpg"
                    alt="Secure data center"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT – CONTENT */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Empowering businesses worldwide.
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                LA Technologies is proud to have a strong global footprint,
                enabling us to deliver cutting-edge IT and OT security solutions
                to enterprises worldwide.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                With offices strategically located across Asia and the Middle
                East, we ensure localized support combined with global expertise
                to meet the evolving needs of our clients.
              </p>

              <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <img
            src="/assets/images/careers/map.jpg"
            alt="LA Tech Global Presence"
            className="w-full max-w-6xl object-contain"
          />
        </div>
      </section>
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <h2 className="text-center text-lg md:text-xl font-medium text-black mb-8">
            Explore our global offices and discover how LA Technologies is
            empowering businesses across regions.
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* SINGAPORE */}
            <OfficeCard
              country="SINGAPORE"
              company="LA TECHNOLOGIES PTE. LTD."
              address={[
                "10 UBI CRESCENT, #02-38, UBI",
                "TECHPARK, SINGAPORE 408564",
                "408564",
              ]}
            mapEmbedUrl="https://www.google.com/maps?q=10%20Ubi%20Crescent%20Singapore&output=embed"
            />

            {/* HONG KONG */}
            <OfficeCard
              country="HONG KONG"
              company="LA TECHNOLOGIES LIMITED"
              address={[
                "20/F Champion Building 287-291",
                "DES VOEUX ROAD CENTRAL SHEUNG",
                "WAN HONG KONG",
              ]}
               mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.7615661553996!2d114.14869297254648!3d22.287020079696116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007dca7166e7%3A0x8a5abfac53e5a792!2sChampion%20Building!5e0!3m2!1sen!2sin!4v1767962366037!5m2!1sen!2sin"
            />

            {/* INDONESIA */}
            <OfficeCard
              country="INDONESIA"
              company="PT LATECHNOLOGI INDAH SEJAHTERA"
              address={[
                "Gedung Wirasaha lantai 1 Unit 104, Jalan",
                "HR Rasuna Said Kav. C-5, Jakarta Selatan",
                "Indonesia",
              ]}
               mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253814.08780938858!2d106.63725438327133!3d-6.284080755562121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1767962748036!5m2!1sen!2sin"
            />

            {/* DUBAI */}
            <OfficeCard
              country="DUBAI"
              company="L A D TRADING L.L.C."
              address={[
                "B312 NASER AHMED SAEED",
                "MOHAMED ALAWADHI, Office 103 B",
                "Owned by NASER AHMED SAEED",
              ]}
               mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462561.6574537445!2d55.22748795!3d25.076022449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1767962695372!5m2!1sen!2sin"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl bg-gradient-to-r from-[#E53935] to-[#F68B2C] px-8 py-6 md:px-12 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* TEXT */}
            <p className="text-white font-semibold uppercase text-sm md:text-base tracking-wide text-center md:text-left">
              Driving digital growth with trusted technology solutions –{" "}
              <br className="hidden md:block" />
              reach out to us now
            </p>

            {/* BUTTON */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#E53935] font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* IMAGE CARD */
function ImageCard({ src }) {
  return (
    <div className="rounded-2xl overflow-hidden h-[180px]">
      <img
        src={`/assets/images/careers/${src}`}
        alt="Global operations"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

/* OFFICE CARD */
function OfficeCard({ country, company, address, mapEmbedUrl }){
  return (
    <div>
      {/* MAP */}
      <div className="rounded-2xl overflow-hidden mb-4 h-[220px]">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${country} map`}
          className="w-full h-full"
        />
      </div>

      {/* INFO BOX */}
      <div className="bg-[#FFF4E8] rounded-2xl p-6 flex gap-4 items-start">
        {/* ICON */}
        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" />
            <circle cx="12" cy="11" r="2" />
          </svg>
        </div>

        {/* TEXT */}
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">{country}</p>
          <p className="text-sm font-semibold text-black mb-2">{company}</p>
          {address.map((line, index) => (
            <p key={index} className="text-sm text-gray-600 leading-snug">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
