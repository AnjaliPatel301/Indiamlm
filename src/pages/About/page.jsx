import React from "react";
import Cta from "../Home/cta"

/**
 * INDIA MLM — About Us Page
 * Single-file React + Tailwind component.
 * Sections: About intro, Empowering tech + stats, Meet the team, Vision & Mission.
 * Brand accent: orange/b/lue (#4f46e5 family), matching the reference UI.
 */

/* ----------------------------- small icons ----------------------------- */

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 shrink-0">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );
}

function Dot() {
  return <span className="mt-2 w-2.5 h-2.5 rounded-full bg-orange-600 shrink-0" />;
}

/* ----------------------------- decorative badge stack ----------------------------- */

function BadgeStack() {
  return (
    <div className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-5 sm:p-7 h-full">
      <div className="relative aspect-[4/3] flex items-center justify-center">
        {/* background circle */}
        <div className="absolute w-[78%] h-[78%] rounded-full bg-gradient-to-br from-slate-800 to-slate-900" />

        {/* center ribbon badge */}
        <svg viewBox="0 0 120 140" className="relative z-10 w-28 sm:w-32">
          <circle cx="60" cy="55" r="34" fill="#fff" />
          <circle cx="60" cy="55" r="27" fill="#3b82f6" />
          <circle cx="60" cy="55" r="19" fill="#fff" />
          <path
            d="M48 60 L56 50 L62 56 L72 44"
            stroke="#22c55e"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M46 80 L60 130 L66 105 L80 80 Z" fill="#3b82f6" />
          <path d="M46 80 L60 130 L54 100 Z" fill="#1d4ed8" opacity="0.5" />
        </svg>

        {/* top-left analytics card */}
        <div className="absolute -top-1 left-0 sm:left-2 bg-white rounded-lg shadow-md p-2 rotate-[-6deg]">
          <svg width="44" height="32" viewBox="0 0 44 32">
            <rect width="44" height="32" rx="4" fill="#0ea5e9" />
            <path d="M5 24 L14 14 L20 19 L30 7 L39 13" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="39" cy="13" r="2.5" fill="#f97316" />
          </svg>
        </div>

        {/* top-right CMMI-style badge */}
        <div className="absolute -top-2 right-0 sm:right-2 bg-white rounded-lg shadow-md px-2.5 py-1.5 rotate-[5deg]">
          <span className="text-[11px] font-extrabold text-slate-900 italic">IM<span className="text-sky-500">L3</span></span>
        </div>

        {/* lock/shield bottom-left */}
        <div className="absolute bottom-6 left-0 sm:left-2">
          <svg width="34" height="40" viewBox="0 0 34 40">
            <path d="M17 1 L33 7 V19 C33 30 26 36 17 39 C8 36 1 30 1 19 V7 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
            <rect x="10" y="18" width="14" height="11" rx="2" fill="#475569" />
            <circle cx="17" cy="23" r="2.4" fill="#fbbf24" />
            <path d="M12 18 V13 a5 5 0 0 1 10 0 V18" stroke="#475569" strokeWidth="2.4" fill="none" />
          </svg>
        </div>

        {/* stars */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#facc15">
              <path d="M12 2l2.9 6.6 7.1.6-5.4 4.6 1.7 6.9-6.3-3.8-6.3 3.8 1.7-6.9-5.4-4.6 7.1-.6z" />
            </svg>
          ))}
        </div>

        {/* income pie chart card bottom-right */}
        <div className="absolute -bottom-2 -right-1 sm:right-2 bg-white rounded-lg shadow-md p-2 w-[120px]">
          <div className="text-[9px] font-semibold text-slate-500 mb-1">Income Source</div>
          <svg viewBox="0 0 40 40" className="w-12 h-12 mx-auto">
            <circle r="16" cx="20" cy="20" fill="#f97316" />
            <path d="M20 20 L20 4 A16 16 0 0 1 33.86 28 Z" fill="#facc15" />
            <path d="M20 20 L33.86 28 A16 16 0 0 1 20 4 Z" fill="#4f46e5" opacity="0" />
            <path d="M20 20 L20 4 A16 16 0 0 1 33.86 12 Z" fill="#4f46e5" />
          </svg>
          <div className="mt-1.5 space-y-0.5">
            <div className="flex items-center gap-1 text-[8px] text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600" /> Direct Referral
            </div>
            <div className="flex items-center gap-1 text-[8px] text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Binary Commission
            </div>
            <div className="flex items-center gap-1 text-[8px] text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Leadership Bonus
            </div>
          </div>
        </div>

        {/* network nodes bottom-left */}
        <div className="absolute bottom-0 left-0 sm:left-4">
          <svg width="80" height="60" viewBox="0 0 80 60">
            <line x1="40" y1="30" x2="20" y2="14" stroke="#818cf8" strokeWidth="1.4" />
            <line x1="40" y1="30" x2="58" y2="16" stroke="#818cf8" strokeWidth="1.4" />
            <line x1="40" y1="30" x2="16" y2="46" stroke="#818cf8" strokeWidth="1.4" />
            <line x1="40" y1="30" x2="62" y2="44" stroke="#818cf8" strokeWidth="1.4" />
            <circle cx="40" cy="30" r="9" fill="#4f46e5" />
            <circle cx="20" cy="14" r="5" fill="#818cf8" />
            <circle cx="58" cy="16" r="5" fill="#818cf8" />
            <circle cx="16" cy="46" r="5" fill="#818cf8" />
            <circle cx="62" cy="44" r="5" fill="#818cf8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- tech cube illustration ----------------------------- */

function TechStackArt() {
  const tiles = [
    { label: "CSS", bg: "#1e293b", color: "#38bdf8" },
    { label: "</>", bg: "#0f766e", color: "#fff" },
    { label: "⚙", bg: "#1e293b", color: "#cbd5e1" },
    { label: "HTML", bg: "#f97316", color: "#fff" },
  ];
  return (
    <div className="relative w-full h-full min-h-[220px] flex items-center justify-center">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 rotate-3">
        {tiles.map((t, i) => (
          <div
            key={i}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl shadow-lg flex items-center justify-center text-xs sm:text-sm font-extrabold"
            style={{ background: t.bg, color: t.color }}
          >
            {t.label}
          </div>
        ))}
      </div>
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 bg-teal-600 rounded-2xl shadow-xl p-3 -rotate-3">
        <svg width="44" height="50" viewBox="0 0 44 50">
          <path d="M22 1 L43 9 V25 C43 38 34 45 22 49 C10 45 1 38 1 25 V9 Z" fill="#fff" opacity="0.95" />
          <rect x="14" y="22" width="16" height="13" rx="2" fill="#0d9488" />
          <circle cx="22" cy="28" r="2.6" fill="#fde68a" />
          <path d="M16 22 V16 a6 6 0 0 1 12 0 V22" stroke="#0d9488" strokeWidth="2.6" fill="none" />
        </svg>
      </div>
    </div>
  );
}

/* ----------------------------- team photo placeholder ----------------------------- */

function TeamPhoto() {
  return (
    <div className="relative w-full h-64 sm:h-80 md:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-orange-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 400 300" className="absolute inset-0 opacity-20">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M0 0H32V32" fill="none" stroke="#fff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#grid)" />
      </svg>
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div className="flex -space-x-3 mb-4">
          {["A", "S", "R", "P", "K"].map((letter, i) => (
            <div
              key={i}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/80 flex items-center justify-center font-bold text-white text-sm sm:text-base"
              style={{
                background: ["#4f46e5", "#3b82f6", "#0ea5e9", "#6366f1", "#8b5cf6"][i],
                zIndex: 5 - i,
              }}
            >
              {letter}
            </div>
          ))}
        </div>
        <p className="text-white/70 text-xs sm:text-sm max-w-[260px]">
          The people behind India MLM's network marketing platforms
        </p>
      </div>
    </div>
  );
}

/* ----------------------------- main page ----------------------------- */

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900">

      <Cta/>
      {/* ============ ABOUT INTRO ============ */}
      <section className="pt-14 sm:pt-20 pb-12 sm:pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold mb-3">
            <span className="text-orange-600">About</span> India MLM
          </h1>
          <div className="w-12 h-1 bg-orange-600 rounded-full mx-auto mb-5" />
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            India's trusted technology partner for network marketing &amp; direct selling
            software solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-10 sm:mt-12 bg-slate-50 rounded-3xl p-5 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <BadgeStack />

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug mb-4">
                Building the future of <span className="text-orange-600">MLM</span> with
                innovation &amp; trust
              </h2>
              <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed">
                <span className="font-semibold text-orange-600">India MLM</span> is a leading
                provider of enterprise-grade network marketing solutions. We combine deep
                industry knowledge with advanced technology to deliver{" "}
                <span className="font-semibold text-slate-900">custom MLM software</span> that
                is secure, scalable, and built for businesses across India and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ EMPOWERING + STATS ============ */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-orange-50 to-white rounded-3xl p-5 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug mb-4">
                Empowering <span className="text-orange-600">Network Marketing</span> with
                Advanced Technology
              </h2>
              <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed">
                Our platform empowers Indian MLM businesses with{" "}
                <span className="font-semibold text-slate-900">automated member management</span>,{" "}
                <span className="font-semibold text-slate-900">real-time commission tracking</span>,
                and{" "}
                <span className="font-semibold text-slate-900">
                  multi-compensation plans (binary, matrix, unilevel, generation)
                </span>
                . We integrate secure{" "}
                <span className="font-semibold text-slate-900">e-wallets</span>,{" "}
                <span className="font-semibold text-slate-900">multi-language support</span>, and{" "}
                <span className="font-semibold text-slate-900">dedicated franchise portals</span>.
              </p>
            </div>

            <div className="rounded-2xl">
              <TechStackArt />
            </div>
          </div>

          {/* stats row */}
          <div className="mt-10 sm:mt-12 bg-orange-50 rounded-2xl py-7 sm:py-8 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-orange-600">8+</div>
                <div className="text-slate-600 text-sm mt-1">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-orange-600">300+</div>
                <div className="text-slate-600 text-sm mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-orange-600">25+</div>
                <div className="text-slate-600 text-sm mt-1">Cities Served Across India</div>
              </div>
            </div>

            <p className="text-center text-slate-500 text-sm italic mt-7 sm:mt-8 max-w-2xl mx-auto">
              "From health &amp; wellness to e-commerce and crypto, we help Indian MLM
              businesses launch, expand, and dominate their market."
            </p>

            <div className="flex justify-center mt-6">
              <button className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-full text-sm sm:text-base transition">
                Explore Our MLM Solutions
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold mb-2">
              <span className="text-orange-600">Meet Our</span> Expert Team
            </h2>
            <div className="w-10 h-1 bg-orange-600 rounded-full mx-auto mb-4" />
            <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
              Passionate professionals across India dedicated to delivering cutting-edge MLM
              software solutions.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-5 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 items-center">
              <TeamPhoto />

              <div>
                <span className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                  Our Team
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold mb-3">
                  Driven by <span className="text-orange-600">Passion</span> &amp;{" "}
                  <span className="text-orange-600">Expertise</span>
                </h3>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-5">
                  At <span className="font-semibold text-orange-600">India MLM</span>, our team
                  is our greatest asset. We bring together{" "}
                  <span className="font-semibold text-slate-900">industry veterans</span>, tech
                  innovators, and customer-first professionals who work collaboratively to
                  deliver exceptional MLM software solutions to businesses across the country.
                </p>

                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-sm text-slate-700">
                      50+ skilled MLM software professionals
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-sm text-slate-700">8+ years of industry experience</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-sm text-slate-700">
                      Dedicated R&amp;D and support departments
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full">
                  🏆 300+ Projects Delivered
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VISION & MISSION ============ */}
      <section className="py-12 sm:py-16 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #1e293b 0%, transparent 35%), radial-gradient(circle at 80% 70%, #1e293b 0%, transparent 35%)",
          }}
        />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-orange-600 mb-1">
              Our Vision
            </h3>
            <div className="w-8 h-0.5 bg-orange-600 mb-4" />
            <p className="text-slate-600 text-[15px] leading-relaxed mb-5">
              At <span className="font-semibold text-orange-600">India MLM</span>, our vision is
              to redefine how network marketing businesses operate across India by providing
              smart, scalable, and secure software solutions. We envision a future where every
              MLM business, regardless of size, can leverage technology to grow confidently and
              sustainably.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5">
                <Dot />
                <span className="text-sm text-slate-700">
                  Innovative tools to lead India's MLM industry forward.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Dot />
                <span className="text-sm text-slate-700">
                  Commitment to excellence in every solution we offer.
                </span>
              </div>
            </div>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition">
              Contact Us
            </button>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-orange-600 mb-1">
              Our Mission
            </h3>
            <div className="w-8 h-0.5 bg-orange-600 mb-4" />
            <p className="text-slate-600 text-[15px] leading-relaxed mb-5">
              The mission of <span className="font-semibold text-orange-600">India MLM</span> is
              to empower MLM enterprises with reliable and easy-to-use technology that automates
              processes, supports scalability, and enhances business intelligence. We aim to be
              the driving force behind your MLM success story.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5">
                <Dot />
                <span className="text-sm text-slate-700">
                  All-in-one MLM business platform designed for growth.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Dot />
                <span className="text-sm text-slate-700">
                  Real-time analytics and tools to manage your network effectively.
                </span>
              </div>
            </div>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2.5 rounded-full text-sm transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}