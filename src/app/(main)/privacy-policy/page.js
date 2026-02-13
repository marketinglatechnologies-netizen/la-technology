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
          L A Technologies Pvt Ltd (“L A Technologies”, “we”, “us”, “our”)
          respects your privacy and is committed to protecting your personal
          data. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website.
        </p>

        <p className="mb-4">
          This policy applies to users located in India and internationally,
          including those in the European Economic Area (EEA) and the United
          Kingdom, in accordance with the Information Technology Act, 2000,
          Digital Personal Data Protection Act, 2023, and the General Data
          Protection Regulation (GDPR).
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">
            1. Company Information (Data Controller)
          </h2>

          <p className="mb-1">L A Technologies Pvt Ltd</p>

          <p className="mb-1">
            Address: 101B, Pinnacle Corporate Park B Wing, First Floor, CTS 4207
            Part, Bandra Kurla Complex, <br /> East, Mumbai, Maharashtra 400098
          </p>

          <p>
            Email:{" "}
            <a
              href="mailto:sales@la-technologiesindia.com"
              className="text-red-600 hover:underline"
            >
              sales@la-technologiesindia.com
            </a>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            2. Information We Collect
          </h2>
          <p>
            We may collect the following personal data:
            <ul className="list-disc pl-5">
              <li>Name, email address, phone number</li>
              <li>Company name and job title</li>
              <li>IP address and device information</li>
              <li>Website usage and analytics data</li>
              <li>Information submitted through contact or enquiry forms</li>
            </ul>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            3. How We Collect Information
          </h2>
          <p>
            <ul className="list-disc pl-5">
              <li>Directly from you via website forms</li>
              <li>Automatically through cookies and analytics tools</li>
              <li>Through marketing and advertising platforms</li>
            </ul>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            4. Purpose of Data Collection
          </h2>
          <p>
            We use your data to:
            <ul className="list-disc pl-5">
              <li>Respond to enquiries and provide services </li>
              <li>Communicate business and marketing information </li>
              <li>Improve website performance and user experience</li>
              <li>Ensure security and legal compliance</li>
            </ul>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            5. Cookies and Tracking Technologies
          </h2>
          <p>
            Our website uses cookies and similar technologies for functionality,
            analytics, and marketing purposes. You may control cookie
            preferences through your browser settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            6. Data Sharing and Disclosure
          </h2>
          <p>
            We do not sell your personal data. Information may be shared with
            trusted service providers, business partners, or legal authorities
            where required by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            7. International Data Transfers
          </h2>
          <p>
            Personal data may be transferred outside India or the EEA. Where
            applicable, we implement safeguards such as Standard Contractual
            Clauses.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Data Security</h2>
          <p>
            We implement reasonable technical and organizational measures to
            protect personal data. However, no method of transmission over the
            internet is completely secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfill the
            purposes outlined in this policy or as required by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">10. Your Rights </h2>
          <p>
            Depending on your location, you may have rights to access, correct,
            delete, restrict, or object to the processing of your personal data
            and to withdraw consent at any time.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">11. Third-Party Links</h2>
          <p>
            Our website may contain links to external websites. We are not
            responsible for the privacy practices of such third parties.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            12. Changes to This Policy{" "}
          </h2>
          <p>
            We may update this Privacy Policy periodically. The revised version
            will be effective when it is posted on the website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">13. Contact Us</h2>

          <p className="mb-2">
            For any privacy-related queries or requests, please contact:
          </p>

          <p>
            <a
              href="mailto:sales@la-technologiesindia.com"
              className="text-red-600 hover:underline"
            >
              sales@la-technologiesindia.com
            </a>
          </p>
        </section>

        {/* <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recruitment Policy</h2>

          <p className="mb-4">
            LA Technologies Pvt Ltd is an Equal Opportunity Employer. Employment
            decisions are made solely based on merit and business requirements,
            without discrimination on the grounds of race, color, caste, creed,
            religion, gender, marital status, age, nationality, ethnic origin,
            gender identity or expression, sexual orientation, or any other
            status protected under applicable laws.
          </p>

          <p className="mb-4">
            LA Technologies Pvt Ltd is committed to maintaining an inclusive,
            accessible, and supportive workplace. We value diversity and are
            committed to providing equal employment opportunities to all
            applicants in accordance with applicable laws. If you receive any
            suspicious communications, advertisements, or approaches from
            individuals claiming to offer employment with LA Technologies Pvt
            Ltd, please report the same at{" "}
            <a
              href="mailto:hrd@la-technologiesindia.com"
              className="text-red-600 hover:underline"
            >
              hrd@la-technologiesindia.com
            </a>
            .
          </p>

          <p>
            Any grievances, complaints, or concerns pertaining to unethical,
            unfair, or improper hiring practices may be reported using the same
            email address.
          </p>
        </section> */}
      </main>
    </>
  );
}
