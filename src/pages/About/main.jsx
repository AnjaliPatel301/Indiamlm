import {
  ShoppingBasket,
  ScanLine,
  Network,
  Wrench,
  Clock,
  Globe2,
  Wallet,
  Target,
  BarChart3,
  Calculator,
  Laptop,
} from "lucide-react";

// Har icon ka angle (0-360, circle ke around position)
const icons = [
  { Icon: ShoppingBasket, bg: "bg-amber-400", size: 44, angle: 0 },
  { Icon: ScanLine, bg: "bg-slate-800", size: 50, angle: 36 },
  { Icon: Network, bg: "bg-slate-800", size: 50, angle: 72 },
  { Icon: Wrench, bg: "bg-emerald-500", size: 40, angle: 108 },
  { Icon: Clock, bg: "bg-red-500", size: 34, angle: 144 },
  { Icon: Globe2, bg: "bg-sky-500", size: 50, angle: 180 },
  { Icon: Wallet, bg: "bg-sky-500", size: 50, angle: 216 },
  { Icon: Target, bg: "bg-red-500", size: 40, angle: 252 },
  { Icon: BarChart3, bg: "bg-slate-800", size: 34, angle: 288 },
  { Icon: Calculator, bg: "bg-slate-700", size: 40, angle: 324 },
];

const RADIUS = 190; // px — circle ka radius, screen size ke hisaab se adjust karo
const DURATION = "24s"; // orbit ek chakkar me kitna time lega

export default function SupportHero() {
  return (
    <section className="bg-slate-100">
      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(var(--angle)) translateX(${RADIUS}px); }
          to   { transform: rotate(calc(var(--angle) + 360deg)) translateX(${RADIUS}px); }
        }
        @keyframes orbit-counter-spin {
          from { transform: translate(-50%, -50%) rotate(calc(var(--angle) * -1)); }
          to   { transform: translate(-50%, -50%) rotate(calc((var(--angle) + 360deg) * -1)); }
        }
        .orbit-track {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          transform: rotate(var(--angle)) translateX(${RADIUS}px);
          animation: orbit-spin ${DURATION} linear infinite;
        }
        .orbit-icon {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate(-50%, -50%) rotate(calc(var(--angle) * -1));
          animation: orbit-counter-spin ${DURATION} linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .orbit-track, .orbit-icon { animation: none; }
        }
      `}</style>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 md:grid-cols-2">
        {/* Left: orbiting icons + person image */}
        <div className="relative mx-auto aspect-square w-full max-w-[480px]">
          {icons.map(({ Icon, bg, size, angle }, i) => (
            <div
              key={i}
              className="orbit-track"
              style={{ ["--angle"]: `${angle}deg` }}
            >
              <div
                className={`orbit-icon flex items-center justify-center rounded-full text-white shadow-lg ${bg}`}
                style={{ ["--angle"]: `${angle}deg`, width: size, height: size }}
              >
                <Icon size={size * 0.5} strokeWidth={2} />
              </div>
            </div>
          ))}

          {/* Person image — apni image ka path yahan daalo */}
          <div className="absolute bottom-[6%] left-1/2 z-10 h-[68%] w-[46%] -translate-x-1/2">
            <img
              src="/images/support-person.png"
              alt="Support executive"
              className="h-full w-full object-contain"
            />
          </div>

          {/* ribbon banner */}
          <div className="absolute bottom-0 left-1/2 z-20 w-[78%] -translate-x-1/2 translate-y-1/2">
            <div className="relative rounded-md bg-amber-400 py-4 text-center shadow-lg">
              <p className="text-sm font-semibold text-orange-700">Custom Made</p>
              <p className="text-xl font-extrabold tracking-wide text-white">
                MLM SOFTWARE
              </p>
              <span className="absolute -bottom-2 left-0 h-0 w-0 border-l-[14px] border-t-[16px] border-l-transparent border-t-red-500" />
              <span className="absolute -bottom-2 right-0 h-0 w-0 border-r-[14px] border-t-[16px] border-r-transparent border-t-red-500" />
            </div>
          </div>
        </div>

        {/* Right: text content */}
        <div className="pl-0 md:pl-6">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-rose-700 text-white">
            <Laptop size={28} />
          </div>
          <h2 className="text-3xl font-bold leading-tight text-black md:text-4xl">
            We Are MLM Software Providers
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
            Our team of MLM Software Providers and engineers are very highly
            qualified, certified to solve all your IT related issues by MLM
            Software Company. We use advanced and latest technologies for
            solving and using the MLM software to make your life
            hassle-free. Our professionals are very energetic to solve all
            your queries 24*7 hours and 7 days in a week so as not to
            hesitate in contacting us.
          </p>
        </div>
      </div>
    </section>
  );
}