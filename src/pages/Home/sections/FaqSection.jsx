import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { ArrowRight } from "lucide-react";

export default function FAQ() {
  const [active, setActive] = useState(null);
const faqs = [
  {
    question: "What is MLM Software?",
    answer:
      "MLM Software is a complete business management solution that automates distributor management, genealogy tracking, commission calculation, payouts, e-wallet, reports, and overall network marketing operations."
  },
  {
    question: "How does MLM Software help grow my business?",
    answer:
      "MLM Software simplifies daily operations by automating commissions, managing distributors, generating reports, and improving overall efficiency, allowing businesses to focus on growth."
  },
  {
    question: "Which MLM compensation plans are supported?",
    answer:
      "Our MLM Software supports Binary, Matrix, Unilevel, Board, Generation, Monoline, Gift, Hybrid, Party, Australian Binary, Stair Step, and many custom compensation plans."
  },
  {
    question: "Can I customize the MLM compensation plan?",
    answer:
      "Yes. The software is fully customizable. We can modify commission rules, bonuses, ranks, matching bonuses, and payout structures according to your business requirements."
  },
  {
    question: "Is the MLM Software secure?",
    answer:
      "Yes. We use advanced security practices including SSL encryption, secure authentication, database protection, role-based access control, and regular backups."
  },
  {
    question: "Does the software support e-wallet functionality?",
    answer:
      "Yes. Members can securely manage income, transfers, withdrawals, fund requests, and wallet balances through the integrated e-wallet system."
  },
 
 

];
  return (
    <section className="bg-slate-100 ">
      <div className="mx-auto max-w-7xl px-5 py-10">

        <div className="mb-14 text-center">
          <h2 className="text-4xl text-black font-bold">
            Frequently Asked <span className="text-orange-600">Questions</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Find answers to the most commonly asked questions about our MLM
            Software, compensation plans, commissions, security, customization,
            payment gateways, and business management solutions.
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between p-7 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl font-semibold text-blue-600">
                    {index + 1}.
                  </span>

                  <h3 className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </h3>
                </div>

                {active === index ? (
                  <FiMinus size={28} />
                ) : (
                  <FiPlus size={28} />
                )}
              </button>

              <div
                className={`grid transition-all duration-500 ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t px-16 pb-8 pt-6 text-gray-600 leading-8">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
       <section className="w-full flex justify-center py-10 bg-white">
      <div className="w-full max-w-6xl mt-10 overflow-hidden rounded-[28px] bg-[#2f2f2f]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="relative z-20 px-6 py-10 md:px-12 md:py-16">
            <h1 className="text-white text-3xl font-semibold leading-tight md:text-4xl">
              Ready to Transform Your
              <br />
              Financial Management?
            </h1>

            <p className="text-gray-300 mt-4 text-sm leading-relaxed md:text-base">
              Experience the future of finance with our cutting-edge SaaS
              platform. Start optimizing your financial operations today!
            </p>

            <button className="mt-6 inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full font-medium hover:scale-105 transition">
              Schedule a Demo
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="relative flex items-center justify-center px-6 py-10 md:px-10 md:py-0">
            <div className="relative w-full max-w-lg h-[420px] md:h-[380px]">
              <div className="absolute inset-x-0 top-0 mx-auto w-full max-w-[260px] md:hidden">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=500"
                  alt="Mobile app preview"
                  className="w-full h-[320px] object-cover rounded-[28px] shadow-2xl"
                />
              </div>

              <div className="hidden md:block absolute right-0 top-0 rotate-[-8deg] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=500"
                  alt="Mobile app preview"
                  className="w-[180px] h-[300px] object-cover rounded-[28px]"
                />
              </div>

              <div className="hidden md:block absolute right-0 top-16 rotate-[8deg] shadow-2xl">
                <div className="w-[180px] h-[280px] bg-black rounded-[28px] p-6 flex flex-col justify-between">
                  <div className="text-white text-xs">
                    <span className="font-semibold">myFintech</span>
                  </div>
                  <div>
                    <h3 className="text-white text-2xl font-medium">
                      Clare
                      <br />
                      Bamford
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">09/28</p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute right-44 top-10 bg-white rounded-2xl p-3 shadow-xl">
                <div className="text-green-500 font-bold text-xs">+12%</div>
                <div className="text-black font-semibold text-sm">$3,352,754</div>
              </div>

              <div className="hidden lg:block absolute right-28 bottom-14 bg-white rounded-2xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
                  <div>
                    <p className="text-xs text-gray-500">market</p>
                    <p className="font-semibold text-sm">$30.56</p>
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