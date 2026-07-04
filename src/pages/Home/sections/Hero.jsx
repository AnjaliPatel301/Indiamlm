

import React from "react";

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://www.pexels.com/download/video/7308093/" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-orange/70"></div>

        {/* Content */}
        <div className="relative z-10 justify-center text-center container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full max-w-3xl text-white px-2 sm:px-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight mb-6">
              Powerful <span className="text-orange-500">MLM Software</span>
              <br />
              For Every Business Model
            </h1>

            <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Binary, Matrix, Unilevel, Board, Investment, Crowd Funding,
              Repurchase, Direct Selling and all custom MLM plans supported.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
              <button className="w-full sm:w-auto bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 rounded-md font-semibold transition">
                Free Demo
              </button>

              <button className="w-full sm:w-auto border border-white/30 hover:bg-white/10 px-8 py-4 rounded-md font-semibold transition">
                View Plans
              </button>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
};

export default Hero;