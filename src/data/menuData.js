import {
  Building2,
  Users,
  Server,
  Globe2,
  Award,
  ClipboardList,
  Quote,
  ArrowLeftRight,
  GitBranch,
  Grid3x3,
  Layers,
  Network,
  Gift,
  HandCoins,
  TrendingUp,
  Workflow,
  Shuffle,
  Trophy,
  Repeat,
  Users2,
  Settings2,
  BarChart3,
  Bot,
  ShieldCheck,
  LineChart,
  Sparkles,
  MessageSquareText,
  Smartphone,
  FileCheck2,
  Gem,
} from 'lucide-react';

/**
 * Single source of truth for primary navigation.
 * Both <MegaMenu /> (desktop hover panels) and <MobileMenu /> (drawer accordion)
 * read from this file so the two never drift out of sync.
 */

export const aboutMenu = {
  label: 'About Us',
  path: '/about',
  columns: [
    {
      heading: 'Company',
      items: [
        {
          label: 'Company Profile',
          path: '/about/company-profile',
          icon: Building2,
          description: 'Our mission, leadership, and 10+ year track record.',
        },
        {
          label: 'Team',
          path: '/about/team',
          icon: Users,
          description: 'Meet the architects and engineers behind the platform.',
        },
        {
          label: 'Infrastructure',
          path: '/about/infrastructure',
          icon: Server,
          description: 'Cloud architecture built for uptime at global scale.',
        },
        {
          label: 'Global Reach',
          path: '/about/global-reach',
          icon: Globe2,
          description: 'Deployments live across 40+ countries.',
        },
      ],
    },
    {
      heading: 'Trust',
      items: [
        {
          label: 'Association',
          path: '/about/association',
          icon: Award,
          description: 'Industry bodies and compliance partnerships.',
        },
        {
          label: 'Client List',
          path: '/about/clients',
          icon: ClipboardList,
          description: 'Network marketing companies that run on Apex.',
        },
        {
          label: 'Testimonials',
          path: '/testimonials',
          icon: Quote,
          description: 'Real outcomes, in our clients’ own words.',
        },
        {
          label: 'Migration Services',
          path: '/about/migration',
          icon: ArrowLeftRight,
          description: 'Move off legacy MLM software with zero downtime.',
        },
      ],
    },
  ],
};

export const plansMenu = {
  label: 'MLM Plans',
  path: '/mlm-plans',
  columns: [
    {
      heading: 'Core Plans',
      items: [
        { label: 'Binary Plan', path: '/MLMPlans', icon: GitBranch, description: 'Two-leg structure ' },
        { label: 'Matrix Plan', path: '/Hybrid-plan', icon: Grid3x3, description: 'Fixed-width, fixed-depth forced matrix.' },
        { label: 'Unilevel Plan', path: '/Unilevel-Plans-mlm', icon: Layers, description: 'Unlimited frontline,' },
        { label: 'Generation Plan', path: '/Generation-plan', icon: Network, description: 'Generational depth.' },
        { label: 'Board Plan', path: '/Board-plan', icon: Trophy, description: 'Cyclical board-based ' },
      ],
    },
    {
      heading: 'Specialized Plans',
      items: [
        { label: 'Donation Plan', path: '/Donation-Plan', icon: HandCoins, description: 'Peer-to-peer ' },
        { label: 'Investment Plan', path: '/Investment-plan', icon: TrendingUp, description: 'ROI-driven .' },
        { label: 'Hybrid Plan', path: '/Hybrid-plan', icon: Workflow, description: 'Combine binary, matrix, and unilevel.' },
        { label: 'Monoline Plan', path: '/monoline-plan', icon: ArrowLeftRight, description: 'Single-line sequential' },
      ],
    },
    {
      heading: 'Advanced Plans',
      items: [
        { label: 'Stair Step Plan', path: '/Stair-step-Breakaway-Plan', icon: Shuffle, description: 'Breakaway plan.' },
        { label: 'Repurchase Plan', path: '/Repurchase', icon: Repeat, description: 'recurring repurchase.' },
       ],
    },
  ],
};

export const featuredMenu = {
  label: 'Featured',
  path: '/features',
  columns: [
    {
      heading: 'Platform',
      items: [
        { label: 'Sales & Commission', path: '/features/sales-commission', icon: BarChart3, description: 'Real-time commission engine, multi-plan support.' },
        { label: 'Automation & AI', path: '/features/ai-automation', icon: Bot, description: 'AI-driven payouts, fraud checks, and forecasting.' },
        { label: 'Security & Compliance', path: '/features/security-compliance', icon: ShieldCheck, description: 'Bank-grade encryption and regulatory tooling.' },
        { label: 'Reporting & Analytics', path: '/features/analytics', icon: LineChart, description: 'Live dashboards across every level of the network.' },
      ],
    },
    {
      heading: 'Capabilities',
      items: [
        { label: 'Pro Features', path: '/features/pro', icon: Gem, description: 'Advanced tooling for high-volume networks.' },
        { label: 'AI Chatbot', path: '/features/ai-chatbot', icon: MessageSquareText, description: '24/7 distributor support, multilingual.' },
        { label: 'MLM Mobile App', path: '/features/mobile-app', icon: Smartphone, description: 'Native iOS & Android apps for every distributor.' },
        { label: 'Compliance Tooling', path: '/features/compliance', icon: FileCheck2, description: 'Stay audit-ready across every jurisdiction.' },
      ],
    },
  ],
 
};

export const resourcesMenu = {
  label: 'Resources',
  path: '/resources',
  columns: [
    {
      heading: 'Tools',
      items: [
        { label: 'MLM Calculator', path: '/resources/mlm-calculator', icon: BarChart3, description: 'Model payouts before you launch.' },
        { label: 'Commission Calculator', path: '/resources/commission-calculator', icon: HandCoins, description: 'Estimate distributor earnings by plan type.' },
        { label: 'Binary Calculator', path: '/resources/binary-calculator', icon: GitBranch, description: 'Simulate binary tree balancing scenarios.' },
      ],
    },
    {
      heading: 'Learn',
      items: [
        { label: 'Blog', path: '/blog', icon: ClipboardList, description: 'Industry insights and product updates.' },
        { label: 'Knowledge Base', path: '/resources/knowledge-base', icon: Layers, description: 'Searchable answers to common questions.' },
        { label: 'Documentation', path: '/resources/docs', icon: FileCheck2, description: 'Technical references for integrators.' },
        { label: 'Whitepapers', path: '/resources/whitepapers', icon: Award, description: 'Deep dives into MLM compensation design.' },
      ],
    },
  ],
};

export const servicesMenu = {
  label: 'Services',
  path: '/services',
  columns: [
    {
      heading: 'Build & Launch',
      items: [
        { label: 'Custom MLM Development', path: '/services/custom-development', icon: Settings2, description: 'Bespoke platforms built around your plan.' },
        { label: 'Mobile App Development', path: '/services/mobile-development', icon: Smartphone, description: 'Native distributor apps, iOS & Android.' },
        { label: 'White Label Solutions', path: '/services/white-label', icon: Gem, description: 'Launch under your own brand, fast.' },
      ],
    },
    {
      heading: 'Modernize',
      items: [
        { label: 'Migration Services', path: '/services/migration', icon: ArrowLeftRight, description: 'Switch platforms without losing data.' },
        { label: 'Cloud Deployment', path: '/services/cloud-deployment', icon: Server, description: 'Scalable infrastructure, managed for you.' },
        { label: 'Blockchain & Crypto MLM', path: '/services/crypto-mlm', icon: TrendingUp, description: 'Token-based compensation and wallets.' },
      ],
    },
  ],
};

/** Flat top-level nav used by Navbar.jsx */
export const primaryNav = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about', },
  { label: 'Featured', path: '/features', mega: featuredMenu },
  { label: 'MLM Plans', path: '/MLMPlans', mega: plansMenu },
  { label: 'Blogs', path: '/Blog',  },
  { label: 'Price', path: '/Plans' },
  { label: 'Services', path: '/services',},
  { label: 'Calculator', path: '/Calculator' },
  { label: 'Live Demo', path: '/live_demo' },
   { label: 'Contact', path: '/contact' },
];
