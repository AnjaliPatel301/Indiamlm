import React from "react";
import {
  HandCoins,
  Users,
  ListTree,
  CheckCircle2,
  XCircle,
  ArrowRight,
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
  CalendarClock,
  Gauge,
  Percent,
  HeartHandshake,
  Layers,
  ArrowLeftRight,
  Gift,
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

/* ---------- hero diagram: many small contributions flowing into one member's funding goal ---------- */
function HeroCrowdfundDiagram() {
  const contributors = ["1", "2", "3", "4", "5", "6"];
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-orange-600">
          Funding Flow Preview
        </span>
        <span className="text-[11px] text-slate-400">Many → one</span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="grid grid-cols-3 gap-2">
          {contributors.map((l) => (
            <Node key={l} label={l} tone="light" size="sm" />
          ))}
        </div>
        <div className="flex flex-col items-center gap-1">
          <ArrowUpCircle size={16} className="text-orange-500 rotate-180" />
          <span className="text-[9px] font-semibold text-orange-600">Contributions pooled toward goal</span>
        </div>
        <Node label="A" tone="orange" />
        <span className="text-[9px] font-semibold text-slate-500">A reaches funding goal & receives payout</span>
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed mt-5 pt-4 border-t border-slate-100 text-center">
        Each member sets a funding goal. Other members contribute small amounts toward it; once
        the goal is reached, the funded member is paid out and the cycle repeats for everyone
        else in turn.
      </p>
    </div>
  );
}

export default function CrowdfundingPlanPage() {
  return (
    <div className="w-full bg-slate-50 text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* ============ HERO ============ */}
        <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
          <HandCoins size={15} className="text-orange-500" />
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            #1 MLM Crowdfunding Plan Software
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-slate-900 mb-5">
              Crowdfunding Plan <span className="text-orange-500">Software</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">
              A crowdfunding plan — also called a donation or peer-to-peer help plan — pools small
              contributions from many members toward one member's funding goal at a time, cycling
              through the network so everyone gets funded in turn.
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

          <HeroCrowdfundDiagram />
        </div>

        {/* ============ WHAT IS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Definition</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What is a <span className="text-orange-500">Crowdfunding Plan</span>?
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-3xl mx-auto mb-8 text-center">
            <p className="text-sm leading-relaxed text-slate-600">
              A crowdfunding plan structures the network around peer-to-peer contributions toward
              individual funding goals. Each member sets a target amount; other members
              contribute smaller amounts toward it, often guided by placement or matrix rules.
              Once a member's goal is fully funded, they receive their payout and the structure
              moves on to fund the next member in the queue, repeating the cycle across the
              network.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard icon={Target} title="Funding Goals">
              Each member sets or is assigned a fixed funding target to be reached through peer
              contributions.
            </FeatureCard>
            <FeatureCard icon={Users2} title="Pooled Contributions">
              Multiple members contribute smaller amounts that together add up to the funding
              goal.
            </FeatureCard>
            <FeatureCard icon={HandCoins} title="Payout on Completion">
              Once a goal is fully funded, the receiving member is paid out in full.
            </FeatureCard>
            <FeatureCard icon={Repeat} title="Queue & Repeat">
              After being funded, members typically re-enter the queue to help fund others and
              get funded again.
            </FeatureCard>
          </div>
        </section>

        {/* ============ STRUCTURE ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Structure</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Funding Goals & Queues, Explained</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="bg-orange-50 rounded-xl border border-orange-200 p-6">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="text-sm font-bold text-orange-700 mb-1">Funding Goal (Fixed Target)</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Every member's goal is a fixed amount made up of a set number of smaller
                contributions from others.
              </p>
              <span className="text-[11px] font-semibold text-orange-600">Controls Payout Size</span>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="text-2xl mb-2">📋</div>
              <h3 className="text-sm font-bold text-slate-800 mb-1">Contribution Queue</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                New contributions are routed toward whichever member's goal is next in line to be
                completed.
              </p>
              <span className="text-[11px] font-semibold text-slate-500">Controls Funding Order</span>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-white">
            <h4 className="text-sm font-bold mb-3 text-orange-400">Funding Completion Logic</h4>
            <p className="text-xs text-slate-300 mb-3">
              Every time a new contribution is made, the software checks the goal's status:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {[
                "The contribution is routed toward the next member's open funding goal",
                "When the goal's total contributions equal the target amount, it's marked complete and paid out",
                "The funded member re-enters the queue to contribute toward others and start a new goal",
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
              How Does the Crowdfunding Plan Work?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StepCard n="1" title="Join & Set a Goal">
              A new member joins and is placed into the funding queue with a fixed target amount.
            </StepCard>
            <StepCard n="2" title="Contribute to Others">
              The member contributes a smaller fixed amount toward another member's active
              funding goal.
            </StepCard>
            <StepCard n="3" title="Goal Fills Up">
              As more members contribute, the target member's funding goal steadily fills toward
              completion.
            </StepCard>
            <StepCard n="4" title="Goal Completes">
              Once fully funded, the receiving member is paid out the full target amount.
            </StepCard>
            <StepCard n="5" title="Re-enter & Repeat">
              The funded member re-enters the queue, contributing to others and starting a new
              funding goal of their own.
            </StepCard>
          </div>
        </section>

        {/* ============ PROS & CONS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Analysis</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Pros & Cons of the Crowdfunding Plan</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={17} className="text-orange-500" />
                <span className="text-sm font-bold text-slate-800">Pros of the Crowdfunding Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Low Individual Contribution</b> — small per-member amounts make participation accessible to many.</li>
                <li><b className="text-slate-800">Clear Funding Milestone</b> — members can see exactly how much more is needed to reach their goal.</li>
                <li><b className="text-slate-800">Strong Community Feel</b> — the peer-to-peer structure encourages mutual support among members.</li>
                <li><b className="text-slate-800">Fast Initial Payouts</b> — an active queue can fund early goals relatively quickly.</li>
                <li><b className="text-slate-800">Simple Mechanic</b> — contribute toward others, get funded yourself — easy to explain.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={17} className="text-slate-400" />
                <span className="text-sm font-bold text-slate-800">Cons of the Crowdfunding Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Depends on Constant New Joins</b> — a stalled queue means goals stop completing for everyone behind it.</li>
                <li><b className="text-slate-800">No Underlying Product Value</b> — pure peer-to-peer funding without a product can draw regulatory attention.</li>
                <li><b className="text-slate-800">Queue Management Complexity</b> — fairly routing contributions to the right goals needs reliable automation.</li>
                <li><b className="text-slate-800">High Regulatory Risk</b> — many regions classify pure money-pooling structures as illegal pyramid or gifting schemes.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ SCENARIOS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Scenarios</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Different Scenarios in a Crowdfunding Plan
            </h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">
              <b className="text-slate-700">Funding Completion</b> — the moment a member's goal
              receives its final contribution and is paid out.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScenarioCard
              title="Fast-Funded Goal"
              diagram={
                <div className="grid grid-cols-3 gap-1.5">
                  {["1","2","3","4","5","6"].map((l)=>(<Node key={l} label={l} tone="orange" size="sm" />))}
                </div>
              }
            >
              An active queue fills a member's goal quickly, letting them get paid out within
              days of starting.
            </ScenarioCard>
            <ScenarioCard
              title="Slow-Funded Goal"
              diagram={
                <div className="grid grid-cols-3 gap-1.5">
                  <Node label="1" tone="orange" size="sm" /><Node label="2" tone="light" size="sm" />
                  <div className="w-7 h-7 rounded-lg border-2 border-dashed border-slate-300" />
                  <div className="w-7 h-7 rounded-lg border-2 border-dashed border-slate-300" />
                  <div className="w-7 h-7 rounded-lg border-2 border-dashed border-slate-300" />
                  <div className="w-7 h-7 rounded-lg border-2 border-dashed border-slate-300" />
                </div>
              }
            >
              A quiet queue with few new contributors leaves a goal partially funded for an
              extended period.
            </ScenarioCard>
            <ScenarioCard title="Tiered Funding Levels" diagram={<Layers size={28} className="text-orange-400" />}>
              Members choose from multiple funding tiers, each with a different goal size and
              contribution amount.
            </ScenarioCard>
            <ScenarioCard title="Sponsor-Directed Queue" diagram={<Users2 size={28} className="text-orange-400" />}>
              A sponsor can direct their recruit's contribution toward a specific member's goal
              rather than the default queue.
            </ScenarioCard>
            <ScenarioCard title="Reciprocal Funding" diagram={<ArrowLeftRight size={28} className="text-orange-400" />}>
              A member who is funded is required to contribute to others before re-entering with
              a new goal.
            </ScenarioCard>
            <ScenarioCard title="Funding Without Re-entry" diagram={<Gift size={28} className="text-orange-400" />}>
              Some plans let a member withdraw their funded payout without automatically
              re-entering the queue.
            </ScenarioCard>
          </div>
        </section>

        {/* ============ ROUTING TYPES ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Routing</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How Contributions Get Routed</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard icon={MapPin} title="Auto-Queue Routing">
              Contributions are automatically routed to whichever active goal is next in line to
              complete.
            </FeatureCard>
            <FeatureCard icon={Users} title="Sponsor-Directed Routing">
              A sponsor manually chooses which member's goal their recruit's contribution
              supports.
            </FeatureCard>
            <FeatureCard icon={Target} title="Oldest-Goal-First Routing">
              Contributions are routed to whichever active goal has been open the longest.
            </FeatureCard>
            <FeatureCard icon={GitBranch} title="Tier-Matched Routing">
              Contributions are routed only to goals within the same funding tier as the
              contributor.
            </FeatureCard>
            <FeatureCard icon={HeartHandshake} title="Direct Peer Routing">
              Members manually select which specific peer's goal they want to support.
            </FeatureCard>
          </div>
        </section>

        {/* ============ EARNINGS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Earnings</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Funding Payout — Example
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 1 · Goal Opens</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Member A joins the queue with a funding goal of $200, needing 8 contributions
                  of $25 each.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 2 · Contributions Arrive</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  8 members in the queue each contribute $25 toward A's goal as their own
                  required contribution.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 3 · Goal Completes</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The goal reaches its $200 target and is marked complete — A receives the full
                  payout.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 4 · Queue Continues</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A re-enters the queue to contribute toward others and start a new funding goal
                  of their own.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-xl px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Funding Payout Received by A
              </span>
              <span className="text-2xl font-extrabold text-orange-600">$200</span>
            </div>
          </div>
        </section>

        {/* ============ CAPPING ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Capping</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Crowdfunding Plan Capping</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FeatureCard icon={Lock} title="Capping by Active Goals">
              A member can only hold a limited number of active funding goals at once.
            </FeatureCard>
            <FeatureCard icon={Coins} title="Capping by Payout Ceiling">
              A maximum payout — daily, weekly, or monthly — can be set regardless of how many
              goals complete.
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
            <FeatureCard icon={HandCoins} title="Funding Payout">Core payout earned every time a member's funding goal completes.</FeatureCard>
            <FeatureCard icon={Repeat} title="Re-entry Bonus">Extra reward triggered each time a member re-enters the queue with a new goal.</FeatureCard>
            <FeatureCard icon={Zap} title="Fast Start Bonus">Paid when a new member helps fund their first few goals quickly.</FeatureCard>
            <FeatureCard icon={Award} title="Tier Advancement">Cash or recognition rewards unlocked as members move to higher funding tiers.</FeatureCard>
            <FeatureCard icon={Users} title="Referral Bonus">A share of a referred member's first funding contribution.</FeatureCard>
            <FeatureCard icon={BarChart3} title="Community Pool">A shared bonus pool split among the most active contributors company-wide.</FeatureCard>
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
              ["Core Driver", "Pooled peer contributions toward a fixed funding goal"],
              ["Completion Trigger", "Total contributions reach the funding target"],
              ["Commission Basis", "Full payout of the funding goal amount"],
              ["Routing", "Auto-queue, sponsor-directed, or tier-matched contribution routing"],
              ["Re-entry", "Yes — funded members typically re-enter the queue"],
              ["Capping", "Configurable — by active goals or payout ceiling"],
              ["Best For", "Community-driven, milestone-based peer funding structures"],
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