import { useEffect, useState } from "react";
import * as Lucide from "lucide-react";
import Cta from "../Home/cta"
const iconMap = {
  "👤": Lucide.User,
  "💳": Lucide.CreditCard,
  "📊": Lucide.BarChart3,
  "📈": Lucide.TrendingUp,
  "💰": Lucide.CircleDollarSign,
  "📦": Lucide.Package,
  "🧠": Lucide.Brain,
  "🌳": Lucide.TreePine,
  "👥": Lucide.Users,
  "🛍️": Lucide.ShoppingBag,
  "📋": Lucide.FileText,
  "🧮": Lucide.Calculator,
  "💸": Lucide.Banknote,
  "🗂️": Lucide.FolderKanban,
  "⚙️": Lucide.Settings,
  "🏷️": Lucide.Tag,
  "🌍": Lucide.Globe,
  "🧾": Lucide.FileCheck2,
  "🔑": Lucide.KeyRound,
  "👛": Lucide.Wallet,
  "🎧": Lucide.Headphones,
  "➖": Lucide.MinusCircle,
  "🔔": Lucide.BellRing,
  "🚚": Lucide.Truck,
  "🛒": Lucide.ShoppingCart,
  "🪪": Lucide.IdCard,
  "📚": Lucide.BookOpen,
  "🏭": Lucide.Factory,
  "🔐": Lucide.Lock,
  "🏪": Lucide.Store,
  "✍️": Lucide.PenTool,
  "🎯": Lucide.Target,
  "🏆": Lucide.Trophy,
  "🛠️": Lucide.Wrench,
  "🏍️": Lucide.Motorbike,
  "⚡": Lucide.Zap,
  "📄": Lucide.FileText,
  "🎓": Lucide.GraduationCap,
  "🖼️": Lucide.Image,
  "📝": Lucide.NotebookPen,
  "💬": Lucide.MessageCircle,
  "📰": Lucide.Newspaper,
  "🎛️": Lucide.SlidersHorizontal,
  "💼": Lucide.Briefcase,
  "🔧": Lucide.Settings,
  "🖥️": Lucide.Monitor,
  "💻": Lucide.Computer,
  "🔄": Lucide.RefreshCw,
  "📶": Lucide.SatelliteDish,
  "🎁": Lucide.Gift,
  "🏢": Lucide.Building2,
  "📱": Lucide.Smartphone,
  "💾": Lucide.Database,
  "🏗️": Lucide.PanelsTopLeft,
  "🚢": Lucide.ShipWheel,
  "🤖": Lucide.Bot,
  "🍎": Lucide.Apple,
  "🌐": Lucide.Globe,
  "🚀": Lucide.Rocket,
};

const renderFeatureIcon = (iconKey, className = "h-5 w-5") => {
  const IconComponent = iconMap[iconKey] || Lucide.Sparkles;
  return <IconComponent className={className} />;
};

const allFeatures = [
  {
    id: 1, title: "Seamless Sign-Up", icon: "👤",
    tags: ["Onboarding", "User Experience", "Fast Setup"],
    checks: ["Social login integration", "Referral tracking", "Auto-approval", "Mobile responsive"],
    desc: "Versatile, secure, and user-friendly onboarding experience within seconds. Members can join with just a few clicks, with minimal friction. Includes social login, referral tracking, and auto-approval workflows.",
    category: "e-commerce+mlm"
  },
  {
    id: 2, title: "Secure Payment Methods", icon: "💳",
    tags: ["Payments", "Security", "Gateway"],
    checks: ["Multiple gateways", "SSL encryption", "Auto reconciliation", "Fraud detection"],
    desc: "Robust, multi-gateway payment infrastructure supporting all major providers. Ensures PCI-DSS compliant transactions with real-time fraud detection and automatic reconciliation.",
    category: "e-commerce+mlm"
  },
  {
    id: 3, title: "Real-Time Dashboard", icon: "📊",
    tags: ["Analytics", "Live Data", "Insights"],
    checks: ["Live stats", "Custom widgets", "Export reports", "Role-based views"],
    desc: "Comprehensive real-time dashboard giving admins and members an instant view of performance metrics, sales trends, team growth, and commission summaries.",
    category: "e-commerce+mlm"
  },
  {
    id: 4, title: "Order & Sales Insights", icon: "📈",
    tags: ["Sales", "Analytics", "Reporting"],
    checks: ["Sales funnel tracking", "Order history", "Revenue charts", "Team performance"],
    desc: "Deep order and sales analytics to track conversion funnels, team performance, and revenue trends. Drill down by product, region, or distributor level.",
    category: "e-commerce+mlm"
  },
  {
    id: 5, title: "Commission Dashboard", icon: "💰",
    tags: ["Commission", "Earnings", "MLM"],
    checks: ["Earnings overview", "Downline commissions", "Pending payouts", "Commission history"],
    desc: "Unified commission dashboard for distributors and admins. Track earned, pending, and paid commissions with full transparency across all plan types.",
    category: "e-commerce+mlm"
  },
  {
    id: 6, title: "Smart Inventory", icon: "📦",
    tags: ["Inventory", "Stock", "Automation"],
    checks: ["Low stock alerts", "Auto reorder", "Batch tracking", "Warehouse sync"],
    desc: "Intelligent inventory management with real-time stock tracking, automated reorder points, batch management, and multi-warehouse synchronization.",
    category: "e-commerce+mlm"
  },
  {
    id: 7, title: "Business Intelligence", icon: "🧠",
    tags: ["BI", "Analytics", "AI"],
    checks: ["Trend analysis", "Predictive reports", "KPI tracking", "Custom dashboards"],
    desc: "Advanced BI tools powered by AI to deliver predictive analytics, trend identification, and actionable insights for strategic business decisions.",
    category: "e-commerce+mlm"
  },
  {
    id: 8, title: "Genealogy Tracking", icon: "🌳",
    tags: ["Downline", "Tree View", "MLM"],
    checks: ["Visual tree view", "Leg tracking", "Level filters", "Export genealogy"],
    desc: "Interactive visual genealogy tree for tracking your entire downline structure. Filter by level, leg, or status to understand team composition instantly.",
    category: "e-commerce+mlm"
  },
  {
    id: 9, title: "Member Management", icon: "👥",
    tags: ["Members", "CRM", "Admin"],
    checks: ["Profile management", "Status control", "Bulk actions", "Activity logs"],
    desc: "Complete member lifecycle management — from onboarding to suspension. Includes CRM-style profiles, communication tools, and bulk administrative actions.",
    category: "e-commerce+mlm"
  },
  {
    id: 10, title: "Product Management", icon: "🛍️",
    tags: ["Products", "Catalog", "SKU"],
    checks: ["SKU management", "Variants & options", "Pricing tiers", "Rich media"],
    desc: "Full-featured product management with variant support, dynamic pricing tiers, rich media uploads, and BV/PV assignment for MLM compensation plans.",
    category: "e-commerce+mlm"
  },
  {
    id: 11, title: "Order Management", icon: "📋",
    tags: ["Orders", "Fulfillment", "Tracking"],
    checks: ["Order lifecycle", "Status tracking", "Returns & refunds", "Invoice generation"],
    desc: "End-to-end order management from placement to delivery. Manage fulfillment workflows, handle returns/refunds, and auto-generate invoices.",
    category: "e-commerce+mlm"
  },
  {
    id: 12, title: "Commission Calc", icon: "🧮",
    tags: ["Calculation", "Automation", "MLM"],
    checks: ["Rule-based engine", "Real-time calc", "Multi-level", "Override support"],
    desc: "Powerful rule-based commission calculation engine supporting all MLM plan types. Processes multi-level calculations in real time with override and bonus support.",
    category: "e-commerce+mlm"
  },
  {
    id: 13, title: "Commission Payout", icon: "💸",
    tags: ["Payout", "Automation", "Banking"],
    checks: ["Scheduled payouts", "Bank transfer", "E-wallet credit", "Tax deductions"],
    desc: "Automated commission payout system supporting bank transfers, e-wallet credits, and scheduled disbursements with automatic tax deduction handling.",
    category: "e-commerce+mlm"
  },
  {
    id: 14, title: "Multiple Plan Types", icon: "🗂️",
    tags: ["Binary", "Matrix", "Unilevel"],
    checks: ["Binary plan", "Matrix plan", "Unilevel plan", "Board plan"],
    desc: "Support for all major MLM compensation structures — Binary, Matrix, Unilevel, Board, Stair-Step, and Hybrid plans — configurable from the admin panel.",
    category: "e-commerce+mlm"
  },
  {
    id: 15, title: "Commission Settings", icon: "⚙️",
    tags: ["Configuration", "Rules", "Admin"],
    checks: ["Rate configuration", "Capping rules", "Eligibility criteria", "Plan switching"],
    desc: "Granular commission settings for defining rates, caps, eligibility criteria, and plan-specific rules. Admin-controlled with audit log for every change.",
    category: "e-commerce+mlm"
  },
  {
    id: 16, title: "Commission Types", icon: "🏷️",
    tags: ["Referral", "Matching", "Level"],
    checks: ["Referral bonus", "Level income", "Matching bonus", "Leadership bonus"],
    desc: "Configure multiple commission types including referral bonuses, level income, matching bonuses, and leadership rewards to build compelling comp plans.",
    category: "e-commerce+mlm"
  },
  {
    id: 17, title: "Global Expansion", icon: "🌍",
    tags: ["Multi-currency", "Multi-language", "International"],
    checks: ["150+ currencies", "20+ languages", "Region settings", "Timezone support"],
    desc: "Built for global MLM businesses with support for 150+ currencies, 20+ languages, regional tax rules, and timezone-aware reporting.",
    category: "e-commerce+mlm"
  },
  {
    id: 18, title: "Tax Management", icon: "🧾",
    tags: ["GST", "VAT", "Compliance"],
    checks: ["GST/VAT support", "Auto calculation", "Tax reports", "Jurisdiction rules"],
    desc: "Comprehensive tax management for GST, VAT, and other regional tax structures. Auto-calculates applicable taxes and generates compliance-ready reports.",
    category: "e-commerce+mlm"
  },
  {
    id: 19, title: "E-Pin Management", icon: "🔑",
    tags: ["E-Pin", "Activation", "Security"],
    checks: ["Pin generation", "Bulk issuance", "Transfer control", "Usage tracking"],
    desc: "Full E-Pin lifecycle management — generation, bulk issuance, transfer between members, and real-time usage tracking for product activations.",
    category: "e-commerce+mlm"
  },
  {
    id: 20, title: "E-Wallet", icon: "👛",
    tags: ["Wallet", "Funds", "Transfer"],
    checks: ["Fund deposit", "Wallet transfer", "Withdrawal request", "Transaction history"],
    desc: "Integrated e-wallet for seamless fund management — top-up, peer transfers, commission credit, and withdrawal requests with full transaction history.",
    category: "e-commerce+mlm"
  },
  {
    id: 21, title: "Support & Grievance", icon: "🎧",
    tags: ["Tickets", "Helpdesk", "Resolution"],
    checks: ["Ticket system", "Priority levels", "SLA tracking", "Email notifications"],
    desc: "Built-in helpdesk with ticket-based support, priority queues, SLA tracking, and automated email notifications to keep members informed.",
    category: "e-commerce+mlm"
  },
  {
    id: 22, title: "Commission Deduction", icon: "➖",
    tags: ["Deductions", "Charges", "Policy"],
    checks: ["Admin charges", "TDS deduction", "Joining fees", "Penalty rules"],
    desc: "Configurable deduction rules for admin charges, TDS, joining fees, and penalty structures applied automatically at commission payout time.",
    category: "e-commerce+mlm"
  },
  {
    id: 23, title: "Notification System", icon: "🔔",
    tags: ["Alerts", "Email", "SMS"],
    checks: ["Email alerts", "SMS notifications", "In-app push", "Custom templates"],
    desc: "Multi-channel notification system covering email, SMS, and in-app push alerts. Fully customizable templates triggered by business events.",
    category: "e-commerce+mlm"
  },
  {
    id: 24, title: "Shipping Management", icon: "🚚",
    tags: ["Shipping", "Logistics", "Tracking"],
    checks: ["Carrier integration", "Rate calculation", "Tracking updates", "Label printing"],
    desc: "Integrated shipping management with major carrier APIs, real-time rate calculation, tracking updates pushed to customers, and bulk label printing.",
    category: "e-commerce+mlm"
  },
  {
    id: 25, title: "Shopping Cart", icon: "🛒",
    tags: ["Cart", "Checkout", "UX"],
    checks: ["Persistent cart", "Coupon codes", "Upsell prompts", "Quick checkout"],
    desc: "Seamless shopping cart with persistent sessions, coupon/promo code support, upsell prompts, and optimized one-page checkout for higher conversions.",
    category: "e-commerce+mlm"
  },
  {
    id: 26, title: "KYC Management", icon: "🪪",
    tags: ["KYC", "Verification", "Compliance"],
    checks: ["Document upload", "Auto verification", "Rejection workflow", "Audit trail"],
    desc: "End-to-end KYC verification workflow with document uploads, automated checks, manual review fallback, rejection notifications, and full audit trail.",
    category: "e-commerce+mlm"
  },
  {
    id: 27, title: "Catalog Management", icon: "📚",
    tags: ["Catalog", "Categories", "SEO"],
    checks: ["Category tree", "Bulk upload", "SEO fields", "Custom attributes"],
    desc: "Flexible product catalog management with hierarchical categories, bulk CSV upload, SEO metadata fields, and custom attribute templates.",
    category: "e-commerce+mlm"
  },
  {
    id: 28, title: "Inventory Management", icon: "🏭",
    tags: ["Stock", "Warehouse", "Audit"],
    checks: ["Multi-warehouse", "Stock adjustments", "Audit logs", "Expiry tracking"],
    desc: "Multi-warehouse inventory with real-time stock levels, manual adjustments, expiry date tracking, and comprehensive inventory audit logs.",
    category: "e-commerce+mlm"
  },
  {
    id: 29, title: "Security Management", icon: "🔐",
    tags: ["Security", "2FA", "Roles"],
    checks: ["2FA support", "Role-based access", "IP whitelisting", "Activity logs"],
    desc: "Enterprise-grade security with two-factor authentication, role-based access control, IP whitelisting, brute-force protection, and detailed activity logs.",
    category: "e-commerce+mlm"
  },
  {
    id: 30, title: "Seller Management", icon: "🏪",
    tags: ["Marketplace", "Sellers", "Commissions"],
    checks: ["Seller onboarding", "Product approval", "Commission splits", "Seller analytics"],
    desc: "Multi-seller marketplace capabilities — onboard vendors, approve products, configure commission splits, and provide sellers with their own analytics dashboard.",
    category: "e-commerce+mlm"
  },
  {
    id: 31, title: "Content Management", icon: "✍️",
    tags: ["CMS", "Pages", "SEO"],
    checks: ["Page builder", "Media library", "Version history", "SEO tools"],
    desc: "Flexible CMS for managing landing pages, announcements, and legal content. Includes a visual page builder, media library, and built-in SEO optimization tools.",
    category: "e-commerce+mlm"
  },
  {
    id: 32, title: "Smart Promotions", icon: "🎯",
    tags: ["Promotions", "Discounts", "Coupons"],
    checks: ["Promo rules engine", "Flash sales", "Bundle deals", "Loyalty points"],
    desc: "Rules-based promotions engine supporting flash sales, bundle deals, percentage/fixed discounts, and loyalty point campaigns with targeting conditions.",
    category: "e-commerce+mlm"
  },
  {
    id: 33, title: "Achievement & Reward", icon: "🏆",
    tags: ["Gamification", "Rewards", "Badges"],
    checks: ["Rank system", "Badges", "Milestone rewards", "Leaderboards"],
    desc: "Gamified achievement system with rank advancements, digital badges, milestone-triggered rewards, and competitive leaderboards to motivate distributors.",
    category: "e-commerce+mlm"
  },
  {
    id: 34, title: "Advanced Management", icon: "🛠️",
    tags: ["Admin", "Advanced", "Control"],
    checks: ["Bulk operations", "Scheduled tasks", "API access", "Audit trails"],
    desc: "Advanced admin controls for bulk operations, scheduled automated tasks, REST API access for integrations, and comprehensive audit trails.",
    category: "e-commerce+mlm"
  },
  {
    id: 35, title: "Delivery Agent", icon: "🏍️",
    tags: ["Delivery", "Logistics", "Tracking"],
    checks: ["Agent assignment", "Route optimization", "Proof of delivery", "Real-time tracking"],
    desc: "Manage last-mile delivery with agent assignment, route optimization, proof of delivery capture, and real-time customer-facing tracking.",
    category: "e-commerce+mlm"
  },
  {
    id: 36, title: "Recharge & Wallet", icon: "⚡",
    tags: ["Recharge", "Top-up", "Services"],
    checks: ["Mobile recharge", "DTH recharge", "Bill payment", "Commission on recharge"],
    desc: "Integrated recharge and bill payment services — mobile, DTH, utility bills — with MLM commission generation on every successful transaction.",
    category: "e-commerce+mlm"
  },
  {
    id: 37, title: "Document Management", icon: "📄",
    tags: ["Documents", "Storage", "Compliance"],
    checks: ["Secure storage", "Version control", "Access permissions", "e-Signature"],
    desc: "Centralized document repository with version control, role-based access permissions, and e-signature support for contracts and agreements.",
    category: "e-commerce+mlm"
  },
  {
    id: 38, title: "Event & Training", icon: "🎓",
    tags: ["Events", "Training", "LMS"],
    checks: ["Event calendar", "Online training", "Attendance tracking", "Certifications"],
    desc: "Built-in event management and LMS for scheduling trainings, webinars, and events. Track attendance and issue digital certifications on completion.",
    category: "e-commerce+mlm"
  },
  {
    id: 39, title: "Gallery Management", icon: "🖼️",
    tags: ["Media", "Gallery", "Photos"],
    checks: ["Photo albums", "Video gallery", "Tag & search", "Public/private"],
    desc: "Rich media gallery for team photos, product showcases, and event memories. Supports albums, tagging, and public/private visibility settings.",
    category: "e-commerce+mlm"
  },
  {
    id: 40, title: "Blog Management", icon: "📝",
    tags: ["Blog", "Content", "SEO"],
    checks: ["Rich text editor", "Categories & tags", "Author roles", "Comment moderation"],
    desc: "Full-featured blog platform with a rich text editor, category/tag taxonomy, multi-author support, and comment moderation.",
    category: "e-commerce+mlm"
  },
  {
    id: 41, title: "Forum Management", icon: "💬",
    tags: ["Community", "Forum", "Engagement"],
    checks: ["Thread creation", "Moderation tools", "Voting", "Pinned posts"],
    desc: "Community forum for distributors to share tips, ask questions, and engage. Includes moderation tools, voting, pinned announcements, and reporting.",
    category: "e-commerce+mlm"
  },
  {
    id: 42, title: "News Management", icon: "📰",
    tags: ["News", "Announcements", "Updates"],
    checks: ["Publish/schedule", "Category filters", "Breaking news banner", "Email push"],
    desc: "News and announcements module with scheduling, categories, breaking news banners, and automatic email newsletter push to members.",
    category: "e-commerce+mlm"
  },
  {
    id: 43, title: "Poll Management", icon: "📊",
    tags: ["Polls", "Surveys", "Feedback"],
    checks: ["Custom polls", "Timed expiry", "Result charts", "Anonymous voting"],
    desc: "Engage your community with custom polls and surveys. Set expiry times, display live result charts, and support anonymous voting options.",
    category: "e-commerce+mlm"
  },
  {
    id: 44, title: "Media Settings", icon: "🎛️",
    tags: ["Media", "Storage", "CDN"],
    checks: ["CDN integration", "Compression", "Format conversion", "Access control"],
    desc: "Centralized media settings for CDN integration, automatic image compression, format conversion, and access control for sensitive media assets.",
    category: "e-commerce+mlm"
  },
  {
    id: 45, title: "Expense Management", icon: "💼",
    tags: ["Expenses", "Finance", "Reports"],
    checks: ["Expense logging", "Category mapping", "Approval workflow", "Export reports"],
    desc: "Track operational expenses with category mapping, approval workflows, and exportable financial reports for accounting and auditing purposes.",
    category: "e-commerce+mlm"
  },
  {
    id: 46, title: "General Settings", icon: "🔧",
    tags: ["Settings", "Configuration", "Branding"],
    checks: ["Site branding", "Email config", "Date/time formats", "Currency defaults"],
    desc: "Core platform settings — site branding, email server config, date/time/currency defaults — all manageable from a single admin interface.",
    category: "e-commerce+mlm"
  },
  {
    id: 47, title: "Configuration Settings", icon: "⚙️",
    tags: ["Config", "System", "Advanced"],
    checks: ["Feature toggles", "API keys", "Webhook config", "Environment settings"],
    desc: "Advanced configuration panel for enabling/disabling features, managing API keys, webhook endpoints, and environment-specific settings.",
    category: "e-commerce+mlm"
  },
  {
    id: 48, title: "System Management", icon: "🖥️",
    tags: ["System", "Health", "Maintenance"],
    checks: ["System health", "Backup & restore", "Log viewer", "Cron management"],
    desc: "System administration tools including real-time health monitoring, scheduled backup/restore, log viewer, and cron job management.",
    category: "e-commerce+mlm"
  },
  {
    id: 49, title: "AI Optimization", icon: "🤖",
    tags: ["AI", "Automation", "Smart"],
    checks: ["AI product recs", "Churn prediction", "Smart promotions", "Auto-reports"],
    desc: "AI-powered modules for personalized product recommendations, churn risk prediction, smart promotional triggers, and automated performance reports.",
    category: "e-commerce+mlm"
  },
  {
    id: 50, title: "Compliance Software", icon: "🛡️",
    tags: ["Compliance", "Legal", "Audit"],
    checks: ["Regulatory reports", "Data privacy", "Consent management", "Audit trails"],
    desc: "Built-in compliance tools for regulatory reporting, GDPR/data privacy management, consent tracking, and immutable audit trails for all transactions.",
    category: "e-commerce+mlm"
  },
];

const words = ["Services", "Solutions", "Platform", "Features"];
 


const webDevServices = [
  { id: "w1", title: "Custom MLM Software Development", icon: "💻", tags: ["Custom", "MLM", "Development"], checks: ["Tailored architecture", "Scalable codebase", "Source code delivery", "Future-ready"], desc: "Fully customized MLM software built from scratch to match your exact business model, compensation plan, and branding requirements." },
  { id: "w2", title: "Admin Panel", icon: "🖥️", tags: ["Admin", "Dashboard", "Control"], checks: ["Full control panel", "Role management", "Reports & analytics", "System settings"], desc: "Comprehensive admin dashboard giving full control over members, products, commissions, and all system configurations." },
  { id: "w3", title: "Sub Admin Panel", icon: "👤", tags: ["Sub Admin", "Roles", "Delegation"], checks: ["Delegated access", "Permission control", "Activity logging", "Regional admin"], desc: "Sub-admin panels with granular permission control for delegating management responsibilities across regions or departments." },
  { id: "w4", title: "User Panel", icon: "👥", tags: ["User", "Member", "Portal"], checks: ["Personal dashboard", "Downline view", "Order history", "Commission tracker"], desc: "Feature-rich member portal with personal dashboards, downline genealogy, order management, and real-time commission tracking." },
  { id: "w5", title: "Matching Income Module", icon: "🔄", tags: ["Matching", "Income", "Bonus"], checks: ["Pair matching", "Binary support", "Cap enforcement", "Auto calculation"], desc: "Automated matching income calculation for binary and other plan types with configurable caps and real-time processing." },
  { id: "w6", title: "Level Income Module", icon: "📶", tags: ["Level", "Income", "Depth"], checks: ["Multi-level depth", "Percentage config", "Eligibility rules", "Auto payout"], desc: "Level-based income distribution across configurable depths with eligibility criteria and automated payout processing." },
  { id: "w7", title: "Reward Income Module", icon: "🎁", tags: ["Rewards", "Bonus", "Incentives"], checks: ["Milestone rewards", "Auto trigger", "Custom rewards", "Leaderboard"], desc: "Automated reward distribution based on performance milestones, with custom reward types and leaderboard integration." },
  { id: "w8", title: "Franchise Management Module", icon: "🏢", tags: ["Franchise", "Multi-branch", "Network"], checks: ["Branch setup", "Territory mapping", "Franchise reports", "Revenue split"], desc: "Manage franchise networks with territory mapping, branch-level reporting, and automated revenue split calculations." },
  { id: "w9", title: "Inventory Management Module", icon: "📦", tags: ["Inventory", "Stock", "Warehouse"], checks: ["Real-time stock", "Multi-warehouse", "Low stock alerts", "Batch tracking"], desc: "Real-time inventory tracking across multiple warehouses with automated low-stock alerts and batch management." },
  { id: "w10", title: "Repurchase Module", icon: "🔁", tags: ["Repurchase", "Subscription", "Retention"], checks: ["Auto repurchase", "Subscription plans", "Reminder alerts", "Loyalty rewards"], desc: "Drive recurring revenue with automated repurchase workflows, subscription plans, and loyalty reward integration." },
  { id: "w11", title: "Responsive Business Website", icon: "🌐", tags: ["Website", "Responsive", "Landing Page"], checks: ["Mobile-first", "SEO optimized", "Fast loading", "CMS ready"], desc: "Professionally designed, fully responsive business website optimized for SEO, speed, and conversion — CMS-powered for easy content updates." },
  { id: "w12", title: "Android & iOS Mobile Application", icon: "📱", tags: ["Mobile App", "Android", "iOS"], checks: ["Cross-platform", "Push notifications", "Offline mode", "App store ready"], desc: "Native-quality mobile applications for both Android and iOS with push notifications, offline mode, and streamlined mobile experience." },
  { id: "w13", title: "Payment Gateway Integration", icon: "💳", tags: ["Payments", "Gateway", "Multi-bank"], checks: ["Razorpay", "PayU", "Stripe", "Crypto support"], desc: "Integration with all major payment gateways including Razorpay, PayU, Stripe, and select cryptocurrency payment providers." },
  { id: "w14", title: "Support Ticket System", icon: "🎧", tags: ["Support", "Helpdesk", "Tickets"], checks: ["Ticket creation", "Priority tiers", "SLA tracking", "Auto-responses"], desc: "Full-featured helpdesk with multi-priority ticket queues, SLA management, and automated response templates for efficient support." },
  { id: "w15", title: "KYC Verification Module", icon: "🪪", tags: ["KYC", "Identity", "Compliance"], checks: ["Document upload", "Auto verification", "Aadhar/PAN check", "Audit trail"], desc: "Streamlined KYC with document uploads, automated Aadhar/PAN verification, manual review fallback, and compliance audit trails." },
  { id: "w16", title: "Product Shipping Management", icon: "🚚", tags: ["Shipping", "Carriers", "Tracking"], checks: ["Carrier APIs", "Rate calculation", "Live tracking", "Label printing"], desc: "Shipping management integrated with major carriers for real-time rate calculation, automated label printing, and live order tracking." },
  { id: "w17", title: "BDI Module", icon: "📊", tags: ["BDI", "Business Dev", "Analytics"], checks: ["Business development index", "Performance scoring", "Tier mapping", "Growth reports"], desc: "Business Development Index module for performance scoring, tier-based mapping, and growth analytics for distributors." },
  { id: "w18", title: "Secure & Responsive System", icon: "🔐", tags: ["Security", "Performance", "Reliability"], checks: ["End-to-end encryption", "2FA", "DDoS protection", "99.9% uptime"], desc: "Enterprise-grade security architecture with end-to-end encryption, two-factor authentication, DDoS protection, and 99.9% uptime SLA." },
  { id: "w19", title: "Deployment Assistance", icon: "🚀", tags: ["Deployment", "DevOps", "Launch"], checks: ["Server setup", "CI/CD pipeline", "SSL config", "Go-live support"], desc: "Full deployment assistance including server provisioning, CI/CD pipeline setup, SSL configuration, and hands-on go-live support." },
  { id: "w20", title: "1 Year Technical Maintenance", icon: "🛠️", tags: ["Maintenance", "Support", "Updates"], checks: ["Bug fixes", "Security patches", "Performance tuning", "Priority support"], desc: "12 months of dedicated technical maintenance covering bug fixes, security patches, performance optimization, and priority support access." },
  { id: "w21", title: "Basic User Training", icon: "🎓", tags: ["Training", "Onboarding", "Documentation"], checks: ["Admin training", "Video guides", "Live sessions", "Q&A support"], desc: "Structured onboarding training for admin users covering all core modules, supplemented by video guides and live Q&A sessions." },
  { id: "w22", title: "Source Code (As Per Agreement)", icon: "💾", tags: ["Source Code", "IP", "Ownership"], checks: ["Full source delivery", "NDA protected", "Version tagged", "Documentation included"], desc: "Source code delivered as per agreed terms — fully version-tagged, documented, and transferred under NDA for your ownership." },
  { id: "w23", title: "Technical Documentation", icon: "📄", tags: ["Documentation", "API Docs", "Guides"], checks: ["API reference", "User manuals", "Architecture docs", "Integration guides"], desc: "Comprehensive technical documentation including API reference, user manuals, system architecture diagrams, and third-party integration guides." },
  { id: "w24", title: "Future Upgrade Ready Architecture", icon: "🏗️", tags: ["Architecture", "Scalability", "Upgrades"], checks: ["Modular design", "Microservices ready", "Backward compatible", "Plugin support"], desc: "Designed for longevity — modular, microservices-ready architecture that supports future feature additions without breaking existing functionality." },
  { id: "w25", title: "Ships Wallet", icon: "🚢", tags: ["Wallet", "Transfers", "Shipping Credits"], checks: ["Shipping credits", "Wallet top-up", "Auto deduction", "Balance alerts"], desc: "Dedicated shipping wallet for managing shipping credits — top-up, auto-deduction per shipment, and balance threshold alerts for uninterrupted logistics." },
];

const mobileAppFeatures = [
  { id: "m1", title: "Android App Development", icon: "🤖", tags: ["Android", "Native", "Play Store"], checks: ["Native Android", "Material Design", "Push notifications", "Offline mode"], desc: "Custom native Android application with Material Design, push notifications, offline mode, and full Play Store deployment support." },
  { id: "m2", title: "iOS App Development", icon: "🍎", tags: ["iOS", "Swift", "App Store"], checks: ["Native iOS", "Apple guidelines", "Face ID/Touch ID", "App Store ready"], desc: "Native iOS application built to Apple's design guidelines with Face ID/Touch ID, smooth animations, and App Store submission support." },
  { id: "m3", title: "Cross-Platform App", icon: "📱", tags: ["React Native", "Flutter", "Cross-Platform"], checks: ["Single codebase", "Near-native perf", "Platform adaptive UI", "Cost effective"], desc: "Cross-platform mobile development using React Native or Flutter — single codebase, near-native performance, and platform-adaptive UI." },
  { id: "m4", title: "Mobile Dashboard", icon: "📊", tags: ["Dashboard", "Mobile", "Analytics"], checks: ["Sales overview", "Commission tracker", "Team stats", "Quick actions"], desc: "Mobile-optimized dashboard for distributors to monitor sales, commissions, and team performance on the go with quick action shortcuts." },
  { id: "m5", title: "Mobile Wallet & Payments", icon: "💳", tags: ["Mobile Payments", "Wallet", "UPI"], checks: ["UPI integration", "Wallet top-up", "Instant transfer", "Transaction history"], desc: "Mobile-first wallet and payment experience with UPI, instant transfers, and full transaction history available at a glance." },
  { id: "m6", title: "Push Notifications", icon: "🔔", tags: ["Notifications", "Alerts", "Engagement"], checks: ["Order alerts", "Commission alerts", "Promotional push", "Silent notifications"], desc: "Smart push notification system with segmented delivery for order updates, commission alerts, promotional campaigns, and silent background sync." },
  { id: "m7", title: "Mobile KYC & Onboarding", icon: "🪪", tags: ["KYC", "Mobile Onboarding", "Camera"], checks: ["Camera capture", "Document scan", "Face match", "Instant approval"], desc: "Camera-powered mobile KYC with document scanning, facial recognition matching, and instant approval workflows — no manual uploads needed." },
  { id: "m8", title: "App Analytics & Crash Reporting", icon: "📈", tags: ["Analytics", "Firebase", "Crash Reporting"], checks: ["User behavior", "Screen flows", "Crash reports", "Performance metrics"], desc: "Integrated app analytics and crash reporting (Firebase/Mixpanel) for tracking user behavior, screen flows, crashes, and performance metrics." },
];
const categories = [
  { key: "e-commerce+mlm", label: "E-Commerce + MLM", icon: "🛒", features: allFeatures },
  { key: "web-dev", label: "Web Development Services", icon: "🌐", features: webDevServices.map(f => ({ ...f, category: "web-dev" })) },
  { key: "mobile-app", label: "Mobile App", icon: "📱", features: mobileAppFeatures.map(f => ({ ...f, category: "mobile-app" })) },
];


const categoryMap = {
  "e-commerce+mlm": { label: "E-Commerce + MLM", color: "from-orange-600 to-indigo-700", accent: "bg-orange-100 text-orange-700", badge: "bg-orange-600" },
  "web-dev": { label: "Web Development Services", color: "from-orange-600 to-purple-700", accent: "bg-orange-100 text-orange-700", badge: "bg-orange-600" },
  "mobile-app": { label: "Mobile App", color: "from-orange-600 to-orange-700", accent: "bg-orange-100 text-orange-700", badge: "bg-orange-600" },
};


export default function MLMFeatures() {
  const [activeCategory, setActiveCategory] = useState("e-commerce+mlm");
  const [activeFeature, setActiveFeature] = useState(allFeatures[0]);

  const currentCat = categories.find(c => c.key === activeCategory);
  const catStyle = categoryMap[activeCategory];

  const handleCategoryChange = (catKey) => {
    const cat = categories.find(c => c.key === catKey);
    setActiveCategory(catKey);
    setActiveFeature(cat.features[0]);
  };


   const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
 
  useEffect(() => {
    const word = words[wordIndex];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);
 

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Cta/>
      {/* Header */}
     <section className="w-full  px-4 sm:px-8 pt-28 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
 
        {/* ── LEFT: Illustration Card ── */}
        <div className="relative w-full md:w-[480px] flex-shrink-0">
          {/* Card with dark orange gradient bg */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0a1628 0%, #0d2456 40%, #1a3a8f 70%, #0f2060 100%)",
              minHeight: "340px",
            }}
          >
            {/* Glow ring at bottom */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-20 rounded-full opacity-60"
              style={{
                background: "radial-gradient(ellipse, #3b82f6 0%, #6366f1 40%, transparent 70%)",
                filter: "blur(18px)",
              }}
            />
 
            {/* Platform / stage */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-56 h-8 rounded-full opacity-40"
              style={{ background: "radial-gradient(ellipse, #60a5fa 0%, transparent 70%)", filter: "blur(8px)" }} />
 
            {/* Monitor */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
              {/* Screen */}
              <div className="relative">
                <div
                  className="w-52 h-32 rounded-lg flex flex-col items-center justify-center shadow-2xl border-4"
                  style={{
                    background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                    borderColor: "#1a1a2e",
                  }}
                >
                  <p className="text-black font-bold text-sm leading-tight text-center px-3">MLM Software</p>
                  <p className="text-black font-extrabold text-xl leading-tight text-center">Features</p>
                </div>
                {/* Monitor base neck */}
                <div className="mx-auto w-4 h-5 bg-gray-800" />
                {/* Monitor stand */}
                <div className="mx-auto w-20 h-2 bg-gray-700 rounded" />
              </div>
            </div>
 
            {/* Green server stacks — right side */}
            <div className="absolute bottom-20 right-16 flex flex-col gap-1">
              {[0, 1, 2, 3].map(i => (
                <div
                  key={i}
                  className="w-14 h-4 rounded flex items-center px-2 gap-1"
                  style={{ background: "linear-gradient(90deg, #22c55e, #16a34a)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white opacity-60" />
                </div>
              ))}
            </div>
 
            {/* Gear wheel — bottom left */}
            <div className="absolute bottom-6 left-8 text-white/20 text-6xl select-none" style={{ lineHeight: 1 }}>⚙</div>
 
            {/* Floating icon circles */}
            {/* Code icon — top left */}
            <div className="absolute top-10 left-14">
              <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white/10"
                style={{ background: "linear-gradient(135deg, #06b6d4, #0891b2)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 6L2 12L8 18M16 6L22 12L16 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="w-1 h-8 bg-white/30 mx-auto rounded-full" />
            </div>
 
            {/* Eye / scan icon — top center */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white/10"
                style={{ background: "linear-gradient(135deg, #7c3aed, #4c1d95)" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="5" height="5" rx="1" stroke="white" strokeWidth="2"/>
                  <rect x="16" y="3" width="5" height="5" rx="1" stroke="white" strokeWidth="2"/>
                  <rect x="3" y="16" width="5" height="5" rx="1" stroke="white" strokeWidth="2"/>
                  <rect x="16" y="16" width="5" height="5" rx="1" stroke="white" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <div className="w-1 h-8 bg-white/30 mx-auto rounded-full" />
            </div>
 
            {/* Settings icon — top right */}
            <div className="absolute top-10 right-14">
              <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white/10"
                style={{ background: "linear-gradient(135deg, #1e3a8a, #1d4ed8)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/>
                  <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="w-1 h-8 bg-white/30 mx-auto rounded-full" />
            </div>
 
            {/* Cloud icon — left */}
            <div className="absolute top-28 left-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white/10"
                style={{ background: "linear-gradient(135deg, #ef4444, #b91c1c)" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
 
            {/* Globe icon — right */}
            <div className="absolute top-28 right-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white/10"
                style={{ background: "linear-gradient(135deg, #d97706, #b45309)" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
            </div>
 
            {/* Arc connector lines (SVG overlay) */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: "none" }}>
              {/* Arc */}
              <path d="M 80 260 Q 240 60 400 260" stroke="rgba(147,197,253,0.25)" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
 
          {/* Phone CTA — overlapping bottom-left */}
          <a
            href="tel:+917024031779"
            className="absolute -bottom-4 left-6 flex items-center gap-2 text-white font-bold text-sm px-5 py-3 rounded-full shadow-xl z-10 hover:scale-105 transition-transform"
            style={{ background: "linear-gradient(90deg, #f97316, #ea580c)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.71 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.97-.97a2 2 0 0 1 2.11-.45c.9.35 1.85.58 2.81.71A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            +917024031779
          </a>
        </div>
 
        {/* ── RIGHT: Text Content ── */}
        <div className="flex-1 flex flex-col gap-5 mt-6 md:mt-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit">
            <span
              className="flex items-center gap-2 text-orange-700 font-semibold text-sm px-4 py-1.5 rounded-full border border-orange-200"
              style={{ background: "linear-gradient(90deg, #eff6ff, #dbeafe)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#2563eb" stroke="#2563eb" strokeWidth="1"/>
              </svg>
              Next-Gen MLM
            </span>
          </div>
 
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            MLM Software{" "}
            <span className="text-orange-600">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
 
          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
            Your ultimate all-in-one solution built to revolutionize multi-level marketing with seamless automation, iron-clad security, and limitless scalability.
          </p>
 
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <button
              className="flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              style={{ background: "linear-gradient(90deg, #1d4ed8, #2563eb)" }}
            >
              {/* Play icon */}
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="white">
                  <path d="M0 0L10 6L0 12V0Z"/>
                </svg>
              </span>
              Explore Features
            </button>
 
            <button
              className="flex items-center gap-2 text-gray-700 font-semibold px-6 py-3 rounded-full border border-gray-300 bg-white hover:bg-gray-50 hover:-translate-y-0.5 transition-all shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#374151" strokeWidth="2"/>
                <path d="M12 8v4M12 16h.01" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              24/7 Support
            </button>
          </div>
        </div>
      </div>
 
      {/* ── ALL FEATURES label below ── */}
              
    </section>

      {/* Category Tabs */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 flex gap-1 overflow-x-auto py-2 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => handleCategoryChange(cat.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.key
                  ? `${catStyle.badge} text-white shadow-md`
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span className="flex-shrink-0">{renderFeatureIcon(cat.icon, "h-4 w-4")}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0 min-h-[80vh]">
        {/* Sidebar */}
        <aside className="w-full md:w-72 bg-white border-r border-gray-200 flex-shrink-0">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
              <span className="text-base">☰</span>
              <span>All Features</span>
             
            </div>
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
            {currentCat.features.map((feat, idx) => (
              <button
                key={feat.id}
                onClick={() => setActiveFeature(feat)}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 border-l-2 transition-all hover:bg-gray-50 ${
                  activeFeature?.id === feat.id
                    ? `border-orange-600 bg-orange-50/70`
                    : "border-transparent"
                }`}
              >
                <span className="text-base w-6 text-center flex-shrink-0">{renderFeatureIcon(feat.icon, "h-5 w-5")}</span>
                <span className={`text-sm font-medium truncate ${activeFeature?.id === feat.id ? "text-orange-700" : "text-gray-700"}`}>
                  {idx + 1}. {feat.title}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* Detail Panel */}
        <main className="flex-1 p-6 md:p-10">
          {activeFeature && (() => {
            const idx = currentCat.features.findIndex(f => f.id === activeFeature.id);
            return (
              <div className="max-w-2xl">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${catStyle.accent}`}>
                  {renderFeatureIcon(activeFeature.icon, "h-7 w-7")}
                </div>

                {/* Feature number */}
              

                {/* Title */}
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{activeFeature.title}</h2>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-6">{activeFeature.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeFeature.tags.map(tag => (
                    <span key={tag} className={`text-xs font-medium px-3 py-1 rounded-full border ${catStyle.accent} border-transparent`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Checks */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {activeFeature.checks.map(check => (
                    <div key={check} className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs text-white flex-shrink-0 ${catStyle.badge}`}>✓</span>
                      <span className="text-sm text-gray-700">{check}</span>
                    </div>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3 mt-10 pt-8 border-t border-gray-100">
                  <button
                    onClick={() => {
                      if (idx > 0) setActiveFeature(currentCat.features[idx - 1]);
                    }}
                    disabled={idx === 0}
                    className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => {
                      if (idx < currentCat.features.length - 1) setActiveFeature(currentCat.features[idx + 1]);
                    }}
                    disabled={idx === currentCat.features.length - 1}
                    className={`px-4 py-2 rounded-lg text-sm font-medium text-white ${catStyle.badge} hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition`}
                  >
                    Next →
                  </button>
                  </div>
              </div>
            );
          })()}
        </main>
      </div>

      {/* Floating CTA */}
      
      
    </div>
  );
}