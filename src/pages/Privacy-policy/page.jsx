import { ShieldCheck, Lock, Database, Mail, Globe } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWxtfGVufDB8fDB8fHww"
          alt="Privacy Policy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center">
           
            <h1 className="mt-6 text-5xl md:text-7xl font-black text-orange-500">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-gray-200">
              Your privacy is important to us. We are committed to protecting
              your personal information and ensuring transparency in how data
              is collected, used, and stored.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-xl">

            <p className="text-gray-600 leading-8">
              Last Updated: June 2026
            </p>

            <div className="mt-12 space-y-12">

              {/* Section */}
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <ShieldCheck className="text-orange-500" size={28} />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Introduction
                  </h2>
                </div>

                <p className="text-gray-600 leading-8">
                  India MLM Software respects your privacy and is committed to
                  safeguarding the information shared with us. This Privacy
                  Policy explains how we collect, use, maintain, and protect
                  your personal information when you access our website,
                  products, and services.
                </p>
              </div>

              {/* Data Collection */}
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <Database className="text-orange-500" size={28} />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Information We Collect
                  </h2>
                </div>

                <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-6">
                  <li>Name, email address, and contact information.</li>
                  <li>Business and company details provided during inquiries.</li>
                  <li>Technical information such as browser type and IP address.</li>
                  <li>Usage analytics to improve our website experience.</li>
                </ul>
              </div>

              {/* Usage */}
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <Globe className="text-orange-500" size={28} />
                  <h2 className="text-3xl font-bold text-gray-900">
                    How We Use Your Information
                  </h2>
                </div>

                <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-6">
                  <li>To provide MLM software solutions and support services.</li>
                  <li>To improve our products and website performance.</li>
                  <li>To communicate regarding inquiries, demos, and updates.</li>
                  <li>To maintain security and prevent unauthorized activities.</li>
                </ul>
              </div>

              {/* Security */}
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <Lock className="text-orange-500" size={28} />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Data Security
                  </h2>
                </div>

                <p className="text-gray-600 leading-8">
                  We implement industry-standard security measures, encryption,
                  secure servers, and restricted access controls to protect your
                  information against unauthorized access, misuse, or disclosure.
                </p>
              </div>

              {/* Third Party */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-5">
                  Third-Party Services
                </h2>

                <p className="text-gray-600 leading-8">
                  We may use trusted third-party providers for analytics,
                  payment processing, hosting, and customer communication.
                  These partners are required to maintain confidentiality and
                  comply with applicable data protection regulations.
                </p>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-5">
                  Cookies Policy
                </h2>

                <p className="text-gray-600 leading-8">
                  Our website may use cookies to enhance user experience,
                  analyze traffic, and improve functionality. You may disable
                  cookies through your browser settings at any time.
                </p>
              </div>

              {/* User Rights */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-5">
                  Your Rights
                </h2>

                <ul className="space-y-3 text-gray-600 leading-8 list-disc pl-6">
                  <li>Request access to your personal information.</li>
                  <li>Correct inaccurate or outdated information.</li>
                  <li>Request deletion of your data where legally permitted.</li>
                  <li>Withdraw consent for marketing communications.</li>
                </ul>
              </div>

              {/* Contact */}
              <div className="rounded-3xl bg-orange-50 p-8 border border-orange-100">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="text-orange-500" size={28} />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Contact Us
                  </h2>
                </div>

                <p className="text-gray-700 leading-8">
                  If you have any questions regarding this Privacy Policy,
                  please contact India MLM Software.
                </p>

                <div className="mt-6 space-y-2 text-gray-700">
                  <p>Email: info@tecai.in</p>
                  <p>Number: +91 7024031779</p>
                </div>
              </div>    

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default PrivacyPolicy;