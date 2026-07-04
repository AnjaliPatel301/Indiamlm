import React from "react";
import {
  LayoutGrid,
  RotateCw,
  Split,
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

/* ---------- hero board diagram: a 2x4 board that splits into two new boards ---------- */
function HeroBoardDiagram() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-orange-600">
          Board Cycle Preview
        </span>
        <span className="text-[11px] text-slate-400">2 × 4 board</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Node label="A" tone="orange" />
        <div className="w-px h-3 bg-slate-300" />
        <div className="grid grid-cols-4 gap-2">
          {["1", "2", "3", "4"].map((l) => (
            <Node key={l} label={l} tone="light" size="sm" />
          ))}
        </div>
        <span className="text-[9px] font-semibold text-orange-600 mt-1">Board fills · 8 seats total</span>
        <div className="flex items-center gap-2 mt-2">
          <RotateCw size={14} className="text-orange-500" />
          <span className="text-[10px] text-slate-500">Board completes → A cycles out</span>
        </div>
        <div className="flex gap-6 mt-2">
          <Node label="A" tone="orange" size="sm" />
          <Node label="A" tone="orange" size="sm" />
        </div>
        <span className="text-[9px] font-semibold text-slate-500">Re-enters 2 new boards</span>
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed mt-5 pt-4 border-t border-slate-100 text-center">
        Once a board fills completely, the top position cycles out, collects a payout, and
        re-enters fresh boards to start again.
      </p>
    </div>
  );
}

export default function BoardMlmPlanPage() {
  return (
    <div className="w-full bg-slate-50 text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* ============ HERO ============ */}
        <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
          <LayoutGrid size={15} className="text-orange-500" />
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            #1 MLM Board Plan Software
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-slate-900 mb-5">
              Board MLM Plan <span className="text-orange-500">Software</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">
              A board plan — also called a revolving or cyclic matrix — groups members into a
              fixed-size board. When the board fills completely, the top member cycles out with
              a payout and re-enters new boards to start again.
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

          <HeroBoardDiagram />
        </div>

        {/* ============ WHAT IS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Definition</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What is a <span className="text-orange-500">Board MLM Plan</span>?
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-3xl mx-auto mb-8 text-center">
            <p className="text-sm leading-relaxed text-slate-600">
              A board plan organises members into small, fixed-size groups called "boards" — for
              example, 2×4 or 2×2 in size. As new members join, they fill open seats on the
              board. Once every seat is filled, the board "completes" or "cycles," the
              top-positioned member receives a payout, and they re-enter fresh boards to start
              earning again.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard icon={LayoutGrid} title="Fixed-Size Boards">
              Each board holds a set number of seats — common formats are 2×2, 2×4, or 3×3.
            </FeatureCard>
            <FeatureCard icon={RotateCw} title="Cycling">
              When a board completely fills, it "cycles" — the top member is paid out and the
              board closes.
            </FeatureCard>
            <FeatureCard icon={Split} title="Board Splitting">
              On completion, the board commonly splits into two new boards, continuing the cycle
              for remaining members.
            </FeatureCard>
            <FeatureCard icon={Repeat} title="Re-entry">
              Cycled-out members typically re-enter one or more new boards automatically to keep
              earning.
            </FeatureCard>
          </div>
        </section>

        {/* ============ STRUCTURE ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Structure</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Board Size & Cycle, Explained</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="bg-orange-50 rounded-xl border border-orange-200 p-6">
              <div className="text-2xl mb-2">🗂️</div>
              <h3 className="text-sm font-bold text-orange-700 mb-1">Board Size (Fixed Seats)</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Every board has a fixed number of seats set by the company — once all seats are
                taken, no more members can join that specific board.
              </p>
              <span className="text-[11px] font-semibold text-orange-600">Controls Group Size</span>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="text-2xl mb-2">🔁</div>
              <h3 className="text-sm font-bold text-slate-800 mb-1">Cycle Completion</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Filling the last seat triggers a "cycle" — the payout event that closes the board
                and resets the structure for new growth.
              </p>
              <span className="text-[11px] font-semibold text-slate-500">Controls Payout Timing</span>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-white">
            <h4 className="text-sm font-bold mb-3 text-orange-400">Board Completion Logic</h4>
            <p className="text-xs text-slate-300 mb-3">
              Every time a new member joins, the software checks the board's status:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {[
                "New members fill the next open seat on the active board",
                "When the final seat fills, the board is marked complete and the top member is paid",
                "The completed board splits into two (or more) new boards, continuing the cycle",
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
              How Does the Board MLM Plan Work?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StepCard n="1" title="Join a Board">
              A new distributor is placed into an open seat on an active board, often by
              auto-fill or sponsor placement.
            </StepCard>
            <StepCard n="2" title="Board Fills Up">
              As more members join — directly or via spillover — open seats on the board are
              steadily filled.
            </StepCard>
            <StepCard n="3" title="Board Cycles">
              Once every seat is occupied, the board completes and the top-positioned member
              earns a cycle payout.
            </StepCard>
            <StepCard n="4" title="Board Splits">
              The completed board typically splits into two new boards, carrying remaining
              members forward.
            </StepCard>
            <StepCard n="5" title="Re-entry & Repeat">
              The cycled-out member re-enters fresh boards, restarting the process and compounding
              earnings over time.
            </StepCard>
          </div>
        </section>

        {/* ============ PROS & CONS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Analysis</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Pros & Cons of the Board Plan</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={17} className="text-orange-500" />
                <span className="text-sm font-bold text-slate-800">Pros of the Board MLM Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Clear Payout Milestones</b> — members know exactly how many seats are left until their next payout.</li>
                <li><b className="text-slate-800">Compounding Re-entry</b> — splitting boards means earning potential can grow with each cycle.</li>
                <li><b className="text-slate-800">Simple Visual Structure</b> — a small fixed board is easy for new members to understand.</li>
                <li><b className="text-slate-800">Strong Team Motivation</b> — everyone benefits from helping fill the shared board quickly.</li>
                <li><b className="text-slate-800">Fast Early Earnings</b> — small board sizes mean members can cycle relatively quickly.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={17} className="text-slate-400" />
                <span className="text-sm font-bold text-slate-800">Cons of the Board MLM Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Depends on Steady Recruiting</b> — a board that stalls means no one in it cycles.</li>
                <li><b className="text-slate-800">Repetitive Re-entry</b> — members must keep refilling new boards to keep earning.</li>
                <li><b className="text-slate-800">Splitting Complexity</b> — managing how boards split and re-fill needs reliable automation.</li>
                <li><b className="text-slate-800">Regulatory Scrutiny</b> — board plans resemble cyclic or matrix-donation models that some regions regulate closely.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ SCENARIOS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Scenarios</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Different Scenarios in a Board Plan
            </h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">
              <b className="text-slate-700">Cycle</b> — the moment a board fills completely and
              pays out its top position.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScenarioCard
              title="Fast-Filling Board"
              diagram={
                <div className="grid grid-cols-4 gap-1.5">
                  {["1","2","3","4"].map((l)=>(<Node key={l} label={l} tone="orange" size="sm" />))}
                </div>
              }
            >
              An active team fills all seats quickly, letting the top member cycle out within
              days of joining.
            </ScenarioCard>
            <ScenarioCard
              title="Slow-Filling Board"
              diagram={
                <div className="grid grid-cols-4 gap-1.5">
                  <Node label="1" tone="orange" size="sm" /><Node label="2" tone="light" size="sm" />
                  <div className="w-7 h-7 rounded-lg border-2 border-dashed border-slate-300" />
                  <div className="w-7 h-7 rounded-lg border-2 border-dashed border-slate-300" />
                </div>
              }
            >
              A quiet board with little recruiting activity leaves open seats unfilled for
              extended periods.
            </ScenarioCard>
            <ScenarioCard title="Board Splits in Two" diagram={<Split size={28} className="text-orange-400" />}>
              On completion, the board divides into two fresh boards, each continuing to fill
              independently.
            </ScenarioCard>
            <ScenarioCard title="Sponsor-Directed Placement" diagram={<Users2 size={28} className="text-orange-400" />}>
              A sponsor chooses which board a new recruit joins, rather than relying purely on
              auto-fill.
            </ScenarioCard>
            <ScenarioCard title="Multiple Active Boards" diagram={<LayoutGrid size={28} className="text-orange-400" />}>
              A distributor who re-enters several times ends up active on multiple boards
              simultaneously.
            </ScenarioCard>
            <ScenarioCard title="Cycle Without Re-entry" diagram={<ArrowUpCircle size={28} className="text-orange-400" />}>
              Some plans let members cash out a cycle payout without automatically re-entering a
              new board.
            </ScenarioCard>
          </div>
        </section>

        {/* ============ BOARD FILL TYPES ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Placement</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How Board Seats Get Filled</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard icon={MapPin} title="Auto-Fill Placement">
              New members are placed automatically into the next open seat across all active
              boards.
            </FeatureCard>
            <FeatureCard icon={Users} title="Sponsor-Directed Fill">
              A sponsor manually chooses which board and seat a new recruit fills.
            </FeatureCard>
            <FeatureCard icon={Target} title="Oldest-Board-First Fill">
              Seats are filled on whichever active board has been open the longest, keeping
              cycles moving.
            </FeatureCard>
            <FeatureCard icon={GitBranch} title="Split-Priority Fill">
              Newly split boards are filled before older ones to keep momentum after every cycle.
            </FeatureCard>
            <FeatureCard icon={LayoutGrid} title="Multi-Board Entry">
              Premium packages can grant entry into multiple boards at once, each filling
              independently.
            </FeatureCard>
          </div>
        </section>

        {/* ============ EARNINGS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Earnings</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Board Cycle Payout — 2×4 Example
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 1 · Board Opens</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Distributor A joins a fresh 2×4 board as the top position — 8 seats open
                  beneath them.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 2 · Seats Fill</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  8 new members join the board, each contributing $25 toward the board's payout
                  pool — $200 total.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 3 · Board Cycles</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The board completes. A receives a cycle payout of 80% of the pool ={" "}
                  <b className="text-slate-800">$160</b>.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 4 · Board Splits</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The remaining 20% ($40) funds company overhead, and the 8 members split into
                  two new boards to start their own cycles.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-xl px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Cycle Payout Earned by A
              </span>
              <span className="text-2xl font-extrabold text-orange-600">$160</span>
            </div>
          </div>
        </section>

        {/* ============ CAPPING ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Capping</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Board Plan Capping</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FeatureCard icon={Lock} title="Capping by Active Boards">
              A distributor can only hold a limited number of active boards at once, capping how
              many simultaneous payouts they can earn.
            </FeatureCard>
            <FeatureCard icon={Coins} title="Capping by Commission Ceiling">
              A maximum payout — daily, weekly, or monthly — can be set regardless of how many
              boards cycle.
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
            <FeatureCard icon={RotateCw} title="Cycle Bonus">Core payout earned every time a board completely fills and cycles.</FeatureCard>
            <FeatureCard icon={Repeat} title="Re-entry Bonus">Extra reward triggered each time a member re-enters and starts a new board.</FeatureCard>
            <FeatureCard icon={Zap} title="Fast Start Bonus">Paid when a new member helps fill their first board quickly.</FeatureCard>
            <FeatureCard icon={Award} title="Rank Advancement">Cash or recognition rewards unlocked as members cycle through more boards.</FeatureCard>
            <FeatureCard icon={Users} title="Sponsor Bonus">A share of the cycle payout earned by personally sponsored members.</FeatureCard>
            <FeatureCard icon={BarChart3} title="Leadership Pool">A shared bonus pool split among top board-cyclers company-wide.</FeatureCard>
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
              ["Board Size", "Fixed — e.g. 2×2, 2×4, or 3×3"],
              ["Completion Trigger", "All seats on the board filled"],
              ["Commission Basis", "Cycle payout from the board's contribution pool"],
              ["Spillover", "Yes — auto-fill or sponsor-directed seat placement"],
              ["Re-entry", "Yes — cycled members re-enter new split boards"],
              ["Capping", "Configurable — by active boards or commission ceiling"],
              ["Best For", "Fast, milestone-driven payouts and compounding re-entry"],
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