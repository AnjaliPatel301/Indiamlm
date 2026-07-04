import React from "react";
import {
  Blocks,
  Link2,
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
  Wallet,
  ShieldAlert,
  ShieldCheck,
  Network,
  Eye,
  Code2,
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

/* ---------- hero diagram: a smart contract automatically routing commissions on-chain, no central admin ---------- */
function HeroDecentralizedDiagram() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-orange-600">
          On-Chain Flow Preview
        </span>
        <span className="text-[11px] text-slate-400">Smart contract logic</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 bg-slate-900 text-white rounded-lg px-3 py-2">
          <Code2 size={14} className="text-orange-400" />
          <span className="text-[10px] font-semibold">Smart Contract</span>
        </div>
        <div className="w-px h-3 bg-slate-300" />
        <div className="flex gap-3">
          <Node label="A" tone="orange" size="sm" />
          <Node label="B" tone="light" size="sm" />
          <Node label="C" tone="light" size="sm" />
        </div>
        <span className="text-[9px] font-semibold text-orange-600 mt-1">Wallets receive funds automatically</span>
        <div className="flex items-center gap-2 mt-2">
          <Eye size={14} className="text-orange-500" />
          <span className="text-[10px] text-slate-500">Every transaction publicly verifiable on-chain</span>
        </div>
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed mt-5 pt-4 border-t border-slate-100 text-center">
        Instead of a company database deciding payouts, a smart contract executes the
        compensation rules automatically — funds move wallet-to-wallet with no central admin
        able to alter balances.
      </p>
    </div>
  );
}

export default function DecentralizedPlanPage() {
  return (
    <div className="w-full bg-slate-50 text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* ============ HERO ============ */}
        <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
          <Blocks size={15} className="text-orange-500" />
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            #1 Decentralized MLM Plan Software
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-slate-900 mb-5">
              Decentralized Plan <span className="text-orange-500">Software</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">
              A decentralized plan runs compensation logic on a blockchain smart contract instead
              of a company-controlled database. Joining fees, splits, and payouts execute
              automatically and transparently, wallet-to-wallet, with no central admin able to
              alter balances.
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

          <HeroDecentralizedDiagram />
        </div>

        {/* ============ IMPORTANT NOTICE ============ */}
        <section className="mb-16">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-7 max-w-3xl mx-auto flex gap-4">
            <ShieldAlert size={22} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-amber-800 mb-1.5">A Note on Decentralized MLM Models</h3>
              <p className="text-xs leading-relaxed text-amber-700">
                Moving payout logic on-chain makes the math transparent, but it doesn't remove
                legal classification — a structure that pays existing members from new members'
                joining fees is still a pyramid scheme, smart contract or not. Audited code,
                public ledgers, and immutability are technical properties, not legal exemptions.
                Treat decentralized compensation plans with the same regulatory scrutiny as any
                other MLM, and get the smart contract independently audited before launch.
              </p>
            </div>
          </div>
        </section>

        {/* ============ WHAT IS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Definition</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What is a <span className="text-orange-500">Decentralized Plan</span>?
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-3xl mx-auto mb-8 text-center">
            <p className="text-sm leading-relaxed text-slate-600">
              A decentralized plan encodes the compensation structure — splits, levels, payouts —
              directly into a blockchain smart contract. When a member joins or makes a
              qualifying transaction, the contract automatically routes funds to the relevant
              wallets per its hard-coded rules. There's no company database deciding who gets
              paid; every transaction is recorded on a public, immutable ledger that anyone can
              independently verify.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard icon={Code2} title="Smart Contract Logic">
              Compensation rules are written directly into self-executing blockchain code.
            </FeatureCard>
            <FeatureCard icon={Eye} title="Public Transparency">
              Every transaction and payout is recorded on a public ledger, visible to anyone.
            </FeatureCard>
            <FeatureCard icon={ShieldCheck} title="No Central Admin">
              Once deployed, no single party can alter balances or rewrite the payout rules.
            </FeatureCard>
            <FeatureCard icon={Wallet} title="Wallet-to-Wallet Payouts">
              Funds move directly between member wallets without passing through a company
              account.
            </FeatureCard>
          </div>
        </section>

        {/* ============ STRUCTURE ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Structure</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Smart Contract Rules & Verification, Explained</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="bg-orange-50 rounded-xl border border-orange-200 p-6">
              <div className="text-2xl mb-2">📜</div>
              <h3 className="text-sm font-bold text-orange-700 mb-1">Hard-Coded Payout Rules</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Commission splits, levels, and thresholds are fixed in the contract at
                deployment, before any member joins.
              </p>
              <span className="text-[11px] font-semibold text-orange-600">Controls Payout Logic</span>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="text-2xl mb-2">🔍</div>
              <h3 className="text-sm font-bold text-slate-800 mb-1">On-Chain Verification</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Anyone can inspect the contract code and trace every transaction on the public
                blockchain explorer.
              </p>
              <span className="text-[11px] font-semibold text-slate-500">Controls Trust & Auditability</span>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-white">
            <h4 className="text-sm font-bold mb-3 text-orange-400">On-Chain Payout Logic</h4>
            <p className="text-xs text-slate-300 mb-3">
              Every time a qualifying transaction occurs, the smart contract executes:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {[
                "Incoming funds are checked against the contract's hard-coded split rules",
                "The corresponding percentages are routed automatically to the relevant upline wallets",
                "The full transaction is permanently recorded on the public blockchain ledger",
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
              How Does the Decentralized Plan Work?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StepCard n="1" title="Connect a Wallet">
              A new member connects a crypto wallet instead of creating a traditional account.
            </StepCard>
            <StepCard n="2" title="Join via Transaction">
              Joining the network means sending a qualifying on-chain transaction to the smart
              contract address.
            </StepCard>
            <StepCard n="3" title="Contract Executes Rules">
              The smart contract automatically splits and routes the transaction to upline
              wallets per its coded logic.
            </StepCard>
            <StepCard n="4" title="Funds Arrive Instantly">
              Recipients receive their share directly in their wallet, without waiting on a
              company payout cycle.
            </StepCard>
            <StepCard n="5" title="Verify On-Chain">
              Any member can independently verify every transaction using a public blockchain
              explorer.
            </StepCard>
          </div>
        </section>

        {/* ============ PROS & CONS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Analysis</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Pros & Cons of the Decentralized Plan</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={17} className="text-orange-500" />
                <span className="text-sm font-bold text-slate-800">Pros of the Decentralized Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Full Transparency</b> — every payout rule and transaction is publicly verifiable, leaving no room for hidden manipulation.</li>
                <li><b className="text-slate-800">No Central Point of Failure</b> — funds can't be frozen or redirected by a single company decision.</li>
                <li><b className="text-slate-800">Instant Settlement</b> — payouts execute immediately as transactions confirm, with no manual processing delay.</li>
                <li><b className="text-slate-800">Tamper-Resistant Rules</b> — once deployed and audited, the payout logic can't be quietly changed.</li>
                <li><b className="text-slate-800">Appeals to Crypto-Native Audiences</b> — resonates with members already comfortable with wallets and blockchain tools.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={17} className="text-slate-400" />
                <span className="text-sm font-bold text-slate-800">Cons of the Decentralized Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Transparency Doesn't Equal Legality</b> — a pyramid structure on-chain is still a pyramid structure under most laws.</li>
                <li><b className="text-slate-800">Smart Contract Risk</b> — bugs or exploits in unaudited code can permanently lock or drain funds.</li>
                <li><b className="text-slate-800">Irreversible Mistakes</b> — incorrect transactions generally can't be refunded or reversed once confirmed.</li>
                <li><b className="text-slate-800">Volatility Exposure</b> — payouts in cryptocurrency can fluctuate sharply in value after being received.</li>
                <li><b className="text-slate-800">Regulatory Uncertainty</b> — crypto and securities regulation around token-based MLM models varies widely and changes often.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ SCENARIOS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Scenarios</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Different Scenarios in a Decentralized Plan
            </h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">
              <b className="text-slate-700">On-Chain Settlement</b> — the moment a transaction is
              confirmed and recorded permanently on the blockchain.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScenarioCard
              title="Instant Wallet Payout"
              diagram={
                <div className="flex items-center gap-2">
                  <Node label="A" tone="orange" size="sm" />
                  <ArrowRight size={14} className="text-orange-400" />
                  <Node label="B" tone="light" size="sm" />
                </div>
              }
            >
              A qualifying transaction settles and the upline wallet receives funds within
              seconds of confirmation.
            </ScenarioCard>
            <ScenarioCard
              title="Network Congestion Delay"
              diagram={
                <div className="flex items-center gap-2">
                  <Node label="A" tone="orange" size="sm" />
                  <div className="w-7 h-7 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center">
                    <Clock3 size={12} className="text-slate-400" />
                  </div>
                </div>
              }
            >
              High network traffic delays confirmation, leaving a payout pending until the
              blockchain processes it.
            </ScenarioCard>
            <ScenarioCard title="Public Audit Trail" diagram={<Eye size={28} className="text-orange-400" />}>
              A member independently verifies their entire payout history using a public
              blockchain explorer.
            </ScenarioCard>
            <ScenarioCard title="Smart Contract Upgrade" diagram={<Code2 size={28} className="text-orange-400" />}>
              The team deploys a new, audited contract version, requiring members to migrate to
              the updated address.
            </ScenarioCard>
            <ScenarioCard title="Token Value Fluctuation" diagram={<BarChart3 size={28} className="text-orange-400" />}>
              A member's payout is correct in token terms, but its real-world value shifts with
              market price movement.
            </ScenarioCard>
            <ScenarioCard title="Regulatory Review" diagram={<ShieldAlert size={28} className="text-orange-400" />}>
              Authorities examine the underlying compensation structure regardless of it running
              on a blockchain.
            </ScenarioCard>
          </div>
        </section>

        {/* ============ ARCHITECTURE TYPES ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Architecture</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How Decentralized Plans Get Built</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard icon={Network} title="On-Chain Compensation Logic">
              The full split and level logic runs as smart contract code, executed automatically
              per transaction.
            </FeatureCard>
            <FeatureCard icon={Blocks} title="Hybrid On/Off-Chain Model">
              Payouts settle on-chain while membership data and UI are managed through a
              traditional backend.
            </FeatureCard>
            <FeatureCard icon={ShieldCheck} title="Independently Audited Contracts">
              Code is reviewed by a third-party security firm before deployment to catch
              vulnerabilities.
            </FeatureCard>
            <FeatureCard icon={Link2} title="Multi-Chain Support">
              The contract logic is deployed across more than one blockchain network for member
              choice.
            </FeatureCard>
            <FeatureCard icon={Wallet} title="Non-Custodial Wallets">
              Members retain full control of their own funds rather than depositing into a
              company-held wallet.
            </FeatureCard>
          </div>
        </section>

        {/* ============ EARNINGS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Earnings</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              On-Chain Payout — Example
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 1 · Transaction Sent</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A new member sends 0.1 ETH to the smart contract address to join the network.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 2 · Contract Splits Funds</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The contract's hard-coded rule routes 60% directly to the sponsor's wallet and
                  40% to the next two upline levels.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 3 · Wallets Credited</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sponsor A receives 0.06 ETH directly to their wallet within the same block
                  confirmation.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 4 · Publicly Verifiable</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Anyone can confirm this exact transaction and split using a public blockchain
                  explorer.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-xl px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Direct Sponsor Payout to A
              </span>
              <span className="text-2xl font-extrabold text-orange-600">0.06 ETH</span>
            </div>
          </div>
        </section>

        {/* ============ CAPPING ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Capping</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Decentralized Plan Capping</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FeatureCard icon={Lock} title="Capping by Contract Rule">
              Maximum payout limits can be written directly into the smart contract's logic,
              enforced automatically.
            </FeatureCard>
            <FeatureCard icon={Coins} title="Capping by Wallet Activity">
              Per-wallet earning limits can be set within a fixed time window to prevent abuse.
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
            <FeatureCard icon={Wallet} title="Direct Wallet Commission">Core payout routed instantly to a wallet on every qualifying transaction.</FeatureCard>
            <FeatureCard icon={ListTree} title="Level Override">A smaller percentage automatically routed to higher upline levels per the contract.</FeatureCard>
            <FeatureCard icon={Zap} title="Early Adopter Bonus">Extra tokens or share allocated to members who join during an early contract phase.</FeatureCard>
            <FeatureCard icon={Award} title="Milestone NFT/Token Reward">Non-fungible or token-based rewards unlocked at defined network milestones.</FeatureCard>
            <FeatureCard icon={Users} title="Referral Pool Share">A pooled share of network-wide transaction fees split among active referrers.</FeatureCard>
            <FeatureCard icon={BarChart3} title="Staking Yield">Additional yield for members who lock tokens in a staking contract tied to the plan.</FeatureCard>
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
              ["Core Driver", "Smart contract-executed compensation logic"],
              ["Payout Trigger", "Confirmed on-chain transactions matching contract rules"],
              ["Commission Basis", "Hard-coded split percentages routed wallet-to-wallet"],
              ["Transparency", "Full — every transaction publicly verifiable on-chain"],
              ["Custody", "Non-custodial — members control their own wallets"],
              ["Capping", "Configurable — by contract rule or wallet activity limits"],
              ["Best For", "Crypto-native audiences, with mandatory legal & security audit"],
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