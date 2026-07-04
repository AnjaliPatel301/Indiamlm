import React, { useState } from "react";
import Cta from "../Home/cta"
/**
 * INDIA MLM — Blog Listing + Blog Detail
 * Single-file React + Tailwind component.
 * No router: internal state switches between the blog grid and a detail view.
 * Brand accent: orange-500.
 */

/* ----------------------------- blog data ----------------------------- */

const BLOGS = [
  {
    id: "binary-mlm-guide-2026",
    title: "Binary MLM Software Complete Guide 2026: Scale Payout Engines",
    excerpt:
      "Scale your direct selling network with our authoritative industry architecture guide.",
    date: "23 Jun 2026",
    readTime: "9 min read",
    category: "Compensation Plans",
    art: "binary",
    content: [
      {
        heading: "Why Binary Still Dominates Direct Selling",
        body: "A binary plan pairs every distributor's downline into exactly two legs — left and right. That simplicity is precisely why it scales: payout logic stays predictable even as the network grows into tens of thousands of members, because every commission calculation reduces to matching pairs at each level.",
      },
      {
        heading: "The Anatomy of a Payout Engine",
        body: "A production-grade binary engine needs three moving parts working in sync: a tree-placement service that decides where new members land, a matching engine that walks the tree level by level to find balanced pairs, and a capping layer that enforces per-member ceilings so payouts never exceed what the business can sustain.",
      },
      {
        heading: "Common Mistakes That Break at Scale",
        body: "Most early-stage binary platforms hardcode level depth or skip capping until launch is imminent. Both decisions are expensive to reverse — depth limits affect every report downstream, and retrofitting capping after live payouts have started creates reconciliation headaches that can take weeks to resolve cleanly.",
      },
      {
        heading: "What to Ask Before You Build",
        body: "Before writing a single line of payout logic, get explicit answers on pair ratio (1:1 vs 2:1), capping value per rank, whether spillover is automatic or manual, and how often commissions are calculated — daily, weekly, or real-time. These four answers shape almost every architectural decision that follows.",
      },
    ],
  },
  {
    id: "mlm-software-pricing-2026",
    title: "MLM Software Pricing Guide 2026: Cost & Plans Explained",
    excerpt:
      "Discover the latest MLM Software Pricing Guide 2026 and compare costs in India to choose the best plan.",
    date: "23 Jun 2026",
    readTime: "7 min read",
    category: "Pricing",
    art: "pricing",
    content: [
      {
        heading: "What Actually Drives MLM Software Cost",
        body: "Price differences between MLM platforms rarely come down to branding — they come down to which compensation plans are supported out of the box, whether the e-wallet and payment gateway integrations are pre-built or custom, and how much the admin and reporting layer has been hardened for real payout volume.",
      },
      {
        heading: "Typical Price Bands in India, 2026",
        body: "Entry-level single-plan software (one compensation structure, basic reporting) typically starts in the ₹60,000–₹85,000 range. Multi-plan platforms that support binary, matrix, and unilevel side by side, with franchise portals and multi-language support, usually run higher depending on customization depth.",
      },
      {
        heading: "Hidden Costs to Watch For",
        body: "Site hosting, payment gateway transaction fees, SMS/email credits for OTP and notifications, and post-launch support retainers are frequently quoted separately. Ask for these line items explicitly before comparing two vendor quotes side by side, or the comparison won't be apples to apples.",
      },
      {
        heading: "Choosing Between a Fixed Plan and Custom Build",
        body: "A fixed plan suits businesses that can adapt their compensation structure to an existing template. A custom build costs more upfront but pays off when your plan has unusual rules — like hybrid binary-matrix structures or region-specific tax handling — that off-the-shelf software can't flex around.",
      },
    ],
  },
  {
    id: "best-mlm-software-india-2026",
    title: "Best MLM Software in India 2026 — Direct Selling & Network Tech",
    excerpt:
      "Best MLM software in India 2026 featuring AI, blockchain, and advanced direct selling technology.",
    date: "23 Jun 2026",
    readTime: "8 min read",
    category: "Industry Trends",
    art: "trends",
    content: [
      {
        heading: "What 'Best' Means in 2026, Not 2016",
        body: "A decade ago, 'best MLM software' meant a stable genealogy tree and a working commission report. In 2026, the bar has moved — buyers expect real-time analytics dashboards, mobile-first member apps, and increasingly, blockchain-backed transaction trails for transparency-sensitive markets.",
      },
      {
        heading: "Where AI Is Actually Useful",
        body: "The genuinely useful AI applications in MLM software are narrower than the marketing suggests: churn prediction on inactive distributors, anomaly detection on suspicious payout patterns, and personalized training-content recommendations for new joiners. Anything beyond that is often more buzzword than function.",
      },
      {
        heading: "Blockchain: When It Helps and When It's Decoration",
        body: "Blockchain-based ledgers genuinely help when a business needs an immutable, auditable payout history — common in crypto-MLM hybrids. For a standard INR-based plan with conventional banking rails, a well-built relational database with proper audit logs achieves the same transparency without the added complexity.",
      },
      {
        heading: "Evaluation Checklist for Indian Businesses",
        body: "Look for GST-compliant invoicing, UPI and net-banking gateway support out of the box, multi-language support for regional markets, and a vendor with a track record of post-launch support — not just initial delivery. These four factors separate software that lasts from software that gets abandoned within a year.",
      },
    ],
  },
];

/* ----------------------------- decorative card art ----------------------------- */

function CardArt({ variant }) {
  if (variant === "binary") {
    return (
      <svg viewBox="0 0 400 220" className="w-full h-full">
        <rect width="400" height="220" fill="#0b1220" />
        <rect width="400" height="220" fill="url(#g1)" opacity="0.5" />
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0b1220" />
          </linearGradient>
        </defs>
        {/* tree lines */}
        <g stroke="#fb923c" strokeWidth="1.3" opacity="0.85">
          <line x1="200" y1="48" x2="150" y2="92" />
          <line x1="200" y1="48" x2="250" y2="92" />
          <line x1="150" y1="92" x2="115" y2="136" />
          <line x1="150" y1="92" x2="165" y2="136" />
          <line x1="250" y1="92" x2="235" y2="136" />
          <line x1="250" y1="92" x2="285" y2="136" />
        </g>
        <circle cx="200" cy="48" r="13" fill="#f97316" />
        <circle cx="150" cy="92" r="10" fill="#fb923c" />
        <circle cx="250" cy="92" r="10" fill="#fb923c" />
        <circle cx="115" cy="136" r="7" fill="#fdba74" />
        <circle cx="165" cy="136" r="7" fill="#fdba74" />
        <circle cx="235" cy="136" r="7" fill="#fdba74" />
        <circle cx="285" cy="136" r="7" fill="#fdba74" />
        {/* mini bar chart corner */}
        <g transform="translate(24,24)">
          <rect x="0" y="20" width="6" height="14" fill="#22c55e" />
          <rect x="9" y="10" width="6" height="24" fill="#22c55e" />
          <rect x="18" y="0" width="6" height="34" fill="#22c55e" />
        </g>
        {/* pie corner */}
        <g transform="translate(330,30)">
          <circle r="20" fill="#fb923c" />
          <path d="M0 0 L0 -20 A20 20 0 0 1 17 10 Z" fill="#a855f7" />
        </g>
      </svg>
    );
  }

  if (variant === "pricing") {
    return (
      <svg viewBox="0 0 400 220" className="w-full h-full">
        <rect width="400" height="220" fill="#0c1a2e" />
        <rect width="400" height="220" fill="url(#g2)" opacity="0.55" />
        <defs>
          <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#0c1a2e" />
          </linearGradient>
        </defs>
        {/* skyline */}
        <g fill="#0f2742">
          <rect x="20" y="140" width="26" height="70" />
          <rect x="52" y="110" width="22" height="100" />
          <rect x="80" y="150" width="20" height="60" />
        </g>
        {/* connecting nodes rising */}
        <g stroke="#fb923c" strokeWidth="1.2" opacity="0.8">
          <line x1="150" y1="160" x2="190" y2="120" />
          <line x1="190" y1="120" x2="230" y2="80" />
          <line x1="230" y1="80" x2="270" y2="50" />
          <line x1="190" y1="120" x2="225" y2="135" />
          <line x1="230" y1="80" x2="265" y2="95" />
        </g>
        <circle cx="150" cy="160" r="6" fill="#fdba74" />
        <circle cx="190" cy="120" r="7" fill="#fb923c" />
        <circle cx="230" cy="80" r="8" fill="#f97316" />
        <circle cx="270" cy="50" r="9" fill="#f97316" />
        <circle cx="225" cy="135" r="5" fill="#fdba74" />
        <circle cx="265" cy="95" r="5" fill="#fdba74" />
        {/* rupee tag */}
        <g transform="translate(310,150)">
          <circle r="22" fill="#f97316" />
          <text x="0" y="7" textAnchor="middle" fontSize="20" fontWeight="800" fill="#0c1a2e">
            ₹
          </text>
        </g>
      </svg>
    );
  }

  /* trends */
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full">
      <rect width="400" height="220" fill="#10131f" />
      <rect width="400" height="220" fill="url(#g3)" opacity="0.5" />
      <defs>
        <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#312e81" />
          <stop offset="100%" stopColor="#10131f" />
        </linearGradient>
      </defs>
      <g stroke="#fb923c" strokeWidth="1.3" opacity="0.85">
        <line x1="120" y1="60" x2="80" y2="100" />
        <line x1="120" y1="60" x2="160" y2="100" />
        <line x1="80" y1="100" x2="55" y2="140" />
        <line x1="80" y1="100" x2="105" y2="140" />
        <line x1="160" y1="100" x2="140" y2="140" />
        <line x1="160" y1="100" x2="185" y2="140" />
      </g>
      <circle cx="120" cy="60" r="11" fill="#f97316" />
      <circle cx="80" cy="100" r="8" fill="#fb923c" />
      <circle cx="160" cy="100" r="8" fill="#fb923c" />
      <circle cx="55" cy="140" r="6" fill="#fdba74" />
      <circle cx="105" cy="140" r="6" fill="#fdba74" />
      <circle cx="140" cy="140" r="6" fill="#fdba74" />
      <circle cx="185" cy="140" r="6" fill="#fdba74" />
      {/* dashboard panel right */}
      <g transform="translate(235,40)">
        <rect width="135" height="140" rx="8" fill="#fff" opacity="0.95" />
        <rect x="12" y="14" width="60" height="6" rx="3" fill="#cbd5e1" />
        <rect x="12" y="28" width="40" height="6" rx="3" fill="#e2e8f0" />
        <polyline
          points="12,100 35,80 55,92 78,55 100,70 122,40"
          fill="none"
          stroke="#f97316"
          strokeWidth="2.5"
        />
        <rect x="12" y="112" width="20" height="16" fill="#fed7aa" />
        <rect x="38" y="104" width="20" height="24" fill="#fdba74" />
        <rect x="64" y="96" width="20" height="32" fill="#fb923c" />
        <rect x="90" y="108" width="20" height="20" fill="#fed7aa" />
      </g>
    </svg>
  );
}

/* ----------------------------- icons ----------------------------- */

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}
function ArrowLeftIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
      <path d="M19 12H5M11 18l-6-6 6-6" />
    </svg>
  );
}

/* ----------------------------- blog card ----------------------------- */

function BlogCard({ blog, onOpen }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col">
      <div className="h-44 sm:h-48">
        <CardArt variant={blog.art} />
      </div>
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <span className="text-[11px] font-bold uppercase tracking-wide text-orange-600 mb-2">
          {blog.category}
        </span>
        <h3
          onClick={() => onOpen(blog.id)}
          className="text-[17px] sm:text-lg font-extrabold text-indigo-700 leading-snug mb-2.5 cursor-pointer hover:text-orange-600 transition line-clamp-3"
        >
          {blog.title}
        </h3>
        <p className="text-slate-500 text-[13.5px] leading-relaxed mb-5 flex-1 line-clamp-3">
          {blog.excerpt}
        </p>

        <button
          onClick={() => onOpen(blog.id)}
          className="inline-flex items-center gap-2 self-start border border-orange-500 text-orange-600 font-semibold text-sm px-5 py-2 rounded-full hover:bg-orange-500 hover:text-white transition mb-4"
        >
          Read More <ArrowRightIcon />
        </button>

        <div className="flex items-center gap-1.5 text-slate-400 text-[12.5px] pt-3 border-t border-slate-100">
          <CalendarIcon /> {blog.date}
          <span className="mx-1.5">·</span>
          <ClockIcon /> {blog.readTime}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- blog list page ----------------------------- */

function BlogListPage({ onOpen }) {
  return (
    <div className="bg-[#fbfaf8] min-h-screen py-14 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-14">
          <span className="inline-block bg-orange-500 text-white text-[11px] font-bold tracking-wide uppercase px-4 py-1.5 rounded-full mb-5">
            Our Blog
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-slate-900 mb-3">
            Insights on MLM Software &amp; Direct Selling
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
            Guides, pricing breakdowns, and industry trends for network marketing
            businesses in India and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7">
          {BLOGS.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- blog detail page ----------------------------- */

function BlogDetailPage({ blogId, onBack, onOpen }) {
  const blog = BLOGS.find((b) => b.id === blogId) || BLOGS[0];
  const related = BLOGS.filter((b) => b.id !== blog.id);

  return (
    <div className="bg-[#fbfaf8] min-h-screen">
      {/* hero / cover */}
      <div className="relative h-64 sm:h-80 md:h-96">
        <CardArt variant={blog.art} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-6">
          <div className="max-w-4xl mx-auto w-full pb-8 sm:pb-10">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-semibold mb-4"
            >
              <ArrowLeftIcon /> Back to Blog
            </button>
            <span className="inline-block bg-orange-500 text-white text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3">
              {blog.category}
            </span>
            <h1 className="text-white text-2xl sm:text-3xl md:text-[38px] font-extrabold leading-tight max-w-3xl">
              {blog.title}
            </h1>
            <div className="flex items-center gap-2 text-white/70 text-sm mt-4">
              <CalendarIcon /> {blog.date}
              <span className="mx-1">·</span>
              <ClockIcon /> {blog.readTime}
            </div>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed mb-8 border-l-4 border-orange-500 pl-4">
          {blog.excerpt}
        </p>

        {blog.content.map((block, i) => (
          <div key={i} className="mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
              {block.heading}
            </h2>
            <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed">
              {block.body}
            </p>
          </div>
        ))}

        <div className="mt-10 bg-orange-50 border border-orange-100 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-1">
              Want this set up for your business?
            </h3>
            <p className="text-slate-600 text-sm">
              Talk to our team about a plan tailored to your network.
            </p>
          </div>
          <button className="shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-3 rounded-full transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* related posts */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-6">
          More from the blog
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {related.map((b) => (
            <BlogCard key={b.id} blog={b} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- root component ----------------------------- */

export default function BlogApp() {
  const [view, setView] = useState({ page: "list", blogId: null });

  function openBlog(id) {
    setView({ page: "detail", blogId: id });
    window.scrollTo?.({ top: 0, behavior: "smooth" });
  }

  function backToList() {
    setView({ page: "list", blogId: null });
    window.scrollTo?.({ top: 0, behavior: "smooth" });
  }

  if (view.page === "detail") {
    return <>BlogDetailPage blogId={view.blogId} onBack={backToList} onOpen={openBlog} 
  
    </>;
  }

  return <> <BlogListPage onOpen={openBlog}/> <Cta/></>;
}