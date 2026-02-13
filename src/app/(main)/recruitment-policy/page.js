import Head from "next/head";

export default function RecruitmentPolicy() {
  return (
    <>
      <Head>
        <title>Recruitment Policy</title>
        <meta
          name="description"
          content="Read our recruitment policy to understand how we hire and treat employees."
        />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold mb-6">Recruitment Policy</h1>

        <p className="mb-4">
          LA Technologies Pvt Ltd is an Equal Opportunity Employer. Employment
          decisions are made solely based on merit and business requirements,
          without discrimination on the grounds of race, color, caste, creed,
          religion, gender, marital status, age, nationality, ethnic origin,
          gender identity or expression, sexual orientation, or any other status
          protected under applicable laws.
        </p>

        <section className="mb-6">
          <p className="mb-2">
            LA Technologies Pvt Ltd is committed to maintaining an inclusive,
            accessible, and supportive workplace. We value diversity and are
            committed to providing equal employment opportunities to all
            applicants in accordance with applicable laws. If you receive any
            suspicious communications, advertisements, or approaches from
            individuals claiming to offer employment with LA Technologies Pvt
            Ltd, please report the same at
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

        <p className="mb-4">
          Any grievances, complaints, or concerns pertaining to unethical,
          unfair, or improper hiring practices may be reported using the same
          email address.
        </p>
      </div>
    </>
  );
}
