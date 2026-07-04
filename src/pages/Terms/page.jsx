import {
  FileText,
  CreditCard,
  Shield,
  Code2,
  Headphones,
  Scale,
} from "lucide-react";

const TermsConditions = () => {
  const sections = [
    {
      icon: <FileText size={24} />,
      title: "Acceptance of Terms",
      content:
        "By accessing or using India MLM Software services, you agree to comply with these terms and conditions. If you do not agree with any part of these terms, you should discontinue using our services immediately.",
    },
    {
      icon: <Code2 size={24} />,
      title: "MLM Software Services",
      content:
        "India MLM provides Binary, Matrix, Unilevel, Board, Generation, Investment, Hybrid, and custom MLM software development solutions. All projects are developed according to approved requirements and documented specifications.",
    },
    {
      icon: <CreditCard size={24} />,
      title: "Payment Terms",
      content:
        "Clients must complete payments according to agreed milestones. Development work begins after the initial advance payment. Delays in payment may affect project timelines and deployment schedules.",
    },
    {
      icon: <Shield size={24} />,
      title: "Source Code & Ownership",
      content:
        "Source code ownership is transferred only after full payment completion. India MLM retains rights to proprietary frameworks, reusable modules, and third-party licensed components.",
    },
    {
      icon: <Headphones size={24} />,
      title: "Support & Maintenance",
      content:
        "Technical support is provided according to the selected package. Additional customization, server management, or third-party integrations may require separate maintenance agreements.",
    },
    {
      icon: <Scale size={24} />,
      title: "Limitation of Liability",
      content:
        "India MLM shall not be responsible for indirect losses, business interruptions, third-party service failures, or misuse of the software beyond agreed contractual obligations.",
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="relative h-[420px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1sbSUyMHNvZnR3YXJlfGVufDB8fDB8fHww"
          alt="Terms & Conditions"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 flex h-full items-center justify-center px-4">

          <div className="text-center max-w-4xl">

          

            <h1 className="mt-6 text-5xl md:text-7xl font-black text-orange-500">
              Terms & Conditions
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-200">
              These terms govern the use of our MLM software products,
              development services, support solutions, and digital platforms.
            </p>

          </div>

        </div>

      </section>

      {/* Content */}
      <section className="py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="mb-12 text-center">

            <h2 className="text-4xl font-black text-gray-900">
              Our Terms Of Service
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Please read these terms carefully before engaging with our
              software development and support services.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {sections.map((section, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                  {section.icon}
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {section.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {section.content}
                </p>
              </div>
            ))}

          </div>

          {/* Additional Terms */}
          <div className="mt-16 rounded-[32px] bg-gray-50 p-10">

            <h3 className="text-3xl font-black text-gray-900">
              Additional Policies
            </h3>

            <ul className="mt-8 space-y-4 text-gray-700 leading-8">
              <li>• Custom feature requests may require additional development charges.</li>
              <li>• Refunds are not applicable once development work has started.</li>
              <li>• Clients are responsible for ensuring legal compliance in their operating regions.</li>
              <li>• Hosting, domain, SMS gateways, and payment integrations may involve third-party providers.</li>
              <li>• Unauthorized reproduction or redistribution of our software products is strictly prohibited.</li>
            </ul>

          </div>

          {/* Contact Box */}
          <div className="mt-16 rounded-[32px] bg-gradient-to-r from-orange-500 to-orange-600 p-10 text-center text-white">

            <h3 className="text-3xl font-black">
              Questions About Our Terms?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-orange-100 leading-8">
              If you have any questions regarding these Terms & Conditions,
              please contact the India MLM support team for further assistance.
            </p>

             <div className="mt-6 space-y-2 text-white">
                  <p>Email: info@tecai.in</p>
                  <p>Number: +91 7024031779</p>
                </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default TermsConditions;