import React from "react";
import {
  ArrowDownToLine,
  RotateCw,
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
  AlignJustify,
  GitCommitHorizontal,
  Gauge,
  UserPlus,
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

/* ---------- hero diagram: a single vertical line of members, one after another ---------- */
function HeroMonolineDiagram() {
  const members = ["A", "B", "C", "D", "E", "F"];
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-orange-600">
          Single-Line Preview
        </span>
        <span className="text-[11px] text-slate-400">1 × ∞ line</span>
      </div>

      <div className="flex flex-col items-center gap-1.5">
        {members.map((l, i) => (
          <React.Fragment key={l}>
            <Node label={l} tone={i === 0 ? "orange" : "light"} size="sm" />
            {i < members.length - 1 && <div className="w-px h-2.5 bg-slate-300" />}
          </React.Fragment>
        ))}
        <div className="w-px h-2.5 bg-slate-300" />
        <span className="text-[9px] font-semibold text-orange-600">Line continues downward, unlimited width</span>
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed mt-5 pt-4 border-t border-slate-100 text-center">
        Every new member — regardless of who sponsored them — is placed into one single
        downward line. There's no left/right or width limit, just depth.
      </p>
    </div>
  );
}

export default function MonolinePlanPage() {
  return (
    <div className="w-full bg-slate-50 text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* ============ HERO ============ */}
        <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
          <ArrowDownToLine size={15} className="text-orange-500" />
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            #1 MLM Monoline Plan Software
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-slate-900 mb-5">
              Monoline Plan <span className="text-orange-500">Software</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">
              A monoline plan — also called a single-line plan — places every new member into one
              continuous downward line, in the order they join. There's no separate team width or
              binary structure, just one shared line everyone benefits from.
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

          <HeroMonolineDiagram />
        </div>

        {/* ============ WHAT IS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Definition</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What is a <span className="text-orange-500">Monoline Plan</span>?
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-3xl mx-auto mb-8 text-center">
            <p className="text-sm leading-relaxed text-slate-600">
              A monoline plan places every distributor — regardless of who personally sponsored
              them — into a single, shared downward line in strict join order. There's only one
              "leg," so there's no left/right balancing or team-width requirement. Earnings are
              typically based on position in the line and the sales activity of everyone who
              joins below, making this one of the simplest structures to understand and run.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard icon={ArrowDownToLine} title="Single Shared Line">
              All members — across every sponsor — are placed into one continuous downward line.
            </FeatureCard>
            <FeatureCard icon={AlignJustify} title="Join-Order Placement">
              Position in the line is determined purely by the order in which members join.
            </FeatureCard>
            <FeatureCard icon={GitCommitHorizontal} title="No Team Width Limit">
              There's no left/right structure or maximum team width to manage.
            </FeatureCard>
            <FeatureCard icon={Repeat} title="Shared Spillover">
              New joins below a position automatically benefit everyone above them in the line.
            </FeatureCard>
          </div>
        </section>

        {/* ============ STRUCTURE ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Structure</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Line Placement & Depth, Explained</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="bg-orange-50 rounded-xl border border-orange-200 p-6">
              <div className="text-2xl mb-2">📏</div>
              <h3 className="text-sm font-bold text-orange-700 mb-1">Single Line (Unlimited Width)</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Every member sits at exactly one position in one line — there's no second leg to
                fill or balance.
              </p>
              <span className="text-[11px] font-semibold text-orange-600">Controls Placement</span>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="text-2xl mb-2">⏱️</div>
              <h3 className="text-sm font-bold text-slate-800 mb-1">Join-Order Depth</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                A member's depth in the line is fixed the moment they join — everyone after them
                falls below, regardless of sponsor.
              </p>
              <span className="text-[11px] font-semibold text-slate-500">Controls Earning Reach</span>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-white">
            <h4 className="text-sm font-bold mb-3 text-orange-400">Line Placement Logic</h4>
            <p className="text-xs text-slate-300 mb-3">
              Every time a new member joins, the software checks the line's status:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {[
                "The new member is placed at the next open position at the bottom of the single line",
                "Their position locks in their depth relative to everyone already in the line",
                "Commissions then flow upward based on depth, level, or a defined payout pattern",
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
              How Does the Monoline Plan Work?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StepCard n="1" title="Join the Line">
              A new distributor is placed at the next open position at the bottom of the single
              shared line.
            </StepCard>
            <StepCard n="2" title="Line Grows">
              As more members join — from any sponsor — the line extends downward, position by
              position.
            </StepCard>
            <StepCard n="3" title="Spillover Benefits Everyone">
              Every new join below a position can contribute commissions to all positions above
              it in the line.
            </StepCard>
            <StepCard n="4" title="Commissions Flow Upward">
              Sales and join activity from the line below generate level or depth-based payouts
              upward.
            </StepCard>
            <StepCard n="5" title="Repeat & Compound">
              Distributors who sponsor more members or qualify further keep earning as the shared
              line keeps growing.
            </StepCard>
          </div>
        </section>

        {/* ============ PROS & CONS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Analysis</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Pros & Cons of the Monoline Plan</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={17} className="text-orange-500" />
                <span className="text-sm font-bold text-slate-800">Pros of the Monoline Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Extremely Simple Structure</b> — one line, one position, easy for any new member to understand.</li>
                <li><b className="text-slate-800">Shared Spillover Benefit</b> — every new join can help everyone already in the line above it.</li>
                <li><b className="text-slate-800">No Width Pressure</b> — members aren't required to balance two or more legs.</li>
                <li><b className="text-slate-800">Fast Onboarding</b> — there's only one decision to make: where in the line a member lands.</li>
                <li><b className="text-slate-800">Strong Early-Mover Advantage</b> — members who join early sit higher and benefit from all later spillover.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={17} className="text-slate-400" />
                <span className="text-sm font-bold text-slate-800">Cons of the Monoline Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Depends Heavily on Company Marketing</b> — since placement isn't sponsor-driven, overall recruiting drives everyone's depth.</li>
                <li><b className="text-slate-800">Late Joiners Earn Less</b> — depth in a single line means later members have fewer people below them.</li>
                <li><b className="text-slate-800">Limited Personal Control</b> — a member's earnings depend on company-wide growth, not just their own efforts.</li>
                <li><b className="text-slate-800">Regulatory Scrutiny</b> — single-line, depth-based payouts can resemble models some regions regulate closely.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ SCENARIOS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Scenarios</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Different Scenarios in a Monoline Plan
            </h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">
              <b className="text-slate-700">Spillover</b> — when a new member is placed below an
              existing position, benefiting everyone above them.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScenarioCard
              title="Fast-Growing Line"
              diagram={
                <div className="flex flex-col items-center gap-1">
                  {["1","2","3","4"].map((l)=>(<Node key={l} label={l} tone="orange" size="sm" />))}
                </div>
              }
            >
              Heavy company-wide recruiting fills the line quickly, giving early positions
              constant spillover.
            </ScenarioCard>
            <ScenarioCard
              title="Slow-Growing Line"
              diagram={
                <div className="flex flex-col items-center gap-1">
                  <Node label="1" tone="orange" size="sm" />
                  <Node label="2" tone="light" size="sm" />
                  <div className="w-7 h-7 rounded-lg border-2 border-dashed border-slate-300" />
                </div>
              }
            >
              Limited new joins mean lower positions in the line wait longer to see meaningful
              spillover.
            </ScenarioCard>
            <ScenarioCard title="Cross-Sponsor Spillover" diagram={<Users2 size={28} className="text-orange-400" />}>
              A member placed by one sponsor's recruiting can end up boosting a completely
              different member positioned above them.
            </ScenarioCard>
            <ScenarioCard title="Early Position Advantage" diagram={<ArrowUpCircle size={28} className="text-orange-400" />}>
              A member who joins early in the company's life sits high in the line, benefiting
              from years of future spillover.
            </ScenarioCard>
            <ScenarioCard title="Level-Based Payout" diagram={<ListTree size={28} className="text-orange-400" />}>
              Commissions are paid out based on how many levels deep a sale or join occurs below
              a given position.
            </ScenarioCard>
            <ScenarioCard title="Capped Depth Payout" diagram={<Lock size={28} className="text-orange-400" />}>
              Some plans only pay commissions down to a fixed depth, after which deeper activity
              no longer counts.
            </ScenarioCard>
          </div>
        </section>

        {/* ============ PLACEMENT TYPES ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Placement</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How Line Positions Get Filled</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard icon={MapPin} title="Strict Join-Order Fill">
              New members are placed strictly in the order they register, regardless of sponsor.
            </FeatureCard>
            <FeatureCard icon={UserPlus} title="Sponsor-Tagged Placement">
              The line tracks who sponsored whom for commission purposes, even though placement
              itself stays linear.
            </FeatureCard>
            <FeatureCard icon={Target} title="Package-Based Entry Point">
              Higher-tier joining packages can grant entry further up the line or with bonus
              positions.
            </FeatureCard>
            <FeatureCard icon={GitBranch} title="Multiple Line Entries">
              Some plans let a single member hold more than one position in the line for
              additional earning potential.
            </FeatureCard>
            <FeatureCard icon={ArrowDownToLine} title="Auto-Placement Queue">
              An automated queue places new members instantly, removing any manual placement
              decisions.
            </FeatureCard>
          </div>
        </section>

        {/* ============ EARNINGS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Earnings</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Monoline Payout — Level Example
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 1 · Position Secured</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Distributor A joins and is placed at position 100 in the company's single
                  shared line.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 2 · Line Fills Below</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Over the next month, 50 new members join below position 100, each generating
                  $20 in qualifying volume.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 3 · Level Commission Applied</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A earns a 10% level commission on volume from the next 20 positions directly
                  below them.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 4 · Payout Calculated</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  20 qualifying positions × $20 volume × 10% commission ={" "}
                  <b className="text-slate-800">$40</b> earned this cycle.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-xl px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Level Commission Earned by A
              </span>
              <span className="text-2xl font-extrabold text-orange-600">$40</span>
            </div>
          </div>
        </section>

        {/* ============ CAPPING ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Capping</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Monoline Plan Capping</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FeatureCard icon={Lock} title="Capping by Depth">
              Commissions can be limited to a fixed number of levels below a member's position in
              the line.
            </FeatureCard>
            <FeatureCard icon={Coins} title="Capping by Commission Ceiling">
              A maximum payout — daily, weekly, or monthly — can be set regardless of total line
              growth.
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
            <FeatureCard icon={ArrowDownToLine} title="Level Bonus">Core payout earned from qualifying volume within a set number of levels below.</FeatureCard>
            <FeatureCard icon={Repeat} title="Spillover Bonus">Extra reward triggered whenever new members are placed below an existing position.</FeatureCard>
            <FeatureCard icon={Zap} title="Fast Start Bonus">Paid when a new member personally sponsors a set number of joins early on.</FeatureCard>
            <FeatureCard icon={Award} title="Position Milestone Bonus">Cash or recognition rewards unlocked as a member's line reaches certain sizes.</FeatureCard>
            <FeatureCard icon={Users} title="Sponsor Bonus">A direct bonus paid for every personally sponsored member, on top of line earnings.</FeatureCard>
            <FeatureCard icon={BarChart3} title="Leadership Pool">A shared bonus pool split among top performers company-wide.</FeatureCard>
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
              ["Line Structure", "Single line — unlimited width, unlimited depth"],
              ["Placement Trigger", "Join order, regardless of sponsor"],
              ["Commission Basis", "Level or depth-based payout from line activity"],
              ["Spillover", "Yes — shared across the entire line, not sponsor-specific"],
              ["Sponsor Tracking", "Yes — sponsor relationships tracked for direct bonuses"],
              ["Capping", "Configurable — by depth or commission ceiling"],
              ["Best For", "Simple onboarding and company-driven, shared-growth structures"],
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