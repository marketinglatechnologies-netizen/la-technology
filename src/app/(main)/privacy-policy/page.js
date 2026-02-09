// pages/privacy-policy.js

import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Read our privacy policy to understand how we collect, use, and protect your personal information."
        />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          This Privacy Policy describes how we collect, use, and protect your
          personal information when you use our website and services.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name, email
            address, phone number, and any other details you voluntarily
            provide through forms or direct communication.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            How We Use Your Information
          </h2>
          <p>
            Your information is used to respond to inquiries, provide services,
            improve our website, and communicate important updates. We do not
            sell or rent your personal data to third parties.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Cookies and Tracking Technologies
          </h2>
          <p>
            We may use cookies and similar technologies to enhance user
            experience, analyze traffic, and improve functionality. You can
            choose to disable cookies through your browser settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Data Security
          </h2>
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those sites.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Your Rights
          </h2>
          <p>
            You have the right to access, update, or request deletion of your
            personal data. You may contact us at any time regarding your
            information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us through our website.
          </p>
        </section>
      </main>
    </>
  );
}
