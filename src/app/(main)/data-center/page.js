import Image from "next/image";
import {
  BadgeCheck,
  Box,
  Flag,
  ShieldCheck,
  Droplets,
  CheckCircle2,
  Download,
  Search,
  PencilRuler,
  Wrench,
  Network,
} from "lucide-react";

export default function DatatureSection() {
  const workloads = [
    {
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=200&fit=crop&crop=center",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <rect x="7" y="7" width="10" height="10" rx="1" />
          <line x1="12" y1="2" x2="12" y2="7" />
          <line x1="12" y1="17" x2="12" y2="22" />
          <line x1="2" y1="12" x2="7" y2="12" />
          <line x1="17" y1="12" x2="22" y2="12" />
        </svg>
      ),
      title: "AI & GPU Compute",
      description:
        "High-density GPU clusters with liquid cooling for model training and inference",
    },
    {
      image:
        "/assets/images/mod1.png",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Sovereign Cloud",
      description:
        "Secure, compliant infrastructure for government and regulated enterprise data",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=500&h=200&fit=crop&crop=center",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
      title: "Enterprise Private Cloud",
      description:
        "On-premise cloud environments with enterprise reliability and managed operations",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=200&fit=crop&crop=center",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: "HPC & Scientific Computing",
      description:
        "High-performance compute clusters for research, simulation, and analytics",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=200&fit=crop&crop=center",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Edge Data Centers",
      description:
        "Distributed micro data centers for low-latency applications and regional coverage",
    },
  ];

  const stepCircle = [
    {
      number: "01",
      title: "Assess",
      description:
        "Site survey, power audit,\nworkload profiling,\ncompliance review",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Design",
      description:
        "Custom stack architecture,\nrack density planning, CDU\nsizing, SLD design",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Build",
      description:
        "Factory manufacture and\npre-commission of modular\npods and cooling systems",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Integrate",
      description:
        "On-site installation,\ninfrastructure integration,\nnetwork and power\nconnectivity",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
          <line x1="12" y1="7" x2="12" y2="13" />
          <line x1="12" y1="13" x2="5.8" y2="17.4" />
          <line x1="12" y1="13" x2="18.2" y2="17.4" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Commission",
      description:
        "Thermal validation, load\nbank testing, compliance\nsign-off, managed handover",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
  ];

  const CIRCLE_SIZE = 72; // px
  const stats = [
    {
      value: "1.05",
      label: "PUE",
      description: "Industry-leading power usage effectiveness",
    },
    {
      value: "90 Days",
      label: "Deployment",
      description: "From order to operational data center",
    },
    {
      value: "500 kW",
      label: "Rack Density",
      description: "Maximum rack power supported",
    },
    {
      value: "40%",
      label: "Energy Savings",
      description: "Reduction vs conventional air-cooled builds",
    },
    {
      value: "200 kW –\n2 MW",
      label: "Cooling Range",
      description: "CDU capacity range available",
    },
    {
      value: "95%",
      label: "BoM Localisation",
      description: "Made in India components",
    },
  ];
  const certifications = [
    {
      icon: (
        // Ribbon / medal
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
        </svg>
      ),
      title: "Tier III Certified",
      desc: "Uptime Institute standard for concurrent maintainability",
    },
    {
      icon: (
        // Cube / box
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: "OCP Aligned",
      desc: "Open Compute Project rack and infrastructure standards",
    },
    {
      icon: (
        // Flag
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      ),
      title: "Make in India",
      desc: "95% locally sourced Bill of Materials",
    },
    {
      icon: (
        // Shield with checkmark
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      title: "DPDP Act Compliant",
      desc: "India's Digital Personal Data Protection Act ready",
    },
    {
      icon: (
        // Droplet
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2.69s-7 7.1-7 11.31a7 7 0 0 0 14 0C19 9.79 12 2.69 12 2.69z" />
        </svg>
      ),
      title: "IP66 Rated",
      desc: "Enclosure protection for dust and water ingress",
    },
    {
      icon: (
        // Circle with checkmark
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      title: "ISO 9001",
      desc: "Quality management standard",
    },
  ];

  const phases = [
    {
      name: "Design & Engineering",
      conventional: { label: "4–6 weeks", weeks: 6 },
      tierx: { label: "2–3 weeks", weeks: 3 },
    },
    {
      name: "Procurement",
      conventional: { label: "8–16 weeks", weeks: 16 },
      tierx: { label: "2–4 weeks", weeks: 4 },
    },
    {
      name: "Civil & Construction",
      conventional: { label: "16–32 weeks", weeks: 32 },
      tierx: { label: "Eliminated", weeks: 1 },
    },
    {
      name: "Factory Commission",
      conventional: { label: "—", weeks: 0.5 },
      tierx: { label: "3–4 weeks", weeks: 4 },
    },
    {
      name: "Site Installation",
      conventional: { label: "4–8 weeks", weeks: 8 },
      tierx: { label: "2–3 weeks", weeks: 3 },
    },
  ];

  const total = {
    name: "Total",
    conventional: { label: "6–24 months", weeks: 32 },
    tierx: { label: "~90 days", weeks: 13 },
  };

  const MAX_WEEKS = 32;

  const metrics = [
    {
      label: "Power Usage\nEffectiveness",
      air: { text: "1.5 – 1.8", width: "100%" },
      liquid: { text: "1.05", width: "58%" },
    },
    {
      label: "Max Rack Density",
      air: { text: "~15 kW/rack", width: "3%" },
      liquid: { text: "Up to 500 kW/rack", width: "100%" },
    },
    {
      label: "Energy Reduction",
      air: { text: "Baseline", width: "3%" },
      liquid: { text: "Up to 40% Savings", width: "100%" },
    },
    {
      label: "Cooling Efficiency",
      air: { text: "Standard", width: "47%" },
      liquid: { text: "Industry-Leading", width: "100%" },
    },
  ];
  const capabilities = [
    "SentraFlo Series CDUs: India's first indigenously developed Liquid-to-Liquid Coolant Distribution Units",
    "Single-Phase Liquid Immersion Cooling — servers fully submerged in dielectric fluid",
    "Direct-to-Chip Liquid Cooling (DLC) with precision cold plate manifolds",
    "Scalable from 200 kW to 2 MW cooling capacity",
    "Recognised as Emerging Leader — MarketsandMarkets 360Quadrant, Liquid Cooling Market",
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=420&h=240&fit=crop",
      alt: "Refroid CDU unit",
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=240&h=280&fit=crop",
      alt: "Liquid cooled server rack",
      className: "col-span-1 row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=420&h=240&fit=crop",
      alt: "Chip liquid cooling closeup",
      className: "col-span-1 row-span-1",
    },
  ];
  const cards = [
    {
      title: "Design & Architecture",
      description:
        "We start with your workload requirements—GPU density, power envelope, cooling strategy, compliance—and design a data center that is precisely right for your needs.",
      image: "/assests/images/city.png",
    },
    {
      title: "Build & Integration",
      description:
        "Leveraging prefabricated modular infrastructure and factory-commissioned systems, we cut deployment time dramatically without compromising engineering quality.",
      image: "/images/build-integration.jpg",
    },
    {
      title: "Commission & Operate",
      description:
        "From thermal validation and load testing to managed handover and ongoing support, we stay with you beyond delivery to ensure your facility performs at specification.",
      image: "/assets/images/card1.png",
    },
  ];
  const steps = [
    {
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
      title: "Design & Architecture",
      description:
        "We start with your workload requirements — GPU density, power envelope, cooling strategy, compliance — and design a data center that is precisely right for your needs.",
    },
    {
      image:
        "/assets/images/card1.png",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: "Build & Integration",
      description:
        "Leveraging prefabricated modular infrastructure and factory-commissioned systems, we cut deployment time dramatically without compromising on engineering quality.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
      title: "Commission & Operate",
      description:
        "From thermal validation and load testing to managed handover and ongoing support, we stay with you beyond delivery to ensure your facility performs at specification.",
    },
  ];
  const circle = [
    {
      number: "01",
      title: "Assess",
      description:
        "Site survey, power audit, workload profiling, compliance review",
      icon: Search,
    },
    {
      number: "02",
      title: "Design",
      description:
        "Custom stack architecture, rack density planning, CDU sizing, SLD design",
      icon: PencilRuler,
    },
    {
      number: "03",
      title: "Build",
      description:
        "Factory manufacture and pre-commission of modular pods and cooling systems",
      icon: Wrench,
    },
    {
      number: "04",
      title: "Integrate",
      description:
        "On-site installation, infrastructure integration, network and power connectivity",
      icon: Network,
    },
    {
      number: "05",
      title: "Commission",
      description:
        "Thermal validation, load bank testing, compliance sign-off, managed handover",
      icon: BadgeCheck,
    },
  ];

  return (
    <>
      <section
        className="relative w-full min-h-[420px] flex items-center font-sans overflow-hidden"
        style={{ minHeight: 450 }}
      >
        {/* Background image */}
        <img
          src="/assets/images/data-banner.png"
          alt="Data center"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark overlay — stronger on left, fades right */}
        <div className="absolute inset-0" />

        {/* Warm orange tint overlay to match the brownish-orange tone of the image */}
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(80, 30, 0, 0.25)",
            mixBlendMode: "multiply",
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-10 py-24 max-w-[640px]">
          {/* Main heading */}
          <h1 className="text-4xl font-semibold text-white leading-[1.1] tracking-tight mb-5">
            50 MW Nvidia GPUs
            <br />
            Project Delivered
          </h1>

          {/* Subheading */}
          <p className="text-xl text-white/80 font-normal leading-snug mb-4">
            Turnkey data center infrastructure — designed,
            <br />
            built, and commissioned for AI-era workloads.
          </p>

          {/* Body paragraph */}
          <p className="text-[13px] text-white/80 leading-relaxed mb-8 max-w-2xl">
            From edge deployments to enterprise-scale facilities, LA
            Technologies delivers high-performance, energy-efficient data center
            builds in partnership with India's leading OEMs — engineered for
            speed, reliability, and the next generation of compute.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            {/* Primary — orange filled */}
            <button
              className="flex items-center gap-2 px-10 py-3 rounded-full font-semibold text-[14px] text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #f05236, #f7931e)",
              }}
            >
              Talk to an Expert
            </button>

            {/* Secondary — transparent white border */}
            <button className="flex items-center gap-2 px-10 py-3 rounded-full font-semibold text-[14px] text-white border border-white/70 hover:bg-white/10 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Capability Brief
            </button>
          </div>
        </div>
      </section>

      {/*India's AI Moment*/}
      <section className="py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-stretch">
          {/* Left Image */}
          <div className="w-full lg:w-[50%]">
            <div className="relative h-full min-h-[850px] overflow-hidden rounded-2xl">
              <Image
                src="/assets/images/city.png"
                alt="AI Infrastructure"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[50%]">
            <h2 className="max-w-xl text-4xl font-bold leading-tight text-[#1B2235]">
              India's AI Moment
              <br />
              Demands a Different
              <br />
              Kind of Infrastructure.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              The data center landscape is shifting at a pace traditional
              infrastructure simply cannot keep up with. AI workloads, sovereign
              cloud mandates, and enterprise digital transformation are driving
              an unprecedented surge in compute demand — and the old playbook of
              air-cooled, slow-built data centers is no longer fit for purpose.
            </p>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Card 1 */}
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <h3 className="text-4xl font-bold text-orange-500">
                  78<span className="text-xl font-medium">GW</span>
                </h3>

                <p className="mt-5 text-lg font-semibold text-[#1B2235]">
                  India AI Compute Demand
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Projected requirement by 2030
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <h3 className="text-4xl font-bold text-orange-500">6–24</h3>

                <p className="text-base font-medium text-orange-500">Months</p>

                <p className="mt-5 text-lg font-semibold text-[#1B2235]">
                  Traditional Build Timeline
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Average time to deploy a conventional data center
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <h3 className="text-3xl font-bold text-orange-500">
                  ~15
                  <span className="text-base font-medium">kW/rack</span>
                </h3>

                <p className="mt-5 text-lg font-semibold text-[#1B2235]">
                  Air-Cooled Max Rack Density
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Limit before thermal failure in standard environments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One Partner */}
      <section className="w-full bg-white py-16 font-sans">
        <div className="max-w-6xl mx-auto px-6">
          {/* ── Heading block ── */}
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-[30px] font-bold text-[#0f1f3d] tracking-tight mb-4">
              One Partner. End-to-End Delivery.
            </h2>
            <p className="text-[14.5px] text-gray-500 leading-relaxed">
              LA Technologies brings together modular infrastructure, advanced
              liquid cooling, and systems integration expertise into a single,
              accountable delivery framework. We don't sell components — we
              build complete, commissioned data centers that are ready to run
              from day one.
            </p>
          </div>

          {/* ── Cards ── */}
          <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                {/* Image + icon overlay */}
                <div className="relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[200px] object-cover"
                  />
                  {/* Subtle dark gradient at bottom for icon readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  {/* Icon — bottom left */}
                  <div className="absolute bottom-6 left-4 w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* Text */}
                <div className="px-5 pt-5 pb-8">
                  <h3 className="text-[15px] font-bold text-[#0f1f3d] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-24 font-sans">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0d1b2e] mb-3 leading-tight">
            The LA Technologies Data Center Stack
          </h2>

          <p className="max-w-lg mx-auto text-base text-gray-500 leading-relaxed mb-10">
            Every data center we build is assembled from three tightly
            integrated layers — each one best-in-class, all of them working
            together as a unified system.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {/* ── Row 1: 2 cols ── */}
          <div className="grid grid-cols-2 gap-3">
            {/* Layer 1 — blue */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: "#60A5FA" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-white/80 tracking-wide uppercase">
                  Layer 1
                </span>
              </div>
              <h3 className="text-[18px] font-bold text-white leading-snug">
                Physical Site & Facility
              </h3>
              <p className="text-[12.5px] text-white/80 leading-relaxed">
                The foundation of everything. Prefabricated modules ship
                factory-ready with IP66-rated enclosures, up to 120 minutes fire
                resistance, and configurable footprints from 40 to 180 sq. m —
                eliminating the civil construction delays that slow conventional
                builds.
              </p>
            </div>

            {/* Layer 2 — teal */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: "#1ab394" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-white/80 tracking-wide uppercase">
                  Layer 2
                </span>
              </div>
              <h3 className="text-[18px] font-bold text-white leading-snug">
                Power Infrastructure
              </h3>
              <p className="text-[12.5px] text-white/80 leading-relaxed">
                Reliable power is non-negotiable. An intelligent PDU ecosystem
                delivers granular power distribution, real-time monitoring, and
                scalable power configurations from 30 kW up to 1,280 kW —
                engineered to handle the demands of dense AI and enterprise
                workloads.
              </p>
            </div>
          </div>

          {/* ── Row 2: 3 cols ── */}
          <div className="grid grid-cols-3 gap-3">
            {/* Layer 3 — orange */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: "#f97316" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-white/80 tracking-wide uppercase">
                  Layer 3
                </span>
              </div>
              <h3 className="text-[17px] font-bold text-white leading-snug">
                Thermal & Cooling
              </h3>
              <p className="text-[12px] text-white/80 leading-relaxed">
                The density barrier, broken. Direct-to-Chip Liquid Cooling (DLC)
                and Single-Phase Liquid Immersion systems eliminate the heat
                ceiling that limits air-cooled racks at ~15 kW. Precision cold
                plates route liquid directly to processors, enabling rack
                densities up to 500 kW with a PUE as low as 1.05.
              </p>
            </div>

            {/* Layer 4 — dark gray */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: "#2d3748" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-white/80 tracking-wide uppercase">
                  Layer 4
                </span>
              </div>
              <h3 className="text-[17px] font-bold text-white leading-snug">
                Physical Security
              </h3>
              <p className="text-[12px] text-white/80 leading-relaxed">
                Access is earned, not assumed. Multi-layer physical security is
                built into every data center we deliver — perimeter barriers,
                biometric access controls, CCTV surveillance, and structured
                entry governance aligned to Tier III and enterprise compliance
                requirements.
              </p>
            </div>

            {/* Layer 5 — slate blue */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: "#4a6cf7" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="8" rx="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-white/80 tracking-wide uppercase">
                  Layer 5
                </span>
              </div>
              <h3 className="text-[17px] font-bold text-white leading-snug">
                Compute Infrastructure
              </h3>
              <p className="text-[12px] text-white/80 leading-relaxed">
                Where performance lives. We configure and integrate high-density
                server and GPU infrastructure — including NVIDIA H100 and
                B200-class systems — matched to your exact workload profile,
                rack density targets, and future scaling requirements.
              </p>
            </div>
          </div>

          {/* ── Row 3: 3 cols ── */}
          <div className="grid grid-cols-3 gap-3">
            {/* Layer 6 — dark navy */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: "#34D399" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-white/80 tracking-wide uppercase">
                  Layer 6
                </span>
              </div>
              <h3 className="text-[17px] font-bold text-white leading-snug">
                Storage Infrastructure
              </h3>
              <p className="text-[12px] text-white/80 leading-relaxed">
                Data at the speed of compute. We architect and integrate
                enterprise-grade storage — from high-throughput NVMe arrays for
                AI training workloads to resilient SAN/NAS configurations for
                business-critical applications — sized to your data pipeline and
                retention needs.
              </p>
            </div>

            {/* Layer 7 — dark navy */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: "#F87171" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="6" height="6" rx="1" />
                    <rect x="16" y="2" width="6" height="6" rx="1" />
                    <rect x="9" y="9" width="6" height="6" rx="1" />
                    <rect x="2" y="16" width="6" height="6" rx="1" />
                    <rect x="16" y="16" width="6" height="6" rx="1" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-white/80 tracking-wide uppercase">
                  Layer 7
                </span>
              </div>
              <h3 className="text-[17px] font-bold text-white leading-snug">
                Network Infrastructure
              </h3>
              <p className="text-[12px] text-white/80 leading-relaxed">
                The backbone of everything else. We design and deploy
                high-redundancy network fabrics — spine-leaf topologies, core
                switching, edge routing, and firewall placement — that meet the
                latency, throughput, and redundancy expectations of modern data
                center environments.
              </p>
            </div>

            {/* Layer 8 — dark navy */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: "#475569" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-white/80 tracking-wide uppercase">
                  Layer 8
                </span>
              </div>
              <h3 className="text-[17px] font-bold text-white leading-snug">
                Virtualisation & Orchestration
              </h3>
              <p className="text-[12px] text-white/80 leading-relaxed">
                Turning hardware into capability. VMware, KVM, or OpenStack —
                along with platforms that abstract compute and pools, reducing
                operational complexity of deployment.
              </p>
            </div>
          </div>

          {/* ── Row 4: 2 cols ── */}
          <div className="grid grid-cols-2 gap-3">
            {/* Layer 9 — dark navy */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: "#3B82F6" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-white/80 tracking-wide uppercase">
                  Layer 9
                </span>
              </div>
              <h3 className="text-[17px] font-bold text-white leading-snug">
                Cybersecurity & Compliance
              </h3>
              <p className="text-[12px] text-white/80 leading-relaxed">
                Security built in, not bolted on. Our cybersecurity practice
                spans network security architecture, zero-trust access policies,
                intrusion detection, encryption, and DPDP Act compliance
                governance — ensuring your data center meets regulatory
                requirements from day one.
              </p>
            </div>

            {/* Layer 10 — dark navy */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: "#0891B2" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-white/80 tracking-wide uppercase">
                  Layer 10
                </span>
              </div>
              <h3 className="text-[17px] font-bold text-white leading-snug">
                Operations & Management
              </h3>
              <p className="text-[12px] text-white/80 leading-relaxed">
                The layer that never sleeps. From NOC monitoring and performance
                management to incident response, capacity planning, and
                lifecycle governance — LA Technologies stays with you
                post-commissioning to ensure your environment performs at
                specification, continuously.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-8 py-16 font-sans">
        {/* ── Section header ── */}
        <div className="text-center mb-10 ">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-orange-500 mb-3">
            Our OEM Ecosystem
          </p>
          <h2 className="text-3xl font-bold text-[#0f1f3d] leading-tight tracking-tight max-w-2xl mx-auto">
            Powered by India's Most Innovative Data Center OEMs.
          </h2>
        </div>

        {/* ── Content row ── */}
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-12 items-start">
            {/* Left — text */}
            <div className="flex-1 min-w-0">
              {/* Eyebrow */}
              <p className="text-[11px] tracking-[0.15em] uppercase mb-2 text-orange-500">
                Thermal Engineering Partner
              </p>

              {/* Sub-heading */}
              <h3 className="text-xl font-bold text-[#0f1f3d] leading-snug mb-4">
                Cooling That Makes High-
                <br />
                Density Compute Possible.
              </h3>

              {/* Body */}
              <p className="text-[13.5px] text-gray-500 leading-relaxed mb-6">
                Refroid Technologies is India's pioneer in advanced liquid
                cooling for data centers, HPC, and edge computing. Their
                indigenous Direct-to-Chip and Liquid Immersion Cooling systems
                solve the fundamental limitation of modern AI infrastructure —
                heat. By routing liquid directly to the processor, Refroid
                eliminates the thermal ceiling that prevents air-cooled racks
                from scaling beyond 15 kW.
              </p>

              {/* Key Capabilities */}
              <p className="text-[13.5px] font-bold text-[#0f1f3d] mb-3">
                Key Capabilities:
              </p>
              <ul className="flex flex-col gap-4">
                {capabilities.map((cap, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="shrink-0 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f5821f"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="9 12 11 14 15 10" />
                      </svg>
                    </span>

                    <span className="text-[12.5px] text-gray-500 leading-relaxed">
                      {cap}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — image grid */}
            {/* Layout: 2 cols × 2 rows. Top-left: tall image spanning 2 rows. Top-right: 1 image. Bottom-right: 1 image */}
            <div
              className="shrink-0 grid gap-2"
              style={{
                gridTemplateColumns: "220px 220px",
                gridTemplateRows: "auto auto",
                width: 448,
              }}
            >
              {/* Left tall image — spans 2 rows */}
              <div
                className="rounded-xl overflow-hidden"
                style={{ gridRow: "1 / 3" }}
              >
                <img
                  src="/assets/images/oem1.png"
                  alt="Refroid CDU unit"
                  className="w-full h-full object-cover"
                  style={{ minHeight: 360 }}
                />
              </div>

              {/* Top-right image */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/assets/images/oem2.png"
                  alt="Liquid cooled rack"
                  className="w-full h-full object-cover"
                  style={{ minHeight: 176 }}
                />
              </div>

              {/* Bottom-right image */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/assets/images/oem3.png"
                  alt="Chip cooling closeup"
                  className="w-full h-full object-cover"
                  style={{ minHeight: 176 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-8 py-12 font-sans">
        <div className="max-w-6xl mx-auto px-8">
          {/* Title */}
          <h2 className="text-center text-3xl font-bold text-[#0d1b2e] mb-8 tracking-tight">
            Air Cooling vs. Refroid Liquid Cooling
          </h2>

          {/* Legend */}
          <div className="flex items-center justify-center gap-16 mt-8 mb-8">
            {/* Air Cooling */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-md border  bg-black/20" />
              <span className="text-[14px] font-medium text-[#5d6678a6]">
                Air Cooling
              </span>
            </div>

            {/* Refroid Liquid Cooling */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-md bg-orange-500" />
              <span className="text-[14px] font-semibold text-[#17233D]">
                Refroid Liquid Cooling
              </span>
            </div>
          </div>

          {/* Panel */}
          <div
            className="rounded-2xl px-10 py-2 mx-auto"
            style={{ background: "#f0f2f5", maxWidth: 1100 }}
          >
            {/* ── Row 1: PUE ── */}
            <div className="flex items-center gap-8 py-8 ">
              <div style={{ width: 220 }} className="shrink-0">
                <p className="text-[15px] font-bold text-[#0d1b2e] leading-snug">
                  PUE (Power Usage
                  <br />
                  Effectiveness)
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-5">
                {/* Gray full-width */}
                <div
                  className="w-full h-12 rounded-full flex items-center px-5"
                  style={{ background: "#dde1e7" }}
                >
                  <span className="text-[13.5px] text-gray-500">1.5 – 1.8</span>
                </div>
                {/* Orange 67% */}
                <div
                  className="h-12 rounded-full flex items-center px-4"
                  style={{ width: "67%", background: "#f97316" }}
                >
                  <span className="text-[13.5px] font-semibold text-white">
                    1.05
                  </span>
                </div>
              </div>
            </div>

            {/* ── Row 2: Max Rack Density ── */}
            <div className="flex items-center gap-8 py-8 ">
              <div style={{ width: 220 }} className="shrink-0">
                <p className="text-[15px] font-bold text-[#0d1b2e]">
                  Max Rack Density
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                {/* Small square + label outside */}
                <div className="flex items-center gap-4 h-12">
                  <div
                    className="shrink-0 rounded-2xl"
                    style={{ width: 60, height: 48, background: "#dde1e7" }}
                  />
                  <span className="text-[13.5px] text-gray-500">
                    ~15 kW/rack
                  </span>
                </div>
                {/* Orange full width */}
                <div
                  className="w-full h-12 rounded-full flex items-center px-5"
                  style={{ background: "#f97316" }}
                >
                  <span className="text-[13.5px] font-semibold text-white">
                    Up to 500 kW/rack
                  </span>
                </div>
              </div>
            </div>

            {/* ── Row 3: Energy Reduction ── */}
            <div className="flex items-center gap-8 py-8 ">
              <div style={{ width: 220 }} className="shrink-0">
                <p className="text-[15px] font-bold text-[#0d1b2e]">
                  Energy Reduction
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                {/* Small square + label outside */}
                <div className="flex items-center gap-4 h-12">
                  <div
                    className="shrink-0 rounded-2xl"
                    style={{ width: 60, height: 48, background: "#dde1e7" }}
                  />
                  <span className="text-[13.5px] text-gray-500">Baseline</span>
                </div>
                {/* Orange full width */}
                <div
                  className="w-full h-12 rounded-full flex items-center px-5"
                  style={{ background: "#f97316" }}
                >
                  <span className="text-[13.5px] font-semibold text-white">
                    Up to 40% Savings
                  </span>
                </div>
              </div>
            </div>

            {/* ── Row 4: Cooling Efficiency ── */}
            <div className="flex items-center gap-8 py-8">
              <div style={{ width: 220 }} className="shrink-0">
                <p className="text-[15px] font-bold text-[#0d1b2e]">
                  Cooling Efficiency
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                {/* Gray ~47% pill */}
                <div
                  className="h-12 rounded-full flex items-center px-5"
                  style={{ width: "47%", background: "#dde1e7" }}
                >
                  <span className="text-[13.5px] text-gray-500">Standard</span>
                </div>
                {/* Orange full width */}
                <div
                  className="w-full h-12 rounded-full flex items-center px-5"
                  style={{ background: "#f97316" }}
                >
                  <span className="text-[13.5px] font-semibold text-white">
                    Industry-Leading
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-8 py-24 font-sans">
        <div className="max-w-5xl mx-auto flex gap-10 items-start">
          {/* ── Left: image mosaic ── */}
          <div className="shrink-0 flex gap-4" style={{ width: 420 }}>
            {/* Left col: 2 stacked images */}
            <div className="flex flex-col gap-4" style={{ width: 160 }}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ height: 180 }}
              >
                <img
                  src="/assets/images/mod1.png"
                  alt="Data chip"
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="rounded-2xl overflow-hidden"
                style={{ height: 180 }}
              >
                <img
                  src="/assets/images/mod2.png"
                  alt="Server rack"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right col: tall image */}
            <div
              className="rounded-2xl overflow-hidden flex-1"
              style={{ height: 370 }}
            >
              <img
                src="/assets/images/mod3.png"
                alt="TierX EdgePOD X1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ── Right: text content ── */}
          <div className="flex-1 min-w-0">
            {/* Eyebrow */}
            <p
              className="text-[11px] font-bold tracking-[0.16em] uppercase mb-3"
              style={{ color: "#f97316" }}
            >
              Modular Infrastructure Partner
            </p>

            {/* Heading */}
            <h2 className="text-[30px] font-bold text-[#0d1b2e] leading-tight mb-5">
              Modular. Rapid. Enterprise-Grade.
            </h2>

            {/* Body */}
            <p className="text-[13.5px] text-gray-500 leading-relaxed mb-6">
              TierX Datacenters redefines how data centers are built. By
              manufacturing prefabricated, factory-commissioned infrastructure
              modules, TierX compresses deployment timelines from over six
              months to as few as 90 days — without sacrificing enterprise-grade
              reliability, compliance, or engineering quality. Their EdgePOD X1
              platform and OCP-aligned rack solutions are purpose-built for
              high-density AI and enterprise workloads.
            </p>

            {/* Key Capabilities */}
            <p className="text-[13.5px] font-bold text-[#0d1b2e] mb-3">
              Key Capabilities:
            </p>
            <ul className="flex flex-col gap-4">
              {capabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center mt-[2px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f5821f"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                  </span>

                  <span className="flex-1 text-[12.5px] leading-[1.7] text-gray-500">
                    {cap}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-10 py-24 font-sans">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#0f1f3d] tracking-tight mb-10">
          Deployment Timeline Comparison
        </h2>

        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* ── Design & Engineering ── */}
          <div>
            <p className="font-semibold text-[14.5px] text-[#0f1f3d] mb-1">
              Design & Engineering
            </p>
            <div className="grid grid-cols-2 gap-5 mb-1.5">
              <p className="text-[12px] text-gray-400">
                Conventional: 4–6 weeks
              </p>
              <p className="text-[12px]" style={{ color: "#22c48a" }}>
                TierX: 2–3 weeks
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div
                className="relative h-9 rounded-full overflow-hidden"
                style={{ background: "#fde8e8" }}
              >
                <div
                  className="absolute left-0 top-0 h-full rounded-full flex items-center justify-end pr-3"
                  style={{
                    width: "18.75%",
                    background: "#f05252",
                    minWidth: 90,
                  }}
                >
                  <span className="text-white text-[11.5px] font-semibold whitespace-nowrap">
                    4–6 weeks
                  </span>
                </div>
              </div>
              <div
                className="relative h-9 rounded-full overflow-hidden"
                style={{ background: "#d1fae5" }}
              >
                <div
                  className="absolute left-0 top-0 h-full rounded-full flex items-center justify-end pr-3"
                  style={{
                    width: "9.375%",
                    background: "#34d399",
                    minWidth: 80,
                  }}
                >
                  <span className="text-white text-[11.5px] font-semibold whitespace-nowrap">
                    2–3 weeks
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Procurement ── */}
          <div>
            <p className="font-semibold text-[14.5px] text-[#0f1f3d] mb-1">
              Procurement
            </p>
            <div className="grid grid-cols-2 gap-5 mb-1.5">
              <p className="text-[12px] text-gray-400">
                Conventional: 8–16 weeks
              </p>
              <p className="text-[12px]" style={{ color: "#22c48a" }}>
                TierX: 2–4 weeks
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div
                className="relative h-9 rounded-full overflow-hidden"
                style={{ background: "#fde8e8" }}
              >
                <div
                  className="absolute left-0 top-0 h-full rounded-full flex items-center justify-end pr-3"
                  style={{ width: "50%", background: "#f05252", minWidth: 100 }}
                >
                  <span className="text-white text-[11.5px] font-semibold whitespace-nowrap">
                    8–16 weeks
                  </span>
                </div>
              </div>
              <div
                className="relative h-9 rounded-full overflow-hidden"
                style={{ background: "#d1fae5" }}
              >
                <div
                  className="absolute left-0 top-0 h-full rounded-full flex items-center justify-end pr-3"
                  style={{
                    width: "12.5%",
                    background: "#34d399",
                    minWidth: 80,
                  }}
                >
                  <span className="text-white text-[11.5px] font-semibold whitespace-nowrap">
                    2–4 weeks
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Civil & Construction ── */}
          <div>
            <p className="font-semibold text-[14.5px] text-[#0f1f3d] mb-1">
              Civil & Construction
            </p>
            <div className="grid grid-cols-2 gap-5 mb-1.5">
              <p className="text-[12px] text-gray-400">
                Conventional: 16–32 weeks
              </p>
              <p className="text-[12px]" style={{ color: "#22c48a" }}>
                TierX: Eliminated
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div
                className="relative h-9 rounded-full overflow-hidden"
                style={{ background: "#fde8e8" }}
              >
                <div
                  className="absolute left-0 top-0 h-full rounded-full flex items-center justify-end pr-3"
                  style={{ width: "100%", background: "#f05252" }}
                >
                  <span className="text-white text-[11.5px] font-semibold whitespace-nowrap">
                    16–32 weeks
                  </span>
                </div>
              </div>
              <div
                className="relative h-9 rounded-full overflow-hidden"
                style={{ background: "#d1fae5" }}
              >
                <div
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{ width: "4%", background: "#34d399", minWidth: 16 }}
                />
              </div>
            </div>
          </div>

          {/* ── Factory Commission ── */}
          <div>
            <p className="font-semibold text-[14.5px] text-[#0f1f3d] mb-1">
              Factory Commission
            </p>
            <div className="grid grid-cols-2 gap-5 mb-1.5">
              <p className="text-[12px] text-gray-400">Conventional: —</p>
              <p className="text-[12px]" style={{ color: "#22c48a" }}>
                TierX: 3–4 weeks
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div
                className="relative h-9 rounded-full overflow-hidden"
                style={{ background: "#fde8e8" }}
              >
                <div
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{ width: "3%", background: "#f05252", minWidth: 14 }}
                />
              </div>
              <div
                className="relative h-9 rounded-full overflow-hidden"
                style={{ background: "#d1fae5" }}
              >
                <div
                  className="absolute left-0 top-0 h-full rounded-full flex items-center justify-end pr-3"
                  style={{
                    width: "12.5%",
                    background: "#34d399",
                    minWidth: 90,
                  }}
                >
                  <span className="text-white text-[11.5px] font-semibold whitespace-nowrap">
                    3–4 weeks
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Site Installation ── */}
          <div>
            <p className="font-semibold text-[14.5px] text-[#0f1f3d] mb-1">
              Site Installation
            </p>
            <div className="grid grid-cols-2 gap-5 mb-1.5">
              <p className="text-[12px] text-gray-400">
                Conventional: 4–8 weeks
              </p>
              <p className="text-[12px]" style={{ color: "#22c48a" }}>
                TierX: 2–3 weeks
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div
                className="relative h-9 rounded-full overflow-hidden"
                style={{ background: "#fde8e8" }}
              >
                <div
                  className="absolute left-0 top-0 h-full rounded-full flex items-center justify-end pr-3"
                  style={{ width: "25%", background: "#f05252", minWidth: 90 }}
                >
                  <span className="text-white text-[11.5px] font-semibold whitespace-nowrap">
                    4–8 weeks
                  </span>
                </div>
              </div>
              <div
                className="relative h-9 rounded-full overflow-hidden"
                style={{ background: "#d1fae5" }}
              >
                <div
                  className="absolute left-0 top-0 h-full rounded-full flex items-center justify-end pr-3"
                  style={{
                    width: "9.375%",
                    background: "#34d399",
                    minWidth: 80,
                  }}
                >
                  <span className="text-white text-[11.5px] font-semibold whitespace-nowrap">
                    2–3 weeks
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Total ── */}
          <div className="pt-6 border-t border-gray-200">
            <p className="font-bold text-[15px] text-[#0f1f3d] mb-1">Total</p>
            <div className="grid grid-cols-2 gap-5 mb-1.5">
              <p className="text-[12px] text-gray-400">
                Conventional: 6–24 months
              </p>
              <p className="text-[12px]" style={{ color: "#22c48a" }}>
                TierX: ~90 days
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div
                className="relative h-9 rounded-full overflow-hidden"
                style={{ background: "#fde8e8" }}
              >
                <div
                  className="absolute left-0 top-0 h-full rounded-full flex items-center justify-end pr-3"
                  style={{ width: "100%", background: "#f05252" }}
                >
                  <span className="text-white text-[11.5px] font-semibold whitespace-nowrap">
                    6–24 months
                  </span>
                </div>
              </div>
              <div
                className="relative h-9 rounded-full overflow-hidden"
                style={{ background: "#d1fae5" }}
              >
                <div
                  className="absolute left-0 top-0 h-full rounded-full flex items-center justify-end pr-3"
                  style={{ width: "40%", background: "#34d399", minWidth: 90 }}
                >
                  <span className="text-white text-[11.5px] font-semibold whitespace-nowrap">
                    ~90 days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full px-8 py-24 font-sans"
        style={{ background: "#fdf0e8" }}
      >
        {/* Heading */}
        <h2 className="text-center font-bold text-[#0f1f3d] tracking-tight mb-10 text-3xl">
          Built for the Workloads That Matter Most.
        </h2>

        <div className="mx-auto" style={{ maxWidth: 980 }}>
          {/* Row 1 — 3 cards */}
          <div
            className="grid gap-10 mb-8"
            style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
          >
            {workloads.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col"
              >
                <div className="relative w-full" style={{ height: 158 }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "rgba(0,0,0,0.12)" }}
                  />
                  <div
                    className="absolute flex items-center justify-center"
                    style={{
                      bottom: 12,
                      left: 12,
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: "rgba(255,255,255,0.18)",
                      backdropFilter: "blur(6px)",
                      WebkitBackdropFilter: "blur(6px)",
                    }}
                  >
                    {item.icon}
                  </div>
                </div>
                <div className="px-5 pt-4 pb-5">
                  <h3 className="font-bold text-[#0f1f3d] mb-1.5 text-[15px]">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-[12.5px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 — 2 cards centered (col 1 empty, cards in col 2 & 3, col 3... wait)
            To center 2 cards among 3 cols: use flex justify-center with each card = 1/3 width minus gap */}
          <div className="flex justify-center gap-6">
            {workloads.slice(3, 5).map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col"
                style={{ width: "calc(33.333% - 9px)" }}
              >
                <div className="relative w-full" style={{ height: 168 }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "rgba(0,0,0,0.12)" }}
                  />
                  <div
                    className="absolute flex items-center justify-center"
                    style={{
                      bottom: 12,
                      left: 12,
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: "rgba(255,255,255,0.18)",
                      backdropFilter: "blur(6px)",
                      WebkitBackdropFilter: "blur(6px)",
                    }}
                  >
                    {item.icon}
                  </div>
                </div>
                <div className="px-5 pt-4 pb-5">
                  <h3 className="font-bold text-[#0f1f3d] mb-1.5 text-[15px]">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-5  text-[12.5px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-8 py-16 font-sans">
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-[#0f1f3d] tracking-tight mb-14">
          From Brief to Go-Live. Here's How We Deliver.
        </h2>

        {/* Steps row */}
        <div className="flex items-start justify-center max-w-5xl mx-auto">
          {stepCircle.map((step, i) => (
            <div key={i} className="flex items-start">
              {/* ── Step column ── */}
              <div
                className="flex flex-col items-center text-center"
                style={{ width: 160 }}
              >
                {/* Gradient circle with inner ring effect */}
                <div
                  style={{
                    width: CIRCLE_SIZE,
                    height: CIRCLE_SIZE,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(145deg, #f05236 0%, #f7921e 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    boxShadow: "0 6px 20px rgba(240,82,54,0.35)",
                    marginBottom: 14,
                  }}
                >
                  {/* Inner ring — lighter circle outline inside */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 6,
                      borderRadius: "50%",
                      border: "1.5px solid rgba(255,255,255,0.25)",
                      pointerEvents: "none",
                    }}
                  />
                  {step.icon}
                </div>

                {/* Step number */}
                <span
                  className="font-extrabold leading-none mb-2"
                  style={{ fontSize: 26, color: "#f5821f" }}
                >
                  {step.number}
                </span>

                {/* Title */}
                <span
                  className="font-bold text-[#0f1f3d] mb-2"
                  style={{ fontSize: 14.5 }}
                >
                  {step.title}
                </span>

                {/* Description */}
                <p
                  className="text-gray-400 leading-relaxed whitespace-pre-line"
                  style={{ fontSize: 12 }}
                >
                  {step.description}
                </p>
              </div>

              {/* ── Dash connector between steps ── */}
              {i < stepCircle.length - 1 && (
                <div
                  style={{
                    paddingTop: CIRCLE_SIZE / 2, // align to circle center
                    transform: "translateY(-50%)",
                    marginTop: CIRCLE_SIZE / 2,
                    flexShrink: 0,
                    color: "#c8cdd6",
                    fontSize: 20,
                    lineHeight: 1,
                    userSelect: "none",
                    paddingLeft: 2,
                    paddingRight: 2,
                  }}
                >
                  —
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section
        className="w-full px-6 py-24 font-sans"
        style={{
          background: "linear-gradient(155deg, #1c2738 0%, #0d1520 100%)",
        }}
      >
        {/* ── Heading ── */}
        <h2 className="text-center text-[30px] font-bold text-white tracking-tight mb-10">
          Performance You Can Measure.
        </h2>

        {/* ── Always 6 cols in one row, scrollable on small screens ── */}
        <div className="overflow-x-auto">
          <div
            className="flex gap-3 min-w-max mx-auto"
            style={{ maxWidth: "1152px" }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl pt-12 pb-8 pl-5 pr-5 flex-1 min-w-[150px]"
                style={{ backgroundColor: "#1d2d3f" }}
              >
                {/* Orange stat value */}
                <span
                  className="font-bold leading-tight mb-4 text-4xl"
                  style={{ color: "#f5821f" }}
                >
                  {stat.value}
                </span>

                {/* White label */}
                <span className="text-white font-bold text-[13px] mb-1">
                  {stat.label}
                </span>

                {/* Muted description */}
                <span
                  className="text-[12px] leading-[1.5]"
                  style={{ color: "#6e8099" }}
                >
                  {stat.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1f4f7] w-full px-6 py-16 font-sans">
        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-[30px]  font-bold leading-[1.15] text-[#17233D]">
            Built to Global Standards. Delivered for Indian Scale.
          </h2>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl px-6 py-8 flex flex-col items-center text-center shadow-sm"
            >
              {/* Gradient icon circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                style={{
                  background: "linear-gradient(135deg, #f05a3a, #f5821f)",
                }}
              >
                {cert.icon}
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-bold text-[#0f1f3d] mb-2">
                {cert.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-gray-500 leading-relaxed">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="w-full py-16 px-6 flex flex-col items-center justify-center text-center"
        style={{
          background: "linear-gradient(to right, #f05a3a, #f5821f)",
        }}
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
          Let's Talk
        </h2>

        {/* Subtext */}
        <p className="text-white/90 text-[15px] max-w-xl leading-relaxed mb-8">
          Ready to build the data center your future demands? Our team is here
          to help you design, deploy, and scale your infrastructure.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-8 flex-wrap justify-center">
          {/* Primary — white bg, orange text */}
          <button className="bg-white text-orange-500 font-semibold text-[14.5px] px-10 py-4 rounded-full hover:bg-orange-50 transition-colors">
            Talk to an Expert
          </button>

          {/* Secondary — transparent, white border */}
          <button className="flex items-center gap-2 bg-transparent border border-white text-white font-semibold text-[14.5px] px-10 py-4 rounded-full hover:bg-white/10 transition-colors">
            {/* Download icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Capability Brief
          </button>
        </div>
      </section>
    </>
  );
}
