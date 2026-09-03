import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Precision machining",
    copy: "CNC, VMC and conventional turning, milling, drilling, grinding and shaping for close tolerance components.",
    detail: "CNC · VMC · EDM · Grinding",
  },
  {
    number: "02",
    title: "Process equipment",
    copy: "Custom fabrication of tanks, hoppers, cyclones, mixers, blowers, conveyors and plant equipment in SS and MS.",
    detail: "Design · Fabrication · Assembly",
  },
  {
    number: "03",
    title: "Repair & reclamation",
    copy: "Restoration and overhaul of gearboxes, pumps, shafts, housings and critical assemblies to working condition.",
    detail: "Repair · Hard-facing · Rebuild",
  },
  {
    number: "04",
    title: "Prototyping & R&D",
    copy: "Reverse engineering, design revalidation and indigenous development of import substitute components.",
    detail: "Prototype · Validate · Produce",
  },
];

const qualityProof = [
  "ISO 9001:2015 quality management",
  "ZED Bronze certified under MSME",
  "AWS certified welding professionals",
  "In-house NDT Level II professionals",
  "NABL laboratory material testing",
  "Calibrated inspection instruments",
];

const industries = [
  "Defence & aerospace",
  "Mining & minerals",
  "Process industries",
  "Research institutions",
  "Government PSUs",
  "Industrial OEMs",
];

const machiningDetails = [
  ["Processes", "Turning, milling, drilling, grinding, shaping"],
  ["Materials", "Carbon steel, stainless steel, alloy steel, non-ferrous metals"],
  ["Input", "Customer drawing, sample or functional requirement"],
  ["Output", "Prototype, small batch or production component"],
];

const sectionKicker =
  "text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e87524]";
const sectionHeading =
  "m-0 text-[clamp(42px,5vw,70px)] leading-[1.03] font-medium tracking-[-0.05em]";
const arrowLink =
  "inline-flex items-center gap-3 transition-colors duration-200 [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-1";

function Arrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="h-4 w-4 fill-none stroke-current stroke-[1.5]"
    >
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="relative z-10 grid min-h-[72px] grid-cols-[1fr_auto] items-center border-b border-black/15 bg-[#fffef9] px-[18px] md:min-h-[84px] md:px-[4vw] lg:grid-cols-[1fr_auto_1fr]">
        <a
          className="flex w-fit items-center gap-3"
          href="#top"
          aria-label="Agarwal Engineering Technologies home"
        >
          <Image
            src="/agarwal-logo.png"
            alt=""
            width={49}
            height={40}
            className="h-[34px] w-[43px] object-contain md:h-10 md:w-[49px]"
            priority
          />
          <span className="flex flex-col leading-[1.05]">
            <strong className="text-[11px] font-semibold tracking-[-0.01em] md:text-[13px]">
              Agarwal Engineering
            </strong>
            <small className="mt-[5px] text-[7px] uppercase tracking-[0.12em] text-[#676b67] md:text-[9px]">
              Technologies Pvt. Ltd.
            </small>
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 text-[13px] text-[#4f534f] lg:flex"
        >
          {[
            ["Capabilities", "#capabilities"],
            ["Quality", "#quality"],
            ["Industries", "#industries"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="transition-colors hover:text-[#e87524]">
              {label}
            </a>
          ))}
        </nav>

        <a
          className={`${arrowLink} h-10 w-10 justify-center justify-self-end bg-[#161918] text-[0px] font-semibold text-white md:h-auto md:w-auto md:bg-transparent md:text-[13px] md:text-[#161918] lg:gap-3`}
          href="mailto:contact@agarwalengineering.com"
        >
          Request a quote <Arrow />
        </a>
      </header>

      <section
        id="top"
        className="flex min-h-0 flex-col bg-[#161918] text-[#fffef9] md:grid md:min-h-[690px] md:grid-cols-[58%_42%] lg:grid-cols-[53%_47%]"
      >
        <div className="relative flex min-h-[560px] flex-col justify-center overflow-hidden px-6 py-[68px] md:min-h-0 md:px-[5vw] md:py-[90px] lg:px-[7vw] lg:py-[112px] after:pointer-events-none after:absolute after:inset-0 after:opacity-[0.09] after:[background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] after:[background-size:56px_56px] after:[mask-image:linear-gradient(to_bottom_right,black,transparent_78%)]">
          <div className="relative z-[1] flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d8d6cf]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#e87524]" />
            Precision engineering since 1992
          </div>
          <h1 className="relative z-[1] my-7 mt-[35px] max-w-[830px] text-[clamp(48px,13vw,68px)] leading-[0.98] font-medium tracking-[-0.055em] md:my-11 md:mb-7 md:text-[clamp(54px,5.4vw,86px)]">
            Built to specification.
            <br />
            Engineered to perform.
          </h1>
          <p className="relative z-[1] m-0 max-w-[580px] text-[15px] leading-[1.7] text-[#b9bcb8] md:text-[17px]">
            Precision components, heavy mechanical spares and custom machinery for demanding industrial applications.
          </p>
          <div className="relative z-[1] mt-[46px] flex flex-col items-start gap-[22px] md:flex-row md:items-center md:gap-[30px]">
            <a
              className="inline-flex min-h-[52px] w-fit items-center gap-[18px] bg-[#e87524] px-5 text-[13px] font-semibold text-[#151615] transition-transform duration-200 hover:-translate-y-0.5"
              href="mailto:contact@agarwalengineering.com"
            >
              Discuss your requirement <Arrow />
            </a>
            <a
              className={`${arrowLink} text-[13px] text-[#d6d7d3]`}
              href="#capabilities"
            >
              Explore capabilities <Arrow />
            </a>
          </div>
        </div>

        <div className="relative min-h-[450px] overflow-hidden md:min-h-[690px] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(90deg,rgba(22,25,24,.28),transparent_36%),linear-gradient(0deg,rgba(0,0,0,.3),transparent_45%)]">
          <Image
            src="/facility.png"
            alt="A welding professional at work in the Agarwal Engineering facility"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 47vw"
            className="object-cover object-center saturate-[.75] contrast-105"
          />
          <div className="absolute bottom-8 left-8 z-[1] min-w-[230px] bg-[#fffef9]/95 px-5 py-4 text-[#161918] backdrop-blur-xl">
            <span className="mb-1.5 block text-[9px] uppercase tracking-[0.16em] text-[#676b67]">
              Kanpur, India
            </span>
            <strong className="text-[13px] font-semibold">Two manufacturing units</strong>
          </div>
        </div>
      </section>

      <section
        className="grid grid-cols-2 border-b border-black/15 bg-[#fffef9] md:grid-cols-4"
        aria-label="Company highlights"
      >
        {[
          ["30+", "Years of engineering", "experience"],
          ["ISO", "9001:2015 certified", "quality systems"],
          ["02", "Manufacturing units", "in Panki, Kanpur"],
          ["360°", "Design to dispatch", "capability"],
        ].map(([value, line1, line2], index) => (
          <div
            key={value}
            className={`flex min-h-[125px] items-center gap-[18px] border-b border-black/15 px-6 py-6 md:min-h-[150px] md:border-b-0 md:px-[2.5vw] lg:px-[4vw] ${
              index % 2 === 0 ? "border-r" : "md:border-r"
            } ${index === 3 ? "md:border-r-0" : ""}`}
          >
            <strong className="text-[26px] font-medium tracking-[-0.04em] text-[#e87524] md:text-[32px]">
              {value}
            </strong>
            <span className="text-[10px] leading-[1.5] text-[#676b67] lg:text-xs">
              {line1}
              <br />
              {line2}
            </span>
          </div>
        ))}
      </section>

      <section id="capabilities" className="px-6 py-[82px] md:px-[5vw] md:py-[120px] lg:px-[7vw]">
        <div className={sectionKicker}>What we do</div>
        <div className="mt-7 grid grid-cols-1 items-end gap-7 md:grid-cols-[1fr_.7fr] md:gap-[10vw]">
          <h2 className={sectionHeading}>
            Engineering depth,
            <br />
            under one roof.
          </h2>
          <p className="m-0 max-w-[540px] text-sm leading-[1.75] text-[#676b67] md:mb-1 md:text-[15px]">
            From a drawing, sample or operating requirement, our team designs, machines, fabricates and restores components that keep critical operations moving.
          </p>
        </div>

        <div className="mt-14 border-t border-black/15 md:mt-[84px]">
          {services.map((service) => (
            <article
              className="grid grid-cols-[35px_1fr] gap-x-2.5 gap-y-3 border-b border-black/15 py-6 transition-all duration-200 hover:bg-white/55 md:grid-cols-[.16fr_.75fr_1.2fr] md:gap-[30px] md:py-[31px] md:hover:px-3.5 lg:grid-cols-[.28fr_.9fr_1.15fr_.65fr]"
              key={service.number}
            >
              <span className="text-[11px] text-[#e87524]">{service.number}</span>
              <h3 className="m-0 text-xl font-medium tracking-[-0.025em] md:text-[23px]">
                {service.title}
              </h3>
              <p className="col-start-2 m-0 max-w-[500px] text-[13px] leading-[1.65] text-[#676b67] md:col-start-auto">
                {service.copy}
              </p>
              <span className="hidden justify-self-end text-[10px] uppercase tracking-[0.1em] text-[#7a7e79] lg:block">
                {service.detail}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="grid min-h-0 grid-cols-1 bg-[#202422] text-[#fffef9] md:min-h-[760px] md:grid-cols-2">
        <div className="relative min-h-[520px] overflow-hidden">
          <Image
            src="/cnc-machined-parts.jpg"
            alt="Close tolerance CNC machined metal components"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover saturate-[.8] grayscale-[.15]"
          />
          <span className="absolute bottom-6 left-6 bg-[#e87524] px-3.5 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#161918]">
            Precision in every surface
          </span>
        </div>
        <div className="flex flex-col justify-center px-6 py-[78px] md:px-[5vw] md:py-[100px] lg:px-[7vw]">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#efa36b]">
            Machining capability
          </div>
          <h2 className="my-7 text-[clamp(40px,4.5vw,68px)] leading-[1.02] font-medium tracking-[-0.05em] md:mb-[30px]">
            Complex geometry.
            <br />
            Repeatable accuracy.
          </h2>
          <p className="m-0 max-w-[590px] text-[15px] leading-[1.8] text-[#b9bdb9]">
            Advanced CAD/CAM capability combined with CNC, VMC and conventional machining enables dependable production across one-off development and repeat requirements.
          </p>
          <dl className="mt-[50px] mb-0 border-t border-white/15">
            {machiningDetails.map(([term, description]) => (
              <div
                key={term}
                className="grid grid-cols-[90px_1fr] gap-5 border-b border-white/15 py-[18px] md:grid-cols-[115px_1fr] md:gap-[25px]"
              >
                <dt className="text-[10px] uppercase tracking-[0.1em] text-[#90958f]">{term}</dt>
                <dd className="m-0 text-xs leading-[1.5] text-[#e7e7e3]">{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="quality" className="grid grid-cols-1 gap-[58px] px-6 py-[82px] md:grid-cols-[.8fr_1fr] md:gap-[10vw] md:px-[5vw] md:py-[120px] lg:px-[7vw]">
        <div>
          <div className={sectionKicker}>Quality assurance</div>
          <h2 className="mt-7 text-[clamp(40px,4.6vw,66px)] leading-[1.03] font-medium tracking-[-0.05em]">
            Quality is built into the process, not inspected in at the end.
          </h2>
          <p className="mt-[30px] max-w-[540px] text-[15px] leading-[1.75] text-[#676b67]">
            Material verification, in-process supervision and final inspection are structured around recognised standards and documented control.
          </p>
        </div>
        <div className="grid grid-cols-1 self-end md:grid-cols-2">
          {qualityProof.map((item, index) => (
            <div
              className="grid min-h-[115px] grid-cols-[42px_1fr] border-t border-black/15 py-[22px] md:block md:min-h-[155px] md:px-[18px] md:pt-6 md:pb-5 md:odd:border-r md:odd:pl-0 md:even:pl-6"
              key={item}
            >
              <span className="text-[10px] text-[#e87524]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="m-0 max-w-none text-sm leading-[1.45] md:mt-[38px] md:max-w-[190px]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid min-h-0 grid-cols-1 bg-[#a64f20] text-[#fffef9] md:min-h-[670px] md:grid-cols-[.78fr_1.22fr]">
        <div className="flex flex-col justify-center px-6 py-[78px] md:px-[5vw] md:py-[90px] lg:pl-[7vw]">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#efa36b]">
            Heavy fabrication
          </div>
          <h2 className="my-7 text-[clamp(40px,4.5vw,68px)] leading-[1.02] font-medium tracking-[-0.05em] md:mb-[30px]">
            Custom equipment,
            <br />
            built around your process.
          </h2>
          <p className="m-0 max-w-[590px] text-[15px] leading-[1.8] text-[#e2c4b2]">
            Tanks, hoppers, blowers, conveyors, mixers and other fabricated assemblies manufactured to customer drawings and application requirements.
          </p>
          <a
            className="mt-[42px] inline-flex min-h-[52px] w-fit items-center gap-[18px] bg-[#fffef9] px-5 text-[13px] font-semibold text-[#161918] transition-transform duration-200 hover:-translate-y-0.5"
            href="mailto:contact@agarwalengineering.com"
          >
            Start a project discussion <Arrow />
          </a>
        </div>
        <div className="relative mx-4 mb-4 min-h-[430px] overflow-hidden bg-[#d6d3ca] md:mx-0 md:my-7 md:mr-7">
          <Image
            src="/fabrication-tank.jpg"
            alt="Large custom fabricated industrial tank being handled at the facility"
            fill
            sizes="(max-width: 767px) 100vw, 61vw"
            className="object-cover object-center saturate-[.72] contrast-105 mix-blend-multiply"
          />
          <div className="absolute right-[22px] bottom-[22px] min-w-[230px] bg-[#fffef9] px-5 py-[17px] text-[#161918]">
            <span className="mb-1.5 block text-[9px] uppercase tracking-[0.16em] text-[#676b67]">
              Fabrication scope
            </span>
            <strong className="text-[13px] font-semibold">SS · MS · Custom alloys</strong>
          </div>
        </div>
      </section>

      <section id="industries" className="px-6 py-[82px] md:px-[5vw] md:py-[120px] lg:px-[7vw]">
        <div className={sectionKicker}>Sectors served</div>
        <div className="mt-7 grid grid-cols-1 gap-7 md:grid-cols-[.9fr_1fr] md:gap-[10vw]">
          <h2 className={sectionHeading}>Trusted where performance and reliability matter.</h2>
          <div className="border-t border-black/15">
            {industries.map((industry, index) => (
              <div
                className="grid grid-cols-[60px_1fr] gap-5 border-b border-black/15 py-6"
                key={industry}
              >
                <span className="text-[10px] text-[#e87524]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong className="text-lg font-medium">{industry}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="grid grid-cols-1 items-end gap-[50px] bg-[#161918] px-6 py-20 text-[#fffef9] md:grid-cols-[1.15fr_.85fr] md:gap-[10vw] md:px-[5vw] md:py-[100px] lg:px-[7vw]">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#efa36b]">
            Start a conversation
          </div>
          <h2 className="my-7 max-w-[840px] text-[clamp(40px,4.5vw,68px)] leading-[1.02] font-medium tracking-[-0.05em] md:mb-[22px]">
            Have a drawing, sample or difficult engineering problem?
          </h2>
          <p className="text-[15px] text-[#aeb2ad]">Share your requirement with our engineering team.</p>
        </div>
        <div className="border-t border-white/15">
          <a
            className="flex items-center justify-between gap-5 border-b border-white/15 py-6 text-sm transition-colors hover:text-[#efa36b]"
            href="mailto:contact@agarwalengineering.com"
          >
            contact@agarwalengineering.com <Arrow />
          </a>
          <a
            className="flex items-center justify-between gap-5 border-b border-white/15 py-6 text-sm transition-colors hover:text-[#efa36b]"
            href="tel:+918299092728"
          >
            +91 82990 92728 <Arrow />
          </a>
        </div>
      </section>

      <footer className="grid min-h-[118px] grid-cols-1 items-center gap-[18px] bg-[#0d0f0e] px-6 py-8 text-left text-[10px] tracking-[0.05em] text-[#7f847f] md:grid-cols-3 md:px-[4vw] md:py-[30px]">
        <div className="flex items-center gap-2.5 text-[#d8dad6]">
          <Image
            src="/agarwal-logo.png"
            alt=""
            width={40}
            height={32}
            className="h-8 w-10 object-contain"
          />
          <span>Agarwal Engineering Technologies Pvt. Ltd.</span>
        </div>
        <p className="m-0 md:text-center">S-25, Site 4, Panki Industrial Area, Kanpur 208022</p>
        <p className="m-0 md:text-right">© {new Date().getFullYear()} Agarwal Engineering Technologies</p>
      </footer>
    </main>
  );
}
