import React from "react";
import {
  Layers,
  RotateCw,
  TrendingUp,
  ListTree,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Users,
  Globe2,
  Clock3,
  Building2,
  PlayCircle,
  ChevronRight,
  GitBranch,
  Target,
  MapPin,
  Award,
  Zap,
  Coins,
  BarChart3,
  Lock,
  ArrowUpCircle,
  Repeat,
  Users2,
  Crown,
  Footprints,
  ShieldOff,
  Gauge,
} from "lucide-react";

/* ---------- shared primitives ---------- */
function Node({ label, tone = "slate", size = "md" }) {
  const tones = {
    orange: "bg-orange-500 text-white border-orange-600",
    slate: "bg-white text-slate-700 border-slate-300",
    light: "bg-orange-50 text-orange-700 border-orange-200",
  };
  const sizes = { sm: "w-7 h-7 text-[10px]", md: "w-9 h-9 text-xs" };
  return (
    <div className={`${sizes[size]} ${tones[tone]} rounded-lg border-2 flex items-center justify-center font-semibold shrink-0`}>
      {label}
    </div>
  );
}

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
    <div className="bg-white rounded-xl border border-slate-200 p-5">
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

/* ---------- hero diagram: a staircase of ranks where the top rank "breaks away" ---------- */
function HeroStairDiagram() {
  const ranks = [
    { l: "Distributor", h: 14 },
    { l: "Senior Rep", h: 22 },
    { l: "Manager", h: 30 },
    { l: "Director", h: 38 },
    { l: "Executive", h: 46 },
  ];
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-orange-600">
          Rank Climb Preview
        </span>
        <span className="text-[11px] text-slate-400">5-step ladder</span>
      </div>

      <div className="flex items-end justify-center gap-2 h-32 mb-4">
        {ranks.map((r, i) => (
          <div key={r.l} className="flex flex-col items-center gap-1">
            <div
              className={`w-9 rounded-t-md ${i === ranks.length - 1 ? "bg-orange-500" : "bg-orange-200"}`}
              style={{ height: `${r.h * 2}px` }}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mb-2">
        <ArrowUpCircle size={14} className="text-orange-500" />
        <span className="text-[10px] text-slate-500">Volume & team size push you up each step</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Crown size={14} className="text-orange-500" />
        <span className="text-[9px] font-semibold text-orange-600">
          Top rank "breaks away" into its own independent group
        </span>
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed mt-5 pt-4 border-t border-slate-100 text-center">
        Distributors climb a fixed ladder of ranks based on personal and group sales volume.
        Once a leader reaches the top rank, their group "breaks away" to operate as its own
        independent organisation.
      </p>
    </div>
  );
}

export default function StairStepBreakawayPlanPage() {
  return (
    <div className="w-full bg-slate-50 text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* ============ HERO ============ */}
        <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
          <Footprints size={15} className="text-orange-500" />
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            #1 MLM Stair Step Breakaway Software
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-slate-900 mb-5">
              Stair Step Breakaway <span className="text-orange-500">Plan Software</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">
              One of the oldest and most established MLM compensation structures. Distributors
              climb a fixed ladder of ranks driven by sales volume, and once a leader reaches the
              top step, their group "breaks away" to run as its own independent organisation.
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

          <HeroStairDiagram />
        </div>

        {/* ============ WHAT IS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Definition</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What is a <span className="text-orange-500">Stair Step Breakaway Plan</span>?
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-3xl mx-auto mb-8 text-center">
            <p className="text-sm leading-relaxed text-slate-600">
              A stair step breakaway plan organises distributors into a series of fixed ranks —
              for example, Distributor, Senior Rep, Manager, Director, and Executive. Members
              climb the "stairs" by hitting personal and group sales volume targets. Once a
              leader reaches a qualifying top rank, their downline "breaks away" from the
              original upline's volume and begins operating as its own independent organisation,
              with the original sponsor earning an override on the new group.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard icon={Layers} title="Fixed Rank Ladder">
              Members move up a defined sequence of ranks, each with its own volume and team
              requirements.
            </FeatureCard>
            <FeatureCard icon={TrendingUp} title="Volume-Driven Climb">
              Personal and group sales volume — not just recruiting — determines how fast a
              distributor advances.
            </FeatureCard>
            <FeatureCard icon={GitBranch} title="Breakaway Event">
              On reaching the top qualifying rank, a leader's group splits off into an
              independent organisation.
            </FeatureCard>
            <FeatureCard icon={Crown} title="Override Income">
              The original upline keeps earning a smaller override on breakaway groups even after
              the split.
            </FeatureCard>
          </div>
        </section>

        {/* ============ STRUCTURE ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Structure</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Ranks & Breakaway, Explained</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="bg-orange-50 rounded-xl border border-orange-200 p-6">
              <div className="text-2xl mb-2">🪜</div>
              <h3 className="text-sm font-bold text-orange-700 mb-1">Rank Ladder (Fixed Steps)</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Every rank has its own personal and group volume thresholds set by the company —
                hitting both is required to step up.
              </p>
              <span className="text-[11px] font-semibold text-orange-600">Controls Advancement</span>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="text-sm font-bold text-slate-800 mb-1">Breakaway Trigger</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Reaching the qualifying top rank triggers the "breakaway" — the leader's group
                volume is no longer counted toward the original upline.
              </p>
              <span className="text-[11px] font-semibold text-slate-500">Controls Override Payout</span>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-white">
            <h4 className="text-sm font-bold mb-3 text-orange-400">Rank Advancement Logic</h4>
            <p className="text-xs text-slate-300 mb-3">
              Every commission cycle, the software checks each distributor's volume:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {[
                "Personal and group volume is totalled for the period",
                "If both meet the next rank's thresholds, the distributor advances a step",
                "On reaching the breakaway rank, the group splits off and override commissions begin",
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
              How Does the Stair Step Breakaway Plan Work?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StepCard n="1" title="Join as Distributor">
              A new member starts at the entry rank and begins generating personal sales volume.
            </StepCard>
            <StepCard n="2" title="Build Group Volume">
              They recruit and support a downline, with the team's combined volume counted toward
              rank advancement.
            </StepCard>
            <StepCard n="3" title="Climb the Ladder">
              Hitting each rank's volume targets steps the distributor up — unlocking higher
              commission percentages.
            </StepCard>
            <StepCard n="4" title="Reach Breakaway Rank">
              On hitting the top qualifying rank, the leader's group breaks away into its own
              independent organisation.
            </StepCard>
            <StepCard n="5" title="Earn Overrides">
              The original sponsor continues earning a generation override on the breakaway
              group's ongoing volume.
            </StepCard>
          </div>
        </section>

        {/* ============ PROS & CONS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Analysis</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Pros & Cons of the Stair Step Breakaway Plan
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={17} className="text-orange-500" />
                <span className="text-sm font-bold text-slate-800">Pros of the Stair Step Breakaway Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Proven, Time-Tested Model</b> — one of the longest-running structures in the direct selling industry.</li>
                <li><b className="text-slate-800">Rewards Real Sales Volume</b> — advancement is tied to volume, not just recruiting headcount.</li>
                <li><b className="text-slate-800">Clear Career Path</b> — a visible rank ladder gives distributors defined milestones to chase.</li>
                <li><b className="text-slate-800">Long-Term Override Income</b> — successful leaders keep earning from breakaway groups for years.</li>
                <li><b className="text-slate-800">Encourages Leadership</b> — building independent, self-sufficient groups is built into the design.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={17} className="text-slate-400" />
                <span className="text-sm font-bold text-slate-800">Cons of the Stair Step Breakaway Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Income Drop at Breakaway</b> — sponsors can see a sudden dip in earnings once a top group splits off.</li>
                <li><b className="text-slate-800">Complex to Configure</b> — multiple rank thresholds and override generations need careful setup.</li>
                <li><b className="text-slate-800">Volume Maintenance Pressure</b> — many plans require minimum volume just to keep an earned rank.</li>
                <li><b className="text-slate-800">Steeper Learning Curve</b> — new distributors can find the rank and override rules harder to grasp upfront.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ SCENARIOS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Scenarios</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Different Scenarios in a Stair Step Plan
            </h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">
              <b className="text-slate-700">Breakaway</b> — the moment a leader's group splits
              off from the original upline's volume tree.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScenarioCard
              title="Fast Rank Climb"
              diagram={
                <div className="flex items-end gap-1.5">
                  {[12, 18, 24, 30].map((h, i) => (
                    <div key={i} className="w-5 bg-orange-400 rounded-t-sm" style={{ height: `${h}px` }} />
                  ))}
                </div>
              }
            >
              A highly active team hits volume targets quickly, letting a leader climb several
              ranks in their first few months.
            </ScenarioCard>
            <ScenarioCard
              title="Stalled at a Rank"
              diagram={
                <div className="flex items-end gap-1.5">
                  {[12, 18, 18, 18].map((h, i) => (
                    <div
                      key={i}
                      className={`w-5 rounded-t-sm ${i === 0 ? "bg-orange-400" : "bg-slate-200 border-2 border-dashed border-slate-300"}`}
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              }
            >
              Volume plateaus below the next rank's threshold, leaving a distributor stuck at the
              same level for several cycles.
            </ScenarioCard>
            <ScenarioCard title="Group Breaks Away" diagram={<Crown size={28} className="text-orange-400" />}>
              A leader hits the qualifying rank and their group splits into a fully independent
              organisation.
            </ScenarioCard>
            <ScenarioCard title="Override Continues" diagram={<Coins size={28} className="text-orange-400" />}>
              The original sponsor keeps earning a reduced override percentage on the breakaway
              group's volume going forward.
            </ScenarioCard>
            <ScenarioCard title="Rank Demotion" diagram={<ShieldOff size={28} className="text-orange-400" />}>
              A distributor who fails to maintain minimum volume can be stepped back down to a
              lower rank.
            </ScenarioCard>
            <ScenarioCard title="Multiple Breakaway Legs" diagram={<ListTree size={28} className="text-orange-400" />}>
              A senior leader can have several legs break away over time, each generating its own
              override stream.
            </ScenarioCard>
          </div>
        </section>

        {/* ============ ADVANCEMENT TYPES ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Qualification</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How Rank Advancement Is Measured</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard icon={Gauge} title="Personal Volume (PV)">
              Sales volume generated directly by the distributor's own orders and customers.
            </FeatureCard>
            <FeatureCard icon={Users} title="Group Volume (GV)">
              Combined volume from the distributor's entire downline organisation.
            </FeatureCard>
            <FeatureCard icon={Target} title="Leg Requirements">
              Some ranks require minimum volume spread across a set number of separate legs.
            </FeatureCard>
            <FeatureCard icon={GitBranch} title="Active Leg Count">
              Higher ranks often require a minimum number of personally sponsored, active legs.
            </FeatureCard>
            <FeatureCard icon={MapPin} title="Maintenance Volume">
              Once earned, some ranks require an ongoing minimum volume each cycle to retain the
              title.
            </FeatureCard>
          </div>
        </section>

        {/* ============ EARNINGS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Earnings</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Rank Commission Payout — Example
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 1 · Entry Rank</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Distributor A joins and earns a 10% retail commission on personal volume as a
                  base-rank Distributor.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 2 · Group Grows</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A's downline grows to 2,000 PV in group volume, qualifying them for the Manager
                  rank at 18% group commission.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 3 · Breakaway Rank</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  At 10,000 PV group volume, A reaches Executive rank and their group breaks away
                  — A now earns a <b className="text-slate-800">5% override</b> on its volume.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 4 · Compounding Overrides</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  As more legs break away over time, A accumulates several override streams
                  running simultaneously.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-xl px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Override Earned by A on Breakaway Group
              </span>
              <span className="text-2xl font-extrabold text-orange-600">5%</span>
            </div>
          </div>
        </section>

        {/* ============ CAPPING ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Capping</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Stair Step Plan Capping</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FeatureCard icon={Lock} title="Capping by Override Generations">
              Override income can be limited to a fixed number of generations below a breakaway
              point.
            </FeatureCard>
            <FeatureCard icon={Coins} title="Capping by Commission Ceiling">
              A maximum payout — daily, weekly, or monthly — can be set regardless of total rank
              or override volume.
            </FeatureCard>
          </div>
        </section>

        {/* ============ BONUSES ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Rewards</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Bonuses That Stack on Top</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard icon={TrendingUp} title="Group Volume Bonus">Earned as a percentage of total group sales volume each cycle.</FeatureCard>
            <FeatureCard icon={Crown} title="Breakaway Override">Ongoing income from groups that have broken away into independent organisations.</FeatureCard>
            <FeatureCard icon={Zap} title="Fast Start Bonus">Paid when a new member hits early volume targets within their first cycles.</FeatureCard>
            <FeatureCard icon={Award} title="Rank Advancement Bonus">One-time cash or recognition rewards unlocked when stepping up to a new rank.</FeatureCard>
            <FeatureCard icon={Users} title="Leadership Bonus">A share of company-wide volume split among top-ranked leaders.</FeatureCard>
            <FeatureCard icon={BarChart3} title="Generation Pool">A shared bonus pool distributed across multiple override generations.</FeatureCard>
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
              ["Rank Structure", "Fixed ladder — e.g. Distributor → Senior Rep → Manager → Director → Executive"],
              ["Advancement Trigger", "Personal & group volume thresholds met"],
              ["Commission Basis", "Rank-based percentage plus generation overrides"],
              ["Breakaway", "Yes — top-rank groups split into independent organisations"],
              ["Override Income", "Yes — original sponsor earns ongoing overrides post-breakaway"],
              ["Capping", "Configurable — by override generations or commission ceiling"],
              ["Best For", "Established companies wanting a proven, leadership-driven structure"],
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