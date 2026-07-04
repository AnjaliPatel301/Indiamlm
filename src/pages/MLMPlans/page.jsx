import React from "react";
import {
  GitBranch,
  Shuffle,
  Scale,
  Layers,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Users,
  TrendingUp,
  ShieldCheck,
  Globe2,
  Clock3,
  Building2,
  PlayCircle,
  ChevronRight,
  ArrowDownToLine,
  ArrowLeftRight,
  Workflow,
  MapPin,
  Repeat,
  Award,
  Zap,
  Coins,
  BarChart3,
} from "lucide-react";

/* ---------- tiny tree-node primitive used in hero + scenario diagrams ---------- */
function Node({ label, tone = "slate", size = "md" }) {
  const tones = {
    orange: "bg-orange-500 text-white border-orange-600",
    slate: "bg-white text-slate-700 border-slate-300",
    light: "bg-orange-50 text-orange-700 border-orange-200",
  };
  const sizes = { sm: "w-7 h-7 text-[10px]", md: "w-9 h-9 text-xs" };
  return (
    <div
      className={`${sizes[size]} ${tones[tone]} rounded-full border-2 flex items-center justify-center font-semibold shrink-0`}
    >
      {label}
    </div>
  );
}

function Branch({ children }) {
  return <div className="flex flex-col items-center">{children}</div>;
}

/* ---------- hero genealogy tree ---------- */
function HeroTree() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-orange-600">
          Binary Tree Preview
        </span>
        <span className="text-[11px] text-slate-400">2 legs · ∞ depth</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Node label="A" tone="orange" />
        <div className="w-px h-4 bg-slate-300" />
        <div className="flex gap-16">
          <div className="w-px h-0" />
        </div>
        <div className="flex w-full justify-center">
          <div className="flex items-start gap-20 relative">
            <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 w-32 border-t border-slate-300" />
            <Branch>
              <Node label="B" tone="light" />
              <div className="w-px h-4 bg-slate-300" />
              <div className="flex gap-6">
                <Node label="D" size="sm" />
                <Node label="E" size="sm" />
              </div>
            </Branch>
            <Branch>
              <Node label="C" tone="light" />
              <div className="w-px h-4 bg-slate-300" />
              <div className="flex gap-6">
                <Node label="F" size="sm" />
                <Node label="G" size="sm" />
              </div>
            </Branch>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-6 pt-5 border-t border-slate-100">
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-50 border-2 border-orange-200" /> Left Leg
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
          <span className="w-2.5 h-2.5 rounded-full bg-white border-2 border-slate-300" /> Right (Pay) Leg
        </div>
      </div>
    </div>
  );
}

/* ---------- reusable bits ---------- */
function Eyebrow({ children }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-3">
      <span className="h-px w-6 bg-orange-300" />
      <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">{children}</span>
      <span className="h-px w-6 bg-orange-300" />
    </div>
  );
}

function FeatureCard({ icon: Icon, title, children }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 hover:border-orange-300 hover:shadow-md transition">
      <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-3">
        <Icon size={18} className="text-orange-600" />
      </div>
      <h3 className="text-sm font-semibold text-slate-800 mb-1.5">{title}</h3>
      <p className="text-xs leading-relaxed text-slate-500">{children}</p>
    </div>
  );
}

function StepCard({ n, title, children }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 relative">
      <div className="w-8 h-8 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center mb-3">
        {n}
      </div>
      <h4 className="text-sm font-semibold text-slate-800 mb-1.5">{title}</h4>
      <p className="text-xs leading-relaxed text-slate-500">{children}</p>
    </div>
  );
}

function ScenarioCard({ title, children, diagram }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <div className="flex items-center justify-center h-28 mb-4 bg-orange-50/60 rounded-lg">{diagram}</div>
      <h4 className="text-sm font-semibold text-orange-600 mb-1.5">{title}</h4>
      <p className="text-xs leading-relaxed text-slate-500">{children}</p>
    </div>
  );
}

export default function BinaryMlmPlanPage() {
  return (
    <div className="w-full bg-slate-50 text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* ============ HERO ============ */}
        <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
          <GitBranch size={15} className="text-orange-500" />
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            #1 MLM Binary Plan Software
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-slate-900 mb-5">
              Binary MLM Plan <span className="text-orange-500">Software</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">
              A binary plan is a fast-growing, two-legged compensation structure in MLM. Each
              distributor sponsors only two frontline members — a left leg and a right leg —
              with commissions paid on the weaker leg's sales volume.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <button className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition">
                Get Started Free <ChevronRight size={15} />
              </button>
              <button className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:border-orange-400 hover:text-orange-600 transition">
                <PlayCircle size={15} /> Try Free Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-slate-200 max-w-md mx-auto lg:mx-0">
              {[
                ["3000+", "Businesses", Building2],
                ["100+", "Countries", Globe2],
                ["17+", "Years", Clock3],
              ].map(([n, l, Icon]) => (
                <div key={l} className="text-center lg:text-left">
                  <Icon size={14} className="text-orange-500 mb-1.5 mx-auto lg:mx-0" />
                  <div className="text-lg font-extrabold text-slate-900">{n}</div>
                  <div className="text-[11px] text-slate-500">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <HeroTree />
        </div>

        {/* ============ WHAT IS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Definition</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What is a <span className="text-orange-500">Binary MLM Plan</span>?
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-3xl mx-auto mb-8 text-center">
            <p className="text-sm leading-relaxed text-slate-600">
              A binary MLM plan limits every member's frontline to two downlines — left and right
              — while depth remains unlimited. Spillover places extra recruits below the
              frontline, and commissions are calculated on the weaker (lower-volume) leg each
              cycle, encouraging balanced team growth.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard icon={GitBranch} title="Two-Leg Structure">
              Each distributor builds only two direct legs, keeping recruitment simple.
            </FeatureCard>
            <FeatureCard icon={Shuffle} title="Spillover Effect">
              Upline members can place new recruits under their team, helping weaker legs grow.
            </FeatureCard>
            <FeatureCard icon={Scale} title="Balanced Growth">
              Earnings depend on maintaining balance between both legs of the tree.
            </FeatureCard>
            <FeatureCard icon={Layers} title="Multiple Income Streams">
              Includes direct sponsor, pair matching, and leadership bonuses on top of pairing.
            </FeatureCard>
          </div>
        </section>

        {/* ============ STRUCTURE ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Structure</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Left Leg & Right Leg, Explained
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="bg-orange-50 rounded-xl border border-orange-200 p-6">
              <div className="text-2xl mb-2">💪</div>
              <h3 className="text-sm font-bold text-orange-700 mb-1">Left Leg (Strong / Reference Leg)</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Usually the stronger side with higher Business Volume (BV). Its volume is the
                reference for pairing — unmatched BV carries forward to the next cycle.
              </p>
              <span className="text-[11px] font-semibold text-orange-600">Higher BV Side</span>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="text-2xl mb-2">⚖️</div>
              <h3 className="text-sm font-bold text-slate-800 mb-1">Right Leg (Weak / Pay Leg)</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Typically the weaker side. Commissions are calculated on this leg's matched
                volume, encouraging members to balance both sides.
              </p>
              <span className="text-[11px] font-semibold text-slate-500">Commission Source</span>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-white">
            <h4 className="text-sm font-bold mb-3 text-orange-400">Binary Pairing & Volume Carry Forward</h4>
            <p className="text-xs text-slate-300 mb-3">
              Every payout cycle, the software compares BV on both legs:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {[
                "Commission is paid on the weaker leg's BV",
                "Matched volume is flushed after payout",
                "Unmatched BV in the stronger leg carries forward to the next cycle",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <CheckCircle2 size={14} className="text-orange-400 shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ HOW IT WORKS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Workflow</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              How Does the Binary MLM Plan Work?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StepCard n="1" title="Join & Get Your Binary Position">
              Every distributor joins with two open positions beneath them — a left leg and a
              right leg — forming the foundation of the tree.
            </StepCard>
            <StepCard n="2" title="Sponsor Front-Line Members">
              Distributors recruit into both legs. Each new member builds their own two-leg
              structure, expanding total network BV.
            </StepCard>
            <StepCard n="3" title="Spillover Expands the Network">
              Extra recruits beyond two positions spill into the downline, strengthening weaker
              legs and accelerating growth.
            </StepCard>
            <StepCard n="4" title="Identify the Pay Leg & Reference Leg">
              Each cycle, the software compares BV on both legs — the lower side becomes the Pay
              Leg, the higher side the Reference Leg.
            </StepCard>
            <StepCard n="5" title="Calculate Commissions & Carry Forward">
              Matched volume is paid out and flushed; unmatched BV on the stronger leg carries
              forward to the next cycle.
            </StepCard>
          </div>
        </section>

        {/* ============ PROS & CONS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Analysis</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Pros & Cons of the Binary Plan</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={17} className="text-orange-500" />
                <span className="text-sm font-bold text-slate-800">Pros of the Binary MLM Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Maximise Sales Productivity</b> — balanced team growth drives continuous BV.</li>
                <li><b className="text-slate-800">Supports Spillover Growth</b> — strategic placement strengthens weaker legs.</li>
                <li><b className="text-slate-800">Rapid Growth Potential</b> — team-wide recruiting expands earnings fast.</li>
                <li><b className="text-slate-800">Easy to Understand</b> — a simple plan new distributors grasp quickly.</li>
                <li><b className="text-slate-800">Encourages Teamwork</b> — commissions depend on both legs working together.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={17} className="text-slate-400" />
                <span className="text-sm font-bold text-slate-800">Cons of the Binary MLM Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Depends on Team Activity</b> — earnings drop if downline members go inactive.</li>
                <li><b className="text-slate-800">Leg Balancing Is Hard</b> — equal growth on both sides isn't always easy.</li>
                <li><b className="text-slate-800">Wide Gaps Limit Earnings</b> — large imbalance reduces pairing potential.</li>
                <li><b className="text-slate-800">Requires Reliable Software</b> — accurate carry-forward tracking is essential.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ SCENARIOS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Scenarios</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Different Scenarios in a Binary Plan
            </h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">
              <b className="text-slate-700">Sponsor</b> introduces a new member; <b className="text-slate-700">Parent</b> is
              the direct upline they're placed under.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScenarioCard
              title="Sponsor & Parent Are the Same"
              diagram={
                <div className="flex flex-col items-center gap-2">
                  <Node label="A" tone="orange" size="sm" />
                  <div className="flex gap-8"><Node label="B" size="sm" /><Node label="C" size="sm" /></div>
                </div>
              }
            >
              When a distributor sponsors members directly under their own legs, they're both
              sponsor and parent.
            </ScenarioCard>
            <ScenarioCard
              title="Sponsor & Parent Are Different"
              diagram={
                <div className="flex items-center gap-6">
                  <Node label="X" tone="orange" size="sm" />
                  <ArrowRight size={14} className="text-slate-300" />
                  <Node label="A" size="sm" />
                </div>
              }
            >
              A member may be sponsored by one distributor but placed under another due to
              spillover.
            </ScenarioCard>
            <ScenarioCard
              title="Spillover Before Both Legs Fill"
              diagram={<Workflow size={28} className="text-orange-400" />}
            >
              Spillover can happen even before a distributor's own two legs are fully placed.
            </ScenarioCard>
            <ScenarioCard
              title="Sponsoring Only on One Side"
              diagram={<ArrowDownToLine size={28} className="text-orange-400" />}
            >
              A sponsor may keep placing every new recruit on a single leg, creating a continuous
              chain on that side.
            </ScenarioCard>
            <ScenarioCard
              title="Normal Spillover"
              diagram={<MapPin size={28} className="text-orange-400" />}
            >
              Once both legs are filled, additional recruits are placed automatically at the next
              available level below.
            </ScenarioCard>
            <ScenarioCard
              title="Extreme End Spillover"
              diagram={<ArrowLeftRight size={28} className="text-orange-400" />}
            >
              New members are placed at the extreme left or right edge of the tree, encouraging
              active balancing.
            </ScenarioCard>
          </div>
        </section>

        {/* ============ SPILLOVER TYPES ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Spillover</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Spillover Types in the Binary Plan</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard icon={ArrowDownToLine} title="Normal Spillover">
              When both legs are full, new members are placed under the next available position
              in the downline.
            </FeatureCard>
            <FeatureCard icon={ArrowLeftRight} title="Extreme End Spilling">
              Members are placed at the far left or right edge, encouraging distributors to
              balance both legs.
            </FeatureCard>
            <FeatureCard icon={Scale} title="Weaker Leg Spilling">
              New members are placed under whichever leg currently has lower Business Volume.
            </FeatureCard>
            <FeatureCard icon={Shuffle} title="Balanced Ratio Spilling">
              Members are distributed evenly between left and right, preventing leg dominance.
            </FeatureCard>
            <FeatureCard icon={MapPin} title="Multi-Position Spilling">
              Premium packages can grant multiple positions, each receiving spillover
              independently.
            </FeatureCard>
          </div>
        </section>

        {/* ============ EARNINGS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Earnings</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Binary Commission Calculation — 10% Example
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 1 · Initial Matching</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A sponsors B (Left, 100 PV) and C (Right, 100 PV). Matched volume = 100 PV.
                  Commission = 10% × 100 = <b className="text-slate-800">$10</b>.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 2 · Downline Expansion</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Left Leg: B recruits D (100 PV) + E (200 PV) = 300 PV total. Right Leg: C
                  recruits F (100 PV) + G (100 PV) = 200 PV total.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 3 · Weaker Leg</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Left = 300 PV, Right = 200 PV → Right Leg becomes the Pay Leg.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 4 · Commission</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  200 PV matched → 10% × 200 = $20. Remaining 100 PV on Left carries forward.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-xl px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Total Commission Earned by A ($10 + $20)
              </span>
              <span className="text-2xl font-extrabold text-orange-600">$30</span>
            </div>
          </div>
        </section>

        {/* ============ BONUSES ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Rewards</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Bonuses Beyond Pairing</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard icon={Users} title="Binary Commission Bonus">Core earning, paid on the weaker leg's matched volume each cycle.</FeatureCard>
            <FeatureCard icon={TrendingUp} title="Matching Bonus">A share of commission earned by personally sponsored distributors.</FeatureCard>
            <FeatureCard icon={Zap} title="Fast Start Bonus">Awarded when a new distributor completes their first sale or target.</FeatureCard>
            <FeatureCard icon={Award} title="Rank Advancement Bonus">Cash rewards and recognition as distributors climb company ranks.</FeatureCard>
            <FeatureCard icon={BarChart3} title="Leveling Bonus">Rewards for building deeper, more active levels in the binary tree.</FeatureCard>
            <FeatureCard icon={Coins} title="ROI Bonus">Rewards for inventory purchases, premium packages, or promotions.</FeatureCard>
          </div>
        </section>

        {/* ============ AT A GLANCE ============ */}
        <section>
          <div className="text-center mb-8">
            <Eyebrow>Summary</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">At a Glance</h2>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden max-w-2xl mx-auto">
            {[
              ["Frontline Width", "2 legs only"],
              ["Depth", "Unlimited"],
              ["Commission Basis", "Weaker leg Business Volume (BV)"],
              ["Spillover", "Yes — from upline excess recruits"],
              ["Volume Carry Forward", "Yes — unmatched strong leg BV"],
              ["Capping", "Configurable (by BV or commission)"],
              ["Best For", "Team builders, balanced networks"],
            ].map(([k, v], i) => (
              <div
                key={k}
                className={`grid grid-cols-2 px-5 py-3.5 text-xs ${i % 2 ? "bg-orange-50/50" : "bg-white"} ${i ? "border-t border-slate-100" : ""}`}
              >
                <span className="font-semibold text-slate-500">{k}</span>
                <span className="text-slate-800">{v}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}