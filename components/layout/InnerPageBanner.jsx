// import Breadcrumbs from "../ui/Breadcrumbs";

// export default function InnerPageBanner({
//   title,
//   description,
//   bgImage,
//   titleTag: TitleTag = "h1",
//   descTag: DescTag = "p",
//   titleClassName = "",
//   descClassName = "",
// }) {
//   return (
//     <section className="relative w-full min-h-[320px] md:min-h-[400px] lg:min-h-[450px] flex items-end font-poppins overflow-hidden">
//       {/* Dynamic Background Image */}
//       <div
//         className="absolute inset-0 z-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       />

//       {/* Dark Overlay - Optimized for bottom-aligned text */}
//       <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/50 to-transparent md:from-black/90 md:via-black/40" />

//       {/* Main Wrapper:
//           - max-w-7xl: caps width at 1280px
//           - mx-auto: centers the 1280px box on the screen
//           - px-4: mobile padding (so text doesn't touch screen edges)
//           - md:px-0: removes padding on desktop so text hits the 7xl edge
//       */}
//       <div className="relative z-20 w-full max-w-7xl mx-auto h-full min-h-[320px] md:min-h-[400px] lg:min-h-[450px] pt-4 pb-8 md:pt-5 md:pb-14 lg:px-6 md:px-6 px-4 flex flex-col justify-between">
//         {/* Breadcrumbs - Top Aligned */}
//         <div className="pt-2 md:pt-4 overflow-x-auto no-scrollbar">
//           <Breadcrumbs />
//         </div>

//         {/* Content Section - Bottom Aligned */}
//         <div className="max-w-3xl">
//           <TitleTag
//             className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 ${titleClassName}`}
//             dangerouslySetInnerHTML={{ __html: title }}
//           />

//           <DescTag
//             className={`text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl opacity-95 ${descClassName}`}
//             dangerouslySetInnerHTML={{ __html: description }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
import Breadcrumbs from "../ui/Breadcrumbs";

export default function InnerPageBanner({
  title,
  description,
  bgImage,
  titleTag: TitleTag = "h1",
  descTag: DescTag = "p",
  titleClassName = "",
  descClassName = "",
  showWebsiteCta = false, // ✅ NEW
}) {
  return (
    <section className="relative w-full min-h-[320px] md:min-h-[400px] lg:min-h-[450px] flex items-end font-poppins overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/50 to-transparent md:from-black/90 md:via-black/40" />

      <div className="relative z-20 w-full max-w-7xl mx-auto h-full min-h-[320px] md:min-h-[400px] lg:min-h-[450px] pt-4 pb-8 md:pt-5 md:pb-14 lg:px-6 md:px-6 px-4 flex flex-col justify-between">
        {/* Breadcrumbs */}
        <div className="pt-2 md:pt-4 overflow-x-auto no-scrollbar">
          <Breadcrumbs />
        </div>

        {/* Content */}
        <div className="max-w-3xl">
          <TitleTag
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 ${titleClassName}`}
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <DescTag
            className={`text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl opacity-95 ${descClassName}`}
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {/* ✅ OPTIONAL BUTTON (only renders when enabled) */}
          {showWebsiteCta && (
            <a
              href="https://www.labootcamps.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-lg
                         border border-white text-white text-sm
                         backdrop-blur-md hover:bg-white/20 transition underline font-medium text-xl"
            >
              <span className="text-lg">
                <img src="/assets/svgs/globe.svg" alt="globe" className="w-8 h-8" />
              </span>
              <span>www.labootcamps.in</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
