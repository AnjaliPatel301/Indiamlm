import React from "react";
import {
  TrendingUp,
  PiggyBank,
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
  CalendarClock,
  Gauge,
  Percent,
  Wallet,
  ShieldAlert,
  LineChart,
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

/* ---------- hero diagram: a deposit growing on a fixed schedule with periodic ROI payouts ---------- */
function HeroInvestmentDiagram() {
  const bars = [10, 16, 22, 28, 34];
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-orange-600">
          Return Cycle Preview
        </span>
        <span className="text-[11px] text-slate-400">Fixed ROI schedule</span>
      </div>

      <div className="flex items-end justify-center gap-2 h-28 mb-4">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div
              className={`w-7 rounded-t-md ${i === bars.length - 1 ? "bg-orange-500" : "bg-orange-200"}`}
              style={{ height: `${h * 2.4}px` }}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mb-2">
        <Wallet size={14} className="text-orange-500" />
        <span className="text-[10px] text-slate-500">Member deposits a fixed investment amount</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <LineChart size={14} className="text-orange-500" />
        <span className="text-[9px] font-semibold text-orange-600">
          Returns accrue on a set schedule until maturity
        </span>
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed mt-5 pt-4 border-t border-slate-100 text-center">
        Members deposit a fixed amount and receive scheduled returns — daily, weekly, or
        monthly — for a defined term, with optional referral income layered on top.
      </p>
    </div>
  );
}

export default function InvestmentPlanPage() {
  return (
    <div className="w-full bg-slate-50 text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* ============ HERO ============ */}
        <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
          <PiggyBank size={15} className="text-orange-500" />
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            #1 MLM Investment Plan Software
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-slate-900 mb-5">
              Investment Plan <span className="text-orange-500">Software</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">
              An investment plan — also called a fixed-return or ROI plan — pays members a
              scheduled return on a deposited amount over a defined term, often combined with
              referral commissions for bringing in new investors.
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

          <HeroInvestmentDiagram />
        </div>

        {/* ============ WHAT IS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Definition</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What is an <span className="text-orange-500">Investment Plan</span>?
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-3xl mx-auto mb-8 text-center">
            <p className="text-sm leading-relaxed text-slate-600">
              An investment plan centres around a member depositing a fixed sum into a package
              or plan tier, then receiving a pre-defined return — a fixed percentage, paid out
              daily, weekly, or monthly — until the term matures. Many plans layer referral or
              network commissions on top, rewarding members for introducing new investors in
              addition to their own scheduled returns.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard icon={Wallet} title="Fixed Deposit Packages">
              Members choose from pre-defined investment tiers, each with its own deposit amount
              and return rate.
            </FeatureCard>
            <FeatureCard icon={CalendarClock} title="Scheduled Returns">
              Returns accrue and pay out on a fixed cadence — daily, weekly, or monthly — for a
              set term.
            </FeatureCard>
            <FeatureCard icon={LineChart} title="Maturity-Based Term">
              Each plan tier runs for a defined duration, after which the principal and/or returns
              are released.
            </FeatureCard>
            <FeatureCard icon={Users} title="Referral Layer">
              Optional referral or network commissions reward members for bringing in new
              investors.
            </FeatureCard>
          </div>
        </section>

        {/* ============ STRUCTURE ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Structure</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Deposit Tiers & Return Cycles, Explained</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="bg-orange-50 rounded-xl border border-orange-200 p-6">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="text-sm font-bold text-orange-700 mb-1">Deposit Tier (Fixed Package)</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Each tier defines a deposit amount, a fixed return rate, and a maturity term set
                by the company.
              </p>
              <span className="text-[11px] font-semibold text-orange-600">Controls Return Rate</span>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="text-2xl mb-2">📈</div>
              <h3 className="text-sm font-bold text-slate-800 mb-1">Return Cycle</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                The fixed interval at which accrued returns are calculated and credited to the
                member's account.
              </p>
              <span className="text-[11px] font-semibold text-slate-500">Controls Payout Timing</span>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-white">
            <h4 className="text-sm font-bold mb-3 text-orange-400">Return Calculation Logic</h4>
            <p className="text-xs text-slate-300 mb-3">
              At every return cycle, the software checks each active deposit:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {[
                "Active deposits are checked against their tier's fixed return rate",
                "The accrued return for the cycle is calculated and credited to the member's wallet",
                "On reaching maturity, the plan closes out and principal handling follows the tier's rules",
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
              How Does the Investment Plan Work?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StepCard n="1" title="Choose a Deposit Tier">
              A member selects a package tier and deposits the fixed amount required to activate
              it.
            </StepCard>
            <StepCard n="2" title="Plan Activates">
              The deposit is locked in against the tier's fixed return rate and maturity term.
            </StepCard>
            <StepCard n="3" title="Returns Accrue">
              At each scheduled cycle, the fixed return is calculated and credited to the
              member's wallet.
            </StepCard>
            <StepCard n="4" title="Refer & Earn More">
              Members can refer new investors to earn additional referral commissions alongside
              their own returns.
            </StepCard>
            <StepCard n="5" title="Plan Matures">
              At the end of the term, the plan completes and principal/returns are released per
              the tier's rules.
            </StepCard>
          </div>
        </section>

        {/* ============ PROS & CONS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Analysis</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Pros & Cons of the Investment Plan</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={17} className="text-orange-500" />
                <span className="text-sm font-bold text-slate-800">Pros of the Investment Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Predictable Returns</b> — fixed rates and schedules make earnings easy for members to forecast.</li>
                <li><b className="text-slate-800">Simple to Understand</b> — deposit, wait, and collect — no complex genealogy rules to follow.</li>
                <li><b className="text-slate-800">Passive Income Appeal</b> — returns accrue automatically without requiring active selling.</li>
                <li><b className="text-slate-800">Optional Referral Boost</b> — members who do refer others can stack extra commission on top.</li>
                <li><b className="text-slate-800">Tiered Flexibility</b> — multiple deposit tiers let members choose a commitment level that fits them.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={17} className="text-slate-400" />
                <span className="text-sm font-bold text-slate-800">Cons of the Investment Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">High Regulatory Risk</b> — fixed-return models can resemble Ponzi or unregistered securities schemes in many jurisdictions.</li>
                <li><b className="text-slate-800">Depends on New Deposits</b> — without genuine revenue, returns can become reliant on incoming member funds.</li>
                <li><b className="text-slate-800">Liquidity Pressure</b> — paying out fixed returns on schedule requires careful cash-flow management.</li>
                <li><b className="text-slate-800">Reputational Exposure</b> — fixed-ROI language invites comparisons to high-risk investment scams.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ SCENARIOS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Scenarios</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Different Scenarios in an Investment Plan
            </h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">
              <b className="text-slate-700">Maturity</b> — the point at which a deposit's fixed
              term ends and the plan closes out.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScenarioCard
              title="Standard Term Deposit"
              diagram={
                <div className="flex items-end gap-1.5">
                  {[12, 16, 20, 24].map((h, i) => (
                    <div key={i} className="w-5 bg-orange-400 rounded-t-sm" style={{ height: `${h}px` }} />
                  ))}
                </div>
              }
            >
              A member deposits into a fixed-term tier and receives steady scheduled returns
              until maturity.
            </ScenarioCard>
            <ScenarioCard
              title="Early Withdrawal Request"
              diagram={
                <div className="flex items-end gap-1.5">
                  <div className="w-5 bg-orange-400 rounded-t-sm" style={{ height: "12px" }} />
                  <div className="w-5 bg-orange-400 rounded-t-sm" style={{ height: "16px" }} />
                  <div className="w-5 rounded-t-sm border-2 border-dashed border-slate-300" style={{ height: "20px" }} />
                </div>
              }
            >
              A member requests to exit before maturity, often triggering a reduced return or
              early-exit penalty.
            </ScenarioCard>
            <ScenarioCard title="Referral Bonus Stack" diagram={<Users2 size={28} className="text-orange-400" />}>
              A member earns their own scheduled return plus referral commissions from investors
              they introduced.
            </ScenarioCard>
            <ScenarioCard title="Multi-Tier Portfolio" diagram={<LineChart size={28} className="text-orange-400" />}>
              A member holds several active deposits across different tiers, each accruing
              returns independently.
            </ScenarioCard>
            <ScenarioCard title="Auto-Reinvestment" diagram={<Repeat size={28} className="text-orange-400" />}>
              On maturity, returns are automatically rolled into a new deposit instead of being
              withdrawn.
            </ScenarioCard>
            <ScenarioCard title="Paused Payout" diagram={<ShieldAlert size={28} className="text-orange-400" />}>
              Scheduled returns are temporarily paused pending compliance review or account
              verification.
            </ScenarioCard>
          </div>
        </section>

        {/* ============ QUALIFICATION TYPES ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Configuration</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How Returns & Eligibility Are Measured</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard icon={Gauge} title="Fixed Return Rate">
              A set percentage applied to the deposit amount at every return cycle.
            </FeatureCard>
            <FeatureCard icon={CalendarClock} title="Payout Frequency">
              How often returns are credited — daily, weekly, or monthly, depending on the tier.
            </FeatureCard>
            <FeatureCard icon={Target} title="Minimum Deposit Threshold">
              The minimum amount required to activate a given investment tier.
            </FeatureCard>
            <FeatureCard icon={LineChart} title="Maturity Term Length">
              The fixed duration a deposit remains active before it completes its cycle.
            </FeatureCard>
            <FeatureCard icon={Users} title="Referral Qualification">
              Minimum personal deposit or activity required to unlock referral commission
              eligibility.
            </FeatureCard>
          </div>
        </section>

        {/* ============ EARNINGS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Earnings</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Fixed Return Payout — Example
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 1 · Deposit Made</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Member A deposits $1,000 into a 90-day tier offering a 1% daily return rate.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 2 · Daily Accrual</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Each day, the software credits 1% of the $1,000 deposit — $10 per day — to A's
                  wallet.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 3 · Referral Bonus</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A refers a new investor, earning an extra 5% referral commission on that
                  investor's deposit.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 4 · Term Matures</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  After 90 days, A has earned $900 in returns ($10 × 90 days) on top of the
                  original deposit.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-xl px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Total Return Earned by A (90 Days)
              </span>
              <span className="text-2xl font-extrabold text-orange-600">$900</span>
            </div>
          </div>
        </section>

        {/* ============ CAPPING ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Capping</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Investment Plan Capping</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FeatureCard icon={Lock} title="Capping by Total Return Multiple">
              Total returns can be capped at a fixed multiple of the original deposit — e.g. 2×
              or 3× — before the plan closes.
            </FeatureCard>
            <FeatureCard icon={Coins} title="Capping by Payout Ceiling">
              A maximum payout — daily, weekly, or monthly — can be set regardless of total
              active deposits.
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
            <FeatureCard icon={PiggyBank} title="Fixed Return Bonus">Core scheduled payout earned on the active deposit each cycle.</FeatureCard>
            <FeatureCard icon={Users} title="Referral Commission">Extra reward earned when a referred member makes their own deposit.</FeatureCard>
            <FeatureCard icon={Repeat} title="Reinvestment Bonus">Additional reward for rolling matured returns into a new deposit.</FeatureCard>
            <FeatureCard icon={Award} title="Loyalty Tier Bonus">Improved return rates unlocked for members who maintain long-term deposits.</FeatureCard>
            <FeatureCard icon={TrendingUp} title="Volume Milestone Bonus">Cash rewards unlocked as a member's total deposited volume grows.</FeatureCard>
            <FeatureCard icon={BarChart3} title="Leadership Pool">A shared bonus pool split among top referrers company-wide.</FeatureCard>
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
              ["Core Driver", "Fixed deposit earning a scheduled return"],
              ["Payout Trigger", "Each return cycle on an active deposit"],
              ["Commission Basis", "Fixed percentage return plus optional referral commissions"],
              ["Term Structure", "Defined maturity period per deposit tier"],
              ["Referral Layer", "Optional — commissions for introducing new investors"],
              ["Capping", "Configurable — by return multiple or payout ceiling"],
              ["Best For", "Simple, schedule-driven earning models with optional network growth"],
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