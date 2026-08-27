import Image from "next/image";

const services = [
  {
    title: "CNC & VMC Precision Machining",
    description:
      "High-precision machining of components to I.S., B.S., and ASTM standards using state-of-the-art CNC and VMC equipment.",
  },
  {
    title: "Fabrication of Industrial Equipment",
    description:
      "Custom fabrication of chemical storage tanks, centrifugal blowers, pelleting machines, rotary air locks, and more.",
  },
  {
    title: "Repair & Reclamation",
    description:
      "Specialized services in reclamation and repair of spare parts and equipment to extend asset life and reduce downtime.",
  },
];

const products = [
  "Pelleting Machines",
  "Chemical Storage Tanks",
  "Centrifugal Blowers",
  "Hydraulic Jib Cranes",
  "Rotary Air Locks",
  "Material Handling Conveyors",
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Image src="/logo.svg" alt="Agarwal Engineering" width={200} height={40} priority />
          <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="transition-colors hover:text-blue-700">
              About
            </a>
            <a href="#services" className="transition-colors hover:text-blue-700">
              Services
            </a>
            <a href="#products" className="transition-colors hover:text-blue-700">
              Products
            </a>
            <a href="#contact" className="transition-colors hover:text-blue-700">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-blue-700">
              ISO 9001:2015 Certified
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Precision Engineering &amp; Manufacturing Since 1992
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Agarwal Engineering Technologies Pvt Ltd specializes in multi-product
              manufacturing of precision components, heavy mechanical spares, and
              custom industrial machines — guided by our Zero Defect, Zero Effect
              philosophy.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-800"
              >
                Get in Touch
              </a>
              <a
                href="#services"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400"
              >
                Our Services
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              About Us
            </h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-slate-600">
              Established in 1992 as Agarwal Engineers &amp; Associates, we bring over
              three decades of expertise in engineering and tool room manufacturing. With
              cutting-edge CAD/CAM technologies and a dedicated team of engineers,
              technicians, and YUKEN Certified Fluid Power Professionals, we deliver
              innovative and reliable solutions across Kanpur and beyond.
            </p>
          </div>
        </section>

        <section id="services" className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Our Services
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-medium text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Featured Products
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <li
                  key={product}
                  className="rounded-lg border border-slate-200 px-5 py-4 text-sm font-medium text-slate-700"
                >
                  {product}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Contact Us</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wide text-slate-400">
                  Unit 1
                </h3>
                <p className="mt-2 text-slate-300">
                  S-25, Site-4, Panki Industrial Area
                  <br />
                  Kanpur, Uttar Pradesh 208022
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wide text-slate-400">
                  Unit 2
                </h3>
                <p className="mt-2 text-slate-300">
                  S-38, Site-4, Panki Industrial Area
                  <br />
                  Kanpur, Uttar Pradesh 208022
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wide text-slate-400">
                  Phone
                </h3>
                <p className="mt-2 text-slate-300">
                  +91 8299092728
                  <br />
                  +91 9140181381
                  <br />
                  +91 9415126316
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wide text-slate-400">
                  Email
                </h3>
                <p className="mt-2 text-slate-300">
                  <a
                    href="mailto:aetech.ind@gmail.com"
                    className="transition-colors hover:text-white"
                  >
                    aetech.ind@gmail.com
                  </a>
                  <br />
                  <a
                    href="mailto:contact@agarwalengineering.com"
                    className="transition-colors hover:text-white"
                  >
                    contact@agarwalengineering.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Agarwal Engineering Technologies Pvt Ltd. All
          rights reserved.
        </div>
      </footer>
    </div>
  );
}
