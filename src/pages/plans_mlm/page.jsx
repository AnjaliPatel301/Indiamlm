import React, { useState } from "react";

/**
 * INDIA MLM — MLM Compensation Plans Explained
 * Single-file React + Tailwind component.
 * 7 plan types as expandable cards: explanation, structure diagram, pros & cons.
 * Brand accent: orange-500.
 */

/* ----------------------------- icons ----------------------------- */

function ChevronIcon({ open }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function CrossIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

/* ----------------------------- structure diagrams ----------------------------- */

function NodeTree({ edges, nodes, viewBox = "0 0 400 180" }) {
  return (
    <svg viewBox={viewBox} className="w-full h-full">
      <g stroke="#fdba74" strokeWidth="1.6">
        {edges.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>
      {nodes.map(([cx, cy, r, fill], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={fill} />
      ))}
    </svg>
  );
}

function BinaryDiagram() {
  return (
    <NodeTree
      edges={[
        [200, 30, 130, 75],
        [200, 30, 270, 75],
        [130, 75, 90, 120],
        [130, 75, 165, 120],
        [270, 75, 235, 120],
        [270, 75, 310, 120],
      ]}
      nodes={[
        [200, 30, 13, "#f97316"],
        [130, 75, 10, "#fb923c"],
        [270, 75, 10, "#fb923c"],
        [90, 120, 7, "#fdba74"],
        [165, 120, 7, "#fdba74"],
        [235, 120, 7, "#fdba74"],
        [310, 120, 7, "#fdba74"],
      ]}
    />
  );
}

function MatrixDiagram() {
  const edges = [];
  const nodes = [[200, 24, 12, "#f97316"]];
  const level1X = [130, 200, 270];
  level1X.forEach((x) => {
    edges.push([200, 24, x, 80]);
    nodes.push([x, 80, 9, "#fb923c"]);
  });
  level1X.forEach((px) => {
    [-22, 0, 22].forEach((dx) => {
      const x = px + dx;
      edges.push([px, 80, x, 136]);
      nodes.push([x, 136, 5.5, "#fdba74"]);
    });
  });
  return <NodeTree edges={edges} nodes={nodes} />;
}

function UnilevelDiagram() {
  const edges = [];
  const nodes = [[60, 90, 12, "#f97316"]];
  const xs = [140, 200, 260, 320, 365];
  xs.forEach((x, i) => {
    edges.push([60, 90, x, 90]);
    nodes.push([x, 90, 8 - i * 0.6, "#fb923c"]);
  });
  return <NodeTree edges={edges} nodes={nodes} />;
}

function GenerationDiagram() {
  const edges = [];
  const nodes = [[200, 24, 12, "#f97316"]];
  const gen1 = [130, 200, 270];
  gen1.forEach((x) => {
    edges.push([200, 24, x, 76]);
    nodes.push([x, 76, 8, "#fb923c"]);
  });
  // generation 2 only from one branch to show "generation" cut-off concept
  [110, 150].forEach((x) => {
    edges.push([130, 76, x, 130]);
    nodes.push([x, 130, 5.5, "#fdba74"]);
  });
  [185, 215].forEach((x) => {
    edges.push([200, 76, x, 130]);
    nodes.push([x, 130, 5.5, "#fdba74"]);
  });
  [255, 290].forEach((x) => {
    edges.push([270, 76, x, 130]);
    nodes.push([x, 130, 5.5, "#fdba74"]);
  });
  return <NodeTree edges={edges} nodes={nodes} />;
}

function BoardDiagram() {
  // donation/board plan: a grid of equal seats that "splits" into two new boards
  return (
    <svg viewBox="0 0 400 180" className="w-full h-full">
      <g>
        <rect x="140" y="20" width="120" height="46" rx="8" fill="#f97316" />
        <text x="200" y="48" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">
          Board (full)
        </text>
      </g>
      <line x1="170" y1="66" x2="90" y2="115" stroke="#fdba74" strokeWidth="1.6" />
      <line x1="230" y1="66" x2="310" y2="115" stroke="#fdba74" strokeWidth="1.6" />
      <rect x="35" y="116" width="110" height="42" rx="8" fill="#fb923c" />
      <text x="90" y="142" textAnchor="middle" fill="#fff" fontSize="11.5" fontWeight="700">
        New Board A
      </text>
      <rect x="255" y="116" width="110" height="42" rx="8" fill="#fb923c" />
      <text x="310" y="142" textAnchor="middle" fill="#fff" fontSize="11.5" fontWeight="700">
        New Board B
      </text>
    </svg>
  );
}

function HybridDiagram() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-full">
      <circle cx="200" cy="34" r="13" fill="#f97316" />
      <line x1="200" y1="34" x2="140" y2="80" stroke="#fdba74" strokeWidth="1.6" />
      <line x1="200" y1="34" x2="260" y2="80" stroke="#fdba74" strokeWidth="1.6" />
      <circle cx="140" cy="80" r="9" fill="#fb923c" />
      <circle cx="260" cy="80" r="9" fill="#fb923c" />
      {/* left side: binary pair */}
      <line x1="140" y1="80" x2="115" y2="125" stroke="#fdba74" strokeWidth="1.4" />
      <line x1="140" y1="80" x2="165" y2="125" stroke="#fdba74" strokeWidth="1.4" />
      <circle cx="115" cy="125" r="6" fill="#fdba74" />
      <circle cx="165" cy="125" r="6" fill="#fdba74" />
      {/* right side: unilevel-ish row */}
      <line x1="260" y1="80" x2="235" y2="125" stroke="#fdba74" strokeWidth="1.4" />
      <line x1="260" y1="80" x2="260" y2="125" stroke="#fdba74" strokeWidth="1.4" />
      <line x1="260" y1="80" x2="285" y2="125" stroke="#fdba74" strokeWidth="1.4" />
      <circle cx="235" cy="125" r="6" fill="#fdba74" />
      <circle cx="260" cy="125" r="6" fill="#fdba74" />
      <circle cx="285" cy="125" r="6" fill="#fdba74" />
    </svg>
  );
}

function StairstepDiagram() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-full">
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={50 + i * 80}
          y={140 - i * 30}
          width="64"
          height={20 + i * 30}
          rx="6"
          fill={i === 3 ? "#f97316" : "#fb923c"}
          opacity={0.55 + i * 0.15}
        />
      ))}
      <text x="82" y="158" textAnchor="middle" fontSize="10.5" fill="#7c2d12" fontWeight="700">
        Entry
      </text>
      <text x="362" y="48" textAnchor="middle" fontSize="10.5" fill="#fff" fontWeight="700">
        Top Rank
      </text>
    </svg>
  );
}

/* ----------------------------- plan data ----------------------------- */

const PLANS = [
  {
    id: "binary",
    name: "Binary Plan",
    tagline: "Two legs, fast pairing, predictable payouts.",
    Diagram: BinaryDiagram,
    explanation:
      "Every distributor's downline splits into exactly two legs — left and right. Commission is earned each time a balanced pair forms between the two legs, usually capped at a fixed amount per member per day or cycle. Because the structure is limited to two legs, placement and payout calculations stay simple even as the network scales into thousands of members.",
    structure: [
      "Each member sponsors at most 2 direct legs — left and right.",
      "New recruits beyond 2 are placed via spillover into the existing legs.",
      "Commission triggers when both legs accumulate matching sales volume — a 'pair'.",
      "A capping limit caps how much commission a member earns per day/cycle.",
    ],
    pros: [
      "Simple, predictable payout structure that's easy to explain to new members.",
      "Spillover help from upline can accelerate earnings for new joiners.",
      "Capping protects the business from runaway, unsustainable payouts.",
    ],
    cons: [
      "Heavy reliance on spillover can demotivate members from personal recruiting.",
      "Payouts can plateau quickly once capping is reached.",
      "Less effective for businesses wanting unlimited team width.",
    ],
  },
  {
    id: "matrix",
    name: "Matrix Plan",
    tagline: "A fixed-width, fixed-depth grid with automatic spillover.",
    Diagram: MatrixDiagram,
    explanation:
      "A matrix plan organizes the team into a fixed grid — for example a 3-wide, 5-deep matrix. Each member can sponsor only a limited number of people directly; once that row fills, new recruits spill over into the next open position automatically. Because width and depth are both fixed, the maximum possible earnings per matrix cycle can be calculated exactly in advance.",
    structure: [
      "Matrix size is fixed as Width × Depth, e.g. 3×5 or 5×7.",
      "Once a member's row fills, new joiners are placed via forced spillover.",
      "Commission is paid per filled position at each level of the matrix.",
      "Completing a matrix often triggers a 're-entry' into a new matrix cycle.",
    ],
    pros: [
      "Predictable, bounded earning potential makes the plan easy to model financially.",
      "Spillover placement helps build momentum for newer members.",
      "Clear visual structure (a grid) is intuitive for distributors to understand.",
    ],
    cons: [
      "Fixed width can frustrate highly active recruiters who outgrow their row quickly.",
      "Heavy spillover dependence can attract members focused on placement, not selling.",
      "Re-entry cycles add bookkeeping complexity for the back office.",
    ],
  },
  {
    id: "unilevel",
    name: "Unilevel Plan",
    tagline: "Unlimited width, commission paid level by level.",
    Diagram: UnilevelDiagram,
    explanation:
      "In a unilevel plan, a distributor can sponsor an unlimited number of people directly onto a single, flat first level — there's no left/right leg or grid-width limit. Commission is paid as a percentage of sales volume across a defined number of levels deep, usually declining the further down the level goes. Earnings depend almost entirely on real recruiting and sales activity rather than forced placement.",
    structure: [
      "Unlimited direct recruits — every referral can sit on the sponsor's own level 1.",
      "Commission percentage typically declines at deeper levels (L1 > L2 > L3...).",
      "No spillover or forced placement; growth depends on genuine team building.",
      "Often paired with a minimum personal-sales rule to unlock deeper levels.",
    ],
    pros: [
      "Rewards genuine recruiting and sales effort directly, with no spillover dilution.",
      "Simple to understand: more direct recruits and sales mean more income.",
      "Works well for product-focused businesses, not just recruitment-focused ones.",
    ],
    cons: [
      "New members without an active upline get little to no spillover support.",
      "Can demand stronger personal selling skill than binary or matrix plans.",
      "Deep, wide teams require more sophisticated reporting to track properly.",
    ],
  },
  {
    id: "generation",
    name: "Generation Plan",
    tagline: "Commission counted by rank-based 'generations', not raw levels.",
    Diagram: GenerationDiagram,
    explanation:
      "A generation plan pays commission based on 'generations' rather than raw tree levels. A new generation starts every time a member of a certain rank is found in the downline — so the levels between two same-rank members are skipped over (compressed) for that payout. This rewards members for developing other strong leaders, not just for tree depth.",
    structure: [
      "Downline is scanned for members who've reached a qualifying rank.",
      "Each qualifying-rank member marks the start of a new 'generation'.",
      "Levels between two qualifying members are skipped (compressed) for payout.",
      "Commission percentage is usually set per generation, e.g. 1st gen, 2nd gen.",
    ],
    pros: [
      "Directly rewards leadership development, not just tree size.",
      "Compression keeps payouts meaningful even in deep, uneven trees.",
      "Encourages mentoring since upline benefits when downline members rank up.",
    ],
    cons: [
      "More complex to explain to new distributors than binary or unilevel.",
      "Requires accurate, real-time rank tracking to calculate generations correctly.",
      "Slower initial earnings until enough downline members qualify in rank.",
    ],
  },
  {
    id: "board",
    name: "Board / Donation Plan",
    tagline: "A fixed-seat board that splits into two new boards once full.",
    Diagram: BoardDiagram,
    explanation:
      "A board (or donation) plan organizes members into a fixed-size board — commonly with a set number of seats. Once all seats fill, the board 'closes' and the top member graduates with a payout, while the board splits into two new boards that the remaining members move into. This donation-style mechanic is common in cash-gifting and community-funded models.",
    structure: [
      "A board has a fixed number of seats, e.g. 2, 4, or 8.",
      "Each seat fills through new member entry or direct donation/contribution.",
      "Once full, the top-seated member exits with a payout and the board splits.",
      "Remaining members are distributed into two freshly opened boards.",
    ],
    pros: [
      "Simple, visual mechanic — members can see exactly how close their board is to filling.",
      "Clear exit/payout event creates strong motivation to help fill the board.",
      "Splitting mechanic gives every member a path to a new earning cycle.",
    ],
    cons: [
      "Closely associated with cash-gifting models, which face heavy regulatory scrutiny in many regions.",
      "Earnings depend on board-filling speed, which can stall in slow-growth periods.",
      "Less suited to product-based businesses than to community-funded models.",
    ],
  },
  {
    id: "hybrid",
    name: "Hybrid Plan",
    tagline: "Combines two or more plan types into one custom structure.",
    Diagram: HybridDiagram,
    explanation:
      "A hybrid plan blends elements of two or more compensation models — for instance, a binary structure for the first few levels combined with a unilevel-style override on personal recruits beyond that. Businesses choose a hybrid approach when no single standard plan fully captures their incentive goals, accepting added complexity in exchange for a more precisely tuned payout structure.",
    structure: [
      "Different branches or levels of the tree can follow different plan rules.",
      "Common combination: binary pairing near the top, unilevel overrides further out.",
      "Each component plan keeps its own commission and capping rules.",
      "Requires a payout engine flexible enough to run multiple rule sets at once.",
    ],
    pros: [
      "Can be precisely tuned to match a business's specific incentive goals.",
      "Captures benefits of multiple plans — e.g. binary's pairing speed plus unilevel's recruiting reward.",
      "Differentiates the business from competitors running a standard, single-plan model.",
    ],
    cons: [
      "Significantly harder to explain clearly to new distributors.",
      "More complex software and back-office reporting required.",
      "Higher risk of payout calculation errors if the rule sets aren't well tested.",
    ],
  },
  {
    id: "stairstep",
    name: "Stairstep Breakaway Plan",
    tagline: "Climb sales-volume ranks; top ranks 'break away' with override income.",
    Diagram: StairstepDiagram,
    explanation:
      "In a stairstep breakaway plan, distributors climb a ladder of ranks based on personal and team sales volume — each step up unlocks a higher commission percentage. Once a downline leader reaches a senior enough rank, their group 'breaks away' to become a semi-independent unit, and the original sponsor instead earns a smaller royalty/override on that breakaway group's volume rather than full-line commission.",
    structure: [
      "Ranks are defined by sales-volume thresholds, each unlocking a higher commission rate.",
      "Personal volume and group volume both count toward rank qualification.",
      "When a downline leader hits a senior rank, their team 'breaks away' as its own unit.",
      "The original sponsor earns an override/royalty on the breakaway group going forward.",
    ],
    pros: [
      "Strongly rewards high-performing leaders with the best commission percentages.",
      "Breakaway mechanic naturally creates new independent business leaders.",
      "Long-favored by established direct-selling brands — well understood by veteran distributors.",
    ],
    cons: [
      "Override income after breakaway is meaningfully lower than direct-line commission.",
      "Rank-climbing pressure can push toward inventory loading in poorly governed versions.",
      "Less attractive to newer distributors who don't yet have a large team.",
    ],
  },
];

/* ----------------------------- plan card ----------------------------- */

function PlanCard({ plan, isOpen, onToggle, index }) {
  const Diagram = plan.Diagram;
  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
      >
        <div className="flex items-center gap-4">
          <span className="shrink-0 w-10 h-10 rounded-xl bg-orange-50 text-orange-600 font-extrabold flex items-center justify-center text-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">{plan.name}</h3>
            <p className="text-slate-500 text-[13px] sm:text-sm mt-0.5">{plan.tagline}</p>
          </div>
        </div>
        <span className="shrink-0 text-slate-400">
          <ChevronIcon open={isOpen} />
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "2400px" : "0px" }}
      >
        <div className="px-5 sm:px-6 pb-6 sm:pb-7 pt-1">
          {/* diagram */}
          <div className="bg-slate-50 rounded-xl h-44 sm:h-52 mb-6 overflow-hidden">
            <Diagram />
          </div>

          {/* explanation */}
          <p className="text-slate-600 text-[14.5px] sm:text-[15px] leading-relaxed mb-6">
            {plan.explanation}
          </p>

          {/* structure */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">
              How the structure works
            </h4>
            <ul className="space-y-2.5">
              {plan.structure.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14px] text-slate-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* pros & cons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 sm:p-5">
              <h4 className="text-sm font-bold text-emerald-700 mb-3">Pros</h4>
              <ul className="space-y-2.5">
                {plan.pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-slate-700">
                    <span className="mt-0.5 text-emerald-600 shrink-0">
                      <CheckIcon />
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-rose-50/60 border border-rose-100 rounded-xl p-4 sm:p-5">
              <h4 className="text-sm font-bold text-rose-600 mb-3">Cons</h4>
              <ul className="space-y-2.5">
                {plan.cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-slate-700">
                    <span className="mt-0.5 text-rose-500 shrink-0">
                      <CrossIcon />
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- main page ----------------------------- */

export default function MlmPlansExplainedPage() {
  const [openId, setOpenId] = useState(PLANS[0].id);

  return (
    <div className="bg-[#fbfaf8] min-h-screen py-14 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* heading */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="inline-block bg-orange-500 text-white text-[11px] font-bold tracking-wide uppercase px-4 py-1.5 rounded-full mb-5">
            Compensation Plans
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-slate-900 mb-3">
            Every MLM Plan, Explained
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
            Seven compensation structures used in network marketing today — how each one
            works, what it's built for, and where it falls short. Tap a plan to expand it.
          </p>
        </div>

        {/* cards */}
        <div className="space-y-4 sm:space-y-5">
          {PLANS.map((plan, i) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              index={i}
              isOpen={openId === plan.id}
              onToggle={() => setOpenId(openId === plan.id ? null : plan.id)}
            />
          ))}
        </div>

        {/* footer CTA */}
        <div className="mt-12 sm:mt-14 bg-orange-50 border border-orange-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-1">
              Not sure which plan fits your business?
            </h3>
            <p className="text-slate-600 text-sm">
              Talk to our team — we'll help you model the right structure for your goals.
            </p>
          </div>
          <button className="shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-3 rounded-full transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}