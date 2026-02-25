// import { sanityClient } from "@/lib/sanityClient";
// import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

// export const revalidate = 60;

// const query = `
// *[_type == "job" && isActive == true]
// | order(postedDate desc){
//   _id,
//   title,
//   company,
//   jobType,
//   location,
//   postedDate,
//   shortDescription
// }
// `;

// export default async function CareersPage() {
//   const jobs = await sanityClient.fetch(query);

//   return (
//     <section className="bg-white py-12 px-6">
//       <div className="space-y-6 max-w-7xl mx-auto px-4">
//         <h1 className="text-3xl font-semibold text-center mb-10">
//           Current Openings
//         </h1>

//         {jobs.length === 0 && (
//           <p className="text-center text-gray-500">
//             No job openings available.
//           </p>
//         )}

//         {jobs.map((job) => (
//           <div
//             key={job._id}
//             className="bg-white p-6 border rounded-md shadow-sm"
//           >
//             <h3 className="text-xl font-semibold mb-2">{job.title}</h3>

//             <div className="flex gap-6 text-sm text-gray-600 mb-3">
//               <span className="flex items-center gap-2">
//                 <FaBriefcase /> {job.jobType}
//               </span>

//               <span className="flex items-center gap-2">
//                 <FaMapMarkerAlt /> {job.location}
//               </span>

//               <span className="flex items-center gap-2">
//                 <FaCalendarAlt />
//                 {new Date(job.postedDate).toLocaleDateString()}
//               </span>
//             </div>

//             <p className="text-gray-700 mb-4">{job.shortDescription}</p>

//             {/* ✅ Apply Button Added */}
//             <button className="mt-2 bg-gradient-to-r from-[#E53935] to-[#F37321] text-white px-5 py-2 rounded transition">
//               Apply Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import { PortableText } from "@portabletext/react";
import { useState } from "react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function JobListing({ jobs }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [readMoreJob, setReadMoreJob] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedJob) return;

    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("jobId", selectedJob._id);

    const res = await fetch("/api/apply", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Application Submitted Successfully!");
      setSelectedJob(null);
    } else {
      alert("Submission Failed");
    }

    setLoading(false);
  };

  return (
    <section className="bg-white py-12 px-6">
      <div className="space-y-6 max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-10">
          Current Openings
        </h1>

        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white p-6 border rounded-md shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>

            <div className="flex gap-6 text-sm text-gray-600 mb-3">
              <span className="flex items-center gap-2">
                <FaBriefcase /> {job.jobType}
              </span>

              <span className="flex items-center gap-2">
                <FaMapMarkerAlt /> {job.location}
              </span>

              <span className="flex items-center gap-2">
                <FaCalendarAlt />
                {new Date(job.postedDate).toLocaleDateString()}
              </span>
            </div>

            <p className="text-gray-700 mb-4">{job.shortDescription}</p>

            <div className="flex gap-3 mt-3">
              <button
                onClick={() => setReadMoreJob(job)}
                className="border border-red-600 text-red-600 px-5 py-2 rounded"
              >
                Read More
              </button>

              <button
                onClick={() => setSelectedJob(job)}
                className="bg-gradient-to-r from-[#E53935] to-[#F37321] text-white px-5 py-2 rounded"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}

        {readMoreJob && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-6 relative max-h-[80vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setReadMoreJob(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                ✕
              </button>

              <h2 className="text-2xl font-semibold mb-4">
                {readMoreJob.title}
              </h2>

              <div className="text-gray-700 space-y-3 prose max-w-none [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">
                <PortableText value={readMoreJob.description} />
              </div>
            </div>
          </div>
        )}

        {/* Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-3 right-3"
              >
                ✕
              </button>

              <h2 className="text-xl font-semibold mb-4">
                Apply for {selectedJob.title}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full border p-2 rounded"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border p-2 rounded"
                />

                <input
                  name="phone"
                  placeholder="Phone"
                  required
                  className="w-full border p-2 rounded"
                />

                <textarea
                  name="coverLetter"
                  placeholder="Cover Letter"
                  className="w-full border p-2 rounded"
                />

                <input
                  name="resume"
                  type="file"
                  required
                  className="w-full border p-2 rounded"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 text-white py-2 rounded"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
