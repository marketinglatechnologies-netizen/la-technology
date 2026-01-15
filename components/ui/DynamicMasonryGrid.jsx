import React from "react";

export default function DynamicMasonryGrid({
  title = "",
  mediaPaths = [],
  bgColor = "bg-[#ffffff]",
}) {
  const getMediaType = (path) => {
    const videoExtensions = ["mp4", "webm", "ogg"];
    const extension = path.split(".").pop().toLowerCase();
    return videoExtensions.includes(extension) ? "video" : "image";
  };

  return (
    <section className={`py-8 lg:py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        {/* Dynamic Title - Adjusted margins for mobile */}
        {title && (
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 tracking-tight text-center md:text-left">
            {title}
          </h2>
        )}

        {/* The Grid Logic:
          - h-auto on mobile to let content dictate height.
          - md:h-[500px] or md:h-[600px] on desktop to force the masonry alignment.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-auto">
          {/* Left Side: First Media (Featured) */}
          {mediaPaths[0] && (
            <div className="sm:h-[400px] lg:h-[500px] md:h-full w-full">
              <MediaRenderer
                src={mediaPaths[0]}
                type={getMediaType(mediaPaths[0])}
              />
            </div>
          )}

          {/* Right Side: Stacked Column */}
          <div className="flex flex-col gap-4 md:gap-6 h-auto md:h-full">
            {mediaPaths.slice(1, 3).map((path, idx) => (
              <div key={idx} className="sm:h-[200px] lg:h-[250px] md:flex-1">
                <MediaRenderer src={path} type={getMediaType(path)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MediaRenderer({ src, type }) {
  return (
    <div className="group relative w-full h-full overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-gray-200 shadow-sm">
      {type === "video" ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <img
          src={src}
          alt="Innovation Media"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
