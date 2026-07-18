import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { ArrowRight } from "lucide-react";

export default function FAQ() {
  const [active, setActive] = useState(0);
  const faqs = [
    {
      question: "What is MLM Software?",
      answer:
        "MLM Software is a complete business management solution that automates distributor management, genealogy tracking, commission calculation, payouts, e-wallet, reports, and overall network marketing operations.",
    },
    {
      question: "How does MLM Software help grow my business?",
      answer:
        "MLM Software simplifies daily operations by automating commissions, managing distributors, generating reports, and improving overall efficiency, allowing businesses to focus on growth.",
    },
    {
      question: "Which MLM compensation plans are supported?",
      answer:
        "Our MLM Software supports Binary, Matrix, Unilevel, Board, Generation, Monoline, Gift, Hybrid, Party, Australian Binary, Stair Step, and many custom compensation plans.",
    },
    {
      question: "Can I customize the MLM compensation plan?",
      answer:
        "Yes. The software is fully customizable. We can modify commission rules, bonuses, ranks, matching bonuses, and payout structures according to your business requirements.",
    },
    {
      question: "Is the MLM Software secure?",
      answer:
        "Yes. We use advanced security practices including SSL encryption, secure authentication, database protection, role-based access control, and regular backups.",
    },
    {
      question: "Does the software support e-wallet functionality?",
      answer:
        "Yes. Members can securely manage income, transfers, withdrawals, fund requests, and wallet balances through the integrated e-wallet system.",
    },
  ];

  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-7xl px-5 py-16">
        {/* Header row */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold text-black md:text-4xl">
              Frequently asked <span className="text-orange-600">question</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 md:text-base">
              Here&rsquo;s everything you need to know to get started, manage
              your account, and troubleshoot the most frequent issues.
            </p>
          </div>
        </div>

        {/* FAQ grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((faq, index) => {
            const isActive = active === index;
            return (
              <div
                key={index}
                className={`rounded-2xl p-6 transition ${
                  isActive ? "bg-white shadow-md" : "bg-white/70 hover:bg-white hover:shadow-sm"
                }`}
              >
                <button
                  onClick={() => setActive(isActive ? null : index)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                >
                  <h3 className="text-base font-semibold text-gray-900 md:text-lg">
                    {faq.question}
                  </h3>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                      isActive ? "bg-orange-600 text-white" : "bg-slate-200 text-gray-700"
                    }`}
                  >
                    {isActive ? <FiMinus size={16} /> : <FiPlus size={16} />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isActive ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pr-10 text-sm leading-6 text-gray-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <section className="flex w-full justify-center bg-white py-10">
        <div className="mt-10 w-full max-w-6xl overflow-hidden rounded-[28px] bg-[#2f2f2f]">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            <div className="relative z-20 px-6 py-10 md:px-12 md:py-16">
              <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                Ready to Transform Your
                <br />
                Financial Management?
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-gray-300 md:text-base">
                Experience the future of finance with our cutting-edge SaaS
                platform. Start optimizing your financial operations today!
              </p>

              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-black transition hover:scale-105">
                Schedule a Demo
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Right side: laptop + mobile device frame mockup */}
            <div className="relative flex items-center justify-center px-6 py-14 md:px-10 md:py-16">
              <div className="relative h-[340px] w-full max-w-lg md:h-[320px]">

                {/* Laptop frame */}
                <div className="absolute left-1/2 top-2 w-[78%] max-w-[420px] -translate-x-[58%]">
                  {/* screen */}
                  <div className="rounded-t-xl border-[6px] border-b-0 border-neutral-700 bg-neutral-800 p-2 shadow-2xl">
                    <div className="aspect-[16/10] w-full overflow-hidden rounded-md bg-slate-900">
                      {/* Laptop screen image — apni image ka URL / import yahan daalein */}
                      <img
                        src="/footer (1).png"
                        alt="Dashboard preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  {/* base */}
                  <div className="relative h-3 rounded-b-md bg-neutral-600">
                    <div className="absolute left-1/2 top-full h-1.5 w-[112%] -translate-x-1/2 rounded-b-2xl bg-neutral-500" />
                  </div>
                </div>

                {/* Mobile frame */}
                <div className="absolute bottom-0 right-2 w-[130px] rotate-[6deg] shadow-2xl md:right-4 md:w-[150px]">
                  <div className="rounded-[26px] border-[6px] border-neutral-800 bg-neutral-900 p-1.5">
                    {/* notch */}
                    <div className="absolute left-1/2 top-1.5 z-10 h-2 w-10 -translate-x-1/2 rounded-full bg-neutral-800" />
                    <div className="aspect-[9/19] w-full overflow-hidden rounded-[18px] bg-slate-900">
                      {/* Mobile screen image — apni image ka URL / import yahan daalein */}
                      <img
                        src="/footer (2).png"
                        alt="Mobile app preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}