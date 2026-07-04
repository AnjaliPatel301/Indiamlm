import React from "react";
import {
  Gift,
  HeartHandshake,
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
  ArrowLeftRight,
  Layers,
  Handshake,
  ShieldAlert,
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

/* ---------- hero diagram: a single direct gift passed from one member to one upline position ---------- */
function HeroDonationDiagram() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-orange-600">
          Direct Gift Preview
        </span>
        <span className="text-[11px] text-slate-400">One-to-one transfer</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Node label="A" tone="orange" />
        <div className="flex items-center gap-2">
          <Gift size={16} className="text-orange-500" />
          <span className="text-[10px] font-semibold text-orange-600">Direct gift sent</span>
        </div>
        <ArrowUpCircle size={16} className="text-orange-400 rotate-180" />
        <Node label="B" tone="light" />
        <span className="text-[9px] text-slate-500 mt-1">B passes a gift upward to their own sponsor</span>
        <div className="w-px h-3 bg-slate-300" />
        <Node label="C" tone="light" size="sm" />
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed mt-5 pt-4 border-t border-slate-100 text-center">
        Members send a direct, one-to-one gift to their immediate upline. Once a member receives
        enough gifts to qualify, they move up a level and begin receiving larger gifts from
        their own downline.
      </p>
    </div>
  );
}

export default function DonationPlanPage() {
  return (
    <div className="w-full bg-slate-50 text-slate-800" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* ============ HERO ============ */}
        <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
          <Gift size={15} className="text-orange-500" />
          <span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
            #1 MLM Donation Plan Software
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-slate-900 mb-5">
              Donation Plan <span className="text-orange-500">Software</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">
              A donation plan — also called a gifting or help plan — is built around direct,
              one-to-one gifts between members rather than product sales. Members send a fixed
              gift to their immediate upline and, once qualified, begin receiving gifts from
              their own downline in turn.
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

          <HeroDonationDiagram />
        </div>

        {/* ============ WHAT IS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Definition</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What is a <span className="text-orange-500">Donation Plan</span>?
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-3xl mx-auto mb-8 text-center">
            <p className="text-sm leading-relaxed text-slate-600">
              A donation plan structures the network around direct gifts passed between members,
              rather than commissions on product sales. A new member sends a fixed donation
              amount directly to their sponsor or a designated upline position. As more members
              join beneath them and send their own gifts, the original member accumulates enough
              to qualify for the next level, at which point they begin receiving larger direct
              gifts from their growing downline.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard icon={Gift} title="Direct One-to-One Gifts">
              Members send a fixed donation amount directly to a specific upline position, not a
              shared pool.
            </FeatureCard>
            <FeatureCard icon={Layers} title="Level-Based Tiers">
              Donation amounts typically increase at each level, with bigger gifts unlocked
              higher up.
            </FeatureCard>
            <FeatureCard icon={ArrowUpCircle} title="Qualification to Advance">
              Receiving a set number of gifts qualifies a member to move up and unlock the next
              tier.
            </FeatureCard>
            <FeatureCard icon={Handshake} title="Peer-to-Peer Model">
              Funds move directly between members rather than through a central commission
              pool.
            </FeatureCard>
          </div>
        </section>

        {/* ============ STRUCTURE ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Structure</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Gift Levels & Qualification, Explained</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="bg-orange-50 rounded-xl border border-orange-200 p-6">
              <div className="text-2xl mb-2">🎁</div>
              <h3 className="text-sm font-bold text-orange-700 mb-1">Gift Level (Fixed Amount)</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Every level has its own fixed donation amount, set by the company, that must be
                sent or received to qualify.
              </p>
              <span className="text-[11px] font-semibold text-orange-600">Controls Gift Size</span>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="text-2xl mb-2">✅</div>
              <h3 className="text-sm font-bold text-slate-800 mb-1">Qualification Count</h3>
              <p className="text-xs leading-relaxed text-slate-600 mb-3">
                Receiving a set number of gifts at the current level unlocks eligibility to
                advance to the next.
              </p>
              <span className="text-[11px] font-semibold text-slate-500">Controls Advancement</span>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 text-white">
            <h4 className="text-sm font-bold mb-3 text-orange-400">Gift Routing Logic</h4>
            <p className="text-xs text-slate-300 mb-3">
              Every time a new gift is sent, the software checks the network's status:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {[
                "A new member's gift is routed directly to their sponsor or assigned upline position",
                "Once a member has received the required number of gifts, they qualify for the next level",
                "Advancing a level unlocks a larger gift amount for all future donations received",
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
              How Does the Donation Plan Work?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <StepCard n="1" title="Join & Send First Gift">
              A new member joins and sends a fixed entry-level donation directly to their
              sponsor.
            </StepCard>
            <StepCard n="2" title="Build a Downline">
              The member recruits others, who in turn send their own entry-level gifts to the
              network.
            </StepCard>
            <StepCard n="3" title="Receive Qualifying Gifts">
              As downline members send gifts upward, the original member accumulates toward
              their qualification count.
            </StepCard>
            <StepCard n="4" title="Advance a Level">
              Once enough gifts are received, the member advances and unlocks a larger gift
              amount going forward.
            </StepCard>
            <StepCard n="5" title="Repeat at Higher Tiers">
              The member keeps receiving larger direct gifts as their downline grows and sends
              donations at the new level.
            </StepCard>
          </div>
        </section>

        {/* ============ PROS & CONS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Analysis</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Pros & Cons of the Donation Plan</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={17} className="text-orange-500" />
                <span className="text-sm font-bold text-slate-800">Pros of the Donation Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">Very Simple Mechanic</b> — send a gift, receive gifts, advance — easy for any member to grasp.</li>
                <li><b className="text-slate-800">Direct, Transparent Transfers</b> — members can see exactly who sent or received each gift.</li>
                <li><b className="text-slate-800">Low Entry Barrier</b> — entry-level gift amounts are usually small and accessible.</li>
                <li><b className="text-slate-800">Fast Early Movement</b> — an active network can let early members qualify and advance quickly.</li>
                <li><b className="text-slate-800">Strong Community Pull</b> — the help-each-other framing motivates members to support one another.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={17} className="text-slate-400" />
                <span className="text-sm font-bold text-slate-800">Cons of the Donation Plan</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed text-slate-600">
                <li><b className="text-slate-800">No Underlying Product</b> — pure gift transfers without a product or service are commonly classified as illegal pyramid schemes.</li>
                <li><b className="text-slate-800">Heavily Restricted or Banned</b> — many countries explicitly prohibit donation/gifting structures of this kind.</li>
                <li><b className="text-slate-800">Depends Entirely on New Joins</b> — without constant recruitment, gifts to upper levels stop flowing.</li>
                <li><b className="text-slate-800">High Financial Risk for Late Joiners</b> — members who join later often struggle to recoup their initial gift.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ SCENARIOS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Scenarios</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Different Scenarios in a Donation Plan
            </h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2">
              <b className="text-slate-700">Qualification</b> — the moment a member has received
              enough gifts at their current level to advance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScenarioCard
              title="Fast Network Growth"
              diagram={
                <div className="grid grid-cols-3 gap-1.5">
                  {["1","2","3","4","5","6"].map((l)=>(<Node key={l} label={l} tone="orange" size="sm" />))}
                </div>
              }
            >
              An actively recruiting network sends gifts quickly, letting early members qualify
              and advance within days.
            </ScenarioCard>
            <ScenarioCard
              title="Stalled Network"
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
              Recruiting slows and members are left waiting indefinitely to receive their
              qualifying gifts.
            </ScenarioCard>
            <ScenarioCard title="Level Advancement" diagram={<ArrowUpCircle size={28} className="text-orange-400" />}>
              A member receives their final qualifying gift and advances to a tier with larger
              gift amounts.
            </ScenarioCard>
            <ScenarioCard title="Reciprocal Gifting" diagram={<ArrowLeftRight size={28} className="text-orange-400" />}>
              Some plans require a member to send a gift to a peer before they're eligible to
              receive one in return.
            </ScenarioCard>
            <ScenarioCard title="Multi-Tier Participation" diagram={<Layers size={28} className="text-orange-400" />}>
              A member holds positions at more than one gift level simultaneously, each earning
              independently.
            </ScenarioCard>
            <ScenarioCard title="Regulatory Shutdown Risk" diagram={<ShieldAlert size={28} className="text-orange-400" />}>
              Authorities in many regions can freeze or shut down gifting structures lacking a
              genuine product or service.
            </ScenarioCard>
          </div>
        </section>

        {/* ============ GIFT ROUTING TYPES ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Routing</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How Gifts Get Routed</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard icon={MapPin} title="Direct Sponsor Routing">
              Gifts are sent straight to a member's immediate sponsor, with no pooling involved.
            </FeatureCard>
            <FeatureCard icon={Users} title="Assigned Upline Routing">
              The system assigns each new member's gift to a specific upline position based on
              placement rules.
            </FeatureCard>
            <FeatureCard icon={Target} title="Level-Locked Routing">
              Gifts can only be sent to and received from members within the same fixed level.
            </FeatureCard>
            <FeatureCard icon={GitBranch} title="Rotating Recipient Routing">
              Gifts rotate among a fixed pool of recipients in a set order until everyone has
              received one.
            </FeatureCard>
            <FeatureCard icon={Handshake} title="Manual Peer Selection">
              Members choose a specific peer to send their gift to, rather than relying on
              automated routing.
            </FeatureCard>
          </div>
        </section>

        {/* ============ EARNINGS ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Earnings</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Gift Receipt Payout — Example
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 1 · Joins & Sends Gift</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Member A joins at Level 1 and sends a $20 gift directly to their sponsor to
                  activate their position.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 2 · Downline Sends Gifts</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  4 members A recruits each send their own $20 gift directly to A as required by
                  the qualification count.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 3 · Level Advances</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Having received 4 qualifying gifts, A advances to Level 2, where the gift amount
                  increases to $50.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Step 4 · Larger Gifts Received</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A's downline now sends $50 gifts at Level 2, increasing the size of each future
                  payout received.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-xl px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Total Gifts Received by A at Level 1
              </span>
              <span className="text-2xl font-extrabold text-orange-600">$80</span>
            </div>
          </div>
        </section>

        {/* ============ CAPPING ============ */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <Eyebrow>Capping</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Donation Plan Capping</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FeatureCard icon={Lock} title="Capping by Gifts per Level">
              A member can only receive a fixed number of gifts at each level before needing to
              advance.
            </FeatureCard>
            <FeatureCard icon={Coins} title="Capping by Receipt Ceiling">
              A maximum total amount receivable — daily, weekly, or monthly — can be set
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
            <FeatureCard icon={Gift} title="Direct Gift Receipt">Core payout earned every time a qualifying gift is received from a downline member.</FeatureCard>
            <FeatureCard icon={ArrowUpCircle} title="Level Advancement Bonus">Extra reward triggered each time a member advances to a higher gift level.</FeatureCard>
            <FeatureCard icon={Zap} title="Fast Start Bonus">Paid when a new member helps their sponsor qualify quickly after joining.</FeatureCard>
            <FeatureCard icon={Award} title="Milestone Recognition">Non-cash recognition rewards unlocked as members reach higher gift tiers.</FeatureCard>
            <FeatureCard icon={Users} title="Sponsor Match Bonus">A small additional gift triggered when a personally sponsored member advances.</FeatureCard>
            <FeatureCard icon={BarChart3} title="Community Pool">A shared bonus pool split among the most active participants company-wide.</FeatureCard>
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
              ["Core Driver", "Direct, one-to-one gifts sent between members"],
              ["Advancement Trigger", "Receiving a set number of gifts at the current level"],
              ["Commission Basis", "Fixed donation amount received directly per gift"],
              ["Levels", "Fixed gift tiers, typically increasing in amount per level"],
              ["Product Layer", "Often none — a key factor in regulatory risk"],
              ["Capping", "Configurable — by gifts per level or receipt ceiling"],
              ["Best For", "Rarely recommended — high legal risk in most jurisdictions"],
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