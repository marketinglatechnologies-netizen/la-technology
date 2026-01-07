import InnerPageBanner from "@/components/layout/InnerPageBanner";
import Image from "next/image";
import Link from "next/link";
import OurPartners from "@/components/sections/OurPartners";


export const metadata = {
  title: "Who We Are | LA TECH Cybersecurity",
  description:
    "Learn about LA Technologies' mission to provide industry-compliant security designs.",
};

export default function AboutPage() {
  return (
    <main>
      <InnerPageBanner
        bgImage="/assets/images/about-us/banner.jpg"
        title="Driven by Innovation"
        titleTag="h1"
        description={`Our team combines technology, strategy, and <br> creativity to deliver meaningful digital experiences.`}
      />

      <section className="py-20 bg-[#faf8f5]">
      {/* PAGE LEFT & RIGHT SPACE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* LEFT – IMAGES */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            {/* LEFT BIG IMAGE */}
            <div className="rounded-xl overflow-hidden h-[420px]">
              <Image
                src="/assets/images/about-us/who-we-are-1.jpg"
                alt="Cybersecurity Dashboard"
                width={600}
                height={420}
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT STACKED IMAGES */}
            <div className="grid grid-rows-2 gap-4 h-[420px]">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/assets/images/about-us/who-we-are-2.jpg"
                  alt="Security Monitoring"
                  width={600}
                  height={210}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/assets/images/about-us/who-we-are-3.jpg"
                  width={600}
                  height={210}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          {/* RIGHT – CONTENT */}
          <div className="mt-10 lg:mt-0 lg:pl-12 space-y-6">

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              About LA Technologies
            </h2>

            <p className="text-gray-600 leading-relaxed">
              LA Technologies is a trusted leader in cybersecurity and IT
              solutions, committed to helping businesses stay secure and
              resilient in today’s digital world.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With decades of expertise and a passion for innovation, we deliver
              cutting-edge services that protect your most valuable assets.
            </p>

            {/* GRADIENT BUTTON */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-white font-medium transition hover:opacity-90"
              style={{
                background: "linear-gradient(90deg, #DC2A3C 0%, #F58028 100%)"
              }}
            >
              Talk to an Expert
            </Link>

          </div>

        </div>
      </div>
    </section>
      <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          Who We Are
        </h2>

        <div className="space-y-6 text-gray-600 leading-relaxed text-base lg:text-lg">
           <p>
            At LA Technologies, we are more than a cybersecurity firm; we are
            your strategic partners in digital resilience. Founded in 2003,
            we have spent over two decades empowering enterprises to navigate
            complexity, mitigate risk, and unlock growth through secure,
            scalable, and intelligent solutions in an ever-evolving and
            volatile digital world.
          </p>

          <p>
            We operate at the intersection of technology, trust, and
            transformation, delivering integrated cybersecurity frameworks
            that align with business objectives and regulatory landscapes.
            Our approach is consultative, our execution is precise, and our
            commitment is unwavering.
          </p>

          <p>
            With a strong presence across key markets and a portfolio of
            elite OEM partnerships, we bring global capabilities with local
            insight. Our teams are built around domain expertise,
            operational excellence, and a shared vision to secure what
            matters most.
          </p>

          <p>
            Whether you're a Fortune 500 enterprise or a fast-scaling
            disruptor, we design solutions that evolve with you—anticipating
            threats, enabling agility, and driving competitive advantage.
            LA Technologies is not just a service provider. We are your
            cybersecurity ally, your innovation enabler, and your partner
            in progress.
          </p>
        </div>
      </div>
    </section> 
       <section className="py-20 bg-[#faf8f5]">
           {/* Wider container, less side gap */}
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
     
             {/* ================= BLOCK 1 ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
     
       {/* LEFT CONTENT */}
       <div className="space-y-4">
         <h3 className="text-2xl font-bold text-gray-900">
           Driving Growth and <br /> Empowering Businesses
         </h3>
     
         <p className="text-gray-600 leading-relaxed max-w-lg">
           We believe in opening doors to infinite possibilities by leveraging
           the power of technology to empower enterprises. Our focus is on
           driving growth, enabling agility, and supporting businesses with
           solutions that are future-ready and resilient.
         </p>
       </div>
     
       {/* RIGHT IMAGES – PUSH TO EDGE */}
       <div className="flex gap-4 lg:justify-end">
         <div className="rounded-xl overflow-hidden w-[240px] h-[200px]">
           <Image
             src="/assets/images/about-us/growth1.jpg"
             alt="Growth"
             width={240}
             height={200}
             className="w-full h-full object-cover"
           />
         </div>
     
         <div className="rounded-xl overflow-hidden w-[240px] h-[300px]">
           <Image
             src="/assets/images/about-us/growth2.jpg"
             alt="Empowering"
             width={240}
             height={240}
             className="w-full h-full object-cover"
           />
         </div>
       </div>
     
     </div>
     
     
             {/* ================= BLOCK 2 ================= */}
             <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
     
               {/* LEFT IMAGES */}
               <div className="flex gap-4 order-2 lg:order-1">
                 <div className="rounded-xl overflow-hidden w-[240px] h-[300px]">
                   <Image
                     src="/assets/images/about-us/growth3.jpg"
                     alt="Future"
                     width={300}
                     height={240}
                     className="w-full h-full object-cover"
                   />
                 </div>
     
                 <div className="rounded-xl overflow-hidden w-[240px] h-[200px]">
                   <Image
                     src="/assets/images/about-us/growth4.jpg"
                     alt="Security"
                     width={300}
                     height={200}
                     className="w-full h-full object-cover"
                   />
                 </div>
               </div>
     
               {/* RIGHT CONTENT */}
               <div className="space-y-4 order-1 lg:order-2">
                 <h3 className="text-2xl font-bold text-gray-900">
                   Building the Future
                 </h3>
     
                 <p className="text-gray-600 leading-relaxed max-w-lg">
                   Our vision is to provide our customers with the most compelling IT
                   and cybersecurity solutions in the industry—solutions that not
                   only protect but also enable transformation and growth.
                 </p>
               </div>
             </div>
     
             {/* ================= BLOCK 3 ================= */}
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
     
               {/* LEFT CONTENT */}
               <div className="space-y-4">
                 <h3 className="text-2xl font-bold text-gray-900">
                   Committed to Excellence
                 </h3>
     
                 <p className="text-gray-600 leading-relaxed max-w-lg">
                   To inspire stronger relationships with our clients by connecting
                   modern technologies to real-world challenges. We aim to deliver
                   secure, scalable, and intelligent solutions that help businesses
                   thrive in a digital-first economy.
                 </p>
               </div>
     
               {/* RIGHT IMAGES */}
             <div className="flex gap-4 lg:justify-end">
                 <div className="rounded-xl overflow-hidden w-[240px] h-[200px]">
                   <Image
                     src="/assets/images/about-us/growth5.jpg"
                     alt="Excellence"
                     width={300}
                     height={200}
                     className="w-full h-full object-cover"
                   />
                 </div>
     
                 <div className="rounded-xl overflow-hidden w-[240px] h-[300px]">
                   <Image
                     src="/assets/images/about-us/growth6.jpg"
                     alt="Infrastructure"
                     width={240}
                     height={240}
                     className="w-full h-full object-cover"
                   />
                 </div>
               </div>
             </div>
     
           </div>
         </section>
         <section className="py-20 bg-white">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
                 {/* SECTION TITLE */}
                 <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-900 mb-14">
                   Core Values
                 </h2>
         
                 {/* VALUES GRID */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
         
                   {/* VALUE 1 */}
                   <div className="text-center space-y-4">
                     <div className="mx-auto w-14 h-14 flex items-center justify-center">
                       <Image
                         src="/assets/images/about-us/core-icon1.png"
                         alt="Integrity"
                         width={48}
                         height={48}
                       />
                     </div>
                     <h3 className="font-semibold text-lg text-gray-900">Integrity</h3>
                     <p className="text-gray-600 text-sm leading-relaxed">
                       Continuous surveillance of networks, endpoints, and cloud
                       environments using next-gen SIEM and analytics.
                     </p>
                   </div>
         
                   {/* VALUE 2 */}
                   <div className="text-center space-y-4">
                     <div className="mx-auto w-14 h-14 flex items-center justify-center">
                       <Image
                         src="/assets/images/about-us/core-icon2.png"
                         alt="Innovation"
                         width={48}
                         height={48}
                       />
                     </div>
                     <h3 className="font-semibold text-lg text-gray-900">Innovation</h3>
                     <p className="text-gray-600 text-sm leading-relaxed">
                       We embrace cutting-edge technologies to stay ahead of evolving
                       threats and industry demands.
                     </p>
                   </div>
         
                   {/* VALUE 3 */}
                   <div className="text-center space-y-4">
                     <div className="mx-auto w-14 h-14 flex items-center justify-center">
                       <Image
                         src="/assets/images/about-us/core-icon3.png"
                         alt="Excellence"
                         width={48}
                         height={48}
                       />
                     </div>
                     <h3 className="font-semibold text-lg text-gray-900">Excellence</h3>
                     <p className="text-gray-600 text-sm leading-relaxed">
                       We strive for operational perfection and deliver measurable,
                       high-impact outcomes.
                     </p>
                   </div>
         
                   {/* VALUE 4 */}
                   <div className="text-center space-y-4">
                     <div className="mx-auto w-14 h-14 flex items-center justify-center">
                       <Image
                         src="/assets/images/about-us/core-icon4.png"
                         alt="Customer Success"
                         width={48}
                         height={48}
                       />
                     </div>
                     <h3 className="font-semibold text-lg text-gray-900">
                       Customer Success
                     </h3>
                     <p className="text-gray-600 text-sm leading-relaxed">
                       Your security, growth, and long-term success are our highest
                       priorities.
                     </p>
                   </div>
         
                 </div>
               </div>
             </section>
     <section className="py-20 bg-[#faf8f5]">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     
             <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
     
               {/* LEFT CONTENT */}
               <div>
                 <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">
                   Why we stand out ?
                 </h2>
     
                 <div className="space-y-6">
     
                   {/* ITEM 1 */}
                   <div className="flex items-start gap-4">
                     <div className="w-9 h-9 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
                       01
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900">
                         Founded in 2003
                       </h4>
                       <p className="text-gray-600 text-sm">
                         With 20+ years of industry expertise
                       </p>
                     </div>
                   </div>
     
                   {/* ITEM 2 */}
                   <div className="flex items-start gap-4">
                     <div className="w-9 h-9 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
                       02
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900">
                         Certified professionals
                       </h4>
                       <p className="text-gray-600 text-sm">
                         Deep domain knowledge
                       </p>
                     </div>
                   </div>
     
                   {/* ITEM 3 */}
                   <div className="flex items-start gap-4">
                     <div className="w-9 h-9 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
                       03
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900">
                         Global partnerships
                       </h4>
                       <p className="text-gray-600 text-sm">
                         With leading technology providers
                       </p>
                     </div>
                   </div>
     
                   {/* ITEM 4 */}
                   <div className="flex items-start gap-4">
                     <div className="w-9 h-9 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
                       04
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900">
                         24/7 support
                       </h4>
                       <p className="text-gray-600 text-sm">
                         For uninterrupted security and peace of mind
                       </p>
                     </div>
                   </div>
     
                 </div>
               </div>
     
               {/* RIGHT IMAGE */}
               <div className="flex justify-center lg:justify-end">
                 <div className="rounded-2xl overflow-hidden max-w-md">
                   <Image
                     src="/assets/images/about-us/stand-out.jpg"
                     alt="Cybersecurity Innovation"
                     width={520}
                     height={380}
                     className="w-full h-auto object-cover"
                   />
                 </div>
               </div>
     
             </div>
           </div>
         </section>
        <section className="py-20 bg-[#faf8f5]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
                {/* TITLE */}
                <h2 className="text-center text-3xl lg:text-4xl font-semibold text-gray-900 mb-10">
                  A journey of innovation and impact
                </h2>
        
                {/* TOP DIVIDER */}
                <div className="border-t border-gray-200" />
        
                {/* TIMELINE */}
                <div>
        
                  {/* ITEM 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-[160px_1fr_1.5fr] items-center py-8 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/assets/images/about-us/2003.png"
                        alt="Founded"
                        width={40}
                        height={40}
                      />
                      <span className="text-red-600 font-semibold">2003</span>
                    </div>
        
                    <h3 className="font-semibold text-gray-900">
                      Founded LA Technologies Pvt Ltd.
                    </h3>
        
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Officially began operations in India with a vision to deliver
                      technology-driven, business-empowering solutions.
                    </p>
                  </div>
        
                  {/* ITEM 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-[160px_1fr_1.5fr] items-center py-8 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/assets/images/about-us/2006.png"
                        alt="Cisco Talent"
                        width={40}
                        height={40}
                      />
                      <span className="text-red-600 font-semibold">2006</span>
                    </div>
        
                    <h3 className="font-semibold text-gray-900">
                      3,000+ Cisco-trained, 35 CCIEs nurtured
                    </h3>
        
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Built one of the strongest Cisco talent pools with 3,000+ trained
                      engineers and over 35 CCIE-certified professionals.
                    </p>
                  </div>
        
                  {/* ITEM 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-[160px_1fr_1.5fr] items-center py-8 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/assets/images/about-us/icon-2014.png"
                        alt="OEM Alliances"
                        width={40}
                        height={40}
                      />
                      <span className="text-red-600 font-semibold">2014</span>
                    </div>
        
                    <h3 className="font-semibold text-gray-900">
                      200+ clientele with global OEM alliances
                    </h3>
        
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Formed strategic partnerships with leading technology providers
                      including Cisco, Juniper, Avaya, APC, Polycom, and Fortinet.
                    </p>
                  </div>
        
                  {/* ITEM 4 */}
                  <div className="grid grid-cols-1 md:grid-cols-[160px_1fr_1.5fr] items-center py-8 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/assets/images/about-us/2016.png"
                        alt="Managed Services"
                        width={40}
                        height={40}
                      />
                      <span className="text-red-600 font-semibold">2016</span>
                    </div>
        
                    <h3 className="font-semibold text-gray-900">
                      Shift to managed services (ARR)
                    </h3>
        
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Transitioned to a recurring, services-led business approach
                      focused on customer longevity and operational continuity.
                    </p>
                  </div>
        
                </div>
              </div>
            </section>
          
    <section className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* LEFT – IMAGE GRID */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/assets/images/about-us/alliances1.jpg"
                alt="Team Celebration"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-xl overflow-hidden">
              <Image
                src="/assets/images/about-us/Alliance2.jpg"
                alt="Training Session"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-xl overflow-hidden">
              <Image
                src="/assets/images/about-us/Alliance3.jpg"
                alt="Corporate Professionals"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-xl overflow-hidden">
              <Image
                src="/assets/images/about-us/Alliance4.jpg"
                alt="Business Collaboration"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
              Accreditations &amp; Alliances
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-lg">
              Our strength lies in our partnerships and certifications. We
              collaborate with leading OEMs and technology innovators to
              deliver world-class cybersecurity solutions. Our alliances ensure
              that our clients benefit from the latest advancements in network
              security, OT security, cloud security, and managed services.
            </p>
          </div>

        </div>
      </div>
    </section>
     <section className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <h2 className="text-center text-3xl lg:text-4xl font-semibold text-gray-900 mb-14">
          Certifications
        </h2>

        {/* LOGOS */}
        <div className="flex flex-wrap justify-center items-center gap-16">

          {/* ISO 9001 */}
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/about-us/iso-2015.png"
              alt="ISO 9001:2015 Certification"
              width={180}
              height={120}
              className="object-contain"
            />
          </div>

          {/* ISO 27001 */}
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/about-us/iso-2022.png"
              alt="ISO 27001:2022 Certification"
              width={180}
              height={120}
              className="object-contain"
            />
          </div>

          {/* CMMI */}
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/about-us/cmmi.png"
              alt="CMMI Level 3 Certification"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>          
<OurPartners />

    <section className="py-20 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">
          Secure. Scale. Succeed
        </h2>

        {/* IMAGE CARD */}
        <div className="rounded-2xl overflow-hidden mb-8">
          <Image
            src="/assets/images/about-us/secure-scale-succeed.jpg"
            alt="Cybersecurity protection"
            width={1200}
            height={450}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          Partner with LA Technologies to build a security-first foundation for
          your enterprise. Our experts deliver tailored cybersecurity solutions
          that help you stay ahead of threats, ensure compliance, and enable
          sustainable growth.
        </p>

        {/* CTA BAR */}
        <div className="rounded-2xl bg-gradient-to-r from-[#E63A3A] to-[#F68B2C] px-6 py-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">

          <p className="text-white font-semibold uppercase text-sm md:text-base tracking-wide">
            Driving digital growth with trusted technology solutions – <br className="hidden md:block" />
            reach out to us now
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#E63A3A] font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Talk to an Expert
          </Link>

        </div>

      </div>
    </section>

    </main>
    
  );
}
