import { useRef, useState } from 'react';
import Trastedby from "./Trastedby"
import Aboutform from "./Aboutform"


const items = [
  'Binary MLM Plan',
  'Matrix MLM Plan',
  'Unilevel MLM Plan',
  'Board MLM Plan',
  'Generation MLM Plan',
  'Monoline MLM Plan',
  'Single Leg MLM Plan',
  'Australian Binary Plan',
  'Stair Step Breakaway Plan',
  'Gift MLM Plan',
  'Donation MLM Plan',
  'Helping Plan',
  'Investment MLM Plan',
  'ROI MLM Plan',
  'Crowdfunding MLM Plan',
  'Cycler MLM Plan',
  'Hybrid MLM Plan',
  'Party MLM Plan',
  'Affiliate Marketing',
  'Direct Selling',
  'Referral Marketing',
  'Repurchase MLM',
  'E-Commerce MLM',
  'Spillover Plan',
  'Team Bonus Plan',
  'Matching Bonus Plan',
  'Leadership Bonus',
  'Rank Achievement Bonus',
  'Sponsor Bonus',
  'Fast Start Bonus',
  'Infinity Bonus',
  'Pool Income Plan',
  'Auto Pool Plan',
  'Royalty Bonus',
  'Travel Fund Plan',
  'Car Fund Plan',
  'Performance Bonus',
  'Multi-Currency MLM',
  'Crypto MLM Plan',
  'Custom MLM Software',
];
export default function Marquee({ speed = 105 }) {
  const [paused, setPaused] = useState(false);

  // duplicate list so the loop looks seamless
  const loopItems = [...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden bg-white pb-14 "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex w-max whitespace-nowrap gap-10 md:gap-16"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {loopItems.map((text, i) => (
          <span
            key={i}
            className="text-4xl md:text-6xl font-bold tracking-tight cursor-pointer transition-colors duration-100"
            style={
              i % 2 === 1
                ? { color: '#f97316' } // solid orange
                : {
                    color: 'transparent',
                    WebkitTextStroke: '1.5px #f97316',
                  } // outline orange
            }
          >
            {text}
          </span>
        ))}
      </div>

      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent" />

      {/* keyframes injected locally, no tailwind.config.js edit needed */}
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>



    </div>
  );
}