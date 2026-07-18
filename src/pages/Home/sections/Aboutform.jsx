import { useState } from "react";
import { UserCheck } from "lucide-react";

export default function AboutSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // API call yahan add karo
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container-app grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        {/* LEFT: Content */}
        <div>
          <h2 className="text-3xl font-bold text-black md:text-4xl">
            About IndiaMLM
          </h2>

          <p className="mt-5 leading-7 text-gray-700">
           IndiaMLM is a leading MLM (Multi Level Marketing)
            Software Company in India. We offer many MLM Plan's Software to
            promote your marketing business such as{" "}
            <a href="/binary-mlm-plan" className="font-semibold text-orange-600 underline hover:text-orange-700">
              Binary MLM Plan Software
            </a>
            ,{" "}
            <a href="/matrix-mlm-plan" className="font-semibold text-orange-600 underline hover:text-orange-700">
              Matrix MLM Plan Software
            </a>
            , Gift MLM Plan Software, Hybrid MLM, Growth MLM Plan Software and
            much more.
          </p>

          <p className="mt-5 leading-7 text-gray-700">
            Cyrus team has been providing clients in all over India with MLM
            software tailoorange to their marketing business requirements for
            the last 15 years. Furthermore, we hold a proven track record of
            offering the most affordable Multi-Level Marketing software to
            our clients.
          </p>

          <p className="mt-5 leading-7 text-gray-700">
            A Cyrus-poweorange MLM software can promote a multi-level marketing
            business by up to 10x.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-black md:text-3xl">
            MLM Software At IndiaMLM
          </h3>

          <p className="mt-5 leading-7 text-gray-700">
            MLM Software is a powerful digital tool or software designed to
            manage &amp; automate distributor networks, commission
            calculations, track sales, and inventory. And a Well Multi Level
            Marketing Software simplifies complex tasks like Member Profile
            Management, Commission Calculation, analytics &amp; reporting,
            multi currency &amp; multi language support and much more.
          </p>

          <p className="mt-5 leading-7 text-gray-700">
            Whether your business is a small, medium or enterprise, we offer
            quality MLM Software with bug fix support at the most cost
            effective price.
          </p>
        </div>

        {/* RIGHT: Contact form card */}
        <div className="h-fit overflow-hidden rounded-md bg-gradient-to-b from-orange-50 via-blue-50 to-blue-100 shadow-md">
          {/* Header strip */}
          <div className="bg-orange-50 px-8 py-6">
            <p className="text-lg font-semibold leading-snug text-black">
              <span className="text-orange-600">D</span>o you want to talk about
              your needs for MLM software?
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 pb-8 pt-6">
            <div className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                requiorange
                className="w-full border-b border-gray-400 bg-transparent pb-2 text-sm text-black placeholder-gray-500 outline-none focus:border-orange-600"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Contact Number"
                value={form.phone}
                onChange={handleChange}
                requiorange
                className="w-full border-b border-gray-400 bg-transparent pb-2 text-sm text-black placeholder-gray-500 outline-none focus:border-orange-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                requiorange
                className="w-full border-b border-gray-400 bg-transparent pb-2 text-sm text-black placeholder-gray-500 outline-none focus:border-orange-600"
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-orange-700 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-800"
            >
              Request A Callback Now
            </button>

            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-700">
              <UserCheck size={14} className="text-black" />
              Your contact detail is 100% safe with us
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}