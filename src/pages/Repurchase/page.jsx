import React from "react";
import {
  RefreshCw,
  ShoppingCart,
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
  PackageCheck,
  CalendarClock,
  Gauge,
  Percent,
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

/* ---------- hero diagram: a repeat purchase cycle feeding commissions back up the tree ---------- */
function HeroRepurchaseDiagram() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-orange-600">
          Repurchase Cycle Preview
        </span>
        <span className="text-[11px] text-slate-400">Monthly order cycle</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Node label="A" tone="orange" />
        <div className="w-px h-3 bg-slate-300" />
        <div className="flex gap-3">
          <Node label="B" tone="light" size="sm" />
          <Node label="C" tone="light" size="sm" />
        </div>
        <span className="text-[9px] font-semibold text-orange-600 mt-1">B & C place repeat monthly orders</span>
        <div className="flex items-center gap-2 mt-2">
          <RefreshCw size={14} className="text-orange-500" />
          <span className="text-[10px] text-slate-500">Repurchase volume flows back up to A</span>
        </div>
        <div className="flex items-center gap-2 mt-2 bg-orange-50 rounded-full px-3 py-1">
          <Coins size={13} className="text-orange-500" />
          <span className="text-[10px] font-semibold text-orange-600">A earns commission every cycle</span>
        </div>
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed mt-5 pt-4 border-t border-slate-100 text-center">
        Unlike one-time joining fees, a repurchase plan pays out on every recurring product
        order placed by the downline — turning ongoing consumption into ongoing income.
      </p>
    </div>
  );
}

export default function RepurchasePlanPage() {
  return (
    <div className="w-full bg-slate-50 text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* ============ HERO ============ */}
        <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
          <RefreshCw size={15} className="text-orange-500" />
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            #1 MLM Repurchase Plan Software
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-slate-900 mb-5">
              Repurchase Plan <span className="text-orange-500">Software</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">
              A repurchase plan — also called a consumption or recurring-order plan — rewards
              distributors for ongoing product reorders across their network, instead of
              one-time joining fees. The more the network keeps buying, the more everyone keeps
              earning.
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

          <HeroRepurchaseDiagram />
        </div>

        {/* ============ WHAT IS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Definition</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What is a <span className="text-orange-500">Repurchase Plan</span>?
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-3xl mx-auto mb-8 text-center">
            <p className="text-sm leading-relaxed text-slate-600">
              A repurchase plan centres commissions around recurring product orders rather than a
              single joining purchase. Every time a distributor or their downline reorders —
              weekly, monthly, or on a custom cycle — that repurchase volume generates
              commissions up the sponsor chain. This keeps the business model tied to genuine,
              ongoing product consumption instead of one-off recruitment fees.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard icon={RefreshCw} title="Recurring Orders">
              Commissions are driven by repeat product purchases, not just the initial sign-up
              order.
            </FeatureCard>
            <FeatureCard icon={CalendarClock} title="Cycle-Based Payout">
              Earnings are calculated on a fixed schedule — weekly, monthly, or custom repurchase
              cycles.
            </FeatureCard>
            <FeatureCard icon={ShoppingCart} title="Consumption-Driven">
              Income is tied to real, ongoing product usage across the network, not headcount
              alone.
            </FeatureCard>
            <FeatureCard icon={Percent} title="Tiered Commission %">
              Repurchase commission rates often scale with rank or personal volume thresholds.
            </FeatureCard>
          </div>
        </section>

        {/* ============ STRUCTURE ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Structure</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Repurchase Volume & Cycles, Explained</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="bg-orange-50 rounded-xl border border-orange-200 p-6">
              <div className="text-2xl mb-2">🛒</div>
              <h3 className="text-sm font-bold text-orange-700 mb-1">Repurchase Volume (RV)</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Every reorder placed by a distributor or their downline adds to a tracked
                repurchase volume pool.
              </p>
              <span className="text-[11px] font-semibold text-orange-600">Controls Commission Pool</span>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="text-2xl mb-2">📅</div>
              <h3 className="text-sm font-bold text-slate-800 mb-1">Repurchase Cycle</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                A fixed period — often monthly — after which accumulated repurchase volume is
                processed and paid out.
              </p>
              <span className="text-[11px] font-semibold text-slate-500">Controls Payout Timing</span>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-white">
            <h4 className="text-sm font-bold mb-3 text-orange-400">Repurchase Commission Logic</h4>
            <p className="text-xs text-slate-300 mb-3">
              Every time a reorder is placed, the software checks the network's status:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {[
                "The reorder's volume is logged against the buyer and rolled up the sponsor chain",
                "At cycle close, total repurchase volume per upline is calculated against their rate",
                "Qualified members receive a repurchase commission payout for that cycle",
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
              How Does the Repurchase Plan Work?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StepCard n="1" title="Initial Join Order">
              A new distributor places their first order and joins the network at an entry
              package level.
            </StepCard>
            <StepCard n="2" title="Recurring Reorders">
              The distributor — and their downline — place repeat product orders on a regular
              cycle.
            </StepCard>
            <StepCard n="3" title="Volume Rolls Upward">
              Each reorder's repurchase volume is tracked and rolled up through the sponsor
              chain.
            </StepCard>
            <StepCard n="4" title="Cycle Closes">
              At the end of the repurchase cycle, accumulated volume is calculated against each
              member's commission rate.
            </StepCard>
            <StepCard n="5" title="Commissions Paid">
              Qualified members receive their repurchase commission, and the next cycle begins
              immediately.
            </StepCard>
          </div>
        </section>

        {/* ============ PROS & CONS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Analysis</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Pros & Cons of the Repurchase Plan</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={17} className="text-orange-500" />
                <span className="text-sm font-bold text-slate-800">Pros of the Repurchase Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Predictable Recurring Income</b> — earnings are tied to consistent reorder cycles rather than one-time sign-ups.</li>
                <li><b className="text-slate-800">Genuine Product Focus</b> — rewards real consumption, which supports long-term business legitimacy.</li>
                <li><b className="text-slate-800">Customer Retention Incentive</b> — distributors are motivated to keep their downline actively reordering.</li>
                <li><b className="text-slate-800">Lower Recruitment Pressure</b> — income doesn't solely depend on constantly signing up new members.</li>
                <li><b className="text-slate-800">Easy to Combine</b> — repurchase commissions layer cleanly on top of binary, matrix, or unilevel structures.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={17} className="text-slate-400" />
                <span className="text-sm font-bold text-slate-800">Cons of the Repurchase Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Depends on Customer Retention</b> — income drops quickly if downline members stop reordering.</li>
                <li><b className="text-slate-800">Requires Strong Product Appeal</b> — repeat purchases only happen if the product genuinely earns repeat business.</li>
                <li><b className="text-slate-800">Cycle Tracking Complexity</b> — accurately rolling up recurring volume across cycles needs reliable automation.</li>
                <li><b className="text-slate-800">Slower Early Earnings</b> — new distributors must wait for downline reorder cycles to build meaningful income.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ SCENARIOS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Scenarios</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Different Scenarios in a Repurchase Plan
            </h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">
              <b className="text-slate-700">Repurchase Cycle</b> — the recurring period after
              which accumulated reorder volume is calculated and paid out.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScenarioCard
              title="High Retention Network"
              diagram={
                <div className="grid grid-cols-4 gap-1.5">
                  {["1","2","3","4"].map((l)=>(<Node key={l} label={l} tone="orange" size="sm" />))}
                </div>
              }
            >
              Most downline members reorder every cycle without fail, producing steady,
              predictable commission income.
            </ScenarioCard>
            <ScenarioCard
              title="Dropping Reorder Rate"
              diagram={
                <div className="grid grid-cols-4 gap-1.5">
                  <Node label="1" tone="orange" size="sm" /><Node label="2" tone="light" size="sm" />
                  <div className="w-7 h-7 rounded-lg border-2 border-dashed border-slate-300" />
                  <div className="w-7 h-7 rounded-lg border-2 border-dashed border-slate-300" />
                </div>
              }
            >
              A growing share of the downline skips their reorder, shrinking repurchase volume
              for that cycle.
            </ScenarioCard>
            <ScenarioCard title="Auto-Ship Subscription" diagram={<RefreshCw size={28} className="text-orange-400" />}>
              Members enrol in an auto-ship subscription, guaranteeing consistent repurchase
              volume each cycle.
            </ScenarioCard>
            <ScenarioCard title="Tiered Rate by Rank" diagram={<Award size={28} className="text-orange-400" />}>
              Higher-ranked distributors earn a larger repurchase commission percentage on the
              same reorder volume.
            </ScenarioCard>
            <ScenarioCard title="Multi-Level Repurchase Flow" diagram={<ListTree size={28} className="text-orange-400" />}>
              Repurchase volume from a single reorder generates smaller commissions across
              several levels of upline.
            </ScenarioCard>
            <ScenarioCard title="Minimum Volume Lapse" diagram={<XCircle size={28} className="text-orange-400" />}>
              A distributor who misses the minimum repurchase volume for a cycle temporarily
              loses commission eligibility.
            </ScenarioCard>
          </div>
        </section>

        {/* ============ QUALIFICATION TYPES ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Qualification</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How Repurchase Eligibility Is Measured</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard icon={Gauge} title="Personal Repurchase Volume">
              Minimum reorder volume a distributor must place personally to stay commission
              eligible.
            </FeatureCard>
            <FeatureCard icon={Users} title="Group Repurchase Volume">
              Combined reorder volume from the distributor's downline counted toward their
              payout.
            </FeatureCard>
            <FeatureCard icon={CalendarClock} title="Cycle Activity Window">
              Reorders must fall within the active cycle window to count toward that period's
              payout.
            </FeatureCard>
            <FeatureCard icon={PackageCheck} title="Subscription Status">
              Active auto-ship or subscription status can be required for full repurchase
              commission rates.
            </FeatureCard>
            <FeatureCard icon={Target} title="Minimum Order Threshold">
              A minimum per-order value often applies before a reorder counts as qualifying
              volume.
            </FeatureCard>
          </div>
        </section>

        {/* ============ EARNINGS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Earnings</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Repurchase Commission Payout — Example
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 1 · Cycle Opens</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A new monthly repurchase cycle begins, and Distributor A's downline starts
                  placing reorders.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 2 · Reorders Logged</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  10 downline members reorder during the cycle, each generating $50 in repurchase
                  volume — $500 total.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 3 · Cycle Closes</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  At cycle close, A's rank qualifies them for a 12% repurchase commission rate on
                  total group volume.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 4 · Payout Calculated</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  $500 repurchase volume × 12% commission rate ={" "}
                  <b className="text-slate-800">$60</b> paid out for this cycle.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-xl px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Repurchase Commission Earned by A
              </span>
              <span className="text-2xl font-extrabold text-orange-600">$60</span>
            </div>
          </div>
        </section>

        {/* ============ CAPPING ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Capping</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Repurchase Plan Capping</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FeatureCard icon={Lock} title="Capping by Cycle Volume">
              A maximum repurchase volume per cycle can be set, beyond which extra reorders don't
              add commission.
            </FeatureCard>
            <FeatureCard icon={Coins} title="Capping by Commission Ceiling">
              A maximum payout — weekly or monthly — can be set regardless of total repurchase
              volume.
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
            <FeatureCard icon={RefreshCw} title="Repurchase Commission">Core payout earned from recurring reorder volume each cycle.</FeatureCard>
            <FeatureCard icon={PackageCheck} title="Auto-Ship Bonus">Extra reward for members who maintain an active subscription order.</FeatureCard>
            <FeatureCard icon={Zap} title="First Reorder Bonus">Paid when a new member places their very first repeat order.</FeatureCard>
            <FeatureCard icon={Award} title="Retention Milestone Bonus">Cash or recognition rewards unlocked for sustained downline reorder rates.</FeatureCard>
            <FeatureCard icon={Users} title="Sponsor Match Bonus">A share of repurchase commissions earned by personally sponsored members.</FeatureCard>
            <FeatureCard icon={BarChart3} title="Leadership Pool">A shared bonus pool split among top repurchase performers company-wide.</FeatureCard>
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
              ["Core Driver", "Recurring product reorders, not one-time joining fees"],
              ["Payout Trigger", "Repurchase volume accumulated within each cycle"],
              ["Commission Basis", "Percentage of personal & group repurchase volume"],
              ["Cycle Length", "Configurable — weekly, monthly, or custom"],
              ["Subscription Support", "Yes — auto-ship/subscription orders commonly supported"],
              ["Capping", "Configurable — by cycle volume or commission ceiling"],
              ["Best For", "Consumable product businesses built on genuine repeat usage"],
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