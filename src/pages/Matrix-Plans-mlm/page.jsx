import React from "react";
import {
  Grid3x3,
  Layers,
  Repeat,
  ListTree,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Globe2,
  Clock3,
  Building2,
  PlayCircle,
  ChevronRight,
  ArrowDownToLine,
  GitBranch,
  Target,
  MapPin,
  Award,
  Zap,
  Coins,
  BarChart3,
  Lock,
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
    <div
      className={`${sizes[size]} ${tones[tone]} rounded-lg border-2 flex items-center justify-center font-semibold shrink-0`}
    >
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

/* ---------- hero matrix grid diagram ---------- */
function HeroMatrixGrid() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-orange-600">
          3 × 3 Matrix Preview
        </span>
        <span className="text-[11px] text-slate-400">39 positions</span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <Node label="YOU" tone="orange" />
        <div className="w-px h-3 bg-slate-300" />
        <div className="flex gap-4">
          <Node label="A" tone="light" size="sm" />
          <Node label="B" tone="light" size="sm" />
          <Node label="C" tone="light" size="sm" />
        </div>
        <div className="w-44 border-t border-slate-300" />
        <div className="grid grid-cols-9 gap-1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded bg-orange-50 border border-orange-200 flex items-center justify-center"
            >
              <span className="w-1 h-1 rounded-full bg-orange-400" />
            </div>
          ))}
        </div>
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed mt-5 pt-4 border-t border-slate-100 text-center">
        Width is fixed at <b className="text-slate-700">3</b>, depth is fixed at{" "}
        <b className="text-slate-700">3</b>. Every seat beyond the frontline fills automatically.
      </p>
    </div>
  );
}

export default function MatrixMlmPlanPage() {
  return (
    <div className="w-full bg-slate-50 text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* ============ HERO ============ */}
        <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
          <Grid3x3 size={15} className="text-orange-500" />
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            #1 MLM Matrix Plan Software
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-slate-900 mb-5">
              Matrix MLM Plan <span className="text-orange-500">Software</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">
              A matrix plan is a fixed-width, fixed-depth compensation structure in MLM, commonly
              written as 3×3, 5×7, or 2×12. Every distributor can sponsor only a set number of
              people directly — extra recruits spill downward until the matrix is full and the
              member re-enters a new one.
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

          <HeroMatrixGrid />
        </div>

        {/* ============ WHAT IS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Definition</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What is a <span className="text-orange-500">Matrix MLM Plan</span>?
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-3xl mx-auto mb-8 text-center">
            <p className="text-sm leading-relaxed text-slate-600">
              Unlike a binary plan's unlimited depth or a unilevel plan's unlimited width, a
              matrix plan boxes the structure in on both axes. A distributor can sponsor only as
              many people as the <b className="text-slate-800">width</b> allows directly under
              them. Every recruit beyond that limit spills downward into the next open seat until
              the <b className="text-slate-800">depth</b> limit is reached and the matrix is
              complete.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard icon={ListTree} title="Fixed Width">
              The maximum number of people a distributor can place directly on their frontline.
            </FeatureCard>
            <FeatureCard icon={Layers} title="Fixed Depth">
              The number of levels the matrix extends downward before it's considered full.
            </FeatureCard>
            <FeatureCard icon={Repeat} title="Re-entry">
              When a matrix fills completely, distributors re-enter a brand new matrix to keep
              earning.
            </FeatureCard>
            <FeatureCard icon={Grid3x3} title="Forced Placement">
              Overflow recruits are placed automatically into open seats — no manual sorting
              needed.
            </FeatureCard>
          </div>
        </section>

        {/* ============ STRUCTURE ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Structure</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Width vs. Depth, Explained</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="bg-orange-50 rounded-xl border border-orange-200 p-6">
              <div className="text-2xl mb-2">↔️</div>
              <h3 className="text-sm font-bold text-orange-700 mb-1">Width (Frontline Limit)</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                The maximum number of direct recruits allowed on a distributor's frontline — for
                example, 3 in a 3×3 matrix. Once filled, every further recruit spills below.
              </p>
              <span className="text-[11px] font-semibold text-orange-600">Controls Frontline Size</span>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="text-2xl mb-2">⬇️</div>
              <h3 className="text-sm font-bold text-slate-800 mb-1">Depth (Level Limit)</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                The number of levels the structure can extend downward. When every seat across
                every level is filled, the matrix is considered complete.
              </p>
              <span className="text-[11px] font-semibold text-slate-500">Controls Matrix Size</span>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-white">
            <h4 className="text-sm font-bold mb-3 text-orange-400">Matrix Completion & Re-entry</h4>
            <p className="text-xs text-slate-300 mb-3">
              Every commission cycle, the matrix software tracks how many seats are filled:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {[
                "Commission is paid on PV generated by every filled seat at each level",
                "Once width × depth seats are all occupied, the matrix is flagged complete",
                "The distributor re-enters a fresh matrix to keep earning from new growth",
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
              How Does the Matrix MLM Plan Work?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StepCard n="1" title="Join & Claim a Matrix Position">
              Every new distributor is placed into one open seat — their own width × depth
              structure begins growing from that seat.
            </StepCard>
            <StepCard n="2" title="Fill the Frontline Width">
              The distributor sponsors recruits up to the width limit — a 3×3 matrix accepts
              exactly 3 direct recruits.
            </StepCard>
            <StepCard n="3" title="Spillover Fills the Depth">
              Additional recruits, sponsored by the member or placed by auto-fill, are pushed
              into open seats on the levels below.
            </StepCard>
            <StepCard n="4" title="Matrix Completion">
              Once every seat across every level is occupied, the matrix is full and stops
              accepting new positions.
            </StepCard>
            <StepCard n="5" title="Re-entry & Ongoing Commissions">
              The distributor re-enters a new matrix to keep growing, while past commissions
              remain on record.
            </StepCard>
          </div>
        </section>

        {/* ============ PROS & CONS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Analysis</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Pros & Cons of the Matrix Plan</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={17} className="text-orange-500" />
                <span className="text-sm font-bold text-slate-800">Pros of the Matrix MLM Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Predictable Growth Ceiling</b> — fixed width and depth make income easy to forecast.</li>
                <li><b className="text-slate-800">Spillover Benefits Everyone</b> — overflow from an active upline can fill a newer member's matrix.</li>
                <li><b className="text-slate-800">Simple to Visualise</b> — a grid is easier for new members to understand than an open tree.</li>
                <li><b className="text-slate-800">Built-in Re-entry Loop</b> — completing a matrix gives a clear next milestone.</li>
                <li><b className="text-slate-800">Strong Team Collaboration</b> — shared filling encourages members to support each other.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={17} className="text-slate-400" />
                <span className="text-sm font-bold text-slate-800">Cons of the Matrix MLM Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Capped Earnings per Matrix</b> — income stops once a matrix is full, until re-entry.</li>
                <li><b className="text-slate-800">Relies on Company Spillover</b> — members with passive uplines may fill slowly.</li>
                <li><b className="text-slate-800">Re-entry Can Feel Repetitive</b> — restarting means rebuilding momentum from level one.</li>
                <li><b className="text-slate-800">Requires Reliable Software</b> — auto-fill placement and depth tracking must be accurate.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ SCENARIOS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Scenarios</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Different Scenarios in a Matrix Plan
            </h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">
              <b className="text-slate-700">Sponsor</b> introduces a new member; <b className="text-slate-700">Parent</b> is
              the position they're actually placed under in the matrix.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScenarioCard
              title="Sponsor & Parent Are the Same"
              diagram={
                <div className="flex flex-col items-center gap-2">
                  <Node label="A" tone="orange" size="sm" />
                  <div className="flex gap-3"><Node label="B" size="sm" /><Node label="C" size="sm" /><Node label="D" size="sm" /></div>
                </div>
              }
            >
              When all three frontline seats are filled directly by the distributor's own
              recruits, they're both sponsor and parent.
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
              A member sponsored by one distributor may be auto-placed under a different
              distributor's open seat.
            </ScenarioCard>
            <ScenarioCard title="Matrix Fills Before Re-entry" diagram={<Grid3x3 size={28} className="text-orange-400" />}>
              All 39 seats in a 3×3 matrix fill completely before the original distributor
              re-enters a new matrix.
            </ScenarioCard>
            <ScenarioCard title="Single-Branch Overflow" diagram={<ArrowDownToLine size={28} className="text-orange-400" />}>
              A sponsor's recruits keep landing in one branch, filling that side's depth faster
              than the others.
            </ScenarioCard>
            <ScenarioCard title="Auto-Fill Placement" diagram={<MapPin size={28} className="text-orange-400" />}>
              The system places overflow into the next open seat automatically, without sponsor
              input.
            </ScenarioCard>
            <ScenarioCard title="Weakest-Branch Placement" diagram={<Target size={28} className="text-orange-400" />}>
              Overflow is routed toward whichever branch has the fewest filled seats, keeping the
              matrix even.
            </ScenarioCard>
          </div>
        </section>

        {/* ============ SPILLOVER TYPES ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Spillover</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How Spillover Gets Placed</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard icon={ArrowDownToLine} title="Top-Down Fill">
              New positions fill the shallowest open level first, left to right, before moving
              deeper.
            </FeatureCard>
            <FeatureCard icon={GitBranch} title="Left-to-Right Fill">
              Each level fills strictly in sequence from the leftmost seat to the rightmost.
            </FeatureCard>
            <FeatureCard icon={Target} title="Weakest-Branch Fill">
              Overflow is routed toward whichever branch has the fewest filled seats, keeping
              legs even.
            </FeatureCard>
            <FeatureCard icon={Users} title="Sponsor-Directed Fill">
              Within company rules, a sponsor manually chooses which open seat a new recruit
              lands in.
            </FeatureCard>
            <FeatureCard icon={Grid3x3} title="Multi-Position Fill">
              Premium packages can grant multiple matrix positions, each filling independently.
            </FeatureCard>
          </div>
        </section>

        {/* ============ EARNINGS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Earnings</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Matrix Level Commission — 3×3 Example
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Level 1 · Frontline</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  3 directly sponsored positions, each generating 50 PV = 150 PV total.
                  Commission at 8% = <b className="text-slate-800">$12</b>.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Level 2 · First Spillover</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  9 positions at 50 PV each = 450 PV total. Commission at 6.5% ={" "}
                  <b className="text-slate-800">$29</b>.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Level 3 · Second Spillover</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  27 positions at 50 PV each = 1,350 PV total. Commission at 5% ={" "}
                  <b className="text-slate-800">$68</b>.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Why the Rate Decreases</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deeper levels pay a smaller percentage — a common way matrix plans reward levels
                  closest to the distributor more than distant spillover.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-xl px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Total Commission per Cycle ($12 + $29 + $68)
              </span>
              <span className="text-2xl font-extrabold text-orange-600">$109</span>
            </div>
          </div>
        </section>

        {/* ============ CAPPING ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Capping</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Matrix Capping</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FeatureCard icon={Lock} title="Capping by Matrix Completion">
              Earnings from a position stop the moment its width × depth structure is fully
              occupied — re-entry is required to keep earning from new growth.
            </FeatureCard>
            <FeatureCard icon={Coins} title="Capping by Commission Ceiling">
              A maximum payout — daily, weekly, or monthly — is set per position relative to the
              distributor's joining package.
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
            <FeatureCard icon={Layers} title="Level Commission">Core payout calculated on PV generated at each depth level of a filled matrix.</FeatureCard>
            <FeatureCard icon={Repeat} title="Re-entry Bonus">A reward triggered each time a distributor completes a matrix and re-enters a new one.</FeatureCard>
            <FeatureCard icon={Zap} title="Fast Start Bonus">Paid when a new distributor fills their first row of frontline positions quickly.</FeatureCard>
            <FeatureCard icon={Award} title="Rank Advancement">Cash or recognition rewards unlocked as distributors complete multiple matrices.</FeatureCard>
            <FeatureCard icon={TrendingUp} title="Matching Bonus">A percentage of a personally sponsored recruit's level commission, paid to their sponsor.</FeatureCard>
            <FeatureCard icon={BarChart3} title="Leadership Pool">A shared bonus pool split among top performers based on total matrices completed.</FeatureCard>
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
              ["Frontline Width", "Fixed — e.g. 3, 5, or chosen number"],
              ["Depth", "Fixed — capped number of levels"],
              ["Commission Basis", "PV generated per filled level"],
              ["Spillover", "Yes — company auto-fill or sponsor-directed"],
              ["Re-entry", "Yes — new matrix starts on completion"],
              ["Capping", "Configurable — by completion or commission ceiling"],
              ["Best For", "Structured teams that want predictable, repeatable growth"],
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