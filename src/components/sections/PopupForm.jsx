"use client";
import { useEffect, useState } from "react";

export default function ScrollPopupForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    companyName: "",
    jobTitle: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (!hasShown && scrollPosition >= pageHeight * 0.5) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShown]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setFormData({
          fullName: "",
          contactNumber: "",
          email: "",
          companyName: "",
          jobTitle: "",
          message: "",
        });

        setTimeout(() => {
          setShowPopup(false);
          setSuccess(false);
        }, 2000);
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-lg rounded-xl bg-white p-6 mt-16">
        {/* Close */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute right-3 top-3 text-2xl text-gray-500 hover:text-red-500"
        >
          ×
        </button>

        <h2 className="mb-4 text-center text-2xl font-semibold">
          Start 30 Days Free SOC Monitoring
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            className="w-full rounded border border-gray-300 px-4 py-2 focus:border-black focus:outline-none required"
            required
          />

          <input
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            type="tel"
            placeholder="Contact Number"
            className="w-full rounded border border-gray-300 px-4 py-2 focus:border-black focus:outline-none required"
            required
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Work Email Address"
            className="w-full rounded border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
            required
          />

          <input
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            type="text"
            placeholder="Company Name"
            className="w-full rounded border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
            required
          />

          <input
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            type="text"
            placeholder="Job Title"
            className="w-full rounded border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={1}
            placeholder="Message"
            className="w-full rounded border border-gray-300 px-4 py-2 focus:border-black focus:outline-none required"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-gradient-to-r from-red-500 to-orange-400 py-2 text-white font-medium hover:opacity-90 transition"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        {success && (
          <p className="mt-3 text-center text-green-600 font-medium">
            Thank you! We will contact you shortly.
          </p>
        )}
      </div>
    </div>
  );
}
