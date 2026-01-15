// components/IndustryAndScope.jsx
export default function IndustryAndScope({ title, data }) {
  const {
    industry,
    organizationType,
    geography,
    securitySolutions,
  } = data;

  return (
    <section className="bg-[#FFF7EB] py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Dynamic Section Title */}
        <h3 className="text-xl font-semibold text-orange-600 mb-6">
          {title}
        </h3>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-gray-800">

          {/* Column 1 */}
          <div className="space-y-3">
            <div>
              <p className="font-semibold text">Industry :</p>
              <p className="text-gray-700">{industry}</p>
            </div>

            <div>
              <p className="font-semibold">Organization Type :</p>
              <p className="text-gray-700">{organizationType}</p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <p className="font-semibold mb-1">Geography :</p>
            <p className="text-gray-700 leading-relaxed">
              {geography}
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <p className="font-semibold mb-2">
              Security Solutions Deployed:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-gray-700">
              {securitySolutions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
