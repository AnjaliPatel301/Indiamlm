import React from "react";
import NetworkAvatars from "./NetworkAvatars";
import { ArrowRight, PlayCircle } from "lucide-react";


const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white ">
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            {/* Left: Text */}
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl from-neutral-950  leading-tight mb-6 text-black">
                Powerful <span className="text-orange-500">MLM Software</span>
                <br />
                For Every Business Model
              </h1>

             <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
  Empower your network marketing business with our advanced MLM software
  designed to support every compensation plan including Binary, Matrix,
  Unilevel, Board, Generation, Investment, Repurchase, Crowd Funding,
  Direct Selling, and fully customized MLM plans. Manage members,
  commissions, e-wallets, payouts, genealogy, reports, e-commerce,
  subscriptions, and business analytics from one powerful, secure, and
  scalable platform built for startups as well as enterprise-level MLM
  companies.
</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-8">

  {/* Free Demo */}
  <button className="group flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-sm  text-lg shadow-lg hover:shadow-orange-300 transition-all duration-300">
    <PlayCircle size={22} />
    <span>Free Demo</span>
  </button>

  {/* View Plans */}
  <button className="group flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-sm text-lg shadow-lg transition-all duration-300">
    <span>View Plans</span>
    <ArrowRight
      size={22}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </button>

</div>
            </div>

            {/* Right: Network animation */}
            <div className="w-full">
              <NetworkAvatars />
            </div>
          </div>
        </div>

      
      </section>
    </>
  );
};

export default Hero;