"use client";

import { Send } from "lucide-react";
import { useState, useEffect } from "react";

export default function JobApplicationForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [captcha, setCaptcha] = useState({ q: "", a: null });
  const [captchaInput, setCaptchaInput] = useState("");

  // Track errors for fields
  const [errors, setErrors] = useState({});

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ q: `${n1} + ${n2}`, a: n1 + n2 });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setStatus("error-file-size");
        e.target.value = "";
        setSelectedFileName("");
        setErrors((prev) => ({ ...prev, resume: true }));
        return;
      }
      setSelectedFileName(file.name);
      setErrors((prev) => ({ ...prev, resume: false })); // Clear error when file is added
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newErrors = {};

    // 1. Highlight Resume field if no file is attached
    const resumeFile = formData.get("resume");
    if (!resumeFile || resumeFile.size === 0) {
      newErrors.resume = true;
    }

    // 2. Highlight Captcha if incorrect
    if (parseInt(captchaInput) !== captcha.a) {
      newErrors.captcha = true;
      setStatus("error-captcha");
    }

    // If there are errors, stop and highlight
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to top to show the resume error if it's the main issue
      // window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setErrors({}); // Clear all highlights
    setLoading(true);

    try {
      const response = await fetch("/api/career", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
        setSelectedFileName("");
        setCaptchaInput("");
        generateCaptcha();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-6 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold mb-8">
          Submit your application and begin your journey with us.
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          {/* UPLOAD RESUME SECTION */}
          <div className="text-center">
            <label
              className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg cursor-pointer font-bold transition duration-200 ${
                errors.resume
                  ? "bg-red-50 border-2 border-red-500 text-red-600 animate-pulse"
                  : "bg-[#FFF1E6] hover:bg-[#ffe8d4] text-[#333]"
              }`}
            >
              <span className="text-md">Upload Resume</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.62879 9.09933e-06C5.65541 1.38081e-05 5.68242 1.85765e-05 5.70982 1.85765e-05C5.721 1.85765e-05 5.73203 1.76228e-05 5.74292 1.66691e-05C6.02064 -7.23234e-06 6.20617 -2.32067e-05 6.38798 0.0159156C7.16877 0.0843661 7.91455 0.37224 8.527 0.848213C8.66977 0.959166 8.80299 1.08408 8.99815 1.26709L9.02277 1.29018L9.46298 1.70287C10.145 2.34227 10.3879 2.56125 10.6666 2.70661C10.832 2.7929 11.0083 2.86144 11.1919 2.91053C11.5046 2.99409 11.8498 3.00002 12.8128 3.00002L13.1586 3.00002C14.1717 3 14.9981 2.99998 15.6542 3.07731C16.3351 3.15757 16.9366 3.33062 17.4384 3.75374C17.5214 3.82373 17.6006 3.89796 17.6757 3.97617C18.1356 4.45563 18.3281 5.03918 18.4164 5.6975C18.5001 6.32129 18.5 7.10367 18.5 8.04669V10.0788C18.7139 10.2953 18.9007 10.5379 19.0564 10.801C19.4552 11.4749 19.5374 12.2337 19.4865 13.1001C19.437 13.9447 19.2518 14.9985 19.0203 16.3165L19.0051 16.4026C18.8392 17.3472 18.705 18.1114 18.5345 18.7177C18.3579 19.3456 18.124 19.8773 17.7157 20.3225C17.5221 20.5335 17.3051 20.721 17.0688 20.8811C16.5673 21.2208 16.0116 21.3662 15.3754 21.4345C14.7648 21.5 14.011 21.5 13.0862 21.5H6.41387C5.48899 21.5 4.73526 21.5 4.12465 21.4345C3.48841 21.3662 2.93271 21.2208 2.43122 20.8811C2.1949 20.721 1.97791 20.5335 1.78438 20.3225C1.37604 19.8773 1.14215 19.3456 0.965582 18.7177C0.795083 18.1113 0.66084 17.3472 0.494894 16.4025L0.479763 16.3164C0.248221 14.9985 0.0630838 13.9447 0.0135048 13.1001C-0.0373634 12.2337 0.0448313 11.4749 0.443669 10.801C0.599379 10.5379 0.786186 10.2953 1.00002 10.0788V4.46233C1.00002 4.43337 1.00001 4.40484 1.00001 4.37672C0.999844 3.79761 0.999732 3.3962 1.07024 3.04584C1.38017 1.50585 2.65258 0.341823 4.2261 0.0634956C4.58606 -0.000175558 5.00062 -0.000102123 5.62879 9.09933e-06ZM2.50002 9.24122C2.74046 9.17872 2.9937 9.13402 3.25912 9.10113C4.0753 8.99999 5.11395 9 6.40443 9.00002H13.0956C14.3861 9 15.4247 8.99999 16.2409 9.10113C16.5063 9.13402 16.7596 9.17872 17 9.24122V8.09845C17 7.09037 16.9984 6.40926 16.9297 5.89687C16.8641 5.40764 16.7488 5.17679 16.5932 5.01461C16.555 4.97478 16.5144 4.93667 16.4715 4.90049C16.2889 4.74652 16.0217 4.63101 15.4786 4.567C14.9207 4.50124 14.1831 4.50002 13.1117 4.50002H12.8128C12.7792 4.50002 12.7461 4.50003 12.7135 4.50004C11.8859 4.50025 11.3313 4.50039 10.8047 4.35967C10.5159 4.2825 10.2367 4.1742 9.97287 4.03657C9.48962 3.78451 9.09232 3.41182 8.50891 2.86455C8.48527 2.84238 8.46133 2.81992 8.43707 2.79717L7.99686 2.38448C7.76814 2.17006 7.68773 2.09569 7.60655 2.0326C7.22793 1.73835 6.75792 1.5541 6.25698 1.51018C6.14863 1.50069 6.03224 1.50002 5.70982 1.50002C4.97173 1.50002 4.70025 1.50291 4.48736 1.54057C3.47196 1.72017 2.7193 2.45465 2.54076 3.34178C2.50373 3.52576 2.50002 3.76416 2.50002 4.46233V9.24122ZM3.44359 10.5897C2.74602 10.6762 2.38636 10.8345 2.13843 11.0639C1.98167 11.2089 1.84544 11.3776 1.73453 11.565C1.55529 11.8679 1.46773 12.2765 1.51093 13.0122C1.55482 13.7599 1.7237 14.728 1.96545 16.1041C2.13984 17.0968 2.26189 17.7864 2.40958 18.3116C2.55352 18.8235 2.70305 19.105 2.88978 19.3085C3.00505 19.4342 3.13354 19.5451 3.27248 19.6392C3.49416 19.7894 3.7801 19.8889 4.28475 19.9431C4.80594 19.999 5.47897 20 6.45533 20H13.0447C14.0211 20 14.6941 19.999 15.2153 19.9431C15.7199 19.8889 16.0059 19.7894 16.2276 19.6392C16.3665 19.5451 16.495 19.4342 16.6103 19.3085C16.797 19.105 16.9465 18.8235 17.0905 18.3116C17.2382 17.7864 17.3602 17.0968 17.5346 16.1041C17.7763 14.728 17.9452 13.7599 17.9891 13.0122C18.0323 12.2765 17.9448 11.8679 17.7655 11.565C17.6546 11.3776 17.5184 11.2089 17.3616 11.0639C17.1137 10.8345 16.754 10.6762 16.0564 10.5897C15.3434 10.5014 14.398 10.5 13.0447 10.5H6.45533C5.10202 10.5 4.15669 10.5014 3.44359 10.5897ZM7.00002 15.75C7.00002 15.3358 7.33581 15 7.75002 15H11.75C12.1642 15 12.5 15.3358 12.5 15.75C12.5 16.1642 12.1642 16.5 11.75 16.5H7.75002C7.33581 16.5 7.00002 16.1642 7.00002 15.75Z"
                  fill="currentColor"
                />
              </svg>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                hidden
                onChange={handleFileChange}
              />
            </label>

            {selectedFileName ? (
              <p className="mt-2 text-sm text-orange-600 font-medium italic">
                Attached: {selectedFileName}
              </p>
            ) : (
              errors.resume && (
                <p className="mt-2 text-sm text-red-500 font-bold">
                  * Please attach your resume to proceed
                </p>
              )
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input label="First Name" name="firstName" required />
            <Input label="Last Name" name="lastName" required />
            <Input label="Email Id" name="email" type="email" required />
            <Input label="Mobile Number" name="mobile" required />
            <Select
              label="Job Title"
              name="jobTitle"
              required
              options={[
                "Software Engineer",
                "Cyber Security Analyst",
                "SOC Engineer",
                "Sales Executive",
              ]}
            />
            <Select
              label="Qualification"
              name="qualification"
              required
              options={["Graduate", "Post Graduate", "Diploma"]}
            />
            <Select
              label="Year of Experience"
              name="experience"
              required
              options={["0-1 Years", "1-3 Years", "3-5 Years", "5+ Years"]}
            />
          </div>

          {/* CAPTCHA */}
          <div
            className={`flex items-center gap-4 p-4 rounded-lg border transition lg:w-90 ${
              errors.captcha ? "border-red-500 bg-red-50" : "bg-gray-50"
            }`}
          >
            <label
              className={`text-sm font-bold ${
                errors.captcha ? "text-red-600" : ""
              }`}
            >
              Solve: {captcha.q} =
            </label>
            <input
              type="number"
              required
              value={captchaInput}
              onChange={(e) => {
                setCaptchaInput(e.target.value);
                if (errors.captcha)
                  setErrors((prev) => ({ ...prev, captcha: false }));
              }}
              className={`w-20 border rounded px-2 py-1 outline-none ${
                errors.captcha ? "border-red-500" : ""
              }`}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 bg-gradient-to-r cursor-pointer from-red-500 to-orange-500 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 disabled:opacity-50"
          >
            <img
              src="/assets/images/home/send.svg"
              alt="send"
              className="w-4 h-4"
            />{" "}
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        <div className="mt-6">
          {status === "success" && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-left flex items-center gap-2">
              <span>✅</span> Application submitted successfully!
            </div>
          )}
          {status === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-left flex items-center gap-2">
              <span>❌</span> Something went wrong. Please try again.
            </div>
          )}
          {status === "error-captcha" && (
            <div className="mb-6 p-4 bg-amber-50 border border-amber-200 text-amber-700 rounded-lg text-left flex items-center gap-2">
              <span>⚠️</span> Invalid captcha answer.
            </div>
          )}
          {status === "error-file-size" && (
            <div className="mb-6 p-4 bg-amber-50 border border-amber-200 text-amber-700 rounded-lg text-left flex items-center gap-2">
              <span>⚠️</span> File size exceeds 5MB limit.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Keep your original components
function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium">
        {label} <span className="text-red-500">*</span>
      </label>
      {label === "Mobile Number" && (
        <div className="flex mt-2">
          <span className="px-3 flex items-center border border-r-0 rounded-l-md text-sm bg-gray-100">
            +91
          </span>
          <input
            {...props}
            className="w-full px-4 py-2 border rounded-r-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      )}
      {label !== "Mobile Number" && (
        <input
          {...props}
          className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-1 focus:ring-orange-400 outline-none"
        />
      )}
    </div>
  );
}

function Select({ label, options, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium">
        {label} <span className="text-red-500">*</span>
      </label>
      <select
        {...props}
        className="mt-1 w-full border rounded-lg px-4 py-2 focus:ring-1 focus:ring-orange-400 outline-none"
      >
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
