import React from "react";
import {
  Network,
  Layers,
  Infinity as InfinityIcon,
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

/* ---------- hero universal/unilevel fan diagram ---------- */
function HeroUniversalTree() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-orange-600">
          Universal Tree Preview
        </span>
        <span className="text-[11px] text-slate-400">∞ width · limited depth</span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <Node label="YOU" tone="orange" />
        <div className="w-px h-3 bg-slate-300" />
        <div className="w-full border-t border-slate-300" />
        <div className="flex gap-3 flex-wrap justify-center">
          {["A", "B", "C", "D", "E"].map((l) => (
            <Node key={l} label={l} tone="light" size="sm" />
          ))}
        </div>
        <div className="w-px h-3 bg-slate-300" />
        <div className="flex gap-2 flex-wrap justify-center max-w-[260px]">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-4 h-4 rounded bg-orange-50 border border-orange-200 flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-orange-400" />
            </div>
          ))}
        </div>
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed mt-5 pt-4 border-t border-slate-100 text-center">
        Sponsor as many <b className="text-slate-700">unlimited frontline</b> members as you can
        recruit — commissions flow across every active level beneath them.
      </p>
    </div>
  );
}

export default function UniversalMlmPlanPage() {
  return (
    <div className="w-full bg-slate-50 text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* ============ HERO ============ */}
        <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
          <Network size={15} className="text-orange-500" />
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            #1 MLM Universal Plan Software
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-slate-900 mb-5">
              Universal MLM Plan <span className="text-orange-500">Software</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">
              A universal plan is an unlimited-width compensation structure — every distributor
              can sponsor as many frontline members as they want, with commissions paid out
              across multiple levels beneath every active recruit.
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

          <HeroUniversalTree />
        </div>

        {/* ============ WHAT IS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Definition</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What is a <span className="text-orange-500">Universal MLM Plan</span>?
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-3xl mx-auto mb-8 text-center">
            <p className="text-sm leading-relaxed text-slate-600">
              A universal plan — also known as a unilevel plan — places no limit on how many
              people a distributor can sponsor directly. Every recruit sits on the same frontline
              row, side by side, and commissions are calculated level by level as the network
              grows downward, usually up to a fixed number of levels.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard icon={InfinityIcon} title="Unlimited Width">
              No cap on direct recruits — sponsor as many frontline members as you can bring in.
            </FeatureCard>
            <FeatureCard icon={Layers} title="Capped Depth">
              Commission-eligible levels are usually limited, keeping payouts predictable for the
              company.
            </FeatureCard>
            <FeatureCard icon={ListTree} title="Flat Frontline">
              Every direct recruit sits on the same row — there's no left/right or seat-by-seat
              placement logic.
            </FeatureCard>
            <FeatureCard icon={Network} title="Level Commissions">
              Earnings are paid as a percentage of sales volume generated at each qualifying
              level.
            </FeatureCard>
          </div>
        </section>

        {/* ============ STRUCTURE ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Structure</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frontline vs. Levels, Explained</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="bg-orange-50 rounded-xl border border-orange-200 p-6">
              <div className="text-2xl mb-2">🔓</div>
              <h3 className="text-sm font-bold text-orange-700 mb-1">Frontline (Unlimited Width)</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Every distributor can sponsor an unlimited number of people directly — there's no
                width cap, no spillover, and no forced placement.
              </p>
              <span className="text-[11px] font-semibold text-orange-600">No Recruiting Limit</span>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="text-2xl mb-2">📶</div>
              <h3 className="text-sm font-bold text-slate-800 mb-1">Levels (Depth Tiers)</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Each row below the frontline is a "level." Companies typically pay commission on
                a fixed number of levels — for example, the first 5 or 7.
              </p>
              <span className="text-[11px] font-semibold text-slate-500">Controls Payout Reach</span>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-white">
            <h4 className="text-sm font-bold mb-3 text-orange-400">Level Commission Logic</h4>
            <p className="text-xs text-slate-300 mb-3">
              Every payout cycle, the software walks down the tree level by level:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {[
                "Sales volume is recorded for every active distributor across all levels",
                "Each level pays its own fixed or declining commission percentage",
                "Inactive distributors can break the commission chain, depending on plan rules",
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
              How Does the Universal MLM Plan Work?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StepCard n="1" title="Join the Network">
              A new distributor joins under a sponsor and becomes part of their unlimited-width
              frontline row.
            </StepCard>
            <StepCard n="2" title="Sponsor Without Limits">
              Distributors recruit as many direct members as they want — every one sits on the
              same level beneath them.
            </StepCard>
            <StepCard n="3" title="Network Expands Downward">
              As each recruit sponsors their own members, the tree grows level by level, no width
              restriction at any row.
            </StepCard>
            <StepCard n="4" title="Track Active Levels">
              The software monitors how many levels deep each distributor's qualifying volume
              reaches each cycle.
            </StepCard>
            <StepCard n="5" title="Calculate Level Commissions">
              Commission is paid on sales volume across every eligible level, usually at a
              decreasing rate with depth.
            </StepCard>
          </div>
        </section>

        {/* ============ PROS & CONS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Analysis</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Pros & Cons of the Universal Plan</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={17} className="text-orange-500" />
                <span className="text-sm font-bold text-slate-800">Pros of the Universal MLM Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">No Recruiting Cap</b> — distributors can sponsor as many people as they can reach.</li>
                <li><b className="text-slate-800">Simple, Flat Structure</b> — no spillover or seat placement logic to explain.</li>
                <li><b className="text-slate-800">Rewards Strong Recruiters</b> — top performers earn directly from a wide frontline.</li>
                <li><b className="text-slate-800">Predictable Payout Depth</b> — capped levels keep commission costs manageable.</li>
                <li><b className="text-slate-800">Easy to Track</b> — no carry-forward volume or pairing math required.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={17} className="text-slate-400" />
                <span className="text-sm font-bold text-slate-800">Cons of the Universal MLM Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">No Spillover Support</b> — new distributors get no help filling their frontline.</li>
                <li><b className="text-slate-800">Depth Limits Cap Earnings</b> — volume beyond the paid levels earns nothing.</li>
                <li><b className="text-slate-800">Favors Early Recruiters</b> — wide networks take longer to build for newcomers.</li>
                <li><b className="text-slate-800">Requires Active Qualification</b> — many plans require minimum personal volume to stay eligible.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ SCENARIOS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Scenarios</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Different Scenarios in a Universal Plan
            </h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">
              <b className="text-slate-700">Sponsor</b> introduces a new member; in a universal
              plan the <b className="text-slate-700">parent</b> is almost always the sponsor
              themselves, since there's no forced placement.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScenarioCard
              title="Wide Frontline Recruiting"
              diagram={
                <div className="flex flex-col items-center gap-2">
                  <Node label="A" tone="orange" size="sm" />
                  <div className="flex gap-2"><Node label="B" size="sm" /><Node label="C" size="sm" /><Node label="D" size="sm" /><Node label="E" size="sm" /></div>
                </div>
              }
            >
              A distributor sponsors many direct recruits at once — all sitting on the same
              frontline level.
            </ScenarioCard>
            <ScenarioCard
              title="Deep Single Chain"
              diagram={
                <div className="flex items-center gap-3">
                  <Node label="A" tone="orange" size="sm" /><ArrowRight size={12} className="text-slate-300" /><Node label="B" size="sm" /><ArrowRight size={12} className="text-slate-300" /><Node label="C" size="sm" />
                </div>
              }
            >
              One recruit sponsors the next, building depth rather than width — common among
              focused team builders.
            </ScenarioCard>
            <ScenarioCard title="Volume Beyond Paid Levels" diagram={<Layers size={28} className="text-orange-400" />}>
              Sales generated past the company's commissionable depth don't earn the upline
              anything directly.
            </ScenarioCard>
            <ScenarioCard title="Mixed Wide & Deep Growth" diagram={<Network size={28} className="text-orange-400" />}>
              Some legs grow wide with many direct recruits, others grow deep — both are valid in
              a universal structure.
            </ScenarioCard>
            <ScenarioCard title="Inactive Distributor Break" diagram={<UserPlus size={28} className="text-orange-400" />}>
              If a distributor falls inactive, some plans skip their level or pause commission
              flow beneath them.
            </ScenarioCard>
            <ScenarioCard title="New Recruit, No Spillover" diagram={<ListTree size={28} className="text-orange-400" />}>
              A brand-new distributor starts with an empty frontline — there's no automatic
              placement to help them grow.
            </ScenarioCard>
          </div>
        </section>

        {/* ============ LEVEL COMMISSION TYPES ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Commission Models</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Ways to Structure Level Payouts</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard icon={BarChart3} title="Fixed Rate per Level">
              Every level pays the same flat commission percentage, regardless of depth.
            </FeatureCard>
            <FeatureCard icon={Layers} title="Declining Rate by Depth">
              Commission percentage decreases the deeper a level sits, rewarding closer
              relationships more.
            </FeatureCard>
            <FeatureCard icon={Target} title="Rank-Based Level Access">
              Higher distributor ranks unlock commission on additional, deeper levels.
            </FeatureCard>
            <FeatureCard icon={Users} title="Active-Only Qualification">
              Only distributors meeting a minimum personal volume earn commission that cycle.
            </FeatureCard>
            <FeatureCard icon={MapPin} title="Compression">
              Inactive distributors are skipped so commission flows to the next active member up
              the line.
            </FeatureCard>
          </div>
        </section>

        {/* ============ EARNINGS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Earnings</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Universal Level Commission — 5-Level Example
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Level 1 · Direct Frontline</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  5 direct recruits generate 100 PV each = 500 PV. Commission at 10% ={" "}
                  <b className="text-slate-800">$50</b>.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Level 2</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Their recruits generate 800 PV total. Commission at 7% ={" "}
                  <b className="text-slate-800">$56</b>.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Level 3</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Network generates 1,200 PV total. Commission at 5% ={" "}
                  <b className="text-slate-800">$60</b>.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Levels 4 & 5</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Combined 1,600 PV at a declining 3% and 2% rate adds{" "}
                  <b className="text-slate-800">$44</b> more.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-xl px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Total Commission per Cycle (Levels 1–5)
              </span>
              <span className="text-2xl font-extrabold text-orange-600">$210</span>
            </div>
          </div>
        </section>

        {/* ============ CAPPING ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Capping</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Universal Plan Capping</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FeatureCard icon={Lock} title="Capping by Level Depth">
              Commission is only paid up to a fixed number of levels — volume generated beyond
              that depth isn't commissionable.
            </FeatureCard>
            <FeatureCard icon={Coins} title="Capping by Commission Ceiling">
              A maximum payout — daily, weekly, or monthly — can be set per distributor regardless
              of total network volume.
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
            <FeatureCard icon={Layers} title="Level Commission">Core payout calculated on sales volume generated at each qualifying level.</FeatureCard>
            <FeatureCard icon={Zap} title="Fast Start Bonus">Paid when a new distributor hits a recruiting or sales target early on.</FeatureCard>
            <FeatureCard icon={Award} title="Rank Advancement">Cash or recognition rewards unlocked as distributors climb company ranks.</FeatureCard>
            <FeatureCard icon={TrendingUp} title="Generation Bonus">Extra income for leaders whose downline includes other qualified leaders.</FeatureCard>
            <FeatureCard icon={GitBranch} title="Leadership Pool">A shared bonus pool split among top performers each cycle.</FeatureCard>
            <FeatureCard icon={Coins} title="Retail Profit">Direct margin earned from personal retail sales, separate from team commissions.</FeatureCard>
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
              ["Depth", "Fixed — capped number of levels"],
              ["Commission Basis", "Sales volume generated per qualifying level"],
              ["Spillover", "No — no forced placement"],
              ["Re-entry", "Not applicable"],
              ["Capping", "Configurable — by level depth or commission ceiling"],
              ["Best For", "Strong recruiters who want a simple, flat structure"],
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