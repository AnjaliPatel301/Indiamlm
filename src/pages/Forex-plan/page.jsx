import React from "react";
import {
  CandlestickChart,
  LineChart,
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
  TrendingDown,
  Bot,
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

/* ---------- hero diagram: a deposit feeding a managed trading pool that pays scheduled "profit" plus referral income ---------- */
function HeroForexDiagram() {
  const bars = [14, 9, 20, 12, 26];
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-orange-600">
          Trading Pool Preview
        </span>
        <span className="text-[11px] text-slate-400">Managed account model</span>
      </div>

      <div className="flex items-end justify-center gap-2 h-28 mb-4">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div
              className={`w-7 rounded-t-md ${i === bars.length - 1 ? "bg-orange-500" : "bg-orange-200"}`}
              style={{ height: `${h * 2.6}px` }}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mb-2">
        <Wallet size={14} className="text-orange-500" />
        <span className="text-[10px] text-slate-500">Member deposits funds into a trading account</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <LineChart size={14} className="text-orange-500" />
        <span className="text-[9px] font-semibold text-orange-600">
          Trading results vary — payouts are not guaranteed
        </span>
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed mt-5 pt-4 border-t border-slate-100 text-center">
        Members deposit into a forex or trading-linked account, with profit-share or referral
        income layered on top. Unlike a fixed-return plan, payouts here genuinely depend on
        actual trading performance.
      </p>
    </div>
  );
}

export default function ForexPlanPage() {
  return (
    <div className="w-full bg-slate-50 text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* ============ HERO ============ */}
        <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
          <CandlestickChart size={15} className="text-orange-500" />
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            #1 MLM Forex Plan Software
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-slate-900 mb-5">
              Forex Plan <span className="text-orange-500">Software</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">
              A forex plan ties network commissions to a trading-linked account — members deposit
              funds, trading activity generates profit or loss, and a referral structure on top
              rewards members for growing the network. Genuine trading performance, not a fixed
              promise, drives returns.
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

          <HeroForexDiagram />
        </div>

        {/* ============ IMPORTANT NOTICE ============ */}
        <section className="mb-16">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-7 max-w-3xl mx-auto flex gap-4">
            <ShieldAlert size={22} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-amber-800 mb-1.5">A Note on Forex MLM Models</h3>
              <p className="text-xs leading-relaxed text-amber-700">
                Forex and trading-linked MLM plans sit under close regulatory scrutiny worldwide.
                Pooling client deposits into a shared "trading account" with promised or
                fixed-looking returns is, in many jurisdictions, treated as unlicensed
                investment management or securities activity — and has historically been used to
                disguise Ponzi-style schemes. Any forex MLM software should be built around fully
                transparent, individually-owned trading accounts, real licensed brokers, and
                clear disclosure that trading involves risk of loss, with legal review before
                launch.
              </p>
            </div>
          </div>
        </section>

        {/* ============ WHAT IS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Definition</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What is a <span className="text-orange-500">Forex Plan</span>?
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-3xl mx-auto mb-8 text-center">
            <p className="text-sm leading-relaxed text-slate-600">
              A forex plan links network commissions to a trading-related account or signal
              service. Members typically fund an individual or pooled trading account, and
              returns are based on actual trading outcomes — which can be positive or negative —
              rather than a guaranteed rate. On top of trading results, the plan adds a referral
              or network layer, rewarding members for introducing new traders or investors.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard icon={Wallet} title="Trading Account Deposits">
              Members fund an account tied to live or simulated forex trading activity.
            </FeatureCard>
            <FeatureCard icon={LineChart} title="Performance-Based Returns">
              Payouts reflect actual trading results — gains and losses both possible.
            </FeatureCard>
            <FeatureCard icon={Bot} title="Signal or Copy-Trade Layer">
              Some plans offer trade signals or copy-trading instead of fully managed funds.
            </FeatureCard>
            <FeatureCard icon={Users} title="Referral Network Layer">
              Referral or network commissions reward members for bringing in new traders.
            </FeatureCard>
          </div>
        </section>

        {/* ============ STRUCTURE ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Structure</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Trading Accounts & Profit Share, Explained</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="bg-orange-50 rounded-xl border border-orange-200 p-6">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="text-sm font-bold text-orange-700 mb-1">Trading Account (Individual or Pooled)</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Funds are held in an individually-owned or pooled account linked to a licensed
                broker for actual trade execution.
              </p>
              <span className="text-[11px] font-semibold text-orange-600">Controls Capital at Risk</span>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="text-2xl mb-2">📆</div>
              <h3 className="text-sm font-bold text-slate-800 mb-1">Profit-Share Cycle</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                The fixed period over which trading results are calculated and any profit share
                is distributed to members.
              </p>
              <span className="text-[11px] font-semibold text-slate-500">Controls Payout Timing</span>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-white">
            <h4 className="text-sm font-bold mb-3 text-orange-400">Profit-Share Calculation Logic</h4>
            <p className="text-xs text-slate-300 mb-3">
              At every profit-share cycle, the software checks each linked account:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {[
                "Actual trading results for the period are pulled from the connected broker account",
                "Net profit (if any) is split between the member and the platform per the agreed share",
                "Net losses, where applicable, are reflected transparently rather than smoothed over",
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
              How Does the Forex Plan Work?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StepCard n="1" title="Fund a Trading Account">
              A member opens and funds an individual or pooled account linked to a licensed
              broker.
            </StepCard>
            <StepCard n="2" title="Trading Activity Occurs">
              Trades are executed manually, by signal, or via copy-trading, generating real
              gains or losses.
            </StepCard>
            <StepCard n="3" title="Cycle Results Calculated">
              At the end of each profit-share cycle, net results are calculated from actual
              account performance.
            </StepCard>
            <StepCard n="4" title="Refer & Earn More">
              Members can refer new traders to earn additional referral commissions alongside
              any trading profit share.
            </StepCard>
            <StepCard n="5" title="Withdraw or Reinvest">
              Members can withdraw available funds or reinvest into the trading account for the
              next cycle.
            </StepCard>
          </div>
        </section>

        {/* ============ PROS & CONS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Analysis</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Pros & Cons of the Forex Plan</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={17} className="text-orange-500" />
                <span className="text-sm font-bold text-slate-800">Pros of the Forex Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Genuine Market-Linked Returns</b> — when run transparently, payouts reflect real trading activity rather than fabricated promises.</li>
                <li><b className="text-slate-800">Appeals to Trading Interest</b> — attracts members already interested in financial markets and trading education.</li>
                <li><b className="text-slate-800">Flexible Models</b> — can be built around signals, copy-trading, or fully self-directed accounts.</li>
                <li><b className="text-slate-800">Referral Layer Adds Reach</b> — network commissions can extend beyond pure trading income.</li>
                <li><b className="text-slate-800">Broker Transparency Builds Trust</b> — individually-owned, broker-verified accounts let members see real performance.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={17} className="text-slate-400" />
                <span className="text-sm font-bold text-slate-800">Cons of the Forex Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Very High Regulatory Risk</b> — pooled trading with fixed-looking returns is frequently classified as unlicensed investment activity or securities fraud.</li>
                <li><b className="text-slate-800">Real Risk of Loss</b> — unlike fabricated "guaranteed" plans, genuine trading can and does lose money.</li>
                <li><b className="text-slate-800">Frequently Used for Scams</b> — the forex MLM space has a long history of Ponzi-style operations collapsing and disappearing with funds.</li>
                <li><b className="text-slate-800">Heavy Compliance Burden</b> — broker licensing, disclosures, and securities law vary significantly by country.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ SCENARIOS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Scenarios</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Different Scenarios in a Forex Plan
            </h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">
              <b className="text-slate-700">Profit Share</b> — the portion of genuine trading
              profit distributed to the member after a cycle closes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScenarioCard
              title="Profitable Trading Cycle"
              diagram={
                <div className="flex items-end gap-1.5">
                  {[10, 16, 22, 28].map((h, i) => (
                    <div key={i} className="w-5 bg-orange-400 rounded-t-sm" style={{ height: `${h}px` }} />
                  ))}
                </div>
              }
            >
              A trading cycle closes in profit, and the agreed profit share is credited to the
              member's account.
            </ScenarioCard>
            <ScenarioCard
              title="Losing Trading Cycle"
              diagram={
                <div className="flex items-end gap-1.5">
                  {[28, 22, 16, 10].map((h, i) => (
                    <div key={i} className="w-5 bg-slate-300 rounded-t-sm" style={{ height: `${h}px` }} />
                  ))}
                </div>
              }
            >
              A trading cycle closes at a loss — the member's account balance decreases instead
              of generating a payout.
            </ScenarioCard>
            <ScenarioCard title="Copy-Trading Setup" diagram={<Bot size={28} className="text-orange-400" />}>
              A member's account automatically mirrors trades from a designated signal provider
              or lead trader.
            </ScenarioCard>
            <ScenarioCard title="Referral Income Stack" diagram={<Users2 size={28} className="text-orange-400" />}>
              A member earns referral commissions from introduced traders on top of their own
              account's trading results.
            </ScenarioCard>
            <ScenarioCard title="Withdrawal Request" diagram={<Wallet size={28} className="text-orange-400" />}>
              A member requests to withdraw available trading profit or principal, subject to the
              broker's terms.
            </ScenarioCard>
            <ScenarioCard title="Account Drawdown Limit" diagram={<TrendingDown size={28} className="text-orange-400" />}>
              Trading is automatically paused once losses hit a pre-set drawdown limit, to
              protect remaining capital.
            </ScenarioCard>
          </div>
        </section>

        {/* ============ ACCOUNT TYPES ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Configuration</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How Trading Models Are Structured</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard icon={Wallet} title="Individually-Owned Accounts">
              Each member's funds stay in their own broker-verified account rather than a shared
              pool.
            </FeatureCard>
            <FeatureCard icon={Bot} title="Copy-Trading Connection">
              Member accounts automatically replicate trades placed by a verified lead trader.
            </FeatureCard>
            <FeatureCard icon={CandlestickChart} title="Signal Subscription">
              Members receive trade signals and execute manually rather than handing over fund
              control.
            </FeatureCard>
            <FeatureCard icon={Percent} title="Profit-Share Percentage">
              The agreed split between member and platform on any net trading profit for a
              cycle.
            </FeatureCard>
            <FeatureCard icon={ShieldAlert} title="Risk Disclosure & Drawdown Rules">
              Clear disclosure of risk, plus drawdown limits that pause trading to protect
              capital.
            </FeatureCard>
          </div>
        </section>

        {/* ============ EARNINGS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Earnings</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Profit-Share Payout — Illustrative Example
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 1 · Account Funded</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Member A deposits $1,000 into an individually-owned trading account linked to a
                  licensed broker.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 2 · Cycle Trades</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Over the monthly cycle, the account's trading activity generates a net profit of
                  $80 (a hypothetical, non-guaranteed outcome).
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 3 · Profit Split Applied</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The platform's agreed profit-share is 50/50, so A is credited 50% of the net
                  profit.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 4 · Referral Bonus</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A also earns a 5% referral commission on a newly referred trader's deposit,
                  separate from trading results.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-xl px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Profit Share Earned by A This Cycle (Hypothetical)
              </span>
              <span className="text-2xl font-extrabold text-orange-600">$40</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-3 text-center">
              Example assumes a profitable cycle for illustration only — actual trading results
              vary and losses are possible.
            </p>
          </div>
        </section>

        {/* ============ CAPPING ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Capping</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Forex Plan Capping</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FeatureCard icon={Lock} title="Capping by Drawdown Limit">
              Trading automatically pauses once account losses reach a pre-set drawdown
              percentage.
            </FeatureCard>
            <FeatureCard icon={Coins} title="Capping by Referral Payout Ceiling">
              A maximum referral commission payout — daily, weekly, or monthly — can be set
              regardless of network size.
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
            <FeatureCard icon={CandlestickChart} title="Profit-Share Bonus">A share of verified net trading profit credited at the end of each cycle.</FeatureCard>
            <FeatureCard icon={Users} title="Referral Commission">A reward earned when a referred member funds and activates their own trading account.</FeatureCard>
            <FeatureCard icon={Bot} title="Signal Subscription Bonus">Extra reward for members who subscribe to a premium signal or copy-trade service.</FeatureCard>
            <FeatureCard icon={Award} title="Performance Recognition">Non-cash recognition for accounts maintaining strong long-term performance.</FeatureCard>
            <FeatureCard icon={TrendingUp} title="Volume Milestone Bonus">Cash rewards unlocked as a member's total deposited or traded volume grows.</FeatureCard>
            <FeatureCard icon={BarChart3} title="Leadership Pool">A shared bonus pool split among top referrers and performing accounts company-wide.</FeatureCard>
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
              ["Core Driver", "Trading account performance, plus optional referral layer"],
              ["Payout Trigger", "Net profit at the end of each profit-share cycle"],
              ["Commission Basis", "Agreed profit-share percentage plus referral commissions"],
              ["Account Structure", "Individually-owned accounts strongly recommended over pooled funds"],
              ["Risk Profile", "Genuine market risk — losses are possible, not just gains"],
              ["Capping", "Configurable — by drawdown limit or referral payout ceiling"],
              ["Best For", "Only with licensed brokers, full transparency, and legal/compliance review"],
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