import { useState } from "react";
import Cta from "../Home/cta"
import {
  Code2, Network, Smartphone, ShoppingCart,
  ShieldCheck, Globe2, CheckCircle2, ArrowRight,
  Phone, MessageCircle, ChevronRight, Plus, Minus,
  Star, Users, Clock, Headset, Layers,
  Settings2, TrendingUp, Lock, Wallet, PackageOpen,
  FileText, Bell, Truck, IdCard,
  MapPin, Receipt, Server,
  LayoutDashboard, CreditCard, Boxes, ShieldAlert,
  BarChart3, Settings,
} from "lucide-react";

// ─── DATA ───────────────────────────────────────────────────────────────────

const services = [
  {
    id: 1,
    Icon: Code2,
    iconBg: "bg-orange-500",
    accentColor: "#f97316",
    title: "Web Development Services",
    shortDesc: "Powerful, secure, and scalable web solutions tailored for the MLM industry — from intuitive interfaces to robust backend systems.",
    overview: "At MLM Software Services, we build end-to-end web platforms specifically engineered for network marketing businesses. Our team combines modern frontend frameworks with scalable backend architectures to deliver fast, secure, and feature-rich MLM portals that grow with your business. Every platform is built on a modular codebase so new compensation rules, languages, or payment rails can be added without a rebuild.",
    stats: [
      { label: "Projects Delivered", value: "500+", Icon: CheckCircle2 },
      { label: "Avg Load Time", value: "< 2s", Icon: Clock },
      { label: "Uptime Guarantee", value: "99.9%", Icon: Server },
      { label: "Support Hours", value: "24/7", Icon: Headset },
    ],
    features: [
      { Icon: LayoutDashboard, title: "Admin & User Panels", desc: "Fully separate admin, sub-admin, and member dashboards with role-based access control." },
      { Icon: TrendingUp, title: "Real-Time Analytics", desc: "Live sales, commission, and downline performance dashboards with export capabilities." },
      { Icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect layouts that work flawlessly on all devices — mobile, tablet, and desktop." },
      { Icon: ShieldCheck, title: "Security Hardened", desc: "Built-in SSL, 2FA, CSRF protection, and regular security audits for every deployment." },
      { Icon: Settings2, title: "API Integration Ready", desc: "REST API architecture for seamless integration with payment gateways, SMS, and third-party tools." },
      { Icon: Layers, title: "Custom MLM Modules", desc: "Commission engines, genealogy trees, e-wallet, KYC — all modular and configurable." },
    ],
    points: [
      "Responsive and mobile-friendly MLM websites.",
      "Custom development aligned with your MLM plans.",
      "Integrated security, live support, and admin control.",
      "SEO-optimized pages for better organic reach.",
      "Modular codebase that scales as your member base grows.",
      "Staging and production environments for safe rollouts.",
    ],
    process: [
      { step: "Discovery", desc: "We map your compensation plan, branding, and feature list into a technical spec." },
      { step: "Design", desc: "Wireframes and UI design for admin, distributor, and customer-facing views." },
      { step: "Build", desc: "Modular development across frontend, backend, and database layers in parallel." },
      { step: "QA & Launch", desc: "Security testing, load testing, and a guided go-live with rollback plan." },
    ],
    illBg: "linear-gradient(135deg, #0a0a2e 0%, #0d1b4b 50%, #0a1628 100%)",
    illLabel: "WEB",
    illSub: "DEVELOPMENT",
    illAccent: "#f97316",
  },
  {
    id: 2,
    Icon: Network,
    iconBg: "bg-yellow-500",
    accentColor: "#eab308",
    title: "MLM Software Development",
    shortDesc: "Custom MLM software empowering network marketing businesses with plan automation, real-time reporting, and iron-clad security.",
    overview: "Our MLM Software Development service delivers tailor-made platforms for every compensation model — Binary, Matrix, Unilevel, and Hybrid. We handle everything from plan configuration and commission automation to genealogy tracking and secure payout management, giving you a complete business-in-a-box. Configuration happens through the admin panel, not through code changes, so your team stays in control after launch.",
    stats: [
      { label: "MLM Plans Supported", value: "10+", Icon: Layers },
      { label: "Active Members Handled", value: "1M+", Icon: Users },
      { label: "Commission Accuracy", value: "100%", Icon: CheckCircle2 },
      { label: "Countries Served", value: "40+", Icon: Globe2 },
    ],
    features: [
      { Icon: Network, title: "All MLM Plan Types", desc: "Binary, Matrix, Unilevel, Board, Stair-Step, Australian 2-Up, Hybrid — fully configurable." },
      { Icon: Receipt, title: "Commission Engine", desc: "Rule-based real-time commission calculation with capping, override, and deduction support." },
      { Icon: Users, title: "Genealogy Tracking", desc: "Interactive visual downline tree with level filters, leg tracking, and export options." },
      { Icon: Wallet, title: "E-Wallet & E-Pin", desc: "Integrated digital wallet for commission credit, fund transfers, and E-Pin management." },
      { Icon: IdCard, title: "KYC Management", desc: "Document upload, automated verification, manual review, and compliance audit trail." },
      { Icon: CreditCard, title: "Automated Payouts", desc: "Scheduled bank transfer, UPI, and e-wallet payout automation with tax deduction handling." },
    ],
    points: [
      "Binary, Matrix, Unilevel & Hybrid MLM plans.",
      "Real-time commission & genealogy tracking.",
      "Secure admin panel with full control.",
      "E-Wallet, E-Pin, and automated payouts.",
      "Rank and reward automation tied to your plan rules.",
      "Exportable commission and downline reports for every member.",
    ],
    process: [
      { step: "Plan Mapping", desc: "Your compensation rules are translated into configurable engine parameters." },
      { step: "Engine Build", desc: "Commission, capping, and payout logic is built and unit-tested against test data." },
      { step: "Simulation", desc: "We run historical or sample data through the engine to validate payout accuracy." },
      { step: "Go-Live", desc: "Admin training, data migration if needed, and a monitored first payout cycle." },
    ],
    illBg: "linear-gradient(135deg, #0a1628 0%, #0d2456 50%, #0a1628 100%)",
    illLabel: "MLM",
    illSub: "SOFTWARE",
    illAccent: "#22c55e",
  },
  {
    id: 3,
    Icon: Smartphone,
    iconBg: "bg-purple-500",
    accentColor: "#f97316",
    title: "Mobile App Development",
    shortDesc: "Feature-rich Android & iOS mobile apps that let MLM distributors run their entire business from their smartphone.",
    overview: "We develop cross-platform and native mobile applications that give your MLM distributors instant access to their business — genealogy, commissions, orders, notifications, and wallet — all in one powerful app. Built with React Native or Flutter for maximum performance and minimal maintenance, with a single codebase shared across both Android and iOS to keep future updates fast and affordable.",
    stats: [
      { label: "Platforms", value: "Android + iOS", Icon: Smartphone },
      { label: "App Rating", value: "4.8 ★", Icon: Star },
      { label: "Push Notification", value: "Real-Time", Icon: Bell },
      { label: "Offline Mode", value: "Supported", Icon: CheckCircle2 },
    ],
    features: [
      { Icon: Smartphone, title: "Cross-Platform Build", desc: "Single React Native / Flutter codebase deployed to both Android Play Store and Apple App Store." },
      { Icon: Bell, title: "Push Notifications", desc: "Real-time alerts for orders, commissions, team joins, and promotional campaigns." },
      { Icon: Wallet, title: "Mobile Wallet & KYC", desc: "Fund top-up, transfers, withdrawal, and in-app document-based KYC verification." },
      { Icon: Network, title: "Downline Tree View", desc: "Mobile-optimized genealogy tree with swipe navigation and level-wise filtering." },
      { Icon: ShoppingCart, title: "Mobile Shopping", desc: "Full product catalog, cart, checkout, and order tracking with UPI/gateway payment." },
      { Icon: ShieldCheck, title: "Face ID / Fingerprint", desc: "Biometric authentication for secure and frictionless app login." },
    ],
    points: [
      "Native Android & iOS MLM apps.",
      "Real-time push notifications & alerts.",
      "Mobile wallet, KYC & genealogy views.",
      "Biometric login and offline mode support.",
      "App Store and Play Store submission handled end-to-end.",
      "In-app multilingual support for distributors across regions.",
    ],
    process: [
      { step: "UX for Mobile", desc: "Screens are designed mobile-first, optimized for one-handed distributor use." },
      { step: "Build", desc: "Shared React Native / Flutter codebase connected to your existing backend APIs." },
      { step: "Device Testing", desc: "QA across a range of Android and iOS devices and OS versions." },
      { step: "Store Submission", desc: "App Store and Play Store listing, review handling, and release management." },
    ],
    illBg: "linear-gradient(135deg, #1a0a3e 0%, #2d1b69 50%, #1a0a3e 100%)",
    illLabel: "MOBILE",
    illSub: "APP",
    illAccent: "#a78bfa",
  },
  {
    id: 4,
    Icon: ShoppingCart,
    iconBg: "bg-emerald-500",
    accentColor: "#10b981",
    title: "E-Commerce + MLM Integration",
    shortDesc: "Sell products through a full e-commerce engine while your MLM network earns commissions — seamlessly integrated in one platform.",
    overview: "Our E-Commerce + MLM Integration combines a full-featured online store with a powerful MLM commission engine. Every product purchase can trigger BV/PV assignment, multi-level commissions, and automated payouts — giving you a business that sells AND rewards simultaneously. The storefront and the compensation engine share one database, so there's no syncing delay between a sale and the commission it generates.",
    stats: [
      { label: "Cart Conversion", value: "+35%", Icon: TrendingUp },
      { label: "Payment Gateways", value: "10+", Icon: CreditCard },
      { label: "Commission Types", value: "All Plans", Icon: Layers },
      { label: "Inventory Sync", value: "Real-Time", Icon: Boxes },
    ],
    features: [
      { Icon: PackageOpen, title: "Product Catalog + BV/PV", desc: "Assign Business Volume and Point Value to each product for MLM compensation calculation." },
      { Icon: ShoppingCart, title: "Smart Shopping Cart", desc: "Persistent cart with coupon codes, bundle deals, upsell prompts, and one-page checkout." },
      { Icon: Boxes, title: "Inventory Management", desc: "Multi-warehouse real-time stock tracking with low-stock alerts and auto-reorder." },
      { Icon: Truck, title: "Shipping & Delivery", desc: "Carrier API integration for rate calculation, live tracking, and bulk label printing." },
      { Icon: Receipt, title: "Auto Commission on Orders", desc: "Every purchase triggers commission calculation across the entire upline automatically." },
      { Icon: CreditCard, title: "Multi-Gateway Payments", desc: "Razorpay, PayU, Stripe, UPI, COD — fully integrated with automatic reconciliation." },
    ],
    points: [
      "Product catalog with MLM BV/PV assignment.",
      "Shopping cart with commission auto-calculation.",
      "Multi-seller & franchise-ready architecture.",
      "Shipping management with live tracking.",
      "Return and refund workflows that auto-reverse paid commissions.",
      "Bulk product import/export for fast catalog setup.",
    ],
    process: [
      { step: "Catalog Setup", desc: "Products are loaded with pricing, BV/PV, and inventory rules." },
      { step: "Engine Linking", desc: "Checkout events are wired directly into the commission engine, order by order." },
      { step: "Logistics Integration", desc: "Shipping carriers and warehouses are connected for live rate and tracking data." },
      { step: "Launch & Monitor", desc: "Soft launch with order monitoring before opening to the full network." },
    ],
    illBg: "linear-gradient(135deg, #0a2818 0%, #064e2d 50%, #0a2818 100%)",
    illLabel: "E-COMMERCE",
    illSub: "+ MLM",
    illAccent: "#34d399",
  },
  {
    id: 5,
    Icon: ShieldCheck,
    iconBg: "bg-red-500",
    accentColor: "#ef4444",
    title: "Security & Compliance",
    shortDesc: "Enterprise-grade security and full regulatory compliance — protecting your platform, your members, and your reputation.",
    overview: "Security is not an add-on — it is built into every layer of our MLM platforms. From encrypted transactions to automated KYC and real-time fraud detection, we ensure your platform meets global compliance standards while giving your members confidence that their data and funds are safe. We treat every financial action — a payout, a wallet transfer, a rank change — as an auditable event from day one.",
    stats: [
      { label: "Encryption", value: "256-bit SSL", Icon: Lock },
      { label: "Compliance", value: "GDPR + KYC", Icon: ShieldCheck },
      { label: "Threat Detection", value: "Real-Time", Icon: ShieldAlert },
      { label: "Audit Logs", value: "Immutable", Icon: FileText },
    ],
    features: [
      { Icon: Lock, title: "End-to-End Encryption", desc: "All data in transit and at rest is protected with AES-256 encryption and SSL/TLS." },
      { Icon: ShieldCheck, title: "2FA Authentication", desc: "Google Authenticator, SMS, and email-based two-factor authentication for all accounts." },
      { Icon: IdCard, title: "KYC / AML Compliance", desc: "Document verification, facial match, Aadhar/PAN API integration, and AML screening." },
      { Icon: FileText, title: "Immutable Audit Trails", desc: "Every financial transaction and admin action is logged immutably for regulatory audits." },
      { Icon: ShieldAlert, title: "DDoS & Fraud Protection", desc: "Real-time traffic analysis, rate limiting, and automated threat blocking." },
      { Icon: Receipt, title: "GST / VAT Automation", desc: "Jurisdiction-aware tax calculation with compliance-ready reports for every region." },
    ],
    points: [
      "End-to-end encryption & 2FA authentication.",
      "KYC/AML compliance with document verification.",
      "GDPR, GST/VAT & regulatory audit trails.",
      "DDoS protection and real-time fraud detection.",
      "Role-based access control down to individual admin permissions.",
      "Scheduled penetration testing ahead of every major release.",
    ],
    process: [
      { step: "Risk Assessment", desc: "We map every financial flow in your plan to identify where controls are needed." },
      { step: "Hardening", desc: "Encryption, 2FA, access control, and rate limiting are applied across the stack." },
      { step: "Compliance Build", desc: "KYC, AML, and tax automation are configured for your operating jurisdictions." },
      { step: "Audit & Test", desc: "Security testing and a compliance review before the platform goes live." },
    ],
    illBg: "linear-gradient(135deg, #1a0a0a 0%, #3b0000 50%, #1a0a0a 100%)",
    illLabel: "SECURE",
    illSub: "PLATFORM",
    illAccent: "#f87171",
  },
  {
    id: 6,
    Icon: Globe2,
    iconBg: "bg-cyan-500",
    accentColor: "#f97316",
    title: "Global Expansion & Localization",
    shortDesc: "Scale your MLM business worldwide with multi-currency, multi-language, and region-specific tax and compliance automation.",
    overview: "Whether you are launching in India or expanding across 50 countries, our global-ready MLM platform handles every localization requirement — from currency conversion and language packs to timezone-aware reporting and country-specific tax rules — without any custom development. New countries are added by configuration, not by engineering work, so your expansion timeline isn't gated by your dev team.",
    stats: [
      { label: "Currencies", value: "150+", Icon: Globe2 },
      { label: "Languages", value: "20+", Icon: Layers },
      { label: "Tax Jurisdictions", value: "60+", Icon: Receipt },
      { label: "Countries Active", value: "40+", Icon: MapPin },
    ],
    features: [
      { Icon: Globe2, title: "150+ Currencies", desc: "Real-time exchange rates, multi-currency wallets, and automatic conversion at checkout." },
      { Icon: Layers, title: "20+ Language Packs", desc: "Full UI translation including RTL support for Arabic, Hebrew, and other right-to-left languages." },
      { Icon: Receipt, title: "Regional Tax Engine", desc: "GST, VAT, TDS, withholding tax — auto-calculated per jurisdiction with compliance reports." },
      { Icon: Clock, title: "Timezone-Aware Reports", desc: "All dashboards and reports adjust to each member's local timezone automatically." },
      { Icon: IdCard, title: "Country-Specific KYC", desc: "Configurable document types per country — Aadhar/PAN for India, SSN for USA, etc." },
      { Icon: MapPin, title: "Regional Admin Panels", desc: "Sub-admin panels with territory mapping and region-specific reporting for franchise networks." },
    ],
    points: [
      "Multi-currency & multi-language platform.",
      "Regional tax automation (GST, VAT, TDS).",
      "Timezone-aware dashboards & reports.",
      "Country-specific KYC configuration.",
      "Per-country payment gateway routing for local payment preferences.",
      "Franchise/territory hierarchy for regional management teams.",
    ],
    process: [
      { step: "Market Mapping", desc: "Target countries are reviewed for currency, language, tax, and KYC requirements." },
      { step: "Localization Build", desc: "Language packs, currency rules, and regional tax logic are configured." },
      { step: "Regional Testing", desc: "Each market is validated end-to-end before being switched on for members." },
      { step: "Phased Rollout", desc: "Countries are activated in phases with monitoring at each stage." },
    ],
    illBg: "linear-gradient(135deg, #0a1e28 0%, #0d3348 50%, #0a1e28 100%)",
    illLabel: "GLOBAL",
    illSub: "REACH",
    illAccent: "#22d3ee",
  },
];

const faqs = [
  { q: "What is MLM software and why do I need it?", a: "MLM software is a specialized platform that automates multi-level marketing operations — including commission calculations, genealogy tracking, member management, and payouts. It eliminates manual errors, saves time, and scales with your business growth. Without proper software, even a small MLM team of 500 members becomes impossible to manage manually." },
  { q: "Which MLM compensation plans does your software support?", a: "Our software supports all major MLM plans — Binary, Matrix, Unilevel, Board Plan, Stair-Step, Australian (2-Up), Hybrid, and custom plans. Each plan is fully configurable from the admin panel without any coding. We can also combine multiple plan types into a single hybrid structure." },
  { q: "Is the MLM software customizable to my specific business needs?", a: "Absolutely. Every module — commission rules, branding, plan structures, payout schedules, and UI — is fully customizable. We deliver source code (as per agreement) and use future-upgrade-ready architecture so your platform evolves with your business." },
  { q: "Does it include a mobile application?", a: "Yes. We build native-quality Android and iOS mobile apps alongside the web platform. Members can manage their downline, track commissions, place orders, complete KYC, and receive real-time push notifications — all from their phone. Apps are submitted to Play Store and App Store as part of delivery." },
  { q: "How is commission calculated and distributed?", a: "Our rule-based commission engine automatically calculates all commission types — referral bonus, level income, matching bonus, leadership rewards, and royalty — in real time based on your configured plan. Payouts are automated via bank transfer, e-wallet, or UPI on a schedule you define (daily, weekly, monthly)." },
  { q: "What payment gateways are integrated?", a: "We integrate all major Indian and international gateways including Razorpay, PayU, Paytm, CCAvenue, Stripe, and PayPal. We also support UPI, net banking, and select cryptocurrency payment providers upon request. All gateways include automatic reconciliation and failed transaction handling." },
  { q: "Is KYC verification included in the software?", a: "Yes. Our built-in KYC module supports document uploads (Aadhar, PAN, passport, driving license), automated verification checks via DigiLocker API, manual review fallback, rejection notification workflows, and a complete compliance audit trail for regulatory requirements." },
  { q: "How secure is your MLM platform?", a: "We implement enterprise-grade security: 256-bit SSL encryption, two-factor authentication (2FA), role-based access control, IP whitelisting, DDoS protection, brute-force prevention, and immutable audit logs for all financial transactions. We also conduct security audits before every deployment." },
  { q: "Can the software handle international MLM businesses?", a: "Yes. Our platform supports 150+ currencies, 20+ languages (including RTL for Arabic/Hebrew), country-specific tax rules (GST, VAT, TDS), and timezone-aware reporting — making it globally ready from day one. Sub-admin panels with territory mapping are also available for franchise networks." },
  { q: "What kind of support and maintenance do you provide?", a: "We provide 1 year of dedicated technical maintenance covering bug fixes, security patches, and performance optimization. A built-in support ticket system, 24/7 helpdesk access, video training for admin users, and technical documentation are all included in every plan." },
  { q: "How long does it take to develop and deploy the software?", a: "Standard MLM software deployment takes 4–8 weeks depending on plan complexity and customization requirements. We provide full deployment assistance including server provisioning, CI/CD pipeline setup, SSL configuration, database migration, and hands-on go-live support." },
  { q: "Will I get the source code?", a: "Source code is delivered as per the agreed terms in your contract, protected under NDA. All deliverables are version-tagged with Git, documented with technical architecture guides and API references, and built on modular, future-upgrade-ready architecture for long-term ownership." },
];

// ─── ILLUSTRATION COMPONENT ─────────────────────────────────────────────────

function ServiceIllustration({ svc }) {
  return (
    <div
      className="relative w-full flex items-center justify-center overflow-hidden rounded-xl"
      style={{ background: svc.illBg, minHeight: 220 }}
    >
      {/* Background rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-40 h-40 rounded-full border opacity-10" style={{ borderColor: svc.illAccent }} />
        <div className="absolute w-60 h-60 rounded-full border opacity-5" style={{ borderColor: svc.illAccent }} />
      </div>
      {/* Floating dots */}
      <div className="absolute top-4 right-12 w-6 h-6 rounded-full opacity-70" style={{ background: svc.illAccent }} />
      <div className="absolute top-10 left-8 w-3 h-3 rounded-full opacity-40" style={{ background: svc.illAccent }} />
      <div className="absolute bottom-6 right-6 w-4 h-4 opacity-50" style={{ background: svc.illAccent, borderRadius: 3, transform: "rotate(45deg)" }} />
      {/* Center icon */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl"
          style={{ background: `${svc.illAccent}22`, border: `2px solid ${svc.illAccent}44` }}>
          <svc.Icon size={40} color={svc.illAccent} />
        </div>
        <div className="text-center">
          <p className="text-white font-black text-xl leading-none tracking-wider">{svc.illLabel}</p>
          <p className="font-bold text-sm tracking-widest" style={{ color: svc.illAccent }}>{svc.illSub}</p>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans">
<Cta/>
      {/* ── HERO BANNER ── */}
      <div className="relative w-full overflow-hidden" style={{ height: 300 }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #f97316 0%, #fb923c 50%, #f97316 100%)" }} />
        <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 1400 300" fill="none" preserveAspectRatio="xMidYMid slice">
          {[
            [200,80],[380,40],[560,100],[740,50],[920,80],[1100,40],[1280,80],
            [300,180],[480,210],[660,170],[840,200],[1020,180],[1200,210],
            [120,250],[400,260],[620,250],[900,260],[1150,250],
          ].map(([cx,cy],i)=>(
            <g key={i} transform={`translate(${cx},${cy})`}>
              <rect x="-14" y="-14" width="28" height="28" rx="4" fill={i===0?"#8b1a1a":"#374151"} opacity={i===0?1:0.7}/>
              <circle cx="0" cy="-3" r="5" fill={i===0?"#f87171":"#9ca3af"} opacity="0.9"/>
              <path d="M-7 10 Q0 5 7 10" stroke={i===0?"#f87171":"#9ca3af"} strokeWidth="1.5" fill="none"/>
            </g>
          ))}
          {[[200,80,380,40],[200,80,300,180],[380,40,560,100],[560,100,480,210],[560,100,740,50],[740,50,660,170],[740,50,920,80],[920,80,840,200],[920,80,1100,40],[1100,40,1020,180],[1280,80,1200,210],[300,180,480,210],[480,210,660,170],[660,170,840,200],[840,200,1020,180]].map(([x1,y1,x2,y2],i)=>(
            <path key={i} d={`M${x1},${y1} L${x2},${y2}`} stroke="#d97706" strokeWidth="1.5" opacity="0.5"/>
          ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-24 gap-3">
         
          <h1 className="text-white font-extrabold text-5xl tracking-widest drop-shadow-2xl">SERVICES</h1>
          <p className="text-orange-100 text-sm max-w-md text-center px-4">Complete MLM software solutions — from development to deployment, mobile to global.</p>
        </div>
      </div>

      {/* ── SUBTITLE ── */}
      <div className="py-10 text-center px-4">
        <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
          <BarChart3 size={16} /> Software Services
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 max-w-2xl mx-auto leading-tight">
          Inefficient Process? Our Software{" "}
          <span className="text-orange-600">Solves It All</span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
          From MLM plan automation to global e-commerce — we build everything your network marketing business needs.
        </p>
      </div>

      {/* ── SERVICE CARDS ── */}
      <div className="max-w-5xl mx-auto px-4 pb-10 flex flex-col gap-4">
        {services.map((svc, idx) => {
          const isOpen = selectedService === idx;
          return (
            <div key={svc.id} className="rounded-2xl overflow-hidden shadow-md"
              style={{ background: "linear-gradient(135deg, #f97316 0%, #fb923c 50%, #f97316 100%)" }}>

              {/* Header row — always visible */}
              <div className="flex items-center gap-4 p-5 cursor-pointer" onClick={() => setSelectedService(isOpen ? null : idx)}>
                {/* Icon box */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${svc.iconBg}`}>
                  <svc.Icon size={28} color="white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-lg sm:text-xl">{svc.title}</h3>
                  <p className="text-orange-100 text-sm mt-0.5 line-clamp-2">{svc.shortDesc}</p>
                </div>
                {/* Arrow */}
                <div className={`w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-90 border-white/60" : ""}`}>
                  <ChevronRight color="white" size={14} />
                </div>
              </div>

              {/* Expanded Detail */}
              <div className={`transition-all duration-500 overflow-hidden ${isOpen ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="border-t border-white/10 mx-5" />

                <div className="p-5 flex flex-col gap-6">
                  {/* Top: illustration + overview */}
                  <div className="flex flex-col md:flex-row gap-5">
                    {/* Illustration */}
                    <div className="w-full md:w-72 flex-shrink-0">
                      <ServiceIllustration svc={svc} />
                    </div>
                    {/* Overview + stats */}
                    <div className="flex-1 flex flex-col gap-4">
                      <p className="text-orange-100 text-sm leading-relaxed">{svc.overview}</p>
                      {/* Stats grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {svc.stats.map((st, i) => (
                          <div key={i} className="bg-white/10 rounded-xl p-3 flex flex-col items-center text-center gap-1">
                            <st.Icon size={18} color="white" className="opacity-70" />
                            <p className="text-white font-extrabold text-base leading-tight">{st.value}</p>
                            <p className="text-orange-200 text-xs leading-tight">{st.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Features grid */}
                  <div>
                    <p className="text-white font-bold text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Layers size={12} /> Key Features
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {svc.features.map((feat, i) => (
                        <div key={i} className="bg-white/10 rounded-xl p-4 flex gap-3 items-start hover:bg-white/15 transition-colors">
                          <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: `${svc.accentColor}33` }}>
                            <feat.Icon size={18} style={{ color: svc.accentColor }} />
                          </div>
                          <div>
                            <p className="text-white font-semibold text-sm">{feat.title}</p>
                            <p className="text-orange-200 text-xs mt-0.5 leading-relaxed">{feat.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process timeline */}
                  <div>
                    <p className="text-white font-bold text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Settings size={12} /> How We Deliver This
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {svc.process.map((p, i) => (
                        <div key={i} className="bg-white/10 rounded-xl p-4 relative">
                          <span
                            className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mb-2"
                            style={{ background: svc.accentColor, color: "#0a0a1a" }}
                          >
                            {i + 1}
                          </span>
                          <p className="text-white font-semibold text-sm">{p.step}</p>
                          <p className="text-orange-200 text-xs mt-1 leading-relaxed">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick checklist */}
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {svc.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={14} color={svc.accentColor} />
                        <span className="text-orange-100 text-sm">{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-3 pt-1">
                    <button className="flex items-center gap-2 bg-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-orange-50 transition shadow"
                      style={{ color: "#f97316" }}>
                      Get Free Consultation <ArrowRight size={12} />
                    </button>
                    <button className="flex items-center gap-2 border border-white/40 text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-white/10 transition">
                      View Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── FAQ SECTION ── */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
              <Headset size={14} /> Got Questions?
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base">Everything you need to know about our MLM software services.</p>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <div key={idx}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${openFaq === idx ? "border-orange-400 shadow-md bg-white" : "border-gray-200 bg-white"}`}>
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${openFaq === idx ? "bg-orange-600 text-white" : "bg-orange-50 text-orange-600"}`}>
                      {idx + 1}
                    </span>
                    <span className={`font-semibold text-sm sm:text-base ${openFaq === idx ? "text-orange-700" : "text-gray-800"}`}>
                      {faq.q}
                    </span>
                  </div>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === idx ? "bg-orange-600" : "bg-gray-100"}`}>
                    {openFaq === idx
                      ? <Minus size={12} color="white" />
                      : <Plus size={12} color="#374151" />
                    }
                  </span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === idx ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed pl-16">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA below FAQ */}
          <div className="mt-10 text-center">
            <p className="text-gray-600 text-sm mb-4">Still have questions? Our team is available 24/7.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:+917024031779"
                className="flex items-center gap-2 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition">
                <Phone size={14} /> +917024031779
              </a>
              <button className="flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition">
                <MessageCircle size={16} /> Chat with us
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}