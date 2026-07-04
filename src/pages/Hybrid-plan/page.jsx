import React from "react";
import {
  Combine,
  Layers,
  GitMerge,
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
  Scale,
  Puzzle,
  Network,
} from "lucide-react";

/* ---------- shared primitives ---------- */
function Node({ label, tone = "slate", size = "md" }) {
  const tones = {
    orange: "bg-orange-500 text-white border-orange-600",
    slate: "bg-white text-slate-700 border-slate-300",
    light: "bg-orange-50 text-orange-700 border-orange-200",
    teal: "bg-teal-500 text-white border-teal-600",
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

/* ---------- hero hybrid tree: binary top, unilevel fan below ---------- */
function HeroHybridTree() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-orange-600">
          Hybrid Tree Preview
        </span>
        <span className="text-[11px] text-slate-400">binary + unilevel</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Node label="YOU" tone="orange" />
        <div className="w-px h-3 bg-slate-300" />
        <div className="flex gap-12">
          <Node label="L" tone="light" size="sm" />
          <Node label="R" tone="light" size="sm" />
        </div>
        <span className="text-[9px] font-semibold text-orange-600 mt-0.5">Binary Layer · 2 legs</span>
        <div className="w-px h-3 bg-slate-300 mt-1" />
        <div className="flex gap-2 flex-wrap justify-center max-w-[260px]">
          {["A", "B", "C", "D", "E", "F"].map((l) => (
            <Node key={l} label={l} tone="teal" size="sm" />
          ))}
        </div>
        <span className="text-[9px] font-semibold text-teal-600 mt-0.5">Unilevel Layer · unlimited width</span>
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed mt-5 pt-4 border-t border-slate-100 text-center">
        A hybrid plan stacks two compensation structures — for example, a binary frontline that
        opens into a wide unilevel network underneath.
      </p>
    </div>
  );
}

export default function HybridMlmPlanPage() {
  return (
    <div className="w-full bg-slate-50 text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* ============ HERO ============ */}
        <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
          <Combine size={15} className="text-orange-500" />
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            #1 MLM Hybrid Plan Software
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-slate-900 mb-5">
              Hybrid MLM Plan <span className="text-orange-500">Software</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">
              A hybrid plan combines two or more MLM compensation structures — like binary,
              matrix, unilevel, or generation — into one system, letting companies pay out
              multiple income streams from a single network.
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

          <HeroHybridTree />
        </div>

        {/* ============ WHAT IS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Definition</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What is a <span className="text-orange-500">Hybrid MLM Plan</span>?
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-3xl mx-auto mb-8 text-center">
            <p className="text-sm leading-relaxed text-slate-600">
              A hybrid plan layers two or more classic MLM structures on top of each other —
              commonly a binary frontline feeding into an unlimited unilevel network, or a matrix
              combined with generation-based leadership bonuses. Each layer runs its own
              commission logic, giving distributors multiple ways to earn from the same team.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard icon={GitMerge} title="Layered Structures">
              Two or more plan types — binary, matrix, unilevel, generation — run side by side.
            </FeatureCard>
            <FeatureCard icon={Puzzle} title="Configurable Mix">
              Companies choose which structures to combine and how each layer pays commission.
            </FeatureCard>
            <FeatureCard icon={Network} title="Multiple Income Streams">
              Distributors can earn from pairing, level depth, and leadership bonuses
              simultaneously.
            </FeatureCard>
            <FeatureCard icon={Scale} title="Balanced Incentives">
              Combines the strengths of each structure while smoothing out their individual
              weaknesses.
            </FeatureCard>
          </div>
        </section>

        {/* ============ STRUCTURE ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Structure</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How the Layers Stack Together</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="bg-orange-50 rounded-xl border border-orange-200 p-6">
              <div className="text-2xl mb-2">🧩</div>
              <h3 className="text-sm font-bold text-orange-700 mb-1">Top Layer (Entry Structure)</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Usually a binary or matrix layer near the top — capped width keeps early
                recruitment structured and spillover-friendly for new members.
              </p>
              <span className="text-[11px] font-semibold text-orange-600">Controls Early Placement</span>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="text-2xl mb-2">🌐</div>
              <h3 className="text-sm font-bold text-slate-800 mb-1">Bottom Layer (Growth Structure)</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Often a unilevel or generation layer beneath the top structure — unlimited width
                rewards distributors for wide, active recruiting deeper in the network.
              </p>
              <span className="text-[11px] font-semibold text-slate-500">Controls Deep Growth</span>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-white">
            <h4 className="text-sm font-bold mb-3 text-orange-400">Cross-Layer Commission Logic</h4>
            <p className="text-xs text-slate-300 mb-3">
              Every payout cycle, the software calculates each layer independently, then combines
              results:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {[
                "Top-layer commission is calculated using that structure's own rules (e.g. weaker-leg pairing)",
                "Bottom-layer commission is calculated separately using level or generation logic",
                "Both payouts are summed into the distributor's total commission for the cycle",
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
              How Does the Hybrid MLM Plan Work?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StepCard n="1" title="Join the Top Layer">
              A new distributor is placed into the company's primary structure — often a binary
              or matrix position.
            </StepCard>
            <StepCard n="2" title="Fill the Top Layer's Limits">
              The distributor and spillover fill the top layer's width and depth rules, just
              like a standalone plan.
            </StepCard>
            <StepCard n="3" title="Bottom Layer Opens Beneath">
              Once positioned, every distributor also belongs to the secondary unilevel or
              generation structure running underneath.
            </StepCard>
            <StepCard n="4" title="Both Layers Track Volume">
              Sales volume is recorded against both structures at once — pairing volume for the
              top, level volume for the bottom.
            </StepCard>
            <StepCard n="5" title="Combined Commission Payout">
              The software calculates commission for each layer separately, then totals them into
              one final payout.
            </StepCard>
          </div>
        </section>

        {/* ============ PROS & CONS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Analysis</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Pros & Cons of the Hybrid Plan</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={17} className="text-orange-500" />
                <span className="text-sm font-bold text-slate-800">Pros of the Hybrid MLM Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Multiple Income Streams</b> — distributors earn from more than one commission engine at once.</li>
                <li><b className="text-slate-800">Balances Weaknesses</b> — a depth-capped layer offsets an unlimited-width layer's payout cost, and vice versa.</li>
                <li><b className="text-slate-800">Flexible for Companies</b> — structures can be tuned independently as the business evolves.</li>
                <li><b className="text-slate-800">Appeals to More Distributors</b> — recruiters, team-builders, and leaders all find a layer that rewards them.</li>
                <li><b className="text-slate-800">Spillover-Friendly Entry</b> — new members still benefit from spillover at the top layer.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={17} className="text-slate-400" />
                <span className="text-sm font-bold text-slate-800">Cons of the Hybrid MLM Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Harder to Explain</b> — two sets of rules make onboarding new distributors more complex.</li>
                <li><b className="text-slate-800">More Complex Software</b> — accurate tracking across layers requires a more capable MLM system.</li>
                <li><b className="text-slate-800">Higher Payout Risk</b> — combined commissions need careful capping to stay sustainable.</li>
                <li><b className="text-slate-800">Slower to Audit</b> — reconciling two commission engines takes more time than a single-structure plan.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ SCENARIOS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Scenarios</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Different Scenarios in a Hybrid Plan
            </h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">
              Every distributor belongs to <b className="text-slate-700">both layers</b> at once
              — placement in one doesn't change their position in the other.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScenarioCard
              title="Binary Top, Unilevel Bottom"
              diagram={
                <div className="flex flex-col items-center gap-2">
                  <Node label="A" tone="orange" size="sm" />
                  <div className="flex gap-6"><Node label="L" size="sm" /><Node label="R" size="sm" /></div>
                </div>
              }
            >
              The most common combination — a 2-leg pairing layer on top, opening into an
              unlimited-width network beneath.
            </ScenarioCard>
            <ScenarioCard
              title="Matrix Top, Generation Bottom"
              diagram={
                <div className="flex items-center gap-2">
                  <Node label="A" tone="orange" size="sm" /><ArrowRight size={12} className="text-slate-300" /><Node label="B" tone="teal" size="sm" />
                </div>
              }
            >
              A fixed-width matrix handles entry-level placement, while a generation layer
              rewards leadership deeper down.
            </ScenarioCard>
            <ScenarioCard title="Volume Counted Twice" diagram={<GitMerge size={28} className="text-orange-400" />}>
              The same sale can contribute to both the top layer's pairing volume and the bottom
              layer's level volume.
            </ScenarioCard>
            <ScenarioCard title="One Layer Caps, Other Continues" diagram={<Lock size={28} className="text-orange-400" />}>
              A distributor's matrix completes and pauses, but their unilevel commission keeps
              flowing uninterrupted.
            </ScenarioCard>
            <ScenarioCard title="Independent Rank Tracks" diagram={<Award size={28} className="text-orange-400" />}>
              A distributor can rank up in the leadership layer without affecting their position
              in the entry layer.
            </ScenarioCard>
            <ScenarioCard title="Layer-Specific Spillover" diagram={<Users size={28} className="text-orange-400" />}>
              Spillover only applies to the top layer's forced-width structure — the bottom
              unilevel layer has no spillover.
            </ScenarioCard>
          </div>
        </section>

        {/* ============ COMMON COMBINATIONS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Combinations</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Popular Hybrid Combinations</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard icon={Combine} title="Binary + Unilevel">
              A 2-leg pairing structure on top with an unlimited-width level commission engine
              underneath.
            </FeatureCard>
            <FeatureCard icon={ListTree} title="Matrix + Unilevel">
              A fixed-width, fixed-depth matrix handles placement while level commissions reward
              deeper growth.
            </FeatureCard>
            <FeatureCard icon={Layers} title="Binary + Generation">
              Pairing bonuses near the top combined with generation-based leadership rewards
              further down.
            </FeatureCard>
            <FeatureCard icon={Network} title="Matrix + Generation">
              Forced matrix entry positions feeding into a generation structure that rewards
              developed leaders.
            </FeatureCard>
            <FeatureCard icon={GitMerge} title="Triple-Layer Hybrid">
              Some plans stack three structures at once — binary, matrix, and unilevel — for
              maximum flexibility.
            </FeatureCard>
          </div>
        </section>

        {/* ============ EARNINGS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Earnings</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Hybrid Commission — Binary + Unilevel Example
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Top Layer · Binary Pairing</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Left Leg 300 PV, Right Leg 200 PV. Matched volume = 200 PV. Commission at 10% ={" "}
                  <b className="text-slate-800">$20</b>.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Bottom Layer · Unilevel Level 1</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  5 unlimited-width recruits generate 400 PV total. Commission at 8% ={" "}
                  <b className="text-slate-800">$32</b>.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Bottom Layer · Unilevel Level 2</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Their downline generates 600 PV total. Commission at 5% ={" "}
                  <b className="text-slate-800">$30</b>.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Why It Adds Up</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Each layer is calculated independently, so the same network produces two
                  separate, stacked commission sources.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-xl px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Total Commission per Cycle ($20 + $32 + $30)
              </span>
              <span className="text-2xl font-extrabold text-orange-600">$82</span>
            </div>
          </div>
        </section>

        {/* ============ CAPPING ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Capping</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Hybrid Plan Capping</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FeatureCard icon={Lock} title="Per-Layer Capping">
              Each structure carries its own cap — for example, the binary layer caps by matched
              BV while the unilevel layer caps by level depth.
            </FeatureCard>
            <FeatureCard icon={Coins} title="Combined Commission Ceiling">
              A maximum total payout across both layers — daily, weekly, or monthly — keeps
              overall commission costs predictable.
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
            <FeatureCard icon={Scale} title="Binary Pairing Bonus">Core top-layer payout calculated on the weaker leg's matched volume.</FeatureCard>
            <FeatureCard icon={Layers} title="Unilevel Commission">Core bottom-layer payout calculated on volume across qualifying levels.</FeatureCard>
            <FeatureCard icon={Zap} title="Fast Start Bonus">Paid when a new distributor hits an early sales or recruiting milestone.</FeatureCard>
            <FeatureCard icon={Award} title="Rank Advancement">Cash or recognition rewards unlocked as distributors climb company ranks.</FeatureCard>
            <FeatureCard icon={TrendingUp} title="Matching Bonus">A percentage of a personally sponsored recruit's combined commission.</FeatureCard>
            <FeatureCard icon={BarChart3} title="Leadership Pool">A shared bonus pool split among top performers across both layers.</FeatureCard>
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
              ["Structure", "Two or more plans combined (e.g. binary + unilevel)"],
              ["Frontline Width", "Depends on top layer — fixed or unlimited"],
              ["Depth", "Top layer fixed/unlimited, bottom layer fixed levels"],
              ["Commission Basis", "Calculated separately per layer, then combined"],
              ["Spillover", "Yes, on layers that support it (e.g. binary, matrix)"],
              ["Capping", "Configurable per layer plus a combined ceiling"],
              ["Best For", "Companies wanting multiple, balanced income streams"],
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