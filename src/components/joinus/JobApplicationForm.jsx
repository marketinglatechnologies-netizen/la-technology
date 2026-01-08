"use client";

import { useState } from "react";

export default function JobApplicationForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.target);

    const res = await fetch("/api/job-apply", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setLoading(false);
    setMessage(data.message);

    if (res.ok) e.target.reset();
  }

  return (
    <section className="py-6 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-semibold mb-8">
          Submit your application and begin your journey with us.
        </h2>

        {/* UPLOAD RESUME */}
        <form onSubmit={handleSubmit} className="space-y-6 text-left">

          <div className="text-center">
            <label className="inline-block bg-[#FFF1E6] px-6 py-3 rounded-lg cursor-pointer font-medium">
              Upload Resume 📎
              <input type="file" name="resume" required hidden />
            </label>
          </div>

          {/* FORM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <Input label="First Name" name="firstName" required />
            <Input label="Last Name" name="lastName" required />

            <Input label="Email Id" name="email" type="email" required />
            <Input label="Mobile Number" name="mobile" required />

            <Select label="Job Title" name="jobTitle" required options={[
              "Software Engineer",
              "Cyber Security Analyst",
              "SOC Engineer",
              "Sales Executive",
            ]} />

            <Select label="Qualification" name="qualification" required options={[
              "Graduate",
              "Post Graduate",
              "Diploma",
            ]} />

            <Select label="Year of Experience" name="experience" required options={[
              "0-1 Years",
              "1-3 Years",
              "3-5 Years",
              "5+ Years",
            ]} />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-lg flex items-center gap-2"
          >
            🚀 {loading ? "Submitting..." : "Submit"}
          </button>

          {message && (
            <p className="mt-4 text-green-600 font-medium">{message}</p>
          )}

        </form>
      </div>
    </section>
  );
}

/* INPUT COMPONENT */
function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        {...props}
        className="mt-1 w-full border rounded-lg px-4 py-2"
      />
    </div>
  );
}

/* SELECT COMPONENT */
function Select({ label, options, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium">
        {label} <span className="text-red-500">*</span>
      </label>
      <select
        {...props}
        className="mt-1 w-full border rounded-lg px-4 py-2"
      >
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
