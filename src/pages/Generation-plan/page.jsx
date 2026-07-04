import React from "react";
import {
  Layers3,
  Crown,
  Filter,
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
  Star,
  ShieldCheck,
} from "lucide-react";

/* ---------- shared primitives ---------- */
function Node({ label, tone = "slate", size = "md" }) {
  const tones = {
    orange: "bg-orange-500 text-white border-orange-600",
    slate: "bg-white text-slate-700 border-slate-300",
    light: "bg-orange-50 text-orange-700 border-orange-200",
    gold: "bg-amber-400 text-white border-amber-500",
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

/* ---------- hero generation tree (leaders break generations) ---------- */
function HeroGenerationTree() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-orange-600">
          Generation Tree Preview
        </span>
        <span className="text-[11px] text-slate-400">qualified leader = break</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Node label="YOU" tone="orange" />
        <div className="w-px h-3 bg-slate-300" />
        <Node label="A" tone="light" size="sm" />
        <div className="w-px h-3 bg-slate-300" />
        <Node label="B" tone="gold" size="sm" />
        <span className="text-[9px] font-semibold text-amber-600 -mt-1">Qualified Leader · Gen 1 ends</span>
        <div className="w-px h-3 bg-slate-300" />
        <Node label="C" tone="light" size="sm" />
        <div className="w-px h-3 bg-slate-300" />
        <Node label="D" tone="gold" size="sm" />
        <span className="text-[9px] font-semibold text-amber-600 -mt-1">Qualified Leader · Gen 2 ends</span>
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed mt-5 pt-4 border-t border-slate-100 text-center">
        A generation isn't a fixed depth level — it <b className="text-slate-700">ends</b> at
        every qualified leader and a new one begins right below them.
      </p>
    </div>
  );
}

export default function GenerationMlmPlanPage() {
  return (
    <div className="w-full bg-slate-50 text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* ============ HERO ============ */}
        <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
          <Layers3 size={15} className="text-orange-500" />
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            #1 MLM Generation Plan Software
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-slate-900 mb-5">
              Generation MLM Plan <span className="text-orange-500">Software</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">
              A generation plan pays commission based on "generations" of distributors rather
              than fixed depth levels — each generation ends at a qualified leader, rewarding
              members for developing other strong leaders beneath them.
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

          <HeroGenerationTree />
        </div>

        {/* ============ WHAT IS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Definition</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What is a <span className="text-orange-500">Generation MLM Plan</span>?
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-3xl mx-auto mb-8 text-center">
            <p className="text-sm leading-relaxed text-slate-600">
              In a generation plan, a "generation" is the group of distributors between one
              qualified leader and the next — not a fixed depth level like in a unilevel plan.
              Generation 1 covers everyone from the top down to (and including) the first
              qualified leader; Generation 2 starts right beneath them and runs to the next
              qualified leader, and so on.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard icon={Crown} title="Leader-Defined Tiers">
              Generations are bounded by qualified leaders, not by a fixed number of levels.
            </FeatureCard>
            <FeatureCard icon={Filter} title="Qualification Gate">
              A distributor must hit a rank or volume target to "close" a generation and start
              the next.
            </FeatureCard>
            <FeatureCard icon={Layers3} title="Multiple Generations">
              Companies typically pay on a fixed number of generations, e.g. the first 3 to 5.
            </FeatureCard>
            <FeatureCard icon={Star} title="Rewards Leadership">
              Encourages mentoring — developing your own leaders is what unlocks deeper income.
            </FeatureCard>
          </div>
        </section>

        {/* ============ STRUCTURE ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Structure</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Generations vs. Levels, Explained</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="bg-orange-50 rounded-xl border border-orange-200 p-6">
              <div className="text-2xl mb-2">👑</div>
              <h3 className="text-sm font-bold text-orange-700 mb-1">Qualified Leader (Generation Break)</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                A distributor who reaches a set rank or volume threshold. Reaching them closes
                the current generation and opens the next one beneath them.
              </p>
              <span className="text-[11px] font-semibold text-orange-600">Defines Generation Boundary</span>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="text-2xl mb-2">📏</div>
              <h3 className="text-sm font-bold text-slate-800 mb-1">Generation Width (Variable)</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Unlike a fixed depth level, a generation can be one level deep or many — it ends
                wherever the next qualified leader appears.
              </p>
              <span className="text-[11px] font-semibold text-slate-500">No Fixed Depth</span>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-white">
            <h4 className="text-sm font-bold mb-3 text-orange-400">Generation Commission Logic</h4>
            <p className="text-xs text-slate-300 mb-3">
              Every payout cycle, the software traces the tree generation by generation:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {[
                "Sales volume is grouped by which generation it falls under, not by raw depth",
                "Each generation pays its own commission percentage, usually declining further out",
                "Reaching a new qualified leader always opens the next payable generation",
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
              How Does the Generation MLM Plan Work?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StepCard n="1" title="Join & Build Your Team">
              A distributor joins, sponsors recruits, and starts developing their own downline
              network.
            </StepCard>
            <StepCard n="2" title="Recruits Work Toward Rank">
              Downline members grow their own teams and work toward the volume or rank needed to
              qualify as a leader.
            </StepCard>
            <StepCard n="3" title="First Qualified Leader Appears">
              When a distributor reaches the qualification bar, Generation 1 closes right at
              their position.
            </StepCard>
            <StepCard n="4" title="Next Generation Begins">
              Everyone below that leader, down to the next qualified leader, becomes Generation
              2 — and so on.
            </StepCard>
            <StepCard n="5" title="Commission Paid per Generation">
              The software totals volume within each generation and pays out at that
              generation's set rate.
            </StepCard>
          </div>
        </section>

        {/* ============ PROS & CONS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Analysis</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Pros & Cons of the Generation Plan</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={17} className="text-orange-500" />
                <span className="text-sm font-bold text-slate-800">Pros of the Generation MLM Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Rewards True Leadership</b> — income depends on developing other strong leaders, not just recruiting.</li>
                <li><b className="text-slate-800">Encourages Mentoring</b> — distributors are motivated to coach their team toward qualification.</li>
                <li><b className="text-slate-800">Fair to Deep Networks</b> — a generation can stretch across many levels, so depth isn't wasted.</li>
                <li><b className="text-slate-800">Sustainable Payouts</b> — companies still control cost by capping the number of paid generations.</li>
                <li><b className="text-slate-800">Long-Term Residual Income</b> — leadership-driven teams tend to stay active longer.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={17} className="text-slate-400" />
                <span className="text-sm font-bold text-slate-800">Cons of the Generation MLM Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Harder to Explain</b> — generations are less intuitive to new distributors than fixed levels.</li>
                <li><b className="text-slate-800">Slower Early Income</b> — earnings depend on someone else reaching leadership first.</li>
                <li><b className="text-slate-800">Complex Tracking</b> — software must continuously re-map generation boundaries as ranks change.</li>
                <li><b className="text-slate-800">Leader Dependency</b> — a generation that never produces a qualified leader can stall payouts.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ SCENARIOS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Scenarios</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Different Scenarios in a Generation Plan
            </h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">
              <b className="text-slate-700">Qualified leader</b> — a distributor who hits the
              rank or volume bar that closes a generation and opens the next.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScenarioCard
              title="Short Generation"
              diagram={
                <div className="flex flex-col items-center gap-2">
                  <Node label="A" tone="orange" size="sm" />
                  <Node label="B" tone="gold" size="sm" />
                </div>
              }
            >
              A leader qualifies just one level down — Generation 1 closes quickly and pays a
              tight, shallow group.
            </ScenarioCard>
            <ScenarioCard
              title="Long Generation"
              diagram={
                <div className="flex items-center gap-2">
                  <Node label="A" tone="orange" size="sm" /><ArrowRight size={10} className="text-slate-300" /><Node label="B" size="sm" /><ArrowRight size={10} className="text-slate-300" /><Node label="C" size="sm" /><ArrowRight size={10} className="text-slate-300" /><Node label="D" tone="gold" size="sm" />
                </div>
              }
            >
              No one qualifies as a leader for several levels — the whole stretch counts as one
              wide Generation 1.
            </ScenarioCard>
            <ScenarioCard title="Multiple Leaders, One Branch" diagram={<Layers3 size={28} className="text-orange-400" />}>
              Several qualified leaders appear in the same branch, creating multiple stacked
              generations down that line.
            </ScenarioCard>
            <ScenarioCard title="Leader Loses Qualification" diagram={<Filter size={28} className="text-orange-400" />}>
              If a leader drops below the volume bar, some plans re-merge their generation with
              the one above until they requalify.
            </ScenarioCard>
            <ScenarioCard title="Capped Generation Count" diagram={<Lock size={28} className="text-orange-400" />}>
              The company only pays the first set number of generations — volume beyond that
              point isn't commissionable.
            </ScenarioCard>
            <ScenarioCard title="Parallel Branches, Different Depths" diagram={<GitBranch size={28} className="text-orange-400" />}>
              One branch reaches Generation 3 quickly while another stays in Generation 1 longer,
              depending on leader development.
            </ScenarioCard>
          </div>
        </section>

        {/* ============ QUALIFICATION TYPES ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Qualification</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Ways Companies Define a Qualified Leader</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard icon={Crown} title="Rank-Based Qualification">
              A distributor must reach a specific company rank to close a generation.
            </FeatureCard>
            <FeatureCard icon={BarChart3} title="Volume-Based Qualification">
              Hitting a minimum personal or group sales volume target marks the generation break.
            </FeatureCard>
            <FeatureCard icon={Users} title="Team-Size Qualification">
              Sponsoring a minimum number of active frontline members can also trigger
              qualification.
            </FeatureCard>
            <FeatureCard icon={Target} title="Combined Criteria">
              Some plans require rank, volume, and team size together before a generation closes.
            </FeatureCard>
            <FeatureCard icon={MapPin} title="Time-Bound Qualification">
              Qualification must be maintained for a set period — a month or quarter — to count.
            </FeatureCard>
          </div>
        </section>

        {/* ============ EARNINGS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Earnings</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Generation Commission — 3-Generation Example
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Generation 1</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Runs 2 levels deep to the first qualified leader, generating 600 PV total.
                  Commission at 10% = <b className="text-slate-800">$60</b>.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Generation 2</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Runs 4 levels deep to the next qualified leader, generating 900 PV total.
                  Commission at 6% = <b className="text-slate-800">$54</b>.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Generation 3</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Runs 1 level deep to the next qualified leader, generating 300 PV total.
                  Commission at 4% = <b className="text-slate-800">$12</b>.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Beyond Generation 3</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  This plan only pays the first 3 generations — any volume past Generation 3
                  isn't commissionable.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-xl px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Total Commission per Cycle (Gen 1–3)
              </span>
              <span className="text-2xl font-extrabold text-orange-600">$126</span>
            </div>
          </div>
        </section>

        {/* ============ CAPPING ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Capping</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Generation Plan Capping</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FeatureCard icon={Lock} title="Capping by Generation Count">
              Only a fixed number of generations are commissionable — anything beyond that point
              earns nothing for the upline.
            </FeatureCard>
            <FeatureCard icon={Coins} title="Capping by Commission Ceiling">
              A maximum payout — daily, weekly, or monthly — can be set per distributor regardless
              of total generation volume.
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
            <FeatureCard icon={Layers3} title="Generation Commission">Core payout calculated on volume grouped within each generation.</FeatureCard>
            <FeatureCard icon={Crown} title="Leadership Bonus">Extra reward paid when a distributor personally develops a new qualified leader.</FeatureCard>
            <FeatureCard icon={Zap} title="Fast Start Bonus">Paid when a new distributor hits an early sales or recruiting milestone.</FeatureCard>
            <FeatureCard icon={Award} title="Rank Advancement">Cash or recognition rewards unlocked as distributors climb company ranks.</FeatureCard>
            <FeatureCard icon={ShieldCheck} title="Leader Retention Bonus">Rewards for maintaining qualified status over consecutive cycles.</FeatureCard>
            <FeatureCard icon={TrendingUp} title="Global Leadership Pool">A shared bonus pool split among top-generation leaders company-wide.</FeatureCard>
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
              ["Frontline Width", "Unlimited"],
              ["Generation Boundary", "Set by qualified leaders, not fixed depth"],
              ["Commission Basis", "Volume grouped within each generation"],
              ["Spillover", "No — no forced placement"],
              ["Qualification", "Rank, volume, or team-size based"],
              ["Capping", "Configurable — by generation count or commission ceiling"],
              ["Best For", "Companies rewarding leadership development over raw recruiting"],
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